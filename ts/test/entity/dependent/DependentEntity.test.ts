

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { KotaSDK, BaseFeature, stdutil } from '../../..'

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


describe('DependentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.Dependent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dependent.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"action_required":{"a":true,"h":"Action Required","n":"action_required","r":false,"sh":"Details of the action required from the caller.","t":"`$NULL`","key$":"action_required","index$":0},"coverage_options":{"a":true,"h":"Coverage Options","n":"coverage_options","r":false,"sh":"Available member-scoped coverage options for the plan.","t":["`$ONE`",["`$NULL`","`$ARRAY`"]],"key$":"coverage_options","index$":1},"dependents":{"a":true,"h":"Dependents","n":"dependents","r":true,"sh":"List of dependents being managed.","t":"`$ARRAY`","key$":"dependents","index$":2},"disclosures":{"a":true,"h":"Disclosures","n":"disclosures","r":true,"sh":"Disclosures associated with this intent.","t":"`$ARRAY`","key$":"disclosures","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the dependents management intent.","t":"`$STRING`","key$":"id","index$":4},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"Object type identifier.","t":"`$STRING`","key$":"object","index$":5},"parent_intent_id":{"a":true,"h":"Parent Intent Id","n":"parent_intent_id","r":true,"sh":"The parent intent ID (e.g.","t":"`$STRING`","key$":"parent_intent_id","index$":6},"parent_intent_type":{"a":true,"h":"Parent Intent Type","n":"parent_intent_type","r":true,"sh":"The type of parent intent.","t":"`$ANY`","key$":"parent_intent_type","index$":7},"plan":{"a":true,"h":"Plan","n":"plan","r":true,"sh":"Plan information including pricing details.","t":"`$ANY`","key$":"plan","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of the dependents management intent.","t":"`$ANY`","key$":"status","index$":9}},"id":{"field":"id","name":"id"},"name":"dependent","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /dependents_management_intents/{dependents_management_intent_id}/dependents","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"ex":"dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"dependents_management_intent_id","or":"dependents_management_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/dependents_management_intents/{dependents_management_intent_id}/dependents","q":{"exist":["dependents_management_intent_id","idempotency_key","x_platform_id"]},"r":{},"s":[{"lit":"dependents_management_intents"},{"var":"dependents_management_intent_id"},{"lit":"dependents"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /dependents_management_intents/{dependents_management_intent_id}/dependents/{associated_person_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"dependents_management_intent_id","or":"dependents_management_intent_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"associated_person_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/dependents_management_intents/{dependents_management_intent_id}/dependents/{associated_person_id}","q":{"exist":["dependents_management_intent_id","id","x_platform_id"]},"r":{"param":{"associated_person_id":"id"}},"s":[{"lit":"dependents_management_intents"},{"var":"dependents_management_intent_id"},{"lit":"dependents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.dependents_management_intent"]]},"key$":"dependent","name__orig":"dependent","Name":"Dependent","name_":"dependent","name-":"dependent","NAME":"DEPENDENT","index$":7}, {"active":true,"entity":"dependent","key$":"BasicDependentFlow","kind":"basic","name":"BasicDependentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"dependent_ref01"},"m":{"dependents_management_intent_id":"dependents_management_intent01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"dependent_ref01","suffix":"_rm0"},"m":{"dependents_management_intent_id":"dependents_management_intent01","id":"dependent01"},"o":"remove","s":[],"v":[],"index$":1}]}, 'Dependent', {"POST /dependents_management_intents/{dependents_management_intent_id}/dependents":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["associated_person_ids"],"type":"object","properties":{"associated_person_ids":{"type":"array","items":{"pattern":"ap_.+","type":"string","example":"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"description":"List of associated person IDs to add as dependents. Must not be empty."},"dependent_coverage_selections":{"type":["null","array"],"items":{"required":[],"type":"object","properties":{},"additionalProperties":false,"x-ref":"#/components/schemas/DependentCoverageSelectionsRequest"},"description":"Optional coverage selections per dependent. Keyed by associated person ID."}},"additionalProperties":false,"x-ref":"#/components/schemas/AddDependentsRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"dependents_management_intent_id","in":"path","required":true,"schema":{"pattern":"dmi_.+","type":"string","example":"dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"Idempotency-Key","in":"header","description":"Unique key to ensure idempotent requests. If the same key is used for multiple _identical & successful_ requests, the same response will be returned. [Read more here](/api#idempotent-requests)","schema":{"type":"string"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]},"DELETE /dependents_management_intents/{dependents_management_intent_id}/dependents/{associated_person_id}":{"protocol":"http","parameters":[{"name":"dependents_management_intent_id","in":"path","required":true,"schema":{"pattern":"dmi_.+","type":"string","example":"dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"associated_person_id","in":"path","required":true,"schema":{"pattern":"ap_.+","type":"string","example":"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const dependent_ref01_ent = client.Dependent()
    let dependent_ref01_data = setup.data.new.dependent['dependent_ref01']
    dependent_ref01_data['dependents_management_intent_id'] = setup.idmap['dependents_management_intent01']

    dependent_ref01_data = (await dependent_ref01_ent.create(dependent_ref01_data)).data()
    assert(null != dependent_ref01_data.id)


    // REMOVE
    const dependent_ref01_match_rm0: any = { id: dependent_ref01_data.id }
    await dependent_ref01_ent.remove(dependent_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dependent/DependentTestData.json')

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
    ['dependent01','dependent02','dependent03','dependents_management_intent01','dependents_management_intent02','dependents_management_intent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_DEPENDENT_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_DEPENDENT_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_DEPENDENT_ENTID']
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
  
