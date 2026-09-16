
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


describe('EligibilityCheckEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.EligibilityCheck()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"eligibility_status","req":true,"short":"Eligibility status: `eligible` or `ineligible`.","type":"`$ANY`","index$":0},{"active":true,"name":"object","readOnly":true,"req":false,"short":"The object type.","type":"`$STRING`","index$":1},{"active":true,"name":"plan","req":true,"short":"The insurance plan associated with the group.","type":"`$ANY`","index$":2},{"active":true,"name":"provider","req":true,"short":"The insurance provider associated with the group.","type":"`$ANY`","index$":3},{"active":true,"name":"reasons","req":true,"short":"List of reasons why the employee is ineligible.","type":"`$ARRAY`","index$":4}],"name":"eligibility_check","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"x_platform_id","orig":"x_platform_id","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"group_id","orig":"group_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /groups/{group_id}/eligibility_check","json":"{\"operationId\":\"CheckGroupEligibility\",\"parameters\":[{\"in\":\"path\",\"name\":\"group_id\",\"required\":true,\"schema\":{\"example\":\"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"gr_.+\",\"type\":\"string\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"employee_id\":{\"description\":\"The employee to check eligibility for.\",\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"}},\"required\":[\"employee_id\"],\"type\":\"object\"}]}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"eligibility_status\":{\"allOf\":[{\"enum\":[\"pending\",\"eligible\",\"ineligible\"],\"type\":\"string\"}],\"description\":\"Eligibility status: `eligible` or `ineligible`.\"},\"object\":{\"description\":\"The object type.\",\"readOnly\":true,\"type\":\"string\"},\"plan\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"description\":{\"description\":\"Description of the plan.\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the plan. Prefixed with `pl_`.\",\"example\":\"pl_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pl_.+\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the plan.\",\"type\":\"string\"}},\"required\":[\"description\",\"id\",\"name\"],\"type\":\"object\"}],\"description\":\"The insurance plan associated with the group.\"},\"provider\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"description\":{\"description\":\"Description of the provider.\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the provider. Prefixed with `pr_`.\",\"example\":\"pr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pr_.+\",\"type\":\"string\"},\"logo_url\":{\"description\":\"URL to the provider's logo.\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the provider.\",\"type\":\"string\"}},\"required\":[\"description\",\"id\",\"logo_url\",\"name\"],\"type\":\"object\"}],\"description\":\"The insurance provider associated with the group.\"},\"reasons\":{\"description\":\"List of reasons why the employee is ineligible. Empty if eligible.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Machine-readable ineligibility reason code in snake_case.\",\"type\":\"string\"},\"message\":{\"description\":\"Human-readable description of the ineligibility reason.\",\"type\":\"string\"}},\"required\":[\"code\",\"message\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"eligibility_status\",\"plan\",\"provider\",\"reasons\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/groups/{group_id}/eligibility_check","segments":[{"lit":"groups"},{"var":"group_id"},{"lit":"eligibility_check"}],"select":{"exist":["group_id","x_platform_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["group"]]},"key$":"eligibility_check","name__orig":"eligibility_check","Name":"EligibilityCheck","name_":"eligibility_check","name-":"eligibility-check","NAME":"ELIGIBILITY_CHECK","index$":9}, {"active":true,"entity":"eligibility_check","key$":"BasicEligibilityCheckFlow","kind":"basic","name":"BasicEligibilityCheckFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"eligibility_check_ref01"},"match":{"group_id":"group01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'EligibilityCheck')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const eligibility_check_ref01_ent = client.EligibilityCheck()
    let eligibility_check_ref01_data = setup.data.new.eligibility_check['eligibility_check_ref01']
    eligibility_check_ref01_data['group_id'] = setup.idmap['group01']

    eligibility_check_ref01_data = (await eligibility_check_ref01_ent.create(eligibility_check_ref01_data)).data()
    assert(null != eligibility_check_ref01_data)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/eligibility_check/EligibilityCheckTestData.json')

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
    ['eligibility_check01','eligibility_check02','eligibility_check03','group01','group02','group03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_ELIGIBILITY_CHECK_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_ELIGIBILITY_CHECK_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_ELIGIBILITY_CHECK_ENTID']
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
  
