# Kota Golang SDK Reference

Complete API reference for the Kota Golang SDK.


## KotaSDK

### Constructor

```go
func NewKotaSDK(options map[string]any) *KotaSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *KotaSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *KotaSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `AssociatedPerson(data map[string]any) KotaEntity`

Create a new `AssociatedPerson` entity instance. Pass `nil` for no initial data.

#### `AssociatedPersonEligibilityResponsePagedList(data map[string]any) KotaEntity`

Create a new `AssociatedPersonEligibilityResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `ContributionReport(data map[string]any) KotaEntity`

Create a new `ContributionReport` entity instance. Pass `nil` for no initial data.

#### `ContributionReportEmployeeBreakdown(data map[string]any) KotaEntity`

Create a new `ContributionReportEmployeeBreakdown` entity instance. Pass `nil` for no initial data.

#### `ContributionReportEmployeeBreakdownResponsePagedList(data map[string]any) KotaEntity`

Create a new `ContributionReportEmployeeBreakdownResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `CreateHostedSessionToken(data map[string]any) KotaEntity`

Create a new `CreateHostedSessionToken` entity instance. Pass `nil` for no initial data.

#### `CreateSessionToken(data map[string]any) KotaEntity`

Create a new `CreateSessionToken` entity instance. Pass `nil` for no initial data.

#### `Dependent(data map[string]any) KotaEntity`

Create a new `Dependent` entity instance. Pass `nil` for no initial data.

#### `DependentsManagementIntent(data map[string]any) KotaEntity`

Create a new `DependentsManagementIntent` entity instance. Pass `nil` for no initial data.

#### `EligibilityCheck(data map[string]any) KotaEntity`

Create a new `EligibilityCheck` entity instance. Pass `nil` for no initial data.

#### `Employee(data map[string]any) KotaEntity`

Create a new `Employee` entity instance. Pass `nil` for no initial data.

#### `EmployeeHealthInsuranceOffer(data map[string]any) KotaEntity`

Create a new `EmployeeHealthInsuranceOffer` entity instance. Pass `nil` for no initial data.

#### `EmployeeHealthInsuranceOfferResponsePagedList(data map[string]any) KotaEntity`

Create a new `EmployeeHealthInsuranceOfferResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `EmployeeHealthInsurancePolicy(data map[string]any) KotaEntity`

Create a new `EmployeeHealthInsurancePolicy` entity instance. Pass `nil` for no initial data.

#### `EmployeeHealthInsurancePolicyResponsePagedList(data map[string]any) KotaEntity`

Create a new `EmployeeHealthInsurancePolicyResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `Employer(data map[string]any) KotaEntity`

Create a new `Employer` entity instance. Pass `nil` for no initial data.

#### `EmployerHealthInsurancePolicy(data map[string]any) KotaEntity`

Create a new `EmployerHealthInsurancePolicy` entity instance. Pass `nil` for no initial data.

#### `EmployerHealthInsurancePolicyResponsePagedList(data map[string]any) KotaEntity`

Create a new `EmployerHealthInsurancePolicyResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `EmployerHealthInsuranceQuote(data map[string]any) KotaEntity`

Create a new `EmployerHealthInsuranceQuote` entity instance. Pass `nil` for no initial data.

#### `EmployerHealthInsuranceQuoteResponsePagedList(data map[string]any) KotaEntity`

Create a new `EmployerHealthInsuranceQuoteResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `EnrolmentIntent(data map[string]any) KotaEntity`

Create a new `EnrolmentIntent` entity instance. Pass `nil` for no initial data.

#### `EnrolmentIntentRequirementResponsePagedList(data map[string]any) KotaEntity`

Create a new `EnrolmentIntentRequirementResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `Event(data map[string]any) KotaEntity`

Create a new `Event` entity instance. Pass `nil` for no initial data.

#### `Group(data map[string]any) KotaEntity`

Create a new `Group` entity instance. Pass `nil` for no initial data.

#### `GroupEmployee(data map[string]any) KotaEntity`

