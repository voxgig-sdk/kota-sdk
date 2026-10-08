

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


describe('ContributionReportEmployeeBreakdownEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.ContributionReportEmployeeBreakdown()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.ContributionReportEmployeeBreakdown().load({"contribution_report_id":1,"id":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'contribution_report_employee_breakdown.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"contribution_report_id":{"a":true,"h":"Contribution Report Id","n":"contribution_report_id","r":true,"sh":"Unique identifier of the related contribution report","t":"`$STRING`","key$":"contribution_report_id","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"Date and time the breakdown was created","t":"`$STRING`","key$":"created_at","index$":1},"currency":{"a":true,"h":"Currency","n":"currency","r":true,"sh":"The currency in which all the amounts in this breakdown are presented (e.g.","t":"`$STRING`","key$":"currency","index$":2},"employee_id":{"a":true,"h":"Employee Id","n":"employee_id","r":true,"sh":"Unique identifier of the employee for which the breakdown is created","t":"`$STRING`","key$":"employee_id","index$":3},"employer_id":{"a":true,"h":"Employer Id","n":"employer_id","r":true,"sh":"Unique identifier of the employer for which the breakdown is created","t":"`$STRING`","key$":"employer_id","index$":4},"external_customer_id":{"a":true,"h":"External Customer Id","n":"external_customer_id","r":false,"sh":"Unique identifier of the customer for which the breakdown is created.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"external_customer_id","index$":5},"finalized_at":{"a":true,"fo":"date-time","h":"Finalized At","n":"finalized_at","r":false,"sh":"Date and time the breakdown was finalized, if applicable","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"finalized_at","index$":6},"health_insurance":{"a":true,"h":"Health Insurance","n":"health_insurance","r":true,"sh":"Health insurance contribution details","t":"`$ANY`","key$":"health_insurance","index$":7},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":8},"last_updated_at":{"a":true,"fo":"date-time","h":"Last Updated At","n":"last_updated_at","r":true,"sh":"Date and time of the last update to the breakdown","t":"`$STRING`","key$":"last_updated_at","index$":9},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":10},"period":{"a":true,"h":"Period","n":"period","r":true,"sh":"Period covered by the employee breakdown","t":"`$ANY`","key$":"period","index$":11},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of the breakdown","t":"`$STRING`","key$":"status","index$":12}},"id":{"field":"id","name":"id"},"name":"contribution_report_employee_breakdown","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"contribution_report_id","or":"contribution_report_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"employee_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}","q":{"exist":["contribution_report_id","id"]},"r":{"param":{"employee_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"contribution_reports"},{"var":"contribution_report_id"},{"lit":"employee_breakdowns"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.contribution_report"]]},"key$":"contribution_report_employee_breakdown","name__orig":"contribution_report_employee_breakdown","Name":"ContributionReportEmployeeBreakdown","name_":"contribution_report_employee_breakdown","name-":"contribution-report-employee-breakdown","NAME":"CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN","index$":3}, {"active":true,"entity":"contribution_report_employee_breakdown","key$":"BasicContributionReportEmployeeBreakdownFlow","kind":"basic","name":"BasicContributionReportEmployeeBreakdownFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"contribution_report_employee_breakdown_ref01","srcdatavar":"contribution_report_employee_breakdown_ref01_data","suffix":"_dt0"},"m":{"contribution_report_id":"contribution_report01","id":"contribution_report_employee_breakdown01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-contribution_report_employee_breakdown_ref01"}}],"index$":0}]}, 'ContributionReportEmployeeBreakdown', {"GET /contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}":{"protocol":"http","parameters":[{"name":"contribution_report_id","in":"path","required":true,"schema":{"pattern":"ctr_.+","type":"string","example":"ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let contribution_report_employee_breakdown_ref01_data = Object.values(setup.data.existing.contribution_report_employee_breakdown)[0] as any

    // LOAD
    const contribution_report_employee_breakdown_ref01_ent = client.ContributionReportEmployeeBreakdown()
    const contribution_report_employee_breakdown_ref01_match_dt0: any = {}
    contribution_report_employee_breakdown_ref01_match_dt0.id = contribution_report_employee_breakdown_ref01_data.id
    const contribution_report_employee_breakdown_ref01_data_dt0 = (await contribution_report_employee_breakdown_ref01_ent.load(contribution_report_employee_breakdown_ref01_match_dt0)).data()
    assert(contribution_report_employee_breakdown_ref01_data_dt0.id === contribution_report_employee_breakdown_ref01_data.id)


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
      '../../../../.sdk/test/entity/contribution_report_employee_breakdown/ContributionReportEmployeeBreakdownTestData.json')

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
    ['contribution_report_employee_breakdown01','contribution_report_employee_breakdown02','contribution_report_employee_breakdown03','contribution_report01','contribution_report02','contribution_report03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_ENTID']
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
  
