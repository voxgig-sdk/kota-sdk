# AssociatedPersonEligibilityResponsePagedList direct test

import json
import pytest

from kota_sdk.utility.voxgig_struct import voxgig_struct as vs
from kota_sdk import KotaSDK
from kota_sdk.core import helpers
from test import runner


class TestAssociatedPersonEligibilityResponsePagedListDirect:

    def test_should_direct_list_associated_person_eligibility_response_paged_list(self):
        setup = _associated_person_eligibility_response_paged_list_direct_setup([
            {"id": "direct01"},
            {"id": "direct02"},
        ])
        _skip, _reason = runner.is_control_skipped("direct", "direct-list-associated_person_eligibility_response_paged_list", "live" if setup["live"] else "unit")
        if _skip:
            # pytest already imported at module scope
            pytest.skip(_reason or "skipped via sdk-test-control.json")
            return
        if setup["live"]:
            for _live_key in ["dependents_management_intent01"]:
                if setup["idmap"].get(_live_key) is None:
                    # pytest already imported at module scope
                    pytest.skip(f"live test needs {_live_key} via *_ENTID env var (synthetic IDs only)")
                    return

        client = setup["client"]

        params = {}
        if setup["live"]:
            params["dependents_management_intent_id"] = setup["idmap"]["dependents_management_intent01"]
        else:
            params["dependents_management_intent_id"] = "direct01"

        result = client.direct({
            "path": "dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility",
            "method": "GET",
            "params": params,
        })
        if setup["live"]:
            # Live mode is lenient: synthetic IDs frequently 4xx and the
            # list-response shape varies wildly across public APIs. Skip
            # rather than fail when the call doesn't return a usable list.
            if result.get("err") is not None:
                pytest.skip(f"list call failed (likely synthetic IDs against live API): {result.get('err')}")
                return
            if not result.get("ok"):
                pytest.skip("list call not ok (likely synthetic IDs against live API)")
                return
            status = helpers.to_int(result["status"])
            if status < 200 or status >= 300:
                pytest.skip(f"expected 2xx status, got {status}")
                return
        else:
            assert result["ok"] is True
            assert helpers.to_int(result["status"]) == 200
            assert isinstance(result["data"], list)
            assert len(result["data"]) == 2
            assert len(setup["calls"]) == 1



def _associated_person_eligibility_response_paged_list_direct_setup(mockres):
    runner.load_env_local()

    calls = []

    env = runner.env_override({
        "KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID": {},
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
