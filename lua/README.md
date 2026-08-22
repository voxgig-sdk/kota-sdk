# Kota Lua SDK



The Lua SDK for the Kota API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:AssociatedPerson()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/kota-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("kota_sdk")

local client = sdk.new({
  apikey = os.getenv("KOTA_APIKEY"),
})
```

### 2. List associatedperson records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local associatedpersons, err = client:AssociatedPerson():list()
if err then error(err) end

for _, item in ipairs(associatedpersons) do
  print(item["id"], item["date_of_birth"])
end
```

### 3. Load an associatedperson

AssociatedPerson is nested under employee, so provide the `employee_id`.

```lua
local associatedperson, err = client:AssociatedPerson():load({ employee_id = "example_employee_id", id = "example_id" })
if err then error(err) end
print(associatedperson)
```

### 4. Create, update, and remove

```lua
-- Create
local created, err = client:AssociatedPerson():create({ employee_id = "example_employee_id", date_of_birth = "example_date_of_birth", first_name = "example_first_name", id = "example_id", last_name = "example_last_name", relationship_type = "example_relationship_type", sex_at_birth = "example_sex_at_birth" })
if err then error(err) end

-- Update
client:AssociatedPerson():update({ id = created:data_get()["id"], employee_id = "example_employee_id", date_of_birth = "example_date_of_birth" })

-- Remove
client:AssociatedPerson():remove({ id = created:data_get()["id"], employee_id = "example_employee_id" })
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local dependentsmanagementintent, err = client:DependentsManagementIntent():load({ id = "example_id" })
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:DependentsManagementIntent():load({ id = "test01" })
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
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
cd lua && busted test/
```


## Reference

### KotaSDK

```lua
local sdk = require("kota_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### KotaSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
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
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local associated_person, err = client:AssociatedPerson():load({ id = "example_id" })
    if err then error(err) end
    -- associated_person is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local associated_person = client:AssociatedPerson(nil)`

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
| `email` | `nil|string` | Email address of the associated person |
| `employee_id` | `string` | Unique identifier for the employee this person is associated with |
| `first_name` | `string` | First name of the associated person |
| `id` | `string` | Unique identifier for the associated person |
| `last_name` | `string` | Last name of the associated person |
| `object` | `string` | The object type |
| `phone_number` | `nil|string` | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | Unique identifier for the platform |
| `relationship_type` | `any` | The relationship type between the employee and the associated person |
| `sex_at_birth` | `any` | The sex assigned to the associated person at birth |

#### Example: Load

```lua
local associated_person, err = client:AssociatedPerson():load({ id = "associated_person_id", employee_id = "employee_id" })
```

#### Example: List

```lua
local associated_persons, err = client:AssociatedPerson():list()
```

#### Example: Create

```lua
local associated_person, err = client:AssociatedPerson():create({
  employee_id = "example_employee_id", -- string
  date_of_birth = "example_date_of_birth", -- string
  first_name = "example_first_name", -- string
  id = "example_id", -- string
  last_name = "example_last_name", -- string
  relationship_type = "example_relationship_type", -- any
  sex_at_birth = "example_sex_at_birth", -- any
})
```


### AssociatedPersonEligibilityResponsePagedList

Create an instance: `local associated_person_eligibility_response_paged_list = client:AssociatedPersonEligibilityResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_person_id` | `string` | The associated person ID. |
| `date_of_birth` | `string` | Date of birth of the associated person. |
| `eligibility_status` | `any` | Eligibility status for the policy/plan. |
| `first_name` | `string` | First name of the associated person. |
| `ineligibility_reason` | `nil|string` | Reason for ineligibility if status is ineligible. |
| `last_name` | `string` | Last name of the associated person. |
| `object` | `string` | The object type |
| `relationship` | `any` | Relationship type to the employee. |
| `sex_at_birth` | `any` | Sex at birth of the associated person. |

#### Example: List

```lua
local associated_person_eligibility_response_paged_lists, err = client:AssociatedPersonEligibilityResponsePagedList():list()
```


### ContributionReport

Create an instance: `local contribution_report = client:ContributionReport(nil)`

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
| `external_customer_id` | `nil|string` | Unique identifier of the customer for which the report is created. |
| `finalized_at` | `nil|string` | Date and time the report was finalized, if applicable |
| `id` | `string` | Unique identifier for the contribution report |
| `last_updated_at` | `string` | Date and time of the last update to the report |
| `object` | `string` | The object type |
| `period` | `any` | Period covered by the contribution report |
| `status` | `any` | Current status of the contribution report |

#### Example: Load

```lua
local contribution_report, err = client:ContributionReport():load({ id = "contribution_report_id" })
```

#### Example: List

```lua
local contribution_reports, err = client:ContributionReport():list()
```

