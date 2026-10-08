
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


describe('GroupPolicyIntentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.GroupPolicyIntent()
    assert(null != ent)
  })


  class FailHook extends BaseFeature {
    constructor() {
      super()
      this.name = 'failhook'
      this.version = '0.0.1'
      this.active = true
      this.unexpected = 0
    }
    init() { }
    PreSpec() { throw new Error('group_policy_intent hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of KotaSDK.test(offline).GroupPolicyIntent().stream('list')) { }
    }, /offline/)

    for await (const _item of KotaSDK.test(offline).GroupPolicyIntent()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != config.feature?.rbac) {
      const denied = KotaSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.GroupPolicyIntent().stream('list')) { }
      }, (err) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain = {}
    const ctrl = { explain }
    for await (const _item of KotaSDK.test().GroupPolicyIntent().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new KotaSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.GroupPolicyIntent().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.GroupPolicyIntent().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.GroupPolicyIntent().list({"group_id":1}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"action_required":{"a":true,"h":"Action Required","n":"action_required","r":false,"sh":"Details of the required action when the intent is in ActionRequired status.","t":"`$NULL`","key$":"action_required","index$":0},"consent_approvals":{"a":true,"h":"Consent Approvals","n":"consent_approvals","r":false,"sh":"Consent approvals to record at the time of intent creation","t":["`$ONE`",["`$NULL`","`$ARRAY`"]],"key$":"consent_approvals","index$":1},"cost_sharing":{"a":true,"h":"Cost Sharing","n":"cost_sharing","r":false,"sh":"Cost sharing configuration for the policy intent","t":"`$NULL`","key$":"cost_sharing","index$":2},"disclosures":{"a":true,"h":"Disclosures","n":"disclosures","r":true,"sh":"Disclosures associated with this intent.","t":"`$ARRAY`","key$":"disclosures","index$":3},"due_date":{"a":true,"fo":"date-time","h":"Due Date","n":"due_date","r":false,"sh":"Due date for the policy intent","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"due_date","index$":4},"group_id":{"a":true,"h":"Group Id","n":"group_id","r":true,"sh":"Unique identifier for the group","t":"`$STRING`","key$":"group_id","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the group policy intent","t":"`$STRING`","key$":"id","index$":6},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"Object type identifier","t":"`$STRING`","key$":"object","index$":7},"plan_id":{"a":true,"h":"Plan Id","n":"plan_id","r":true,"sh":"Unique identifier for the plan","t":"`$STRING`","key$":"plan_id","index$":8},"quote_intent_id":{"a":true,"h":"Quote Intent Id","n":"quote_intent_id","r":true,"sh":"Unique identifier for the group quote intent this policy intent was created from","t":"`$STRING`","key$":"quote_intent_id","index$":9},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of the group policy intent","t":"`$STRING`","key$":"status","index$":10}},"id":{"field":"id","name":"id"},"name":"group_policy_intent","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["consent_approvals","cost_sharing","quote_intent_id"],"co":{"id":"POST /group_policy_intents","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/group_policy_intents","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"group_policy_intents"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /group_policy_intents","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"group_id","or":"group_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"pl_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"plan_id","or":"plan_id","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/group_policy_intents","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"group_policy_intents"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /group_policy_intents/{group_policy_intent_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"group_policy_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/group_policy_intents/{group_policy_intent_id}","q":{"exist":["id"]},"r":{"param":{"group_policy_intent_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"group_policy_intents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"group_policy_intent","name__orig":"group_policy_intent","Name":"GroupPolicyIntent","name_":"group_policy_intent","name-":"group-policy-intent","NAME":"GROUP_POLICY_INTENT","index$":27}, {"active":true,"entity":"group_policy_intent","key$":"BasicGroupPolicyIntentFlow","kind":"basic","name":"BasicGroupPolicyIntentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"group_policy_intent_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"group_policy_intent_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"group_policy_intent_ref01","srcdatavar":"group_policy_intent_ref01_data","suffix":"_dt0"},"m":{"id":"group_policy_intent01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-group_policy_intent_ref01"}}],"index$":2}]}, 'GroupPolicyIntent', {"POST /group_policy_intents":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["quote_intent_id"],"type":"object","properties":{"quote_intent_id":{"pattern":"gqi_.+","type":"string","description":"Unique identifier for the group quote intent to create a policy intent from","example":"gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a","key$":"quote_intent_id"},"cost_sharing":{"type":"null","allOf":[{}],"description":"Cost sharing configuration override for the setup. If not provided, falls back to the quote intent's cost sharing.","key$":"cost_sharing"},"consent_approvals":{"type":["null","array"],"items":{"required":[],"type":"object","properties":{},"additionalProperties":false,"x-ref":"#/components/schemas/ConsentApprovalInput"},"description":"Consent approvals to record at the time of intent creation","key$":"consent_approvals"}},"additionalProperties":false,"x-ref":"#/components/schemas/CreateGroupPolicyIntentRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":0}]},"GET /group_policy_intents":{"protocol":"http","parameters":[{"name":"group_id","in":"query","description":"Filter by group ID","schema":{"pattern":"gr_.+","type":"string","description":"Filter by group ID","example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"plan_id","in":"query","description":"Filter by plan ID","schema":{"pattern":"pl_.+","type":"string","description":"Filter by plan ID","example":"pl_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"status","in":"query","description":"Multiple values can be provided by separating them with a comma. Allowed values are: `processing`, `action_required`, `pending_provider_approval`, `policy_created`, `expired`, `provider_rejected`, `manual_renewal_gathering_required`.","schema":{"type":"string"},"index$":2},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":3},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":4},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":5}]},"GET /group_policy_intents/{group_policy_intent_id}":{"protocol":"http","parameters":[{"name":"group_policy_intent_id","in":"path","required":true,"schema":{"pattern":"gpi_.+","type":"string","example":"gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const group_policy_intent_ref01_ent = client.GroupPolicyIntent()
    let group_policy_intent_ref01_data = setup.data.new.group_policy_intent['group_policy_intent_ref01']

    group_policy_intent_ref01_data = (await group_policy_intent_ref01_ent.create(group_policy_intent_ref01_data)).data()
    assert(null != group_policy_intent_ref01_data.id)


    // LIST
    const group_policy_intent_ref01_match = {}

    const group_policy_intent_ref01_list = (await group_policy_intent_ref01_ent.list(group_policy_intent_ref01_match)).map((e) => e.data())

    assert(!isempty(select(group_policy_intent_ref01_list, { id: group_policy_intent_ref01_data.id })))


    // LOAD
    const group_policy_intent_ref01_match_dt0 = {}
    group_policy_intent_ref01_match_dt0.id = group_policy_intent_ref01_data.id
    const group_policy_intent_ref01_data_dt0 = (await group_policy_intent_ref01_ent.load(group_policy_intent_ref01_match_dt0)).data()
    assert(group_policy_intent_ref01_data_dt0.id === group_policy_intent_ref01_data.id)


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
      '../../../../.sdk/test/entity/group_policy_intent/GroupPolicyIntentTestData.json')

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
    ['group_policy_intent01','group_policy_intent02','group_policy_intent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_GROUP_POLICY_INTENT_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_GROUP_POLICY_INTENT_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_GROUP_POLICY_INTENT_ENTID']
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
  
