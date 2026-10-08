

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


describe('CreateHostedSessionTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.CreateHostedSessionToken()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.CreateHostedSessionToken().create({"employee_id":1,"employer_id":"x","expiry":"x","link":"x"} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'create_hosted_session_token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"employee_id":{"a":true,"h":"Employee Id","n":"employee_id","r":true,"t":"`$STRING`","key$":"employee_id","index$":0},"employer_id":{"a":true,"h":"Employer Id","n":"employer_id","r":true,"t":"`$STRING`","key$":"employer_id","index$":1},"expiry":{"a":true,"fo":"date-time","h":"Expiry","n":"expiry","r":true,"t":"`$STRING`","key$":"expiry","index$":2},"link":{"a":true,"h":"Link","n":"link","r":true,"t":"`$STRING`","key$":"link","index$":3}},"name":"create_hosted_session_token","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["employee_id","employer_id"],"co":{"id":"POST /hosted/sessions","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/hosted/sessions","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"hosted"},{"lit":"sessions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"create_hosted_session_token","name__orig":"create_hosted_session_token","Name":"CreateHostedSessionToken","name_":"create_hosted_session_token","name-":"create-hosted-session-token","NAME":"CREATE_HOSTED_SESSION_TOKEN","index$":5}, {"active":true,"entity":"create_hosted_session_token","key$":"BasicCreateHostedSessionTokenFlow","kind":"basic","name":"BasicCreateHostedSessionTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"create_hosted_session_token_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'CreateHostedSessionToken', {"POST /hosted/sessions":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["employee_id","employer_id"],"type":"object","properties":{"employer_id":{"pattern":"er_.+","type":"string","example":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a","key$":"employer_id"},"employee_id":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","key$":"employee_id"}},"additionalProperties":false,"x-ref":"#/components/schemas/CreateSessionTokenLinkRequest"}],"index$":1}}},"required":true},"parameters":[]}}, { strict: LIVE_STRICT, t })
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
  
