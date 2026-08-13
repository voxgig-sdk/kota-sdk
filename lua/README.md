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
| `date_of_birth` | `string` |  |
| `email` | `nil|string` |  |
| `employee_id` | `string` |  |
| `first_name` | `string` |  |
| `id` | `string` |  |
| `last_name` | `string` |  |
| `object` | `string` |  |
| `phone_number` | `nil|string` |  |
| `platform_id` | `string` |  |
| `relationship_type` | `any` |  |
| `sex_at_birth` | `any` |  |

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
| `associated_person_id` | `string` |  |
| `date_of_birth` | `string` |  |
| `eligibility_status` | `any` |  |
| `first_name` | `string` |  |
| `ineligibility_reason` | `nil|string` |  |
| `last_name` | `string` |  |
| `object` | `string` |  |
| `relationship` | `any` |  |
| `sex_at_birth` | `any` |  |

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
| `created_at` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `nil|string` |  |
| `finalized_at` | `nil|string` |  |
| `id` | `string` |  |
| `last_updated_at` | `string` |  |
| `object` | `string` |  |
| `period` | `any` |  |
| `status` | `any` |  |

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
| `contribution_report_id` | `string` |  |
| `created_at` | `string` |  |
| `currency` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `nil|string` |  |
| `finalized_at` | `nil|string` |  |
| `health_insurance` | `any` |  |
| `last_updated_at` | `string` |  |
| `object` | `string` |  |
| `period` | `any` |  |
| `status` | `any` |  |

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
| `contribution_report_id` | `string` |  |
| `created_at` | `string` |  |
| `currency` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `nil|string` |  |
| `finalized_at` | `nil|string` |  |
| `health_insurance` | `any` |  |
| `last_updated_at` | `string` |  |
| `object` | `string` |  |
| `period` | `any` |  |
| `status` | `any` |  |

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
| `action_required` | `nil` |  |
| `coverage_options` | `nil|table` |  |
| `dependents` | `table` |  |
| `disclosures` | `table` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `parent_intent_id` | `string` |  |
| `parent_intent_type` | `any` |  |
| `plan` | `any` |  |
| `status` | `any` |  |

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
| `action_required` | `nil` |  |
| `coverage_options` | `nil|table` |  |
| `dependents` | `table` |  |
| `disclosures` | `table` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `parent_intent_id` | `string` |  |
| `parent_intent_type` | `any` |  |
| `plan` | `any` |  |
| `status` | `any` |  |

#### Example: Load

```lua
local dependents_management_intent, err = client:DependentsManagementIntent():load({ id = "dependents_management_intent_id" })
```

#### Example: Create

