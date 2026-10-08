
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


describe('GroupQuoteIntentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.GroupQuoteIntent()
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
    PreSpec() { throw new Error('group_quote_intent hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of KotaSDK.test(offline).GroupQuoteIntent().stream('list')) { }
    }, /offline/)

    for await (const _item of KotaSDK.test(offline).GroupQuoteIntent()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != config.feature?.rbac) {
      const denied = KotaSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.GroupQuoteIntent().stream('list')) { }
      }, (err) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain = {}
    const ctrl = { explain }
    for await (const _item of KotaSDK.test().GroupQuoteIntent().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new KotaSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.GroupQuoteIntent().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.GroupQuoteIntent().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.GroupQuoteIntent().list({"group_id":1}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"action_required":{"a":true,"h":"Action Required","n":"action_required","r":false,"sh":"Details of the action required from the caller, if the intent is in action_required status.","t":"`$NULL`","key$":"action_required","index$":0},"consent_links":{"a":true,"h":"Consent Links","n":"consent_links","r":true,"sh":"The statements the customer must accept to proceed, each a sentence and the documents it names.","t":"`$ARRAY`","key$":"consent_links","index$":1},"cost_sharing":{"a":true,"h":"Cost Sharing","n":"cost_sharing","r":false,"sh":"Cost sharing configuration for the quote.","t":"`$NULL`","key$":"cost_sharing","index$":2},"coverage_selections":{"a":true,"h":"Coverage Selections","n":"coverage_selections","r":false,"sh":"Plan coverage option selections for group-policy-scoped configurations.","t":["`$ONE`",["`$NULL`","`$ARRAY`"]],"key$":"coverage_selections","index$":3},"disclosures":{"a":true,"h":"Disclosures","n":"disclosures","r":true,"sh":"Disclosures associated with this intent.","t":"`$ARRAY`","key$":"disclosures","index$":4},"expected_start_date":{"a":true,"fo":"date","h":"Expected Start Date","n":"expected_start_date","r":false,"sh":"Expected start date for the insurance coverage","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"expected_start_date","index$":5},"group_id":{"a":true,"h":"Group Id","n":"group_id","op":{"create":{"req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]]}},"r":true,"sh":"Unique identifier for the group.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"group_id","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the group quote intent","t":"`$STRING`","key$":"id","index$":7},"items":{"a":true,"h":"Items","n":"items","op":{"create":{"req":false,"type":["`$ONE`",["`$NULL`","`$ARRAY`"]]}},"r":true,"sh":"The benefits this intent quotes and the levels they are quoted at.","t":"`$ARRAY`","key$":"items","index$":8},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"Object type identifier","t":"`$STRING`","key$":"object","index$":9},"plan_id":{"a":true,"h":"Plan Id","n":"plan_id","op":{"create":{"req":false,"type":["`$ONE`",["`$NULL`","`$STRING`"]]}},"r":true,"sh":"Unique identifier for the plan.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"plan_id","index$":10},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current status of the group quote intent","t":"`$STRING`","key$":"status","index$":11},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"Whether the intent quotes one (group, plan) pair or several levels.","t":"`$NULL`","key$":"type","index$":12}},"id":{"field":"id","name":"id"},"name":"group_quote_intent","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /group_quote_intents/{group_quote_intent_id}/reject","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"group_quote_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/group_quote_intents/{group_quote_intent_id}/reject","q":{"$action":"reject","exist":["id"]},"r":{"param":{"group_quote_intent_id":"id"}},"s":[{"lit":"group_quote_intents"},{"var":"id"},{"lit":"reject"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"bf":["cost_sharing","coverage_selections","expected_start_date","group_id","items","plan_id"],"co":{"id":"POST /group_quote_intents","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/group_quote_intents","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"group_quote_intents"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /group_quote_intents","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"group_id","or":"group_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"pl_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"plan_id","or":"plan_id","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/group_quote_intents","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"group_quote_intents"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /group_quote_intents/{group_quote_intent_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"group_quote_intent_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/group_quote_intents/{group_quote_intent_id}","q":{"exist":["id"]},"r":{"param":{"group_quote_intent_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"group_quote_intents"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"group_quote_intent","name__orig":"group_quote_intent","Name":"GroupQuoteIntent","name_":"group_quote_intent","name-":"group-quote-intent","NAME":"GROUP_QUOTE_INTENT","index$":30}, {"active":true,"entity":"group_quote_intent","key$":"BasicGroupQuoteIntentFlow","kind":"basic","name":"BasicGroupQuoteIntentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"group_quote_intent_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"group_quote_intent_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"group_quote_intent_ref01","srcdatavar":"group_quote_intent_ref01_data","suffix":"_dt0"},"m":{"id":"group_quote_intent01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-group_quote_intent_ref01"}}],"index$":2}]}, 'GroupQuoteIntent', {"POST /group_quote_intents/{group_quote_intent_id}/reject":{"protocol":"http","parameters":[{"name":"group_quote_intent_id","in":"path","required":true,"schema":{"pattern":"gqi_.+","type":"string","example":"gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"POST /group_quote_intents":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"type":"object","properties":{"group_id":{"pattern":"gr_.+","type":["null","string"],"description":"Unique identifier for the group to get a quote for. Required unless `items` is supplied.","example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a","key$":"group_id"},"plan_id":{"pattern":"pl_.+","type":["null","string"],"description":"Unique identifier for the plan to get a quote for. Required unless `items` is supplied.","example":"pl_3b1333d87d9d4fd6ad83ba7f6b0e951a","key$":"plan_id"},"cost_sharing":{"type":"null","allOf":[{}],"description":"Cost sharing configuration for the quote. Required, and settled here rather than at acceptance: the group policy intent takes no cost sharing of its own. Not accepted alongside `items`, which carries cost sharing per level.","key$":"cost_sharing"},"expected_start_date":{"type":["null","string"],"description":"Expected start date for the insurance coverage","format":"date","example":"2024-12-01","key$":"expected_start_date"},"coverage_selections":{"type":["null","array"],"items":{"required":[],"type":"object","properties":{},"additionalProperties":false,"x-ref":"#/components/schemas/PlanCoverageOptionSelectionRequest"},"description":"Plan coverage option selections for group-policy-scoped configurations. Not accepted alongside `items`, which carries coverage selections per level.","key$":"coverage_selections"},"items":{"type":["null","array"],"items":{"type":"object","properties":{},"additionalProperties":false,"x-ref":"#/components/schemas/GroupQuoteIntentItemRequest"},"description":"The benefits to quote, each with its own levels. Supplying this opts into the multi-level shape: `group_id`, `plan_id`, `cost_sharing` and `coverage_selections` must then be omitted. Exactly one item is allowed.","key$":"items"}},"additionalProperties":false,"x-ref":"#/components/schemas/CreateGroupQuoteIntentRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":0}]},"GET /group_quote_intents":{"protocol":"http","parameters":[{"name":"group_id","in":"query","description":"Filter by group ID. Matches the intent's own group or any of a multi-level intent's levels.","schema":{"pattern":"gr_.+","type":"string","description":"Filter by group ID. Matches the intent's own group or any of a multi-level intent's levels.","example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"plan_id","in":"query","description":"Filter by plan ID. Matches the intent's own plan or any of a multi-level intent's levels.","schema":{"pattern":"pl_.+","type":"string","description":"Filter by plan ID. Matches the intent's own plan or any of a multi-level intent's levels.","example":"pl_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"type","in":"query","description":"Filter by shape: `single` for one group and plan, `multi_level` for several levels","schema":{"enum":["single","multi_level"],"type":"string","allOf":[{"enum":["single","multi_level"],"type":"string","additionalProperties":false,"x-ref":"#/components/schemas/GroupQuoteIntentTypeEnumParameter"}],"description":"Filter by shape: `single` for one group and plan, `multi_level` for several levels"},"index$":2},{"name":"status","in":"query","description":"Multiple values can be provided by separating them with a comma. Allowed values are: `processing`, `action_required`, `awaiting_quote`, `quote_available`, `rejected`, `rejected_by_insurer`, `quote_expired`.","schema":{"type":"string"},"index$":3},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":4},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":5},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":6}]},"GET /group_quote_intents/{group_quote_intent_id}":{"protocol":"http","parameters":[{"name":"group_quote_intent_id","in":"path","required":true,"schema":{"pattern":"gqi_.+","type":"string","example":"gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const group_quote_intent_ref01_ent = client.GroupQuoteIntent()
    let group_quote_intent_ref01_data = setup.data.new.group_quote_intent['group_quote_intent_ref01']

    group_quote_intent_ref01_data = (await group_quote_intent_ref01_ent.create(group_quote_intent_ref01_data)).data()
    assert(null != group_quote_intent_ref01_data.id)


    // LIST
    const group_quote_intent_ref01_match = {}

    const group_quote_intent_ref01_list = (await group_quote_intent_ref01_ent.list(group_quote_intent_ref01_match)).map((e) => e.data())

    assert(!isempty(select(group_quote_intent_ref01_list, { id: group_quote_intent_ref01_data.id })))


    // LOAD
    const group_quote_intent_ref01_match_dt0 = {}
    group_quote_intent_ref01_match_dt0.id = group_quote_intent_ref01_data.id
    const group_quote_intent_ref01_data_dt0 = (await group_quote_intent_ref01_ent.load(group_quote_intent_ref01_match_dt0)).data()
    assert(group_quote_intent_ref01_data_dt0.id === group_quote_intent_ref01_data.id)


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
      '../../../../.sdk/test/entity/group_quote_intent/GroupQuoteIntentTestData.json')

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
    ['group_quote_intent01','group_quote_intent02','group_quote_intent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_GROUP_QUOTE_INTENT_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_GROUP_QUOTE_INTENT_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_GROUP_QUOTE_INTENT_ENTID']
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
  
