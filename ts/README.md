# Kota TypeScript SDK



The TypeScript SDK for the Kota API — a type-safe, entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AssociatedPerson()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/kota-sdk/releases](https://github.com/voxgig-sdk/kota-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { KotaSDK } from '@voxgig-sdk/kota'

const client = new KotaSDK({
  apikey: process.env.KOTA_APIKEY,
})
```

### 2. List associatedperson records

`list()` resolves to an array of AssociatedPerson ENTITIES — every operation
resolves to entities, not raw records. Iterate them directly, and call
`.data()` on one for the record it holds:

```ts
const associatedpersons = await client.AssociatedPerson().list({ employee_id: "example" })

for (const associatedperson of associatedpersons) {
  console.log(associatedperson)
}
```

### 3. Load an associatedperson

AssociatedPerson is nested under employee, so provide the `employee_id`.
`load()` returns the entity directly and throws on failure:

```ts
try {
  const associatedperson = await client.AssociatedPerson().load({
    employee_id: 'example_employee_id',
    id: 'example_id',
  })
  console.log(associatedperson)
} catch (err) {
  console.error('load failed:', err)
}
```

### 4. Create, update, and remove

```ts
// Create — returns the created AssociatedPerson ENTITY (.data() for the record)
const created = await client.AssociatedPerson().create({
  employee_id: 'example_employee_id',
  date_of_birth: 'example_date_of_birth',
  first_name: 'example_first_name',
  id: 'example_id',
  last_name: 'example_last_name',
  relationship_type: 'example_relationship_type',
  sex_at_birth: 'example_sex_at_birth',
})

// Update — the id comes off the returned entity's data()
const updated = await client.AssociatedPerson().update({
  id: created.data().id!,
  employee_id: 'example_employee_id',
  date_of_birth: 'example_date_of_birth',
})

// Remove
await client.AssociatedPerson().remove({
  id: created.data().id!,
  employee_id: 'example_employee_id',
})
```


## Error handling

Entity operations reject on failure, so wrap them in `try` / `catch`:

```ts
try {
  const dependentsmanagementintent = await client.DependentsManagementIntent().load({ id: "example_id" })
  console.log(dependentsmanagementintent)
} catch (err) {
  console.error('load failed:', err)
}
```

The low-level `direct()` method does **not** throw — it returns the
value or an `Error`, so check the result before using it:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example_id' },
})

if (result instanceof Error) {
  throw result
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = KotaSDK.test()

const dependentsmanagementintent = await client.DependentsManagementIntent().load({ id: 'test01' })
// dependentsmanagementintent is the entity, populated with mock response data
// — call dependentsmanagementintent.data() for the record itself
console.log(dependentsmanagementintent)
```

You can also use the instance method:

```ts
const client = new KotaSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.DependentsManagementIntent()

// First call runs the operation and stores its result
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new KotaSDK({
  apikey: '...',
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
KOTA_TEST_LIVE=TRUE
KOTA_APIKEY=<your-key>
```

Then run:

```bash
cd ts && npm test
```


## Reference

### KotaSDK

#### Constructor

```ts
new KotaSDK(options?: {
  apikey?: string
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `AssociatedPerson(data?)` | `AssociatedPersonEntity` | Create an AssociatedPerson entity instance. |
| `AssociatedPersonEligibilityResponsePagedList(data?)` | `AssociatedPersonEligibilityResponsePagedListEntity` | Create an AssociatedPersonEligibilityResponsePagedList entity instance. |
| `ContributionReport(data?)` | `ContributionReportEntity` | Create a ContributionReport entity instance. |
| `ContributionReportEmployeeBreakdown(data?)` | `ContributionReportEmployeeBreakdownEntity` | Create a ContributionReportEmployeeBreakdown entity instance. |
| `ContributionReportEmployeeBreakdownResponsePagedList(data?)` | `ContributionReportEmployeeBreakdownResponsePagedListEntity` | Create a ContributionReportEmployeeBreakdownResponsePagedList entity instance. |
| `CreateHostedSessionToken(data?)` | `CreateHostedSessionTokenEntity` | Create a CreateHostedSessionToken entity instance. |
| `CreateSessionToken(data?)` | `CreateSessionTokenEntity` | Create a CreateSessionToken entity instance. |
| `Dependent(data?)` | `DependentEntity` | Create a Dependent entity instance. |
| `DependentsManagementIntent(data?)` | `DependentsManagementIntentEntity` | Create a DependentsManagementIntent entity instance. |
| `EligibilityCheck(data?)` | `EligibilityCheckEntity` | Create an EligibilityCheck entity instance. |
| `Employee(data?)` | `EmployeeEntity` | Create an Employee entity instance. |
| `EmployeeHealthInsuranceOffer(data?)` | `EmployeeHealthInsuranceOfferEntity` | Create an EmployeeHealthInsuranceOffer entity instance. |
| `EmployeeHealthInsuranceOfferResponsePagedList(data?)` | `EmployeeHealthInsuranceOfferResponsePagedListEntity` | Create an EmployeeHealthInsuranceOfferResponsePagedList entity instance. |
| `EmployeeHealthInsurancePolicy(data?)` | `EmployeeHealthInsurancePolicyEntity` | Create an EmployeeHealthInsurancePolicy entity instance. |
| `EmployeeHealthInsurancePolicyResponsePagedList(data?)` | `EmployeeHealthInsurancePolicyResponsePagedListEntity` | Create an EmployeeHealthInsurancePolicyResponsePagedList entity instance. |
| `Employer(data?)` | `EmployerEntity` | Create an Employer entity instance. |
| `EmployerHealthInsurancePolicy(data?)` | `EmployerHealthInsurancePolicyEntity` | Create an EmployerHealthInsurancePolicy entity instance. |
| `EmployerHealthInsurancePolicyResponsePagedList(data?)` | `EmployerHealthInsurancePolicyResponsePagedListEntity` | Create an EmployerHealthInsurancePolicyResponsePagedList entity instance. |
| `EmployerHealthInsuranceQuote(data?)` | `EmployerHealthInsuranceQuoteEntity` | Create an EmployerHealthInsuranceQuote entity instance. |
| `EmployerHealthInsuranceQuoteResponsePagedList(data?)` | `EmployerHealthInsuranceQuoteResponsePagedListEntity` | Create an EmployerHealthInsuranceQuoteResponsePagedList entity instance. |
| `EnrolmentIntent(data?)` | `EnrolmentIntentEntity` | Create an EnrolmentIntent entity instance. |
| `EnrolmentIntentRequirementResponsePagedList(data?)` | `EnrolmentIntentRequirementResponsePagedListEntity` | Create an EnrolmentIntentRequirementResponsePagedList entity instance. |
| `Event(data?)` | `EventEntity` | Create an Event entity instance. |
| `Group(data?)` | `GroupEntity` | Create a Group entity instance. |
| `GroupEmployee(data?)` | `GroupEmployeeEntity` | Create a GroupEmployee entity instance. |
| `GroupEmployeeResponsePagedList(data?)` | `GroupEmployeeResponsePagedListEntity` | Create a GroupEmployeeResponsePagedList entity instance. |
| `GroupPolicy(data?)` | `GroupPolicyEntity` | Create a GroupPolicy entity instance. |
| `GroupPolicyIntent(data?)` | `GroupPolicyIntentEntity` | Create a GroupPolicyIntent entity instance. |
| `GroupPolicyIntentRequirementResponsePagedList(data?)` | `GroupPolicyIntentRequirementResponsePagedListEntity` | Create a GroupPolicyIntentRequirementResponsePagedList entity instance. |
| `GroupQuote(data?)` | `GroupQuoteEntity` | Create a GroupQuote entity instance. |
| `GroupQuoteIntent(data?)` | `GroupQuoteIntentEntity` | Create a GroupQuoteIntent entity instance. |
| `GroupQuoteIntentRequirementResponsePagedList(data?)` | `GroupQuoteIntentRequirementResponsePagedListEntity` | Create a GroupQuoteIntentRequirementResponsePagedList entity instance. |
| `Plan(data?)` | `PlanEntity` | Create a Plan entity instance. |
| `Policy(data?)` | `PolicyEntity` | Create a Policy entity instance. |
| `PolicyAmendmentIntent(data?)` | `PolicyAmendmentIntentEntity` | Create a PolicyAmendmentIntent entity instance. |
| `PolicyImportIntent(data?)` | `PolicyImportIntentEntity` | Create a PolicyImportIntent entity instance. |
| `Provider(data?)` | `ProviderEntity` | Create a Provider entity instance. |
| `Replay(data?)` | `ReplayEntity` | Create a Replay entity instance. |
| `WebhookEndpoint(data?)` | `WebhookEndpointEntity` | Create a WebhookEndpoint entity instance. |
| `WebhookEndpointResponsePagedList(data?)` | `WebhookEndpointResponsePagedListEntity` | Create a WebhookEndpointResponsePagedList entity instance. |
| `tester(testopts?, sdkopts?)` | `KotaSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `KotaSDK.test(testopts?, sdkopts?)` | `KotaSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?: Partial<Entity>): Entity` | Get or set entity data. |
| `match` | `match(match?: Partial<Entity>): Partial<Entity>` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): KotaSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

