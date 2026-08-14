# Plan entity test

import json
import os
import time

import pytest

from kota_sdk.utility.voxgig_struct import voxgig_struct as vs
from kota_sdk import KotaSDK
from kota_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestPlanEntity:

    def test_should_create_instance(self):
        testsdk = KotaSDK.test(None, None)
        ent = testsdk.Plan(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "plan": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = KotaSDK.test(seed, None)
        seen = list(base.Plan(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from kota_sdk.config import shared_config
        cfg = shared_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = KotaSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Plan(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _plan_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "plan." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set KOTA_TEST_PLAN_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        plan_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.plan")))
        plan_ref01_data = None
        if len(plan_ref01_data_raw) > 0:
            plan_ref01_data = helpers.to_map(plan_ref01_data_raw[0][1])

        # LIST
        plan_ref01_ent = client.Plan(None)
        plan_ref01_match = {}

        plan_ref01_list_result = plan_ref01_ent.list(plan_ref01_match, None)
        assert isinstance(plan_ref01_list_result, list)

        # LOAD
        plan_ref01_match_dt0 = {
            "id": plan_ref01_data["id"],
        }
        plan_ref01_data_dt0_loaded = plan_ref01_ent.load(plan_ref01_match_dt0, None)
        plan_ref01_data_dt0_load_result = helpers.to_map(runner.entity_data(plan_ref01_data_dt0_loaded))
        assert plan_ref01_data_dt0_load_result is not None
        assert plan_ref01_data_dt0_load_result["id"] == plan_ref01_data["id"]



def _plan_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/plan/PlanTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = KotaSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["plan01", "plan02", "plan03"],
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
        "KOTA_TEST_PLAN_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "KOTA_TEST_PLAN_ENTID": idmap,
        "KOTA_TEST_LIVE": "FALSE",
        "KOTA_TEST_EXPLAIN": "FALSE",
        "KOTA_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("KOTA_TEST_PLAN_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

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
