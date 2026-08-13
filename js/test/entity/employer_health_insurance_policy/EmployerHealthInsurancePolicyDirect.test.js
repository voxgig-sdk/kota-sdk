
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { KotaSDK } = require('../../..')

const {
  envOverride,
} = require('../../utility')


describe('EmployerHealthInsurancePolicyDirect', async () => {

  test('direct-exists', async () => {
    const sdk = new KotaSDK({
      // Concrete base: a live construction must satisfy any server
      // variables a templated base URL declares; overriding base with a
      // literal (as the direct flow tests do) sidesteps the requirement.
      base: 'http://localhost:8080',
      system: { fetch: async () => ({}) }
    })
    assert('function' === typeof sdk.direct)
    assert('function' === typeof sdk.prepare)
  })


  test('direct-load-employer_health_insurance_policy', async () => {
    const setup = directSetup({ id: 'direct01' })
    const { client, calls } = setup

    const params = {}
    if (!setup.live) {
      params.employer_id = 'direct01'
      params.id = 'direct02'
    }

    const result = await client.direct({
      path: 'employers/{employer_id}/health_insurance/policies/{id}',
      method: 'GET',
      params,
    })

    assert(result.ok === true)
    assert(result.status === 200)
    assert(null != result.data)

    if (!setup.live) {
      assert(result.data.id === 'direct01')
      assert(calls.length === 1)
      assert(calls[0].init.method === 'GET')
      assert(calls[0].url.includes('direct01'))
      assert(calls[0].url.includes('direct02'))
    }
  })

})



function directSetup(mockres) {
  const calls = []

  const env = envOverride({
    'KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_ENTID': {},
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_APIKEY': 'NONE',
  })

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  if (live) {
    const client = new KotaSDK({
      apikey: env.KOTA_APIKEY,
    })

    let idmap = env['KOTA_TEST_EMPLOYER_HEALTH_INSURANCE_POLICY_ENTID']
    if ('string' === typeof idmap && idmap.startsWith('{')) {
      idmap = JSON.parse(idmap)
    }

    return { client, calls, live, idmap }
  }

  const mockFetch = async (url, init) => {
    calls.push({ url, init })
    return {
      status: 200,
      statusText: 'OK',
      headers: {},
      json: async () => (null != mockres ? mockres : { id: 'direct01' }),
    }
  }

  const client = new KotaSDK({
    base: 'http://localhost:8080',
    system: { fetch: mockFetch },
  })

  return { client, calls, live, idmap: {} }
}
  
