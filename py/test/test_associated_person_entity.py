# AssociatedPerson entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from kota_sdk import KotaSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestAssociatedPersonEntity:

    def test_should_create_instance(self):
        testsdk = KotaSDK.test(None, None)
        ent = testsdk.AssociatedPerson(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "associated_person": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = KotaSDK.test(seed, None)
        seen = list(base.AssociatedPerson(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from config import make_config
        cfg = make_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = KotaSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.AssociatedPerson(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _associated_person_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "associated_person." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set KOTA_TEST_ASSOCIATED_PERSON_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        associated_person_ref01_ent = client.AssociatedPerson(None)
        associated_person_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.associated_person"), "associated_person_ref01"))
        associated_person_ref01_data["employee_id"] = setup["idmap"]["employee01"]

        associated_person_ref01_data = helpers.to_map(associated_person_ref01_ent.create(associated_person_ref01_data, None))
        assert associated_person_ref01_data is not None
        assert associated_person_ref01_data["id"] is not None

        # LIST
        associated_person_ref01_match = {
            "employee_id": setup["idmap"]["employee01"],
        }

        associated_person_ref01_list_result = associated_person_ref01_ent.list(associated_person_ref01_match, None)
        assert isinstance(associated_person_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(associated_person_ref01_list_result),
            {"id": associated_person_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        associated_person_ref01_data_up0_up = {
            "id": associated_person_ref01_data["id"],
            "employee_id": setup["idmap"]["employee_id"],
        }

        associated_person_ref01_markdef_up0_name = "date_of_birth"
        associated_person_ref01_markdef_up0_value = "Mark01-associated_person_ref01_" + str(setup["now"])
        associated_person_ref01_data_up0_up[associated_person_ref01_markdef_up0_name] = associated_person_ref01_markdef_up0_value

        associated_person_ref01_resdata_up0 = helpers.to_map(associated_person_ref01_ent.update(associated_person_ref01_data_up0_up, None))
        assert associated_person_ref01_resdata_up0 is not None
        assert associated_person_ref01_resdata_up0["id"] == associated_person_ref01_data_up0_up["id"]
        assert associated_person_ref01_resdata_up0[associated_person_ref01_markdef_up0_name] == associated_person_ref01_markdef_up0_value

        # LOAD
        associated_person_ref01_match_dt0 = {
            "id": associated_person_ref01_data["id"],
        }
        associated_person_ref01_data_dt0_loaded = associated_person_ref01_ent.load(associated_person_ref01_match_dt0, None)
        associated_person_ref01_data_dt0_load_result = helpers.to_map(associated_person_ref01_data_dt0_loaded)
        assert associated_person_ref01_data_dt0_load_result is not None
        assert associated_person_ref01_data_dt0_load_result["id"] == associated_person_ref01_data["id"]

        # REMOVE
        associated_person_ref01_match_rm0 = {
            "id": associated_person_ref01_data["id"],
        }
        associated_person_ref01_ent.remove(associated_person_ref01_match_rm0, None)

        # LIST
        associated_person_ref01_match_rt0 = {
            "employee_id": setup["idmap"]["employee01"],
        }

        associated_person_ref01_list_rt0_result = associated_person_ref01_ent.list(associated_person_ref01_match_rt0, None)
        assert isinstance(associated_person_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(associated_person_ref01_list_rt0_result),
            {"id": associated_person_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _associated_person_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/associated_person/AssociatedPersonTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = KotaSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["associated_person01", "associated_person02", "associated_person03", "employee01", "employee02", "employee03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "KOTA_TEST_ASSOCIATED_PERSON_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "KOTA_TEST_ASSOCIATED_PERSON_ENTID": idmap,
        "KOTA_TEST_LIVE": "FALSE",
        "KOTA_TEST_EXPLAIN": "FALSE",
        "KOTA_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("KOTA_TEST_ASSOCIATED_PERSON_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("employee_id") is None:
        idmap_resolved["employee_id"] = idmap_resolved.get("employee01")

    if env.get("KOTA_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
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
