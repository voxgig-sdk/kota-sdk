
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { KotaSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await KotaSDK.test()
    equal(null !== testsdk, true)
  })

})
