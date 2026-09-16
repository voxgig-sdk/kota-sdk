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
(0, node_test_1.describe)('ContributionReportEmployeeBreakdownEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOTA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KotaSDK.test();
        const ent = testsdk.ContributionReportEmployeeBreakdown();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOTA_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'contribution_report_employee_breakdown.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "contribution_report_id", "req": true, "short": "Unique identifier of the related contribution report", "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "date-time", "name": "created_at", "req": true, "short": "Date and time the breakdown was created", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "currency", "req": true, "short": "The currency in which all the amounts in this breakdown are presented (e.g.", "type": "`$ANY`", "index$": 2 }, { "active": true, "name": "employee_id", "req": true, "short": "Unique identifier of the employee for which the breakdown is created", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "employer_id", "req": true, "short": "Unique identifier of the employer for which the breakdown is created", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "external_customer_id", "req": false, "short": "Unique identifier of the customer for which the breakdown is created.", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 5 }, { "active": true, "format": "date-time", "name": "finalized_at", "req": false, "short": "Date and time the breakdown was finalized, if applicable", "type": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "index$": 6 }, { "active": true, "name": "health_insurance", "req": true, "short": "Health insurance contribution details", "type": "`$ANY`", "index$": 7 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "format": "date-time", "name": "last_updated_at", "req": true, "short": "Date and time of the last update to the breakdown", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "object", "readOnly": true, "req": false, "short": "The object type", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "period", "req": true, "short": "Period covered by the employee breakdown", "type": "`$ANY`", "index$": 11 }, { "active": true, "name": "status", "req": true, "short": "Current status of the breakdown", "type": "`$ANY`", "index$": 12 }], "id": { "field": "id", "name": "id" }, "name": "contribution_report_employee_breakdown", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "header": [{ "active": true, "kind": "header", "name": "x_platform_id", "orig": "x_platform_id", "reqd": false, "type": "`$STRING`" }], "params": [{ "active": true, "example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a", "kind": "param", "name": "contribution_report_id", "orig": "contribution_report_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a", "kind": "param", "name": "id", "orig": "employee_id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}", "json": "{\"operationId\":\"RetrieveEmployeeBreakdownForContributionReport\",\"parameters\":[{\"in\":\"path\",\"name\":\"contribution_report_id\",\"required\":true,\"schema\":{\"example\":\"ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ctr_.+\",\"type\":\"string\"}},{\"in\":\"path\",\"name\":\"employee_id\",\"required\":true,\"schema\":{\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"contribution_report_id\":{\"description\":\"Unique identifier of the related contribution report\",\"example\":\"ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ctr_.+\",\"type\":\"string\"},\"created_at\":{\"description\":\"Date and time the breakdown was created\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"currency\":{\"allOf\":[{\"enum\":[\"eur\",\"aed\",\"afn\",\"xcd\",\"all\",\"amd\",\"aoa\",\"ars\",\"usd\",\"aud\",\"awg\",\"azn\",\"bam\",\"bbd\",\"bdt\",\"xof\",\"bgn\",\"bhd\",\"bif\",\"bmd\",\"bnd\",\"bob\",\"bov\",\"brl\",\"bsd\",\"inr\",\"btn\",\"nok\",\"bwp\",\"byn\",\"bzd\",\"cad\",\"xaf\",\"cdf\",\"chf\",\"che\",\"chw\",\"nzd\",\"clp\",\"clf\",\"cny\",\"cop\",\"cou\",\"crc\",\"cup\",\"cuc\",\"cve\",\"ang\",\"czk\",\"djf\",\"dkk\",\"dop\",\"dzd\",\"egp\",\"mad\",\"ern\",\"etb\",\"fjd\",\"fkp\",\"mdl\",\"gbp\",\"gel\",\"ghs\",\"gip\",\"gmd\",\"gnf\",\"gtq\",\"gyd\",\"hkd\",\"hnl\",\"hrk\",\"htg\",\"huf\",\"idr\",\"xdr\",\"ils\",\"iqd\",\"irr\",\"isk\",\"jmd\",\"jod\",\"jpy\",\"kes\",\"kgs\",\"khr\",\"kmf\",\"kpw\",\"krw\",\"kwd\",\"kyd\",\"kzt\",\"lak\",\"lbp\",\"lkr\",\"lrd\",\"lsl\",\"zar\",\"lyd\",\"mga\",\"mkd\",\"mmk\",\"mnt\",\"mop\",\"mru\",\"mur\",\"mvr\",\"mwk\",\"mxn\",\"mxv\",\"myr\",\"mzn\",\"nad\",\"xpf\",\"ngn\",\"nio\",\"npr\",\"omr\",\"pab\",\"pen\",\"pgk\",\"php\",\"pkr\",\"pln\",\"pyg\",\"qar\",\"ron\",\"rsd\",\"rub\",\"rwf\",\"sar\",\"sbd\",\"scr\",\"sdg\",\"sek\",\"sgd\",\"shp\",\"sll\",\"sos\",\"srd\",\"ssp\",\"stn\",\"svc\",\"xsu\",\"syp\",\"twd\",\"szl\",\"thb\",\"tjs\",\"tmt\",\"tnd\",\"top\",\"try\",\"ttd\",\"tzs\",\"uah\",\"ugx\",\"usn\",\"uyu\",\"uyi\",\"uyw\",\"uzs\",\"ves\",\"vnd\",\"vuv\",\"wst\",\"yer\",\"xua\",\"zmw\",\"zwl\"],\"type\":\"string\"}],\"description\":\"The currency in which all the amounts in this breakdown are presented (e.g. `eur`)\"},\"employee_id\":{\"description\":\"Unique identifier of the employee for which the breakdown is created\",\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"},\"employer_id\":{\"description\":\"Unique identifier of the employer for which the breakdown is created\",\"example\":\"er_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"er_.+\",\"type\":\"string\"},\"external_customer_id\":{\"description\":\"Unique identifier of the customer for which the breakdown is created. This identifier is assigned by the Employer of Record (EoR) platform to the Customer (i.e. the company using the EoR service) for which the employee is employed. This parameter is only available to EoR platforms.\",\"type\":[\"null\",\"string\"]},\"finalized_at\":{\"description\":\"Date and time the breakdown was finalized, if applicable\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":[\"null\",\"string\"]},\"health_insurance\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"employee_contributions\":{\"description\":\"Employee health insurance contributions\",\"items\":{\"additionalProperties\":false,\"properties\":{\"adjustment\":{\"description\":\"Indicates if this contribution is an adjustment to a previous charge\",\"example\":true,\"type\":\"boolean\"},\"adjustment_for\":{\"description\":\"Unique identifier of the original contribution being adjusted, if applicable\",\"example\":\"ct_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ct_.+\",\"type\":[\"null\",\"string\"]},\"amount\":{\"description\":\"The monetary value of the contribution\",\"example\":123.45,\"format\":\"double\",\"type\":\"number\"},\"category\":{\"allOf\":[{\"enum\":[\"gross_premium\",\"tax\",\"tax_relief\"],\"type\":\"string\"}],\"description\":\"Category of the contribution\"},\"cover_period\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"from_date\":{\"description\":\"Start date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"to_date\":{\"description\":\"End date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"from_date\",\"to_date\"],\"type\":\"object\"}],\"description\":\"The health insurance period the contribution applies to\"},\"employee_policy_id\":{\"deprecated\":true,\"description\":\"DEPRECATED: Use `policy_id` instead. The employee health insurance policy the contribution applies to. Prefixed with `eehp_`.\",\"example\":\"eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"eehp_.+\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the contribution entry\",\"example\":\"ct_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ct_.+\",\"type\":\"string\"},\"member_type\":{\"allOf\":[{\"enum\":[\"policyholder\",\"partner_dependant\",\"child_dependant\"],\"type\":\"string\"}],\"description\":\"Type of member for the contribution\"},\"note\":{\"description\":\"Optional field for additional context, e.g. if the amount is pro-rated or backdated\",\"type\":[\"null\",\"string\"]},\"policy_id\":{\"description\":\"The policy the contribution applies to. Prefixed with `p_`.\",\"example\":\"p_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"p_.+\",\"type\":\"string\"},\"reporting_month\":{\"description\":\"The primary month for which the contribution is relevant, helping to align contributions with standard monthly reporting cycles. It allows for consistent monthly categorisation in systems that require calendar-based reporting. Provided in `YYYY-MM-DD` format (with the day set to `01` as a convention), only the year and month are relevant.\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"type\":{\"allOf\":[{\"enum\":[\"recurring\",\"one_off\"],\"type\":\"string\"}],\"description\":\"Type of the contribution\"}},\"required\":[\"adjustment\",\"amount\",\"category\",\"cover_period\",\"employee_policy_id\",\"id\",\"member_type\",\"policy_id\",\"reporting_month\",\"type\"],\"type\":\"object\"},\"type\":\"array\"},\"employer_contributions\":{\"description\":\"Employer health insurance contributions\",\"items\":{\"additionalProperties\":false,\"properties\":{\"adjustment\":{\"description\":\"Indicates if this contribution is an adjustment to a previous charge\",\"example\":true,\"type\":\"boolean\"},\"adjustment_for\":{\"description\":\"Unique identifier of the original contribution being adjusted, if applicable\",\"example\":\"ct_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ct_.+\",\"type\":[\"null\",\"string\"]},\"amount\":{\"description\":\"The monetary value of the contribution\",\"example\":123.45,\"format\":\"double\",\"type\":\"number\"},\"category\":{\"allOf\":[{\"enum\":[\"gross_premium\",\"tax\",\"tax_relief\"],\"type\":\"string\"}],\"description\":\"Category of the contribution\"},\"cover_period\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"from_date\":{\"description\":\"Start date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"to_date\":{\"description\":\"End date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"from_date\",\"to_date\"],\"type\":\"object\"}],\"description\":\"The health insurance period the contribution applies to\"},\"employee_policy_id\":{\"deprecated\":true,\"description\":\"DEPRECATED: Use `policy_id` instead. The employee health insurance policy the contribution applies to. Prefixed with `eehp_`.\",\"example\":\"eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"eehp_.+\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the contribution entry\",\"example\":\"ct_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ct_.+\",\"type\":\"string\"},\"member_type\":{\"allOf\":[{\"enum\":[\"policyholder\",\"partner_dependant\",\"child_dependant\"],\"type\":\"string\"}],\"description\":\"Type of member for the contribution\"},\"note\":{\"description\":\"Optional field for additional context, e.g. if the amount is pro-rated or backdated\",\"type\":[\"null\",\"string\"]},\"policy_id\":{\"description\":\"The policy the contribution applies to. Prefixed with `p_`.\",\"example\":\"p_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"p_.+\",\"type\":\"string\"},\"reporting_month\":{\"description\":\"The primary month for which the contribution is relevant, helping to align contributions with standard monthly reporting cycles. It allows for consistent monthly categorisation in systems that require calendar-based reporting. Provided in `YYYY-MM-DD` format (with the day set to `01` as a convention), only the year and month are relevant.\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"type\":{\"allOf\":[{\"enum\":[\"recurring\",\"one_off\"],\"type\":\"string\"}],\"description\":\"Type of the contribution\"}},\"required\":[\"adjustment\",\"amount\",\"category\",\"cover_period\",\"employee_policy_id\",\"id\",\"member_type\",\"policy_id\",\"reporting_month\",\"type\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"employee_contributions\",\"employer_contributions\"],\"type\":\"object\"}],\"description\":\"Health insurance contribution details\"},\"last_updated_at\":{\"description\":\"Date and time of the last update to the breakdown\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"period\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"from_date\":{\"description\":\"Start date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"to_date\":{\"description\":\"End date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"from_date\",\"to_date\"],\"type\":\"object\"}],\"description\":\"Period covered by the employee breakdown\"},\"status\":{\"allOf\":[{\"enum\":[\"open\",\"finalized\"],\"type\":\"string\"}],\"description\":\"Current status of the breakdown\"}},\"required\":[\"contribution_report_id\",\"created_at\",\"currency\",\"employee_id\",\"employer_id\",\"health_insurance\",\"last_updated_at\",\"period\",\"status\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}", "rename": { "param": { "employee_id": "id" } }, "segments": [{ "lit": "contribution_reports" }, { "var": "contribution_report_id" }, { "lit": "employee_breakdowns" }, { "var": "id" }], "select": { "exist": ["contribution_report_id", "id", "x_platform_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["contribution_report"]] }, "key$": "contribution_report_employee_breakdown", "name__orig": "contribution_report_employee_breakdown", "Name": "ContributionReportEmployeeBreakdown", "name_": "contribution_report_employee_breakdown", "name-": "contribution-report-employee-breakdown", "NAME": "CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN", "index$": 3 }, { "active": true, "entity": "contribution_report_employee_breakdown", "key$": "BasicContributionReportEmployeeBreakdownFlow", "kind": "basic", "name": "BasicContributionReportEmployeeBreakdownFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "contribution_report_employee_breakdown_ref01", "srcdatavar": "contribution_report_employee_breakdown_ref01_data", "suffix": "_dt0" }, "match": { "contribution_report_id": "contribution_report01", "id": "contribution_report_employee_breakdown01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-contribution_report_employee_breakdown_ref01" } }], "index$": 0 }] }, 'ContributionReportEmployeeBreakdown');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let contribution_report_employee_breakdown_ref01_data = Object.values(setup.data.existing.contribution_report_employee_breakdown)[0];
        // LOAD
        const contribution_report_employee_breakdown_ref01_ent = client.ContributionReportEmployeeBreakdown();
        const contribution_report_employee_breakdown_ref01_match_dt0 = {};
        contribution_report_employee_breakdown_ref01_match_dt0.id = contribution_report_employee_breakdown_ref01_data.id;
        const contribution_report_employee_breakdown_ref01_data_dt0 = (await contribution_report_employee_breakdown_ref01_ent.load(contribution_report_employee_breakdown_ref01_match_dt0)).data();
        (0, node_assert_1.default)(contribution_report_employee_breakdown_ref01_data_dt0.id === contribution_report_employee_breakdown_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/contribution_report_employee_breakdown/ContributionReportEmployeeBreakdownTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KotaSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['contribution_report_employee_breakdown01', 'contribution_report_employee_breakdown02', 'contribution_report_employee_breakdown03', 'contribution_report01', 'contribution_report02', 'contribution_report03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_ENTID': idmap,
        'KOTA_TEST_LIVE': 'FALSE',
        'KOTA_TEST_EXPLAIN': 'FALSE',
        'KOTA_APIKEY': '',
    });
    idmap = env['KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_ENTID'];
    const live = 'TRUE' === env.KOTA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_ENTID'];
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
//# sourceMappingURL=ContributionReportEmployeeBreakdownEntity.test.js.map