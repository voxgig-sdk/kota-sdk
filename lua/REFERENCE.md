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
| `date_of_birth` | `string` | Yes |  |
| `email` | `nil|string` | No |  |
| `employee_id` | `string` | Yes |  |
| `first_name` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `last_name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `phone_number` | `nil|string` | No |  |
| `platform_id` | `string` | No |  |
| `relationship_type` | `any` | Yes |  |
| `sex_at_birth` | `any` | Yes |  |

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
| `associated_person_id` | `string` | Yes |  |
| `date_of_birth` | `string` | Yes |  |
| `eligibility_status` | `any` | Yes |  |
| `first_name` | `string` | Yes |  |
| `ineligibility_reason` | `nil|string` | No |  |
| `last_name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `relationship` | `any` | Yes |  |
| `sex_at_birth` | `any` | Yes |  |

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
| `created_at` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `nil|string` | No |  |
| `finalized_at` | `nil|string` | No |  |
| `id` | `string` | Yes |  |
| `last_updated_at` | `string` | Yes |  |
| `object` | `string` | No |  |
| `period` | `any` | Yes |  |
| `status` | `any` | Yes |  |

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
| `contribution_report_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `currency` | `any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `nil|string` | No |  |
| `finalized_at` | `nil|string` | No |  |
| `health_insurance` | `any` | Yes |  |
| `last_updated_at` | `string` | Yes |  |
| `object` | `string` | No |  |
| `period` | `any` | Yes |  |
| `status` | `any` | Yes |  |

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
| `contribution_report_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `currency` | `any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `nil|string` | No |  |
| `finalized_at` | `nil|string` | No |  |
| `health_insurance` | `any` | Yes |  |
| `last_updated_at` | `string` | Yes |  |
| `object` | `string` | No |  |
| `period` | `any` | Yes |  |
| `status` | `any` | Yes |  |

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
| `action_required` | `nil` | No |  |
| `coverage_options` | `nil|table` | No |  |
| `dependents` | `table` | Yes |  |
| `disclosures` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `parent_intent_id` | `string` | Yes |  |
| `parent_intent_type` | `any` | Yes |  |
| `plan` | `any` | Yes |  |
| `status` | `any` | Yes |  |

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
| `action_required` | `nil` | No |  |
| `coverage_options` | `nil|table` | No |  |
| `dependents` | `table` | Yes |  |
| `disclosures` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `parent_intent_id` | `string` | Yes |  |
| `parent_intent_type` | `any` | Yes |  |
| `plan` | `any` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:DependentsManagementIntent():create({
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
| `eligibility_status` | `any` | Yes |  |
| `object` | `string` | No |  |
| `plan` | `any` | Yes |  |
| `provider` | `any` | Yes |  |
| `reasons` | `table` | Yes |  |

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
| `bank_account` | `nil` | No |  |
| `date_of_birth` | `string` | Yes |  |
| `earliest_benefits_start_date` | `nil|string` | No |  |
| `email` | `string` | Yes |  |
| `employer_id` | `string` | No |  |
| `external_customer_id` | `nil|string` | No |  |
| `first_name` | `string` | Yes |  |
| `home_address` | `nil` | No |  |
| `id` | `string` | No |  |
| `last_name` | `string` | Yes |  |
| `metadata` | `nil|table` | No |  |
| `national_tax_id` | `string` | Yes |  |
| `nationality` | `nil` | No |  |
| `object` | `string` | No |  |
| `offboard_on` | `nil|string` | No |  |
| `phone_number` | `string` | Yes |  |
| `platform_id` | `string` | No |  |
| `sex_at_birth` | `any` | Yes |  |
| `start_on` | `string` | No |  |
| `status` | `any` | No |  |

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
| `coverage_level` | `any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `nil|string` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `required_action` | `nil` | No |  |
| `status` | `any` | Yes |  |

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
| `coverage_level` | `any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `nil|string` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `required_action` | `nil` | No |  |
| `status` | `any` | Yes |  |

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
| `cancellation_date` | `nil|string` | No |  |
| `coverage_level` | `any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolled_dependants_count` | `number` | Yes |  |
| `enrolment_type` | `any` | Yes |  |
| `estimated_gross_premium` | `any` | Yes |  |
| `external_customer_id` | `nil|string` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `opt_out_deadline_date` | `string` | Yes |  |
| `policy_number` | `nil|string` | No |  |
| `renewal` | `any` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `any` | Yes |  |

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
| `cancellation_date` | `nil|string` | No |  |
| `coverage_level` | `any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolled_dependants_count` | `number` | Yes |  |
| `enrolment_type` | `any` | Yes |  |
| `estimated_gross_premium` | `any` | Yes |  |
| `external_customer_id` | `nil|string` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `opt_out_deadline_date` | `string` | Yes |  |
| `policy_number` | `nil|string` | No |  |
| `renewal` | `any` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `any` | Yes |  |

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
| `metadata` | `nil|table` | No |  |
| `object` | `string` | No |  |
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
| `cancellation_date` | `nil|string` | No |  |
| `coverage_levels` | `table` | Yes |  |
| `employer_cancellation_period_length` | `number` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolment_type` | `any` | Yes |  |
| `group_policy_number` | `nil|string` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `renewal` | `any` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `any` | Yes |  |

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
| `cancellation_date` | `nil|string` | No |  |
| `coverage_levels` | `table` | Yes |  |
| `employer_cancellation_period_length` | `number` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolment_type` | `any` | Yes |  |
| `group_policy_number` | `nil|string` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `renewal` | `any` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `any` | Yes |  |

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
| `coverage_levels` | `table` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `quoted_at` | `string` | Yes |  |
| `required_action` | `nil` | No |  |
| `status` | `any` | Yes |  |

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
| `coverage_levels` | `table` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `quoted_at` | `string` | Yes |  |
| `required_action` | `nil` | No |  |
| `status` | `any` | Yes |  |

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
| `action_required` | `nil` | No |  |
| `disclosures` | `table` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `force_confirmation` | `boolean` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `ineligibility_reason` | `nil` | No |  |
| `object` | `string` | No |  |
| `pending_confirmation` | `nil` | No |  |
| `policy_configuration` | `nil` | No |  |
| `policy_enrolments` | `table` | Yes |  |
| `status` | `any` | Yes |  |

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
| `id` | `string` | Yes |  |
| `is_fulfilled` | `boolean` | Yes |  |
| `object` | `string` | No |  |
| `object_id` | `string` | Yes |  |
| `object_type` | `any` | Yes |  |
| `requirement_type` | `any` | Yes |  |

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
| `description` | `nil|string` | No |  |
| `employer_id` | `string` | Yes |  |
| `enrolment_type` | `any` | Yes |  |
| `group_policy_ids` | `table` | Yes |  |
| `group_policy_intent_ids` | `table` | Yes |  |
| `group_quote_intent_ids` | `table` | Yes |  |
| `group_type` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `status` | `any` | Yes |  |

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
| `desired_policy_start_date` | `nil|string` | No |  |
| `eligibility_status` | `any` | Yes |  |
| `enrolment_date` | `nil|string` | No |  |
| `enrolment_status` | `any` | Yes |  |
| `enrolments` | `table` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `policies` | `table` | Yes |  |
| `scheduled_group_transitions` | `table` | Yes |  |

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
| `desired_policy_start_date` | `nil|string` | No |  |
| `eligibility_status` | `any` | Yes |  |
| `enrolment_date` | `nil|string` | No |  |
| `enrolment_status` | `any` | Yes |  |
| `enrolments` | `table` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `policies` | `table` | Yes |  |
| `scheduled_group_transitions` | `table` | Yes |  |

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
| `cancellation_date` | `nil|string` | No |  |
| `disclosures` | `table` | Yes |  |
| `employer_id` | `string` | No |  |
| `end_date` | `nil|string` | No |  |
| `group_id` | `string` | No |  |
| `health_insurance` | `nil` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan` | `any` | Yes |  |
| `provider` | `any` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `any` | Yes |  |
| `type` | `any` | Yes |  |

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
| `action_required` | `nil` | No |  |
| `cost_sharing` | `nil` | No |  |
| `disclosures` | `table` | Yes |  |
| `due_date` | `nil|string` | No |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan_id` | `string` | Yes |  |
| `quote_intent_id` | `string` | Yes |  |
| `status` | `any` | Yes |  |

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
| `id` | `string` | Yes |  |
| `is_fulfilled` | `boolean` | Yes |  |
| `object` | `string` | No |  |
| `object_id` | `string` | Yes |  |
| `object_type` | `any` | Yes |  |
| `requirement_type` | `any` | Yes |  |

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
| `family_type` | `nil` | No |  |
| `member_count` | `nil` | No |  |
| `member_selection` | `nil` | No |  |
| `percentage` | `nil` | No |  |
| `type` | `any` | Yes |  |

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
| `action_required` | `nil` | No |  |
| `consent_links` | `table` | Yes |  |
| `cost_sharing` | `nil` | No |  |
| `disclosures` | `table` | Yes |  |
| `expected_start_date` | `nil|string` | No |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan_id` | `string` | Yes |  |
| `status` | `any` | Yes |  |

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
| `id` | `string` | Yes |  |
| `is_fulfilled` | `boolean` | Yes |  |
| `object` | `string` | No |  |
| `object_id` | `string` | Yes |  |
| `object_type` | `any` | Yes |  |
| `requirement_type` | `any` | Yes |  |

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
| `available_from` | `string` | Yes |  |
| `available_to` | `nil|string` | No |  |
| `country` | `any` | Yes |  |
| `coverage_options` | `nil|table` | No |  |
| `description` | `string` | Yes |  |
| `disclosures` | `table` | Yes |  |
| `documents` | `table` | Yes |  |
| `eligible_count` | `nil|number` | No |  |
| `employee_eligibility_criteria` | `table` | Yes |  |
| `employer_eligibility_criteria` | `table` | Yes |  |
| `health_insurance` | `nil` | No |  |
| `id` | `string` | Yes |  |
| `ineligible_count` | `nil|number` | No |  |
| `name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `provider` | `any` | Yes |  |
| `total_count` | `nil|number` | No |  |
| `type` | `any` | Yes |  |

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
| `bundling_type` | `any` | Yes |  |
| `cancellation_date` | `nil|string` | No |  |
| `disclosures` | `table` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `end_date` | `nil|string` | No |  |
| `group_id` | `string` | Yes |  |
| `group_policy_id` | `string` | Yes |  |
| `health_insurance` | `nil` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan` | `any` | Yes |  |
| `provider` | `any` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `any` | Yes |  |
| `type` | `any` | Yes |  |

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
| `amendment_reason` | `any` | Yes |  |
| `disclosures` | `table` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `pending_confirmation` | `nil` | No |  |
| `policy_id` | `string` | Yes |  |
| `processing_error` | `nil` | No |  |
| `requested_changes` | `table` | Yes |  |
| `required_action` | `nil` | No |  |
| `status` | `any` | Yes |  |

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
| `associated_persons` | `table` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `member_number` | `string` | Yes |  |
| `object` | `string` | No |  |
| `policy_end_date` | `nil|string` | No |  |
| `policy_start_date` | `string` | Yes |  |
| `provider_policy_number` | `string` | Yes |  |
| `status` | `any` | Yes |  |

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
| `description` | `string` | Yes |  |
| `employer_platform_url` | `nil|string` | No |  |
| `id` | `string` | Yes |  |
| `kota_hub_url` | `nil|string` | No |  |
| `logo_url` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `support_phone` | `string` | Yes |  |
| `supported_countries` | `table` | Yes |  |
| `website_url` | `string` | Yes |  |

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
| `created_at` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `subscribed_events` | `table` | Yes |  |

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
| `created_at` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `subscribed_events` | `table` | Yes |  |

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

