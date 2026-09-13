
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe, afterEach } = require('node:test')
const assert = require('node:assert')


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


describe('GroupEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.Group()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const group_ref01_ent = client.Group()
    let group_ref01_data = setup.data.new.group['group_ref01']

    group_ref01_data = (await group_ref01_ent.create(group_ref01_data)).data()
    assert(null != group_ref01_data.id)


    // LIST
    const group_ref01_match = {}

    const group_ref01_list = (await group_ref01_ent.list(group_ref01_match)).map((e) => e.data())

    assert(!isempty(select(group_ref01_list, { id: group_ref01_data.id })))


    // UPDATE
    const group_ref01_data_up0 = {}
    group_ref01_data_up0.id = group_ref01_data.id

    const group_ref01_markdef_up0 = { name: 'employer_id', value: 'Mark01-group_ref01_' + setup.now }
    group_ref01_data_up0 [group_ref01_markdef_up0.name] = group_ref01_markdef_up0.value

    const group_ref01_resdata_up0 = (await group_ref01_ent.update(group_ref01_data_up0)).data()
    assert(group_ref01_resdata_up0.id === group_ref01_data_up0.id)

    assert(group_ref01_resdata_up0[group_ref01_markdef_up0.name] === group_ref01_markdef_up0.value)


    // LOAD
    const group_ref01_match_dt0 = {}
    group_ref01_match_dt0.id = group_ref01_data.id
    const group_ref01_data_dt0 = (await group_ref01_ent.load(group_ref01_match_dt0)).data()
    assert(group_ref01_data_dt0.id === group_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/group/GroupTestData.json')

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
    ['group01','group02','group03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_GROUP_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_GROUP_ENTID']

  if ('TRUE' === env.KOTA_TEST_LIVE) {
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
      extra || {}
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
  
