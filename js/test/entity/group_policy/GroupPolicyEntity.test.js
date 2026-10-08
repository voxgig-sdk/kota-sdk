
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


describe('GroupPolicyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.GroupPolicy()
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
    PreSpec() { throw new Error('group_policy hook failed') }
    PreUnexpected() { this.unexpected++ }
  }

  test('stream-error', async () => {
    const offline = { net: { offline: true } }
    await assert.rejects(async () => {
      for await (const _item of KotaSDK.test(offline).GroupPolicy().stream('list')) { }
    }, /offline/)

    for await (const _item of KotaSDK.test(offline).GroupPolicy()
      .stream('list', undefined, { ctrl: { throw: false } })) { }

    if (null != config.feature?.rbac) {
      const denied = KotaSDK.test(undefined, { feature: { rbac: { active: true, deny: true } } })
      await assert.rejects(async () => {
        for await (const _item of denied.GroupPolicy().stream('list')) { }
      }, (err) => 'rbac_denied' === err.code)
    }
  })

  test('stream-ctrl', async () => {
    const explain = {}
    const ctrl = { explain }
    for await (const _item of KotaSDK.test().GroupPolicy().stream('list', undefined, { ctrl })) { }
    assert.deepStrictEqual(Object.keys(ctrl), ['explain'])
    assert(explain === ctrl.explain && 0 < Object.keys(explain).length)
  })

  test('unexpected', async () => {
    const hook = new FailHook()
    const client = new KotaSDK({ feature: { test: { active: true } }, extend: [hook] })
    await assert.rejects(client.GroupPolicy().list(), /hook failed/)
    assert(0 < hook.unexpected)

    const fired = hook.unexpected
    assert.strictEqual(await client.GroupPolicy().list(undefined, { throw: false }), undefined)
    assert(fired < hook.unexpected)
  })

  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.GroupPolicy().list({"employer_id":1}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cancellation_date":{"a":true,"fo":"date","h":"Cancellation Date","n":"cancellation_date","r":false,"sh":"Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"cancellation_date","index$":0},"disclosures":{"a":true,"h":"Disclosures","n":"disclosures","r":true,"sh":"Disclosures associated with this group policy.","t":"`$ARRAY`","key$":"disclosures","index$":1},"employer_id":{"a":true,"h":"Employer Id","n":"employer_id","r":false,"sh":"Identifier for the employer associated with this group policy.","t":"`$STRING`","key$":"employer_id","index$":2},"end_date":{"a":true,"fo":"date","h":"End Date","n":"end_date","r":false,"sh":"Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"end_date","index$":3},"group_id":{"a":true,"h":"Group Id","n":"group_id","r":false,"sh":"Identifier for the group associated with this group policy.","t":"`$STRING`","key$":"group_id","index$":4},"health_insurance":{"a":true,"h":"Health Insurance","n":"health_insurance","r":false,"sh":"Health insurance–specific fields (present when `type=health_insurance`).","t":"`$NULL`","key$":"health_insurance","index$":5},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the group policy.","t":"`$STRING`","key$":"id","index$":6},"life_assurance":{"a":true,"h":"Life Assurance","n":"life_assurance","r":false,"sh":"Life assurance–specific fields (present when `type=life_assurance`).","t":"`$NULL`","key$":"life_assurance","index$":7},"linked_group_policy_ids":{"a":true,"h":"Linked Group Policy Ids","n":"linked_group_policy_ids","r":true,"sh":"The other `group_policy` objects bought together with this one as a single scheme — the policies created from the same multi-level purchase.","t":"`$ARRAY`","key$":"linked_group_policy_ids","index$":8},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":9},"plan":{"a":true,"h":"Plan","n":"plan","r":true,"sh":"Plan information for this policy","t":"`$ANY`","key$":"plan","index$":10},"provider":{"a":true,"h":"Provider","n":"provider","r":true,"sh":"Provider information for this policy.","t":"`$ANY`","key$":"provider","index$":11},"start_date":{"a":true,"fo":"date","h":"Start Date","n":"start_date","r":true,"sh":"Policy start (effective) date in ISO 8601 (YYYY-MM-DD).","t":"`$STRING`","key$":"start_date","index$":12},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current lifecycle state of the `group_policy`, indicating its progress from creation to activation.","t":"`$STRING`","key$":"status","index$":13},"type":{"a":true,"h":"Type","n":"type","r":true,"sh":"Policy type.","t":"`$STRING`","key$":"type","index$":14}},"id":{"field":"id","name":"id"},"name":"group_policy","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /group_policies","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"employer_id","or":"employer_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"group_id","or":"group_id","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":4}]},"k":"http","m":"GET","o":"/group_policies","q":{},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"group_policies"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /group_policies/{group_policy_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"gp_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"group_policy_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/group_policies/{group_policy_id}","q":{"exist":["id"]},"r":{"param":{"group_policy_id":"id"}},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"group_policies"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"group_policy","name__orig":"group_policy","Name":"GroupPolicy","name_":"group_policy","name-":"group-policy","NAME":"GROUP_POLICY","index$":26}, {"active":true,"entity":"group_policy","key$":"BasicGroupPolicyFlow","kind":"basic","name":"BasicGroupPolicyFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"group_policy_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"group_policy_ref01","srcdatavar":"group_policy_ref01_data","suffix":"_dt0"},"m":{"id":"group_policy01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-group_policy_ref01"}}],"index$":1}]}, 'GroupPolicy', {"GET /group_policies":{"protocol":"http","parameters":[{"name":"employer_id","in":"query","description":"Filters group policies by employer.","schema":{"pattern":"er_.+","type":"string","description":"Filters group policies by employer.","example":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"group_id","in":"query","description":"Filters group policies by group.","schema":{"pattern":"gr_.+","type":"string","description":"Filters group policies by group.","example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":1},{"name":"status","in":"query","description":"Multiple values can be provided by separating them with a comma. Allowed values are: `scheduled`, `active`, `expired`, `cancelled`.","schema":{"type":"string"},"index$":2},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":3},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":4},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":5}]},"GET /group_policies/{group_policy_id}":{"protocol":"http","parameters":[{"name":"group_policy_id","in":"path","required":true,"schema":{"pattern":"gp_.+","type":"string","example":"gp_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let group_policy_ref01_data = Object.values(setup.data.existing.group_policy)[0]

    // LIST
    const group_policy_ref01_ent = client.GroupPolicy()
    const group_policy_ref01_match = {}

    const group_policy_ref01_list = (await group_policy_ref01_ent.list(group_policy_ref01_match)).map((e) => e.data())


    // LOAD
    const group_policy_ref01_match_dt0 = {}
    group_policy_ref01_match_dt0.id = group_policy_ref01_data.id
    const group_policy_ref01_data_dt0 = (await group_policy_ref01_ent.load(group_policy_ref01_match_dt0)).data()
    assert(group_policy_ref01_data_dt0.id === group_policy_ref01_data.id)


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
      '../../../../.sdk/test/entity/group_policy/GroupPolicyTestData.json')

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
    ['group_policy01','group_policy02','group_policy03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_GROUP_POLICY_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_GROUP_POLICY_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_GROUP_POLICY_ENTID']
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
  
