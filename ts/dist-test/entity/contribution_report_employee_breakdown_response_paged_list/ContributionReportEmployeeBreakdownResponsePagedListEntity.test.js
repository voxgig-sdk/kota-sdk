"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ContributionReportEmployeeBreakdownResponsePagedListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOTA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KotaSDK.test();
        const ent = testsdk.ContributionReportEmployeeBreakdownResponsePagedList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOTA_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'contribution_report_employee_breakdown_response_paged_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "contribution_report_employee_breakdown_response_paged_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /contribution_reports/{contribution_report_id}/employee_breakdowns", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "x_platform_id", "or": "x_platform_id", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a", "k": "param", "n": "id", "or": "contribution_report_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/contribution_reports/{contribution_report_id}/employee_breakdowns", "q": { "$action": "employee_breakdowns", "exist": ["id", "page", "page_size", "x_platform_id"] }, "r": { "param": { "contribution_report_id": "id" } }, "s": [{ "lit": "contribution_reports" }, { "var": "id" }, { "lit": "employee_breakdowns" }], "t": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "contribution_report_employee_breakdown_response_paged_list", "name__orig": "contribution_report_employee_breakdown_response_paged_list", "Name": "ContributionReportEmployeeBreakdownResponsePagedList", "name_": "contribution_report_employee_breakdown_response_paged_list", "name-": "contribution-report-employee-breakdown-response-paged-list", "NAME": "CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST", "index$": 4 }, { "active": true, "entity": "contribution_report_employee_breakdown_response_paged_list", "key$": "BasicContributionReportEmployeeBreakdownResponsePagedListFlow", "kind": "basic", "name": "BasicContributionReportEmployeeBreakdownResponsePagedListFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "contribution_report_id": "contribution_report01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "contribution_report_employee_breakdown_response_paged_list_ref01" } }], "index$": 0 }] }, 'ContributionReportEmployeeBreakdownResponsePagedList', { "GET /contribution_reports/{contribution_report_id}/employee_breakdowns": { "protocol": "http", "parameters": [{ "name": "contribution_report_id", "in": "path", "required": true, "schema": { "pattern": "ctr_.+", "type": "string", "example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "index$": 0 }, { "name": "page", "in": "query", "description": "The page of results to return. Defaults to 1 if not provided.", "schema": { "type": "integer", "description": "The page of results to return. Defaults to 1 if not provided.", "format": "int32" }, "index$": 1 }, { "name": "page_size", "in": "query", "description": "The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.", "schema": { "type": "integer", "description": "The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.", "format": "int32" }, "index$": 2 }, { "name": "X-Platform-Id", "in": "header", "description": "The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.", "schema": { "type": "string" }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let contribution_report_employee_breakdown_response_paged_list_ref01_data = Object.values(setup.data.existing.contribution_report_employee_breakdown_response_paged_list)[0];
        // LIST
        const contribution_report_employee_breakdown_response_paged_list_ref01_ent = client.ContributionReportEmployeeBreakdownResponsePagedList();
        const contribution_report_employee_breakdown_response_paged_list_ref01_match = {};
        contribution_report_employee_breakdown_response_paged_list_ref01_match['contribution_report_id'] = setup.idmap['contribution_report01'];
        const contribution_report_employee_breakdown_response_paged_list_ref01_list = (await contribution_report_employee_breakdown_response_paged_list_ref01_ent.list(contribution_report_employee_breakdown_response_paged_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/contribution_report_employee_breakdown_response_paged_list/ContributionReportEmployeeBreakdownResponsePagedListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KotaSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['contribution_report_employee_breakdown_response_paged_list01', 'contribution_report_employee_breakdown_response_paged_list02', 'contribution_report_employee_breakdown_response_paged_list03', 'contribution_report01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST_ENTID': idmap,
        'KOTA_TEST_LIVE': 'FALSE',
        'KOTA_TEST_EXPLAIN': 'FALSE',
        'KOTA_APIKEY': '',
    });
    idmap = env['KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST_ENTID'];
    const live = 'TRUE' === env.KOTA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.KotaSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.KOTA_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.KOTA_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ContributionReportEmployeeBreakdownResponsePagedListEntity.test.js.map