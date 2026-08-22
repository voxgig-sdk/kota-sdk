# Kota PHP SDK Reference

Complete API reference for the Kota PHP SDK.


## KotaSDK

### Constructor

```php
require_once __DIR__ . '/kota_sdk.php';

$client = new KotaSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `KotaSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = KotaSDK::test();
```


### Instance Methods

#### `AssociatedPerson($data = null)`

Create a new `AssociatedPersonEntity` instance. Pass `null` for no initial data.

#### `AssociatedPersonEligibilityResponsePagedList($data = null)`

Create a new `AssociatedPersonEligibilityResponsePagedListEntity` instance. Pass `null` for no initial data.

#### `ContributionReport($data = null)`

Create a new `ContributionReportEntity` instance. Pass `null` for no initial data.

#### `ContributionReportEmployeeBreakdown($data = null)`

Create a new `ContributionReportEmployeeBreakdownEntity` instance. Pass `null` for no initial data.

#### `ContributionReportEmployeeBreakdownResponsePagedList($data = null)`

Create a new `ContributionReportEmployeeBreakdownResponsePagedListEntity` instance. Pass `null` for no initial data.

#### `CreateHostedSessionToken($data = null)`

Create a new `CreateHostedSessionTokenEntity` instance. Pass `null` for no initial data.

#### `CreateSessionToken($data = null)`

Create a new `CreateSessionTokenEntity` instance. Pass `null` for no initial data.

#### `Dependent($data = null)`

Create a new `DependentEntity` instance. Pass `null` for no initial data.

#### `DependentsManagementIntent($data = null)`

Create a new `DependentsManagementIntentEntity` instance. Pass `null` for no initial data.

#### `EligibilityCheck($data = null)`

Create a new `EligibilityCheckEntity` instance. Pass `null` for no initial data.

#### `Employee($data = null)`

Create a new `EmployeeEntity` instance. Pass `null` for no initial data.

#### `EmployeeHealthInsuranceOffer($data = null)`

Create a new `EmployeeHealthInsuranceOfferEntity` instance. Pass `null` for no initial data.

#### `EmployeeHealthInsuranceOfferResponsePagedList($data = null)`

Create a new `EmployeeHealthInsuranceOfferResponsePagedListEntity` instance. Pass `null` for no initial data.

#### `EmployeeHealthInsurancePolicy($data = null)`

Create a new `EmployeeHealthInsurancePolicyEntity` instance. Pass `null` for no initial data.

#### `EmployeeHealthInsurancePolicyResponsePagedList($data = null)`

Create a new `EmployeeHealthInsurancePolicyResponsePagedListEntity` instance. Pass `null` for no initial data.

#### `Employer($data = null)`

Create a new `EmployerEntity` instance. Pass `null` for no initial data.

#### `EmployerHealthInsurancePolicy($data = null)`

Create a new `EmployerHealthInsurancePolicyEntity` instance. Pass `null` for no initial data.

#### `EmployerHealthInsurancePolicyResponsePagedList($data = null)`

Create a new `EmployerHealthInsurancePolicyResponsePagedListEntity` instance. Pass `null` for no initial data.

#### `EmployerHealthInsuranceQuote($data = null)`

Create a new `EmployerHealthInsuranceQuoteEntity` instance. Pass `null` for no initial data.

#### `EmployerHealthInsuranceQuoteResponsePagedList($data = null)`

Create a new `EmployerHealthInsuranceQuoteResponsePagedListEntity` instance. Pass `null` for no initial data.

#### `EnrolmentIntent($data = null)`

Create a new `EnrolmentIntentEntity` instance. Pass `null` for no initial data.

#### `EnrolmentIntentRequirementResponsePagedList($data = null)`

Create a new `EnrolmentIntentRequirementResponsePagedListEntity` instance. Pass `null` for no initial data.

#### `Event($data = null)`

Create a new `EventEntity` instance. Pass `null` for no initial data.

#### `Group($data = null)`

Create a new `GroupEntity` instance. Pass `null` for no initial data.

#### `GroupEmployee($data = null)`

Create a new `GroupEmployeeEntity` instance. Pass `null` for no initial data.

#### `GroupEmployeeResponsePagedList($data = null)`

Create a new `GroupEmployeeResponsePagedListEntity` instance. Pass `null` for no initial data.

#### `GroupPolicy($data = null)`

Create a new `GroupPolicyEntity` instance. Pass `null` for no initial data.

#### `GroupPolicyIntent($data = null)`

Create a new `GroupPolicyIntentEntity` instance. Pass `null` for no initial data.

#### `GroupPolicyIntentRequirementResponsePagedList($data = null)`

Create a new `GroupPolicyIntentRequirementResponsePagedListEntity` instance. Pass `null` for no initial data.

#### `GroupQuote($data = null)`

Create a new `GroupQuoteEntity` instance. Pass `null` for no initial data.

#### `GroupQuoteIntent($data = null)`

Create a new `GroupQuoteIntentEntity` instance. Pass `null` for no initial data.

#### `GroupQuoteIntentRequirementResponsePagedList($data = null)`

Create a new `GroupQuoteIntentRequirementResponsePagedListEntity` instance. Pass `null` for no initial data.

#### `Plan($data = null)`

Create a new `PlanEntity` instance. Pass `null` for no initial data.

#### `Policy($data = null)`

Create a new `PolicyEntity` instance. Pass `null` for no initial data.

#### `PolicyAmendmentIntent($data = null)`

Create a new `PolicyAmendmentIntentEntity` instance. Pass `null` for no initial data.

#### `PolicyImportIntent($data = null)`

Create a new `PolicyImportIntentEntity` instance. Pass `null` for no initial data.

#### `Provider($data = null)`

Create a new `ProviderEntity` instance. Pass `null` for no initial data.

#### `Replay($data = null)`

Create a new `ReplayEntity` instance. Pass `null` for no initial data.

#### `WebhookEndpoint($data = null)`

Create a new `WebhookEndpointEntity` instance. Pass `null` for no initial data.

#### `WebhookEndpointResponsePagedList($data = null)`

Create a new `WebhookEndpointResponsePagedListEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): KotaUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AssociatedPersonEntity

