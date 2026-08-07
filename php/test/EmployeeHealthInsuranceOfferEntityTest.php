<?php
declare(strict_types=1);

// EmployeeHealthInsuranceOffer entity test

require_once __DIR__ . '/../kota_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class EmployeeHealthInsuranceOfferEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = KotaSDK::test(null, null);
        $ent = $testsdk->EmployeeHealthInsuranceOffer(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = employee_health_insurance_offer_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "employee_health_insurance_offer." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_OFFER_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $employee_health_insurance_offer_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.employee_health_insurance_offer")));
        $employee_health_insurance_offer_ref01_data = null;
        if (count($employee_health_insurance_offer_ref01_data_raw) > 0) {
            $employee_health_insurance_offer_ref01_data = Helpers::to_map($employee_health_insurance_offer_ref01_data_raw[0][1]);
        }

        // LOAD
        $employee_health_insurance_offer_ref01_ent = $client->EmployeeHealthInsuranceOffer(null);
        $employee_health_insurance_offer_ref01_match_dt0 = [
            "id" => $employee_health_insurance_offer_ref01_data["id"],
        ];
        $employee_health_insurance_offer_ref01_data_dt0_loaded = $employee_health_insurance_offer_ref01_ent->load($employee_health_insurance_offer_ref01_match_dt0, null);
        $employee_health_insurance_offer_ref01_data_dt0_load_result = Helpers::to_map($employee_health_insurance_offer_ref01_data_dt0_loaded);
        $this->assertNotNull($employee_health_insurance_offer_ref01_data_dt0_load_result);
        $this->assertEquals($employee_health_insurance_offer_ref01_data_dt0_load_result["id"], $employee_health_insurance_offer_ref01_data["id"]);

    }
}

function employee_health_insurance_offer_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/employee_health_insurance_offer/EmployeeHealthInsuranceOfferTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = KotaSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["employee_health_insurance_offer01", "employee_health_insurance_offer02", "employee_health_insurance_offer03", "employee01", "employee02", "employee03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_OFFER_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_OFFER_ENTID" => $idmap,
        "KOTA_TEST_LIVE" => "FALSE",
        "KOTA_TEST_EXPLAIN" => "FALSE",
        "KOTA_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_OFFER_ENTID"]);
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
