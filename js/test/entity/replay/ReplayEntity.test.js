
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


describe('ReplayEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.Replay()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"deliveries","req":true,"type":"`$ARRAY`","index$":0},{"active":true,"name":"event_id","req":true,"type":"`$STRING`","index$":1}],"name":"replay","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"x_platform_id","orig":"x_platform_id","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"evt_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"event_id","orig":"event_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /events/{event_id}/replay","json":"{\"operationId\":\"ReplayEvent\",\"parameters\":[{\"in\":\"path\",\"name\":\"event_id\",\"required\":true,\"schema\":{\"example\":\"evt_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"evt_.+\",\"type\":\"string\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"deliveries\":{\"items\":{\"additionalProperties\":false,\"properties\":{\"delivery_id\":{\"example\":\"evtd_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"evtd_.+\",\"type\":\"string\"},\"elapsed_time_ms\":{\"example\":123.45,\"format\":\"double\",\"type\":\"number\"},\"response_status_code\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"success\":{\"example\":true,\"type\":\"boolean\"}},\"required\":[\"delivery_id\",\"elapsed_time_ms\",\"response_status_code\",\"success\"],\"type\":\"object\"},\"type\":\"array\"},\"event_id\":{\"example\":\"evt_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"evt_.+\",\"type\":\"string\"}},\"required\":[\"deliveries\",\"event_id\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/events/{event_id}/replay","segments":[{"lit":"events"},{"var":"event_id"},{"lit":"replay"}],"select":{"exist":["event_id","x_platform_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["event"]]},"key$":"replay","name__orig":"replay","Name":"Replay","name_":"replay","name-":"replay","NAME":"REPLAY","index$":37}, {"active":true,"entity":"replay","key$":"BasicReplayFlow","kind":"basic","name":"BasicReplayFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"replay_ref01"},"match":{"event_id":"event01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'Replay')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const replay_ref01_ent = client.Replay()
    let replay_ref01_data = setup.data.new.replay['replay_ref01']
    replay_ref01_data['event_id'] = setup.idmap['event01']

    replay_ref01_data = (await replay_ref01_ent.create(replay_ref01_data)).data()
    assert(null != replay_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/replay/ReplayTestData.json')

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
    ['replay01','replay02','replay03','event01','event02','event03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_REPLAY_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_REPLAY_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_REPLAY_ENTID']
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
  
