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
(0, node_test_1.describe)('EmployerHealthInsurancePolicyResponsePagedListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOTA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KotaSDK.test();
        const ent = testsdk.EmployerHealthInsurancePolicyResponsePagedList();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOTA_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'employer_health_insurance_policy_response_paged_list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date", "name": "cancellation_date", "req": false, "short": "Policy was cancelled on this date, if cancellation occured", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 0 }, { "active": true, "name": "coverage_levels", "req": true, "short": "Represents the available coverage levels for this policy", "type": "`$ARRAY`", "index$": 1 }, { "active": true, "format": "int32", "name": "employer_cancellation_period_length", "req": true, "short": "How many days the employer has to cancel the policy since the policy starts", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "employer_id", "req": true, "short": "The Id of the employer for which the policy is created", "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "date", "name": "end_date", "req": true, "short": "Policy ends on this date", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "enrolment_type", "req": true, "short": "Enrolment type of the policy", "type": "`$ANY`", "index$": 5 }, { "active": true, "name": "group_policy_number", "req": false, "short": "Group’s health insurance policy number, if available", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 6 }, { "active": true, "name": "id", "req": true, "short": "Unique identifier for policy", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "object", "readOnly": true, "req": false, "short": "The object type", "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "renewal", "req": true, "short": "Renewal information for the policy", "type": "`$ANY`", "index$": 9 }, { "active": true, "format": "date", "name": "start_date", "req": true, "short": "Policy starts on this date", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "status", "req": true, "short": "Current status of policy", "type": "`$ANY`", "index$": 11 }], "id": { "field": "id", "name": "id" }, "name": "employer_health_insurance_policy_response_paged_list", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "x_platform_id", "orig": "x_platform_id", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a", "kind": "param", "name": "employer_id", "orig": "employer_id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "kind": "query", "name": "page_size", "orig": "page_size", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "status", "orig": "status", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /employers/{employer_id}/health_insurance/policies", "json": "{\"operationId\":\"ListEmployerHealthInsurancePolicies\",\"parameters\":[{\"in\":\"path\",\"name\":\"employer_id\",\"required\":true,\"schema\":{\"example\":\"er_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"er_.+\",\"type\":\"string\"}},{\"description\":\"Multiple values can be provided by separating them with a comma. Allowed values are: `scheduled`, `active`, `expired`, `cancelled`.\",\"in\":\"query\",\"name\":\"status\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"in\":\"query\",\"name\":\"page_size\",\"schema\":{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"has_next_page\":{\"description\":\"Whether there are more pages available after this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"has_previous_page\":{\"description\":\"Whether there are more pages available before this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"items\":{\"description\":\"A paginated array containing the response elements\",\"items\":{\"additionalProperties\":false,\"properties\":{\"cancellation_date\":{\"description\":\"Policy was cancelled on this date, if cancellation occured\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":[\"null\",\"string\"]},\"coverage_levels\":{\"description\":\"Represents the available coverage levels for this policy\",\"items\":{\"additionalProperties\":false,\"properties\":{\"documents\":{\"description\":\"Documents related to the health insurance plan, these documents may change at renewal, this includes the documents like `Insurance Product Information Document`, `Hospital Lists`, `Table of Cover` etc\",\"items\":{\"additionalProperties\":false,\"properties\":{\"link\":{\"description\":\"Health Insurance Document Link (can be a link to a website or a file path)\",\"type\":\"string\"},\"title\":{\"description\":\"Health Insurance Document Title\",\"type\":\"string\"}},\"required\":[\"link\",\"title\"],\"type\":\"object\"},\"type\":\"array\"},\"plan_currency\":{\"allOf\":[{\"enum\":[\"eur\",\"aed\",\"afn\",\"xcd\",\"all\",\"amd\",\"aoa\",\"ars\",\"usd\",\"aud\",\"awg\",\"azn\",\"bam\",\"bbd\",\"bdt\",\"xof\",\"bgn\",\"bhd\",\"bif\",\"bmd\",\"bnd\",\"bob\",\"bov\",\"brl\",\"bsd\",\"inr\",\"btn\",\"nok\",\"bwp\",\"byn\",\"bzd\",\"cad\",\"xaf\",\"cdf\",\"chf\",\"che\",\"chw\",\"nzd\",\"clp\",\"clf\",\"cny\",\"cop\",\"cou\",\"crc\",\"cup\",\"cuc\",\"cve\",\"ang\",\"czk\",\"djf\",\"dkk\",\"dop\",\"dzd\",\"egp\",\"mad\",\"ern\",\"etb\",\"fjd\",\"fkp\",\"mdl\",\"gbp\",\"gel\",\"ghs\",\"gip\",\"gmd\",\"gnf\",\"gtq\",\"gyd\",\"hkd\",\"hnl\",\"hrk\",\"htg\",\"huf\",\"idr\",\"xdr\",\"ils\",\"iqd\",\"irr\",\"isk\",\"jmd\",\"jod\",\"jpy\",\"kes\",\"kgs\",\"khr\",\"kmf\",\"kpw\",\"krw\",\"kwd\",\"kyd\",\"kzt\",\"lak\",\"lbp\",\"lkr\",\"lrd\",\"lsl\",\"zar\",\"lyd\",\"mga\",\"mkd\",\"mmk\",\"mnt\",\"mop\",\"mru\",\"mur\",\"mvr\",\"mwk\",\"mxn\",\"mxv\",\"myr\",\"mzn\",\"nad\",\"xpf\",\"ngn\",\"nio\",\"npr\",\"omr\",\"pab\",\"pen\",\"pgk\",\"php\",\"pkr\",\"pln\",\"pyg\",\"qar\",\"ron\",\"rsd\",\"rub\",\"rwf\",\"sar\",\"sbd\",\"scr\",\"sdg\",\"sek\",\"sgd\",\"shp\",\"sll\",\"sos\",\"srd\",\"ssp\",\"stn\",\"svc\",\"xsu\",\"syp\",\"twd\",\"szl\",\"thb\",\"tjs\",\"tmt\",\"tnd\",\"top\",\"try\",\"ttd\",\"tzs\",\"uah\",\"ugx\",\"usn\",\"uyu\",\"uyi\",\"uyw\",\"uzs\",\"ves\",\"vnd\",\"vuv\",\"wst\",\"yer\",\"xua\",\"zmw\",\"zwl\"],\"type\":\"string\"}],\"description\":\"Currency code of the health insurance plan\"},\"plan_id\":{\"description\":\"Unique identifier for the health insurance plan\",\"example\":\"pl_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pl_.+\",\"type\":\"string\"},\"plan_name\":{\"description\":\"Name of the health insurance plan\",\"type\":\"string\"},\"provider_employer_platform_url\":{\"description\":\"URL to the health insurance provider's website for Employer Management\",\"type\":[\"null\",\"string\"]},\"provider_logo_url\":{\"description\":\"Logo URL of the health insurance provider\",\"type\":\"string\"},\"provider_name\":{\"description\":\"Name of the health insurance provider\",\"type\":\"string\"},\"provider_support_phone\":{\"description\":\"Support phone number to the health insurance provider's website for Employer Management\",\"type\":[\"null\",\"string\"]}},\"required\":[\"documents\",\"plan_currency\",\"plan_id\",\"plan_name\",\"provider_logo_url\",\"provider_name\"],\"type\":\"object\"},\"type\":\"array\"},\"employer_cancellation_period_length\":{\"description\":\"How many days the employer has to cancel the policy since the policy starts\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"employer_id\":{\"description\":\"The Id of the employer for which the policy is created\",\"example\":\"er_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"er_.+\",\"type\":\"string\"},\"end_date\":{\"description\":\"Policy ends on this date\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"enrolment_type\":{\"allOf\":[{\"enum\":[\"opt_out\",\"opt_in\"],\"type\":\"string\"}],\"description\":\"Enrolment type of the policy\"},\"group_policy_number\":{\"description\":\"Group’s health insurance policy number, if available\",\"type\":[\"null\",\"string\"]},\"id\":{\"description\":\"Unique identifier for policy\",\"example\":\"erhp_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"erhp_.+\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"renewal\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"decision_confirmed\":{\"description\":\"Whether the decision to renew the policy has been confirmed\",\"example\":true,\"type\":\"boolean\"},\"renewal_date\":{\"description\":\"Policy renewal date\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"renewed_health_insurance_id\":{\"description\":\"The ID of the renewed health insurance policy, if renewed\",\"example\":\"erhp_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"erhp_.+\",\"type\":[\"null\",\"string\"]},\"status\":{\"allOf\":[{\"enum\":[\"upcoming\",\"open\",\"renewed\",\"cancelled\"],\"type\":\"string\"}],\"description\":\"The current status of the renewal\"},\"window_end_date\":{\"description\":\"Renewal window ends at the end of this day\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"window_start_date\":{\"description\":\"Renewal window starts on this day\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"decision_confirmed\",\"renewal_date\",\"status\",\"window_end_date\",\"window_start_date\"],\"type\":\"object\"}],\"description\":\"Renewal information for the policy\"},\"start_date\":{\"description\":\"Policy starts on this date\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"status\":{\"allOf\":[{\"enum\":[\"scheduled\",\"active\",\"expired\",\"cancelled\"],\"type\":\"string\"}],\"description\":\"Current status of policy\"}},\"required\":[\"coverage_levels\",\"employer_cancellation_period_length\",\"employer_id\",\"end_date\",\"enrolment_type\",\"id\",\"renewal\",\"start_date\",\"status\"],\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"description\":\"The current page of the results\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"page_size\":{\"description\":\"The number of results on this page. This can be different from the requested page size if the total number of results is less than the requested page size\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"total_count\":{\"description\":\"The total number of elements available in the response. This is the total number of elements available across all pages, not just the current page.\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"items\",\"page\",\"page_size\",\"total_count\"],\"type\":\"object\"}}},\"description\":\"OK\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/employers/{employer_id}/health_insurance/policies", "segments": [{ "lit": "employers" }, { "var": "employer_id" }, { "lit": "health_insurance" }, { "lit": "policies" }], "select": { "exist": ["employer_id", "page", "page_size", "status", "x_platform_id"] }, "transform": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["employer"]] }, "key$": "employer_health_insurance_policy_response_paged_list", "name__orig": "employer_health_insurance_policy_response_paged_list", "Name": "EmployerHealthInsurancePolicyResponsePagedList", "name_": "employer_health_insurance_policy_response_paged_list", "name-": "employer-health-insurance-policy-response-paged-list", "NAME": "EMPLOYER_HEALTH_INSURANCE_POLICY_RESPONSE_PAGED_LIST", "index$": 17 }, { "active": true, "entity": "employer_health_insurance_policy_response_paged_list", "key$": "BasicEmployerHealthInsurancePolicyResponsePagedListFlow", "kind": "basic", "name": "BasicEmployerHealthInsurancePolicyResponsePagedListFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "employer_id": "employer01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "employer_health_insurance_policy_response_paged_list_ref01" } }], "index$": 0 }] }, 'EmployerHealthInsurancePolicyResponsePagedList');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let employer_health_insurance_policy_response_paged_list_ref01_data = Object.values(setup.data.existing.employer_health_insurance_policy_response_paged_list)[0];
        // LIST
        const employer_health_insurance_policy_response_paged_list_ref01_ent = client.EmployerHealthInsurancePolicyResponsePagedList();
        const employer_health_insurance_policy_response_paged_list_ref01_match = {};
        employer_health_insurance_policy_response_paged_list_ref01_match['employer_id'] = setup.idmap['employer01'];
        const employer_health_insurance_policy_response_paged_list_ref01_list = (await employer_health_insurance_policy_response_paged_list_ref01_ent.list(employer_health_insurance_policy_response_paged_list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/employer_health_insurance_policy_response_paged_list/EmployerHealthInsurancePolicyResponsePagedListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KotaSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['employer_health_insurance_policy_response_paged_list01', 'employer_health_insurance_policy_response_paged_list02', 'employer_health_insurance_policy_response_paged_list03', 'employer01', 'employer02', 'employer03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_RESPONSE_PAGED_LIST_ENTID': idmap,
        'KOTA_TEST_LIVE': 'FALSE',
        'KOTA_TEST_EXPLAIN': 'FALSE',
        'KOTA_APIKEY': '',
    });
    idmap = env['KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_RESPONSE_PAGED_LIST_ENTID'];
    const live = 'TRUE' === env.KOTA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_RESPONSE_PAGED_LIST_ENTID'];
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
//# sourceMappingURL=EmployerHealthInsurancePolicyResponsePagedListEntity.test.js.map