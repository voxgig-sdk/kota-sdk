
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


describe('EnrolmentIntentEntity', async () => {

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.EnrolmentIntent()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const enrolment_intent_ref01_ent = client.EnrolmentIntent()
    let enrolment_intent_ref01_data = setup.data.new.enrolment_intent['enrolment_intent_ref01']

    enrolment_intent_ref01_data = await enrolment_intent_ref01_ent.create(enrolment_intent_ref01_data)
    assert(null != enrolment_intent_ref01_data.id)


    // LIST
    const enrolment_intent_ref01_match = {}

    const enrolment_intent_ref01_list = await enrolment_intent_ref01_ent.list(enrolment_intent_ref01_match)

    assert(!isempty(select(enrolment_intent_ref01_list, { id: enrolment_intent_ref01_data.id })))


    // UPDATE
    const enrolment_intent_ref01_data_up0 = {}
    enrolment_intent_ref01_data_up0.id = enrolment_intent_ref01_data.id

    const enrolment_intent_ref01_markdef_up0 = { name: 'employee_id', value: 'Mark01-enrolment_intent_ref01_' + setup.now }
    enrolment_intent_ref01_data_up0 [enrolment_intent_ref01_markdef_up0.name] = enrolment_intent_ref01_markdef_up0.value

    const enrolment_intent_ref01_resdata_up0 = await enrolment_intent_ref01_ent.update(enrolment_intent_ref01_data_up0)
    assert(enrolment_intent_ref01_resdata_up0.id === enrolment_intent_ref01_data_up0.id)

    assert(enrolment_intent_ref01_resdata_up0[enrolment_intent_ref01_markdef_up0.name] === enrolment_intent_ref01_markdef_up0.value)


    // LOAD
    const enrolment_intent_ref01_match_dt0 = {}
    enrolment_intent_ref01_match_dt0.id = enrolment_intent_ref01_data.id
    const enrolment_intent_ref01_data_dt0 = await enrolment_intent_ref01_ent.load(enrolment_intent_ref01_match_dt0)
    assert(enrolment_intent_ref01_data_dt0.id === enrolment_intent_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/enrolment_intent/EnrolmentIntentTestData.json')

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
    ['enrolment_intent01','enrolment_intent02','enrolment_intent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_ENROLMENT_INTENT_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': 'NONE',
  })

  idmap = env['KOTA_TEST_ENROLMENT_INTENT_ENTID']

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
  