### Entities

#### AssociatedPerson

| Field | Description |
| --- | --- |
| `date_of_birth` |  |
| `email` |  |
| `employee_id` |  |
| `first_name` |  |
| `id` |  |
| `last_name` |  |
| `object` |  |
| `phone_number` |  |
| `platform_id` |  |
| `relationship_type` |  |
| `sex_at_birth` |  |

Operations: create, list, load, remove, update.

API path: `/employees/{employee_id}/associated_persons`

#### AssociatedPersonEligibilityResponsePagedList

| Field | Description |
| --- | --- |
| `associated_person_id` |  |
| `date_of_birth` |  |
| `eligibility_status` |  |
| `first_name` |  |
| `ineligibility_reason` |  |
| `last_name` |  |
| `object` |  |
| `relationship` |  |
| `sex_at_birth` |  |

Operations: list.

API path: `/dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility`

#### ContributionReport

| Field | Description |
| --- | --- |
| `created_at` |  |
| `employer_id` |  |
| `external_customer_id` |  |
| `finalized_at` |  |
| `id` |  |
| `last_updated_at` |  |
| `object` |  |
| `period` |  |
| `status` |  |

Operations: create, list, load.

API path: `/contribution_reports/{contribution_report_id}/finalize`

#### ContributionReportEmployeeBreakdown

| Field | Description |
| --- | --- |
| `contribution_report_id` |  |
| `created_at` |  |
| `currency` |  |
| `employee_id` |  |
| `employer_id` |  |
| `external_customer_id` |  |
| `finalized_at` |  |
| `health_insurance` |  |
| `last_updated_at` |  |
| `object` |  |
| `period` |  |
| `status` |  |

Operations: load.

API path: `/contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}`

#### ContributionReportEmployeeBreakdownResponsePagedList

| Field | Description |
| --- | --- |
| `contribution_report_id` |  |
| `created_at` |  |
| `currency` |  |
| `employee_id` |  |
| `employer_id` |  |
| `external_customer_id` |  |
| `finalized_at` |  |
| `health_insurance` |  |
| `last_updated_at` |  |
| `object` |  |
| `period` |  |
| `status` |  |

Operations: list.

API path: `/contribution_reports/{contribution_report_id}/employee_breakdowns`

#### CreateHostedSessionToken

| Field | Description |
| --- | --- |
| `expiry` |  |
| `link` |  |

Operations: create.

API path: `/hosted/sessions`

#### CreateSessionToken

| Field | Description |
| --- | --- |
| `expiry` |  |
| `token` |  |

Operations: create.

API path: `/embed/sessions`

#### Dependent

| Field | Description |
| --- | --- |
| `action_required` |  |
| `coverage_options` |  |
| `dependents` |  |
| `disclosures` |  |
| `id` |  |
| `object` |  |
| `parent_intent_id` |  |
| `parent_intent_type` |  |
| `plan` |  |
| `status` |  |

Operations: create, remove.

API path: `/dependents_management_intents/{dependents_management_intent_id}/dependents`

#### DependentsManagementIntent

| Field | Description |
| --- | --- |
| `action_required` |  |
| `coverage_options` |  |
| `dependents` |  |
| `disclosures` |  |
| `id` |  |
| `object` |  |
| `parent_intent_id` |  |
| `parent_intent_type` |  |
| `plan` |  |
| `status` |  |

Operations: create, load.

API path: `/policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent`

#### EligibilityCheck

| Field | Description |
| --- | --- |
| `eligibility_status` |  |
| `object` |  |
| `plan` |  |
| `provider` |  |
| `reasons` |  |

