# ContributionReportEmployeeBreakdownResponsePagedList entity test

import json
import os
import time

import pytest

from kota_sdk.utility.voxgig_struct import voxgig_struct as vs
from kota_sdk import KotaSDK
from kota_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestContributionReportEmployeeBreakdownResponsePagedListEntity:

    def test_should_create_instance(self):
        testsdk = KotaSDK.test(None, None)
        ent = testsdk.ContributionReportEmployeeBreakdownResponsePagedList(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "contribution_report_employee_breakdown_response_paged_list": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = KotaSDK.test(seed, None)
        seen = list(base.ContributionReportEmployeeBreakdownResponsePagedList(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from kota_sdk.config import make_config
        cfg = make_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = KotaSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.ContributionReportEmployeeBreakdownResponsePagedList(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _contribution_report_employee_breakdown_response_paged_list_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "contribution_report_employee_breakdown_response_paged_list." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        contribution_report_employee_breakdown_response_paged_list_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.contribution_report_employee_breakdown_response_paged_list")))
        contribution_report_employee_breakdown_response_paged_list_ref01_data = None
        if len(contribution_report_employee_breakdown_response_paged_list_ref01_data_raw) > 0:
            contribution_report_employee_breakdown_response_paged_list_ref01_data = helpers.to_map(contribution_report_employee_breakdown_response_paged_list_ref01_data_raw[0][1])

        # LIST
        contribution_report_employee_breakdown_response_paged_list_ref01_ent = client.ContributionReportEmployeeBreakdownResponsePagedList(None)
        contribution_report_employee_breakdown_response_paged_list_ref01_match = {
            "contribution_report_id": setup["idmap"]["contribution_report01"],
        }

        contribution_report_employee_breakdown_response_paged_list_ref01_list_result = contribution_report_employee_breakdown_response_paged_list_ref01_ent.list(contribution_report_employee_breakdown_response_paged_list_ref01_match, None)
        assert isinstance(contribution_report_employee_breakdown_response_paged_list_ref01_list_result, list)



def _contribution_report_employee_breakdown_response_paged_list_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/contribution_report_employee_breakdown_response_paged_list/ContributionReportEmployeeBreakdownResponsePagedListTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = KotaSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["contribution_report_employee_breakdown_response_paged_list01", "contribution_report_employee_breakdown_response_paged_list02", "contribution_report_employee_breakdown_response_paged_list03", "contribution_report01"],
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
        "KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST_ENTID": idmap,
        "KOTA_TEST_LIVE": "FALSE",
        "KOTA_TEST_EXPLAIN": "FALSE",
        "KOTA_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST_ENTID"))
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
