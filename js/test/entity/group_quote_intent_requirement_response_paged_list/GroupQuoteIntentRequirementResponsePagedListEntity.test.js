
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


describe('GroupQuoteIntentRequirementResponsePagedListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.GroupQuoteIntentRequirementResponsePagedList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"group_quote_intent_requirement_response_paged_list","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"x_platform_id","orig":"x_platform_id","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"id","orig":"group_quote_intent_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"object_id","orig":"object_id","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"object_type","orig":"object_type","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":3}]},"contract":{"id":"GET /group_quote_intents/{group_quote_intent_id}/requirements","json":"{\"operationId\":\"ListGroupQuoteIntentRequirements\",\"parameters\":[{\"in\":\"path\",\"name\":\"group_quote_intent_id\",\"required\":true,\"schema\":{\"example\":\"gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"gqi_.+\",\"type\":\"string\"}},{\"description\":\"Filter by object type (employee or employer)\",\"in\":\"query\",\"name\":\"object_type\",\"schema\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"value\":{\"allOf\":[{\"enum\":[\"employee\",\"employer\",\"associated_person\"],\"type\":\"string\"}]}},\"type\":\"object\"}],\"description\":\"Filter by object type (employee or employer)\"}},{\"description\":\"Filter by object ID (employee ID or employer ID)\",\"in\":\"query\",\"name\":\"object_id\",\"schema\":{\"description\":\"Filter by object ID (employee ID or employer ID)\",\"type\":\"string\"}},{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"in\":\"query\",\"name\":\"page_size\",\"schema\":{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"has_next_page\":{\"description\":\"Whether there are more pages available after this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"has_previous_page\":{\"description\":\"Whether there are more pages available before this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"items\":{\"description\":\"A paginated array containing the response elements\",\"items\":{\"additionalProperties\":false,\"properties\":{\"id\":{\"description\":\"Unique identifier for the requirement\",\"example\":\"ar_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ar_.+\",\"type\":\"string\"},\"is_fulfilled\":{\"description\":\"Whether the requirement has been fulfilled\",\"example\":true,\"type\":\"boolean\"},\"object\":{\"description\":\"Object type identifier\",\"readOnly\":true,\"type\":\"string\"},\"object_id\":{\"description\":\"Identifier of the object (employee ID or employer ID)\",\"type\":\"string\"},\"object_type\":{\"allOf\":[{\"enum\":[\"employee\",\"employer\",\"associated_person\"],\"type\":\"string\"}],\"description\":\"Type of object this requirement is for (employee or employer)\"},\"requirement_type\":{\"allOf\":[{\"enum\":[\"group_quote_intent\",\"group_policy_intent\",\"dependent_management_intent\",\"policy_amendment_intent\",\"enrolment_intent\"],\"type\":\"string\"}],\"description\":\"Type of requirement\"}},\"required\":[\"id\",\"is_fulfilled\",\"object_id\",\"object_type\",\"requirement_type\"],\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"description\":\"The current page of the results\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"page_size\":{\"description\":\"The number of results on this page. This can be different from the requested page size if the total number of results is less than the requested page size\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"total_count\":{\"description\":\"The total number of elements available in the response. This is the total number of elements available across all pages, not just the current page.\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"items\",\"page\",\"page_size\",\"total_count\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/group_quote_intents/{group_quote_intent_id}/requirements","rename":{"param":{"group_quote_intent_id":"id"}},"segments":[{"lit":"group_quote_intents"},{"var":"id"},{"lit":"requirements"}],"select":{"$action":"requirements","exist":["id","object_id","object_type","page","page_size","x_platform_id"]},"transform":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"group_quote_intent_requirement_response_paged_list","name__orig":"group_quote_intent_requirement_response_paged_list","Name":"GroupQuoteIntentRequirementResponsePagedList","name_":"group_quote_intent_requirement_response_paged_list","name-":"group-quote-intent-requirement-response-paged-list","NAME":"GROUP_QUOTE_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST","index$":31}, {"active":true,"entity":"group_quote_intent_requirement_response_paged_list","key$":"BasicGroupQuoteIntentRequirementResponsePagedListFlow","kind":"basic","name":"BasicGroupQuoteIntentRequirementResponsePagedListFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"group_quote_intent_id":"group_quote_intent01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"group_quote_intent_requirement_response_paged_list_ref01"}}],"index$":0}]}, 'GroupQuoteIntentRequirementResponsePagedList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let group_quote_intent_requirement_response_paged_list_ref01_data = Object.values(setup.data.existing.group_quote_intent_requirement_response_paged_list)[0]

    // LIST
    const group_quote_intent_requirement_response_paged_list_ref01_ent = client.GroupQuoteIntentRequirementResponsePagedList()
    const group_quote_intent_requirement_response_paged_list_ref01_match = {}
    group_quote_intent_requirement_response_paged_list_ref01_match['group_quote_intent_id'] = setup.idmap['group_quote_intent01']

    const group_quote_intent_requirement_response_paged_list_ref01_list = (await group_quote_intent_requirement_response_paged_list_ref01_ent.list(group_quote_intent_requirement_response_paged_list_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/group_quote_intent_requirement_response_paged_list/GroupQuoteIntentRequirementResponsePagedListTestData.json')

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
    ['group_quote_intent_requirement_response_paged_list01','group_quote_intent_requirement_response_paged_list02','group_quote_intent_requirement_response_paged_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_GROUP_QUOTE_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_GROUP_QUOTE_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_GROUP_QUOTE_INTENT_REQUIREMENT_RESPONSE_PAGED_LIST_ENTID']
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
  
