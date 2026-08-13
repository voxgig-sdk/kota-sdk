<?php
declare(strict_types=1);

// WebhookEndpoint entity test

require_once __DIR__ . '/../kota_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class WebhookEndpointEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = KotaSDK::test(null, null);
        $ent = $testsdk->WebhookEndpoint(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = webhook_endpoint_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "webhook_endpoint." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set KOTA_TEST_WEBHOOK_ENDPOINT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $webhook_endpoint_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.webhook_endpoint")));
        $webhook_endpoint_ref01_data = null;
        if (count($webhook_endpoint_ref01_data_raw) > 0) {
            $webhook_endpoint_ref01_data = Helpers::to_map($webhook_endpoint_ref01_data_raw[0][1]);
        }

        // LOAD
        $webhook_endpoint_ref01_ent = $client->WebhookEndpoint(null);
        $webhook_endpoint_ref01_match_dt0 = [
            "id" => $webhook_endpoint_ref01_data["id"],
        ];
        $webhook_endpoint_ref01_data_dt0_loaded = $webhook_endpoint_ref01_ent->load($webhook_endpoint_ref01_match_dt0, null);
        $webhook_endpoint_ref01_data_dt0_load_result = Helpers::to_map(is_object($webhook_endpoint_ref01_data_dt0_loaded) && method_exists($webhook_endpoint_ref01_data_dt0_loaded, 'data_get') ? $webhook_endpoint_ref01_data_dt0_loaded->data_get() : $webhook_endpoint_ref01_data_dt0_loaded);
        $this->assertNotNull($webhook_endpoint_ref01_data_dt0_load_result);
        $this->assertEquals($webhook_endpoint_ref01_data_dt0_load_result["id"], $webhook_endpoint_ref01_data["id"]);

    }
}

function webhook_endpoint_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/webhook_endpoint/WebhookEndpointTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = KotaSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["webhook_endpoint01", "webhook_endpoint02", "webhook_endpoint03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("KOTA_TEST_WEBHOOK_ENDPOINT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "KOTA_TEST_WEBHOOK_ENDPOINT_ENTID" => $idmap,
        "KOTA_TEST_LIVE" => "FALSE",
        "KOTA_TEST_EXPLAIN" => "FALSE",
        "KOTA_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["KOTA_TEST_WEBHOOK_ENDPOINT_ENTID"]);
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
