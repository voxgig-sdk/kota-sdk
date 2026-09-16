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
(0, node_test_1.describe)('EmployeeHealthInsurancePolicyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOTA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KotaSDK.test();
        const ent = testsdk.EmployeeHealthInsurancePolicy();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOTA_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'employee_health_insurance_policy.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date", "name": "cancellation_date", "req": false, "short": "Policy was cancelled on this date, if cancellation occured", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 0 }, { "active": true, "name": "coverage_level", "req": true, "short": "Represents the current coverage level for the policy", "type": "`$ANY`", "index$": 1 }, { "active": true, "name": "employee_id", "req": true, "short": "The Id of the employee for which the policy is created", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "employer_id", "req": true, "short": "The Id of the employer for which the policy is created", "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "date", "name": "end_date", "req": true, "short": "Policy ends on this date", "type": "`$STRING`", "index$": 4 }, { "active": true, "format": "int32", "name": "enrolled_dependants_count", "req": true, "short": "Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy.", "type": "`$INTEGER`", "index$": 5 }, { "active": true, "name": "enrolment_type", "req": true, "short": "Enrolment type of the policy", "type": "`$ANY`", "index$": 6 }, { "active": true, "name": "estimated_gross_premium", "req": true, "short": "Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration.", "type": "`$ANY`", "index$": 7 }, { "active": true, "name": "external_customer_id", "req": false, "short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 8 }, { "active": true, "name": "id", "req": true, "short": "Unique identifier for policy", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "object", "readOnly": true, "req": false, "short": "The object type", "type": "`$STRING`", "index$": 10 }, { "active": true, "format": "date", "name": "opt_out_deadline_date", "req": true, "short": "Last day to opt out from the policy", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "policy_number", "req": false, "short": "Health insurance policy number, if available", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 12 }, { "active": true, "name": "renewal", "req": true, "short": "Renewal information for the policy", "type": "`$ANY`", "index$": 13 }, { "active": true, "format": "date", "name": "start_date", "req": true, "short": "Policy starts on this date", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "status", "req": true, "short": "Current status of policy", "type": "`$ANY`", "index$": 15 }], "id": { "field": "id", "name": "id" }, "name": "employee_health_insurance_policy", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "x_platform_id", "orig": "x_platform_id", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a", "kind": "param", "name": "employee_id", "orig": "employee_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a", "kind": "param", "name": "id", "orig": "employee_policy_id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /employees/{employee_id}/health_insurance/policies/{employee_policy_id}", "json": "{\"operationId\":\"RetrieveEmployeeHealthInsurancePolicy\",\"parameters\":[{\"in\":\"path\",\"name\":\"employee_id\",\"required\":true,\"schema\":{\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"}},{\"in\":\"path\",\"name\":\"employee_policy_id\",\"required\":true,\"schema\":{\"example\":\"eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"eehp_.+\",\"type\":\"string\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"cancellation_date\":{\"description\":\"Policy was cancelled on this date, if cancellation occured\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":[\"null\",\"string\"]},\"coverage_level\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"documents\":{\"description\":\"Documents related to the health insurance plan, these documents may change at renewal, this includes the documents like `Insurance Product Information Document`, `Hospital Lists`, `Table of Cover` etc\",\"items\":{\"additionalProperties\":false,\"properties\":{\"link\":{\"description\":\"Health Insurance Document Link (can be a link to a website or a file path)\",\"type\":\"string\"},\"title\":{\"description\":\"Health Insurance Document Title\",\"type\":\"string\"}},\"required\":[\"link\",\"title\"],\"type\":\"object\"},\"type\":\"array\"},\"plan_currency\":{\"allOf\":[{\"enum\":[\"eur\",\"aed\",\"afn\",\"xcd\",\"all\",\"amd\",\"aoa\",\"ars\",\"usd\",\"aud\",\"awg\",\"azn\",\"bam\",\"bbd\",\"bdt\",\"xof\",\"bgn\",\"bhd\",\"bif\",\"bmd\",\"bnd\",\"bob\",\"bov\",\"brl\",\"bsd\",\"inr\",\"btn\",\"nok\",\"bwp\",\"byn\",\"bzd\",\"cad\",\"xaf\",\"cdf\",\"chf\",\"che\",\"chw\",\"nzd\",\"clp\",\"clf\",\"cny\",\"cop\",\"cou\",\"crc\",\"cup\",\"cuc\",\"cve\",\"ang\",\"czk\",\"djf\",\"dkk\",\"dop\",\"dzd\",\"egp\",\"mad\",\"ern\",\"etb\",\"fjd\",\"fkp\",\"mdl\",\"gbp\",\"gel\",\"ghs\",\"gip\",\"gmd\",\"gnf\",\"gtq\",\"gyd\",\"hkd\",\"hnl\",\"hrk\",\"htg\",\"huf\",\"idr\",\"xdr\",\"ils\",\"iqd\",\"irr\",\"isk\",\"jmd\",\"jod\",\"jpy\",\"kes\",\"kgs\",\"khr\",\"kmf\",\"kpw\",\"krw\",\"kwd\",\"kyd\",\"kzt\",\"lak\",\"lbp\",\"lkr\",\"lrd\",\"lsl\",\"zar\",\"lyd\",\"mga\",\"mkd\",\"mmk\",\"mnt\",\"mop\",\"mru\",\"mur\",\"mvr\",\"mwk\",\"mxn\",\"mxv\",\"myr\",\"mzn\",\"nad\",\"xpf\",\"ngn\",\"nio\",\"npr\",\"omr\",\"pab\",\"pen\",\"pgk\",\"php\",\"pkr\",\"pln\",\"pyg\",\"qar\",\"ron\",\"rsd\",\"rub\",\"rwf\",\"sar\",\"sbd\",\"scr\",\"sdg\",\"sek\",\"sgd\",\"shp\",\"sll\",\"sos\",\"srd\",\"ssp\",\"stn\",\"svc\",\"xsu\",\"syp\",\"twd\",\"szl\",\"thb\",\"tjs\",\"tmt\",\"tnd\",\"top\",\"try\",\"ttd\",\"tzs\",\"uah\",\"ugx\",\"usn\",\"uyu\",\"uyi\",\"uyw\",\"uzs\",\"ves\",\"vnd\",\"vuv\",\"wst\",\"yer\",\"xua\",\"zmw\",\"zwl\"],\"type\":\"string\"}],\"description\":\"Currency code of the health insurance plan\"},\"plan_id\":{\"description\":\"Unique identifier for the health insurance plan\",\"example\":\"pl_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pl_.+\",\"type\":\"string\"},\"plan_name\":{\"description\":\"Name of the health insurance plan\",\"type\":\"string\"},\"provider_employer_platform_url\":{\"description\":\"URL to the health insurance provider's website for Employer Management\",\"type\":[\"null\",\"string\"]},\"provider_logo_url\":{\"description\":\"Logo URL of the health insurance provider\",\"type\":\"string\"},\"provider_name\":{\"description\":\"Name of the health insurance provider\",\"type\":\"string\"},\"provider_support_phone\":{\"description\":\"Support phone number to the health insurance provider's website for Employer Management\",\"type\":[\"null\",\"string\"]}},\"required\":[\"documents\",\"plan_currency\",\"plan_id\",\"plan_name\",\"provider_logo_url\",\"provider_name\"],\"type\":\"object\"}],\"description\":\"Represents the current coverage level for the policy\"},\"employee_id\":{\"description\":\"The Id of the employee for which the policy is created\",\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"},\"employer_id\":{\"description\":\"The Id of the employer for which the policy is created\",\"example\":\"er_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"er_.+\",\"type\":\"string\"},\"end_date\":{\"description\":\"Policy ends on this date\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"enrolled_dependants_count\":{\"description\":\"Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy.\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"enrolment_type\":{\"allOf\":[{\"enum\":[\"opt_out\",\"opt_in\"],\"type\":\"string\"}],\"description\":\"Enrolment type of the policy\"},\"estimated_gross_premium\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"currency\":{\"allOf\":[{\"enum\":[\"eur\",\"aed\",\"afn\",\"xcd\",\"all\",\"amd\",\"aoa\",\"ars\",\"usd\",\"aud\",\"awg\",\"azn\",\"bam\",\"bbd\",\"bdt\",\"xof\",\"bgn\",\"bhd\",\"bif\",\"bmd\",\"bnd\",\"bob\",\"bov\",\"brl\",\"bsd\",\"inr\",\"btn\",\"nok\",\"bwp\",\"byn\",\"bzd\",\"cad\",\"xaf\",\"cdf\",\"chf\",\"che\",\"chw\",\"nzd\",\"clp\",\"clf\",\"cny\",\"cop\",\"cou\",\"crc\",\"cup\",\"cuc\",\"cve\",\"ang\",\"czk\",\"djf\",\"dkk\",\"dop\",\"dzd\",\"egp\",\"mad\",\"ern\",\"etb\",\"fjd\",\"fkp\",\"mdl\",\"gbp\",\"gel\",\"ghs\",\"gip\",\"gmd\",\"gnf\",\"gtq\",\"gyd\",\"hkd\",\"hnl\",\"hrk\",\"htg\",\"huf\",\"idr\",\"xdr\",\"ils\",\"iqd\",\"irr\",\"isk\",\"jmd\",\"jod\",\"jpy\",\"kes\",\"kgs\",\"khr\",\"kmf\",\"kpw\",\"krw\",\"kwd\",\"kyd\",\"kzt\",\"lak\",\"lbp\",\"lkr\",\"lrd\",\"lsl\",\"zar\",\"lyd\",\"mga\",\"mkd\",\"mmk\",\"mnt\",\"mop\",\"mru\",\"mur\",\"mvr\",\"mwk\",\"mxn\",\"mxv\",\"myr\",\"mzn\",\"nad\",\"xpf\",\"ngn\",\"nio\",\"npr\",\"omr\",\"pab\",\"pen\",\"pgk\",\"php\",\"pkr\",\"pln\",\"pyg\",\"qar\",\"ron\",\"rsd\",\"rub\",\"rwf\",\"sar\",\"sbd\",\"scr\",\"sdg\",\"sek\",\"sgd\",\"shp\",\"sll\",\"sos\",\"srd\",\"ssp\",\"stn\",\"svc\",\"xsu\",\"syp\",\"twd\",\"szl\",\"thb\",\"tjs\",\"tmt\",\"tnd\",\"top\",\"try\",\"ttd\",\"tzs\",\"uah\",\"ugx\",\"usn\",\"uyu\",\"uyi\",\"uyw\",\"uzs\",\"ves\",\"vnd\",\"vuv\",\"wst\",\"yer\",\"xua\",\"zmw\",\"zwl\"],\"type\":\"string\"}],\"description\":\"Three-letter currency code (e.g., \\\"EUR\\\", \\\"USD\\\", \\\"GBP\\\") for all monetary amounts in this object.\"},\"monthly\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"employee_contribution\":{\"description\":\"Estimated gross premium amount deducted from employee payroll\",\"example\":123.45,\"format\":\"double\",\"type\":\"number\"},\"employer_contribution\":{\"description\":\"Estimated gross premium amount paid by the employer\",\"example\":123.45,\"format\":\"double\",\"type\":\"number\"},\"total\":{\"description\":\"Total gross premium amount (sum of employee and employer contributions).\",\"example\":123.45,\"format\":\"double\",\"type\":\"number\"}},\"required\":[\"employee_contribution\",\"employer_contribution\",\"total\"],\"type\":\"object\"}],\"description\":\"Estimated monthly gross premium amounts representing regular monthly charges.\"},\"term\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"employee_contribution\":{\"description\":\"Estimated gross premium amount deducted from employee payroll\",\"example\":123.45,\"format\":\"double\",\"type\":\"number\"},\"employer_contribution\":{\"description\":\"Estimated gross premium amount paid by the employer\",\"example\":123.45,\"format\":\"double\",\"type\":\"number\"},\"total\":{\"description\":\"Total gross premium amount (sum of employee and employer contributions).\",\"example\":123.45,\"format\":\"double\",\"type\":\"number\"}},\"required\":[\"employee_contribution\",\"employer_contribution\",\"total\"],\"type\":\"object\"}],\"description\":\"Estimated total gross premium amounts for the complete policy term from start date to renewal date. Note: These amounts reflect the full policy term and do not adjust for early cancellation.\"}},\"required\":[\"currency\",\"monthly\",\"term\"],\"type\":\"object\"}],\"description\":\"Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. Important: These estimates are for planning purposes only and may differ from actual billed amounts due to life events, policy changes, insurer billing practices, or timing adjustments. For accurate payroll amounts, use the Contribution Reporting API.\"},\"external_customer_id\":{\"description\":\"A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. the company using the EoR service) for which the employee is employed. This ID groups employees under this Customer, enabling the aggregation of contribution reporting and other values per Customer rather than per legal entity. This parameter is only available to EoR platforms.\",\"type\":[\"null\",\"string\"]},\"id\":{\"description\":\"Unique identifier for policy\",\"example\":\"eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"eehp_.+\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"opt_out_deadline_date\":{\"description\":\"Last day to opt out from the policy\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"policy_number\":{\"description\":\"Health insurance policy number, if available\",\"type\":[\"null\",\"string\"]},\"renewal\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"decision_confirmed\":{\"description\":\"Whether the decision to renew the policy has been confirmed\",\"example\":true,\"type\":\"boolean\"},\"renewal_date\":{\"description\":\"Policy renewal date\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"renewed_health_insurance_id\":{\"description\":\"The ID of the renewed health insurance policy, if renewed\",\"example\":\"eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"eehp_.+\",\"type\":[\"null\",\"string\"]},\"status\":{\"allOf\":[{\"enum\":[\"upcoming\",\"open\",\"renewed\",\"cancelled\"],\"type\":\"string\"}],\"description\":\"The current status of the renewal\"},\"window_end_date\":{\"description\":\"Renewal window ends at the end of this day\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"window_start_date\":{\"description\":\"Renewal window starts on this day\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"decision_confirmed\",\"renewal_date\",\"status\",\"window_end_date\",\"window_start_date\"],\"type\":\"object\"}],\"description\":\"Renewal information for the policy\"},\"start_date\":{\"description\":\"Policy starts on this date\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"status\":{\"allOf\":[{\"enum\":[\"scheduled\",\"active\",\"expired\",\"cancelled\"],\"type\":\"string\"}],\"description\":\"Current status of policy\"}},\"required\":[\"coverage_level\",\"employee_id\",\"employer_id\",\"end_date\",\"enrolled_dependants_count\",\"enrolment_type\",\"estimated_gross_premium\",\"id\",\"opt_out_deadline_date\",\"renewal\",\"start_date\",\"status\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/employees/{employee_id}/health_insurance/policies/{employee_policy_id}", "rename": { "param": { "employee_policy_id": "id" } }, "segments": [{ "lit": "employees" }, { "var": "employee_id" }, { "lit": "health_insurance" }, { "lit": "policies" }, { "var": "id" }], "select": { "exist": ["employee_id", "id", "x_platform_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["employee"]] }, "key$": "employee_health_insurance_policy", "name__orig": "employee_health_insurance_policy", "Name": "EmployeeHealthInsurancePolicy", "name_": "employee_health_insurance_policy", "name-": "employee-health-insurance-policy", "NAME": "EMPLOYEE_HEALTH_INSURANCE_POLICY", "index$": 13 }, { "active": true, "entity": "employee_health_insurance_policy", "key$": "BasicEmployeeHealthInsurancePolicyFlow", "kind": "basic", "name": "BasicEmployeeHealthInsurancePolicyFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "employee_health_insurance_policy_ref01", "srcdatavar": "employee_health_insurance_policy_ref01_data", "suffix": "_dt0" }, "match": { "employee_id": "employee01", "id": "employee_health_insurance_policy01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-employee_health_insurance_policy_ref01" } }], "index$": 0 }] }, 'EmployeeHealthInsurancePolicy');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let employee_health_insurance_policy_ref01_data = Object.values(setup.data.existing.employee_health_insurance_policy)[0];
        // LOAD
        const employee_health_insurance_policy_ref01_ent = client.EmployeeHealthInsurancePolicy();
        const employee_health_insurance_policy_ref01_match_dt0 = {};
        employee_health_insurance_policy_ref01_match_dt0.id = employee_health_insurance_policy_ref01_data.id;
        const employee_health_insurance_policy_ref01_data_dt0 = (await employee_health_insurance_policy_ref01_ent.load(employee_health_insurance_policy_ref01_match_dt0)).data();
        (0, node_assert_1.default)(employee_health_insurance_policy_ref01_data_dt0.id === employee_health_insurance_policy_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/employee_health_insurance_policy/EmployeeHealthInsurancePolicyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KotaSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['employee_health_insurance_policy01', 'employee_health_insurance_policy02', 'employee_health_insurance_policy03', 'employee01', 'employee02', 'employee03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_POLICY_ENTID': idmap,
        'KOTA_TEST_LIVE': 'FALSE',
        'KOTA_TEST_EXPLAIN': 'FALSE',
        'KOTA_APIKEY': '',
    });
    idmap = env['KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_POLICY_ENTID'];
    const live = 'TRUE' === env.KOTA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_POLICY_ENTID'];
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
//# sourceMappingURL=EmployeeHealthInsurancePolicyEntity.test.js.map