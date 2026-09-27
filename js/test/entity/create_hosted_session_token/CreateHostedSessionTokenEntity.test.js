
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


describe('CreateHostedSessionTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.CreateHostedSessionToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"expiry":{"a":true,"fo":"date-time","h":"Expiry","n":"expiry","r":true,"t":"`$STRING`","key$":"expiry","index$":0},"link":{"a":true,"h":"Link","n":"link","r":true,"t":"`$STRING`","key$":"link","index$":1}},"name":"create_hosted_session_token","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /hosted/sessions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/hosted/sessions","q":{},"r":{},"s":[{"lit":"hosted"},{"lit":"sessions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"create_hosted_session_token","name__orig":"create_hosted_session_token","Name":"CreateHostedSessionToken","name_":"create_hosted_session_token","name-":"create-hosted-session-token","NAME":"CREATE_HOSTED_SESSION_TOKEN","index$":5}, {"active":true,"entity":"create_hosted_session_token","key$":"BasicCreateHostedSessionTokenFlow","kind":"basic","name":"BasicCreateHostedSessionTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"create_hosted_session_token_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'CreateHostedSessionToken', {"POST /hosted/sessions":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["employee_id","employer_id"],"type":"object","properties":{"employer_id":{"pattern":"er_.+","type":"string","example":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"employee_id":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"}},"additionalProperties":false,"x-ref":"#/components/schemas/CreateSessionTokenLinkRequest"}],"index$":1}}},"required":true},"parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_hosted_session_token_ref01_ent = client.CreateHostedSessionToken()
    let create_hosted_session_token_ref01_data = setup.data.new.create_hosted_session_token['create_hosted_session_token_ref01']

    create_hosted_session_token_ref01_data = (await create_hosted_session_token_ref01_ent.create(create_hosted_session_token_ref01_data)).data()
    assert(null != create_hosted_session_token_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/create_hosted_session_token/CreateHostedSessionTokenTestData.json')

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
    ['create_hosted_session_token01','create_hosted_session_token02','create_hosted_session_token03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_CREATE_HOSTED_SESSION_TOKEN_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_CREATE_HOSTED_SESSION_TOKEN_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_CREATE_HOSTED_SESSION_TOKEN_ENTID']
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
  
