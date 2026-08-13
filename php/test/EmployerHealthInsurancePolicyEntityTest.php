<?php
declare(strict_types=1);

// EmployerHealthInsurancePolicy entity test

require_once __DIR__ . '/../kota_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class EmployerHealthInsurancePolicyEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = KotaSDK::test(null, null);
        $ent = $testsdk->EmployerHealthInsurancePolicy(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = employer_health_insurance_policy_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "employer_health_insurance_policy." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $employer_health_insurance_policy_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.employer_health_insurance_policy")));
        $employer_health_insurance_policy_ref01_data = null;
        if (count($employer_health_insurance_policy_ref01_data_raw) > 0) {
            $employer_health_insurance_policy_ref01_data = Helpers::to_map($employer_health_insurance_policy_ref01_data_raw[0][1]);
        }

        // LOAD
        $employer_health_insurance_policy_ref01_ent = $client->EmployerHealthInsurancePolicy(null);
        $employer_health_insurance_policy_ref01_match_dt0 = [
            "id" => $employer_health_insurance_policy_ref01_data["id"],
        ];
        $employer_health_insurance_policy_ref01_data_dt0_loaded = $employer_health_insurance_policy_ref01_ent->load($employer_health_insurance_policy_ref01_match_dt0, null);
        $employer_health_insurance_policy_ref01_data_dt0_load_result = Helpers::to_map(is_object($employer_health_insurance_policy_ref01_data_dt0_loaded) && method_exists($employer_health_insurance_policy_ref01_data_dt0_loaded, 'data_get') ? $employer_health_insurance_policy_ref01_data_dt0_loaded->data_get() : $employer_health_insurance_policy_ref01_data_dt0_loaded);
        $this->assertNotNull($employer_health_insurance_policy_ref01_data_dt0_load_result);
        $this->assertEquals($employer_health_insurance_policy_ref01_data_dt0_load_result["id"], $employer_health_insurance_policy_ref01_data["id"]);

    }
}

function employer_health_insurance_policy_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/employer_health_insurance_policy/EmployerHealthInsurancePolicyTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = KotaSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["employer_health_insurance_policy01", "employer_health_insurance_policy02", "employer_health_insurance_policy03", "employer01", "employer02", "employer03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_ENTID" => $idmap,
        "KOTA_TEST_LIVE" => "FALSE",
        "KOTA_TEST_EXPLAIN" => "FALSE",
        "KOTA_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_ENTID"]);
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
