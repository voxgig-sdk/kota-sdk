
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { KotaSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('EmployeeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.Employee()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'employee.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set KOTA_TEST_EMPLOYEE_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const employee_ref01_ent = client.Employee()
    let employee_ref01_data = setup.data.new.employee['employee_ref01']

    employee_ref01_data = await employee_ref01_ent.create(employee_ref01_data)
    assert(null != employee_ref01_data.id)


    // LIST
    const employee_ref01_match: any = {}

    const employee_ref01_list = await employee_ref01_ent.list(employee_ref01_match)

    assert(!isempty(select(employee_ref01_list, { id: employee_ref01_data.id })))


    // UPDATE
    const employee_ref01_data_up0: any = {}
    employee_ref01_data_up0.id = employee_ref01_data.id

    const employee_ref01_markdef_up0 = { name: 'date_of_birth', value: 'Mark01-employee_ref01_' + setup.now }
    ;(employee_ref01_data_up0 as any)[employee_ref01_markdef_up0.name] = employee_ref01_markdef_up0.value

    const employee_ref01_resdata_up0 = await employee_ref01_ent.update(employee_ref01_data_up0)
    assert(employee_ref01_resdata_up0.id === employee_ref01_data_up0.id)

    assert((employee_ref01_resdata_up0 as any)[employee_ref01_markdef_up0.name] === employee_ref01_markdef_up0.value)


    // LOAD
    const employee_ref01_match_dt0: any = {}
    employee_ref01_match_dt0.id = employee_ref01_data.id
    const employee_ref01_data_dt0 = await employee_ref01_ent.load(employee_ref01_match_dt0)
    assert(employee_ref01_data_dt0.id === employee_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['KOTA_TEST_EMPLOYEE_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'KOTA_TEST_EMPLOYEE_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': 'NONE',
  })

  idmap = env['KOTA_TEST_EMPLOYEE_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  if (live) {
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
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
