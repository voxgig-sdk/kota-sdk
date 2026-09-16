
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


describe('EmployeeHealthInsuranceOfferResponsePagedListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.EmployeeHealthInsuranceOfferResponsePagedList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"coverage_level","req":true,"short":"Details about the coverage level for the offer.","type":"`$ANY`","index$":0},{"active":true,"name":"employee_id","req":true,"short":"The Id of the employee for which the offer is available","type":"`$STRING`","index$":1},{"active":true,"name":"employer_id","req":true,"short":"The Id of the employer for which the offer is available","type":"`$STRING`","index$":2},{"active":true,"name":"external_customer_id","req":false,"short":"A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.","type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":3},{"active":true,"name":"id","req":true,"short":"Unique identifier for offer","type":"`$STRING`","index$":4},{"active":true,"name":"object","readOnly":true,"req":false,"short":"The object type","type":"`$STRING`","index$":5},{"active":true,"name":"required_action","req":false,"short":"Required action to progress the offer, if any.","type":"`$NULL`","index$":6},{"active":true,"name":"status","req":true,"short":"Current status of offer","type":"`$ANY`","index$":7}],"id":{"field":"id","name":"id"},"name":"employee_health_insurance_offer_response_paged_list","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"x_platform_id","orig":"x_platform_id","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"employee_id","orig":"employee_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /employees/{employee_id}/health_insurance/offers","json":"{\"operationId\":\"ListEmployeeHealthInsuranceOffers\",\"parameters\":[{\"in\":\"path\",\"name\":\"employee_id\",\"required\":true,\"schema\":{\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"}},{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"in\":\"query\",\"name\":\"page_size\",\"schema\":{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"has_next_page\":{\"description\":\"Whether there are more pages available after this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"has_previous_page\":{\"description\":\"Whether there are more pages available before this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"items\":{\"description\":\"A paginated array containing the response elements\",\"items\":{\"additionalProperties\":false,\"properties\":{\"coverage_level\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"documents\":{\"description\":\"Documents related to the health insurance plan, these documents may change at renewal, this includes the documents like `Insurance Product Information Document`, `Hospital Lists`, `Table of Cover` etc\",\"items\":{\"additionalProperties\":false,\"properties\":{\"link\":{\"description\":\"Health Insurance Document Link (can be a link to a website or a file path)\",\"type\":\"string\"},\"title\":{\"description\":\"Health Insurance Document Title\",\"type\":\"string\"}},\"required\":[\"link\",\"title\"],\"type\":\"object\"},\"type\":\"array\"},\"plan_currency\":{\"allOf\":[{\"enum\":[\"eur\",\"aed\",\"afn\",\"xcd\",\"all\",\"amd\",\"aoa\",\"ars\",\"usd\",\"aud\",\"awg\",\"azn\",\"bam\",\"bbd\",\"bdt\",\"xof\",\"bgn\",\"bhd\",\"bif\",\"bmd\",\"bnd\",\"bob\",\"bov\",\"brl\",\"bsd\",\"inr\",\"btn\",\"nok\",\"bwp\",\"byn\",\"bzd\",\"cad\",\"xaf\",\"cdf\",\"chf\",\"che\",\"chw\",\"nzd\",\"clp\",\"clf\",\"cny\",\"cop\",\"cou\",\"crc\",\"cup\",\"cuc\",\"cve\",\"ang\",\"czk\",\"djf\",\"dkk\",\"dop\",\"dzd\",\"egp\",\"mad\",\"ern\",\"etb\",\"fjd\",\"fkp\",\"mdl\",\"gbp\",\"gel\",\"ghs\",\"gip\",\"gmd\",\"gnf\",\"gtq\",\"gyd\",\"hkd\",\"hnl\",\"hrk\",\"htg\",\"huf\",\"idr\",\"xdr\",\"ils\",\"iqd\",\"irr\",\"isk\",\"jmd\",\"jod\",\"jpy\",\"kes\",\"kgs\",\"khr\",\"kmf\",\"kpw\",\"krw\",\"kwd\",\"kyd\",\"kzt\",\"lak\",\"lbp\",\"lkr\",\"lrd\",\"lsl\",\"zar\",\"lyd\",\"mga\",\"mkd\",\"mmk\",\"mnt\",\"mop\",\"mru\",\"mur\",\"mvr\",\"mwk\",\"mxn\",\"mxv\",\"myr\",\"mzn\",\"nad\",\"xpf\",\"ngn\",\"nio\",\"npr\",\"omr\",\"pab\",\"pen\",\"pgk\",\"php\",\"pkr\",\"pln\",\"pyg\",\"qar\",\"ron\",\"rsd\",\"rub\",\"rwf\",\"sar\",\"sbd\",\"scr\",\"sdg\",\"sek\",\"sgd\",\"shp\",\"sll\",\"sos\",\"srd\",\"ssp\",\"stn\",\"svc\",\"xsu\",\"syp\",\"twd\",\"szl\",\"thb\",\"tjs\",\"tmt\",\"tnd\",\"top\",\"try\",\"ttd\",\"tzs\",\"uah\",\"ugx\",\"usn\",\"uyu\",\"uyi\",\"uyw\",\"uzs\",\"ves\",\"vnd\",\"vuv\",\"wst\",\"yer\",\"xua\",\"zmw\",\"zwl\"],\"type\":\"string\"}],\"description\":\"Currency code of the health insurance plan\"},\"plan_id\":{\"description\":\"Unique identifier for the health insurance plan\",\"example\":\"pl_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pl_.+\",\"type\":\"string\"},\"plan_name\":{\"description\":\"Name of the health insurance plan\",\"type\":\"string\"},\"provider_employer_platform_url\":{\"description\":\"URL to the health insurance provider's website for Employer Management\",\"type\":[\"null\",\"string\"]},\"provider_logo_url\":{\"description\":\"Logo URL of the health insurance provider\",\"type\":\"string\"},\"provider_name\":{\"description\":\"Name of the health insurance provider\",\"type\":\"string\"},\"provider_support_phone\":{\"description\":\"Support phone number to the health insurance provider's website for Employer Management\",\"type\":[\"null\",\"string\"]}},\"required\":[\"documents\",\"plan_currency\",\"plan_id\",\"plan_name\",\"provider_logo_url\",\"provider_name\"],\"type\":\"object\"}],\"description\":\"Details about the coverage level for the offer. Only a single level of cover is available for a specific employee!\"},\"employee_id\":{\"description\":\"The Id of the employee for which the offer is available\",\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"},\"employer_id\":{\"description\":\"The Id of the employer for which the offer is available\",\"example\":\"er_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"er_.+\",\"type\":\"string\"},\"external_customer_id\":{\"description\":\"A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. the company using the EoR service) for which the employee is employed. This ID groups employees under this Customer, enabling the aggregation of contribution reporting and other values per Customer rather than per legal entity. This parameter is only available to EoR platforms.\",\"type\":[\"null\",\"string\"]},\"id\":{\"description\":\"Unique identifier for offer\",\"example\":\"eeho_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"eeho_.+\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"required_action\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"code\":{\"description\":\"Identified the type of action required, not unique across health insurance providers\",\"type\":\"string\"},\"due_at\":{\"description\":\"Date and time by which the action is due, if this is not completed then the policy will not be issued.\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"reason\":{\"description\":\"Concise reason for the required action\",\"type\":\"string\"},\"reason_description\":{\"description\":\"Description for the required action\",\"type\":\"string\"}},\"required\":[\"code\",\"due_at\",\"reason\",\"reason_description\"],\"type\":\"object\"}],\"description\":\"Required action to progress the offer, if any. Set only when `status` is `action_required`.\",\"type\":\"null\"},\"status\":{\"allOf\":[{\"enum\":[\"action_required\",\"not_undertaken\",\"accepted\"],\"type\":\"string\"}],\"description\":\"Current status of offer\"}},\"required\":[\"coverage_level\",\"employee_id\",\"employer_id\",\"id\",\"status\"],\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"description\":\"The current page of the results\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"page_size\":{\"description\":\"The number of results on this page. This can be different from the requested page size if the total number of results is less than the requested page size\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"total_count\":{\"description\":\"The total number of elements available in the response. This is the total number of elements available across all pages, not just the current page.\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"items\",\"page\",\"page_size\",\"total_count\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/employees/{employee_id}/health_insurance/offers","segments":[{"lit":"employees"},{"var":"employee_id"},{"lit":"health_insurance"},{"lit":"offers"}],"select":{"exist":["employee_id","page","page_size","x_platform_id"]},"transform":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["employee"]]},"key$":"employee_health_insurance_offer_response_paged_list","name__orig":"employee_health_insurance_offer_response_paged_list","Name":"EmployeeHealthInsuranceOfferResponsePagedList","name_":"employee_health_insurance_offer_response_paged_list","name-":"employee-health-insurance-offer-response-paged-list","NAME":"EMPLOYEE_HEALTH_INSURANCE_OFFER_RESPONSE_PAGED_LIST","index$":12}, {"active":true,"entity":"employee_health_insurance_offer_response_paged_list","key$":"BasicEmployeeHealthInsuranceOfferResponsePagedListFlow","kind":"basic","name":"BasicEmployeeHealthInsuranceOfferResponsePagedListFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"employee_id":"employee01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"employee_health_insurance_offer_response_paged_list_ref01"}}],"index$":0}]}, 'EmployeeHealthInsuranceOfferResponsePagedList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let employee_health_insurance_offer_response_paged_list_ref01_data = Object.values(setup.data.existing.employee_health_insurance_offer_response_paged_list)[0]

    // LIST
    const employee_health_insurance_offer_response_paged_list_ref01_ent = client.EmployeeHealthInsuranceOfferResponsePagedList()
    const employee_health_insurance_offer_response_paged_list_ref01_match = {}
    employee_health_insurance_offer_response_paged_list_ref01_match['employee_id'] = setup.idmap['employee01']

    const employee_health_insurance_offer_response_paged_list_ref01_list = (await employee_health_insurance_offer_response_paged_list_ref01_ent.list(employee_health_insurance_offer_response_paged_list_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/employee_health_insurance_offer_response_paged_list/EmployeeHealthInsuranceOfferResponsePagedListTestData.json')

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
    ['employee_health_insurance_offer_response_paged_list01','employee_health_insurance_offer_response_paged_list02','employee_health_insurance_offer_response_paged_list03','employee01','employee02','employee03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_OFFER_RESPONSE_PAGED_LIST_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_OFFER_RESPONSE_PAGED_LIST_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_EMPLOYEE_HEALTH_INSURANCE_OFFER_RESPONSE_PAGED_LIST_ENTID']
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
  
