
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


describe('GroupEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.Group()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"Short description of the purpose or scope of the `group`.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"description","index$":0},"employer_id":{"a":true,"h":"Employer Id","n":"employer_id","r":true,"sh":"Identifier for the `employer` that owns this `group`.","t":"`$STRING`","key$":"employer_id","index$":1},"enrolment_type":{"a":true,"h":"Enrolment Type","n":"enrolment_type","r":true,"sh":"Indicates how employees are enrolled into the group.","t":"`$ANY`","key$":"enrolment_type","index$":2},"group_policy_ids":{"a":true,"h":"Group Policy Ids","n":"group_policy_ids","r":true,"sh":"Group policy unique identifiers associated with this group.","t":"`$ARRAY`","key$":"group_policy_ids","index$":3},"group_policy_intent_ids":{"a":true,"h":"Group Policy Intent Ids","n":"group_policy_intent_ids","r":true,"sh":"Group policy intent unique identifiers associated with this group.","t":"`$ARRAY`","key$":"group_policy_intent_ids","index$":4},"group_quote_intent_ids":{"a":true,"h":"Group Quote Intent Ids","n":"group_quote_intent_ids","r":true,"sh":"Group quote intent unique identifiers associated with this group.","t":"`$ARRAY`","key$":"group_quote_intent_ids","index$":5},"group_type":{"a":true,"h":"Group Type","n":"group_type","r":true,"sh":"Indicates how policies are organized for this group.","t":"`$ANY`","key$":"group_type","index$":6},"id":{"a":true,"h":"Id","n":"id","r":true,"sh":"Unique identifier for the `group`.","t":"`$STRING`","key$":"id","index$":7},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"Human-readable name of the `group`.","t":"`$STRING`","key$":"name","index$":8},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":9},"status":{"a":true,"h":"Status","n":"status","r":true,"sh":"Current lifecycle state of the `group`, indicating its current progress.","t":"`$ANY`","key$":"status","index$":10}},"id":{"field":"id","name":"id"},"name":"group","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /groups","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/groups","q":{"exist":["x_platform_id"]},"r":{},"s":[{"lit":"groups"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /groups","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"query","n":"employer_id","or":"employer_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/groups","q":{"exist":["employer_id","page","page_size","status","x_platform_id"]},"r":{},"s":[{"lit":"groups"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /groups/{group_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/groups/{group_id}","q":{"exist":["id","x_platform_id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"groups"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /groups/{group_id}","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"x_platform_id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"id","or":"group_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/groups/{group_id}","q":{"exist":["id","x_platform_id"]},"r":{"param":{"group_id":"id"}},"s":[{"lit":"groups"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"group","name__orig":"group","Name":"Group","name_":"group","name-":"group","NAME":"GROUP","index$":23}, {"active":true,"entity":"group","key$":"BasicGroupFlow","kind":"basic","name":"BasicGroupFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"group_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"group_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"group_ref01","srcdatavar":"group_ref01_data","suffix":"_up0","textfield":"employer_id"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-group_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"group_ref01","srcdatavar":"group_ref01_data","suffix":"_dt0"},"m":{"id":"group01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-group_ref01"}}],"index$":3}]}, 'Group', {"POST /groups":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"required":["employer_id","name"],"type":"object","properties":{"employer_id":{"pattern":"er_.+","type":"string","description":"Identifier of the `employer` to create the group for. Prefixed with `er_`.","example":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"name":{"type":"string","description":"Human-readable name of the `group`."},"description":{"type":["null","string"],"description":"Short description of the purpose or scope of the `group`."}},"additionalProperties":false,"x-ref":"#/components/schemas/CreateGroupRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":0}]},"GET /groups":{"protocol":"http","parameters":[{"name":"employer_id","in":"query","description":"Filter by employer ID.","schema":{"pattern":"er_.+","type":"string","example":"er_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"status","in":"query","description":"Multiple values can be provided by separating them with a comma. Allowed values are: `pending`, `ready`, `archived`.","schema":{"type":"string"},"index$":1},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":2},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":3},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":4}]},"GET /groups/{group_id}":{"protocol":"http","parameters":[{"name":"group_id","in":"path","required":true,"schema":{"pattern":"gr_.+","type":"string","example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]},"PUT /groups/{group_id}":{"protocol":"http","requestBody":{"content":{"application/json":{"schema":{"allOf":[{"type":"object","properties":{"name":{"type":["null","string"],"description":"Human-readable name of the `group`."},"description":{"type":["null","string"],"description":"Short description of the purpose or scope of the `group`."}},"additionalProperties":false,"x-ref":"#/components/schemas/UpdateGroupRequest"}],"index$":1}}},"required":true},"parameters":[{"name":"group_id","in":"path","required":true,"schema":{"pattern":"gr_.+","type":"string","example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const group_ref01_ent = client.Group()
    let group_ref01_data = setup.data.new.group['group_ref01']

    group_ref01_data = (await group_ref01_ent.create(group_ref01_data)).data()
    assert(null != group_ref01_data.id)


    // LIST
    const group_ref01_match = {}

    const group_ref01_list = (await group_ref01_ent.list(group_ref01_match)).map((e) => e.data())

    assert(!isempty(select(group_ref01_list, { id: group_ref01_data.id })))


    // UPDATE
    const group_ref01_data_up0 = {}
    group_ref01_data_up0.id = group_ref01_data.id

    const group_ref01_markdef_up0 = { name: 'employer_id', value: 'Mark01-group_ref01_' + setup.now }
    group_ref01_data_up0 [group_ref01_markdef_up0.name] = group_ref01_markdef_up0.value

    const group_ref01_resdata_up0 = (await group_ref01_ent.update(group_ref01_data_up0)).data()
    assert(group_ref01_resdata_up0.id === group_ref01_data_up0.id)

    assert(group_ref01_resdata_up0[group_ref01_markdef_up0.name] === group_ref01_markdef_up0.value)


    // LOAD
    const group_ref01_match_dt0 = {}
    group_ref01_match_dt0.id = group_ref01_data.id
    const group_ref01_data_dt0 = (await group_ref01_ent.load(group_ref01_match_dt0)).data()
    assert(group_ref01_data_dt0.id === group_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/group/GroupTestData.json')

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
    ['group01','group02','group03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_GROUP_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_GROUP_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_GROUP_ENTID']
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
  