Operations: create.

API path: `/groups/{group_id}/eligibility_check`

#### Employee

| Field | Description |
| --- | --- |
| `bank_account` |  |
| `date_of_birth` |  |
| `earliest_benefits_start_date` |  |
| `email` |  |
| `employer_id` |  |
| `external_customer_id` |  |
| `first_name` |  |
| `home_address` |  |
| `id` |  |
| `last_name` |  |
| `metadata` |  |
| `national_tax_id` |  |
| `nationality` |  |
| `object` |  |
| `offboard_on` |  |
| `phone_number` |  |
| `platform_id` |  |
| `sex_at_birth` |  |
| `start_on` |  |
| `status` |  |

Operations: create, list, load, update.

API path: `/employees/{employee_id}/offboard`

#### EmployeeHealthInsuranceOffer

| Field | Description |
| --- | --- |
| `coverage_level` |  |
| `employee_id` |  |
| `employer_id` |  |
| `external_customer_id` |  |
| `id` |  |
| `object` |  |
| `required_action` |  |
| `status` |  |

Operations: load.

API path: `/employees/{employee_id}/health_insurance/offers/{employee_offer_id}`

#### EmployeeHealthInsuranceOfferResponsePagedList

| Field | Description |
| --- | --- |
| `coverage_level` |  |
| `employee_id` |  |
| `employer_id` |  |
| `external_customer_id` |  |
| `id` |  |
| `object` |  |
| `required_action` |  |
| `status` |  |

Operations: list.

API path: `/employees/{employee_id}/health_insurance/offers`

#### EmployeeHealthInsurancePolicy

| Field | Description |
| --- | --- |
| `cancellation_date` |  |
| `coverage_level` |  |
| `employee_id` |  |
| `employer_id` |  |
| `end_date` |  |
| `enrolled_dependants_count` |  |
| `enrolment_type` |  |
| `estimated_gross_premium` |  |
| `external_customer_id` |  |
| `id` |  |
| `object` |  |
| `opt_out_deadline_date` |  |
| `policy_number` |  |
| `renewal` |  |
| `start_date` |  |
| `status` |  |

Operations: load.

API path: `/employees/{employee_id}/health_insurance/policies/{employee_policy_id}`

#### EmployeeHealthInsurancePolicyResponsePagedList

| Field | Description |
| --- | --- |
| `cancellation_date` |  |
| `coverage_level` |  |
| `employee_id` |  |
| `employer_id` |  |
| `end_date` |  |
| `enrolled_dependants_count` |  |
| `enrolment_type` |  |
| `estimated_gross_premium` |  |
| `external_customer_id` |  |
| `id` |  |
| `object` |  |
| `opt_out_deadline_date` |  |
| `policy_number` |  |
| `renewal` |  |
| `start_date` |  |
| `status` |  |

Operations: list.

API path: `/employees/{employee_id}/health_insurance/policies`

#### Employer

| Field | Description |
| --- | --- |
| `contact` |  |
| `earliest_benefits_start_date` |  |
| `id` |  |
| `legal_address` |  |
| `legal_name` |  |
| `metadata` |  |
| `object` |  |
| `offboard_on` |  |
| `platform_id` |  |
| `registration_number` |  |
| `status` |  |

Operations: create, list, load, update.

API path: `/employers/{employer_id}/offboard`

#### EmployerHealthInsurancePolicy

| Field | Description |
| --- | --- |
| `cancellation_date` |  |
| `coverage_levels` |  |
| `employer_cancellation_period_length` |  |
| `employer_id` |  |
| `end_date` |  |
| `enrolment_type` |  |
| `group_policy_number` |  |
| `id` |  |
| `object` |  |
| `renewal` |  |
| `start_date` |  |
| `status` |  |

Operations: load.

API path: `/employers/{employer_id}/health_insurance/policies/{employer_policy_id}`

#### EmployerHealthInsurancePolicyResponsePagedList

| Field | Description |
| --- | --- |
| `cancellation_date` |  |
| `coverage_levels` |  |
| `employer_cancellation_period_length` |  |
| `employer_id` |  |
| `end_date` |  |
| `enrolment_type` |  |
| `group_policy_number` |  |
| `id` |  |
| `object` |  |
| `renewal` |  |
| `start_date` |  |
| `status` |  |

Operations: list.

API path: `/employers/{employer_id}/health_insurance/policies`

#### EmployerHealthInsuranceQuote

| Field | Description |
| --- | --- |
| `coverage_levels` |  |
| `employer_id` |  |
| `id` |  |
| `object` |  |
| `quoted_at` |  |
| `required_action` |  |
| `status` |  |

Operations: load.

API path: `/employers/{employer_id}/health_insurance/quotes/{employer_quote_id}`

#### EmployerHealthInsuranceQuoteResponsePagedList

| Field | Description |
| --- | --- |
| `coverage_levels` |  |
| `employer_id` |  |
| `id` |  |
| `object` |  |
| `quoted_at` |  |
| `required_action` |  |
| `status` |  |

Operations: list.

API path: `/employers/{employer_id}/health_insurance/quotes`

#### EnrolmentIntent

| Field | Description |
| --- | --- |
| `action_required` |  |
| `disclosures` |  |
| `employee_id` |  |
| `force_confirmation` |  |
| `group_id` |  |
| `id` |  |
| `ineligibility_reason` |  |
| `object` |  |
| `pending_confirmation` |  |
| `policy_configuration` |  |
| `policy_enrolments` |  |
| `status` |  |

Operations: create, list, load, update.

API path: `/enrolment_intents/{enrolment_intent_id}/confirm`

#### EnrolmentIntentRequirementResponsePagedList

| Field | Description |
| --- | --- |
| `id` |  |
| `is_fulfilled` |  |
| `object` |  |
| `object_id` |  |
| `object_type` |  |
| `requirement_type` |  |

Operations: list.

API path: `/enrolment_intents/{enrolment_intent_id}/requirements`

#### Event

| Field | Description |
| --- | --- |
| `api_version` |  |
| `created` |  |
| `data` |  |
| `id` |  |
| `options` |  |
| `parent` |  |
| `platform_id` |  |
| `root` |  |
| `type` |  |

Operations: list, load.

API path: `/events`

#### Group

| Field | Description |
| --- | --- |
| `description` |  |
| `employer_id` |  |
| `enrolment_type` |  |
| `group_policy_ids` |  |
| `group_policy_intent_ids` |  |
| `group_quote_intent_ids` |  |
| `group_type` |  |
| `id` |  |
| `name` |  |
| `object` |  |
| `status` |  |

