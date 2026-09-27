

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


describe('GroupPolicyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.GroupPolicy()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'group_policy.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cancellation_date":{"a":true,"fo":"date","h":"Cancellation Date","n":"cancellation_date","r":false,"sh":"Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"cancellation_date","index$":0},"disclosures":{"a":true,"h":"Disclosures","n":"disclosures","r":true,"sh":"Disclosures associated with this group policy.","t":"`$ARRAY`","key$":"disclosures","index$":1},"employer_id":{"a":true,"h":"Employer Id","n":"employer_id","r":false,"sh":"Identifier for the employer associated with this group policy.","t":"`$STRING`","key$":"employer_id","index$":2},"end_date":{"a":true,"fo":"date","h":"End Date","n":"end_date","r":false,"sh":"Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"end_date","index$":3},"group_id":{"a":true,"h":"Group Id","n":"group_id","r":false,"sh":"Identifier for the group associated with this group policy.","t":"`$STRING`","key$":"group_id","index$":4},"health_insurance":{"a":true,"h":"Health Insurance","n":"health_insurance","r":false,"sh":"Health insurance–specific fields (present when `type=health_insurance`).","t":"`$NULL`","key$":"health_insurance","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the group policy.","t":"`$STRING`","key$":"id","index$":6},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":7},"plan":{"a":true,"h":"Plan","n":"plan","r":true,"sh":"Plan information for this policy","t":"`$ANY`","key$":"plan","index$":8},"provider":{"a":true,"h":"Provider","n":"provider","r":true,"sh":"Provider information for this policy.","t":"`$ANY`","key$":"provider","index$":9},"start_date":{"a":true,"fo":"date","h":"Start Date","n":"start_date","r":true,"sh":"Policy start (effective) date in ISO 8601 (YYYY-MM-DD).","t":"`$STRING`","key$":"start_date","index$":10},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current lifecycle state of the `group_policy`, indicating its progress from creation to activation.","t":"`$ANY`","key$":"status","index$":11},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Policy type.","t":"`$ANY`","key$":"type","index$":12}},"id":{"field":"id","name":"id"},"name":"group_policy","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /group_policies","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"employer_id","or":"employer_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"group_id","or":"group_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/group_policies","q":{"exist":["employer_id","group_id","page","page_size","status","x_platform_id"]},"r":{},"s":[{"lit":"group_policies"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /group_policies/{group_policy_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"gp_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"group_policy_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/group_policies/{group_policy_id}","q":{"exist":["id","x_platform_id"]},"r":{"param":{"group_policy_id":"id"}},"s":[{"lit":"group_policies"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"group_policy","name__orig":"group_policy","Name":"GroupPolicy","name_":"group_policy","name-":"group-policy","NAME":"GROUP_POLICY","index$":26}, {"active":true,"entity":"group_policy","key$":"BasicGroupPolicyFlow","kind":"basic","name":"BasicGroupPolicyFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"group_policy_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"group_policy_ref01","srcdatavar":"group_policy_ref01_data","suffix":"_dt0"},"m":{"id":"group_policy01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-group_policy_ref01"}}],"index$":1}]}, 'GroupPolicy', {"GET /group_policies":{"protocol":"http","parameters":[{"name":"employer_id","in":"query","description":"Filters group policies by employer.","schema":{"pattern":"er_.+","type":"string","description":"Filters group policies by employer.","example":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"group_id","in":"query","description":"Filters group policies by group.","schema":{"pattern":"gr_.+","type":"string","description":"Filters group policies by group.","example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"status","in":"query","description":"Multiple values can be provided by separating them with a comma. Allowed values are: `scheduled`, `active`, `expired`, `cancelled`.","schema":{"type":"string"},"index$":2},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":3},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":4},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":5}]},"GET /group_policies/{group_policy_id}":{"protocol":"http","parameters":[{"name":"group_policy_id","in":"path","required":true,"schema":{"pattern":"gp_.+","type":"string","example":"gp_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let group_policy_ref01_data = Object.values(setup.data.existing.group_policy)[0] as any

    // LIST
    const group_policy_ref01_ent = client.GroupPolicy()
    const group_policy_ref01_match: any = {}

    const group_policy_ref01_list = (await group_policy_ref01_ent.list(group_policy_ref01_match)).map((e: any) => e.data())


    // LOAD
    const group_policy_ref01_match_dt0: any = {}
    group_policy_ref01_match_dt0.id = group_policy_ref01_data.id
    const group_policy_ref01_data_dt0 = (await group_policy_ref01_ent.load(group_policy_ref01_match_dt0)).data()
    assert(group_policy_ref01_data_dt0.id === group_policy_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/group_policy/GroupPolicyTestData.json')

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
    ['group_policy01','group_policy02','group_policy03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_GROUP_POLICY_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_GROUP_POLICY_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_GROUP_POLICY_ENTID']
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
  
