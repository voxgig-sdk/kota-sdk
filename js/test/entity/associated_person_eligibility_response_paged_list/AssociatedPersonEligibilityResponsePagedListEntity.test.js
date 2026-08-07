
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { KotaSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('AssociatedPersonEligibilityResponsePagedListEntity', async () => {

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.AssociatedPersonEligibilityResponsePagedList()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let associated_person_eligibility_response_paged_list_ref01_data = Object.values(setup.data.existing.associated_person_eligibility_response_paged_list)[0]

    // LIST
    const associated_person_eligibility_response_paged_list_ref01_ent = client.AssociatedPersonEligibilityResponsePagedList()
    const associated_person_eligibility_response_paged_list_ref01_match = {}
    associated_person_eligibility_response_paged_list_ref01_match['dependents_management_intent_id'] = setup.idmap['dependents_management_intent01']

    const associated_person_eligibility_response_paged_list_ref01_list = await associated_person_eligibility_response_paged_list_ref01_ent.list(associated_person_eligibility_response_paged_list_ref01_match)


  })
})



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
    'KOTA_APIKEY': 'NONE',
  })

  idmap = env['KOTA_TEST_ASSOCIATED_PERSON_ELIGIBILITY_RESPONSE_PAGED_LIST_ENTID']

  if ('TRUE' === env.KOTA_TEST_LIVE) {
    client = new KotaSDK(merge([
      {
        apikey: env.KOTA_APIKEY,
      },
      extra
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
    now: Date.now(),
  }

  return setup
}
  