Operations: create, list, load, update.

API path: `/groups`

#### GroupEmployee

| Field | Description |
| --- | --- |
| `desired_policy_start_date` |  |
| `eligibility_status` |  |
| `enrolment_date` |  |
| `enrolment_status` |  |
| `enrolments` |  |
| `group_id` |  |
| `id` |  |
| `object` |  |
| `policies` |  |
| `scheduled_group_transitions` |  |

Operations: create.

API path: `/groups/{group_id}/employees`

#### GroupEmployeeResponsePagedList

| Field | Description |
| --- | --- |
| `desired_policy_start_date` |  |
| `eligibility_status` |  |
| `enrolment_date` |  |
| `enrolment_status` |  |
| `enrolments` |  |
| `group_id` |  |
| `id` |  |
| `object` |  |
| `policies` |  |
| `scheduled_group_transitions` |  |

Operations: list.

API path: `/groups/{group_id}/employees`

#### GroupPolicy

| Field | Description |
| --- | --- |
| `cancellation_date` |  |
| `disclosures` |  |
| `employer_id` |  |
| `end_date` |  |
| `group_id` |  |
| `health_insurance` |  |
| `id` |  |
| `object` |  |
| `plan` |  |
| `provider` |  |
| `start_date` |  |
| `status` |  |
| `type` |  |

Operations: list, load.

API path: `/group_policies`

#### GroupPolicyIntent

| Field | Description |
| --- | --- |
| `action_required` |  |
| `cost_sharing` |  |
| `disclosures` |  |
| `due_date` |  |
| `group_id` |  |
| `id` |  |
| `object` |  |
| `plan_id` |  |
| `quote_intent_id` |  |
| `status` |  |

Operations: create, list, load.

API path: `/group_policy_intents`

#### GroupPolicyIntentRequirementResponsePagedList

| Field | Description |
| --- | --- |
| `id` |  |
| `is_fulfilled` |  |
| `object` |  |
| `object_id` |  |
| `object_type` |  |
| `requirement_type` |  |

Operations: list.

API path: `/group_policy_intents/{group_policy_intent_id}/requirements`

#### GroupQuote

| Field | Description |
| --- | --- |
| `family_type` |  |
| `member_count` |  |
| `member_selection` |  |
| `percentage` |  |
| `type` |  |

Operations: load.

API path: `/group_quote_intents/{group_quote_intent_id}/quote`

#### GroupQuoteIntent

| Field | Description |
| --- | --- |
| `action_required` |  |
| `consent_links` |  |
| `cost_sharing` |  |
| `disclosures` |  |
| `expected_start_date` |  |
| `group_id` |  |
| `id` |  |
| `object` |  |
| `plan_id` |  |
| `status` |  |

Operations: create, list, load.

API path: `/group_quote_intents/{group_quote_intent_id}/reject`

#### GroupQuoteIntentRequirementResponsePagedList

| Field | Description |
| --- | --- |
| `id` |  |
| `is_fulfilled` |  |
| `object` |  |
| `object_id` |  |
| `object_type` |  |
| `requirement_type` |  |

Operations: list.

API path: `/group_quote_intents/{group_quote_intent_id}/requirements`

#### Plan

| Field | Description |
| --- | --- |
| `available_from` |  |
| `available_to` |  |
| `country` |  |
| `coverage_options` |  |
| `description` |  |
| `disclosures` |  |
| `documents` |  |
| `eligible_count` |  |
| `employee_eligibility_criteria` |  |
| `employer_eligibility_criteria` |  |
| `health_insurance` |  |
| `id` |  |
| `ineligible_count` |  |
| `name` |  |
| `object` |  |
| `provider` |  |
| `total_count` |  |
| `type` |  |

Operations: list, load.

API path: `/plans`

#### Policy

| Field | Description |
| --- | --- |
| `bundling_type` |  |
| `cancellation_date` |  |
| `disclosures` |  |
| `employee_id` |  |
| `end_date` |  |
| `group_id` |  |
| `group_policy_id` |  |
| `health_insurance` |  |
| `id` |  |
| `object` |  |
| `plan` |  |
| `provider` |  |
| `start_date` |  |
| `status` |  |
| `type` |  |

Operations: list, load.

API path: `/policies`

#### PolicyAmendmentIntent

| Field | Description |
| --- | --- |
| `amendment_reason` |  |
| `disclosures` |  |
| `id` |  |
| `object` |  |
| `pending_confirmation` |  |
| `policy_id` |  |
| `processing_error` |  |
| `requested_changes` |  |
| `required_action` |  |
| `status` |  |

Operations: create, list, load.

API path: `/policies/{policy_id}/policy_amendment_intents/{id}/cancel`

#### PolicyImportIntent

| Field | Description |
| --- | --- |
| `associated_persons` |  |
| `employee_id` |  |
| `group_id` |  |
| `id` |  |
| `member_number` |  |
| `object` |  |
| `policy_end_date` |  |
| `policy_start_date` |  |
| `provider_policy_number` |  |
| `status` |  |

Operations: create, list, load.

API path: `/policy_import_intents`

#### Provider

| Field | Description |
| --- | --- |
| `description` |  |
| `employer_platform_url` |  |
| `id` |  |
| `kota_hub_url` |  |
| `logo_url` |  |
| `name` |  |
| `object` |  |
| `support_phone` |  |
| `supported_countries` |  |
| `website_url` |  |

Operations: list, load.

API path: `/providers`

#### Replay

| Field | Description |
| --- | --- |
| `deliveries` |  |
| `event_id` |  |

Operations: create.

API path: `/events/{event_id}/replay`

#### WebhookEndpoint

| Field | Description |
| --- | --- |
| `created_at` |  |
| `endpoint_url` |  |
| `id` |  |
| `object` |  |
| `subscribed_events` |  |

Operations: load.

API path: `/webhooks/endpoints/{webhook_endpoint_id}`

#### WebhookEndpointResponsePagedList

| Field | Description |
| --- | --- |
| `created_at` |  |
| `endpoint_url` |  |
| `id` |  |
| `object` |  |
| `subscribed_events` |  |

Operations: list.

API path: `/webhooks/endpoints`



## Entities


### AssociatedPerson

