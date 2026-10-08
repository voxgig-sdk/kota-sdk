

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


describe('ContributionReportEmployeeBreakdownResponsePagedListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.ContributionReportEmployeeBreakdownResponsePagedList()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ContributionReportEmployeeBreakdownResponsePagedList().list({"id":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'contribution_report_employee_breakdown_response_paged_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"contribution_report_employee_breakdown_response_paged_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /contribution_reports/{contribution_report_id}/employee_breakdowns","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"contribution_report_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/contribution_reports/{contribution_report_id}/employee_breakdowns","q":{"$action":"employee_breakdowns","exist":["id"]},"r":{"param":{"contribution_report_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"contribution_reports"},{"var":"id"},{"lit":"employee_breakdowns"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"contribution_report_employee_breakdown_response_paged_list","name__orig":"contribution_report_employee_breakdown_response_paged_list","Name":"ContributionReportEmployeeBreakdownResponsePagedList","name_":"contribution_report_employee_breakdown_response_paged_list","name-":"contribution-report-employee-breakdown-response-paged-list","NAME":"CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST","index$":4}, {"active":true,"entity":"contribution_report_employee_breakdown_response_paged_list","key$":"BasicContributionReportEmployeeBreakdownResponsePagedListFlow","kind":"basic","name":"BasicContributionReportEmployeeBreakdownResponsePagedListFlow","param":{},"step":[{"a":false,"d":{},"i":{},"m":{"contribution_report_id":"contribution_report01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"contribution_report_employee_breakdown_response_paged_list_ref01"}}],"unreachable":true}]}, 'ContributionReportEmployeeBreakdownResponsePagedList', {"GET /contribution_reports/{contribution_report_id}/employee_breakdowns":{"protocol":"http","parameters":[{"name":"contribution_report_id","in":"path","required":true,"schema":{"pattern":"ctr_.+","type":"string","example":"ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":1},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":2},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let contribution_report_employee_breakdown_response_paged_list_ref01_data = Object.values(setup.data.existing.contribution_report_employee_breakdown_response_paged_list)[0] as any

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
      '../../../../.sdk/test/entity/contribution_report_employee_breakdown_response_paged_list/ContributionReportEmployeeBreakdownResponsePagedListTestData.json')

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
    ['contribution_report_employee_breakdown_response_paged_list01','contribution_report_employee_breakdown_response_paged_list02','contribution_report_employee_breakdown_response_paged_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST_ENTID']
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
  