```lua
local dependents_management_intent, err = client:DependentsManagementIntent():create({
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
| `eligibility_status` | `any` |  |
| `object` | `string` |  |
| `plan` | `any` |  |
| `provider` | `any` |  |
| `reasons` | `table` |  |

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
| `bank_account` | `nil` |  |
| `date_of_birth` | `string` |  |
| `earliest_benefits_start_date` | `nil|string` |  |
| `email` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `nil|string` |  |
| `first_name` | `string` |  |
| `home_address` | `nil` |  |
| `id` | `string` |  |
| `last_name` | `string` |  |
| `metadata` | `nil|table` |  |
| `national_tax_id` | `string` |  |
| `nationality` | `nil` |  |
| `object` | `string` |  |
| `offboard_on` | `nil|string` |  |
| `phone_number` | `string` |  |
| `platform_id` | `string` |  |
| `sex_at_birth` | `any` |  |
| `start_on` | `string` |  |
| `status` | `any` |  |

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
| `coverage_level` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `nil|string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `required_action` | `nil` |  |
| `status` | `any` |  |

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
| `coverage_level` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `nil|string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `required_action` | `nil` |  |
| `status` | `any` |  |

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
| `cancellation_date` | `nil|string` |  |
| `coverage_level` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolled_dependants_count` | `number` |  |
| `enrolment_type` | `any` |  |
| `estimated_gross_premium` | `any` |  |
| `external_customer_id` | `nil|string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `opt_out_deadline_date` | `string` |  |
| `policy_number` | `nil|string` |  |
| `renewal` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |

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
| `cancellation_date` | `nil|string` |  |
| `coverage_level` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolled_dependants_count` | `number` |  |
| `enrolment_type` | `any` |  |
| `estimated_gross_premium` | `any` |  |
| `external_customer_id` | `nil|string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `opt_out_deadline_date` | `string` |  |
| `policy_number` | `nil|string` |  |
| `renewal` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |

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
| `metadata` | `nil|table` |  |
| `object` | `string` |  |
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
| `cancellation_date` | `nil|string` |  |
| `coverage_levels` | `table` |  |
| `employer_cancellation_period_length` | `number` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolment_type` | `any` |  |
| `group_policy_number` | `nil|string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `renewal` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |

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
| `cancellation_date` | `nil|string` |  |
| `coverage_levels` | `table` |  |
| `employer_cancellation_period_length` | `number` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolment_type` | `any` |  |
| `group_policy_number` | `nil|string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `renewal` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |

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
| `coverage_levels` | `table` |  |
| `employer_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `quoted_at` | `string` |  |
| `required_action` | `nil` |  |
| `status` | `any` |  |

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
| `coverage_levels` | `table` |  |
| `employer_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `quoted_at` | `string` |  |
| `required_action` | `nil` |  |
| `status` | `any` |  |

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
| `action_required` | `nil` |  |
| `disclosures` | `table` |  |
| `employee_id` | `string` |  |
| `force_confirmation` | `boolean` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `ineligibility_reason` | `nil` |  |
| `object` | `string` |  |
| `pending_confirmation` | `nil` |  |
| `policy_configuration` | `nil` |  |
| `policy_enrolments` | `table` |  |
| `status` | `any` |  |

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
| `id` | `string` |  |
| `is_fulfilled` | `boolean` |  |
| `object` | `string` |  |
| `object_id` | `string` |  |
| `object_type` | `any` |  |
| `requirement_type` | `any` |  |

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
| `description` | `nil|string` |  |
| `employer_id` | `string` |  |
| `enrolment_type` | `any` |  |
| `group_policy_ids` | `table` |  |
| `group_policy_intent_ids` | `table` |  |
| `group_quote_intent_ids` | `table` |  |
| `group_type` | `any` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `object` | `string` |  |
| `status` | `any` |  |

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
| `desired_policy_start_date` | `nil|string` |  |
| `eligibility_status` | `any` |  |
| `enrolment_date` | `nil|string` |  |
| `enrolment_status` | `any` |  |
| `enrolments` | `table` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `policies` | `table` |  |
| `scheduled_group_transitions` | `table` |  |

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
| `desired_policy_start_date` | `nil|string` |  |
| `eligibility_status` | `any` |  |
| `enrolment_date` | `nil|string` |  |
| `enrolment_status` | `any` |  |
| `enrolments` | `table` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `policies` | `table` |  |
| `scheduled_group_transitions` | `table` |  |

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
| `cancellation_date` | `nil|string` |  |
| `disclosures` | `table` |  |
| `employer_id` | `string` |  |
| `end_date` | `nil|string` |  |
| `group_id` | `string` |  |
| `health_insurance` | `nil` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan` | `any` |  |
| `provider` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |
| `type` | `any` |  |

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
| `action_required` | `nil` |  |
| `cost_sharing` | `nil` |  |
| `disclosures` | `table` |  |
| `due_date` | `nil|string` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan_id` | `string` |  |
| `quote_intent_id` | `string` |  |
| `status` | `any` |  |

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
| `id` | `string` |  |
| `is_fulfilled` | `boolean` |  |
| `object` | `string` |  |
| `object_id` | `string` |  |
| `object_type` | `any` |  |
| `requirement_type` | `any` |  |

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
| `family_type` | `nil` |  |
| `member_count` | `nil` |  |
| `member_selection` | `nil` |  |
| `percentage` | `nil` |  |
| `type` | `any` |  |

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
| `action_required` | `nil` |  |
| `consent_links` | `table` |  |
| `cost_sharing` | `nil` |  |
| `disclosures` | `table` |  |
| `expected_start_date` | `nil|string` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan_id` | `string` |  |
| `status` | `any` |  |

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
| `id` | `string` |  |
| `is_fulfilled` | `boolean` |  |
| `object` | `string` |  |
| `object_id` | `string` |  |
| `object_type` | `any` |  |
| `requirement_type` | `any` |  |

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
| `available_from` | `string` |  |
| `available_to` | `nil|string` |  |
| `country` | `any` |  |
| `coverage_options` | `nil|table` |  |
| `description` | `string` |  |
| `disclosures` | `table` |  |
| `documents` | `table` |  |
| `eligible_count` | `nil|number` |  |
| `employee_eligibility_criteria` | `table` |  |
| `employer_eligibility_criteria` | `table` |  |
| `health_insurance` | `nil` |  |
| `id` | `string` |  |
| `ineligible_count` | `nil|number` |  |
| `name` | `string` |  |
| `object` | `string` |  |
| `provider` | `any` |  |
| `total_count` | `nil|number` |  |
| `type` | `any` |  |

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
| `bundling_type` | `any` |  |
| `cancellation_date` | `nil|string` |  |
| `disclosures` | `table` |  |
| `employee_id` | `string` |  |
| `end_date` | `nil|string` |  |
| `group_id` | `string` |  |
| `group_policy_id` | `string` |  |
| `health_insurance` | `nil` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan` | `any` |  |
| `provider` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |
| `type` | `any` |  |

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
| `amendment_reason` | `any` |  |
| `disclosures` | `table` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `pending_confirmation` | `nil` |  |
| `policy_id` | `string` |  |
| `processing_error` | `nil` |  |
| `requested_changes` | `table` |  |
| `required_action` | `nil` |  |
| `status` | `any` |  |

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
| `associated_persons` | `table` |  |
| `employee_id` | `string` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `member_number` | `string` |  |
| `object` | `string` |  |
| `policy_end_date` | `nil|string` |  |
| `policy_start_date` | `string` |  |
| `provider_policy_number` | `string` |  |
| `status` | `any` |  |

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
| `description` | `string` |  |
| `employer_platform_url` | `nil|string` |  |
| `id` | `string` |  |
| `kota_hub_url` | `nil|string` |  |
| `logo_url` | `string` |  |
| `name` | `string` |  |
| `object` | `string` |  |
| `support_phone` | `string` |  |
| `supported_countries` | `table` |  |
| `website_url` | `string` |  |

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
| `created_at` | `string` |  |
| `endpoint_url` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `subscribed_events` | `table` |  |

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
| `created_at` | `string` |  |
| `endpoint_url` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `subscribed_events` | `table` |  |

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
