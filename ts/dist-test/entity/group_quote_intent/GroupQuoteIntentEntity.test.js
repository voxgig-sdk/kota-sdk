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
(0, node_test_1.describe)('GroupQuoteIntentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOTA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KotaSDK.test();
        const ent = testsdk.GroupQuoteIntent();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOTA_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'group_quote_intent.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "action_required": { "a": true, "h": "Action Required", "n": "action_required", "r": false, "sh": "Details of the action required from the caller, if the intent is in action_required status.", "t": "`$NULL`", "key$": "action_required", "index$": 0 }, "consent_links": { "a": true, "h": "Consent Links", "n": "consent_links", "r": true, "sh": "Consent links that need to be acknowledged", "t": "`$ARRAY`", "key$": "consent_links", "index$": 1 }, "cost_sharing": { "a": true, "h": "Cost Sharing", "n": "cost_sharing", "r": false, "sh": "Cost sharing configuration for the quote", "t": "`$NULL`", "key$": "cost_sharing", "index$": 2 }, "disclosures": { "a": true, "h": "Disclosures", "n": "disclosures", "r": true, "sh": "Disclosures associated with this intent.", "t": "`$ARRAY`", "key$": "disclosures", "index$": 3 }, "expected_start_date": { "a": true, "fo": "date", "h": "Expected Start Date", "n": "expected_start_date", "r": false, "sh": "Expected start date for the insurance coverage", "t": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "key$": "expected_start_date", "index$": 4 }, "group_id": { "a": true, "h": "Group Id", "n": "group_id", "r": true, "sh": "Unique identifier for the group", "t": "`$STRING`", "key$": "group_id", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the group quote intent", "t": "`$STRING`", "key$": "id", "index$": 6 }, "object": { "a": true, "h": "Object", "n": "object", "r": false, "ro": true, "sh": "Object type identifier", "t": "`$STRING`", "key$": "object", "index$": 7 }, "plan_id": { "a": true, "h": "Plan Id", "n": "plan_id", "r": true, "sh": "Unique identifier for the plan", "t": "`$STRING`", "key$": "plan_id", "index$": 8 }, "status": { "a": true, "h": "Status", "n": "status", "r": true, "sh": "Current status of the group quote intent", "t": "`$ANY`", "key$": "status", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "group_quote_intent", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /group_quote_intents/{group_quote_intent_id}/reject", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "x_platform_id", "or": "x_platform_id", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a", "k": "param", "n": "id", "or": "group_quote_intent_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/group_quote_intents/{group_quote_intent_id}/reject", "q": { "$action": "reject", "exist": ["id", "x_platform_id"] }, "r": { "param": { "group_quote_intent_id": "id" } }, "s": [{ "lit": "group_quote_intents" }, { "var": "id" }, { "lit": "reject" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /group_quote_intents", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "x_platform_id", "or": "x_platform_id", "r": false, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/group_quote_intents", "q": { "exist": ["x_platform_id"] }, "r": {}, "s": [{ "lit": "group_quote_intents" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /group_quote_intents", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "x_platform_id", "or": "x_platform_id", "r": false, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a", "k": "query", "n": "group_id", "or": "group_id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a", "k": "query", "n": "plan_id", "or": "plan_id", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/group_quote_intents", "q": { "exist": ["group_id", "page", "page_size", "plan_id", "status", "x_platform_id"] }, "r": {}, "s": [{ "lit": "group_quote_intents" }], "t": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /group_quote_intents/{group_quote_intent_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "x_platform_id", "or": "x_platform_id", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a", "k": "param", "n": "id", "or": "group_quote_intent_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/group_quote_intents/{group_quote_intent_id}", "q": { "exist": ["id", "x_platform_id"] }, "r": { "param": { "group_quote_intent_id": "id" } }, "s": [{ "lit": "group_quote_intents" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "group_quote_intent", "name__orig": "group_quote_intent", "Name": "GroupQuoteIntent", "name_": "group_quote_intent", "name-": "group-quote-intent", "NAME": "GROUP_QUOTE_INTENT", "index$": 30 }, { "active": true, "entity": "group_quote_intent", "key$": "BasicGroupQuoteIntentFlow", "kind": "basic", "name": "BasicGroupQuoteIntentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "group_quote_intent_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "group_quote_intent_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "group_quote_intent_ref01", "srcdatavar": "group_quote_intent_ref01_data", "suffix": "_dt0" }, "m": { "id": "group_quote_intent01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-group_quote_intent_ref01" } }], "index$": 2 }] }, 'GroupQuoteIntent', { "POST /group_quote_intents/{group_quote_intent_id}/reject": { "protocol": "http", "parameters": [{ "name": "group_quote_intent_id", "in": "path", "required": true, "schema": { "pattern": "gqi_.+", "type": "string", "example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "index$": 0 }, { "name": "X-Platform-Id", "in": "header", "description": "The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.", "schema": { "type": "string" }, "index$": 1 }] }, "POST /group_quote_intents": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "allOf": [{ "required": ["group_id", "plan_id"], "type": "object", "properties": { "group_id": { "pattern": "gr_.+", "type": "string", "description": "Unique identifier for the group to get a quote for", "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "plan_id": { "pattern": "pl_.+", "type": "string", "description": "Unique identifier for the plan to get a quote for", "example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "cost_sharing": { "type": "null", "allOf": [{}], "description": "Cost sharing configuration for the quote" }, "expected_start_date": { "type": ["null", "string"], "description": "Expected start date for the insurance coverage", "format": "date", "example": "2024-12-01" }, "coverage_selections": { "type": ["null", "array"], "items": { "required": [], "type": "object", "properties": {}, "additionalProperties": false, "x-ref": "#/components/schemas/PlanCoverageOptionSelectionRequest" }, "description": "Plan coverage option selections for group-policy-scoped configurations." } }, "additionalProperties": false, "x-ref": "#/components/schemas/CreateGroupQuoteIntentRequest" }], "index$": 1 } } }, "required": true }, "parameters": [{ "name": "X-Platform-Id", "in": "header", "description": "The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.", "schema": { "type": "string" }, "index$": 0 }] }, "GET /group_quote_intents": { "protocol": "http", "parameters": [{ "name": "group_id", "in": "query", "description": "Filter by group ID", "schema": { "pattern": "gr_.+", "type": "string", "description": "Filter by group ID", "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "index$": 0 }, { "name": "plan_id", "in": "query", "description": "Filter by plan ID", "schema": { "pattern": "pl_.+", "type": "string", "description": "Filter by plan ID", "example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "index$": 1 }, { "name": "status", "in": "query", "description": "Multiple values can be provided by separating them with a comma. Allowed values are: `processing`, `action_required`, `awaiting_quote`, `quote_available`, `rejected`, `rejected_by_insurer`, `quote_expired`.", "schema": { "type": "string" }, "index$": 2 }, { "name": "page", "in": "query", "description": "The page of results to return. Defaults to 1 if not provided.", "schema": { "type": "integer", "description": "The page of results to return. Defaults to 1 if not provided.", "format": "int32" }, "index$": 3 }, { "name": "page_size", "in": "query", "description": "The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.", "schema": { "type": "integer", "description": "The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.", "format": "int32" }, "index$": 4 }, { "name": "X-Platform-Id", "in": "header", "description": "The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.", "schema": { "type": "string" }, "index$": 5 }] }, "GET /group_quote_intents/{group_quote_intent_id}": { "protocol": "http", "parameters": [{ "name": "group_quote_intent_id", "in": "path", "required": true, "schema": { "pattern": "gqi_.+", "type": "string", "example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "index$": 0 }, { "name": "X-Platform-Id", "in": "header", "description": "The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.", "schema": { "type": "string" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const group_quote_intent_ref01_ent = client.GroupQuoteIntent();
        let group_quote_intent_ref01_data = setup.data.new.group_quote_intent['group_quote_intent_ref01'];
        group_quote_intent_ref01_data = (await group_quote_intent_ref01_ent.create(group_quote_intent_ref01_data)).data();
        (0, node_assert_1.default)(null != group_quote_intent_ref01_data.id);
        // LIST
        const group_quote_intent_ref01_match = {};
        const group_quote_intent_ref01_list = (await group_quote_intent_ref01_ent.list(group_quote_intent_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(group_quote_intent_ref01_list, { id: group_quote_intent_ref01_data.id })));
        // LOAD
        const group_quote_intent_ref01_match_dt0 = {};
        group_quote_intent_ref01_match_dt0.id = group_quote_intent_ref01_data.id;
        const group_quote_intent_ref01_data_dt0 = (await group_quote_intent_ref01_ent.load(group_quote_intent_ref01_match_dt0)).data();
        (0, node_assert_1.default)(group_quote_intent_ref01_data_dt0.id === group_quote_intent_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/group_quote_intent/GroupQuoteIntentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KotaSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['group_quote_intent01', 'group_quote_intent02', 'group_quote_intent03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOTA_TEST_GROUP_QUOTE_INTENT_ENTID': idmap,
        'KOTA_TEST_LIVE': 'FALSE',
        'KOTA_TEST_EXPLAIN': 'FALSE',
        'KOTA_APIKEY': '',
    });
    idmap = env['KOTA_TEST_GROUP_QUOTE_INTENT_ENTID'];
    const live = 'TRUE' === env.KOTA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOTA_TEST_GROUP_QUOTE_INTENT_ENTID'];
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
//# sourceMappingURL=GroupQuoteIntentEntity.test.js.map