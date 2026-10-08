
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


describe('EmployerHealthInsurancePolicyResponsePagedListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.EmployerHealthInsurancePolicyResponsePagedList()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.EmployerHealthInsurancePolicyResponsePagedList().list({"employer_id":1}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cancellation_date":{"a":true,"fo":"date","h":"Cancellation Date","n":"cancellation_date","r":false,"sh":"Policy was cancelled on this date, if cancellation occured","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"cancellation_date","index$":0},"coverage_levels":{"a":true,"h":"Coverage Levels","n":"coverage_levels","r":true,"sh":"Represents the available coverage levels for this policy","t":"`$ARRAY`","key$":"coverage_levels","index$":1},"employer_cancellation_period_length":{"a":true,"fo":"int32","h":"Employer Cancellation Period Length","n":"employer_cancellation_period_length","r":true,"sh":"How many days the employer has to cancel the policy since the policy starts","t":"`$INTEGER`","key$":"employer_cancellation_period_length","index$":2},"employer_id":{"a":true,"h":"Employer Id","n":"employer_id","r":true,"sh":"The Id of the employer for which the policy is created","t":"`$STRING`","key$":"employer_id","index$":3},"end_date":{"a":true,"fo":"date","h":"End Date","n":"end_date","r":true,"sh":"Policy ends on this date","t":"`$STRING`","key$":"end_date","index$":4},"enrolment_type":{"a":true,"h":"Enrolment Type","n":"enrolment_type","r":true,"sh":"Enrolment type of the policy","t":"`$STRING`","key$":"enrolment_type","index$":5},"group_policy_number":{"a":true,"h":"Group Policy Number","n":"group_policy_number","r":false,"sh":"Group’s health insurance policy number, if available","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"group_policy_number","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for policy","t":"`$STRING`","key$":"id","index$":7},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":8},"renewal":{"a":true,"h":"Renewal","n":"renewal","r":true,"sh":"Renewal information for the policy","t":"`$ANY`","key$":"renewal","index$":9},"start_date":{"a":true,"fo":"date","h":"Start Date","n":"start_date","r":true,"sh":"Policy starts on this date","t":"`$STRING`","key$":"start_date","index$":10},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of policy","t":"`$STRING`","key$":"status","index$":11}},"id":{"field":"id","name":"id"},"name":"employer_health_insurance_policy_response_paged_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /employers/{employer_id}/health_insurance/policies","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employer_id","or":"employer_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/employers/{employer_id}/health_insurance/policies","q":{"exist":["employer_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employers"},{"var":"employer_id"},{"lit":"health_insurance"},{"lit":"policies"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.employer"]]},"key$":"employer_health_insurance_policy_response_paged_list","name__orig":"employer_health_insurance_policy_response_paged_list","Name":"EmployerHealthInsurancePolicyResponsePagedList","name_":"employer_health_insurance_policy_response_paged_list","name-":"employer-health-insurance-policy-response-paged-list","NAME":"EMPLOYER_HEALTH_INSURANCE_POLICY_RESPONSE_PAGED_LIST","index$":17}, {"active":true,"entity":"employer_health_insurance_policy_response_paged_list","key$":"BasicEmployerHealthInsurancePolicyResponsePagedListFlow","kind":"basic","name":"BasicEmployerHealthInsurancePolicyResponsePagedListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"employer_id":"employer01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"employer_health_insurance_policy_response_paged_list_ref01"}}],"index$":0}]}, 'EmployerHealthInsurancePolicyResponsePagedList', {"GET /employers/{employer_id}/health_insurance/policies":{"protocol":"http","parameters":[{"name":"employer_id","in":"path","required":true,"schema":{"pattern":"er_.+","type":"string","example":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"status","in":"query","description":"Multiple values can be provided by separating them with a comma. Allowed values are: `scheduled`, `active`, `expired`, `cancelled`.","schema":{"type":"string"},"index$":1},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":2},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":3},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":4}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let employer_health_insurance_policy_response_paged_list_ref01_data = Object.values(setup.data.existing.employer_health_insurance_policy_response_paged_list)[0]

    // LIST
    const employer_health_insurance_policy_response_paged_list_ref01_ent = client.EmployerHealthInsurancePolicyResponsePagedList()
    const employer_health_insurance_policy_response_paged_list_ref01_match = {}
    employer_health_insurance_policy_response_paged_list_ref01_match['employer_id'] = setup.idmap['employer01']

    const employer_health_insurance_policy_response_paged_list_ref01_list = (await employer_health_insurance_policy_response_paged_list_ref01_ent.list(employer_health_insurance_policy_response_paged_list_ref01_match)).map((e) => e.data())


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
      '../../../../.sdk/test/entity/employer_health_insurance_policy_response_paged_list/EmployerHealthInsurancePolicyResponsePagedListTestData.json')

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
    ['employer_health_insurance_policy_response_paged_list01','employer_health_insurance_policy_response_paged_list02','employer_health_insurance_policy_response_paged_list03','employer01','employer02','employer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_RESPONSE_PAGED_LIST_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_RESPONSE_PAGED_LIST_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_RESPONSE_PAGED_LIST_ENTID']
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
  