Create an instance: `const associated_person = client.AssociatedPerson()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date_of_birth` | `string` |  |
| `email` | `null | string` |  |
| `employee_id` | `string` |  |
| `first_name` | `string` |  |
| `id` | `string` |  |
| `last_name` | `string` |  |
| `object` | `string` |  |
| `phone_number` | `null | string` |  |
| `platform_id` | `string` |  |
| `relationship_type` | `any` |  |
| `sex_at_birth` | `any` |  |

#### Example: Load

```ts
const associated_person = await client.AssociatedPerson().load({ id: 'associated_person_id', employee_id: 'employee_id' })
```

#### Example: List

```ts
const associated_persons = await client.AssociatedPerson().list({ employee_id: "example" })
```

#### Example: Create

```ts
const associated_person = await client.AssociatedPerson().create({
  employee_id: 'example_employee_id',
  date_of_birth: 'example_date_of_birth',
  first_name: 'example_first_name',
  id: 'example_id',
  last_name: 'example_last_name',
  relationship_type: 'example_relationship_type',
  sex_at_birth: 'example_sex_at_birth',
})
```


### AssociatedPersonEligibilityResponsePagedList

Create an instance: `const associated_person_eligibility_response_paged_list = client.AssociatedPersonEligibilityResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_person_id` | `string` |  |
| `date_of_birth` | `string` |  |
| `eligibility_status` | `any` |  |
| `first_name` | `string` |  |
| `ineligibility_reason` | `null | string` |  |
| `last_name` | `string` |  |
| `object` | `string` |  |
| `relationship` | `any` |  |
| `sex_at_birth` | `any` |  |

#### Example: List

```ts
const associated_person_eligibility_response_paged_lists = await client.AssociatedPersonEligibilityResponsePagedList().list({ dependents_management_intent_id: "example" })
```


### ContributionReport

Create an instance: `const contribution_report = client.ContributionReport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `null | string` |  |
| `finalized_at` | `null | string` |  |
| `id` | `string` |  |
| `last_updated_at` | `string` |  |
| `object` | `string` |  |
| `period` | `any` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const contribution_report = await client.ContributionReport().load({ id: 'contribution_report_id' })
```

#### Example: List

```ts
const contribution_reports = await client.ContributionReport().list()
```

#### Example: Create

```ts
const contribution_report = await client.ContributionReport().create({
  id: 'example_id',
  created_at: 'example_created_at',
  employer_id: 'example_employer_id',
  last_updated_at: 'example_last_updated_at',
  period: 'example_period',
  status: 'example_status',
})
```


### ContributionReportEmployeeBreakdown

Create an instance: `const contribution_report_employee_breakdown = client.ContributionReportEmployeeBreakdown()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contribution_report_id` | `string` |  |
| `created_at` | `string` |  |
| `currency` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `null | string` |  |
| `finalized_at` | `null | string` |  |
| `health_insurance` | `any` |  |
| `last_updated_at` | `string` |  |
| `object` | `string` |  |
| `period` | `any` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const contribution_report_employee_breakdown = await client.ContributionReportEmployeeBreakdown().load({ id: 'contribution_report_employee_breakdown_id', contribution_report_id: 'contribution_report_id' })
```


### ContributionReportEmployeeBreakdownResponsePagedList

Create an instance: `const contribution_report_employee_breakdown_response_paged_list = client.ContributionReportEmployeeBreakdownResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contribution_report_id` | `string` |  |
| `created_at` | `string` |  |
| `currency` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `null | string` |  |
| `finalized_at` | `null | string` |  |
| `health_insurance` | `any` |  |
| `last_updated_at` | `string` |  |
| `object` | `string` |  |
| `period` | `any` |  |
| `status` | `any` |  |

#### Example: List

```ts
const contribution_report_employee_breakdown_response_paged_lists = await client.ContributionReportEmployeeBreakdownResponsePagedList().list({ id: "example" })
```


### CreateHostedSessionToken

Create an instance: `const create_hosted_session_token = client.CreateHostedSessionToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expiry` | `string` |  |
| `link` | `string` |  |

#### Example: Create

```ts
const create_hosted_session_token = await client.CreateHostedSessionToken().create({
  expiry: 'example_expiry',
  link: 'example_link',
})
```


### CreateSessionToken

Create an instance: `const create_session_token = client.CreateSessionToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expiry` | `string` |  |
| `token` | `string` |  |

#### Example: Create

```ts
const create_session_token = await client.CreateSessionToken().create({
  expiry: 'example_expiry',
  token: 'example_token',
})
```


### Dependent

Create an instance: `const dependent = client.Dependent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `null` |  |
| `coverage_options` | `null | any[]` |  |
| `dependents` | `any[]` |  |
| `disclosures` | `any[]` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `parent_intent_id` | `string` |  |
| `parent_intent_type` | `any` |  |
| `plan` | `any` |  |
| `status` | `any` |  |

#### Example: Create

```ts
const dependent = await client.Dependent().create({
  dependents_management_intent_id: 'example_dependents_management_intent_id',
  dependents: [],
  disclosures: [],
  id: 'example_id',
  parent_intent_id: 'example_parent_intent_id',
  parent_intent_type: 'example_parent_intent_type',
  plan: 'example_plan',
  status: 'example_status',
})
```


### DependentsManagementIntent

Create an instance: `const dependents_management_intent = client.DependentsManagementIntent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `null` |  |
| `coverage_options` | `null | any[]` |  |
| `dependents` | `any[]` |  |
| `disclosures` | `any[]` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `parent_intent_id` | `string` |  |
| `parent_intent_type` | `any` |  |
| `plan` | `any` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const dependents_management_intent = await client.DependentsManagementIntent().load({ id: 'dependents_management_intent_id' })
```

#### Example: Create

```ts
const dependents_management_intent = await client.DependentsManagementIntent().create({
  dependents: [],
  disclosures: [],
  id: 'example_id',
  parent_intent_id: 'example_parent_intent_id',
  parent_intent_type: 'example_parent_intent_type',
  plan: 'example_plan',
  status: 'example_status',
})
```


### EligibilityCheck

