

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


describe('PolicyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.Policy()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('policy hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of KotaSDK.test(offline).Policy().stream('list')) { }
    }, /offline/)

    for await (const _item of KotaSDK.test(offline).Policy()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = KotaSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Policy().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of KotaSDK.test().Policy().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new KotaSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Policy().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Policy().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Policy().list({"employee_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'policy.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bundling_type":{"a":true,"h":"Bundling Type","n":"bundling_type","r":true,"sh":"Indicates how this policy is bundled within a group","t":"`$STRING`","key$":"bundling_type","index$":0},"cancellation_date":{"a":true,"fo":"date","h":"Cancellation Date","n":"cancellation_date","r":false,"sh":"Date the policy was cancelled (if applicable)","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"cancellation_date","index$":1},"disclosures":{"a":true,"h":"Disclosures","n":"disclosures","r":true,"sh":"Disclosures associated with this policy.","t":"`$ARRAY`","key$":"disclosures","index$":2},"employee_id":{"a":true,"h":"Employee Id","n":"employee_id","r":true,"sh":"Identifier of the employee associated with this policy.","t":"`$STRING`","key$":"employee_id","index$":3},"end_date":{"a":true,"fo":"date","h":"End Date","n":"end_date","r":false,"sh":"Policy end date (inclusive) in ISO 8601, or null if open-ended","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"end_date","index$":4},"group_id":{"a":true,"h":"Group Id","n":"group_id","r":true,"sh":"Identifier of the group associated with this policy.","t":"`$STRING`","key$":"group_id","index$":5},"group_policy_id":{"a":true,"h":"Group Policy Id","n":"group_policy_id","r":true,"sh":"Identifier of the group policy id associated with this policy.","t":"`$STRING`","key$":"group_policy_id","index$":6},"health_insurance":{"a":true,"h":"Health Insurance","n":"health_insurance","r":false,"sh":"Health insurance–specific fields (present when `type=health_insurance`)","t":"`$NULL`","key$":"health_insurance","index$":7},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the policy.","t":"`$STRING`","key$":"id","index$":8},"life_assurance":{"a":true,"h":"Life Assurance","n":"life_assurance","r":false,"sh":"Life assurance–specific fields (present when `type=life_assurance`).","t":"`$NULL`","key$":"life_assurance","index$":9},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"Object type","t":"`$STRING`","key$":"object","index$":10},"opted_out_at":{"a":true,"fo":"date-time","h":"Opted Out At","n":"opted_out_at","r":false,"sh":"UTC timestamp of the moment the member opted out of this policy during the cooling-off window.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"opted_out_at","index$":11},"plan":{"a":true,"h":"Plan","n":"plan","r":true,"sh":"Plan information for this policy","t":"`$ANY`","key$":"plan","index$":12},"provider":{"a":true,"h":"Provider","n":"provider","r":true,"sh":"Provider information for this policy","t":"`$ANY`","key$":"provider","index$":13},"start_date":{"a":true,"fo":"date","h":"Start Date","n":"start_date","r":true,"sh":"Policy start (effective) date in ISO 8601 (YYYY-MM-DD)","t":"`$STRING`","key$":"start_date","index$":14},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current lifecycle state of the policy","t":"`$STRING`","key$":"status","index$":15},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Policy type.","t":"`$STRING`","key$":"type","index$":16}},"id":{"field":"id","name":"id"},"name":"policy","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /policies","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"employee_id","or":"employee_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"group_id","or":"group_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"gp_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"group_policy_id","or":"group_policy_id","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/policies","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"policies"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /policies/{policy_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"p_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"policy_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/policies/{policy_id}","q":{"exist":["id"]},"r":{"param":{"policy_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"policies"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"policy","name__orig":"policy","Name":"Policy","name_":"policy","name-":"policy","NAME":"POLICY","index$":33}, {"active":true,"entity":"policy","key$":"BasicPolicyFlow","kind":"basic","name":"BasicPolicyFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"policy_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"policy_ref01","srcdatavar":"policy_ref01_data","suffix":"_dt0"},"m":{"id":"policy01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-policy_ref01"}}],"index$":1}]}, 'Policy', {"GET /policies":{"protocol":"http","parameters":[{"name":"employee_id","in":"query","description":"Filters policies by employee.","schema":{"pattern":"ee_.+","type":"string","description":"Filters policies by employee.","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"group_id","in":"query","description":"Filters policies by group.","schema":{"pattern":"gr_.+","type":"string","description":"Filters policies by group.","example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"group_policy_id","in":"query","description":"Filters policies by group policy.","schema":{"pattern":"gp_.+","type":"string","description":"Filters policies by group policy.","example":"gp_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":2},{"name":"status","in":"query","description":"Multiple values can be provided by separating them with a comma. Allowed values are: `scheduled`, `active`, `expired`, `cancelled`.","schema":{"type":"string"},"index$":3},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":4},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":5},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":6}]},"GET /policies/{policy_id}":{"protocol":"http","parameters":[{"name":"policy_id","in":"path","required":true,"schema":{"pattern":"p_.+","type":"string","example":"p_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let policy_ref01_data = Object.values(setup.data.existing.policy)[0] as any

    // LIST
    const policy_ref01_ent = client.Policy()
    const policy_ref01_match: any = {}

    const policy_ref01_list = (await policy_ref01_ent.list(policy_ref01_match)).map((e: any) => e.data())


    // LOAD
    const policy_ref01_match_dt0: any = {}
    policy_ref01_match_dt0.id = policy_ref01_data.id
    const policy_ref01_data_dt0 = (await policy_ref01_ent.load(policy_ref01_match_dt0)).data()
    assert(policy_ref01_data_dt0.id === policy_ref01_data.id)


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
      '../../../../.sdk/test/entity/policy/PolicyTestData.json')

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
    ['policy01','policy02','policy03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_POLICY_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_POLICY_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_POLICY_ENTID']
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
  
