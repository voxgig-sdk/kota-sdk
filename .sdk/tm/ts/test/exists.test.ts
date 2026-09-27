
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { KotaSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = KotaSDK.test()
    equal(testsdk instanceof KotaSDK, true,
      'KotaSDK.test() must return a client synchronously')
  })

})
