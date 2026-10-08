
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


describe('SalaryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.Salary()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Salary().list({"employee_id":1}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amount":{"a":true,"fo":"double","h":"Amount","n":"amount","r":true,"sh":"Salary amount, in the given currency and pay frequency","t":"`$NUMBER`","key$":"amount","index$":0},"currency":{"a":true,"h":"Currency","n":"currency","r":true,"sh":"ISO currency code the amount is denominated in","t":"`$STRING`","key$":"currency","index$":1},"effective_from":{"a":true,"fo":"date","h":"Effective From","n":"effective_from","r":true,"sh":"Date from which this salary is effective","t":"`$STRING`","key$":"effective_from","index$":2},"employee_id":{"a":true,"h":"Employee Id","n":"employee_id","r":true,"sh":"Unique identifier for the employee this salary belongs to","t":"`$STRING`","key$":"employee_id","index$":3},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the salary record","t":"`$STRING`","key$":"id","index$":4},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":5},"pay_frequency":{"a":true,"h":"Pay Frequency","n":"pay_frequency","r":true,"sh":"The period this amount represents (e.g.","t":"`$STRING`","key$":"pay_frequency","index$":6}},"id":{"field":"id","name":"id"},"name":"salary","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["amount","currency","effective_from","pay_frequency"],"co":{"id":"POST /employees/{employee_id}/salaries","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"Idempotency-Key","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employee_id","or":"employee_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/employees/{employee_id}/salaries","q":{"exist":["employee_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employees"},{"var":"employee_id"},{"lit":"salaries"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /employees/{employee_id}/salaries","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employee_id","or":"employee_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/employees/{employee_id}/salaries","q":{"exist":["employee_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employees"},{"var":"employee_id"},{"lit":"salaries"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /employees/{employee_id}/salaries/{salary_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employee_id","or":"employee_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"sal_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"salary_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/employees/{employee_id}/salaries/{salary_id}","q":{"exist":["employee_id","id"]},"r":{"param":{"salary_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employees"},{"var":"employee_id"},{"lit":"salaries"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /employees/{employee_id}/salaries/current","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employee_id","or":"employee_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/employees/{employee_id}/salaries/current","q":{"$action":"current","exist":["employee_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employees"},{"var":"employee_id"},{"lit":"salaries"},{"lit":"current"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /employees/{employee_id}/salaries/{salary_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"employee_id","or":"employee_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"sal_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"salary_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/employees/{employee_id}/salaries/{salary_id}","q":{"exist":["employee_id","id"]},"r":{"param":{"salary_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"employees"},{"var":"employee_id"},{"lit":"salaries"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.employee"]]},"key$":"salary","name__orig":"salary","Name":"Salary","name_":"salary","name-":"salary","NAME":"SALARY","index$":37}, {"active":true,"entity":"salary","key$":"BasicSalaryFlow","kind":"basic","name":"BasicSalaryFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"salary_ref01"},"m":{"employee_id":"employee01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"employee_id":"employee01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"salary_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"salary_ref01","srcdatavar":"salary_ref01_data","suffix":"_dt0"},"m":{"id":"salary01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-salary_ref01"}}],"index$":2},{"a":true,"d":{},"i":{"ref":"salary_ref01","suffix":"_rm0"},"m":{"employee_id":"employee01","id":"salary01"},"o":"remove","s":[],"v":[],"index$":3},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"employee_id":"employee01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"salary_ref01"}}],"index$":4}]}, 'Salary', {"POST /employees/{employee_id}/salaries":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["amount","currency","effective_from","pay_frequency"],"type":"object","properties":{"amount":{"type":"number","description":"Salary amount, in the given currency and pay frequency. Must be greater than 0.","format":"double","example":123.45,"key$":"amount"},"currency":{"allOf":[{}],"description":"ISO currency code the amount is denominated in","key$":"currency"},"pay_frequency":{"allOf":[{}],"description":"The period this amount represents (e.g. annual, monthly)","key$":"pay_frequency"},"effective_from":{"type":"string","description":"Date from which this salary is effective","format":"date","example":"2024-12-01","key$":"effective_from"}},"additionalProperties":false,"x-ref":"#/components/schemas/CreateSalaryRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"Idempotency-Key","in":"header","description":"Unique key to ensure idempotent requests. If the same key is used for multiple _identical & successful_ requests, the same response will be returned. [Read more here](/api#idempotent-requests)","schema":{"type":"string"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]},"GET /employees/{employee_id}/salaries":{"protocol":"http","parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":1},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":2},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":3}]},"GET /employees/{employee_id}/salaries/{salary_id}":{"protocol":"http","parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"salary_id","in":"path","required":true,"schema":{"pattern":"sal_.+","type":"string","example":"sal_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]},"GET /employees/{employee_id}/salaries/current":{"protocol":"http","parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"DELETE /employees/{employee_id}/salaries/{salary_id}":{"protocol":"http","parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"salary_id","in":"path","required":true,"schema":{"pattern":"sal_.+","type":"string","example":"sal_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const salary_ref01_ent = client.Salary()
    let salary_ref01_data = setup.data.new.salary['salary_ref01']
    salary_ref01_data['employee_id'] = setup.idmap['employee01']

    salary_ref01_data = (await salary_ref01_ent.create(salary_ref01_data)).data()
    assert(null != salary_ref01_data.id)


    // LIST
    const salary_ref01_match = {}
    salary_ref01_match['employee_id'] = setup.idmap['employee01']

    const salary_ref01_list = (await salary_ref01_ent.list(salary_ref01_match)).map((e) => e.data())

    assert(!isempty(select(salary_ref01_list, { id: salary_ref01_data.id })))


    // LOAD
    const salary_ref01_match_dt0 = {}
    salary_ref01_match_dt0.id = salary_ref01_data.id
    const salary_ref01_data_dt0 = (await salary_ref01_ent.load(salary_ref01_match_dt0)).data()
    assert(salary_ref01_data_dt0.id === salary_ref01_data.id)


    // REMOVE
    const salary_ref01_match_rm0 = {}
    salary_ref01_match_rm0.id = salary_ref01_data.id
    await salary_ref01_ent.remove(salary_ref01_match_rm0)
  

    // LIST
    const salary_ref01_match_rt0 = {}
    salary_ref01_match_rt0['employee_id'] = setup.idmap['employee01']

    const salary_ref01_list_rt0 = (await salary_ref01_ent.list(salary_ref01_match_rt0)).map((e) => e.data())

    assert(isempty(select(salary_ref01_list_rt0, { id: salary_ref01_data.id })))


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
      '../../../../.sdk/test/entity/salary/SalaryTestData.json')

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
    ['salary01','salary02','salary03','employee01','employee02','employee03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_SALARY_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_SALARY_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_SALARY_ENTID']
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
  
