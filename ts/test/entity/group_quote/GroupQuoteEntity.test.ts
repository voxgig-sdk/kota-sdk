

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


describe('GroupQuoteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.GroupQuote()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'group_quote.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"family_type":{"a":true,"h":"Family Type","n":"family_type","r":false,"sh":"Type of the family covered by the employer.","t":"`$NULL`","key$":"family_type","index$":0},"member_count":{"a":true,"h":"Member Count","n":"member_count","r":false,"sh":"Numbers of additional members covered by the employer.","t":"`$NULL`","key$":"member_count","index$":1},"member_selection":{"a":true,"h":"Member Selection","n":"member_selection","r":false,"sh":"Whether specific member types are covered by the employer.","t":"`$NULL`","key$":"member_selection","index$":2},"percentage":{"a":true,"h":"Percentage","n":"percentage","r":false,"sh":"Percentage of the premium the employer covers.","t":"`$NULL`","key$":"percentage","index$":3},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Cost sharing type.","t":"`$ANY`","key$":"type","index$":4}},"name":"group_quote","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /group_quote_intents/{group_quote_intent_id}/quote","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"group_quote_intent_id","or":"group_quote_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/group_quote_intents/{group_quote_intent_id}/quote","q":{"exist":["group_quote_intent_id","x_platform_id"]},"r":{},"s":[{"lit":"group_quote_intents"},{"var":"group_quote_intent_id"},{"lit":"quote"}],"t":{"req":"`reqdata`","res":"`body.cost_sharing`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.group_quote_intent"]]},"key$":"group_quote","name__orig":"group_quote","Name":"GroupQuote","name_":"group_quote","name-":"group-quote","NAME":"GROUP_QUOTE","index$":29}, {"active":true,"entity":"group_quote","key$":"BasicGroupQuoteFlow","kind":"basic","name":"BasicGroupQuoteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"group_quote_ref01","srcdatavar":"group_quote_ref01_data","suffix":"_dt0"},"m":{"id":"group_quote01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-group_quote_ref01"}}],"index$":0}]}, 'GroupQuote', {"GET /group_quote_intents/{group_quote_intent_id}/quote":{"protocol":"http","parameters":[{"name":"group_quote_intent_id","in":"path","required":true,"schema":{"pattern":"gqi_.+","type":"string","example":"gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let group_quote_ref01_data = Object.values(setup.data.existing.group_quote)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const group_quote_ref01_ent = client.GroupQuote()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/group_quote/GroupQuoteTestData.json')

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
    ['group_quote01','group_quote02','group_quote03','group_quote_intent01','group_quote_intent02','group_quote_intent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_GROUP_QUOTE_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_GROUP_QUOTE_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_GROUP_QUOTE_ENTID']
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
  
