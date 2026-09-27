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
(0, node_test_1.describe)('GroupEmployeeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('KOTA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.KotaSDK.test();
        const ent = testsdk.GroupEmployee();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.KOTA_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'group_employee.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "desired_policy_start_date": { "a": true, "fo": "date", "h": "Desired Policy Start Date", "n": "desired_policy_start_date", "r": false, "sh": "The desired date for the employee's policy to start.", "t": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "key$": "desired_policy_start_date", "index$": 0 }, "eligibility_status": { "a": true, "h": "Eligibility Status", "n": "eligibility_status", "r": true, "sh": "Eligibility status for the employee in this group.", "t": "`$ANY`", "key$": "eligibility_status", "index$": 1 }, "enrolment_date": { "a": true, "fo": "date", "h": "Enrolment Date", "n": "enrolment_date", "r": false, "sh": "The date on which the employee agreed to enrol into the group's policies.", "t": ["`$ONE`", ["`$NULL`", "`$STRING`"]], "key$": "enrolment_date", "index$": 2 }, "enrolment_status": { "a": true, "h": "Enrolment Status", "n": "enrolment_status", "r": true, "sh": "Enrolment status for the employee in this group.", "t": "`$ANY`", "key$": "enrolment_status", "index$": 3 }, "enrolments": { "a": true, "h": "Enrolments", "n": "enrolments", "r": true, "sh": "List of enrolments associated with the employee in this group.", "t": "`$ARRAY`", "key$": "enrolments", "index$": 4 }, "group_id": { "a": true, "h": "Group Id", "n": "group_id", "r": true, "sh": "Unique identifier for the group.", "t": "`$STRING`", "key$": "group_id", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": true, "sh": "Unique identifier for the employee.", "t": "`$STRING`", "key$": "id", "index$": 6 }, "object": { "a": true, "h": "Object", "n": "object", "r": false, "ro": true, "sh": "The object type", "t": "`$STRING`", "key$": "object", "index$": 7 }, "policies": { "a": true, "h": "Policies", "n": "policies", "r": true, "sh": "List of policies associated with the employee in this group.", "t": "`$ARRAY`", "key$": "policies", "index$": 8 }, "scheduled_group_transitions": { "a": true, "h": "Scheduled Group Transitions", "n": "scheduled_group_transitions", "r": true, "sh": "List of scheduled group transitions for the employee.", "t": "`$ARRAY`", "key$": "scheduled_group_transitions", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "group_employee", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /groups/{group_id}/employees", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "k": "header", "n": "idempotency_key", "or": "idempotency_key", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "header", "n": "x_platform_id", "or": "x_platform_id", "r": false, "t": "`$STRING`", "index$": 1 }], "params": [{ "a": true, "ex": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a", "k": "param", "n": "id", "or": "group_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/groups/{group_id}/employees", "q": { "exist": ["id", "idempotency_key", "x_platform_id"] }, "r": { "param": { "group_id": "id" } }, "s": [{ "lit": "groups" }, { "var": "id" }, { "lit": "employees" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "group_employee", "name__orig": "group_employee", "Name": "GroupEmployee", "name_": "group_employee", "name-": "group-employee", "NAME": "GROUP_EMPLOYEE", "index$": 24 }, { "active": true, "entity": "group_employee", "key$": "BasicGroupEmployeeFlow", "kind": "basic", "name": "BasicGroupEmployeeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "group_employee_ref01" }, "m": { "group_id": "group01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'GroupEmployee', { "POST /groups/{group_id}/employees": { "protocol": "http", "requestBody": { "content": { "application/json": { "schema": { "allOf": [{ "required": ["employee_id"], "type": "object", "properties": { "employee_id": { "pattern": "ee_.+", "type": "string", "description": "Employee Id", "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "create_enrolment_intents": { "type": ["null", "boolean"], "description": "Controls whether enrolment intents are automatically created for the employee. Defaults to `true` for hosted platforms. When `true` on a hosted platform, the response includes an `enrolment_intent_id`. For non-hosted platforms, the `enrolment_intent_id` is not included in the response, subscribe to the `enrolment_intent.processing` webhook to be notified when the enrolment intent is created." }, "policy_configuration": { "type": "null", "allOf": [{}], "description": "Policy configuration for the employee in this group. Leave null to use `group` defaults." } }, "additionalProperties": false, "x-ref": "#/components/schemas/AddEmployeeToGroupRequest" }], "index$": 1 } } }, "required": true }, "parameters": [{ "name": "group_id", "in": "path", "required": true, "schema": { "pattern": "gr_.+", "type": "string", "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a" }, "index$": 0 }, { "name": "Idempotency-Key", "in": "header", "description": "Unique key to ensure idempotent requests. If the same key is used for multiple _identical & successful_ requests, the same response will be returned. [Read more here](/api#idempotent-requests)", "schema": { "type": "string" }, "index$": 1 }, { "name": "X-Platform-Id", "in": "header", "description": "The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.", "schema": { "type": "string" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const group_employee_ref01_ent = client.GroupEmployee();
        let group_employee_ref01_data = setup.data.new.group_employee['group_employee_ref01'];
        group_employee_ref01_data['group_id'] = setup.idmap['group01'];
        group_employee_ref01_data = (await group_employee_ref01_ent.create(group_employee_ref01_data)).data();
        (0, node_assert_1.default)(null != group_employee_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/group_employee/GroupEmployeeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.KotaSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['group_employee01', 'group_employee02', 'group_employee03', 'group01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'KOTA_TEST_GROUP_EMPLOYEE_ENTID': idmap,
        'KOTA_TEST_LIVE': 'FALSE',
        'KOTA_TEST_EXPLAIN': 'FALSE',
        'KOTA_APIKEY': '',
    });
    idmap = env['KOTA_TEST_GROUP_EMPLOYEE_ENTID'];
    const live = 'TRUE' === env.KOTA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['KOTA_TEST_GROUP_EMPLOYEE_ENTID'];
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
//# sourceMappingURL=GroupEmployeeEntity.test.js.map