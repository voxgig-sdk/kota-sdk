
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


describe('ContributionReportEmployeeBreakdownResponsePagedListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.ContributionReportEmployeeBreakdownResponsePagedList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"contribution_report_employee_breakdown_response_paged_list","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"x_platform_id","orig":"x_platform_id","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"id","orig":"contribution_report_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /contribution_reports/{contribution_report_id}/employee_breakdowns","json":"{\"operationId\":\"ListEmployeeBreakdownsForContributionReport\",\"parameters\":[{\"in\":\"path\",\"name\":\"contribution_report_id\",\"required\":true,\"schema\":{\"example\":\"ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ctr_.+\",\"type\":\"string\"}},{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"in\":\"query\",\"name\":\"page_size\",\"schema\":{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"has_next_page\":{\"description\":\"Whether there are more pages available after this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"has_previous_page\":{\"description\":\"Whether there are more pages available before this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"items\":{\"description\":\"A paginated array containing the response elements\",\"items\":{\"additionalProperties\":false,\"properties\":{\"contribution_report_id\":{\"description\":\"Unique identifier of the related contribution report\",\"example\":\"ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ctr_.+\",\"type\":\"string\"},\"created_at\":{\"description\":\"Date and time the breakdown was created\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"currency\":{\"allOf\":[{\"enum\":[\"eur\",\"aed\",\"afn\",\"xcd\",\"all\",\"amd\",\"aoa\",\"ars\",\"usd\",\"aud\",\"awg\",\"azn\",\"bam\",\"bbd\",\"bdt\",\"xof\",\"bgn\",\"bhd\",\"bif\",\"bmd\",\"bnd\",\"bob\",\"bov\",\"brl\",\"bsd\",\"inr\",\"btn\",\"nok\",\"bwp\",\"byn\",\"bzd\",\"cad\",\"xaf\",\"cdf\",\"chf\",\"che\",\"chw\",\"nzd\",\"clp\",\"clf\",\"cny\",\"cop\",\"cou\",\"crc\",\"cup\",\"cuc\",\"cve\",\"ang\",\"czk\",\"djf\",\"dkk\",\"dop\",\"dzd\",\"egp\",\"mad\",\"ern\",\"etb\",\"fjd\",\"fkp\",\"mdl\",\"gbp\",\"gel\",\"ghs\",\"gip\",\"gmd\",\"gnf\",\"gtq\",\"gyd\",\"hkd\",\"hnl\",\"hrk\",\"htg\",\"huf\",\"idr\",\"xdr\",\"ils\",\"iqd\",\"irr\",\"isk\",\"jmd\",\"jod\",\"jpy\",\"kes\",\"kgs\",\"khr\",\"kmf\",\"kpw\",\"krw\",\"kwd\",\"kyd\",\"kzt\",\"lak\",\"lbp\",\"lkr\",\"lrd\",\"lsl\",\"zar\",\"lyd\",\"mga\",\"mkd\",\"mmk\",\"mnt\",\"mop\",\"mru\",\"mur\",\"mvr\",\"mwk\",\"mxn\",\"mxv\",\"myr\",\"mzn\",\"nad\",\"xpf\",\"ngn\",\"nio\",\"npr\",\"omr\",\"pab\",\"pen\",\"pgk\",\"php\",\"pkr\",\"pln\",\"pyg\",\"qar\",\"ron\",\"rsd\",\"rub\",\"rwf\",\"sar\",\"sbd\",\"scr\",\"sdg\",\"sek\",\"sgd\",\"shp\",\"sll\",\"sos\",\"srd\",\"ssp\",\"stn\",\"svc\",\"xsu\",\"syp\",\"twd\",\"szl\",\"thb\",\"tjs\",\"tmt\",\"tnd\",\"top\",\"try\",\"ttd\",\"tzs\",\"uah\",\"ugx\",\"usn\",\"uyu\",\"uyi\",\"uyw\",\"uzs\",\"ves\",\"vnd\",\"vuv\",\"wst\",\"yer\",\"xua\",\"zmw\",\"zwl\"],\"type\":\"string\"}],\"description\":\"The currency in which all the amounts in this breakdown are presented (e.g. `eur`)\"},\"employee_id\":{\"description\":\"Unique identifier of the employee for which the breakdown is created\",\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"},\"employer_id\":{\"description\":\"Unique identifier of the employer for which the breakdown is created\",\"example\":\"er_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"er_.+\",\"type\":\"string\"},\"external_customer_id\":{\"description\":\"Unique identifier of the customer for which the breakdown is created. This identifier is assigned by the Employer of Record (EoR) platform to the Customer (i.e. the company using the EoR service) for which the employee is employed. This parameter is only available to EoR platforms.\",\"type\":[\"null\",\"string\"]},\"finalized_at\":{\"description\":\"Date and time the breakdown was finalized, if applicable\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":[\"null\",\"string\"]},\"health_insurance\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"employee_contributions\":{\"description\":\"Employee health insurance contributions\",\"items\":{\"additionalProperties\":false,\"properties\":{\"adjustment\":{\"description\":\"Indicates if this contribution is an adjustment to a previous charge\",\"example\":true,\"type\":\"boolean\"},\"adjustment_for\":{\"description\":\"Unique identifier of the original contribution being adjusted, if applicable\",\"example\":\"ct_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ct_.+\",\"type\":[\"null\",\"string\"]},\"amount\":{\"description\":\"The monetary value of the contribution\",\"example\":123.45,\"format\":\"double\",\"type\":\"number\"},\"category\":{\"allOf\":[{\"enum\":[\"gross_premium\",\"tax\",\"tax_relief\"],\"type\":\"string\"}],\"description\":\"Category of the contribution\"},\"cover_period\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"from_date\":{\"description\":\"Start date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"to_date\":{\"description\":\"End date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"from_date\",\"to_date\"],\"type\":\"object\"}],\"description\":\"The health insurance period the contribution applies to\"},\"employee_policy_id\":{\"deprecated\":true,\"description\":\"DEPRECATED: Use `policy_id` instead. The employee health insurance policy the contribution applies to. Prefixed with `eehp_`.\",\"example\":\"eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"eehp_.+\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the contribution entry\",\"example\":\"ct_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ct_.+\",\"type\":\"string\"},\"member_type\":{\"allOf\":[{\"enum\":[\"policyholder\",\"partner_dependant\",\"child_dependant\"],\"type\":\"string\"}],\"description\":\"Type of member for the contribution\"},\"note\":{\"description\":\"Optional field for additional context, e.g. if the amount is pro-rated or backdated\",\"type\":[\"null\",\"string\"]},\"policy_id\":{\"description\":\"The policy the contribution applies to. Prefixed with `p_`.\",\"example\":\"p_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"p_.+\",\"type\":\"string\"},\"reporting_month\":{\"description\":\"The primary month for which the contribution is relevant, helping to align contributions with standard monthly reporting cycles. It allows for consistent monthly categorisation in systems that require calendar-based reporting. Provided in `YYYY-MM-DD` format (with the day set to `01` as a convention), only the year and month are relevant.\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"type\":{\"allOf\":[{\"enum\":[\"recurring\",\"one_off\"],\"type\":\"string\"}],\"description\":\"Type of the contribution\"}},\"required\":[\"adjustment\",\"amount\",\"category\",\"cover_period\",\"employee_policy_id\",\"id\",\"member_type\",\"policy_id\",\"reporting_month\",\"type\"],\"type\":\"object\"},\"type\":\"array\"},\"employer_contributions\":{\"description\":\"Employer health insurance contributions\",\"items\":{\"additionalProperties\":false,\"properties\":{\"adjustment\":{\"description\":\"Indicates if this contribution is an adjustment to a previous charge\",\"example\":true,\"type\":\"boolean\"},\"adjustment_for\":{\"description\":\"Unique identifier of the original contribution being adjusted, if applicable\",\"example\":\"ct_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ct_.+\",\"type\":[\"null\",\"string\"]},\"amount\":{\"description\":\"The monetary value of the contribution\",\"example\":123.45,\"format\":\"double\",\"type\":\"number\"},\"category\":{\"allOf\":[{\"enum\":[\"gross_premium\",\"tax\",\"tax_relief\"],\"type\":\"string\"}],\"description\":\"Category of the contribution\"},\"cover_period\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"from_date\":{\"description\":\"Start date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"to_date\":{\"description\":\"End date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"from_date\",\"to_date\"],\"type\":\"object\"}],\"description\":\"The health insurance period the contribution applies to\"},\"employee_policy_id\":{\"deprecated\":true,\"description\":\"DEPRECATED: Use `policy_id` instead. The employee health insurance policy the contribution applies to. Prefixed with `eehp_`.\",\"example\":\"eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"eehp_.+\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the contribution entry\",\"example\":\"ct_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ct_.+\",\"type\":\"string\"},\"member_type\":{\"allOf\":[{\"enum\":[\"policyholder\",\"partner_dependant\",\"child_dependant\"],\"type\":\"string\"}],\"description\":\"Type of member for the contribution\"},\"note\":{\"description\":\"Optional field for additional context, e.g. if the amount is pro-rated or backdated\",\"type\":[\"null\",\"string\"]},\"policy_id\":{\"description\":\"The policy the contribution applies to. Prefixed with `p_`.\",\"example\":\"p_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"p_.+\",\"type\":\"string\"},\"reporting_month\":{\"description\":\"The primary month for which the contribution is relevant, helping to align contributions with standard monthly reporting cycles. It allows for consistent monthly categorisation in systems that require calendar-based reporting. Provided in `YYYY-MM-DD` format (with the day set to `01` as a convention), only the year and month are relevant.\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"type\":{\"allOf\":[{\"enum\":[\"recurring\",\"one_off\"],\"type\":\"string\"}],\"description\":\"Type of the contribution\"}},\"required\":[\"adjustment\",\"amount\",\"category\",\"cover_period\",\"employee_policy_id\",\"id\",\"member_type\",\"policy_id\",\"reporting_month\",\"type\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"employee_contributions\",\"employer_contributions\"],\"type\":\"object\"}],\"description\":\"Health insurance contribution details\"},\"last_updated_at\":{\"description\":\"Date and time of the last update to the breakdown\",\"example\":\"2024-12-01T00:00:00Z\",\"format\":\"date-time\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"period\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"from_date\":{\"description\":\"Start date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"to_date\":{\"description\":\"End date of the period\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"}},\"required\":[\"from_date\",\"to_date\"],\"type\":\"object\"}],\"description\":\"Period covered by the employee breakdown\"},\"status\":{\"allOf\":[{\"enum\":[\"open\",\"finalized\"],\"type\":\"string\"}],\"description\":\"Current status of the breakdown\"}},\"required\":[\"contribution_report_id\",\"created_at\",\"currency\",\"employee_id\",\"employer_id\",\"health_insurance\",\"last_updated_at\",\"period\",\"status\"],\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"description\":\"The current page of the results\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"page_size\":{\"description\":\"The number of results on this page. This can be different from the requested page size if the total number of results is less than the requested page size\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"total_count\":{\"description\":\"The total number of elements available in the response. This is the total number of elements available across all pages, not just the current page.\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"items\",\"page\",\"page_size\",\"total_count\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/contribution_reports/{contribution_report_id}/employee_breakdowns","rename":{"param":{"contribution_report_id":"id"}},"segments":[{"lit":"contribution_reports"},{"var":"id"},{"lit":"employee_breakdowns"}],"select":{"$action":"employee_breakdowns","exist":["id","page","page_size","x_platform_id"]},"transform":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"contribution_report_employee_breakdown_response_paged_list","name__orig":"contribution_report_employee_breakdown_response_paged_list","Name":"ContributionReportEmployeeBreakdownResponsePagedList","name_":"contribution_report_employee_breakdown_response_paged_list","name-":"contribution-report-employee-breakdown-response-paged-list","NAME":"CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST","index$":4}, {"active":true,"entity":"contribution_report_employee_breakdown_response_paged_list","key$":"BasicContributionReportEmployeeBreakdownResponsePagedListFlow","kind":"basic","name":"BasicContributionReportEmployeeBreakdownResponsePagedListFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"contribution_report_id":"contribution_report01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"contribution_report_employee_breakdown_response_paged_list_ref01"}}],"index$":0}]}, 'ContributionReportEmployeeBreakdownResponsePagedList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let contribution_report_employee_breakdown_response_paged_list_ref01_data = Object.values(setup.data.existing.contribution_report_employee_breakdown_response_paged_list)[0]

    // LIST
    const contribution_report_employee_breakdown_response_paged_list_ref01_ent = client.ContributionReportEmployeeBreakdownResponsePagedList()
    const contribution_report_employee_breakdown_response_paged_list_ref01_match = {}
    contribution_report_employee_breakdown_response_paged_list_ref01_match['contribution_report_id'] = setup.idmap['contribution_report01']

    const contribution_report_employee_breakdown_response_paged_list_ref01_list = (await contribution_report_employee_breakdown_response_paged_list_ref01_ent.list(contribution_report_employee_breakdown_response_paged_list_ref01_match)).map((e) => e.data())


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/contribution_report_employee_breakdown_response_paged_list/ContributionReportEmployeeBreakdownResponsePagedListTestData.json')

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
    ['contribution_report_employee_breakdown_response_paged_list01','contribution_report_employee_breakdown_response_paged_list02','contribution_report_employee_breakdown_response_paged_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE
  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_CONTRIBUTION_REPORT_EMPLOYEE_BREAKDOWN_RESPONSE_PAGED_LIST_ENTID']
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
  
