
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


describe('EmployerHealthInsurancePolicyEntity', async () => {

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.EmployerHealthInsurancePolicy()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let employer_health_insurance_policy_ref01_data = Object.values(setup.data.existing.employer_health_insurance_policy)[0]

    // LOAD
    const employer_health_insurance_policy_ref01_ent = client.EmployerHealthInsurancePolicy()
    const employer_health_insurance_policy_ref01_match_dt0 = {}
    employer_health_insurance_policy_ref01_match_dt0.id = employer_health_insurance_policy_ref01_data.id
    const employer_health_insurance_policy_ref01_data_dt0 = await employer_health_insurance_policy_ref01_ent.load(employer_health_insurance_policy_ref01_match_dt0)
    assert(employer_health_insurance_policy_ref01_data_dt0.id === employer_health_insurance_policy_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/employer_health_insurance_policy/EmployerHealthInsurancePolicyTestData.json')

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
    ['employer_health_insurance_policy01','employer_health_insurance_policy02','employer_health_insurance_policy03','employer01','employer02','employer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': 'NONE',
  })

  idmap = env['KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_ENTID']

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
  
