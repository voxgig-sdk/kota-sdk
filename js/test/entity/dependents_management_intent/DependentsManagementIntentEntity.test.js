
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


describe('DependentsManagementIntentEntity', async () => {

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.DependentsManagementIntent()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const dependents_management_intent_ref01_ent = client.DependentsManagementIntent()
    let dependents_management_intent_ref01_data = setup.data.new.dependents_management_intent['dependents_management_intent_ref01']
    dependents_management_intent_ref01_data['dependents_management_intent_id'] = setup.idmap['dependents_management_intent01']

    dependents_management_intent_ref01_data = (await dependents_management_intent_ref01_ent.create(dependents_management_intent_ref01_data)).data()
    assert(null != dependents_management_intent_ref01_data.id)


    // LOAD
    const dependents_management_intent_ref01_match_dt0 = {}
    dependents_management_intent_ref01_match_dt0.id = dependents_management_intent_ref01_data.id
    const dependents_management_intent_ref01_data_dt0 = (await dependents_management_intent_ref01_ent.load(dependents_management_intent_ref01_match_dt0)).data()
    assert(dependents_management_intent_ref01_data_dt0.id === dependents_management_intent_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/dependents_management_intent/DependentsManagementIntentTestData.json')

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
    ['dependents_management_intent01','dependents_management_intent02','dependents_management_intent03','enrolment_intent01','enrolment_intent02','enrolment_intent03','policy01','policy02','policy03','policy_amendment_intent01','policy_amendment_intent02','policy_amendment_intent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_DEPENDENTS_MANAGEMENT_INTENT_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': 'NONE',
  })

  idmap = env['KOTA_TEST_DEPENDENTS_MANAGEMENT_INTENT_ENTID']

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
  
