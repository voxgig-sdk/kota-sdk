# EmployeeHealthInsurancePolicy direct test

import json
import pytest

from utility.voxgig_struct import voxgig_struct as vs
from kota_sdk import KotaSDK
from core import helpers
from test import runner


class TestEmployeeHealthInsurancePolicyDirect:

    def test_should_direct_load_employee_health_insurance_policy(self):
        setup = _employee_health_insurance_policy_direct_setup({"id": "direct01"})
        _skip, _reason = runner.is_control_skipped("direct", "direct-load-employee_health_insurance_policy", "live" if setup["live"] else "unit")
        if _skip:
            # pytest already imported at module scope
            pytest.skip(_reason or "skipped via sdk-test-control.json")
            return
        client = setup["client"]

        params = {}
        query = {}
        if setup["live"]:
            params["employee_id"] = "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            params["id"] = "eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a"
        else:
            params["employee_id"] = "direct01"
            params["id"] = "direct02"

        result = client.direct({
            "path": "employees/{employee_id}/health_insurance/policies/{id}",
            "method": "GET",
            "params": params,
            "query": query,
        })
        if setup["live"]:
            # Live mode is lenient: synthetic IDs frequently 4xx. Skip
            # rather than fail when the load endpoint isn't reachable
            # with the IDs we can construct from setup.idmap.
            if result.get("err") is not None:
                pytest.skip(f"load call failed (likely synthetic IDs against live API): {result.get('err')}")
                return
            if not result.get("ok"):
                pytest.skip("load call not ok (likely synthetic IDs against live API)")
                return
            status = helpers.to_int(result["status"])
            if status < 200 or status >= 300:
                pytest.skip(f"expected 2xx status, got {status}")
                return
        else:
            assert result["ok"] is True
            assert helpers.to_int(result["status"]) == 200
            assert result["data"] is not None
            if isinstance(result["data"], dict):
                assert result["data"]["id"] == "direct01"
            assert len(setup["calls"]) == 1



def _employee_health_insurance_policy_direct_setup(mockres):
    runner.load_env_local()

    calls = []

    env = runner.env_override({
        "KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_POLICY_ENTID": {},
        "KOTA_TEST_LIVE": "FALSE",
        "KOTA_APIKEY": "NONE",
    })

    live = env.get("KOTA_TEST_LIVE") == "TRUE"

    if live:
        merged_opts = {
            "apikey": env.get("KOTA_APIKEY"),
        }
        client = KotaSDK(merged_opts)
        return {
            "client": client,
            "calls": calls,
            "live": True,
            "idmap": {},
        }

    def mock_fetch(url, init):
        calls.append({"url": url, "init": init})
        return {
            "status": 200,
            "statusText": "OK",
            "headers": {},
            "json": lambda: mockres if mockres is not None else {"id": "direct01"},
            "body": "mock",
        }, None

    client = KotaSDK({
        "base": "http://localhost:8080",
        "system": {
            "fetch": mock_fetch,
        },
    })

    return {
        "client": client,
        "calls": calls,
        "live": False,
        "idmap": {},
    }
