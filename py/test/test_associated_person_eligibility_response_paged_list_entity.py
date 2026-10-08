# AssociatedPersonEligibilityResponsePagedList entity test

import json
import os
import time

import pytest

from kota_sdk.utility.voxgig_struct import voxgig_struct as vs
from kota_sdk import KotaSDK
from kota_sdk.core import helpers
from kota_sdk.config import shared_config
from kota_sdk.feature.base_feature import KotaBaseFeature

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner



# main.kit.test.live.strict is true (the default is true): a live
# request that fails, or a live test missing an input it needs,
# fails the test.
# An account with no record for a test to read skips it either way.
LIVE_STRICT = True


class TestAssociatedPersonEligibilityResponsePagedListEntity:

    def test_should_create_instance(self):
        testsdk = KotaSDK.test(None, None)
        ent = testsdk.AssociatedPersonEligibilityResponsePagedList(None)
        assert ent is not None

    def test_should_refuse_an_invalid_request(self):
        if "validate" not in (shared_config().get("feature") or {}):
            pytest.skip("feature not present in this SDK: validate")
        client = KotaSDK.test(
            None, {"feature": {"validate": {"active": True}}})
        with pytest.raises(Exception) as err:
            client.AssociatedPersonEligibilityResponsePagedList(None).list({"dependents_management_intent_id": 1}, None)
        assert "validate_failed" == getattr(err.value, "code", None)

    def test_should_run_basic_flow(self):
        setup = _associated_person_eligibility_response_paged_list_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "associated_person_eligibility_response_paged_list." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        if setup["live"]:
            for _live_key in ["dependents_management_intent01"]:
                if setup.get("synthetic_only") or setup["idmap"].get(_live_key) is None:
                    runner.live_miss(LIVE_STRICT, f"Live entity test blocked: needs {_live_key} via KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        associated_person_eligibility_response_paged_list_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.associated_person_eligibility_response_paged_list")))
        associated_person_eligibility_response_paged_list_ref01_data = None
        if len(associated_person_eligibility_response_paged_list_ref01_data_raw) > 0:
            associated_person_eligibility_response_paged_list_ref01_data = helpers.to_map(associated_person_eligibility_response_paged_list_ref01_data_raw[0][1])

        # LIST
        associated_person_eligibility_response_paged_list_ref01_ent = client.AssociatedPersonEligibilityResponsePagedList(None)
        associated_person_eligibility_response_paged_list_ref01_match = {
            "dependents_management_intent_id": setup["idmap"]["dependents_management_intent01"],
        }

        associated_person_eligibility_response_paged_list_ref01_list_result = associated_person_eligibility_response_paged_list_ref01_ent.list(associated_person_eligibility_response_paged_list_ref01_match, None)
        assert isinstance(associated_person_eligibility_response_paged_list_ref01_list_result, list)



def _associated_person_eligibility_response_paged_list_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/associated_person_eligibility_response_paged_list/AssociatedPersonEligibilityResponsePagedListTestData.json")
    with open(entity_data_file, "r", encoding="utf-8") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = KotaSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["associated_person_eligibility_response_paged_list01", "associated_person_eligibility_response_paged_list02", "associated_person_eligibility_response_paged_list03", "dependents_management_intent01", "dependents_management_intent02", "dependents_management_intent03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Whether *_ENTID supplied the idmap, read before env_override consumes
    # it: without it, the ids a live flow binds are the fixture's synthetic ones.
    _entid_env_raw = os.environ.get(
        "KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID": idmap,
        "KOTA_TEST_LIVE": "FALSE",
        "KOTA_TEST_EXPLAIN": "FALSE",
        "KOTA_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("KOTA_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
            {
                "apikey": env.get("KOTA_APIKEY"),
            },
            extra or {},
        ])
        client = KotaSDK(helpers.to_map(merged_opts))

    _live = env.get("KOTA_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("KOTA_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
