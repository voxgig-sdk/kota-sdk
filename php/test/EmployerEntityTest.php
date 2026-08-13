<?php
declare(strict_types=1);

// Employer entity test

require_once __DIR__ . '/../kota_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class EmployerEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = KotaSDK::test(null, null);
        $ent = $testsdk->Employer(null);
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
                "employer" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = KotaSDK::test($seed, null);
        $seen = iterator_to_array($base->Employer(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = KotaConfig::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = KotaSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Employer(null)->stream("list", null, null) as $item) {
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
        $setup = employer_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "employer." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set KOTA_TEST_EMPLOYER_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $employer_ref01_ent = $client->Employer(null);
        $employer_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.employer"), "employer_ref01"));

        $employer_ref01_data_result = $employer_ref01_ent->create($employer_ref01_data, null);
        $employer_ref01_data = Helpers::to_map(is_object($employer_ref01_data_result) && method_exists($employer_ref01_data_result, 'data_get') ? $employer_ref01_data_result->data_get() : $employer_ref01_data_result);
        $this->assertNotNull($employer_ref01_data);
        $this->assertNotNull($employer_ref01_data["id"]);

        // LIST
        $employer_ref01_match = [];

        $employer_ref01_list_result = $employer_ref01_ent->list($employer_ref01_match, null);
        $this->assertIsArray($employer_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($employer_ref01_list_result),
            ["id" => $employer_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $employer_ref01_data_up0_up = [
            "id" => $employer_ref01_data["id"],
        ];

        $employer_ref01_markdef_up0_name = "legal_name";
        $employer_ref01_markdef_up0_value = "Mark01-employer_ref01_" . $setup["now"];
        $employer_ref01_data_up0_up[$employer_ref01_markdef_up0_name] = $employer_ref01_markdef_up0_value;

        $employer_ref01_resdata_up0_result = $employer_ref01_ent->update($employer_ref01_data_up0_up, null);
        $employer_ref01_resdata_up0 = Helpers::to_map(is_object($employer_ref01_resdata_up0_result) && method_exists($employer_ref01_resdata_up0_result, 'data_get') ? $employer_ref01_resdata_up0_result->data_get() : $employer_ref01_resdata_up0_result);
        $this->assertNotNull($employer_ref01_resdata_up0);
        $this->assertEquals($employer_ref01_resdata_up0["id"], $employer_ref01_data_up0_up["id"]);
        $this->assertEquals($employer_ref01_resdata_up0[$employer_ref01_markdef_up0_name], $employer_ref01_markdef_up0_value);

        // LOAD
        $employer_ref01_match_dt0 = [
            "id" => $employer_ref01_data["id"],
        ];
        $employer_ref01_data_dt0_loaded = $employer_ref01_ent->load($employer_ref01_match_dt0, null);
        $employer_ref01_data_dt0_load_result = Helpers::to_map(is_object($employer_ref01_data_dt0_loaded) && method_exists($employer_ref01_data_dt0_loaded, 'data_get') ? $employer_ref01_data_dt0_loaded->data_get() : $employer_ref01_data_dt0_loaded);
        $this->assertNotNull($employer_ref01_data_dt0_load_result);
        $this->assertEquals($employer_ref01_data_dt0_load_result["id"], $employer_ref01_data["id"]);

    }
}

function employer_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/employer/EmployerTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = KotaSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["employer01", "employer02", "employer03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("KOTA_TEST_EMPLOYER_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "KOTA_TEST_EMPLOYER_ENTID" => $idmap,
        "KOTA_TEST_LIVE" => "FALSE",
        "KOTA_TEST_EXPLAIN" => "FALSE",
        "KOTA_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["KOTA_TEST_EMPLOYER_ENTID"]);
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
