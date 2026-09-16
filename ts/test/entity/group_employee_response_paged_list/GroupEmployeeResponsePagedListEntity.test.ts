

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


describe('GroupEmployeeResponsePagedListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.GroupEmployeeResponsePagedList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'group_employee_response_paged_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"group_employee_response_paged_list","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"x_platform_id","orig":"x_platform_id","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"id","orig":"group_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"query","name":"employee_id","orig":"employee_id","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /groups/{group_id}/employees","json":"{\"operationId\":\"ListGroupEmployees\",\"parameters\":[{\"in\":\"path\",\"name\":\"group_id\",\"required\":true,\"schema\":{\"example\":\"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"gr_.+\",\"type\":\"string\"}},{\"description\":\"Filter by employee ID.\",\"in\":\"query\",\"name\":\"employee_id\",\"schema\":{\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"}},{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"in\":\"query\",\"name\":\"page_size\",\"schema\":{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"has_next_page\":{\"description\":\"Whether there are more pages available after this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"has_previous_page\":{\"description\":\"Whether there are more pages available before this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"items\":{\"description\":\"A paginated array containing the response elements\",\"items\":{\"additionalProperties\":false,\"properties\":{\"desired_policy_start_date\":{\"description\":\"The desired date for the employee's policy to start. This date is not guaranteed to be honored by the insurance provider and may be adjusted based on provider-specific rules and requirements.\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":[\"null\",\"string\"]},\"eligibility_status\":{\"allOf\":[{\"enum\":[\"pending\",\"eligible\",\"ineligible\"],\"type\":\"string\"}],\"description\":\"Eligibility status for the employee in this group. `Pending` = no eligibility check performed (no group policy), `Eligible` = employee meets provider's eligibility criteria, `Ineligible` = employee does not meet eligibility criteria (e.g., age restrictions).\"},\"enrolment_date\":{\"description\":\"The date on which the employee agreed to enrol into the group's policies. This date may be used by some insurance providers to determine the policy start date.\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":[\"null\",\"string\"]},\"enrolment_status\":{\"allOf\":[{\"enum\":[\"enrolled\",\"enrolling\",\"opted_out\",\"cancelled\",\"enrolment_available\",\"not_available\"],\"type\":\"string\"}],\"description\":\"Enrolment status for the employee in this group. Derived from policy and enrolment intent statuses.\"},\"enrolments\":{\"description\":\"List of enrolments associated with the employee in this group.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"id\":{\"description\":\"Unique identifier for the enrolment.\",\"example\":\"ei_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ei_.+\",\"type\":\"string\"}},\"required\":[\"id\"],\"type\":\"object\"},\"type\":\"array\"},\"group_id\":{\"description\":\"Unique identifier for the group.\",\"example\":\"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"gr_.+\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the employee.\",\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"policies\":{\"description\":\"List of policies associated with the employee in this group.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"id\":{\"description\":\"Unique identifier for the policy.\",\"example\":\"p_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"p_.+\",\"type\":\"string\"}},\"required\":[\"id\"],\"type\":\"object\"},\"type\":\"array\"},\"scheduled_group_transitions\":{\"description\":\"List of scheduled group transitions for the employee. Only includes pending transitions.\",\"items\":{\"additionalProperties\":false,\"properties\":{\"new_group_id\":{\"description\":\"Unique identifier for the group the employee will be moved to\",\"example\":\"gr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"gr_.+\",\"type\":\"string\"},\"scheduled_date\":{\"description\":\"The date when the employee will be moved to the new group\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"new_group_id\",\"scheduled_date\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"eligibility_status\",\"enrolment_status\",\"enrolments\",\"group_id\",\"id\",\"policies\",\"scheduled_group_transitions\"],\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"description\":\"The current page of the results\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"page_size\":{\"description\":\"The number of results on this page. This can be different from the requested page size if the total number of results is less than the requested page size\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"total_count\":{\"description\":\"The total number of elements available in the response. This is the total number of elements available across all pages, not just the current page.\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"items\",\"page\",\"page_size\",\"total_count\"],\"type\":\"object\"}}},\"description\":\"OK\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/groups/{group_id}/employees","rename":{"param":{"group_id":"id"}},"segments":[{"lit":"groups"},{"var":"id"},{"lit":"employees"}],"select":{"$action":"employees","exist":["employee_id","id","page","page_size","x_platform_id"]},"transform":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"group_employee_response_paged_list","name__orig":"group_employee_response_paged_list","Name":"GroupEmployeeResponsePagedList","name_":"group_employee_response_paged_list","name-":"group-employee-response-paged-list","NAME":"GROUP_EMPLOYEE_RESPONSE_PAGED_LIST","index$":25}, {"active":true,"entity":"group_employee_response_paged_list","key$":"BasicGroupEmployeeResponsePagedListFlow","kind":"basic","name":"BasicGroupEmployeeResponsePagedListFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"group_id":"group01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"group_employee_response_paged_list_ref01"}}],"index$":0}]}, 'GroupEmployeeResponsePagedList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let group_employee_response_paged_list_ref01_data = Object.values(setup.data.existing.group_employee_response_paged_list)[0] as any

    // LIST
    const group_employee_response_paged_list_ref01_ent = client.GroupEmployeeResponsePagedList()
    const group_employee_response_paged_list_ref01_match: any = {}
    group_employee_response_paged_list_ref01_match['group_id'] = setup.idmap['group01']

    const group_employee_response_paged_list_ref01_list = (await group_employee_response_paged_list_ref01_ent.list(group_employee_response_paged_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/group_employee_response_paged_list/GroupEmployeeResponsePagedListTestData.json')

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
    ['group_employee_response_paged_list01','group_employee_response_paged_list02','group_employee_response_paged_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_GROUP_EMPLOYEE_RESPONSE_PAGED_LIST_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_GROUP_EMPLOYEE_RESPONSE_PAGED_LIST_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_GROUP_EMPLOYEE_RESPONSE_PAGED_LIST_ENTID']
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
  
