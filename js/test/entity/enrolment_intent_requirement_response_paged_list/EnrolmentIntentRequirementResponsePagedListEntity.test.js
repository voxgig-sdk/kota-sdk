
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


describe('EnrolmentIntentRequirementResponsePagedListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.EnrolmentIntentRequirementResponsePagedList()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.EnrolmentIntentRequirementResponsePagedList().list({"id":1}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"enrolment_intent_requirement_response_paged_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /enrolment_intents/{enrolment_intent_id}/requirements","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"enrolment_intent_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"object_id","or":"object_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"object_type","or":"object_type","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":3}]},"k":"http","m":"GET","o":"/enrolment_intents/{enrolment_intent_id}/requirements","q":{"$action":"requirements","exist":["id"]},"r":{"param":{"enrolment_intent_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"enrolment_intents"},{"var":"id"},{"lit":"requirements"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"enrolment_intent_requirement_response_paged_list","name__orig":"enrolment_intent_requirement_response_paged_list","Name":"EnrolmentIntentRequirementResponsePagedList","name_":"enrolment_intent_requirement_response_paged_list","name-":"enrolment-intent-requirement-response-paged-list","NAME":"ENROLMENT_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST","index$":21}, {"active":true,"entity":"enrolment_intent_requirement_response_paged_list","key$":"BasicEnrolmentIntentRequirementResponsePagedListFlow","kind":"basic","name":"BasicEnrolmentIntentRequirementResponsePagedListFlow","param":{},"step":[{"a":false,"d":{},"i":{},"m":{"enrolment_intent_id":"enrolment_intent01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"enrolment_intent_requirement_response_paged_list_ref01"}}],"unreachable":true}]}, 'EnrolmentIntentRequirementResponsePagedList', {"GET /enrolment_intents/{enrolment_intent_id}/requirements":{"protocol":"http","parameters":[{"name":"enrolment_intent_id","in":"path","required":true,"schema":{"pattern":"ei_.+","type":"string","example":"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"object_type","in":"query","description":"Filter by object type (employee or employer)","schema":{"allOf":[{"type":"object","properties":{"value":{"allOf":[{"enum":[],"type":"string","x-ref":"#/components/schemas/RequirementObjectType"}]}},"additionalProperties":false,"x-ref":"#/components/schemas/RequirementObjectTypeEnumParameter"}],"description":"Filter by object type (employee or employer)"},"index$":1},{"name":"object_id","in":"query","description":"Filter by object ID (employee ID or employer ID)","schema":{"type":"string","description":"Filter by object ID (employee ID or employer ID)"},"index$":2},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":3},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":4},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":5}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let enrolment_intent_requirement_response_paged_list_ref01_data = Object.values(setup.data.existing.enrolment_intent_requirement_response_paged_list)[0]

  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/enrolment_intent_requirement_response_paged_list/EnrolmentIntentRequirementResponsePagedListTestData.json')

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
    ['enrolment_intent_requirement_response_paged_list01','enrolment_intent_requirement_response_paged_list02','enrolment_intent_requirement_response_paged_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_ENROLMENT_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_ENROLMENT_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_ENROLMENT_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST_ENTID']
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
  
