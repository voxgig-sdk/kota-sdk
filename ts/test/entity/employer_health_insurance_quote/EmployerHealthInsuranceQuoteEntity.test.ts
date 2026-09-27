

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


describe('EmployerHealthInsuranceQuoteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.EmployerHealthInsuranceQuote()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'employer_health_insurance_quote.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"coverage_levels":{"a":true,"h":"Coverage Levels","n":"coverage_levels","r":true,"sh":"List of levels covered under the policy, each item representing details about the plan’s cover.","t":"`$ARRAY`","key$":"coverage_levels","index$":0},"employer_id":{"a":true,"h":"Employer Id","n":"employer_id","r":true,"sh":"The Id of the employer for which the is created","t":"`$STRING`","key$":"employer_id","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the quote","t":"`$STRING`","key$":"id","index$":2},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":3},"quoted_at":{"a":true,"fo":"date-time","h":"Quoted At","n":"quoted_at","r":true,"sh":"Date and time the quote was created at","t":"`$STRING`","key$":"quoted_at","index$":4},"required_action":{"a":true,"h":"Required Action","n":"required_action","r":false,"sh":"Actions required by the employer to proceed with the quote.","t":"`$NULL`","key$":"required_action","index$":5},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of the quote","t":"`$ANY`","key$":"status","index$":6}},"id":{"field":"id","name":"id"},"name":"employer_health_insurance_quote","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /employers/{employer_id}/health_insurance/quotes/{employer_quote_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employer_id","or":"employer_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"erhq_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"employer_quote_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/employers/{employer_id}/health_insurance/quotes/{employer_quote_id}","q":{"exist":["employer_id","id","x_platform_id"]},"r":{"param":{"employer_quote_id":"id"}},"s":[{"lit":"employers"},{"var":"employer_id"},{"lit":"health_insurance"},{"lit":"quotes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.employer"]]},"key$":"employer_health_insurance_quote","name__orig":"employer_health_insurance_quote","Name":"EmployerHealthInsuranceQuote","name_":"employer_health_insurance_quote","name-":"employer-health-insurance-quote","NAME":"EMPLOYER_HEALTH_INSURANCE_QUOTE","index$":18}, {"active":true,"entity":"employer_health_insurance_quote","key$":"BasicEmployerHealthInsuranceQuoteFlow","kind":"basic","name":"BasicEmployerHealthInsuranceQuoteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"employer_health_insurance_quote_ref01","srcdatavar":"employer_health_insurance_quote_ref01_data","suffix":"_dt0"},"m":{"employer_id":"employer01","id":"employer_health_insurance_quote01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-employer_health_insurance_quote_ref01"}}],"index$":0}]}, 'EmployerHealthInsuranceQuote', {"GET /employers/{employer_id}/health_insurance/quotes/{employer_quote_id}":{"protocol":"http","parameters":[{"name":"employer_id","in":"path","required":true,"schema":{"pattern":"er_.+","type":"string","example":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"employer_quote_id","in":"path","required":true,"schema":{"pattern":"erhq_.+","type":"string","example":"erhq_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let employer_health_insurance_quote_ref01_data = Object.values(setup.data.existing.employer_health_insurance_quote)[0] as any

    // LOAD
    const employer_health_insurance_quote_ref01_ent = client.EmployerHealthInsuranceQuote()
    const employer_health_insurance_quote_ref01_match_dt0: any = {}
    employer_health_insurance_quote_ref01_match_dt0.id = employer_health_insurance_quote_ref01_data.id
    const employer_health_insurance_quote_ref01_data_dt0 = (await employer_health_insurance_quote_ref01_ent.load(employer_health_insurance_quote_ref01_match_dt0)).data()
    assert(employer_health_insurance_quote_ref01_data_dt0.id === employer_health_insurance_quote_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/employer_health_insurance_quote/EmployerHealthInsuranceQuoteTestData.json')

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
    ['employer_health_insurance_quote01','employer_health_insurance_quote02','employer_health_insurance_quote03','employer01','employer02','employer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_QUOTE_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_QUOTE_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_QUOTE_ENTID']
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
  
