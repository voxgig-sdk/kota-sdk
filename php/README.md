# Kota PHP SDK



The PHP SDK for the Kota API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->AssociatedPerson()` — with named operations (`list`/`load`/`create`/`update`/`remove`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/kota-sdk/releases](https://github.com/voxgig-sdk/kota-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'kota_sdk.php';

$client = new KotaSDK([
    "apikey" => getenv("KOTA_APIKEY"),
]);
```

### 2. List associatedperson records

```php
try {
    // list() returns an array of AssociatedPerson records — iterate directly.
    $associatedpersons = $client->AssociatedPerson()->list();
    foreach ($associatedpersons as $item) {
        echo $item["id"] . " " . $item["date_of_birth"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load an associatedperson

AssociatedPerson is nested under employee, so provide the `employee_id`.

```php
try {
    // load() returns the ENTITY — call data_get() for the AssociatedPerson record (throws on error).
    $associatedperson = $client->AssociatedPerson()->load(["employee_id" => "example_employee_id", "id" => "example_id"]);
    print_r($associatedperson);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 4. Create, update, and remove

```php
// create() returns the ENTITY — call data_get() for the created AssociatedPerson record.
$created = $client->AssociatedPerson()->create(["employee_id" => "example_employee_id", "date_of_birth" => "example_date_of_birth", "first_name" => "example_first_name", "id" => "example_id", "last_name" => "example_last_name", "relationship_type" => "example_relationship_type", "sex_at_birth" => "example_sex_at_birth"]);

// Update — index the record via data_get() ($created->data_get()["id"]).
$client->AssociatedPerson()->update(["id" => $created->data_get()["id"], "employee_id" => "example_employee_id", "date_of_birth" => "example_date_of_birth"]);

// Remove
$client->AssociatedPerson()->remove(["id" => $created->data_get()["id"], "employee_id" => "example_employee_id"]);
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $dependentsmanagementintent = $client->DependentsManagementIntent()->load(["id" => "example_id"]);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = KotaSDK::test([
    "entity" => ["dependentsmanagementintent" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$dependentsmanagementintent = $client->DependentsManagementIntent()->load(["id" => "test01"]);
print_r($dependentsmanagementintent);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new KotaSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
KOTA_TEST_LIVE=TRUE
KOTA_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### KotaSDK

```php
require_once 'kota_sdk.php';
$client = new KotaSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = KotaSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### KotaSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `AssociatedPerson` | `($data): AssociatedPersonEntity` | Create an AssociatedPerson entity instance. |
| `AssociatedPersonEligibilityResponsePagedList` | `($data): AssociatedPersonEligibilityResponsePagedListEntity` | Create an AssociatedPersonEligibilityResponsePagedList entity instance. |
| `ContributionReport` | `($data): ContributionReportEntity` | Create a ContributionReport entity instance. |
| `ContributionReportEmployeeBreakdown` | `($data): ContributionReportEmployeeBreakdownEntity` | Create a ContributionReportEmployeeBreakdown entity instance. |
| `ContributionReportEmployeeBreakdownResponsePagedList` | `($data): ContributionReportEmployeeBreakdownResponsePagedListEntity` | Create a ContributionReportEmployeeBreakdownResponsePagedList entity instance. |
| `CreateHostedSessionToken` | `($data): CreateHostedSessionTokenEntity` | Create a CreateHostedSessionToken entity instance. |
| `CreateSessionToken` | `($data): CreateSessionTokenEntity` | Create a CreateSessionToken entity instance. |
| `Dependent` | `($data): DependentEntity` | Create a Dependent entity instance. |
| `DependentsManagementIntent` | `($data): DependentsManagementIntentEntity` | Create a DependentsManagementIntent entity instance. |
| `EligibilityCheck` | `($data): EligibilityCheckEntity` | Create an EligibilityCheck entity instance. |
| `Employee` | `($data): EmployeeEntity` | Create an Employee entity instance. |
| `EmployeeHealthInsuranceOffer` | `($data): EmployeeHealthInsuranceOfferEntity` | Create an EmployeeHealthInsuranceOffer entity instance. |
| `EmployeeHealthInsuranceOfferResponsePagedList` | `($data): EmployeeHealthInsuranceOfferResponsePagedListEntity` | Create an EmployeeHealthInsuranceOfferResponsePagedList entity instance. |
| `EmployeeHealthInsurancePolicy` | `($data): EmployeeHealthInsurancePolicyEntity` | Create an EmployeeHealthInsurancePolicy entity instance. |
| `EmployeeHealthInsurancePolicyResponsePagedList` | `($data): EmployeeHealthInsurancePolicyResponsePagedListEntity` | Create an EmployeeHealthInsurancePolicyResponsePagedList entity instance. |
| `Employer` | `($data): EmployerEntity` | Create an Employer entity instance. |
| `EmployerHealthInsurancePolicy` | `($data): EmployerHealthInsurancePolicyEntity` | Create an EmployerHealthInsurancePolicy entity instance. |
| `EmployerHealthInsurancePolicyResponsePagedList` | `($data): EmployerHealthInsurancePolicyResponsePagedListEntity` | Create an EmployerHealthInsurancePolicyResponsePagedList entity instance. |
| `EmployerHealthInsuranceQuote` | `($data): EmployerHealthInsuranceQuoteEntity` | Create an EmployerHealthInsuranceQuote entity instance. |
| `EmployerHealthInsuranceQuoteResponsePagedList` | `($data): EmployerHealthInsuranceQuoteResponsePagedListEntity` | Create an EmployerHealthInsuranceQuoteResponsePagedList entity instance. |
| `EnrolmentIntent` | `($data): EnrolmentIntentEntity` | Create an EnrolmentIntent entity instance. |
| `EnrolmentIntentRequirementResponsePagedList` | `($data): EnrolmentIntentRequirementResponsePagedListEntity` | Create an EnrolmentIntentRequirementResponsePagedList entity instance. |
| `Event` | `($data): EventEntity` | Create an Event entity instance. |
| `Group` | `($data): GroupEntity` | Create a Group entity instance. |
| `GroupEmployee` | `($data): GroupEmployeeEntity` | Create a GroupEmployee entity instance. |
| `GroupEmployeeResponsePagedList` | `($data): GroupEmployeeResponsePagedListEntity` | Create a GroupEmployeeResponsePagedList entity instance. |
| `GroupPolicy` | `($data): GroupPolicyEntity` | Create a GroupPolicy entity instance. |
| `GroupPolicyIntent` | `($data): GroupPolicyIntentEntity` | Create a GroupPolicyIntent entity instance. |
| `GroupPolicyIntentRequirementResponsePagedList` | `($data): GroupPolicyIntentRequirementResponsePagedListEntity` | Create a GroupPolicyIntentRequirementResponsePagedList entity instance. |
| `GroupQuote` | `($data): GroupQuoteEntity` | Create a GroupQuote entity instance. |
| `GroupQuoteIntent` | `($data): GroupQuoteIntentEntity` | Create a GroupQuoteIntent entity instance. |
| `GroupQuoteIntentRequirementResponsePagedList` | `($data): GroupQuoteIntentRequirementResponsePagedListEntity` | Create a GroupQuoteIntentRequirementResponsePagedList entity instance. |
| `Plan` | `($data): PlanEntity` | Create a Plan entity instance. |
| `Policy` | `($data): PolicyEntity` | Create a Policy entity instance. |
| `PolicyAmendmentIntent` | `($data): PolicyAmendmentIntentEntity` | Create a PolicyAmendmentIntent entity instance. |
| `PolicyImportIntent` | `($data): PolicyImportIntentEntity` | Create a PolicyImportIntent entity instance. |
| `Provider` | `($data): ProviderEntity` | Create a Provider entity instance. |
| `Replay` | `($data): ReplayEntity` | Create a Replay entity instance. |
| `WebhookEndpoint` | `($data): WebhookEndpointEntity` | Create a WebhookEndpoint entity instance. |
| `WebhookEndpointResponsePagedList` | `($data): WebhookEndpointResponsePagedListEntity` | Create a WebhookEndpointResponsePagedList entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Operations: Create, List, Load, Remove, Update.

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

Operations: List.

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

Operations: Create, List, Load.

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

Operations: Load.

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

Operations: List.

API path: `/contribution_reports/{contribution_report_id}/employee_breakdowns`

#### CreateHostedSessionToken

| Field | Description |
| --- | --- |
| `expiry` |  |
| `link` |  |

Operations: Create.

API path: `/hosted/sessions`

#### CreateSessionToken

| Field | Description |
| --- | --- |
| `expiry` |  |
| `token` |  |

Operations: Create.

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

Operations: Create, Remove.

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

Operations: Create, Load.

API path: `/policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent`

#### EligibilityCheck

| Field | Description |
| --- | --- |
| `eligibility_status` |  |
| `object` |  |
| `plan` |  |
| `provider` |  |
| `reasons` |  |

Operations: Create.

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

Operations: Create, List, Load, Update.

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

Operations: Load.

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

Operations: List.

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

Operations: Load.

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

Operations: List.

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

Operations: Create, List, Load, Update.

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

Operations: Load.

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

Operations: List.

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

Operations: Load.

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

Operations: List.

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

Operations: Create, List, Load, Update.

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

Operations: List.

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

Operations: List, Load.

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

Operations: Create, List, Load, Update.

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

Operations: Create.

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

Operations: List.

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

Operations: List, Load.

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

Operations: Create, List, Load.

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

Operations: List.

API path: `/group_policy_intents/{group_policy_intent_id}/requirements`

#### GroupQuote

| Field | Description |
| --- | --- |
| `family_type` |  |
| `member_count` |  |
| `member_selection` |  |
| `percentage` |  |
| `type` |  |

Operations: Load.

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

Operations: Create, List, Load.

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

Operations: List.

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

Operations: List, Load.

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

Operations: List, Load.

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

Operations: Create, List, Load.

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

Operations: Create, List, Load.

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

Operations: List, Load.

API path: `/providers`

#### Replay

| Field | Description |
| --- | --- |
| `deliveries` |  |
| `event_id` |  |

Operations: Create.

API path: `/events/{event_id}/replay`

#### WebhookEndpoint

| Field | Description |
| --- | --- |
| `created_at` |  |
| `endpoint_url` |  |
| `id` |  |
| `object` |  |
| `subscribed_events` |  |

Operations: Load.

API path: `/webhooks/endpoints/{webhook_endpoint_id}`

#### WebhookEndpointResponsePagedList

| Field | Description |
| --- | --- |
| `created_at` |  |
| `endpoint_url` |  |
| `id` |  |
| `object` |  |
| `subscribed_events` |  |

Operations: List.

API path: `/webhooks/endpoints`



## Entities


### AssociatedPerson

Create an instance: `$associated_person = $client->AssociatedPerson();`

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
| `email` | `mixed` |  |
| `employee_id` | `string` |  |
| `first_name` | `string` |  |
| `id` | `string` |  |
| `last_name` | `string` |  |
| `object` | `string` |  |
| `phone_number` | `mixed` |  |
| `platform_id` | `string` |  |
| `relationship_type` | `mixed` |  |
| `sex_at_birth` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the AssociatedPerson record (throws on error).
$associated_person = $client->AssociatedPerson()->load(["id" => "associated_person_id", "employee_id" => "employee_id"]);
```

#### Example: List

```php
// list() returns an array of AssociatedPerson records (throws on error).
$associated_persons = $client->AssociatedPerson()->list();
```

#### Example: Create

```php
$associated_person = $client->AssociatedPerson()->create([
    "employee_id" => null, // string
    "date_of_birth" => null, // string
    "first_name" => null, // string
    "id" => null, // string
    "last_name" => null, // string
    "relationship_type" => null, // mixed
    "sex_at_birth" => null, // mixed
]);
```


### AssociatedPersonEligibilityResponsePagedList

Create an instance: `$associated_person_eligibility_response_paged_list = $client->AssociatedPersonEligibilityResponsePagedList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_person_id` | `string` |  |
| `date_of_birth` | `string` |  |
| `eligibility_status` | `mixed` |  |
| `first_name` | `string` |  |
| `ineligibility_reason` | `mixed` |  |
| `last_name` | `string` |  |
| `object` | `string` |  |
| `relationship` | `mixed` |  |
| `sex_at_birth` | `mixed` |  |

#### Example: List

```php
// list() returns an array of AssociatedPersonEligibilityResponsePagedList records (throws on error).
$associated_person_eligibility_response_paged_lists = $client->AssociatedPersonEligibilityResponsePagedList()->list();
```


### ContributionReport

Create an instance: `$contribution_report = $client->ContributionReport();`

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
| `external_customer_id` | `mixed` |  |
| `finalized_at` | `mixed` |  |
| `id` | `string` |  |
| `last_updated_at` | `string` |  |
| `object` | `string` |  |
| `period` | `mixed` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ContributionReport record (throws on error).
$contribution_report = $client->ContributionReport()->load(["id" => "contribution_report_id"]);
```

#### Example: List

```php
// list() returns an array of ContributionReport records (throws on error).
$contribution_reports = $client->ContributionReport()->list();
```

#### Example: Create

```php
$contribution_report = $client->ContributionReport()->create([
    "id" => null, // string
    "created_at" => null, // string
    "employer_id" => null, // string
    "last_updated_at" => null, // string
    "period" => null, // mixed
    "status" => null, // mixed
]);
```


### ContributionReportEmployeeBreakdown

Create an instance: `$contribution_report_employee_breakdown = $client->ContributionReportEmployeeBreakdown();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contribution_report_id` | `string` |  |
| `created_at` | `string` |  |
| `currency` | `mixed` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `mixed` |  |
| `finalized_at` | `mixed` |  |
| `health_insurance` | `mixed` |  |
| `last_updated_at` | `string` |  |
| `object` | `string` |  |
| `period` | `mixed` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ContributionReportEmployeeBreakdown record (throws on error).
$contribution_report_employee_breakdown = $client->ContributionReportEmployeeBreakdown()->load(["id" => "contribution_report_employee_breakdown_id", "contribution_report_id" => "contribution_report_id"]);
```


### ContributionReportEmployeeBreakdownResponsePagedList

Create an instance: `$contribution_report_employee_breakdown_response_paged_list = $client->ContributionReportEmployeeBreakdownResponsePagedList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contribution_report_id` | `string` |  |
| `created_at` | `string` |  |
| `currency` | `mixed` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `mixed` |  |
| `finalized_at` | `mixed` |  |
| `health_insurance` | `mixed` |  |
| `last_updated_at` | `string` |  |
| `object` | `string` |  |
| `period` | `mixed` |  |
| `status` | `mixed` |  |

#### Example: List

```php
// list() returns an array of ContributionReportEmployeeBreakdownResponsePagedList records (throws on error).
$contribution_report_employee_breakdown_response_paged_lists = $client->ContributionReportEmployeeBreakdownResponsePagedList()->list();
```


### CreateHostedSessionToken

Create an instance: `$create_hosted_session_token = $client->CreateHostedSessionToken();`

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

```php
$create_hosted_session_token = $client->CreateHostedSessionToken()->create([
    "expiry" => null, // string
    "link" => null, // string
]);
```


### CreateSessionToken

Create an instance: `$create_session_token = $client->CreateSessionToken();`

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

```php
$create_session_token = $client->CreateSessionToken()->create([
    "expiry" => null, // string
    "token" => null, // string
]);
```


### Dependent

Create an instance: `$dependent = $client->Dependent();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `null` |  |
| `coverage_options` | `mixed` |  |
| `dependents` | `array` |  |
| `disclosures` | `array` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `parent_intent_id` | `string` |  |
| `parent_intent_type` | `mixed` |  |
| `plan` | `mixed` |  |
| `status` | `mixed` |  |

#### Example: Create

```php
$dependent = $client->Dependent()->create([
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


### DependentsManagementIntent

Create an instance: `$dependents_management_intent = $client->DependentsManagementIntent();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `null` |  |
| `coverage_options` | `mixed` |  |
| `dependents` | `array` |  |
| `disclosures` | `array` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `parent_intent_id` | `string` |  |
| `parent_intent_type` | `mixed` |  |
| `plan` | `mixed` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DependentsManagementIntent record (throws on error).
$dependents_management_intent = $client->DependentsManagementIntent()->load(["id" => "dependents_management_intent_id"]);
```

#### Example: Create

```php
$dependents_management_intent = $client->DependentsManagementIntent()->create([
    "dependents" => null, // array
    "disclosures" => null, // array
    "id" => null, // string
    "parent_intent_id" => null, // string
    "parent_intent_type" => null, // mixed
    "plan" => null, // mixed
    "status" => null, // mixed
]);
```


### EligibilityCheck

Create an instance: `$eligibility_check = $client->EligibilityCheck();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `eligibility_status` | `mixed` |  |
| `object` | `string` |  |
| `plan` | `mixed` |  |
| `provider` | `mixed` |  |
| `reasons` | `array` |  |

#### Example: Create

```php
$eligibility_check = $client->EligibilityCheck()->create([
    "group_id" => null, // string
    "eligibility_status" => null, // mixed
    "plan" => null, // mixed
    "provider" => null, // mixed
    "reasons" => null, // array
]);
```


### Employee

Create an instance: `$employee = $client->Employee();`

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
| `earliest_benefits_start_date` | `mixed` |  |
| `email` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `mixed` |  |
| `first_name` | `string` |  |
| `home_address` | `null` |  |
| `id` | `string` |  |
| `last_name` | `string` |  |
| `metadata` | `mixed` |  |
| `national_tax_id` | `string` |  |
| `nationality` | `null` |  |
| `object` | `string` |  |
| `offboard_on` | `mixed` |  |
| `phone_number` | `string` |  |
| `platform_id` | `string` |  |
| `sex_at_birth` | `mixed` |  |
| `start_on` | `string` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Employee record (throws on error).
$employee = $client->Employee()->load(["id" => "employee_id"]);
```

#### Example: List

```php
// list() returns an array of Employee records (throws on error).
$employees = $client->Employee()->list();
```

#### Example: Create

```php
$employee = $client->Employee()->create([
    "date_of_birth" => null, // string
    "email" => null, // string
    "first_name" => null, // string
    "last_name" => null, // string
    "national_tax_id" => null, // string
    "phone_number" => null, // string
    "sex_at_birth" => null, // mixed
]);
```


### EmployeeHealthInsuranceOffer

Create an instance: `$employee_health_insurance_offer = $client->EmployeeHealthInsuranceOffer();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_level` | `mixed` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `mixed` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `required_action` | `null` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the EmployeeHealthInsuranceOffer record (throws on error).
$employee_health_insurance_offer = $client->EmployeeHealthInsuranceOffer()->load(["id" => "employee_health_insurance_offer_id", "employee_id" => "employee_id"]);
```


### EmployeeHealthInsuranceOfferResponsePagedList

Create an instance: `$employee_health_insurance_offer_response_paged_list = $client->EmployeeHealthInsuranceOfferResponsePagedList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_level` | `mixed` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `mixed` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `required_action` | `null` |  |
| `status` | `mixed` |  |

#### Example: List

```php
// list() returns an array of EmployeeHealthInsuranceOfferResponsePagedList records (throws on error).
$employee_health_insurance_offer_response_paged_lists = $client->EmployeeHealthInsuranceOfferResponsePagedList()->list();
```


### EmployeeHealthInsurancePolicy

Create an instance: `$employee_health_insurance_policy = $client->EmployeeHealthInsurancePolicy();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `mixed` |  |
| `coverage_level` | `mixed` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolled_dependants_count` | `int` |  |
| `enrolment_type` | `mixed` |  |
| `estimated_gross_premium` | `mixed` |  |
| `external_customer_id` | `mixed` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `opt_out_deadline_date` | `string` |  |
| `policy_number` | `mixed` |  |
| `renewal` | `mixed` |  |
| `start_date` | `string` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the EmployeeHealthInsurancePolicy record (throws on error).
$employee_health_insurance_policy = $client->EmployeeHealthInsurancePolicy()->load(["id" => "employee_health_insurance_policy_id", "employee_id" => "employee_id"]);
```


### EmployeeHealthInsurancePolicyResponsePagedList

Create an instance: `$employee_health_insurance_policy_response_paged_list = $client->EmployeeHealthInsurancePolicyResponsePagedList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `mixed` |  |
| `coverage_level` | `mixed` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolled_dependants_count` | `int` |  |
| `enrolment_type` | `mixed` |  |
| `estimated_gross_premium` | `mixed` |  |
| `external_customer_id` | `mixed` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `opt_out_deadline_date` | `string` |  |
| `policy_number` | `mixed` |  |
| `renewal` | `mixed` |  |
| `start_date` | `string` |  |
| `status` | `mixed` |  |

#### Example: List

```php
// list() returns an array of EmployeeHealthInsurancePolicyResponsePagedList records (throws on error).
$employee_health_insurance_policy_response_paged_lists = $client->EmployeeHealthInsurancePolicyResponsePagedList()->list();
```


### Employer

Create an instance: `$employer = $client->Employer();`

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
| `contact` | `mixed` |  |
| `earliest_benefits_start_date` | `mixed` |  |
| `id` | `string` |  |
| `legal_address` | `mixed` |  |
| `legal_name` | `string` |  |
| `metadata` | `mixed` |  |
| `object` | `string` |  |
| `offboard_on` | `mixed` |  |
| `platform_id` | `string` |  |
| `registration_number` | `mixed` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Employer record (throws on error).
$employer = $client->Employer()->load(["id" => "employer_id"]);
```

#### Example: List

```php
// list() returns an array of Employer records (throws on error).
$employers = $client->Employer()->list();
```

#### Example: Create

```php
$employer = $client->Employer()->create([
    "contact" => null, // mixed
    "id" => null, // string
    "legal_address" => null, // mixed
    "legal_name" => null, // string
]);
```


### EmployerHealthInsurancePolicy

Create an instance: `$employer_health_insurance_policy = $client->EmployerHealthInsurancePolicy();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `mixed` |  |
| `coverage_levels` | `array` |  |
| `employer_cancellation_period_length` | `int` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolment_type` | `mixed` |  |
| `group_policy_number` | `mixed` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `renewal` | `mixed` |  |
| `start_date` | `string` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the EmployerHealthInsurancePolicy record (throws on error).
$employer_health_insurance_policy = $client->EmployerHealthInsurancePolicy()->load(["id" => "employer_health_insurance_policy_id", "employer_id" => "employer_id"]);
```


### EmployerHealthInsurancePolicyResponsePagedList

Create an instance: `$employer_health_insurance_policy_response_paged_list = $client->EmployerHealthInsurancePolicyResponsePagedList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `mixed` |  |
| `coverage_levels` | `array` |  |
| `employer_cancellation_period_length` | `int` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolment_type` | `mixed` |  |
| `group_policy_number` | `mixed` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `renewal` | `mixed` |  |
| `start_date` | `string` |  |
| `status` | `mixed` |  |

#### Example: List

```php
// list() returns an array of EmployerHealthInsurancePolicyResponsePagedList records (throws on error).
$employer_health_insurance_policy_response_paged_lists = $client->EmployerHealthInsurancePolicyResponsePagedList()->list();
```


### EmployerHealthInsuranceQuote

Create an instance: `$employer_health_insurance_quote = $client->EmployerHealthInsuranceQuote();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_levels` | `array` |  |
| `employer_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `quoted_at` | `string` |  |
| `required_action` | `null` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the EmployerHealthInsuranceQuote record (throws on error).
$employer_health_insurance_quote = $client->EmployerHealthInsuranceQuote()->load(["id" => "employer_health_insurance_quote_id", "employer_id" => "employer_id"]);
```


### EmployerHealthInsuranceQuoteResponsePagedList

Create an instance: `$employer_health_insurance_quote_response_paged_list = $client->EmployerHealthInsuranceQuoteResponsePagedList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_levels` | `array` |  |
| `employer_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `quoted_at` | `string` |  |
| `required_action` | `null` |  |
| `status` | `mixed` |  |

#### Example: List

```php
// list() returns an array of EmployerHealthInsuranceQuoteResponsePagedList records (throws on error).
$employer_health_insurance_quote_response_paged_lists = $client->EmployerHealthInsuranceQuoteResponsePagedList()->list();
```


### EnrolmentIntent

Create an instance: `$enrolment_intent = $client->EnrolmentIntent();`

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
| `disclosures` | `array` |  |
| `employee_id` | `string` |  |
| `force_confirmation` | `bool` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `ineligibility_reason` | `null` |  |
| `object` | `string` |  |
| `pending_confirmation` | `null` |  |
| `policy_configuration` | `null` |  |
| `policy_enrolments` | `array` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the EnrolmentIntent record (throws on error).
$enrolment_intent = $client->EnrolmentIntent()->load(["id" => "enrolment_intent_id"]);
```

#### Example: List

```php
// list() returns an array of EnrolmentIntent records (throws on error).
$enrolment_intents = $client->EnrolmentIntent()->list();
```

#### Example: Create

```php
$enrolment_intent = $client->EnrolmentIntent()->create([
    "disclosures" => null, // array
    "employee_id" => null, // string
    "force_confirmation" => null, // bool
    "group_id" => null, // string
    "id" => null, // string
    "policy_enrolments" => null, // array
    "status" => null, // mixed
]);
```


### EnrolmentIntentRequirementResponsePagedList

Create an instance: `$enrolment_intent_requirement_response_paged_list = $client->EnrolmentIntentRequirementResponsePagedList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `is_fulfilled` | `bool` |  |
| `object` | `string` |  |
| `object_id` | `string` |  |
| `object_type` | `mixed` |  |
| `requirement_type` | `mixed` |  |

#### Example: List

```php
// list() returns an array of EnrolmentIntentRequirementResponsePagedList records (throws on error).
$enrolment_intent_requirement_response_paged_lists = $client->EnrolmentIntentRequirementResponsePagedList()->list();
```


### Event

Create an instance: `$event = $client->Event();`

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
| `root` | `mixed` |  |
| `type` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Event record (throws on error).
$event = $client->Event()->load(["id" => "event_id"]);
```

#### Example: List

```php
// list() returns an array of Event records (throws on error).
$events = $client->Event()->list();
```


### Group

Create an instance: `$group = $client->Group();`

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
| `description` | `mixed` |  |
| `employer_id` | `string` |  |
| `enrolment_type` | `mixed` |  |
| `group_policy_ids` | `array` |  |
| `group_policy_intent_ids` | `array` |  |
| `group_quote_intent_ids` | `array` |  |
| `group_type` | `mixed` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `object` | `string` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Group record (throws on error).
$group = $client->Group()->load(["id" => "group_id"]);
```

#### Example: List

```php
// list() returns an array of Group records (throws on error).
$groups = $client->Group()->list();
```

#### Example: Create

```php
$group = $client->Group()->create([
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


### GroupEmployee

Create an instance: `$group_employee = $client->GroupEmployee();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desired_policy_start_date` | `mixed` |  |
| `eligibility_status` | `mixed` |  |
| `enrolment_date` | `mixed` |  |
| `enrolment_status` | `mixed` |  |
| `enrolments` | `array` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `policies` | `array` |  |
| `scheduled_group_transitions` | `array` |  |

#### Example: Create

```php
$group_employee = $client->GroupEmployee()->create([
    "id" => null, // string
    "eligibility_status" => null, // mixed
    "enrolment_status" => null, // mixed
    "enrolments" => null, // array
    "group_id" => null, // string
    "policies" => null, // array
    "scheduled_group_transitions" => null, // array
]);
```


### GroupEmployeeResponsePagedList

Create an instance: `$group_employee_response_paged_list = $client->GroupEmployeeResponsePagedList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desired_policy_start_date` | `mixed` |  |
| `eligibility_status` | `mixed` |  |
| `enrolment_date` | `mixed` |  |
| `enrolment_status` | `mixed` |  |
| `enrolments` | `array` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `policies` | `array` |  |
| `scheduled_group_transitions` | `array` |  |

#### Example: List

```php
// list() returns an array of GroupEmployeeResponsePagedList records (throws on error).
$group_employee_response_paged_lists = $client->GroupEmployeeResponsePagedList()->list();
```


### GroupPolicy

Create an instance: `$group_policy = $client->GroupPolicy();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `mixed` |  |
| `disclosures` | `array` |  |
| `employer_id` | `string` |  |
| `end_date` | `mixed` |  |
| `group_id` | `string` |  |
| `health_insurance` | `null` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan` | `mixed` |  |
| `provider` | `mixed` |  |
| `start_date` | `string` |  |
| `status` | `mixed` |  |
| `type` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GroupPolicy record (throws on error).
$group_policy = $client->GroupPolicy()->load(["id" => "group_policy_id"]);
```

#### Example: List

```php
// list() returns an array of GroupPolicy records (throws on error).
$group_policys = $client->GroupPolicy()->list();
```


### GroupPolicyIntent

Create an instance: `$group_policy_intent = $client->GroupPolicyIntent();`

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
| `disclosures` | `array` |  |
| `due_date` | `mixed` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan_id` | `string` |  |
| `quote_intent_id` | `string` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GroupPolicyIntent record (throws on error).
$group_policy_intent = $client->GroupPolicyIntent()->load(["id" => "group_policy_intent_id"]);
```

#### Example: List

```php
// list() returns an array of GroupPolicyIntent records (throws on error).
$group_policy_intents = $client->GroupPolicyIntent()->list();
```

#### Example: Create

```php
$group_policy_intent = $client->GroupPolicyIntent()->create([
    "disclosures" => null, // array
    "group_id" => null, // string
    "id" => null, // string
    "plan_id" => null, // string
    "quote_intent_id" => null, // string
    "status" => null, // mixed
]);
```


### GroupPolicyIntentRequirementResponsePagedList

Create an instance: `$group_policy_intent_requirement_response_paged_list = $client->GroupPolicyIntentRequirementResponsePagedList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `is_fulfilled` | `bool` |  |
| `object` | `string` |  |
| `object_id` | `string` |  |
| `object_type` | `mixed` |  |
| `requirement_type` | `mixed` |  |

#### Example: List

```php
// list() returns an array of GroupPolicyIntentRequirementResponsePagedList records (throws on error).
$group_policy_intent_requirement_response_paged_lists = $client->GroupPolicyIntentRequirementResponsePagedList()->list();
```


### GroupQuote

Create an instance: `$group_quote = $client->GroupQuote();`

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
| `type` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GroupQuote record (throws on error).
$group_quote = $client->GroupQuote()->load(["group_quote_intent_id" => "group_quote_intent_id"]);
```


### GroupQuoteIntent

Create an instance: `$group_quote_intent = $client->GroupQuoteIntent();`

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
| `consent_links` | `array` |  |
| `cost_sharing` | `null` |  |
| `disclosures` | `array` |  |
| `expected_start_date` | `mixed` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan_id` | `string` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the GroupQuoteIntent record (throws on error).
$group_quote_intent = $client->GroupQuoteIntent()->load(["id" => "group_quote_intent_id"]);
```

#### Example: List

```php
// list() returns an array of GroupQuoteIntent records (throws on error).
$group_quote_intents = $client->GroupQuoteIntent()->list();
```

#### Example: Create

```php
$group_quote_intent = $client->GroupQuoteIntent()->create([
    "consent_links" => null, // array
    "disclosures" => null, // array
    "group_id" => null, // string
    "id" => null, // string
    "plan_id" => null, // string
    "status" => null, // mixed
]);
```


### GroupQuoteIntentRequirementResponsePagedList

Create an instance: `$group_quote_intent_requirement_response_paged_list = $client->GroupQuoteIntentRequirementResponsePagedList();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `is_fulfilled` | `bool` |  |
| `object` | `string` |  |
| `object_id` | `string` |  |
| `object_type` | `mixed` |  |
| `requirement_type` | `mixed` |  |

#### Example: List

```php
// list() returns an array of GroupQuoteIntentRequirementResponsePagedList records (throws on error).
$group_quote_intent_requirement_response_paged_lists = $client->GroupQuoteIntentRequirementResponsePagedList()->list();
```


### Plan

Create an instance: `$plan = $client->Plan();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_from` | `string` |  |
| `available_to` | `mixed` |  |
| `country` | `mixed` |  |
| `coverage_options` | `mixed` |  |
| `description` | `string` |  |
| `disclosures` | `array` |  |
| `documents` | `array` |  |
| `eligible_count` | `mixed` |  |
| `employee_eligibility_criteria` | `array` |  |
| `employer_eligibility_criteria` | `array` |  |
| `health_insurance` | `null` |  |
| `id` | `string` |  |
| `ineligible_count` | `mixed` |  |
| `name` | `string` |  |
| `object` | `string` |  |
| `provider` | `mixed` |  |
| `total_count` | `mixed` |  |
| `type` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Plan record (throws on error).
$plan = $client->Plan()->load(["id" => "plan_id"]);
```

#### Example: List

```php
// list() returns an array of Plan records (throws on error).
$plans = $client->Plan()->list();
```


### Policy

Create an instance: `$policy = $client->Policy();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bundling_type` | `mixed` |  |
| `cancellation_date` | `mixed` |  |
| `disclosures` | `array` |  |
| `employee_id` | `string` |  |
| `end_date` | `mixed` |  |
| `group_id` | `string` |  |
| `group_policy_id` | `string` |  |
| `health_insurance` | `null` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan` | `mixed` |  |
| `provider` | `mixed` |  |
| `start_date` | `string` |  |
| `status` | `mixed` |  |
| `type` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Policy record (throws on error).
$policy = $client->Policy()->load(["id" => "policy_id"]);
```

#### Example: List

```php
// list() returns an array of Policy records (throws on error).
$policys = $client->Policy()->list();
```


### PolicyAmendmentIntent

Create an instance: `$policy_amendment_intent = $client->PolicyAmendmentIntent();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amendment_reason` | `mixed` |  |
| `disclosures` | `array` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `pending_confirmation` | `null` |  |
| `policy_id` | `string` |  |
| `processing_error` | `null` |  |
| `requested_changes` | `array` |  |
| `required_action` | `null` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PolicyAmendmentIntent record (throws on error).
$policy_amendment_intent = $client->PolicyAmendmentIntent()->load(["id" => "policy_amendment_intent_id", "policy_id" => "policy_id"]);
```

#### Example: List

```php
// list() returns an array of PolicyAmendmentIntent records (throws on error).
$policy_amendment_intents = $client->PolicyAmendmentIntent()->list();
```

#### Example: Create

```php
$policy_amendment_intent = $client->PolicyAmendmentIntent()->create([
    "id" => null, // string
    "amendment_reason" => null, // mixed
    "disclosures" => null, // array
    "policy_id" => null, // string
    "requested_changes" => null, // array
    "status" => null, // mixed
]);
```


### PolicyImportIntent

Create an instance: `$policy_import_intent = $client->PolicyImportIntent();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_persons` | `array` |  |
| `employee_id` | `string` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `member_number` | `string` |  |
| `object` | `string` |  |
| `policy_end_date` | `mixed` |  |
| `policy_start_date` | `string` |  |
| `provider_policy_number` | `string` |  |
| `status` | `mixed` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PolicyImportIntent record (throws on error).
$policy_import_intent = $client->PolicyImportIntent()->load(["id" => "policy_import_intent_id"]);
```

#### Example: List

```php
// list() returns an array of PolicyImportIntent records (throws on error).
$policy_import_intents = $client->PolicyImportIntent()->list();
```

#### Example: Create

```php
$policy_import_intent = $client->PolicyImportIntent()->create([
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


### Provider

Create an instance: `$provider = $client->Provider();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `employer_platform_url` | `mixed` |  |
| `id` | `string` |  |
| `kota_hub_url` | `mixed` |  |
| `logo_url` | `string` |  |
| `name` | `string` |  |
| `object` | `string` |  |
| `support_phone` | `string` |  |
| `supported_countries` | `array` |  |
| `website_url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Provider record (throws on error).
$provider = $client->Provider()->load(["id" => "provider_id"]);
```

#### Example: List

```php
// list() returns an array of Provider records (throws on error).
$providers = $client->Provider()->list();
```


### Replay

Create an instance: `$replay = $client->Replay();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deliveries` | `array` |  |
| `event_id` | `string` |  |

#### Example: Create

```php
$replay = $client->Replay()->create([
    "event_id" => null, // string
    "deliveries" => null, // array
]);
```


### WebhookEndpoint

Create an instance: `$webhook_endpoint = $client->WebhookEndpoint();`

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
| `subscribed_events` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the WebhookEndpoint record (throws on error).
$webhook_endpoint = $client->WebhookEndpoint()->load(["id" => "webhook_endpoint_id"]);
```


### WebhookEndpointResponsePagedList

Create an instance: `$webhook_endpoint_response_paged_list = $client->WebhookEndpointResponsePagedList();`

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
| `subscribed_events` | `array` |  |

#### Example: List

```php
// list() returns an array of WebhookEndpointResponsePagedList records (throws on error).
$webhook_endpoint_response_paged_lists = $client->WebhookEndpointResponsePagedList()->list();
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

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── kota_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`kota_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$dependentsmanagementintent = $client->DependentsManagementIntent();
$dependentsmanagementintent->load(["id" => "example_id"]);

// $dependentsmanagementintent->data_get() now returns the dependentsmanagementintent data from the last load
// $dependentsmanagementintent->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
