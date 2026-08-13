<?php
declare(strict_types=1);

// CreateHostedSessionToken entity test

require_once __DIR__ . '/../kota_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class CreateHostedSessionTokenEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = KotaSDK::test(null, null);
        $ent = $testsdk->CreateHostedSessionToken(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = create_hosted_session_token_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "create_hosted_session_token." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set KOTA_TEST_CREATE_HOSTED_SESSION_TOKEN_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $create_hosted_session_token_ref01_ent = $client->CreateHostedSessionToken(null);
        $create_hosted_session_token_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.create_hosted_session_token"), "create_hosted_session_token_ref01"));

        $create_hosted_session_token_ref01_data_result = $create_hosted_session_token_ref01_ent->create($create_hosted_session_token_ref01_data, null);
        $create_hosted_session_token_ref01_data = Helpers::to_map(is_object($create_hosted_session_token_ref01_data_result) && method_exists($create_hosted_session_token_ref01_data_result, 'data_get') ? $create_hosted_session_token_ref01_data_result->data_get() : $create_hosted_session_token_ref01_data_result);
        $this->assertNotNull($create_hosted_session_token_ref01_data);

    }
}

function create_hosted_session_token_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/create_hosted_session_token/CreateHostedSessionTokenTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = KotaSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["create_hosted_session_token01", "create_hosted_session_token02", "create_hosted_session_token03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("KOTA_TEST_CREATE_HOSTED_SESSION_TOKEN_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "KOTA_TEST_CREATE_HOSTED_SESSION_TOKEN_ENTID" => $idmap,
        "KOTA_TEST_LIVE" => "FALSE",
        "KOTA_TEST_EXPLAIN" => "FALSE",
        "KOTA_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["KOTA_TEST_CREATE_HOSTED_SESSION_TOKEN_ENTID"]);
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
