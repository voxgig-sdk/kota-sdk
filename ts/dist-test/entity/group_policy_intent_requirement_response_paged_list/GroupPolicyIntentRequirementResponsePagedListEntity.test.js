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
(0, node_test_1.describe)('GroupPolicyIntentRequirementResponsePagedListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOTA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KotaSDK.test();
        const ent = testsdk.GroupPolicyIntentRequirementResponsePagedList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.KotaSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.GroupPolicyIntentRequirementResponsePagedList().list({ "id": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOTA_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'group_policy_intent_requirement_response_paged_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "group_policy_intent_requirement_response_paged_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /group_policy_intents/{group_policy_intent_id}/requirements", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "x_platform_id", "or": "X-Platform-Id", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a", "k": "param", "n": "id", "or": "group_policy_intent_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "object_id", "or": "object_id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "object_type", "or": "object_type", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/group_policy_intents/{group_policy_intent_id}/requirements", "q": { "$action": "requirements", "exist": ["id"] }, "r": { "param": { "group_policy_intent_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "group_policy_intents" }, { "var": "id" }, { "lit": "requirements" }], "t": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "group_policy_intent_requirement_response_paged_list", "name__orig": "group_policy_intent_requirement_response_paged_list", "Name": "GroupPolicyIntentRequirementResponsePagedList", "name_": "group_policy_intent_requirement_response_paged_list", "name-": "group-policy-intent-requirement-response-paged-list", "NAME": "GROUP_POLICY_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST", "index$": 28 }, { "active": true, "entity": "group_policy_intent_requirement_response_paged_list", "key$": "BasicGroupPolicyIntentRequirementResponsePagedListFlow", "kind": "basic", "name": "BasicGroupPolicyIntentRequirementResponsePagedListFlow", "param": {}, "step": [{ "a": false, "d": {}, "i": {}, "m": { "group_policy_intent_id": "group_policy_intent01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "group_policy_intent_requirement_response_paged_list_ref01" } }], "unreachable": true }] }, 'GroupPolicyIntentRequirementResponsePagedList', { "GET /group_policy_intents/{group_policy_intent_id}/requirements": { "protocol": "http", "parameters": [{ "name": "group_policy_intent_id", "in": "path", "required": true, "schema": { "pattern": "gpi_.+", "type": "string", "example": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "index$": 0 }, { "name": "object_type", "in": "query", "description": "Filter by object type (employee or employer)", "schema": { "allOf": [{ "type": "object", "properties": { "value": { "allOf": [{ "enum": [], "type": "string", "x-ref": "#/components/schemas/RequirementObjectType" }] } }, "additionalProperties": false, "x-ref": "#/components/schemas/RequirementObjectTypeEnumParameter" }], "description": "Filter by object type (employee or employer)" }, "index$": 1 }, { "name": "object_id", "in": "query", "description": "Filter by object ID (employee ID or employer ID)", "schema": { "type": "string", "description": "Filter by object ID (employee ID or employer ID)" }, "index$": 2 }, { "name": "page", "in": "query", "description": "The page of results to return. Defaults to 1 if not provided.", "schema": { "type": "integer", "description": "The page of results to return. Defaults to 1 if not provided.", "format": "int32" }, "index$": 3 }, { "name": "page_size", "in": "query", "description": "The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.", "schema": { "type": "integer", "description": "The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.", "format": "int32" }, "index$": 4 }, { "name": "X-Platform-Id", "in": "header", "description": "The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.", "schema": { "type": "string" }, "index$": 5 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let group_policy_intent_requirement_response_paged_list_ref01_data = Object.values(setup.data.existing.group_policy_intent_requirement_response_paged_list)[0];
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/group_policy_intent_requirement_response_paged_list/GroupPolicyIntentRequirementResponsePagedListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KotaSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['group_policy_intent_requirement_response_paged_list01', 'group_policy_intent_requirement_response_paged_list02', 'group_policy_intent_requirement_response_paged_list03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOTA_TEST_GROUP_POLICY_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST_ENTID': idmap,
        'KOTA_TEST_LIVE': 'FALSE',
        'KOTA_TEST_EXPLAIN': 'FALSE',
        'KOTA_APIKEY': '',
    });
    idmap = env['KOTA_TEST_GROUP_POLICY_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST_ENTID'];
    const live = 'TRUE' === env.KOTA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOTA_TEST_GROUP_POLICY_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST_ENTID'];
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
//# sourceMappingURL=GroupPolicyIntentRequirementResponsePagedListEntity.test.js.map