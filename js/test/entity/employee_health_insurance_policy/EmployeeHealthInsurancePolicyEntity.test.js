
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


describe('EmployeeHealthInsurancePolicyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.EmployeeHealthInsurancePolicy()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cancellation_date":{"a":true,"fo":"date","h":"Cancellation Date","n":"cancellation_date","r":false,"sh":"Policy was cancelled on this date, if cancellation occured","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"cancellation_date","index$":0},"coverage_level":{"a":true,"h":"Coverage Level","n":"coverage_level","r":true,"sh":"Represents the current coverage level for the policy","t":"`$ANY`","key$":"coverage_level","index$":1},"employee_id":{"a":true,"h":"Employee Id","n":"employee_id","r":true,"sh":"The Id of the employee for which the policy is created","t":"`$STRING`","key$":"employee_id","index$":2},"employer_id":{"a":true,"h":"Employer Id","n":"employer_id","r":true,"sh":"The Id of the employer for which the policy is created","t":"`$STRING`","key$":"employer_id","index$":3},"end_date":{"a":true,"fo":"date","h":"End Date","n":"end_date","r":true,"sh":"Policy ends on this date","t":"`$STRING`","key$":"end_date","index$":4},"enrolled_dependants_count":{"a":true,"fo":"int32","h":"Enrolled Dependants Count","n":"enrolled_dependants_count","r":true,"sh":"Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy.","t":"`$INTEGER`","key$":"enrolled_dependants_count","index$":5},"enrolment_type":{"a":true,"h":"Enrolment Type","n":"enrolment_type","r":true,"sh":"Enrolment type of the policy","t":"`$ANY`","key$":"enrolment_type","index$":6},"estimated_gross_premium":{"a":true,"h":"Estimated Gross Premium","n":"estimated_gross_premium","r":true,"sh":"Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration.","t":"`$ANY`","key$":"estimated_gross_premium","index$":7},"external_customer_id":{"a":true,"h":"External Customer Id","n":"external_customer_id","r":false,"sh":"A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"external_customer_id","index$":8},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for policy","t":"`$STRING`","key$":"id","index$":9},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":10},"opt_out_deadline_date":{"a":true,"fo":"date","h":"Opt Out Deadline Date","n":"opt_out_deadline_date","r":true,"sh":"Last day to opt out from the policy","t":"`$STRING`","key$":"opt_out_deadline_date","index$":11},"policy_number":{"a":true,"h":"Policy Number","n":"policy_number","r":false,"sh":"Health insurance policy number, if available","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"policy_number","index$":12},"renewal":{"a":true,"h":"Renewal","n":"renewal","r":true,"sh":"Renewal information for the policy","t":"`$ANY`","key$":"renewal","index$":13},"start_date":{"a":true,"fo":"date","h":"Start Date","n":"start_date","r":true,"sh":"Policy starts on this date","t":"`$STRING`","key$":"start_date","index$":14},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of policy","t":"`$ANY`","key$":"status","index$":15}},"id":{"field":"id","name":"id"},"name":"employee_health_insurance_policy","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /employees/{employee_id}/health_insurance/policies/{employee_policy_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employee_id","or":"employee_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"employee_policy_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/employees/{employee_id}/health_insurance/policies/{employee_policy_id}","q":{"exist":["employee_id","id","x_platform_id"]},"r":{"param":{"employee_policy_id":"id"}},"s":[{"lit":"employees"},{"var":"employee_id"},{"lit":"health_insurance"},{"lit":"policies"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.employee"]]},"key$":"employee_health_insurance_policy","name__orig":"employee_health_insurance_policy","Name":"EmployeeHealthInsurancePolicy","name_":"employee_health_insurance_policy","name-":"employee-health-insurance-policy","NAME":"EMPLOYEE_HEALTH_INSURANCE_POLICY","index$":13}, {"active":true,"entity":"employee_health_insurance_policy","key$":"BasicEmployeeHealthInsurancePolicyFlow","kind":"basic","name":"BasicEmployeeHealthInsurancePolicyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"employee_health_insurance_policy_ref01","srcdatavar":"employee_health_insurance_policy_ref01_data","suffix":"_dt0"},"m":{"employee_id":"employee01","id":"employee_health_insurance_policy01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-employee_health_insurance_policy_ref01"}}],"index$":0}]}, 'EmployeeHealthInsurancePolicy', {"GET /employees/{employee_id}/health_insurance/policies/{employee_policy_id}":{"protocol":"http","parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"employee_policy_id","in":"path","required":true,"schema":{"pattern":"eehp_.+","type":"string","example":"eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let employee_health_insurance_policy_ref01_data = Object.values(setup.data.existing.employee_health_insurance_policy)[0]

    // LOAD
    const employee_health_insurance_policy_ref01_ent = client.EmployeeHealthInsurancePolicy()
    const employee_health_insurance_policy_ref01_match_dt0 = {}
    employee_health_insurance_policy_ref01_match_dt0.id = employee_health_insurance_policy_ref01_data.id
    const employee_health_insurance_policy_ref01_data_dt0 = (await employee_health_insurance_policy_ref01_ent.load(employee_health_insurance_policy_ref01_match_dt0)).data()
    assert(employee_health_insurance_policy_ref01_data_dt0.id === employee_health_insurance_policy_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/employee_health_insurance_policy/EmployeeHealthInsurancePolicyTestData.json')

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
    ['employee_health_insurance_policy01','employee_health_insurance_policy02','employee_health_insurance_policy03','employee01','employee02','employee03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_POLICY_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_POLICY_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_POLICY_ENTID']
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
  
