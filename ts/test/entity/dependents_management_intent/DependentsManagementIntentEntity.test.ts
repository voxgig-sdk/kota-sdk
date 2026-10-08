

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


describe('DependentsManagementIntentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.DependentsManagementIntent()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.DependentsManagementIntent().load({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dependents_management_intent.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"action_required":{"a":true,"h":"Action Required","n":"action_required","r":false,"sh":"Details of the action required from the caller.","t":"`$NULL`","key$":"action_required","index$":0},"coverage_options":{"a":true,"h":"Coverage Options","n":"coverage_options","r":false,"sh":"Available member-scoped coverage options for the plan.","t":["`$ONE`",["`$NULL`","`$ARRAY`"]],"key$":"coverage_options","index$":1},"dependents":{"a":true,"h":"Dependents","n":"dependents","r":true,"sh":"List of dependents being managed.","t":"`$ARRAY`","key$":"dependents","index$":2},"disclosures":{"a":true,"h":"Disclosures","n":"disclosures","r":true,"sh":"Disclosures associated with this intent.","t":"`$ARRAY`","key$":"disclosures","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the dependents management intent.","t":"`$STRING`","key$":"id","index$":4},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"Object type identifier.","t":"`$STRING`","key$":"object","index$":5},"parent_intent_id":{"a":true,"h":"Parent Intent Id","n":"parent_intent_id","r":true,"sh":"The parent intent ID (e.g.","t":"`$STRING`","key$":"parent_intent_id","index$":6},"parent_intent_type":{"a":true,"h":"Parent Intent Type","n":"parent_intent_type","r":true,"sh":"The type of parent intent.","t":"`$STRING`","key$":"parent_intent_type","index$":7},"plan":{"a":true,"h":"Plan","n":"plan","r":true,"sh":"Plan information including pricing details.","t":"`$ANY`","key$":"plan","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of the dependents management intent.","t":"`$STRING`","key$":"status","index$":9}},"id":{"field":"id","name":"id"},"name":"dependents_management_intent","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"pai_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"policy_amendment_intent_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"p_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"policy_id","or":"policy_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent","q":{"exist":["policy_amendment_intent_id","policy_id"]},"r":{"param":{"id":"policy_amendment_intent_id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"policies"},{"var":"policy_id"},{"lit":"policy_amendment_intents"},{"var":"policy_amendment_intent_id"},{"lit":"create_dependents_management_intent"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /enrolment_intents/{enrolment_intent_id}/create_dependents_management_intent","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"enrolment_intent_id","or":"enrolment_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/enrolment_intents/{enrolment_intent_id}/create_dependents_management_intent","q":{"exist":["enrolment_intent_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"enrolment_intents"},{"var":"enrolment_intent_id"},{"lit":"create_dependents_management_intent"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /dependents_management_intents/{dependents_management_intent_id}/cancel","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"dependents_management_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/dependents_management_intents/{dependents_management_intent_id}/cancel","q":{"$action":"cancel","exist":["id"]},"r":{"param":{"dependents_management_intent_id":"id"}},"s":[{"lit":"dependents_management_intents"},{"var":"id"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /dependents_management_intents/{dependents_management_intent_id}/confirm","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"dependents_management_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/dependents_management_intents/{dependents_management_intent_id}/confirm","q":{"$action":"confirm","exist":["id"]},"r":{"param":{"dependents_management_intent_id":"id"}},"s":[{"lit":"dependents_management_intents"},{"var":"id"},{"lit":"confirm"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /dependents_management_intents/{dependents_management_intent_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"dependents_management_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/dependents_management_intents/{dependents_management_intent_id}","q":{"exist":["id"]},"r":{"param":{"dependents_management_intent_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"dependents_management_intents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.enrolment_intent"],["$.main.kit.entity.policy","$.main.kit.entity.policy_amendment_intent"]]},"key$":"dependents_management_intent","name__orig":"dependents_management_intent","Name":"DependentsManagementIntent","name_":"dependents_management_intent","name-":"dependents-management-intent","NAME":"DEPENDENTS_MANAGEMENT_INTENT","index$":8}, {"active":true,"entity":"dependents_management_intent","key$":"BasicDependentsManagementIntentFlow","kind":"basic","name":"BasicDependentsManagementIntentFlow","param":{},"step":[{"a":false,"d":{},"i":{"ref":"dependents_management_intent_ref01"},"m":{"dependents_management_intent_id":"dependents_management_intent01"},"o":"create","s":[],"v":[],"unreachable":true},{"a":true,"d":{},"i":{"ref":"dependents_management_intent_ref01","srcdatavar":"dependents_management_intent_ref01_data","suffix":"_dt0"},"m":{"id":"dependents_management_intent01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dependents_management_intent_ref01"}}],"index$":0}]}, 'DependentsManagementIntent', {"POST /policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent":{"protocol":"http","parameters":[{"name":"policy_id","in":"path","required":true,"schema":{"pattern":"p_.+","type":"string","example":"p_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"id","in":"path","required":true,"schema":{"pattern":"pai_.+","type":"string","example":"pai_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]},"POST /enrolment_intents/{enrolment_intent_id}/create_dependents_management_intent":{"protocol":"http","parameters":[{"name":"enrolment_intent_id","in":"path","required":true,"schema":{"pattern":"ei_.+","type":"string","example":"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"POST /dependents_management_intents/{dependents_management_intent_id}/cancel":{"protocol":"http","parameters":[{"name":"dependents_management_intent_id","in":"path","required":true,"schema":{"pattern":"dmi_.+","type":"string","example":"dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"POST /dependents_management_intents/{dependents_management_intent_id}/confirm":{"protocol":"http","parameters":[{"name":"dependents_management_intent_id","in":"path","required":true,"schema":{"pattern":"dmi_.+","type":"string","example":"dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"GET /dependents_management_intents/{dependents_management_intent_id}":{"protocol":"http","parameters":[{"name":"dependents_management_intent_id","in":"path","required":true,"schema":{"pattern":"dmi_.+","type":"string","example":"dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dependents_management_intent_ref01_data = Object.values(setup.data.existing.dependents_management_intent)[0] as any

    // LOAD
    const dependents_management_intent_ref01_ent = client.DependentsManagementIntent()
    const dependents_management_intent_ref01_match_dt0: any = {}
    dependents_management_intent_ref01_match_dt0.id = dependents_management_intent_ref01_data.id
    const dependents_management_intent_ref01_data_dt0 = (await dependents_management_intent_ref01_ent.load(dependents_management_intent_ref01_match_dt0)).data()
    assert(dependents_management_intent_ref01_data_dt0.id === dependents_management_intent_ref01_data.id)


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
      '../../../../.sdk/test/entity/dependents_management_intent/DependentsManagementIntentTestData.json')

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
    ['dependents_management_intent01','dependents_management_intent02','dependents_management_intent03','enrolment_intent01','enrolment_intent02','enrolment_intent03','policy01','policy02','policy03','policy_amendment_intent01','policy_amendment_intent02','policy_amendment_intent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_DEPENDENTS_MANAGEMENT_INTENT_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_DEPENDENTS_MANAGEMENT_INTENT_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_DEPENDENTS_MANAGEMENT_INTENT_ENTID']
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
  
