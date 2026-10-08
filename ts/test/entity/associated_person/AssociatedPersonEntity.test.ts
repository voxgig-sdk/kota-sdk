

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


describe('AssociatedPersonEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.AssociatedPerson()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AssociatedPerson().list({"employee_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'associated_person.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"date_of_birth":{"a":true,"fo":"date","h":"Date Of Birth","n":"date_of_birth","op":{"update":{"req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]]}},"r":true,"sh":"Date of birth of the associated person","t":"`$STRING`","key$":"date_of_birth","index$":0},"email":{"a":true,"h":"Email","n":"email","r":false,"sh":"Email address of the associated person","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"email","index$":1},"employee_id":{"a":true,"h":"Employee Id","n":"employee_id","r":true,"sh":"Unique identifier for the employee this person is associated with","t":"`$STRING`","key$":"employee_id","index$":2},"first_name":{"a":true,"h":"First Name","n":"first_name","op":{"update":{"req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]]}},"r":true,"sh":"First name of the associated person","t":"`$STRING`","key$":"first_name","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the associated person","t":"`$STRING`","key$":"id","index$":4},"last_name":{"a":true,"h":"Last Name","n":"last_name","op":{"update":{"req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]]}},"r":true,"sh":"Last name of the associated person","t":"`$STRING`","key$":"last_name","index$":5},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":6},"phone_number":{"a":true,"h":"Phone Number","n":"phone_number","r":false,"sh":"Phone number in E.164 international format (e.g.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"phone_number","index$":7},"platform_id":{"a":true,"h":"Platform Id","n":"platform_id","r":false,"sh":"Unique identifier for the platform","t":"`$STRING`","key$":"platform_id","index$":8},"relationship_type":{"a":true,"h":"Relationship Type","n":"relationship_type","op":{"update":{"req":false,"type":"`$NULL`"}},"r":true,"sh":"The relationship type between the employee and the associated person","t":"`$STRING`","key$":"relationship_type","index$":9},"sex_at_birth":{"a":true,"h":"Sex At Birth","n":"sex_at_birth","op":{"update":{"req":false,"type":"`$NULL`"}},"r":true,"sh":"The sex assigned to the associated person at birth","t":"`$STRING`","key$":"sex_at_birth","index$":10}},"id":{"field":"id","name":"id"},"name":"associated_person","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["date_of_birth","email","first_name","last_name","phone_number","relationship_type","sex_at_birth"],"co":{"id":"POST /employees/{employee_id}/associated_persons","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employee_id","or":"employee_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/employees/{employee_id}/associated_persons","q":{"exist":["employee_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employees"},{"var":"employee_id"},{"lit":"associated_persons"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /employees/{employee_id}/associated_persons","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employee_id","or":"employee_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/employees/{employee_id}/associated_persons","q":{"exist":["employee_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employees"},{"var":"employee_id"},{"lit":"associated_persons"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /employees/{employee_id}/associated_persons/{associated_person_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employee_id","or":"employee_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"associated_person_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/employees/{employee_id}/associated_persons/{associated_person_id}","q":{"exist":["employee_id","id"]},"r":{"param":{"associated_person_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employees"},{"var":"employee_id"},{"lit":"associated_persons"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /employees/{employee_id}/associated_persons/{associated_person_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employee_id","or":"employee_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"associated_person_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/employees/{employee_id}/associated_persons/{associated_person_id}","q":{"exist":["employee_id","id"]},"r":{"param":{"associated_person_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employees"},{"var":"employee_id"},{"lit":"associated_persons"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"bf":["date_of_birth","email","first_name","last_name","phone_number","relationship_type","sex_at_birth"],"co":{"id":"PUT /employees/{employee_id}/associated_persons/{associated_person_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employee_id","or":"employee_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"associated_person_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/employees/{employee_id}/associated_persons/{associated_person_id}","q":{"exist":["employee_id","id"]},"r":{"param":{"associated_person_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employees"},{"var":"employee_id"},{"lit":"associated_persons"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.employee"]]},"key$":"associated_person","name__orig":"associated_person","Name":"AssociatedPerson","name_":"associated_person","name-":"associated-person","NAME":"ASSOCIATED_PERSON","index$":0}, {"active":true,"entity":"associated_person","key$":"BasicAssociatedPersonFlow","kind":"basic","name":"BasicAssociatedPersonFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"associated_person_ref01"},"m":{"employee_id":"employee01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"employee_id":"employee01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"associated_person_ref01"}}],"index$":1},{"a":true,"d":{"employee_id":"employee01"},"i":{"ref":"associated_person_ref01","srcdatavar":"associated_person_ref01_data","suffix":"_up0","textfield":"date_of_birth"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-associated_person_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"associated_person_ref01","srcdatavar":"associated_person_ref01_data","suffix":"_dt0"},"m":{"employee_id":"employee01","id":"associated_person01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-associated_person_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"associated_person_ref01","suffix":"_rm0"},"m":{"employee_id":"employee01","id":"associated_person01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"employee_id":"employee01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"associated_person_ref01"}}],"index$":5}]}, 'AssociatedPerson', {"POST /employees/{employee_id}/associated_persons":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["date_of_birth","first_name","last_name","relationship_type","sex_at_birth"],"type":"object","properties":{"first_name":{"type":"string","description":"Must not be empty. NOTE: This field will be normalized according to our internal formatting rules.","key$":"first_name"},"last_name":{"type":"string","description":"Must not be empty. NOTE: This field will be normalized according to our internal formatting rules.","key$":"last_name"},"date_of_birth":{"type":"string","description":"Must be in the past, but after 1900-01-01","format":"date","example":"2024-12-01","key$":"date_of_birth"},"sex_at_birth":{"allOf":[{}],"description":"The sex assigned to the associated person at birth","key$":"sex_at_birth"},"relationship_type":{"allOf":[{}],"description":"The relationship type between the employee and the associated person","key$":"relationship_type"},"email":{"type":["null","string"],"description":"NOTE: This field will be normalized according to our internal formatting rules.","key$":"email"},"phone_number":{"type":["null","string"],"description":"Phone number in E.164 international format (e.g. +447700900999). NOTE: This field will be normalized according to our internal formatting rules.","key$":"phone_number"}},"additionalProperties":false,"x-ref":"#/components/schemas/CreateAssociatedPersonRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"GET /employees/{employee_id}/associated_persons":{"protocol":"http","parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":1},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":2},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":3}]},"GET /employees/{employee_id}/associated_persons/{associated_person_id}":{"protocol":"http","parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"associated_person_id","in":"path","required":true,"schema":{"pattern":"ap_.+","type":"string","example":"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]},"DELETE /employees/{employee_id}/associated_persons/{associated_person_id}":{"protocol":"http","parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"associated_person_id","in":"path","required":true,"schema":{"pattern":"ap_.+","type":"string","example":"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]},"PUT /employees/{employee_id}/associated_persons/{associated_person_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"type":"object","properties":{"first_name":{"type":["null","string"],"description":"NOTE: This field will be normalized according to our internal formatting rules.","key$":"first_name"},"last_name":{"type":["null","string"],"description":"NOTE: This field will be normalized according to our internal formatting rules.","key$":"last_name"},"date_of_birth":{"type":["null","string"],"description":"Must be in the past, but after 1900-01-01","format":"date","example":"2024-12-01","key$":"date_of_birth"},"sex_at_birth":{"type":"null","allOf":[{}],"description":"The sex assigned to the associated person at birth","key$":"sex_at_birth"},"relationship_type":{"type":"null","allOf":[{}],"description":"The relationship type between the employee and the associated person","key$":"relationship_type"},"email":{"type":["null","string"],"description":"Email address of the associated person. If null is provided, the email will be cleared. NOTE: This field will be normalized according to our internal formatting rules.","key$":"email"},"phone_number":{"type":["null","string"],"description":"Phone number in E.164 international format (e.g. +447700900999). If null is provided, the phone number will be cleared. NOTE: This field will be normalized according to our internal formatting rules.","key$":"phone_number"}},"additionalProperties":false,"x-ref":"#/components/schemas/UpdateAssociatedPersonRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"associated_person_id","in":"path","required":true,"schema":{"pattern":"ap_.+","type":"string","example":"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const associated_person_ref01_ent = client.AssociatedPerson()
    let associated_person_ref01_data = setup.data.new.associated_person['associated_person_ref01']
    associated_person_ref01_data['employee_id'] = setup.idmap['employee01']

    associated_person_ref01_data = (await associated_person_ref01_ent.create(associated_person_ref01_data)).data()
    assert(null != associated_person_ref01_data.id)


    // LIST
    const associated_person_ref01_match: any = {}
    associated_person_ref01_match['employee_id'] = setup.idmap['employee01']

    const associated_person_ref01_list = (await associated_person_ref01_ent.list(associated_person_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(associated_person_ref01_list, { id: associated_person_ref01_data.id })))


    // UPDATE
    const associated_person_ref01_data_up0: any = {}
    associated_person_ref01_data_up0.id = associated_person_ref01_data.id
    associated_person_ref01_data_up0 ['employee_id'] = setup.idmap['employee_id']

    const associated_person_ref01_markdef_up0 = { name: 'date_of_birth', value: 'Mark01-associated_person_ref01_' + setup.now }
    ;(associated_person_ref01_data_up0 as any)[associated_person_ref01_markdef_up0.name] = associated_person_ref01_markdef_up0.value

    const associated_person_ref01_resdata_up0 = (await associated_person_ref01_ent.update(associated_person_ref01_data_up0)).data()
    assert(associated_person_ref01_resdata_up0.id === associated_person_ref01_data_up0.id)

    assert((associated_person_ref01_resdata_up0 as any)[associated_person_ref01_markdef_up0.name] === associated_person_ref01_markdef_up0.value)


    // LOAD
    const associated_person_ref01_match_dt0: any = {}
    associated_person_ref01_match_dt0.id = associated_person_ref01_data.id
    const associated_person_ref01_data_dt0 = (await associated_person_ref01_ent.load(associated_person_ref01_match_dt0)).data()
    assert(associated_person_ref01_data_dt0.id === associated_person_ref01_data.id)


    // REMOVE
    const associated_person_ref01_match_rm0: any = { id: associated_person_ref01_data.id }
    await associated_person_ref01_ent.remove(associated_person_ref01_match_rm0)
  

    // LIST
    const associated_person_ref01_match_rt0: any = {}
    associated_person_ref01_match_rt0['employee_id'] = setup.idmap['employee01']

    const associated_person_ref01_list_rt0 = (await associated_person_ref01_ent.list(associated_person_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(associated_person_ref01_list_rt0, { id: associated_person_ref01_data.id })))


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
      '../../../../.sdk/test/entity/associated_person/AssociatedPersonTestData.json')

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
    ['associated_person01','associated_person02','associated_person03','employee01','employee02','employee03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_ASSOCIATED_PERSON_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_ASSOCIATED_PERSON_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_ASSOCIATED_PERSON_ENTID']
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
  
