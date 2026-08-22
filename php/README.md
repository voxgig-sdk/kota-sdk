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

Operations: Create, List, Load, Remove, Update.

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

Operations: List.

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

Operations: Create, List, Load.

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

Operations: Load.

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

Operations: Create, Remove.

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

Operations: Create, Load.

API path: `/policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent`

#### EligibilityCheck

| Field | Description |
| --- | --- |
| `eligibility_status` | Eligibility status: `eligible` or `ineligible`. |
| `object` | The object type. |
| `plan` | The insurance plan associated with the group. |
| `provider` | The insurance provider associated with the group. |
| `reasons` | List of reasons why the employee is ineligible. |

Operations: Create.

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

Operations: Create, List, Load, Update.

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

Operations: Load.

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

Operations: List.

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

Operations: Load.

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
| `metadata` | Set of key-value pairs that you can attach to an object. |
| `object` | The object type |
| `offboard_on` |  |
| `platform_id` |  |
| `registration_number` |  |
| `status` |  |

Operations: Create, List, Load, Update.

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

Operations: Load.

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

Operations: List.

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

Operations: Load.

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

Operations: List.

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

Operations: Create, List, Load, Update.

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

Operations: Create, List, Load, Update.

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

Operations: Create.

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

Operations: List.

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

Operations: List, Load.

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

Operations: Create, List, Load.

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

Operations: List.

API path: `/group_policy_intents/{group_policy_intent_id}/requirements`

#### GroupQuote

| Field | Description |
| --- | --- |
| `family_type` | Type of the family covered by the employer. |
| `member_count` | Numbers of additional members covered by the employer. |
| `member_selection` | Whether specific member types are covered by the employer. |
| `percentage` | Percentage of the premium the employer covers. |
| `type` | Cost sharing type. |

Operations: Load.

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

Operations: Create, List, Load.

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

Operations: List.

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

Operations: List, Load.

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

Operations: List, Load.

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

Operations: Create, List, Load.

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

Operations: Create, List, Load.

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
| `created_at` | The date and time the endpoint was created |
| `endpoint_url` | The registered URL of the endpoint |
| `id` | The unique identifier of the endpoint |
| `object` | The object type |
| `subscribed_events` | The events the endpoint is subscribed to |

Operations: Load.

API path: `/webhooks/endpoints/{webhook_endpoint_id}`

#### WebhookEndpointResponsePagedList

