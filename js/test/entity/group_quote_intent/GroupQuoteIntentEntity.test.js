
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


describe('GroupQuoteIntentEntity', async () => {

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.GroupQuoteIntent()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const group_quote_intent_ref01_ent = client.GroupQuoteIntent()
    let group_quote_intent_ref01_data = setup.data.new.group_quote_intent['group_quote_intent_ref01']

    group_quote_intent_ref01_data = (await group_quote_intent_ref01_ent.create(group_quote_intent_ref01_data)).data()
    assert(null != group_quote_intent_ref01_data.id)


    // LIST
    const group_quote_intent_ref01_match = {}

    const group_quote_intent_ref01_list = (await group_quote_intent_ref01_ent.list(group_quote_intent_ref01_match)).map((e) => e.data())

    assert(!isempty(select(group_quote_intent_ref01_list, { id: group_quote_intent_ref01_data.id })))


    // LOAD
    const group_quote_intent_ref01_match_dt0 = {}
    group_quote_intent_ref01_match_dt0.id = group_quote_intent_ref01_data.id
    const group_quote_intent_ref01_data_dt0 = (await group_quote_intent_ref01_ent.load(group_quote_intent_ref01_match_dt0)).data()
    assert(group_quote_intent_ref01_data_dt0.id === group_quote_intent_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/group_quote_intent/GroupQuoteIntentTestData.json')

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
    ['group_quote_intent01','group_quote_intent02','group_quote_intent03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_GROUP_QUOTE_INTENT_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': 'NONE',
  })

  idmap = env['KOTA_TEST_GROUP_QUOTE_INTENT_ENTID']

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
  
