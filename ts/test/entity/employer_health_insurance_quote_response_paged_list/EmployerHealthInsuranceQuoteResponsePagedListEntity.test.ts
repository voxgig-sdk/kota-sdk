

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


describe('EmployerHealthInsuranceQuoteResponsePagedListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.EmployerHealthInsuranceQuoteResponsePagedList()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.EmployerHealthInsuranceQuoteResponsePagedList().list({"employer_id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'employer_health_insurance_quote_response_paged_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"coverage_levels":{"a":true,"h":"Coverage Levels","n":"coverage_levels","r":true,"sh":"List of levels covered under the policy, each item representing details about the plan’s cover.","t":"`$ARRAY`","key$":"coverage_levels","index$":0},"employer_id":{"a":true,"h":"Employer Id","n":"employer_id","r":true,"sh":"The Id of the employer for which the is created","t":"`$STRING`","key$":"employer_id","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the quote","t":"`$STRING`","key$":"id","index$":2},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":3},"quoted_at":{"a":true,"fo":"date-time","h":"Quoted At","n":"quoted_at","r":true,"sh":"Date and time the quote was created at","t":"`$STRING`","key$":"quoted_at","index$":4},"required_action":{"a":true,"h":"Required Action","n":"required_action","r":false,"sh":"Actions required by the employer to proceed with the quote.","t":"`$NULL`","key$":"required_action","index$":5},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of the quote","t":"`$STRING`","key$":"status","index$":6}},"id":{"field":"id","name":"id"},"name":"employer_health_insurance_quote_response_paged_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /employers/{employer_id}/health_insurance/quotes","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employer_id","or":"employer_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/employers/{employer_id}/health_insurance/quotes","q":{"exist":["employer_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employers"},{"var":"employer_id"},{"lit":"health_insurance"},{"lit":"quotes"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.employer"]]},"key$":"employer_health_insurance_quote_response_paged_list","name__orig":"employer_health_insurance_quote_response_paged_list","Name":"EmployerHealthInsuranceQuoteResponsePagedList","name_":"employer_health_insurance_quote_response_paged_list","name-":"employer-health-insurance-quote-response-paged-list","NAME":"EMPLOYER_HEALTH_INSURANCE_QUOTE_RESPONSE_PAGED_LIST","index$":19}, {"active":true,"entity":"employer_health_insurance_quote_response_paged_list","key$":"BasicEmployerHealthInsuranceQuoteResponsePagedListFlow","kind":"basic","name":"BasicEmployerHealthInsuranceQuoteResponsePagedListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"employer_id":"employer01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"employer_health_insurance_quote_response_paged_list_ref01"}}],"index$":0}]}, 'EmployerHealthInsuranceQuoteResponsePagedList', {"GET /employers/{employer_id}/health_insurance/quotes":{"protocol":"http","parameters":[{"name":"employer_id","in":"path","required":true,"schema":{"pattern":"er_.+","type":"string","example":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"status","in":"query","description":"Multiple values can be provided by separating them with a comma. Allowed values are: `pending_quote`, `action_required`, `not_undertaken`, `accepted`, `pending_insurer_acceptance`.","schema":{"type":"string"},"index$":1},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":2},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":3},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":4}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let employer_health_insurance_quote_response_paged_list_ref01_data = Object.values(setup.data.existing.employer_health_insurance_quote_response_paged_list)[0] as any

    // LIST
    const employer_health_insurance_quote_response_paged_list_ref01_ent = client.EmployerHealthInsuranceQuoteResponsePagedList()
    const employer_health_insurance_quote_response_paged_list_ref01_match: any = {}
    employer_health_insurance_quote_response_paged_list_ref01_match['employer_id'] = setup.idmap['employer01']

    const employer_health_insurance_quote_response_paged_list_ref01_list = (await employer_health_insurance_quote_response_paged_list_ref01_ent.list(employer_health_insurance_quote_response_paged_list_ref01_match)).map((e: any) => e.data())


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
      '../../../../.sdk/test/entity/employer_health_insurance_quote_response_paged_list/EmployerHealthInsuranceQuoteResponsePagedListTestData.json')

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
    ['employer_health_insurance_quote_response_paged_list01','employer_health_insurance_quote_response_paged_list02','employer_health_insurance_quote_response_paged_list03','employer01','employer02','employer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_QUOTE_RESPONSE_PAGED_LIST_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_QUOTE_RESPONSE_PAGED_LIST_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_QUOTE_RESPONSE_PAGED_LIST_ENTID']
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
  