Create an instance: `const eligibility_check = client.EligibilityCheck()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `eligibility_status` | `any` |  |
| `object` | `string` |  |
| `plan` | `any` |  |
| `provider` | `any` |  |
| `reasons` | `any[]` |  |

#### Example: Create

```ts
const eligibility_check = await client.EligibilityCheck().create({
  group_id: 'example_group_id',
  eligibility_status: 'example_eligibility_status',
  plan: 'example_plan',
  provider: 'example_provider',
  reasons: [],
})
```


### Employee

Create an instance: `const employee = client.Employee()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bank_account` | `null` |  |
| `date_of_birth` | `string` |  |
| `earliest_benefits_start_date` | `null | string` |  |
| `email` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `null | string` |  |
| `first_name` | `string` |  |
| `home_address` | `null` |  |
| `id` | `string` |  |
| `last_name` | `string` |  |
| `metadata` | `null | Record<string, any>` |  |
| `national_tax_id` | `string` |  |
| `nationality` | `null` |  |
| `object` | `string` |  |
| `offboard_on` | `null | string` |  |
| `phone_number` | `string` |  |
| `platform_id` | `string` |  |
| `sex_at_birth` | `any` |  |
| `start_on` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const employee = await client.Employee().load({ id: 'employee_id' })
```

#### Example: List

```ts
const employees = await client.Employee().list()
```

#### Example: Create

```ts
const employee = await client.Employee().create({
  date_of_birth: 'example_date_of_birth',
  email: 'example_email',
  first_name: 'example_first_name',
  last_name: 'example_last_name',
  national_tax_id: 'example_national_tax_id',
  phone_number: 'example_phone_number',
  sex_at_birth: 'example_sex_at_birth',
})
```


### EmployeeHealthInsuranceOffer

Create an instance: `const employee_health_insurance_offer = client.EmployeeHealthInsuranceOffer()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_level` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `null | string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `required_action` | `null` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const employee_health_insurance_offer = await client.EmployeeHealthInsuranceOffer().load({ id: 'employee_health_insurance_offer_id', employee_id: 'employee_id' })
```


### EmployeeHealthInsuranceOfferResponsePagedList

Create an instance: `const employee_health_insurance_offer_response_paged_list = client.EmployeeHealthInsuranceOfferResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_level` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `null | string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `required_action` | `null` |  |
| `status` | `any` |  |

#### Example: List

```ts
const employee_health_insurance_offer_response_paged_lists = await client.EmployeeHealthInsuranceOfferResponsePagedList().list({ employee_id: "example" })
```


### EmployeeHealthInsurancePolicy

Create an instance: `const employee_health_insurance_policy = client.EmployeeHealthInsurancePolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `null | string` |  |
| `coverage_level` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolled_dependants_count` | `number` |  |
| `enrolment_type` | `any` |  |
| `estimated_gross_premium` | `any` |  |
| `external_customer_id` | `null | string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `opt_out_deadline_date` | `string` |  |
| `policy_number` | `null | string` |  |
| `renewal` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const employee_health_insurance_policy = await client.EmployeeHealthInsurancePolicy().load({ id: 'employee_health_insurance_policy_id', employee_id: 'employee_id' })
```


### EmployeeHealthInsurancePolicyResponsePagedList

Create an instance: `const employee_health_insurance_policy_response_paged_list = client.EmployeeHealthInsurancePolicyResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `null | string` |  |
| `coverage_level` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolled_dependants_count` | `number` |  |
| `enrolment_type` | `any` |  |
| `estimated_gross_premium` | `any` |  |
| `external_customer_id` | `null | string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `opt_out_deadline_date` | `string` |  |
| `policy_number` | `null | string` |  |
| `renewal` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |

#### Example: List

```ts
const employee_health_insurance_policy_response_paged_lists = await client.EmployeeHealthInsurancePolicyResponsePagedList().list({ employee_id: "example" })
```


### Employer

Create an instance: `const employer = client.Employer()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contact` | `any` |  |
| `earliest_benefits_start_date` | `null | string` |  |
| `id` | `string` |  |
| `legal_address` | `any` |  |
| `legal_name` | `string` |  |
| `metadata` | `null | Record<string, any>` |  |
| `object` | `string` |  |
| `offboard_on` | `null | string` |  |
| `platform_id` | `string` |  |
| `registration_number` | `null | string` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const employer = await client.Employer().load({ id: 'employer_id' })
```

#### Example: List

```ts
const employers = await client.Employer().list()
```

#### Example: Create

```ts
const employer = await client.Employer().create({
  contact: 'example_contact',
  id: 'example_id',
  legal_address: 'example_legal_address',
  legal_name: 'example_legal_name',
})
```


### EmployerHealthInsurancePolicy

Create an instance: `const employer_health_insurance_policy = client.EmployerHealthInsurancePolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `null | string` |  |
| `coverage_levels` | `any[]` |  |
| `employer_cancellation_period_length` | `number` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolment_type` | `any` |  |
| `group_policy_number` | `null | string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `renewal` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const employer_health_insurance_policy = await client.EmployerHealthInsurancePolicy().load({ id: 'employer_health_insurance_policy_id', employer_id: 'employer_id' })
```


### EmployerHealthInsurancePolicyResponsePagedList

Create an instance: `const employer_health_insurance_policy_response_paged_list = client.EmployerHealthInsurancePolicyResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `null | string` |  |
| `coverage_levels` | `any[]` |  |
| `employer_cancellation_period_length` | `number` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolment_type` | `any` |  |
| `group_policy_number` | `null | string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `renewal` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |

#### Example: List

```ts
const employer_health_insurance_policy_response_paged_lists = await client.EmployerHealthInsurancePolicyResponsePagedList().list({ employer_id: "example" })
```


### EmployerHealthInsuranceQuote

Create an instance: `const employer_health_insurance_quote = client.EmployerHealthInsuranceQuote()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_levels` | `any[]` |  |
| `employer_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `quoted_at` | `string` |  |
| `required_action` | `null` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const employer_health_insurance_quote = await client.EmployerHealthInsuranceQuote().load({ id: 'employer_health_insurance_quote_id', employer_id: 'employer_id' })
```


### EmployerHealthInsuranceQuoteResponsePagedList

