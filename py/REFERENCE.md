# Kota Python SDK Reference

Complete API reference for the Kota Python SDK.


## KotaSDK

### Constructor

```python
from kota_sdk import KotaSDK

client = KotaSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `KotaSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = KotaSDK.test()
```


### Instance Methods

#### `AssociatedPerson(data=None)`

Create a new `AssociatedPersonEntity` instance. Pass `None` for no initial data.

#### `AssociatedPersonEligibilityResponsePagedList(data=None)`

Create a new `AssociatedPersonEligibilityResponsePagedListEntity` instance. Pass `None` for no initial data.

#### `ContributionReport(data=None)`

Create a new `ContributionReportEntity` instance. Pass `None` for no initial data.

#### `ContributionReportEmployeeBreakdown(data=None)`

Create a new `ContributionReportEmployeeBreakdownEntity` instance. Pass `None` for no initial data.

#### `ContributionReportEmployeeBreakdownResponsePagedList(data=None)`

Create a new `ContributionReportEmployeeBreakdownResponsePagedListEntity` instance. Pass `None` for no initial data.

#### `CreateHostedSessionToken(data=None)`

Create a new `CreateHostedSessionTokenEntity` instance. Pass `None` for no initial data.

#### `CreateSessionToken(data=None)`

Create a new `CreateSessionTokenEntity` instance. Pass `None` for no initial data.

#### `Dependent(data=None)`

Create a new `DependentEntity` instance. Pass `None` for no initial data.

#### `DependentsManagementIntent(data=None)`

Create a new `DependentsManagementIntentEntity` instance. Pass `None` for no initial data.

#### `EligibilityCheck(data=None)`

Create a new `EligibilityCheckEntity` instance. Pass `None` for no initial data.

#### `Employee(data=None)`

Create a new `EmployeeEntity` instance. Pass `None` for no initial data.

#### `EmployeeHealthInsuranceOffer(data=None)`

Create a new `EmployeeHealthInsuranceOfferEntity` instance. Pass `None` for no initial data.

#### `EmployeeHealthInsuranceOfferResponsePagedList(data=None)`

Create a new `EmployeeHealthInsuranceOfferResponsePagedListEntity` instance. Pass `None` for no initial data.

#### `EmployeeHealthInsurancePolicy(data=None)`

Create a new `EmployeeHealthInsurancePolicyEntity` instance. Pass `None` for no initial data.

#### `EmployeeHealthInsurancePolicyResponsePagedList(data=None)`

Create a new `EmployeeHealthInsurancePolicyResponsePagedListEntity` instance. Pass `None` for no initial data.

#### `Employer(data=None)`

Create a new `EmployerEntity` instance. Pass `None` for no initial data.

#### `EmployerHealthInsurancePolicy(data=None)`

Create a new `EmployerHealthInsurancePolicyEntity` instance. Pass `None` for no initial data.

#### `EmployerHealthInsurancePolicyResponsePagedList(data=None)`

Create a new `EmployerHealthInsurancePolicyResponsePagedListEntity` instance. Pass `None` for no initial data.

#### `EmployerHealthInsuranceQuote(data=None)`

Create a new `EmployerHealthInsuranceQuoteEntity` instance. Pass `None` for no initial data.

#### `EmployerHealthInsuranceQuoteResponsePagedList(data=None)`

Create a new `EmployerHealthInsuranceQuoteResponsePagedListEntity` instance. Pass `None` for no initial data.

#### `EnrolmentIntent(data=None)`

Create a new `EnrolmentIntentEntity` instance. Pass `None` for no initial data.

#### `EnrolmentIntentRequirementResponsePagedList(data=None)`

Create a new `EnrolmentIntentRequirementResponsePagedListEntity` instance. Pass `None` for no initial data.

#### `Event(data=None)`

Create a new `EventEntity` instance. Pass `None` for no initial data.

#### `Group(data=None)`

Create a new `GroupEntity` instance. Pass `None` for no initial data.

#### `GroupEmployee(data=None)`

Create a new `GroupEmployeeEntity` instance. Pass `None` for no initial data.

#### `GroupEmployeeResponsePagedList(data=None)`

Create a new `GroupEmployeeResponsePagedListEntity` instance. Pass `None` for no initial data.

#### `GroupPolicy(data=None)`

Create a new `GroupPolicyEntity` instance. Pass `None` for no initial data.

#### `GroupPolicyIntent(data=None)`

Create a new `GroupPolicyIntentEntity` instance. Pass `None` for no initial data.

#### `GroupPolicyIntentRequirementResponsePagedList(data=None)`

Create a new `GroupPolicyIntentRequirementResponsePagedListEntity` instance. Pass `None` for no initial data.

#### `GroupQuote(data=None)`

Create a new `GroupQuoteEntity` instance. Pass `None` for no initial data.

#### `GroupQuoteIntent(data=None)`

Create a new `GroupQuoteIntentEntity` instance. Pass `None` for no initial data.

#### `GroupQuoteIntentRequirementResponsePagedList(data=None)`

Create a new `GroupQuoteIntentRequirementResponsePagedListEntity` instance. Pass `None` for no initial data.

#### `Plan(data=None)`

Create a new `PlanEntity` instance. Pass `None` for no initial data.

#### `Policy(data=None)`

Create a new `PolicyEntity` instance. Pass `None` for no initial data.

#### `PolicyAmendmentIntent(data=None)`

Create a new `PolicyAmendmentIntentEntity` instance. Pass `None` for no initial data.

#### `PolicyImportIntent(data=None)`

Create a new `PolicyImportIntentEntity` instance. Pass `None` for no initial data.

#### `Provider(data=None)`

Create a new `ProviderEntity` instance. Pass `None` for no initial data.

#### `Replay(data=None)`

Create a new `ReplayEntity` instance. Pass `None` for no initial data.

#### `WebhookEndpoint(data=None)`

Create a new `WebhookEndpointEntity` instance. Pass `None` for no initial data.

#### `WebhookEndpointResponsePagedList(data=None)`

Create a new `WebhookEndpointResponsePagedListEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## AssociatedPersonEntity

