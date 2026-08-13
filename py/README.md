# Kota Python SDK



The Python SDK for the Kota API — an entity-oriented client following Pythonic conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `client.AssociatedPerson()` — each
carrying a small, uniform set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL
paths and query strings. You work with named resources and verbs, which
keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to PyPI. Install it from the GitHub
release tag (`py/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/kota-sdk/releases)) or
from a source checkout:

```bash
pip install -e .
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```python
import os
from kota_sdk import KotaSDK

client = KotaSDK({
    "apikey": os.environ.get("KOTA_APIKEY"),
})
```

### 2. List associatedperson records

`list()` returns a `list` of records (each a `dict`) and raises on
error — iterate it directly.

```python
try:
    associatedpersons = client.AssociatedPerson().list({"employee_id": "example"})
    for associatedperson in associatedpersons:
        print(associatedperson)
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load an associatedperson

AssociatedPerson is nested under employee, so provide the `employee_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    associatedperson = client.AssociatedPerson().load({"employee_id": "example_employee_id", "id": "example_id"})
    print(associatedperson)
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.AssociatedPerson().create({"employee_id": "example_employee_id", "date_of_birth": "example_date_of_birth", "first_name": "example_first_name", "id": "example_id", "last_name": "example_last_name", "relationship_type": "example_relationship_type", "sex_at_birth": "example_sex_at_birth"})

# Update — the created record's id is a plain dict key
client.AssociatedPerson().update({"id": created.data_get()["id"], "employee_id": "example_employee_id", "date_of_birth": "example_date_of_birth"})

# Remove
client.AssociatedPerson().remove({"id": created.data_get()["id"], "employee_id": "example_employee_id"})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    dependentsmanagementintent = client.DependentsManagementIntent().load({"id": "example_id"})
    print(dependentsmanagementintent)
except Exception as err:
    print(f"load failed: {err}")
```

`direct()` does **not** raise — it returns the result envelope. Branch
on `ok`; on failure `status` holds the HTTP status (for error responses)
and `err` holds a transport error, so read both defensively:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example_id"},
})

if not result["ok"]:
    print("request failed:", result.get("status"), result.get("err"))
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```python
result = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})

if result["ok"]:
    print(result["status"])  # 200
    print(result["data"])    # response body
else:
    # A non-2xx response carries status + data (the error body); a
    # transport-level failure carries err instead. Only one is present, so
    # read both with .get() rather than indexing a key that may be absent.
    print(result.get("status"), result.get("err"))
```

### Prepare a request without sending it

```python
# prepare() returns the fetch definition and raises on error.
fetchdef = client.prepare({
    "path": "/api/resource/{id}",
    "method": "DELETE",
    "params": {"id": "example"},
})

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```python
client = KotaSDK.test()

# Entity ops return the ENTITY and raises on error;
# call data_get() for the record.
dependentsmanagementintent = client.DependentsManagementIntent().load({"id": "test01"})
# dependentsmanagementintent contains the mock response record
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```python
def mock_fetch(url, init):
    return {
        "status": 200,
        "statusText": "OK",
        "headers": {},
        "json": lambda: {"id": "mock01"},
    }, None

