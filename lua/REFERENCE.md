# Kota Lua SDK Reference

Complete API reference for the Kota Lua SDK.


## KotaSDK

### Constructor

```lua
local sdk = require("kota_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `AssociatedPerson(data)`

Create a new `AssociatedPerson` entity instance. Pass `nil` for no initial data.

#### `AssociatedPersonEligibilityResponsePagedList(data)`

Create a new `AssociatedPersonEligibilityResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `ContributionReport(data)`

Create a new `ContributionReport` entity instance. Pass `nil` for no initial data.

#### `ContributionReportEmployeeBreakdown(data)`

Create a new `ContributionReportEmployeeBreakdown` entity instance. Pass `nil` for no initial data.

#### `ContributionReportEmployeeBreakdownResponsePagedList(data)`

Create a new `ContributionReportEmployeeBreakdownResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `CreateHostedSessionToken(data)`

Create a new `CreateHostedSessionToken` entity instance. Pass `nil` for no initial data.

#### `CreateSessionToken(data)`

Create a new `CreateSessionToken` entity instance. Pass `nil` for no initial data.

#### `Dependent(data)`

Create a new `Dependent` entity instance. Pass `nil` for no initial data.

#### `DependentsManagementIntent(data)`

Create a new `DependentsManagementIntent` entity instance. Pass `nil` for no initial data.

#### `EligibilityCheck(data)`

Create a new `EligibilityCheck` entity instance. Pass `nil` for no initial data.

#### `Employee(data)`

Create a new `Employee` entity instance. Pass `nil` for no initial data.

#### `EmployeeHealthInsuranceOffer(data)`

Create a new `EmployeeHealthInsuranceOffer` entity instance. Pass `nil` for no initial data.

#### `EmployeeHealthInsuranceOfferResponsePagedList(data)`

Create a new `EmployeeHealthInsuranceOfferResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `EmployeeHealthInsurancePolicy(data)`

Create a new `EmployeeHealthInsurancePolicy` entity instance. Pass `nil` for no initial data.

#### `EmployeeHealthInsurancePolicyResponsePagedList(data)`

Create a new `EmployeeHealthInsurancePolicyResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `Employer(data)`

Create a new `Employer` entity instance. Pass `nil` for no initial data.

#### `EmployerHealthInsurancePolicy(data)`

Create a new `EmployerHealthInsurancePolicy` entity instance. Pass `nil` for no initial data.

#### `EmployerHealthInsurancePolicyResponsePagedList(data)`

Create a new `EmployerHealthInsurancePolicyResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `EmployerHealthInsuranceQuote(data)`

Create a new `EmployerHealthInsuranceQuote` entity instance. Pass `nil` for no initial data.

#### `EmployerHealthInsuranceQuoteResponsePagedList(data)`

Create a new `EmployerHealthInsuranceQuoteResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `EnrolmentIntent(data)`

Create a new `EnrolmentIntent` entity instance. Pass `nil` for no initial data.

#### `EnrolmentIntentRequirementResponsePagedList(data)`

Create a new `EnrolmentIntentRequirementResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `Event(data)`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `Group(data)`

Create a new `Group` entity instance. Pass `nil` for no initial data.

#### `GroupEmployee(data)`

Create a new `GroupEmployee` entity instance. Pass `nil` for no initial data.

#### `GroupEmployeeResponsePagedList(data)`

Create a new `GroupEmployeeResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `GroupPolicy(data)`

Create a new `GroupPolicy` entity instance. Pass `nil` for no initial data.

#### `GroupPolicyIntent(data)`

Create a new `GroupPolicyIntent` entity instance. Pass `nil` for no initial data.

#### `GroupPolicyIntentRequirementResponsePagedList(data)`

Create a new `GroupPolicyIntentRequirementResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `GroupQuote(data)`

Create a new `GroupQuote` entity instance. Pass `nil` for no initial data.

#### `GroupQuoteIntent(data)`

Create a new `GroupQuoteIntent` entity instance. Pass `nil` for no initial data.

#### `GroupQuoteIntentRequirementResponsePagedList(data)`

Create a new `GroupQuoteIntentRequirementResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `Plan(data)`

Create a new `Plan` entity instance. Pass `nil` for no initial data.

#### `Policy(data)`

Create a new `Policy` entity instance. Pass `nil` for no initial data.

#### `PolicyAmendmentIntent(data)`

Create a new `PolicyAmendmentIntent` entity instance. Pass `nil` for no initial data.

#### `PolicyImportIntent(data)`

Create a new `PolicyImportIntent` entity instance. Pass `nil` for no initial data.

#### `Provider(data)`

Create a new `Provider` entity instance. Pass `nil` for no initial data.

#### `Replay(data)`

Create a new `Replay` entity instance. Pass `nil` for no initial data.

#### `WebhookEndpoint(data)`

Create a new `WebhookEndpoint` entity instance. Pass `nil` for no initial data.

#### `WebhookEndpointResponsePagedList(data)`

Create a new `WebhookEndpointResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AssociatedPersonEntity

