
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


describe('AssociatedPersonEntity', async () => {

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.AssociatedPerson()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const associated_person_ref01_ent = client.AssociatedPerson()
    let associated_person_ref01_data = setup.data.new.associated_person['associated_person_ref01']
    associated_person_ref01_data['employee_id'] = setup.idmap['employee01']

    associated_person_ref01_data = await associated_person_ref01_ent.create(associated_person_ref01_data)
    assert(null != associated_person_ref01_data.id)


    // LIST
    const associated_person_ref01_match = {}
    associated_person_ref01_match['employee_id'] = setup.idmap['employee01']

    const associated_person_ref01_list = await associated_person_ref01_ent.list(associated_person_ref01_match)

    assert(!isempty(select(associated_person_ref01_list, { id: associated_person_ref01_data.id })))


    // UPDATE
    const associated_person_ref01_data_up0 = {}
    associated_person_ref01_data_up0.id = associated_person_ref01_data.id
    associated_person_ref01_data_up0 ['employee_id'] = setup.idmap['employee_id']

    const associated_person_ref01_markdef_up0 = { name: 'date_of_birth', value: 'Mark01-associated_person_ref01_' + setup.now }
    associated_person_ref01_data_up0 [associated_person_ref01_markdef_up0.name] = associated_person_ref01_markdef_up0.value

    const associated_person_ref01_resdata_up0 = await associated_person_ref01_ent.update(associated_person_ref01_data_up0)
    assert(associated_person_ref01_resdata_up0.id === associated_person_ref01_data_up0.id)

    assert(associated_person_ref01_resdata_up0[associated_person_ref01_markdef_up0.name] === associated_person_ref01_markdef_up0.value)


    // LOAD
    const associated_person_ref01_match_dt0 = {}
    associated_person_ref01_match_dt0.id = associated_person_ref01_data.id
    const associated_person_ref01_data_dt0 = await associated_person_ref01_ent.load(associated_person_ref01_match_dt0)
    assert(associated_person_ref01_data_dt0.id === associated_person_ref01_data.id)


    // REMOVE
    const associated_person_ref01_match_rm0 = {}
    associated_person_ref01_match_rm0.id = associated_person_ref01_data.id
    await associated_person_ref01_ent.remove(associated_person_ref01_match_rm0)
  

    // LIST
    const associated_person_ref01_match_rt0 = {}
    associated_person_ref01_match_rt0['employee_id'] = setup.idmap['employee01']

    const associated_person_ref01_list_rt0 = await associated_person_ref01_ent.list(associated_person_ref01_match_rt0)

    assert(isempty(select(associated_person_ref01_list_rt0, { id: associated_person_ref01_data.id })))


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/associated_person/AssociatedPersonTestData.json')

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
    ['associated_person01','associated_person02','associated_person03','employee01','employee02','employee03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_ASSOCIATED_PERSON_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': 'NONE',
  })

  idmap = env['KOTA_TEST_ASSOCIATED_PERSON_ENTID']

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
  