Create a new `GroupEmployee` entity instance. Pass `nil` for no initial data.

#### `GroupEmployeeResponsePagedList(data map[string]any) KotaEntity`

Create a new `GroupEmployeeResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `GroupPolicy(data map[string]any) KotaEntity`

Create a new `GroupPolicy` entity instance. Pass `nil` for no initial data.

#### `GroupPolicyIntent(data map[string]any) KotaEntity`

Create a new `GroupPolicyIntent` entity instance. Pass `nil` for no initial data.

#### `GroupPolicyIntentRequirementResponsePagedList(data map[string]any) KotaEntity`

Create a new `GroupPolicyIntentRequirementResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `GroupQuote(data map[string]any) KotaEntity`

Create a new `GroupQuote` entity instance. Pass `nil` for no initial data.

#### `GroupQuoteIntent(data map[string]any) KotaEntity`

Create a new `GroupQuoteIntent` entity instance. Pass `nil` for no initial data.

#### `GroupQuoteIntentRequirementResponsePagedList(data map[string]any) KotaEntity`

Create a new `GroupQuoteIntentRequirementResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `Plan(data map[string]any) KotaEntity`

Create a new `Plan` entity instance. Pass `nil` for no initial data.

#### `Policy(data map[string]any) KotaEntity`

Create a new `Policy` entity instance. Pass `nil` for no initial data.

#### `PolicyAmendmentIntent(data map[string]any) KotaEntity`

Create a new `PolicyAmendmentIntent` entity instance. Pass `nil` for no initial data.

#### `PolicyImportIntent(data map[string]any) KotaEntity`

Create a new `PolicyImportIntent` entity instance. Pass `nil` for no initial data.

#### `Provider(data map[string]any) KotaEntity`

Create a new `Provider` entity instance. Pass `nil` for no initial data.

#### `Replay(data map[string]any) KotaEntity`

Create a new `Replay` entity instance. Pass `nil` for no initial data.

#### `WebhookEndpoint(data map[string]any) KotaEntity`

Create a new `WebhookEndpoint` entity instance. Pass `nil` for no initial data.

#### `WebhookEndpointResponsePagedList(data map[string]any) KotaEntity`

Create a new `WebhookEndpointResponsePagedList` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AssociatedPersonEntity

```go
associatedPerson := client.AssociatedPerson(nil)
fmt.Println(associatedPerson.GetName()) // "associated_person"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `date_of_birth` | `string` | Yes |  |
| `email` | `any` | No |  |
| `employee_id` | `string` | Yes |  |
| `first_name` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `last_name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `phone_number` | `any` | No |  |
| `platform_id` | `string` | No |  |
| `relationship_type` | `any` | Yes |  |
| `sex_at_birth` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AssociatedPerson(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.AssociatedPerson(nil).Load(map[string]any{"id": "associated_person_id", "employee_id": "employee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.AssociatedPerson(nil).Update(map[string]any{
    "id": "associated_person_id",
    "employee_id": "employee_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.AssociatedPerson(nil).Remove(map[string]any{"id": "associated_person_id", "employee_id": "employee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssociatedPersonEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## AssociatedPersonEligibilityResponsePagedListEntity

```go
associatedPersonEligibilityResponsePagedList := client.AssociatedPersonEligibilityResponsePagedList(nil)
fmt.Println(associatedPersonEligibilityResponsePagedList.GetName()) // "associated_person_eligibility_response_paged_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_person_id` | `string` | Yes |  |
| `date_of_birth` | `string` | Yes |  |
| `eligibility_status` | `any` | Yes |  |
| `first_name` | `string` | Yes |  |
| `ineligibility_reason` | `any` | No |  |
| `last_name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `relationship` | `any` | Yes |  |
| `sex_at_birth` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AssociatedPersonEligibilityResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AssociatedPersonEligibilityResponsePagedListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContributionReportEntity

```go
contributionReport := client.ContributionReport(nil)
fmt.Println(contributionReport.GetName()) // "contribution_report"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `any` | No |  |
| `finalized_at` | `any` | No |  |
| `id` | `string` | Yes |  |
| `last_updated_at` | `string` | Yes |  |
| `object` | `string` | No |  |
| `period` | `any` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ContributionReport(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ContributionReport(nil).Load(map[string]any{"id": "contribution_report_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContributionReportEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContributionReportEmployeeBreakdownEntity

```go
contributionReportEmployeeBreakdown := client.ContributionReportEmployeeBreakdown(nil)
fmt.Println(contributionReportEmployeeBreakdown.GetName()) // "contribution_report_employee_breakdown"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contribution_report_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `currency` | `any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `any` | No |  |
| `finalized_at` | `any` | No |  |
| `health_insurance` | `any` | Yes |  |
| `last_updated_at` | `string` | Yes |  |
| `object` | `string` | No |  |
| `period` | `any` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ContributionReportEmployeeBreakdown(nil).Load(map[string]any{"id": "contribution_report_employee_breakdown_id", "contribution_report_id": "contribution_report_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContributionReportEmployeeBreakdownEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ContributionReportEmployeeBreakdownResponsePagedListEntity

```go
contributionReportEmployeeBreakdownResponsePagedList := client.ContributionReportEmployeeBreakdownResponsePagedList(nil)
fmt.Println(contributionReportEmployeeBreakdownResponsePagedList.GetName()) // "contribution_report_employee_breakdown_response_paged_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contribution_report_id` | `string` | Yes |  |
| `created_at` | `string` | Yes |  |
| `currency` | `any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `any` | No |  |
| `finalized_at` | `any` | No |  |
| `health_insurance` | `any` | Yes |  |
| `last_updated_at` | `string` | Yes |  |
| `object` | `string` | No |  |
| `period` | `any` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ContributionReportEmployeeBreakdownResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ContributionReportEmployeeBreakdownResponsePagedListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreateHostedSessionTokenEntity

```go
createHostedSessionToken := client.CreateHostedSessionToken(nil)
fmt.Println(createHostedSessionToken.GetName()) // "create_hosted_session_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry` | `string` | Yes |  |
| `link` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateHostedSessionTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CreateSessionTokenEntity

```go
createSessionToken := client.CreateSessionToken(nil)
fmt.Println(createSessionToken.GetName()) // "create_session_token"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `expiry` | `string` | Yes |  |
| `token` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CreateSessionTokenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DependentEntity

```go
dependent := client.Dependent(nil)
fmt.Println(dependent.GetName()) // "dependent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `any` | No |  |
| `coverage_options` | `any` | No |  |
| `dependents` | `[]any` | Yes |  |
| `disclosures` | `[]any` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `parent_intent_id` | `string` | Yes |  |
| `parent_intent_type` | `any` | Yes |  |
| `plan` | `any` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Dependent(nil).Create(map[string]any{
    "dependents_management_intent_id": "example_dependents_management_intent_id",
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
fmt.Println(result)
```

#### `Remove(reqmatch, ctrl map[string]any) (any, error)`

Remove the entity matching the given criteria.

```go
result, err := client.Dependent(nil).Remove(map[string]any{"dependents_management_intent_id": "dependents_management_intent_id", "id": "id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DependentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## DependentsManagementIntentEntity

```go
dependentsManagementIntent := client.DependentsManagementIntent(nil)
fmt.Println(dependentsManagementIntent.GetName()) // "dependents_management_intent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `any` | No |  |
| `coverage_options` | `any` | No |  |
| `dependents` | `[]any` | Yes |  |
| `disclosures` | `[]any` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `parent_intent_id` | `string` | Yes |  |
| `parent_intent_type` | `any` | Yes |  |
| `plan` | `any` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.DependentsManagementIntent(nil).Load(map[string]any{"id": "dependents_management_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.DependentsManagementIntent(nil).Create(map[string]any{
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
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `DependentsManagementIntentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EligibilityCheckEntity

```go
eligibilityCheck := client.EligibilityCheck(nil)
fmt.Println(eligibilityCheck.GetName()) // "eligibility_check"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `eligibility_status` | `any` | Yes |  |
| `object` | `string` | No |  |
| `plan` | `any` | Yes |  |
| `provider` | `any` | Yes |  |
| `reasons` | `[]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.EligibilityCheck(nil).Create(map[string]any{
    "group_id": "example_group_id",
    "eligibility_status": "example_eligibility_status",
    "plan": "example_plan",
    "provider": "example_provider",
    "reasons": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EligibilityCheckEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmployeeEntity

```go
employee := client.Employee(nil)
fmt.Println(employee.GetName()) // "employee"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bank_account` | `any` | No |  |
| `date_of_birth` | `string` | Yes |  |
| `earliest_benefits_start_date` | `any` | No |  |
| `email` | `string` | Yes |  |
| `employer_id` | `string` | No |  |
| `external_customer_id` | `any` | No |  |
| `first_name` | `string` | Yes |  |
| `home_address` | `any` | No |  |
| `id` | `string` | No |  |
| `last_name` | `string` | Yes |  |
| `metadata` | `any` | No |  |
| `national_tax_id` | `string` | Yes |  |
| `nationality` | `any` | No |  |
| `object` | `string` | No |  |
| `offboard_on` | `any` | No |  |
| `phone_number` | `string` | Yes |  |
| `platform_id` | `string` | No |  |
| `sex_at_birth` | `any` | Yes |  |
| `start_on` | `string` | No |  |
| `status` | `any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Employee(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Employee(nil).Load(map[string]any{"id": "employee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Employee(nil).Update(map[string]any{
    "id": "employee_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmployeeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmployeeHealthInsuranceOfferEntity

```go
employeeHealthInsuranceOffer := client.EmployeeHealthInsuranceOffer(nil)
fmt.Println(employeeHealthInsuranceOffer.GetName()) // "employee_health_insurance_offer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_level` | `any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `any` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `required_action` | `any` | No |  |
| `status` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EmployeeHealthInsuranceOffer(nil).Load(map[string]any{"id": "employee_health_insurance_offer_id", "employee_id": "employee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmployeeHealthInsuranceOfferEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmployeeHealthInsuranceOfferResponsePagedListEntity

```go
employeeHealthInsuranceOfferResponsePagedList := client.EmployeeHealthInsuranceOfferResponsePagedList(nil)
fmt.Println(employeeHealthInsuranceOfferResponsePagedList.GetName()) // "employee_health_insurance_offer_response_paged_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_level` | `any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `external_customer_id` | `any` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `required_action` | `any` | No |  |
| `status` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EmployeeHealthInsuranceOfferResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmployeeHealthInsuranceOfferResponsePagedListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmployeeHealthInsurancePolicyEntity

```go
employeeHealthInsurancePolicy := client.EmployeeHealthInsurancePolicy(nil)
fmt.Println(employeeHealthInsurancePolicy.GetName()) // "employee_health_insurance_policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `any` | No |  |
| `coverage_level` | `any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolled_dependants_count` | `int` | Yes |  |
| `enrolment_type` | `any` | Yes |  |
| `estimated_gross_premium` | `any` | Yes |  |
| `external_customer_id` | `any` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `opt_out_deadline_date` | `string` | Yes |  |
| `policy_number` | `any` | No |  |
| `renewal` | `any` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EmployeeHealthInsurancePolicy(nil).Load(map[string]any{"id": "employee_health_insurance_policy_id", "employee_id": "employee_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmployeeHealthInsurancePolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmployeeHealthInsurancePolicyResponsePagedListEntity

```go
employeeHealthInsurancePolicyResponsePagedList := client.EmployeeHealthInsurancePolicyResponsePagedList(nil)
fmt.Println(employeeHealthInsurancePolicyResponsePagedList.GetName()) // "employee_health_insurance_policy_response_paged_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `any` | No |  |
| `coverage_level` | `any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolled_dependants_count` | `int` | Yes |  |
| `enrolment_type` | `any` | Yes |  |
| `estimated_gross_premium` | `any` | Yes |  |
| `external_customer_id` | `any` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `opt_out_deadline_date` | `string` | Yes |  |
| `policy_number` | `any` | No |  |
| `renewal` | `any` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EmployeeHealthInsurancePolicyResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmployeeHealthInsurancePolicyResponsePagedListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmployerEntity

```go
employer := client.Employer(nil)
fmt.Println(employer.GetName()) // "employer"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `contact` | `any` | Yes |  |
| `earliest_benefits_start_date` | `any` | No |  |
| `id` | `string` | Yes |  |
| `legal_address` | `any` | Yes |  |
| `legal_name` | `string` | Yes |  |
| `metadata` | `any` | No |  |
| `object` | `string` | No |  |
| `offboard_on` | `any` | No |  |
| `platform_id` | `string` | No |  |
| `registration_number` | `any` | No |  |
| `status` | `any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Employer(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Employer(nil).Load(map[string]any{"id": "employer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Employer(nil).Update(map[string]any{
    "id": "employer_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmployerEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmployerHealthInsurancePolicyEntity

```go
employerHealthInsurancePolicy := client.EmployerHealthInsurancePolicy(nil)
fmt.Println(employerHealthInsurancePolicy.GetName()) // "employer_health_insurance_policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `any` | No |  |
| `coverage_levels` | `[]any` | Yes |  |
| `employer_cancellation_period_length` | `int` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolment_type` | `any` | Yes |  |
| `group_policy_number` | `any` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `renewal` | `any` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EmployerHealthInsurancePolicy(nil).Load(map[string]any{"id": "employer_health_insurance_policy_id", "employer_id": "employer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmployerHealthInsurancePolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmployerHealthInsurancePolicyResponsePagedListEntity

```go
employerHealthInsurancePolicyResponsePagedList := client.EmployerHealthInsurancePolicyResponsePagedList(nil)
fmt.Println(employerHealthInsurancePolicyResponsePagedList.GetName()) // "employer_health_insurance_policy_response_paged_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `any` | No |  |
| `coverage_levels` | `[]any` | Yes |  |
| `employer_cancellation_period_length` | `int` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `end_date` | `string` | Yes |  |
| `enrolment_type` | `any` | Yes |  |
| `group_policy_number` | `any` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `renewal` | `any` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EmployerHealthInsurancePolicyResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmployerHealthInsurancePolicyResponsePagedListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmployerHealthInsuranceQuoteEntity

```go
employerHealthInsuranceQuote := client.EmployerHealthInsuranceQuote(nil)
fmt.Println(employerHealthInsuranceQuote.GetName()) // "employer_health_insurance_quote"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_levels` | `[]any` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `quoted_at` | `string` | Yes |  |
| `required_action` | `any` | No |  |
| `status` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EmployerHealthInsuranceQuote(nil).Load(map[string]any{"id": "employer_health_insurance_quote_id", "employer_id": "employer_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmployerHealthInsuranceQuoteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EmployerHealthInsuranceQuoteResponsePagedListEntity

```go
employerHealthInsuranceQuoteResponsePagedList := client.EmployerHealthInsuranceQuoteResponsePagedList(nil)
fmt.Println(employerHealthInsuranceQuoteResponsePagedList.GetName()) // "employer_health_insurance_quote_response_paged_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage_levels` | `[]any` | Yes |  |
| `employer_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `quoted_at` | `string` | Yes |  |
| `required_action` | `any` | No |  |
| `status` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EmployerHealthInsuranceQuoteResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EmployerHealthInsuranceQuoteResponsePagedListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnrolmentIntentEntity

```go
enrolmentIntent := client.EnrolmentIntent(nil)
fmt.Println(enrolmentIntent.GetName()) // "enrolment_intent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `any` | No |  |
| `disclosures` | `[]any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `force_confirmation` | `bool` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `ineligibility_reason` | `any` | No |  |
| `object` | `string` | No |  |
| `pending_confirmation` | `any` | No |  |
| `policy_configuration` | `any` | No |  |
| `policy_enrolments` | `[]any` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EnrolmentIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.EnrolmentIntent(nil).Load(map[string]any{"id": "enrolment_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.EnrolmentIntent(nil).Update(map[string]any{
    "id": "enrolment_intent_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnrolmentIntentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EnrolmentIntentRequirementResponsePagedListEntity

```go
enrolmentIntentRequirementResponsePagedList := client.EnrolmentIntentRequirementResponsePagedList(nil)
fmt.Println(enrolmentIntentRequirementResponsePagedList.GetName()) // "enrolment_intent_requirement_response_paged_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `is_fulfilled` | `bool` | Yes |  |
| `object` | `string` | No |  |
| `object_id` | `string` | Yes |  |
| `object_type` | `any` | Yes |  |
| `requirement_type` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.EnrolmentIntentRequirementResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EnrolmentIntentRequirementResponsePagedListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## EventEntity

```go
event := client.Event(nil)
fmt.Println(event.GetName()) // "event"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `api_version` | `string` | No |  |
| `created` | `string` | Yes |  |
| `data` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `options` | `any` | No |  |
| `parent` | `any` | No |  |
| `platform_id` | `string` | Yes |  |
| `root` | `any` | No |  |
| `type` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Event(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Event(nil).Load(map[string]any{"id": "event_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `EventEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupEntity

```go
group := client.Group(nil)
fmt.Println(group.GetName()) // "group"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `any` | No |  |
| `employer_id` | `string` | Yes |  |
| `enrolment_type` | `any` | Yes |  |
| `group_policy_ids` | `[]any` | Yes |  |
| `group_policy_intent_ids` | `[]any` | Yes |  |
| `group_quote_intent_ids` | `[]any` | Yes |  |
| `group_type` | `any` | Yes |  |
| `id` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `status` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Group(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Group(nil).Load(map[string]any{"id": "group_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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
fmt.Println(result)
```

#### `Update(reqdata, ctrl map[string]any) (any, error)`

Update an existing entity. The data must include the entity `id`.

```go
result, err := client.Group(nil).Update(map[string]any{
    "id": "group_id",
    // Fields to update
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupEmployeeEntity

```go
groupEmployee := client.GroupEmployee(nil)
fmt.Println(groupEmployee.GetName()) // "group_employee"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desired_policy_start_date` | `any` | No |  |
| `eligibility_status` | `any` | Yes |  |
| `enrolment_date` | `any` | No |  |
| `enrolment_status` | `any` | Yes |  |
| `enrolments` | `[]any` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `policies` | `[]any` | Yes |  |
| `scheduled_group_transitions` | `[]any` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GroupEmployee(nil).Create(map[string]any{
    "id": "example_id",
    "eligibility_status": "example_eligibility_status",
    "enrolment_status": "example_enrolment_status",
    "enrolments": []any{},
    "group_id": "example_group_id",
    "policies": []any{},
    "scheduled_group_transitions": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupEmployeeEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupEmployeeResponsePagedListEntity

```go
groupEmployeeResponsePagedList := client.GroupEmployeeResponsePagedList(nil)
fmt.Println(groupEmployeeResponsePagedList.GetName()) // "group_employee_response_paged_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `desired_policy_start_date` | `any` | No |  |
| `eligibility_status` | `any` | Yes |  |
| `enrolment_date` | `any` | No |  |
| `enrolment_status` | `any` | Yes |  |
| `enrolments` | `[]any` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `policies` | `[]any` | Yes |  |
| `scheduled_group_transitions` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GroupEmployeeResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupEmployeeResponsePagedListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupPolicyEntity

```go
groupPolicy := client.GroupPolicy(nil)
fmt.Println(groupPolicy.GetName()) // "group_policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cancellation_date` | `any` | No |  |
| `disclosures` | `[]any` | Yes |  |
| `employer_id` | `string` | No |  |
| `end_date` | `any` | No |  |
| `group_id` | `string` | No |  |
| `health_insurance` | `any` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan` | `any` | Yes |  |
| `provider` | `any` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `any` | Yes |  |
| `type` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GroupPolicy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GroupPolicy(nil).Load(map[string]any{"id": "group_policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupPolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupPolicyIntentEntity

```go
groupPolicyIntent := client.GroupPolicyIntent(nil)
fmt.Println(groupPolicyIntent.GetName()) // "group_policy_intent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `any` | No |  |
| `cost_sharing` | `any` | No |  |
| `disclosures` | `[]any` | Yes |  |
| `due_date` | `any` | No |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan_id` | `string` | Yes |  |
| `quote_intent_id` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GroupPolicyIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GroupPolicyIntent(nil).Load(map[string]any{"id": "group_policy_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupPolicyIntentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupPolicyIntentRequirementResponsePagedListEntity

```go
groupPolicyIntentRequirementResponsePagedList := client.GroupPolicyIntentRequirementResponsePagedList(nil)
fmt.Println(groupPolicyIntentRequirementResponsePagedList.GetName()) // "group_policy_intent_requirement_response_paged_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `is_fulfilled` | `bool` | Yes |  |
| `object` | `string` | No |  |
| `object_id` | `string` | Yes |  |
| `object_type` | `any` | Yes |  |
| `requirement_type` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GroupPolicyIntentRequirementResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupPolicyIntentRequirementResponsePagedListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupQuoteEntity

```go
groupQuote := client.GroupQuote(nil)
fmt.Println(groupQuote.GetName()) // "group_quote"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `family_type` | `any` | No |  |
| `member_count` | `any` | No |  |
| `member_selection` | `any` | No |  |
| `percentage` | `any` | No |  |
| `type` | `any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GroupQuote(nil).Load(map[string]any{"group_quote_intent_id": "group_quote_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupQuoteEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupQuoteIntentEntity

```go
groupQuoteIntent := client.GroupQuoteIntent(nil)
fmt.Println(groupQuoteIntent.GetName()) // "group_quote_intent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action_required` | `any` | No |  |
| `consent_links` | `[]any` | Yes |  |
| `cost_sharing` | `any` | No |  |
| `disclosures` | `[]any` | Yes |  |
| `expected_start_date` | `any` | No |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan_id` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GroupQuoteIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GroupQuoteIntent(nil).Load(map[string]any{"id": "group_quote_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupQuoteIntentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GroupQuoteIntentRequirementResponsePagedListEntity

```go
groupQuoteIntentRequirementResponsePagedList := client.GroupQuoteIntentRequirementResponsePagedList(nil)
fmt.Println(groupQuoteIntentRequirementResponsePagedList.GetName()) // "group_quote_intent_requirement_response_paged_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `id` | `string` | Yes |  |
| `is_fulfilled` | `bool` | Yes |  |
| `object` | `string` | No |  |
| `object_id` | `string` | Yes |  |
| `object_type` | `any` | Yes |  |
| `requirement_type` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GroupQuoteIntentRequirementResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GroupQuoteIntentRequirementResponsePagedListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PlanEntity

```go
plan := client.Plan(nil)
fmt.Println(plan.GetName()) // "plan"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `available_from` | `string` | Yes |  |
| `available_to` | `any` | No |  |
| `country` | `any` | Yes |  |
| `coverage_options` | `any` | No |  |
| `description` | `string` | Yes |  |
| `disclosures` | `[]any` | Yes |  |
| `documents` | `[]any` | Yes |  |
| `eligible_count` | `any` | No |  |
| `employee_eligibility_criteria` | `[]any` | Yes |  |
| `employer_eligibility_criteria` | `[]any` | Yes |  |
| `health_insurance` | `any` | No |  |
| `id` | `string` | Yes |  |
| `ineligible_count` | `any` | No |  |
| `name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `provider` | `any` | Yes |  |
| `total_count` | `any` | No |  |
| `type` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Plan(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Plan(nil).Load(map[string]any{"id": "plan_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PlanEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PolicyEntity

```go
policy := client.Policy(nil)
fmt.Println(policy.GetName()) // "policy"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `bundling_type` | `any` | Yes |  |
| `cancellation_date` | `any` | No |  |
| `disclosures` | `[]any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `end_date` | `any` | No |  |
| `group_id` | `string` | Yes |  |
| `group_policy_id` | `string` | Yes |  |
| `health_insurance` | `any` | No |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `plan` | `any` | Yes |  |
| `provider` | `any` | Yes |  |
| `start_date` | `string` | Yes |  |
| `status` | `any` | Yes |  |
| `type` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Policy(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Policy(nil).Load(map[string]any{"id": "policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PolicyEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PolicyAmendmentIntentEntity

```go
policyAmendmentIntent := client.PolicyAmendmentIntent(nil)
fmt.Println(policyAmendmentIntent.GetName()) // "policy_amendment_intent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `amendment_reason` | `any` | Yes |  |
| `disclosures` | `[]any` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `pending_confirmation` | `any` | No |  |
| `policy_id` | `string` | Yes |  |
| `processing_error` | `any` | No |  |
| `requested_changes` | `[]any` | Yes |  |
| `required_action` | `any` | No |  |
| `status` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PolicyAmendmentIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PolicyAmendmentIntent(nil).Load(map[string]any{"id": "policy_amendment_intent_id", "policy_id": "policy_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PolicyAmendmentIntentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## PolicyImportIntentEntity

```go
policyImportIntent := client.PolicyImportIntent(nil)
fmt.Println(policyImportIntent.GetName()) // "policy_import_intent"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `associated_persons` | `[]any` | Yes |  |
| `employee_id` | `string` | Yes |  |
| `group_id` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `member_number` | `string` | Yes |  |
| `object` | `string` | No |  |
| `policy_end_date` | `any` | No |  |
| `policy_start_date` | `string` | Yes |  |
| `provider_policy_number` | `string` | Yes |  |
| `status` | `any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.PolicyImportIntent(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.PolicyImportIntent(nil).Load(map[string]any{"id": "policy_import_intent_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

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
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `PolicyImportIntentEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ProviderEntity

```go
provider := client.Provider(nil)
fmt.Println(provider.GetName()) // "provider"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes |  |
| `employer_platform_url` | `any` | No |  |
| `id` | `string` | Yes |  |
| `kota_hub_url` | `any` | No |  |
| `logo_url` | `string` | Yes |  |
| `name` | `string` | Yes |  |
| `object` | `string` | No |  |
| `support_phone` | `string` | Yes |  |
| `supported_countries` | `[]any` | Yes |  |
| `website_url` | `string` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Provider(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Provider(nil).Load(map[string]any{"id": "provider_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ProviderEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ReplayEntity

```go
replay := client.Replay(nil)
fmt.Println(replay.GetName()) // "replay"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `deliveries` | `[]any` | Yes |  |
| `event_id` | `string` | Yes |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.Replay(nil).Create(map[string]any{
    "event_id": "example_event_id",
    "deliveries": []any{},
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ReplayEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEndpointEntity

```go
webhookEndpoint := client.WebhookEndpoint(nil)
fmt.Println(webhookEndpoint.GetName()) // "webhook_endpoint"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `subscribed_events` | `[]any` | Yes |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.WebhookEndpoint(nil).Load(map[string]any{"id": "webhook_endpoint_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEndpointEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebhookEndpointResponsePagedListEntity

```go
webhookEndpointResponsePagedList := client.WebhookEndpointResponsePagedList(nil)
fmt.Println(webhookEndpointResponsePagedList.GetName()) // "webhook_endpoint_response_paged_list"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | Yes |  |
| `endpoint_url` | `string` | Yes |  |
| `id` | `string` | Yes |  |
| `object` | `string` | No |  |
| `subscribed_events` | `[]any` | Yes |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WebhookEndpointResponsePagedList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebhookEndpointResponsePagedListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewKotaSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

