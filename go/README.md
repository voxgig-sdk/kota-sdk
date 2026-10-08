# Kota Golang SDK



The Golang SDK for the Kota API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.AssociatedPerson(nil)` — each with the same small set of operations (`List`, `Load`, `Create`, `Update`, `Remove`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `js`, `lua`, `php`, `py`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/kota-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Tags](https://github.com/voxgig-sdk/kota-sdk/tags) for the available versions.

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
Each operation returns `(value, error)` — the value is the entity, and for
`List` a `[]any` of entities, one per record (there is no `{ok, data}`
wrapper), so check `err` and read a record through the entity's
`Data()`.

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

    // List associatedPerson records — the value is a []any of entities, one per record.
    associatedPersons, err := client.AssociatedPerson(nil).List(map[string]any{"employee_id": "example"}, nil)
    if err != nil {
        panic(err)
    }
    for _, item := range associatedPersons.([]any) {
        fmt.Println(item.(sdk.Entity).Data())
    }

    // Load a single associatedPerson — the value is the entity; Data() reads its record.
    associatedPerson, err := client.AssociatedPerson(nil).Load(map[string]any{"id": "example_id", "employee_id": "example_employee_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(associatedPerson.(sdk.Entity).Data())

    // Create a associatedPerson.
    created, err := client.AssociatedPerson(nil).Create(map[string]any{"employee_id": "example_employee_id", "date_of_birth": "example_date_of_birth", "first_name": "example_first_name", "id": "example_id", "last_name": "example_last_name", "relationship_type": "example_relationship_type", "sex_at_birth": "example_sex_at_birth"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(created.(sdk.Entity).Data())

    // Update a associatedPerson.
    updated, err := client.AssociatedPerson(nil).Update(map[string]any{"id": "example_id", "employee_id": "example_employee_id", "date_of_birth": "example_date_of_birth"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(updated.(sdk.Entity).Data())

    // Remove a associatedPerson.
    removed, err := client.AssociatedPerson(nil).Remove(map[string]any{"id": "example_id", "employee_id": "example_employee_id"}, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(removed.(sdk.Entity).Data())
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
groupquoteintents, err := client.GroupQuoteIntent(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = groupquoteintents
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

groupQuoteIntents, err := client.GroupQuoteIntent(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
// A []any of entities, one per mock record.
for _, item := range groupQuoteIntents.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
| `WebhookEndpoint` | `(data map[string]any) KotaEntity` | Create a WebhookEndpoint entity instance. |

### Entity interface (KotaEntity)

All entities implement the `KotaEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria, and return it. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria, one per record. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity, and return it. |
| `Update` | `(reqdata, ctrl map[string]any) (any, error)` | Update an existing entity, and return it. |
| `Remove` | `(reqmatch, ctrl map[string]any) (any, error)` | Remove an entity, and return it marked as deleted. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the entity
itself — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` / `Update` / `Remove` | the entity, whose `Data()` reads its record (`map[string]any`) |
| `List` | a `[]any` of entities, one per record |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    associatedPerson, err := client.AssociatedPerson(nil).List(map[string]any{"employee_id": "example"}, nil)
    if err != nil { /* handle */ }
    // associatedPerson is a []any of entities, one per record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### AssociatedPerson

| Field | Description |
| --- | --- |
| `"date_of_birth"` | Date of birth of the associated person |
| `"email"` | Email address of the associated person |
| `"employee_id"` | Unique identifier for the employee this person is associated with |
| `"first_name"` | First name of the associated person |
| `"id"` | Unique identifier for the associated person |
| `"last_name"` | Last name of the associated person |
| `"object"` | The object type |
| `"phone_number"` | Phone number in E.164 international format (e.g. |
| `"platform_id"` | Unique identifier for the platform |
| `"relationship_type"` | The relationship type between the employee and the associated person |
| `"sex_at_birth"` | The sex assigned to the associated person at birth |

Operations: Create, List, Load, Remove, Update.

API path: `/employees/{employee_id}/associated_persons`

#### AssociatedPersonEligibilityResponsePagedList

| Field | Description |
| --- | --- |
| `"associated_person_id"` | The associated person ID. |
| `"date_of_birth"` | Date of birth of the associated person. |
| `"eligibility_status"` | Eligibility status for the policy/plan. |
| `"first_name"` | First name of the associated person. |
| `"ineligibility_reason"` | Reason for ineligibility if status is ineligible. |
| `"last_name"` | Last name of the associated person. |
| `"object"` | The object type |
| `"relationship"` | Relationship type to the employee. |
| `"sex_at_birth"` | Sex at birth of the associated person. |

Operations: List.

API path: `/dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility`

#### ContributionReport

| Field | Description |
| --- | --- |
| `"created_at"` | Date and time the report was created |
| `"employer_id"` | Unique identifier of the employer for which the report is created |
| `"external_customer_id"` | Unique identifier of the customer for which the report is created. |
| `"finalized_at"` | Date and time the report was finalized, if applicable |
| `"id"` | Unique identifier for the contribution report |
| `"last_updated_at"` | Date and time of the last update to the report |
| `"object"` | The object type |
| `"period"` | Period covered by the contribution report |
| `"status"` | Current status of the contribution report |

Operations: Create, List, Load.

API path: `/contribution_reports/{contribution_report_id}/finalize`

#### ContributionReportEmployeeBreakdown

| Field | Description |
| --- | --- |
| `"contribution_report_id"` | Unique identifier of the related contribution report |
| `"created_at"` | Date and time the breakdown was created |
| `"currency"` | The currency in which all the amounts in this breakdown are presented (e.g. |
| `"employee_id"` | Unique identifier of the employee for which the breakdown is created |
| `"employer_id"` | Unique identifier of the employer for which the breakdown is created |
| `"external_customer_id"` | Unique identifier of the customer for which the breakdown is created. |
| `"finalized_at"` | Date and time the breakdown was finalized, if applicable |
| `"health_insurance"` | Health insurance contribution details |
| `"id"` |  |
| `"last_updated_at"` | Date and time of the last update to the breakdown |
| `"object"` | The object type |
| `"period"` | Period covered by the employee breakdown |
| `"status"` | Current status of the breakdown |

Operations: Load.

API path: `/contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}`

#### ContributionReportEmployeeBreakdownResponsePagedList

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List.

API path: `/contribution_reports/{contribution_report_id}/employee_breakdowns`

#### CreateHostedSessionToken

| Field | Description |
| --- | --- |
| `"employee_id"` |  |
| `"employer_id"` |  |
| `"expiry"` |  |
| `"link"` |  |

Operations: Create.

API path: `/hosted/sessions`

#### CreateSessionToken

| Field | Description |
| --- | --- |
| `"employee_id"` |  |
| `"employer_id"` |  |
| `"expiry"` |  |
| `"external_customer_id"` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `"token"` |  |

Operations: Create.

API path: `/embed/sessions`

#### Dependent

| Field | Description |
| --- | --- |
| `"action_required"` | Details of the action required from the caller. |
| `"associated_person_ids"` | List of associated person IDs to add as dependents. |
| `"coverage_options"` | Available member-scoped coverage options for the plan. |
| `"dependent_coverage_selections"` | Optional coverage selections per dependent. |
| `"dependents"` | List of dependents being managed. |
| `"disclosures"` | Disclosures associated with this intent. |
| `"id"` | Unique identifier for the dependents management intent. |
| `"object"` | Object type identifier. |
| `"parent_intent_id"` | The parent intent ID (e.g. |
| `"parent_intent_type"` | The type of parent intent. |
| `"plan"` | Plan information including pricing details. |
| `"status"` | Current status of the dependents management intent. |

Operations: Create, Remove.

API path: `/dependents_management_intents/{dependents_management_intent_id}/dependents`

#### DependentsManagementIntent

| Field | Description |
| --- | --- |
| `"action_required"` | Details of the action required from the caller. |
| `"coverage_options"` | Available member-scoped coverage options for the plan. |
| `"dependents"` | List of dependents being managed. |
| `"disclosures"` | Disclosures associated with this intent. |
| `"id"` | Unique identifier for the dependents management intent. |
| `"object"` | Object type identifier. |
| `"parent_intent_id"` | The parent intent ID (e.g. |
| `"parent_intent_type"` | The type of parent intent. |
| `"plan"` | Plan information including pricing details. |
| `"status"` | Current status of the dependents management intent. |

Operations: Create, Load.

API path: `/policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent`

#### EligibilityCheck

| Field | Description |
| --- | --- |
| `"eligibility_status"` | Eligibility status: `eligible` or `ineligible`. |
| `"employee_id"` | The employee to check eligibility for. |
| `"object"` | The object type. |
| `"plan"` | The insurance plan associated with the group. |
| `"provider"` | The insurance provider associated with the group. |
| `"reasons"` | List of reasons why the employee is ineligible. |

Operations: Create.

API path: `/groups/{group_id}/eligibility_check`

#### Employee

| Field | Description |
| --- | --- |
| `"bank_account"` | Bank account details |
| `"date_of_birth"` | Date of birth of the employee |
| `"earliest_benefits_start_date"` | The earliest date this employee can be enrolled in any benefits. |
| `"email"` | Email address of the employee |
| `"employer_id"` | Unique identifier for the employer |
| `"external_customer_id"` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `"first_name"` | First name of the employee. |
| `"home_address"` | Location where the employee is legally registered to live |
| `"id"` | Unique identifier for the employee |
| `"last_name"` | Last name of the employee |
| `"metadata"` | Set of key-value pairs that you can attach to an object. |
| `"national_tax_id"` | PPSN in Ireland, NINo in the UK, DNI/NIE in Spain |
| `"nationality"` | Nationality of the employee (e.g. |
| `"object"` | The object type |
| `"offboard_on"` | Date when the employee was or will be offboarded |
| `"phone_number"` | Phone number in E.164 international format (e.g. |
| `"platform_id"` | Unique identifier for the platform |
| `"sex_at_birth"` | The sex assigned to the employee at birth |
| `"start_on"` | Employment start date |
| `"status"` | Current status of the employee |

Operations: Create, List, Load, Update.

API path: `/employees/{employee_id}/offboard`

#### EmployeeHealthInsuranceOffer

| Field | Description |
| --- | --- |
| `"coverage_level"` | Details about the coverage level for the offer. |
| `"employee_id"` | The Id of the employee for which the offer is available |
| `"employer_id"` | The Id of the employer for which the offer is available |
| `"external_customer_id"` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `"id"` | Unique identifier for offer |
| `"object"` | The object type |
| `"required_action"` | Required action to progress the offer, if any. |
| `"status"` | Current status of offer |

Operations: Load.

API path: `/employees/{employee_id}/health_insurance/offers/{employee_offer_id}`

#### EmployeeHealthInsuranceOfferResponsePagedList

| Field | Description |
| --- | --- |
| `"coverage_level"` | Details about the coverage level for the offer. |
| `"employee_id"` | The Id of the employee for which the offer is available |
| `"employer_id"` | The Id of the employer for which the offer is available |
| `"external_customer_id"` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `"id"` | Unique identifier for offer |
| `"object"` | The object type |
| `"required_action"` | Required action to progress the offer, if any. |
| `"status"` | Current status of offer |

Operations: List.

API path: `/employees/{employee_id}/health_insurance/offers`

#### EmployeeHealthInsurancePolicy

| Field | Description |
| --- | --- |
| `"cancellation_date"` | Policy was cancelled on this date, if cancellation occured |
| `"coverage_level"` | Represents the current coverage level for the policy |
| `"employee_id"` | The Id of the employee for which the policy is created |
| `"employer_id"` | The Id of the employer for which the policy is created |
| `"end_date"` | Policy ends on this date |
| `"enrolled_dependants_count"` | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `"enrolment_type"` | Enrolment type of the policy |
| `"estimated_gross_premium"` | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `"external_customer_id"` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `"id"` | Unique identifier for policy |
| `"object"` | The object type |
| `"opt_out_deadline_date"` | Last day to opt out from the policy |
| `"policy_number"` | Health insurance policy number, if available |
| `"renewal"` | Renewal information for the policy |
| `"start_date"` | Policy starts on this date |
| `"status"` | Current status of policy |

Operations: Load.

API path: `/employees/{employee_id}/health_insurance/policies/{employee_policy_id}`

#### EmployeeHealthInsurancePolicyResponsePagedList

| Field | Description |
| --- | --- |
| `"cancellation_date"` | Policy was cancelled on this date, if cancellation occured |
| `"coverage_level"` | Represents the current coverage level for the policy |
| `"employee_id"` | The Id of the employee for which the policy is created |
| `"employer_id"` | The Id of the employer for which the policy is created |
| `"end_date"` | Policy ends on this date |
| `"enrolled_dependants_count"` | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `"enrolment_type"` | Enrolment type of the policy |
| `"estimated_gross_premium"` | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `"external_customer_id"` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `"id"` | Unique identifier for policy |
| `"object"` | The object type |
| `"opt_out_deadline_date"` | Last day to opt out from the policy |
| `"policy_number"` | Health insurance policy number, if available |
| `"renewal"` | Renewal information for the policy |
| `"start_date"` | Policy starts on this date |
| `"status"` | Current status of policy |

Operations: List.

API path: `/employees/{employee_id}/health_insurance/policies`

#### Employer

| Field | Description |
| --- | --- |
| `"contact"` |  |
| `"earliest_benefits_start_date"` | The earliest date this employer is permitted to set up any benefits scheme. |
| `"id"` |  |
| `"legal_address"` | Treated as a single object that is updated entirely, `null` sub-fields (e.g. |
| `"legal_name"` | Legal name of the company. |
| `"metadata"` | Set of key-value pairs that you can attach to an object. |
| `"object"` | The object type |
| `"offboard_on"` |  |
| `"platform_id"` |  |
| `"registration_number"` | Company registration number. |
| `"status"` |  |

Operations: Create, List, Load, Update.

API path: `/employers/{employer_id}/offboard`

#### EmployerHealthInsurancePolicy

| Field | Description |
| --- | --- |
| `"cancellation_date"` | Policy was cancelled on this date, if cancellation occured |
| `"coverage_levels"` | Represents the available coverage levels for this policy |
| `"employer_cancellation_period_length"` | How many days the employer has to cancel the policy since the policy starts |
| `"employer_id"` | The Id of the employer for which the policy is created |
| `"end_date"` | Policy ends on this date |
| `"enrolment_type"` | Enrolment type of the policy |
| `"group_policy_number"` | Group’s health insurance policy number, if available |
| `"id"` | Unique identifier for policy |
| `"object"` | The object type |
| `"renewal"` | Renewal information for the policy |
| `"start_date"` | Policy starts on this date |
| `"status"` | Current status of policy |

Operations: Load.

API path: `/employers/{employer_id}/health_insurance/policies/{employer_policy_id}`

#### EmployerHealthInsurancePolicyResponsePagedList

| Field | Description |
| --- | --- |
| `"cancellation_date"` | Policy was cancelled on this date, if cancellation occured |
| `"coverage_levels"` | Represents the available coverage levels for this policy |
| `"employer_cancellation_period_length"` | How many days the employer has to cancel the policy since the policy starts |
| `"employer_id"` | The Id of the employer for which the policy is created |
| `"end_date"` | Policy ends on this date |
| `"enrolment_type"` | Enrolment type of the policy |
| `"group_policy_number"` | Group’s health insurance policy number, if available |
| `"id"` | Unique identifier for policy |
| `"object"` | The object type |
| `"renewal"` | Renewal information for the policy |
| `"start_date"` | Policy starts on this date |
| `"status"` | Current status of policy |

Operations: List.

API path: `/employers/{employer_id}/health_insurance/policies`

#### EmployerHealthInsuranceQuote

| Field | Description |
| --- | --- |
| `"coverage_levels"` | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `"employer_id"` | The Id of the employer for which the is created |
| `"id"` | Unique identifier for the quote |
| `"object"` | The object type |
| `"quoted_at"` | Date and time the quote was created at |
| `"required_action"` | Actions required by the employer to proceed with the quote. |
| `"status"` | Current status of the quote |

Operations: Load.

API path: `/employers/{employer_id}/health_insurance/quotes/{employer_quote_id}`

#### EmployerHealthInsuranceQuoteResponsePagedList

| Field | Description |
| --- | --- |
| `"coverage_levels"` | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `"employer_id"` | The Id of the employer for which the is created |
| `"id"` | Unique identifier for the quote |
| `"object"` | The object type |
| `"quoted_at"` | Date and time the quote was created at |
| `"required_action"` | Actions required by the employer to proceed with the quote. |
| `"status"` | Current status of the quote |

Operations: List.

API path: `/employers/{employer_id}/health_insurance/quotes`

#### EnrolmentIntent

| Field | Description |
| --- | --- |
| `"action_required"` | If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment. |
| `"coverage_selections"` | Optional plan coverage option selections for policy-scoped configurations. |
| `"desired_policy_start_date"` | The desired date for the employee's policy to start. |
| `"disclosures"` | Disclosures associated with this intent. |
| `"employee_id"` | Identifier for the employee associated with this enrolment intent. |
| `"enrolment_date"` | The date on which the employee agreed to enrol into the group's policies. |
| `"force_confirmation"` | If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. |
| `"group_id"` | Identifier for the group associated with this enrolment intent. |
| `"id"` | Unique identifier for the enrolment intent. |
| `"ineligibility_reason"` | If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility. |
| `"object"` | Object type identifier. |
| `"pending_confirmation"` | If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state. |
| `"policy_configuration"` | Policy configuration associated with this enrolment intent. |
| `"policy_enrolments"` | Policy enrolment information |
| `"status"` | Current status of the enrolment intent. |

Operations: Create, List, Load, Update.

API path: `/enrolment_intents/{enrolment_intent_id}/confirm`

#### EnrolmentIntentRequirementResponsePagedList

| Field | Description |
| --- | --- |
| `"id"` |  |

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

Operations: Create, List, Load.

API path: `/events/{event_id}/replay`

#### Group

| Field | Description |
| --- | --- |
| `"description"` | Short description of the purpose or scope of the `group`. |
| `"employer_id"` | Identifier for the `employer` that owns this `group`. |
| `"enrolment_type"` | Indicates how employees are enrolled into the group. |
| `"group_policy_ids"` | Group policy unique identifiers associated with this group. |
| `"group_policy_intent_ids"` | Group policy intent unique identifiers associated with this group. |
| `"group_quote_intent_ids"` | Group quote intent unique identifiers associated with this group. |
| `"group_type"` | Indicates how policies are organized for this group. |
| `"id"` | Unique identifier for the `group`. |
| `"name"` | Human-readable name of the `group`. |
| `"object"` | The object type |
| `"status"` | Current lifecycle state of the `group`, indicating its current progress. |

Operations: Create, List, Load, Update.

API path: `/groups`

#### GroupEmployee

| Field | Description |
| --- | --- |
| `"create_enrolment_intents"` | Controls whether enrolment intents are automatically created for the employee. |
| `"desired_policy_start_date"` | The desired date for the employee's policy to start. |
| `"eligibility_status"` | Eligibility status for the employee in this group. |
| `"employee_id"` | Employee Id |
| `"enrolment_date"` | The date on which the employee agreed to enrol into the group's policies. |
| `"enrolment_status"` | Enrolment status for the employee in this group. |
| `"enrolments"` | List of enrolments associated with the employee in this group. |
| `"group_id"` | Unique identifier for the group. |
| `"id"` | Unique identifier for the employee. |
| `"object"` | The object type |
| `"policies"` | List of policies associated with the employee in this group. |
| `"policy_configuration"` | Policy configuration for the employee in this group. |
| `"scheduled_group_transitions"` | List of scheduled group transitions for the employee. |

Operations: Create.

API path: `/groups/{group_id}/employees`

#### GroupEmployeeResponsePagedList

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List.

API path: `/groups/{group_id}/employees`

#### GroupPolicy

| Field | Description |
| --- | --- |
| `"cancellation_date"` | Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable. |
| `"disclosures"` | Disclosures associated with this group policy. |
| `"employer_id"` | Identifier for the employer associated with this group policy. |
| `"end_date"` | Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended. |
| `"group_id"` | Identifier for the group associated with this group policy. |
| `"health_insurance"` | Health insurance–specific fields (present when `type=health_insurance`). |
| `"id"` | Unique identifier for the group policy. |
| `"object"` | The object type |
| `"plan"` | Plan information for this policy |
| `"provider"` | Provider information for this policy. |
| `"start_date"` | Policy start (effective) date in ISO 8601 (YYYY-MM-DD). |
| `"status"` | Current lifecycle state of the `group_policy`, indicating its progress from creation to activation. |
| `"type"` | Policy type. |

Operations: List, Load.

API path: `/group_policies`

#### GroupPolicyIntent

| Field | Description |
| --- | --- |
| `"action_required"` | Details of the required action when the intent is in ActionRequired status. |
| `"consent_approvals"` | Consent approvals to record at the time of intent creation |
| `"cost_sharing"` | Cost sharing configuration for the policy intent |
| `"disclosures"` | Disclosures associated with this intent. |
| `"due_date"` | Due date for the policy intent |
| `"group_id"` | Unique identifier for the group |
| `"id"` | Unique identifier for the group policy intent |
| `"object"` | Object type identifier |
| `"plan_id"` | Unique identifier for the plan |
| `"quote_intent_id"` | Unique identifier for the group quote intent this policy intent was created from |
| `"status"` | Current status of the group policy intent |

Operations: Create, List, Load.

API path: `/group_policy_intents`

#### GroupPolicyIntentRequirementResponsePagedList

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List.

API path: `/group_policy_intents/{group_policy_intent_id}/requirements`

#### GroupQuote

| Field | Description |
| --- | --- |
| `"cost_sharing"` | Cost sharing configuration for the quote |
| `"currency"` | Currency of the premium (e.g. |
| `"employee_count"` | Number of employees covered by the quote |
| `"expires_at"` | When the quote expires |
| `"generated_at"` | When the quote was generated |
| `"object"` | Object type identifier |
| `"pdf_expires_at"` | When the PDF URL expires |
| `"pdf_url"` | URL to download the quote PDF |
| `"total_monthly_premium"` | Total monthly premium for the group |

Operations: Load.

API path: `/group_quote_intents/{group_quote_intent_id}/quote`

#### GroupQuoteIntent

| Field | Description |
| --- | --- |
| `"action_required"` | Details of the action required from the caller, if the intent is in action_required status. |
| `"consent_links"` | Consent links that need to be acknowledged |
| `"cost_sharing"` | Cost sharing configuration for the quote |
| `"coverage_selections"` | Plan coverage option selections for group-policy-scoped configurations. |
| `"disclosures"` | Disclosures associated with this intent. |
| `"expected_start_date"` | Expected start date for the insurance coverage |
| `"group_id"` | Unique identifier for the group |
| `"id"` | Unique identifier for the group quote intent |
| `"object"` | Object type identifier |
| `"plan_id"` | Unique identifier for the plan |
| `"status"` | Current status of the group quote intent |

Operations: Create, List, Load.

API path: `/group_quote_intents/{group_quote_intent_id}/reject`

#### GroupQuoteIntentRequirementResponsePagedList

| Field | Description |
| --- | --- |
| `"id"` |  |

Operations: List.

API path: `/group_quote_intents/{group_quote_intent_id}/requirements`

#### Plan

| Field | Description |
| --- | --- |
| `"available_from"` | The date from which this plan is available (inclusive). |
| `"available_to"` | The date until which this plan is available (inclusive). |
| `"country"` | The country this plan is available in. |
| `"coverage_options"` | Coverage options available for this plan, organized by scope and input type. |
| `"description"` | Description of the plan. |
| `"disclosures"` | Disclosures associated with this plan. |
| `"documents"` | List of plan documents (e.g., IPIDs, T&Cs). |
| `"eligible_count"` | Number of employees in the queried group eligible for this plan as-of `start_date`. |
| `"employee_eligibility_criteria"` | Eligibility criteria that employees must meet. |
| `"employer_eligibility_criteria"` | Eligibility criteria that employers must meet. |
| `"health_insurance"` | Health insurance-specific details. |
| `"id"` | Unique identifier for the plan. |
| `"ineligible_count"` | Number of employees in the queried group ineligible for this plan as-of `start_date`. |
| `"name"` | The name of the plan. |
| `"object"` | Object type. |
| `"provider"` | The provider offering this plan. |
| `"total_count"` | Total employees in the queried group. |
| `"type"` | The benefit type of the plan. |

Operations: List, Load.

API path: `/plans`

#### Policy

| Field | Description |
| --- | --- |
| `"bundling_type"` | Indicates how this policy is bundled within a group |
| `"cancellation_date"` | Date the policy was cancelled (if applicable) |
| `"disclosures"` | Disclosures associated with this policy. |
| `"employee_id"` | Identifier of the employee associated with this policy. |
| `"end_date"` | Policy end date (inclusive) in ISO 8601, or null if open-ended |
| `"group_id"` | Identifier of the group associated with this policy. |
| `"group_policy_id"` | Identifier of the group policy id associated with this policy. |
| `"health_insurance"` | Health insurance–specific fields (present when `type=health_insurance`) |
| `"id"` | Unique identifier for the policy. |
| `"object"` | Object type |
| `"plan"` | Plan information for this policy |
| `"provider"` | Provider information for this policy |
| `"start_date"` | Policy start (effective) date in ISO 8601 (YYYY-MM-DD) |
| `"status"` | Current lifecycle state of the policy |
| `"type"` | Policy type. |

Operations: List, Load.

API path: `/policies`

#### PolicyAmendmentIntent

| Field | Description |
| --- | --- |
| `"amendment_reason"` | The reason for the policy amendment. |
| `"disclosures"` | Disclosures associated with this intent. |
| `"id"` | Unique identifier for the policy amendment intent. |
| `"object"` | Object type identifier. |
| `"pending_confirmation"` | Information about the pending confirmation if the intent status is `pending_confirmation`. |
| `"policy_id"` | The policy ID for which the amendment is requested. |
| `"processing_error"` | Information about the processing error if the intent status is `processing_error`. |
| `"requested_changes"` | List of requested changes to the policy. |
| `"required_action"` | Information about the required action if the intent status is `action_required`. |
| `"status"` | Current status of the policy amendment intent. |

Operations: Create, List, Load.

API path: `/policies/{policy_id}/policy_amendment_intents/{id}/cancel`

#### PolicyImportIntent

| Field | Description |
| --- | --- |
| `"associated_persons"` | List of associated persons linked to this policy import. |
| `"employee_id"` | The employee ID for the policy import. |
| `"group_id"` | The group ID for the policy import. |
| `"id"` | Unique identifier for the policy import intent. |
| `"member_number"` | The member number assigned by the provider. |
| `"object"` | Object type identifier. |
| `"policy_end_date"` | The end date of the policy. |
| `"policy_start_date"` | The start date of the policy. |
| `"provider_policy_number"` | The provider's policy number. |
| `"status"` | Current status of the policy import intent. |

Operations: Create, List, Load.

API path: `/policy_import_intents`

#### Provider

| Field | Description |
| --- | --- |
| `"description"` | Description of the provider. |
| `"employer_platform_url"` | URL to the employer portal/platform for this provider, if available. |
| `"id"` | Unique identifier for the provider. |
| `"kota_hub_url"` | URL to the Kota Hub page for this platform, if configured. |
| `"logo_url"` | URL to the provider's logo image. |
| `"name"` | The name of the provider. |
| `"object"` | Object type. |
| `"support_phone"` | Customer support phone number. |
| `"supported_countries"` | List of countries supported by this provider. |
| `"website_url"` | The provider's main website URL. |

Operations: List, Load.

API path: `/providers`

#### WebhookEndpoint

| Field | Description |
| --- | --- |
| `"created_at"` | The date and time the endpoint was created |
| `"endpoint_url"` | The registered URL of the endpoint |
| `"id"` | The unique identifier of the endpoint |
| `"object"` | The object type |
| `"subscribed_events"` | The events the endpoint is subscribed to |

Operations: List, Load.

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
| `date_of_birth` | `string` | Date of birth of the associated person |
| `email` | `any` | Email address of the associated person |
| `employee_id` | `string` | Unique identifier for the employee this person is associated with |
| `first_name` | `string` | First name of the associated person |
| `id` | `string` | Unique identifier for the associated person |
| `last_name` | `string` | Last name of the associated person |
| `object` | `string` | The object type |
| `phone_number` | `any` | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | Unique identifier for the platform |
| `relationship_type` | `string` | The relationship type between the employee and the associated person |
| `sex_at_birth` | `string` | The sex assigned to the associated person at birth |

#### Example: Load

```go
associatedPerson, err := client.AssociatedPerson(nil).Load(map[string]any{"id": "associated_person_id", "employee_id": "employee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(associatedPerson.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
associatedPersons, err := client.AssociatedPerson(nil).List(map[string]any{"employee_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range associatedPersons.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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
| `associated_person_id` | `string` | The associated person ID. |
| `date_of_birth` | `string` | Date of birth of the associated person. |
| `eligibility_status` | `string` | Eligibility status for the policy/plan. |
| `first_name` | `string` | First name of the associated person. |
| `ineligibility_reason` | `any` | Reason for ineligibility if status is ineligible. |
| `last_name` | `string` | Last name of the associated person. |
| `object` | `string` | The object type |
| `relationship` | `string` | Relationship type to the employee. |
| `sex_at_birth` | `string` | Sex at birth of the associated person. |

#### Example: List

```go
associatedPersonEligibilityResponsePagedLists, err := client.AssociatedPersonEligibilityResponsePagedList(nil).List(map[string]any{"dependents_management_intent_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range associatedPersonEligibilityResponsePagedLists.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
| `created_at` | `string` | Date and time the report was created |
| `employer_id` | `string` | Unique identifier of the employer for which the report is created |
| `external_customer_id` | `any` | Unique identifier of the customer for which the report is created. |
| `finalized_at` | `any` | Date and time the report was finalized, if applicable |
| `id` | `string` | Unique identifier for the contribution report |
| `last_updated_at` | `string` | Date and time of the last update to the report |
| `object` | `string` | The object type |
| `period` | `any` | Period covered by the contribution report |
| `status` | `string` | Current status of the contribution report |

#### Example: Load

```go
contributionReport, err := client.ContributionReport(nil).Load(map[string]any{"id": "contribution_report_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(contributionReport.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
contributionReports, err := client.ContributionReport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range contributionReports.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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
| `contribution_report_id` | `string` | Unique identifier of the related contribution report |
| `created_at` | `string` | Date and time the breakdown was created |
| `currency` | `string` | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `any` | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `any` | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `any` | Health insurance contribution details |
| `id` | `string` |  |
| `last_updated_at` | `string` | Date and time of the last update to the breakdown |
| `object` | `string` | The object type |
| `period` | `any` | Period covered by the employee breakdown |
| `status` | `string` | Current status of the breakdown |

#### Example: Load

```go
contributionReportEmployeeBreakdown, err := client.ContributionReportEmployeeBreakdown(nil).Load(map[string]any{"id": "contribution_report_employee_breakdown_id", "contribution_report_id": "contribution_report_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(contributionReportEmployeeBreakdown.(sdk.Entity).Data()) // the loaded entity's record
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
| `id` | `string` |  |

#### Example: List

```go
contributionReportEmployeeBreakdownResponsePagedLists, err := client.ContributionReportEmployeeBreakdownResponsePagedList(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range contributionReportEmployeeBreakdownResponsePagedLists.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
| `employee_id` | `string` |  |
| `employer_id` | `string` |  |
| `expiry` | `string` |  |
| `link` | `string` |  |

#### Example: Create

```go
result, err := client.CreateHostedSessionToken(nil).Create(map[string]any{
    "employee_id": "example_employee_id",
    "employer_id": "example_employer_id",
    "expiry": "example_expiry",
    "link": "example_link",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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
| `employee_id` | `any` |  |
| `employer_id` | `string` |  |
| `expiry` | `string` |  |
| `external_customer_id` | `any` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `token` | `string` |  |

#### Example: Create

```go
result, err := client.CreateSessionToken(nil).Create(map[string]any{
    "employer_id": "example_employer_id",
    "expiry": "example_expiry",
    "token": "example_token",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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
| `action_required` | `any` | Details of the action required from the caller. |
| `associated_person_ids` | `[]any` | List of associated person IDs to add as dependents. |
| `coverage_options` | `any` | Available member-scoped coverage options for the plan. |
| `dependent_coverage_selections` | `any` | Optional coverage selections per dependent. |
| `dependents` | `[]any` | List of dependents being managed. |
| `disclosures` | `[]any` | Disclosures associated with this intent. |
| `id` | `string` | Unique identifier for the dependents management intent. |
| `object` | `string` | Object type identifier. |
| `parent_intent_id` | `string` | The parent intent ID (e.g. |
| `parent_intent_type` | `string` | The type of parent intent. |
| `plan` | `any` | Plan information including pricing details. |
| `status` | `string` | Current status of the dependents management intent. |

#### Example: Create

```go
result, err := client.Dependent(nil).Create(map[string]any{
    "dependents_management_intent_id": "example_dependents_management_intent_id",
    "associated_person_ids": []any{},
    "dependents": []any{},
    "disclosures": []any{},
    "id": "example_id",
    "parent_intent_id": "example_parent_intent_id",
    "parent_intent_type": "example_parent_intent_type",
    "plan": "example_plan",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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
| `action_required` | `any` | Details of the action required from the caller. |
| `coverage_options` | `any` | Available member-scoped coverage options for the plan. |
| `dependents` | `[]any` | List of dependents being managed. |
| `disclosures` | `[]any` | Disclosures associated with this intent. |
| `id` | `string` | Unique identifier for the dependents management intent. |
| `object` | `string` | Object type identifier. |
| `parent_intent_id` | `string` | The parent intent ID (e.g. |
| `parent_intent_type` | `string` | The type of parent intent. |
| `plan` | `any` | Plan information including pricing details. |
| `status` | `string` | Current status of the dependents management intent. |

#### Example: Load

```go
dependentsManagementIntent, err := client.DependentsManagementIntent(nil).Load(map[string]any{"id": "dependents_management_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(dependentsManagementIntent.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: Create

```go
result, err := client.DependentsManagementIntent(nil).Create(map[string]any{
    "enrolment_intent_id": "example_enrolment_intent_id",
    "dependents": []any{},
    "disclosures": []any{},
    "id": "example_id",
    "parent_intent_id": "example_parent_intent_id",
    "parent_intent_type": "example_parent_intent_type",
    "plan": "example_plan",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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
| `eligibility_status` | `string` | Eligibility status: `eligible` or `ineligible`. |
| `employee_id` | `string` | The employee to check eligibility for. |
| `object` | `string` | The object type. |
| `plan` | `any` | The insurance plan associated with the group. |
| `provider` | `any` | The insurance provider associated with the group. |
| `reasons` | `[]any` | List of reasons why the employee is ineligible. |

#### Example: Create

```go
result, err := client.EligibilityCheck(nil).Create(map[string]any{
    "group_id": "example_group_id",
    "eligibility_status": "example_eligibility_status",
    "employee_id": "example_employee_id",
    "plan": "example_plan",
    "provider": "example_provider",
    "reasons": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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
| `bank_account` | `any` | Bank account details |
| `date_of_birth` | `string` | Date of birth of the employee |
| `earliest_benefits_start_date` | `any` | The earliest date this employee can be enrolled in any benefits. |
| `email` | `string` | Email address of the employee |
| `employer_id` | `string` | Unique identifier for the employer |
| `external_customer_id` | `any` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `first_name` | `string` | First name of the employee. |
| `home_address` | `any` | Location where the employee is legally registered to live |
| `id` | `string` | Unique identifier for the employee |
| `last_name` | `string` | Last name of the employee |
| `metadata` | `any` | Set of key-value pairs that you can attach to an object. |
| `national_tax_id` | `string` | PPSN in Ireland, NINo in the UK, DNI/NIE in Spain |
| `nationality` | `any` | Nationality of the employee (e.g. |
| `object` | `string` | The object type |
| `offboard_on` | `any` | Date when the employee was or will be offboarded |
| `phone_number` | `string` | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | Unique identifier for the platform |
| `sex_at_birth` | `string` | The sex assigned to the employee at birth |
| `start_on` | `string` | Employment start date |
| `status` | `string` | Current status of the employee |

#### Example: Load

```go
employee, err := client.Employee(nil).Load(map[string]any{"id": "employee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(employee.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
employees, err := client.Employee(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range employees.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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
| `coverage_level` | `any` | Details about the coverage level for the offer. |
| `employee_id` | `string` | The Id of the employee for which the offer is available |
| `employer_id` | `string` | The Id of the employer for which the offer is available |
| `external_customer_id` | `any` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for offer |
| `object` | `string` | The object type |
| `required_action` | `any` | Required action to progress the offer, if any. |
| `status` | `string` | Current status of offer |

#### Example: Load

```go
employeeHealthInsuranceOffer, err := client.EmployeeHealthInsuranceOffer(nil).Load(map[string]any{"id": "employee_health_insurance_offer_id", "employee_id": "employee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(employeeHealthInsuranceOffer.(sdk.Entity).Data()) // the loaded entity's record
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
| `coverage_level` | `any` | Details about the coverage level for the offer. |
| `employee_id` | `string` | The Id of the employee for which the offer is available |
| `employer_id` | `string` | The Id of the employer for which the offer is available |
| `external_customer_id` | `any` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for offer |
| `object` | `string` | The object type |
| `required_action` | `any` | Required action to progress the offer, if any. |
| `status` | `string` | Current status of offer |

#### Example: List

```go
employeeHealthInsuranceOfferResponsePagedLists, err := client.EmployeeHealthInsuranceOfferResponsePagedList(nil).List(map[string]any{"employee_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range employeeHealthInsuranceOfferResponsePagedLists.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
| `cancellation_date` | `any` | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `any` | Represents the current coverage level for the policy |
| `employee_id` | `string` | The Id of the employee for which the policy is created |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolled_dependants_count` | `int` | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `string` | Enrolment type of the policy |
| `estimated_gross_premium` | `any` | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `any` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `opt_out_deadline_date` | `string` | Last day to opt out from the policy |
| `policy_number` | `any` | Health insurance policy number, if available |
| `renewal` | `any` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `string` | Current status of policy |

#### Example: Load

```go
employeeHealthInsurancePolicy, err := client.EmployeeHealthInsurancePolicy(nil).Load(map[string]any{"id": "employee_health_insurance_policy_id", "employee_id": "employee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(employeeHealthInsurancePolicy.(sdk.Entity).Data()) // the loaded entity's record
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
| `cancellation_date` | `any` | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `any` | Represents the current coverage level for the policy |
| `employee_id` | `string` | The Id of the employee for which the policy is created |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolled_dependants_count` | `int` | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `string` | Enrolment type of the policy |
| `estimated_gross_premium` | `any` | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `any` | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `opt_out_deadline_date` | `string` | Last day to opt out from the policy |
| `policy_number` | `any` | Health insurance policy number, if available |
| `renewal` | `any` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `string` | Current status of policy |

#### Example: List

```go
employeeHealthInsurancePolicyResponsePagedLists, err := client.EmployeeHealthInsurancePolicyResponsePagedList(nil).List(map[string]any{"employee_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range employeeHealthInsurancePolicyResponsePagedLists.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
| `earliest_benefits_start_date` | `any` | The earliest date this employer is permitted to set up any benefits scheme. |
| `id` | `string` |  |
| `legal_address` | `any` | Treated as a single object that is updated entirely, `null` sub-fields (e.g. |
| `legal_name` | `string` | Legal name of the company. |
| `metadata` | `any` | Set of key-value pairs that you can attach to an object. |
| `object` | `string` | The object type |
| `offboard_on` | `any` |  |
| `platform_id` | `string` |  |
| `registration_number` | `any` | Company registration number. |
| `status` | `string` |  |

#### Example: Load

```go
employer, err := client.Employer(nil).Load(map[string]any{"id": "employer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(employer.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
employers, err := client.Employer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range employers.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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
| `cancellation_date` | `any` | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `[]any` | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `int` | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolment_type` | `string` | Enrolment type of the policy |
| `group_policy_number` | `any` | Group’s health insurance policy number, if available |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `renewal` | `any` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `string` | Current status of policy |

#### Example: Load

```go
employerHealthInsurancePolicy, err := client.EmployerHealthInsurancePolicy(nil).Load(map[string]any{"id": "employer_health_insurance_policy_id", "employer_id": "employer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(employerHealthInsurancePolicy.(sdk.Entity).Data()) // the loaded entity's record
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
| `cancellation_date` | `any` | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `[]any` | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `int` | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | The Id of the employer for which the policy is created |
| `end_date` | `string` | Policy ends on this date |
| `enrolment_type` | `string` | Enrolment type of the policy |
| `group_policy_number` | `any` | Group’s health insurance policy number, if available |
| `id` | `string` | Unique identifier for policy |
| `object` | `string` | The object type |
| `renewal` | `any` | Renewal information for the policy |
| `start_date` | `string` | Policy starts on this date |
| `status` | `string` | Current status of policy |

#### Example: List

```go
employerHealthInsurancePolicyResponsePagedLists, err := client.EmployerHealthInsurancePolicyResponsePagedList(nil).List(map[string]any{"employer_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range employerHealthInsurancePolicyResponsePagedLists.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
| `coverage_levels` | `[]any` | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | The Id of the employer for which the is created |
| `id` | `string` | Unique identifier for the quote |
| `object` | `string` | The object type |
| `quoted_at` | `string` | Date and time the quote was created at |
| `required_action` | `any` | Actions required by the employer to proceed with the quote. |
| `status` | `string` | Current status of the quote |

#### Example: Load

```go
employerHealthInsuranceQuote, err := client.EmployerHealthInsuranceQuote(nil).Load(map[string]any{"id": "employer_health_insurance_quote_id", "employer_id": "employer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(employerHealthInsuranceQuote.(sdk.Entity).Data()) // the loaded entity's record
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
| `coverage_levels` | `[]any` | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | The Id of the employer for which the is created |
| `id` | `string` | Unique identifier for the quote |
| `object` | `string` | The object type |
| `quoted_at` | `string` | Date and time the quote was created at |
| `required_action` | `any` | Actions required by the employer to proceed with the quote. |
| `status` | `string` | Current status of the quote |

#### Example: List

```go
employerHealthInsuranceQuoteResponsePagedLists, err := client.EmployerHealthInsuranceQuoteResponsePagedList(nil).List(map[string]any{"employer_id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range employerHealthInsuranceQuoteResponsePagedLists.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
| `action_required` | `any` | If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment. |
| `coverage_selections` | `any` | Optional plan coverage option selections for policy-scoped configurations. |
| `desired_policy_start_date` | `any` | The desired date for the employee's policy to start. |
| `disclosures` | `[]any` | Disclosures associated with this intent. |
| `employee_id` | `string` | Identifier for the employee associated with this enrolment intent. |
| `enrolment_date` | `any` | The date on which the employee agreed to enrol into the group's policies. |
| `force_confirmation` | `bool` | If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. |
| `group_id` | `string` | Identifier for the group associated with this enrolment intent. |
| `id` | `string` | Unique identifier for the enrolment intent. |
| `ineligibility_reason` | `any` | If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility. |
| `object` | `string` | Object type identifier. |
| `pending_confirmation` | `any` | If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state. |
| `policy_configuration` | `any` | Policy configuration associated with this enrolment intent. |
| `policy_enrolments` | `[]any` | Policy enrolment information |
| `status` | `string` | Current status of the enrolment intent. |

#### Example: Load

```go
enrolmentIntent, err := client.EnrolmentIntent(nil).Load(map[string]any{"id": "enrolment_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(enrolmentIntent.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
enrolmentIntents, err := client.EnrolmentIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range enrolmentIntents.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.EnrolmentIntent(nil).Create(map[string]any{
    "disclosures": []any{},
    "employee_id": "example_employee_id",
    "force_confirmation": true,
    "group_id": "example_group_id",
    "id": "example_id",
    "policy_enrolments": []any{},
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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

#### Example: List

```go
enrolmentIntentRequirementResponsePagedLists, err := client.EnrolmentIntentRequirementResponsePagedList(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range enrolmentIntentRequirementResponsePagedLists.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### Event

Create an instance: `event := client.Event(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |
| `Create(data, ctrl)` | Create a new entity with the given data. |

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
fmt.Println(event.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
events, err := client.Event(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range events.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.Event(nil).Create(map[string]any{
    "id": "example_id",
    "created": "example_created",
    "data": nil,
    "platform_id": "example_platform_id",
    "type": "example_type",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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
| `description` | `any` | Short description of the purpose or scope of the `group`. |
| `employer_id` | `string` | Identifier for the `employer` that owns this `group`. |
| `enrolment_type` | `string` | Indicates how employees are enrolled into the group. |
| `group_policy_ids` | `[]any` | Group policy unique identifiers associated with this group. |
| `group_policy_intent_ids` | `[]any` | Group policy intent unique identifiers associated with this group. |
| `group_quote_intent_ids` | `[]any` | Group quote intent unique identifiers associated with this group. |
| `group_type` | `string` | Indicates how policies are organized for this group. |
| `id` | `string` | Unique identifier for the `group`. |
| `name` | `string` | Human-readable name of the `group`. |
| `object` | `string` | The object type |
| `status` | `string` | Current lifecycle state of the `group`, indicating its current progress. |

#### Example: Load

```go
group, err := client.Group(nil).Load(map[string]any{"id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(group.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
groups, err := client.Group(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range groups.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.Group(nil).Create(map[string]any{
    "employer_id": "example_employer_id",
    "enrolment_type": "example_enrolment_type",
    "group_policy_ids": []any{},
    "group_policy_intent_ids": []any{},
    "group_quote_intent_ids": []any{},
    "group_type": "example_group_type",
    "id": "example_id",
    "name": "example_name",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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
| `create_enrolment_intents` | `any` | Controls whether enrolment intents are automatically created for the employee. |
| `desired_policy_start_date` | `any` | The desired date for the employee's policy to start. |
| `eligibility_status` | `string` | Eligibility status for the employee in this group. |
| `employee_id` | `string` | Employee Id |
| `enrolment_date` | `any` | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `string` | Enrolment status for the employee in this group. |
| `enrolments` | `[]any` | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Unique identifier for the group. |
| `id` | `string` | Unique identifier for the employee. |
| `object` | `string` | The object type |
| `policies` | `[]any` | List of policies associated with the employee in this group. |
| `policy_configuration` | `any` | Policy configuration for the employee in this group. |
| `scheduled_group_transitions` | `[]any` | List of scheduled group transitions for the employee. |

#### Example: Create

```go
result, err := client.GroupEmployee(nil).Create(map[string]any{
    "id": "example_id",
    "eligibility_status": "example_eligibility_status",
    "employee_id": "example_employee_id",
    "enrolment_status": "example_enrolment_status",
    "enrolments": []any{},
    "group_id": "example_group_id",
    "policies": []any{},
    "scheduled_group_transitions": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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
| `id` | `string` |  |

#### Example: List

```go
groupEmployeeResponsePagedLists, err := client.GroupEmployeeResponsePagedList(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range groupEmployeeResponsePagedLists.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
| `cancellation_date` | `any` | Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable. |
| `disclosures` | `[]any` | Disclosures associated with this group policy. |
| `employer_id` | `string` | Identifier for the employer associated with this group policy. |
| `end_date` | `any` | Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended. |
| `group_id` | `string` | Identifier for the group associated with this group policy. |
| `health_insurance` | `any` | Health insurance–specific fields (present when `type=health_insurance`). |
| `id` | `string` | Unique identifier for the group policy. |
| `object` | `string` | The object type |
| `plan` | `any` | Plan information for this policy |
| `provider` | `any` | Provider information for this policy. |
| `start_date` | `string` | Policy start (effective) date in ISO 8601 (YYYY-MM-DD). |
| `status` | `string` | Current lifecycle state of the `group_policy`, indicating its progress from creation to activation. |
| `type` | `string` | Policy type. |

#### Example: Load

```go
groupPolicy, err := client.GroupPolicy(nil).Load(map[string]any{"id": "group_policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupPolicy.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
groupPolicys, err := client.GroupPolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range groupPolicys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
| `action_required` | `any` | Details of the required action when the intent is in ActionRequired status. |
| `consent_approvals` | `any` | Consent approvals to record at the time of intent creation |
| `cost_sharing` | `any` | Cost sharing configuration for the policy intent |
| `disclosures` | `[]any` | Disclosures associated with this intent. |
| `due_date` | `any` | Due date for the policy intent |
| `group_id` | `string` | Unique identifier for the group |
| `id` | `string` | Unique identifier for the group policy intent |
| `object` | `string` | Object type identifier |
| `plan_id` | `string` | Unique identifier for the plan |
| `quote_intent_id` | `string` | Unique identifier for the group quote intent this policy intent was created from |
| `status` | `string` | Current status of the group policy intent |

#### Example: Load

```go
groupPolicyIntent, err := client.GroupPolicyIntent(nil).Load(map[string]any{"id": "group_policy_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupPolicyIntent.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
groupPolicyIntents, err := client.GroupPolicyIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range groupPolicyIntents.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.GroupPolicyIntent(nil).Create(map[string]any{
    "disclosures": []any{},
    "group_id": "example_group_id",
    "id": "example_id",
    "plan_id": "example_plan_id",
    "quote_intent_id": "example_quote_intent_id",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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

#### Example: List

```go
groupPolicyIntentRequirementResponsePagedLists, err := client.GroupPolicyIntentRequirementResponsePagedList(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range groupPolicyIntentRequirementResponsePagedLists.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
| `cost_sharing` | `any` | Cost sharing configuration for the quote |
| `currency` | `string` | Currency of the premium (e.g. |
| `employee_count` | `int` | Number of employees covered by the quote |
| `expires_at` | `string` | When the quote expires |
| `generated_at` | `string` | When the quote was generated |
| `object` | `string` | Object type identifier |
| `pdf_expires_at` | `any` | When the PDF URL expires |
| `pdf_url` | `any` | URL to download the quote PDF |
| `total_monthly_premium` | `float64` | Total monthly premium for the group |

#### Example: Load

```go
groupQuote, err := client.GroupQuote(nil).Load(map[string]any{"group_quote_intent_id": "group_quote_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupQuote.(sdk.Entity).Data()) // the loaded entity's record
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
| `action_required` | `any` | Details of the action required from the caller, if the intent is in action_required status. |
| `consent_links` | `[]any` | Consent links that need to be acknowledged |
| `cost_sharing` | `any` | Cost sharing configuration for the quote |
| `coverage_selections` | `any` | Plan coverage option selections for group-policy-scoped configurations. |
| `disclosures` | `[]any` | Disclosures associated with this intent. |
| `expected_start_date` | `any` | Expected start date for the insurance coverage |
| `group_id` | `string` | Unique identifier for the group |
| `id` | `string` | Unique identifier for the group quote intent |
| `object` | `string` | Object type identifier |
| `plan_id` | `string` | Unique identifier for the plan |
| `status` | `string` | Current status of the group quote intent |

#### Example: Load

```go
groupQuoteIntent, err := client.GroupQuoteIntent(nil).Load(map[string]any{"id": "group_quote_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(groupQuoteIntent.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
groupQuoteIntents, err := client.GroupQuoteIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range groupQuoteIntents.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.GroupQuoteIntent(nil).Create(map[string]any{
    "consent_links": []any{},
    "disclosures": []any{},
    "group_id": "example_group_id",
    "id": "example_id",
    "plan_id": "example_plan_id",
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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

#### Example: List

```go
groupQuoteIntentRequirementResponsePagedLists, err := client.GroupQuoteIntentRequirementResponsePagedList(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range groupQuoteIntentRequirementResponsePagedLists.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
| `available_from` | `string` | The date from which this plan is available (inclusive). |
| `available_to` | `any` | The date until which this plan is available (inclusive). |
| `country` | `string` | The country this plan is available in. |
| `coverage_options` | `any` | Coverage options available for this plan, organized by scope and input type. |
| `description` | `string` | Description of the plan. |
| `disclosures` | `[]any` | Disclosures associated with this plan. |
| `documents` | `[]any` | List of plan documents (e.g., IPIDs, T&Cs). |
| `eligible_count` | `any` | Number of employees in the queried group eligible for this plan as-of `start_date`. |
| `employee_eligibility_criteria` | `[]any` | Eligibility criteria that employees must meet. |
| `employer_eligibility_criteria` | `[]any` | Eligibility criteria that employers must meet. |
| `health_insurance` | `any` | Health insurance-specific details. |
| `id` | `string` | Unique identifier for the plan. |
| `ineligible_count` | `any` | Number of employees in the queried group ineligible for this plan as-of `start_date`. |
| `name` | `string` | The name of the plan. |
| `object` | `string` | Object type. |
| `provider` | `any` | The provider offering this plan. |
| `total_count` | `any` | Total employees in the queried group. |
| `type` | `string` | The benefit type of the plan. |

#### Example: Load

```go
plan, err := client.Plan(nil).Load(map[string]any{"id": "plan_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(plan.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
plans, err := client.Plan(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range plans.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
| `bundling_type` | `string` | Indicates how this policy is bundled within a group |
| `cancellation_date` | `any` | Date the policy was cancelled (if applicable) |
| `disclosures` | `[]any` | Disclosures associated with this policy. |
| `employee_id` | `string` | Identifier of the employee associated with this policy. |
| `end_date` | `any` | Policy end date (inclusive) in ISO 8601, or null if open-ended |
| `group_id` | `string` | Identifier of the group associated with this policy. |
| `group_policy_id` | `string` | Identifier of the group policy id associated with this policy. |
| `health_insurance` | `any` | Health insurance–specific fields (present when `type=health_insurance`) |
| `id` | `string` | Unique identifier for the policy. |
| `object` | `string` | Object type |
| `plan` | `any` | Plan information for this policy |
| `provider` | `any` | Provider information for this policy |
| `start_date` | `string` | Policy start (effective) date in ISO 8601 (YYYY-MM-DD) |
| `status` | `string` | Current lifecycle state of the policy |
| `type` | `string` | Policy type. |

#### Example: Load

```go
policy, err := client.Policy(nil).Load(map[string]any{"id": "policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(policy.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
policys, err := client.Policy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range policys.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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
| `amendment_reason` | `any` | The reason for the policy amendment. |
| `disclosures` | `[]any` | Disclosures associated with this intent. |
| `id` | `string` | Unique identifier for the policy amendment intent. |
| `object` | `string` | Object type identifier. |
| `pending_confirmation` | `any` | Information about the pending confirmation if the intent status is `pending_confirmation`. |
| `policy_id` | `string` | The policy ID for which the amendment is requested. |
| `processing_error` | `any` | Information about the processing error if the intent status is `processing_error`. |
| `requested_changes` | `[]any` | List of requested changes to the policy. |
| `required_action` | `any` | Information about the required action if the intent status is `action_required`. |
| `status` | `string` | Current status of the policy amendment intent. |

#### Example: Load

```go
policyAmendmentIntent, err := client.PolicyAmendmentIntent(nil).Load(map[string]any{"id": "policy_amendment_intent_id", "policy_id": "policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(policyAmendmentIntent.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
policyAmendmentIntents, err := client.PolicyAmendmentIntent(nil).List(map[string]any{"id": "example"}, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range policyAmendmentIntents.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.PolicyAmendmentIntent(nil).Create(map[string]any{
    "id": "example_id",
    "amendment_reason": "example_amendment_reason",
    "disclosures": []any{},
    "policy_id": "example_policy_id",
    "requested_changes": []any{},
    "status": "example_status",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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
| `associated_persons` | `[]any` | List of associated persons linked to this policy import. |
| `employee_id` | `string` | The employee ID for the policy import. |
| `group_id` | `string` | The group ID for the policy import. |
| `id` | `string` | Unique identifier for the policy import intent. |
| `member_number` | `string` | The member number assigned by the provider. |
| `object` | `string` | Object type identifier. |
| `policy_end_date` | `any` | The end date of the policy. |
| `policy_start_date` | `string` | The start date of the policy. |
| `provider_policy_number` | `string` | The provider's policy number. |
| `status` | `string` | Current status of the policy import intent. |

#### Example: Load

```go
policyImportIntent, err := client.PolicyImportIntent(nil).Load(map[string]any{"id": "policy_import_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(policyImportIntent.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
policyImportIntents, err := client.PolicyImportIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range policyImportIntents.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```

#### Example: Create

```go
result, err := client.PolicyImportIntent(nil).Create(map[string]any{
    "associated_persons": []any{},
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
fmt.Println(result.(sdk.Entity).Data()) // the created entity's record
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
| `description` | `string` | Description of the provider. |
| `employer_platform_url` | `any` | URL to the employer portal/platform for this provider, if available. |
| `id` | `string` | Unique identifier for the provider. |
| `kota_hub_url` | `any` | URL to the Kota Hub page for this platform, if configured. |
| `logo_url` | `string` | URL to the provider's logo image. |
| `name` | `string` | The name of the provider. |
| `object` | `string` | Object type. |
| `support_phone` | `string` | Customer support phone number. |
| `supported_countries` | `[]any` | List of countries supported by this provider. |
| `website_url` | `string` | The provider's main website URL. |

#### Example: Load

```go
provider, err := client.Provider(nil).Load(map[string]any{"id": "provider_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(provider.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
providers, err := client.Provider(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range providers.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
```


### WebhookEndpoint

Create an instance: `webhookEndpoint := client.WebhookEndpoint(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` | The date and time the endpoint was created |
| `endpoint_url` | `string` | The registered URL of the endpoint |
| `id` | `string` | The unique identifier of the endpoint |
| `object` | `string` | The object type |
| `subscribed_events` | `[]any` | The events the endpoint is subscribed to |

#### Example: Load

```go
webhookEndpoint, err := client.WebhookEndpoint(nil).Load(map[string]any{"id": "webhook_endpoint_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(webhookEndpoint.(sdk.Entity).Data()) // the loaded entity's record
```

#### Example: List

```go
webhookEndpoints, err := client.WebhookEndpoint(nil).List(nil, nil)
if err != nil {
    panic(err)
}
// A []any of entities, one per record.
for _, item := range webhookEndpoints.([]any) {
    fmt.Println(item.(sdk.Entity).Data())
}
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

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

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

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

An operation returns the entity, and its `Data()` returns the record. Use
`core.ToMapAny()` to safely cast that record, or data nested in it, to
`map[string]any`: it returns `nil` for anything else, an entity included.

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

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
groupquoteintent := client.GroupQuoteIntent(nil)
groupquoteintent.List(nil, nil)

// groupquoteintent.Data() now returns the groupquoteintent data from the last list
// groupquoteintent.Match() returns the last match criteria
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