```php
$associated_person = $client->AssociatedPerson();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date_of_birth` | `string` | Yes | Date of birth of the associated person |
| `email` | `mixed` | No | Email address of the associated person |
| `employee_id` | `string` | Yes | Unique identifier for the employee this person is associated with |
| `first_name` | `string` | Yes | First name of the associated person |
| `id` | `string` | Yes | Unique identifier for the associated person |
| `last_name` | `string` | Yes | Last name of the associated person |
| `object` | `string` | No | The object type |
| `phone_number` | `mixed` | No | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | No | Unique identifier for the platform |
| `relationship_type` | `mixed` | Yes | The relationship type between the employee and the associated person |
| `sex_at_birth` | `mixed` | Yes | The sex assigned to the associated person at birth |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->AssociatedPerson()->create([
  "employee_id" => null, // string
  "date_of_birth" => null, // string
  "first_name" => null, // string
  "id" => null, // string
  "last_name" => null, // string
  "relationship_type" => null, // mixed
  "sex_at_birth" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AssociatedPerson()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->AssociatedPerson()->load(["id" => "associated_person_id", "employee_id" => "employee_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->AssociatedPerson()->remove(["id" => "associated_person_id", "employee_id" => "employee_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->AssociatedPerson()->update([
  "id" => "associated_person_id",
  "employee_id" => "employee_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AssociatedPersonEntity`

Create a new `AssociatedPersonEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AssociatedPersonEligibilityResponsePagedListEntity

```php
$associated_person_eligibility_response_paged_list = $client->AssociatedPersonEligibilityResponsePagedList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_person_id` | `string` | Yes | The associated person ID. |
| `date_of_birth` | `string` | Yes | Date of birth of the associated person. |
| `eligibility_status` | `mixed` | Yes | Eligibility status for the policy/plan. |
| `first_name` | `string` | Yes | First name of the associated person. |
| `ineligibility_reason` | `mixed` | No | Reason for ineligibility if status is ineligible. |
| `last_name` | `string` | Yes | Last name of the associated person. |
| `object` | `string` | No | The object type |
| `relationship` | `mixed` | Yes | Relationship type to the employee. |
| `sex_at_birth` | `mixed` | Yes | Sex at birth of the associated person. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->AssociatedPersonEligibilityResponsePagedList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AssociatedPersonEligibilityResponsePagedListEntity`

Create a new `AssociatedPersonEligibilityResponsePagedListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContributionReportEntity

```php
$contribution_report = $client->ContributionReport();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Date and time the report was created |
| `employer_id` | `string` | Yes | Unique identifier of the employer for which the report is created |
| `external_customer_id` | `mixed` | No | Unique identifier of the customer for which the report is created. |
| `finalized_at` | `mixed` | No | Date and time the report was finalized, if applicable |
| `id` | `string` | Yes | Unique identifier for the contribution report |
| `last_updated_at` | `string` | Yes | Date and time of the last update to the report |
| `object` | `string` | No | The object type |
| `period` | `mixed` | Yes | Period covered by the contribution report |
| `status` | `mixed` | Yes | Current status of the contribution report |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ContributionReport()->create([
  "id" => null, // string
  "created_at" => null, // string
  "employer_id" => null, // string
  "last_updated_at" => null, // string
  "period" => null, // mixed
  "status" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ContributionReport()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ContributionReport()->load(["id" => "contribution_report_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContributionReportEntity`

Create a new `ContributionReportEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContributionReportEmployeeBreakdownEntity

```php
$contribution_report_employee_breakdown = $client->ContributionReportEmployeeBreakdown();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contribution_report_id` | `string` | Yes | Unique identifier of the related contribution report |
| `created_at` | `string` | Yes | Date and time the breakdown was created |
| `currency` | `mixed` | Yes | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Yes | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Yes | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `mixed` | No | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `mixed` | No | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `mixed` | Yes | Health insurance contribution details |
| `last_updated_at` | `string` | Yes | Date and time of the last update to the breakdown |
| `object` | `string` | No | The object type |
| `period` | `mixed` | Yes | Period covered by the employee breakdown |
| `status` | `mixed` | Yes | Current status of the breakdown |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ContributionReportEmployeeBreakdown()->load(["id" => "contribution_report_employee_breakdown_id", "contribution_report_id" => "contribution_report_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContributionReportEmployeeBreakdownEntity`

Create a new `ContributionReportEmployeeBreakdownEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ContributionReportEmployeeBreakdownResponsePagedListEntity

```php
$contribution_report_employee_breakdown_response_paged_list = $client->ContributionReportEmployeeBreakdownResponsePagedList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contribution_report_id` | `string` | Yes | Unique identifier of the related contribution report |
| `created_at` | `string` | Yes | Date and time the breakdown was created |
| `currency` | `mixed` | Yes | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Yes | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Yes | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `mixed` | No | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `mixed` | No | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `mixed` | Yes | Health insurance contribution details |
| `last_updated_at` | `string` | Yes | Date and time of the last update to the breakdown |
| `object` | `string` | No | The object type |
| `period` | `mixed` | Yes | Period covered by the employee breakdown |
| `status` | `mixed` | Yes | Current status of the breakdown |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ContributionReportEmployeeBreakdownResponsePagedList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ContributionReportEmployeeBreakdownResponsePagedListEntity`

Create a new `ContributionReportEmployeeBreakdownResponsePagedListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateHostedSessionTokenEntity

```php
$create_hosted_session_token = $client->CreateHostedSessionToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry` | `string` | Yes |  |
| `link` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreateHostedSessionToken()->create([
  "expiry" => null, // string
  "link" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateHostedSessionTokenEntity`

Create a new `CreateHostedSessionTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CreateSessionTokenEntity

```php
$create_session_token = $client->CreateSessionToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry` | `string` | Yes |  |
| `token` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->CreateSessionToken()->create([
  "expiry" => null, // string
  "token" => null, // string
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CreateSessionTokenEntity`

Create a new `CreateSessionTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DependentEntity

```php
$dependent = $client->Dependent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `null` | No | Details of the action required from the caller. |
| `coverage_options` | `mixed` | No | Available member-scoped coverage options for the plan. |
| `dependents` | `array` | Yes | List of dependents being managed. |
| `disclosures` | `array` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the dependents management intent. |
| `object` | `string` | No | Object type identifier. |
| `parent_intent_id` | `string` | Yes | The parent intent ID (e.g. |
| `parent_intent_type` | `mixed` | Yes | The type of parent intent. |
| `plan` | `mixed` | Yes | Plan information including pricing details. |
| `status` | `mixed` | Yes | Current status of the dependents management intent. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Dependent()->create([
  "dependents_management_intent_id" => null, // string
  "dependents" => null, // array
  "disclosures" => null, // array
  "id" => null, // string
  "parent_intent_id" => null, // string
  "parent_intent_type" => null, // mixed
  "plan" => null, // mixed
  "status" => null, // mixed
]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Dependent()->remove(["dependents_management_intent_id" => "dependents_management_intent_id", "id" => "id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DependentEntity`

Create a new `DependentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DependentsManagementIntentEntity

```php
$dependents_management_intent = $client->DependentsManagementIntent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `null` | No | Details of the action required from the caller. |
| `coverage_options` | `mixed` | No | Available member-scoped coverage options for the plan. |
| `dependents` | `array` | Yes | List of dependents being managed. |
| `disclosures` | `array` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the dependents management intent. |
| `object` | `string` | No | Object type identifier. |
| `parent_intent_id` | `string` | Yes | The parent intent ID (e.g. |
| `parent_intent_type` | `mixed` | Yes | The type of parent intent. |
| `plan` | `mixed` | Yes | Plan information including pricing details. |
| `status` | `mixed` | Yes | Current status of the dependents management intent. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DependentsManagementIntent()->create([
  "enrolment_intent_id" => null, // string
  "dependents" => null, // array
  "disclosures" => null, // array
  "id" => null, // string
  "parent_intent_id" => null, // string
  "parent_intent_type" => null, // mixed
  "plan" => null, // mixed
  "status" => null, // mixed
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DependentsManagementIntent()->load(["id" => "dependents_management_intent_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DependentsManagementIntentEntity`

Create a new `DependentsManagementIntentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EligibilityCheckEntity

```php
$eligibility_check = $client->EligibilityCheck();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eligibility_status` | `mixed` | Yes | Eligibility status: `eligible` or `ineligible`. |
| `object` | `string` | No | The object type. |
| `plan` | `mixed` | Yes | The insurance plan associated with the group. |
| `provider` | `mixed` | Yes | The insurance provider associated with the group. |
| `reasons` | `array` | Yes | List of reasons why the employee is ineligible. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EligibilityCheck()->create([
  "group_id" => null, // string
  "eligibility_status" => null, // mixed
  "plan" => null, // mixed
  "provider" => null, // mixed
  "reasons" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EligibilityCheckEntity`

Create a new `EligibilityCheckEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmployeeEntity

```php
$employee = $client->Employee();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bank_account` | `null` | No | Bank account details |
| `date_of_birth` | `string` | Yes | Date of birth of the employee |
| `earliest_benefits_start_date` | `mixed` | No | The earliest date this employee can be enrolled in any benefits. |
| `email` | `string` | Yes | Email address of the employee |
| `employer_id` | `string` | No | Unique identifier for the employer |
| `external_customer_id` | `mixed` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `first_name` | `string` | Yes | First name of the employee. |
| `home_address` | `null` | No | Location where the employee is legally registered to live |
| `id` | `string` | No | Unique identifier for the employee |
| `last_name` | `string` | Yes | Last name of the employee |
| `metadata` | `mixed` | No | Set of key-value pairs that you can attach to an object. |
| `national_tax_id` | `string` | Yes | PPSN in Ireland, NINo in the UK, DNI/NIE in Spain |
| `nationality` | `null` | No | Nationality of the employee (e.g. |
| `object` | `string` | No | The object type |
| `offboard_on` | `mixed` | No | Date when the employee was or will be offboarded |
| `phone_number` | `string` | Yes | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | No | Unique identifier for the platform |
| `sex_at_birth` | `mixed` | Yes | The sex assigned to the employee at birth |
| `start_on` | `string` | No | Employment start date |
| `status` | `mixed` | No | Current status of the employee |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Employee()->create([
  "date_of_birth" => null, // string
  "email" => null, // string
  "first_name" => null, // string
  "last_name" => null, // string
  "national_tax_id" => null, // string
  "phone_number" => null, // string
  "sex_at_birth" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Employee()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Employee()->load(["id" => "employee_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Employee()->update([
  "id" => "employee_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmployeeEntity`

Create a new `EmployeeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmployeeHealthInsuranceOfferEntity

```php
$employee_health_insurance_offer = $client->EmployeeHealthInsuranceOffer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_level` | `mixed` | Yes | Details about the coverage level for the offer. |
| `employee_id` | `string` | Yes | The Id of the employee for which the offer is available |
| `employer_id` | `string` | Yes | The Id of the employer for which the offer is available |
| `external_customer_id` | `mixed` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for offer |
| `object` | `string` | No | The object type |
| `required_action` | `null` | No | Required action to progress the offer, if any. |
| `status` | `mixed` | Yes | Current status of offer |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EmployeeHealthInsuranceOffer()->load(["id" => "employee_health_insurance_offer_id", "employee_id" => "employee_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmployeeHealthInsuranceOfferEntity`

Create a new `EmployeeHealthInsuranceOfferEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmployeeHealthInsuranceOfferResponsePagedListEntity

```php
$employee_health_insurance_offer_response_paged_list = $client->EmployeeHealthInsuranceOfferResponsePagedList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_level` | `mixed` | Yes | Details about the coverage level for the offer. |
| `employee_id` | `string` | Yes | The Id of the employee for which the offer is available |
| `employer_id` | `string` | Yes | The Id of the employer for which the offer is available |
| `external_customer_id` | `mixed` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for offer |
| `object` | `string` | No | The object type |
| `required_action` | `null` | No | Required action to progress the offer, if any. |
| `status` | `mixed` | Yes | Current status of offer |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EmployeeHealthInsuranceOfferResponsePagedList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmployeeHealthInsuranceOfferResponsePagedListEntity`

Create a new `EmployeeHealthInsuranceOfferResponsePagedListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmployeeHealthInsurancePolicyEntity

```php
$employee_health_insurance_policy = $client->EmployeeHealthInsurancePolicy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `mixed` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `mixed` | Yes | Represents the current coverage level for the policy |
| `employee_id` | `string` | Yes | The Id of the employee for which the policy is created |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolled_dependants_count` | `int` | Yes | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `mixed` | Yes | Enrolment type of the policy |
| `estimated_gross_premium` | `mixed` | Yes | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `mixed` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `opt_out_deadline_date` | `string` | Yes | Last day to opt out from the policy |
| `policy_number` | `mixed` | No | Health insurance policy number, if available |
| `renewal` | `mixed` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `mixed` | Yes | Current status of policy |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EmployeeHealthInsurancePolicy()->load(["id" => "employee_health_insurance_policy_id", "employee_id" => "employee_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmployeeHealthInsurancePolicyEntity`

Create a new `EmployeeHealthInsurancePolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmployeeHealthInsurancePolicyResponsePagedListEntity

```php
$employee_health_insurance_policy_response_paged_list = $client->EmployeeHealthInsurancePolicyResponsePagedList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `mixed` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `mixed` | Yes | Represents the current coverage level for the policy |
| `employee_id` | `string` | Yes | The Id of the employee for which the policy is created |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolled_dependants_count` | `int` | Yes | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `mixed` | Yes | Enrolment type of the policy |
| `estimated_gross_premium` | `mixed` | Yes | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `mixed` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `opt_out_deadline_date` | `string` | Yes | Last day to opt out from the policy |
| `policy_number` | `mixed` | No | Health insurance policy number, if available |
| `renewal` | `mixed` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `mixed` | Yes | Current status of policy |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EmployeeHealthInsurancePolicyResponsePagedList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmployeeHealthInsurancePolicyResponsePagedListEntity`

Create a new `EmployeeHealthInsurancePolicyResponsePagedListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmployerEntity

```php
$employer = $client->Employer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contact` | `mixed` | Yes |  |
| `earliest_benefits_start_date` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `legal_address` | `mixed` | Yes |  |
| `legal_name` | `string` | Yes |  |
| `metadata` | `mixed` | No | Set of key-value pairs that you can attach to an object. |
| `object` | `string` | No | The object type |
| `offboard_on` | `mixed` | No |  |
| `platform_id` | `string` | No |  |
| `registration_number` | `mixed` | No |  |
| `status` | `mixed` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Employer()->create([
  "contact" => null, // mixed
  "id" => null, // string
  "legal_address" => null, // mixed
  "legal_name" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Employer()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Employer()->load(["id" => "employer_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Employer()->update([
  "id" => "employer_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmployerEntity`

Create a new `EmployerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmployerHealthInsurancePolicyEntity

```php
$employer_health_insurance_policy = $client->EmployerHealthInsurancePolicy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `mixed` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `array` | Yes | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `int` | Yes | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolment_type` | `mixed` | Yes | Enrolment type of the policy |
| `group_policy_number` | `mixed` | No | Group’s health insurance policy number, if available |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `renewal` | `mixed` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `mixed` | Yes | Current status of policy |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EmployerHealthInsurancePolicy()->load(["id" => "employer_health_insurance_policy_id", "employer_id" => "employer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmployerHealthInsurancePolicyEntity`

Create a new `EmployerHealthInsurancePolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmployerHealthInsurancePolicyResponsePagedListEntity

```php
$employer_health_insurance_policy_response_paged_list = $client->EmployerHealthInsurancePolicyResponsePagedList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `mixed` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `array` | Yes | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `int` | Yes | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolment_type` | `mixed` | Yes | Enrolment type of the policy |
| `group_policy_number` | `mixed` | No | Group’s health insurance policy number, if available |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `renewal` | `mixed` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `mixed` | Yes | Current status of policy |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EmployerHealthInsurancePolicyResponsePagedList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmployerHealthInsurancePolicyResponsePagedListEntity`

Create a new `EmployerHealthInsurancePolicyResponsePagedListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmployerHealthInsuranceQuoteEntity

```php
$employer_health_insurance_quote = $client->EmployerHealthInsuranceQuote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_levels` | `array` | Yes | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | Yes | The Id of the employer for which the is created |
| `id` | `string` | Yes | Unique identifier for the quote |
| `object` | `string` | No | The object type |
| `quoted_at` | `string` | Yes | Date and time the quote was created at |
| `required_action` | `null` | No | Actions required by the employer to proceed with the quote. |
| `status` | `mixed` | Yes | Current status of the quote |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EmployerHealthInsuranceQuote()->load(["id" => "employer_health_insurance_quote_id", "employer_id" => "employer_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmployerHealthInsuranceQuoteEntity`

Create a new `EmployerHealthInsuranceQuoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EmployerHealthInsuranceQuoteResponsePagedListEntity

```php
$employer_health_insurance_quote_response_paged_list = $client->EmployerHealthInsuranceQuoteResponsePagedList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_levels` | `array` | Yes | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | Yes | The Id of the employer for which the is created |
| `id` | `string` | Yes | Unique identifier for the quote |
| `object` | `string` | No | The object type |
| `quoted_at` | `string` | Yes | Date and time the quote was created at |
| `required_action` | `null` | No | Actions required by the employer to proceed with the quote. |
| `status` | `mixed` | Yes | Current status of the quote |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EmployerHealthInsuranceQuoteResponsePagedList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EmployerHealthInsuranceQuoteResponsePagedListEntity`

Create a new `EmployerHealthInsuranceQuoteResponsePagedListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnrolmentIntentEntity

```php
$enrolment_intent = $client->EnrolmentIntent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `null` | No | If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment. |
| `disclosures` | `array` | Yes | Disclosures associated with this intent. |
| `employee_id` | `string` | Yes | Identifier for the employee associated with this enrolment intent. |
| `force_confirmation` | `bool` | Yes | If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. |
| `group_id` | `string` | Yes | Identifier for the group associated with this enrolment intent. |
| `id` | `string` | Yes | Unique identifier for the enrolment intent. |
| `ineligibility_reason` | `null` | No | If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility. |
| `object` | `string` | No | Object type identifier. |
| `pending_confirmation` | `null` | No | If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state. |
| `policy_configuration` | `null` | No | Policy configuration associated with this enrolment intent. |
| `policy_enrolments` | `array` | Yes | Policy enrolment information |
| `status` | `mixed` | Yes | Current status of the enrolment intent. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->EnrolmentIntent()->create([
  "disclosures" => null, // array
  "employee_id" => null, // string
  "force_confirmation" => null, // bool
  "group_id" => null, // string
  "id" => null, // string
  "policy_enrolments" => null, // array
  "status" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EnrolmentIntent()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->EnrolmentIntent()->load(["id" => "enrolment_intent_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->EnrolmentIntent()->update([
  "id" => "enrolment_intent_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnrolmentIntentEntity`

Create a new `EnrolmentIntentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnrolmentIntentRequirementResponsePagedListEntity

```php
$enrolment_intent_requirement_response_paged_list = $client->EnrolmentIntentRequirementResponsePagedList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the requirement |
| `is_fulfilled` | `bool` | Yes | Whether the requirement has been fulfilled |
| `object` | `string` | No | Object type identifier |
| `object_id` | `string` | Yes | Identifier of the object (employee ID or employer ID) |
| `object_type` | `mixed` | Yes | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `mixed` | Yes | Type of requirement |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->EnrolmentIntentRequirementResponsePagedList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnrolmentIntentRequirementResponsePagedListEntity`

Create a new `EnrolmentIntentRequirementResponsePagedListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EventEntity

```php
$event = $client->Event();
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
| `root` | `mixed` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Event()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Event()->load(["id" => "event_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EventEntity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupEntity

```php
$group = $client->Group();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `mixed` | No | Short description of the purpose or scope of the `group`. |
| `employer_id` | `string` | Yes | Identifier for the `employer` that owns this `group`. |
| `enrolment_type` | `mixed` | Yes | Indicates how employees are enrolled into the group. |
| `group_policy_ids` | `array` | Yes | Group policy unique identifiers associated with this group. |
| `group_policy_intent_ids` | `array` | Yes | Group policy intent unique identifiers associated with this group. |
| `group_quote_intent_ids` | `array` | Yes | Group quote intent unique identifiers associated with this group. |
| `group_type` | `mixed` | Yes | Indicates how policies are organized for this group. |
| `id` | `string` | Yes | Unique identifier for the `group`. |
| `name` | `string` | Yes | Human-readable name of the `group`. |
| `object` | `string` | No | The object type |
| `status` | `mixed` | Yes | Current lifecycle state of the `group`, indicating its current progress. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Group()->create([
  "employer_id" => null, // string
  "enrolment_type" => null, // mixed
  "group_policy_ids" => null, // array
  "group_policy_intent_ids" => null, // array
  "group_quote_intent_ids" => null, // array
  "group_type" => null, // mixed
  "id" => null, // string
  "name" => null, // string
  "status" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Group()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Group()->load(["id" => "group_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Group()->update([
  "id" => "group_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupEntity`

Create a new `GroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupEmployeeEntity

```php
$group_employee = $client->GroupEmployee();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desired_policy_start_date` | `mixed` | No | The desired date for the employee's policy to start. |
| `eligibility_status` | `mixed` | Yes | Eligibility status for the employee in this group. |
| `enrolment_date` | `mixed` | No | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `mixed` | Yes | Enrolment status for the employee in this group. |
| `enrolments` | `array` | Yes | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Yes | Unique identifier for the group. |
| `id` | `string` | Yes | Unique identifier for the employee. |
| `object` | `string` | No | The object type |
| `policies` | `array` | Yes | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `array` | Yes | List of scheduled group transitions for the employee. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GroupEmployee()->create([
  "id" => null, // string
  "eligibility_status" => null, // mixed
  "enrolment_status" => null, // mixed
  "enrolments" => null, // array
  "group_id" => null, // string
  "policies" => null, // array
  "scheduled_group_transitions" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupEmployeeEntity`

Create a new `GroupEmployeeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupEmployeeResponsePagedListEntity

```php
$group_employee_response_paged_list = $client->GroupEmployeeResponsePagedList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desired_policy_start_date` | `mixed` | No | The desired date for the employee's policy to start. |
| `eligibility_status` | `mixed` | Yes | Eligibility status for the employee in this group. |
| `enrolment_date` | `mixed` | No | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `mixed` | Yes | Enrolment status for the employee in this group. |
| `enrolments` | `array` | Yes | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Yes | Unique identifier for the group. |
| `id` | `string` | Yes | Unique identifier for the employee. |
| `object` | `string` | No | The object type |
| `policies` | `array` | Yes | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `array` | Yes | List of scheduled group transitions for the employee. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GroupEmployeeResponsePagedList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupEmployeeResponsePagedListEntity`

Create a new `GroupEmployeeResponsePagedListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupPolicyEntity

```php
$group_policy = $client->GroupPolicy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `mixed` | No | Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable. |
| `disclosures` | `array` | Yes | Disclosures associated with this group policy. |
| `employer_id` | `string` | No | Identifier for the employer associated with this group policy. |
| `end_date` | `mixed` | No | Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended. |
| `group_id` | `string` | No | Identifier for the group associated with this group policy. |
| `health_insurance` | `null` | No | Health insurance–specific fields (present when `type=health_insurance`). |
| `id` | `string` | Yes | Unique identifier for the group policy. |
| `object` | `string` | No | The object type |
| `plan` | `mixed` | Yes | Plan information for this policy |
| `provider` | `mixed` | Yes | Provider information for this policy. |
| `start_date` | `string` | Yes | Policy start (effective) date in ISO 8601 (YYYY-MM-DD). |
| `status` | `mixed` | Yes | Current lifecycle state of the `group_policy`, indicating its progress from creation to activation. |
| `type` | `mixed` | Yes | Policy type. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GroupPolicy()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GroupPolicy()->load(["id" => "group_policy_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupPolicyEntity`

Create a new `GroupPolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupPolicyIntentEntity

```php
$group_policy_intent = $client->GroupPolicyIntent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `null` | No | Details of the required action when the intent is in ActionRequired status. |
| `cost_sharing` | `null` | No | Cost sharing configuration for the policy intent |
| `disclosures` | `array` | Yes | Disclosures associated with this intent. |
| `due_date` | `mixed` | No | Due date for the policy intent |
| `group_id` | `string` | Yes | Unique identifier for the group |
| `id` | `string` | Yes | Unique identifier for the group policy intent |
| `object` | `string` | No | Object type identifier |
| `plan_id` | `string` | Yes | Unique identifier for the plan |
| `quote_intent_id` | `string` | Yes | Unique identifier for the group quote intent this policy intent was created from |
| `status` | `mixed` | Yes | Current status of the group policy intent |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GroupPolicyIntent()->create([
  "disclosures" => null, // array
  "group_id" => null, // string
  "id" => null, // string
  "plan_id" => null, // string
  "quote_intent_id" => null, // string
  "status" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GroupPolicyIntent()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GroupPolicyIntent()->load(["id" => "group_policy_intent_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupPolicyIntentEntity`

Create a new `GroupPolicyIntentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupPolicyIntentRequirementResponsePagedListEntity

```php
$group_policy_intent_requirement_response_paged_list = $client->GroupPolicyIntentRequirementResponsePagedList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the requirement |
| `is_fulfilled` | `bool` | Yes | Whether the requirement has been fulfilled |
| `object` | `string` | No | Object type identifier |
| `object_id` | `string` | Yes | Identifier of the object (employee ID or employer ID) |
| `object_type` | `mixed` | Yes | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `mixed` | Yes | Type of requirement |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GroupPolicyIntentRequirementResponsePagedList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupPolicyIntentRequirementResponsePagedListEntity`

Create a new `GroupPolicyIntentRequirementResponsePagedListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupQuoteEntity

```php
$group_quote = $client->GroupQuote();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `family_type` | `null` | No | Type of the family covered by the employer. |
| `member_count` | `null` | No | Numbers of additional members covered by the employer. |
| `member_selection` | `null` | No | Whether specific member types are covered by the employer. |
| `percentage` | `null` | No | Percentage of the premium the employer covers. |
| `type` | `mixed` | Yes | Cost sharing type. |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GroupQuote()->load(["group_quote_intent_id" => "group_quote_intent_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupQuoteEntity`

Create a new `GroupQuoteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupQuoteIntentEntity

```php
$group_quote_intent = $client->GroupQuoteIntent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `null` | No | Details of the action required from the caller, if the intent is in action_required status. |
| `consent_links` | `array` | Yes | Consent links that need to be acknowledged |
| `cost_sharing` | `null` | No | Cost sharing configuration for the quote |
| `disclosures` | `array` | Yes | Disclosures associated with this intent. |
| `expected_start_date` | `mixed` | No | Expected start date for the insurance coverage |
| `group_id` | `string` | Yes | Unique identifier for the group |
| `id` | `string` | Yes | Unique identifier for the group quote intent |
| `object` | `string` | No | Object type identifier |
| `plan_id` | `string` | Yes | Unique identifier for the plan |
| `status` | `mixed` | Yes | Current status of the group quote intent |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GroupQuoteIntent()->create([
  "consent_links" => null, // array
  "disclosures" => null, // array
  "group_id" => null, // string
  "id" => null, // string
  "plan_id" => null, // string
  "status" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GroupQuoteIntent()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GroupQuoteIntent()->load(["id" => "group_quote_intent_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupQuoteIntentEntity`

Create a new `GroupQuoteIntentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupQuoteIntentRequirementResponsePagedListEntity

```php
$group_quote_intent_requirement_response_paged_list = $client->GroupQuoteIntentRequirementResponsePagedList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes | Unique identifier for the requirement |
| `is_fulfilled` | `bool` | Yes | Whether the requirement has been fulfilled |
| `object` | `string` | No | Object type identifier |
| `object_id` | `string` | Yes | Identifier of the object (employee ID or employer ID) |
| `object_type` | `mixed` | Yes | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `mixed` | Yes | Type of requirement |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->GroupQuoteIntentRequirementResponsePagedList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupQuoteIntentRequirementResponsePagedListEntity`

Create a new `GroupQuoteIntentRequirementResponsePagedListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PlanEntity

```php
$plan = $client->Plan();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_from` | `string` | Yes | The date from which this plan is available (inclusive). |
| `available_to` | `mixed` | No | The date until which this plan is available (inclusive). |
| `country` | `mixed` | Yes | The country this plan is available in. |
| `coverage_options` | `mixed` | No | Coverage options available for this plan, organized by scope and input type. |
| `description` | `string` | Yes | Description of the plan. |
| `disclosures` | `array` | Yes | Disclosures associated with this plan. |
| `documents` | `array` | Yes | List of plan documents (e.g., IPIDs, T&Cs). |
| `eligible_count` | `mixed` | No | Number of employees in the queried group eligible for this plan as-of `start_date`. |
| `employee_eligibility_criteria` | `array` | Yes | Eligibility criteria that employees must meet. |
| `employer_eligibility_criteria` | `array` | Yes | Eligibility criteria that employers must meet. |
| `health_insurance` | `null` | No | Health insurance-specific details. |
| `id` | `string` | Yes | Unique identifier for the plan. |
| `ineligible_count` | `mixed` | No | Number of employees in the queried group ineligible for this plan as-of `start_date`. |
| `name` | `string` | Yes | The name of the plan. |
| `object` | `string` | No | Object type. |
| `provider` | `mixed` | Yes | The provider offering this plan. |
| `total_count` | `mixed` | No | Total employees in the queried group. |
| `type` | `mixed` | Yes | The benefit type of the plan. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Plan()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Plan()->load(["id" => "plan_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PlanEntity`

Create a new `PlanEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PolicyEntity

```php
$policy = $client->Policy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundling_type` | `mixed` | Yes | Indicates how this policy is bundled within a group |
| `cancellation_date` | `mixed` | No | Date the policy was cancelled (if applicable) |
| `disclosures` | `array` | Yes | Disclosures associated with this policy. |
| `employee_id` | `string` | Yes | Identifier of the employee associated with this policy. |
| `end_date` | `mixed` | No | Policy end date (inclusive) in ISO 8601, or null if open-ended |
| `group_id` | `string` | Yes | Identifier of the group associated with this policy. |
| `group_policy_id` | `string` | Yes | Identifier of the group policy id associated with this policy. |
| `health_insurance` | `null` | No | Health insurance–specific fields (present when `type=health_insurance`) |
| `id` | `string` | Yes | Unique identifier for the policy. |
| `object` | `string` | No | Object type |
| `plan` | `mixed` | Yes | Plan information for this policy |
| `provider` | `mixed` | Yes | Provider information for this policy |
| `start_date` | `string` | Yes | Policy start (effective) date in ISO 8601 (YYYY-MM-DD) |
| `status` | `mixed` | Yes | Current lifecycle state of the policy |
| `type` | `mixed` | Yes | Policy type. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Policy()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Policy()->load(["id" => "policy_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PolicyEntity`

Create a new `PolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PolicyAmendmentIntentEntity

```php
$policy_amendment_intent = $client->PolicyAmendmentIntent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amendment_reason` | `mixed` | Yes | The reason for the policy amendment. |
| `disclosures` | `array` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the policy amendment intent. |
| `object` | `string` | No | Object type identifier. |
| `pending_confirmation` | `null` | No | Information about the pending confirmation if the intent status is `pending_confirmation`. |
| `policy_id` | `string` | Yes | The policy ID for which the amendment is requested. |
| `processing_error` | `null` | No | Information about the processing error if the intent status is `processing_error`. |
| `requested_changes` | `array` | Yes | List of requested changes to the policy. |
| `required_action` | `null` | No | Information about the required action if the intent status is `action_required`. |
| `status` | `mixed` | Yes | Current status of the policy amendment intent. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PolicyAmendmentIntent()->create([
  "id" => null, // string
  "amendment_reason" => null, // mixed
  "disclosures" => null, // array
  "policy_id" => null, // string
  "requested_changes" => null, // array
  "status" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PolicyAmendmentIntent()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PolicyAmendmentIntent()->load(["id" => "policy_amendment_intent_id", "policy_id" => "policy_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PolicyAmendmentIntentEntity`

Create a new `PolicyAmendmentIntentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PolicyImportIntentEntity

```php
$policy_import_intent = $client->PolicyImportIntent();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_persons` | `array` | Yes | List of associated persons linked to this policy import. |
| `employee_id` | `string` | Yes | The employee ID for the policy import. |
| `group_id` | `string` | Yes | The group ID for the policy import. |
| `id` | `string` | Yes | Unique identifier for the policy import intent. |
| `member_number` | `string` | Yes | The member number assigned by the provider. |
| `object` | `string` | No | Object type identifier. |
| `policy_end_date` | `mixed` | No | The end date of the policy. |
| `policy_start_date` | `string` | Yes | The start date of the policy. |
| `provider_policy_number` | `string` | Yes | The provider's policy number. |
| `status` | `mixed` | Yes | Current status of the policy import intent. |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PolicyImportIntent()->create([
  "associated_persons" => null, // array
  "employee_id" => null, // string
  "group_id" => null, // string
  "id" => null, // string
  "member_number" => null, // string
  "policy_start_date" => null, // string
  "provider_policy_number" => null, // string
  "status" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PolicyImportIntent()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PolicyImportIntent()->load(["id" => "policy_import_intent_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PolicyImportIntentEntity`

Create a new `PolicyImportIntentEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProviderEntity

```php
$provider = $client->Provider();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the provider. |
| `employer_platform_url` | `mixed` | No | URL to the employer portal/platform for this provider, if available. |
| `id` | `string` | Yes | Unique identifier for the provider. |
| `kota_hub_url` | `mixed` | No | URL to the Kota Hub page for this platform, if configured. |
| `logo_url` | `string` | Yes | URL to the provider's logo image. |
| `name` | `string` | Yes | The name of the provider. |
| `object` | `string` | No | Object type. |
| `support_phone` | `string` | Yes | Customer support phone number. |
| `supported_countries` | `array` | Yes | List of countries supported by this provider. |
| `website_url` | `string` | Yes | The provider's main website URL. |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Provider()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Provider()->load(["id" => "provider_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProviderEntity`

Create a new `ProviderEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ReplayEntity

```php
$replay = $client->Replay();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deliveries` | `array` | Yes |  |
| `event_id` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Replay()->create([
  "event_id" => null, // string
  "deliveries" => null, // array
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ReplayEntity`

Create a new `ReplayEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookEndpointEntity

```php
$webhook_endpoint = $client->WebhookEndpoint();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The date and time the endpoint was created |
| `endpoint_url` | `string` | Yes | The registered URL of the endpoint |
| `id` | `string` | Yes | The unique identifier of the endpoint |
| `object` | `string` | No | The object type |
| `subscribed_events` | `array` | Yes | The events the endpoint is subscribed to |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->WebhookEndpoint()->load(["id" => "webhook_endpoint_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookEndpointEntity`

Create a new `WebhookEndpointEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookEndpointResponsePagedListEntity

```php
$webhook_endpoint_response_paged_list = $client->WebhookEndpointResponsePagedList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The date and time the endpoint was created |
| `endpoint_url` | `string` | Yes | The registered URL of the endpoint |
| `id` | `string` | Yes | The unique identifier of the endpoint |
| `object` | `string` | No | The object type |
| `subscribed_events` | `array` | Yes | The events the endpoint is subscribed to |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->WebhookEndpointResponsePagedList()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookEndpointResponsePagedListEntity`

Create a new `WebhookEndpointResponsePagedListEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new KotaSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

