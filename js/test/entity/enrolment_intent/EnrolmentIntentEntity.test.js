
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


describe('EnrolmentIntentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.EnrolmentIntent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"action_required":{"a":true,"h":"Action Required","n":"action_required","r":false,"sh":"If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment.","t":"`$NULL`","key$":"action_required","index$":0},"disclosures":{"a":true,"h":"Disclosures","n":"disclosures","r":true,"sh":"Disclosures associated with this intent.","t":"`$ARRAY`","key$":"disclosures","index$":1},"employee_id":{"a":true,"h":"Employee Id","n":"employee_id","r":true,"sh":"Identifier for the employee associated with this enrolment intent.","t":"`$STRING`","key$":"employee_id","index$":2},"force_confirmation":{"a":true,"h":"Force Confirmation","n":"force_confirmation","r":true,"sh":"If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required.","t":"`$BOOLEAN`","key$":"force_confirmation","index$":3},"group_id":{"a":true,"h":"Group Id","n":"group_id","r":true,"sh":"Identifier for the group associated with this enrolment intent.","t":"`$STRING`","key$":"group_id","index$":4},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the enrolment intent.","t":"`$STRING`","key$":"id","index$":5},"ineligibility_reason":{"a":true,"h":"Ineligibility Reason","n":"ineligibility_reason","r":false,"sh":"If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility.","t":"`$NULL`","key$":"ineligibility_reason","index$":6},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"Object type identifier.","t":"`$STRING`","key$":"object","index$":7},"pending_confirmation":{"a":true,"h":"Pending Confirmation","n":"pending_confirmation","r":false,"sh":"If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state.","t":"`$NULL`","key$":"pending_confirmation","index$":8},"policy_configuration":{"a":true,"h":"Policy Configuration","n":"policy_configuration","r":false,"sh":"Policy configuration associated with this enrolment intent.","t":"`$NULL`","key$":"policy_configuration","index$":9},"policy_enrolments":{"a":true,"h":"Policy Enrolments","n":"policy_enrolments","r":true,"sh":"Policy enrolment information","t":"`$ARRAY`","key$":"policy_enrolments","index$":10},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of the enrolment intent.","t":"`$ANY`","key$":"status","index$":11}},"id":{"field":"id","name":"id"},"name":"enrolment_intent","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /enrolment_intents/{enrolment_intent_id}/confirm","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"enrolment_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/enrolment_intents/{enrolment_intent_id}/confirm","q":{"$action":"confirm","exist":["id","x_platform_id"]},"r":{"param":{"enrolment_intent_id":"id"}},"s":[{"lit":"enrolment_intents"},{"var":"id"},{"lit":"confirm"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /enrolment_intents/{enrolment_intent_id}/coverage-selections","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"enrolment_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/enrolment_intents/{enrolment_intent_id}/coverage-selections","q":{"$action":"coverage_selection","exist":["id","x_platform_id"]},"r":{"param":{"enrolment_intent_id":"id"}},"s":[{"lit":"enrolment_intents"},{"var":"id"},{"lit":"coverage-selections"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /enrolment_intents/{enrolment_intent_id}/reject","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"enrolment_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/enrolment_intents/{enrolment_intent_id}/reject","q":{"$action":"reject","exist":["id","x_platform_id"]},"r":{"param":{"enrolment_intent_id":"id"}},"s":[{"lit":"enrolment_intents"},{"var":"id"},{"lit":"reject"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /enrolment_intents","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"idempotency_key","or":"idempotency_key","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/enrolment_intents","q":{"exist":["idempotency_key","x_platform_id"]},"r":{},"s":[{"lit":"enrolment_intents"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /enrolment_intents","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"employee_id","or":"employee_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"group_id","or":"group_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/enrolment_intents","q":{"exist":["employee_id","group_id","page","page_size","status","x_platform_id"]},"r":{},"s":[{"lit":"enrolment_intents"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /enrolment_intents/{enrolment_intent_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"enrolment_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/enrolment_intents/{enrolment_intent_id}","q":{"exist":["id","x_platform_id"]},"r":{"param":{"enrolment_intent_id":"id"}},"s":[{"lit":"enrolment_intents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /enrolment_intents/{enrolment_intent_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"enrolment_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/enrolment_intents/{enrolment_intent_id}","q":{"exist":["id","x_platform_id"]},"r":{"param":{"enrolment_intent_id":"id"}},"s":[{"lit":"enrolment_intents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"enrolment_intent","name__orig":"enrolment_intent","Name":"EnrolmentIntent","name_":"enrolment_intent","name-":"enrolment-intent","NAME":"ENROLMENT_INTENT","index$":20}, {"active":true,"entity":"enrolment_intent","key$":"BasicEnrolmentIntentFlow","kind":"basic","name":"BasicEnrolmentIntentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"enrolment_intent_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"enrolment_intent_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"enrolment_intent_ref01","srcdatavar":"enrolment_intent_ref01_data","suffix":"_up0","textfield":"employee_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-enrolment_intent_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"enrolment_intent_ref01","srcdatavar":"enrolment_intent_ref01_data","suffix":"_dt0"},"m":{"id":"enrolment_intent01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-enrolment_intent_ref01"}}],"index$":3}]}, 'EnrolmentIntent', {"POST /enrolment_intents/{enrolment_intent_id}/confirm":{"protocol":"http","parameters":[{"name":"enrolment_intent_id","in":"path","required":true,"schema":{"pattern":"ei_.+","type":"string","example":"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"POST /enrolment_intents/{enrolment_intent_id}/coverage-selections":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["coverage_selections"],"type":"object","properties":{"coverage_selections":{"type":"array","items":{"required":[],"type":"object","properties":{},"additionalProperties":false,"x-ref":"#/components/schemas/PlanCoverageOptionSelectionRequest"},"description":"Coverage option selections for policy-scoped configurations."}},"additionalProperties":false,"x-ref":"#/components/schemas/SubmitCoverageSelectionsRequest"}]}}},"required":true},"parameters":[{"name":"enrolment_intent_id","in":"path","required":true,"schema":{"pattern":"ei_.+","type":"string","example":"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"POST /enrolment_intents/{enrolment_intent_id}/reject":{"protocol":"http","parameters":[{"name":"enrolment_intent_id","in":"path","required":true,"schema":{"pattern":"ei_.+","type":"string","example":"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"POST /enrolment_intents":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["employee_id","force_confirmation","group_id"],"type":"object","properties":{"employee_id":{"pattern":"ee_.+","type":"string","description":"Identifier for the employee associated with this enrolment intent. Prefixed with `ee_`.","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"group_id":{"pattern":"gr_.+","type":"string","description":"Identifier for the group associated with this enrolment intent. Prefixed with `gr_`.","example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"policy_configuration":{"type":"null","allOf":[{}],"description":"Policy configuration associated with this enrolment intent. You do not have to explicitly provide this field if you want to use the default policy configuration for the group. This simply lets you override specific settings for this enrolment intent."},"force_confirmation":{"type":"boolean","description":"If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. This can be useful in scenarios where you want to ensure that the employee explicitly confirms their enrolment, regardless of their eligibility or any other factors. Defaults to false.","example":true},"coverage_selections":{"type":["null","array"],"items":{"required":[],"type":"object","properties":{},"additionalProperties":false,"x-ref":"#/components/schemas/PlanCoverageOptionSelectionRequest"},"description":"Optional plan coverage option selections for policy-scoped configurations. If provided and valid, the coverage_options_required step will be skipped."}},"additionalProperties":false,"x-ref":"#/components/schemas/CreateEnrolmentIntentRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"Idempotency-Key","in":"header","description":"Unique key to ensure idempotent requests. If the same key is used for multiple _identical & successful_ requests, the same response will be returned. [Read more here](/api#idempotent-requests)","schema":{"type":"string"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"GET /enrolment_intents":{"protocol":"http","parameters":[{"name":"employee_id","in":"query","description":"Filters enrolment intents by employee.","schema":{"pattern":"ee_.+","type":"string","description":"Filters enrolment intents by employee.","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"group_id","in":"query","description":"Filters enrolment intents  by group.","schema":{"pattern":"gr_.+","type":"string","description":"Filters enrolment intents  by group.","example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"status","in":"query","description":"Multiple values can be provided by separating them with a comma. Allowed values are: `processing`, `scheduled`, `action_required`, `coverage_options_required`, `pending_confirmation`, `enrolling`, `enrolled`, `not_undertaken`, `ineligible`.","schema":{"type":"string"},"index$":2},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":3},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":4},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":5}]},"GET /enrolment_intents/{enrolment_intent_id}":{"protocol":"http","parameters":[{"name":"enrolment_intent_id","in":"path","required":true,"schema":{"pattern":"ei_.+","type":"string","example":"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"PUT /enrolment_intents/{enrolment_intent_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"type":"object","properties":{"desired_policy_start_date":{"type":["null","string"],"description":"The desired date for the employee's policy to start. This date is not guaranteed to be honored by the insurance provider and may be adjusted based on provider-specific rules and requirements. If unspecified, the policy start date will be determined by the insurance provider.","format":"date","example":"2024-12-01"},"enrolment_date":{"type":["null","string"],"description":"The date on which the employee agreed to enrol into the group's policies. This date may be used by some insurance providers to determine the policy start date. If unspecified, the enrolment date will default to the date the enrolment intent is processed.","format":"date","example":"2024-12-01"}},"additionalProperties":false,"x-ref":"#/components/schemas/PolicyConfigurationRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"enrolment_intent_id","in":"path","required":true,"schema":{"pattern":"ei_.+","type":"string","example":"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const enrolment_intent_ref01_ent = client.EnrolmentIntent()
    let enrolment_intent_ref01_data = setup.data.new.enrolment_intent['enrolment_intent_ref01']

    enrolment_intent_ref01_data = (await enrolment_intent_ref01_ent.create(enrolment_intent_ref01_data)).data()
    assert(null != enrolment_intent_ref01_data.id)


    // LIST
    const enrolment_intent_ref01_match = {}

    const enrolment_intent_ref01_list = (await enrolment_intent_ref01_ent.list(enrolment_intent_ref01_match)).map((e) => e.data())

    assert(!isempty(select(enrolment_intent_ref01_list, { id: enrolment_intent_ref01_data.id })))


    // UPDATE
    const enrolment_intent_ref01_data_up0 = {}
    enrolment_intent_ref01_data_up0.id = enrolment_intent_ref01_data.id

    const enrolment_intent_ref01_markdef_up0 = { name: 'employee_id', value: 'Mark01-enrolment_intent_ref01_' + setup.now }
    enrolment_intent_ref01_data_up0 [enrolment_intent_ref01_markdef_up0.name] = enrolment_intent_ref01_markdef_up0.value

    const enrolment_intent_ref01_resdata_up0 = (await enrolment_intent_ref01_ent.update(enrolment_intent_ref01_data_up0)).data()
    assert(enrolment_intent_ref01_resdata_up0.id === enrolment_intent_ref01_data_up0.id)

    assert(enrolment_intent_ref01_resdata_up0[enrolment_intent_ref01_markdef_up0.name] === enrolment_intent_ref01_markdef_up0.value)


    // LOAD
    const enrolment_intent_ref01_match_dt0 = {}
    enrolment_intent_ref01_match_dt0.id = enrolment_intent_ref01_data.id
    const enrolment_intent_ref01_data_dt0 = (await enrolment_intent_ref01_ent.load(enrolment_intent_ref01_match_dt0)).data()
    assert(enrolment_intent_ref01_data_dt0.id === enrolment_intent_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/enrolment_intent/EnrolmentIntentTestData.json')

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
    ['enrolment_intent01','enrolment_intent02','enrolment_intent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_ENROLMENT_INTENT_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_ENROLMENT_INTENT_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_ENROLMENT_INTENT_ENTID']
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
  
