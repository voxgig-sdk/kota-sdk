# Kota TypeScript SDK Reference

Complete API reference for the Kota TypeScript SDK.


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
| `date_of_birth` | `string` | Yes | Date of birth of the associated person |
| `email` | `null | string` | No | Email address of the associated person |
| `employee_id` | `string` | Yes | Unique identifier for the employee this person is associated with |
| `first_name` | `string` | Yes | First name of the associated person |
| `id` | `string` | Yes | Unique identifier for the associated person |
| `last_name` | `string` | Yes | Last name of the associated person |
| `object` | `string` | No | The object type |
| `phone_number` | `null | string` | No | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | No | Unique identifier for the platform |
| `relationship_type` | `any` | Yes | The relationship type between the employee and the associated person |
| `sex_at_birth` | `any` | Yes | The sex assigned to the associated person at birth |

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
const results = await client.AssociatedPerson().list({ employee_id: "example" })
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
| `associated_person_id` | `string` | Yes | The associated person ID. |
| `date_of_birth` | `string` | Yes | Date of birth of the associated person. |
| `eligibility_status` | `any` | Yes | Eligibility status for the policy/plan. |
| `first_name` | `string` | Yes | First name of the associated person. |
| `ineligibility_reason` | `null | string` | No | Reason for ineligibility if status is ineligible. |
| `last_name` | `string` | Yes | Last name of the associated person. |
| `object` | `string` | No | The object type |
| `relationship` | `any` | Yes | Relationship type to the employee. |
| `sex_at_birth` | `any` | Yes | Sex at birth of the associated person. |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

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
| `created_at` | `string` | Yes | Date and time the report was created |
| `employer_id` | `string` | Yes | Unique identifier of the employer for which the report is created |
| `external_customer_id` | `null | string` | No | Unique identifier of the customer for which the report is created. |
| `finalized_at` | `null | string` | No | Date and time the report was finalized, if applicable |
| `id` | `string` | Yes | Unique identifier for the contribution report |
| `last_updated_at` | `string` | Yes | Date and time of the last update to the report |
| `object` | `string` | No | The object type |
| `period` | `any` | Yes | Period covered by the contribution report |
| `status` | `any` | Yes | Current status of the contribution report |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `finalize` | `/contribution_reports/{contribution_report_id}/finalize` | `client.ContributionReport().create({ $action: 'finalize', ... })` |

An action returns that action's OWN response, which is not necessarily a
ContributionReport record — check the API definition for its shape.

```ts
const result = await client.ContributionReport().create({
  $action: 'finalize',
  /* ...the action's own arguments */
})
```

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
| `contribution_report_id` | `string` | Yes | Unique identifier of the related contribution report |
| `created_at` | `string` | Yes | Date and time the breakdown was created |
| `currency` | `any` | Yes | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Yes | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Yes | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `null | string` | No | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `null | string` | No | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `any` | Yes | Health insurance contribution details |
| `last_updated_at` | `string` | Yes | Date and time of the last update to the breakdown |
| `object` | `string` | No | The object type |
| `period` | `any` | Yes | Period covered by the employee breakdown |
| `status` | `any` | Yes | Current status of the breakdown |

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
| `contribution_report_id` | `string` | Yes | Unique identifier of the related contribution report |
| `created_at` | `string` | Yes | Date and time the breakdown was created |
| `currency` | `any` | Yes | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Yes | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Yes | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `null | string` | No | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `null | string` | No | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `any` | Yes | Health insurance contribution details |
| `last_updated_at` | `string` | Yes | Date and time of the last update to the breakdown |
| `object` | `string` | No | The object type |
| `period` | `any` | Yes | Period covered by the employee breakdown |
| `status` | `any` | Yes | Current status of the breakdown |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `employee_breakdowns` | `/contribution_reports/{contribution_report_id}/employee_breakdowns` | `client.ContributionReportEmployeeBreakdownResponsePagedList().list({ $action: 'employee_breakdowns', ... })` |

An action returns that action's OWN response, which is not necessarily a
ContributionReportEmployeeBreakdownResponsePagedList record — check the API definition for its shape.

