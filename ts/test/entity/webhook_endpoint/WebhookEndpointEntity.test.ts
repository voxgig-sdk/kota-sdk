

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


describe('WebhookEndpointEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.WebhookEndpoint()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    name = 'failhook'
    version = '0.0.1'
    active = true
    unexpected = 0
    init() { }
    PreSpec() { throw new Error('webhook_endpoint hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of KotaSDK.test(offline).WebhookEndpoint().stream('list')) { }
    }, /offline/)

    for await (const _item of KotaSDK.test(offline).WebhookEndpoint()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != (config as any).feature?.rbac) {
      const denied = KotaSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.WebhookEndpoint().stream('list')) { }
      }, (err: any) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain: any = {}
    const ctrl: any = { explain }
    for await (const _item of KotaSDK.test().WebhookEndpoint().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new KotaSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.WebhookEndpoint().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.WebhookEndpoint().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.WebhookEndpoint().list({"page":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'webhook_endpoint.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":true,"sh":"The date and time the endpoint was created","t":"`$STRING`","key$":"created_at","index$":0},"endpoint_url":{"a":true,"h":"Endpoint Url","n":"endpoint_url","r":true,"sh":"The registered URL of the endpoint","t":"`$STRING`","key$":"endpoint_url","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"The unique identifier of the endpoint","t":"`$STRING`","key$":"id","index$":2},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":3},"subscribed_events":{"a":true,"h":"Subscribed Events","n":"subscribed_events","r":true,"sh":"The events the endpoint is subscribed to","t":"`$ARRAY`","key$":"subscribed_events","index$":4}},"id":{"field":"id","name":"id"},"name":"webhook_endpoint","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /webhooks/endpoints","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/webhooks/endpoints","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"webhooks"},{"lit":"endpoints"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /webhooks/endpoints/{webhook_endpoint_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"whe_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"webhook_endpoint_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/webhooks/endpoints/{webhook_endpoint_id}","q":{"exist":["id"]},"r":{"param":{"webhook_endpoint_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"webhooks"},{"lit":"endpoints"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"webhook_endpoint","name__orig":"webhook_endpoint","Name":"WebhookEndpoint","name_":"webhook_endpoint","name-":"webhook-endpoint","NAME":"WEBHOOK_ENDPOINT","index$":37}, {"active":true,"entity":"webhook_endpoint","key$":"BasicWebhookEndpointFlow","kind":"basic","name":"BasicWebhookEndpointFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"webhook_endpoint_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"webhook_endpoint_ref01","srcdatavar":"webhook_endpoint_ref01_data","suffix":"_dt0"},"m":{"id":"webhook_endpoint01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhook_endpoint_ref01"}}],"index$":1}]}, 'WebhookEndpoint', {"GET /webhooks/endpoints":{"protocol":"http","parameters":[{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":0},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]},"GET /webhooks/endpoints/{webhook_endpoint_id}":{"protocol":"http","parameters":[{"name":"webhook_endpoint_id","in":"path","required":true,"schema":{"pattern":"whe_.+","type":"string","example":"whe_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let webhook_endpoint_ref01_data = Object.values(setup.data.existing.webhook_endpoint)[0] as any

    // LIST
    const webhook_endpoint_ref01_ent = client.WebhookEndpoint()
    const webhook_endpoint_ref01_match: any = {}

    const webhook_endpoint_ref01_list = (await webhook_endpoint_ref01_ent.list(webhook_endpoint_ref01_match)).map((e: any) => e.data())


    // LOAD
    const webhook_endpoint_ref01_match_dt0: any = {}
    webhook_endpoint_ref01_match_dt0.id = webhook_endpoint_ref01_data.id
    const webhook_endpoint_ref01_data_dt0 = (await webhook_endpoint_ref01_ent.load(webhook_endpoint_ref01_match_dt0)).data()
    assert(webhook_endpoint_ref01_data_dt0.id === webhook_endpoint_ref01_data.id)


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
      '../../../../.sdk/test/entity/webhook_endpoint/WebhookEndpointTestData.json')

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
    ['webhook_endpoint01','webhook_endpoint02','webhook_endpoint03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_WEBHOOK_ENDPOINT_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_WEBHOOK_ENDPOINT_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_WEBHOOK_ENDPOINT_ENTID']
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
  
