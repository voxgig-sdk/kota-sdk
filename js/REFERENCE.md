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

#### `Replay(data?: object)`

Create a new `Replay` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ReplayEntity` instance.

#### `WebhookEndpoint(data?: object)`

Create a new `WebhookEndpoint` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEndpointEntity` instance.

#### `WebhookEndpointResponsePagedList(data?: object)`

Create a new `WebhookEndpointResponsePagedList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebhookEndpointResponsePagedListEntity` instance.

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

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `KotaSDK.test()`.

**Returns:** `KotaSDK` instance in test mode.


---

## AssociatedPersonEntity

```ts
const associated_person = client.AssociatedPerson()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date_of_birth` | `string` | Yes |  |
| `email` | `null|string` | No |  |
| `employee_id` | `string` | Yes |  |
| `first_name` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `last_name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `phone_number` | `null|string` | No |  |
| `platform_id` | `string` | No |  |
| `relationship_type` | `*` | Yes |  |
| `sex_at_birth` | `*` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

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

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AssociatedPerson().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.AssociatedPerson().load({ id: 'associated_person_id', employee_id: 'employee_id' })
```

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.AssociatedPerson().remove({ id: 'associated_person_id', employee_id: 'employee_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

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
| `associated_person_id` | `string` | Yes |  |
| `date_of_birth` | `string` | Yes |  |
| `eligibility_status` | `*` | Yes |  |
| `first_name` | `string` | Yes |  |
| `ineligibility_reason` | `null|string` | No |  |
| `last_name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `relationship` | `*` | Yes |  |
| `sex_at_birth` | `*` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AssociatedPersonEligibilityResponsePagedList().list()
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
| `created_at` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `null|string` | No |  |
| `finalized_at` | `null|string` | No |  |
| `id` | `string` | Yes |  |
| `last_updated_at` | `string` | Yes |  |
| `object` | `string` | No |  |
| `period` | `*` | Yes |  |
| `status` | `*` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.ContributionReport().create({
  id: 'example_id',
  created_at: 'example_created_at',
  employer_id: 'example_employer_id',
  last_updated_at: 'example_last_updated_at',
  period: 'example_period',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ContributionReport().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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
| `contribution_report_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `currency` | `*` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `null|string` | No |  |
| `finalized_at` | `null|string` | No |  |
| `health_insurance` | `*` | Yes |  |
| `last_updated_at` | `string` | Yes |  |
| `object` | `string` | No |  |
| `period` | `*` | Yes |  |
| `status` | `*` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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
| `contribution_report_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `currency` | `*` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `null|string` | No |  |
| `finalized_at` | `null|string` | No |  |
| `health_insurance` | `*` | Yes |  |
| `last_updated_at` | `string` | Yes |  |
| `object` | `string` | No |  |
| `period` | `*` | Yes |  |
| `status` | `*` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.ContributionReportEmployeeBreakdownResponsePagedList().list()
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
| `expiry` | `string` | Yes |  |
| `link` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateHostedSessionToken().create({
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
| `expiry` | `string` | Yes |  |
| `token` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.CreateSessionToken().create({
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
| `action_required` | `null` | No |  |
| `coverage_options` | `null|Array` | No |  |
| `dependents` | `Array` | Yes |  |
| `disclosures` | `Array` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `parent_intent_id` | `string` | Yes |  |
| `parent_intent_type` | `*` | Yes |  |
| `plan` | `*` | Yes |  |
| `status` | `*` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Dependent().create({
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

#### `remove(match: object, ctrl?: object)`

Remove the entity matching the given criteria.

```ts
const result = await client.Dependent().remove({ dependents_management_intent_id: 'dependents_management_intent_id', id: 'id' })
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
| `action_required` | `null` | No |  |
| `coverage_options` | `null|Array` | No |  |
| `dependents` | `Array` | Yes |  |
| `disclosures` | `Array` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `parent_intent_id` | `string` | Yes |  |
| `parent_intent_type` | `*` | Yes |  |
| `plan` | `*` | Yes |  |
| `status` | `*` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.DependentsManagementIntent().create({
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

Load a single entity matching the given criteria.

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
| `eligibility_status` | `*` | Yes |  |
| `object` | `string` | No |  |
| `plan` | `*` | Yes |  |
| `provider` | `*` | Yes |  |
| `reasons` | `Array` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.EligibilityCheck().create({
  group_id: 'example_group_id',
  eligibility_status: 'example_eligibility_status',
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
| `bank_account` | `null` | No |  |
| `date_of_birth` | `string` | Yes |  |
| `earliest_benefits_start_date` | `null|string` | No |  |
| `email` | `string` | Yes |  |
| `employer_id` | `string` | No |  |
| `external_customer_id` | `null|string` | No |  |
| `first_name` | `string` | Yes |  |
| `home_address` | `null` | No |  |
| `id` | `string` | No |  |
| `last_name` | `string` | Yes |  |
| `metadata` | `null|Object` | No |  |
| `national_tax_id` | `string` | Yes |  |
| `nationality` | `null` | No |  |
| `object` | `string` | No |  |
| `offboard_on` | `null|string` | No |  |
| `phone_number` | `string` | Yes |  |
| `platform_id` | `string` | No |  |
| `sex_at_birth` | `*` | Yes |  |
| `start_on` | `string` | No |  |
| `status` | `*` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

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

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Employee().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Employee().load({ id: 'employee_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

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
| `coverage_level` | `*` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `null|string` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `required_action` | `null` | No |  |
| `status` | `*` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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
| `coverage_level` | `*` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `null|string` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `required_action` | `null` | No |  |
| `status` | `*` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EmployeeHealthInsuranceOfferResponsePagedList().list()
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
| `cancellation_date` | `null|string` | No |  |
| `coverage_level` | `*` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolled_dependants_count` | `number` | Yes |  |
| `enrolment_type` | `*` | Yes |  |
| `estimated_gross_premium` | `*` | Yes |  |
| `external_customer_id` | `null|string` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `opt_out_deadline_date` | `string` | Yes |  |
| `policy_number` | `null|string` | No |  |
| `renewal` | `*` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `*` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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
| `cancellation_date` | `null|string` | No |  |
| `coverage_level` | `*` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolled_dependants_count` | `number` | Yes |  |
| `enrolment_type` | `*` | Yes |  |
| `estimated_gross_premium` | `*` | Yes |  |
| `external_customer_id` | `null|string` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `opt_out_deadline_date` | `string` | Yes |  |
| `policy_number` | `null|string` | No |  |
| `renewal` | `*` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `*` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EmployeeHealthInsurancePolicyResponsePagedList().list()
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
| `contact` | `*` | Yes |  |
| `earliest_benefits_start_date` | `null|string` | No |  |
| `id` | `string` | Yes |  |
| `legal_address` | `*` | Yes |  |
| `legal_name` | `string` | Yes |  |
| `metadata` | `null|Object` | No |  |
| `object` | `string` | No |  |
| `offboard_on` | `null|string` | No |  |
| `platform_id` | `string` | No |  |
| `registration_number` | `null|string` | No |  |
| `status` | `*` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Employer().create({
  contact: 'example_contact',
  id: 'example_id',
  legal_address: 'example_legal_address',
  legal_name: 'example_legal_name',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Employer().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Employer().load({ id: 'employer_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

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
| `cancellation_date` | `null|string` | No |  |
| `coverage_levels` | `Array` | Yes |  |
| `employer_cancellation_period_length` | `number` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolment_type` | `*` | Yes |  |
| `group_policy_number` | `null|string` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `renewal` | `*` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `*` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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
| `cancellation_date` | `null|string` | No |  |
| `coverage_levels` | `Array` | Yes |  |
| `employer_cancellation_period_length` | `number` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolment_type` | `*` | Yes |  |
| `group_policy_number` | `null|string` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `renewal` | `*` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `*` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EmployerHealthInsurancePolicyResponsePagedList().list()
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
| `coverage_levels` | `Array` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `quoted_at` | `string` | Yes |  |
| `required_action` | `null` | No |  |
| `status` | `*` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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
| `coverage_levels` | `Array` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `quoted_at` | `string` | Yes |  |
| `required_action` | `null` | No |  |
| `status` | `*` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EmployerHealthInsuranceQuoteResponsePagedList().list()
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
| `action_required` | `null` | No |  |
| `disclosures` | `Array` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `force_confirmation` | `boolean` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `ineligibility_reason` | `null` | No |  |
| `object` | `string` | No |  |
| `pending_confirmation` | `null` | No |  |
| `policy_configuration` | `null` | No |  |
| `policy_enrolments` | `Array` | Yes |  |
| `status` | `*` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

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

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EnrolmentIntent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.EnrolmentIntent().load({ id: 'enrolment_intent_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

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
| `id` | `string` | Yes |  |
| `is_fulfilled` | `boolean` | Yes |  |
| `object` | `string` | No |  |
| `object_id` | `string` | Yes |  |
| `object_type` | `*` | Yes |  |
| `requirement_type` | `*` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.EnrolmentIntentRequirementResponsePagedList().list()
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
| `options` | `null` | No |  |
| `parent` | `null` | No |  |
| `platform_id` | `string` | Yes |  |
| `root` | `*` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Event().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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
| `description` | `null|string` | No |  |
| `employer_id` | `string` | Yes |  |
| `enrolment_type` | `*` | Yes |  |
| `group_policy_ids` | `Array` | Yes |  |
| `group_policy_intent_ids` | `Array` | Yes |  |
| `group_quote_intent_ids` | `Array` | Yes |  |
| `group_type` | `*` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `status` | `*` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

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

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Group().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.Group().load({ id: 'group_id' })
```

#### `update(data: object, ctrl?: object)`

Update an existing entity. The data must include the entity `id`.

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
| `desired_policy_start_date` | `null|string` | No |  |
| `eligibility_status` | `*` | Yes |  |
| `enrolment_date` | `null|string` | No |  |
| `enrolment_status` | `*` | Yes |  |
| `enrolments` | `Array` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `policies` | `Array` | Yes |  |
| `scheduled_group_transitions` | `Array` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GroupEmployee().create({
  id: 'example_id',
  eligibility_status: 'example_eligibility_status',
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
| `desired_policy_start_date` | `null|string` | No |  |
| `eligibility_status` | `*` | Yes |  |
| `enrolment_date` | `null|string` | No |  |
| `enrolment_status` | `*` | Yes |  |
| `enrolments` | `Array` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `policies` | `Array` | Yes |  |
| `scheduled_group_transitions` | `Array` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GroupEmployeeResponsePagedList().list()
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
| `cancellation_date` | `null|string` | No |  |
| `disclosures` | `Array` | Yes |  |
| `employer_id` | `string` | No |  |
| `end_date` | `null|string` | No |  |
| `group_id` | `string` | No |  |
| `health_insurance` | `null` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan` | `*` | Yes |  |
| `provider` | `*` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `*` | Yes |  |
| `type` | `*` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GroupPolicy().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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
| `action_required` | `null` | No |  |
| `cost_sharing` | `null` | No |  |
| `disclosures` | `Array` | Yes |  |
| `due_date` | `null|string` | No |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan_id` | `string` | Yes |  |
| `quote_intent_id` | `string` | Yes |  |
| `status` | `*` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GroupPolicyIntent().create({
  disclosures: [],
  group_id: 'example_group_id',
  id: 'example_id',
  plan_id: 'example_plan_id',
  quote_intent_id: 'example_quote_intent_id',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GroupPolicyIntent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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
| `id` | `string` | Yes |  |
| `is_fulfilled` | `boolean` | Yes |  |
| `object` | `string` | No |  |
| `object_id` | `string` | Yes |  |
| `object_type` | `*` | Yes |  |
| `requirement_type` | `*` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GroupPolicyIntentRequirementResponsePagedList().list()
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
| `family_type` | `null` | No |  |
| `member_count` | `null` | No |  |
| `member_selection` | `null` | No |  |
| `percentage` | `null` | No |  |
| `type` | `*` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GroupQuote().load({ group_quote_intent_id: 'group_quote_intent_id' })
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
| `action_required` | `null` | No |  |
| `consent_links` | `Array` | Yes |  |
| `cost_sharing` | `null` | No |  |
| `disclosures` | `Array` | Yes |  |
| `expected_start_date` | `null|string` | No |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan_id` | `string` | Yes |  |
| `status` | `*` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GroupQuoteIntent().create({
  consent_links: [],
  disclosures: [],
  group_id: 'example_group_id',
  id: 'example_id',
  plan_id: 'example_plan_id',
  status: 'example_status',
})
```

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GroupQuoteIntent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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
| `id` | `string` | Yes |  |
| `is_fulfilled` | `boolean` | Yes |  |
| `object` | `string` | No |  |
| `object_id` | `string` | Yes |  |
| `object_type` | `*` | Yes |  |
| `requirement_type` | `*` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GroupQuoteIntentRequirementResponsePagedList().list()
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
| `available_from` | `string` | Yes |  |
| `available_to` | `null|string` | No |  |
| `country` | `*` | Yes |  |
| `coverage_options` | `null|Array` | No |  |
| `description` | `string` | Yes |  |
| `disclosures` | `Array` | Yes |  |
| `documents` | `Array` | Yes |  |
| `eligible_count` | `null|number` | No |  |
| `employee_eligibility_criteria` | `Array` | Yes |  |
| `employer_eligibility_criteria` | `Array` | Yes |  |
| `health_insurance` | `null` | No |  |
| `id` | `string` | Yes |  |
| `ineligible_count` | `null|number` | No |  |
| `name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `provider` | `*` | Yes |  |
| `total_count` | `null|number` | No |  |
| `type` | `*` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Plan().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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
| `bundling_type` | `*` | Yes |  |
| `cancellation_date` | `null|string` | No |  |
| `disclosures` | `Array` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `end_date` | `null|string` | No |  |
| `group_id` | `string` | Yes |  |
| `group_policy_id` | `string` | Yes |  |
| `health_insurance` | `null` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan` | `*` | Yes |  |
| `provider` | `*` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `*` | Yes |  |
| `type` | `*` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Policy().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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
| `amendment_reason` | `*` | Yes |  |
| `disclosures` | `Array` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `pending_confirmation` | `null` | No |  |
| `policy_id` | `string` | Yes |  |
| `processing_error` | `null` | No |  |
| `requested_changes` | `Array` | Yes |  |
| `required_action` | `null` | No |  |
| `status` | `*` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

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

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PolicyAmendmentIntent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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
| `associated_persons` | `Array` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `member_number` | `string` | Yes |  |
| `object` | `string` | No |  |
| `policy_end_date` | `null|string` | No |  |
| `policy_start_date` | `string` | Yes |  |
| `provider_policy_number` | `string` | Yes |  |
| `status` | `*` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

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

List entities matching the given criteria. Returns an array.

```ts
const results = await client.PolicyImportIntent().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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
| `description` | `string` | Yes |  |
| `employer_platform_url` | `null|string` | No |  |
| `id` | `string` | Yes |  |
| `kota_hub_url` | `null|string` | No |  |
| `logo_url` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `support_phone` | `string` | Yes |  |
| `supported_countries` | `Array` | Yes |  |
| `website_url` | `string` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Provider().list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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

## ReplayEntity

```ts
const replay = client.Replay()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deliveries` | `Array` | Yes |  |
| `event_id` | `string` | Yes |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.Replay().create({
  event_id: 'example_event_id',
  deliveries: [],
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

Create a new `ReplayEntity` instance with the same client and
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
| `created_at` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `subscribed_events` | `Array` | Yes |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

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

## WebhookEndpointResponsePagedListEntity

```ts
const webhook_endpoint_response_paged_list = client.WebhookEndpointResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `subscribed_events` | `Array` | Yes |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WebhookEndpointResponsePagedList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebhookEndpointResponsePagedListEntity` instance with the same client and
options.

#### `client()`

Return the parent `KotaSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new KotaSDK({
  feature: {
    test: { active: true },
  }
})
```

