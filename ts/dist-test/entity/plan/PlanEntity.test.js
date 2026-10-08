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
(0, node_test_1.describe)('PlanEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOTA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KotaSDK.test();
        const ent = testsdk.Plan();
        (0, node_assert_1.default)(null != ent);
    });
    class FailHook extends __1.BaseFeature {
        name = 'failhook';
        version = '0.0.1';
        active = true;
        unexpected = 0;
        init() { }
        PreSpec() { throw new Error('plan hook failed'); }
        PreUnexpected() { this.unexpected++; }
    }
    (0, node_test_1.test)('stream-error', async () => {
        const offline = { net: { offline: true } };
        await node_assert_1.default.rejects(async () => {
            for await (const _item of __1.KotaSDK.test(offline).Plan().stream('list')) { }
        }, /offline/);
        for await (const _item of __1.KotaSDK.test(offline).Plan()
            .stream('list', undefined, { ctrl: { throw: false } })) { }
        if (null != __1.config.feature?.rbac) {
            const denied = __1.KotaSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } });
            await node_assert_1.default.rejects(async () => {
                for await (const _item of denied.Plan().stream('list')) { }
            }, (err) => 'rbac_denied' === err.code);
        }
    });
    (0, node_test_1.test)('stream-ctrl', async () => {
        const explain = {};
        const ctrl = { explain };
        for await (const _item of __1.KotaSDK.test().Plan().stream('list', undefined, { ctrl })) { }
        node_assert_1.default.deepStrictEqual(Object.keys(ctrl), ['explain']);
        (0, node_assert_1.default)(explain === ctrl.explain && 0 < Object.keys(explain).length);
    });
    (0, node_test_1.test)('unexpected', async () => {
        const hook = new FailHook();
        const client = new __1.KotaSDK({ feature: { test: { active: true } }, extend: [hook] });
        await node_assert_1.default.rejects(client.Plan().list(), /hook failed/);
        (0, node_assert_1.default)(0 < hook.unexpected);
        const fired = hook.unexpected;
        node_assert_1.default.strictEqual(await client.Plan().list(undefined, { throw: false }), undefined);
        (0, node_assert_1.default)(fired < hook.unexpected);
    });
    (0, node_test_1.test)('validate', async (t) => {
        if (null == __1.config.feature?.validate) {
            t.skip('feature not present in this SDK: validate');
            return;
        }
        const client = __1.KotaSDK.test(undefined, { feature: { validate: { active: true } } });
        await node_assert_1.default.rejects(client.Plan().list({ "available_on": 1 }), (err) => 'validate_failed' === err.code);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOTA_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'plan.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "available_from": { "a": true, "fo": "date", "h": "Available From", "n": "available_from", "r": true, "sh": "The date from which this plan is available (inclusive).", "t": "`$STRING`", "key$": "available_from", "index$": 0 }, "available_to": { "a": true, "fo": "date", "h": "Available To", "n": "available_to", "r": false, "sh": "The date until which this plan is available (inclusive).", "t": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "key$": "available_to", "index$": 1 }, "country": { "a": true, "h": "Country", "n": "country", "r": true, "sh": "The country this plan is available in.", "t": "`$STRING`", "key$": "country", "index$": 2 }, "coverage_options": { "a": true, "h": "Coverage Options", "n": "coverage_options", "r": false, "sh": "Coverage options available for this plan, organized by scope and input type.", "t": ["`$ONE`", ["`$NULL`", "`$ARRAY`"]], "key$": "coverage_options", "index$": 3 }, "description": { "a": true, "h": "Description", "n": "description", "r": true, "sh": "Description of the plan.", "t": "`$STRING`", "key$": "description", "index$": 4 }, "disclosures": { "a": true, "h": "Disclosures", "n": "disclosures", "r": true, "sh": "Disclosures associated with this plan.", "t": "`$ARRAY`", "key$": "disclosures", "index$": 5 }, "documents": { "a": true, "h": "Documents", "n": "documents", "r": true, "sh": "List of plan documents (e.g., IPIDs, T&Cs).", "t": "`$ARRAY`", "key$": "documents", "index$": 6 }, "eligible_count": { "a": true, "fo": "int32", "h": "Eligible Count", "n": "eligible_count", "r": false, "sh": "Number of employees in the queried group eligible for this plan as-of `start_date`.", "t": ["`$ONE`", ["`$NULL`", "`$INTEGER`"]], "key$": "eligible_count", "index$": 7 }, "employee_eligibility_criteria": { "a": true, "h": "Employee Eligibility Criteria", "n": "employee_eligibility_criteria", "r": true, "sh": "Eligibility criteria that employees must meet.", "t": "`$ARRAY`", "key$": "employee_eligibility_criteria", "index$": 8 }, "employer_eligibility_criteria": { "a": true, "h": "Employer Eligibility Criteria", "n": "employer_eligibility_criteria", "r": true, "sh": "Eligibility criteria that employers must meet.", "t": "`$ARRAY`", "key$": "employer_eligibility_criteria", "index$": 9 }, "health_insurance": { "a": true, "h": "Health Insurance", "n": "health_insurance", "r": false, "sh": "Health insurance-specific details.", "t": "`$NULL`", "key$": "health_insurance", "index$": 10 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the plan.", "t": "`$STRING`", "key$": "id", "index$": 11 }, "indicative_pricing": { "a": true, "h": "Indicative Pricing", "n": "indicative_pricing", "r": false, "sh": "Average monthly guide prices used when exact catalog pricing is unavailable.", "t": "`$NULL`", "key$": "indicative_pricing", "index$": 12 }, "ineligible_count": { "a": true, "fo": "int32", "h": "Ineligible Count", "n": "ineligible_count", "r": false, "sh": "Number of employees in the queried group ineligible for this plan as-of `start_date`.", "t": ["`$ONE`", ["`$NULL`", "`$INTEGER`"]], "key$": "ineligible_count", "index$": 13 }, "life_assurance": { "a": true, "h": "Life Assurance", "n": "life_assurance", "r": false, "sh": "Life assurance-specific details.", "t": "`$NULL`", "key$": "life_assurance", "index$": 14 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "The name of the plan.", "t": "`$STRING`", "key$": "name", "index$": 15 }, "object": { "a": true, "h": "Object", "n": "object", "r": false, "ro": true, "sh": "Object type.", "t": "`$STRING`", "key$": "object", "index$": 16 }, "provider": { "a": true, "h": "Provider", "n": "provider", "r": true, "sh": "The provider offering this plan.", "t": "`$ANY`", "key$": "provider", "index$": 17 }, "total_count": { "a": true, "fo": "int32", "h": "Total Count", "n": "total_count", "r": false, "sh": "Total employees in the queried group.", "t": ["`$ONE`", ["`$NULL`", "`$INTEGER`"]], "key$": "total_count", "index$": 18 }, "type": { "a": true, "h": "Type", "n": "type", "r": true, "sh": "The benefit type of the plan.", "t": "`$STRING`", "key$": "type", "index$": 19 } }, "id": { "field": "id", "name": "id" }, "name": "plan", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /plans", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "x_platform_id", "or": "X-Platform-Id", "r": false, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "available_on", "or": "available_on", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "country", "or": "country", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a", "k": "query", "n": "group_id", "or": "group_id", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "provider_id", "or": "provider_id", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "sort_by", "or": "sort_by", "r": false, "t": "`$STRING`", "index$": 6 }, { "a": true, "k": "query", "n": "sort_dir", "or": "sort_dir", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "start_date", "or": "start_date", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": false, "t": "`$STRING`", "index$": 9 }] }, "k": "http", "m": "GET", "o": "/plans", "q": {}, "r": {}, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "plans" }], "t": { "req": "`reqdata`", "res": "`body.items`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /plans/{plan_id}", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "x_platform_id", "or": "X-Platform-Id", "r": false, "t": "`$STRING`", "index$": 0 }], "params": [{ "a": true, "ex": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a", "k": "param", "n": "id", "or": "plan_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a", "k": "query", "n": "group_id", "or": "group_id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "start_date", "or": "start_date", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/plans/{plan_id}", "q": { "exist": ["id"] }, "r": { "param": { "plan_id": "id" } }, "rs": { "kind": "json", "media": "application/json" }, "s": [{ "lit": "plans" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "plan", "name__orig": "plan", "Name": "Plan", "name_": "plan", "name-": "plan", "NAME": "PLAN", "index$": 32 }, { "active": true, "entity": "plan", "key$": "BasicPlanFlow", "kind": "basic", "name": "BasicPlanFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "plan_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "plan_ref01", "srcdatavar": "plan_ref01_data", "suffix": "_dt0" }, "m": { "id": "plan01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-plan_ref01" } }], "index$": 1 }] }, 'Plan', { "GET /plans": { "protocol": "http", "parameters": [{ "name": "type", "in": "query", "description": "Multiple values can be provided by separating them with a comma. Allowed values are: `health_insurance`, `life_assurance`.", "schema": { "type": "string" }, "index$": 0 }, { "name": "provider_id", "in": "query", "description": "Multiple values can be provided by separating them with a comma. Allowed values are: `pr_allianz`, `pr_irishlifehealth`, `pr_vitality`, `pr_onvz`, `pr_freedom`, `pr_sanitas`, `pr_canadalife`, `pr_hallesche`, `pr_bupa`, `pr_dansksundhedssikring`, `pr_allianzkpt`, `pr_freedomuk`, `pr_bupaglobal`, `pr_expatriate`, `pr_gsmc`, `pr_axafrance`, `pr_greateastern`, `pr_tokiomarine`.", "schema": { "type": "string" }, "index$": 1 }, { "name": "country", "in": "query", "description": "Filters plans by country.", "schema": { "enum": ["af", "ax", "al", "dz", "as", "ad", "ao", "ai", "aq", "ag", "ar", "am", "aw", "au", "at", "az", "bs", "bh", "bd", "bb", "by", "be", "bz", "bj", "bm", "bt", "bo", "bq", "ba", "bw", "bv", "br", "io", "bn", "bg", "bf", "bi", "cv", "kh", "cm", "ca", "ky", "cf", "td", "cl", "cn", "cx", "cc", "co", "km", "cg", "cd", "ck", "cr", "ci", "hr", "cu", "cw", "cy", "cz", "dk", "dj", "dm", "do", "ec", "eg", "sv", "gq", "er", "ee", "sz", "et", "fk", "fo", "fj", "fi", "fr", "gf", "pf", "tf", "ga", "gm", "ge", "de", "gh", "gi", "gr", "gl", "gd", "gp", "gu", "gt", "gg", "gn", "gw", "gy", "ht", "hm", "va", "hn", "hk", "hu", "is", "in", "id", "ir", "iq", "ie", "im", "il", "it", "jm", "jp", "je", "jo", "kz", "ke", "ki", "kp", "kr", "xk", "kw", "kg", "la", "lv", "lb", "ls", "lr", "ly", "li", "lt", "lu", "mo", "mg", "mw", "my", "mv", "ml", "mt", "mh", "mq", "mr", "mu", "yt", "mx", "fm", "md", "mc", "mn", "me", "ms", "ma", "mz", "mm", "na", "nr", "np", "nl", "nc", "nz", "ni", "ne", "ng", "nu", "nf", "mk", "mp", "no", "om", "pk", "pw", "ps", "pa", "pg", "py", "pe", "ph", "pn", "pl", "pt", "pr", "qa", "re", "ro", "ru", "rw", "bl", "sh", "kn", "lc", "mf", "pm", "vc", "ws", "sm", "st", "sa", "sn", "rs", "sc", "sl", "sg", "sx", "sk", "si", "sb", "so", "za", "gs", "ss", "es", "lk", "sd", "sr", "sj", "se", "ch", "sy", "tw", "tj", "tz", "th", "tl", "tg", "tk", "to", "tt", "tn", "tr", "tm", "tc", "tv", "ug", "ua", "ae", "gb", "um", "us", "uy", "uz", "vu", "ve", "vn", "vg", "vi", "wf", "eh", "ye", "zm", "zw"], "type": "string", "allOf": [{ "enum": ["af", "ax", "al", "dz", "as", "ad", "ao", "ai", "aq", "ag", "ar", "am", "aw", "au", "at", "az", "bs", "bh", "bd", "bb", "by", "be", "bz", "bj", "bm", "bt", "bo", "bq", "ba", "bw", "bv", "br", "io", "bn", "bg", "bf", "bi", "cv", "kh", "cm", "ca", "ky", "cf", "td", "cl", "cn", "cx", "cc", "co", "km", "cg", "cd", "ck", "cr", "ci", "hr", "cu", "cw", "cy", "cz", "dk", "dj", "dm", "do", "ec", "eg", "sv", "gq", "er", "ee", "sz", "et", "fk", "fo", "fj", "fi", "fr", "gf", "pf", "tf", "ga", "gm", "ge", "de", "gh", "gi", "gr", "gl", "gd", "gp", "gu", "gt", "gg", "gn", "gw", "gy", "ht", "hm", "va", "hn", "hk", "hu", "is", "in", "id", "ir", "iq", "ie", "im", "il", "it", "jm", "jp", "je", "jo", "kz", "ke", "ki", "kp", "kr", "xk", "kw", "kg", "la", "lv", "lb", "ls", "lr", "ly", "li", "lt", "lu", "mo", "mg", "mw", "my", "mv", "ml", "mt", "mh", "mq", "mr", "mu", "yt", "mx", "fm", "md", "mc", "mn", "me", "ms", "ma", "mz", "mm", "na", "nr", "np", "nl", "nc", "nz", "ni", "ne", "ng", "nu", "nf", "mk", "mp", "no", "om", "pk", "pw", "ps", "pa", "pg", "py", "pe", "ph", "pn", "pl", "pt", "pr", "qa", "re", "ro", "ru", "rw", "bl", "sh", "kn", "lc", "mf", "pm", "vc", "ws", "sm", "st", "sa", "sn", "rs", "sc", "sl", "sg", "sx", "sk", "si", "sb", "so", "za", "gs", "ss", "es", "lk", "sd", "sr", "sj", "se", "ch", "sy", "tw", "tj", "tz", "th", "tl", "tg", "tk", "to", "tt", "tn", "tr", "tm", "tc", "tv", "ug", "ua", "ae", "gb", "um", "us", "uy", "uz", "vu", "ve", "vn", "vg", "vi", "wf", "eh", "ye", "zm", "zw"], "type": "string", "additionalProperties": false, "x-ref": "#/components/schemas/CountryCodeEnumParameter" }], "description": "Filters plans by country." }, "index$": 2 }, { "name": "available_on", "in": "query", "description": "Filters plans available on a specific date. Defaults to today.", "schema": { "type": "string", "description": "Filters plans available on a specific date. Defaults to today.", "format": "date" }, "index$": 3 }, { "name": "group_id", "in": "query", "description": "Filters plans by group eligibility. Only plans whose eligibility criteria match the group are returned. Criteria that cannot be evaluated are ignored.", "schema": { "pattern": "gr_.+", "type": "string", "description": "Filters plans by group eligibility. Only plans whose eligibility criteria match the group are returned. Criteria that cannot be evaluated are ignored.", "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "index$": 4 }, { "name": "start_date", "in": "query", "description": "Reference date used to compute employee age when evaluating per-plan eligibility counts. Required together with `group_id` for counts to be included in the response.", "schema": { "type": "string", "description": "Reference date used to compute employee age when evaluating per-plan eligibility counts. Required together with `group_id` for counts to be included in the response.", "format": "date" }, "index$": 5 }, { "name": "sort_by", "in": "query", "description": "Sorts plans by a specific field. Currently only `premium` is supported.", "schema": { "enum": ["premium"], "type": "string", "allOf": [{ "enum": ["premium"], "type": "string", "additionalProperties": false, "x-ref": "#/components/schemas/PlanSortByEnumParameter" }], "description": "Sorts plans by a specific field. Currently only `premium` is supported." }, "index$": 6 }, { "name": "sort_dir", "in": "query", "description": "Sort direction. Defaults to `asc` (ascending).", "schema": { "enum": ["asc", "desc"], "type": "string", "allOf": [{ "enum": ["asc", "desc"], "type": "string", "additionalProperties": false, "x-ref": "#/components/schemas/SortDirectionEnumParameter" }], "description": "Sort direction. Defaults to `asc` (ascending)." }, "index$": 7 }, { "name": "page", "in": "query", "description": "The page of results to return. Defaults to 1 if not provided.", "schema": { "type": "integer", "description": "The page of results to return. Defaults to 1 if not provided.", "format": "int32" }, "index$": 8 }, { "name": "page_size", "in": "query", "description": "The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.", "schema": { "type": "integer", "description": "The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.", "format": "int32" }, "index$": 9 }, { "name": "X-Platform-Id", "in": "header", "description": "The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.", "schema": { "type": "string" }, "index$": 10 }] }, "GET /plans/{plan_id}": { "protocol": "http", "parameters": [{ "name": "plan_id", "in": "path", "required": true, "schema": { "pattern": "pl_.+", "type": "string", "example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "index$": 0 }, { "name": "group_id", "in": "query", "description": "When provided together with `start_date`, per-plan eligibility counts are included in the response. Silently ignored if not paired with `start_date`.", "schema": { "pattern": "gr_.+", "type": "string", "description": "When provided together with `start_date`, per-plan eligibility counts are included in the response. Silently ignored if not paired with `start_date`.", "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "index$": 1 }, { "name": "start_date", "in": "query", "description": "Reference date used to compute employee age when evaluating eligibility. Required together with `group_id` for counts to be included.", "schema": { "type": "string", "description": "Reference date used to compute employee age when evaluating eligibility. Required together with `group_id` for counts to be included.", "format": "date" }, "index$": 2 }, { "name": "X-Platform-Id", "in": "header", "description": "The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.", "schema": { "type": "string" }, "index$": 3 }] } }, { strict: LIVE_STRICT, t });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let plan_ref01_data = Object.values(setup.data.existing.plan)[0];
        // LIST
        const plan_ref01_ent = client.Plan();
        const plan_ref01_match = {};
        const plan_ref01_list = (await plan_ref01_ent.list(plan_ref01_match)).map((e) => e.data());
        // LOAD
        const plan_ref01_match_dt0 = {};
        plan_ref01_match_dt0.id = plan_ref01_data.id;
        const plan_ref01_data_dt0 = (await plan_ref01_ent.load(plan_ref01_match_dt0)).data();
        (0, node_assert_1.default)(plan_ref01_data_dt0.id === plan_ref01_data.id);
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
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/plan/PlanTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KotaSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['plan01', 'plan02', 'plan03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOTA_TEST_PLAN_ENTID': idmap,
        'KOTA_TEST_LIVE': 'FALSE',
        'KOTA_TEST_EXPLAIN': 'FALSE',
        'KOTA_APIKEY': '',
    });
    idmap = env['KOTA_TEST_PLAN_ENTID'];
    const live = 'TRUE' === env.KOTA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOTA_TEST_PLAN_ENTID'];
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
//# sourceMappingURL=PlanEntity.test.js.map