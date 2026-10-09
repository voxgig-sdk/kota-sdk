# Kota JavaScript SDK Reference

Complete API reference for the Kota JavaScript SDK.


## KotaSDK

### Constructor

```ts
new KotaSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `KotaSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = KotaSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `KotaSDK` instance in test mode.


### Instance Methods

#### `AssociatedPerson(data?: object)`

Create a new `AssociatedPerson` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssociatedPersonEntity` instance.

#### `AssociatedPersonEligibilityResponsePagedList(data?: object)`

Create a new `AssociatedPersonEligibilityResponsePagedList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AssociatedPersonEligibilityResponsePagedListEntity` instance.

#### `ContributionReport(data?: object)`

Create a new `ContributionReport` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContributionReportEntity` instance.

#### `ContributionReportEmployeeBreakdown(data?: object)`

Create a new `ContributionReportEmployeeBreakdown` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContributionReportEmployeeBreakdownEntity` instance.

#### `ContributionReportEmployeeBreakdownResponsePagedList(data?: object)`

Create a new `ContributionReportEmployeeBreakdownResponsePagedList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ContributionReportEmployeeBreakdownResponsePagedListEntity` instance.

#### `CreateHostedSessionToken(data?: object)`

Create a new `CreateHostedSessionToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateHostedSessionTokenEntity` instance.

#### `CreateSessionToken(data?: object)`

Create a new `CreateSessionToken` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CreateSessionTokenEntity` instance.

#### `Dependent(data?: object)`

Create a new `Dependent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DependentEntity` instance.

#### `DependentsManagementIntent(data?: object)`

Create a new `DependentsManagementIntent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `DependentsManagementIntentEntity` instance.

#### `EligibilityCheck(data?: object)`

Create a new `EligibilityCheck` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EligibilityCheckEntity` instance.

#### `Employee(data?: object)`

Create a new `Employee` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmployeeEntity` instance.

#### `EmployeeHealthInsuranceOffer(data?: object)`

Create a new `EmployeeHealthInsuranceOffer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmployeeHealthInsuranceOfferEntity` instance.

#### `EmployeeHealthInsuranceOfferResponsePagedList(data?: object)`

Create a new `EmployeeHealthInsuranceOfferResponsePagedList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmployeeHealthInsuranceOfferResponsePagedListEntity` instance.

#### `EmployeeHealthInsurancePolicy(data?: object)`

Create a new `EmployeeHealthInsurancePolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmployeeHealthInsurancePolicyEntity` instance.

#### `EmployeeHealthInsurancePolicyResponsePagedList(data?: object)`

Create a new `EmployeeHealthInsurancePolicyResponsePagedList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmployeeHealthInsurancePolicyResponsePagedListEntity` instance.

#### `Employer(data?: object)`

Create a new `Employer` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmployerEntity` instance.

#### `EmployerHealthInsurancePolicy(data?: object)`

Create a new `EmployerHealthInsurancePolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmployerHealthInsurancePolicyEntity` instance.

#### `EmployerHealthInsurancePolicyResponsePagedList(data?: object)`

Create a new `EmployerHealthInsurancePolicyResponsePagedList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmployerHealthInsurancePolicyResponsePagedListEntity` instance.

#### `EmployerHealthInsuranceQuote(data?: object)`

Create a new `EmployerHealthInsuranceQuote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmployerHealthInsuranceQuoteEntity` instance.

#### `EmployerHealthInsuranceQuoteResponsePagedList(data?: object)`

Create a new `EmployerHealthInsuranceQuoteResponsePagedList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EmployerHealthInsuranceQuoteResponsePagedListEntity` instance.

#### `EnrolmentIntent(data?: object)`

Create a new `EnrolmentIntent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnrolmentIntentEntity` instance.

#### `EnrolmentIntentRequirementResponsePagedList(data?: object)`

Create a new `EnrolmentIntentRequirementResponsePagedList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EnrolmentIntentRequirementResponsePagedListEntity` instance.

#### `Event(data?: object)`

Create a new `Event` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `EventEntity` instance.

#### `Group(data?: object)`

Create a new `Group` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupEntity` instance.

#### `GroupEmployee(data?: object)`

Create a new `GroupEmployee` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupEmployeeEntity` instance.

#### `GroupEmployeeResponsePagedList(data?: object)`

Create a new `GroupEmployeeResponsePagedList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupEmployeeResponsePagedListEntity` instance.

#### `GroupPolicy(data?: object)`

Create a new `GroupPolicy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupPolicyEntity` instance.

#### `GroupPolicyIntent(data?: object)`

Create a new `GroupPolicyIntent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupPolicyIntentEntity` instance.

#### `GroupPolicyIntentRequirementResponsePagedList(data?: object)`

Create a new `GroupPolicyIntentRequirementResponsePagedList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupPolicyIntentRequirementResponsePagedListEntity` instance.

#### `GroupQuote(data?: object)`

Create a new `GroupQuote` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupQuoteEntity` instance.

#### `GroupQuoteIntent(data?: object)`

Create a new `GroupQuoteIntent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupQuoteIntentEntity` instance.

#### `GroupQuoteIntentRequirementResponsePagedList(data?: object)`

Create a new `GroupQuoteIntentRequirementResponsePagedList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GroupQuoteIntentRequirementResponsePagedListEntity` instance.

#### `Plan(data?: object)`

Create a new `Plan` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PlanEntity` instance.

#### `Policy(data?: object)`

Create a new `Policy` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PolicyEntity` instance.

#### `PolicyAmendmentIntent(data?: object)`

Create a new `PolicyAmendmentIntent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PolicyAmendmentIntentEntity` instance.

#### `PolicyImportIntent(data?: object)`

Create a new `PolicyImportIntent` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `PolicyImportIntentEntity` instance.

#### `Provider(data?: object)`

Create a new `Provider` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ProviderEntity` instance.

#### `Salary(data?: object)`

Create a new `Salary` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `SalaryEntity` instance.

#### `WebhookEndpoint(data?: object)`

