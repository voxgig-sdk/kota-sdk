
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


describe('EmployeeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.Employee()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"bank_account":{"a":true,"h":"Bank Account","n":"bank_account","r":false,"sh":"Bank account details","t":"`$NULL`","key$":"bank_account","index$":0},"date_of_birth":{"a":true,"fo":"date","h":"Date Of Birth","n":"date_of_birth","r":true,"sh":"Date of birth of the employee","t":"`$STRING`","key$":"date_of_birth","index$":1},"earliest_benefits_start_date":{"a":true,"fo":"date","h":"Earliest Benefits Start Date","n":"earliest_benefits_start_date","r":false,"sh":"The earliest date this employee can be enrolled in any benefits.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"earliest_benefits_start_date","index$":2},"email":{"a":true,"h":"Email","n":"email","r":true,"sh":"Email address of the employee","t":"`$STRING`","key$":"email","index$":3},"employer_id":{"a":true,"h":"Employer Id","n":"employer_id","r":false,"sh":"Unique identifier for the employer","t":"`$STRING`","key$":"employer_id","index$":4},"external_customer_id":{"a":true,"h":"External Customer Id","n":"external_customer_id","r":false,"sh":"A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"external_customer_id","index$":5},"first_name":{"a":true,"h":"First Name","n":"first_name","r":true,"sh":"First name of the employee.","t":"`$STRING`","key$":"first_name","index$":6},"home_address":{"a":true,"h":"Home Address","n":"home_address","r":false,"sh":"Location where the employee is legally registered to live","t":"`$NULL`","key$":"home_address","index$":7},"id":{"a":true,"h":"Id","n":"id","r":false,"sh":"Unique identifier for the employee","t":"`$STRING`","key$":"id","index$":8},"last_name":{"a":true,"h":"Last Name","n":"last_name","r":true,"sh":"Last name of the employee","t":"`$STRING`","key$":"last_name","index$":9},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"sh":"Set of key-value pairs that you can attach to an object.","t":["`$ONE`",["`$NULL`","`$OBJECT`"]],"key$":"metadata","index$":10},"national_tax_id":{"a":true,"h":"National Tax Id","n":"national_tax_id","r":true,"sh":"PPSN in Ireland, NINo in the UK, DNI/NIE in Spain","t":"`$STRING`","key$":"national_tax_id","index$":11},"nationality":{"a":true,"h":"Nationality","n":"nationality","r":false,"sh":"Nationality of the employee (e.g.","t":"`$NULL`","key$":"nationality","index$":12},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":13},"offboard_on":{"a":true,"fo":"date-time","h":"Offboard On","n":"offboard_on","r":false,"sh":"Date when the employee was or will be offboarded","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"offboard_on","index$":14},"phone_number":{"a":true,"h":"Phone Number","n":"phone_number","r":true,"sh":"Phone number in E.164 international format (e.g.","t":"`$STRING`","key$":"phone_number","index$":15},"platform_id":{"a":true,"h":"Platform Id","n":"platform_id","r":false,"sh":"Unique identifier for the platform","t":"`$STRING`","key$":"platform_id","index$":16},"sex_at_birth":{"a":true,"h":"Sex At Birth","n":"sex_at_birth","r":true,"sh":"The sex assigned to the employee at birth","t":"`$ANY`","key$":"sex_at_birth","index$":17},"start_on":{"a":true,"fo":"date","h":"Start On","n":"start_on","r":false,"sh":"Employment start date","t":"`$STRING`","key$":"start_on","index$":18},"status":{"a":true,"h":"Status","n":"status","r":false,"sh":"Current status of the employee","t":"`$ANY`","key$":"status","index$":19}},"id":{"field":"id","name":"id"},"name":"employee","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /employees/{employee_id}/offboard","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"employee_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/employees/{employee_id}/offboard","q":{"$action":"offboard","exist":["id","idempotency_key","x_platform_id"]},"r":{"param":{"employee_id":"id"}},"s":[{"lit":"employees"},{"var":"id"},{"lit":"offboard"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /employees/{employee_id}/offboard/cancel","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":1}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"employee_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/employees/{employee_id}/offboard/cancel","q":{"$action":"offboard_cancel","exist":["id","idempotency_key","x_platform_id"]},"r":{"param":{"employee_id":"id"}},"s":[{"lit":"employees"},{"var":"id"},{"lit":"offboard"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /employees","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/employees","q":{"exist":["idempotency_key","x_platform_id"]},"r":{},"s":[{"lit":"employees"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /employees","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"employer_id","or":"employer_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"external_customer_id","or":"external_customer_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"filter","or":"filter","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"metadata_id","or":"metadata_id","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":5}]},"k":"http","m":"GET","o":"/employees","q":{"exist":["employer_id","external_customer_id","filter","metadata_id","page","page_size","x_platform_id"]},"r":{},"s":[{"lit":"employees"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /employees/{employee_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"employee_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/employees/{employee_id}","q":{"exist":["id","x_platform_id"]},"r":{"param":{"employee_id":"id"}},"s":[{"lit":"employees"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /employees/{employee_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"employee_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/employees/{employee_id}","q":{"exist":["id","x_platform_id"]},"r":{"param":{"employee_id":"id"}},"s":[{"lit":"employees"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"employee","name__orig":"employee","Name":"Employee","name_":"employee","name-":"employee","NAME":"EMPLOYEE","index$":10}, {"active":true,"entity":"employee","key$":"BasicEmployeeFlow","kind":"basic","name":"BasicEmployeeFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"employee_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"employee_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"employee_ref01","srcdatavar":"employee_ref01_data","suffix":"_up0","textfield":"date_of_birth"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-employee_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"employee_ref01","srcdatavar":"employee_ref01_data","suffix":"_dt0"},"m":{"id":"employee01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-employee_ref01"}}],"index$":3}]}, 'Employee', {"POST /employees/{employee_id}/offboard":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["offboard_on","offboard_reason"],"type":"object","properties":{"offboard_on":{"type":"string","description":"The date when the employee should be offboarded. Can be a future date, today, or up to 30 days in the past if the employee has active insurance policies. Past dates beyond 30 days are allowed only if there are no active policies.","format":"date-time","example":"2024-12-01T00:00:00Z"},"offboard_reason":{"type":"string"}},"additionalProperties":false,"x-ref":"#/components/schemas/OffboardEmployeeRequest"}]}}},"required":true},"parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"Idempotency-Key","in":"header","description":"Unique key to ensure idempotent requests. If the same key is used for multiple _identical & successful_ requests, the same response will be returned. [Read more here](/api#idempotent-requests)","schema":{"type":"string"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]},"POST /employees/{employee_id}/offboard/cancel":{"protocol":"http","parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"Idempotency-Key","in":"header","description":"Unique key to ensure idempotent requests. If the same key is used for multiple _identical & successful_ requests, the same response will be returned. [Read more here](/api#idempotent-requests)","schema":{"type":"string"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]},"POST /employees":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["date_of_birth","email","employer_id","first_name","home_address","last_name","national_tax_id","phone_number","sex_at_birth","start_on"],"type":"object","properties":{"employer_id":{"pattern":"er_.+","type":"string","example":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"external_customer_id":{"type":["null","string"],"description":"A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. the company using the EoR service) for which the employee is employed. This ID groups employees under this Customer, enabling the aggregation of contribution reporting and other values per Customer rather than per legal entity. This parameter is only required for EoR platforms."},"first_name":{"type":"string","description":"It can include the middle name. Must not be empty. NOTE: This field will be normalized according to our internal formatting rules."},"last_name":{"type":"string","description":"Must not be empty. NOTE: This field will be normalized according to our internal formatting rules."},"date_of_birth":{"type":"string","description":"Must be in the past, but after 1900-01-01","format":"date","example":"2024-12-01"},"sex_at_birth":{"allOf":[{}],"description":"The sex assigned to the employee at birth"},"home_address":{"allOf":[{}],"description":"Location where the employee is legally registered to live"},"nationality":{"type":"null","allOf":[{}]},"national_tax_id":{"type":"string","description":"PPSN in Ireland, NINo in the UK, DNI/NIE in Spain. Must not be empty. NOTE: This field will be normalized according to our internal formatting rules."},"start_on":{"type":"string","description":"Employment start date. Must be after 1900-01-01, can be in the future","format":"date","example":"2024-12-01"},"earliest_benefits_start_date":{"type":["null","string"],"description":"The earliest date this employee can be enrolled in any benefits. Before this date, the employee remains in a Pending state and is excluded from benefit activation.\n\n**Constraints:**\n\n- Must be a valid date.\n\n- Ignored for statutory schemes where immediate coverage is legally required. Example: Local Netherlands and UAE schemes.","format":"date","example":"2024-12-01"},"phone_number":{"type":"string","description":"Phone number in E.164 international format (e.g. +447700900999). NOTE: This field will be normalized according to our internal formatting rules."},"email":{"type":"string","description":"Must not be empty. NOTE: This field will be normalized according to our internal formatting rules."},"bank_account":{"type":"null","allOf":[{}],"description":"Bank account details"},"metadata":{"type":["null","object"],"additionalProperties":{"type":"string"},"description":"Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Maximum 25 keys. Individual keys can be up to 40 characters and values up to 500 characters."}},"additionalProperties":false,"x-ref":"#/components/schemas/CreateEmployeeRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"Idempotency-Key","in":"header","description":"Unique key to ensure idempotent requests. If the same key is used for multiple _identical & successful_ requests, the same response will be returned. [Read more here](/api#idempotent-requests)","schema":{"type":"string"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"GET /employees":{"protocol":"http","parameters":[{"name":"filter","in":"query","description":"Multiple values can be provided by separating them with a comma. Allowed values are: `pending`, `active`, `offboarding`, `inactive`, `restricted`.","schema":{"type":"string"},"index$":0},{"name":"employer_id","in":"query","description":"Filter by employer ID.","schema":{"pattern":"er_.+","type":"string","example":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"external_customer_id","in":"query","schema":{"type":"string"},"index$":2},{"name":"metadata_id","in":"query","description":"Filter by the employee's metadata \"id\" value (case-insensitive, accent-insensitive, partial match)","schema":{"type":"string"},"index$":3},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":4},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":5},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":6}]},"GET /employees/{employee_id}":{"protocol":"http","parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"PUT /employees/{employee_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"type":"object","properties":{"first_name":{"type":["null","string"]},"last_name":{"type":["null","string"]},"home_address":{"type":"null","allOf":[{}],"description":"Treated as a single object that is updated entirely, `null` sub-fields (e.g. Line 3) will delete the existing values"},"nationality":{"type":"null","allOf":[{}]},"national_tax_id":{"type":["null","string"],"description":"National tax ID, e.g. PPSN in Ireland, NINO in the UK, DNI/NIE in Spain"},"phone_number":{"type":["null","string"],"description":"Phone number in E.164 international format (e.g. +447700900999)"},"email":{"type":["null","string"]},"start_on":{"type":["null","string"],"description":"The start date of the employee.\n\n**Constraints:**\n\n- On update, may only be changed if no policy or offer exists for this employee.\n- Must be a valid date.\n- The employee's existing start_on and the new start_on date must both be in the future.","format":"date","example":"2024-12-01"},"earliest_benefits_start_date":{"type":["null","string"],"description":"The earliest date this employee can be enrolled in any benefits. Before this date, the employee remains in a Pending state and is excluded from benefit activation.\n\n**Constraints:**\n\n- On update, may only be changed if no policy or offer exists for this employee.\n- Must be a valid date.\n- Ignored for statutory schemes where immediate coverage is legally required. Example: Local Netherlands and UAE schemes.","format":"date","example":"2024-12-01"},"bank_account":{"type":"null","allOf":[{}],"description":"Treated as a single object that is updated entirely."},"metadata":{"type":["null","object"],"additionalProperties":{"type":"string"},"description":"Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Maximum 25 keys. Individual keys can be up to 40 characters and values up to 500 characters. Treated as a single object that is updated entirely."}},"additionalProperties":false,"x-ref":"#/components/schemas/UpdateEmployeeRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"employee_id","in":"path","required":true,"schema":{"pattern":"ee_.+","type":"string","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const employee_ref01_ent = client.Employee()
    let employee_ref01_data = setup.data.new.employee['employee_ref01']

    employee_ref01_data = (await employee_ref01_ent.create(employee_ref01_data)).data()
    assert(null != employee_ref01_data.id)


    // LIST
    const employee_ref01_match = {}

    const employee_ref01_list = (await employee_ref01_ent.list(employee_ref01_match)).map((e) => e.data())

    assert(!isempty(select(employee_ref01_list, { id: employee_ref01_data.id })))


    // UPDATE
    const employee_ref01_data_up0 = {}
    employee_ref01_data_up0.id = employee_ref01_data.id

    const employee_ref01_markdef_up0 = { name: 'date_of_birth', value: 'Mark01-employee_ref01_' + setup.now }
    employee_ref01_data_up0 [employee_ref01_markdef_up0.name] = employee_ref01_markdef_up0.value

    const employee_ref01_resdata_up0 = (await employee_ref01_ent.update(employee_ref01_data_up0)).data()
    assert(employee_ref01_resdata_up0.id === employee_ref01_data_up0.id)

    assert(employee_ref01_resdata_up0[employee_ref01_markdef_up0.name] === employee_ref01_markdef_up0.value)


    // LOAD
    const employee_ref01_match_dt0 = {}
    employee_ref01_match_dt0.id = employee_ref01_data.id
    const employee_ref01_data_dt0 = (await employee_ref01_ent.load(employee_ref01_match_dt0)).data()
    assert(employee_ref01_data_dt0.id === employee_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/employee/EmployeeTestData.json')

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
    ['employee01','employee02','employee03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_EMPLOYEE_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_EMPLOYEE_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_EMPLOYEE_ENTID']
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
  