#### Example: Create

```lua
local contribution_report, err = client:ContributionReport():create({
  id = "example_id", -- string
  created_at = "example_created_at", -- string
  employer_id = "example_employer_id", -- string
  last_updated_at = "example_last_updated_at", -- string
  period = "example_period", -- any
  status = "example_status", -- any
})
```


### ContributionReportEmployeeBreakdown

Create an instance: `local contribution_report_employee_breakdown = client:ContributionReportEmployeeBreakdown(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contribution_report_id` | `string` | Unique identifier of the related contribution report |
| `created_at` | `string` | Date and time the breakdown was created |
| `currency` | `any` | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `nil|string` | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `nil|string` | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `any` | Health insurance contribution details |
| `last_updated_at` | `string` | Date and time of the last update to the breakdown |
| `object` | `string` | The object type |
| `period` | `any` | Period covered by the employee breakdown |
| `status` | `any` | Current status of the breakdown |

#### Example: Load

```lua
local contribution_report_employee_breakdown, err = client:ContributionReportEmployeeBreakdown():load({ id = "contribution_report_employee_breakdown_id", contribution_report_id = "contribution_report_id" })
```


### ContributionReportEmployeeBreakdownResponsePagedList

Create an instance: `local contribution_report_employee_breakdown_response_paged_list = client:ContributionReportEmployeeBreakdownResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contribution_report_id` | `string` | Unique identifier of the related contribution report |
| `created_at` | `string` | Date and time the breakdown was created |
| `currency` | `any` | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `nil|string` | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `nil|string` | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `any` | Health insurance contribution details |
| `last_updated_at` | `string` | Date and time of the last update to the breakdown |
| `object` | `string` | The object type |
| `period` | `any` | Period covered by the employee breakdown |
| `status` | `any` | Current status of the breakdown |

#### Example: List

```lua
local contribution_report_employee_breakdown_response_paged_lists, err = client:ContributionReportEmployeeBreakdownResponsePagedList():list()
```


### CreateHostedSessionToken

Create an instance: `local create_hosted_session_token = client:CreateHostedSessionToken(nil)`

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

```lua
local create_hosted_session_token, err = client:CreateHostedSessionToken():create({
  expiry = "example_expiry", -- string
  link = "example_link", -- string
})
```


### CreateSessionToken

Create an instance: `local create_session_token = client:CreateSessionToken(nil)`

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

```lua
local create_session_token, err = client:CreateSessionToken():create({
  expiry = "example_expiry", -- string
  token = "example_token", -- string
})
```


### Dependent

