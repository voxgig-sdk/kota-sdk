
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


describe('AssociatedPersonEligibilityResponsePagedListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.AssociatedPersonEligibilityResponsePagedList()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == config.feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = KotaSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.AssociatedPersonEligibilityResponsePagedList().list({"dependents_management_intent_id":1}),
      (err) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"associated_person_id":{"a":true,"h":"Associated Person Id","n":"associated_person_id","r":true,"sh":"The associated person ID.","t":"`$STRING`","key$":"associated_person_id","index$":0},"date_of_birth":{"a":true,"fo":"date","h":"Date Of Birth","n":"date_of_birth","r":true,"sh":"Date of birth of the associated person.","t":"`$STRING`","key$":"date_of_birth","index$":1},"eligibility_status":{"a":true,"h":"Eligibility Status","n":"eligibility_status","r":true,"sh":"Eligibility status for the policy/plan.","t":"`$STRING`","key$":"eligibility_status","index$":2},"first_name":{"a":true,"h":"First Name","n":"first_name","r":true,"sh":"First name of the associated person.","t":"`$STRING`","key$":"first_name","index$":3},"ineligibility_reason":{"a":true,"h":"Ineligibility Reason","n":"ineligibility_reason","r":false,"sh":"Reason for ineligibility if status is ineligible.","t":["`$ONE`",["`$NULL`","`$STRING`"]],"key$":"ineligibility_reason","index$":4},"last_name":{"a":true,"h":"Last Name","n":"last_name","r":true,"sh":"Last name of the associated person.","t":"`$STRING`","key$":"last_name","index$":5},"object":{"a":true,"h":"Object","n":"object","r":false,"ro":true,"sh":"The object type","t":"`$STRING`","key$":"object","index$":6},"relationship":{"a":true,"h":"Relationship","n":"relationship","r":true,"sh":"Relationship type to the employee.","t":"`$STRING`","key$":"relationship","index$":7},"sex_at_birth":{"a":true,"h":"Sex At Birth","n":"sex_at_birth","r":true,"sh":"Sex at birth of the associated person.","t":"`$STRING`","key$":"sex_at_birth","index$":8}},"name":"associated_person_eligibility_response_paged_list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility","source":"openapi3","version":2},"g":{"header":[{"a":true,"k":"header","n":"x_platform_id","or":"X-Platform-Id","r":false,"t":"`$STRING`","index$":0}],"params":[{"a":true,"ex":"dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a","k":"param","n":"dependents_management_intent_id","or":"dependents_management_intent_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility","q":{"exist":["dependents_management_intent_id"]},"r":{},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"dependents_management_intents"},{"var":"dependents_management_intent_id"},{"lit":"associated_persons_eligibility"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.dependents_management_intent"]]},"key$":"associated_person_eligibility_response_paged_list","name__orig":"associated_person_eligibility_response_paged_list","Name":"AssociatedPersonEligibilityResponsePagedList","name_":"associated_person_eligibility_response_paged_list","name-":"associated-person-eligibility-response-paged-list","NAME":"ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST","index$":1}, {"active":true,"entity":"associated_person_eligibility_response_paged_list","key$":"BasicAssociatedPersonEligibilityResponsePagedListFlow","kind":"basic","name":"BasicAssociatedPersonEligibilityResponsePagedListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"dependents_management_intent_id":"dependents_management_intent01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"associated_person_eligibility_response_paged_list_ref01"}}],"index$":0}]}, 'AssociatedPersonEligibilityResponsePagedList', {"GET /dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility":{"protocol":"http","parameters":[{"name":"dependents_management_intent_id","in":"path","required":true,"schema":{"pattern":"dmi_.+","type":"string","example":"dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a"},"index$":0},{"name":"page","in":"query","description":"The page of results to return. Defaults to 1 if not provided.","schema":{"type":"integer","description":"The page of results to return. Defaults to 1 if not provided.","format":"int32"},"index$":1},{"name":"page_size","in":"query","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","schema":{"type":"integer","description":"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.","format":"int32"},"index$":2},{"name":"X-Platform-Id","in":"header","description":"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.","schema":{"type":"string"},"index$":3}]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let associated_person_eligibility_response_paged_list_ref01_data = Object.values(setup.data.existing.associated_person_eligibility_response_paged_list)[0]

    // LIST
    const associated_person_eligibility_response_paged_list_ref01_ent = client.AssociatedPersonEligibilityResponsePagedList()
    const associated_person_eligibility_response_paged_list_ref01_match = {}
    associated_person_eligibility_response_paged_list_ref01_match['dependents_management_intent_id'] = setup.idmap['dependents_management_intent01']

    const associated_person_eligibility_response_paged_list_ref01_list = (await associated_person_eligibility_response_paged_list_ref01_ent.list(associated_person_eligibility_response_paged_list_ref01_match)).map((e) => e.data())


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
      '../../../../.sdk/test/entity/associated_person_eligibility_response_paged_list/AssociatedPersonEligibilityResponsePagedListTestData.json')

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
    ['associated_person_eligibility_response_paged_list01','associated_person_eligibility_response_paged_list02','associated_person_eligibility_response_paged_list03','dependents_management_intent01','dependents_management_intent02','dependents_management_intent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID']
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
  
