
const envlocal = __dirname + '/../../../.env.local'
require('../../utility').loadEnvLocal(envlocal)

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')
const { createLiveTransport } = require('../../live-runner')
const { runLiveEntity } = require('../../live-entity')


const { KotaSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  liveClientOptions,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('WebhookEndpointEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.WebhookEndpoint()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"created_at","req":true,"short":"The date and time the endpoint was created","type":"`$STRING`","index$":0},{"active":true,"name":"endpoint_url","req":true,"short":"The registered URL of the endpoint","type":"`$STRING`","index$":1},{"active":true,"name":"id","req":true,"short":"The unique identifier of the endpoint","type":"`$STRING`","index$":2},{"active":true,"name":"object","readOnly":true,"req":false,"short":"The object type","type":"`$STRING`","index$":3},{"active":true,"name":"subscribed_events","req":true,"short":"The events the endpoint is subscribed to","type":"`$ARRAY`","index$":4}],"id":{"field":"id","name":"id"},"name":"webhook_endpoint","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"x_platform_id","orig":"x_platform_id","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"whe_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"id","orig":"webhook_endpoint_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /webhooks/endpoints/{webhook_endpoint_id}","json":"{\"operationId\":\"RetrieveWebhookEndpoint\",\"parameters\":[{\"in\":\"path\",\"name\":\"webhook_endpoint_id\",\"required\":true,\"schema\":{\"example\":\"whe_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"whe_.+\",\"type\":\"string\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"created_at\":{\"description\":\"The date and time the endpoint was created\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"endpoint_url\":{\"description\":\"The registered URL of the endpoint\",\"type\":\"string\"},\"id\":{\"description\":\"The unique identifier of the endpoint\",\"example\":\"whe_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"whe_.+\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"subscribed_events\":{\"description\":\"The events the endpoint is subscribed to\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"created_at\",\"endpoint_url\",\"id\",\"subscribed_events\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/webhooks/endpoints/{webhook_endpoint_id}","rename":{"param":{"webhook_endpoint_id":"id"}},"segments":[{"lit":"webhooks"},{"lit":"endpoints"},{"var":"id"}],"select":{"exist":["id","x_platform_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"webhook_endpoint","name__orig":"webhook_endpoint","Name":"WebhookEndpoint","name_":"webhook_endpoint","name-":"webhook-endpoint","NAME":"WEBHOOK_ENDPOINT","index$":38}, {"active":true,"entity":"webhook_endpoint","key$":"BasicWebhookEndpointFlow","kind":"basic","name":"BasicWebhookEndpointFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"webhook_endpoint_ref01","srcdatavar":"webhook_endpoint_ref01_data","suffix":"_dt0"},"match":{"id":"webhook_endpoint01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-webhook_endpoint_ref01"}}],"index$":0}]}, 'WebhookEndpoint')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let webhook_endpoint_ref01_data = Object.values(setup.data.existing.webhook_endpoint)[0]

    // LOAD
    const webhook_endpoint_ref01_ent = client.WebhookEndpoint()
    const webhook_endpoint_ref01_match_dt0 = {}
    webhook_endpoint_ref01_match_dt0.id = webhook_endpoint_ref01_data.id
    const webhook_endpoint_ref01_data_dt0 = (await webhook_endpoint_ref01_ent.load(webhook_endpoint_ref01_match_dt0)).data()
    assert(webhook_endpoint_ref01_data_dt0.id === webhook_endpoint_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when
      // the last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey and
      // server values above and handed the SDK undefined.
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
  
