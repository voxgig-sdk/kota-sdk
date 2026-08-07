
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


describe('AssociatedPersonEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when KOTA_TEST_LIVE=TRUE.
  afterEach(liveDelay('KOTA_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = KotaSDK.test()
    const ent = testsdk.AssociatedPerson()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.KOTA_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (maybeSkipControl(t, 'entityOp', 'associated_person.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set KOTA_TEST_ASSOCIATED_PERSON_ENTID JSON to run live')
      return
    }
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
    const associated_person_ref01_match: any = {}
    associated_person_ref01_match['employee_id'] = setup.idmap['employee01']

    const associated_person_ref01_list = await associated_person_ref01_ent.list(associated_person_ref01_match)

    assert(!isempty(select(associated_person_ref01_list, { id: associated_person_ref01_data.id })))


    // UPDATE
    const associated_person_ref01_data_up0: any = {}
    associated_person_ref01_data_up0.id = associated_person_ref01_data.id
    associated_person_ref01_data_up0 ['employee_id'] = setup.idmap['employee_id']

    const associated_person_ref01_markdef_up0 = { name: 'date_of_birth', value: 'Mark01-associated_person_ref01_' + setup.now }
    ;(associated_person_ref01_data_up0 as any)[associated_person_ref01_markdef_up0.name] = associated_person_ref01_markdef_up0.value

    const associated_person_ref01_resdata_up0 = await associated_person_ref01_ent.update(associated_person_ref01_data_up0)
    assert(associated_person_ref01_resdata_up0.id === associated_person_ref01_data_up0.id)

    assert((associated_person_ref01_resdata_up0 as any)[associated_person_ref01_markdef_up0.name] === associated_person_ref01_markdef_up0.value)


    // LOAD
    const associated_person_ref01_match_dt0: any = {}
    associated_person_ref01_match_dt0.id = associated_person_ref01_data.id
    const associated_person_ref01_data_dt0 = await associated_person_ref01_ent.load(associated_person_ref01_match_dt0)
    assert(associated_person_ref01_data_dt0.id === associated_person_ref01_data.id)


    // REMOVE
    const associated_person_ref01_match_rm0: any = { id: associated_person_ref01_data.id }
    await associated_person_ref01_ent.remove(associated_person_ref01_match_rm0)
  

    // LIST
    const associated_person_ref01_match_rt0: any = {}
    associated_person_ref01_match_rt0['employee_id'] = setup.idmap['employee01']

    const associated_person_ref01_list_rt0 = await associated_person_ref01_ent.list(associated_person_ref01_match_rt0)

    assert(isempty(select(associated_person_ref01_list_rt0, { id: associated_person_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['KOTA_TEST_ASSOCIATED_PERSON_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'KOTA_TEST_ASSOCIATED_PERSON_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': 'NONE',
  })

  idmap = env['KOTA_TEST_ASSOCIATED_PERSON_ENTID']

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
  