```python
associated_person = client.AssociatedPerson()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date_of_birth` | `str` | Yes |  |
| `email` | `None | str` | No |  |
| `employee_id` | `str` | Yes |  |
| `first_name` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `last_name` | `str` | Yes |  |
| `object` | `str` | No |  |
| `phone_number` | `None | str` | No |  |
| `platform_id` | `str` | No |  |
| `relationship_type` | `Any` | Yes |  |
| `sex_at_birth` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.AssociatedPerson().create({
    "employee_id": "example_employee_id",  # str
    "date_of_birth": "example_date_of_birth",  # str
    "first_name": "example_first_name",  # str
    "id": "example_id",  # str
    "last_name": "example_last_name",  # str
    "relationship_type": "example_relationship_type",  # Any
    "sex_at_birth": "example_sex_at_birth",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AssociatedPerson().list({"employee_id": "example"})
for associated_person in results:
    print(associated_person)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.AssociatedPerson().load({"id": "associated_person_id", "employee_id": "employee_id"})
```

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.AssociatedPerson().remove({"id": "associated_person_id", "employee_id": "employee_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.AssociatedPerson().update({
    "id": "associated_person_id",
    "employee_id": "employee_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssociatedPersonEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## AssociatedPersonEligibilityResponsePagedListEntity

```python
associated_person_eligibility_response_paged_list = client.AssociatedPersonEligibilityResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_person_id` | `str` | Yes |  |
| `date_of_birth` | `str` | Yes |  |
| `eligibility_status` | `Any` | Yes |  |
| `first_name` | `str` | Yes |  |
| `ineligibility_reason` | `None | str` | No |  |
| `last_name` | `str` | Yes |  |
| `object` | `str` | No |  |
| `relationship` | `Any` | Yes |  |
| `sex_at_birth` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.AssociatedPersonEligibilityResponsePagedList().list({"dependents_management_intent_id": "example"})
for associated_person_eligibility_response_paged_list in results:
    print(associated_person_eligibility_response_paged_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssociatedPersonEligibilityResponsePagedListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContributionReportEntity

```python
contribution_report = client.ContributionReport()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `employer_id` | `str` | Yes |  |
| `external_customer_id` | `None | str` | No |  |
| `finalized_at` | `None | str` | No |  |
| `id` | `str` | Yes |  |
| `last_updated_at` | `str` | Yes |  |
| `object` | `str` | No |  |
| `period` | `Any` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.ContributionReport().create({
    "id": "example_id",  # str
    "created_at": "example_created_at",  # str
    "employer_id": "example_employer_id",  # str
    "last_updated_at": "example_last_updated_at",  # str
    "period": "example_period",  # Any
    "status": "example_status",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ContributionReport().list()
for contribution_report in results:
    print(contribution_report)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ContributionReport().load({"id": "contribution_report_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContributionReportEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContributionReportEmployeeBreakdownEntity

```python
contribution_report_employee_breakdown = client.ContributionReportEmployeeBreakdown()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contribution_report_id` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `currency` | `Any` | Yes |  |
| `employee_id` | `str` | Yes |  |
| `employer_id` | `str` | Yes |  |
| `external_customer_id` | `None | str` | No |  |
| `finalized_at` | `None | str` | No |  |
| `health_insurance` | `Any` | Yes |  |
| `last_updated_at` | `str` | Yes |  |
| `object` | `str` | No |  |
| `period` | `Any` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ContributionReportEmployeeBreakdown().load({"id": "contribution_report_employee_breakdown_id", "contribution_report_id": "contribution_report_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContributionReportEmployeeBreakdownEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ContributionReportEmployeeBreakdownResponsePagedListEntity

```python
contribution_report_employee_breakdown_response_paged_list = client.ContributionReportEmployeeBreakdownResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contribution_report_id` | `str` | Yes |  |
| `created_at` | `str` | Yes |  |
| `currency` | `Any` | Yes |  |
| `employee_id` | `str` | Yes |  |
| `employer_id` | `str` | Yes |  |
| `external_customer_id` | `None | str` | No |  |
| `finalized_at` | `None | str` | No |  |
| `health_insurance` | `Any` | Yes |  |
| `last_updated_at` | `str` | Yes |  |
| `object` | `str` | No |  |
| `period` | `Any` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ContributionReportEmployeeBreakdownResponsePagedList().list({"id": "example"})
for contribution_report_employee_breakdown_response_paged_list in results:
    print(contribution_report_employee_breakdown_response_paged_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContributionReportEmployeeBreakdownResponsePagedListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateHostedSessionTokenEntity

```python
create_hosted_session_token = client.CreateHostedSessionToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry` | `str` | Yes |  |
| `link` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreateHostedSessionToken().create({
    "expiry": "example_expiry",  # str
    "link": "example_link",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateHostedSessionTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## CreateSessionTokenEntity

```python
create_session_token = client.CreateSessionToken()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry` | `str` | Yes |  |
| `token` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.CreateSessionToken().create({
    "expiry": "example_expiry",  # str
    "token": "example_token",  # str
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateSessionTokenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DependentEntity

```python
dependent = client.Dependent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `None` | No |  |
| `coverage_options` | `None | list` | No |  |
| `dependents` | `list` | Yes |  |
| `disclosures` | `list` | Yes |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `parent_intent_id` | `str` | Yes |  |
| `parent_intent_type` | `Any` | Yes |  |
| `plan` | `Any` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Dependent().create({
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

#### `remove(reqmatch, ctrl=None) -> dict`

Remove the entity matching the given criteria. Raises on error.

```python
result = client.Dependent().remove({"dependents_management_intent_id": "dependents_management_intent_id", "id": "id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## DependentsManagementIntentEntity

```python
dependents_management_intent = client.DependentsManagementIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `None` | No |  |
| `coverage_options` | `None | list` | No |  |
| `dependents` | `list` | Yes |  |
| `disclosures` | `list` | Yes |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `parent_intent_id` | `str` | Yes |  |
| `parent_intent_type` | `Any` | Yes |  |
| `plan` | `Any` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DependentsManagementIntent().create({
    "dependents": [],  # list
    "disclosures": [],  # list
    "id": "example_id",  # str
    "parent_intent_id": "example_parent_intent_id",  # str
    "parent_intent_type": "example_parent_intent_type",  # Any
    "plan": "example_plan",  # Any
    "status": "example_status",  # Any
})
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.DependentsManagementIntent().load({"id": "dependents_management_intent_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependentsManagementIntentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EligibilityCheckEntity

```python
eligibility_check = client.EligibilityCheck()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eligibility_status` | `Any` | Yes |  |
| `object` | `str` | No |  |
| `plan` | `Any` | Yes |  |
| `provider` | `Any` | Yes |  |
| `reasons` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EligibilityCheck().create({
    "group_id": "example_group_id",  # str
    "eligibility_status": "example_eligibility_status",  # Any
    "plan": "example_plan",  # Any
    "provider": "example_provider",  # Any
    "reasons": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EligibilityCheckEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmployeeEntity

```python
employee = client.Employee()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bank_account` | `None` | No |  |
| `date_of_birth` | `str` | Yes |  |
| `earliest_benefits_start_date` | `None | str` | No |  |
| `email` | `str` | Yes |  |
| `employer_id` | `str` | No |  |
| `external_customer_id` | `None | str` | No |  |
| `first_name` | `str` | Yes |  |
| `home_address` | `None` | No |  |
| `id` | `str` | No |  |
| `last_name` | `str` | Yes |  |
| `metadata` | `None | dict` | No |  |
| `national_tax_id` | `str` | Yes |  |
| `nationality` | `None` | No |  |
| `object` | `str` | No |  |
| `offboard_on` | `None | str` | No |  |
| `phone_number` | `str` | Yes |  |
| `platform_id` | `str` | No |  |
| `sex_at_birth` | `Any` | Yes |  |
| `start_on` | `str` | No |  |
| `status` | `Any` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Employee().create({
    "date_of_birth": "example_date_of_birth",  # str
    "email": "example_email",  # str
    "first_name": "example_first_name",  # str
    "last_name": "example_last_name",  # str
    "national_tax_id": "example_national_tax_id",  # str
    "phone_number": "example_phone_number",  # str
    "sex_at_birth": "example_sex_at_birth",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Employee().list()
for employee in results:
    print(employee)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Employee().load({"id": "employee_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Employee().update({
    "id": "employee_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployeeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmployeeHealthInsuranceOfferEntity

```python
employee_health_insurance_offer = client.EmployeeHealthInsuranceOffer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_level` | `Any` | Yes |  |
| `employee_id` | `str` | Yes |  |
| `employer_id` | `str` | Yes |  |
| `external_customer_id` | `None | str` | No |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `required_action` | `None` | No |  |
| `status` | `Any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EmployeeHealthInsuranceOffer().load({"id": "employee_health_insurance_offer_id", "employee_id": "employee_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployeeHealthInsuranceOfferEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmployeeHealthInsuranceOfferResponsePagedListEntity

```python
employee_health_insurance_offer_response_paged_list = client.EmployeeHealthInsuranceOfferResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_level` | `Any` | Yes |  |
| `employee_id` | `str` | Yes |  |
| `employer_id` | `str` | Yes |  |
| `external_customer_id` | `None | str` | No |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `required_action` | `None` | No |  |
| `status` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EmployeeHealthInsuranceOfferResponsePagedList().list({"employee_id": "example"})
for employee_health_insurance_offer_response_paged_list in results:
    print(employee_health_insurance_offer_response_paged_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployeeHealthInsuranceOfferResponsePagedListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmployeeHealthInsurancePolicyEntity

```python
employee_health_insurance_policy = client.EmployeeHealthInsurancePolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `None | str` | No |  |
| `coverage_level` | `Any` | Yes |  |
| `employee_id` | `str` | Yes |  |
| `employer_id` | `str` | Yes |  |
| `end_date` | `str` | Yes |  |
| `enrolled_dependants_count` | `int` | Yes |  |
| `enrolment_type` | `Any` | Yes |  |
| `estimated_gross_premium` | `Any` | Yes |  |
| `external_customer_id` | `None | str` | No |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `opt_out_deadline_date` | `str` | Yes |  |
| `policy_number` | `None | str` | No |  |
| `renewal` | `Any` | Yes |  |
| `start_date` | `str` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EmployeeHealthInsurancePolicy().load({"id": "employee_health_insurance_policy_id", "employee_id": "employee_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployeeHealthInsurancePolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmployeeHealthInsurancePolicyResponsePagedListEntity

```python
employee_health_insurance_policy_response_paged_list = client.EmployeeHealthInsurancePolicyResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `None | str` | No |  |
| `coverage_level` | `Any` | Yes |  |
| `employee_id` | `str` | Yes |  |
| `employer_id` | `str` | Yes |  |
| `end_date` | `str` | Yes |  |
| `enrolled_dependants_count` | `int` | Yes |  |
| `enrolment_type` | `Any` | Yes |  |
| `estimated_gross_premium` | `Any` | Yes |  |
| `external_customer_id` | `None | str` | No |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `opt_out_deadline_date` | `str` | Yes |  |
| `policy_number` | `None | str` | No |  |
| `renewal` | `Any` | Yes |  |
| `start_date` | `str` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EmployeeHealthInsurancePolicyResponsePagedList().list({"employee_id": "example"})
for employee_health_insurance_policy_response_paged_list in results:
    print(employee_health_insurance_policy_response_paged_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployeeHealthInsurancePolicyResponsePagedListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmployerEntity

```python
employer = client.Employer()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contact` | `Any` | Yes |  |
| `earliest_benefits_start_date` | `None | str` | No |  |
| `id` | `str` | Yes |  |
| `legal_address` | `Any` | Yes |  |
| `legal_name` | `str` | Yes |  |
| `metadata` | `None | dict` | No |  |
| `object` | `str` | No |  |
| `offboard_on` | `None | str` | No |  |
| `platform_id` | `str` | No |  |
| `registration_number` | `None | str` | No |  |
| `status` | `Any` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Employer().create({
    "contact": "example_contact",  # Any
    "id": "example_id",  # str
    "legal_address": "example_legal_address",  # Any
    "legal_name": "example_legal_name",  # str
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Employer().list()
for employer in results:
    print(employer)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Employer().load({"id": "employer_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Employer().update({
    "id": "employer_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployerEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmployerHealthInsurancePolicyEntity

```python
employer_health_insurance_policy = client.EmployerHealthInsurancePolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `None | str` | No |  |
| `coverage_levels` | `list` | Yes |  |
| `employer_cancellation_period_length` | `int` | Yes |  |
| `employer_id` | `str` | Yes |  |
| `end_date` | `str` | Yes |  |
| `enrolment_type` | `Any` | Yes |  |
| `group_policy_number` | `None | str` | No |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `renewal` | `Any` | Yes |  |
| `start_date` | `str` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EmployerHealthInsurancePolicy().load({"id": "employer_health_insurance_policy_id", "employer_id": "employer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployerHealthInsurancePolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmployerHealthInsurancePolicyResponsePagedListEntity

```python
employer_health_insurance_policy_response_paged_list = client.EmployerHealthInsurancePolicyResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `None | str` | No |  |
| `coverage_levels` | `list` | Yes |  |
| `employer_cancellation_period_length` | `int` | Yes |  |
| `employer_id` | `str` | Yes |  |
| `end_date` | `str` | Yes |  |
| `enrolment_type` | `Any` | Yes |  |
| `group_policy_number` | `None | str` | No |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `renewal` | `Any` | Yes |  |
| `start_date` | `str` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EmployerHealthInsurancePolicyResponsePagedList().list({"employer_id": "example"})
for employer_health_insurance_policy_response_paged_list in results:
    print(employer_health_insurance_policy_response_paged_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployerHealthInsurancePolicyResponsePagedListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmployerHealthInsuranceQuoteEntity

```python
employer_health_insurance_quote = client.EmployerHealthInsuranceQuote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_levels` | `list` | Yes |  |
| `employer_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `quoted_at` | `str` | Yes |  |
| `required_action` | `None` | No |  |
| `status` | `Any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EmployerHealthInsuranceQuote().load({"id": "employer_health_insurance_quote_id", "employer_id": "employer_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployerHealthInsuranceQuoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EmployerHealthInsuranceQuoteResponsePagedListEntity

```python
employer_health_insurance_quote_response_paged_list = client.EmployerHealthInsuranceQuoteResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_levels` | `list` | Yes |  |
| `employer_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `quoted_at` | `str` | Yes |  |
| `required_action` | `None` | No |  |
| `status` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EmployerHealthInsuranceQuoteResponsePagedList().list({"employer_id": "example"})
for employer_health_insurance_quote_response_paged_list in results:
    print(employer_health_insurance_quote_response_paged_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployerHealthInsuranceQuoteResponsePagedListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnrolmentIntentEntity

```python
enrolment_intent = client.EnrolmentIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `None` | No |  |
| `disclosures` | `list` | Yes |  |
| `employee_id` | `str` | Yes |  |
| `force_confirmation` | `bool` | Yes |  |
| `group_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `ineligibility_reason` | `None` | No |  |
| `object` | `str` | No |  |
| `pending_confirmation` | `None` | No |  |
| `policy_configuration` | `None` | No |  |
| `policy_enrolments` | `list` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.EnrolmentIntent().create({
    "disclosures": [],  # list
    "employee_id": "example_employee_id",  # str
    "force_confirmation": True,  # bool
    "group_id": "example_group_id",  # str
    "id": "example_id",  # str
    "policy_enrolments": [],  # list
    "status": "example_status",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EnrolmentIntent().list()
for enrolment_intent in results:
    print(enrolment_intent)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.EnrolmentIntent().load({"id": "enrolment_intent_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.EnrolmentIntent().update({
    "id": "enrolment_intent_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnrolmentIntentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EnrolmentIntentRequirementResponsePagedListEntity

```python
enrolment_intent_requirement_response_paged_list = client.EnrolmentIntentRequirementResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes |  |
| `is_fulfilled` | `bool` | Yes |  |
| `object` | `str` | No |  |
| `object_id` | `str` | Yes |  |
| `object_type` | `Any` | Yes |  |
| `requirement_type` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.EnrolmentIntentRequirementResponsePagedList().list({"id": "example"})
for enrolment_intent_requirement_response_paged_list in results:
    print(enrolment_intent_requirement_response_paged_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnrolmentIntentRequirementResponsePagedListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## EventEntity

```python
event = client.Event()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_version` | `str` | No |  |
| `created` | `str` | Yes |  |
| `data` | `None` | Yes |  |
| `id` | `str` | Yes |  |
| `options` | `None` | No |  |
| `parent` | `None` | No |  |
| `platform_id` | `str` | Yes |  |
| `root` | `Any` | No |  |
| `type` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Event().list()
for event in results:
    print(event)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Event().load({"id": "event_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupEntity

```python
group = client.Group()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `None | str` | No |  |
| `employer_id` | `str` | Yes |  |
| `enrolment_type` | `Any` | Yes |  |
| `group_policy_ids` | `list` | Yes |  |
| `group_policy_intent_ids` | `list` | Yes |  |
| `group_quote_intent_ids` | `list` | Yes |  |
| `group_type` | `Any` | Yes |  |
| `id` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `object` | `str` | No |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Group().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Group().list()
for group in results:
    print(group)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Group().load({"id": "group_id"})
```

#### `update(reqdata, ctrl=None) -> dict`

Update an existing entity. The data must include the entity `id`. Returns the updated entity data and raises on error.

```python
result = client.Group().update({
    "id": "group_id",
    # Fields to update
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupEmployeeEntity

```python
group_employee = client.GroupEmployee()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desired_policy_start_date` | `None | str` | No |  |
| `eligibility_status` | `Any` | Yes |  |
| `enrolment_date` | `None | str` | No |  |
| `enrolment_status` | `Any` | Yes |  |
| `enrolments` | `list` | Yes |  |
| `group_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `policies` | `list` | Yes |  |
| `scheduled_group_transitions` | `list` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GroupEmployee().create({
    "id": "example_id",  # str
    "eligibility_status": "example_eligibility_status",  # Any
    "enrolment_status": "example_enrolment_status",  # Any
    "enrolments": [],  # list
    "group_id": "example_group_id",  # str
    "policies": [],  # list
    "scheduled_group_transitions": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupEmployeeEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupEmployeeResponsePagedListEntity

```python
group_employee_response_paged_list = client.GroupEmployeeResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desired_policy_start_date` | `None | str` | No |  |
| `eligibility_status` | `Any` | Yes |  |
| `enrolment_date` | `None | str` | No |  |
| `enrolment_status` | `Any` | Yes |  |
| `enrolments` | `list` | Yes |  |
| `group_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `policies` | `list` | Yes |  |
| `scheduled_group_transitions` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GroupEmployeeResponsePagedList().list({"id": "example"})
for group_employee_response_paged_list in results:
    print(group_employee_response_paged_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupEmployeeResponsePagedListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupPolicyEntity

```python
group_policy = client.GroupPolicy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `None | str` | No |  |
| `disclosures` | `list` | Yes |  |
| `employer_id` | `str` | No |  |
| `end_date` | `None | str` | No |  |
| `group_id` | `str` | No |  |
| `health_insurance` | `None` | No |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `plan` | `Any` | Yes |  |
| `provider` | `Any` | Yes |  |
| `start_date` | `str` | Yes |  |
| `status` | `Any` | Yes |  |
| `type` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GroupPolicy().list()
for group_policy in results:
    print(group_policy)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GroupPolicy().load({"id": "group_policy_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupPolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupPolicyIntentEntity

```python
group_policy_intent = client.GroupPolicyIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `None` | No |  |
| `cost_sharing` | `None` | No |  |
| `disclosures` | `list` | Yes |  |
| `due_date` | `None | str` | No |  |
| `group_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `plan_id` | `str` | Yes |  |
| `quote_intent_id` | `str` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GroupPolicyIntent().create({
    "disclosures": [],  # list
    "group_id": "example_group_id",  # str
    "id": "example_id",  # str
    "plan_id": "example_plan_id",  # str
    "quote_intent_id": "example_quote_intent_id",  # str
    "status": "example_status",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GroupPolicyIntent().list()
for group_policy_intent in results:
    print(group_policy_intent)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GroupPolicyIntent().load({"id": "group_policy_intent_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupPolicyIntentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupPolicyIntentRequirementResponsePagedListEntity

```python
group_policy_intent_requirement_response_paged_list = client.GroupPolicyIntentRequirementResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes |  |
| `is_fulfilled` | `bool` | Yes |  |
| `object` | `str` | No |  |
| `object_id` | `str` | Yes |  |
| `object_type` | `Any` | Yes |  |
| `requirement_type` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GroupPolicyIntentRequirementResponsePagedList().list({"id": "example"})
for group_policy_intent_requirement_response_paged_list in results:
    print(group_policy_intent_requirement_response_paged_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupPolicyIntentRequirementResponsePagedListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupQuoteEntity

```python
group_quote = client.GroupQuote()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `family_type` | `None` | No |  |
| `member_count` | `None` | No |  |
| `member_selection` | `None` | No |  |
| `percentage` | `None` | No |  |
| `type` | `Any` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GroupQuote().load({"group_quote_intent_id": "group_quote_intent_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupQuoteEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupQuoteIntentEntity

```python
group_quote_intent = client.GroupQuoteIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `None` | No |  |
| `consent_links` | `list` | Yes |  |
| `cost_sharing` | `None` | No |  |
| `disclosures` | `list` | Yes |  |
| `expected_start_date` | `None | str` | No |  |
| `group_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `plan_id` | `str` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GroupQuoteIntent().create({
    "consent_links": [],  # list
    "disclosures": [],  # list
    "group_id": "example_group_id",  # str
    "id": "example_id",  # str
    "plan_id": "example_plan_id",  # str
    "status": "example_status",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GroupQuoteIntent().list()
for group_quote_intent in results:
    print(group_quote_intent)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GroupQuoteIntent().load({"id": "group_quote_intent_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupQuoteIntentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GroupQuoteIntentRequirementResponsePagedListEntity

```python
group_quote_intent_requirement_response_paged_list = client.GroupQuoteIntentRequirementResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `str` | Yes |  |
| `is_fulfilled` | `bool` | Yes |  |
| `object` | `str` | No |  |
| `object_id` | `str` | Yes |  |
| `object_type` | `Any` | Yes |  |
| `requirement_type` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GroupQuoteIntentRequirementResponsePagedList().list({"id": "example"})
for group_quote_intent_requirement_response_paged_list in results:
    print(group_quote_intent_requirement_response_paged_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupQuoteIntentRequirementResponsePagedListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PlanEntity

```python
plan = client.Plan()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_from` | `str` | Yes |  |
| `available_to` | `None | str` | No |  |
| `country` | `Any` | Yes |  |
| `coverage_options` | `None | list` | No |  |
| `description` | `str` | Yes |  |
| `disclosures` | `list` | Yes |  |
| `documents` | `list` | Yes |  |
| `eligible_count` | `None | int` | No |  |
| `employee_eligibility_criteria` | `list` | Yes |  |
| `employer_eligibility_criteria` | `list` | Yes |  |
| `health_insurance` | `None` | No |  |
| `id` | `str` | Yes |  |
| `ineligible_count` | `None | int` | No |  |
| `name` | `str` | Yes |  |
| `object` | `str` | No |  |
| `provider` | `Any` | Yes |  |
| `total_count` | `None | int` | No |  |
| `type` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Plan().list()
for plan in results:
    print(plan)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Plan().load({"id": "plan_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PlanEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PolicyEntity

```python
policy = client.Policy()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundling_type` | `Any` | Yes |  |
| `cancellation_date` | `None | str` | No |  |
| `disclosures` | `list` | Yes |  |
| `employee_id` | `str` | Yes |  |
| `end_date` | `None | str` | No |  |
| `group_id` | `str` | Yes |  |
| `group_policy_id` | `str` | Yes |  |
| `health_insurance` | `None` | No |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `plan` | `Any` | Yes |  |
| `provider` | `Any` | Yes |  |
| `start_date` | `str` | Yes |  |
| `status` | `Any` | Yes |  |
| `type` | `Any` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Policy().list()
for policy in results:
    print(policy)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Policy().load({"id": "policy_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PolicyEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PolicyAmendmentIntentEntity

```python
policy_amendment_intent = client.PolicyAmendmentIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amendment_reason` | `Any` | Yes |  |
| `disclosures` | `list` | Yes |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `pending_confirmation` | `None` | No |  |
| `policy_id` | `str` | Yes |  |
| `processing_error` | `None` | No |  |
| `requested_changes` | `list` | Yes |  |
| `required_action` | `None` | No |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PolicyAmendmentIntent().create({
    "id": "example_id",  # str
    "amendment_reason": "example_amendment_reason",  # Any
    "disclosures": [],  # list
    "policy_id": "example_policy_id",  # str
    "requested_changes": [],  # list
    "status": "example_status",  # Any
})
```

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PolicyAmendmentIntent().list({"id": "example_id"})
for policy_amendment_intent in results:
    print(policy_amendment_intent)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PolicyAmendmentIntent().load({"id": "policy_amendment_intent_id", "policy_id": "policy_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PolicyAmendmentIntentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## PolicyImportIntentEntity

```python
policy_import_intent = client.PolicyImportIntent()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_persons` | `list` | Yes |  |
| `employee_id` | `str` | Yes |  |
| `group_id` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `member_number` | `str` | Yes |  |
| `object` | `str` | No |  |
| `policy_end_date` | `None | str` | No |  |
| `policy_start_date` | `str` | Yes |  |
| `provider_policy_number` | `str` | Yes |  |
| `status` | `Any` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.PolicyImportIntent().create({
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

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.PolicyImportIntent().list()
for policy_import_intent in results:
    print(policy_import_intent)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.PolicyImportIntent().load({"id": "policy_import_intent_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PolicyImportIntentEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ProviderEntity

```python
provider = client.Provider()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `str` | Yes |  |
| `employer_platform_url` | `None | str` | No |  |
| `id` | `str` | Yes |  |
| `kota_hub_url` | `None | str` | No |  |
| `logo_url` | `str` | Yes |  |
| `name` | `str` | Yes |  |
| `object` | `str` | No |  |
| `support_phone` | `str` | Yes |  |
| `supported_countries` | `list` | Yes |  |
| `website_url` | `str` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Provider().list()
for provider in results:
    print(provider)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Provider().load({"id": "provider_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProviderEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ReplayEntity

```python
replay = client.Replay()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deliveries` | `list` | Yes |  |
| `event_id` | `str` | Yes |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.Replay().create({
    "event_id": "example_event_id",  # str
    "deliveries": [],  # list
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReplayEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEndpointEntity

```python
webhook_endpoint = client.WebhookEndpoint()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `endpoint_url` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `subscribed_events` | `list` | Yes |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.WebhookEndpoint().load({"id": "webhook_endpoint_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEndpointEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebhookEndpointResponsePagedListEntity

```python
webhook_endpoint_response_paged_list = client.WebhookEndpointResponsePagedList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `str` | Yes |  |
| `endpoint_url` | `str` | Yes |  |
| `id` | `str` | Yes |  |
| `object` | `str` | No |  |
| `subscribed_events` | `list` | Yes |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.WebhookEndpointResponsePagedList().list()
for webhook_endpoint_response_paged_list in results:
    print(webhook_endpoint_response_paged_list)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEndpointResponsePagedListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = KotaSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

