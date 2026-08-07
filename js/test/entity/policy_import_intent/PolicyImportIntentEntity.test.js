
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


describe('PolicyImportIntentEntity', async () => {

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.PolicyImportIntent()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const policy_import_intent_ref01_ent = client.PolicyImportIntent()
    let policy_import_intent_ref01_data = setup.data.new.policy_import_intent['policy_import_intent_ref01']

    policy_import_intent_ref01_data = await policy_import_intent_ref01_ent.create(policy_import_intent_ref01_data)
    assert(null != policy_import_intent_ref01_data.id)


    // LIST
    const policy_import_intent_ref01_match = {}

    const policy_import_intent_ref01_list = await policy_import_intent_ref01_ent.list(policy_import_intent_ref01_match)

    assert(!isempty(select(policy_import_intent_ref01_list, { id: policy_import_intent_ref01_data.id })))


    // LOAD
    const policy_import_intent_ref01_match_dt0 = {}
    policy_import_intent_ref01_match_dt0.id = policy_import_intent_ref01_data.id
    const policy_import_intent_ref01_data_dt0 = await policy_import_intent_ref01_ent.load(policy_import_intent_ref01_match_dt0)
    assert(policy_import_intent_ref01_data_dt0.id === policy_import_intent_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/policy_import_intent/PolicyImportIntentTestData.json')

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
    ['policy_import_intent01','policy_import_intent02','policy_import_intent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_POLICY_IMPORT_INTENT_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': 'NONE',
  })

  idmap = env['KOTA_TEST_POLICY_IMPORT_INTENT_ENTID']

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
  
