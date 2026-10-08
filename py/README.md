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
release tag (`py/vX.Y.Z`, see [Tags](https://github.com/voxgig-sdk/kota-sdk/tags)) or
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

`list()` returns a `list` of entities, one per record, and raises on
error; an entity's `data_get()` reads its record (a `dict`).

```python
try:
    associatedpersons = client.AssociatedPerson().list({"employee_id": "example"})
    for associatedperson in associatedpersons:
        print(associatedperson.data_get())
except Exception as err:
    print(f"list failed: {err}")
```

### 3. Load an associatedperson

AssociatedPerson is nested under employee, so provide the `employee_id`.
`load()` returns the ENTITY — call data_get() for the record — and raises on error.

```python
try:
    associatedperson = client.AssociatedPerson().load({"employee_id": "example_employee_id", "id": "example_id"})
    print(associatedperson.data_get())
except Exception as err:
    print(f"load failed: {err}")
```

### 4. Create, update, and remove

```python
# Create — returns the ENTITY (call data_get() for the record)
created = client.AssociatedPerson().create({"employee_id": "example_employee_id", "date_of_birth": "example_date_of_birth", "first_name": "example_first_name", "id": "example_id", "last_name": "example_last_name", "relationship_type": "example_relationship_type", "sex_at_birth": "example_sex_at_birth"})

# Update — the created entity's record holds its id
client.AssociatedPerson().update({"id": created.data_get()["id"], "employee_id": "example_employee_id", "date_of_birth": "example_date_of_birth"})

# Remove
client.AssociatedPerson().remove({"id": created.data_get()["id"], "employee_id": "example_employee_id"})
```


## Error handling

Entity operations raise on failure, so wrap them in `try` / `except`:

```python
try:
    contributionreports = client.ContributionReport().list()
    print([item.data_get() for item in contributionreports])
except Exception as err:
    print(f"list failed: {err}")
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

# Entity ops return the entity, and list one per record; they raise on error.
contributionreport = client.ContributionReport().list()
# data_get() on an entity reads its mock response record
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
| `Salary` | `(data) -> SalaryEntity` | Create a Salary entity instance. |
| `WebhookEndpoint` | `(data) -> WebhookEndpointEntity` | Create a WebhookEndpoint entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any` | Load a single entity by match criteria, and return it. Raises on error. |
| `list` | `(reqmatch, ctrl) -> list` | List entities matching the criteria, one per record. Raises on error. |
| `create` | `(reqdata, ctrl) -> any` | Create a new entity, and return it. Raises on error. |
| `update` | `(reqdata, ctrl) -> any` | Update an existing entity, and return it. Raises on error. |
| `remove` | `(reqmatch, ctrl) -> any` | Remove an entity, and return it marked as deleted. Raises on error. |
| `data_get` | `() -> dict` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> dict` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> str` | Return the entity name. |

### Result shape

Entity operations return the entity, and `list` a `list` of entities, one
per record; an entity's `data_get()` reads its record (a `dict`). They raise
on error, so wrap calls in `try`/`except` to handle failures.

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
| `aggregates` | Summary figures for the report, meant for dashboards and overviews. |
| `created_at` | Date and time the report was created |
| `employer_id` | Unique identifier of the employer for which the report is created |
| `external_customer_id` | Unique identifier of the customer for which the report is created. |
| `file_id` | Identifier of the report's downloadable CSV file. |
| `file_status` | Whether the report's downloadable CSV is ready yet. |
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
| `id` |  |
| `last_updated_at` | Date and time of the last update to the breakdown |
| `object` | The object type |
| `period` | Period covered by the employee breakdown |
| `status` | Current status of the breakdown |

Operations: Load.

API path: `/contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}`

#### ContributionReportEmployeeBreakdownResponsePagedList

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List.

API path: `/contribution_reports/{contribution_report_id}/employee_breakdowns`

#### CreateHostedSessionToken

| Field | Description |
| --- | --- |
| `employee_id` |  |
| `employer_id` |  |
| `expiry` |  |
| `link` |  |

Operations: Create.

API path: `/hosted/sessions`

#### CreateSessionToken

| Field | Description |
| --- | --- |
| `employee_id` |  |
| `employer_id` |  |
| `expiry` |  |
| `external_customer_id` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `token` |  |

Operations: Create.

API path: `/embed/sessions`

#### Dependent

| Field | Description |
| --- | --- |
| `action_required` | Details of the action required from the caller. |
| `associated_person_ids` | List of associated person IDs to add as dependents. |
| `coverage_options` | Available member-scoped coverage options for the plan. |
| `dependent_coverage_selections` | Optional coverage selections per dependent. |
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
| `employee_id` | The employee to check eligibility for. |
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
| `applicable_collective_agreement` | Name of the collective agreement that applies to the employer's workforce, if any. |
| `contact` |  |
| `earliest_benefits_start_date` | The earliest date this employer is permitted to set up any benefits scheme. |
| `id` |  |
| `legal_address` | Treated as a single object that is updated entirely, `null` sub-fields (e.g. |
| `legal_name` | Legal name of the company. |
| `metadata` | Set of key-value pairs that you can attach to an object. |
| `object` | The object type |
| `offboard_on` |  |
| `platform_id` |  |
| `registration_number` | Company registration number. |
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
| `coverage_selections` | Optional plan coverage option selections for policy-scoped configurations. |
| `desired_policy_start_date` | The desired date for the employee's policy to start. |
| `disclosures` | Disclosures associated with this intent. |
| `employee_id` | Identifier for the employee associated with this enrolment intent. |
| `enrolment_date` | The date on which the employee agreed to enrol into the group's policies. |
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
| `id` |  |

Operations: List.

API path: `/enrolment_intents/{enrolment_intent_id}/requirements`

#### Event

| Field | Description |
| --- | --- |
| `api_version` |  |
| `created` |  |
| `data` |  |
| `id` |  |
| `platform_id` |  |
| `type` |  |

Operations: Create, List, Load.

API path: `/events/{event_id}/replay`

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
| `create_enrolment_intents` | Controls whether enrolment intents are automatically created for the employee. |
| `desired_policy_start_date` | The desired date for the employee's policy to start. |
| `eligibility_status` | Eligibility status for the employee in this group. |
| `employee_id` | Employee Id |
| `enrolment_date` | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | Enrolment status for the employee in this group. |
| `enrolments` | List of enrolments associated with the employee in this group. |
| `group_id` | Unique identifier for the group. |
| `id` | Unique identifier for the employee. |
| `object` | The object type |
| `policies` | List of policies associated with the employee in this group. |
| `policy_configuration` | Policy configuration for the employee in this group. |
| `scheduled_group_transitions` | List of scheduled group transitions for the employee. |

Operations: Create.

API path: `/groups/{group_id}/employees`

#### GroupEmployeeResponsePagedList

| Field | Description |
| --- | --- |
| `id` |  |

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
| `life_assurance` | Life assurance–specific fields (present when `type=life_assurance`). |
| `linked_group_policy_ids` | The other `group_policy` objects bought together with this one as a single scheme — the policies created from the same multi-level purchase. |
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
| `consent_approvals` | Consent approvals to record at the time of intent creation |
| `cost_sharing` | Cost sharing configuration for the policy intent. |
| `disclosures` | Disclosures associated with this intent. |
| `due_date` | Due date for the policy intent |
| `group_id` | Unique identifier for the group. |
| `group_policy_ids` | The group policies created for this intent, one per level, once they exist. |
| `id` | Unique identifier for the group policy intent |
| `items` | The benefits the accepted quote covers and the levels they were quoted at, echoed from the quote intent. |
| `object` | Object type identifier |
| `plan_id` | Unique identifier for the plan. |
| `quote_intent_id` | Unique identifier for the group quote intent this policy intent was created from |
| `status` | Current status of the group policy intent |
| `type` | Whether the accepted quote covers one (group, plan) pair or several levels. |

Operations: Create, List, Load.

API path: `/group_policy_intents`

#### GroupPolicyIntentRequirementResponsePagedList

| Field | Description |
| --- | --- |
| `id` |  |

Operations: List.

API path: `/group_policy_intents/{group_policy_intent_id}/requirements`

#### GroupQuote

| Field | Description |
| --- | --- |
| `breakdown` | What makes up the annual cost: the premium, and the insurance premium tax charged on it when there is any. |
| `cost_sharing` | Cost sharing configuration for the quote. |
| `currency` | Currency of the premium (e.g. |
| `employee_count` | Number of employees covered by the quote. |
| `expires_at` | When the quote expires |
| `generated_at` | When the quote was generated |
| `levels` | The priced levels of the quote, one per level of the intent — match them up by `group_id` and `plan_id` rather than by position. |
| `object` | Object type identifier |
| `pdf_expires_at` | When the PDF URL expires |
| `pdf_url` | URL to download the quote PDF. |
| `quote_pdfs` | The documents the provider issued for the quote as a whole. |
| `total_annual_premium` | Total annual premium for the group, excluding any insurance premium tax. |
| `total_monthly_premium` | Total monthly premium for the group, excluding any insurance premium tax. |

Operations: List.

API path: `/group_quote_intents/{group_quote_intent_id}/quote`

#### GroupQuoteIntent

| Field | Description |
| --- | --- |
| `action_required` | Details of the action required from the caller, if the intent is in action_required status. |
| `consent_links` | The statements the customer must accept to proceed, each a sentence and the documents it names. |
| `cost_sharing` | Cost sharing configuration for the quote. |
| `coverage_selections` | Plan coverage option selections for group-policy-scoped configurations. |
| `disclosures` | Disclosures associated with this intent. |
| `expected_start_date` | Expected start date for the insurance coverage |
| `group_id` | Unique identifier for the group. |
| `id` | Unique identifier for the group quote intent |
| `items` | The benefits this intent quotes and the levels they are quoted at. |
| `object` | Object type identifier |
| `plan_id` | Unique identifier for the plan. |
| `status` | Current status of the group quote intent |
| `type` | Whether the intent quotes one (group, plan) pair or several levels. |

Operations: Create, List, Load.

API path: `/group_quote_intents/{group_quote_intent_id}/reject`

#### GroupQuoteIntentRequirementResponsePagedList

| Field | Description |
| --- | --- |
| `id` |  |

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
| `indicative_pricing` | Average monthly guide prices used when exact catalog pricing is unavailable. |
| `ineligible_count` | Number of employees in the queried group ineligible for this plan as-of `start_date`. |
| `life_assurance` | Life assurance-specific details. |
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
| `life_assurance` | Life assurance–specific fields (present when `type=life_assurance`). |
| `object` | Object type |
| `opted_out_at` | UTC timestamp of the moment the member opted out of this policy during the cooling-off window. |
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

#### Salary

| Field | Description |
| --- | --- |
| `amount` | Salary amount, in the given currency and pay frequency |
| `currency` | ISO currency code the amount is denominated in |
| `effective_from` | Date from which this salary is effective |
| `employee_id` | Unique identifier for the employee this salary belongs to |
| `id` | Unique identifier for the salary record |
| `object` | The object type |
| `pay_frequency` | The period this amount represents (e.g. |

Operations: Create, List, Load, Remove.

API path: `/employees/{employee_id}/salaries`

#### WebhookEndpoint

| Field | Description |
| --- | --- |
| `created_at` | The date and time the endpoint was created |
| `endpoint_url` | The registered URL of the endpoint |
| `id` | The unique identifier of the endpoint |
| `object` | The object type |
| `subscribed_events` | The events the endpoint is subscribed to |

Operations: List, Load.

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
| `date_of_birth` | `str` | Date of birth of the associated person |
| `email` | `None | str` | Email address of the associated person |
| `employee_id` | `str` | Unique identifier for the employee this person is associated with |
| `first_name` | `str` | First name of the associated person |
| `id` | `str` | Unique identifier for the associated person |
| `last_name` | `str` | Last name of the associated person |
| `object` | `str` | The object type |
| `phone_number` | `None | str` | Phone number in E.164 international format (e.g. |
| `platform_id` | `str` | Unique identifier for the platform |
| `relationship_type` | `str` | The relationship type between the employee and the associated person |
| `sex_at_birth` | `str` | The sex assigned to the associated person at birth |

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
    "relationship_type": "example_relationship_type",  # str
    "sex_at_birth": "example_sex_at_birth",  # str
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
| `associated_person_id` | `str` | The associated person ID. |
| `date_of_birth` | `str` | Date of birth of the associated person. |
| `eligibility_status` | `str` | Eligibility status for the policy/plan. |
| `first_name` | `str` | First name of the associated person. |
| `ineligibility_reason` | `None | str` | Reason for ineligibility if status is ineligible. |
| `last_name` | `str` | Last name of the associated person. |
| `object` | `str` | The object type |
| `relationship` | `str` | Relationship type to the employee. |
| `sex_at_birth` | `str` | Sex at birth of the associated person. |

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
| `aggregates` | `Any` | Summary figures for the report, meant for dashboards and overviews. |
| `created_at` | `str` | Date and time the report was created |
| `employer_id` | `str` | Unique identifier of the employer for which the report is created |
| `external_customer_id` | `None | str` | Unique identifier of the customer for which the report is created. |
| `file_id` | `None | str` | Identifier of the report's downloadable CSV file. |
| `file_status` | `None` | Whether the report's downloadable CSV is ready yet. |
| `finalized_at` | `None | str` | Date and time the report was finalized, if applicable |
| `id` | `str` | Unique identifier for the contribution report |
| `last_updated_at` | `str` | Date and time of the last update to the report |
| `object` | `str` | The object type |
| `period` | `Any` | Period covered by the contribution report |
| `status` | `str` | Current status of the contribution report |

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
    "aggregates": "example_aggregates",  # Any
    "created_at": "example_created_at",  # str
    "employer_id": "example_employer_id",  # str
    "last_updated_at": "example_last_updated_at",  # str
    "period": "example_period",  # Any
    "status": "example_status",  # str
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
| `contribution_report_id` | `str` | Unique identifier of the related contribution report |
| `created_at` | `str` | Date and time the breakdown was created |
| `currency` | `str` | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `str` | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `str` | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `None | str` | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `None | str` | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `Any` | Health insurance contribution details |
| `id` | `str` |  |
| `last_updated_at` | `str` | Date and time of the last update to the breakdown |
| `object` | `str` | The object type |
| `period` | `Any` | Period covered by the employee breakdown |
| `status` | `str` | Current status of the breakdown |

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
| `id` | `str` |  |

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
| `employee_id` | `str` |  |
| `employer_id` | `str` |  |
| `expiry` | `str` |  |
| `link` | `str` |  |

#### Example: Create

```python
create_hosted_session_token = client.CreateHostedSessionToken().create({
    "employee_id": "example_employee_id",  # str
    "employer_id": "example_employer_id",  # str
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
| `employee_id` | `None | str` |  |
| `employer_id` | `str` |  |
| `expiry` | `str` |  |
| `external_customer_id` | `None | str` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `token` | `str` |  |

#### Example: Create

```python
create_session_token = client.CreateSessionToken().create({
    "employer_id": "example_employer_id",  # str
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
| `action_required` | `None` | Details of the action required from the caller. |
| `associated_person_ids` | `list` | List of associated person IDs to add as dependents. |
| `coverage_options` | `None | list` | Available member-scoped coverage options for the plan. |
| `dependent_coverage_selections` | `None | list` | Optional coverage selections per dependent. |
| `dependents` | `list` | List of dependents being managed. |
| `disclosures` | `list` | Disclosures associated with this intent. |
| `id` | `str` | Unique identifier for the dependents management intent. |
| `object` | `str` | Object type identifier. |
| `parent_intent_id` | `str` | The parent intent ID (e.g. |
| `parent_intent_type` | `str` | The type of parent intent. |
| `plan` | `Any` | Plan information including pricing details. |
| `status` | `str` | Current status of the dependents management intent. |

#### Example: Create

```python
dependent = client.Dependent().create({
    "dependents_management_intent_id": "example_dependents_management_intent_id",  # str
    "associated_person_ids": [],  # list
    "dependents": [],  # list
    "disclosures": [],  # list
    "id": "example_id",  # str
    "parent_intent_id": "example_parent_intent_id",  # str
    "parent_intent_type": "example_parent_intent_type",  # str
    "plan": "example_plan",  # Any
    "status": "example_status",  # str
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
| `action_required` | `None` | Details of the action required from the caller. |
| `coverage_options` | `None | list` | Available member-scoped coverage options for the plan. |
| `dependents` | `list` | List of dependents being managed. |
| `disclosures` | `list` | Disclosures associated with this intent. |
| `id` | `str` | Unique identifier for the dependents management intent. |
| `object` | `str` | Object type identifier. |
| `parent_intent_id` | `str` | The parent intent ID (e.g. |
| `parent_intent_type` | `str` | The type of parent intent. |
| `plan` | `Any` | Plan information including pricing details. |
| `status` | `str` | Current status of the dependents management intent. |

#### Example: Load

```python
dependents_management_intent = client.DependentsManagementIntent().load({"id": "dependents_management_intent_id"})
```

#### Example: Create

```python
dependents_management_intent = client.DependentsManagementIntent().create({
    "enrolment_intent_id": "example_enrolment_intent_id",  # str
    "dependents": [],  # list
    "disclosures": [],  # list
    "id": "example_id",  # str
    "parent_intent_id": "example_parent_intent_id",  # str
    "parent_intent_type": "example_parent_intent_type",  # str
    "plan": "example_plan",  # Any
    "status": "example_status",  # str
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
| `eligibility_status` | `str` | Eligibility status: `eligible` or `ineligible`. |
| `employee_id` | `str` | The employee to check eligibility for. |
| `object` | `str` | The object type. |
| `plan` | `Any` | The insurance plan associated with the group. |
| `provider` | `Any` | The insurance provider associated with the group. |
| `reasons` | `list` | List of reasons why the employee is ineligible. |

#### Example: Create

```python
eligibility_check = client.EligibilityCheck().create({
    "group_id": "example_group_id",  # str
    "eligibility_status": "example_eligibility_status",  # str
    "employee_id": "example_employee_id",  # str
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
| `bank_account` | `None` | Bank account details |
| `date_of_birth` | `str` | Date of birth of the employee |
| `earliest_benefits_start_date` | `None | str` | The earliest date this employee can be enrolled in any benefits. |
| `email` | `str` | Email address of the employee |
| `employer_id` | `str` | Unique identifier for the employer |
| `external_customer_id` | `None | str` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `first_name` | `str` | First name of the employee. |
| `home_address` | `None` | Location where the employee is legally registered to live |
| `id` | `str` | Unique identifier for the employee |
| `last_name` | `str` | Last name of the employee |
| `metadata` | `None | dict` | Set of key-value pairs that you can attach to an object. |
| `national_tax_id` | `str` | PPSN in Ireland, NINo in the UK, DNI/NIE in Spain |
| `nationality` | `None` | Nationality of the employee (e.g. |
| `object` | `str` | The object type |
| `offboard_on` | `None | str` | Date when the employee was or will be offboarded |
| `phone_number` | `None | str` | Phone number in E.164 international format (e.g. |
| `platform_id` | `str` | Unique identifier for the platform |
| `sex_at_birth` | `str` | The sex assigned to the employee at birth |
| `start_on` | `str` | Employment start date |
| `status` | `str` | Current status of the employee |

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
    "phone_number": "example_phone_number",  # None | str
    "sex_at_birth": "example_sex_at_birth",  # str
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
| `coverage_level` | `Any` | Details about the coverage level for the offer. |
| `employee_id` | `str` | The Id of the employee for which the offer is available |
| `employer_id` | `str` | The Id of the employer for which the offer is available |
| `external_customer_id` | `None | str` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `str` | Unique identifier for offer |
| `object` | `str` | The object type |
| `required_action` | `None` | Required action to progress the offer, if any. |
| `status` | `str` | Current status of offer |

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
| `coverage_level` | `Any` | Details about the coverage level for the offer. |
| `employee_id` | `str` | The Id of the employee for which the offer is available |
| `employer_id` | `str` | The Id of the employer for which the offer is available |
| `external_customer_id` | `None | str` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `str` | Unique identifier for offer |
| `object` | `str` | The object type |
| `required_action` | `None` | Required action to progress the offer, if any. |
| `status` | `str` | Current status of offer |

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
| `cancellation_date` | `None | str` | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `Any` | Represents the current coverage level for the policy |
| `employee_id` | `str` | The Id of the employee for which the policy is created |
| `employer_id` | `str` | The Id of the employer for which the policy is created |
| `end_date` | `str` | Policy ends on this date |
| `enrolled_dependants_count` | `int` | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `str` | Enrolment type of the policy |
| `estimated_gross_premium` | `Any` | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `None | str` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `str` | Unique identifier for policy |
| `object` | `str` | The object type |
| `opt_out_deadline_date` | `str` | Last day to opt out from the policy |
| `policy_number` | `None | str` | Health insurance policy number, if available |
| `renewal` | `Any` | Renewal information for the policy |
| `start_date` | `str` | Policy starts on this date |
| `status` | `str` | Current status of policy |

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
| `cancellation_date` | `None | str` | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `Any` | Represents the current coverage level for the policy |
| `employee_id` | `str` | The Id of the employee for which the policy is created |
| `employer_id` | `str` | The Id of the employer for which the policy is created |
| `end_date` | `str` | Policy ends on this date |
| `enrolled_dependants_count` | `int` | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `str` | Enrolment type of the policy |
| `estimated_gross_premium` | `Any` | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `None | str` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `str` | Unique identifier for policy |
| `object` | `str` | The object type |
| `opt_out_deadline_date` | `str` | Last day to opt out from the policy |
| `policy_number` | `None | str` | Health insurance policy number, if available |
| `renewal` | `Any` | Renewal information for the policy |
| `start_date` | `str` | Policy starts on this date |
| `status` | `str` | Current status of policy |

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
| `applicable_collective_agreement` | `None | str` | Name of the collective agreement that applies to the employer's workforce, if any. |
| `contact` | `Any` |  |
| `earliest_benefits_start_date` | `None | str` | The earliest date this employer is permitted to set up any benefits scheme. |
| `id` | `str` |  |
| `legal_address` | `Any` | Treated as a single object that is updated entirely, `null` sub-fields (e.g. |
| `legal_name` | `str` | Legal name of the company. |
| `metadata` | `None | dict` | Set of key-value pairs that you can attach to an object. |
| `object` | `str` | The object type |
| `offboard_on` | `None | str` |  |
| `platform_id` | `str` |  |
| `registration_number` | `None | str` | Company registration number. |
| `status` | `str` |  |

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
| `cancellation_date` | `None | str` | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `list` | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `int` | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `str` | The Id of the employer for which the policy is created |
| `end_date` | `str` | Policy ends on this date |
| `enrolment_type` | `str` | Enrolment type of the policy |
| `group_policy_number` | `None | str` | Group’s health insurance policy number, if available |
| `id` | `str` | Unique identifier for policy |
| `object` | `str` | The object type |
| `renewal` | `Any` | Renewal information for the policy |
| `start_date` | `str` | Policy starts on this date |
| `status` | `str` | Current status of policy |

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
| `cancellation_date` | `None | str` | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `list` | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `int` | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `str` | The Id of the employer for which the policy is created |
| `end_date` | `str` | Policy ends on this date |
| `enrolment_type` | `str` | Enrolment type of the policy |
| `group_policy_number` | `None | str` | Group’s health insurance policy number, if available |
| `id` | `str` | Unique identifier for policy |
| `object` | `str` | The object type |
| `renewal` | `Any` | Renewal information for the policy |
| `start_date` | `str` | Policy starts on this date |
| `status` | `str` | Current status of policy |

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
| `coverage_levels` | `list` | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `str` | The Id of the employer for which the is created |
| `id` | `str` | Unique identifier for the quote |
| `object` | `str` | The object type |
| `quoted_at` | `str` | Date and time the quote was created at |
| `required_action` | `None` | Actions required by the employer to proceed with the quote. |
| `status` | `str` | Current status of the quote |

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
| `coverage_levels` | `list` | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `str` | The Id of the employer for which the is created |
| `id` | `str` | Unique identifier for the quote |
| `object` | `str` | The object type |
| `quoted_at` | `str` | Date and time the quote was created at |
| `required_action` | `None` | Actions required by the employer to proceed with the quote. |
| `status` | `str` | Current status of the quote |

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
| `action_required` | `None` | If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment. |
| `coverage_selections` | `None | list` | Optional plan coverage option selections for policy-scoped configurations. |
| `desired_policy_start_date` | `None | str` | The desired date for the employee's policy to start. |
| `disclosures` | `list` | Disclosures associated with this intent. |
| `employee_id` | `str` | Identifier for the employee associated with this enrolment intent. |
| `enrolment_date` | `None | str` | The date on which the employee agreed to enrol into the group's policies. |
| `force_confirmation` | `bool` | If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. |
| `group_id` | `str` | Identifier for the group associated with this enrolment intent. |
| `id` | `str` | Unique identifier for the enrolment intent. |
| `ineligibility_reason` | `None` | If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility. |
| `object` | `str` | Object type identifier. |
| `pending_confirmation` | `None` | If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state. |
| `policy_configuration` | `None` | Policy configuration associated with this enrolment intent. |
| `policy_enrolments` | `list` | Policy enrolment information |
| `status` | `str` | Current status of the enrolment intent. |

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
    "status": "example_status",  # str
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

#### Example: List

```python
enrolment_intent_requirement_response_paged_lists = client.EnrolmentIntentRequirementResponsePagedList().list({"id": "example"})
```


### Event

Create an instance: `event = client.Event()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_version` | `str` |  |
| `created` | `str` |  |
| `data` | `None` |  |
| `id` | `str` |  |
| `platform_id` | `str` |  |
| `type` | `str` |  |

#### Example: Load

```python
event = client.Event().load({"id": "event_id"})
```

#### Example: List

```python
events = client.Event().list()
```

#### Example: Create

```python
event = client.Event().create({
    "id": "example_id",  # str
    "created": "example_created",  # str
    "data": None,  # None
    "platform_id": "example_platform_id",  # str
    "type": "example_type",  # str
})
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
| `description` | `None | str` | Short description of the purpose or scope of the `group`. |
| `employer_id` | `str` | Identifier for the `employer` that owns this `group`. |
| `enrolment_type` | `str` | Indicates how employees are enrolled into the group. |
| `group_policy_ids` | `list` | Group policy unique identifiers associated with this group. |
| `group_policy_intent_ids` | `list` | Group policy intent unique identifiers associated with this group. |
| `group_quote_intent_ids` | `list` | Group quote intent unique identifiers associated with this group. |
| `group_type` | `str` | Indicates how policies are organized for this group. |
| `id` | `str` | Unique identifier for the `group`. |
| `name` | `str` | Human-readable name of the `group`. |
| `object` | `str` | The object type |
| `status` | `str` | Current lifecycle state of the `group`, indicating its current progress. |

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
    "enrolment_type": "example_enrolment_type",  # str
    "group_policy_ids": [],  # list
    "group_policy_intent_ids": [],  # list
    "group_quote_intent_ids": [],  # list
    "group_type": "example_group_type",  # str
    "id": "example_id",  # str
    "name": "example_name",  # str
    "status": "example_status",  # str
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
| `create_enrolment_intents` | `None | bool` | Controls whether enrolment intents are automatically created for the employee. |
| `desired_policy_start_date` | `None | str` | The desired date for the employee's policy to start. |
| `eligibility_status` | `str` | Eligibility status for the employee in this group. |
| `employee_id` | `str` | Employee Id |
| `enrolment_date` | `None | str` | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `str` | Enrolment status for the employee in this group. |
| `enrolments` | `list` | List of enrolments associated with the employee in this group. |
| `group_id` | `str` | Unique identifier for the group. |
| `id` | `str` | Unique identifier for the employee. |
| `object` | `str` | The object type |
| `policies` | `list` | List of policies associated with the employee in this group. |
| `policy_configuration` | `None` | Policy configuration for the employee in this group. |
| `scheduled_group_transitions` | `list` | List of scheduled group transitions for the employee. |

#### Example: Create

```python
group_employee = client.GroupEmployee().create({
    "id": "example_id",  # str
    "eligibility_status": "example_eligibility_status",  # str
    "employee_id": "example_employee_id",  # str
    "enrolment_status": "example_enrolment_status",  # str
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
| `id` | `str` |  |

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
| `cancellation_date` | `None | str` | Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable. |
| `disclosures` | `list` | Disclosures associated with this group policy. |
| `employer_id` | `str` | Identifier for the employer associated with this group policy. |
| `end_date` | `None | str` | Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended. |
| `group_id` | `str` | Identifier for the group associated with this group policy. |
| `health_insurance` | `None` | Health insurance–specific fields (present when `type=health_insurance`). |
| `id` | `str` | Unique identifier for the group policy. |
| `life_assurance` | `None` | Life assurance–specific fields (present when `type=life_assurance`). |
| `linked_group_policy_ids` | `list` | The other `group_policy` objects bought together with this one as a single scheme — the policies created from the same multi-level purchase. |
| `object` | `str` | The object type |
| `plan` | `Any` | Plan information for this policy |
| `provider` | `Any` | Provider information for this policy. |
| `start_date` | `str` | Policy start (effective) date in ISO 8601 (YYYY-MM-DD). |
| `status` | `str` | Current lifecycle state of the `group_policy`, indicating its progress from creation to activation. |
| `type` | `str` | Policy type. |

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
| `action_required` | `None` | Details of the required action when the intent is in ActionRequired status. |
| `consent_approvals` | `None | list` | Consent approvals to record at the time of intent creation |
| `cost_sharing` | `None` | Cost sharing configuration for the policy intent. |
| `disclosures` | `list` | Disclosures associated with this intent. |
| `due_date` | `None | str` | Due date for the policy intent |
| `group_id` | `None | str` | Unique identifier for the group. |
| `group_policy_ids` | `list` | The group policies created for this intent, one per level, once they exist. |
| `id` | `str` | Unique identifier for the group policy intent |
| `items` | `list` | The benefits the accepted quote covers and the levels they were quoted at, echoed from the quote intent. |
| `object` | `str` | Object type identifier |
| `plan_id` | `None | str` | Unique identifier for the plan. |
| `quote_intent_id` | `str` | Unique identifier for the group quote intent this policy intent was created from |
| `status` | `str` | Current status of the group policy intent |
| `type` | `None` | Whether the accepted quote covers one (group, plan) pair or several levels. |

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
    "group_id": "example_group_id",  # None | str
    "group_policy_ids": [],  # list
    "id": "example_id",  # str
    "items": [],  # list
    "plan_id": "example_plan_id",  # None | str
    "quote_intent_id": "example_quote_intent_id",  # str
    "status": "example_status",  # str
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

#### Example: List

```python
group_policy_intent_requirement_response_paged_lists = client.GroupPolicyIntentRequirementResponsePagedList().list({"id": "example"})
```


### GroupQuote

Create an instance: `group_quote = client.GroupQuote()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `breakdown` | `list` | What makes up the annual cost: the premium, and the insurance premium tax charged on it when there is any. |
| `cost_sharing` | `None` | Cost sharing configuration for the quote. |
| `currency` | `str` | Currency of the premium (e.g. |
| `employee_count` | `int` | Number of employees covered by the quote. |
| `expires_at` | `str` | When the quote expires |
| `generated_at` | `str` | When the quote was generated |
| `levels` | `list` | The priced levels of the quote, one per level of the intent — match them up by `group_id` and `plan_id` rather than by position. |
| `object` | `str` | Object type identifier |
| `pdf_expires_at` | `None | str` | When the PDF URL expires |
| `pdf_url` | `None | str` | URL to download the quote PDF. |
| `quote_pdfs` | `list` | The documents the provider issued for the quote as a whole. |
| `total_annual_premium` | `float` | Total annual premium for the group, excluding any insurance premium tax. |
| `total_monthly_premium` | `float` | Total monthly premium for the group, excluding any insurance premium tax. |

#### Example: List

```python
group_quotes = client.GroupQuote().list({"group_quote_intent_id": "example"})
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
| `action_required` | `None` | Details of the action required from the caller, if the intent is in action_required status. |
| `consent_links` | `list` | The statements the customer must accept to proceed, each a sentence and the documents it names. |
| `cost_sharing` | `None` | Cost sharing configuration for the quote. |
| `coverage_selections` | `None | list` | Plan coverage option selections for group-policy-scoped configurations. |
| `disclosures` | `list` | Disclosures associated with this intent. |
| `expected_start_date` | `None | str` | Expected start date for the insurance coverage |
| `group_id` | `None | str` | Unique identifier for the group. |
| `id` | `str` | Unique identifier for the group quote intent |
| `items` | `list` | The benefits this intent quotes and the levels they are quoted at. |
| `object` | `str` | Object type identifier |
| `plan_id` | `None | str` | Unique identifier for the plan. |
| `status` | `str` | Current status of the group quote intent |
| `type` | `None` | Whether the intent quotes one (group, plan) pair or several levels. |

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
    "group_id": "example_group_id",  # None | str
    "id": "example_id",  # str
    "items": [],  # list
    "plan_id": "example_plan_id",  # None | str
    "status": "example_status",  # str
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
| `available_from` | `str` | The date from which this plan is available (inclusive). |
| `available_to` | `None | str` | The date until which this plan is available (inclusive). |
| `country` | `str` | The country this plan is available in. |
| `coverage_options` | `None | list` | Coverage options available for this plan, organized by scope and input type. |
| `description` | `str` | Description of the plan. |
| `disclosures` | `list` | Disclosures associated with this plan. |
| `documents` | `list` | List of plan documents (e.g., IPIDs, T&Cs). |
| `eligible_count` | `None | int` | Number of employees in the queried group eligible for this plan as-of `start_date`. |
| `employee_eligibility_criteria` | `list` | Eligibility criteria that employees must meet. |
| `employer_eligibility_criteria` | `list` | Eligibility criteria that employers must meet. |
| `health_insurance` | `None` | Health insurance-specific details. |
| `id` | `str` | Unique identifier for the plan. |
| `indicative_pricing` | `None` | Average monthly guide prices used when exact catalog pricing is unavailable. |
| `ineligible_count` | `None | int` | Number of employees in the queried group ineligible for this plan as-of `start_date`. |
| `life_assurance` | `None` | Life assurance-specific details. |
| `name` | `str` | The name of the plan. |
| `object` | `str` | Object type. |
| `provider` | `Any` | The provider offering this plan. |
| `total_count` | `None | int` | Total employees in the queried group. |
| `type` | `str` | The benefit type of the plan. |

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
| `bundling_type` | `str` | Indicates how this policy is bundled within a group |
| `cancellation_date` | `None | str` | Date the policy was cancelled (if applicable) |
| `disclosures` | `list` | Disclosures associated with this policy. |
| `employee_id` | `str` | Identifier of the employee associated with this policy. |
| `end_date` | `None | str` | Policy end date (inclusive) in ISO 8601, or null if open-ended |
| `group_id` | `str` | Identifier of the group associated with this policy. |
| `group_policy_id` | `str` | Identifier of the group policy id associated with this policy. |
| `health_insurance` | `None` | Health insurance–specific fields (present when `type=health_insurance`) |
| `id` | `str` | Unique identifier for the policy. |
| `life_assurance` | `None` | Life assurance–specific fields (present when `type=life_assurance`). |
| `object` | `str` | Object type |
| `opted_out_at` | `None | str` | UTC timestamp of the moment the member opted out of this policy during the cooling-off window. |
| `plan` | `Any` | Plan information for this policy |
| `provider` | `Any` | Provider information for this policy |
| `start_date` | `str` | Policy start (effective) date in ISO 8601 (YYYY-MM-DD) |
| `status` | `str` | Current lifecycle state of the policy |
| `type` | `str` | Policy type. |

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
| `amendment_reason` | `Any` | The reason for the policy amendment. |
| `disclosures` | `list` | Disclosures associated with this intent. |
| `id` | `str` | Unique identifier for the policy amendment intent. |
| `object` | `str` | Object type identifier. |
| `pending_confirmation` | `None` | Information about the pending confirmation if the intent status is `pending_confirmation`. |
| `policy_id` | `str` | The policy ID for which the amendment is requested. |
| `processing_error` | `None` | Information about the processing error if the intent status is `processing_error`. |
| `requested_changes` | `list` | List of requested changes to the policy. |
| `required_action` | `None` | Information about the required action if the intent status is `action_required`. |
| `status` | `str` | Current status of the policy amendment intent. |

#### Example: Load

```python
policy_amendment_intent = client.PolicyAmendmentIntent().load({"id": "policy_amendment_intent_id", "policy_id": "policy_id"})
```

#### Example: List

```python
policy_amendment_intents = client.PolicyAmendmentIntent().list({"id": "example"})
```

#### Example: Create

```python
policy_amendment_intent = client.PolicyAmendmentIntent().create({
    "id": "example_id",  # str
    "amendment_reason": "example_amendment_reason",  # Any
    "disclosures": [],  # list
    "policy_id": "example_policy_id",  # str
    "requested_changes": [],  # list
    "status": "example_status",  # str
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
| `associated_persons` | `list` | List of associated persons linked to this policy import. |
| `employee_id` | `str` | The employee ID for the policy import. |
| `group_id` | `str` | The group ID for the policy import. |
| `id` | `str` | Unique identifier for the policy import intent. |
| `member_number` | `str` | The member number assigned by the provider. |
| `object` | `str` | Object type identifier. |
| `policy_end_date` | `None | str` | The end date of the policy. |
| `policy_start_date` | `str` | The start date of the policy. |
| `provider_policy_number` | `str` | The provider's policy number. |
| `status` | `str` | Current status of the policy import intent. |

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
    "status": "example_status",  # str
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
| `description` | `str` | Description of the provider. |
| `employer_platform_url` | `None | str` | URL to the employer portal/platform for this provider, if available. |
| `id` | `str` | Unique identifier for the provider. |
| `kota_hub_url` | `None | str` | URL to the Kota Hub page for this platform, if configured. |
| `logo_url` | `str` | URL to the provider's logo image. |
| `name` | `str` | The name of the provider. |
| `object` | `str` | Object type. |
| `support_phone` | `str` | Customer support phone number. |
| `supported_countries` | `list` | List of countries supported by this provider. |
| `website_url` | `str` | The provider's main website URL. |

#### Example: Load

```python
provider = client.Provider().load({"id": "provider_id"})
```

#### Example: List

```python
providers = client.Provider().list()
```


### Salary

Create an instance: `salary = client.Salary()`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amount` | `float` | Salary amount, in the given currency and pay frequency |
| `currency` | `str` | ISO currency code the amount is denominated in |
| `effective_from` | `str` | Date from which this salary is effective |
| `employee_id` | `str` | Unique identifier for the employee this salary belongs to |
| `id` | `str` | Unique identifier for the salary record |
| `object` | `str` | The object type |
| `pay_frequency` | `str` | The period this amount represents (e.g. |

#### Example: Load

```python
salary = client.Salary().load({"id": "salary_id", "employee_id": "employee_id"})
```

#### Example: List

```python
salarys = client.Salary().list({"employee_id": "example"})
```

#### Example: Create

```python
salary = client.Salary().create({
    "employee_id": "example_employee_id",  # str
    "amount": 1,  # float
    "currency": "example_currency",  # str
    "effective_from": "example_effective_from",  # str
    "id": "example_id",  # str
    "pay_frequency": "example_pay_frequency",  # str
})
```


### WebhookEndpoint

Create an instance: `webhook_endpoint = client.WebhookEndpoint()`

#### Operations

| Method | Description |
| --- | --- |
| `list()` | List entities, optionally matching the given criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `str` | The date and time the endpoint was created |
| `endpoint_url` | `str` | The registered URL of the endpoint |
| `id` | `str` | The unique identifier of the endpoint |
| `object` | `str` | The object type |
| `subscribed_events` | `list` | The events the endpoint is subscribed to |

#### Example: Load

```python
webhook_endpoint = client.WebhookEndpoint().load({"id": "webhook_endpoint_id"})
```

#### Example: List

```python
webhook_endpoints = client.WebhookEndpoint().list()
```

## Features

This SDK ships 8 optional features. Each is **inactive until you
switch it on**, so an SDK you have not configured behaves exactly as if none of
them existed — no retries, no cache, no logging, no measurable overhead.

Activate a feature by name in the client options, alongside the options shown
above:

| Feature | What it does |
|---|---|
| [`debug`](#debug) | Debug capture |
| [`idempotency`](#idempotency) | Idempotency |
| [`metrics`](#metrics) | Metrics |
| [`paging`](#paging) | Paging |
| [`ratelimit`](#ratelimit) | Rate limiting |
| [`retry`](#retry) | Retry |
| [`test`](#test) | Test transport |
| [`timeout`](#timeout) | Timeout |

> **Order matters for `ratelimit`, `retry`, `timeout`.** These wrap the
> transport, so each one wraps whatever is already installed: the order you
> activate them in IS the nesting order. Activating them as an ordered list
> rather than a map is what fixes that order.

### debug

Debug capture.

| Option | Default |
|---|---|
| `active` | `false` |
| `max` | `100` |
| `redact` | `['authorization', 'cookie', 'set-cookie', 'api-key', 'apikey', 'x-api-key', 'idempotency-key']` |

Set `feature.debug.active` to enable it, then override any of the options above.

### idempotency

Idempotency.

| Option | Default |
|---|---|
| `active` | `false` |
| `header` | `'Idempotency-Key'` |
| `methods` | `['POST', 'PUT', 'PATCH', 'DELETE']` |
| `ops` | `['create', 'update', 'remove']` |

Set `feature.idempotency.active` to enable it, then override any of the options above.

### metrics

Metrics.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.metrics.active` to enable it, then override any of the options above.

### paging

Paging.

| Option | Default |
|---|---|
| `active` | `false` |
| `afterVar` | `'after'` |
| `cursorParam` | `'cursor'` |
| `firstVar` | `'first'` |
| `limitParam` | `'limit'` |
| `pageParam` | `'page'` |
| `startPage` | `1` |

Set `feature.paging.active` to enable it, then override any of the options above.

### ratelimit

Rate limiting.

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

Set `feature.ratelimit.active` to enable it, then override any of the options above.

`ratelimit` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### retry

Retry.

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

Set `feature.retry.active` to enable it, then override any of the options above.

`retry` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.

### test

Test transport.

| Option | Default |
|---|---|
| `active` | `false` |

Set `feature.test.active` to enable it, then override any of the options above.

### timeout

Timeout.

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

Set `feature.timeout.active` to enable it, then override any of the options above.

`timeout` wraps the transport, so its position among the other
transport features decides what it sees. A feature activated later wraps one
activated earlier.


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

- **DebugFeature**: Debug capture
- **IdempotencyFeature**: Idempotency
- **MetricsFeature**: Metrics
- **PagingFeature**: Paging
- **RatelimitFeature**: Rate limiting
- **RetryFeature**: Retry
- **TestFeature**: Test transport
- **TimeoutFeature**: Timeout

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
├── schema.py                    -- Generated option + entity specs
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

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```python
contributionreport = client.ContributionReport()
contributionreport.list()

# contributionreport.data_get() now returns the contributionreport data from the last list
# contributionreport.match_get() returns the last match criteria
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
