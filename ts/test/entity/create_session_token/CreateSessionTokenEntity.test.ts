

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('CreateSessionTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.CreateSessionToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'create_session_token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"expiry","req":true,"type":"`$STRING`","index$":0},{"active":true,"name":"token","req":true,"type":"`$STRING`","index$":1}],"name":"create_session_token","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /embed/sessions","json":"{\"operationId\":\"CreateEmbedSession\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"employee_id\":{\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":[\"null\",\"string\"]},\"employer_id\":{\"example\":\"er_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"er_.+\",\"type\":\"string\"},\"external_customer_id\":{\"description\":\"A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. the company using the EoR service) for which the employee is employed. This ID groups employees under this Customer, enabling the aggregation of contribution reporting and other values per Customer rather than per legal entity. This parameter is required for Employer Session tokens for EoR platforms.\",\"type\":[\"null\",\"string\"]}},\"required\":[\"employer_id\"],\"type\":\"object\"}]}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"expiry\":{\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"token\":{\"type\":\"string\"}},\"required\":[\"expiry\",\"token\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"errors\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":\"object\"},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/embed/sessions","segments":[{"lit":"embed"},{"lit":"sessions"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"create_session_token","name__orig":"create_session_token","Name":"CreateSessionToken","name_":"create_session_token","name-":"create-session-token","NAME":"CREATE_SESSION_TOKEN","index$":6}, {"active":true,"entity":"create_session_token","key$":"BasicCreateSessionTokenFlow","kind":"basic","name":"BasicCreateSessionTokenFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"create_session_token_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'CreateSessionToken')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const create_session_token_ref01_ent = client.CreateSessionToken()
    let create_session_token_ref01_data = setup.data.new.create_session_token['create_session_token_ref01']

    create_session_token_ref01_data = (await create_session_token_ref01_ent.create(create_session_token_ref01_data)).data()
    assert(null != create_session_token_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/create_session_token/CreateSessionTokenTestData.json')

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
    ['create_session_token01','create_session_token02','create_session_token03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_CREATE_SESSION_TOKEN_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_CREATE_SESSION_TOKEN_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_CREATE_SESSION_TOKEN_ENTID']
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
  
