

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { KotaSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


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
      if (!live && maybeSkipControl(t, 'entityOp', 'associated_person.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date","name":"date_of_birth","req":true,"short":"Date of birth of the associated person","type":"`$STRING`","index$":0},{"active":true,"name":"email","req":false,"short":"Email address of the associated person","type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":1},{"active":true,"name":"employee_id","req":true,"short":"Unique identifier for the employee this person is associated with","type":"`$STRING`","index$":2},{"active":true,"name":"first_name","req":true,"short":"First name of the associated person","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":true,"short":"Unique identifier for the associated person","type":"`$STRING`","index$":4},{"active":true,"name":"last_name","req":true,"short":"Last name of the associated person","type":"`$STRING`","index$":5},{"active":true,"name":"object","readOnly":true,"req":false,"short":"The object type","type":"`$STRING`","index$":6},{"active":true,"name":"phone_number","req":false,"short":"Phone number in E.164 international format (e.g.","type":["`$ONE`",["`$NULL`","`$STRING`"]],"index$":7},{"active":true,"name":"platform_id","req":false,"short":"Unique identifier for the platform","type":"`$STRING`","index$":8},{"active":true,"name":"relationship_type","req":true,"short":"The relationship type between the employee and the associated person","type":"`$ANY`","index$":9},{"active":true,"name":"sex_at_birth","req":true,"short":"The sex assigned to the associated person at birth","type":"`$ANY`","index$":10}],"id":{"field":"id","name":"id"},"name":"associated_person","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"x_platform_id","orig":"x_platform_id","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"employee_id","orig":"employee_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /employees/{employee_id}/associated_persons","json":"{\"operationId\":\"CreateAssociatedPerson\",\"parameters\":[{\"in\":\"path\",\"name\":\"employee_id\",\"required\":true,\"schema\":{\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"date_of_birth\":{\"description\":\"Must be in the past, but after 1900-01-01\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"email\":{\"description\":\"NOTE: This field will be normalized according to our internal formatting rules.\",\"type\":[\"null\",\"string\"]},\"first_name\":{\"description\":\"Must not be empty. NOTE: This field will be normalized according to our internal formatting rules.\",\"type\":\"string\"},\"last_name\":{\"description\":\"Must not be empty. NOTE: This field will be normalized according to our internal formatting rules.\",\"type\":\"string\"},\"phone_number\":{\"description\":\"Phone number in E.164 international format (e.g. +447700900999). NOTE: This field will be normalized according to our internal formatting rules.\",\"type\":[\"null\",\"string\"]},\"relationship_type\":{\"allOf\":[{\"enum\":[\"spouse\",\"partner\",\"child\",\"other\"],\"type\":\"string\"}],\"description\":\"The relationship type between the employee and the associated person\"},\"sex_at_birth\":{\"allOf\":[{\"enum\":[\"male\",\"female\"],\"type\":\"string\"}],\"description\":\"The sex assigned to the associated person at birth\"}},\"required\":[\"date_of_birth\",\"first_name\",\"last_name\",\"relationship_type\",\"sex_at_birth\"],\"type\":\"object\"}]}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"date_of_birth\":{\"description\":\"Date of birth of the associated person\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"email\":{\"description\":\"Email address of the associated person\",\"type\":[\"null\",\"string\"]},\"employee_id\":{\"description\":\"Unique identifier for the employee this person is associated with\",\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"},\"first_name\":{\"description\":\"First name of the associated person\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the associated person\",\"example\":\"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ap_.+\",\"type\":\"string\"},\"last_name\":{\"description\":\"Last name of the associated person\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"phone_number\":{\"description\":\"Phone number in E.164 international format (e.g. +447700900999)\",\"type\":[\"null\",\"string\"]},\"platform_id\":{\"description\":\"Unique identifier for the platform\",\"example\":\"pt_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pt_.+\",\"type\":\"string\"},\"relationship_type\":{\"allOf\":[{\"enum\":[\"spouse\",\"partner\",\"child\",\"other\"],\"type\":\"string\"}],\"description\":\"The relationship type between the employee and the associated person\"},\"sex_at_birth\":{\"allOf\":[{\"enum\":[\"male\",\"female\"],\"type\":\"string\"}],\"description\":\"The sex assigned to the associated person at birth\"}},\"required\":[\"date_of_birth\",\"employee_id\",\"first_name\",\"id\",\"last_name\",\"relationship_type\",\"sex_at_birth\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"errors\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":\"object\"},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/employees/{employee_id}/associated_persons","segments":[{"lit":"employees"},{"var":"employee_id"},{"lit":"associated_persons"}],"select":{"exist":["employee_id","x_platform_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"x_platform_id","orig":"x_platform_id","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"employee_id","orig":"employee_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /employees/{employee_id}/associated_persons","json":"{\"operationId\":\"ListAssociatedPersons\",\"parameters\":[{\"in\":\"path\",\"name\":\"employee_id\",\"required\":true,\"schema\":{\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"}},{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"in\":\"query\",\"name\":\"page\",\"schema\":{\"description\":\"The page of results to return. Defaults to 1 if not provided.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"in\":\"query\",\"name\":\"page_size\",\"schema\":{\"description\":\"The number of results to return per page. Defaults to 10 if not provided. Maximum value is 100.\",\"format\":\"int32\",\"type\":\"integer\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"has_next_page\":{\"description\":\"Whether there are more pages available after this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"has_previous_page\":{\"description\":\"Whether there are more pages available before this page\",\"example\":true,\"readOnly\":true,\"type\":\"boolean\"},\"items\":{\"description\":\"A paginated array containing the response elements\",\"items\":{\"additionalProperties\":false,\"properties\":{\"date_of_birth\":{\"description\":\"Date of birth of the associated person\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"email\":{\"description\":\"Email address of the associated person\",\"type\":[\"null\",\"string\"]},\"employee_id\":{\"description\":\"Unique identifier for the employee this person is associated with\",\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"},\"first_name\":{\"description\":\"First name of the associated person\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the associated person\",\"example\":\"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ap_.+\",\"type\":\"string\"},\"last_name\":{\"description\":\"Last name of the associated person\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"phone_number\":{\"description\":\"Phone number in E.164 international format (e.g. +447700900999)\",\"type\":[\"null\",\"string\"]},\"platform_id\":{\"description\":\"Unique identifier for the platform\",\"example\":\"pt_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pt_.+\",\"type\":\"string\"},\"relationship_type\":{\"allOf\":[{\"enum\":[\"spouse\",\"partner\",\"child\",\"other\"],\"type\":\"string\"}],\"description\":\"The relationship type between the employee and the associated person\"},\"sex_at_birth\":{\"allOf\":[{\"enum\":[\"male\",\"female\"],\"type\":\"string\"}],\"description\":\"The sex assigned to the associated person at birth\"}},\"required\":[\"date_of_birth\",\"employee_id\",\"first_name\",\"id\",\"last_name\",\"relationship_type\",\"sex_at_birth\"],\"type\":\"object\"},\"type\":\"array\"},\"page\":{\"description\":\"The current page of the results\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"page_size\":{\"description\":\"The number of results on this page. This can be different from the requested page size if the total number of results is less than the requested page size\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"total_count\":{\"description\":\"The total number of elements available in the response. This is the total number of elements available across all pages, not just the current page.\",\"example\":123,\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"items\",\"page\",\"page_size\",\"total_count\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/employees/{employee_id}/associated_persons","segments":[{"lit":"employees"},{"var":"employee_id"},{"lit":"associated_persons"}],"select":{"exist":["employee_id","page","page_size","x_platform_id"]},"transform":{"req":"`reqdata`","res":"`body.items`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"x_platform_id","orig":"x_platform_id","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"employee_id","orig":"employee_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"id","orig":"associated_person_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /employees/{employee_id}/associated_persons/{associated_person_id}","json":"{\"operationId\":\"RetrieveAssociatedPerson\",\"parameters\":[{\"in\":\"path\",\"name\":\"employee_id\",\"required\":true,\"schema\":{\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"}},{\"in\":\"path\",\"name\":\"associated_person_id\",\"required\":true,\"schema\":{\"example\":\"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ap_.+\",\"type\":\"string\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"date_of_birth\":{\"description\":\"Date of birth of the associated person\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"email\":{\"description\":\"Email address of the associated person\",\"type\":[\"null\",\"string\"]},\"employee_id\":{\"description\":\"Unique identifier for the employee this person is associated with\",\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"},\"first_name\":{\"description\":\"First name of the associated person\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the associated person\",\"example\":\"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ap_.+\",\"type\":\"string\"},\"last_name\":{\"description\":\"Last name of the associated person\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"phone_number\":{\"description\":\"Phone number in E.164 international format (e.g. +447700900999)\",\"type\":[\"null\",\"string\"]},\"platform_id\":{\"description\":\"Unique identifier for the platform\",\"example\":\"pt_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pt_.+\",\"type\":\"string\"},\"relationship_type\":{\"allOf\":[{\"enum\":[\"spouse\",\"partner\",\"child\",\"other\"],\"type\":\"string\"}],\"description\":\"The relationship type between the employee and the associated person\"},\"sex_at_birth\":{\"allOf\":[{\"enum\":[\"male\",\"female\"],\"type\":\"string\"}],\"description\":\"The sex assigned to the associated person at birth\"}},\"required\":[\"date_of_birth\",\"employee_id\",\"first_name\",\"id\",\"last_name\",\"relationship_type\",\"sex_at_birth\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/employees/{employee_id}/associated_persons/{associated_person_id}","rename":{"param":{"associated_person_id":"id"}},"segments":[{"lit":"employees"},{"var":"employee_id"},{"lit":"associated_persons"},{"var":"id"}],"select":{"exist":["employee_id","id","x_platform_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"x_platform_id","orig":"x_platform_id","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"employee_id","orig":"employee_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"id","orig":"associated_person_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /employees/{employee_id}/associated_persons/{associated_person_id}","json":"{\"operationId\":\"DeleteAssociatedPerson\",\"parameters\":[{\"in\":\"path\",\"name\":\"employee_id\",\"required\":true,\"schema\":{\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"}},{\"in\":\"path\",\"name\":\"associated_person_id\",\"required\":true,\"schema\":{\"example\":\"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ap_.+\",\"type\":\"string\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"date_of_birth\":{\"description\":\"Date of birth of the associated person\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"email\":{\"description\":\"Email address of the associated person\",\"type\":[\"null\",\"string\"]},\"employee_id\":{\"description\":\"Unique identifier for the employee this person is associated with\",\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"},\"first_name\":{\"description\":\"First name of the associated person\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the associated person\",\"example\":\"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ap_.+\",\"type\":\"string\"},\"last_name\":{\"description\":\"Last name of the associated person\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"phone_number\":{\"description\":\"Phone number in E.164 international format (e.g. +447700900999)\",\"type\":[\"null\",\"string\"]},\"platform_id\":{\"description\":\"Unique identifier for the platform\",\"example\":\"pt_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pt_.+\",\"type\":\"string\"},\"relationship_type\":{\"allOf\":[{\"enum\":[\"spouse\",\"partner\",\"child\",\"other\"],\"type\":\"string\"}],\"description\":\"The relationship type between the employee and the associated person\"},\"sex_at_birth\":{\"allOf\":[{\"enum\":[\"male\",\"female\"],\"type\":\"string\"}],\"description\":\"The sex assigned to the associated person at birth\"}},\"required\":[\"date_of_birth\",\"employee_id\",\"first_name\",\"id\",\"last_name\",\"relationship_type\",\"sex_at_birth\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"DELETE","orig":"/employees/{employee_id}/associated_persons/{associated_person_id}","rename":{"param":{"associated_person_id":"id"}},"segments":[{"lit":"employees"},{"var":"employee_id"},{"lit":"associated_persons"},{"var":"id"}],"select":{"exist":["employee_id","id","x_platform_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"header":[{"active":true,"kind":"header","name":"x_platform_id","orig":"x_platform_id","reqd":false,"type":"`$STRING`"}],"params":[{"active":true,"example":"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"employee_id","orig":"employee_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a","kind":"param","name":"id","orig":"associated_person_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"PUT /employees/{employee_id}/associated_persons/{associated_person_id}","json":"{\"operationId\":\"UpdateAssociatedPerson\",\"parameters\":[{\"in\":\"path\",\"name\":\"employee_id\",\"required\":true,\"schema\":{\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"}},{\"in\":\"path\",\"name\":\"associated_person_id\",\"required\":true,\"schema\":{\"example\":\"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ap_.+\",\"type\":\"string\"}},{\"description\":\"The target platform id. Required only when calling with a dashboard (WorkOS AuthKit) access token instead of a platform API key — the token carries no platform claim, so the caller must say which platform it means. Ignored for platform API key / embed session token callers.\",\"in\":\"header\",\"name\":\"X-Platform-Id\",\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"additionalProperties\":false,\"properties\":{\"date_of_birth\":{\"description\":\"Must be in the past, but after 1900-01-01\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":[\"null\",\"string\"]},\"email\":{\"description\":\"Email address of the associated person. If null is provided, the email will be cleared. NOTE: This field will be normalized according to our internal formatting rules.\",\"type\":[\"null\",\"string\"]},\"first_name\":{\"description\":\"NOTE: This field will be normalized according to our internal formatting rules.\",\"type\":[\"null\",\"string\"]},\"last_name\":{\"description\":\"NOTE: This field will be normalized according to our internal formatting rules.\",\"type\":[\"null\",\"string\"]},\"phone_number\":{\"description\":\"Phone number in E.164 international format (e.g. +447700900999). If null is provided, the phone number will be cleared. NOTE: This field will be normalized according to our internal formatting rules.\",\"type\":[\"null\",\"string\"]},\"relationship_type\":{\"allOf\":[{\"enum\":[\"spouse\",\"partner\",\"child\",\"other\"],\"type\":\"string\"}],\"description\":\"The relationship type between the employee and the associated person\",\"type\":\"null\"},\"sex_at_birth\":{\"allOf\":[{\"enum\":[\"male\",\"female\"],\"type\":\"string\"}],\"description\":\"The sex assigned to the associated person at birth\",\"type\":\"null\"}},\"type\":\"object\"}]}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":false,\"properties\":{\"date_of_birth\":{\"description\":\"Date of birth of the associated person\",\"example\":\"2024-12-01\",\"format\":\"date\",\"type\":\"string\"},\"email\":{\"description\":\"Email address of the associated person\",\"type\":[\"null\",\"string\"]},\"employee_id\":{\"description\":\"Unique identifier for the employee this person is associated with\",\"example\":\"ee_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ee_.+\",\"type\":\"string\"},\"first_name\":{\"description\":\"First name of the associated person\",\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the associated person\",\"example\":\"ap_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"ap_.+\",\"type\":\"string\"},\"last_name\":{\"description\":\"Last name of the associated person\",\"type\":\"string\"},\"object\":{\"description\":\"The object type\",\"readOnly\":true,\"type\":\"string\"},\"phone_number\":{\"description\":\"Phone number in E.164 international format (e.g. +447700900999)\",\"type\":[\"null\",\"string\"]},\"platform_id\":{\"description\":\"Unique identifier for the platform\",\"example\":\"pt_3b1333d87d9d4fd6ad83ba7f6b0e951a\",\"pattern\":\"pt_.+\",\"type\":\"string\"},\"relationship_type\":{\"allOf\":[{\"enum\":[\"spouse\",\"partner\",\"child\",\"other\"],\"type\":\"string\"}],\"description\":\"The relationship type between the employee and the associated person\"},\"sex_at_birth\":{\"allOf\":[{\"enum\":[\"male\",\"female\"],\"type\":\"string\"}],\"description\":\"The sex assigned to the associated person at birth\"}},\"required\":[\"date_of_birth\",\"employee_id\",\"first_name\",\"id\",\"last_name\",\"relationship_type\",\"sex_at_birth\"],\"type\":\"object\"}}},\"description\":\"OK\"},\"400\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"errors\":{\"additionalProperties\":{\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"type\":\"object\"},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Bad Request\"},\"404\":{\"content\":{\"application/problem+json\":{\"schema\":{\"additionalProperties\":{},\"properties\":{\"detail\":{\"type\":[\"null\",\"string\"]},\"instance\":{\"type\":[\"null\",\"string\"]},\"status\":{\"format\":\"int32\",\"type\":[\"null\",\"integer\"]},\"title\":{\"type\":[\"null\",\"string\"]},\"type\":{\"type\":[\"null\",\"string\"]}},\"type\":\"object\"}}},\"description\":\"Not Found\"}},\"security\":[{\"bearerAuth\":[]}],\"securitySchemes\":{\"bearerAuth\":{\"description\":\"Authorization header using the Bearer scheme\",\"scheme\":\"bearer\",\"type\":\"http\"}},\"securitySource\":\"definition\"}","source":"openapi3","version":1},"kind":"http","method":"PUT","orig":"/employees/{employee_id}/associated_persons/{associated_person_id}","rename":{"param":{"associated_person_id":"id"}},"segments":[{"lit":"employees"},{"var":"employee_id"},{"lit":"associated_persons"},{"var":"id"}],"select":{"exist":["employee_id","id","x_platform_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["employee"]]},"key$":"associated_person","name__orig":"associated_person","Name":"AssociatedPerson","name_":"associated_person","name-":"associated-person","NAME":"ASSOCIATED_PERSON","index$":0}, {"active":true,"entity":"associated_person","key$":"BasicAssociatedPersonFlow","kind":"basic","name":"BasicAssociatedPersonFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"associated_person_ref01"},"match":{"employee_id":"employee01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"employee_id":"employee01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"associated_person_ref01"}}],"index$":1},{"active":true,"data":{"employee_id":"employee01"},"input":{"ref":"associated_person_ref01","srcdatavar":"associated_person_ref01_data","suffix":"_up0","textfield":"date_of_birth"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-associated_person_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"associated_person_ref01","srcdatavar":"associated_person_ref01_data","suffix":"_dt0"},"match":{"employee_id":"employee01","id":"associated_person01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-associated_person_ref01"}}],"index$":3},{"active":true,"data":{},"input":{"ref":"associated_person_ref01","suffix":"_rm0"},"match":{"employee_id":"employee01","id":"associated_person01"},"op":"remove","spec":[],"valid":[],"index$":4},{"active":true,"data":{},"input":{"suffix":"_rt0"},"match":{"employee_id":"employee01"},"op":"list","spec":[],"valid":[{"apply":"ItemNotExists","def":{"ref":"associated_person_ref01"}}],"index$":5}]}, 'AssociatedPerson')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const associated_person_ref01_ent = client.AssociatedPerson()
    let associated_person_ref01_data = setup.data.new.associated_person['associated_person_ref01']
    associated_person_ref01_data['employee_id'] = setup.idmap['employee01']

    associated_person_ref01_data = (await associated_person_ref01_ent.create(associated_person_ref01_data)).data()
    assert(null != associated_person_ref01_data.id)


    // LIST
    const associated_person_ref01_match: any = {}
    associated_person_ref01_match['employee_id'] = setup.idmap['employee01']

    const associated_person_ref01_list = (await associated_person_ref01_ent.list(associated_person_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(associated_person_ref01_list, { id: associated_person_ref01_data.id })))


    // UPDATE
    const associated_person_ref01_data_up0: any = {}
    associated_person_ref01_data_up0.id = associated_person_ref01_data.id
    associated_person_ref01_data_up0 ['employee_id'] = setup.idmap['employee_id']

    const associated_person_ref01_markdef_up0 = { name: 'date_of_birth', value: 'Mark01-associated_person_ref01_' + setup.now }
    ;(associated_person_ref01_data_up0 as any)[associated_person_ref01_markdef_up0.name] = associated_person_ref01_markdef_up0.value

    const associated_person_ref01_resdata_up0 = (await associated_person_ref01_ent.update(associated_person_ref01_data_up0)).data()
    assert(associated_person_ref01_resdata_up0.id === associated_person_ref01_data_up0.id)

    assert((associated_person_ref01_resdata_up0 as any)[associated_person_ref01_markdef_up0.name] === associated_person_ref01_markdef_up0.value)


    // LOAD
    const associated_person_ref01_match_dt0: any = {}
    associated_person_ref01_match_dt0.id = associated_person_ref01_data.id
    const associated_person_ref01_data_dt0 = (await associated_person_ref01_ent.load(associated_person_ref01_match_dt0)).data()
    assert(associated_person_ref01_data_dt0.id === associated_person_ref01_data.id)


    // REMOVE
    const associated_person_ref01_match_rm0: any = { id: associated_person_ref01_data.id }
    await associated_person_ref01_ent.remove(associated_person_ref01_match_rm0)
  

    // LIST
    const associated_person_ref01_match_rt0: any = {}
    associated_person_ref01_match_rt0['employee_id'] = setup.idmap['employee01']

    const associated_person_ref01_list_rt0 = (await associated_person_ref01_ent.list(associated_person_ref01_match_rt0)).map((e: any) => e.data())

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

  const env = envOverride({
    'KOTA_TEST_ASSOCIATED_PERSON_ENTID': idmap,
    'KOTA_TEST_LIVE': 'FALSE',
    'KOTA_TEST_EXPLAIN': 'FALSE',
    'KOTA_APIKEY': '',
  })

  idmap = env['KOTA_TEST_ASSOCIATED_PERSON_ENTID']

  const live = 'TRUE' === env.KOTA_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['KOTA_TEST_ASSOCIATED_PERSON_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new KotaSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
        apikey: env.KOTA_APIKEY,
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
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
    transport,
    now: Date.now(),
  }

  return setup
}
  
