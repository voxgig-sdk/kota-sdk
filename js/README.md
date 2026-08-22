# Kota JavaScript SDK



The JavaScript SDK for the Kota API — an entity-oriented client with full async/await support.

The API is exposed as capitalised, semantic **Entities** — e.g.
`client.AssociatedPerson()` — each with a small set of operations (`list`, `load`, `create`, `update`, `remove`)
instead of raw URL paths and query parameters. This keeps the surface
predictable and low-friction for both humans and AI agents.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```js
npm install kota
```
## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.


### Create a Client

```js
const { KotaSDK } = require('@voxgig-sdk/kota-js')

const client = new KotaSDK({
  apikey: process.env.KOTA_APIKEY,
})
```

### Load an AssociatedPerson

```js
const associated_person = await client.AssociatedPerson().load({ id: 'associated_person_id', employee_id: 'example_employee_id' })
console.log(associated_person)
```

### List AssociatedPerson Records

```js
const associated_persons = await client.AssociatedPerson().list({ employee_id: "example" })
for (const associated_person of associated_persons) {
  console.log(associated_person)
}
```

### Create a AssociatedPerson

```js
const created = await client.AssociatedPerson().create({
  employee_id: 'example_employee_id',
  date_of_birth: 'example_date_of_birth',
  first_name: 'example_first_name',
  id: 'example_id',
  last_name: 'example_last_name',
  relationship_type: 'example_relationship_type',
  sex_at_birth: 'example_sex_at_birth',
})
console.log(created)
```

### Update a AssociatedPerson

```js
const updated = await client.AssociatedPerson().update({
  id: 'associated_person_id',
  employee_id: 'example_employee_id',
  date_of_birth: 'example_date_of_birth',
})
console.log(updated)
```

### Remove a AssociatedPerson

```js
await client.AssociatedPerson().remove({ id: 'associated_person_id', employee_id: 'example_employee_id' })
```

### Direct API Access

Use `client.direct()` to call any API endpoint directly:

```js
const result = await client.direct({
  path: '/custom/endpoint/{id}',
  method: 'GET',
  params: { id: 'abc123' },
})

if (result.ok) {
  console.log(result.data)
}
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

```js
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

```js
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

```js
const client = KotaSDK.test()

const dependentsmanagementintent = await client.DependentsManagementIntent().load({ id: 'test01' })
// dependentsmanagementintent is the entity, populated with mock response data
// — call dependentsmanagementintent.data() for the record itself
console.log(dependentsmanagementintent)
```

You can also use the instance method:

```js
const client = new KotaSDK({ apikey: '...' })
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```js
const entity = client.DependentsManagementIntent()

// First call runs the operation and stores its result
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored state
const data = entity.data()
console.log(data.id)
```

### Add custom middleware

Pass features via the `extend` option:

```js
const logger = {
  hooks: {
    PreRequest: (ctx) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx) => {
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
cd js && npm test
```


## Reference

### KotaSDK

#### Constructor

