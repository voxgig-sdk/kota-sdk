
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


describe('EmployerEntity', async () => {

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.Employer()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const employer_ref01_ent = client.Employer()
    let employer_ref01_data = setup.data.new.employer['employer_ref01']

    employer_ref01_data = await employer_ref01_ent.create(employer_ref01_data)
    assert(null != employer_ref01_data.id)


    // LIST
    const employer_ref01_match = {}

    const employer_ref01_list = await employer_ref01_ent.list(employer_ref01_match)

    assert(!isempty(select(employer_ref01_list, { id: employer_ref01_data.id })))


    // UPDATE
    const employer_ref01_data_up0 = {}
    employer_ref01_data_up0.id = employer_ref01_data.id

    const employer_ref01_markdef_up0 = { name: 'legal_name', value: 'Mark01-employer_ref01_' + setup.now }
    employer_ref01_data_up0 [employer_ref01_markdef_up0.name] = employer_ref01_markdef_up0.value

    const employer_ref01_resdata_up0 = await employer_ref01_ent.update(employer_ref01_data_up0)
    assert(employer_ref01_resdata_up0.id === employer_ref01_data_up0.id)

    assert(employer_ref01_resdata_up0[employer_ref01_markdef_up0.name] === employer_ref01_markdef_up0.value)


    // LOAD
    const employer_ref01_match_dt0 = {}
    employer_ref01_match_dt0.id = employer_ref01_data.id
    const employer_ref01_data_dt0 = await employer_ref01_ent.load(employer_ref01_match_dt0)
    assert(employer_ref01_data_dt0.id === employer_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/employer/EmployerTestData.json')

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
    ['employer01','employer02','employer03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_EMPLOYER_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': 'NONE',
  })

  idmap = env['KOTA_TEST_EMPLOYER_ENTID']

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
  