```ts
const result = await client.ContributionReportEmployeeBreakdownResponsePagedList().list({
  $action: 'employee_breakdowns',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

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
| `action_required` | `null` | No | Details of the action required from the caller. |
| `coverage_options` | `null | any[]` | No | Available member-scoped coverage options for the plan. |
| `dependents` | `any[]` | Yes | List of dependents being managed. |
| `disclosures` | `any[]` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the dependents management intent. |
| `object` | `string` | No | Object type identifier. |
| `parent_intent_id` | `string` | Yes | The parent intent ID (e.g. |
| `parent_intent_type` | `any` | Yes | The type of parent intent. |
| `plan` | `any` | Yes | Plan information including pricing details. |
| `status` | `any` | Yes | Current status of the dependents management intent. |

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
| `action_required` | `null` | No | Details of the action required from the caller. |
| `coverage_options` | `null | any[]` | No | Available member-scoped coverage options for the plan. |
| `dependents` | `any[]` | Yes | List of dependents being managed. |
| `disclosures` | `any[]` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the dependents management intent. |
| `object` | `string` | No | Object type identifier. |
| `parent_intent_id` | `string` | Yes | The parent intent ID (e.g. |
| `parent_intent_type` | `any` | Yes | The type of parent intent. |
| `plan` | `any` | Yes | Plan information including pricing details. |
| `status` | `any` | Yes | Current status of the dependents management intent. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/dependents_management_intents/{dependents_management_intent_id}/cancel` | `client.DependentsManagementIntent().create({ $action: 'cancel', ... })` |
| `confirm` | `/dependents_management_intents/{dependents_management_intent_id}/confirm` | `client.DependentsManagementIntent().create({ $action: 'confirm', ... })` |

An action returns that action's OWN response, which is not necessarily a
DependentsManagementIntent record — check the API definition for its shape.

