<?php
declare(strict_types=1);

// EmployerHealthInsurancePolicyResponsePagedList direct test

require_once __DIR__ . '/../kota_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;

class EmployerHealthInsurancePolicyResponsePagedListDirectTest extends TestCase
{
    // main.kit.test.live.strict is true (the default is true): a live
    // request that fails, or a live test missing an input it needs,
    // fails the test.
    // An account with no record for a test to read skips it either way.
    private const LIVE_STRICT = true;

    private static function liveOk(array $result): bool
    {
        $status = Helpers::to_int($result["status"] ?? 0);
        return empty($result["err"]) && !empty($result["ok"]) && $status >= 200 && $status < 300;
    }

    public function test_direct_list_employer_health_insurance_policy_response_paged_list(): void
    {
        $setup = employer_health_insurance_policy_response_paged_list_direct_setup([
            ["id" => "direct01"],
            ["id" => "direct02"],
        ]);
        [$_shouldSkip, $_reason] = Runner::is_control_skipped("direct", "direct-list-employer_health_insurance_policy_response_paged_list", $setup["live"] ? "live" : "unit");
        if ($_shouldSkip) {
            $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
            return;
        }
        if ($setup["live"]) {
            foreach (["employer01"] as $_liveKey) {
                if (null === ($setup["idmap"][$_liveKey] ?? null)) {
                    Runner::live_miss(self::LIVE_STRICT, "Live test blocked: needs " . $_liveKey . " via KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_RESPONSE_PAGED_LIST_ENTID");
                }
            }
        }
        $client = $setup["client"];

        $params = [];
        $params["employer_id"] = $setup["live"] ? ($setup["idmap"]["employer01"] ?? null) : "direct01";

        $result = $client->direct([
            "path" => "employers/{employer_id}/health_insurance/policies",
            "method" => "GET",
            "params" => $params,
        ]);
        if ($setup["live"]) {
            if (!self::liveOk($result)) {
                Runner::live_miss(self::LIVE_STRICT, "Live list failed: " . Runner::live_describe($result));
            }
            if (null === Runner::live_list($result["data"] ?? null)) {
                Runner::live_miss(self::LIVE_STRICT, "Live list returned no list: " . Runner::live_describe($result));
            }
            $this->assertIsArray(Runner::live_list($result["data"]));
        } else {
            $this->assertArrayNotHasKey("err", $result);
            $this->assertTrue($result["ok"]);
            $this->assertEquals(200, Helpers::to_int($result["status"]));
            $this->assertIsArray($result["data"]);
            $this->assertCount(2, $result["data"]);
            $this->assertCount(1, $setup["calls"]);
        }
    }

}


function employer_health_insurance_policy_response_paged_list_direct_setup($mockres)
{
    Runner::load_env_local();

    $calls = new \ArrayObject();

    $env = Runner::env_override([
        "KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_RESPONSE_PAGED_LIST_ENTID" => [],
        "KOTA_TEST_LIVE" => "FALSE",
        "KOTA_APIKEY" => "",
    ]);

    $live = $env["KOTA_TEST_LIVE"] === "TRUE";

    if ($live) {
        // Merged so the generated fields win: sdk-test-control.json's
        // test.client.options adds to the live client, it does not redirect it.
        $merged_opts = array_merge(Runner::live_client_options(), [
            "apikey" => $env["KOTA_APIKEY"],
        ]);
        $client = new KotaSDK($merged_opts);
        $idmap = $env["KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_RESPONSE_PAGED_LIST_ENTID"] ?? [];
        return [
            "client" => $client,
            "calls" => $calls,
            "live" => true,
            "idmap" => is_array($idmap) ? $idmap : [],
        ];
    }

    $mock_fetch = function ($url, $init) use ($calls, $mockres) {
        $calls[] = ["url" => $url, "init" => $init];
        return [
            [
                "status" => 200,
                "statusText" => "OK",
                "headers" => [],
                "json" => function () use ($mockres) {
                    if ($mockres !== null) {
                        return $mockres;
                    }
                    return ["id" => "direct01"];
                },
                "body" => "mock",
            ],
            null,
        ];
    };

    $client = new KotaSDK([
        "base" => "http://localhost:8080",
        "system" => [
            "fetch" => $mock_fetch,
        ],
    ]);

    return [
        "client" => $client,
        "calls" => $calls,
        "live" => false,
        "idmap" => [],
    ];
}
