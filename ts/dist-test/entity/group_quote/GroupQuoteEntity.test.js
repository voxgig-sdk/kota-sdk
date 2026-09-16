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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GroupQuoteEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOTA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KotaSDK.test();
        const ent = testsdk.GroupQuote();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOTA_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'group_quote.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "family_type", "req": false, "short": "Type of the family covered by the employer.", "type": "`$NULL`", "index$": 0 }, { "active": true, "name": "member_count", "req": false, "short": "Numbers of additional members covered by the employer.", "type": "`$NULL`", "index$": 1 }, { "active": true, "name": "member_selection", "req": false, "short": "Whether specific member types are covered by the employer.", "type": "`$NULL`", "index$": 2 }, { "active": true, "name": "percentage", "req": false, "short": "Percentage of the premium the employer covers.", "type": "`$NULL`", "index$": 3 }, { "active": true, "name": "type", "req": true, "short": "Cost sharing type.", "type": "`$ANY`", "index$": 4 }], "name": "group_quote", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "x_platform_id", "orig": "x_platform_id", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a", "kind": "param", "name": "group_quote_intent_id", "orig": "group_quote_intent_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /group_quote_intents/{group_quote_intent_id}/quote", "json": "{\"operationId\":\"GetGroupQuoteIntentQuote\",\"parameters\":[{\"in\":\"path\",\"name\":\"group_quote_intent_id\",\"required\":true,\"schema\":{\"example\":\"gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"gqi_.+\",\"type\":\"string\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"cost_sharing\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"family_type\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"type\":{\"allOf\":[{\"enum\":[\"single\",\"couple\",\"single_with_children\",\"family\"],\"type\":\"string\"}],\"description\":\"Employer coverage family type\"}},\"required\":[\"type\"],\"type\":\"object\"}],\"description\":\"Type of the family covered by the employer.\",\"type\":\"null\"},\"member_count\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"adults\":{\"description\":\"Number of additional adults covered, including partner/spouse.\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"children\":{\"description\":\"Number of additional children covered.\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"adults\",\"children\"],\"type\":\"object\"}],\"description\":\"Numbers of additional members covered by the employer.\",\"type\":\"null\"},\"member_selection\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"children\":{\"description\":\"If children are covered.\",\"example\":true,\"type\":\"boolean\"},\"partner\":{\"description\":\"If a spouse/partner is covered.\",\"example\":true,\"type\":\"boolean\"}},\"required\":[\"children\",\"partner\"],\"type\":\"object\"}],\"description\":\"Whether specific member types are covered by the employer.\",\"type\":\"null\"},\"percentage\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"percentage\":{\"description\":\"Employer coverage percentage:\\n For 40% send 40.\\n For 100% send 100.\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"percentage\"],\"type\":\"object\"}],\"description\":\"Percentage of the premium the employer covers.\",\"type\":\"null\"},\"type\":{\"allOf\":[{\"enum\":[\"member_count\",\"member_selection\",\"percentage\",\"policyholder_only\",\"family_type\"],\"type\":\"string\"}],\"description\":\"Cost sharing type. Determines which sub-object is populated.\"}},\"required\":[\"type\"],\"type\":\"object\"}],\"description\":\"Cost sharing configuration for the quote\"},\"currency\":{\"description\":\"Currency of the premium (e.g. EUR, GBP)\",\"type\":\"string\"},\"employee_count\":{\"description\":\"Number of employees covered by the quote\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"expires_at\":{\"description\":\"When the quote expires\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"generated_at\":{\"description\":\"When the quote was generated\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"object\":{\"description\":\"Object type identifier\",\"readOnly\":true,\"type\":\"string\"},\"pdf_expires_at\":{\"description\":\"When the PDF URL expires\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":[\"null\",\"string\"]},\"pdf_url\":{\"description\":\"URL to download the quote PDF\",\"type\":[\"null\",\"string\"]},\"total_monthly_premium\":{\"description\":\"Total monthly premium for the group\",\"example\":123.45,\"format\":\"double\",\"type\":\"number\"}},\"required\":[\"cost_sharing\",\"currency\",\"employee_count\",\"expires_at\",\"generated_at\",\"total_monthly_premium\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/group_quote_intents/{group_quote_intent_id}/quote", "segments": [{ "lit": "group_quote_intents" }, { "var": "group_quote_intent_id" }, { "lit": "quote" }], "select": { "exist": ["group_quote_intent_id", "x_platform_id"] }, "transform": { "req": "`reqdata`", "res": "`body.cost_sharing`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["group_quote_intent"]] }, "key$": "group_quote", "name__orig": "group_quote", "Name": "GroupQuote", "name_": "group_quote", "name-": "group-quote", "NAME": "GROUP_QUOTE", "index$": 29 }, { "active": true, "entity": "group_quote", "key$": "BasicGroupQuoteFlow", "kind": "basic", "name": "BasicGroupQuoteFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "group_quote_ref01", "srcdatavar": "group_quote_ref01_data", "suffix": "_dt0" }, "match": { "id": "group_quote01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-group_quote_ref01" } }], "index$": 0 }] }, 'GroupQuote');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let group_quote_ref01_data = Object.values(setup.data.existing.group_quote)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const group_quote_ref01_ent = client.GroupQuote();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/group_quote/GroupQuoteTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KotaSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['group_quote01', 'group_quote02', 'group_quote03', 'group_quote_intent01', 'group_quote_intent02', 'group_quote_intent03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOTA_TEST_GROUP_QUOTE_ENTID': idmap,
        'KOTA_TEST_LIVE': 'FALSE',
        'KOTA_TEST_EXPLAIN': 'FALSE',
        'KOTA_APIKEY': '',
    });
    idmap = env['KOTA_TEST_GROUP_QUOTE_ENTID'];
    const live = 'TRUE' === env.KOTA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOTA_TEST_GROUP_QUOTE_ENTID'];
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
//# sourceMappingURL=GroupQuoteEntity.test.js.map