Create an instance: `local dependent = client:Dependent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `nil` | Details of the action required from the caller. |
| `coverage_options` | `nil|table` | Available member-scoped coverage options for the plan. |
| `dependents` | `table` | List of dependents being managed. |
| `disclosures` | `table` | Disclosures associated with this intent. |
| `id` | `string` | Unique identifier for the dependents management intent. |
| `object` | `string` | Object type identifier. |
| `parent_intent_id` | `string` | The parent intent ID (e.g. |
| `parent_intent_type` | `any` | The type of parent intent. |
| `plan` | `any` | Plan information including pricing details. |
| `status` | `any` | Current status of the dependents management intent. |

#### Example: Create

```lua
local dependent, err = client:Dependent():create({
  dependents_management_intent_id = "example_dependents_management_intent_id", -- string
  dependents = {}, -- table
  disclosures = {}, -- table
  id = "example_id", -- string
  parent_intent_id = "example_parent_intent_id", -- string
  parent_intent_type = "example_parent_intent_type", -- any
  plan = "example_plan", -- any
  status = "example_status", -- any
})
```


### DependentsManagementIntent

Create an instance: `local dependents_management_intent = client:DependentsManagementIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `nil` | Details of the action required from the caller. |
| `coverage_options` | `nil|table` | Available member-scoped coverage options for the plan. |
| `dependents` | `table` | List of dependents being managed. |
| `disclosures` | `table` | Disclosures associated with this intent. |
| `id` | `string` | Unique identifier for the dependents management intent. |
| `object` | `string` | Object type identifier. |
| `parent_intent_id` | `string` | The parent intent ID (e.g. |
| `parent_intent_type` | `any` | The type of parent intent. |
| `plan` | `any` | Plan information including pricing details. |
| `status` | `any` | Current status of the dependents management intent. |

#### Example: Load

```lua
local dependents_management_intent, err = client:DependentsManagementIntent():load({ id = "dependents_management_intent_id" })
```

#### Example: Create

```lua
local dependents_management_intent, err = client:DependentsManagementIntent():create({
  enrolment_intent_id = "example_enrolment_intent_id", -- string
  dependents = {}, -- table
  disclosures = {}, -- table
  id = "example_id", -- string
  parent_intent_id = "example_parent_intent_id", -- string
  parent_intent_type = "example_parent_intent_type", -- any
  plan = "example_plan", -- any
  status = "example_status", -- any
})
```


### EligibilityCheck

Create an instance: `local eligibility_check = client:EligibilityCheck(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `eligibility_status` | `any` | Eligibility status: `eligible` or `ineligible`. |
| `object` | `string` | The object type. |
| `plan` | `any` | The insurance plan associated with the group. |
| `provider` | `any` | The insurance provider associated with the group. |
| `reasons` | `table` | List of reasons why the employee is ineligible. |

#### Example: Create

```lua
local eligibility_check, err = client:EligibilityCheck():create({
  group_id = "example_group_id", -- string
  eligibility_status = "example_eligibility_status", -- any
  plan = "example_plan", -- any
  provider = "example_provider", -- any
  reasons = {}, -- table
})
```


### Employee

Create an instance: `local employee = client:Employee(nil)`

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
| `bank_account` | `nil` | Bank account details |
| `date_of_birth` | `string` | Date of birth of the employee |
| `earliest_benefits_start_date` | `nil|string` | The earliest date this employee can be enrolled in any benefits. |
| `email` | `string` | Email address of the employee |
| `employer_id` | `string` | Unique identifier for the employer |
| `external_customer_id` | `nil|string` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `first_name` | `string` | First name of the employee. |
| `home_address` | `nil` | Location where the employee is legally registered to live |
| `id` | `string` | Unique identifier for the employee |
| `last_name` | `string` | Last name of the employee |
| `metadata` | `nil|table` | Set of key-value pairs that you can attach to an object. |
| `national_tax_id` | `string` | PPSN in Ireland, NINo in the UK, DNI/NIE in Spain |
| `nationality` | `nil` | Nationality of the employee (e.g. |
| `object` | `string` | The object type |
| `offboard_on` | `nil|string` | Date when the employee was or will be offboarded |
| `phone_number` | `string` | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | Unique identifier for the platform |
| `sex_at_birth` | `any` | The sex assigned to the employee at birth |
| `start_on` | `string` | Employment start date |
| `status` | `any` | Current status of the employee |

#### Example: Load

```lua
local employee, err = client:Employee():load({ id = "employee_id" })
```

#### Example: List

```lua
local employees, err = client:Employee():list()
```

#### Example: Create

```lua
local employee, err = client:Employee():create({
  date_of_birth = "example_date_of_birth", -- string
  email = "example_email", -- string
  first_name = "example_first_name", -- string
  last_name = "example_last_name", -- string
  national_tax_id = "example_national_tax_id", -- string
  phone_number = "example_phone_number", -- string
  sex_at_birth = "example_sex_at_birth", -- any
})
```


### EmployeeHealthInsuranceOffer

Create an instance: `local employee_health_insurance_offer = client:EmployeeHealthInsuranceOffer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_level` | `any` | Details about the coverage level for the offer. |
| `employee_id` | `string` | The Id of the employee for which the offer is available |
| `employer_id` | `string` | The Id of the employer for which the offer is available |
| `external_customer_id` | `nil|string` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for offer |
| `object` | `string` | The object type |
| `required_action` | `nil` | Required action to progress the offer, if any. |
| `status` | `any` | Current status of offer |

#### Example: Load

```lua
local employee_health_insurance_offer, err = client:EmployeeHealthInsuranceOffer():load({ id = "employee_health_insurance_offer_id", employee_id = "employee_id" })
```


### EmployeeHealthInsuranceOfferResponsePagedList

Create an instance: `local employee_health_insurance_offer_response_paged_list = client:EmployeeHealthInsuranceOfferResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_level` | `any` | Details about the coverage level for the offer. |
| `employee_id` | `string` | The Id of the employee for which the offer is available |
| `employer_id` | `string` | The Id of the employer for which the offer is available |
| `external_customer_id` | `nil|string` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for offer |
| `object` | `string` | The object type |
| `required_action` | `nil` | Required action to progress the offer, if any. |
| `status` | `any` | Current status of offer |

#### Example: List

```lua
local employee_health_insurance_offer_response_paged_lists, err = client:EmployeeHealthInsuranceOfferResponsePagedList():list()
```


### EmployeeHealthInsurancePolicy

Create an instance: `local employee_health_insurance_policy = client:EmployeeHealthInsurancePolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `nil|string` | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `any` | Represents the current coverage level for the policy |
| `employee_id` | `string` | The Id of the employee for which the policy is created |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolled_dependants_count` | `number` | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `any` | Enrolment type of the policy |
| `estimated_gross_premium` | `any` | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `nil|string` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `opt_out_deadline_date` | `string` | Last day to opt out from the policy |
| `policy_number` | `nil|string` | Health insurance policy number, if available |
| `renewal` | `any` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `any` | Current status of policy |

#### Example: Load

```lua
local employee_health_insurance_policy, err = client:EmployeeHealthInsurancePolicy():load({ id = "employee_health_insurance_policy_id", employee_id = "employee_id" })
```


### EmployeeHealthInsurancePolicyResponsePagedList

Create an instance: `local employee_health_insurance_policy_response_paged_list = client:EmployeeHealthInsurancePolicyResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `nil|string` | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `any` | Represents the current coverage level for the policy |
| `employee_id` | `string` | The Id of the employee for which the policy is created |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolled_dependants_count` | `number` | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `any` | Enrolment type of the policy |
| `estimated_gross_premium` | `any` | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `nil|string` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `opt_out_deadline_date` | `string` | Last day to opt out from the policy |
| `policy_number` | `nil|string` | Health insurance policy number, if available |
| `renewal` | `any` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `any` | Current status of policy |

#### Example: List

```lua
local employee_health_insurance_policy_response_paged_lists, err = client:EmployeeHealthInsurancePolicyResponsePagedList():list()
```


### Employer

Create an instance: `local employer = client:Employer(nil)`

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
| `contact` | `any` |  |
| `earliest_benefits_start_date` | `nil|string` |  |
| `id` | `string` |  |
| `legal_address` | `any` |  |
| `legal_name` | `string` |  |
| `metadata` | `nil|table` | Set of key-value pairs that you can attach to an object. |
| `object` | `string` | The object type |
| `offboard_on` | `nil|string` |  |
| `platform_id` | `string` |  |
| `registration_number` | `nil|string` |  |
| `status` | `any` |  |

#### Example: Load

```lua
local employer, err = client:Employer():load({ id = "employer_id" })
```

#### Example: List

```lua
local employers, err = client:Employer():list()
```

#### Example: Create

```lua
local employer, err = client:Employer():create({
  contact = "example_contact", -- any
  id = "example_id", -- string
  legal_address = "example_legal_address", -- any
  legal_name = "example_legal_name", -- string
})
```


### EmployerHealthInsurancePolicy

Create an instance: `local employer_health_insurance_policy = client:EmployerHealthInsurancePolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `nil|string` | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `table` | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `number` | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolment_type` | `any` | Enrolment type of the policy |
| `group_policy_number` | `nil|string` | Group’s health insurance policy number, if available |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `renewal` | `any` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `any` | Current status of policy |

#### Example: Load

```lua
local employer_health_insurance_policy, err = client:EmployerHealthInsurancePolicy():load({ id = "employer_health_insurance_policy_id", employer_id = "employer_id" })
```


### EmployerHealthInsurancePolicyResponsePagedList

Create an instance: `local employer_health_insurance_policy_response_paged_list = client:EmployerHealthInsurancePolicyResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `nil|string` | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `table` | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `number` | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolment_type` | `any` | Enrolment type of the policy |
| `group_policy_number` | `nil|string` | Group’s health insurance policy number, if available |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `renewal` | `any` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `any` | Current status of policy |

#### Example: List

```lua
local employer_health_insurance_policy_response_paged_lists, err = client:EmployerHealthInsurancePolicyResponsePagedList():list()
```


### EmployerHealthInsuranceQuote

Create an instance: `local employer_health_insurance_quote = client:EmployerHealthInsuranceQuote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_levels` | `table` | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | The Id of the employer for which the is created |
| `id` | `string` | Unique identifier for the quote |
| `object` | `string` | The object type |
| `quoted_at` | `string` | Date and time the quote was created at |
| `required_action` | `nil` | Actions required by the employer to proceed with the quote. |
| `status` | `any` | Current status of the quote |

#### Example: Load

```lua
local employer_health_insurance_quote, err = client:EmployerHealthInsuranceQuote():load({ id = "employer_health_insurance_quote_id", employer_id = "employer_id" })
```


### EmployerHealthInsuranceQuoteResponsePagedList

Create an instance: `local employer_health_insurance_quote_response_paged_list = client:EmployerHealthInsuranceQuoteResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_levels` | `table` | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | The Id of the employer for which the is created |
| `id` | `string` | Unique identifier for the quote |
| `object` | `string` | The object type |
| `quoted_at` | `string` | Date and time the quote was created at |
| `required_action` | `nil` | Actions required by the employer to proceed with the quote. |
| `status` | `any` | Current status of the quote |

#### Example: List

```lua
local employer_health_insurance_quote_response_paged_lists, err = client:EmployerHealthInsuranceQuoteResponsePagedList():list()
```


### EnrolmentIntent

Create an instance: `local enrolment_intent = client:EnrolmentIntent(nil)`

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
| `action_required` | `nil` | If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment. |
| `disclosures` | `table` | Disclosures associated with this intent. |
| `employee_id` | `string` | Identifier for the employee associated with this enrolment intent. |
| `force_confirmation` | `boolean` | If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. |
| `group_id` | `string` | Identifier for the group associated with this enrolment intent. |
| `id` | `string` | Unique identifier for the enrolment intent. |
| `ineligibility_reason` | `nil` | If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility. |
| `object` | `string` | Object type identifier. |
| `pending_confirmation` | `nil` | If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state. |
| `policy_configuration` | `nil` | Policy configuration associated with this enrolment intent. |
| `policy_enrolments` | `table` | Policy enrolment information |
| `status` | `any` | Current status of the enrolment intent. |

#### Example: Load

```lua
local enrolment_intent, err = client:EnrolmentIntent():load({ id = "enrolment_intent_id" })
```

#### Example: List

```lua
local enrolment_intents, err = client:EnrolmentIntent():list()
```

#### Example: Create

```lua
local enrolment_intent, err = client:EnrolmentIntent():create({
  disclosures = {}, -- table
  employee_id = "example_employee_id", -- string
  force_confirmation = true, -- boolean
  group_id = "example_group_id", -- string
  id = "example_id", -- string
  policy_enrolments = {}, -- table
  status = "example_status", -- any
})
```


### EnrolmentIntentRequirementResponsePagedList

Create an instance: `local enrolment_intent_requirement_response_paged_list = client:EnrolmentIntentRequirementResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the requirement |
| `is_fulfilled` | `boolean` | Whether the requirement has been fulfilled |
| `object` | `string` | Object type identifier |
| `object_id` | `string` | Identifier of the object (employee ID or employer ID) |
| `object_type` | `any` | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `any` | Type of requirement |

#### Example: List

```lua
local enrolment_intent_requirement_response_paged_lists, err = client:EnrolmentIntentRequirementResponsePagedList():list()
```


### Event

Create an instance: `local event = client:Event(nil)`

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
| `data` | `nil` |  |
| `id` | `string` |  |
| `options` | `nil` |  |
| `parent` | `nil` |  |
| `platform_id` | `string` |  |
| `root` | `any` |  |
| `type` | `string` |  |

#### Example: Load

```lua
local event, err = client:Event():load({ id = "event_id" })
```

#### Example: List

```lua
local events, err = client:Event():list()
```


### Group

Create an instance: `local group = client:Group(nil)`

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
| `description` | `nil|string` | Short description of the purpose or scope of the `group`. |
| `employer_id` | `string` | Identifier for the `employer` that owns this `group`. |
| `enrolment_type` | `any` | Indicates how employees are enrolled into the group. |
| `group_policy_ids` | `table` | Group policy unique identifiers associated with this group. |
| `group_policy_intent_ids` | `table` | Group policy intent unique identifiers associated with this group. |
| `group_quote_intent_ids` | `table` | Group quote intent unique identifiers associated with this group. |
| `group_type` | `any` | Indicates how policies are organized for this group. |
| `id` | `string` | Unique identifier for the `group`. |
| `name` | `string` | Human-readable name of the `group`. |
| `object` | `string` | The object type |
| `status` | `any` | Current lifecycle state of the `group`, indicating its current progress. |

#### Example: Load

```lua
local group, err = client:Group():load({ id = "group_id" })
```

#### Example: List

```lua
local groups, err = client:Group():list()
```

#### Example: Create

```lua
local group, err = client:Group():create({
  employer_id = "example_employer_id", -- string
  enrolment_type = "example_enrolment_type", -- any
  group_policy_ids = {}, -- table
  group_policy_intent_ids = {}, -- table
  group_quote_intent_ids = {}, -- table
  group_type = "example_group_type", -- any
  id = "example_id", -- string
  name = "example_name", -- string
  status = "example_status", -- any
})
```


### GroupEmployee

Create an instance: `local group_employee = client:GroupEmployee(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desired_policy_start_date` | `nil|string` | The desired date for the employee's policy to start. |
| `eligibility_status` | `any` | Eligibility status for the employee in this group. |
| `enrolment_date` | `nil|string` | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `any` | Enrolment status for the employee in this group. |
| `enrolments` | `table` | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Unique identifier for the group. |
| `id` | `string` | Unique identifier for the employee. |
| `object` | `string` | The object type |
| `policies` | `table` | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `table` | List of scheduled group transitions for the employee. |

#### Example: Create

```lua
local group_employee, err = client:GroupEmployee():create({
  id = "example_id", -- string
  eligibility_status = "example_eligibility_status", -- any
  enrolment_status = "example_enrolment_status", -- any
  enrolments = {}, -- table
  group_id = "example_group_id", -- string
  policies = {}, -- table
  scheduled_group_transitions = {}, -- table
})
```


### GroupEmployeeResponsePagedList

Create an instance: `local group_employee_response_paged_list = client:GroupEmployeeResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desired_policy_start_date` | `nil|string` | The desired date for the employee's policy to start. |
| `eligibility_status` | `any` | Eligibility status for the employee in this group. |
| `enrolment_date` | `nil|string` | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `any` | Enrolment status for the employee in this group. |
| `enrolments` | `table` | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Unique identifier for the group. |
| `id` | `string` | Unique identifier for the employee. |
| `object` | `string` | The object type |
| `policies` | `table` | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `table` | List of scheduled group transitions for the employee. |

#### Example: List

```lua
local group_employee_response_paged_lists, err = client:GroupEmployeeResponsePagedList():list()
```


### GroupPolicy

Create an instance: `local group_policy = client:GroupPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `nil|string` | Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable. |
| `disclosures` | `table` | Disclosures associated with this group policy. |
| `employer_id` | `string` | Identifier for the employer associated with this group policy. |
| `end_date` | `nil|string` | Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended. |
| `group_id` | `string` | Identifier for the group associated with this group policy. |
| `health_insurance` | `nil` | Health insurance–specific fields (present when `type=health_insurance`). |
| `id` | `string` | Unique identifier for the group policy. |
| `object` | `string` | The object type |
| `plan` | `any` | Plan information for this policy |
| `provider` | `any` | Provider information for this policy. |
| `start_date` | `string` | Policy start (effective) date in ISO 8601 (YYYY-MM-DD). |
| `status` | `any` | Current lifecycle state of the `group_policy`, indicating its progress from creation to activation. |
| `type` | `any` | Policy type. |

#### Example: Load

```lua
local group_policy, err = client:GroupPolicy():load({ id = "group_policy_id" })
```

#### Example: List

```lua
local group_policys, err = client:GroupPolicy():list()
```


### GroupPolicyIntent

Create an instance: `local group_policy_intent = client:GroupPolicyIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `nil` | Details of the required action when the intent is in ActionRequired status. |
| `cost_sharing` | `nil` | Cost sharing configuration for the policy intent |
| `disclosures` | `table` | Disclosures associated with this intent. |
| `due_date` | `nil|string` | Due date for the policy intent |
| `group_id` | `string` | Unique identifier for the group |
| `id` | `string` | Unique identifier for the group policy intent |
| `object` | `string` | Object type identifier |
| `plan_id` | `string` | Unique identifier for the plan |
| `quote_intent_id` | `string` | Unique identifier for the group quote intent this policy intent was created from |
| `status` | `any` | Current status of the group policy intent |

#### Example: Load

```lua
local group_policy_intent, err = client:GroupPolicyIntent():load({ id = "group_policy_intent_id" })
```

#### Example: List

```lua
local group_policy_intents, err = client:GroupPolicyIntent():list()
```

#### Example: Create

```lua
local group_policy_intent, err = client:GroupPolicyIntent():create({
  disclosures = {}, -- table
  group_id = "example_group_id", -- string
  id = "example_id", -- string
  plan_id = "example_plan_id", -- string
  quote_intent_id = "example_quote_intent_id", -- string
  status = "example_status", -- any
})
```


### GroupPolicyIntentRequirementResponsePagedList

Create an instance: `local group_policy_intent_requirement_response_paged_list = client:GroupPolicyIntentRequirementResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the requirement |
| `is_fulfilled` | `boolean` | Whether the requirement has been fulfilled |
| `object` | `string` | Object type identifier |
| `object_id` | `string` | Identifier of the object (employee ID or employer ID) |
| `object_type` | `any` | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `any` | Type of requirement |

#### Example: List

```lua
local group_policy_intent_requirement_response_paged_lists, err = client:GroupPolicyIntentRequirementResponsePagedList():list()
```


### GroupQuote

Create an instance: `local group_quote = client:GroupQuote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `family_type` | `nil` | Type of the family covered by the employer. |
| `member_count` | `nil` | Numbers of additional members covered by the employer. |
| `member_selection` | `nil` | Whether specific member types are covered by the employer. |
| `percentage` | `nil` | Percentage of the premium the employer covers. |
| `type` | `any` | Cost sharing type. |

#### Example: Load

```lua
local group_quote, err = client:GroupQuote():load({ group_quote_intent_id = "group_quote_intent_id" })
```


### GroupQuoteIntent

Create an instance: `local group_quote_intent = client:GroupQuoteIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `nil` | Details of the action required from the caller, if the intent is in action_required status. |
| `consent_links` | `table` | Consent links that need to be acknowledged |
| `cost_sharing` | `nil` | Cost sharing configuration for the quote |
| `disclosures` | `table` | Disclosures associated with this intent. |
| `expected_start_date` | `nil|string` | Expected start date for the insurance coverage |
| `group_id` | `string` | Unique identifier for the group |
| `id` | `string` | Unique identifier for the group quote intent |
| `object` | `string` | Object type identifier |
| `plan_id` | `string` | Unique identifier for the plan |
| `status` | `any` | Current status of the group quote intent |

#### Example: Load

```lua
local group_quote_intent, err = client:GroupQuoteIntent():load({ id = "group_quote_intent_id" })
```

#### Example: List

```lua
local group_quote_intents, err = client:GroupQuoteIntent():list()
```

#### Example: Create

```lua
local group_quote_intent, err = client:GroupQuoteIntent():create({
  consent_links = {}, -- table
  disclosures = {}, -- table
  group_id = "example_group_id", -- string
  id = "example_id", -- string
  plan_id = "example_plan_id", -- string
  status = "example_status", -- any
})
```


### GroupQuoteIntentRequirementResponsePagedList

Create an instance: `local group_quote_intent_requirement_response_paged_list = client:GroupQuoteIntentRequirementResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the requirement |
| `is_fulfilled` | `boolean` | Whether the requirement has been fulfilled |
| `object` | `string` | Object type identifier |
| `object_id` | `string` | Identifier of the object (employee ID or employer ID) |
| `object_type` | `any` | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `any` | Type of requirement |

#### Example: List

```lua
local group_quote_intent_requirement_response_paged_lists, err = client:GroupQuoteIntentRequirementResponsePagedList():list()
```


### Plan

Create an instance: `local plan = client:Plan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_from` | `string` | The date from which this plan is available (inclusive). |
| `available_to` | `nil|string` | The date until which this plan is available (inclusive). |
| `country` | `any` | The country this plan is available in. |
| `coverage_options` | `nil|table` | Coverage options available for this plan, organized by scope and input type. |
| `description` | `string` | Description of the plan. |
| `disclosures` | `table` | Disclosures associated with this plan. |
| `documents` | `table` | List of plan documents (e.g., IPIDs, T&Cs). |
| `eligible_count` | `nil|number` | Number of employees in the queried group eligible for this plan as-of `start_date`. |
| `employee_eligibility_criteria` | `table` | Eligibility criteria that employees must meet. |
| `employer_eligibility_criteria` | `table` | Eligibility criteria that employers must meet. |
| `health_insurance` | `nil` | Health insurance-specific details. |
| `id` | `string` | Unique identifier for the plan. |
| `ineligible_count` | `nil|number` | Number of employees in the queried group ineligible for this plan as-of `start_date`. |
| `name` | `string` | The name of the plan. |
| `object` | `string` | Object type. |
| `provider` | `any` | The provider offering this plan. |
| `total_count` | `nil|number` | Total employees in the queried group. |
| `type` | `any` | The benefit type of the plan. |

#### Example: Load

```lua
local plan, err = client:Plan():load({ id = "plan_id" })
```

#### Example: List

```lua
local plans, err = client:Plan():list()
```


### Policy

Create an instance: `local policy = client:Policy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bundling_type` | `any` | Indicates how this policy is bundled within a group |
| `cancellation_date` | `nil|string` | Date the policy was cancelled (if applicable) |
| `disclosures` | `table` | Disclosures associated with this policy. |
| `employee_id` | `string` | Identifier of the employee associated with this policy. |
| `end_date` | `nil|string` | Policy end date (inclusive) in ISO 8601, or null if open-ended |
| `group_id` | `string` | Identifier of the group associated with this policy. |
| `group_policy_id` | `string` | Identifier of the group policy id associated with this policy. |
| `health_insurance` | `nil` | Health insurance–specific fields (present when `type=health_insurance`) |
| `id` | `string` | Unique identifier for the policy. |
| `object` | `string` | Object type |
| `plan` | `any` | Plan information for this policy |
| `provider` | `any` | Provider information for this policy |
| `start_date` | `string` | Policy start (effective) date in ISO 8601 (YYYY-MM-DD) |
| `status` | `any` | Current lifecycle state of the policy |
| `type` | `any` | Policy type. |

#### Example: Load

```lua
local policy, err = client:Policy():load({ id = "policy_id" })
```

#### Example: List

```lua
local policys, err = client:Policy():list()
```


### PolicyAmendmentIntent

Create an instance: `local policy_amendment_intent = client:PolicyAmendmentIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amendment_reason` | `any` | The reason for the policy amendment. |
| `disclosures` | `table` | Disclosures associated with this intent. |
| `id` | `string` | Unique identifier for the policy amendment intent. |
| `object` | `string` | Object type identifier. |
| `pending_confirmation` | `nil` | Information about the pending confirmation if the intent status is `pending_confirmation`. |
| `policy_id` | `string` | The policy ID for which the amendment is requested. |
| `processing_error` | `nil` | Information about the processing error if the intent status is `processing_error`. |
| `requested_changes` | `table` | List of requested changes to the policy. |
| `required_action` | `nil` | Information about the required action if the intent status is `action_required`. |
| `status` | `any` | Current status of the policy amendment intent. |

#### Example: Load

```lua
local policy_amendment_intent, err = client:PolicyAmendmentIntent():load({ id = "policy_amendment_intent_id", policy_id = "policy_id" })
```

#### Example: List

```lua
local policy_amendment_intents, err = client:PolicyAmendmentIntent():list()
```

#### Example: Create

```lua
local policy_amendment_intent, err = client:PolicyAmendmentIntent():create({
  id = "example_id", -- string
  amendment_reason = "example_amendment_reason", -- any
  disclosures = {}, -- table
  policy_id = "example_policy_id", -- string
  requested_changes = {}, -- table
  status = "example_status", -- any
})
```


### PolicyImportIntent

Create an instance: `local policy_import_intent = client:PolicyImportIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_persons` | `table` | List of associated persons linked to this policy import. |
| `employee_id` | `string` | The employee ID for the policy import. |
| `group_id` | `string` | The group ID for the policy import. |
| `id` | `string` | Unique identifier for the policy import intent. |
| `member_number` | `string` | The member number assigned by the provider. |
| `object` | `string` | Object type identifier. |
| `policy_end_date` | `nil|string` | The end date of the policy. |
| `policy_start_date` | `string` | The start date of the policy. |
| `provider_policy_number` | `string` | The provider's policy number. |
| `status` | `any` | Current status of the policy import intent. |

#### Example: Load

```lua
local policy_import_intent, err = client:PolicyImportIntent():load({ id = "policy_import_intent_id" })
```

#### Example: List

```lua
local policy_import_intents, err = client:PolicyImportIntent():list()
```

#### Example: Create

```lua
local policy_import_intent, err = client:PolicyImportIntent():create({
  associated_persons = {}, -- table
  employee_id = "example_employee_id", -- string
  group_id = "example_group_id", -- string
  id = "example_id", -- string
  member_number = "example_member_number", -- string
  policy_start_date = "example_policy_start_date", -- string
  provider_policy_number = "example_provider_policy_number", -- string
  status = "example_status", -- any
})
```


### Provider

Create an instance: `local provider = client:Provider(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` | Description of the provider. |
| `employer_platform_url` | `nil|string` | URL to the employer portal/platform for this provider, if available. |
| `id` | `string` | Unique identifier for the provider. |
| `kota_hub_url` | `nil|string` | URL to the Kota Hub page for this platform, if configured. |
| `logo_url` | `string` | URL to the provider's logo image. |
| `name` | `string` | The name of the provider. |
| `object` | `string` | Object type. |
| `support_phone` | `string` | Customer support phone number. |
| `supported_countries` | `table` | List of countries supported by this provider. |
| `website_url` | `string` | The provider's main website URL. |

#### Example: Load

```lua
local provider, err = client:Provider():load({ id = "provider_id" })
```

#### Example: List

```lua
local providers, err = client:Provider():list()
```


### Replay

Create an instance: `local replay = client:Replay(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `deliveries` | `table` |  |
| `event_id` | `string` |  |

#### Example: Create

```lua
local replay, err = client:Replay():create({
  event_id = "example_event_id", -- string
  deliveries = {}, -- table
})
```


### WebhookEndpoint

Create an instance: `local webhook_endpoint = client:WebhookEndpoint(nil)`

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
| `subscribed_events` | `table` | The events the endpoint is subscribed to |

#### Example: Load

```lua
local webhook_endpoint, err = client:WebhookEndpoint():load({ id = "webhook_endpoint_id" })
```


### WebhookEndpointResponsePagedList

Create an instance: `local webhook_endpoint_response_paged_list = client:WebhookEndpointResponsePagedList(nil)`

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
| `subscribed_events` | `table` | The events the endpoint is subscribed to |

#### Example: List

```lua
local webhook_endpoint_response_paged_lists, err = client:WebhookEndpointResponsePagedList():list()
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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── kota_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`kota_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local dependentsmanagementintent = client:DependentsManagementIntent()
dependentsmanagementintent:load({ id = "example_id" })

-- dependentsmanagementintent:data_get() now returns the dependentsmanagementintent data from the last load
-- dependentsmanagementintent:match_get() returns the last match criteria
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