client = KotaSDK({
    "base": "http://localhost:8080",
    "system": {
        "fetch": mock_fetch,
    },
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
cd py && pytest test/
```


## Reference

### KotaSDK

```python
from kota_sdk import KotaSDK

client = KotaSDK(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `str` | API key for authentication. |
| `base` | `str` | Base URL of the API server. |
| `prefix` | `str` | URL path prefix prepended to all requests. |
| `suffix` | `str` | URL path suffix appended to all requests. |
| `feature` | `dict` | Feature activation flags. |
| `extend` | `list` | Additional Feature instances to load. |
| `system` | `dict` | System overrides (e.g. custom `fetch` function). |

### test

```python
client = KotaSDK.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `None`.

### KotaSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> dict` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> dict` | Build an HTTP request definition without sending. Raises on error. |
| `direct` | `(fetchargs) -> dict` | Build and send an HTTP request. Returns a result dict (branch on `ok`). |
| `AssociatedPerson` | `(data) -> AssociatedPersonEntity` | Create an AssociatedPerson entity instance. |
| `AssociatedPersonEligibilityResponsePagedList` | `(data) -> AssociatedPersonEligibilityResponsePagedListEntity` | Create an AssociatedPersonEligibilityResponsePagedList entity instance. |
| `ContributionReport` | `(data) -> ContributionReportEntity` | Create a ContributionReport entity instance. |
| `ContributionReportEmployeeBreakdown` | `(data) -> ContributionReportEmployeeBreakdownEntity` | Create a ContributionReportEmployeeBreakdown entity instance. |
| `ContributionReportEmployeeBreakdownResponsePagedList` | `(data) -> ContributionReportEmployeeBreakdownResponsePagedListEntity` | Create a ContributionReportEmployeeBreakdownResponsePagedList entity instance. |
| `CreateHostedSessionToken` | `(data) -> CreateHostedSessionTokenEntity` | Create a CreateHostedSessionToken entity instance. |
| `CreateSessionToken` | `(data) -> CreateSessionTokenEntity` | Create a CreateSessionToken entity instance. |
| `Dependent` | `(data) -> DependentEntity` | Create a Dependent entity instance. |
| `DependentsManagementIntent` | `(data) -> DependentsManagementIntentEntity` | Create a DependentsManagementIntent entity instance. |
| `EligibilityCheck` | `(data) -> EligibilityCheckEntity` | Create an EligibilityCheck entity instance. |
| `Employee` | `(data) -> EmployeeEntity` | Create an Employee entity instance. |
| `EmployeeHealthInsuranceOffer` | `(data) -> EmployeeHealthInsuranceOfferEntity` | Create an EmployeeHealthInsuranceOffer entity instance. |
| `EmployeeHealthInsuranceOfferResponsePagedList` | `(data) -> EmployeeHealthInsuranceOfferResponsePagedListEntity` | Create an EmployeeHealthInsuranceOfferResponsePagedList entity instance. |
| `EmployeeHealthInsurancePolicy` | `(data) -> EmployeeHealthInsurancePolicyEntity` | Create an EmployeeHealthInsurancePolicy entity instance. |
| `EmployeeHealthInsurancePolicyResponsePagedList` | `(data) -> EmployeeHealthInsurancePolicyResponsePagedListEntity` | Create an EmployeeHealthInsurancePolicyResponsePagedList entity instance. |
| `Employer` | `(data) -> EmployerEntity` | Create an Employer entity instance. |
| `EmployerHealthInsurancePolicy` | `(data) -> EmployerHealthInsurancePolicyEntity` | Create an EmployerHealthInsurancePolicy entity instance. |
| `EmployerHealthInsurancePolicyResponsePagedList` | `(data) -> EmployerHealthInsurancePolicyResponsePagedListEntity` | Create an EmployerHealthInsurancePolicyResponsePagedList entity instance. |
| `EmployerHealthInsuranceQuote` | `(data) -> EmployerHealthInsuranceQuoteEntity` | Create an EmployerHealthInsuranceQuote entity instance. |
| `EmployerHealthInsuranceQuoteResponsePagedList` | `(data) -> EmployerHealthInsuranceQuoteResponsePagedListEntity` | Create an EmployerHealthInsuranceQuoteResponsePagedList entity instance. |
| `EnrolmentIntent` | `(data) -> EnrolmentIntentEntity` | Create an EnrolmentIntent entity instance. |
| `EnrolmentIntentRequirementResponsePagedList` | `(data) -> EnrolmentIntentRequirementResponsePagedListEntity` | Create an EnrolmentIntentRequirementResponsePagedList entity instance. |
| `Event` | `(data) -> EventEntity` | Create an Event entity instance. |
| `Group` | `(data) -> GroupEntity` | Create a Group entity instance. |
| `GroupEmployee` | `(data) -> GroupEmployeeEntity` | Create a GroupEmployee entity instance. |
| `GroupEmployeeResponsePagedList` | `(data) -> GroupEmployeeResponsePagedListEntity` | Create a GroupEmployeeResponsePagedList entity instance. |
| `GroupPolicy` | `(data) -> GroupPolicyEntity` | Create a GroupPolicy entity instance. |
| `GroupPolicyIntent` | `(data) -> GroupPolicyIntentEntity` | Create a GroupPolicyIntent entity instance. |
| `GroupPolicyIntentRequirementResponsePagedList` | `(data) -> GroupPolicyIntentRequirementResponsePagedListEntity` | Create a GroupPolicyIntentRequirementResponsePagedList entity instance. |
| `GroupQuote` | `(data) -> GroupQuoteEntity` | Create a GroupQuote entity instance. |
| `GroupQuoteIntent` | `(data) -> GroupQuoteIntentEntity` | Create a GroupQuoteIntent entity instance. |
| `GroupQuoteIntentRequirementResponsePagedList` | `(data) -> GroupQuoteIntentRequirementResponsePagedListEntity` | Create a GroupQuoteIntentRequirementResponsePagedList entity instance. |
| `Plan` | `(data) -> PlanEntity` | Create a Plan entity instance. |
| `Policy` | `(data) -> PolicyEntity` | Create a Policy entity instance. |
| `PolicyAmendmentIntent` | `(data) -> PolicyAmendmentIntentEntity` | Create a PolicyAmendmentIntent entity instance. |
| `PolicyImportIntent` | `(data) -> PolicyImportIntentEntity` | Create a PolicyImportIntent entity instance. |
| `Provider` | `(data) -> ProviderEntity` | Create a Provider entity instance. |
| `Replay` | `(data) -> ReplayEntity` | Create a Replay entity instance. |
| `WebhookEndpoint` | `(data) -> WebhookEndpointEntity` | Create a WebhookEndpoint entity instance. |
| `WebhookEndpointResponsePagedList` | `(data) -> WebhookEndpointResponsePagedListEntity` | Create a WebhookEndpointResponsePagedList entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the ENTITY (call data_get() for the record) (a `dict` for single-entity
ops, a `list` for `list`) and raise on error. Wrap calls in
`try`/`except` to handle failures.

The `direct()` escape hatch never raises — it returns a result `dict`
you branch on via `result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `True` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `dict` | Response headers. |
| `data` | `any` | Parsed JSON response body. |

On error, `ok` is `False` and `err` contains the error value.

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

Create an instance: `associated_person = client.AssociatedPerson()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date_of_birth` | `str` |  |
| `email` | `None | str` |  |
| `employee_id` | `str` |  |
| `first_name` | `str` |  |
| `id` | `str` |  |
| `last_name` | `str` |  |
| `object` | `str` |  |
| `phone_number` | `None | str` |  |
| `platform_id` | `str` |  |
| `relationship_type` | `Any` |  |
| `sex_at_birth` | `Any` |  |

#### Example: Load

```python
associated_person = client.AssociatedPerson().load({"id": "associated_person_id", "employee_id": "employee_id"})
```

#### Example: List

```python
associated_persons = client.AssociatedPerson().list({"employee_id": "example"})
```

#### Example: Create

```python
associated_person = client.AssociatedPerson().create({
    "employee_id": "example_employee_id",  # str
    "date_of_birth": "example_date_of_birth",  # str
    "first_name": "example_first_name",  # str
    "id": "example_id",  # str
    "last_name": "example_last_name",  # str
    "relationship_type": "example_relationship_type",  # Any
    "sex_at_birth": "example_sex_at_birth",  # Any
})
```


### AssociatedPersonEligibilityResponsePagedList

Create an instance: `associated_person_eligibility_response_paged_list = client.AssociatedPersonEligibilityResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_person_id` | `str` |  |
| `date_of_birth` | `str` |  |
| `eligibility_status` | `Any` |  |
| `first_name` | `str` |  |
| `ineligibility_reason` | `None | str` |  |
| `last_name` | `str` |  |
| `object` | `str` |  |
| `relationship` | `Any` |  |
| `sex_at_birth` | `Any` |  |

#### Example: List

```python
associated_person_eligibility_response_paged_lists = client.AssociatedPersonEligibilityResponsePagedList().list({"dependents_management_intent_id": "example"})
```


### ContributionReport

Create an instance: `contribution_report = client.ContributionReport()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `employer_id` | `str` |  |
| `external_customer_id` | `None | str` |  |
| `finalized_at` | `None | str` |  |
| `id` | `str` |  |
| `last_updated_at` | `str` |  |
| `object` | `str` |  |
| `period` | `Any` |  |
| `status` | `Any` |  |

#### Example: Load

```python
contribution_report = client.ContributionReport().load({"id": "contribution_report_id"})
```

#### Example: List

```python
contribution_reports = client.ContributionReport().list()
```

#### Example: Create

```python
contribution_report = client.ContributionReport().create({
    "id": "example_id",  # str
    "created_at": "example_created_at",  # str
    "employer_id": "example_employer_id",  # str
    "last_updated_at": "example_last_updated_at",  # str
    "period": "example_period",  # Any
    "status": "example_status",  # Any
})
```


### ContributionReportEmployeeBreakdown

Create an instance: `contribution_report_employee_breakdown = client.ContributionReportEmployeeBreakdown()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contribution_report_id` | `str` |  |
| `created_at` | `str` |  |
| `currency` | `Any` |  |
| `employee_id` | `str` |  |
| `employer_id` | `str` |  |
| `external_customer_id` | `None | str` |  |
| `finalized_at` | `None | str` |  |
| `health_insurance` | `Any` |  |
| `last_updated_at` | `str` |  |
| `object` | `str` |  |
| `period` | `Any` |  |
| `status` | `Any` |  |

#### Example: Load

```python
contribution_report_employee_breakdown = client.ContributionReportEmployeeBreakdown().load({"id": "contribution_report_employee_breakdown_id", "contribution_report_id": "contribution_report_id"})
```


### ContributionReportEmployeeBreakdownResponsePagedList

Create an instance: `contribution_report_employee_breakdown_response_paged_list = client.ContributionReportEmployeeBreakdownResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contribution_report_id` | `str` |  |
| `created_at` | `str` |  |
| `currency` | `Any` |  |
| `employee_id` | `str` |  |
| `employer_id` | `str` |  |
| `external_customer_id` | `None | str` |  |
| `finalized_at` | `None | str` |  |
| `health_insurance` | `Any` |  |
| `last_updated_at` | `str` |  |
| `object` | `str` |  |
| `period` | `Any` |  |
| `status` | `Any` |  |

#### Example: List

```python
contribution_report_employee_breakdown_response_paged_lists = client.ContributionReportEmployeeBreakdownResponsePagedList().list({"id": "example"})
```


### CreateHostedSessionToken

Create an instance: `create_hosted_session_token = client.CreateHostedSessionToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expiry` | `str` |  |
| `link` | `str` |  |

#### Example: Create

```python
create_hosted_session_token = client.CreateHostedSessionToken().create({
    "expiry": "example_expiry",  # str
    "link": "example_link",  # str
})
```


### CreateSessionToken

Create an instance: `create_session_token = client.CreateSessionToken()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expiry` | `str` |  |
| `token` | `str` |  |

#### Example: Create

```python
create_session_token = client.CreateSessionToken().create({
    "expiry": "example_expiry",  # str
    "token": "example_token",  # str
})
```


### Dependent

Create an instance: `dependent = client.Dependent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `None` |  |
| `coverage_options` | `None | list` |  |
| `dependents` | `list` |  |
| `disclosures` | `list` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `parent_intent_id` | `str` |  |
| `parent_intent_type` | `Any` |  |
| `plan` | `Any` |  |
| `status` | `Any` |  |

#### Example: Create

```python
dependent = client.Dependent().create({
    "dependents_management_intent_id": "example_dependents_management_intent_id",  # str
    "dependents": [],  # list
    "disclosures": [],  # list
    "id": "example_id",  # str
    "parent_intent_id": "example_parent_intent_id",  # str
    "parent_intent_type": "example_parent_intent_type",  # Any
    "plan": "example_plan",  # Any
    "status": "example_status",  # Any
})
```


### DependentsManagementIntent

Create an instance: `dependents_management_intent = client.DependentsManagementIntent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `None` |  |
| `coverage_options` | `None | list` |  |
| `dependents` | `list` |  |
| `disclosures` | `list` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `parent_intent_id` | `str` |  |
| `parent_intent_type` | `Any` |  |
| `plan` | `Any` |  |
| `status` | `Any` |  |

#### Example: Load

```python
dependents_management_intent = client.DependentsManagementIntent().load({"id": "dependents_management_intent_id"})
```

#### Example: Create

```python
dependents_management_intent = client.DependentsManagementIntent().create({
    "dependents": [],  # list
    "disclosures": [],  # list
    "id": "example_id",  # str
    "parent_intent_id": "example_parent_intent_id",  # str
    "parent_intent_type": "example_parent_intent_type",  # Any
    "plan": "example_plan",  # Any
    "status": "example_status",  # Any
})
```


### EligibilityCheck

Create an instance: `eligibility_check = client.EligibilityCheck()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `eligibility_status` | `Any` |  |
| `object` | `str` |  |
| `plan` | `Any` |  |
| `provider` | `Any` |  |
| `reasons` | `list` |  |

#### Example: Create

```python
eligibility_check = client.EligibilityCheck().create({
    "group_id": "example_group_id",  # str
    "eligibility_status": "example_eligibility_status",  # Any
    "plan": "example_plan",  # Any
    "provider": "example_provider",  # Any
    "reasons": [],  # list
})
```


### Employee

Create an instance: `employee = client.Employee()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bank_account` | `None` |  |
| `date_of_birth` | `str` |  |
| `earliest_benefits_start_date` | `None | str` |  |
| `email` | `str` |  |
| `employer_id` | `str` |  |
| `external_customer_id` | `None | str` |  |
| `first_name` | `str` |  |
| `home_address` | `None` |  |
| `id` | `str` |  |
| `last_name` | `str` |  |
| `metadata` | `None | dict` |  |
| `national_tax_id` | `str` |  |
| `nationality` | `None` |  |
| `object` | `str` |  |
| `offboard_on` | `None | str` |  |
| `phone_number` | `str` |  |
| `platform_id` | `str` |  |
| `sex_at_birth` | `Any` |  |
| `start_on` | `str` |  |
| `status` | `Any` |  |

#### Example: Load

```python
employee = client.Employee().load({"id": "employee_id"})
```

#### Example: List

```python
employees = client.Employee().list()
```

#### Example: Create

```python
employee = client.Employee().create({
    "date_of_birth": "example_date_of_birth",  # str
    "email": "example_email",  # str
    "first_name": "example_first_name",  # str
    "last_name": "example_last_name",  # str
    "national_tax_id": "example_national_tax_id",  # str
    "phone_number": "example_phone_number",  # str
    "sex_at_birth": "example_sex_at_birth",  # Any
})
```


### EmployeeHealthInsuranceOffer

Create an instance: `employee_health_insurance_offer = client.EmployeeHealthInsuranceOffer()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_level` | `Any` |  |
| `employee_id` | `str` |  |
| `employer_id` | `str` |  |
| `external_customer_id` | `None | str` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `required_action` | `None` |  |
| `status` | `Any` |  |

#### Example: Load

```python
employee_health_insurance_offer = client.EmployeeHealthInsuranceOffer().load({"id": "employee_health_insurance_offer_id", "employee_id": "employee_id"})
```


### EmployeeHealthInsuranceOfferResponsePagedList

Create an instance: `employee_health_insurance_offer_response_paged_list = client.EmployeeHealthInsuranceOfferResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_level` | `Any` |  |
| `employee_id` | `str` |  |
| `employer_id` | `str` |  |
| `external_customer_id` | `None | str` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `required_action` | `None` |  |
| `status` | `Any` |  |

#### Example: List

```python
employee_health_insurance_offer_response_paged_lists = client.EmployeeHealthInsuranceOfferResponsePagedList().list({"employee_id": "example"})
```


### EmployeeHealthInsurancePolicy

Create an instance: `employee_health_insurance_policy = client.EmployeeHealthInsurancePolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `None | str` |  |
| `coverage_level` | `Any` |  |
| `employee_id` | `str` |  |
| `employer_id` | `str` |  |
| `end_date` | `str` |  |
| `enrolled_dependants_count` | `int` |  |
| `enrolment_type` | `Any` |  |
| `estimated_gross_premium` | `Any` |  |
| `external_customer_id` | `None | str` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `opt_out_deadline_date` | `str` |  |
| `policy_number` | `None | str` |  |
| `renewal` | `Any` |  |
| `start_date` | `str` |  |
| `status` | `Any` |  |

#### Example: Load

```python
employee_health_insurance_policy = client.EmployeeHealthInsurancePolicy().load({"id": "employee_health_insurance_policy_id", "employee_id": "employee_id"})
```


### EmployeeHealthInsurancePolicyResponsePagedList

Create an instance: `employee_health_insurance_policy_response_paged_list = client.EmployeeHealthInsurancePolicyResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `None | str` |  |
| `coverage_level` | `Any` |  |
| `employee_id` | `str` |  |
| `employer_id` | `str` |  |
| `end_date` | `str` |  |
| `enrolled_dependants_count` | `int` |  |
| `enrolment_type` | `Any` |  |
| `estimated_gross_premium` | `Any` |  |
| `external_customer_id` | `None | str` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `opt_out_deadline_date` | `str` |  |
| `policy_number` | `None | str` |  |
| `renewal` | `Any` |  |
| `start_date` | `str` |  |
| `status` | `Any` |  |

#### Example: List

```python
employee_health_insurance_policy_response_paged_lists = client.EmployeeHealthInsurancePolicyResponsePagedList().list({"employee_id": "example"})
```


### Employer

Create an instance: `employer = client.Employer()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contact` | `Any` |  |
| `earliest_benefits_start_date` | `None | str` |  |
| `id` | `str` |  |
| `legal_address` | `Any` |  |
| `legal_name` | `str` |  |
| `metadata` | `None | dict` |  |
| `object` | `str` |  |
| `offboard_on` | `None | str` |  |
| `platform_id` | `str` |  |
| `registration_number` | `None | str` |  |
| `status` | `Any` |  |

#### Example: Load

```python
employer = client.Employer().load({"id": "employer_id"})
```

#### Example: List

```python
employers = client.Employer().list()
```

#### Example: Create

```python
employer = client.Employer().create({
    "contact": "example_contact",  # Any
    "id": "example_id",  # str
    "legal_address": "example_legal_address",  # Any
    "legal_name": "example_legal_name",  # str
})
```


### EmployerHealthInsurancePolicy

Create an instance: `employer_health_insurance_policy = client.EmployerHealthInsurancePolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `None | str` |  |
| `coverage_levels` | `list` |  |
| `employer_cancellation_period_length` | `int` |  |
| `employer_id` | `str` |  |
| `end_date` | `str` |  |
| `enrolment_type` | `Any` |  |
| `group_policy_number` | `None | str` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `renewal` | `Any` |  |
| `start_date` | `str` |  |
| `status` | `Any` |  |

#### Example: Load

```python
employer_health_insurance_policy = client.EmployerHealthInsurancePolicy().load({"id": "employer_health_insurance_policy_id", "employer_id": "employer_id"})
```


### EmployerHealthInsurancePolicyResponsePagedList

Create an instance: `employer_health_insurance_policy_response_paged_list = client.EmployerHealthInsurancePolicyResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `None | str` |  |
| `coverage_levels` | `list` |  |
| `employer_cancellation_period_length` | `int` |  |
| `employer_id` | `str` |  |
| `end_date` | `str` |  |
| `enrolment_type` | `Any` |  |
| `group_policy_number` | `None | str` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `renewal` | `Any` |  |
| `start_date` | `str` |  |
| `status` | `Any` |  |

#### Example: List

```python
employer_health_insurance_policy_response_paged_lists = client.EmployerHealthInsurancePolicyResponsePagedList().list({"employer_id": "example"})
```


### EmployerHealthInsuranceQuote

Create an instance: `employer_health_insurance_quote = client.EmployerHealthInsuranceQuote()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_levels` | `list` |  |
| `employer_id` | `str` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `quoted_at` | `str` |  |
| `required_action` | `None` |  |
| `status` | `Any` |  |

#### Example: Load

```python
employer_health_insurance_quote = client.EmployerHealthInsuranceQuote().load({"id": "employer_health_insurance_quote_id", "employer_id": "employer_id"})
```


### EmployerHealthInsuranceQuoteResponsePagedList

Create an instance: `employer_health_insurance_quote_response_paged_list = client.EmployerHealthInsuranceQuoteResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_levels` | `list` |  |
| `employer_id` | `str` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `quoted_at` | `str` |  |
| `required_action` | `None` |  |
| `status` | `Any` |  |

#### Example: List

```python
employer_health_insurance_quote_response_paged_lists = client.EmployerHealthInsuranceQuoteResponsePagedList().list({"employer_id": "example"})
```


### EnrolmentIntent

Create an instance: `enrolment_intent = client.EnrolmentIntent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `None` |  |
| `disclosures` | `list` |  |
| `employee_id` | `str` |  |
| `force_confirmation` | `bool` |  |
| `group_id` | `str` |  |
| `id` | `str` |  |
| `ineligibility_reason` | `None` |  |
| `object` | `str` |  |
| `pending_confirmation` | `None` |  |
| `policy_configuration` | `None` |  |
| `policy_enrolments` | `list` |  |
| `status` | `Any` |  |

#### Example: Load

```python
enrolment_intent = client.EnrolmentIntent().load({"id": "enrolment_intent_id"})
```

#### Example: List

```python
enrolment_intents = client.EnrolmentIntent().list()
```

#### Example: Create

```python
enrolment_intent = client.EnrolmentIntent().create({
    "disclosures": [],  # list
    "employee_id": "example_employee_id",  # str
    "force_confirmation": True,  # bool
    "group_id": "example_group_id",  # str
    "id": "example_id",  # str
    "policy_enrolments": [],  # list
    "status": "example_status",  # Any
})
```


### EnrolmentIntentRequirementResponsePagedList

Create an instance: `enrolment_intent_requirement_response_paged_list = client.EnrolmentIntentRequirementResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `is_fulfilled` | `bool` |  |
| `object` | `str` |  |
| `object_id` | `str` |  |
| `object_type` | `Any` |  |
| `requirement_type` | `Any` |  |

#### Example: List

```python
enrolment_intent_requirement_response_paged_lists = client.EnrolmentIntentRequirementResponsePagedList().list({"id": "example"})
```


### Event

Create an instance: `event = client.Event()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_version` | `str` |  |
| `created` | `str` |  |
| `data` | `None` |  |
| `id` | `str` |  |
| `options` | `None` |  |
| `parent` | `None` |  |
| `platform_id` | `str` |  |
| `root` | `Any` |  |
| `type` | `str` |  |

#### Example: Load

```python
event = client.Event().load({"id": "event_id"})
```

#### Example: List

```python
events = client.Event().list()
```


### Group

Create an instance: `group = client.Group()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `None | str` |  |
| `employer_id` | `str` |  |
| `enrolment_type` | `Any` |  |
| `group_policy_ids` | `list` |  |
| `group_policy_intent_ids` | `list` |  |
| `group_quote_intent_ids` | `list` |  |
| `group_type` | `Any` |  |
| `id` | `str` |  |
| `name` | `str` |  |
| `object` | `str` |  |
| `status` | `Any` |  |

#### Example: Load

```python
group = client.Group().load({"id": "group_id"})
```

#### Example: List

```python
groups = client.Group().list()
```

#### Example: Create

```python
group = client.Group().create({
    "employer_id": "example_employer_id",  # str
    "enrolment_type": "example_enrolment_type",  # Any
    "group_policy_ids": [],  # list
    "group_policy_intent_ids": [],  # list
    "group_quote_intent_ids": [],  # list
    "group_type": "example_group_type",  # Any
    "id": "example_id",  # str
    "name": "example_name",  # str
    "status": "example_status",  # Any
})
```


### GroupEmployee

Create an instance: `group_employee = client.GroupEmployee()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desired_policy_start_date` | `None | str` |  |
| `eligibility_status` | `Any` |  |
| `enrolment_date` | `None | str` |  |
| `enrolment_status` | `Any` |  |
| `enrolments` | `list` |  |
| `group_id` | `str` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `policies` | `list` |  |
| `scheduled_group_transitions` | `list` |  |

#### Example: Create

```python
group_employee = client.GroupEmployee().create({
    "id": "example_id",  # str
    "eligibility_status": "example_eligibility_status",  # Any
    "enrolment_status": "example_enrolment_status",  # Any
    "enrolments": [],  # list
    "group_id": "example_group_id",  # str
    "policies": [],  # list
    "scheduled_group_transitions": [],  # list
})
```


### GroupEmployeeResponsePagedList

Create an instance: `group_employee_response_paged_list = client.GroupEmployeeResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desired_policy_start_date` | `None | str` |  |
| `eligibility_status` | `Any` |  |
| `enrolment_date` | `None | str` |  |
| `enrolment_status` | `Any` |  |
| `enrolments` | `list` |  |
| `group_id` | `str` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `policies` | `list` |  |
| `scheduled_group_transitions` | `list` |  |

#### Example: List

```python
group_employee_response_paged_lists = client.GroupEmployeeResponsePagedList().list({"id": "example"})
```


### GroupPolicy

Create an instance: `group_policy = client.GroupPolicy()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `None | str` |  |
| `disclosures` | `list` |  |
| `employer_id` | `str` |  |
| `end_date` | `None | str` |  |
| `group_id` | `str` |  |
| `health_insurance` | `None` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `plan` | `Any` |  |
| `provider` | `Any` |  |
| `start_date` | `str` |  |
| `status` | `Any` |  |
| `type` | `Any` |  |

#### Example: Load

```python
group_policy = client.GroupPolicy().load({"id": "group_policy_id"})
```

#### Example: List

```python
group_policys = client.GroupPolicy().list()
```


### GroupPolicyIntent

Create an instance: `group_policy_intent = client.GroupPolicyIntent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `None` |  |
| `cost_sharing` | `None` |  |
| `disclosures` | `list` |  |
| `due_date` | `None | str` |  |
| `group_id` | `str` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `plan_id` | `str` |  |
| `quote_intent_id` | `str` |  |
| `status` | `Any` |  |

#### Example: Load

```python
group_policy_intent = client.GroupPolicyIntent().load({"id": "group_policy_intent_id"})
```

#### Example: List

```python
group_policy_intents = client.GroupPolicyIntent().list()
```

#### Example: Create

```python
group_policy_intent = client.GroupPolicyIntent().create({
    "disclosures": [],  # list
    "group_id": "example_group_id",  # str
    "id": "example_id",  # str
    "plan_id": "example_plan_id",  # str
    "quote_intent_id": "example_quote_intent_id",  # str
    "status": "example_status",  # Any
})
```


### GroupPolicyIntentRequirementResponsePagedList

Create an instance: `group_policy_intent_requirement_response_paged_list = client.GroupPolicyIntentRequirementResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `is_fulfilled` | `bool` |  |
| `object` | `str` |  |
| `object_id` | `str` |  |
| `object_type` | `Any` |  |
| `requirement_type` | `Any` |  |

#### Example: List

```python
group_policy_intent_requirement_response_paged_lists = client.GroupPolicyIntentRequirementResponsePagedList().list({"id": "example"})
```


### GroupQuote

Create an instance: `group_quote = client.GroupQuote()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `family_type` | `None` |  |
| `member_count` | `None` |  |
| `member_selection` | `None` |  |
| `percentage` | `None` |  |
| `type` | `Any` |  |

#### Example: Load

```python
group_quote = client.GroupQuote().load({"group_quote_intent_id": "group_quote_intent_id"})
```


### GroupQuoteIntent

Create an instance: `group_quote_intent = client.GroupQuoteIntent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `None` |  |
| `consent_links` | `list` |  |
| `cost_sharing` | `None` |  |
| `disclosures` | `list` |  |
| `expected_start_date` | `None | str` |  |
| `group_id` | `str` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `plan_id` | `str` |  |
| `status` | `Any` |  |

#### Example: Load

```python
group_quote_intent = client.GroupQuoteIntent().load({"id": "group_quote_intent_id"})
```

#### Example: List

```python
group_quote_intents = client.GroupQuoteIntent().list()
```

#### Example: Create

```python
group_quote_intent = client.GroupQuoteIntent().create({
    "consent_links": [],  # list
    "disclosures": [],  # list
    "group_id": "example_group_id",  # str
    "id": "example_id",  # str
    "plan_id": "example_plan_id",  # str
    "status": "example_status",  # Any
})
```


### GroupQuoteIntentRequirementResponsePagedList

Create an instance: `group_quote_intent_requirement_response_paged_list = client.GroupQuoteIntentRequirementResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `str` |  |
| `is_fulfilled` | `bool` |  |
| `object` | `str` |  |
| `object_id` | `str` |  |
| `object_type` | `Any` |  |
| `requirement_type` | `Any` |  |

#### Example: List

```python
group_quote_intent_requirement_response_paged_lists = client.GroupQuoteIntentRequirementResponsePagedList().list({"id": "example"})
```


### Plan

Create an instance: `plan = client.Plan()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_from` | `str` |  |
| `available_to` | `None | str` |  |
| `country` | `Any` |  |
| `coverage_options` | `None | list` |  |
| `description` | `str` |  |
| `disclosures` | `list` |  |
| `documents` | `list` |  |
| `eligible_count` | `None | int` |  |
| `employee_eligibility_criteria` | `list` |  |
| `employer_eligibility_criteria` | `list` |  |
| `health_insurance` | `None` |  |
| `id` | `str` |  |
| `ineligible_count` | `None | int` |  |
| `name` | `str` |  |
| `object` | `str` |  |
| `provider` | `Any` |  |
| `total_count` | `None | int` |  |
| `type` | `Any` |  |

#### Example: Load

```python
plan = client.Plan().load({"id": "plan_id"})
```

#### Example: List

```python
plans = client.Plan().list()
```


### Policy

Create an instance: `policy = client.Policy()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bundling_type` | `Any` |  |
| `cancellation_date` | `None | str` |  |
| `disclosures` | `list` |  |
| `employee_id` | `str` |  |
| `end_date` | `None | str` |  |
| `group_id` | `str` |  |
| `group_policy_id` | `str` |  |
| `health_insurance` | `None` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `plan` | `Any` |  |
| `provider` | `Any` |  |
| `start_date` | `str` |  |
| `status` | `Any` |  |
| `type` | `Any` |  |

#### Example: Load

```python
policy = client.Policy().load({"id": "policy_id"})
```

#### Example: List

```python
policys = client.Policy().list()
```


### PolicyAmendmentIntent

Create an instance: `policy_amendment_intent = client.PolicyAmendmentIntent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amendment_reason` | `Any` |  |
| `disclosures` | `list` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `pending_confirmation` | `None` |  |
| `policy_id` | `str` |  |
| `processing_error` | `None` |  |
| `requested_changes` | `list` |  |
| `required_action` | `None` |  |
| `status` | `Any` |  |

#### Example: Load

```python
policy_amendment_intent = client.PolicyAmendmentIntent().load({"id": "policy_amendment_intent_id", "policy_id": "policy_id"})
```

#### Example: List

```python
policy_amendment_intents = client.PolicyAmendmentIntent().list({"id": "example_id"})
```

#### Example: Create

```python
policy_amendment_intent = client.PolicyAmendmentIntent().create({
    "id": "example_id",  # str
    "amendment_reason": "example_amendment_reason",  # Any
    "disclosures": [],  # list
    "policy_id": "example_policy_id",  # str
    "requested_changes": [],  # list
    "status": "example_status",  # Any
})
```


### PolicyImportIntent

Create an instance: `policy_import_intent = client.PolicyImportIntent()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_persons` | `list` |  |
| `employee_id` | `str` |  |
| `group_id` | `str` |  |
| `id` | `str` |  |
| `member_number` | `str` |  |
| `object` | `str` |  |
| `policy_end_date` | `None | str` |  |
| `policy_start_date` | `str` |  |
| `provider_policy_number` | `str` |  |
| `status` | `Any` |  |

#### Example: Load

```python
policy_import_intent = client.PolicyImportIntent().load({"id": "policy_import_intent_id"})
```

#### Example: List

```python
policy_import_intents = client.PolicyImportIntent().list()
```

#### Example: Create

```python
policy_import_intent = client.PolicyImportIntent().create({
    "associated_persons": [],  # list
    "employee_id": "example_employee_id",  # str
    "group_id": "example_group_id",  # str
    "id": "example_id",  # str
    "member_number": "example_member_number",  # str
    "policy_start_date": "example_policy_start_date",  # str
    "provider_policy_number": "example_provider_policy_number",  # str
    "status": "example_status",  # Any
})
```


### Provider

Create an instance: `provider = client.Provider()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `str` |  |
| `employer_platform_url` | `None | str` |  |
| `id` | `str` |  |
| `kota_hub_url` | `None | str` |  |
| `logo_url` | `str` |  |
| `name` | `str` |  |
| `object` | `str` |  |
| `support_phone` | `str` |  |
| `supported_countries` | `list` |  |
| `website_url` | `str` |  |

#### Example: Load

```python
provider = client.Provider().load({"id": "provider_id"})
```

#### Example: List

```python
providers = client.Provider().list()
```


### Replay

Create an instance: `replay = client.Replay()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deliveries` | `list` |  |
| `event_id` | `str` |  |

#### Example: Create

```python
replay = client.Replay().create({
    "event_id": "example_event_id",  # str
    "deliveries": [],  # list
})
```


### WebhookEndpoint

Create an instance: `webhook_endpoint = client.WebhookEndpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `endpoint_url` | `str` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `subscribed_events` | `list` |  |

#### Example: Load

```python
webhook_endpoint = client.WebhookEndpoint().load({"id": "webhook_endpoint_id"})
```


### WebhookEndpointResponsePagedList

Create an instance: `webhook_endpoint_response_paged_list = client.WebhookEndpointResponsePagedList()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` |  |
| `endpoint_url` | `str` |  |
| `id` | `str` |  |
| `object` | `str` |  |
| `subscribed_events` | `list` |  |

#### Example: List

```python
webhook_endpoint_response_paged_lists = client.WebhookEndpointResponsePagedList().list()
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

Features are the extension mechanism. A feature is a Python class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as dicts

The Python SDK uses plain dicts throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a dict.

### Module structure

```
py/
├── kota_sdk.py         -- Main SDK module
├── config.py                    -- Configuration
├── features.py                  -- Feature factory
├── core/                        -- Core types and context
├── entity/                      -- Entity implementations
├── feature/                     -- Built-in features (Base, Test, Log)
├── utility/                     -- Utility functions and struct library
└── test/                        -- Test suites
```

The main module (`kota_sdk`) exports the SDK class.
Import entity or utility modules directly only when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```python
dependentsmanagementintent = client.DependentsManagementIntent()
dependentsmanagementintent.load({"id": "example_id"})

# dependentsmanagementintent.data_get() now returns the dependentsmanagementintent data from the last load
# dependentsmanagementintent.match_get() returns the last match criteria
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
