

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { KotaSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('EventEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.Event()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'event.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"api_version","readOnly":true,"req":false,"type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"created","req":true,"type":"`$STRING`","index$":1},{"active":true,"name":"data","req":true,"type":"`$NULL`","index$":2},{"active":true,"name":"id","req":true,"type":"`$STRING`","index$":3},{"active":true,"name":"options","readOnly":true,"req":false,"type":"`$NULL`","index$":4},{"active":true,"name":"parent","readOnly":true,"req":false,"type":"`$NULL`","index$":5},{"active":true,"name":"platform_id","req":true,"type":"`$STRING`","index$":6},{"active":true,"name":"root","readOnly":true,"req":false,"type":"`$ANY`","index$":7},{"active":true,"name":"type","req":true,"type":"`$STRING`","index$":8}],"id":{"field":"id","name":"id"},"name":"event","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"x_platform_id","orig":"x_platform_id","reqd":false,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"created_after","orig":"created_after","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"order_direction","orig":"order_direction","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":3},{"active":true,"kind":"query","name":"version","orig":"version","reqd":false,"type":"`$ANY`","index$":4}]},"contract":{"id":"GET /events","json":"{\"operationId\":\"ListEvents\",\"parameters\":[{\"description\":\"Filter events created after this date (limited to the last 30 days)\",\"in\":\"query\",\"name\":\"created_after\",\"schema\":{\"format\":\"date-time\",\"type\":\"string\"}},{\"description\":\"Order direction of the events list `asc` or `desc` (default: `desc`)\",\"in\":\"query\",\"name\":\"order_direction\",\"schema\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"value\":{\"allOf\":[{\"enum\":[\"asc\",\"desc\"],\"type\":\"string\"}]}},\"type\":\"object\"}]}},{\"description\":\"API version of the events to return `v1` or `v2` (default: based on registered webhook endpoint versions)\",\"in\":\"query\",\"name\":\"version\",\"schema\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"value\":{\"allOf\":[{\"enum\":[\"v1\",\"v2\"],\"type\":\"string\"}]}},\"type\":\"object\"}]}},{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"in\":\"query\",\"name\":\"page_size\",\"schema\":{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"has_next_page\":{\"description\":\"Whether there are more pages available after this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"has_previous_page\":{\"description\":\"Whether there are more pages available before this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"items\":{\"description\":\"A paginated array containing the response elements\",\"items\":{\"additionalProperties\":false,\"properties\":{\"api_version\":{\"readOnly\":true,\"type\":\"string\"},\"created\":{\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"data\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"options\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"property_name_case_insensitive\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}],\"readOnly\":true,\"type\":\"null\"},\"parent\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":\"[Circular *paths./events/{event_id}.get.responses.200.content.application/json.schema.properties.data.allOf.0.properties]\",\"type\":\"object\"}],\"readOnly\":true,\"type\":\"null\"},\"root\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":\"[Circular *paths./events/{event_id}.get.responses.200.content.application/json.schema.properties.data.allOf.0.properties]\",\"type\":\"object\"}],\"readOnly\":true}},\"type\":\"object\"}],\"type\":\"null\"},\"id\":{\"example\":\"evt_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"evt_.+\",\"type\":\"string\"},\"platform_id\":{\"example\":\"pt_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pt_.+\",\"type\":\"string\"},\"type\":{\"type\":\"string\"}},\"required\":[\"created\",\"data\",\"id\",\"platform_id\",\"type\"],\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"description\":\"The current page of the results\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"page_size\":{\"description\":\"The number of results on this page. This can be different from the requested page size if the total number of results is less than the requested page size\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"total_count\":{\"description\":\"The total number of elements available in the response. This is the total number of elements available across all pages, not just the current page.\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"items\",\"page\",\"page_size\",\"total_count\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"errors\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":\"object\"},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Bad Request\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/events","segments":[{"lit":"events"}],"select":{"exist":["created_after","order_direction","page","page_size","version","x_platform_id"]},"transform":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"x_platform_id","orig":"x_platform_id","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"evt_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"id","orig":"event_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /events/{event_id}","json":"{\"operationId\":\"RetrieveEvent\",\"parameters\":[{\"in\":\"path\",\"name\":\"event_id\",\"required\":true,\"schema\":{\"example\":\"evt_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"evt_.+\",\"type\":\"string\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"api_version\":{\"readOnly\":true,\"type\":\"string\"},\"created\":{\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"data\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"options\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"property_name_case_insensitive\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}],\"readOnly\":true,\"type\":\"null\"},\"parent\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":\"[Circular *paths./events/{event_id}.get.responses.200.content.application/json.schema.properties.data.allOf.0.properties]\",\"type\":\"object\"}],\"readOnly\":true,\"type\":\"null\"},\"root\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":\"[Circular *paths./events/{event_id}.get.responses.200.content.application/json.schema.properties.data.allOf.0.properties]\",\"type\":\"object\"}],\"readOnly\":true}},\"type\":\"object\"}],\"type\":\"null\"},\"id\":{\"example\":\"evt_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"evt_.+\",\"type\":\"string\"},\"platform_id\":{\"example\":\"pt_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pt_.+\",\"type\":\"string\"},\"type\":{\"type\":\"string\"}},\"required\":[\"created\",\"data\",\"id\",\"platform_id\",\"type\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/events/{event_id}","rename":{"param":{"event_id":"id"}},"segments":[{"lit":"events"},{"var":"id"}],"select":{"exist":["id","x_platform_id"]},"transform":{"req":"`reqdata`","res":"`body.data`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"event","name__orig":"event","Name":"Event","name_":"event","name-":"event","NAME":"EVENT","index$":22}, {"active":true,"entity":"event","key$":"BasicEventFlow","kind":"basic","name":"BasicEventFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"event_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"event_ref01","srcdatavar":"event_ref01_data","suffix":"_dt0"},"match":{"id":"event01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-event_ref01"}}],"index$":1}]}, 'Event')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let event_ref01_data = Object.values(setup.data.existing.event)[0] as any

    // LIST
    const event_ref01_ent = client.Event()
    const event_ref01_match: any = {}

    const event_ref01_list = (await event_ref01_ent.list(event_ref01_match)).map((e: any) => e.data())


    // LOAD
    const event_ref01_match_dt0: any = {}
    event_ref01_match_dt0.id = event_ref01_data.id
    const event_ref01_data_dt0 = (await event_ref01_ent.load(event_ref01_match_dt0)).data()
    assert(event_ref01_data_dt0.id === event_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/event/EventTestData.json')

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
    ['event01','event02','event03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_EVENT_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_EVENT_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_EVENT_ENTID']
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
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
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
  
