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
| `date_of_birth` | `str` | Yes | Date of birth of the associated person |
| `email` | `None | str` | No | Email address of the associated person |
| `employee_id` | `str` | Yes | Unique identifier for the employee this person is associated with |
| `first_name` | `str` | Yes | First name of the associated person |
| `id` | `str` | Yes | Unique identifier for the associated person |
| `last_name` | `str` | Yes | Last name of the associated person |
| `object` | `str` | No | The object type |
| `phone_number` | `None | str` | No | Phone number in E.164 international format (e.g. |
| `platform_id` | `str` | No | Unique identifier for the platform |
| `relationship_type` | `Any` | Yes | The relationship type between the employee and the associated person |
| `sex_at_birth` | `Any` | Yes | The sex assigned to the associated person at birth |

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
| `associated_person_id` | `str` | Yes | The associated person ID. |
| `date_of_birth` | `str` | Yes | Date of birth of the associated person. |
| `eligibility_status` | `Any` | Yes | Eligibility status for the policy/plan. |
| `first_name` | `str` | Yes | First name of the associated person. |
| `ineligibility_reason` | `None | str` | No | Reason for ineligibility if status is ineligible. |
| `last_name` | `str` | Yes | Last name of the associated person. |
| `object` | `str` | No | The object type |
| `relationship` | `Any` | Yes | Relationship type to the employee. |
| `sex_at_birth` | `Any` | Yes | Sex at birth of the associated person. |

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
| `created_at` | `str` | Yes | Date and time the report was created |
| `employer_id` | `str` | Yes | Unique identifier of the employer for which the report is created |
| `external_customer_id` | `None | str` | No | Unique identifier of the customer for which the report is created. |
| `finalized_at` | `None | str` | No | Date and time the report was finalized, if applicable |
| `id` | `str` | Yes | Unique identifier for the contribution report |
| `last_updated_at` | `str` | Yes | Date and time of the last update to the report |
| `object` | `str` | No | The object type |
| `period` | `Any` | Yes | Period covered by the contribution report |
| `status` | `Any` | Yes | Current status of the contribution report |

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
| `contribution_report_id` | `str` | Yes | Unique identifier of the related contribution report |
| `created_at` | `str` | Yes | Date and time the breakdown was created |
| `currency` | `Any` | Yes | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `str` | Yes | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `str` | Yes | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `None | str` | No | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `None | str` | No | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `Any` | Yes | Health insurance contribution details |
| `last_updated_at` | `str` | Yes | Date and time of the last update to the breakdown |
| `object` | `str` | No | The object type |
| `period` | `Any` | Yes | Period covered by the employee breakdown |
| `status` | `Any` | Yes | Current status of the breakdown |

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
| `contribution_report_id` | `str` | Yes | Unique identifier of the related contribution report |
| `created_at` | `str` | Yes | Date and time the breakdown was created |
| `currency` | `Any` | Yes | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `str` | Yes | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `str` | Yes | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `None | str` | No | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `None | str` | No | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `Any` | Yes | Health insurance contribution details |
| `last_updated_at` | `str` | Yes | Date and time of the last update to the breakdown |
| `object` | `str` | No | The object type |
| `period` | `Any` | Yes | Period covered by the employee breakdown |
| `status` | `Any` | Yes | Current status of the breakdown |

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
| `action_required` | `None` | No | Details of the action required from the caller. |
| `coverage_options` | `None | list` | No | Available member-scoped coverage options for the plan. |
| `dependents` | `list` | Yes | List of dependents being managed. |
| `disclosures` | `list` | Yes | Disclosures associated with this intent. |
| `id` | `str` | Yes | Unique identifier for the dependents management intent. |
| `object` | `str` | No | Object type identifier. |
| `parent_intent_id` | `str` | Yes | The parent intent ID (e.g. |
| `parent_intent_type` | `Any` | Yes | The type of parent intent. |
| `plan` | `Any` | Yes | Plan information including pricing details. |
| `status` | `Any` | Yes | Current status of the dependents management intent. |

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
| `action_required` | `None` | No | Details of the action required from the caller. |
| `coverage_options` | `None | list` | No | Available member-scoped coverage options for the plan. |
| `dependents` | `list` | Yes | List of dependents being managed. |
| `disclosures` | `list` | Yes | Disclosures associated with this intent. |
| `id` | `str` | Yes | Unique identifier for the dependents management intent. |
| `object` | `str` | No | Object type identifier. |
| `parent_intent_id` | `str` | Yes | The parent intent ID (e.g. |
| `parent_intent_type` | `Any` | Yes | The type of parent intent. |
| `plan` | `Any` | Yes | Plan information including pricing details. |
| `status` | `Any` | Yes | Current status of the dependents management intent. |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.DependentsManagementIntent().create({
    "enrolment_intent_id": "example_enrolment_intent_id",  # str
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
| `eligibility_status` | `Any` | Yes | Eligibility status: `eligible` or `ineligible`. |
| `object` | `str` | No | The object type. |
| `plan` | `Any` | Yes | The insurance plan associated with the group. |
| `provider` | `Any` | Yes | The insurance provider associated with the group. |
| `reasons` | `list` | Yes | List of reasons why the employee is ineligible. |

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
| `bank_account` | `None` | No | Bank account details |
| `date_of_birth` | `str` | Yes | Date of birth of the employee |
| `earliest_benefits_start_date` | `None | str` | No | The earliest date this employee can be enrolled in any benefits. |
| `email` | `str` | Yes | Email address of the employee |
| `employer_id` | `str` | No | Unique identifier for the employer |
| `external_customer_id` | `None | str` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `first_name` | `str` | Yes | First name of the employee. |
| `home_address` | `None` | No | Location where the employee is legally registered to live |
| `id` | `str` | No | Unique identifier for the employee |
| `last_name` | `str` | Yes | Last name of the employee |
| `metadata` | `None | dict` | No | Set of key-value pairs that you can attach to an object. |
| `national_tax_id` | `str` | Yes | PPSN in Ireland, NINo in the UK, DNI/NIE in Spain |
| `nationality` | `None` | No | Nationality of the employee (e.g. |
| `object` | `str` | No | The object type |
| `offboard_on` | `None | str` | No | Date when the employee was or will be offboarded |
| `phone_number` | `str` | Yes | Phone number in E.164 international format (e.g. |
| `platform_id` | `str` | No | Unique identifier for the platform |
| `sex_at_birth` | `Any` | Yes | The sex assigned to the employee at birth |
| `start_on` | `str` | No | Employment start date |
| `status` | `Any` | No | Current status of the employee |

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
| `coverage_level` | `Any` | Yes | Details about the coverage level for the offer. |
| `employee_id` | `str` | Yes | The Id of the employee for which the offer is available |
| `employer_id` | `str` | Yes | The Id of the employer for which the offer is available |
| `external_customer_id` | `None | str` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `str` | Yes | Unique identifier for offer |
| `object` | `str` | No | The object type |
| `required_action` | `None` | No | Required action to progress the offer, if any. |
| `status` | `Any` | Yes | Current status of offer |

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
| `coverage_level` | `Any` | Yes | Details about the coverage level for the offer. |
| `employee_id` | `str` | Yes | The Id of the employee for which the offer is available |
| `employer_id` | `str` | Yes | The Id of the employer for which the offer is available |
| `external_customer_id` | `None | str` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `str` | Yes | Unique identifier for offer |
| `object` | `str` | No | The object type |
| `required_action` | `None` | No | Required action to progress the offer, if any. |
| `status` | `Any` | Yes | Current status of offer |

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
| `cancellation_date` | `None | str` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `Any` | Yes | Represents the current coverage level for the policy |
| `employee_id` | `str` | Yes | The Id of the employee for which the policy is created |
| `employer_id` | `str` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `str` | Yes | Policy ends on this date |
| `enrolled_dependants_count` | `int` | Yes | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `Any` | Yes | Enrolment type of the policy |
| `estimated_gross_premium` | `Any` | Yes | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `None | str` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `str` | Yes | Unique identifier for policy |
| `object` | `str` | No | The object type |
| `opt_out_deadline_date` | `str` | Yes | Last day to opt out from the policy |
| `policy_number` | `None | str` | No | Health insurance policy number, if available |
| `renewal` | `Any` | Yes | Renewal information for the policy |
| `start_date` | `str` | Yes | Policy starts on this date |
| `status` | `Any` | Yes | Current status of policy |

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
| `cancellation_date` | `None | str` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `Any` | Yes | Represents the current coverage level for the policy |
| `employee_id` | `str` | Yes | The Id of the employee for which the policy is created |
| `employer_id` | `str` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `str` | Yes | Policy ends on this date |
| `enrolled_dependants_count` | `int` | Yes | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `Any` | Yes | Enrolment type of the policy |
| `estimated_gross_premium` | `Any` | Yes | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `None | str` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `str` | Yes | Unique identifier for policy |
| `object` | `str` | No | The object type |
| `opt_out_deadline_date` | `str` | Yes | Last day to opt out from the policy |
| `policy_number` | `None | str` | No | Health insurance policy number, if available |
| `renewal` | `Any` | Yes | Renewal information for the policy |
| `start_date` | `str` | Yes | Policy starts on this date |
| `status` | `Any` | Yes | Current status of policy |

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
| `metadata` | `None | dict` | No | Set of key-value pairs that you can attach to an object. |
| `object` | `str` | No | The object type |
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
| `cancellation_date` | `None | str` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `list` | Yes | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `int` | Yes | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `str` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `str` | Yes | Policy ends on this date |
| `enrolment_type` | `Any` | Yes | Enrolment type of the policy |
| `group_policy_number` | `None | str` | No | Group’s health insurance policy number, if available |
| `id` | `str` | Yes | Unique identifier for policy |
| `object` | `str` | No | The object type |
| `renewal` | `Any` | Yes | Renewal information for the policy |
| `start_date` | `str` | Yes | Policy starts on this date |
| `status` | `Any` | Yes | Current status of policy |

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
| `cancellation_date` | `None | str` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `list` | Yes | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `int` | Yes | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `str` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `str` | Yes | Policy ends on this date |
| `enrolment_type` | `Any` | Yes | Enrolment type of the policy |
| `group_policy_number` | `None | str` | No | Group’s health insurance policy number, if available |
| `id` | `str` | Yes | Unique identifier for policy |
| `object` | `str` | No | The object type |
| `renewal` | `Any` | Yes | Renewal information for the policy |
| `start_date` | `str` | Yes | Policy starts on this date |
| `status` | `Any` | Yes | Current status of policy |

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
| `coverage_levels` | `list` | Yes | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `str` | Yes | The Id of the employer for which the is created |
| `id` | `str` | Yes | Unique identifier for the quote |
| `object` | `str` | No | The object type |
| `quoted_at` | `str` | Yes | Date and time the quote was created at |
| `required_action` | `None` | No | Actions required by the employer to proceed with the quote. |
| `status` | `Any` | Yes | Current status of the quote |

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
| `coverage_levels` | `list` | Yes | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `str` | Yes | The Id of the employer for which the is created |
| `id` | `str` | Yes | Unique identifier for the quote |
| `object` | `str` | No | The object type |
| `quoted_at` | `str` | Yes | Date and time the quote was created at |
| `required_action` | `None` | No | Actions required by the employer to proceed with the quote. |
| `status` | `Any` | Yes | Current status of the quote |

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
| `action_required` | `None` | No | If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment. |
| `disclosures` | `list` | Yes | Disclosures associated with this intent. |
| `employee_id` | `str` | Yes | Identifier for the employee associated with this enrolment intent. |
| `force_confirmation` | `bool` | Yes | If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. |
| `group_id` | `str` | Yes | Identifier for the group associated with this enrolment intent. |
| `id` | `str` | Yes | Unique identifier for the enrolment intent. |
| `ineligibility_reason` | `None` | No | If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility. |
| `object` | `str` | No | Object type identifier. |
| `pending_confirmation` | `None` | No | If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state. |
| `policy_configuration` | `None` | No | Policy configuration associated with this enrolment intent. |
| `policy_enrolments` | `list` | Yes | Policy enrolment information |
| `status` | `Any` | Yes | Current status of the enrolment intent. |

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
| `id` | `str` | Yes | Unique identifier for the requirement |
| `is_fulfilled` | `bool` | Yes | Whether the requirement has been fulfilled |
| `object` | `str` | No | Object type identifier |
| `object_id` | `str` | Yes | Identifier of the object (employee ID or employer ID) |
| `object_type` | `Any` | Yes | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `Any` | Yes | Type of requirement |

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
| `description` | `None | str` | No | Short description of the purpose or scope of the `group`. |
| `employer_id` | `str` | Yes | Identifier for the `employer` that owns this `group`. |
| `enrolment_type` | `Any` | Yes | Indicates how employees are enrolled into the group. |
| `group_policy_ids` | `list` | Yes | Group policy unique identifiers associated with this group. |
| `group_policy_intent_ids` | `list` | Yes | Group policy intent unique identifiers associated with this group. |
| `group_quote_intent_ids` | `list` | Yes | Group quote intent unique identifiers associated with this group. |
| `group_type` | `Any` | Yes | Indicates how policies are organized for this group. |
| `id` | `str` | Yes | Unique identifier for the `group`. |
| `name` | `str` | Yes | Human-readable name of the `group`. |
| `object` | `str` | No | The object type |
| `status` | `Any` | Yes | Current lifecycle state of the `group`, indicating its current progress. |

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
| `desired_policy_start_date` | `None | str` | No | The desired date for the employee's policy to start. |
| `eligibility_status` | `Any` | Yes | Eligibility status for the employee in this group. |
| `enrolment_date` | `None | str` | No | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `Any` | Yes | Enrolment status for the employee in this group. |
| `enrolments` | `list` | Yes | List of enrolments associated with the employee in this group. |
| `group_id` | `str` | Yes | Unique identifier for the group. |
| `id` | `str` | Yes | Unique identifier for the employee. |
| `object` | `str` | No | The object type |
| `policies` | `list` | Yes | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `list` | Yes | List of scheduled group transitions for the employee. |

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
| `desired_policy_start_date` | `None | str` | No | The desired date for the employee's policy to start. |
| `eligibility_status` | `Any` | Yes | Eligibility status for the employee in this group. |
| `enrolment_date` | `None | str` | No | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `Any` | Yes | Enrolment status for the employee in this group. |
| `enrolments` | `list` | Yes | List of enrolments associated with the employee in this group. |
| `group_id` | `str` | Yes | Unique identifier for the group. |
| `id` | `str` | Yes | Unique identifier for the employee. |
| `object` | `str` | No | The object type |
| `policies` | `list` | Yes | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `list` | Yes | List of scheduled group transitions for the employee. |

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
| `cancellation_date` | `None | str` | No | Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable. |
| `disclosures` | `list` | Yes | Disclosures associated with this group policy. |
| `employer_id` | `str` | No | Identifier for the employer associated with this group policy. |
| `end_date` | `None | str` | No | Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended. |
| `group_id` | `str` | No | Identifier for the group associated with this group policy. |
| `health_insurance` | `None` | No | Health insurance–specific fields (present when `type=health_insurance`). |
| `id` | `str` | Yes | Unique identifier for the group policy. |
| `object` | `str` | No | The object type |
| `plan` | `Any` | Yes | Plan information for this policy |
| `provider` | `Any` | Yes | Provider information for this policy. |
| `start_date` | `str` | Yes | Policy start (effective) date in ISO 8601 (YYYY-MM-DD). |
| `status` | `Any` | Yes | Current lifecycle state of the `group_policy`, indicating its progress from creation to activation. |
| `type` | `Any` | Yes | Policy type. |

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
| `action_required` | `None` | No | Details of the required action when the intent is in ActionRequired status. |
| `cost_sharing` | `None` | No | Cost sharing configuration for the policy intent |
| `disclosures` | `list` | Yes | Disclosures associated with this intent. |
| `due_date` | `None | str` | No | Due date for the policy intent |
| `group_id` | `str` | Yes | Unique identifier for the group |
| `id` | `str` | Yes | Unique identifier for the group policy intent |
| `object` | `str` | No | Object type identifier |
| `plan_id` | `str` | Yes | Unique identifier for the plan |
| `quote_intent_id` | `str` | Yes | Unique identifier for the group quote intent this policy intent was created from |
| `status` | `Any` | Yes | Current status of the group policy intent |

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
| `id` | `str` | Yes | Unique identifier for the requirement |
| `is_fulfilled` | `bool` | Yes | Whether the requirement has been fulfilled |
| `object` | `str` | No | Object type identifier |
| `object_id` | `str` | Yes | Identifier of the object (employee ID or employer ID) |
| `object_type` | `Any` | Yes | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `Any` | Yes | Type of requirement |

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
| `family_type` | `None` | No | Type of the family covered by the employer. |
| `member_count` | `None` | No | Numbers of additional members covered by the employer. |
| `member_selection` | `None` | No | Whether specific member types are covered by the employer. |
| `percentage` | `None` | No | Percentage of the premium the employer covers. |
| `type` | `Any` | Yes | Cost sharing type. |

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
| `action_required` | `None` | No | Details of the action required from the caller, if the intent is in action_required status. |
| `consent_links` | `list` | Yes | Consent links that need to be acknowledged |
| `cost_sharing` | `None` | No | Cost sharing configuration for the quote |
| `disclosures` | `list` | Yes | Disclosures associated with this intent. |
| `expected_start_date` | `None | str` | No | Expected start date for the insurance coverage |
| `group_id` | `str` | Yes | Unique identifier for the group |
| `id` | `str` | Yes | Unique identifier for the group quote intent |
| `object` | `str` | No | Object type identifier |
| `plan_id` | `str` | Yes | Unique identifier for the plan |
| `status` | `Any` | Yes | Current status of the group quote intent |

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
| `id` | `str` | Yes | Unique identifier for the requirement |
| `is_fulfilled` | `bool` | Yes | Whether the requirement has been fulfilled |
| `object` | `str` | No | Object type identifier |
| `object_id` | `str` | Yes | Identifier of the object (employee ID or employer ID) |
| `object_type` | `Any` | Yes | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `Any` | Yes | Type of requirement |

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
| `available_from` | `str` | Yes | The date from which this plan is available (inclusive). |
| `available_to` | `None | str` | No | The date until which this plan is available (inclusive). |
| `country` | `Any` | Yes | The country this plan is available in. |
| `coverage_options` | `None | list` | No | Coverage options available for this plan, organized by scope and input type. |
| `description` | `str` | Yes | Description of the plan. |
| `disclosures` | `list` | Yes | Disclosures associated with this plan. |
| `documents` | `list` | Yes | List of plan documents (e.g., IPIDs, T&Cs). |
| `eligible_count` | `None | int` | No | Number of employees in the queried group eligible for this plan as-of `start_date`. |
| `employee_eligibility_criteria` | `list` | Yes | Eligibility criteria that employees must meet. |
| `employer_eligibility_criteria` | `list` | Yes | Eligibility criteria that employers must meet. |
| `health_insurance` | `None` | No | Health insurance-specific details. |
| `id` | `str` | Yes | Unique identifier for the plan. |
| `ineligible_count` | `None | int` | No | Number of employees in the queried group ineligible for this plan as-of `start_date`. |
| `name` | `str` | Yes | The name of the plan. |
| `object` | `str` | No | Object type. |
| `provider` | `Any` | Yes | The provider offering this plan. |
| `total_count` | `None | int` | No | Total employees in the queried group. |
| `type` | `Any` | Yes | The benefit type of the plan. |

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
| `bundling_type` | `Any` | Yes | Indicates how this policy is bundled within a group |
| `cancellation_date` | `None | str` | No | Date the policy was cancelled (if applicable) |
| `disclosures` | `list` | Yes | Disclosures associated with this policy. |
| `employee_id` | `str` | Yes | Identifier of the employee associated with this policy. |
| `end_date` | `None | str` | No | Policy end date (inclusive) in ISO 8601, or null if open-ended |
| `group_id` | `str` | Yes | Identifier of the group associated with this policy. |
| `group_policy_id` | `str` | Yes | Identifier of the group policy id associated with this policy. |
| `health_insurance` | `None` | No | Health insurance–specific fields (present when `type=health_insurance`) |
| `id` | `str` | Yes | Unique identifier for the policy. |
| `object` | `str` | No | Object type |
| `plan` | `Any` | Yes | Plan information for this policy |
| `provider` | `Any` | Yes | Provider information for this policy |
| `start_date` | `str` | Yes | Policy start (effective) date in ISO 8601 (YYYY-MM-DD) |
| `status` | `Any` | Yes | Current lifecycle state of the policy |
| `type` | `Any` | Yes | Policy type. |

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
| `amendment_reason` | `Any` | Yes | The reason for the policy amendment. |
| `disclosures` | `list` | Yes | Disclosures associated with this intent. |
| `id` | `str` | Yes | Unique identifier for the policy amendment intent. |
| `object` | `str` | No | Object type identifier. |
| `pending_confirmation` | `None` | No | Information about the pending confirmation if the intent status is `pending_confirmation`. |
| `policy_id` | `str` | Yes | The policy ID for which the amendment is requested. |
| `processing_error` | `None` | No | Information about the processing error if the intent status is `processing_error`. |
| `requested_changes` | `list` | Yes | List of requested changes to the policy. |
| `required_action` | `None` | No | Information about the required action if the intent status is `action_required`. |
| `status` | `Any` | Yes | Current status of the policy amendment intent. |

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
| `associated_persons` | `list` | Yes | List of associated persons linked to this policy import. |
| `employee_id` | `str` | Yes | The employee ID for the policy import. |
| `group_id` | `str` | Yes | The group ID for the policy import. |
| `id` | `str` | Yes | Unique identifier for the policy import intent. |
| `member_number` | `str` | Yes | The member number assigned by the provider. |
| `object` | `str` | No | Object type identifier. |
| `policy_end_date` | `None | str` | No | The end date of the policy. |
| `policy_start_date` | `str` | Yes | The start date of the policy. |
| `provider_policy_number` | `str` | Yes | The provider's policy number. |
| `status` | `Any` | Yes | Current status of the policy import intent. |

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
| `description` | `str` | Yes | Description of the provider. |
| `employer_platform_url` | `None | str` | No | URL to the employer portal/platform for this provider, if available. |
| `id` | `str` | Yes | Unique identifier for the provider. |
| `kota_hub_url` | `None | str` | No | URL to the Kota Hub page for this platform, if configured. |
| `logo_url` | `str` | Yes | URL to the provider's logo image. |
| `name` | `str` | Yes | The name of the provider. |
| `object` | `str` | No | Object type. |
| `support_phone` | `str` | Yes | Customer support phone number. |
| `supported_countries` | `list` | Yes | List of countries supported by this provider. |
| `website_url` | `str` | Yes | The provider's main website URL. |

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
| `created_at` | `str` | Yes | The date and time the endpoint was created |
| `endpoint_url` | `str` | Yes | The registered URL of the endpoint |
| `id` | `str` | Yes | The unique identifier of the endpoint |
| `object` | `str` | No | The object type |
| `subscribed_events` | `list` | Yes | The events the endpoint is subscribed to |

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
| `created_at` | `str` | Yes | The date and time the endpoint was created |
| `endpoint_url` | `str` | Yes | The registered URL of the endpoint |
| `id` | `str` | Yes | The unique identifier of the endpoint |
| `object` | `str` | No | The object type |
| `subscribed_events` | `list` | Yes | The events the endpoint is subscribed to |

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

