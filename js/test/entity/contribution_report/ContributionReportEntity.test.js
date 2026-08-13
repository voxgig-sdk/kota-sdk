
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


describe('ContributionReportEntity', async () => {

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.ContributionReport()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const contribution_report_ref01_ent = client.ContributionReport()
    let contribution_report_ref01_data = setup.data.new.contribution_report['contribution_report_ref01']
    contribution_report_ref01_data['contribution_report_id'] = setup.idmap['contribution_report01']

    contribution_report_ref01_data = (await contribution_report_ref01_ent.create(contribution_report_ref01_data)).data()
    assert(null != contribution_report_ref01_data.id)


    // LIST
    const contribution_report_ref01_match = {}

    const contribution_report_ref01_list = (await contribution_report_ref01_ent.list(contribution_report_ref01_match)).map((e) => e.data())

    assert(!isempty(select(contribution_report_ref01_list, { id: contribution_report_ref01_data.id })))


    // LOAD
    const contribution_report_ref01_match_dt0 = {}
    contribution_report_ref01_match_dt0.id = contribution_report_ref01_data.id
    const contribution_report_ref01_data_dt0 = (await contribution_report_ref01_ent.load(contribution_report_ref01_match_dt0)).data()
    assert(contribution_report_ref01_data_dt0.id === contribution_report_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/contribution_report/ContributionReportTestData.json')

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
    ['contribution_report01','contribution_report02','contribution_report03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_CONTRIBUTION_REPORT_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': 'NONE',
  })

  idmap = env['KOTA_TEST_CONTRIBUTION_REPORT_ENTID']

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
  
