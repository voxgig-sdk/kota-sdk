

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { KotaSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('GroupEmployeeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.GroupEmployee()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.GroupEmployee().create({"id":1,"eligibility_status":"x","employee_id":"x","enrolment_status":"x","enrolments":"x","group_id":"x","policies":"x","scheduled_group_transitions":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'group_employee.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"create_enrolment_intents":{"a":true,"h":"Create Enrolment Intents","n":"create_enrolment_intents","r":false,"sh":"Controls whether enrolment intents are automatically created for the employee.","t":["`$ONE`",["`$NULL`","`$BOOLEAN`"]],"key$":"create_enrolment_intents","index$":0},"desired_policy_start_date":{"a":true,"fo":"date","h":"Desired Policy Start Date","n":"desired_policy_start_date","r":false,"sh":"The desired date for the employee's policy to start.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"desired_policy_start_date","index$":1},"eligibility_status":{"a":true,"h":"Eligibility Status","n":"eligibility_status","r":true,"sh":"Eligibility status for the employee in this group.","t":"`$STRING`","key$":"eligibility_status","index$":2},"employee_id":{"a":true,"h":"Employee Id","n":"employee_id","r":true,"sh":"Employee Id","t":"`$STRING`","key$":"employee_id","index$":3},"enrolment_date":{"a":true,"fo":"date","h":"Enrolment Date","n":"enrolment_date","r":false,"sh":"The date on which the employee agreed to enrol into the group's policies.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"enrolment_date","index$":4},"enrolment_status":{"a":true,"h":"Enrolment Status","n":"enrolment_status","r":true,"sh":"Enrolment status for the employee in this group.","t":"`$STRING`","key$":"enrolment_status","index$":5},"enrolments":{"a":true,"h":"Enrolments","n":"enrolments","r":true,"sh":"List of enrolments associated with the employee in this group.","t":"`$ARRAY`","key$":"enrolments","index$":6},"group_id":{"a":true,"h":"Group Id","n":"group_id","r":true,"sh":"Unique identifier for the group.","t":"`$STRING`","key$":"group_id","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the employee.","t":"`$STRING`","key$":"id","index$":8},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":9},"policies":{"a":true,"h":"Policies","n":"policies","r":true,"sh":"List of policies associated with the employee in this group.","t":"`$ARRAY`","key$":"policies","index$":10},"policy_configuration":{"a":true,"h":"Policy Configuration","n":"policy_configuration","r":false,"sh":"Policy configuration for the employee in this group.","t":"`$NULL`","key$":"policy_configuration","index$":11},"scheduled_group_transitions":{"a":true,"h":"Scheduled Group Transitions","n":"scheduled_group_transitions","r":true,"sh":"List of scheduled group transitions for the employee.","t":"`$ARRAY`","key$":"scheduled_group_transitions","index$":12}},"id":{"field":"id","name":"id"},"name":"group_employee","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["create_enrolment_intents","employee_id","policy_configuration"],"co":{"id":"POST /groups/{group_id}/employees","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"Idempotency-Key","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"ex":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/groups/{group_id}/employees","q":{"exist":["id"]},"r":{"param":{"group_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"groups"},{"var":"id"},{"lit":"employees"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"group_employee","name__orig":"group_employee","Name":"GroupEmployee","name_":"group_employee","name-":"group-employee","NAME":"GROUP_EMPLOYEE","index$":24}, {"active":true,"entity":"group_employee","key$":"BasicGroupEmployeeFlow","kind":"basic","name":"BasicGroupEmployeeFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"group_employee_ref01"},"m":{"group_id":"group01"},"o":"create","s":[],"v":[],"unreachable":true}]}, 'GroupEmployee', {"POST /groups/{group_id}/employees":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["employee_id"],"type":"object","properties":{"employee_id":{"pattern":"ee_.+","type":"string","description":"Employee Id","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","key$":"employee_id"},"create_enrolment_intents":{"type":["null","boolean"],"description":"Controls whether enrolment intents are automatically created for the employee. Defaults to `true` for hosted platforms. When `true` on a hosted platform, the response includes an `enrolment_intent_id`. For non-hosted platforms, the `enrolment_intent_id` is not included in the response, subscribe to the `enrolment_intent.processing` webhook to be notified when the enrolment intent is created.","key$":"create_enrolment_intents"},"policy_configuration":{"type":"null","allOf":[{}],"description":"Policy configuration for the employee in this group. Leave null to use `group` defaults.","key$":"policy_configuration"}},"additionalProperties":false,"x-ref":"#/components/schemas/AddEmployeeToGroupRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"group_id","in":"path","required":true,"schema":{"pattern":"gr_.+","type":"string","example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"Idempotency-Key","in":"header","description":"Unique key to ensure idempotent requests. If the same key is used for multiple _identical & successful_ requests, the same response will be returned. [Read more here](/api#idempotent-requests)","schema":{"type":"string"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let group_employee_ref01_data = Object.values(setup.data.existing.group_employee)[0] as any

  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/group_employee/GroupEmployeeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = KotaSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['group_employee01','group_employee02','group_employee03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_GROUP_EMPLOYEE_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_GROUP_EMPLOYEE_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_GROUP_EMPLOYEE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new KotaSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
