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
| `date_of_birth` | `string` | Yes |  |
| `email` | `mixed` | No |  |
| `employee_id` | `string` | Yes |  |
| `first_name` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `last_name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `phone_number` | `mixed` | No |  |
| `platform_id` | `string` | No |  |
| `relationship_type` | `mixed` | Yes |  |
| `sex_at_birth` | `mixed` | Yes |  |

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
| `associated_person_id` | `string` | Yes |  |
| `date_of_birth` | `string` | Yes |  |
| `eligibility_status` | `mixed` | Yes |  |
| `first_name` | `string` | Yes |  |
| `ineligibility_reason` | `mixed` | No |  |
| `last_name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `relationship` | `mixed` | Yes |  |
| `sex_at_birth` | `mixed` | Yes |  |

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
| `created_at` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `mixed` | No |  |
| `finalized_at` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `last_updated_at` | `string` | Yes |  |
| `object` | `string` | No |  |
| `period` | `mixed` | Yes |  |
| `status` | `mixed` | Yes |  |

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
| `contribution_report_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `currency` | `mixed` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `mixed` | No |  |
| `finalized_at` | `mixed` | No |  |
| `health_insurance` | `mixed` | Yes |  |
| `last_updated_at` | `string` | Yes |  |
| `object` | `string` | No |  |
| `period` | `mixed` | Yes |  |
| `status` | `mixed` | Yes |  |

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
| `contribution_report_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `currency` | `mixed` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `mixed` | No |  |
| `finalized_at` | `mixed` | No |  |
| `health_insurance` | `mixed` | Yes |  |
| `last_updated_at` | `string` | Yes |  |
| `object` | `string` | No |  |
| `period` | `mixed` | Yes |  |
| `status` | `mixed` | Yes |  |

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
| `action_required` | `null` | No |  |
| `coverage_options` | `mixed` | No |  |
| `dependents` | `array` | Yes |  |
| `disclosures` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `parent_intent_id` | `string` | Yes |  |
| `parent_intent_type` | `mixed` | Yes |  |
| `plan` | `mixed` | Yes |  |
| `status` | `mixed` | Yes |  |

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
| `action_required` | `null` | No |  |
| `coverage_options` | `mixed` | No |  |
| `dependents` | `array` | Yes |  |
| `disclosures` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `parent_intent_id` | `string` | Yes |  |
| `parent_intent_type` | `mixed` | Yes |  |
| `plan` | `mixed` | Yes |  |
| `status` | `mixed` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->DependentsManagementIntent()->create([
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
| `eligibility_status` | `mixed` | Yes |  |
| `object` | `string` | No |  |
| `plan` | `mixed` | Yes |  |
| `provider` | `mixed` | Yes |  |
| `reasons` | `array` | Yes |  |

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
| `bank_account` | `null` | No |  |
| `date_of_birth` | `string` | Yes |  |
| `earliest_benefits_start_date` | `mixed` | No |  |
| `email` | `string` | Yes |  |
| `employer_id` | `string` | No |  |
| `external_customer_id` | `mixed` | No |  |
| `first_name` | `string` | Yes |  |
| `home_address` | `null` | No |  |
| `id` | `string` | No |  |
| `last_name` | `string` | Yes |  |
| `metadata` | `mixed` | No |  |
| `national_tax_id` | `string` | Yes |  |
| `nationality` | `null` | No |  |
| `object` | `string` | No |  |
| `offboard_on` | `mixed` | No |  |
| `phone_number` | `string` | Yes |  |
| `platform_id` | `string` | No |  |
| `sex_at_birth` | `mixed` | Yes |  |
| `start_on` | `string` | No |  |
| `status` | `mixed` | No |  |

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
| `coverage_level` | `mixed` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `required_action` | `null` | No |  |
| `status` | `mixed` | Yes |  |

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
| `coverage_level` | `mixed` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `required_action` | `null` | No |  |
| `status` | `mixed` | Yes |  |

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
| `cancellation_date` | `mixed` | No |  |
| `coverage_level` | `mixed` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolled_dependants_count` | `int` | Yes |  |
| `enrolment_type` | `mixed` | Yes |  |
| `estimated_gross_premium` | `mixed` | Yes |  |
| `external_customer_id` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `opt_out_deadline_date` | `string` | Yes |  |
| `policy_number` | `mixed` | No |  |
| `renewal` | `mixed` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |

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
| `cancellation_date` | `mixed` | No |  |
| `coverage_level` | `mixed` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolled_dependants_count` | `int` | Yes |  |
| `enrolment_type` | `mixed` | Yes |  |
| `estimated_gross_premium` | `mixed` | Yes |  |
| `external_customer_id` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `opt_out_deadline_date` | `string` | Yes |  |
| `policy_number` | `mixed` | No |  |
| `renewal` | `mixed` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |

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
| `metadata` | `mixed` | No |  |
| `object` | `string` | No |  |
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
| `cancellation_date` | `mixed` | No |  |
| `coverage_levels` | `array` | Yes |  |
| `employer_cancellation_period_length` | `int` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolment_type` | `mixed` | Yes |  |
| `group_policy_number` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `renewal` | `mixed` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |

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
| `cancellation_date` | `mixed` | No |  |
| `coverage_levels` | `array` | Yes |  |
| `employer_cancellation_period_length` | `int` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolment_type` | `mixed` | Yes |  |
| `group_policy_number` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `renewal` | `mixed` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |

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
| `coverage_levels` | `array` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `quoted_at` | `string` | Yes |  |
| `required_action` | `null` | No |  |
| `status` | `mixed` | Yes |  |

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
| `coverage_levels` | `array` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `quoted_at` | `string` | Yes |  |
| `required_action` | `null` | No |  |
| `status` | `mixed` | Yes |  |

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
| `action_required` | `null` | No |  |
| `disclosures` | `array` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `force_confirmation` | `bool` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `ineligibility_reason` | `null` | No |  |
| `object` | `string` | No |  |
| `pending_confirmation` | `null` | No |  |
| `policy_configuration` | `null` | No |  |
| `policy_enrolments` | `array` | Yes |  |
| `status` | `mixed` | Yes |  |

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
| `id` | `string` | Yes |  |
| `is_fulfilled` | `bool` | Yes |  |
| `object` | `string` | No |  |
| `object_id` | `string` | Yes |  |
| `object_type` | `mixed` | Yes |  |
| `requirement_type` | `mixed` | Yes |  |

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
| `description` | `mixed` | No |  |
| `employer_id` | `string` | Yes |  |
| `enrolment_type` | `mixed` | Yes |  |
| `group_policy_ids` | `array` | Yes |  |
| `group_policy_intent_ids` | `array` | Yes |  |
| `group_quote_intent_ids` | `array` | Yes |  |
| `group_type` | `mixed` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `status` | `mixed` | Yes |  |

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
| `desired_policy_start_date` | `mixed` | No |  |
| `eligibility_status` | `mixed` | Yes |  |
| `enrolment_date` | `mixed` | No |  |
| `enrolment_status` | `mixed` | Yes |  |
| `enrolments` | `array` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `policies` | `array` | Yes |  |
| `scheduled_group_transitions` | `array` | Yes |  |

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
| `desired_policy_start_date` | `mixed` | No |  |
| `eligibility_status` | `mixed` | Yes |  |
| `enrolment_date` | `mixed` | No |  |
| `enrolment_status` | `mixed` | Yes |  |
| `enrolments` | `array` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `policies` | `array` | Yes |  |
| `scheduled_group_transitions` | `array` | Yes |  |

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
| `cancellation_date` | `mixed` | No |  |
| `disclosures` | `array` | Yes |  |
| `employer_id` | `string` | No |  |
| `end_date` | `mixed` | No |  |
| `group_id` | `string` | No |  |
| `health_insurance` | `null` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan` | `mixed` | Yes |  |
| `provider` | `mixed` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |
| `type` | `mixed` | Yes |  |

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
| `action_required` | `null` | No |  |
| `cost_sharing` | `null` | No |  |
| `disclosures` | `array` | Yes |  |
| `due_date` | `mixed` | No |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan_id` | `string` | Yes |  |
| `quote_intent_id` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |

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
| `id` | `string` | Yes |  |
| `is_fulfilled` | `bool` | Yes |  |
| `object` | `string` | No |  |
| `object_id` | `string` | Yes |  |
| `object_type` | `mixed` | Yes |  |
| `requirement_type` | `mixed` | Yes |  |

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
| `family_type` | `null` | No |  |
| `member_count` | `null` | No |  |
| `member_selection` | `null` | No |  |
| `percentage` | `null` | No |  |
| `type` | `mixed` | Yes |  |

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
| `action_required` | `null` | No |  |
| `consent_links` | `array` | Yes |  |
| `cost_sharing` | `null` | No |  |
| `disclosures` | `array` | Yes |  |
| `expected_start_date` | `mixed` | No |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan_id` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |

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
| `id` | `string` | Yes |  |
| `is_fulfilled` | `bool` | Yes |  |
| `object` | `string` | No |  |
| `object_id` | `string` | Yes |  |
| `object_type` | `mixed` | Yes |  |
| `requirement_type` | `mixed` | Yes |  |

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
| `available_from` | `string` | Yes |  |
| `available_to` | `mixed` | No |  |
| `country` | `mixed` | Yes |  |
| `coverage_options` | `mixed` | No |  |
| `description` | `string` | Yes |  |
| `disclosures` | `array` | Yes |  |
| `documents` | `array` | Yes |  |
| `eligible_count` | `mixed` | No |  |
| `employee_eligibility_criteria` | `array` | Yes |  |
| `employer_eligibility_criteria` | `array` | Yes |  |
| `health_insurance` | `null` | No |  |
| `id` | `string` | Yes |  |
| `ineligible_count` | `mixed` | No |  |
| `name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `provider` | `mixed` | Yes |  |
| `total_count` | `mixed` | No |  |
| `type` | `mixed` | Yes |  |

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
| `bundling_type` | `mixed` | Yes |  |
| `cancellation_date` | `mixed` | No |  |
| `disclosures` | `array` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `end_date` | `mixed` | No |  |
| `group_id` | `string` | Yes |  |
| `group_policy_id` | `string` | Yes |  |
| `health_insurance` | `null` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan` | `mixed` | Yes |  |
| `provider` | `mixed` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |
| `type` | `mixed` | Yes |  |

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
| `amendment_reason` | `mixed` | Yes |  |
| `disclosures` | `array` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `pending_confirmation` | `null` | No |  |
| `policy_id` | `string` | Yes |  |
| `processing_error` | `null` | No |  |
| `requested_changes` | `array` | Yes |  |
| `required_action` | `null` | No |  |
| `status` | `mixed` | Yes |  |

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
| `associated_persons` | `array` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `member_number` | `string` | Yes |  |
| `object` | `string` | No |  |
| `policy_end_date` | `mixed` | No |  |
| `policy_start_date` | `string` | Yes |  |
| `provider_policy_number` | `string` | Yes |  |
| `status` | `mixed` | Yes |  |

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
| `description` | `string` | Yes |  |
| `employer_platform_url` | `mixed` | No |  |
| `id` | `string` | Yes |  |
| `kota_hub_url` | `mixed` | No |  |
| `logo_url` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `support_phone` | `string` | Yes |  |
| `supported_countries` | `array` | Yes |  |
| `website_url` | `string` | Yes |  |

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
| `created_at` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `subscribed_events` | `array` | Yes |  |

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
| `created_at` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `subscribed_events` | `array` | Yes |  |

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