```lua
local associated_person = client:AssociatedPerson(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date_of_birth` | `string` | Yes | Date of birth of the associated person |
| `email` | `nil|string` | No | Email address of the associated person |
| `employee_id` | `string` | Yes | Unique identifier for the employee this person is associated with |
| `first_name` | `string` | Yes | First name of the associated person |
| `id` | `string` | Yes | Unique identifier for the associated person |
| `last_name` | `string` | Yes | Last name of the associated person |
| `object` | `string` | No | The object type |
| `phone_number` | `nil|string` | No | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | No | Unique identifier for the platform |
| `relationship_type` | `any` | Yes | The relationship type between the employee and the associated person |
| `sex_at_birth` | `any` | Yes | The sex assigned to the associated person at birth |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:AssociatedPerson():create({
  employee_id = --[[ string ]],
  date_of_birth = --[[ string ]],
  first_name = --[[ string ]],
  id = --[[ string ]],
  last_name = --[[ string ]],
  relationship_type = --[[ any ]],
  sex_at_birth = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AssociatedPerson():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:AssociatedPerson():load({ id = "associated_person_id", employee_id = "employee_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:AssociatedPerson():remove({ id = "associated_person_id", employee_id = "employee_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:AssociatedPerson():update({
  id = "associated_person_id",
  employee_id = "employee_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssociatedPersonEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AssociatedPersonEligibilityResponsePagedListEntity

```lua
local associated_person_eligibility_response_paged_list = client:AssociatedPersonEligibilityResponsePagedList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_person_id` | `string` | Yes | The associated person ID. |
| `date_of_birth` | `string` | Yes | Date of birth of the associated person. |
| `eligibility_status` | `any` | Yes | Eligibility status for the policy/plan. |
| `first_name` | `string` | Yes | First name of the associated person. |
| `ineligibility_reason` | `nil|string` | No | Reason for ineligibility if status is ineligible. |
| `last_name` | `string` | Yes | Last name of the associated person. |
| `object` | `string` | No | The object type |
| `relationship` | `any` | Yes | Relationship type to the employee. |
| `sex_at_birth` | `any` | Yes | Sex at birth of the associated person. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:AssociatedPersonEligibilityResponsePagedList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AssociatedPersonEligibilityResponsePagedListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContributionReportEntity

```lua
local contribution_report = client:ContributionReport(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | Date and time the report was created |
| `employer_id` | `string` | Yes | Unique identifier of the employer for which the report is created |
| `external_customer_id` | `nil|string` | No | Unique identifier of the customer for which the report is created. |
| `finalized_at` | `nil|string` | No | Date and time the report was finalized, if applicable |
| `id` | `string` | Yes | Unique identifier for the contribution report |
| `last_updated_at` | `string` | Yes | Date and time of the last update to the report |
| `object` | `string` | No | The object type |
| `period` | `any` | Yes | Period covered by the contribution report |
| `status` | `any` | Yes | Current status of the contribution report |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ContributionReport():create({
  id = --[[ string ]],
  created_at = --[[ string ]],
  employer_id = --[[ string ]],
  last_updated_at = --[[ string ]],
  period = --[[ any ]],
  status = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ContributionReport():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ContributionReport():load({ id = "contribution_report_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContributionReportEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContributionReportEmployeeBreakdownEntity

```lua
local contribution_report_employee_breakdown = client:ContributionReportEmployeeBreakdown(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contribution_report_id` | `string` | Yes | Unique identifier of the related contribution report |
| `created_at` | `string` | Yes | Date and time the breakdown was created |
| `currency` | `any` | Yes | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Yes | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Yes | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `nil|string` | No | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `nil|string` | No | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `any` | Yes | Health insurance contribution details |
| `last_updated_at` | `string` | Yes | Date and time of the last update to the breakdown |
| `object` | `string` | No | The object type |
| `period` | `any` | Yes | Period covered by the employee breakdown |
| `status` | `any` | Yes | Current status of the breakdown |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ContributionReportEmployeeBreakdown():load({ id = "contribution_report_employee_breakdown_id", contribution_report_id = "contribution_report_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContributionReportEmployeeBreakdownEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ContributionReportEmployeeBreakdownResponsePagedListEntity

```lua
local contribution_report_employee_breakdown_response_paged_list = client:ContributionReportEmployeeBreakdownResponsePagedList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contribution_report_id` | `string` | Yes | Unique identifier of the related contribution report |
| `created_at` | `string` | Yes | Date and time the breakdown was created |
| `currency` | `any` | Yes | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Yes | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Yes | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `nil|string` | No | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `nil|string` | No | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `any` | Yes | Health insurance contribution details |
| `last_updated_at` | `string` | Yes | Date and time of the last update to the breakdown |
| `object` | `string` | No | The object type |
| `period` | `any` | Yes | Period covered by the employee breakdown |
| `status` | `any` | Yes | Current status of the breakdown |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ContributionReportEmployeeBreakdownResponsePagedList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ContributionReportEmployeeBreakdownResponsePagedListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateHostedSessionTokenEntity

```lua
local create_hosted_session_token = client:CreateHostedSessionToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry` | `string` | Yes |  |
| `link` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreateHostedSessionToken():create({
  expiry = --[[ string ]],
  link = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateHostedSessionTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CreateSessionTokenEntity

```lua
local create_session_token = client:CreateSessionToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry` | `string` | Yes |  |
| `token` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:CreateSessionToken():create({
  expiry = --[[ string ]],
  token = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CreateSessionTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DependentEntity

```lua
local dependent = client:Dependent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `nil` | No | Details of the action required from the caller. |
| `coverage_options` | `nil|table` | No | Available member-scoped coverage options for the plan. |
| `dependents` | `table` | Yes | List of dependents being managed. |
| `disclosures` | `table` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the dependents management intent. |
| `object` | `string` | No | Object type identifier. |
| `parent_intent_id` | `string` | Yes | The parent intent ID (e.g. |
| `parent_intent_type` | `any` | Yes | The type of parent intent. |
| `plan` | `any` | Yes | Plan information including pricing details. |
| `status` | `any` | Yes | Current status of the dependents management intent. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Dependent():create({
  dependents_management_intent_id = --[[ string ]],
  dependents = --[[ table ]],
  disclosures = --[[ table ]],
  id = --[[ string ]],
  parent_intent_id = --[[ string ]],
  parent_intent_type = --[[ any ]],
  plan = --[[ any ]],
  status = --[[ any ]],
})
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Dependent():remove({ dependents_management_intent_id = "dependents_management_intent_id", id = "id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DependentsManagementIntentEntity

```lua
local dependents_management_intent = client:DependentsManagementIntent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `nil` | No | Details of the action required from the caller. |
| `coverage_options` | `nil|table` | No | Available member-scoped coverage options for the plan. |
| `dependents` | `table` | Yes | List of dependents being managed. |
| `disclosures` | `table` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the dependents management intent. |
| `object` | `string` | No | Object type identifier. |
| `parent_intent_id` | `string` | Yes | The parent intent ID (e.g. |
| `parent_intent_type` | `any` | Yes | The type of parent intent. |
| `plan` | `any` | Yes | Plan information including pricing details. |
| `status` | `any` | Yes | Current status of the dependents management intent. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DependentsManagementIntent():create({
  enrolment_intent_id = --[[ string ]],
  dependents = --[[ table ]],
  disclosures = --[[ table ]],
  id = --[[ string ]],
  parent_intent_id = --[[ string ]],
  parent_intent_type = --[[ any ]],
  plan = --[[ any ]],
  status = --[[ any ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DependentsManagementIntent():load({ id = "dependents_management_intent_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependentsManagementIntentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EligibilityCheckEntity

```lua
local eligibility_check = client:EligibilityCheck(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eligibility_status` | `any` | Yes | Eligibility status: `eligible` or `ineligible`. |
| `object` | `string` | No | The object type. |
| `plan` | `any` | Yes | The insurance plan associated with the group. |
| `provider` | `any` | Yes | The insurance provider associated with the group. |
| `reasons` | `table` | Yes | List of reasons why the employee is ineligible. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EligibilityCheck():create({
  group_id = --[[ string ]],
  eligibility_status = --[[ any ]],
  plan = --[[ any ]],
  provider = --[[ any ]],
  reasons = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EligibilityCheckEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmployeeEntity

```lua
local employee = client:Employee(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bank_account` | `nil` | No | Bank account details |
| `date_of_birth` | `string` | Yes | Date of birth of the employee |
| `earliest_benefits_start_date` | `nil|string` | No | The earliest date this employee can be enrolled in any benefits. |
| `email` | `string` | Yes | Email address of the employee |
| `employer_id` | `string` | No | Unique identifier for the employer |
| `external_customer_id` | `nil|string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `first_name` | `string` | Yes | First name of the employee. |
| `home_address` | `nil` | No | Location where the employee is legally registered to live |
| `id` | `string` | No | Unique identifier for the employee |
| `last_name` | `string` | Yes | Last name of the employee |
| `metadata` | `nil|table` | No | Set of key-value pairs that you can attach to an object. |
| `national_tax_id` | `string` | Yes | PPSN in Ireland, NINo in the UK, DNI/NIE in Spain |
| `nationality` | `nil` | No | Nationality of the employee (e.g. |
| `object` | `string` | No | The object type |
| `offboard_on` | `nil|string` | No | Date when the employee was or will be offboarded |
| `phone_number` | `string` | Yes | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | No | Unique identifier for the platform |
| `sex_at_birth` | `any` | Yes | The sex assigned to the employee at birth |
| `start_on` | `string` | No | Employment start date |
| `status` | `any` | No | Current status of the employee |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Employee():create({
  date_of_birth = --[[ string ]],
  email = --[[ string ]],
  first_name = --[[ string ]],
  last_name = --[[ string ]],
  national_tax_id = --[[ string ]],
  phone_number = --[[ string ]],
  sex_at_birth = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Employee():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Employee():load({ id = "employee_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Employee():update({
  id = "employee_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployeeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmployeeHealthInsuranceOfferEntity

```lua
local employee_health_insurance_offer = client:EmployeeHealthInsuranceOffer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_level` | `any` | Yes | Details about the coverage level for the offer. |
| `employee_id` | `string` | Yes | The Id of the employee for which the offer is available |
| `employer_id` | `string` | Yes | The Id of the employer for which the offer is available |
| `external_customer_id` | `nil|string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for offer |
| `object` | `string` | No | The object type |
| `required_action` | `nil` | No | Required action to progress the offer, if any. |
| `status` | `any` | Yes | Current status of offer |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EmployeeHealthInsuranceOffer():load({ id = "employee_health_insurance_offer_id", employee_id = "employee_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployeeHealthInsuranceOfferEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmployeeHealthInsuranceOfferResponsePagedListEntity

```lua
local employee_health_insurance_offer_response_paged_list = client:EmployeeHealthInsuranceOfferResponsePagedList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_level` | `any` | Yes | Details about the coverage level for the offer. |
| `employee_id` | `string` | Yes | The Id of the employee for which the offer is available |
| `employer_id` | `string` | Yes | The Id of the employer for which the offer is available |
| `external_customer_id` | `nil|string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for offer |
| `object` | `string` | No | The object type |
| `required_action` | `nil` | No | Required action to progress the offer, if any. |
| `status` | `any` | Yes | Current status of offer |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EmployeeHealthInsuranceOfferResponsePagedList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployeeHealthInsuranceOfferResponsePagedListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmployeeHealthInsurancePolicyEntity

```lua
local employee_health_insurance_policy = client:EmployeeHealthInsurancePolicy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `nil|string` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `any` | Yes | Represents the current coverage level for the policy |
| `employee_id` | `string` | Yes | The Id of the employee for which the policy is created |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolled_dependants_count` | `number` | Yes | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `any` | Yes | Enrolment type of the policy |
| `estimated_gross_premium` | `any` | Yes | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `nil|string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `opt_out_deadline_date` | `string` | Yes | Last day to opt out from the policy |
| `policy_number` | `nil|string` | No | Health insurance policy number, if available |
| `renewal` | `any` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `any` | Yes | Current status of policy |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EmployeeHealthInsurancePolicy():load({ id = "employee_health_insurance_policy_id", employee_id = "employee_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployeeHealthInsurancePolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmployeeHealthInsurancePolicyResponsePagedListEntity

```lua
local employee_health_insurance_policy_response_paged_list = client:EmployeeHealthInsurancePolicyResponsePagedList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `nil|string` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `any` | Yes | Represents the current coverage level for the policy |
| `employee_id` | `string` | Yes | The Id of the employee for which the policy is created |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolled_dependants_count` | `number` | Yes | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `any` | Yes | Enrolment type of the policy |
| `estimated_gross_premium` | `any` | Yes | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `nil|string` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `opt_out_deadline_date` | `string` | Yes | Last day to opt out from the policy |
| `policy_number` | `nil|string` | No | Health insurance policy number, if available |
| `renewal` | `any` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `any` | Yes | Current status of policy |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EmployeeHealthInsurancePolicyResponsePagedList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployeeHealthInsurancePolicyResponsePagedListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmployerEntity

```lua
local employer = client:Employer(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contact` | `any` | Yes |  |
| `earliest_benefits_start_date` | `nil|string` | No |  |
| `id` | `string` | Yes |  |
| `legal_address` | `any` | Yes |  |
| `legal_name` | `string` | Yes |  |
| `metadata` | `nil|table` | No | Set of key-value pairs that you can attach to an object. |
| `object` | `string` | No | The object type |
| `offboard_on` | `nil|string` | No |  |
| `platform_id` | `string` | No |  |
| `registration_number` | `nil|string` | No |  |
| `status` | `any` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Employer():create({
  contact = --[[ any ]],
  id = --[[ string ]],
  legal_address = --[[ any ]],
  legal_name = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Employer():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Employer():load({ id = "employer_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Employer():update({
  id = "employer_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmployerHealthInsurancePolicyEntity

```lua
local employer_health_insurance_policy = client:EmployerHealthInsurancePolicy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `nil|string` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `table` | Yes | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `number` | Yes | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolment_type` | `any` | Yes | Enrolment type of the policy |
| `group_policy_number` | `nil|string` | No | Group’s health insurance policy number, if available |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `renewal` | `any` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `any` | Yes | Current status of policy |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EmployerHealthInsurancePolicy():load({ id = "employer_health_insurance_policy_id", employer_id = "employer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployerHealthInsurancePolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmployerHealthInsurancePolicyResponsePagedListEntity

```lua
local employer_health_insurance_policy_response_paged_list = client:EmployerHealthInsurancePolicyResponsePagedList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `nil|string` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `table` | Yes | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `number` | Yes | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolment_type` | `any` | Yes | Enrolment type of the policy |
| `group_policy_number` | `nil|string` | No | Group’s health insurance policy number, if available |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `renewal` | `any` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `any` | Yes | Current status of policy |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EmployerHealthInsurancePolicyResponsePagedList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployerHealthInsurancePolicyResponsePagedListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmployerHealthInsuranceQuoteEntity

```lua
local employer_health_insurance_quote = client:EmployerHealthInsuranceQuote(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_levels` | `table` | Yes | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | Yes | The Id of the employer for which the is created |
| `id` | `string` | Yes | Unique identifier for the quote |
| `object` | `string` | No | The object type |
| `quoted_at` | `string` | Yes | Date and time the quote was created at |
| `required_action` | `nil` | No | Actions required by the employer to proceed with the quote. |
| `status` | `any` | Yes | Current status of the quote |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EmployerHealthInsuranceQuote():load({ id = "employer_health_insurance_quote_id", employer_id = "employer_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployerHealthInsuranceQuoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EmployerHealthInsuranceQuoteResponsePagedListEntity

```lua
local employer_health_insurance_quote_response_paged_list = client:EmployerHealthInsuranceQuoteResponsePagedList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_levels` | `table` | Yes | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | Yes | The Id of the employer for which the is created |
| `id` | `string` | Yes | Unique identifier for the quote |
| `object` | `string` | No | The object type |
| `quoted_at` | `string` | Yes | Date and time the quote was created at |
| `required_action` | `nil` | No | Actions required by the employer to proceed with the quote. |
| `status` | `any` | Yes | Current status of the quote |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EmployerHealthInsuranceQuoteResponsePagedList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EmployerHealthInsuranceQuoteResponsePagedListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnrolmentIntentEntity

```lua
local enrolment_intent = client:EnrolmentIntent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `nil` | No | If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment. |
| `disclosures` | `table` | Yes | Disclosures associated with this intent. |
| `employee_id` | `string` | Yes | Identifier for the employee associated with this enrolment intent. |
| `force_confirmation` | `boolean` | Yes | If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. |
| `group_id` | `string` | Yes | Identifier for the group associated with this enrolment intent. |
| `id` | `string` | Yes | Unique identifier for the enrolment intent. |
| `ineligibility_reason` | `nil` | No | If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility. |
| `object` | `string` | No | Object type identifier. |
| `pending_confirmation` | `nil` | No | If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state. |
| `policy_configuration` | `nil` | No | Policy configuration associated with this enrolment intent. |
| `policy_enrolments` | `table` | Yes | Policy enrolment information |
| `status` | `any` | Yes | Current status of the enrolment intent. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:EnrolmentIntent():create({
  disclosures = --[[ table ]],
  employee_id = --[[ string ]],
  force_confirmation = --[[ boolean ]],
  group_id = --[[ string ]],
  id = --[[ string ]],
  policy_enrolments = --[[ table ]],
  status = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EnrolmentIntent():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:EnrolmentIntent():load({ id = "enrolment_intent_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:EnrolmentIntent():update({
  id = "enrolment_intent_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnrolmentIntentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnrolmentIntentRequirementResponsePagedListEntity

```lua
local enrolment_intent_requirement_response_paged_list = client:EnrolmentIntentRequirementResponsePagedList(nil)
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

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:EnrolmentIntentRequirementResponsePagedList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnrolmentIntentRequirementResponsePagedListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EventEntity

```lua
local event = client:Event(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_version` | `string` | No |  |
| `created` | `string` | Yes |  |
| `data` | `nil` | Yes |  |
| `id` | `string` | Yes |  |
| `options` | `nil` | No |  |
| `parent` | `nil` | No |  |
| `platform_id` | `string` | Yes |  |
| `root` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Event():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Event():load({ id = "event_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupEntity

```lua
local group = client:Group(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `nil|string` | No | Short description of the purpose or scope of the `group`. |
| `employer_id` | `string` | Yes | Identifier for the `employer` that owns this `group`. |
| `enrolment_type` | `any` | Yes | Indicates how employees are enrolled into the group. |
| `group_policy_ids` | `table` | Yes | Group policy unique identifiers associated with this group. |
| `group_policy_intent_ids` | `table` | Yes | Group policy intent unique identifiers associated with this group. |
| `group_quote_intent_ids` | `table` | Yes | Group quote intent unique identifiers associated with this group. |
| `group_type` | `any` | Yes | Indicates how policies are organized for this group. |
| `id` | `string` | Yes | Unique identifier for the `group`. |
| `name` | `string` | Yes | Human-readable name of the `group`. |
| `object` | `string` | No | The object type |
| `status` | `any` | Yes | Current lifecycle state of the `group`, indicating its current progress. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Group():create({
  employer_id = --[[ string ]],
  enrolment_type = --[[ any ]],
  group_policy_ids = --[[ table ]],
  group_policy_intent_ids = --[[ table ]],
  group_quote_intent_ids = --[[ table ]],
  group_type = --[[ any ]],
  id = --[[ string ]],
  name = --[[ string ]],
  status = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Group():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Group():load({ id = "group_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Group():update({
  id = "group_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupEmployeeEntity

```lua
local group_employee = client:GroupEmployee(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desired_policy_start_date` | `nil|string` | No | The desired date for the employee's policy to start. |
| `eligibility_status` | `any` | Yes | Eligibility status for the employee in this group. |
| `enrolment_date` | `nil|string` | No | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `any` | Yes | Enrolment status for the employee in this group. |
| `enrolments` | `table` | Yes | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Yes | Unique identifier for the group. |
| `id` | `string` | Yes | Unique identifier for the employee. |
| `object` | `string` | No | The object type |
| `policies` | `table` | Yes | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `table` | Yes | List of scheduled group transitions for the employee. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GroupEmployee():create({
  id = --[[ string ]],
  eligibility_status = --[[ any ]],
  enrolment_status = --[[ any ]],
  enrolments = --[[ table ]],
  group_id = --[[ string ]],
  policies = --[[ table ]],
  scheduled_group_transitions = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupEmployeeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupEmployeeResponsePagedListEntity

```lua
local group_employee_response_paged_list = client:GroupEmployeeResponsePagedList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desired_policy_start_date` | `nil|string` | No | The desired date for the employee's policy to start. |
| `eligibility_status` | `any` | Yes | Eligibility status for the employee in this group. |
| `enrolment_date` | `nil|string` | No | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `any` | Yes | Enrolment status for the employee in this group. |
| `enrolments` | `table` | Yes | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Yes | Unique identifier for the group. |
| `id` | `string` | Yes | Unique identifier for the employee. |
| `object` | `string` | No | The object type |
| `policies` | `table` | Yes | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `table` | Yes | List of scheduled group transitions for the employee. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GroupEmployeeResponsePagedList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupEmployeeResponsePagedListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupPolicyEntity

```lua
local group_policy = client:GroupPolicy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `nil|string` | No | Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable. |
| `disclosures` | `table` | Yes | Disclosures associated with this group policy. |
| `employer_id` | `string` | No | Identifier for the employer associated with this group policy. |
| `end_date` | `nil|string` | No | Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended. |
| `group_id` | `string` | No | Identifier for the group associated with this group policy. |
| `health_insurance` | `nil` | No | Health insurance–specific fields (present when `type=health_insurance`). |
| `id` | `string` | Yes | Unique identifier for the group policy. |
| `object` | `string` | No | The object type |
| `plan` | `any` | Yes | Plan information for this policy |
| `provider` | `any` | Yes | Provider information for this policy. |
| `start_date` | `string` | Yes | Policy start (effective) date in ISO 8601 (YYYY-MM-DD). |
| `status` | `any` | Yes | Current lifecycle state of the `group_policy`, indicating its progress from creation to activation. |
| `type` | `any` | Yes | Policy type. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GroupPolicy():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GroupPolicy():load({ id = "group_policy_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupPolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupPolicyIntentEntity

```lua
local group_policy_intent = client:GroupPolicyIntent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `nil` | No | Details of the required action when the intent is in ActionRequired status. |
| `cost_sharing` | `nil` | No | Cost sharing configuration for the policy intent |
| `disclosures` | `table` | Yes | Disclosures associated with this intent. |
| `due_date` | `nil|string` | No | Due date for the policy intent |
| `group_id` | `string` | Yes | Unique identifier for the group |
| `id` | `string` | Yes | Unique identifier for the group policy intent |
| `object` | `string` | No | Object type identifier |
| `plan_id` | `string` | Yes | Unique identifier for the plan |
| `quote_intent_id` | `string` | Yes | Unique identifier for the group quote intent this policy intent was created from |
| `status` | `any` | Yes | Current status of the group policy intent |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GroupPolicyIntent():create({
  disclosures = --[[ table ]],
  group_id = --[[ string ]],
  id = --[[ string ]],
  plan_id = --[[ string ]],
  quote_intent_id = --[[ string ]],
  status = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GroupPolicyIntent():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GroupPolicyIntent():load({ id = "group_policy_intent_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupPolicyIntentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupPolicyIntentRequirementResponsePagedListEntity

```lua
local group_policy_intent_requirement_response_paged_list = client:GroupPolicyIntentRequirementResponsePagedList(nil)
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

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GroupPolicyIntentRequirementResponsePagedList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupPolicyIntentRequirementResponsePagedListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupQuoteEntity

```lua
local group_quote = client:GroupQuote(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `family_type` | `nil` | No | Type of the family covered by the employer. |
| `member_count` | `nil` | No | Numbers of additional members covered by the employer. |
| `member_selection` | `nil` | No | Whether specific member types are covered by the employer. |
| `percentage` | `nil` | No | Percentage of the premium the employer covers. |
| `type` | `any` | Yes | Cost sharing type. |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GroupQuote():load({ group_quote_intent_id = "group_quote_intent_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupQuoteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupQuoteIntentEntity

```lua
local group_quote_intent = client:GroupQuoteIntent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `nil` | No | Details of the action required from the caller, if the intent is in action_required status. |
| `consent_links` | `table` | Yes | Consent links that need to be acknowledged |
| `cost_sharing` | `nil` | No | Cost sharing configuration for the quote |
| `disclosures` | `table` | Yes | Disclosures associated with this intent. |
| `expected_start_date` | `nil|string` | No | Expected start date for the insurance coverage |
| `group_id` | `string` | Yes | Unique identifier for the group |
| `id` | `string` | Yes | Unique identifier for the group quote intent |
| `object` | `string` | No | Object type identifier |
| `plan_id` | `string` | Yes | Unique identifier for the plan |
| `status` | `any` | Yes | Current status of the group quote intent |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GroupQuoteIntent():create({
  consent_links = --[[ table ]],
  disclosures = --[[ table ]],
  group_id = --[[ string ]],
  id = --[[ string ]],
  plan_id = --[[ string ]],
  status = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GroupQuoteIntent():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GroupQuoteIntent():load({ id = "group_quote_intent_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupQuoteIntentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupQuoteIntentRequirementResponsePagedListEntity

```lua
local group_quote_intent_requirement_response_paged_list = client:GroupQuoteIntentRequirementResponsePagedList(nil)
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

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GroupQuoteIntentRequirementResponsePagedList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupQuoteIntentRequirementResponsePagedListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PlanEntity

```lua
local plan = client:Plan(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_from` | `string` | Yes | The date from which this plan is available (inclusive). |
| `available_to` | `nil|string` | No | The date until which this plan is available (inclusive). |
| `country` | `any` | Yes | The country this plan is available in. |
| `coverage_options` | `nil|table` | No | Coverage options available for this plan, organized by scope and input type. |
| `description` | `string` | Yes | Description of the plan. |
| `disclosures` | `table` | Yes | Disclosures associated with this plan. |
| `documents` | `table` | Yes | List of plan documents (e.g., IPIDs, T&Cs). |
| `eligible_count` | `nil|number` | No | Number of employees in the queried group eligible for this plan as-of `start_date`. |
| `employee_eligibility_criteria` | `table` | Yes | Eligibility criteria that employees must meet. |
| `employer_eligibility_criteria` | `table` | Yes | Eligibility criteria that employers must meet. |
| `health_insurance` | `nil` | No | Health insurance-specific details. |
| `id` | `string` | Yes | Unique identifier for the plan. |
| `ineligible_count` | `nil|number` | No | Number of employees in the queried group ineligible for this plan as-of `start_date`. |
| `name` | `string` | Yes | The name of the plan. |
| `object` | `string` | No | Object type. |
| `provider` | `any` | Yes | The provider offering this plan. |
| `total_count` | `nil|number` | No | Total employees in the queried group. |
| `type` | `any` | Yes | The benefit type of the plan. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Plan():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Plan():load({ id = "plan_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PlanEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PolicyEntity

```lua
local policy = client:Policy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundling_type` | `any` | Yes | Indicates how this policy is bundled within a group |
| `cancellation_date` | `nil|string` | No | Date the policy was cancelled (if applicable) |
| `disclosures` | `table` | Yes | Disclosures associated with this policy. |
| `employee_id` | `string` | Yes | Identifier of the employee associated with this policy. |
| `end_date` | `nil|string` | No | Policy end date (inclusive) in ISO 8601, or null if open-ended |
| `group_id` | `string` | Yes | Identifier of the group associated with this policy. |
| `group_policy_id` | `string` | Yes | Identifier of the group policy id associated with this policy. |
| `health_insurance` | `nil` | No | Health insurance–specific fields (present when `type=health_insurance`) |
| `id` | `string` | Yes | Unique identifier for the policy. |
| `object` | `string` | No | Object type |
| `plan` | `any` | Yes | Plan information for this policy |
| `provider` | `any` | Yes | Provider information for this policy |
| `start_date` | `string` | Yes | Policy start (effective) date in ISO 8601 (YYYY-MM-DD) |
| `status` | `any` | Yes | Current lifecycle state of the policy |
| `type` | `any` | Yes | Policy type. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Policy():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Policy():load({ id = "policy_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PolicyAmendmentIntentEntity

```lua
local policy_amendment_intent = client:PolicyAmendmentIntent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amendment_reason` | `any` | Yes | The reason for the policy amendment. |
| `disclosures` | `table` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the policy amendment intent. |
| `object` | `string` | No | Object type identifier. |
| `pending_confirmation` | `nil` | No | Information about the pending confirmation if the intent status is `pending_confirmation`. |
| `policy_id` | `string` | Yes | The policy ID for which the amendment is requested. |
| `processing_error` | `nil` | No | Information about the processing error if the intent status is `processing_error`. |
| `requested_changes` | `table` | Yes | List of requested changes to the policy. |
| `required_action` | `nil` | No | Information about the required action if the intent status is `action_required`. |
| `status` | `any` | Yes | Current status of the policy amendment intent. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PolicyAmendmentIntent():create({
  id = --[[ string ]],
  amendment_reason = --[[ any ]],
  disclosures = --[[ table ]],
  policy_id = --[[ string ]],
  requested_changes = --[[ table ]],
  status = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PolicyAmendmentIntent():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PolicyAmendmentIntent():load({ id = "policy_amendment_intent_id", policy_id = "policy_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PolicyAmendmentIntentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PolicyImportIntentEntity

```lua
local policy_import_intent = client:PolicyImportIntent(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_persons` | `table` | Yes | List of associated persons linked to this policy import. |
| `employee_id` | `string` | Yes | The employee ID for the policy import. |
| `group_id` | `string` | Yes | The group ID for the policy import. |
| `id` | `string` | Yes | Unique identifier for the policy import intent. |
| `member_number` | `string` | Yes | The member number assigned by the provider. |
| `object` | `string` | No | Object type identifier. |
| `policy_end_date` | `nil|string` | No | The end date of the policy. |
| `policy_start_date` | `string` | Yes | The start date of the policy. |
| `provider_policy_number` | `string` | Yes | The provider's policy number. |
| `status` | `any` | Yes | Current status of the policy import intent. |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PolicyImportIntent():create({
  associated_persons = --[[ table ]],
  employee_id = --[[ string ]],
  group_id = --[[ string ]],
  id = --[[ string ]],
  member_number = --[[ string ]],
  policy_start_date = --[[ string ]],
  provider_policy_number = --[[ string ]],
  status = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PolicyImportIntent():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PolicyImportIntent():load({ id = "policy_import_intent_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PolicyImportIntentEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProviderEntity

```lua
local provider = client:Provider(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes | Description of the provider. |
| `employer_platform_url` | `nil|string` | No | URL to the employer portal/platform for this provider, if available. |
| `id` | `string` | Yes | Unique identifier for the provider. |
| `kota_hub_url` | `nil|string` | No | URL to the Kota Hub page for this platform, if configured. |
| `logo_url` | `string` | Yes | URL to the provider's logo image. |
| `name` | `string` | Yes | The name of the provider. |
| `object` | `string` | No | Object type. |
| `support_phone` | `string` | Yes | Customer support phone number. |
| `supported_countries` | `table` | Yes | List of countries supported by this provider. |
| `website_url` | `string` | Yes | The provider's main website URL. |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Provider():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Provider():load({ id = "provider_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProviderEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ReplayEntity

```lua
local replay = client:Replay(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deliveries` | `table` | Yes |  |
| `event_id` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Replay():create({
  event_id = --[[ string ]],
  deliveries = --[[ table ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ReplayEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookEndpointEntity

```lua
local webhook_endpoint = client:WebhookEndpoint(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The date and time the endpoint was created |
| `endpoint_url` | `string` | Yes | The registered URL of the endpoint |
| `id` | `string` | Yes | The unique identifier of the endpoint |
| `object` | `string` | No | The object type |
| `subscribed_events` | `table` | Yes | The events the endpoint is subscribed to |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:WebhookEndpoint():load({ id = "webhook_endpoint_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEndpointEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookEndpointResponsePagedListEntity

```lua
local webhook_endpoint_response_paged_list = client:WebhookEndpointResponsePagedList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes | The date and time the endpoint was created |
| `endpoint_url` | `string` | Yes | The registered URL of the endpoint |
| `id` | `string` | Yes | The unique identifier of the endpoint |
| `object` | `string` | No | The object type |
| `subscribed_events` | `table` | Yes | The events the endpoint is subscribed to |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:WebhookEndpointResponsePagedList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEndpointResponsePagedListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

