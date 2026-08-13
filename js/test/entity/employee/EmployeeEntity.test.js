
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


describe('EmployeeEntity', async () => {

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.Employee()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const employee_ref01_ent = client.Employee()
    let employee_ref01_data = setup.data.new.employee['employee_ref01']

    employee_ref01_data = (await employee_ref01_ent.create(employee_ref01_data)).data()
    assert(null != employee_ref01_data.id)


    // LIST
    const employee_ref01_match = {}

    const employee_ref01_list = (await employee_ref01_ent.list(employee_ref01_match)).map((e) => e.data())

    assert(!isempty(select(employee_ref01_list, { id: employee_ref01_data.id })))


    // UPDATE
    const employee_ref01_data_up0 = {}
    employee_ref01_data_up0.id = employee_ref01_data.id

    const employee_ref01_markdef_up0 = { name: 'date_of_birth', value: 'Mark01-employee_ref01_' + setup.now }
    employee_ref01_data_up0 [employee_ref01_markdef_up0.name] = employee_ref01_markdef_up0.value

    const employee_ref01_resdata_up0 = (await employee_ref01_ent.update(employee_ref01_data_up0)).data()
    assert(employee_ref01_resdata_up0.id === employee_ref01_data_up0.id)

    assert(employee_ref01_resdata_up0[employee_ref01_markdef_up0.name] === employee_ref01_markdef_up0.value)


    // LOAD
    const employee_ref01_match_dt0 = {}
    employee_ref01_match_dt0.id = employee_ref01_data.id
    const employee_ref01_data_dt0 = (await employee_ref01_ent.load(employee_ref01_match_dt0)).data()
    assert(employee_ref01_data_dt0.id === employee_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/employee/EmployeeTestData.json')

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
    ['employee01','employee02','employee03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'KOTA_TEST_EMPLOYEE_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': 'NONE',
  })

  idmap = env['KOTA_TEST_EMPLOYEE_ENTID']

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
  
