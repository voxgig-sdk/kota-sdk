<?php
declare(strict_types=1);

// GroupPolicyIntent entity test

require_once __DIR__ . '/../kota_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class GroupPolicyIntentEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = KotaSDK::test(null, null);
        $ent = $testsdk->GroupPolicyIntent(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "group_policy_intent" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = KotaSDK::test($seed, null);
        $seen = iterator_to_array($base->GroupPolicyIntent(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = KotaConfig::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = KotaSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->GroupPolicyIntent(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = group_policy_intent_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "group_policy_intent." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set KOTA_TEST_GROUP_POLICY_INTENT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $group_policy_intent_ref01_ent = $client->GroupPolicyIntent(null);
        $group_policy_intent_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.group_policy_intent"), "group_policy_intent_ref01"));

        $group_policy_intent_ref01_data_result = $group_policy_intent_ref01_ent->create($group_policy_intent_ref01_data, null);
        $group_policy_intent_ref01_data = Helpers::to_map($group_policy_intent_ref01_data_result);
        $this->assertNotNull($group_policy_intent_ref01_data);
        $this->assertNotNull($group_policy_intent_ref01_data["id"]);

        // LIST
        $group_policy_intent_ref01_match = [];

        $group_policy_intent_ref01_list_result = $group_policy_intent_ref01_ent->list($group_policy_intent_ref01_match, null);
        $this->assertIsArray($group_policy_intent_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($group_policy_intent_ref01_list_result),
            ["id" => $group_policy_intent_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // LOAD
        $group_policy_intent_ref01_match_dt0 = [
            "id" => $group_policy_intent_ref01_data["id"],
        ];
        $group_policy_intent_ref01_data_dt0_loaded = $group_policy_intent_ref01_ent->load($group_policy_intent_ref01_match_dt0, null);
        $group_policy_intent_ref01_data_dt0_load_result = Helpers::to_map($group_policy_intent_ref01_data_dt0_loaded);
        $this->assertNotNull($group_policy_intent_ref01_data_dt0_load_result);
        $this->assertEquals($group_policy_intent_ref01_data_dt0_load_result["id"], $group_policy_intent_ref01_data["id"]);

    }
}

function group_policy_intent_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/group_policy_intent/GroupPolicyIntentTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = KotaSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["group_policy_intent01", "group_policy_intent02", "group_policy_intent03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("KOTA_TEST_GROUP_POLICY_INTENT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "KOTA_TEST_GROUP_POLICY_INTENT_ENTID" => $idmap,
        "KOTA_TEST_LIVE" => "FALSE",
        "KOTA_TEST_EXPLAIN" => "FALSE",
        "KOTA_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["KOTA_TEST_GROUP_POLICY_INTENT_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["KOTA_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["KOTA_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new KotaSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["KOTA_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["KOTA_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
