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
(0, node_test_1.describe)('AssociatedPersonEligibilityResponsePagedListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOTA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KotaSDK.test();
        const ent = testsdk.AssociatedPersonEligibilityResponsePagedList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOTA_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'associated_person_eligibility_response_paged_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "associated_person_id", "req": true, "short": "The associated person ID.", "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "date", "name": "date_of_birth", "req": true, "short": "Date of birth of the associated person.", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "eligibility_status", "req": true, "short": "Eligibility status for the policy/plan.", "type": "`$ANY`", "index$": 2 }, { "active": true, "name": "first_name", "req": true, "short": "First name of the associated person.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "ineligibility_reason", "req": false, "short": "Reason for ineligibility if status is ineligible.", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 4 }, { "active": true, "name": "last_name", "req": true, "short": "Last name of the associated person.", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "object", "readOnly": true, "req": false, "short": "The object type", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "relationship", "req": true, "short": "Relationship type to the employee.", "type": "`$ANY`", "index$": 7 }, { "active": true, "name": "sex_at_birth", "req": true, "short": "Sex at birth of the associated person.", "type": "`$ANY`", "index$": 8 }], "name": "associated_person_eligibility_response_paged_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "x_platform_id", "orig": "x_platform_id", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a", "kind": "param", "name": "dependents_management_intent_id", "orig": "dependents_management_intent_id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "kind": "query", "name": "page_size", "orig": "page_size", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility", "json": "{\"operationId\":\"GetAssociatedPersonsEligibility\",\"parameters\":[{\"in\":\"path\",\"name\":\"dependents_management_intent_id\",\"required\":true,\"schema\":{\"example\":\"dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"dmi_.+\",\"type\":\"string\"}},{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"in\":\"query\",\"name\":\"page_size\",\"schema\":{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"has_next_page\":{\"description\":\"Whether there are more pages available after this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"has_previous_page\":{\"description\":\"Whether there are more pages available before this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"items\":{\"description\":\"A paginated array containing the response elements\",\"items\":{\"additionalProperties\":false,\"properties\":{\"associated_person_id\":{\"description\":\"The associated person ID. Prefixed with `ap_`.\",\"example\":\"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ap_.+\",\"type\":\"string\"},\"date_of_birth\":{\"description\":\"Date of birth of the associated person.\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"eligibility_status\":{\"allOf\":[{\"enum\":[\"pending\",\"eligible\",\"ineligible\"],\"type\":\"string\"}],\"description\":\"Eligibility status for the policy/plan.\"},\"first_name\":{\"description\":\"First name of the associated person.\",\"type\":\"string\"},\"ineligibility_reason\":{\"description\":\"Reason for ineligibility if status is ineligible.\",\"type\":[\"null\",\"string\"]},\"last_name\":{\"description\":\"Last name of the associated person.\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"relationship\":{\"allOf\":[{\"enum\":[\"spouse\",\"partner\",\"child\",\"other\"],\"type\":\"string\"}],\"description\":\"Relationship type to the employee.\"},\"sex_at_birth\":{\"allOf\":[{\"enum\":[\"male\",\"female\"],\"type\":\"string\"}],\"description\":\"Sex at birth of the associated person.\"}},\"required\":[\"associated_person_id\",\"date_of_birth\",\"eligibility_status\",\"first_name\",\"last_name\",\"relationship\",\"sex_at_birth\"],\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"description\":\"The current page of the results\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"page_size\":{\"description\":\"The number of results on this page. This can be different from the requested page size if the total number of results is less than the requested page size\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"total_count\":{\"description\":\"The total number of elements available in the response. This is the total number of elements available across all pages, not just the current page.\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"items\",\"page\",\"page_size\",\"total_count\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility", "segments": [{ "lit": "dependents_management_intents" }, { "var": "dependents_management_intent_id" }, { "lit": "associated_persons_eligibility" }], "select": { "exist": ["dependents_management_intent_id", "page", "page_size", "x_platform_id"] }, "transform": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["dependents_management_intent"]] }, "key$": "associated_person_eligibility_response_paged_list", "name__orig": "associated_person_eligibility_response_paged_list", "Name": "AssociatedPersonEligibilityResponsePagedList", "name_": "associated_person_eligibility_response_paged_list", "name-": "associated-person-eligibility-response-paged-list", "NAME": "ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST", "index$": 1 }, { "active": true, "entity": "associated_person_eligibility_response_paged_list", "key$": "BasicAssociatedPersonEligibilityResponsePagedListFlow", "kind": "basic", "name": "BasicAssociatedPersonEligibilityResponsePagedListFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "dependents_management_intent_id": "dependents_management_intent01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "associated_person_eligibility_response_paged_list_ref01" } }], "index$": 0 }] }, 'AssociatedPersonEligibilityResponsePagedList');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let associated_person_eligibility_response_paged_list_ref01_data = Object.values(setup.data.existing.associated_person_eligibility_response_paged_list)[0];
        // LIST
        const associated_person_eligibility_response_paged_list_ref01_ent = client.AssociatedPersonEligibilityResponsePagedList();
        const associated_person_eligibility_response_paged_list_ref01_match = {};
        associated_person_eligibility_response_paged_list_ref01_match['dependents_management_intent_id'] = setup.idmap['dependents_management_intent01'];
        const associated_person_eligibility_response_paged_list_ref01_list = (await associated_person_eligibility_response_paged_list_ref01_ent.list(associated_person_eligibility_response_paged_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/associated_person_eligibility_response_paged_list/AssociatedPersonEligibilityResponsePagedListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KotaSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['associated_person_eligibility_response_paged_list01', 'associated_person_eligibility_response_paged_list02', 'associated_person_eligibility_response_paged_list03', 'dependents_management_intent01', 'dependents_management_intent02', 'dependents_management_intent03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID': idmap,
        'KOTA_TEST_LIVE': 'FALSE',
        'KOTA_TEST_EXPLAIN': 'FALSE',
        'KOTA_APIKEY': '',
    });
    idmap = env['KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID'];
    const live = 'TRUE' === env.KOTA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID'];
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
//# sourceMappingURL=AssociatedPersonEligibilityResponsePagedListEntity.test.js.map