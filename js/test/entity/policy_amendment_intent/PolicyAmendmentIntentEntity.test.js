
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


describe('PolicyAmendmentIntentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.PolicyAmendmentIntent()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amendment_reason":{"a":true,"h":"Amendment Reason","n":"amendment_reason","r":true,"sh":"The reason for the policy amendment.","t":"`$ANY`","key$":"amendment_reason","index$":0},"disclosures":{"a":true,"h":"Disclosures","n":"disclosures","r":true,"sh":"Disclosures associated with this intent.","t":"`$ARRAY`","key$":"disclosures","index$":1},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the policy amendment intent.","t":"`$STRING`","key$":"id","index$":2},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"Object type identifier.","t":"`$STRING`","key$":"object","index$":3},"pending_confirmation":{"a":true,"h":"Pending Confirmation","n":"pending_confirmation","r":false,"sh":"Information about the pending confirmation if the intent status is `pending_confirmation`.","t":"`$NULL`","key$":"pending_confirmation","index$":4},"policy_id":{"a":true,"h":"Policy Id","n":"policy_id","r":true,"sh":"The policy ID for which the amendment is requested.","t":"`$STRING`","key$":"policy_id","index$":5},"processing_error":{"a":true,"h":"Processing Error","n":"processing_error","r":false,"sh":"Information about the processing error if the intent status is `processing_error`.","t":"`$NULL`","key$":"processing_error","index$":6},"requested_changes":{"a":true,"h":"Requested Changes","n":"requested_changes","r":true,"sh":"List of requested changes to the policy.","t":"`$ARRAY`","key$":"requested_changes","index$":7},"required_action":{"a":true,"h":"Required Action","n":"required_action","r":false,"sh":"Information about the required action if the intent status is `action_required`.","t":"`$NULL`","key$":"required_action","index$":8},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of the policy amendment intent.","t":"`$ANY`","key$":"status","index$":9}},"id":{"field":"id","name":"id"},"name":"policy_amendment_intent","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /policies/{policy_id}/policy_amendment_intents/{id}/cancel","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"pai_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"p_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"policy_id","or":"policy_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/policies/{policy_id}/policy_amendment_intents/{id}/cancel","q":{"$action":"cancel","exist":["id","policy_id","x_platform_id"]},"r":{},"s":[{"lit":"policies"},{"var":"policy_id"},{"lit":"policy_amendment_intents"},{"var":"id"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}/confirm","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"pai_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"policy_amendment_intent_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"p_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"policy_id","or":"policy_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}/confirm","q":{"$action":"confirm","exist":["id","policy_id","x_platform_id"]},"r":{"param":{"policy_amendment_intent_id":"id"}},"s":[{"lit":"policies"},{"var":"policy_id"},{"lit":"policy_amendment_intents"},{"var":"id"},{"lit":"confirm"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /policies/{policy_id}/policy_amendment_intents","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"p_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"policy_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/policies/{policy_id}/policy_amendment_intents","q":{"exist":["id","x_platform_id"]},"r":{"param":{"policy_id":"id"}},"s":[{"lit":"policies"},{"var":"id"},{"lit":"policy_amendment_intents"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /policies/{policy_id}/policy_amendment_intents","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"p_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"policy_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/policies/{policy_id}/policy_amendment_intents","q":{"exist":["id","page","page_size","status","x_platform_id"]},"r":{"param":{"policy_id":"id"}},"s":[{"lit":"policies"},{"var":"id"},{"lit":"policy_amendment_intents"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"pai_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"policy_amendment_intent_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"p_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"policy_id","or":"policy_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}","q":{"exist":["id","policy_id","x_platform_id"]},"r":{"param":{"policy_amendment_intent_id":"id"}},"s":[{"lit":"policies"},{"var":"policy_id"},{"lit":"policy_amendment_intents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.policy"]]},"key$":"policy_amendment_intent","name__orig":"policy_amendment_intent","Name":"PolicyAmendmentIntent","name_":"policy_amendment_intent","name-":"policy-amendment-intent","NAME":"POLICY_AMENDMENT_INTENT","index$":34}, {"active":true,"entity":"policy_amendment_intent","key$":"BasicPolicyAmendmentIntentFlow","kind":"basic","name":"BasicPolicyAmendmentIntentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"policy_amendment_intent_ref01"},"m":{"policy_id":"policy01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"policy_id":"policy01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"policy_amendment_intent_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"policy_amendment_intent_ref01","srcdatavar":"policy_amendment_intent_ref01_data","suffix":"_dt0"},"m":{"id":"policy_amendment_intent01","policy_id":"policy01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-policy_amendment_intent_ref01"}}],"index$":2}]}, 'PolicyAmendmentIntent', {"POST /policies/{policy_id}/policy_amendment_intents/{id}/cancel":{"protocol":"http","parameters":[{"name":"policy_id","in":"path","required":true,"schema":{"pattern":"p_.+","type":"string","example":"p_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"id","in":"path","required":true,"schema":{"pattern":"pai_.+","type":"string","example":"pai_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]},"POST /policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}/confirm":{"protocol":"http","parameters":[{"name":"policy_id","in":"path","required":true,"schema":{"pattern":"p_.+","type":"string","example":"p_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"policy_amendment_intent_id","in":"path","required":true,"schema":{"pattern":"pai_.+","type":"string","example":"pai_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]},"POST /policies/{policy_id}/policy_amendment_intents":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["amendment_reason","requested_changes"],"type":"object","properties":{"amendment_reason":{"allOf":[{}],"description":"The reason for the policy amendment."},"requested_changes":{"type":"array","items":{"required":[],"type":"object","properties":{},"additionalProperties":false,"x-ref":"#/components/schemas/PolicyAmendmentRequestedChangeRequest"},"description":"List of requested changes to the policy."}},"additionalProperties":false,"x-ref":"#/components/schemas/CreatePolicyAmendmentIntentRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"policy_id","in":"path","required":true,"schema":{"pattern":"p_.+","type":"string","example":"p_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"GET /policies/{policy_id}/policy_amendment_intents":{"protocol":"http","parameters":[{"name":"policy_id","in":"path","required":true,"schema":{"pattern":"p_.+","type":"string","example":"p_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"status","in":"query","description":"Multiple values can be provided by separating them with a comma. Allowed values are: `action_required`, `awaiting_quote`, `pending_confirmation`, `processing`, `amended`, `processing_error`, `not_undertaken`.","schema":{"type":"string"},"index$":1},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":2},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":3},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":4}]},"GET /policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}":{"protocol":"http","parameters":[{"name":"policy_id","in":"path","required":true,"schema":{"pattern":"p_.+","type":"string","example":"p_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"policy_amendment_intent_id","in":"path","required":true,"schema":{"pattern":"pai_.+","type":"string","example":"pai_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const policy_amendment_intent_ref01_ent = client.PolicyAmendmentIntent()
    let policy_amendment_intent_ref01_data = setup.data.new.policy_amendment_intent['policy_amendment_intent_ref01']
    policy_amendment_intent_ref01_data['policy_id'] = setup.idmap['policy01']

    policy_amendment_intent_ref01_data = (await policy_amendment_intent_ref01_ent.create(policy_amendment_intent_ref01_data)).data()
    assert(null != policy_amendment_intent_ref01_data.id)


    // LIST
    const policy_amendment_intent_ref01_match = {}
    policy_amendment_intent_ref01_match['policy_id'] = setup.idmap['policy01']

    const policy_amendment_intent_ref01_list = (await policy_amendment_intent_ref01_ent.list(policy_amendment_intent_ref01_match)).map((e) => e.data())

    assert(!isempty(select(policy_amendment_intent_ref01_list, { id: policy_amendment_intent_ref01_data.id })))


    // LOAD
    const policy_amendment_intent_ref01_match_dt0 = {}
    policy_amendment_intent_ref01_match_dt0.id = policy_amendment_intent_ref01_data.id
    const policy_amendment_intent_ref01_data_dt0 = (await policy_amendment_intent_ref01_ent.load(policy_amendment_intent_ref01_match_dt0)).data()
    assert(policy_amendment_intent_ref01_data_dt0.id === policy_amendment_intent_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/policy_amendment_intent/PolicyAmendmentIntentTestData.json')

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
    ['policy_amendment_intent01','policy_amendment_intent02','policy_amendment_intent03','policy01','policy02','policy03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_POLICY_AMENDMENT_INTENT_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_POLICY_AMENDMENT_INTENT_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_POLICY_AMENDMENT_INTENT_ENTID']
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
  
