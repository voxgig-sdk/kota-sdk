
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


describe('EmployeeHealthInsuranceOfferEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.EmployeeHealthInsuranceOffer()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.EmployeeHealthInsuranceOffer().load({"employee_id":1,"id":"x"}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"coverage_level":{"a":true,"h":"Coverage Level","n":"coverage_level","r":true,"sh":"Details about the coverage level for the offer.","t":"`$ANY`","key$":"coverage_level","index$":0},"employee_id":{"a":true,"h":"Employee Id","n":"employee_id","r":true,"sh":"The Id of the employee for which the offer is available","t":"`$STRING`","key$":"employee_id","index$":1},"employer_id":{"a":true,"h":"Employer Id","n":"employer_id","r":true,"sh":"The Id of the employer for which the offer is available","t":"`$STRING`","key$":"employer_id","index$":2},"external_customer_id":{"a":true,"h":"External Customer Id","n":"external_customer_id","r":false,"sh":"A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"external_customer_id","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for offer","t":"`$STRING`","key$":"id","index$":4},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":5},"required_action":{"a":true,"h":"Required Action","n":"required_action","r":false,"sh":"Required action to progress the offer, if any.","t":"`$NULL`","key$":"required_action","index$":6},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of offer","t":"`$STRING`","key$":"status","index$":7}},"id":{"field":"id","name":"id"},"name":"employee_health_insurance_offer","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /employees/{employee_id}/health_insurance/offers/{employee_offer_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employee_id","or":"employee_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"eeho_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"employee_offer_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/employees/{employee_id}/health_insurance/offers/{employee_offer_id}","q":{"exist":["employee_id","id"]},"r":{"param":{"employee_offer_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employees"},{"var":"employee_id"},{"lit":"health_insurance"},{"lit":"offers"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.employee"]]},"key$":"employee_health_insurance_offer","name__orig":"employee_health_insurance_offer","Name":"EmployeeHealthInsuranceOffer","name_":"employee_health_insurance_offer","name-":"employee-health-insurance-offer","NAME":"EMPLOYEE_HEALTH_INSURANCE_OFFER","index$":11}, {"active":true,"entity":"employee_health_insurance_offer","key$":"BasicEmployeeHealthInsuranceOfferFlow","kind":"basic","name":"BasicEmployeeHealthInsuranceOfferFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"employee_health_insurance_offer_ref01","srcdatavar":"employee_health_insurance_offer_ref01_data","suffix":"_dt0"},"m":{"employee_id":"employee01","id":"employee_health_insurance_offer01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-employee_health_insurance_offer_ref01"}}],"index$":0}]}, 'EmployeeHealthInsuranceOffer', {"GET /employees/{employee_id}/health_insurance/offers/{employee_offer_id}":{"protocol":"http","parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"employee_offer_id","in":"path","required":true,"schema":{"pattern":"eeho_.+","type":"string","example":"eeho_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let employee_health_insurance_offer_ref01_data = Object.values(setup.data.existing.employee_health_insurance_offer)[0]

    // LOAD
    const employee_health_insurance_offer_ref01_ent = client.EmployeeHealthInsuranceOffer()
    const employee_health_insurance_offer_ref01_match_dt0 = {}
    employee_health_insurance_offer_ref01_match_dt0.id = employee_health_insurance_offer_ref01_data.id
    employee_health_insurance_offer_ref01_match_dt0['employee_id'] = setup.idmap['employee_id'] ?? setup.idmap['employee01']
    const employee_health_insurance_offer_ref01_data_dt0 = (await employee_health_insurance_offer_ref01_ent.load(employee_health_insurance_offer_ref01_match_dt0)).data()
    assert(employee_health_insurance_offer_ref01_data_dt0.id === employee_health_insurance_offer_ref01_data.id)


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
      '../../../../.sdk/test/entity/employee_health_insurance_offer/EmployeeHealthInsuranceOfferTestData.json')

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
    ['employee_health_insurance_offer01','employee_health_insurance_offer02','employee_health_insurance_offer03','employee01','employee02','employee03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_OFFER_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_OFFER_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_OFFER_ENTID']
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
  
