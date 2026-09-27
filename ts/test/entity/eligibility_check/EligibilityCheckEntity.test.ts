

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


describe('EligibilityCheckEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.EligibilityCheck()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'eligibility_check.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"eligibility_status":{"a":true,"h":"Eligibility Status","n":"eligibility_status","r":true,"sh":"Eligibility status: `eligible` or `ineligible`.","t":"`$ANY`","key$":"eligibility_status","index$":0},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type.","t":"`$STRING`","key$":"object","index$":1},"plan":{"a":true,"h":"Plan","n":"plan","r":true,"sh":"The insurance plan associated with the group.","t":"`$ANY`","key$":"plan","index$":2},"provider":{"a":true,"h":"Provider","n":"provider","r":true,"sh":"The insurance provider associated with the group.","t":"`$ANY`","key$":"provider","index$":3},"reasons":{"a":true,"h":"Reasons","n":"reasons","r":true,"sh":"List of reasons why the employee is ineligible.","t":"`$ARRAY`","key$":"reasons","index$":4}},"name":"eligibility_check","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /groups/{group_id}/eligibility_check","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"group_id","or":"group_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/groups/{group_id}/eligibility_check","q":{"exist":["group_id","x_platform_id"]},"r":{},"s":[{"lit":"groups"},{"var":"group_id"},{"lit":"eligibility_check"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.group"]]},"key$":"eligibility_check","name__orig":"eligibility_check","Name":"EligibilityCheck","name_":"eligibility_check","name-":"eligibility-check","NAME":"ELIGIBILITY_CHECK","index$":9}, {"active":true,"entity":"eligibility_check","key$":"BasicEligibilityCheckFlow","kind":"basic","name":"BasicEligibilityCheckFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"eligibility_check_ref01"},"m":{"group_id":"group01"},"o":"create","s":[],"v":[],"index$":0}]}, 'EligibilityCheck', {"POST /groups/{group_id}/eligibility_check":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["employee_id"],"type":"object","properties":{"employee_id":{"pattern":"ee_.+","type":"string","description":"The employee to check eligibility for.","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"}},"additionalProperties":false,"x-ref":"#/components/schemas/CheckGroupEligibilityRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"group_id","in":"path","required":true,"schema":{"pattern":"gr_.+","type":"string","example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const eligibility_check_ref01_ent = client.EligibilityCheck()
    let eligibility_check_ref01_data = setup.data.new.eligibility_check['eligibility_check_ref01']
    eligibility_check_ref01_data['group_id'] = setup.idmap['group01']

    eligibility_check_ref01_data = (await eligibility_check_ref01_ent.create(eligibility_check_ref01_data)).data()
    assert(null != eligibility_check_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/eligibility_check/EligibilityCheckTestData.json')

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
    ['eligibility_check01','eligibility_check02','eligibility_check03','group01','group02','group03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_ELIGIBILITY_CHECK_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_ELIGIBILITY_CHECK_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_ELIGIBILITY_CHECK_ENTID']
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
  
