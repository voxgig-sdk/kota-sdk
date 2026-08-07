# Kota Golang SDK



The Golang SDK for the Kota API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AssociatedPerson(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/kota-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/kota-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/kota-sdk/go=../kota-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    "os"
    sdk "github.com/voxgig-sdk/kota-sdk/go"
)

func main() {
    client := sdk.NewKotaSDK(map[string]any{
        "apikey": os.Getenv("KOTA_APIKEY"),
    })

    // List associatedPerson records — the value is the array of records itself.
    associatedPersons, err := client.AssociatedPerson(nil).List(nil, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range associatedPersons.([]any) {
        fmt.Println(item)
    }

    // Load a single associatedPerson — the value is the loaded record.
    associatedPerson, err := client.AssociatedPerson(nil).Load(map[string]any{"id": "example_id", "employee_id": "example_employee_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(associatedPerson)

    // Create a associatedPerson.
    created, err := client.AssociatedPerson(nil).Create(map[string]any{"employee_id": "example_employee_id", "date_of_birth": "example_date_of_birth", "first_name": "example_first_name", "id": "example_id", "last_name": "example_last_name", "relationship_type": "example_relationship_type", "sex_at_birth": "example_sex_at_birth"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created)

    // Update a associatedPerson.
    updated, err := client.AssociatedPerson(nil).Update(map[string]any{"id": "example_id", "employee_id": "example_employee_id", "date_of_birth": "example_date_of_birth"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated)

    // Remove a associatedPerson.
    removed, err := client.AssociatedPerson(nil).Remove(map[string]any{"id": "example_id", "employee_id": "example_employee_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
dependentsmanagementintent, err := client.DependentsManagementIntent(nil).Load(map[string]any{"id": "example_id"}, nil)
if err != nil {
    // handle err
    return
}
_ = dependentsmanagementintent
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

dependentsManagementIntent, err := client.DependentsManagementIntent(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(dependentsManagementIntent) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewKotaSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
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
cd go && go test ./test/...
```


## Reference

### NewKotaSDK

```go
func NewKotaSDK(options map[string]any) *KotaSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"apikey"` | `string` | API key for authentication. |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *KotaSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### KotaSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `AssociatedPerson` | `(data map[string]any) KotaEntity` | Create an AssociatedPerson entity instance. |
| `AssociatedPersonEligibilityResponsePagedList` | `(data map[string]any) KotaEntity` | Create an AssociatedPersonEligibilityResponsePagedList entity instance. |
| `ContributionReport` | `(data map[string]any) KotaEntity` | Create a ContributionReport entity instance. |
| `ContributionReportEmployeeBreakdown` | `(data map[string]any) KotaEntity` | Create a ContributionReportEmployeeBreakdown entity instance. |
| `ContributionReportEmployeeBreakdownResponsePagedList` | `(data map[string]any) KotaEntity` | Create a ContributionReportEmployeeBreakdownResponsePagedList entity instance. |
| `CreateHostedSessionToken` | `(data map[string]any) KotaEntity` | Create a CreateHostedSessionToken entity instance. |
| `CreateSessionToken` | `(data map[string]any) KotaEntity` | Create a CreateSessionToken entity instance. |
| `Dependent` | `(data map[string]any) KotaEntity` | Create a Dependent entity instance. |
| `DependentsManagementIntent` | `(data map[string]any) KotaEntity` | Create a DependentsManagementIntent entity instance. |
| `EligibilityCheck` | `(data map[string]any) KotaEntity` | Create an EligibilityCheck entity instance. |
| `Employee` | `(data map[string]any) KotaEntity` | Create an Employee entity instance. |
| `EmployeeHealthInsuranceOffer` | `(data map[string]any) KotaEntity` | Create an EmployeeHealthInsuranceOffer entity instance. |
| `EmployeeHealthInsuranceOfferResponsePagedList` | `(data map[string]any) KotaEntity` | Create an EmployeeHealthInsuranceOfferResponsePagedList entity instance. |
| `EmployeeHealthInsurancePolicy` | `(data map[string]any) KotaEntity` | Create an EmployeeHealthInsurancePolicy entity instance. |
| `EmployeeHealthInsurancePolicyResponsePagedList` | `(data map[string]any) KotaEntity` | Create an EmployeeHealthInsurancePolicyResponsePagedList entity instance. |
| `Employer` | `(data map[string]any) KotaEntity` | Create an Employer entity instance. |
| `EmployerHealthInsurancePolicy` | `(data map[string]any) KotaEntity` | Create an EmployerHealthInsurancePolicy entity instance. |
| `EmployerHealthInsurancePolicyResponsePagedList` | `(data map[string]any) KotaEntity` | Create an EmployerHealthInsurancePolicyResponsePagedList entity instance. |
| `EmployerHealthInsuranceQuote` | `(data map[string]any) KotaEntity` | Create an EmployerHealthInsuranceQuote entity instance. |
| `EmployerHealthInsuranceQuoteResponsePagedList` | `(data map[string]any) KotaEntity` | Create an EmployerHealthInsuranceQuoteResponsePagedList entity instance. |
| `EnrolmentIntent` | `(data map[string]any) KotaEntity` | Create an EnrolmentIntent entity instance. |
| `EnrolmentIntentRequirementResponsePagedList` | `(data map[string]any) KotaEntity` | Create an EnrolmentIntentRequirementResponsePagedList entity instance. |
| `Event` | `(data map[string]any) KotaEntity` | Create an Event entity instance. |
| `Group` | `(data map[string]any) KotaEntity` | Create a Group entity instance. |
| `GroupEmployee` | `(data map[string]any) KotaEntity` | Create a GroupEmployee entity instance. |
| `GroupEmployeeResponsePagedList` | `(data map[string]any) KotaEntity` | Create a GroupEmployeeResponsePagedList entity instance. |
| `GroupPolicy` | `(data map[string]any) KotaEntity` | Create a GroupPolicy entity instance. |
| `GroupPolicyIntent` | `(data map[string]any) KotaEntity` | Create a GroupPolicyIntent entity instance. |
| `GroupPolicyIntentRequirementResponsePagedList` | `(data map[string]any) KotaEntity` | Create a GroupPolicyIntentRequirementResponsePagedList entity instance. |
| `GroupQuote` | `(data map[string]any) KotaEntity` | Create a GroupQuote entity instance. |
| `GroupQuoteIntent` | `(data map[string]any) KotaEntity` | Create a GroupQuoteIntent entity instance. |
| `GroupQuoteIntentRequirementResponsePagedList` | `(data map[string]any) KotaEntity` | Create a GroupQuoteIntentRequirementResponsePagedList entity instance. |
| `Plan` | `(data map[string]any) KotaEntity` | Create a Plan entity instance. |
| `Policy` | `(data map[string]any) KotaEntity` | Create a Policy entity instance. |
| `PolicyAmendmentIntent` | `(data map[string]any) KotaEntity` | Create a PolicyAmendmentIntent entity instance. |
| `PolicyImportIntent` | `(data map[string]any) KotaEntity` | Create a PolicyImportIntent entity instance. |
| `Provider` | `(data map[string]any) KotaEntity` | Create a Provider entity instance. |
| `Replay` | `(data map[string]any) KotaEntity` | Create a Replay entity instance. |
| `WebhookEndpoint` | `(data map[string]any) KotaEntity` | Create a WebhookEndpoint entity instance. |
| `WebhookEndpointResponsePagedList` | `(data map[string]any) KotaEntity` | Create a WebhookEndpointResponsePagedList entity instance. |

### Entity interface (KotaEntity)

All entities implement the `KotaEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    associatedPerson, err := client.AssociatedPerson(nil).List(map[string]any{/* fields */}, nil)
    if err != nil { /* handle */ }
    // associatedPerson is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### AssociatedPerson

| Field | Description |
| --- | --- |
| `"date_of_birth"` |  |
| `"email"` |  |
| `"employee_id"` |  |
| `"first_name"` |  |
| `"id"` |  |
| `"last_name"` |  |
| `"object"` |  |
| `"phone_number"` |  |
| `"platform_id"` |  |
| `"relationship_type"` |  |
| `"sex_at_birth"` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/employees/{employee_id}/associated_persons`

#### AssociatedPersonEligibilityResponsePagedList

| Field | Description |
| --- | --- |
| `"associated_person_id"` |  |
| `"date_of_birth"` |  |
| `"eligibility_status"` |  |
| `"first_name"` |  |
| `"ineligibility_reason"` |  |
| `"last_name"` |  |
| `"object"` |  |
| `"relationship"` |  |
| `"sex_at_birth"` |  |

Operations: List.

API path: `/dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility`

#### ContributionReport

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"employer_id"` |  |
| `"external_customer_id"` |  |
| `"finalized_at"` |  |
| `"id"` |  |
| `"last_updated_at"` |  |
| `"object"` |  |
| `"period"` |  |
| `"status"` |  |

Operations: Create, List, Load.

API path: `/contribution_reports/{contribution_report_id}/finalize`

#### ContributionReportEmployeeBreakdown

| Field | Description |
| --- | --- |
| `"contribution_report_id"` |  |
| `"created_at"` |  |
| `"currency"` |  |
| `"employee_id"` |  |
| `"employer_id"` |  |
| `"external_customer_id"` |  |
| `"finalized_at"` |  |
| `"health_insurance"` |  |
| `"last_updated_at"` |  |
| `"object"` |  |
| `"period"` |  |
| `"status"` |  |

Operations: Load.

API path: `/contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}`

#### ContributionReportEmployeeBreakdownResponsePagedList

| Field | Description |
| --- | --- |
| `"contribution_report_id"` |  |
| `"created_at"` |  |
| `"currency"` |  |
| `"employee_id"` |  |
| `"employer_id"` |  |
| `"external_customer_id"` |  |
| `"finalized_at"` |  |
| `"health_insurance"` |  |
| `"last_updated_at"` |  |
| `"object"` |  |
| `"period"` |  |
| `"status"` |  |

Operations: List.

API path: `/contribution_reports/{contribution_report_id}/employee_breakdowns`

#### CreateHostedSessionToken

| Field | Description |
| --- | --- |
| `"expiry"` |  |
| `"link"` |  |

Operations: Create.

API path: `/hosted/sessions`

#### CreateSessionToken

| Field | Description |
| --- | --- |
| `"expiry"` |  |
| `"token"` |  |

Operations: Create.

API path: `/embed/sessions`

#### Dependent

| Field | Description |
| --- | --- |
| `"action_required"` |  |
| `"coverage_option"` |  |
| `"dependent"` |  |
| `"disclosure"` |  |
| `"id"` |  |
| `"object"` |  |
| `"parent_intent_id"` |  |
| `"parent_intent_type"` |  |
| `"plan"` |  |
| `"status"` |  |

Operations: Create, Remove.

API path: `/dependents_management_intents/{dependents_management_intent_id}/dependents`

#### DependentsManagementIntent

| Field | Description |
| --- | --- |
| `"action_required"` |  |
| `"coverage_option"` |  |
| `"dependent"` |  |
| `"disclosure"` |  |
| `"id"` |  |
| `"object"` |  |
| `"parent_intent_id"` |  |
| `"parent_intent_type"` |  |
| `"plan"` |  |
| `"status"` |  |

Operations: Create, Load.

API path: `/policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent`

#### EligibilityCheck

| Field | Description |
| --- | --- |
| `"eligibility_status"` |  |
| `"object"` |  |
| `"plan"` |  |
| `"provider"` |  |
| `"reason"` |  |

Operations: Create.

API path: `/groups/{group_id}/eligibility_check`

#### Employee

| Field | Description |
| --- | --- |
| `"bank_account"` |  |
| `"date_of_birth"` |  |
| `"earliest_benefits_start_date"` |  |
| `"email"` |  |
| `"employer_id"` |  |
| `"external_customer_id"` |  |
| `"first_name"` |  |
| `"home_address"` |  |
| `"id"` |  |
| `"last_name"` |  |
| `"metadata"` |  |
| `"national_tax_id"` |  |
| `"nationality"` |  |
| `"object"` |  |
| `"offboard_on"` |  |
| `"phone_number"` |  |
| `"platform_id"` |  |
| `"sex_at_birth"` |  |
| `"start_on"` |  |
| `"status"` |  |

Operations: Create, List, Load, Update.

API path: `/employees/{employee_id}/offboard`

#### EmployeeHealthInsuranceOffer

| Field | Description |
| --- | --- |
| `"coverage_level"` |  |
| `"employee_id"` |  |
| `"employer_id"` |  |
| `"external_customer_id"` |  |
| `"id"` |  |
| `"object"` |  |
| `"required_action"` |  |
| `"status"` |  |

Operations: Load.

API path: `/employees/{employee_id}/health_insurance/offers/{employee_offer_id}`

#### EmployeeHealthInsuranceOfferResponsePagedList

| Field | Description |
| --- | --- |
| `"coverage_level"` |  |
| `"employee_id"` |  |
| `"employer_id"` |  |
| `"external_customer_id"` |  |
| `"id"` |  |
| `"object"` |  |
| `"required_action"` |  |
| `"status"` |  |

Operations: List.

API path: `/employees/{employee_id}/health_insurance/offers`

#### EmployeeHealthInsurancePolicy

| Field | Description |
| --- | --- |
| `"cancellation_date"` |  |
| `"coverage_level"` |  |
| `"employee_id"` |  |
| `"employer_id"` |  |
| `"end_date"` |  |
| `"enrolled_dependants_count"` |  |
| `"enrolment_type"` |  |
| `"estimated_gross_premium"` |  |
| `"external_customer_id"` |  |
| `"id"` |  |
| `"object"` |  |
| `"opt_out_deadline_date"` |  |
| `"policy_number"` |  |
| `"renewal"` |  |
| `"start_date"` |  |
| `"status"` |  |

Operations: Load.

API path: `/employees/{employee_id}/health_insurance/policies/{employee_policy_id}`

#### EmployeeHealthInsurancePolicyResponsePagedList

| Field | Description |
| --- | --- |
| `"cancellation_date"` |  |
| `"coverage_level"` |  |
| `"employee_id"` |  |
| `"employer_id"` |  |
| `"end_date"` |  |
| `"enrolled_dependants_count"` |  |
| `"enrolment_type"` |  |
| `"estimated_gross_premium"` |  |
| `"external_customer_id"` |  |
| `"id"` |  |
| `"object"` |  |
| `"opt_out_deadline_date"` |  |
| `"policy_number"` |  |
| `"renewal"` |  |
| `"start_date"` |  |
| `"status"` |  |

Operations: List.

API path: `/employees/{employee_id}/health_insurance/policies`

#### Employer

| Field | Description |
| --- | --- |
| `"contact"` |  |
| `"earliest_benefits_start_date"` |  |
| `"id"` |  |
| `"legal_address"` |  |
| `"legal_name"` |  |
| `"metadata"` |  |
| `"object"` |  |
| `"offboard_on"` |  |
| `"platform_id"` |  |
| `"registration_number"` |  |
| `"status"` |  |

Operations: Create, List, Load, Update.

API path: `/employers/{employer_id}/offboard`

#### EmployerHealthInsurancePolicy

| Field | Description |
| --- | --- |
| `"cancellation_date"` |  |
| `"coverage_level"` |  |
| `"employer_cancellation_period_length"` |  |
| `"employer_id"` |  |
| `"end_date"` |  |
| `"enrolment_type"` |  |
| `"group_policy_number"` |  |
| `"id"` |  |
| `"object"` |  |
| `"renewal"` |  |
| `"start_date"` |  |
| `"status"` |  |

Operations: Load.

API path: `/employers/{employer_id}/health_insurance/policies/{employer_policy_id}`

#### EmployerHealthInsurancePolicyResponsePagedList

| Field | Description |
| --- | --- |
| `"cancellation_date"` |  |
| `"coverage_level"` |  |
| `"employer_cancellation_period_length"` |  |
| `"employer_id"` |  |
| `"end_date"` |  |
| `"enrolment_type"` |  |
| `"group_policy_number"` |  |
| `"id"` |  |
| `"object"` |  |
| `"renewal"` |  |
| `"start_date"` |  |
| `"status"` |  |

Operations: List.

API path: `/employers/{employer_id}/health_insurance/policies`

#### EmployerHealthInsuranceQuote

| Field | Description |
| --- | --- |
| `"coverage_level"` |  |
| `"employer_id"` |  |
| `"id"` |  |
| `"object"` |  |
| `"quoted_at"` |  |
| `"required_action"` |  |
| `"status"` |  |

Operations: Load.

API path: `/employers/{employer_id}/health_insurance/quotes/{employer_quote_id}`

#### EmployerHealthInsuranceQuoteResponsePagedList

| Field | Description |
| --- | --- |
| `"coverage_level"` |  |
| `"employer_id"` |  |
| `"id"` |  |
| `"object"` |  |
| `"quoted_at"` |  |
| `"required_action"` |  |
| `"status"` |  |

Operations: List.

API path: `/employers/{employer_id}/health_insurance/quotes`

#### EnrolmentIntent

| Field | Description |
| --- | --- |
| `"action_required"` |  |
| `"disclosure"` |  |
| `"employee_id"` |  |
| `"force_confirmation"` |  |
| `"group_id"` |  |
| `"id"` |  |
| `"ineligibility_reason"` |  |
| `"object"` |  |
| `"pending_confirmation"` |  |
| `"policy_configuration"` |  |
| `"policy_enrolment"` |  |
| `"status"` |  |

Operations: Create, List, Load, Update.

API path: `/enrolment_intents/{enrolment_intent_id}/confirm`

#### EnrolmentIntentRequirementResponsePagedList

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"is_fulfilled"` |  |
| `"object"` |  |
| `"object_id"` |  |
| `"object_type"` |  |
| `"requirement_type"` |  |

Operations: List.

API path: `/enrolment_intents/{enrolment_intent_id}/requirements`

#### Event

| Field | Description |
| --- | --- |
| `"api_version"` |  |
| `"created"` |  |
| `"data"` |  |
| `"id"` |  |
| `"platform_id"` |  |
| `"type"` |  |

Operations: List, Load.

API path: `/events`

#### Group

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"employer_id"` |  |
| `"enrolment_type"` |  |
| `"group_policy_id"` |  |
| `"group_policy_intent_id"` |  |
| `"group_quote_intent_id"` |  |
| `"group_type"` |  |
| `"id"` |  |
| `"name"` |  |
| `"object"` |  |
| `"status"` |  |

Operations: Create, List, Load, Update.

API path: `/groups`

#### GroupEmployee

| Field | Description |
| --- | --- |
| `"desired_policy_start_date"` |  |
| `"eligibility_status"` |  |
| `"enrolment"` |  |
| `"enrolment_date"` |  |
| `"enrolment_status"` |  |
| `"group_id"` |  |
| `"id"` |  |
| `"object"` |  |
| `"policy"` |  |
| `"scheduled_group_transition"` |  |

Operations: Create.

API path: `/groups/{group_id}/employees`

#### GroupEmployeeResponsePagedList

| Field | Description |
| --- | --- |
| `"desired_policy_start_date"` |  |
| `"eligibility_status"` |  |
| `"enrolment"` |  |
| `"enrolment_date"` |  |
| `"enrolment_status"` |  |
| `"group_id"` |  |
| `"id"` |  |
| `"object"` |  |
| `"policy"` |  |
| `"scheduled_group_transition"` |  |

Operations: List.

API path: `/groups/{group_id}/employees`

#### GroupPolicy

| Field | Description |
| --- | --- |
| `"cancellation_date"` |  |
| `"disclosure"` |  |
| `"employer_id"` |  |
| `"end_date"` |  |
| `"group_id"` |  |
| `"health_insurance"` |  |
| `"id"` |  |
| `"object"` |  |
| `"plan"` |  |
| `"provider"` |  |
| `"start_date"` |  |
| `"status"` |  |
| `"type"` |  |

Operations: List, Load.

API path: `/group_policies`

#### GroupPolicyIntent

| Field | Description |
| --- | --- |
| `"action_required"` |  |
| `"cost_sharing"` |  |
| `"disclosure"` |  |
| `"due_date"` |  |
| `"group_id"` |  |
| `"id"` |  |
| `"object"` |  |
| `"plan_id"` |  |
| `"quote_intent_id"` |  |
| `"status"` |  |

Operations: Create, List, Load.

API path: `/group_policy_intents`

#### GroupPolicyIntentRequirementResponsePagedList

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"is_fulfilled"` |  |
| `"object"` |  |
| `"object_id"` |  |
| `"object_type"` |  |
| `"requirement_type"` |  |

Operations: List.

API path: `/group_policy_intents/{group_policy_intent_id}/requirements`

#### GroupQuote

| Field | Description |
| --- | --- |
| `"cost_sharing"` |  |
| `"currency"` |  |
| `"employee_count"` |  |
| `"expires_at"` |  |
| `"generated_at"` |  |
| `"object"` |  |
| `"pdf_expires_at"` |  |
| `"pdf_url"` |  |
| `"total_monthly_premium"` |  |

Operations: Load.

API path: `/group_quote_intents/{group_quote_intent_id}/quote`

#### GroupQuoteIntent

| Field | Description |
| --- | --- |
| `"action_required"` |  |
| `"consent_link"` |  |
| `"cost_sharing"` |  |
| `"disclosure"` |  |
| `"expected_start_date"` |  |
| `"group_id"` |  |
| `"id"` |  |
| `"object"` |  |
| `"plan_id"` |  |
| `"status"` |  |

Operations: Create, List, Load.

API path: `/group_quote_intents/{group_quote_intent_id}/reject`

#### GroupQuoteIntentRequirementResponsePagedList

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"is_fulfilled"` |  |
| `"object"` |  |
| `"object_id"` |  |
| `"object_type"` |  |
| `"requirement_type"` |  |

Operations: List.

API path: `/group_quote_intents/{group_quote_intent_id}/requirements`

#### Plan

| Field | Description |
| --- | --- |
| `"available_from"` |  |
| `"available_to"` |  |
| `"country"` |  |
| `"coverage_option"` |  |
| `"description"` |  |
| `"disclosure"` |  |
| `"document"` |  |
| `"eligible_count"` |  |
| `"employee_eligibility_criterion"` |  |
| `"employer_eligibility_criterion"` |  |
| `"health_insurance"` |  |
| `"id"` |  |
| `"ineligible_count"` |  |
| `"name"` |  |
| `"object"` |  |
| `"provider"` |  |
| `"total_count"` |  |
| `"type"` |  |

Operations: List, Load.

API path: `/plans`

#### Policy

| Field | Description |
| --- | --- |
| `"bundling_type"` |  |
| `"cancellation_date"` |  |
| `"disclosure"` |  |
| `"employee_id"` |  |
| `"end_date"` |  |
| `"group_id"` |  |
| `"group_policy_id"` |  |
| `"health_insurance"` |  |
| `"id"` |  |
| `"object"` |  |
| `"plan"` |  |
| `"provider"` |  |
| `"start_date"` |  |
| `"status"` |  |
| `"type"` |  |

Operations: List, Load.

API path: `/policies`

#### PolicyAmendmentIntent

| Field | Description |
| --- | --- |
| `"amendment_reason"` |  |
| `"disclosure"` |  |
| `"id"` |  |
| `"object"` |  |
| `"pending_confirmation"` |  |
| `"policy_id"` |  |
| `"processing_error"` |  |
| `"requested_change"` |  |
| `"required_action"` |  |
| `"status"` |  |

Operations: Create, List, Load.

API path: `/policies/{policy_id}/policy_amendment_intents/{id}/cancel`

#### PolicyImportIntent

| Field | Description |
| --- | --- |
| `"associated_person"` |  |
| `"employee_id"` |  |
| `"group_id"` |  |
| `"id"` |  |
| `"member_number"` |  |
| `"object"` |  |
| `"policy_end_date"` |  |
| `"policy_start_date"` |  |
| `"provider_policy_number"` |  |
| `"status"` |  |

Operations: Create, List, Load.

API path: `/policy_import_intents`

#### Provider

| Field | Description |
| --- | --- |
| `"description"` |  |
| `"employer_platform_url"` |  |
| `"id"` |  |
| `"kota_hub_url"` |  |
| `"logo_url"` |  |
| `"name"` |  |
| `"object"` |  |
| `"support_phone"` |  |
| `"supported_country"` |  |
| `"website_url"` |  |

Operations: List, Load.

API path: `/providers`

#### Replay

| Field | Description |
| --- | --- |
| `"delivery"` |  |
| `"event_id"` |  |

Operations: Create.

API path: `/events/{event_id}/replay`

#### WebhookEndpoint

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"endpoint_url"` |  |
| `"id"` |  |
| `"object"` |  |
| `"subscribed_event"` |  |

Operations: Load.

API path: `/webhooks/endpoints/{webhook_endpoint_id}`

#### WebhookEndpointResponsePagedList

| Field | Description |
| --- | --- |
| `"created_at"` |  |
| `"endpoint_url"` |  |
| `"id"` |  |
| `"object"` |  |
| `"subscribed_event"` |  |

Operations: List.

API path: `/webhooks/endpoints`



## Entities


### AssociatedPerson

Create an instance: `associatedPerson := client.AssociatedPerson(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `date_of_birth` | `string` |  |
| `email` | `any` |  |
| `employee_id` | `string` |  |
| `first_name` | `string` |  |
| `id` | `string` |  |
| `last_name` | `string` |  |
| `object` | `string` |  |
| `phone_number` | `any` |  |
| `platform_id` | `string` |  |
| `relationship_type` | `any` |  |
| `sex_at_birth` | `any` |  |

#### Example: Load

```go
associatedPerson, err := client.AssociatedPerson(nil).Load(map[string]any{"id": "associated_person_id", "employee_id": "employee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(associatedPerson) // the loaded record
```

#### Example: List

```go
associatedPersons, err := client.AssociatedPerson(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(associatedPersons) // the array of records
```

#### Example: Create

```go
result, err := client.AssociatedPerson(nil).Create(map[string]any{
    "employee_id": "example_employee_id",
    "date_of_birth": "example_date_of_birth",
    "first_name": "example_first_name",
    "id": "example_id",
    "last_name": "example_last_name",
    "relationship_type": "example_relationship_type",
    "sex_at_birth": "example_sex_at_birth",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### AssociatedPersonEligibilityResponsePagedList

Create an instance: `associatedPersonEligibilityResponsePagedList := client.AssociatedPersonEligibilityResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_person_id` | `string` |  |
| `date_of_birth` | `string` |  |
| `eligibility_status` | `any` |  |
| `first_name` | `string` |  |
| `ineligibility_reason` | `any` |  |
| `last_name` | `string` |  |
| `object` | `string` |  |
| `relationship` | `any` |  |
| `sex_at_birth` | `any` |  |

#### Example: List

```go
associatedPersonEligibilityResponsePagedLists, err := client.AssociatedPersonEligibilityResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(associatedPersonEligibilityResponsePagedLists) // the array of records
```


### ContributionReport

Create an instance: `contributionReport := client.ContributionReport(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `any` |  |
| `finalized_at` | `any` |  |
| `id` | `string` |  |
| `last_updated_at` | `string` |  |
| `object` | `string` |  |
| `period` | `any` |  |
| `status` | `any` |  |

#### Example: Load

```go
contributionReport, err := client.ContributionReport(nil).Load(map[string]any{"id": "contribution_report_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(contributionReport) // the loaded record
```

#### Example: List

```go
contributionReports, err := client.ContributionReport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(contributionReports) // the array of records
```

#### Example: Create

```go
result, err := client.ContributionReport(nil).Create(map[string]any{
    "id": "example_id",
    "created_at": "example_created_at",
    "employer_id": "example_employer_id",
    "last_updated_at": "example_last_updated_at",
    "period": "example_period",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### ContributionReportEmployeeBreakdown

Create an instance: `contributionReportEmployeeBreakdown := client.ContributionReportEmployeeBreakdown(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contribution_report_id` | `string` |  |
| `created_at` | `string` |  |
| `currency` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `any` |  |
| `finalized_at` | `any` |  |
| `health_insurance` | `any` |  |
| `last_updated_at` | `string` |  |
| `object` | `string` |  |
| `period` | `any` |  |
| `status` | `any` |  |

#### Example: Load

```go
contributionReportEmployeeBreakdown, err := client.ContributionReportEmployeeBreakdown(nil).Load(map[string]any{"id": "contribution_report_employee_breakdown_id", "contribution_report_id": "contribution_report_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(contributionReportEmployeeBreakdown) // the loaded record
```


### ContributionReportEmployeeBreakdownResponsePagedList

Create an instance: `contributionReportEmployeeBreakdownResponsePagedList := client.ContributionReportEmployeeBreakdownResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contribution_report_id` | `string` |  |
| `created_at` | `string` |  |
| `currency` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `any` |  |
| `finalized_at` | `any` |  |
| `health_insurance` | `any` |  |
| `last_updated_at` | `string` |  |
| `object` | `string` |  |
| `period` | `any` |  |
| `status` | `any` |  |

#### Example: List

```go
contributionReportEmployeeBreakdownResponsePagedLists, err := client.ContributionReportEmployeeBreakdownResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(contributionReportEmployeeBreakdownResponsePagedLists) // the array of records
```


### CreateHostedSessionToken

Create an instance: `createHostedSessionToken := client.CreateHostedSessionToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expiry` | `string` |  |
| `link` | `string` |  |

#### Example: Create

```go
result, err := client.CreateHostedSessionToken(nil).Create(map[string]any{
    "expiry": "example_expiry",
    "link": "example_link",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### CreateSessionToken

Create an instance: `createSessionToken := client.CreateSessionToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `expiry` | `string` |  |
| `token` | `string` |  |

#### Example: Create

```go
result, err := client.CreateSessionToken(nil).Create(map[string]any{
    "expiry": "example_expiry",
    "token": "example_token",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Dependent

Create an instance: `dependent := client.Dependent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Remove(match, ctrl)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `any` |  |
| `coverage_option` | `any` |  |
| `dependent` | `[]any` |  |
| `disclosure` | `[]any` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `parent_intent_id` | `string` |  |
| `parent_intent_type` | `any` |  |
| `plan` | `any` |  |
| `status` | `any` |  |

#### Example: Create

```go
result, err := client.Dependent(nil).Create(map[string]any{
    "dependents_management_intent_id": "example_dependents_management_intent_id",
    "dependent": []any{},
    "disclosure": []any{},
    "id": "example_id",
    "parent_intent_id": "example_parent_intent_id",
    "parent_intent_type": "example_parent_intent_type",
    "plan": "example_plan",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### DependentsManagementIntent

Create an instance: `dependentsManagementIntent := client.DependentsManagementIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `any` |  |
| `coverage_option` | `any` |  |
| `dependent` | `[]any` |  |
| `disclosure` | `[]any` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `parent_intent_id` | `string` |  |
| `parent_intent_type` | `any` |  |
| `plan` | `any` |  |
| `status` | `any` |  |

#### Example: Load

```go
dependentsManagementIntent, err := client.DependentsManagementIntent(nil).Load(map[string]any{"id": "dependents_management_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dependentsManagementIntent) // the loaded record
```

#### Example: Create

```go
result, err := client.DependentsManagementIntent(nil).Create(map[string]any{
    "dependent": []any{},
    "disclosure": []any{},
    "id": "example_id",
    "parent_intent_id": "example_parent_intent_id",
    "parent_intent_type": "example_parent_intent_type",
    "plan": "example_plan",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EligibilityCheck

Create an instance: `eligibilityCheck := client.EligibilityCheck(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `eligibility_status` | `any` |  |
| `object` | `string` |  |
| `plan` | `any` |  |
| `provider` | `any` |  |
| `reason` | `[]any` |  |

#### Example: Create

```go
result, err := client.EligibilityCheck(nil).Create(map[string]any{
    "group_id": "example_group_id",
    "eligibility_status": "example_eligibility_status",
    "plan": "example_plan",
    "provider": "example_provider",
    "reason": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Employee

Create an instance: `employee := client.Employee(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bank_account` | `any` |  |
| `date_of_birth` | `string` |  |
| `earliest_benefits_start_date` | `any` |  |
| `email` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `any` |  |
| `first_name` | `string` |  |
| `home_address` | `any` |  |
| `id` | `string` |  |
| `last_name` | `string` |  |
| `metadata` | `any` |  |
| `national_tax_id` | `string` |  |
| `nationality` | `any` |  |
| `object` | `string` |  |
| `offboard_on` | `any` |  |
| `phone_number` | `string` |  |
| `platform_id` | `string` |  |
| `sex_at_birth` | `any` |  |
| `start_on` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```go
employee, err := client.Employee(nil).Load(map[string]any{"id": "employee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(employee) // the loaded record
```

#### Example: List

```go
employees, err := client.Employee(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(employees) // the array of records
```

#### Example: Create

```go
result, err := client.Employee(nil).Create(map[string]any{
    "date_of_birth": "example_date_of_birth",
    "email": "example_email",
    "first_name": "example_first_name",
    "last_name": "example_last_name",
    "national_tax_id": "example_national_tax_id",
    "phone_number": "example_phone_number",
    "sex_at_birth": "example_sex_at_birth",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EmployeeHealthInsuranceOffer

Create an instance: `employeeHealthInsuranceOffer := client.EmployeeHealthInsuranceOffer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_level` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `any` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `required_action` | `any` |  |
| `status` | `any` |  |

#### Example: Load

```go
employeeHealthInsuranceOffer, err := client.EmployeeHealthInsuranceOffer(nil).Load(map[string]any{"id": "employee_health_insurance_offer_id", "employee_id": "employee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(employeeHealthInsuranceOffer) // the loaded record
```


### EmployeeHealthInsuranceOfferResponsePagedList

Create an instance: `employeeHealthInsuranceOfferResponsePagedList := client.EmployeeHealthInsuranceOfferResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_level` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `external_customer_id` | `any` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `required_action` | `any` |  |
| `status` | `any` |  |

#### Example: List

```go
employeeHealthInsuranceOfferResponsePagedLists, err := client.EmployeeHealthInsuranceOfferResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(employeeHealthInsuranceOfferResponsePagedLists) // the array of records
```


### EmployeeHealthInsurancePolicy

Create an instance: `employeeHealthInsurancePolicy := client.EmployeeHealthInsurancePolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `any` |  |
| `coverage_level` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolled_dependants_count` | `int` |  |
| `enrolment_type` | `any` |  |
| `estimated_gross_premium` | `any` |  |
| `external_customer_id` | `any` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `opt_out_deadline_date` | `string` |  |
| `policy_number` | `any` |  |
| `renewal` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```go
employeeHealthInsurancePolicy, err := client.EmployeeHealthInsurancePolicy(nil).Load(map[string]any{"id": "employee_health_insurance_policy_id", "employee_id": "employee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(employeeHealthInsurancePolicy) // the loaded record
```


### EmployeeHealthInsurancePolicyResponsePagedList

Create an instance: `employeeHealthInsurancePolicyResponsePagedList := client.EmployeeHealthInsurancePolicyResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `any` |  |
| `coverage_level` | `any` |  |
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolled_dependants_count` | `int` |  |
| `enrolment_type` | `any` |  |
| `estimated_gross_premium` | `any` |  |
| `external_customer_id` | `any` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `opt_out_deadline_date` | `string` |  |
| `policy_number` | `any` |  |
| `renewal` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |

#### Example: List

```go
employeeHealthInsurancePolicyResponsePagedLists, err := client.EmployeeHealthInsurancePolicyResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(employeeHealthInsurancePolicyResponsePagedLists) // the array of records
```


### Employer

Create an instance: `employer := client.Employer(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `contact` | `any` |  |
| `earliest_benefits_start_date` | `any` |  |
| `id` | `string` |  |
| `legal_address` | `any` |  |
| `legal_name` | `string` |  |
| `metadata` | `any` |  |
| `object` | `string` |  |
| `offboard_on` | `any` |  |
| `platform_id` | `string` |  |
| `registration_number` | `any` |  |
| `status` | `any` |  |

#### Example: Load

```go
employer, err := client.Employer(nil).Load(map[string]any{"id": "employer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(employer) // the loaded record
```

#### Example: List

```go
employers, err := client.Employer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(employers) // the array of records
```

#### Example: Create

```go
result, err := client.Employer(nil).Create(map[string]any{
    "contact": "example_contact",
    "id": "example_id",
    "legal_address": "example_legal_address",
    "legal_name": "example_legal_name",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EmployerHealthInsurancePolicy

Create an instance: `employerHealthInsurancePolicy := client.EmployerHealthInsurancePolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `any` |  |
| `coverage_level` | `[]any` |  |
| `employer_cancellation_period_length` | `int` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolment_type` | `any` |  |
| `group_policy_number` | `any` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `renewal` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```go
employerHealthInsurancePolicy, err := client.EmployerHealthInsurancePolicy(nil).Load(map[string]any{"id": "employer_health_insurance_policy_id", "employer_id": "employer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(employerHealthInsurancePolicy) // the loaded record
```


### EmployerHealthInsurancePolicyResponsePagedList

Create an instance: `employerHealthInsurancePolicyResponsePagedList := client.EmployerHealthInsurancePolicyResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `any` |  |
| `coverage_level` | `[]any` |  |
| `employer_cancellation_period_length` | `int` |  |
| `employer_id` | `string` |  |
| `end_date` | `string` |  |
| `enrolment_type` | `any` |  |
| `group_policy_number` | `any` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `renewal` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |

#### Example: List

```go
employerHealthInsurancePolicyResponsePagedLists, err := client.EmployerHealthInsurancePolicyResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(employerHealthInsurancePolicyResponsePagedLists) // the array of records
```


### EmployerHealthInsuranceQuote

Create an instance: `employerHealthInsuranceQuote := client.EmployerHealthInsuranceQuote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_level` | `[]any` |  |
| `employer_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `quoted_at` | `string` |  |
| `required_action` | `any` |  |
| `status` | `any` |  |

#### Example: Load

```go
employerHealthInsuranceQuote, err := client.EmployerHealthInsuranceQuote(nil).Load(map[string]any{"id": "employer_health_insurance_quote_id", "employer_id": "employer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(employerHealthInsuranceQuote) // the loaded record
```


### EmployerHealthInsuranceQuoteResponsePagedList

Create an instance: `employerHealthInsuranceQuoteResponsePagedList := client.EmployerHealthInsuranceQuoteResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coverage_level` | `[]any` |  |
| `employer_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `quoted_at` | `string` |  |
| `required_action` | `any` |  |
| `status` | `any` |  |

#### Example: List

```go
employerHealthInsuranceQuoteResponsePagedLists, err := client.EmployerHealthInsuranceQuoteResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(employerHealthInsuranceQuoteResponsePagedLists) // the array of records
```


### EnrolmentIntent

Create an instance: `enrolmentIntent := client.EnrolmentIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `any` |  |
| `disclosure` | `[]any` |  |
| `employee_id` | `string` |  |
| `force_confirmation` | `bool` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `ineligibility_reason` | `any` |  |
| `object` | `string` |  |
| `pending_confirmation` | `any` |  |
| `policy_configuration` | `any` |  |
| `policy_enrolment` | `[]any` |  |
| `status` | `any` |  |

#### Example: Load

```go
enrolmentIntent, err := client.EnrolmentIntent(nil).Load(map[string]any{"id": "enrolment_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(enrolmentIntent) // the loaded record
```

#### Example: List

```go
enrolmentIntents, err := client.EnrolmentIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(enrolmentIntents) // the array of records
```

#### Example: Create

```go
result, err := client.EnrolmentIntent(nil).Create(map[string]any{
    "disclosure": []any{},
    "employee_id": "example_employee_id",
    "force_confirmation": true,
    "group_id": "example_group_id",
    "id": "example_id",
    "policy_enrolment": []any{},
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### EnrolmentIntentRequirementResponsePagedList

Create an instance: `enrolmentIntentRequirementResponsePagedList := client.EnrolmentIntentRequirementResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `is_fulfilled` | `bool` |  |
| `object` | `string` |  |
| `object_id` | `string` |  |
| `object_type` | `any` |  |
| `requirement_type` | `any` |  |

#### Example: List

```go
enrolmentIntentRequirementResponsePagedLists, err := client.EnrolmentIntentRequirementResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(enrolmentIntentRequirementResponsePagedLists) // the array of records
```


### Event

Create an instance: `event := client.Event(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `api_version` | `string` |  |
| `created` | `string` |  |
| `data` | `any` |  |
| `id` | `string` |  |
| `platform_id` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```go
event, err := client.Event(nil).Load(map[string]any{"id": "event_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(event) // the loaded record
```

#### Example: List

```go
events, err := client.Event(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(events) // the array of records
```


### Group

Create an instance: `group := client.Group(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |
| `Update(data, ctrl)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `any` |  |
| `employer_id` | `string` |  |
| `enrolment_type` | `any` |  |
| `group_policy_id` | `[]any` |  |
| `group_policy_intent_id` | `[]any` |  |
| `group_quote_intent_id` | `[]any` |  |
| `group_type` | `any` |  |
| `id` | `string` |  |
| `name` | `string` |  |
| `object` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```go
group, err := client.Group(nil).Load(map[string]any{"id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(group) // the loaded record
```

#### Example: List

```go
groups, err := client.Group(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(groups) // the array of records
```

#### Example: Create

```go
result, err := client.Group(nil).Create(map[string]any{
    "employer_id": "example_employer_id",
    "enrolment_type": "example_enrolment_type",
    "group_policy_id": []any{},
    "group_policy_intent_id": []any{},
    "group_quote_intent_id": []any{},
    "group_type": "example_group_type",
    "id": "example_id",
    "name": "example_name",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GroupEmployee

Create an instance: `groupEmployee := client.GroupEmployee(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desired_policy_start_date` | `any` |  |
| `eligibility_status` | `any` |  |
| `enrolment` | `[]any` |  |
| `enrolment_date` | `any` |  |
| `enrolment_status` | `any` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `policy` | `[]any` |  |
| `scheduled_group_transition` | `[]any` |  |

#### Example: Create

```go
result, err := client.GroupEmployee(nil).Create(map[string]any{
    "id": "example_id",
    "eligibility_status": "example_eligibility_status",
    "enrolment": []any{},
    "enrolment_status": "example_enrolment_status",
    "group_id": "example_group_id",
    "policy": []any{},
    "scheduled_group_transition": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GroupEmployeeResponsePagedList

Create an instance: `groupEmployeeResponsePagedList := client.GroupEmployeeResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `desired_policy_start_date` | `any` |  |
| `eligibility_status` | `any` |  |
| `enrolment` | `[]any` |  |
| `enrolment_date` | `any` |  |
| `enrolment_status` | `any` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `policy` | `[]any` |  |
| `scheduled_group_transition` | `[]any` |  |

#### Example: List

```go
groupEmployeeResponsePagedLists, err := client.GroupEmployeeResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupEmployeeResponsePagedLists) // the array of records
```


### GroupPolicy

Create an instance: `groupPolicy := client.GroupPolicy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cancellation_date` | `any` |  |
| `disclosure` | `[]any` |  |
| `employer_id` | `string` |  |
| `end_date` | `any` |  |
| `group_id` | `string` |  |
| `health_insurance` | `any` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan` | `any` |  |
| `provider` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |
| `type` | `any` |  |

#### Example: Load

```go
groupPolicy, err := client.GroupPolicy(nil).Load(map[string]any{"id": "group_policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupPolicy) // the loaded record
```

#### Example: List

```go
groupPolicys, err := client.GroupPolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupPolicys) // the array of records
```


### GroupPolicyIntent

Create an instance: `groupPolicyIntent := client.GroupPolicyIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `any` |  |
| `cost_sharing` | `any` |  |
| `disclosure` | `[]any` |  |
| `due_date` | `any` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan_id` | `string` |  |
| `quote_intent_id` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```go
groupPolicyIntent, err := client.GroupPolicyIntent(nil).Load(map[string]any{"id": "group_policy_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupPolicyIntent) // the loaded record
```

#### Example: List

```go
groupPolicyIntents, err := client.GroupPolicyIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupPolicyIntents) // the array of records
```

#### Example: Create

```go
result, err := client.GroupPolicyIntent(nil).Create(map[string]any{
    "disclosure": []any{},
    "group_id": "example_group_id",
    "id": "example_id",
    "plan_id": "example_plan_id",
    "quote_intent_id": "example_quote_intent_id",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GroupPolicyIntentRequirementResponsePagedList

Create an instance: `groupPolicyIntentRequirementResponsePagedList := client.GroupPolicyIntentRequirementResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `is_fulfilled` | `bool` |  |
| `object` | `string` |  |
| `object_id` | `string` |  |
| `object_type` | `any` |  |
| `requirement_type` | `any` |  |

#### Example: List

```go
groupPolicyIntentRequirementResponsePagedLists, err := client.GroupPolicyIntentRequirementResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupPolicyIntentRequirementResponsePagedLists) // the array of records
```


### GroupQuote

Create an instance: `groupQuote := client.GroupQuote(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cost_sharing` | `any` |  |
| `currency` | `string` |  |
| `employee_count` | `int` |  |
| `expires_at` | `string` |  |
| `generated_at` | `string` |  |
| `object` | `string` |  |
| `pdf_expires_at` | `any` |  |
| `pdf_url` | `any` |  |
| `total_monthly_premium` | `float64` |  |

#### Example: Load

```go
groupQuote, err := client.GroupQuote(nil).Load(map[string]any{"group_quote_intent_id": "group_quote_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupQuote) // the loaded record
```


### GroupQuoteIntent

Create an instance: `groupQuoteIntent := client.GroupQuoteIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action_required` | `any` |  |
| `consent_link` | `[]any` |  |
| `cost_sharing` | `any` |  |
| `disclosure` | `[]any` |  |
| `expected_start_date` | `any` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan_id` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```go
groupQuoteIntent, err := client.GroupQuoteIntent(nil).Load(map[string]any{"id": "group_quote_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupQuoteIntent) // the loaded record
```

#### Example: List

```go
groupQuoteIntents, err := client.GroupQuoteIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupQuoteIntents) // the array of records
```

#### Example: Create

```go
result, err := client.GroupQuoteIntent(nil).Create(map[string]any{
    "consent_link": []any{},
    "disclosure": []any{},
    "group_id": "example_group_id",
    "id": "example_id",
    "plan_id": "example_plan_id",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### GroupQuoteIntentRequirementResponsePagedList

Create an instance: `groupQuoteIntentRequirementResponsePagedList := client.GroupQuoteIntentRequirementResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `is_fulfilled` | `bool` |  |
| `object` | `string` |  |
| `object_id` | `string` |  |
| `object_type` | `any` |  |
| `requirement_type` | `any` |  |

#### Example: List

```go
groupQuoteIntentRequirementResponsePagedLists, err := client.GroupQuoteIntentRequirementResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupQuoteIntentRequirementResponsePagedLists) // the array of records
```


### Plan

Create an instance: `plan := client.Plan(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `available_from` | `string` |  |
| `available_to` | `any` |  |
| `country` | `any` |  |
| `coverage_option` | `any` |  |
| `description` | `string` |  |
| `disclosure` | `[]any` |  |
| `document` | `[]any` |  |
| `eligible_count` | `any` |  |
| `employee_eligibility_criterion` | `[]any` |  |
| `employer_eligibility_criterion` | `[]any` |  |
| `health_insurance` | `any` |  |
| `id` | `string` |  |
| `ineligible_count` | `any` |  |
| `name` | `string` |  |
| `object` | `string` |  |
| `provider` | `any` |  |
| `total_count` | `any` |  |
| `type` | `any` |  |

#### Example: Load

```go
plan, err := client.Plan(nil).Load(map[string]any{"id": "plan_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(plan) // the loaded record
```

#### Example: List

```go
plans, err := client.Plan(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(plans) // the array of records
```


### Policy

Create an instance: `policy := client.Policy(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `bundling_type` | `any` |  |
| `cancellation_date` | `any` |  |
| `disclosure` | `[]any` |  |
| `employee_id` | `string` |  |
| `end_date` | `any` |  |
| `group_id` | `string` |  |
| `group_policy_id` | `string` |  |
| `health_insurance` | `any` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `plan` | `any` |  |
| `provider` | `any` |  |
| `start_date` | `string` |  |
| `status` | `any` |  |
| `type` | `any` |  |

#### Example: Load

```go
policy, err := client.Policy(nil).Load(map[string]any{"id": "policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(policy) // the loaded record
```

#### Example: List

```go
policys, err := client.Policy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(policys) // the array of records
```


### PolicyAmendmentIntent

Create an instance: `policyAmendmentIntent := client.PolicyAmendmentIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `amendment_reason` | `any` |  |
| `disclosure` | `[]any` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `pending_confirmation` | `any` |  |
| `policy_id` | `string` |  |
| `processing_error` | `any` |  |
| `requested_change` | `[]any` |  |
| `required_action` | `any` |  |
| `status` | `any` |  |

#### Example: Load

```go
policyAmendmentIntent, err := client.PolicyAmendmentIntent(nil).Load(map[string]any{"id": "policy_amendment_intent_id", "policy_id": "policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(policyAmendmentIntent) // the loaded record
```

#### Example: List

```go
policyAmendmentIntents, err := client.PolicyAmendmentIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(policyAmendmentIntents) // the array of records
```

#### Example: Create

```go
result, err := client.PolicyAmendmentIntent(nil).Create(map[string]any{
    "id": "example_id",
    "amendment_reason": "example_amendment_reason",
    "disclosure": []any{},
    "policy_id": "example_policy_id",
    "requested_change": []any{},
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### PolicyImportIntent

Create an instance: `policyImportIntent := client.PolicyImportIntent(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `associated_person` | `[]any` |  |
| `employee_id` | `string` |  |
| `group_id` | `string` |  |
| `id` | `string` |  |
| `member_number` | `string` |  |
| `object` | `string` |  |
| `policy_end_date` | `any` |  |
| `policy_start_date` | `string` |  |
| `provider_policy_number` | `string` |  |
| `status` | `any` |  |

#### Example: Load

```go
policyImportIntent, err := client.PolicyImportIntent(nil).Load(map[string]any{"id": "policy_import_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(policyImportIntent) // the loaded record
```

#### Example: List

```go
policyImportIntents, err := client.PolicyImportIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(policyImportIntents) // the array of records
```

#### Example: Create

```go
result, err := client.PolicyImportIntent(nil).Create(map[string]any{
    "associated_person": []any{},
    "employee_id": "example_employee_id",
    "group_id": "example_group_id",
    "id": "example_id",
    "member_number": "example_member_number",
    "policy_start_date": "example_policy_start_date",
    "provider_policy_number": "example_provider_policy_number",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### Provider

Create an instance: `provider := client.Provider(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `employer_platform_url` | `any` |  |
| `id` | `string` |  |
| `kota_hub_url` | `any` |  |
| `logo_url` | `string` |  |
| `name` | `string` |  |
| `object` | `string` |  |
| `support_phone` | `string` |  |
| `supported_country` | `[]any` |  |
| `website_url` | `string` |  |

#### Example: Load

```go
provider, err := client.Provider(nil).Load(map[string]any{"id": "provider_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(provider) // the loaded record
```

#### Example: List

```go
providers, err := client.Provider(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(providers) // the array of records
```


### Replay

Create an instance: `replay := client.Replay(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `delivery` | `[]any` |  |
| `event_id` | `string` |  |

#### Example: Create

```go
result, err := client.Replay(nil).Create(map[string]any{
    "event_id": "example_event_id",
    "delivery": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


### WebhookEndpoint

Create an instance: `webhookEndpoint := client.WebhookEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `endpoint_url` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `subscribed_event` | `[]any` |  |

#### Example: Load

```go
webhookEndpoint, err := client.WebhookEndpoint(nil).Load(map[string]any{"id": "webhook_endpoint_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhookEndpoint) // the loaded record
```


### WebhookEndpointResponsePagedList

Create an instance: `webhookEndpointResponsePagedList := client.WebhookEndpointResponsePagedList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `endpoint_url` | `string` |  |
| `id` | `string` |  |
| `object` | `string` |  |
| `subscribed_event` | `[]any` |  |

#### Example: List

```go
webhookEndpointResponsePagedLists, err := client.WebhookEndpointResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhookEndpointResponsePagedLists) // the array of records
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/kota-sdk/go/
├── kota.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/kota-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `Load`, the entity
stores the returned data and match criteria internally.

```go
dependentsmanagementintent := client.DependentsManagementIntent(nil)
dependentsmanagementintent.Load(map[string]any{"id": "example_id"}, nil)

// dependentsmanagementintent.Data() now returns the dependentsmanagementintent data from the last load
// dependentsmanagementintent.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