Create an instance: `const employer_health_insurance_quote_response_paged_list = client.EmployerHealthInsuranceQuoteResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_levels` | `any[]` |  |
| `employer_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `quoted_at` | `string` |  |
| `required_action` | `null` |  |
| `status` | `any` |  |

#### Example: List

```ts
const employer_health_insurance_quote_response_paged_lists = await client.EmployerHealthInsuranceQuoteResponsePagedList().list({ employer_id: "example" })
```


### EnrolmentIntent

Create an instance: `const enrolment_intent = client.EnrolmentIntent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `null` |  |
| `disclosures` | `any[]` |  |
| `employee_id` | `string` |  |
| `force_confirmation` | `boolean` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `ineligibility_reason` | `null` |  |
| `object` | `string` |  |
| `pending_confirmation` | `null` |  |
| `policy_configuration` | `null` |  |
| `policy_enrolments` | `any[]` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const enrolment_intent = await client.EnrolmentIntent().load({ id: 'enrolment_intent_id' })
```

#### Example: List

```ts
const enrolment_intents = await client.EnrolmentIntent().list()
```

#### Example: Create

```ts
const enrolment_intent = await client.EnrolmentIntent().create({
  disclosures: [],
  employee_id: 'example_employee_id',
  force_confirmation: true,
  group_id: 'example_group_id',
  id: 'example_id',
  policy_enrolments: [],
  status: 'example_status',
})
```


### EnrolmentIntentRequirementResponsePagedList

Create an instance: `const enrolment_intent_requirement_response_paged_list = client.EnrolmentIntentRequirementResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `is_fulfilled` | `boolean` |  |
| `object` | `string` |  |
| `object_id` | `string` |  |
| `object_type` | `any` |  |
| `requirement_type` | `any` |  |

#### Example: List

```ts
const enrolment_intent_requirement_response_paged_lists = await client.EnrolmentIntentRequirementResponsePagedList().list({ id: "example" })
```


### Event

Create an instance: `const event = client.Event()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_version` | `string` |  |
| `created` | `string` |  |
| `data` | `null` |  |
| `id` | `string` |  |
| `options` | `null` |  |
| `parent` | `null` |  |
| `platform_id` | `string` |  |
| `root` | `any` |  |
| `type` | `string` |  |

#### Example: Load

```ts
const event = await client.Event().load({ id: 'event_id' })
```

#### Example: List

```ts
const events = await client.Event().list()
```


### Group

Create an instance: `const group = client.Group()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `null | string` |  |
| `employer_id` | `string` |  |
| `enrolment_type` | `any` |  |
| `group_policy_ids` | `any[]` |  |
| `group_policy_intent_ids` | `any[]` |  |
| `group_quote_intent_ids` | `any[]` |  |
| `group_type` | `any` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `object` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const group = await client.Group().load({ id: 'group_id' })
```

#### Example: List

```ts
const groups = await client.Group().list()
```

#### Example: Create

```ts
const group = await client.Group().create({
  employer_id: 'example_employer_id',
  enrolment_type: 'example_enrolment_type',
  group_policy_ids: [],
  group_policy_intent_ids: [],
  group_quote_intent_ids: [],
  group_type: 'example_group_type',
  id: 'example_id',
  name: 'example_name',
  status: 'example_status',
})
```


### GroupEmployee

Create an instance: `const group_employee = client.GroupEmployee()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desired_policy_start_date` | `null | string` |  |
| `eligibility_status` | `any` |  |
| `enrolment_date` | `null | string` |  |
| `enrolment_status` | `any` |  |
| `enrolments` | `any[]` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `policies` | `any[]` |  |
| `scheduled_group_transitions` | `any[]` |  |

#### Example: Create

```ts
const group_employee = await client.GroupEmployee().create({
  id: 'example_id',
  eligibility_status: 'example_eligibility_status',
  enrolment_status: 'example_enrolment_status',
  enrolments: [],
  group_id: 'example_group_id',
  policies: [],
  scheduled_group_transitions: [],
})
```


### GroupEmployeeResponsePagedList

Create an instance: `const group_employee_response_paged_list = client.GroupEmployeeResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desired_policy_start_date` | `null | string` |  |
| `eligibility_status` | `any` |  |
| `enrolment_date` | `null | string` |  |
| `enrolment_status` | `any` |  |
| `enrolments` | `any[]` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `policies` | `any[]` |  |
| `scheduled_group_transitions` | `any[]` |  |

#### Example: List

```ts
const group_employee_response_paged_lists = await client.GroupEmployeeResponsePagedList().list({ id: "example" })
```


### GroupPolicy

Create an instance: `const group_policy = client.GroupPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `null | string` |  |
| `disclosures` | `any[]` |  |
| `employer_id` | `string` |  |
| `end_date` | `null | string` |  |
| `group_id` | `string` |  |
| `health_insurance` | `null` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan` | `any` |  |
| `provider` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |
| `type` | `any` |  |

#### Example: Load

```ts
const group_policy = await client.GroupPolicy().load({ id: 'group_policy_id' })
```

#### Example: List

```ts
const group_policys = await client.GroupPolicy().list()
```


### GroupPolicyIntent

Create an instance: `const group_policy_intent = client.GroupPolicyIntent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `null` |  |
| `cost_sharing` | `null` |  |
| `disclosures` | `any[]` |  |
| `due_date` | `null | string` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan_id` | `string` |  |
| `quote_intent_id` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const group_policy_intent = await client.GroupPolicyIntent().load({ id: 'group_policy_intent_id' })
```

#### Example: List

```ts
const group_policy_intents = await client.GroupPolicyIntent().list()
```

#### Example: Create

```ts
const group_policy_intent = await client.GroupPolicyIntent().create({
  disclosures: [],
  group_id: 'example_group_id',
  id: 'example_id',
  plan_id: 'example_plan_id',
  quote_intent_id: 'example_quote_intent_id',
  status: 'example_status',
})
```


### GroupPolicyIntentRequirementResponsePagedList

Create an instance: `const group_policy_intent_requirement_response_paged_list = client.GroupPolicyIntentRequirementResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `is_fulfilled` | `boolean` |  |
| `object` | `string` |  |
| `object_id` | `string` |  |
| `object_type` | `any` |  |
| `requirement_type` | `any` |  |

#### Example: List

```ts
const group_policy_intent_requirement_response_paged_lists = await client.GroupPolicyIntentRequirementResponsePagedList().list({ id: "example" })
```


### GroupQuote

Create an instance: `const group_quote = client.GroupQuote()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `family_type` | `null` |  |
| `member_count` | `null` |  |
| `member_selection` | `null` |  |
| `percentage` | `null` |  |
| `type` | `any` |  |

#### Example: Load

```ts
const group_quote = await client.GroupQuote().load({ group_quote_intent_id: 'group_quote_intent_id' })
```


### GroupQuoteIntent

Create an instance: `const group_quote_intent = client.GroupQuoteIntent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `null` |  |
| `consent_links` | `any[]` |  |
| `cost_sharing` | `null` |  |
| `disclosures` | `any[]` |  |
| `expected_start_date` | `null | string` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan_id` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const group_quote_intent = await client.GroupQuoteIntent().load({ id: 'group_quote_intent_id' })
```