Create a new `WebhookEndpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEndpointEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |
| `fetchargs.ctrl.signal` | `AbortSignal` | Aborts the request in flight: `ok` is then `false` and `err.code` is `request_aborted`. |

**Returns:** `Promise<{ ok, status, headers, data }>`. On a failure
`ok` is `false` and `err` holds the error.

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `KotaSDK.test()`.

**Returns:** `KotaSDK` instance in test mode.

#### Cancelling a call

Every entity operation takes an optional `ctrl` object after its match or
data, and an `AbortSignal` in `ctrl.signal` cancels the request in flight.
The operation then rejects with an error whose `code` is
`request_aborted` and whose `cause` is the signal's reason. A request
whose signal has already aborted is not sent. `stream()` takes the signal
as `callopts.signal`, and ends when it aborts.


---

## AssociatedPersonEntity

```ts
const associated_person = client.AssociatedPerson()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date_of_birth` | `string` | Yes | Date of birth of the associated person |
| `email` | `null|string` | No | Email address of the associated person |
| `employee_id` | `string` | Yes | Unique identifier for the employee this person is associated with |
| `first_name` | `string` | Yes | First name of the associated person |
| `id` | `string` | Yes | Unique identifier for the associated person |
| `last_name` | `string` | Yes | Last name of the associated person |
| `object` | `string` | No | The object type |
| `phone_number` | `null|string` | No | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | No | Unique identifier for the platform |
| `relationship_type` | `string` | Yes | The relationship type between the employee and the associated person |
| `sex_at_birth` | `string` | Yes | The sex assigned to the associated person at birth |

### Field Usage by Operation

| Field | load | list | create | update | remove |
| --- | --- | --- | --- | --- | --- |
| `date_of_birth` | - | - | - | Yes | - |
| `email` | - | - | - | - | - |
| `employee_id` | - | - | - | - | - |
| `first_name` | - | - | - | Yes | - |
| `id` | - | - | - | - | - |
| `last_name` | - | - | - | Yes | - |
| `object` | - | - | - | - | - |
| `phone_number` | - | - | - | - | - |
| `platform_id` | - | - | - | - | - |
| `relationship_type` | - | - | - | Yes | - |
| `sex_at_birth` | - | - | - | Yes | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.AssociatedPerson().create({
  employee_id: 'example_employee_id',
  date_of_birth: 'example_date_of_birth',
  first_name: 'example_first_name',
  id: 'example_id',
  last_name: 'example_last_name',
  relationship_type: 'example_relationship_type',
  sex_at_birth: 'example_sex_at_birth',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AssociatedPerson().list({ employee_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.AssociatedPerson().load({ id: 'associated_person_id', employee_id: 'employee_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.AssociatedPerson().remove({ id: 'associated_person_id', employee_id: 'employee_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.AssociatedPerson().update({
  id: 'associated_person_id',
  employee_id: 'employee_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssociatedPersonEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## AssociatedPersonEligibilityResponsePagedListEntity

```ts
const associated_person_eligibility_response_paged_list = client.AssociatedPersonEligibilityResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_person_id` | `string` | Yes | The associated person ID. |
| `date_of_birth` | `string` | Yes | Date of birth of the associated person. |
| `eligibility_status` | `string` | Yes | Eligibility status for the policy/plan. |
| `first_name` | `string` | Yes | First name of the associated person. |
| `ineligibility_reason` | `null|string` | No | Reason for ineligibility if status is ineligible. |
| `last_name` | `string` | Yes | Last name of the associated person. |
| `object` | `string` | No | The object type |
| `relationship` | `string` | Yes | Relationship type to the employee. |
| `sex_at_birth` | `string` | Yes | Sex at birth of the associated person. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.AssociatedPersonEligibilityResponsePagedList().list({ dependents_management_intent_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AssociatedPersonEligibilityResponsePagedListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContributionReportEntity

```ts
const contribution_report = client.ContributionReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `aggregates` | `*` | Yes | Summary figures for the report, meant for dashboards and overviews. |
| `created_at` | `string` | Yes | Date and time the report was created |
| `employer_id` | `string` | Yes | Unique identifier of the employer for which the report is created |
| `external_customer_id` | `null|string` | No | Unique identifier of the customer for which the report is created. |
| `file_id` | `null|string` | No | Identifier of the report's downloadable CSV file. |
| `file_status` | `null` | No | Whether the report's downloadable CSV is ready yet. |
| `finalized_at` | `null|string` | No | Date and time the report was finalized, if applicable |
| `id` | `string` | Yes | Unique identifier for the contribution report |
| `last_updated_at` | `string` | Yes | Date and time of the last update to the report |
| `object` | `string` | No | The object type |
| `period` | `*` | Yes | Period covered by the contribution report |
| `status` | `string` | Yes | Current status of the contribution report |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.ContributionReport().create({
  id: 'example_id',
  aggregates: 'example_aggregates',
  created_at: 'example_created_at',
  employer_id: 'example_employer_id',
  last_updated_at: 'example_last_updated_at',
  period: 'example_period',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ContributionReport().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ContributionReport().load({ id: 'contribution_report_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContributionReportEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContributionReportEmployeeBreakdownEntity

```ts
const contribution_report_employee_breakdown = client.ContributionReportEmployeeBreakdown()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contribution_report_id` | `string` | Yes | Unique identifier of the related contribution report |
| `created_at` | `string` | Yes | Date and time the breakdown was created |
| `currency` | `string` | Yes | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Yes | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Yes | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `null|string` | No | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `null|string` | No | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `*` | Yes | Health insurance contribution details |
| `id` | `string` | No |  |
| `last_updated_at` | `string` | Yes | Date and time of the last update to the breakdown |
| `object` | `string` | No | The object type |
| `period` | `*` | Yes | Period covered by the employee breakdown |
| `status` | `string` | Yes | Current status of the breakdown |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.ContributionReportEmployeeBreakdown().load({ id: 'contribution_report_employee_breakdown_id', contribution_report_id: 'contribution_report_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContributionReportEmployeeBreakdownEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ContributionReportEmployeeBreakdownResponsePagedListEntity

```ts
const contribution_report_employee_breakdown_response_paged_list = client.ContributionReportEmployeeBreakdownResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.ContributionReportEmployeeBreakdownResponsePagedList().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ContributionReportEmployeeBreakdownResponsePagedListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateHostedSessionTokenEntity

```ts
const create_hosted_session_token = client.CreateHostedSessionToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `expiry` | `string` | Yes |  |
| `link` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CreateHostedSessionToken().create({
  employee_id: 'example_employee_id',
  employer_id: 'example_employer_id',
  expiry: 'example_expiry',
  link: 'example_link',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateHostedSessionTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CreateSessionTokenEntity

```ts
const create_session_token = client.CreateSessionToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `employee_id` | `null|string` | No |  |
| `employer_id` | `string` | Yes |  |
| `expiry` | `string` | Yes |  |
| `external_customer_id` | `null|string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `token` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.CreateSessionToken().create({
  employer_id: 'example_employer_id',
  expiry: 'example_expiry',
  token: 'example_token',
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CreateSessionTokenEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DependentEntity

```ts
const dependent = client.Dependent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `null` | No | Details of the action required from the caller. |
| `associated_person_ids` | `Array` | Yes | List of associated person IDs to add as dependents. |
| `coverage_options` | `null|Array` | No | Available member-scoped coverage options for the plan. |
| `dependent_coverage_selections` | `null|Array` | No | Optional coverage selections per dependent. |
| `dependents` | `Array` | Yes | List of dependents being managed. |
| `disclosures` | `Array` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the dependents management intent. |
| `object` | `string` | No | Object type identifier. |
| `parent_intent_id` | `string` | Yes | The parent intent ID (e.g. |
| `parent_intent_type` | `string` | Yes | The type of parent intent. |
| `plan` | `*` | Yes | Plan information including pricing details. |
| `status` | `string` | Yes | Current status of the dependents management intent. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Dependent().create({
  dependents_management_intent_id: 'example_dependents_management_intent_id',
  associated_person_ids: [],
  dependents: [],
  disclosures: [],
  id: 'example_id',
  parent_intent_id: 'example_parent_intent_id',
  parent_intent_type: 'example_parent_intent_type',
  plan: 'example_plan',
  status: 'example_status',
})
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Dependent().remove({ id: 'dependent_id', dependents_management_intent_id: 'dependents_management_intent_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DependentEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## DependentsManagementIntentEntity

```ts
const dependents_management_intent = client.DependentsManagementIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `null` | No | Details of the action required from the caller. |
| `coverage_options` | `null|Array` | No | Available member-scoped coverage options for the plan. |
| `dependents` | `Array` | Yes | List of dependents being managed. |
| `disclosures` | `Array` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the dependents management intent. |
| `object` | `string` | No | Object type identifier. |
| `parent_intent_id` | `string` | Yes | The parent intent ID (e.g. |
| `parent_intent_type` | `string` | Yes | The type of parent intent. |
| `plan` | `*` | Yes | Plan information including pricing details. |
| `status` | `string` | Yes | Current status of the dependents management intent. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.DependentsManagementIntent().create({
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.DependentsManagementIntent().load({ id: 'dependents_management_intent_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `DependentsManagementIntentEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EligibilityCheckEntity

```ts
const eligibility_check = client.EligibilityCheck()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eligibility_status` | `string` | Yes | Eligibility status: `eligible` or `ineligible`. |
| `employee_id` | `string` | Yes | The employee to check eligibility for. |
| `object` | `string` | No | The object type. |
| `plan` | `*` | Yes | The insurance plan associated with the group. |
| `provider` | `*` | Yes | The insurance provider associated with the group. |
| `reasons` | `Array` | Yes | List of reasons why the employee is ineligible. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.EligibilityCheck().create({
  group_id: 'example_group_id',
  eligibility_status: 'example_eligibility_status',
  employee_id: 'example_employee_id',
  plan: 'example_plan',
  provider: 'example_provider',
  reasons: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EligibilityCheckEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmployeeEntity

```ts
const employee = client.Employee()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bank_account` | `null` | No | Bank account details |
| `date_of_birth` | `string` | Yes | Date of birth of the employee |
| `earliest_benefits_start_date` | `null|string` | No | The earliest date this employee can be enrolled in any benefits. |
| `email` | `string` | Yes | Email address of the employee |
| `employer_id` | `string` | No | Unique identifier for the employer |
| `external_customer_id` | `null|string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `first_name` | `string` | Yes | First name of the employee. |
| `home_address` | `null` | No | Location where the employee is legally registered to live |
| `id` | `string` | No | Unique identifier for the employee |
| `last_name` | `string` | Yes | Last name of the employee |
| `metadata` | `null|Object` | No | Set of key-value pairs that you can attach to an object. |
| `national_tax_id` | `string` | Yes | PPSN in Ireland, NINo in the UK, DNI/NIE in Spain |
| `nationality` | `null` | No | Nationality of the employee (e.g. |
| `object` | `string` | No | The object type |
| `offboard_on` | `null|string` | No | Date when the employee was or will be offboarded |
| `phone_number` | `null|string` | Yes | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | No | Unique identifier for the platform |
| `sex_at_birth` | `string` | Yes | The sex assigned to the employee at birth |
| `start_on` | `string` | No | Employment start date |
| `status` | `string` | No | Current status of the employee |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `bank_account` | - | - | - | - |
| `date_of_birth` | - | - | - | - |
| `earliest_benefits_start_date` | - | - | - | - |
| `email` | - | - | - | Yes |
| `employer_id` | - | - | Yes | - |
| `external_customer_id` | - | - | - | - |
| `first_name` | - | - | - | Yes |
| `home_address` | - | - | Yes | - |
| `id` | - | - | - | - |
| `last_name` | - | - | - | Yes |
| `metadata` | - | - | - | - |
| `national_tax_id` | - | - | - | Yes |
| `nationality` | - | - | - | - |
| `object` | - | - | - | - |
| `offboard_on` | - | - | - | - |
| `phone_number` | - | - | Yes | Yes |
| `platform_id` | - | - | - | - |
| `sex_at_birth` | - | - | - | - |
| `start_on` | - | - | Yes | - |
| `status` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Employee().create({
  date_of_birth: 'example_date_of_birth',
  email: 'example_email',
  first_name: 'example_first_name',
  last_name: 'example_last_name',
  national_tax_id: 'example_national_tax_id',
  phone_number: 'example_phone_number',
  sex_at_birth: 'example_sex_at_birth',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Employee().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Employee().load({ id: 'employee_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Employee().update({
  id: 'employee_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmployeeEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmployeeHealthInsuranceOfferEntity

```ts
const employee_health_insurance_offer = client.EmployeeHealthInsuranceOffer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_level` | `*` | Yes | Details about the coverage level for the offer. |
| `employee_id` | `string` | Yes | The Id of the employee for which the offer is available |
| `employer_id` | `string` | Yes | The Id of the employer for which the offer is available |
| `external_customer_id` | `null|string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for offer |
| `object` | `string` | No | The object type |
| `required_action` | `null` | No | Required action to progress the offer, if any. |
| `status` | `string` | Yes | Current status of offer |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EmployeeHealthInsuranceOffer().load({ id: 'employee_health_insurance_offer_id', employee_id: 'employee_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmployeeHealthInsuranceOfferEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmployeeHealthInsuranceOfferResponsePagedListEntity

```ts
const employee_health_insurance_offer_response_paged_list = client.EmployeeHealthInsuranceOfferResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_level` | `*` | Yes | Details about the coverage level for the offer. |
| `employee_id` | `string` | Yes | The Id of the employee for which the offer is available |
| `employer_id` | `string` | Yes | The Id of the employer for which the offer is available |
| `external_customer_id` | `null|string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for offer |
| `object` | `string` | No | The object type |
| `required_action` | `null` | No | Required action to progress the offer, if any. |
| `status` | `string` | Yes | Current status of offer |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EmployeeHealthInsuranceOfferResponsePagedList().list({ employee_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmployeeHealthInsuranceOfferResponsePagedListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmployeeHealthInsurancePolicyEntity

```ts
const employee_health_insurance_policy = client.EmployeeHealthInsurancePolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `null|string` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `*` | Yes | Represents the current coverage level for the policy |
| `employee_id` | `string` | Yes | The Id of the employee for which the policy is created |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolled_dependants_count` | `number` | Yes | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `string` | Yes | Enrolment type of the policy |
| `estimated_gross_premium` | `*` | Yes | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `null|string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `opt_out_deadline_date` | `string` | Yes | Last day to opt out from the policy |
| `policy_number` | `null|string` | No | Health insurance policy number, if available |
| `renewal` | `*` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `string` | Yes | Current status of policy |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EmployeeHealthInsurancePolicy().load({ id: 'employee_health_insurance_policy_id', employee_id: 'employee_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmployeeHealthInsurancePolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmployeeHealthInsurancePolicyResponsePagedListEntity

```ts
const employee_health_insurance_policy_response_paged_list = client.EmployeeHealthInsurancePolicyResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `null|string` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `*` | Yes | Represents the current coverage level for the policy |
| `employee_id` | `string` | Yes | The Id of the employee for which the policy is created |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolled_dependants_count` | `number` | Yes | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `string` | Yes | Enrolment type of the policy |
| `estimated_gross_premium` | `*` | Yes | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `null|string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `opt_out_deadline_date` | `string` | Yes | Last day to opt out from the policy |
| `policy_number` | `null|string` | No | Health insurance policy number, if available |
| `renewal` | `*` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `string` | Yes | Current status of policy |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EmployeeHealthInsurancePolicyResponsePagedList().list({ employee_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmployeeHealthInsurancePolicyResponsePagedListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmployerEntity

```ts
const employer = client.Employer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `applicable_collective_agreement` | `null|string` | No | Name of the collective agreement that applies to the employer's workforce, if any. |
| `contact` | `*` | Yes |  |
| `earliest_benefits_start_date` | `null|string` | No | The earliest date this employer is permitted to set up any benefits scheme. |
| `id` | `string` | Yes |  |
| `legal_address` | `*` | Yes | Treated as a single object that is updated entirely, `null` sub-fields (e.g. |
| `legal_name` | `string` | Yes | Legal name of the company. |
| `metadata` | `null|Object` | No | Set of key-value pairs that you can attach to an object. |
| `object` | `string` | No | The object type |
| `offboard_on` | `null|string` | No |  |
| `platform_id` | `string` | No |  |
| `registration_number` | `null|string` | No | Company registration number. |
| `status` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `applicable_collective_agreement` | - | - | - | - |
| `contact` | - | - | - | Yes |
| `earliest_benefits_start_date` | - | - | - | - |
| `id` | - | - | - | - |
| `legal_address` | - | - | - | Yes |
| `legal_name` | - | - | - | Yes |
| `metadata` | - | - | - | - |
| `object` | - | - | - | - |
| `offboard_on` | - | - | - | - |
| `platform_id` | - | - | - | - |
| `registration_number` | - | - | - | - |
| `status` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Employer().create({
  contact: 'example_contact',
  id: 'example_id',
  legal_address: 'example_legal_address',
  legal_name: 'example_legal_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Employer().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Employer().load({ id: 'employer_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Employer().update({
  id: 'employer_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmployerEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmployerHealthInsurancePolicyEntity

```ts
const employer_health_insurance_policy = client.EmployerHealthInsurancePolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `null|string` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `Array` | Yes | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `number` | Yes | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolment_type` | `string` | Yes | Enrolment type of the policy |
| `group_policy_number` | `null|string` | No | Group’s health insurance policy number, if available |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `renewal` | `*` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `string` | Yes | Current status of policy |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EmployerHealthInsurancePolicy().load({ id: 'employer_health_insurance_policy_id', employer_id: 'employer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmployerHealthInsurancePolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmployerHealthInsurancePolicyResponsePagedListEntity

```ts
const employer_health_insurance_policy_response_paged_list = client.EmployerHealthInsurancePolicyResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `null|string` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `Array` | Yes | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `number` | Yes | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolment_type` | `string` | Yes | Enrolment type of the policy |
| `group_policy_number` | `null|string` | No | Group’s health insurance policy number, if available |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `renewal` | `*` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `string` | Yes | Current status of policy |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EmployerHealthInsurancePolicyResponsePagedList().list({ employer_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmployerHealthInsurancePolicyResponsePagedListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmployerHealthInsuranceQuoteEntity

```ts
const employer_health_insurance_quote = client.EmployerHealthInsuranceQuote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_levels` | `Array` | Yes | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | Yes | The Id of the employer for which the is created |
| `id` | `string` | Yes | Unique identifier for the quote |
| `object` | `string` | No | The object type |
| `quoted_at` | `string` | Yes | Date and time the quote was created at |
| `required_action` | `null` | No | Actions required by the employer to proceed with the quote. |
| `status` | `string` | Yes | Current status of the quote |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EmployerHealthInsuranceQuote().load({ id: 'employer_health_insurance_quote_id', employer_id: 'employer_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmployerHealthInsuranceQuoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EmployerHealthInsuranceQuoteResponsePagedListEntity

```ts
const employer_health_insurance_quote_response_paged_list = client.EmployerHealthInsuranceQuoteResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_levels` | `Array` | Yes | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | Yes | The Id of the employer for which the is created |
| `id` | `string` | Yes | Unique identifier for the quote |
| `object` | `string` | No | The object type |
| `quoted_at` | `string` | Yes | Date and time the quote was created at |
| `required_action` | `null` | No | Actions required by the employer to proceed with the quote. |
| `status` | `string` | Yes | Current status of the quote |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EmployerHealthInsuranceQuoteResponsePagedList().list({ employer_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EmployerHealthInsuranceQuoteResponsePagedListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnrolmentIntentEntity

```ts
const enrolment_intent = client.EnrolmentIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `null` | No | If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment. |
| `coverage_selections` | `null|Array` | No | Optional plan coverage option selections for policy-scoped configurations. |
| `desired_policy_start_date` | `null|string` | No | The desired date for the employee's policy to start. |
| `disclosures` | `Array` | Yes | Disclosures associated with this intent. |
| `employee_id` | `string` | Yes | Identifier for the employee associated with this enrolment intent. |
| `enrolment_date` | `null|string` | No | The date on which the employee agreed to enrol into the group's policies. |
| `force_confirmation` | `boolean` | Yes | If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. |
| `group_id` | `string` | Yes | Identifier for the group associated with this enrolment intent. |
| `id` | `string` | Yes | Unique identifier for the enrolment intent. |
| `ineligibility_reason` | `null` | No | If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility. |
| `object` | `string` | No | Object type identifier. |
| `pending_confirmation` | `null` | No | If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state. |
| `policy_configuration` | `null` | No | Policy configuration associated with this enrolment intent. |
| `policy_enrolments` | `Array` | Yes | Policy enrolment information |
| `status` | `string` | Yes | Current status of the enrolment intent. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.EnrolmentIntent().create({
  disclosures: [],
  employee_id: 'example_employee_id',
  force_confirmation: true,
  group_id: 'example_group_id',
  id: 'example_id',
  policy_enrolments: [],
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EnrolmentIntent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.EnrolmentIntent().load({ id: 'enrolment_intent_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.EnrolmentIntent().update({
  id: 'enrolment_intent_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnrolmentIntentEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EnrolmentIntentRequirementResponsePagedListEntity

```ts
const enrolment_intent_requirement_response_paged_list = client.EnrolmentIntentRequirementResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.EnrolmentIntentRequirementResponsePagedList().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EnrolmentIntentRequirementResponsePagedListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## EventEntity

```ts
const event = client.Event()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_version` | `string` | No |  |
| `created` | `string` | Yes |  |
| `data` | `null` | Yes |  |
| `id` | `string` | Yes |  |
| `platform_id` | `string` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Event().create({
  id: 'example_id',
  created: 'example_created',
  data: null,
  platform_id: 'example_platform_id',
  type: 'example_type',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Event().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Event().load({ id: 'event_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `EventEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupEntity

```ts
const group = client.Group()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `null|string` | No | Short description of the purpose or scope of the `group`. |
| `employer_id` | `string` | Yes | Identifier for the `employer` that owns this `group`. |
| `enrolment_type` | `string` | Yes | Indicates how employees are enrolled into the group. |
| `group_policy_ids` | `Array` | Yes | Group policy unique identifiers associated with this group. |
| `group_policy_intent_ids` | `Array` | Yes | Group policy intent unique identifiers associated with this group. |
| `group_quote_intent_ids` | `Array` | Yes | Group quote intent unique identifiers associated with this group. |
| `group_type` | `string` | Yes | Indicates how policies are organized for this group. |
| `id` | `string` | Yes | Unique identifier for the `group`. |
| `name` | `string` | Yes | Human-readable name of the `group`. |
| `object` | `string` | No | The object type |
| `status` | `string` | Yes | Current lifecycle state of the `group`, indicating its current progress. |

### Field Usage by Operation

| Field | load | list | create | update |
| --- | --- | --- | --- | --- |
| `description` | - | - | - | - |
| `employer_id` | - | - | - | - |
| `enrolment_type` | - | - | - | - |
| `group_policy_ids` | - | - | - | - |
| `group_policy_intent_ids` | - | - | - | - |
| `group_quote_intent_ids` | - | - | - | - |
| `group_type` | - | - | - | - |
| `id` | - | - | - | - |
| `name` | - | - | - | Yes |
| `object` | - | - | - | - |
| `status` | - | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Group().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Group().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Group().load({ id: 'group_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`. Resolves to the updated entity.

```ts
const result = await client.Group().update({
  id: 'group_id',
  // Fields to update
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupEmployeeEntity

```ts
const group_employee = client.GroupEmployee()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `create_enrolment_intents` | `null|boolean` | No | Controls whether enrolment intents are automatically created for the employee. |
| `desired_policy_start_date` | `null|string` | No | The desired date for the employee's policy to start. |
| `eligibility_status` | `string` | Yes | Eligibility status for the employee in this group. |
| `employee_id` | `string` | Yes | Employee Id |
| `enrolment_date` | `null|string` | No | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `string` | Yes | Enrolment status for the employee in this group. |
| `enrolments` | `Array` | Yes | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Yes | Unique identifier for the group. |
| `id` | `string` | Yes | Unique identifier for the employee. |
| `object` | `string` | No | The object type |
| `policies` | `Array` | Yes | List of policies associated with the employee in this group. |
| `policy_configuration` | `null` | No | Policy configuration for the employee in this group. |
| `scheduled_group_transitions` | `Array` | Yes | List of scheduled group transitions for the employee. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.GroupEmployee().create({
  id: 'example_id',
  eligibility_status: 'example_eligibility_status',
  employee_id: 'example_employee_id',
  enrolment_status: 'example_enrolment_status',
  enrolments: [],
  group_id: 'example_group_id',
  policies: [],
  scheduled_group_transitions: [],
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupEmployeeEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupEmployeeResponsePagedListEntity

```ts
const group_employee_response_paged_list = client.GroupEmployeeResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.GroupEmployeeResponsePagedList().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupEmployeeResponsePagedListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupPolicyEntity

```ts
const group_policy = client.GroupPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `null|string` | No | Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable. |
| `disclosures` | `Array` | Yes | Disclosures associated with this group policy. |
| `employer_id` | `string` | No | Identifier for the employer associated with this group policy. |
| `end_date` | `null|string` | No | Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended. |
| `group_id` | `string` | No | Identifier for the group associated with this group policy. |
| `health_insurance` | `null` | No | Health insurance–specific fields (present when `type=health_insurance`). |
| `id` | `string` | Yes | Unique identifier for the group policy. |
| `life_assurance` | `null` | No | Life assurance–specific fields (present when `type=life_assurance`). |
| `linked_group_policy_ids` | `Array` | Yes | The other `group_policy` objects bought together with this one as a single scheme — the policies created from the same multi-level purchase. |
| `object` | `string` | No | The object type |
| `plan` | `*` | Yes | Plan information for this policy |
| `provider` | `*` | Yes | Provider information for this policy. |
| `start_date` | `string` | Yes | Policy start (effective) date in ISO 8601 (YYYY-MM-DD). |
| `status` | `string` | Yes | Current lifecycle state of the `group_policy`, indicating its progress from creation to activation. |
| `type` | `string` | Yes | Policy type. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.GroupPolicy().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.GroupPolicy().load({ id: 'group_policy_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupPolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupPolicyIntentEntity

```ts
const group_policy_intent = client.GroupPolicyIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `null` | No | Details of the required action when the intent is in ActionRequired status. |
| `consent_approvals` | `null|Array` | No | Consent approvals to record at the time of intent creation |
| `cost_sharing` | `null` | No | Cost sharing configuration for the policy intent. |
| `disclosures` | `Array` | Yes | Disclosures associated with this intent. |
| `due_date` | `null|string` | No | Due date for the policy intent |
| `group_id` | `null|string` | Yes | Unique identifier for the group. |
| `group_policy_ids` | `Array` | Yes | The group policies created for this intent, one per level, once they exist. |
| `id` | `string` | Yes | Unique identifier for the group policy intent |
| `items` | `Array` | Yes | The benefits the accepted quote covers and the levels they were quoted at, echoed from the quote intent. |
| `object` | `string` | No | Object type identifier |
| `plan_id` | `null|string` | Yes | Unique identifier for the plan. |
| `quote_intent_id` | `string` | Yes | Unique identifier for the group quote intent this policy intent was created from |
| `status` | `string` | Yes | Current status of the group policy intent |
| `type` | `null` | No | Whether the accepted quote covers one (group, plan) pair or several levels. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.GroupPolicyIntent().create({
  disclosures: [],
  group_id: 'example_group_id',
  group_policy_ids: [],
  id: 'example_id',
  items: [],
  plan_id: 'example_plan_id',
  quote_intent_id: 'example_quote_intent_id',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.GroupPolicyIntent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.GroupPolicyIntent().load({ id: 'group_policy_intent_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupPolicyIntentEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupPolicyIntentRequirementResponsePagedListEntity

```ts
const group_policy_intent_requirement_response_paged_list = client.GroupPolicyIntentRequirementResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.GroupPolicyIntentRequirementResponsePagedList().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupPolicyIntentRequirementResponsePagedListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupQuoteEntity

```ts
const group_quote = client.GroupQuote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `breakdown` | `Array` | Yes | What makes up the annual cost: the premium, and the insurance premium tax charged on it when there is any. |
| `cost_sharing` | `null` | No | Cost sharing configuration for the quote. |
| `currency` | `string` | Yes | Currency of the premium (e.g. |
| `employee_count` | `number` | Yes | Number of employees covered by the quote. |
| `expires_at` | `string` | Yes | When the quote expires |
| `generated_at` | `string` | Yes | When the quote was generated |
| `levels` | `Array` | Yes | The priced levels of the quote, one per level of the intent — match them up by `group_id` and `plan_id` rather than by position. |
| `object` | `string` | No | Object type identifier |
| `pdf_expires_at` | `null|string` | No | When the PDF URL expires |
| `pdf_url` | `null|string` | No | URL to download the quote PDF. |
| `quote_pdfs` | `Array` | Yes | The documents the provider issued for the quote as a whole. |
| `total_annual_premium` | `number` | Yes | Total annual premium for the group, excluding any insurance premium tax. |
| `total_monthly_premium` | `number` | Yes | Total monthly premium for the group, excluding any insurance premium tax. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.GroupQuote().list({ group_quote_intent_id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupQuoteEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupQuoteIntentEntity

```ts
const group_quote_intent = client.GroupQuoteIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `null` | No | Details of the action required from the caller, if the intent is in action_required status. |
| `consent_links` | `Array` | Yes | The statements the customer must accept to proceed, each a sentence and the documents it names. |
| `cost_sharing` | `null` | No | Cost sharing configuration for the quote. |
| `coverage_selections` | `null|Array` | No | Plan coverage option selections for group-policy-scoped configurations. |
| `disclosures` | `Array` | Yes | Disclosures associated with this intent. |
| `expected_start_date` | `null|string` | No | Expected start date for the insurance coverage |
| `group_id` | `null|string` | Yes | Unique identifier for the group. |
| `id` | `string` | Yes | Unique identifier for the group quote intent |
| `items` | `Array` | Yes | The benefits this intent quotes and the levels they are quoted at. |
| `object` | `string` | No | Object type identifier |
| `plan_id` | `null|string` | Yes | Unique identifier for the plan. |
| `status` | `string` | Yes | Current status of the group quote intent |
| `type` | `null` | No | Whether the intent quotes one (group, plan) pair or several levels. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `action_required` | - | - | - |
| `consent_links` | - | - | - |
| `cost_sharing` | - | - | - |
| `coverage_selections` | - | - | - |
| `disclosures` | - | - | - |
| `expected_start_date` | - | - | - |
| `group_id` | - | - | Yes |
| `id` | - | - | - |
| `items` | - | - | Yes |
| `object` | - | - | - |
| `plan_id` | - | - | Yes |
| `status` | - | - | - |
| `type` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.GroupQuoteIntent().create({
  consent_links: [],
  disclosures: [],
  group_id: 'example_group_id',
  id: 'example_id',
  items: [],
  plan_id: 'example_plan_id',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.GroupQuoteIntent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.GroupQuoteIntent().load({ id: 'group_quote_intent_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupQuoteIntentEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GroupQuoteIntentRequirementResponsePagedListEntity

```ts
const group_quote_intent_requirement_response_paged_list = client.GroupQuoteIntentRequirementResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.GroupQuoteIntentRequirementResponsePagedList().list({ id: "example" })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GroupQuoteIntentRequirementResponsePagedListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PlanEntity

```ts
const plan = client.Plan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_from` | `string` | Yes | The date from which this plan is available (inclusive). |
| `available_to` | `null|string` | No | The date until which this plan is available (inclusive). |
| `country` | `string` | Yes | The country this plan is available in. |
| `coverage_options` | `null|Array` | No | Coverage options available for this plan, organized by scope and input type. |
| `description` | `string` | Yes | Description of the plan. |
| `disclosures` | `Array` | Yes | Disclosures associated with this plan. |
| `documents` | `Array` | Yes | List of plan documents (e.g., IPIDs, T&Cs). |
| `eligible_count` | `null|number` | No | Number of employees in the queried group eligible for this plan as-of `start_date`. |
| `employee_eligibility_criteria` | `Array` | Yes | Eligibility criteria that employees must meet. |
| `employer_eligibility_criteria` | `Array` | Yes | Eligibility criteria that employers must meet. |
| `health_insurance` | `null` | No | Health insurance-specific details. |
| `id` | `string` | Yes | Unique identifier for the plan. |
| `indicative_pricing` | `null` | No | Average monthly guide prices used when exact catalog pricing is unavailable. |
| `ineligible_count` | `null|number` | No | Number of employees in the queried group ineligible for this plan as-of `start_date`. |
| `life_assurance` | `null` | No | Life assurance-specific details. |
| `name` | `string` | Yes | The name of the plan. |
| `object` | `string` | No | Object type. |
| `provider` | `*` | Yes | The provider offering this plan. |
| `total_count` | `null|number` | No | Total employees in the queried group. |
| `type` | `string` | Yes | The benefit type of the plan. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Plan().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Plan().load({ id: 'plan_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PlanEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PolicyEntity

```ts
const policy = client.Policy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundling_type` | `string` | Yes | Indicates how this policy is bundled within a group |
| `cancellation_date` | `null|string` | No | Date the policy was cancelled (if applicable) |
| `disclosures` | `Array` | Yes | Disclosures associated with this policy. |
| `employee_id` | `string` | Yes | Identifier of the employee associated with this policy. |
| `end_date` | `null|string` | No | Policy end date (inclusive) in ISO 8601, or null if open-ended |
| `group_id` | `string` | Yes | Identifier of the group associated with this policy. |
| `group_policy_id` | `string` | Yes | Identifier of the group policy id associated with this policy. |
| `health_insurance` | `null` | No | Health insurance–specific fields (present when `type=health_insurance`) |
| `id` | `string` | Yes | Unique identifier for the policy. |
| `life_assurance` | `null` | No | Life assurance–specific fields (present when `type=life_assurance`). |
| `object` | `string` | No | Object type |
| `opted_out_at` | `null|string` | No | UTC timestamp of the moment the member opted out of this policy during the cooling-off window. |
| `plan` | `*` | Yes | Plan information for this policy |
| `provider` | `*` | Yes | Provider information for this policy |
| `start_date` | `string` | Yes | Policy start (effective) date in ISO 8601 (YYYY-MM-DD) |
| `status` | `string` | Yes | Current lifecycle state of the policy |
| `type` | `string` | Yes | Policy type. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Policy().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Policy().load({ id: 'policy_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PolicyEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PolicyAmendmentIntentEntity

```ts
const policy_amendment_intent = client.PolicyAmendmentIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amendment_reason` | `*` | Yes | The reason for the policy amendment. |
| `disclosures` | `Array` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the policy amendment intent. |
| `object` | `string` | No | Object type identifier. |
| `pending_confirmation` | `null` | No | Information about the pending confirmation if the intent status is `pending_confirmation`. |
| `policy_id` | `string` | Yes | The policy ID for which the amendment is requested. |
| `processing_error` | `null` | No | Information about the processing error if the intent status is `processing_error`. |
| `requested_changes` | `Array` | Yes | List of requested changes to the policy. |
| `required_action` | `null` | No | Information about the required action if the intent status is `action_required`. |
| `status` | `string` | Yes | Current status of the policy amendment intent. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PolicyAmendmentIntent().create({
  id: 'example_id',
  amendment_reason: 'example_amendment_reason',
  disclosures: [],
  policy_id: 'example_policy_id',
  requested_changes: [],
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PolicyAmendmentIntent().list({ id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PolicyAmendmentIntent().load({ id: 'policy_amendment_intent_id', policy_id: 'policy_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PolicyAmendmentIntentEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## PolicyImportIntentEntity

```ts
const policy_import_intent = client.PolicyImportIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_persons` | `Array` | Yes | List of associated persons linked to this policy import. |
| `employee_id` | `string` | Yes | The employee ID for the policy import. |
| `group_id` | `string` | Yes | The group ID for the policy import. |
| `id` | `string` | Yes | Unique identifier for the policy import intent. |
| `member_number` | `string` | Yes | The member number assigned by the provider. |
| `object` | `string` | No | Object type identifier. |
| `policy_end_date` | `null|string` | No | The end date of the policy. |
| `policy_start_date` | `string` | Yes | The start date of the policy. |
| `provider_policy_number` | `string` | Yes | The provider's policy number. |
| `status` | `string` | Yes | Current status of the policy import intent. |

### Field Usage by Operation

| Field | load | list | create |
| --- | --- | --- | --- |
| `associated_persons` | - | - | Yes |
| `employee_id` | - | - | - |
| `group_id` | - | - | - |
| `id` | - | - | - |
| `member_number` | - | - | - |
| `object` | - | - | - |
| `policy_end_date` | - | - | - |
| `policy_start_date` | - | - | - |
| `provider_policy_number` | - | - | - |
| `status` | - | - | - |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.PolicyImportIntent().create({
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.PolicyImportIntent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.PolicyImportIntent().load({ id: 'policy_import_intent_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `PolicyImportIntentEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ProviderEntity

```ts
const provider = client.Provider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the provider. |
| `employer_platform_url` | `null|string` | No | URL to the employer portal/platform for this provider, if available. |
| `id` | `string` | Yes | Unique identifier for the provider. |
| `kota_hub_url` | `null|string` | No | URL to the Kota Hub page for this platform, if configured. |
| `logo_url` | `string` | Yes | URL to the provider's logo image. |
| `name` | `string` | Yes | The name of the provider. |
| `object` | `string` | No | Object type. |
| `support_phone` | `string` | Yes | Customer support phone number. |
| `supported_countries` | `Array` | Yes | List of countries supported by this provider. |
| `website_url` | `string` | Yes | The provider's main website URL. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Provider().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Provider().load({ id: 'provider_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ProviderEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## SalaryEntity

```ts
const salary = client.Salary()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amount` | `number` | Yes | Salary amount, in the given currency and pay frequency |
| `currency` | `string` | Yes | ISO currency code the amount is denominated in |
| `effective_from` | `string` | Yes | Date from which this salary is effective |
| `employee_id` | `string` | Yes | Unique identifier for the employee this salary belongs to |
| `id` | `string` | Yes | Unique identifier for the salary record |
| `object` | `string` | No | The object type |
| `pay_frequency` | `string` | Yes | The period this amount represents (e.g. |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data. Resolves to the created entity.

```ts
const result = await client.Salary().create({
  employee_id: 'example_employee_id',
  amount: 1,
  currency: 'example_currency',
  effective_from: 'example_effective_from',
  id: 'example_id',
  pay_frequency: 'example_pay_frequency',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.Salary().list({ employee_id: "example" })
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.Salary().load({ id: 'salary_id', employee_id: 'employee_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria. Resolves to the entity, marked as deleted.

```ts
const result = await client.Salary().remove({ id: 'salary_id', employee_id: 'employee_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `SalaryEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebhookEndpointEntity

```ts
const webhook_endpoint = client.WebhookEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The date and time the endpoint was created |
| `endpoint_url` | `string` | Yes | The registered URL of the endpoint |
| `id` | `string` | Yes | The unique identifier of the endpoint |
| `object` | `string` | No | The object type |
| `subscribed_events` | `Array` | Yes | The events the endpoint is subscribed to |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Resolves to an array of entities, one per record.

```ts
const results = await client.WebhookEndpoint().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria. Resolves to the entity, whose record `data()` reads.

```ts
const result = await client.WebhookEndpoint().load({ id: 'webhook_endpoint_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEndpointEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `debug` | 0.0.1 | Debug capture |
| `idempotency` | 0.0.1 | Idempotency |
| `metrics` | 0.0.1 | Metrics |
| `paging` | 0.0.1 | Paging |
| `ratelimit` | 0.0.1 | Rate limiting |
| `retry` | 0.0.1 | Retry |
| `test` | 0.0.1 | Test transport |
| `timeout` | 0.0.1 | Timeout |


Features are activated via the `feature` option:

```ts
const client = new KotaSDK({
  feature: {
    debug: { active: true },
    idempotency: { active: true },
    metrics: { active: true },
    paging: { active: true },
    ratelimit: { active: true },
    retry: { active: true },
    test: { active: true },
    timeout: { active: true },
  }
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`debug`, `idempotency`, `metrics`, `paging`, `test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `debug`

Debug capture.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

| Option | Type |
|---|---|
| `now` | function |
| `onEntry` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.debug.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `idempotency`

Idempotency.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

| Option | Type |
|---|---|
| `keygen` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.idempotency.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `metrics`

Metrics.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `now` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.metrics.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `paging`

Paging.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

| Option | Type |
|---|---|
| `limit` | number |
| `ops` | list |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.paging.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Inactive by default: leaving it out costs nothing at runtime.

#### `ratelimit`

Rate limiting.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Retry.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

Test transport.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Timeout.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `now` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

