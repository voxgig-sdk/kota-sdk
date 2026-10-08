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
(0, node_test_1.describe)('ContributionReportEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOTA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KotaSDK.test();
        const ent = testsdk.ContributionReport();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('contribution_report hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.KotaSDK.test(offline).ContributionReport().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.KotaSDK.test(offline).ContributionReport()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.KotaSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.ContributionReport().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.KotaSDK.test().ContributionReport().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.KotaSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.ContributionReport().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.ContributionReport().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.KotaSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.ContributionReport().list({ "employer_id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOTA_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'contribution_report.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": true, "sh": "Date and time the report was created", "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "employer_id": { "a": true, "h": "Employer Id", "n": "employer_id", "r": true, "sh": "Unique identifier of the employer for which the report is created", "t": "`$STRING`", "key$": "employer_id", "index$": 1 }, "external_customer_id": { "a": true, "h": "External Customer Id", "n": "external_customer_id", "r": false, "sh": "Unique identifier of the customer for which the report is created.", "t": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "key$": "external_customer_id", "index$": 2 }, "finalized_at": { "a": true, "fo": "date-time", "h": "Finalized At", "n": "finalized_at", "r": false, "sh": "Date and time the report was finalized, if applicable", "t": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "key$": "finalized_at", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the contribution report", "t": "`$STRING`", "key$": "id", "index$": 4 }, "last_updated_at": { "a": true, "fo": "date-time", "h": "Last Updated At", "n": "last_updated_at", "r": true, "sh": "Date and time of the last update to the report", "t": "`$STRING`", "key$": "last_updated_at", "index$": 5 }, "object": { "a": true, "h": "Object", "n": "object", "r": false, "ro": true, "sh": "The object type", "t": "`$STRING`", "key$": "object", "index$": 6 }, "period": { "a": true, "h": "Period", "n": "period", "r": true, "sh": "Period covered by the contribution report", "t": "`$ANY`", "key$": "period", "index$": 7 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "Current status of the contribution report", "t": "`$STRING`", "key$": "status", "index$": 8 } }, "id": { "field": "id", "name": "id" }, "name": "contribution_report", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /contribution_reports/{contribution_report_id}/finalize", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "x_platform_id", "or": "X-Platform-Id", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a", "k": "param", "n": "id", "or": "contribution_report_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/contribution_reports/{contribution_report_id}/finalize", "q": { "$action": "finalize", "exist": ["id"] }, "r": { "param": { "contribution_report_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "contribution_reports" }, { "var": "id" }, { "lit": "finalize" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /contribution_reports", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "x_platform_id", "or": "X-Platform-Id", "r": false, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a", "k": "query", "n": "employer_id", "or": "employer_id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "external_customer_id", "or": "external_customer_id", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "month", "or": "month", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "year", "or": "year", "r": false, "t": "`$INTEGER`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/contribution_reports", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "contribution_reports" }], "t": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /contribution_reports/{contribution_report_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "x_platform_id", "or": "X-Platform-Id", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a", "k": "param", "n": "id", "or": "contribution_report_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/contribution_reports/{contribution_report_id}", "q": { "exist": ["id"] }, "r": { "param": { "contribution_report_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "contribution_reports" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "contribution_report", "name__orig": "contribution_report", "Name": "ContributionReport", "name_": "contribution_report", "name-": "contribution-report", "NAME": "CONTRIBUTION_REPORT", "index$": 2 }, { "active": true, "entity": "contribution_report", "key$": "BasicContributionReportFlow", "kind": "basic", "name": "BasicContributionReportFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": { "ref": "contribution_report_ref01" }, "m": { "contribution_report_id": "contribution_report01" }, "o": "create", "s": [], "v": [], "unreachable": true }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "contribution_report_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "contribution_report_ref01", "srcdatavar": "contribution_report_ref01_data", "suffix": "_dt0" }, "m": { "id": "contribution_report01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-contribution_report_ref01" } }], "index$": 1 }] }, 'ContributionReport', { "POST /contribution_reports/{contribution_report_id}/finalize": { "protocol": "http", "parameters": [{ "name": "contribution_report_id", "in": "path", "required": true, "schema": { "pattern": "ctr_.+", "type": "string", "example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "index$": 0 }, { "name": "X-Platform-Id", "in": "header", "description": "The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.", "schema": { "type": "string" }, "index$": 1 }] }, "GET /contribution_reports": { "protocol": "http", "parameters": [{ "name": "employer_id", "in": "query", "description": "Unique identifier of the employer for filtering reports", "schema": { "pattern": "er_.+", "type": "string", "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "index$": 0 }, { "name": "status", "in": "query", "description": "Multiple values can be provided by separating them with a comma. Allowed values are: `open`, `finalized`.", "schema": { "type": "string" }, "index$": 1 }, { "name": "month", "in": "query", "description": "Month for filtering reports, used together with `year` (MM format)", "schema": { "type": "integer", "format": "int32" }, "index$": 2 }, { "name": "year", "in": "query", "description": "Year for filtering reports, can be used standalone or with `month` (YYYY format)", "schema": { "type": "integer", "format": "int32" }, "index$": 3 }, { "name": "external_customer_id", "in": "query", "description": "Unique identifier of the customer for EoR platforms, used to filter reports for a logical employer", "schema": { "type": "string" }, "index$": 4 }, { "name": "page", "in": "query", "description": "The page of results to return. Defaults to 1 if not provided.", "schema": { "type": "integer", "description": "The page of results to return. Defaults to 1 if not provided.", "format": "int32" }, "index$": 5 }, { "name": "page_size", "in": "query", "description": "The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.", "schema": { "type": "integer", "description": "The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.", "format": "int32" }, "index$": 6 }, { "name": "X-Platform-Id", "in": "header", "description": "The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.", "schema": { "type": "string" }, "index$": 7 }] }, "GET /contribution_reports/{contribution_report_id}": { "protocol": "http", "parameters": [{ "name": "contribution_report_id", "in": "path", "required": true, "schema": { "pattern": "ctr_.+", "type": "string", "example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "index$": 0 }, { "name": "X-Platform-Id", "in": "header", "description": "The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.", "schema": { "type": "string" }, "index$": 1 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let contribution_report_ref01_data = Object.values(setup.data.existing.contribution_report)[0];
        // LIST
        const contribution_report_ref01_ent = client.ContributionReport();
        const contribution_report_ref01_match = {};
        const contribution_report_ref01_list = (await contribution_report_ref01_ent.list(contribution_report_ref01_match)).map((e) => e.data());
        // LOAD
        const contribution_report_ref01_match_dt0 = {};
        contribution_report_ref01_match_dt0.id = contribution_report_ref01_data.id;
        const contribution_report_ref01_data_dt0 = (await contribution_report_ref01_ent.load(contribution_report_ref01_match_dt0)).data();
        (0, node_assert_1.default)(contribution_report_ref01_data_dt0.id === contribution_report_ref01_data.id);
    });
});
// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true;
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/contribution_report/ContributionReportTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KotaSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['contribution_report01', 'contribution_report02', 'contribution_report03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOTA_TEST_CONTRIBUTION_REPORT_ENTID': idmap,
        'KOTA_TEST_LIVE': 'FALSE',
        'KOTA_TEST_EXPLAIN': 'FALSE',
        'KOTA_APIKEY': '',
    });
    idmap = env['KOTA_TEST_CONTRIBUTION_REPORT_ENTID'];
    const live = 'TRUE' === env.KOTA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOTA_TEST_CONTRIBUTION_REPORT_ENTID'];
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
//# sourceMappingURL=ContributionReportEntity.test.js.map