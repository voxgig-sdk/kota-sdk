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
| `date_of_birth` | `string` | Yes | Date of birth of the associated person |
| `email` | `any` | No | Email address of the associated person |
| `employee_id` | `string` | Yes | Unique identifier for the employee this person is associated with |
| `first_name` | `string` | Yes | First name of the associated person |
| `id` | `string` | Yes | Unique identifier for the associated person |
| `last_name` | `string` | Yes | Last name of the associated person |
| `object` | `string` | No | The object type |
| `phone_number` | `any` | No | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | No | Unique identifier for the platform |
| `relationship_type` | `any` | Yes | The relationship type between the employee and the associated person |
| `sex_at_birth` | `any` | Yes | The sex assigned to the associated person at birth |

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
| `associated_person_id` | `string` | Yes | The associated person ID. |
| `date_of_birth` | `string` | Yes | Date of birth of the associated person. |
| `eligibility_status` | `any` | Yes | Eligibility status for the policy/plan. |
| `first_name` | `string` | Yes | First name of the associated person. |
| `ineligibility_reason` | `any` | No | Reason for ineligibility if status is ineligible. |
| `last_name` | `string` | Yes | Last name of the associated person. |
| `object` | `string` | No | The object type |
| `relationship` | `any` | Yes | Relationship type to the employee. |
| `sex_at_birth` | `any` | Yes | Sex at birth of the associated person. |

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
| `created_at` | `string` | Yes | Date and time the report was created |
| `employer_id` | `string` | Yes | Unique identifier of the employer for which the report is created |
| `external_customer_id` | `any` | No | Unique identifier of the customer for which the report is created. |
| `finalized_at` | `any` | No | Date and time the report was finalized, if applicable |
| `id` | `string` | Yes | Unique identifier for the contribution report |
| `last_updated_at` | `string` | Yes | Date and time of the last update to the report |
| `object` | `string` | No | The object type |
| `period` | `any` | Yes | Period covered by the contribution report |
| `status` | `any` | Yes | Current status of the contribution report |

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
| `contribution_report_id` | `string` | Yes | Unique identifier of the related contribution report |
| `created_at` | `string` | Yes | Date and time the breakdown was created |
| `currency` | `any` | Yes | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Yes | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Yes | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `any` | No | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `any` | No | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `any` | Yes | Health insurance contribution details |
| `last_updated_at` | `string` | Yes | Date and time of the last update to the breakdown |
| `object` | `string` | No | The object type |
| `period` | `any` | Yes | Period covered by the employee breakdown |
| `status` | `any` | Yes | Current status of the breakdown |

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
| `contribution_report_id` | `string` | Yes | Unique identifier of the related contribution report |
| `created_at` | `string` | Yes | Date and time the breakdown was created |
| `currency` | `any` | Yes | The currency in which all the amounts in this breakdown are presented (e.g. |
| `employee_id` | `string` | Yes | Unique identifier of the employee for which the breakdown is created |
| `employer_id` | `string` | Yes | Unique identifier of the employer for which the breakdown is created |
| `external_customer_id` | `any` | No | Unique identifier of the customer for which the breakdown is created. |
| `finalized_at` | `any` | No | Date and time the breakdown was finalized, if applicable |
| `health_insurance` | `any` | Yes | Health insurance contribution details |
| `last_updated_at` | `string` | Yes | Date and time of the last update to the breakdown |
| `object` | `string` | No | The object type |
| `period` | `any` | Yes | Period covered by the employee breakdown |
| `status` | `any` | Yes | Current status of the breakdown |

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
| `action_required` | `any` | No | Details of the action required from the caller. |
| `coverage_options` | `any` | No | Available member-scoped coverage options for the plan. |
| `dependents` | `[]any` | Yes | List of dependents being managed. |
| `disclosures` | `[]any` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the dependents management intent. |
| `object` | `string` | No | Object type identifier. |
| `parent_intent_id` | `string` | Yes | The parent intent ID (e.g. |
| `parent_intent_type` | `any` | Yes | The type of parent intent. |
| `plan` | `any` | Yes | Plan information including pricing details. |
| `status` | `any` | Yes | Current status of the dependents management intent. |

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
| `action_required` | `any` | No | Details of the action required from the caller. |
| `coverage_options` | `any` | No | Available member-scoped coverage options for the plan. |
| `dependents` | `[]any` | Yes | List of dependents being managed. |
| `disclosures` | `[]any` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the dependents management intent. |
| `object` | `string` | No | Object type identifier. |
| `parent_intent_id` | `string` | Yes | The parent intent ID (e.g. |
| `parent_intent_type` | `any` | Yes | The type of parent intent. |
| `plan` | `any` | Yes | Plan information including pricing details. |
| `status` | `any` | Yes | Current status of the dependents management intent. |

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
| `eligibility_status` | `any` | Yes | Eligibility status: `eligible` or `ineligible`. |
| `object` | `string` | No | The object type. |
| `plan` | `any` | Yes | The insurance plan associated with the group. |
| `provider` | `any` | Yes | The insurance provider associated with the group. |
| `reasons` | `[]any` | Yes | List of reasons why the employee is ineligible. |

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
| `bank_account` | `any` | No | Bank account details |
| `date_of_birth` | `string` | Yes | Date of birth of the employee |
| `earliest_benefits_start_date` | `any` | No | The earliest date this employee can be enrolled in any benefits. |
| `email` | `string` | Yes | Email address of the employee |
| `employer_id` | `string` | No | Unique identifier for the employer |
| `external_customer_id` | `any` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `first_name` | `string` | Yes | First name of the employee. |
| `home_address` | `any` | No | Location where the employee is legally registered to live |
| `id` | `string` | No | Unique identifier for the employee |
| `last_name` | `string` | Yes | Last name of the employee |
| `metadata` | `any` | No | Set of key-value pairs that you can attach to an object. |
| `national_tax_id` | `string` | Yes | PPSN in Ireland, NINo in the UK, DNI/NIE in Spain |
| `nationality` | `any` | No | Nationality of the employee (e.g. |
| `object` | `string` | No | The object type |
| `offboard_on` | `any` | No | Date when the employee was or will be offboarded |
| `phone_number` | `string` | Yes | Phone number in E.164 international format (e.g. |
| `platform_id` | `string` | No | Unique identifier for the platform |
| `sex_at_birth` | `any` | Yes | The sex assigned to the employee at birth |
| `start_on` | `string` | No | Employment start date |
| `status` | `any` | No | Current status of the employee |

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
| `coverage_level` | `any` | Yes | Details about the coverage level for the offer. |
| `employee_id` | `string` | Yes | The Id of the employee for which the offer is available |
| `employer_id` | `string` | Yes | The Id of the employer for which the offer is available |
| `external_customer_id` | `any` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for offer |
| `object` | `string` | No | The object type |
| `required_action` | `any` | No | Required action to progress the offer, if any. |
| `status` | `any` | Yes | Current status of offer |

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
| `coverage_level` | `any` | Yes | Details about the coverage level for the offer. |
| `employee_id` | `string` | Yes | The Id of the employee for which the offer is available |
| `employer_id` | `string` | Yes | The Id of the employer for which the offer is available |
| `external_customer_id` | `any` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for offer |
| `object` | `string` | No | The object type |
| `required_action` | `any` | No | Required action to progress the offer, if any. |
| `status` | `any` | Yes | Current status of offer |

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
| `cancellation_date` | `any` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `any` | Yes | Represents the current coverage level for the policy |
| `employee_id` | `string` | Yes | The Id of the employee for which the policy is created |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolled_dependants_count` | `int` | Yes | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `any` | Yes | Enrolment type of the policy |
| `estimated_gross_premium` | `any` | Yes | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `any` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `opt_out_deadline_date` | `string` | Yes | Last day to opt out from the policy |
| `policy_number` | `any` | No | Health insurance policy number, if available |
| `renewal` | `any` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `any` | Yes | Current status of policy |

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
| `cancellation_date` | `any` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_level` | `any` | Yes | Represents the current coverage level for the policy |
| `employee_id` | `string` | Yes | The Id of the employee for which the policy is created |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolled_dependants_count` | `int` | Yes | Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy. |
| `enrolment_type` | `any` | Yes | Enrolment type of the policy |
| `estimated_gross_premium` | `any` | Yes | Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration. |
| `external_customer_id` | `any` | No | A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e. |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `opt_out_deadline_date` | `string` | Yes | Last day to opt out from the policy |
| `policy_number` | `any` | No | Health insurance policy number, if available |
| `renewal` | `any` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `any` | Yes | Current status of policy |

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
| `metadata` | `any` | No | Set of key-value pairs that you can attach to an object. |
| `object` | `string` | No | The object type |
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
| `cancellation_date` | `any` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `[]any` | Yes | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `int` | Yes | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolment_type` | `any` | Yes | Enrolment type of the policy |
| `group_policy_number` | `any` | No | Group’s health insurance policy number, if available |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `renewal` | `any` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `any` | Yes | Current status of policy |

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
| `cancellation_date` | `any` | No | Policy was cancelled on this date, if cancellation occured |
| `coverage_levels` | `[]any` | Yes | Represents the available coverage levels for this policy |
| `employer_cancellation_period_length` | `int` | Yes | How many days the employer has to cancel the policy since the policy starts |
| `employer_id` | `string` | Yes | The Id of the employer for which the policy is created |
| `end_date` | `string` | Yes | Policy ends on this date |
| `enrolment_type` | `any` | Yes | Enrolment type of the policy |
| `group_policy_number` | `any` | No | Group’s health insurance policy number, if available |
| `id` | `string` | Yes | Unique identifier for policy |
| `object` | `string` | No | The object type |
| `renewal` | `any` | Yes | Renewal information for the policy |
| `start_date` | `string` | Yes | Policy starts on this date |
| `status` | `any` | Yes | Current status of policy |

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
| `coverage_levels` | `[]any` | Yes | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | Yes | The Id of the employer for which the is created |
| `id` | `string` | Yes | Unique identifier for the quote |
| `object` | `string` | No | The object type |
| `quoted_at` | `string` | Yes | Date and time the quote was created at |
| `required_action` | `any` | No | Actions required by the employer to proceed with the quote. |
| `status` | `any` | Yes | Current status of the quote |

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
| `coverage_levels` | `[]any` | Yes | List of levels covered under the policy, each item representing details about the plan’s cover. |
| `employer_id` | `string` | Yes | The Id of the employer for which the is created |
| `id` | `string` | Yes | Unique identifier for the quote |
| `object` | `string` | No | The object type |
| `quoted_at` | `string` | Yes | Date and time the quote was created at |
| `required_action` | `any` | No | Actions required by the employer to proceed with the quote. |
| `status` | `any` | Yes | Current status of the quote |

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
| `action_required` | `any` | No | If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment. |
| `disclosures` | `[]any` | Yes | Disclosures associated with this intent. |
| `employee_id` | `string` | Yes | Identifier for the employee associated with this enrolment intent. |
| `force_confirmation` | `bool` | Yes | If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. |
| `group_id` | `string` | Yes | Identifier for the group associated with this enrolment intent. |
| `id` | `string` | Yes | Unique identifier for the enrolment intent. |
| `ineligibility_reason` | `any` | No | If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility. |
| `object` | `string` | No | Object type identifier. |
| `pending_confirmation` | `any` | No | If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state. |
| `policy_configuration` | `any` | No | Policy configuration associated with this enrolment intent. |
| `policy_enrolments` | `[]any` | Yes | Policy enrolment information |
| `status` | `any` | Yes | Current status of the enrolment intent. |

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
| `id` | `string` | Yes | Unique identifier for the requirement |
| `is_fulfilled` | `bool` | Yes | Whether the requirement has been fulfilled |
| `object` | `string` | No | Object type identifier |
| `object_id` | `string` | Yes | Identifier of the object (employee ID or employer ID) |
| `object_type` | `any` | Yes | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `any` | Yes | Type of requirement |

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
| `description` | `any` | No | Short description of the purpose or scope of the `group`. |
| `employer_id` | `string` | Yes | Identifier for the `employer` that owns this `group`. |
| `enrolment_type` | `any` | Yes | Indicates how employees are enrolled into the group. |
| `group_policy_ids` | `[]any` | Yes | Group policy unique identifiers associated with this group. |
| `group_policy_intent_ids` | `[]any` | Yes | Group policy intent unique identifiers associated with this group. |
| `group_quote_intent_ids` | `[]any` | Yes | Group quote intent unique identifiers associated with this group. |
| `group_type` | `any` | Yes | Indicates how policies are organized for this group. |
| `id` | `string` | Yes | Unique identifier for the `group`. |
| `name` | `string` | Yes | Human-readable name of the `group`. |
| `object` | `string` | No | The object type |
| `status` | `any` | Yes | Current lifecycle state of the `group`, indicating its current progress. |

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
| `desired_policy_start_date` | `any` | No | The desired date for the employee's policy to start. |
| `eligibility_status` | `any` | Yes | Eligibility status for the employee in this group. |
| `enrolment_date` | `any` | No | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `any` | Yes | Enrolment status for the employee in this group. |
| `enrolments` | `[]any` | Yes | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Yes | Unique identifier for the group. |
| `id` | `string` | Yes | Unique identifier for the employee. |
| `object` | `string` | No | The object type |
| `policies` | `[]any` | Yes | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `[]any` | Yes | List of scheduled group transitions for the employee. |

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
| `desired_policy_start_date` | `any` | No | The desired date for the employee's policy to start. |
| `eligibility_status` | `any` | Yes | Eligibility status for the employee in this group. |
| `enrolment_date` | `any` | No | The date on which the employee agreed to enrol into the group's policies. |
| `enrolment_status` | `any` | Yes | Enrolment status for the employee in this group. |
| `enrolments` | `[]any` | Yes | List of enrolments associated with the employee in this group. |
| `group_id` | `string` | Yes | Unique identifier for the group. |
| `id` | `string` | Yes | Unique identifier for the employee. |
| `object` | `string` | No | The object type |
| `policies` | `[]any` | Yes | List of policies associated with the employee in this group. |
| `scheduled_group_transitions` | `[]any` | Yes | List of scheduled group transitions for the employee. |

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
| `cancellation_date` | `any` | No | Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable. |
| `disclosures` | `[]any` | Yes | Disclosures associated with this group policy. |
| `employer_id` | `string` | No | Identifier for the employer associated with this group policy. |
| `end_date` | `any` | No | Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended. |
| `group_id` | `string` | No | Identifier for the group associated with this group policy. |
| `health_insurance` | `any` | No | Health insurance–specific fields (present when `type=health_insurance`). |
| `id` | `string` | Yes | Unique identifier for the group policy. |
| `object` | `string` | No | The object type |
| `plan` | `any` | Yes | Plan information for this policy |
| `provider` | `any` | Yes | Provider information for this policy. |
| `start_date` | `string` | Yes | Policy start (effective) date in ISO 8601 (YYYY-MM-DD). |
| `status` | `any` | Yes | Current lifecycle state of the `group_policy`, indicating its progress from creation to activation. |
| `type` | `any` | Yes | Policy type. |

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
| `action_required` | `any` | No | Details of the required action when the intent is in ActionRequired status. |
| `cost_sharing` | `any` | No | Cost sharing configuration for the policy intent |
| `disclosures` | `[]any` | Yes | Disclosures associated with this intent. |
| `due_date` | `any` | No | Due date for the policy intent |
| `group_id` | `string` | Yes | Unique identifier for the group |
| `id` | `string` | Yes | Unique identifier for the group policy intent |
| `object` | `string` | No | Object type identifier |
| `plan_id` | `string` | Yes | Unique identifier for the plan |
| `quote_intent_id` | `string` | Yes | Unique identifier for the group quote intent this policy intent was created from |
| `status` | `any` | Yes | Current status of the group policy intent |

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
| `id` | `string` | Yes | Unique identifier for the requirement |
| `is_fulfilled` | `bool` | Yes | Whether the requirement has been fulfilled |
| `object` | `string` | No | Object type identifier |
| `object_id` | `string` | Yes | Identifier of the object (employee ID or employer ID) |
| `object_type` | `any` | Yes | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `any` | Yes | Type of requirement |

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
| `family_type` | `any` | No | Type of the family covered by the employer. |
| `member_count` | `any` | No | Numbers of additional members covered by the employer. |
| `member_selection` | `any` | No | Whether specific member types are covered by the employer. |
| `percentage` | `any` | No | Percentage of the premium the employer covers. |
| `type` | `any` | Yes | Cost sharing type. |

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
| `action_required` | `any` | No | Details of the action required from the caller, if the intent is in action_required status. |
| `consent_links` | `[]any` | Yes | Consent links that need to be acknowledged |
| `cost_sharing` | `any` | No | Cost sharing configuration for the quote |
| `disclosures` | `[]any` | Yes | Disclosures associated with this intent. |
| `expected_start_date` | `any` | No | Expected start date for the insurance coverage |
| `group_id` | `string` | Yes | Unique identifier for the group |
| `id` | `string` | Yes | Unique identifier for the group quote intent |
| `object` | `string` | No | Object type identifier |
| `plan_id` | `string` | Yes | Unique identifier for the plan |
| `status` | `any` | Yes | Current status of the group quote intent |

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
| `id` | `string` | Yes | Unique identifier for the requirement |
| `is_fulfilled` | `bool` | Yes | Whether the requirement has been fulfilled |
| `object` | `string` | No | Object type identifier |
| `object_id` | `string` | Yes | Identifier of the object (employee ID or employer ID) |
| `object_type` | `any` | Yes | Type of object this requirement is for (employee or employer) |
| `requirement_type` | `any` | Yes | Type of requirement |

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
| `available_from` | `string` | Yes | The date from which this plan is available (inclusive). |
| `available_to` | `any` | No | The date until which this plan is available (inclusive). |
| `country` | `any` | Yes | The country this plan is available in. |
| `coverage_options` | `any` | No | Coverage options available for this plan, organized by scope and input type. |
| `description` | `string` | Yes | Description of the plan. |
| `disclosures` | `[]any` | Yes | Disclosures associated with this plan. |
| `documents` | `[]any` | Yes | List of plan documents (e.g., IPIDs, T&Cs). |
| `eligible_count` | `any` | No | Number of employees in the queried group eligible for this plan as-of `start_date`. |
| `employee_eligibility_criteria` | `[]any` | Yes | Eligibility criteria that employees must meet. |
| `employer_eligibility_criteria` | `[]any` | Yes | Eligibility criteria that employers must meet. |
| `health_insurance` | `any` | No | Health insurance-specific details. |
| `id` | `string` | Yes | Unique identifier for the plan. |
| `ineligible_count` | `any` | No | Number of employees in the queried group ineligible for this plan as-of `start_date`. |
| `name` | `string` | Yes | The name of the plan. |
| `object` | `string` | No | Object type. |
| `provider` | `any` | Yes | The provider offering this plan. |
| `total_count` | `any` | No | Total employees in the queried group. |
| `type` | `any` | Yes | The benefit type of the plan. |

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
| `bundling_type` | `any` | Yes | Indicates how this policy is bundled within a group |
| `cancellation_date` | `any` | No | Date the policy was cancelled (if applicable) |
| `disclosures` | `[]any` | Yes | Disclosures associated with this policy. |
| `employee_id` | `string` | Yes | Identifier of the employee associated with this policy. |
| `end_date` | `any` | No | Policy end date (inclusive) in ISO 8601, or null if open-ended |
| `group_id` | `string` | Yes | Identifier of the group associated with this policy. |
| `group_policy_id` | `string` | Yes | Identifier of the group policy id associated with this policy. |
| `health_insurance` | `any` | No | Health insurance–specific fields (present when `type=health_insurance`) |
| `id` | `string` | Yes | Unique identifier for the policy. |
| `object` | `string` | No | Object type |
| `plan` | `any` | Yes | Plan information for this policy |
| `provider` | `any` | Yes | Provider information for this policy |
| `start_date` | `string` | Yes | Policy start (effective) date in ISO 8601 (YYYY-MM-DD) |
| `status` | `any` | Yes | Current lifecycle state of the policy |
| `type` | `any` | Yes | Policy type. |

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
| `amendment_reason` | `any` | Yes | The reason for the policy amendment. |
| `disclosures` | `[]any` | Yes | Disclosures associated with this intent. |
| `id` | `string` | Yes | Unique identifier for the policy amendment intent. |
| `object` | `string` | No | Object type identifier. |
| `pending_confirmation` | `any` | No | Information about the pending confirmation if the intent status is `pending_confirmation`. |
| `policy_id` | `string` | Yes | The policy ID for which the amendment is requested. |
| `processing_error` | `any` | No | Information about the processing error if the intent status is `processing_error`. |
| `requested_changes` | `[]any` | Yes | List of requested changes to the policy. |
| `required_action` | `any` | No | Information about the required action if the intent status is `action_required`. |
| `status` | `any` | Yes | Current status of the policy amendment intent. |

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
| `associated_persons` | `[]any` | Yes | List of associated persons linked to this policy import. |
| `employee_id` | `string` | Yes | The employee ID for the policy import. |
| `group_id` | `string` | Yes | The group ID for the policy import. |
| `id` | `string` | Yes | Unique identifier for the policy import intent. |
| `member_number` | `string` | Yes | The member number assigned by the provider. |
| `object` | `string` | No | Object type identifier. |
| `policy_end_date` | `any` | No | The end date of the policy. |
| `policy_start_date` | `string` | Yes | The start date of the policy. |
| `provider_policy_number` | `string` | Yes | The provider's policy number. |
| `status` | `any` | Yes | Current status of the policy import intent. |

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
| `description` | `string` | Yes | Description of the provider. |
| `employer_platform_url` | `any` | No | URL to the employer portal/platform for this provider, if available. |
| `id` | `string` | Yes | Unique identifier for the provider. |
| `kota_hub_url` | `any` | No | URL to the Kota Hub page for this platform, if configured. |
| `logo_url` | `string` | Yes | URL to the provider's logo image. |
| `name` | `string` | Yes | The name of the provider. |
| `object` | `string` | No | Object type. |
| `support_phone` | `string` | Yes | Customer support phone number. |
| `supported_countries` | `[]any` | Yes | List of countries supported by this provider. |
| `website_url` | `string` | Yes | The provider's main website URL. |

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
| `created_at` | `string` | Yes | The date and time the endpoint was created |
| `endpoint_url` | `string` | Yes | The registered URL of the endpoint |
| `id` | `string` | Yes | The unique identifier of the endpoint |
| `object` | `string` | No | The object type |
| `subscribed_events` | `[]any` | Yes | The events the endpoint is subscribed to |

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
| `created_at` | `string` | Yes | The date and time the endpoint was created |
| `endpoint_url` | `string` | Yes | The registered URL of the endpoint |
| `id` | `string` | Yes | The unique identifier of the endpoint |
| `object` | `string` | No | The object type |
| `subscribed_events` | `[]any` | Yes | The events the endpoint is subscribed to |

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

