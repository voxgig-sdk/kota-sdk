<?php
declare(strict_types=1);

// AssociatedPerson entity test

require_once __DIR__ . '/../kota_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class AssociatedPersonEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = KotaSDK::test(null, null);
        $ent = $testsdk->AssociatedPerson(null);
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
                "associated_person" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = KotaSDK::test($seed, null);
        $seen = iterator_to_array($base->AssociatedPerson(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = KotaConfig::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = KotaSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->AssociatedPerson(null)->stream("list", null, null) as $item) {
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
        $setup = associated_person_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "associated_person." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set KOTA_TEST_ASSOCIATED_PERSON_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $associated_person_ref01_ent = $client->AssociatedPerson(null);
        $associated_person_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.associated_person"), "associated_person_ref01"));
        $associated_person_ref01_data["employee_id"] = $setup["idmap"]["employee01"];

        $associated_person_ref01_data_result = $associated_person_ref01_ent->create($associated_person_ref01_data, null);
        $associated_person_ref01_data = Helpers::to_map($associated_person_ref01_data_result);
        $this->assertNotNull($associated_person_ref01_data);
        $this->assertNotNull($associated_person_ref01_data["id"]);

        // LIST
        $associated_person_ref01_match = [
            "employee_id" => $setup["idmap"]["employee01"],
        ];

        $associated_person_ref01_list_result = $associated_person_ref01_ent->list($associated_person_ref01_match, null);
        $this->assertIsArray($associated_person_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($associated_person_ref01_list_result),
            ["id" => $associated_person_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $associated_person_ref01_data_up0_up = [
            "id" => $associated_person_ref01_data["id"],
            "employee_id" => $setup["idmap"]["employee_id"],
        ];

        $associated_person_ref01_markdef_up0_name = "date_of_birth";
        $associated_person_ref01_markdef_up0_value = "Mark01-associated_person_ref01_" . $setup["now"];
        $associated_person_ref01_data_up0_up[$associated_person_ref01_markdef_up0_name] = $associated_person_ref01_markdef_up0_value;

        $associated_person_ref01_resdata_up0_result = $associated_person_ref01_ent->update($associated_person_ref01_data_up0_up, null);
        $associated_person_ref01_resdata_up0 = Helpers::to_map($associated_person_ref01_resdata_up0_result);
        $this->assertNotNull($associated_person_ref01_resdata_up0);
        $this->assertEquals($associated_person_ref01_resdata_up0["id"], $associated_person_ref01_data_up0_up["id"]);
        $this->assertEquals($associated_person_ref01_resdata_up0[$associated_person_ref01_markdef_up0_name], $associated_person_ref01_markdef_up0_value);

        // LOAD
        $associated_person_ref01_match_dt0 = [
            "id" => $associated_person_ref01_data["id"],
        ];
        $associated_person_ref01_data_dt0_loaded = $associated_person_ref01_ent->load($associated_person_ref01_match_dt0, null);
        $associated_person_ref01_data_dt0_load_result = Helpers::to_map($associated_person_ref01_data_dt0_loaded);
        $this->assertNotNull($associated_person_ref01_data_dt0_load_result);
        $this->assertEquals($associated_person_ref01_data_dt0_load_result["id"], $associated_person_ref01_data["id"]);

        // REMOVE
        $associated_person_ref01_match_rm0 = [
            "id" => $associated_person_ref01_data["id"],
        ];
        $associated_person_ref01_ent->remove($associated_person_ref01_match_rm0, null);

        // LIST
        $associated_person_ref01_match_rt0 = [
            "employee_id" => $setup["idmap"]["employee01"],
        ];

        $associated_person_ref01_list_rt0_result = $associated_person_ref01_ent->list($associated_person_ref01_match_rt0, null);
        $this->assertIsArray($associated_person_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($associated_person_ref01_list_rt0_result),
            ["id" => $associated_person_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function associated_person_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/associated_person/AssociatedPersonTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = KotaSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["associated_person01", "associated_person02", "associated_person03", "employee01", "employee02", "employee03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("KOTA_TEST_ASSOCIATED_PERSON_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "KOTA_TEST_ASSOCIATED_PERSON_ENTID" => $idmap,
        "KOTA_TEST_LIVE" => "FALSE",
        "KOTA_TEST_EXPLAIN" => "FALSE",
        "KOTA_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["KOTA_TEST_ASSOCIATED_PERSON_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["employee_id"])) {
        $idmap_resolved["employee_id"] = $idmap_resolved["employee01"];
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