```ts
const result = await client.DependentsManagementIntent().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

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
| `eligibility_status` | `any` | Yes | Eligibility status: `eligible` or `ineligible`. |
| `object` | `string` | No | The object type. |
| `plan` | `any` | Yes | The insurance plan associated with the group. |
| `provider` | `any` | Yes | The insurance provider associated with the group. |
| `reasons` | `any[]` | Yes | List of reasons why the employee is ineligible. |

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
| `bank_account` | `null` | No | Bank account details |
| `date_of_birth` | `string` | Yes | Date of birth of the employee |
| `earliest_benefits_start_date` | `null | string` | No | The earliest date this employee can be enrolled in any benefits. |
| `email` | `string` | Yes | Email address of the employee |
| `employer_id` | `string` | No | Unique identifier for the employer |
| `external_customer_id` | `null | string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `first_name` | `string` | Yes | First name of the employee. |
| `home_address` | `null` | No | Location where the employee is legally registered to live |
| `id` | `string` | No | Unique identifier for the employee |
| `last_name` | `string` | Yes | Last name of the employee |
| `metadata` | `null | Record<string, any>` | No | Set of key-value pairs that you can attach to an object. |
| `national_tax_id` | `string` | Yes | PPSN in Ireland, NINo in the UK, DNI/NIE in Spain |
| `nationality` | `null` | No | Nationality of the employee (e.g. |
| `object` | `string` | No | The object type |
| `offboard_on` | `null | string` | No | Date when the employee was or will be offboarded |
| `phone_number` | `string` | Yes | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | No | Unique identifier for the platform |
| `sex_at_birth` | `any` | Yes | The sex assigned to the employee at birth |
| `start_on` | `string` | No | Employment start date |
| `status` | `any` | No | Current status of the employee |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `offboard` | `/employees/{employee_id}/offboard` | `client.Employee().create({ $action: 'offboard', ... })` |
| `offboard_cancel` | `/employees/{employee_id}/offboard/cancel` | `client.Employee().create({ $action: 'offboard_cancel', ... })` |

An action returns that action's OWN response, which is not necessarily a
Employee record — check the API definition for its shape.

```ts
const result = await client.Employee().create({
  $action: 'offboard',
  /* ...the action's own arguments */
})
```

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
| `coverage_level` | `any` | Yes | Details about the coverage level for the offer. |
| `employee_id` | `string` | Yes | The Id of the employee for which the offer is available |
| `employer_id` | `string` | Yes | The Id of the employer for which the offer is available |
| `external_customer_id` | `null | string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for offer |
| `object` | `string` | No | The object type |
| `required_action` | `null` | No | Required action to progress the offer, if any. |
| `status` | `any` | Yes | Current status of offer |

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
| `coverage_level` | `any` | Yes | Details about the coverage level for the offer. |
| `employee_id` | `string` | Yes | The Id of the employee for which the offer is available |
| `employer_id` | `string` | Yes | The Id of the employer for which the offer is available |
| `external_customer_id` | `null | string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for offer |
| `object` | `string` | No | The object type |
| `required_action` | `null` | No | Required action to progress the offer, if any. |
| `status` | `any` | Yes | Current status of offer |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

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
| `cancellation_date` | `null | string` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `any` | Yes | Represents the current coverage level for the policy |
| `employee_id` | `string` | Yes | The Id of the employee for which the policy is created |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolled_dependants_count` | `number` | Yes | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `any` | Yes | Enrolment type of the policy |
| `estimated_gross_premium` | `any` | Yes | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `null | string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `opt_out_deadline_date` | `string` | Yes | Last day to opt out from the policy |
| `policy_number` | `null | string` | No | Health insurance policy number, if available |
| `renewal` | `any` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `any` | Yes | Current status of policy |

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
| `cancellation_date` | `null | string` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `any` | Yes | Represents the current coverage level for the policy |
| `employee_id` | `string` | Yes | The Id of the employee for which the policy is created |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolled_dependants_count` | `number` | Yes | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `any` | Yes | Enrolment type of the policy |
| `estimated_gross_premium` | `any` | Yes | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `null | string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `opt_out_deadline_date` | `string` | Yes | Last day to opt out from the policy |
| `policy_number` | `null | string` | No | Health insurance policy number, if available |
| `renewal` | `any` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `any` | Yes | Current status of policy |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

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
| `contact` | `any` | Yes |  |
| `earliest_benefits_start_date` | `null | string` | No |  |
| `id` | `string` | Yes |  |
| `legal_address` | `any` | Yes |  |
| `legal_name` | `string` | Yes |  |
| `metadata` | `null | Record<string, any>` | No | Set of key-value pairs that you can attach to an object. |
| `object` | `string` | No | The object type |
| `offboard_on` | `null | string` | No |  |
| `platform_id` | `string` | No |  |
| `registration_number` | `null | string` | No |  |
| `status` | `any` | No |  |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `offboard` | `/employers/{employer_id}/offboard` | `client.Employer().create({ $action: 'offboard', ... })` |

An action returns that action's OWN response, which is not necessarily a
Employer record — check the API definition for its shape.

```ts
const result = await client.Employer().create({
  $action: 'offboard',
  /* ...the action's own arguments */
})
```

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
| `cancellation_date` | `null | string` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `any[]` | Yes | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `number` | Yes | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolment_type` | `any` | Yes | Enrolment type of the policy |
| `group_policy_number` | `null | string` | No | Group’s health insurance policy number, if available |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `renewal` | `any` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `any` | Yes | Current status of policy |

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
| `cancellation_date` | `null | string` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `any[]` | Yes | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `number` | Yes | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolment_type` | `any` | Yes | Enrolment type of the policy |
| `group_policy_number` | `null | string` | No | Group’s health insurance policy number, if available |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `renewal` | `any` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `any` | Yes | Current status of policy |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

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
| `coverage_levels` | `any[]` | Yes | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | Yes | The Id of the employer for which the is created |
| `id` | `string` | Yes | Unique identifier for the quote |
| `object` | `string` | No | The object type |
| `quoted_at` | `string` | Yes | Date and time the quote was created at |
| `required_action` | `null` | No | Actions required by the employer to proceed with the quote. |
| `status` | `any` | Yes | Current status of the quote |

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
| `coverage_levels` | `any[]` | Yes | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | Yes | The Id of the employer for which the is created |
| `id` | `string` | Yes | Unique identifier for the quote |
| `object` | `string` | No | The object type |
| `quoted_at` | `string` | Yes | Date and time the quote was created at |
| `required_action` | `null` | No | Actions required by the employer to proceed with the quote. |
| `status` | `any` | Yes | Current status of the quote |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

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
| `disclosures` | `any[]` | Yes | Disclosures associated with this intent. |
| `employee_id` | `string` | Yes | Identifier for the employee associated with this enrolment intent. |
| `force_confirmation` | `boolean` | Yes | If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. |
| `group_id` | `string` | Yes | Identifier for the group associated with this enrolment intent. |
| `id` | `string` | Yes | Unique identifier for the enrolment intent. |
| `ineligibility_reason` | `null` | No | If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility. |
| `object` | `string` | No | Object type identifier. |
| `pending_confirmation` | `null` | No | If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state. |
| `policy_configuration` | `null` | No | Policy configuration associated with this enrolment intent. |
| `policy_enrolments` | `any[]` | Yes | Policy enrolment information |
| `status` | `any` | Yes | Current status of the enrolment intent. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `confirm` | `/enrolment_intents/{enrolment_intent_id}/confirm` | `client.EnrolmentIntent().create({ $action: 'confirm', ... })` |
| `coverage_selection` | `/enrolment_intents/{enrolment_intent_id}/coverage-selections` | `client.EnrolmentIntent().create({ $action: 'coverage_selection', ... })` |
| `reject` | `/enrolment_intents/{enrolment_intent_id}/reject` | `client.EnrolmentIntent().create({ $action: 'reject', ... })` |

An action returns that action's OWN response, which is not necessarily a
EnrolmentIntent record — check the API definition for its shape.

```ts
const result = await client.EnrolmentIntent().create({
  $action: 'confirm',
  /* ...the action's own arguments */
})
```

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
| `id` | `string` | Yes | Unique identifier for the requirement |
| `is_fulfilled` | `boolean` | Yes | Whether the requirement has been fulfilled |
| `object` | `string` | No | Object type identifier |
| `object_id` | `string` | Yes | Identifier of the object (employee ID or employer ID) |
| `object_type` | `any` | Yes | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `any` | Yes | Type of requirement |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `requirements` | `/enrolment_intents/{enrolment_intent_id}/requirements` | `client.EnrolmentIntentRequirementResponsePagedList().list({ $action: 'requirements', ... })` |

An action returns that action's OWN response, which is not necessarily a
EnrolmentIntentRequirementResponsePagedList record — check the API definition for its shape.

```ts
const result = await client.EnrolmentIntentRequirementResponsePagedList().list({
  $action: 'requirements',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

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
| `options` | `null` | No |  |
| `parent` | `null` | No |  |
| `platform_id` | `string` | Yes |  |
| `root` | `any` | No |  |
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
| `description` | `null | string` | No | Short description of the purpose or scope of the `group`. |
| `employer_id` | `string` | Yes | Identifier for the `employer` that owns this `group`. |
| `enrolment_type` | `any` | Yes | Indicates how employees are enrolled into the group. |
| `group_policy_ids` | `any[]` | Yes | Group policy unique identifiers associated with this group. |
| `group_policy_intent_ids` | `any[]` | Yes | Group policy intent unique identifiers associated with this group. |
| `group_quote_intent_ids` | `any[]` | Yes | Group quote intent unique identifiers associated with this group. |
| `group_type` | `any` | Yes | Indicates how policies are organized for this group. |
| `id` | `string` | Yes | Unique identifier for the `group`. |
| `name` | `string` | Yes | Human-readable name of the `group`. |
| `object` | `string` | No | The object type |
| `status` | `any` | Yes | Current lifecycle state of the `group`, indicating its current progress. |

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
| `desired_policy_start_date` | `null | string` | No | The desired date for the employee's policy to start. |
| `eligibility_status` | `any` | Yes | Eligibility status for the employee in this group. |
| `enrolment_date` | `null | string` | No | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `any` | Yes | Enrolment status for the employee in this group. |
| `enrolments` | `any[]` | Yes | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Yes | Unique identifier for the group. |
| `id` | `string` | Yes | Unique identifier for the employee. |
| `object` | `string` | No | The object type |
| `policies` | `any[]` | Yes | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `any[]` | Yes | List of scheduled group transitions for the employee. |

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
| `desired_policy_start_date` | `null | string` | No | The desired date for the employee's policy to start. |
| `eligibility_status` | `any` | Yes | Eligibility status for the employee in this group. |
| `enrolment_date` | `null | string` | No | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `any` | Yes | Enrolment status for the employee in this group. |
| `enrolments` | `any[]` | Yes | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Yes | Unique identifier for the group. |
| `id` | `string` | Yes | Unique identifier for the employee. |
| `object` | `string` | No | The object type |
| `policies` | `any[]` | Yes | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `any[]` | Yes | List of scheduled group transitions for the employee. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `employees` | `/groups/{group_id}/employees` | `client.GroupEmployeeResponsePagedList().list({ $action: 'employees', ... })` |

An action returns that action's OWN response, which is not necessarily a
GroupEmployeeResponsePagedList record — check the API definition for its shape.

```ts
const result = await client.GroupEmployeeResponsePagedList().list({
  $action: 'employees',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

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
| `cancellation_date` | `null | string` | No | Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable. |
| `disclosures` | `any[]` | Yes | Disclosures associated with this group policy. |
| `employer_id` | `string` | No | Identifier for the employer associated with this group policy. |
| `end_date` | `null | string` | No | Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended. |
| `group_id` | `string` | No | Identifier for the group associated with this group policy. |
| `health_insurance` | `null` | No | Health insurance–specific fields (present when `type=health_insurance`). |
| `id` | `string` | Yes | Unique identifier for the group policy. |
| `object` | `string` | No | The object type |
| `plan` | `any` | Yes | Plan information for this policy |
| `provider` | `any` | Yes | Provider information for this policy. |
| `start_date` | `string` | Yes | Policy start (effective) date in ISO 8601 (YYYY-MM-DD). |
| `status` | `any` | Yes | Current lifecycle state of the `group_policy`, indicating its progress from creation to activation. |
| `type` | `any` | Yes | Policy type. |

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
| `action_required` | `null` | No | Details of the required action when the intent is in ActionRequired status. |
| `cost_sharing` | `null` | No | Cost sharing configuration for the policy intent |
| `disclosures` | `any[]` | Yes | Disclosures associated with this intent. |
| `due_date` | `null | string` | No | Due date for the policy intent |
| `group_id` | `string` | Yes | Unique identifier for the group |
| `id` | `string` | Yes | Unique identifier for the group policy intent |
| `object` | `string` | No | Object type identifier |
| `plan_id` | `string` | Yes | Unique identifier for the plan |
| `quote_intent_id` | `string` | Yes | Unique identifier for the group quote intent this policy intent was created from |
| `status` | `any` | Yes | Current status of the group policy intent |

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
| `id` | `string` | Yes | Unique identifier for the requirement |
| `is_fulfilled` | `boolean` | Yes | Whether the requirement has been fulfilled |
| `object` | `string` | No | Object type identifier |
| `object_id` | `string` | Yes | Identifier of the object (employee ID or employer ID) |
| `object_type` | `any` | Yes | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `any` | Yes | Type of requirement |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `requirements` | `/group_policy_intents/{group_policy_intent_id}/requirements` | `client.GroupPolicyIntentRequirementResponsePagedList().list({ $action: 'requirements', ... })` |

An action returns that action's OWN response, which is not necessarily a
GroupPolicyIntentRequirementResponsePagedList record — check the API definition for its shape.

```ts
const result = await client.GroupPolicyIntentRequirementResponsePagedList().list({
  $action: 'requirements',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

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
| `family_type` | `null` | No | Type of the family covered by the employer. |
| `member_count` | `null` | No | Numbers of additional members covered by the employer. |
| `member_selection` | `null` | No | Whether specific member types are covered by the employer. |
| `percentage` | `null` | No | Percentage of the premium the employer covers. |
| `type` | `any` | Yes | Cost sharing type. |

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
| `action_required` | `null` | No | Details of the action required from the caller, if the intent is in action_required status. |
| `consent_links` | `any[]` | Yes | Consent links that need to be acknowledged |
| `cost_sharing` | `null` | No | Cost sharing configuration for the quote |
| `disclosures` | `any[]` | Yes | Disclosures associated with this intent. |
| `expected_start_date` | `null | string` | No | Expected start date for the insurance coverage |
| `group_id` | `string` | Yes | Unique identifier for the group |
| `id` | `string` | Yes | Unique identifier for the group quote intent |
| `object` | `string` | No | Object type identifier |
| `plan_id` | `string` | Yes | Unique identifier for the plan |
| `status` | `any` | Yes | Current status of the group quote intent |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `reject` | `/group_quote_intents/{group_quote_intent_id}/reject` | `client.GroupQuoteIntent().create({ $action: 'reject', ... })` |

An action returns that action's OWN response, which is not necessarily a
GroupQuoteIntent record — check the API definition for its shape.

```ts
const result = await client.GroupQuoteIntent().create({
  $action: 'reject',
  /* ...the action's own arguments */
})
```

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
| `id` | `string` | Yes | Unique identifier for the requirement |
| `is_fulfilled` | `boolean` | Yes | Whether the requirement has been fulfilled |
| `object` | `string` | No | Object type identifier |
| `object_id` | `string` | Yes | Identifier of the object (employee ID or employer ID) |
| `object_type` | `any` | Yes | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `any` | Yes | Type of requirement |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `requirements` | `/group_quote_intents/{group_quote_intent_id}/requirements` | `client.GroupQuoteIntentRequirementResponsePagedList().list({ $action: 'requirements', ... })` |

An action returns that action's OWN response, which is not necessarily a
GroupQuoteIntentRequirementResponsePagedList record — check the API definition for its shape.

```ts
const result = await client.GroupQuoteIntentRequirementResponsePagedList().list({
  $action: 'requirements',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

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
| `available_to` | `null | string` | No | The date until which this plan is available (inclusive). |
| `country` | `any` | Yes | The country this plan is available in. |
| `coverage_options` | `null | any[]` | No | Coverage options available for this plan, organized by scope and input type. |
| `description` | `string` | Yes | Description of the plan. |
| `disclosures` | `any[]` | Yes | Disclosures associated with this plan. |
| `documents` | `any[]` | Yes | List of plan documents (e.g., IPIDs, T&Cs). |
| `eligible_count` | `null | number` | No | Number of employees in the queried group eligible for this plan as-of `start_date`. |
| `employee_eligibility_criteria` | `any[]` | Yes | Eligibility criteria that employees must meet. |
| `employer_eligibility_criteria` | `any[]` | Yes | Eligibility criteria that employers must meet. |
| `health_insurance` | `null` | No | Health insurance-specific details. |
| `id` | `string` | Yes | Unique identifier for the plan. |
| `ineligible_count` | `null | number` | No | Number of employees in the queried group ineligible for this plan as-of `start_date`. |
| `name` | `string` | Yes | The name of the plan. |
| `object` | `string` | No | Object type. |
| `provider` | `any` | Yes | The provider offering this plan. |
| `total_count` | `null | number` | No | Total employees in the queried group. |
| `type` | `any` | Yes | The benefit type of the plan. |

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
| `bundling_type` | `any` | Yes | Indicates how this policy is bundled within a group |
| `cancellation_date` | `null | string` | No | Date the policy was cancelled (if applicable) |
| `disclosures` | `any[]` | Yes | Disclosures associated with this policy. |
| `employee_id` | `string` | Yes | Identifier of the employee associated with this policy. |
| `end_date` | `null | string` | No | Policy end date (inclusive) in ISO 8601, or null if open-ended |
| `group_id` | `string` | Yes | Identifier of the group associated with this policy. |
| `group_policy_id` | `string` | Yes | Identifier of the group policy id associated with this policy. |
| `health_insurance` | `null` | No | Health insurance–specific fields (present when `type=health_insurance`) |
| `id` | `string` | Yes | Unique identifier for the policy. |
| `object` | `string` | No | Object type |
| `plan` | `any` | Yes | Plan information for this policy |
| `provider` | `any` | Yes | Provider information for this policy |
| `start_date` | `string` | Yes | Policy start (effective) date in ISO 8601 (YYYY-MM-DD) |
| `status` | `any` | Yes | Current lifecycle state of the policy |
| `type` | `any` | Yes | Policy type. |

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
| `amendment_reason` | `any` | Yes | The reason for the policy amendment. |
| `disclosures` | `any[]` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the policy amendment intent. |
| `object` | `string` | No | Object type identifier. |
| `pending_confirmation` | `null` | No | Information about the pending confirmation if the intent status is `pending_confirmation`. |
| `policy_id` | `string` | Yes | The policy ID for which the amendment is requested. |
| `processing_error` | `null` | No | Information about the processing error if the intent status is `processing_error`. |
| `requested_changes` | `any[]` | Yes | List of requested changes to the policy. |
| `required_action` | `null` | No | Information about the required action if the intent status is `action_required`. |
| `status` | `any` | Yes | Current status of the policy amendment intent. |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `cancel` | `/policies/{policy_id}/policy_amendment_intents/{id}/cancel` | `client.PolicyAmendmentIntent().create({ $action: 'cancel', ... })` |
| `confirm` | `/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}/confirm` | `client.PolicyAmendmentIntent().create({ $action: 'confirm', ... })` |

An action returns that action's OWN response, which is not necessarily a
PolicyAmendmentIntent record — check the API definition for its shape.

```ts
const result = await client.PolicyAmendmentIntent().create({
  $action: 'cancel',
  /* ...the action's own arguments */
})
```

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
const results = await client.PolicyAmendmentIntent().list({ id: "example_id" })
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
| `associated_persons` | `any[]` | Yes | List of associated persons linked to this policy import. |
| `employee_id` | `string` | Yes | The employee ID for the policy import. |
| `group_id` | `string` | Yes | The group ID for the policy import. |
| `id` | `string` | Yes | Unique identifier for the policy import intent. |
| `member_number` | `string` | Yes | The member number assigned by the provider. |
| `object` | `string` | No | Object type identifier. |
| `policy_end_date` | `null | string` | No | The end date of the policy. |
| `policy_start_date` | `string` | Yes | The start date of the policy. |
| `provider_policy_number` | `string` | Yes | The provider's policy number. |
| `status` | `any` | Yes | Current status of the policy import intent. |

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
| `description` | `string` | Yes | Description of the provider. |
| `employer_platform_url` | `null | string` | No | URL to the employer portal/platform for this provider, if available. |
| `id` | `string` | Yes | Unique identifier for the provider. |
| `kota_hub_url` | `null | string` | No | URL to the Kota Hub page for this platform, if configured. |
| `logo_url` | `string` | Yes | URL to the provider's logo image. |
| `name` | `string` | Yes | The name of the provider. |
| `object` | `string` | No | Object type. |
| `support_phone` | `string` | Yes | Customer support phone number. |
| `supported_countries` | `any[]` | Yes | List of countries supported by this provider. |
| `website_url` | `string` | Yes | The provider's main website URL. |

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
| `deliveries` | `any[]` | Yes |  |
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
| `created_at` | `string` | Yes | The date and time the endpoint was created |
| `endpoint_url` | `string` | Yes | The registered URL of the endpoint |
| `id` | `string` | Yes | The unique identifier of the endpoint |
| `object` | `string` | No | The object type |
| `subscribed_events` | `any[]` | Yes | The events the endpoint is subscribed to |

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
| `created_at` | `string` | Yes | The date and time the endpoint was created |
| `endpoint_url` | `string` | Yes | The registered URL of the endpoint |
| `id` | `string` | Yes | The unique identifier of the endpoint |
| `object` | `string` | No | The object type |
| `subscribed_events` | `any[]` | Yes | The events the endpoint is subscribed to |

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

