<?php
declare(strict_types=1);

// DependentsManagementIntent entity test

require_once __DIR__ . '/../kota_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class DependentsManagementIntentEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = KotaSDK::test(null, null);
        $ent = $testsdk->DependentsManagementIntent(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = dependents_management_intent_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "dependents_management_intent." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set KOTA_TEST_DEPENDENTS_MANAGEMENT_INTENT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $dependents_management_intent_ref01_ent = $client->DependentsManagementIntent(null);
        $dependents_management_intent_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.dependents_management_intent"), "dependents_management_intent_ref01"));
        $dependents_management_intent_ref01_data["dependents_management_intent_id"] = $setup["idmap"]["dependents_management_intent01"];

        $dependents_management_intent_ref01_data_result = $dependents_management_intent_ref01_ent->create($dependents_management_intent_ref01_data, null);
        $dependents_management_intent_ref01_data = Helpers::to_map(is_object($dependents_management_intent_ref01_data_result) && method_exists($dependents_management_intent_ref01_data_result, 'data_get') ? $dependents_management_intent_ref01_data_result->data_get() : $dependents_management_intent_ref01_data_result);
        $this->assertNotNull($dependents_management_intent_ref01_data);
        $this->assertNotNull($dependents_management_intent_ref01_data["id"]);

        // LOAD
        $dependents_management_intent_ref01_match_dt0 = [
            "id" => $dependents_management_intent_ref01_data["id"],
        ];
        $dependents_management_intent_ref01_data_dt0_loaded = $dependents_management_intent_ref01_ent->load($dependents_management_intent_ref01_match_dt0, null);
        $dependents_management_intent_ref01_data_dt0_load_result = Helpers::to_map(is_object($dependents_management_intent_ref01_data_dt0_loaded) && method_exists($dependents_management_intent_ref01_data_dt0_loaded, 'data_get') ? $dependents_management_intent_ref01_data_dt0_loaded->data_get() : $dependents_management_intent_ref01_data_dt0_loaded);
        $this->assertNotNull($dependents_management_intent_ref01_data_dt0_load_result);
        $this->assertEquals($dependents_management_intent_ref01_data_dt0_load_result["id"], $dependents_management_intent_ref01_data["id"]);

    }
}

function dependents_management_intent_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/dependents_management_intent/DependentsManagementIntentTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = KotaSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["dependents_management_intent01", "dependents_management_intent02", "dependents_management_intent03", "enrolment_intent01", "enrolment_intent02", "enrolment_intent03", "policy01", "policy02", "policy03", "policy_amendment_intent01", "policy_amendment_intent02", "policy_amendment_intent03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("KOTA_TEST_DEPENDENTS_MANAGEMENT_INTENT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "KOTA_TEST_DEPENDENTS_MANAGEMENT_INTENT_ENTID" => $idmap,
        "KOTA_TEST_LIVE" => "FALSE",
        "KOTA_TEST_EXPLAIN" => "FALSE",
        "KOTA_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["KOTA_TEST_DEPENDENTS_MANAGEMENT_INTENT_ENTID"]);
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
