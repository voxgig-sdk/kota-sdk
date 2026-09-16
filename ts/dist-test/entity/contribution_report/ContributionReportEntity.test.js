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
(0, node_test_1.describe)('ContributionReportEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOTA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KotaSDK.test();
        const ent = testsdk.ContributionReport();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOTA_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'contribution_report.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date-time", "name": "created_at", "req": true, "short": "Date and time the report was created", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "employer_id", "req": true, "short": "Unique identifier of the employer for which the report is created", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "external_customer_id", "req": false, "short": "Unique identifier of the customer for which the report is created.", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 2 }, { "active": true, "format": "date-time", "name": "finalized_at", "req": false, "short": "Date and time the report was finalized, if applicable", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 3 }, { "active": true, "name": "id", "req": true, "short": "Unique identifier for the contribution report", "type": "`$STRING`", "index$": 4 }, { "active": true, "format": "date-time", "name": "last_updated_at", "req": true, "short": "Date and time of the last update to the report", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "object", "readOnly": true, "req": false, "short": "The object type", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "period", "req": true, "short": "Period covered by the contribution report", "type": "`$ANY`", "index$": 7 }, { "active": true, "name": "status", "req": true, "short": "Current status of the contribution report", "type": "`$ANY`", "index$": 8 }], "id": { "field": "id", "name": "id" }, "name": "contribution_report", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "x_platform_id", "orig": "x_platform_id", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a", "kind": "param", "name": "id", "orig": "contribution_report_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /contribution_reports/{contribution_report_id}/finalize", "json": "{\"operationId\":\"FinalizeContributionReport\",\"parameters\":[{\"in\":\"path\",\"name\":\"contribution_report_id\",\"required\":true,\"schema\":{\"example\":\"ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ctr_.+\",\"type\":\"string\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"created_at\":{\"description\":\"Date and time the report was created\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"employer_id\":{\"description\":\"Unique identifier of the employer for which the report is created\",\"example\":\"er_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"er_.+\",\"type\":\"string\"},\"external_customer_id\":{\"description\":\"Unique identifier of the customer for which the report is created. This identifier is assigned by the Employer of Record (EoR) platform to the Customer (i.e. the company using the EoR service) for which the employee is employed. This parameter is only available to EoR platforms.\",\"type\":[\"null\",\"string\"]},\"finalized_at\":{\"description\":\"Date and time the report was finalized, if applicable\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":[\"null\",\"string\"]},\"id\":{\"description\":\"Unique identifier for the contribution report\",\"example\":\"ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ctr_.+\",\"type\":\"string\"},\"last_updated_at\":{\"description\":\"Date and time of the last update to the report\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"period\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"from_date\":{\"description\":\"Start date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"to_date\":{\"description\":\"End date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"from_date\",\"to_date\"],\"type\":\"object\"}],\"description\":\"Period covered by the contribution report\"},\"status\":{\"allOf\":[{\"enum\":[\"open\",\"finalized\"],\"type\":\"string\"}],\"description\":\"Current status of the contribution report\"}},\"required\":[\"created_at\",\"employer_id\",\"id\",\"last_updated_at\",\"period\",\"status\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "POST", "orig": "/contribution_reports/{contribution_report_id}/finalize", "rename": { "param": { "contribution_report_id": "id" } }, "segments": [{ "lit": "contribution_reports" }, { "var": "id" }, { "lit": "finalize" }], "select": { "$action": "finalize", "exist": ["id", "x_platform_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "x_platform_id", "orig": "x_platform_id", "reqd": false, "type": "`$STRING`" }], "query": [{ "active": true, "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a", "kind": "query", "name": "employer_id", "orig": "employer_id", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "external_customer_id", "orig": "external_customer_id", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "month", "orig": "month", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "kind": "query", "name": "page_size", "orig": "page_size", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "kind": "query", "name": "status", "orig": "status", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "kind": "query", "name": "year", "orig": "year", "reqd": false, "type": "`$INTEGER`", "index$": 6 }] }, "contract": { "id": "GET /contribution_reports", "json": "{\"operationId\":\"ListContributionReports\",\"parameters\":[{\"description\":\"Unique identifier of the employer for filtering reports\",\"in\":\"query\",\"name\":\"employer_id\",\"schema\":{\"example\":\"er_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"er_.+\",\"type\":\"string\"}},{\"description\":\"Multiple values can be provided by separating them with a comma. Allowed values are: `open`, `finalized`.\",\"in\":\"query\",\"name\":\"status\",\"schema\":{\"type\":\"string\"}},{\"description\":\"Month for filtering reports, used together with `year` (MM format)\",\"in\":\"query\",\"name\":\"month\",\"schema\":{\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"Year for filtering reports, can be used standalone or with `month` (YYYY format)\",\"in\":\"query\",\"name\":\"year\",\"schema\":{\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"Unique identifier of the customer for EoR platforms, used to filter reports for a logical employer\",\"in\":\"query\",\"name\":\"external_customer_id\",\"schema\":{\"type\":\"string\"}},{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"in\":\"query\",\"name\":\"page_size\",\"schema\":{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"has_next_page\":{\"description\":\"Whether there are more pages available after this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"has_previous_page\":{\"description\":\"Whether there are more pages available before this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"items\":{\"description\":\"A paginated array containing the response elements\",\"items\":{\"additionalProperties\":false,\"properties\":{\"created_at\":{\"description\":\"Date and time the report was created\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"employer_id\":{\"description\":\"Unique identifier of the employer for which the report is created\",\"example\":\"er_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"er_.+\",\"type\":\"string\"},\"external_customer_id\":{\"description\":\"Unique identifier of the customer for which the report is created. This identifier is assigned by the Employer of Record (EoR) platform to the Customer (i.e. the company using the EoR service) for which the employee is employed. This parameter is only available to EoR platforms.\",\"type\":[\"null\",\"string\"]},\"finalized_at\":{\"description\":\"Date and time the report was finalized, if applicable\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":[\"null\",\"string\"]},\"id\":{\"description\":\"Unique identifier for the contribution report\",\"example\":\"ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ctr_.+\",\"type\":\"string\"},\"last_updated_at\":{\"description\":\"Date and time of the last update to the report\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"period\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"from_date\":{\"description\":\"Start date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"to_date\":{\"description\":\"End date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"from_date\",\"to_date\"],\"type\":\"object\"}],\"description\":\"Period covered by the contribution report\"},\"status\":{\"allOf\":[{\"enum\":[\"open\",\"finalized\"],\"type\":\"string\"}],\"description\":\"Current status of the contribution report\"}},\"required\":[\"created_at\",\"employer_id\",\"id\",\"last_updated_at\",\"period\",\"status\"],\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"description\":\"The current page of the results\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"page_size\":{\"description\":\"The number of results on this page. This can be different from the requested page size if the total number of results is less than the requested page size\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"total_count\":{\"description\":\"The total number of elements available in the response. This is the total number of elements available across all pages, not just the current page.\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"items\",\"page\",\"page_size\",\"total_count\"],\"type\":\"object\"}}},\"description\":\"OK\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/contribution_reports", "segments": [{ "lit": "contribution_reports" }], "select": { "exist": ["employer_id", "external_customer_id", "month", "page", "page_size", "status", "x_platform_id", "year"] }, "transform": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "x_platform_id", "orig": "x_platform_id", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a", "kind": "param", "name": "id", "orig": "contribution_report_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /contribution_reports/{contribution_report_id}", "json": "{\"operationId\":\"RetrieveContributionReport\",\"parameters\":[{\"in\":\"path\",\"name\":\"contribution_report_id\",\"required\":true,\"schema\":{\"example\":\"ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ctr_.+\",\"type\":\"string\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"created_at\":{\"description\":\"Date and time the report was created\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"employer_id\":{\"description\":\"Unique identifier of the employer for which the report is created\",\"example\":\"er_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"er_.+\",\"type\":\"string\"},\"external_customer_id\":{\"description\":\"Unique identifier of the customer for which the report is created. This identifier is assigned by the Employer of Record (EoR) platform to the Customer (i.e. the company using the EoR service) for which the employee is employed. This parameter is only available to EoR platforms.\",\"type\":[\"null\",\"string\"]},\"finalized_at\":{\"description\":\"Date and time the report was finalized, if applicable\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":[\"null\",\"string\"]},\"id\":{\"description\":\"Unique identifier for the contribution report\",\"example\":\"ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ctr_.+\",\"type\":\"string\"},\"last_updated_at\":{\"description\":\"Date and time of the last update to the report\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"period\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"from_date\":{\"description\":\"Start date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"to_date\":{\"description\":\"End date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"from_date\",\"to_date\"],\"type\":\"object\"}],\"description\":\"Period covered by the contribution report\"},\"status\":{\"allOf\":[{\"enum\":[\"open\",\"finalized\"],\"type\":\"string\"}],\"description\":\"Current status of the contribution report\"}},\"required\":[\"created_at\",\"employer_id\",\"id\",\"last_updated_at\",\"period\",\"status\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/contribution_reports/{contribution_report_id}", "rename": { "param": { "contribution_report_id": "id" } }, "segments": [{ "lit": "contribution_reports" }, { "var": "id" }], "select": { "exist": ["id", "x_platform_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "contribution_report", "name__orig": "contribution_report", "Name": "ContributionReport", "name_": "contribution_report", "name-": "contribution-report", "NAME": "CONTRIBUTION_REPORT", "index$": 2 }, { "active": true, "entity": "contribution_report", "key$": "BasicContributionReportFlow", "kind": "basic", "name": "BasicContributionReportFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "contribution_report_ref01" }, "match": { "contribution_report_id": "contribution_report01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "contribution_report_ref01" } }], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "contribution_report_ref01", "srcdatavar": "contribution_report_ref01_data", "suffix": "_dt0" }, "match": { "id": "contribution_report01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-contribution_report_ref01" } }], "index$": 2 }] }, 'ContributionReport');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const contribution_report_ref01_ent = client.ContributionReport();
        let contribution_report_ref01_data = setup.data.new.contribution_report['contribution_report_ref01'];
        contribution_report_ref01_data['contribution_report_id'] = setup.idmap['contribution_report01'];
        contribution_report_ref01_data = (await contribution_report_ref01_ent.create(contribution_report_ref01_data)).data();
        (0, node_assert_1.default)(null != contribution_report_ref01_data.id);
        // LIST
        const contribution_report_ref01_match = {};
        const contribution_report_ref01_list = (await contribution_report_ref01_ent.list(contribution_report_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(contribution_report_ref01_list, { id: contribution_report_ref01_data.id })));
        // LOAD
        const contribution_report_ref01_match_dt0 = {};
        contribution_report_ref01_match_dt0.id = contribution_report_ref01_data.id;
        const contribution_report_ref01_data_dt0 = (await contribution_report_ref01_ent.load(contribution_report_ref01_match_dt0)).data();
        (0, node_assert_1.default)(contribution_report_ref01_data_dt0.id === contribution_report_ref01_data.id);
    });
});
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