| Field | Description |
| --- | --- |
| `created_at` | The date and time the endpoint was created |
| `endpoint_url` | The registered URL of the endpoint |
| `id` | The unique identifier of the endpoint |
| `object` | The object type |
| `subscribed_events` | The events the endpoint is subscribed to |

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
| `date_of_birth` | `string` | Date of birth of the associated person |
| `email` | `mixed` | Email address of the associated person |
| `employee_id` | `string` | Unique identifier for the employee this person is associated with |
| `first_name` | `string` | First name of the associated person |
| `id` | `string` | Unique identifier for the associated person |
| `last_name` | `string` | Last name of the associated person |
| `object` | `string` | The object type |
| `phone_number` | `mixed` | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | Unique identifier for the platform |
| `relationship_type` | `mixed` | The relationship type between the employee and the associated person |
| `sex_at_birth` | `mixed` | The sex assigned to the associated person at birth |

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
| `associated_person_id` | `string` | The associated person ID. |
| `date_of_birth` | `string` | Date of birth of the associated person. |
| `eligibility_status` | `mixed` | Eligibility status for the policy/plan. |
| `first_name` | `string` | First name of the associated person. |
| `ineligibility_reason` | `mixed` | Reason for ineligibility if status is ineligible. |
| `last_name` | `string` | Last name of the associated person. |
| `object` | `string` | The object type |
| `relationship` | `mixed` | Relationship type to the employee. |
| `sex_at_birth` | `mixed` | Sex at birth of the associated person. |

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
| `created_at` | `string` | Date and time the report was created |
| `employer_id` | `string` | Unique identifier of the employer for which the report is created |
| `external_customer_id` | `mixed` | Unique identifier of the customer for which the report is created. |
| `finalized_at` | `mixed` | Date and time the report was finalized, if applicable |
| `id` | `string` | Unique identifier for the contribution report |
| `last_updated_at` | `string` | Date and time of the last update to the report |
| `object` | `string` | The object type |
| `period` | `mixed` | Period covered by the contribution report |
| `status` | `mixed` | Current status of the contribution report |

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
| `contribution_report_id` | `string` | Unique identifier of the related contribution report |
| `created_at` | `string` | Date and time the breakdown was created |
| `currency` | `mixed` | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `mixed` | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `mixed` | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `mixed` | Health insurance contribution details |
| `last_updated_at` | `string` | Date and time of the last update to the breakdown |
| `object` | `string` | The object type |
| `period` | `mixed` | Period covered by the employee breakdown |
| `status` | `mixed` | Current status of the breakdown |

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
| `contribution_report_id` | `string` | Unique identifier of the related contribution report |
| `created_at` | `string` | Date and time the breakdown was created |
| `currency` | `mixed` | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `mixed` | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `mixed` | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `mixed` | Health insurance contribution details |
| `last_updated_at` | `string` | Date and time of the last update to the breakdown |
| `object` | `string` | The object type |
| `period` | `mixed` | Period covered by the employee breakdown |
| `status` | `mixed` | Current status of the breakdown |

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
| `action_required` | `null` | Details of the action required from the caller. |
| `coverage_options` | `mixed` | Available member-scoped coverage options for the plan. |
| `dependents` | `array` | List of dependents being managed. |
| `disclosures` | `array` | Disclosures associated with this intent. |
| `id` | `string` | Unique identifier for the dependents management intent. |
| `object` | `string` | Object type identifier. |
| `parent_intent_id` | `string` | The parent intent ID (e.g. |
| `parent_intent_type` | `mixed` | The type of parent intent. |
| `plan` | `mixed` | Plan information including pricing details. |
| `status` | `mixed` | Current status of the dependents management intent. |

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
| `action_required` | `null` | Details of the action required from the caller. |
| `coverage_options` | `mixed` | Available member-scoped coverage options for the plan. |
| `dependents` | `array` | List of dependents being managed. |
| `disclosures` | `array` | Disclosures associated with this intent. |
| `id` | `string` | Unique identifier for the dependents management intent. |
| `object` | `string` | Object type identifier. |
| `parent_intent_id` | `string` | The parent intent ID (e.g. |
| `parent_intent_type` | `mixed` | The type of parent intent. |
| `plan` | `mixed` | Plan information including pricing details. |
| `status` | `mixed` | Current status of the dependents management intent. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DependentsManagementIntent record (throws on error).
$dependents_management_intent = $client->DependentsManagementIntent()->load(["id" => "dependents_management_intent_id"]);
```

#### Example: Create

```php
$dependents_management_intent = $client->DependentsManagementIntent()->create([
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


### EligibilityCheck

Create an instance: `$eligibility_check = $client->EligibilityCheck();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `eligibility_status` | `mixed` | Eligibility status: `eligible` or `ineligible`. |
| `object` | `string` | The object type. |
| `plan` | `mixed` | The insurance plan associated with the group. |
| `provider` | `mixed` | The insurance provider associated with the group. |
| `reasons` | `array` | List of reasons why the employee is ineligible. |

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
| `bank_account` | `null` | Bank account details |
| `date_of_birth` | `string` | Date of birth of the employee |
| `earliest_benefits_start_date` | `mixed` | The earliest date this employee can be enrolled in any benefits. |
| `email` | `string` | Email address of the employee |
| `employer_id` | `string` | Unique identifier for the employer |
| `external_customer_id` | `mixed` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `first_name` | `string` | First name of the employee. |
| `home_address` | `null` | Location where the employee is legally registered to live |
| `id` | `string` | Unique identifier for the employee |
| `last_name` | `string` | Last name of the employee |
| `metadata` | `mixed` | Set of key-value pairs that you can attach to an object. |
| `national_tax_id` | `string` | PPSN in Ireland, NINo in the UK, DNI/NIE in Spain |
| `nationality` | `null` | Nationality of the employee (e.g. |
| `object` | `string` | The object type |
| `offboard_on` | `mixed` | Date when the employee was or will be offboarded |
| `phone_number` | `string` | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | Unique identifier for the platform |
| `sex_at_birth` | `mixed` | The sex assigned to the employee at birth |
| `start_on` | `string` | Employment start date |
| `status` | `mixed` | Current status of the employee |

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
| `coverage_level` | `mixed` | Details about the coverage level for the offer. |
| `employee_id` | `string` | The Id of the employee for which the offer is available |
| `employer_id` | `string` | The Id of the employer for which the offer is available |
| `external_customer_id` | `mixed` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for offer |
| `object` | `string` | The object type |
| `required_action` | `null` | Required action to progress the offer, if any. |
| `status` | `mixed` | Current status of offer |

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
| `coverage_level` | `mixed` | Details about the coverage level for the offer. |
| `employee_id` | `string` | The Id of the employee for which the offer is available |
| `employer_id` | `string` | The Id of the employer for which the offer is available |
| `external_customer_id` | `mixed` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for offer |
| `object` | `string` | The object type |
| `required_action` | `null` | Required action to progress the offer, if any. |
| `status` | `mixed` | Current status of offer |

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
| `cancellation_date` | `mixed` | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `mixed` | Represents the current coverage level for the policy |
| `employee_id` | `string` | The Id of the employee for which the policy is created |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolled_dependants_count` | `int` | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `mixed` | Enrolment type of the policy |
| `estimated_gross_premium` | `mixed` | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `mixed` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `opt_out_deadline_date` | `string` | Last day to opt out from the policy |
| `policy_number` | `mixed` | Health insurance policy number, if available |
| `renewal` | `mixed` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `mixed` | Current status of policy |

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
| `cancellation_date` | `mixed` | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `mixed` | Represents the current coverage level for the policy |
| `employee_id` | `string` | The Id of the employee for which the policy is created |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolled_dependants_count` | `int` | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `mixed` | Enrolment type of the policy |
| `estimated_gross_premium` | `mixed` | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `mixed` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `opt_out_deadline_date` | `string` | Last day to opt out from the policy |
| `policy_number` | `mixed` | Health insurance policy number, if available |
| `renewal` | `mixed` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `mixed` | Current status of policy |

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
| `metadata` | `mixed` | Set of key-value pairs that you can attach to an object. |
| `object` | `string` | The object type |
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
| `cancellation_date` | `mixed` | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `array` | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `int` | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolment_type` | `mixed` | Enrolment type of the policy |
| `group_policy_number` | `mixed` | Group’s health insurance policy number, if available |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `renewal` | `mixed` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `mixed` | Current status of policy |

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
| `cancellation_date` | `mixed` | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `array` | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `int` | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolment_type` | `mixed` | Enrolment type of the policy |
| `group_policy_number` | `mixed` | Group’s health insurance policy number, if available |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `renewal` | `mixed` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `mixed` | Current status of policy |

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
| `coverage_levels` | `array` | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | The Id of the employer for which the is created |
| `id` | `string` | Unique identifier for the quote |
| `object` | `string` | The object type |
| `quoted_at` | `string` | Date and time the quote was created at |
| `required_action` | `null` | Actions required by the employer to proceed with the quote. |
| `status` | `mixed` | Current status of the quote |

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
| `coverage_levels` | `array` | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | The Id of the employer for which the is created |
| `id` | `string` | Unique identifier for the quote |
| `object` | `string` | The object type |
| `quoted_at` | `string` | Date and time the quote was created at |
| `required_action` | `null` | Actions required by the employer to proceed with the quote. |
| `status` | `mixed` | Current status of the quote |

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
| `action_required` | `null` | If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment. |
| `disclosures` | `array` | Disclosures associated with this intent. |
| `employee_id` | `string` | Identifier for the employee associated with this enrolment intent. |
| `force_confirmation` | `bool` | If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. |
| `group_id` | `string` | Identifier for the group associated with this enrolment intent. |
| `id` | `string` | Unique identifier for the enrolment intent. |
| `ineligibility_reason` | `null` | If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility. |
| `object` | `string` | Object type identifier. |
| `pending_confirmation` | `null` | If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state. |
| `policy_configuration` | `null` | Policy configuration associated with this enrolment intent. |
| `policy_enrolments` | `array` | Policy enrolment information |
| `status` | `mixed` | Current status of the enrolment intent. |

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
| `id` | `string` | Unique identifier for the requirement |
| `is_fulfilled` | `bool` | Whether the requirement has been fulfilled |
| `object` | `string` | Object type identifier |
| `object_id` | `string` | Identifier of the object (employee ID or employer ID) |
| `object_type` | `mixed` | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `mixed` | Type of requirement |

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
| `description` | `mixed` | Short description of the purpose or scope of the `group`. |
| `employer_id` | `string` | Identifier for the `employer` that owns this `group`. |
| `enrolment_type` | `mixed` | Indicates how employees are enrolled into the group. |
| `group_policy_ids` | `array` | Group policy unique identifiers associated with this group. |
| `group_policy_intent_ids` | `array` | Group policy intent unique identifiers associated with this group. |
| `group_quote_intent_ids` | `array` | Group quote intent unique identifiers associated with this group. |
| `group_type` | `mixed` | Indicates how policies are organized for this group. |
| `id` | `string` | Unique identifier for the `group`. |
| `name` | `string` | Human-readable name of the `group`. |
| `object` | `string` | The object type |
| `status` | `mixed` | Current lifecycle state of the `group`, indicating its current progress. |

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
| `desired_policy_start_date` | `mixed` | The desired date for the employee's policy to start. |
| `eligibility_status` | `mixed` | Eligibility status for the employee in this group. |
| `enrolment_date` | `mixed` | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `mixed` | Enrolment status for the employee in this group. |
| `enrolments` | `array` | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Unique identifier for the group. |
| `id` | `string` | Unique identifier for the employee. |
| `object` | `string` | The object type |
| `policies` | `array` | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `array` | List of scheduled group transitions for the employee. |

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
| `desired_policy_start_date` | `mixed` | The desired date for the employee's policy to start. |
| `eligibility_status` | `mixed` | Eligibility status for the employee in this group. |
| `enrolment_date` | `mixed` | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `mixed` | Enrolment status for the employee in this group. |
| `enrolments` | `array` | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Unique identifier for the group. |
| `id` | `string` | Unique identifier for the employee. |
| `object` | `string` | The object type |
| `policies` | `array` | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `array` | List of scheduled group transitions for the employee. |

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
| `cancellation_date` | `mixed` | Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable. |
| `disclosures` | `array` | Disclosures associated with this group policy. |
| `employer_id` | `string` | Identifier for the employer associated with this group policy. |
| `end_date` | `mixed` | Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended. |
| `group_id` | `string` | Identifier for the group associated with this group policy. |
| `health_insurance` | `null` | Health insurance–specific fields (present when `type=health_insurance`). |
| `id` | `string` | Unique identifier for the group policy. |
| `object` | `string` | The object type |
| `plan` | `mixed` | Plan information for this policy |
| `provider` | `mixed` | Provider information for this policy. |
| `start_date` | `string` | Policy start (effective) date in ISO 8601 (YYYY-MM-DD). |
| `status` | `mixed` | Current lifecycle state of the `group_policy`, indicating its progress from creation to activation. |
| `type` | `mixed` | Policy type. |

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
| `action_required` | `null` | Details of the required action when the intent is in ActionRequired status. |
| `cost_sharing` | `null` | Cost sharing configuration for the policy intent |
| `disclosures` | `array` | Disclosures associated with this intent. |
| `due_date` | `mixed` | Due date for the policy intent |
| `group_id` | `string` | Unique identifier for the group |
| `id` | `string` | Unique identifier for the group policy intent |
| `object` | `string` | Object type identifier |
| `plan_id` | `string` | Unique identifier for the plan |
| `quote_intent_id` | `string` | Unique identifier for the group quote intent this policy intent was created from |
| `status` | `mixed` | Current status of the group policy intent |

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
| `id` | `string` | Unique identifier for the requirement |
| `is_fulfilled` | `bool` | Whether the requirement has been fulfilled |
| `object` | `string` | Object type identifier |
| `object_id` | `string` | Identifier of the object (employee ID or employer ID) |
| `object_type` | `mixed` | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `mixed` | Type of requirement |

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
| `family_type` | `null` | Type of the family covered by the employer. |
| `member_count` | `null` | Numbers of additional members covered by the employer. |
| `member_selection` | `null` | Whether specific member types are covered by the employer. |
| `percentage` | `null` | Percentage of the premium the employer covers. |
| `type` | `mixed` | Cost sharing type. |

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
| `action_required` | `null` | Details of the action required from the caller, if the intent is in action_required status. |
| `consent_links` | `array` | Consent links that need to be acknowledged |
| `cost_sharing` | `null` | Cost sharing configuration for the quote |
| `disclosures` | `array` | Disclosures associated with this intent. |
| `expected_start_date` | `mixed` | Expected start date for the insurance coverage |
| `group_id` | `string` | Unique identifier for the group |
| `id` | `string` | Unique identifier for the group quote intent |
| `object` | `string` | Object type identifier |
| `plan_id` | `string` | Unique identifier for the plan |
| `status` | `mixed` | Current status of the group quote intent |

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
| `id` | `string` | Unique identifier for the requirement |
| `is_fulfilled` | `bool` | Whether the requirement has been fulfilled |
| `object` | `string` | Object type identifier |
| `object_id` | `string` | Identifier of the object (employee ID or employer ID) |
| `object_type` | `mixed` | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `mixed` | Type of requirement |

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
| `available_from` | `string` | The date from which this plan is available (inclusive). |
| `available_to` | `mixed` | The date until which this plan is available (inclusive). |
| `country` | `mixed` | The country this plan is available in. |
| `coverage_options` | `mixed` | Coverage options available for this plan, organized by scope and input type. |
| `description` | `string` | Description of the plan. |
| `disclosures` | `array` | Disclosures associated with this plan. |
| `documents` | `array` | List of plan documents (e.g., IPIDs, T&Cs). |
| `eligible_count` | `mixed` | Number of employees in the queried group eligible for this plan as-of `start_date`. |
| `employee_eligibility_criteria` | `array` | Eligibility criteria that employees must meet. |
| `employer_eligibility_criteria` | `array` | Eligibility criteria that employers must meet. |
| `health_insurance` | `null` | Health insurance-specific details. |
| `id` | `string` | Unique identifier for the plan. |
| `ineligible_count` | `mixed` | Number of employees in the queried group ineligible for this plan as-of `start_date`. |
| `name` | `string` | The name of the plan. |
| `object` | `string` | Object type. |
| `provider` | `mixed` | The provider offering this plan. |
| `total_count` | `mixed` | Total employees in the queried group. |
| `type` | `mixed` | The benefit type of the plan. |

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
| `bundling_type` | `mixed` | Indicates how this policy is bundled within a group |
| `cancellation_date` | `mixed` | Date the policy was cancelled (if applicable) |
| `disclosures` | `array` | Disclosures associated with this policy. |
| `employee_id` | `string` | Identifier of the employee associated with this policy. |
| `end_date` | `mixed` | Policy end date (inclusive) in ISO 8601, or null if open-ended |
| `group_id` | `string` | Identifier of the group associated with this policy. |
| `group_policy_id` | `string` | Identifier of the group policy id associated with this policy. |
| `health_insurance` | `null` | Health insurance–specific fields (present when `type=health_insurance`) |
| `id` | `string` | Unique identifier for the policy. |
| `object` | `string` | Object type |
| `plan` | `mixed` | Plan information for this policy |
| `provider` | `mixed` | Provider information for this policy |
| `start_date` | `string` | Policy start (effective) date in ISO 8601 (YYYY-MM-DD) |
| `status` | `mixed` | Current lifecycle state of the policy |
| `type` | `mixed` | Policy type. |

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
| `amendment_reason` | `mixed` | The reason for the policy amendment. |
| `disclosures` | `array` | Disclosures associated with this intent. |
| `id` | `string` | Unique identifier for the policy amendment intent. |
| `object` | `string` | Object type identifier. |
| `pending_confirmation` | `null` | Information about the pending confirmation if the intent status is `pending_confirmation`. |
| `policy_id` | `string` | The policy ID for which the amendment is requested. |
| `processing_error` | `null` | Information about the processing error if the intent status is `processing_error`. |
| `requested_changes` | `array` | List of requested changes to the policy. |
| `required_action` | `null` | Information about the required action if the intent status is `action_required`. |
| `status` | `mixed` | Current status of the policy amendment intent. |

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
| `associated_persons` | `array` | List of associated persons linked to this policy import. |
| `employee_id` | `string` | The employee ID for the policy import. |
| `group_id` | `string` | The group ID for the policy import. |
| `id` | `string` | Unique identifier for the policy import intent. |
| `member_number` | `string` | The member number assigned by the provider. |
| `object` | `string` | Object type identifier. |
| `policy_end_date` | `mixed` | The end date of the policy. |
| `policy_start_date` | `string` | The start date of the policy. |
| `provider_policy_number` | `string` | The provider's policy number. |
| `status` | `mixed` | Current status of the policy import intent. |

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
| `description` | `string` | Description of the provider. |
| `employer_platform_url` | `mixed` | URL to the employer portal/platform for this provider, if available. |
| `id` | `string` | Unique identifier for the provider. |
| `kota_hub_url` | `mixed` | URL to the Kota Hub page for this platform, if configured. |
| `logo_url` | `string` | URL to the provider's logo image. |
| `name` | `string` | The name of the provider. |
| `object` | `string` | Object type. |
| `support_phone` | `string` | Customer support phone number. |
| `supported_countries` | `array` | List of countries supported by this provider. |
| `website_url` | `string` | The provider's main website URL. |

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
| `created_at` | `string` | The date and time the endpoint was created |
| `endpoint_url` | `string` | The registered URL of the endpoint |
| `id` | `string` | The unique identifier of the endpoint |
| `object` | `string` | The object type |
| `subscribed_events` | `array` | The events the endpoint is subscribed to |

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
| `created_at` | `string` | The date and time the endpoint was created |
| `endpoint_url` | `string` | The registered URL of the endpoint |
| `id` | `string` | The unique identifier of the endpoint |
| `object` | `string` | The object type |
| `subscribed_events` | `array` | The events the endpoint is subscribed to |

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
