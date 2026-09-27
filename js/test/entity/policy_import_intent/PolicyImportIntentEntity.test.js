
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


describe('PolicyImportIntentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.PolicyImportIntent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"associated_persons":{"a":true,"h":"Associated Persons","n":"associated_persons","r":true,"sh":"List of associated persons linked to this policy import.","t":"`$ARRAY`","key$":"associated_persons","index$":0},"employee_id":{"a":true,"h":"Employee Id","n":"employee_id","r":true,"sh":"The employee ID for the policy import.","t":"`$STRING`","key$":"employee_id","index$":1},"group_id":{"a":true,"h":"Group Id","n":"group_id","r":true,"sh":"The group ID for the policy import.","t":"`$STRING`","key$":"group_id","index$":2},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the policy import intent.","t":"`$STRING`","key$":"id","index$":3},"member_number":{"a":true,"h":"Member Number","n":"member_number","r":true,"sh":"The member number assigned by the provider.","t":"`$STRING`","key$":"member_number","index$":4},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"Object type identifier.","t":"`$STRING`","key$":"object","index$":5},"policy_end_date":{"a":true,"fo":"date","h":"Policy End Date","n":"policy_end_date","r":false,"sh":"The end date of the policy.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"policy_end_date","index$":6},"policy_start_date":{"a":true,"fo":"date","h":"Policy Start Date","n":"policy_start_date","r":true,"sh":"The start date of the policy.","t":"`$STRING`","key$":"policy_start_date","index$":7},"provider_policy_number":{"a":true,"h":"Provider Policy Number","n":"provider_policy_number","r":true,"sh":"The provider's policy number.","t":"`$STRING`","key$":"provider_policy_number","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of the policy import intent.","t":"`$ANY`","key$":"status","index$":9}},"id":{"field":"id","name":"id"},"name":"policy_import_intent","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /policy_import_intents","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/policy_import_intents","q":{"exist":["x_platform_id"]},"r":{},"s":[{"lit":"policy_import_intents"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /policy_import_intents","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"employee_id","or":"employee_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"group_id","or":"group_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/policy_import_intents","q":{"exist":["employee_id","group_id","page","page_size","status","x_platform_id"]},"r":{},"s":[{"lit":"policy_import_intents"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /policy_import_intents/{policy_import_intent_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"pii_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"policy_import_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/policy_import_intents/{policy_import_intent_id}","q":{"exist":["id","x_platform_id"]},"r":{"param":{"policy_import_intent_id":"id"}},"s":[{"lit":"policy_import_intents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"policy_import_intent","name__orig":"policy_import_intent","Name":"PolicyImportIntent","name_":"policy_import_intent","name-":"policy-import-intent","NAME":"POLICY_IMPORT_INTENT","index$":35}, {"active":true,"entity":"policy_import_intent","key$":"BasicPolicyImportIntentFlow","kind":"basic","name":"BasicPolicyImportIntentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"policy_import_intent_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"policy_import_intent_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"policy_import_intent_ref01","srcdatavar":"policy_import_intent_ref01_data","suffix":"_dt0"},"m":{"id":"policy_import_intent01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-policy_import_intent_ref01"}}],"index$":2}]}, 'PolicyImportIntent', {"POST /policy_import_intents":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["employee_id","group_id","member_number","policy_start_date","provider_policy_number"],"type":"object","properties":{"employee_id":{"pattern":"ee_.+","type":"string","description":"The employee ID for the policy import. Prefixed with `ee_`.","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"group_id":{"pattern":"gr_.+","type":"string","description":"The group ID for the policy import. Prefixed with `g_`.","example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"provider_policy_number":{"type":"string","description":"The provider's policy number."},"member_number":{"type":"string","description":"The member number assigned by the provider."},"policy_start_date":{"type":"string","description":"The start date of the policy.","format":"date","example":"2024-12-01"},"policy_end_date":{"type":["null","string"],"description":"The end date of the policy. Leave null if the policy has no end date.","format":"date","example":"2024-12-01"},"associated_persons":{"type":["null","array"],"items":{"required":[],"type":"object","properties":{},"additionalProperties":false,"x-ref":"#/components/schemas/CreatePolicyImportIntentAssociatedPersonRequest"},"description":"List of associated persons to be linked to this policy import."}},"additionalProperties":false,"x-ref":"#/components/schemas/CreatePolicyImportIntentRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":0}]},"GET /policy_import_intents":{"protocol":"http","parameters":[{"name":"employee_id","in":"query","description":"Filters policy import intents by employee ID. Prefixed with `ee_`.","schema":{"pattern":"ee_.+","type":"string","description":"Filters policy import intents by employee ID. Prefixed with `ee_`.","example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"group_id","in":"query","description":"Filters policy import intents by group ID. Prefixed with `g_`.","schema":{"pattern":"gr_.+","type":"string","description":"Filters policy import intents by group ID. Prefixed with `g_`.","example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"status","in":"query","description":"Multiple values can be provided by separating them with a comma. Allowed values are: `processing`, `failed`, `success`.","schema":{"type":"string"},"index$":2},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":3},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":4},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":5}]},"GET /policy_import_intents/{policy_import_intent_id}":{"protocol":"http","parameters":[{"name":"policy_import_intent_id","in":"path","required":true,"schema":{"pattern":"pii_.+","type":"string","example":"pii_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const policy_import_intent_ref01_ent = client.PolicyImportIntent()
    let policy_import_intent_ref01_data = setup.data.new.policy_import_intent['policy_import_intent_ref01']

    policy_import_intent_ref01_data = (await policy_import_intent_ref01_ent.create(policy_import_intent_ref01_data)).data()
    assert(null != policy_import_intent_ref01_data.id)


    // LIST
    const policy_import_intent_ref01_match = {}

    const policy_import_intent_ref01_list = (await policy_import_intent_ref01_ent.list(policy_import_intent_ref01_match)).map((e) => e.data())

    assert(!isempty(select(policy_import_intent_ref01_list, { id: policy_import_intent_ref01_data.id })))


    // LOAD
    const policy_import_intent_ref01_match_dt0 = {}
    policy_import_intent_ref01_match_dt0.id = policy_import_intent_ref01_data.id
    const policy_import_intent_ref01_data_dt0 = (await policy_import_intent_ref01_ent.load(policy_import_intent_ref01_match_dt0)).data()
    assert(policy_import_intent_ref01_data_dt0.id === policy_import_intent_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/policy_import_intent/PolicyImportIntentTestData.json')

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
    ['policy_import_intent01','policy_import_intent02','policy_import_intent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_POLICY_IMPORT_INTENT_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_POLICY_IMPORT_INTENT_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_POLICY_IMPORT_INTENT_ENTID']
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
  