#### Example: List

```ts
const group_quote_intents = await client.GroupQuoteIntent().list()
```

#### Example: Create

```ts
const group_quote_intent = await client.GroupQuoteIntent().create({
  consent_links: [],
  disclosures: [],
  group_id: 'example_group_id',
  id: 'example_id',
  plan_id: 'example_plan_id',
  status: 'example_status',
})
```


### GroupQuoteIntentRequirementResponsePagedList

Create an instance: `const group_quote_intent_requirement_response_paged_list = client.GroupQuoteIntentRequirementResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `is_fulfilled` | `boolean` |  |
| `object` | `string` |  |
| `object_id` | `string` |  |
| `object_type` | `any` |  |
| `requirement_type` | `any` |  |

#### Example: List

```ts
const group_quote_intent_requirement_response_paged_lists = await client.GroupQuoteIntentRequirementResponsePagedList().list({ id: "example" })
```


### Plan

Create an instance: `const plan = client.Plan()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_from` | `string` |  |
| `available_to` | `null | string` |  |
| `country` | `any` |  |
| `coverage_options` | `null | any[]` |  |
| `description` | `string` |  |
| `disclosures` | `any[]` |  |
| `documents` | `any[]` |  |
| `eligible_count` | `null | number` |  |
| `employee_eligibility_criteria` | `any[]` |  |
| `employer_eligibility_criteria` | `any[]` |  |
| `health_insurance` | `null` |  |
| `id` | `string` |  |
| `ineligible_count` | `null | number` |  |
| `name` | `string` |  |
| `object` | `string` |  |
| `provider` | `any` |  |
| `total_count` | `null | number` |  |
| `type` | `any` |  |

#### Example: Load

```ts
const plan = await client.Plan().load({ id: 'plan_id' })
```

#### Example: List

```ts
const plans = await client.Plan().list()
```


### Policy

Create an instance: `const policy = client.Policy()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bundling_type` | `any` |  |
| `cancellation_date` | `null | string` |  |
| `disclosures` | `any[]` |  |
| `employee_id` | `string` |  |
| `end_date` | `null | string` |  |
| `group_id` | `string` |  |
| `group_policy_id` | `string` |  |
| `health_insurance` | `null` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan` | `any` |  |
| `provider` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |
| `type` | `any` |  |

#### Example: Load

```ts
const policy = await client.Policy().load({ id: 'policy_id' })
```

#### Example: List

```ts
const policys = await client.Policy().list()
```


### PolicyAmendmentIntent

Create an instance: `const policy_amendment_intent = client.PolicyAmendmentIntent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amendment_reason` | `any` |  |
| `disclosures` | `any[]` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `pending_confirmation` | `null` |  |
| `policy_id` | `string` |  |
| `processing_error` | `null` |  |
| `requested_changes` | `any[]` |  |
| `required_action` | `null` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const policy_amendment_intent = await client.PolicyAmendmentIntent().load({ id: 'policy_amendment_intent_id', policy_id: 'policy_id' })
```

#### Example: List

```ts
const policy_amendment_intents = await client.PolicyAmendmentIntent().list({ id: "example_id" })
```

#### Example: Create

```ts
const policy_amendment_intent = await client.PolicyAmendmentIntent().create({
  id: 'example_id',
  amendment_reason: 'example_amendment_reason',
  disclosures: [],
  policy_id: 'example_policy_id',
  requested_changes: [],
  status: 'example_status',
})
```


### PolicyImportIntent

Create an instance: `const policy_import_intent = client.PolicyImportIntent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_persons` | `any[]` |  |
| `employee_id` | `string` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `member_number` | `string` |  |
| `object` | `string` |  |
| `policy_end_date` | `null | string` |  |
| `policy_start_date` | `string` |  |
| `provider_policy_number` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```ts
const policy_import_intent = await client.PolicyImportIntent().load({ id: 'policy_import_intent_id' })
```

#### Example: List

```ts
const policy_import_intents = await client.PolicyImportIntent().list()
```

#### Example: Create

```ts
const policy_import_intent = await client.PolicyImportIntent().create({
  associated_persons: [],
  employee_id: 'example_employee_id',
  group_id: 'example_group_id',
  id: 'example_id',
  member_number: 'example_member_number',
  policy_start_date: 'example_policy_start_date',
  provider_policy_number: 'example_provider_policy_number',
  status: 'example_status',
})
```


### Provider

Create an instance: `const provider = client.Provider()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `employer_platform_url` | `null | string` |  |
| `id` | `string` |  |
| `kota_hub_url` | `null | string` |  |
| `logo_url` | `string` |  |
| `name` | `string` |  |
| `object` | `string` |  |
| `support_phone` | `string` |  |
| `supported_countries` | `any[]` |  |
| `website_url` | `string` |  |

#### Example: Load

```ts
const provider = await client.Provider().load({ id: 'provider_id' })
```

#### Example: List

```ts
const providers = await client.Provider().list()
```


### Replay

Create an instance: `const replay = client.Replay()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deliveries` | `any[]` |  |
| `event_id` | `string` |  |

#### Example: Create

```ts
const replay = await client.Replay().create({
  event_id: 'example_event_id',
  deliveries: [],
})
```


### WebhookEndpoint

Create an instance: `const webhook_endpoint = client.WebhookEndpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `endpoint_url` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `subscribed_events` | `any[]` |  |

#### Example: Load

```ts
const webhook_endpoint = await client.WebhookEndpoint().load({ id: 'webhook_endpoint_id' })
```


### WebhookEndpointResponsePagedList

Create an instance: `const webhook_endpoint_response_paged_list = client.WebhookEndpointResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `endpoint_url` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `subscribed_events` | `any[]` |  |

#### Example: List

```ts
const webhook_endpoint_response_paged_lists = await client.WebhookEndpointResponsePagedList().list()
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
kota/
├── src/
│   ├── KotaSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { KotaSDK } from '@voxgig-sdk/kota'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const dependentsmanagementintent = client.DependentsManagementIntent()
await dependentsmanagementintent.load({ id: "example_id" })

// dependentsmanagementintent.data() now returns the dependentsmanagementintent data from the last `load`
// dependentsmanagementintent.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
