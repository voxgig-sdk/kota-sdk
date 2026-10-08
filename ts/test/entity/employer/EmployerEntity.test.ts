

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


describe('EmployerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.Employer()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('employer hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of KotaSDK.test(offline).Employer().stream('list')) { }
    }, /offline/)

    for await (const _item of KotaSDK.test(offline).Employer()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = KotaSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.Employer().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of KotaSDK.test().Employer().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new KotaSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.Employer().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.Employer().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Employer().list({"filter":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'employer.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"applicable_collective_agreement":{"a":true,"h":"Applicable Collective Agreement","n":"applicable_collective_agreement","r":false,"sh":"Name of the collective agreement that applies to the employer's workforce, if any.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"applicable_collective_agreement","index$":0},"contact":{"a":true,"h":"Contact","n":"contact","op":{"update":{"req":false,"type":"`$NULL`"}},"r":true,"t":"`$ANY`","key$":"contact","index$":1},"earliest_benefits_start_date":{"a":true,"fo":"date","h":"Earliest Benefits Start Date","n":"earliest_benefits_start_date","r":false,"sh":"The earliest date this employer is permitted to set up any benefits scheme.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"earliest_benefits_start_date","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"t":"`$STRING`","key$":"id","index$":3},"legal_address":{"a":true,"h":"Legal Address","n":"legal_address","op":{"update":{"req":false,"type":"`$NULL`"}},"r":true,"sh":"Treated as a single object that is updated entirely, `null` sub-fields (e.g.","t":"`$ANY`","key$":"legal_address","index$":4},"legal_name":{"a":true,"h":"Legal Name","n":"legal_name","op":{"update":{"req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]]}},"r":true,"sh":"Legal name of the company.","t":"`$STRING`","key$":"legal_name","index$":5},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of key-value pairs that you can attach to an object.","t":["`$ONE`",["`$NULL`","`$OBJECT`"]],"key$":"metadata","index$":6},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":7},"offboard_on":{"a":true,"fo":"date-time","h":"Offboard On","n":"offboard_on","r":false,"t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"offboard_on","index$":8},"platform_id":{"a":true,"h":"Platform Id","n":"platform_id","r":false,"t":"`$STRING`","key$":"platform_id","index$":9},"registration_number":{"a":true,"h":"Registration Number","n":"registration_number","r":false,"sh":"Company registration number.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"registration_number","index$":10},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":11}},"id":{"field":"id","name":"id"},"name":"employer","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /employers/{employer_id}/offboard","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"Idempotency-Key","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"ex":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"employer_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/employers/{employer_id}/offboard","q":{"$action":"offboard","exist":["id"]},"r":{"param":{"employer_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employers"},{"var":"id"},{"lit":"offboard"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["applicable_collective_agreement","contact","earliest_benefits_start_date","legal_address","legal_name","metadata","registration_number"],"co":{"id":"POST /employers","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"Idempotency-Key","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/employers","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employers"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /employers","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2}]},"k":"http","m":"GET","o":"/employers","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employers"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /employers/{employer_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"employer_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/employers/{employer_id}","q":{"exist":["id"]},"r":{"param":{"employer_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["applicable_collective_agreement","contact","earliest_benefits_start_date","legal_address","legal_name","metadata","registration_number"],"co":{"id":"PUT /employers/{employer_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"employer_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/employers/{employer_id}","q":{"exist":["id"]},"r":{"param":{"employer_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"employer","name__orig":"employer","Name":"Employer","name_":"employer","name-":"employer","NAME":"EMPLOYER","index$":15}, {"active":true,"entity":"employer","key$":"BasicEmployerFlow","kind":"basic","name":"BasicEmployerFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"employer_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"employer_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"employer_ref01","srcdatavar":"employer_ref01_data","suffix":"_up0","textfield":"legal_name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-employer_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"employer_ref01","srcdatavar":"employer_ref01_data","suffix":"_dt0"},"m":{"id":"employer01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-employer_ref01"}}],"index$":3}]}, 'Employer', {"POST /employers/{employer_id}/offboard":{"protocol":"http","parameters":[{"name":"employer_id","in":"path","required":true,"schema":{"pattern":"er_.+","type":"string","example":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"Idempotency-Key","in":"header","description":"Unique key to ensure idempotent requests. If the same key is used for multiple _identical & successful_ requests, the same response will be returned. [Read more here](/api#idempotent-requests)","schema":{"type":"string"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]},"POST /employers":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["contact","legal_address","legal_name"],"type":"object","properties":{"legal_name":{"type":"string","description":"Legal name of the company. NOTE: This field will be normalized according to our internal formatting rules.","key$":"legal_name"},"registration_number":{"type":["null","string"],"description":"Company registration number. NOTE: This field will be normalized according to our internal formatting rules.","key$":"registration_number"},"legal_address":{"allOf":[{}],"key$":"legal_address"},"contact":{"allOf":[{}],"key$":"contact"},"earliest_benefits_start_date":{"type":["null","string"],"description":"The earliest date this employer is permitted to set up any benefits scheme. If this date is in the future, benefit setup will be blocked until then. Used to delay scheme setup access (e.g., for onboarding alignment).\n\n**Constraints:**\n\n- Can only be set or updated if no group policy or group quote exists.\n- Must be a valid date in the future.","format":"date","example":"2024-12-01","key$":"earliest_benefits_start_date"},"applicable_collective_agreement":{"type":["null","string"],"description":"Name of the collective agreement that applies to the employer's workforce, if any. NOTE: This field will be normalized according to our internal formatting rules.","key$":"applicable_collective_agreement"},"metadata":{"type":["null","object"],"additionalProperties":{"type":"string"},"description":"Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Maximum 25 keys. Individual keys can be up to 40 characters and values up to 500 characters.","key$":"metadata"}},"additionalProperties":false,"x-ref":"#/components/schemas/CreateEmployerRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"Idempotency-Key","in":"header","description":"Unique key to ensure idempotent requests. If the same key is used for multiple _identical & successful_ requests, the same response will be returned. [Read more here](/api#idempotent-requests)","schema":{"type":"string"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"GET /employers":{"protocol":"http","parameters":[{"name":"filter","in":"query","description":"Multiple values can be provided by separating them with a comma. Allowed values are: `pending`, `active`, `offboarding`, `inactive`, `restricted`.","schema":{"type":"string"},"index$":0},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":1},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":2},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":3}]},"GET /employers/{employer_id}":{"protocol":"http","parameters":[{"name":"employer_id","in":"path","required":true,"schema":{"pattern":"er_.+","type":"string","example":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"PUT /employers/{employer_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"type":"object","properties":{"legal_name":{"type":["null","string"],"key$":"legal_name"},"registration_number":{"type":["null","string"],"key$":"registration_number"},"legal_address":{"type":"null","allOf":[{}],"description":"Treated as a single object that is updated entirely, `null` sub-fields (e.g. Line 3) will delete the existing values","key$":"legal_address"},"contact":{"type":"null","allOf":[{}],"key$":"contact"},"earliest_benefits_start_date":{"type":["null","string"],"description":"The earliest date this employer is permitted to set up any benefits scheme. If this date is in the future, benefit setup will be blocked until then. Used to delay scheme setup access (e.g., for onboarding alignment).\n\n**Constraints:**\n\n- Can only be set or updated if no group policy or group quote exists.\n- Must be a valid date.","format":"date","example":"2024-12-01","key$":"earliest_benefits_start_date"},"applicable_collective_agreement":{"type":["null","string"],"description":"Name of the collective agreement that applies to the employer's workforce, if any.","key$":"applicable_collective_agreement"},"metadata":{"type":["null","object"],"additionalProperties":{"type":"string"},"description":"Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Maximum 25 keys. Individual keys can be up to 40 characters and values up to 500 characters. Treated as a single object that is updated entirely.","key$":"metadata"}},"additionalProperties":false,"x-ref":"#/components/schemas/UpdateEmployerRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"employer_id","in":"path","required":true,"schema":{"pattern":"er_.+","type":"string","example":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const employer_ref01_ent = client.Employer()
    let employer_ref01_data = setup.data.new.employer['employer_ref01']

    employer_ref01_data = (await employer_ref01_ent.create(employer_ref01_data)).data()
    assert(null != employer_ref01_data.id)


    // LIST
    const employer_ref01_match: any = {}

    const employer_ref01_list = (await employer_ref01_ent.list(employer_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(employer_ref01_list, { id: employer_ref01_data.id })))


    // UPDATE
    const employer_ref01_data_up0: any = {}
    employer_ref01_data_up0.id = employer_ref01_data.id

    const employer_ref01_markdef_up0 = { name: 'legal_name', value: 'Mark01-employer_ref01_' + setup.now }
    ;(employer_ref01_data_up0 as any)[employer_ref01_markdef_up0.name] = employer_ref01_markdef_up0.value

    const employer_ref01_resdata_up0 = (await employer_ref01_ent.update(employer_ref01_data_up0)).data()
    assert(employer_ref01_resdata_up0.id === employer_ref01_data_up0.id)

    assert((employer_ref01_resdata_up0 as any)[employer_ref01_markdef_up0.name] === employer_ref01_markdef_up0.value)


    // LOAD
    const employer_ref01_match_dt0: any = {}
    employer_ref01_match_dt0.id = employer_ref01_data.id
    const employer_ref01_data_dt0 = (await employer_ref01_ent.load(employer_ref01_match_dt0)).data()
    assert(employer_ref01_data_dt0.id === employer_ref01_data.id)


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
      '../../../../.sdk/test/entity/employer/EmployerTestData.json')

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
    ['employer01','employer02','employer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_EMPLOYER_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_EMPLOYER_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_EMPLOYER_ENTID']
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
  