```js
new KotaSDK(options?)
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
- `remove` resolves to `undefined`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```js
{
  ok: true,
  status: 200,
  headers: {},
  data: {}
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```js
{
  url: 'string',
  method: 'string',
  headers: {},
  body: undefined
}
```

### Entities

#### AssociatedPerson

| Field | Description |
| --- | --- |
| `date_of_birth` | Date of birth of the associated person |
| `email` | Email address of the associated person |
| `employee_id` | Unique identifier for the employee this person is associated with |
| `first_name` | First name of the associated person |
| `id` | Unique identifier for the associated person |
| `last_name` | Last name of the associated person |
| `object` | The object type |
| `phone_number` | Phone number in E.164 international format (e.g. |
| `platform_id` | Unique identifier for the platform |
| `relationship_type` | The relationship type between the employee and the associated person |
| `sex_at_birth` | The sex assigned to the associated person at birth |

Operations: create, list, load, remove, update.

API path: `/employees/{employee_id}/associated_persons`

#### AssociatedPersonEligibilityResponsePagedList

| Field | Description |
| --- | --- |
| `associated_person_id` | The associated person ID. |
| `date_of_birth` | Date of birth of the associated person. |
| `eligibility_status` | Eligibility status for the policy/plan. |
| `first_name` | First name of the associated person. |
| `ineligibility_reason` | Reason for ineligibility if status is ineligible. |
| `last_name` | Last name of the associated person. |
| `object` | The object type |
| `relationship` | Relationship type to the employee. |
| `sex_at_birth` | Sex at birth of the associated person. |

Operations: list.

API path: `/dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility`

#### ContributionReport

| Field | Description |
| --- | --- |
| `created_at` | Date and time the report was created |
| `employer_id` | Unique identifier of the employer for which the report is created |
| `external_customer_id` | Unique identifier of the customer for which the report is created. |
| `finalized_at` | Date and time the report was finalized, if applicable |
| `id` | Unique identifier for the contribution report |
| `last_updated_at` | Date and time of the last update to the report |
| `object` | The object type |
| `period` | Period covered by the contribution report |
| `status` | Current status of the contribution report |

Operations: create, list, load.

API path: `/contribution_reports/{contribution_report_id}/finalize`

#### ContributionReportEmployeeBreakdown

| Field | Description |
| --- | --- |
| `contribution_report_id` | Unique identifier of the related contribution report |
| `created_at` | Date and time the breakdown was created |
| `currency` | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | Health insurance contribution details |
| `last_updated_at` | Date and time of the last update to the breakdown |
| `object` | The object type |
| `period` | Period covered by the employee breakdown |
| `status` | Current status of the breakdown |

Operations: load.

API path: `/contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}`

#### ContributionReportEmployeeBreakdownResponsePagedList

| Field | Description |
| --- | --- |
| `contribution_report_id` | Unique identifier of the related contribution report |
| `created_at` | Date and time the breakdown was created |
| `currency` | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | Health insurance contribution details |
| `last_updated_at` | Date and time of the last update to the breakdown |
| `object` | The object type |
| `period` | Period covered by the employee breakdown |
| `status` | Current status of the breakdown |

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
| `action_required` | Details of the action required from the caller. |
| `coverage_options` | Available member-scoped coverage options for the plan. |
| `dependents` | List of dependents being managed. |
| `disclosures` | Disclosures associated with this intent. |
| `id` | Unique identifier for the dependents management intent. |
| `object` | Object type identifier. |
| `parent_intent_id` | The parent intent ID (e.g. |
| `parent_intent_type` | The type of parent intent. |
| `plan` | Plan information including pricing details. |
| `status` | Current status of the dependents management intent. |

Operations: create, remove.

API path: `/dependents_management_intents/{dependents_management_intent_id}/dependents`

#### DependentsManagementIntent

| Field | Description |
| --- | --- |
| `action_required` | Details of the action required from the caller. |
| `coverage_options` | Available member-scoped coverage options for the plan. |
| `dependents` | List of dependents being managed. |
| `disclosures` | Disclosures associated with this intent. |
| `id` | Unique identifier for the dependents management intent. |
| `object` | Object type identifier. |
| `parent_intent_id` | The parent intent ID (e.g. |
| `parent_intent_type` | The type of parent intent. |
| `plan` | Plan information including pricing details. |
| `status` | Current status of the dependents management intent. |

Operations: create, load.

API path: `/policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent`

#### EligibilityCheck

| Field | Description |
| --- | --- |
| `eligibility_status` | Eligibility status: `eligible` or `ineligible`. |
| `object` | The object type. |
| `plan` | The insurance plan associated with the group. |
| `provider` | The insurance provider associated with the group. |
| `reasons` | List of reasons why the employee is ineligible. |

Operations: create.

API path: `/groups/{group_id}/eligibility_check`

#### Employee

| Field | Description |
| --- | --- |
| `bank_account` | Bank account details |
| `date_of_birth` | Date of birth of the employee |
| `earliest_benefits_start_date` | The earliest date this employee can be enrolled in any benefits. |
| `email` | Email address of the employee |
| `employer_id` | Unique identifier for the employer |
| `external_customer_id` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `first_name` | First name of the employee. |
| `home_address` | Location where the employee is legally registered to live |
| `id` | Unique identifier for the employee |
| `last_name` | Last name of the employee |
| `metadata` | Set of key-value pairs that you can attach to an object. |
| `national_tax_id` | PPSN in Ireland, NINo in the UK, DNI/NIE in Spain |
| `nationality` | Nationality of the employee (e.g. |
| `object` | The object type |
| `offboard_on` | Date when the employee was or will be offboarded |
| `phone_number` | Phone number in E.164 international format (e.g. |
| `platform_id` | Unique identifier for the platform |
| `sex_at_birth` | The sex assigned to the employee at birth |
| `start_on` | Employment start date |
| `status` | Current status of the employee |

Operations: create, list, load, update.

API path: `/employees/{employee_id}/offboard`

#### EmployeeHealthInsuranceOffer

| Field | Description |
| --- | --- |
| `coverage_level` | Details about the coverage level for the offer. |
| `employee_id` | The Id of the employee for which the offer is available |
| `employer_id` | The Id of the employer for which the offer is available |
| `external_customer_id` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | Unique identifier for offer |
| `object` | The object type |
| `required_action` | Required action to progress the offer, if any. |
| `status` | Current status of offer |

Operations: load.

API path: `/employees/{employee_id}/health_insurance/offers/{employee_offer_id}`

#### EmployeeHealthInsuranceOfferResponsePagedList

| Field | Description |
| --- | --- |
| `coverage_level` | Details about the coverage level for the offer. |
| `employee_id` | The Id of the employee for which the offer is available |
| `employer_id` | The Id of the employer for which the offer is available |
| `external_customer_id` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | Unique identifier for offer |
| `object` | The object type |
| `required_action` | Required action to progress the offer, if any. |
| `status` | Current status of offer |

Operations: list.

API path: `/employees/{employee_id}/health_insurance/offers`

#### EmployeeHealthInsurancePolicy

| Field | Description |
| --- | --- |
| `cancellation_date` | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | Represents the current coverage level for the policy |
| `employee_id` | The Id of the employee for which the policy is created |
| `employer_id` | The Id of the employer for which the policy is created |
| `end_date` | Policy ends on this date |
| `enrolled_dependants_count` | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | Enrolment type of the policy |
| `estimated_gross_premium` | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | Unique identifier for policy |
| `object` | The object type |
| `opt_out_deadline_date` | Last day to opt out from the policy |
| `policy_number` | Health insurance policy number, if available |
| `renewal` | Renewal information for the policy |
| `start_date` | Policy starts on this date |
| `status` | Current status of policy |

Operations: load.

API path: `/employees/{employee_id}/health_insurance/policies/{employee_policy_id}`

#### EmployeeHealthInsurancePolicyResponsePagedList

| Field | Description |
| --- | --- |
| `cancellation_date` | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | Represents the current coverage level for the policy |
| `employee_id` | The Id of the employee for which the policy is created |
| `employer_id` | The Id of the employer for which the policy is created |
| `end_date` | Policy ends on this date |
| `enrolled_dependants_count` | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | Enrolment type of the policy |
| `estimated_gross_premium` | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | Unique identifier for policy |
| `object` | The object type |
| `opt_out_deadline_date` | Last day to opt out from the policy |
| `policy_number` | Health insurance policy number, if available |
| `renewal` | Renewal information for the policy |
| `start_date` | Policy starts on this date |
| `status` | Current status of policy |

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
| `metadata` | Set of key-value pairs that you can attach to an object. |
| `object` | The object type |
| `offboard_on` |  |
| `platform_id` |  |
| `registration_number` |  |
| `status` |  |

Operations: create, list, load, update.

API path: `/employers/{employer_id}/offboard`

#### EmployerHealthInsurancePolicy

| Field | Description |
| --- | --- |
| `cancellation_date` | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | The Id of the employer for which the policy is created |
| `end_date` | Policy ends on this date |
| `enrolment_type` | Enrolment type of the policy |
| `group_policy_number` | Group’s health insurance policy number, if available |
| `id` | Unique identifier for policy |
| `object` | The object type |
| `renewal` | Renewal information for the policy |
| `start_date` | Policy starts on this date |
| `status` | Current status of policy |

Operations: load.

API path: `/employers/{employer_id}/health_insurance/policies/{employer_policy_id}`

#### EmployerHealthInsurancePolicyResponsePagedList

| Field | Description |
| --- | --- |
| `cancellation_date` | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | The Id of the employer for which the policy is created |
| `end_date` | Policy ends on this date |
| `enrolment_type` | Enrolment type of the policy |
| `group_policy_number` | Group’s health insurance policy number, if available |
| `id` | Unique identifier for policy |
| `object` | The object type |
| `renewal` | Renewal information for the policy |
| `start_date` | Policy starts on this date |
| `status` | Current status of policy |

Operations: list.

API path: `/employers/{employer_id}/health_insurance/policies`

#### EmployerHealthInsuranceQuote

| Field | Description |
| --- | --- |
| `coverage_levels` | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | The Id of the employer for which the is created |
| `id` | Unique identifier for the quote |
| `object` | The object type |
| `quoted_at` | Date and time the quote was created at |
| `required_action` | Actions required by the employer to proceed with the quote. |
| `status` | Current status of the quote |

Operations: load.

API path: `/employers/{employer_id}/health_insurance/quotes/{employer_quote_id}`

#### EmployerHealthInsuranceQuoteResponsePagedList

| Field | Description |
| --- | --- |
| `coverage_levels` | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | The Id of the employer for which the is created |
| `id` | Unique identifier for the quote |
| `object` | The object type |
| `quoted_at` | Date and time the quote was created at |
| `required_action` | Actions required by the employer to proceed with the quote. |
| `status` | Current status of the quote |

Operations: list.

API path: `/employers/{employer_id}/health_insurance/quotes`

#### EnrolmentIntent

| Field | Description |
| --- | --- |
| `action_required` | If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment. |
| `disclosures` | Disclosures associated with this intent. |
| `employee_id` | Identifier for the employee associated with this enrolment intent. |
| `force_confirmation` | If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. |
| `group_id` | Identifier for the group associated with this enrolment intent. |
| `id` | Unique identifier for the enrolment intent. |
| `ineligibility_reason` | If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility. |
| `object` | Object type identifier. |
| `pending_confirmation` | If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state. |
| `policy_configuration` | Policy configuration associated with this enrolment intent. |
| `policy_enrolments` | Policy enrolment information |
| `status` | Current status of the enrolment intent. |

Operations: create, list, load, update.

API path: `/enrolment_intents/{enrolment_intent_id}/confirm`

#### EnrolmentIntentRequirementResponsePagedList

| Field | Description |
| --- | --- |
| `id` | Unique identifier for the requirement |
| `is_fulfilled` | Whether the requirement has been fulfilled |
| `object` | Object type identifier |
| `object_id` | Identifier of the object (employee ID or employer ID) |
| `object_type` | Type of object this requirement is for (employee or employer) |
| `requirement_type` | Type of requirement |

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
| `description` | Short description of the purpose or scope of the `group`. |
| `employer_id` | Identifier for the `employer` that owns this `group`. |
| `enrolment_type` | Indicates how employees are enrolled into the group. |
| `group_policy_ids` | Group policy unique identifiers associated with this group. |
| `group_policy_intent_ids` | Group policy intent unique identifiers associated with this group. |
| `group_quote_intent_ids` | Group quote intent unique identifiers associated with this group. |
| `group_type` | Indicates how policies are organized for this group. |
| `id` | Unique identifier for the `group`. |
| `name` | Human-readable name of the `group`. |
| `object` | The object type |
| `status` | Current lifecycle state of the `group`, indicating its current progress. |

Operations: create, list, load, update.

API path: `/groups`

#### GroupEmployee

| Field | Description |
| --- | --- |
| `desired_policy_start_date` | The desired date for the employee's policy to start. |
| `eligibility_status` | Eligibility status for the employee in this group. |
| `enrolment_date` | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | Enrolment status for the employee in this group. |
| `enrolments` | List of enrolments associated with the employee in this group. |
| `group_id` | Unique identifier for the group. |
| `id` | Unique identifier for the employee. |
| `object` | The object type |
| `policies` | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | List of scheduled group transitions for the employee. |

Operations: create.

API path: `/groups/{group_id}/employees`

#### GroupEmployeeResponsePagedList

| Field | Description |
| --- | --- |
| `desired_policy_start_date` | The desired date for the employee's policy to start. |
| `eligibility_status` | Eligibility status for the employee in this group. |
| `enrolment_date` | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | Enrolment status for the employee in this group. |
| `enrolments` | List of enrolments associated with the employee in this group. |
| `group_id` | Unique identifier for the group. |
| `id` | Unique identifier for the employee. |
| `object` | The object type |
| `policies` | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | List of scheduled group transitions for the employee. |

Operations: list.

API path: `/groups/{group_id}/employees`

#### GroupPolicy

| Field | Description |
| --- | --- |
| `cancellation_date` | Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable. |
| `disclosures` | Disclosures associated with this group policy. |
| `employer_id` | Identifier for the employer associated with this group policy. |
| `end_date` | Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended. |
| `group_id` | Identifier for the group associated with this group policy. |
| `health_insurance` | Health insurance–specific fields (present when `type=health_insurance`). |
| `id` | Unique identifier for the group policy. |
| `object` | The object type |
| `plan` | Plan information for this policy |
| `provider` | Provider information for this policy. |
| `start_date` | Policy start (effective) date in ISO 8601 (YYYY-MM-DD). |
| `status` | Current lifecycle state of the `group_policy`, indicating its progress from creation to activation. |
| `type` | Policy type. |

Operations: list, load.

API path: `/group_policies`

#### GroupPolicyIntent

| Field | Description |
| --- | --- |
| `action_required` | Details of the required action when the intent is in ActionRequired status. |
| `cost_sharing` | Cost sharing configuration for the policy intent |
| `disclosures` | Disclosures associated with this intent. |
| `due_date` | Due date for the policy intent |
| `group_id` | Unique identifier for the group |
| `id` | Unique identifier for the group policy intent |
| `object` | Object type identifier |
| `plan_id` | Unique identifier for the plan |
| `quote_intent_id` | Unique identifier for the group quote intent this policy intent was created from |
| `status` | Current status of the group policy intent |

Operations: create, list, load.

API path: `/group_policy_intents`

#### GroupPolicyIntentRequirementResponsePagedList

| Field | Description |
| --- | --- |
| `id` | Unique identifier for the requirement |
| `is_fulfilled` | Whether the requirement has been fulfilled |
| `object` | Object type identifier |
| `object_id` | Identifier of the object (employee ID or employer ID) |
| `object_type` | Type of object this requirement is for (employee or employer) |
| `requirement_type` | Type of requirement |

Operations: list.

API path: `/group_policy_intents/{group_policy_intent_id}/requirements`

#### GroupQuote

| Field | Description |
| --- | --- |
| `family_type` | Type of the family covered by the employer. |
| `member_count` | Numbers of additional members covered by the employer. |
| `member_selection` | Whether specific member types are covered by the employer. |
| `percentage` | Percentage of the premium the employer covers. |
| `type` | Cost sharing type. |

Operations: load.

API path: `/group_quote_intents/{group_quote_intent_id}/quote`

#### GroupQuoteIntent

| Field | Description |
| --- | --- |
| `action_required` | Details of the action required from the caller, if the intent is in action_required status. |
| `consent_links` | Consent links that need to be acknowledged |
| `cost_sharing` | Cost sharing configuration for the quote |
| `disclosures` | Disclosures associated with this intent. |
| `expected_start_date` | Expected start date for the insurance coverage |
| `group_id` | Unique identifier for the group |
| `id` | Unique identifier for the group quote intent |
| `object` | Object type identifier |
| `plan_id` | Unique identifier for the plan |
| `status` | Current status of the group quote intent |

Operations: create, list, load.

API path: `/group_quote_intents/{group_quote_intent_id}/reject`

#### GroupQuoteIntentRequirementResponsePagedList

| Field | Description |
| --- | --- |
| `id` | Unique identifier for the requirement |
| `is_fulfilled` | Whether the requirement has been fulfilled |
| `object` | Object type identifier |
| `object_id` | Identifier of the object (employee ID or employer ID) |
| `object_type` | Type of object this requirement is for (employee or employer) |
| `requirement_type` | Type of requirement |

Operations: list.

API path: `/group_quote_intents/{group_quote_intent_id}/requirements`

#### Plan

| Field | Description |
| --- | --- |
| `available_from` | The date from which this plan is available (inclusive). |
| `available_to` | The date until which this plan is available (inclusive). |
| `country` | The country this plan is available in. |
| `coverage_options` | Coverage options available for this plan, organized by scope and input type. |
| `description` | Description of the plan. |
| `disclosures` | Disclosures associated with this plan. |
| `documents` | List of plan documents (e.g., IPIDs, T&Cs). |
| `eligible_count` | Number of employees in the queried group eligible for this plan as-of `start_date`. |
| `employee_eligibility_criteria` | Eligibility criteria that employees must meet. |
| `employer_eligibility_criteria` | Eligibility criteria that employers must meet. |
| `health_insurance` | Health insurance-specific details. |
| `id` | Unique identifier for the plan. |
| `ineligible_count` | Number of employees in the queried group ineligible for this plan as-of `start_date`. |
| `name` | The name of the plan. |
| `object` | Object type. |
| `provider` | The provider offering this plan. |
| `total_count` | Total employees in the queried group. |
| `type` | The benefit type of the plan. |

Operations: list, load.

API path: `/plans`

#### Policy

| Field | Description |
| --- | --- |
| `bundling_type` | Indicates how this policy is bundled within a group |
| `cancellation_date` | Date the policy was cancelled (if applicable) |
| `disclosures` | Disclosures associated with this policy. |
| `employee_id` | Identifier of the employee associated with this policy. |
| `end_date` | Policy end date (inclusive) in ISO 8601, or null if open-ended |
| `group_id` | Identifier of the group associated with this policy. |
| `group_policy_id` | Identifier of the group policy id associated with this policy. |
| `health_insurance` | Health insurance–specific fields (present when `type=health_insurance`) |
| `id` | Unique identifier for the policy. |
| `object` | Object type |
| `plan` | Plan information for this policy |
| `provider` | Provider information for this policy |
| `start_date` | Policy start (effective) date in ISO 8601 (YYYY-MM-DD) |
| `status` | Current lifecycle state of the policy |
| `type` | Policy type. |

Operations: list, load.

API path: `/policies`

#### PolicyAmendmentIntent

| Field | Description |
| --- | --- |
| `amendment_reason` | The reason for the policy amendment. |
| `disclosures` | Disclosures associated with this intent. |
| `id` | Unique identifier for the policy amendment intent. |
| `object` | Object type identifier. |
| `pending_confirmation` | Information about the pending confirmation if the intent status is `pending_confirmation`. |
| `policy_id` | The policy ID for which the amendment is requested. |
| `processing_error` | Information about the processing error if the intent status is `processing_error`. |
| `requested_changes` | List of requested changes to the policy. |
| `required_action` | Information about the required action if the intent status is `action_required`. |
| `status` | Current status of the policy amendment intent. |

Operations: create, list, load.

API path: `/policies/{policy_id}/policy_amendment_intents/{id}/cancel`

#### PolicyImportIntent

| Field | Description |
| --- | --- |
| `associated_persons` | List of associated persons linked to this policy import. |
| `employee_id` | The employee ID for the policy import. |
| `group_id` | The group ID for the policy import. |
| `id` | Unique identifier for the policy import intent. |
| `member_number` | The member number assigned by the provider. |
| `object` | Object type identifier. |
| `policy_end_date` | The end date of the policy. |
| `policy_start_date` | The start date of the policy. |
| `provider_policy_number` | The provider's policy number. |
| `status` | Current status of the policy import intent. |

Operations: create, list, load.

API path: `/policy_import_intents`

#### Provider

| Field | Description |
| --- | --- |
| `description` | Description of the provider. |
| `employer_platform_url` | URL to the employer portal/platform for this provider, if available. |
| `id` | Unique identifier for the provider. |
| `kota_hub_url` | URL to the Kota Hub page for this platform, if configured. |
| `logo_url` | URL to the provider's logo image. |
| `name` | The name of the provider. |
| `object` | Object type. |
| `support_phone` | Customer support phone number. |
| `supported_countries` | List of countries supported by this provider. |
| `website_url` | The provider's main website URL. |

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
| `created_at` | The date and time the endpoint was created |
| `endpoint_url` | The registered URL of the endpoint |
| `id` | The unique identifier of the endpoint |
| `object` | The object type |
| `subscribed_events` | The events the endpoint is subscribed to |

Operations: load.

API path: `/webhooks/endpoints/{webhook_endpoint_id}`

#### WebhookEndpointResponsePagedList

| Field | Description |
| --- | --- |
| `created_at` | The date and time the endpoint was created |
| `endpoint_url` | The registered URL of the endpoint |
| `id` | The unique identifier of the endpoint |
| `object` | The object type |
| `subscribed_events` | The events the endpoint is subscribed to |

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
| `date_of_birth` | `string` | Date of birth of the associated person |
| `email` | `null|string` | Email address of the associated person |
| `employee_id` | `string` | Unique identifier for the employee this person is associated with |
| `first_name` | `string` | First name of the associated person |
| `id` | `string` | Unique identifier for the associated person |
| `last_name` | `string` | Last name of the associated person |
| `object` | `string` | The object type |
| `phone_number` | `null|string` | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | Unique identifier for the platform |
| `relationship_type` | `*` | The relationship type between the employee and the associated person |
| `sex_at_birth` | `*` | The sex assigned to the associated person at birth |

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
| `associated_person_id` | `string` | The associated person ID. |
| `date_of_birth` | `string` | Date of birth of the associated person. |
| `eligibility_status` | `*` | Eligibility status for the policy/plan. |
| `first_name` | `string` | First name of the associated person. |
| `ineligibility_reason` | `null|string` | Reason for ineligibility if status is ineligible. |
| `last_name` | `string` | Last name of the associated person. |
| `object` | `string` | The object type |
| `relationship` | `*` | Relationship type to the employee. |
| `sex_at_birth` | `*` | Sex at birth of the associated person. |

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
| `created_at` | `string` | Date and time the report was created |
| `employer_id` | `string` | Unique identifier of the employer for which the report is created |
| `external_customer_id` | `null|string` | Unique identifier of the customer for which the report is created. |
| `finalized_at` | `null|string` | Date and time the report was finalized, if applicable |
| `id` | `string` | Unique identifier for the contribution report |
| `last_updated_at` | `string` | Date and time of the last update to the report |
| `object` | `string` | The object type |
| `period` | `*` | Period covered by the contribution report |
| `status` | `*` | Current status of the contribution report |

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
| `contribution_report_id` | `string` | Unique identifier of the related contribution report |
| `created_at` | `string` | Date and time the breakdown was created |
| `currency` | `*` | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `null|string` | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `null|string` | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `*` | Health insurance contribution details |
| `last_updated_at` | `string` | Date and time of the last update to the breakdown |
| `object` | `string` | The object type |
| `period` | `*` | Period covered by the employee breakdown |
| `status` | `*` | Current status of the breakdown |

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
| `contribution_report_id` | `string` | Unique identifier of the related contribution report |
| `created_at` | `string` | Date and time the breakdown was created |
| `currency` | `*` | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `null|string` | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `null|string` | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `*` | Health insurance contribution details |
| `last_updated_at` | `string` | Date and time of the last update to the breakdown |
| `object` | `string` | The object type |
| `period` | `*` | Period covered by the employee breakdown |
| `status` | `*` | Current status of the breakdown |

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
| `action_required` | `null` | Details of the action required from the caller. |
| `coverage_options` | `null|Array` | Available member-scoped coverage options for the plan. |
| `dependents` | `Array` | List of dependents being managed. |
| `disclosures` | `Array` | Disclosures associated with this intent. |
| `id` | `string` | Unique identifier for the dependents management intent. |
| `object` | `string` | Object type identifier. |
| `parent_intent_id` | `string` | The parent intent ID (e.g. |
| `parent_intent_type` | `*` | The type of parent intent. |
| `plan` | `*` | Plan information including pricing details. |
| `status` | `*` | Current status of the dependents management intent. |

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
| `action_required` | `null` | Details of the action required from the caller. |
| `coverage_options` | `null|Array` | Available member-scoped coverage options for the plan. |
| `dependents` | `Array` | List of dependents being managed. |
| `disclosures` | `Array` | Disclosures associated with this intent. |
| `id` | `string` | Unique identifier for the dependents management intent. |
| `object` | `string` | Object type identifier. |
| `parent_intent_id` | `string` | The parent intent ID (e.g. |
| `parent_intent_type` | `*` | The type of parent intent. |
| `plan` | `*` | Plan information including pricing details. |
| `status` | `*` | Current status of the dependents management intent. |

#### Example: Load

```ts
const dependents_management_intent = await client.DependentsManagementIntent().load({ id: 'dependents_management_intent_id' })
```

#### Example: Create

```ts
const dependents_management_intent = await client.DependentsManagementIntent().create({
  enrolment_intent_id: 'example_enrolment_intent_id',
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
| `eligibility_status` | `*` | Eligibility status: `eligible` or `ineligible`. |
| `object` | `string` | The object type. |
| `plan` | `*` | The insurance plan associated with the group. |
| `provider` | `*` | The insurance provider associated with the group. |
| `reasons` | `Array` | List of reasons why the employee is ineligible. |

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
| `bank_account` | `null` | Bank account details |
| `date_of_birth` | `string` | Date of birth of the employee |
| `earliest_benefits_start_date` | `null|string` | The earliest date this employee can be enrolled in any benefits. |
| `email` | `string` | Email address of the employee |
| `employer_id` | `string` | Unique identifier for the employer |
| `external_customer_id` | `null|string` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `first_name` | `string` | First name of the employee. |
| `home_address` | `null` | Location where the employee is legally registered to live |
| `id` | `string` | Unique identifier for the employee |
| `last_name` | `string` | Last name of the employee |
| `metadata` | `null|Object` | Set of key-value pairs that you can attach to an object. |
| `national_tax_id` | `string` | PPSN in Ireland, NINo in the UK, DNI/NIE in Spain |
| `nationality` | `null` | Nationality of the employee (e.g. |
| `object` | `string` | The object type |
| `offboard_on` | `null|string` | Date when the employee was or will be offboarded |
| `phone_number` | `string` | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | Unique identifier for the platform |
| `sex_at_birth` | `*` | The sex assigned to the employee at birth |
| `start_on` | `string` | Employment start date |
| `status` | `*` | Current status of the employee |

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
| `coverage_level` | `*` | Details about the coverage level for the offer. |
| `employee_id` | `string` | The Id of the employee for which the offer is available |
| `employer_id` | `string` | The Id of the employer for which the offer is available |
| `external_customer_id` | `null|string` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for offer |
| `object` | `string` | The object type |
| `required_action` | `null` | Required action to progress the offer, if any. |
| `status` | `*` | Current status of offer |

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
| `coverage_level` | `*` | Details about the coverage level for the offer. |
| `employee_id` | `string` | The Id of the employee for which the offer is available |
| `employer_id` | `string` | The Id of the employer for which the offer is available |
| `external_customer_id` | `null|string` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for offer |
| `object` | `string` | The object type |
| `required_action` | `null` | Required action to progress the offer, if any. |
| `status` | `*` | Current status of offer |

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
| `cancellation_date` | `null|string` | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `*` | Represents the current coverage level for the policy |
| `employee_id` | `string` | The Id of the employee for which the policy is created |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolled_dependants_count` | `number` | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `*` | Enrolment type of the policy |
| `estimated_gross_premium` | `*` | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `null|string` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `opt_out_deadline_date` | `string` | Last day to opt out from the policy |
| `policy_number` | `null|string` | Health insurance policy number, if available |
| `renewal` | `*` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `*` | Current status of policy |

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
| `cancellation_date` | `null|string` | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `*` | Represents the current coverage level for the policy |
| `employee_id` | `string` | The Id of the employee for which the policy is created |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolled_dependants_count` | `number` | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `*` | Enrolment type of the policy |
| `estimated_gross_premium` | `*` | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `null|string` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `opt_out_deadline_date` | `string` | Last day to opt out from the policy |
| `policy_number` | `null|string` | Health insurance policy number, if available |
| `renewal` | `*` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `*` | Current status of policy |

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
| `contact` | `*` |  |
| `earliest_benefits_start_date` | `null|string` |  |
| `id` | `string` |  |
| `legal_address` | `*` |  |
| `legal_name` | `string` |  |
| `metadata` | `null|Object` | Set of key-value pairs that you can attach to an object. |
| `object` | `string` | The object type |
| `offboard_on` | `null|string` |  |
| `platform_id` | `string` |  |
| `registration_number` | `null|string` |  |
| `status` | `*` |  |

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
| `cancellation_date` | `null|string` | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `Array` | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `number` | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolment_type` | `*` | Enrolment type of the policy |
| `group_policy_number` | `null|string` | Group’s health insurance policy number, if available |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `renewal` | `*` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `*` | Current status of policy |

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
| `cancellation_date` | `null|string` | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `Array` | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `number` | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolment_type` | `*` | Enrolment type of the policy |
| `group_policy_number` | `null|string` | Group’s health insurance policy number, if available |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `renewal` | `*` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `*` | Current status of policy |

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
| `coverage_levels` | `Array` | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | The Id of the employer for which the is created |
| `id` | `string` | Unique identifier for the quote |
| `object` | `string` | The object type |
| `quoted_at` | `string` | Date and time the quote was created at |
| `required_action` | `null` | Actions required by the employer to proceed with the quote. |
| `status` | `*` | Current status of the quote |

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
| `coverage_levels` | `Array` | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | The Id of the employer for which the is created |
| `id` | `string` | Unique identifier for the quote |
| `object` | `string` | The object type |
| `quoted_at` | `string` | Date and time the quote was created at |
| `required_action` | `null` | Actions required by the employer to proceed with the quote. |
| `status` | `*` | Current status of the quote |

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
| `action_required` | `null` | If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment. |
| `disclosures` | `Array` | Disclosures associated with this intent. |
| `employee_id` | `string` | Identifier for the employee associated with this enrolment intent. |
| `force_confirmation` | `boolean` | If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. |
| `group_id` | `string` | Identifier for the group associated with this enrolment intent. |
| `id` | `string` | Unique identifier for the enrolment intent. |
| `ineligibility_reason` | `null` | If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility. |
| `object` | `string` | Object type identifier. |
| `pending_confirmation` | `null` | If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state. |
| `policy_configuration` | `null` | Policy configuration associated with this enrolment intent. |
| `policy_enrolments` | `Array` | Policy enrolment information |
| `status` | `*` | Current status of the enrolment intent. |

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
| `id` | `string` | Unique identifier for the requirement |
| `is_fulfilled` | `boolean` | Whether the requirement has been fulfilled |
| `object` | `string` | Object type identifier |
| `object_id` | `string` | Identifier of the object (employee ID or employer ID) |
| `object_type` | `*` | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `*` | Type of requirement |

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
| `root` | `*` |  |
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
| `description` | `null|string` | Short description of the purpose or scope of the `group`. |
| `employer_id` | `string` | Identifier for the `employer` that owns this `group`. |
| `enrolment_type` | `*` | Indicates how employees are enrolled into the group. |
| `group_policy_ids` | `Array` | Group policy unique identifiers associated with this group. |
| `group_policy_intent_ids` | `Array` | Group policy intent unique identifiers associated with this group. |
| `group_quote_intent_ids` | `Array` | Group quote intent unique identifiers associated with this group. |
| `group_type` | `*` | Indicates how policies are organized for this group. |
| `id` | `string` | Unique identifier for the `group`. |
| `name` | `string` | Human-readable name of the `group`. |
| `object` | `string` | The object type |
| `status` | `*` | Current lifecycle state of the `group`, indicating its current progress. |

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
| `desired_policy_start_date` | `null|string` | The desired date for the employee's policy to start. |
| `eligibility_status` | `*` | Eligibility status for the employee in this group. |
| `enrolment_date` | `null|string` | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `*` | Enrolment status for the employee in this group. |
| `enrolments` | `Array` | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Unique identifier for the group. |
| `id` | `string` | Unique identifier for the employee. |
| `object` | `string` | The object type |
| `policies` | `Array` | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `Array` | List of scheduled group transitions for the employee. |

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
| `desired_policy_start_date` | `null|string` | The desired date for the employee's policy to start. |
| `eligibility_status` | `*` | Eligibility status for the employee in this group. |
| `enrolment_date` | `null|string` | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `*` | Enrolment status for the employee in this group. |
| `enrolments` | `Array` | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Unique identifier for the group. |
| `id` | `string` | Unique identifier for the employee. |
| `object` | `string` | The object type |
| `policies` | `Array` | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `Array` | List of scheduled group transitions for the employee. |

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
| `cancellation_date` | `null|string` | Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable. |
| `disclosures` | `Array` | Disclosures associated with this group policy. |
| `employer_id` | `string` | Identifier for the employer associated with this group policy. |
| `end_date` | `null|string` | Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended. |
| `group_id` | `string` | Identifier for the group associated with this group policy. |
| `health_insurance` | `null` | Health insurance–specific fields (present when `type=health_insurance`). |
| `id` | `string` | Unique identifier for the group policy. |
| `object` | `string` | The object type |
| `plan` | `*` | Plan information for this policy |
| `provider` | `*` | Provider information for this policy. |
| `start_date` | `string` | Policy start (effective) date in ISO 8601 (YYYY-MM-DD). |
| `status` | `*` | Current lifecycle state of the `group_policy`, indicating its progress from creation to activation. |
| `type` | `*` | Policy type. |

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
| `action_required` | `null` | Details of the required action when the intent is in ActionRequired status. |
| `cost_sharing` | `null` | Cost sharing configuration for the policy intent |
| `disclosures` | `Array` | Disclosures associated with this intent. |
| `due_date` | `null|string` | Due date for the policy intent |
| `group_id` | `string` | Unique identifier for the group |
| `id` | `string` | Unique identifier for the group policy intent |
| `object` | `string` | Object type identifier |
| `plan_id` | `string` | Unique identifier for the plan |
| `quote_intent_id` | `string` | Unique identifier for the group quote intent this policy intent was created from |
| `status` | `*` | Current status of the group policy intent |

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
| `id` | `string` | Unique identifier for the requirement |
| `is_fulfilled` | `boolean` | Whether the requirement has been fulfilled |
| `object` | `string` | Object type identifier |
| `object_id` | `string` | Identifier of the object (employee ID or employer ID) |
| `object_type` | `*` | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `*` | Type of requirement |

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
| `family_type` | `null` | Type of the family covered by the employer. |
| `member_count` | `null` | Numbers of additional members covered by the employer. |
| `member_selection` | `null` | Whether specific member types are covered by the employer. |
| `percentage` | `null` | Percentage of the premium the employer covers. |
| `type` | `*` | Cost sharing type. |

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
| `action_required` | `null` | Details of the action required from the caller, if the intent is in action_required status. |
| `consent_links` | `Array` | Consent links that need to be acknowledged |
| `cost_sharing` | `null` | Cost sharing configuration for the quote |
| `disclosures` | `Array` | Disclosures associated with this intent. |
| `expected_start_date` | `null|string` | Expected start date for the insurance coverage |
| `group_id` | `string` | Unique identifier for the group |
| `id` | `string` | Unique identifier for the group quote intent |
| `object` | `string` | Object type identifier |
| `plan_id` | `string` | Unique identifier for the plan |
| `status` | `*` | Current status of the group quote intent |

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
| `id` | `string` | Unique identifier for the requirement |
| `is_fulfilled` | `boolean` | Whether the requirement has been fulfilled |
| `object` | `string` | Object type identifier |
| `object_id` | `string` | Identifier of the object (employee ID or employer ID) |
| `object_type` | `*` | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `*` | Type of requirement |

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
| `available_from` | `string` | The date from which this plan is available (inclusive). |
| `available_to` | `null|string` | The date until which this plan is available (inclusive). |
| `country` | `*` | The country this plan is available in. |
| `coverage_options` | `null|Array` | Coverage options available for this plan, organized by scope and input type. |
| `description` | `string` | Description of the plan. |
| `disclosures` | `Array` | Disclosures associated with this plan. |
| `documents` | `Array` | List of plan documents (e.g., IPIDs, T&Cs). |
| `eligible_count` | `null|number` | Number of employees in the queried group eligible for this plan as-of `start_date`. |
| `employee_eligibility_criteria` | `Array` | Eligibility criteria that employees must meet. |
| `employer_eligibility_criteria` | `Array` | Eligibility criteria that employers must meet. |
| `health_insurance` | `null` | Health insurance-specific details. |
| `id` | `string` | Unique identifier for the plan. |
| `ineligible_count` | `null|number` | Number of employees in the queried group ineligible for this plan as-of `start_date`. |
| `name` | `string` | The name of the plan. |
| `object` | `string` | Object type. |
| `provider` | `*` | The provider offering this plan. |
| `total_count` | `null|number` | Total employees in the queried group. |
| `type` | `*` | The benefit type of the plan. |

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
| `bundling_type` | `*` | Indicates how this policy is bundled within a group |
| `cancellation_date` | `null|string` | Date the policy was cancelled (if applicable) |
| `disclosures` | `Array` | Disclosures associated with this policy. |
| `employee_id` | `string` | Identifier of the employee associated with this policy. |
| `end_date` | `null|string` | Policy end date (inclusive) in ISO 8601, or null if open-ended |
| `group_id` | `string` | Identifier of the group associated with this policy. |
| `group_policy_id` | `string` | Identifier of the group policy id associated with this policy. |
| `health_insurance` | `null` | Health insurance–specific fields (present when `type=health_insurance`) |
| `id` | `string` | Unique identifier for the policy. |
| `object` | `string` | Object type |
| `plan` | `*` | Plan information for this policy |
| `provider` | `*` | Provider information for this policy |
| `start_date` | `string` | Policy start (effective) date in ISO 8601 (YYYY-MM-DD) |
| `status` | `*` | Current lifecycle state of the policy |
| `type` | `*` | Policy type. |

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
| `amendment_reason` | `*` | The reason for the policy amendment. |
| `disclosures` | `Array` | Disclosures associated with this intent. |
| `id` | `string` | Unique identifier for the policy amendment intent. |
| `object` | `string` | Object type identifier. |
| `pending_confirmation` | `null` | Information about the pending confirmation if the intent status is `pending_confirmation`. |
| `policy_id` | `string` | The policy ID for which the amendment is requested. |
| `processing_error` | `null` | Information about the processing error if the intent status is `processing_error`. |
| `requested_changes` | `Array` | List of requested changes to the policy. |
| `required_action` | `null` | Information about the required action if the intent status is `action_required`. |
| `status` | `*` | Current status of the policy amendment intent. |

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
| `associated_persons` | `Array` | List of associated persons linked to this policy import. |
| `employee_id` | `string` | The employee ID for the policy import. |
| `group_id` | `string` | The group ID for the policy import. |
| `id` | `string` | Unique identifier for the policy import intent. |
| `member_number` | `string` | The member number assigned by the provider. |
| `object` | `string` | Object type identifier. |
| `policy_end_date` | `null|string` | The end date of the policy. |
| `policy_start_date` | `string` | The start date of the policy. |
| `provider_policy_number` | `string` | The provider's policy number. |
| `status` | `*` | Current status of the policy import intent. |

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
| `description` | `string` | Description of the provider. |
| `employer_platform_url` | `null|string` | URL to the employer portal/platform for this provider, if available. |
| `id` | `string` | Unique identifier for the provider. |
| `kota_hub_url` | `null|string` | URL to the Kota Hub page for this platform, if configured. |
| `logo_url` | `string` | URL to the provider's logo image. |
| `name` | `string` | The name of the provider. |
| `object` | `string` | Object type. |
| `support_phone` | `string` | Customer support phone number. |
| `supported_countries` | `Array` | List of countries supported by this provider. |
| `website_url` | `string` | The provider's main website URL. |

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
| `deliveries` | `Array` |  |
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
| `created_at` | `string` | The date and time the endpoint was created |
| `endpoint_url` | `string` | The registered URL of the endpoint |
| `id` | `string` | The unique identifier of the endpoint |
| `object` | `string` | The object type |
| `subscribed_events` | `Array` | The events the endpoint is subscribed to |

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
| `created_at` | `string` | The date and time the endpoint was created |
| `endpoint_url` | `string` | The registered URL of the endpoint |
| `id` | `string` | The unique identifier of the endpoint |
| `object` | `string` | The object type |
| `subscribed_events` | `Array` | The events the endpoint is subscribed to |

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
│   ├── KotaSDK.js        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
└── test/                   # Test suites
```

Import the SDK from the package root:

```js
const { KotaSDK } = require('@voxgig-sdk/kota-js')
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
