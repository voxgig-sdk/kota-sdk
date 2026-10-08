# Kota API

The Kota API.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 38 entities and 85 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### AssociatedPerson

Results: OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `date_of_birth`: Date of birth of the associated person
- `email`: Email address of the associated person
- `employee_id`: Unique identifier for the employee this person is associated with
- `first_name`: First name of the associated person
- `id`: Unique identifier for the associated person

### AssociatedPersonEligibilityResponsePagedList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `associated_person_id`: The associated person ID. Prefixed with `ap_`.
- `date_of_birth`: Date of birth of the associated person.
- `eligibility_status`: Eligibility status for the policy/plan.
- `first_name`: First name of the associated person.
- `ineligibility_reason`: Reason for ineligibility if status is ineligible.

### ContributionReport

Results: OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `created_at`: Date and time the report was created
- `employer_id`: Unique identifier of the employer for which the report is created
- `external_customer_id`: Unique identifier of the customer for which the report is created. This identifier is assigned by the Employer of Record (EoR) platform to the Customer (that is the company using the EoR service) for which the employee is employed. This parameter is only available to EoR platforms.
- `finalized_at`: Date and time the report was finalized, if applicable
- `id`: Unique identifier for the contribution report

### ContributionReportEmployeeBreakdown

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `contribution_report_id`: Unique identifier of the related contribution report
- `created_at`: Date and time the breakdown was created
- `currency`: The currency in which all the amounts in this breakdown are presented (for example `eur`)
- `employee_id`: Unique identifier of the employee for which the breakdown is created
- `employer_id`: Unique identifier of the employer for which the breakdown is created

### ContributionReportEmployeeBreakdownResponsePagedList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `id`: Unique identifier for the contribution entry

### CreateHostedSessionToken

Results: OK.

SDK operations: `create`.

### CreateSessionToken

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `external_customer_id`: A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (that is

### Dependent

Results: OK.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `action_required`: Details of the action required from the caller. Populated only when `status` is `action_required` and a required action has been recorded on the intent (for example restricted dependents detected by compliance screening).
- `associated_person_ids`: List of associated person IDs to add as dependents.
- `coverage_options`: Available member-scoped coverage options for the plan. Present when the plan has member-scoped coverage configurations.
- `dependent_coverage_selections`: Optional coverage selections per dependent.
- `dependents`: List of dependents being managed.

### DependentsManagementIntent

Results: OK; No Content.

SDK operations: `create`, `load`.

Key fields to recognise:

- `action_required`: Details of the action required from the caller. Populated only when `status` is `action_required` and a required action has been recorded on the intent (for example restricted dependents detected by compliance screening).
- `coverage_options`: Available member-scoped coverage options for the plan. Present when the plan has member-scoped coverage configurations.
- `dependents`: List of dependents being managed.
- `disclosures`: Disclosures associated with this intent.
- `id`: Unique identifier for the dependents management intent. Prefixed with `dmi_`.

### EligibilityCheck

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `eligibility_status`: Eligibility status: `eligible` or `ineligible`.
- `employee_id`: The employee to check eligibility for.
- `object`: The object type.
- `plan`: The insurance plan associated with the group.
- `provider`: The insurance provider associated with the group.

### Employee

Results: OK.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `bank_account`: Bank account details
- `date_of_birth`: Date of birth of the employee
- `earliest_benefits_start_date`: The earliest date this employee can be enrolled in any benefits. Before this date, the employee remains in a Pending state and is excluded from benefit activation. Ignored for statutory schemes where immediate coverage is legally required. Example: Local Netherlands and UAE schemes.
- `email`: Email address of the employee
- `employer_id`: Unique identifier for the employer

### EmployeeHealthInsuranceOffer

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `coverage_level`: Details about the coverage level for the offer. Only a single level of cover is available for a specific employee!
- `employee_id`: The Id of the employee for which the offer is available
- `employer_id`: The Id of the employer for which the offer is available
- `external_customer_id`: A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (that is the company using the EoR service) for which the employee is employed. This ID groups employees under this Customer, enabling the aggregation of contribution reporting and other values per Customer rather than per legal entity. This parameter is only available to EoR platforms.
- `id`: Unique identifier for offer

### EmployeeHealthInsuranceOfferResponsePagedList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `coverage_level`: Details about the coverage level for the offer. Only a single level of cover is available for a specific employee!
- `employee_id`: The Id of the employee for which the offer is available
- `employer_id`: The Id of the employer for which the offer is available
- `external_customer_id`: A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (that is the company using the EoR service) for which the employee is employed. This ID groups employees under this Customer, enabling the aggregation of contribution reporting and other values per Customer rather than per legal entity. This parameter is only available to EoR platforms.
- `id`: Unique identifier for offer

### EmployeeHealthInsurancePolicy

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `cancellation_date`: Policy was cancelled on this date, if cancellation occured
- `coverage_level`: Represents the current coverage level for the policy
- `employee_id`: The Id of the employee for which the policy is created
- `employer_id`: The Id of the employer for which the policy is created
- `end_date`: Policy ends on this date

### EmployeeHealthInsurancePolicyResponsePagedList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `cancellation_date`: Policy was cancelled on this date, if cancellation occured
- `coverage_level`: Represents the current coverage level for the policy
- `employee_id`: The Id of the employee for which the policy is created
- `employer_id`: The Id of the employer for which the policy is created
- `end_date`: Policy ends on this date

### Employer

Results: OK.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `earliest_benefits_start_date`: The earliest date this employer is permitted to set up any benefits scheme.
- `legal_address`: Treated as a single object that is updated entirely, `null` sub-fields (for example
- `legal_name`: Legal name of the company.
- `metadata`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Maximum 25 keys. Individual keys can be up to 40 characters and values up to 500 characters.
- `object`: The object type

### EmployerHealthInsurancePolicy

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `cancellation_date`: Policy was cancelled on this date, if cancellation occured
- `coverage_levels`: Represents the available coverage levels for this policy
- `employer_cancellation_period_length`: How many days the employer has to cancel the policy since the policy starts
- `employer_id`: The Id of the employer for which the policy is created
- `end_date`: Policy ends on this date

### EmployerHealthInsurancePolicyResponsePagedList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `cancellation_date`: Policy was cancelled on this date, if cancellation occured
- `coverage_levels`: Represents the available coverage levels for this policy
- `employer_cancellation_period_length`: How many days the employer has to cancel the policy since the policy starts
- `employer_id`: The Id of the employer for which the policy is created
- `end_date`: Policy ends on this date

### EmployerHealthInsuranceQuote

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `coverage_levels`: List of levels covered under the policy, each item representing details about the plan’s cover. Currently Kota only supports a single level of cover.
- `employer_id`: The Id of the employer for which the is created
- `id`: Unique identifier for the quote
- `object`: The object type
- `quoted_at`: Date and time the quote was created at

### EmployerHealthInsuranceQuoteResponsePagedList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `coverage_levels`: List of levels covered under the policy, each item representing details about the plan’s cover. Currently Kota only supports a single level of cover.
- `employer_id`: The Id of the employer for which the is created
- `id`: Unique identifier for the quote
- `object`: The object type
- `quoted_at`: Date and time the quote was created at

### EnrolmentIntent

Results: No Content; OK.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `action_required`: If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment.
- `coverage_selections`: Current coverage option selections. Populated when selections have been submitted.
- `desired_policy_start_date`: Desired policy start date, not guaranteed to be honoured by the provider.
- `disclosures`: Disclosures associated with this intent.
- `employee_id`: Identifier for the employee associated with this enrolment intent. Prefixed with `ee_`.

### EnrolmentIntentRequirementResponsePagedList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `id`: Unique identifier for the requirement

### Event

Results: OK.

SDK operations: `create`, `list`, `load`.

### Group

Results: OK.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `description`: Short description of the purpose or scope of the `group`.
- `employer_id`: Identifier for the `employer` that owns this `group`. Prefixed with `er_`.
- `enrolment_type`: Indicates how employees are enrolled into the group. - `manual`: employees must be enrolled through an API. - `automatic`: employees are enrolled automatically upon being created with the Employer.
- `group_policy_ids`: Group policy unique identifiers associated with this group.
- `group_policy_intent_ids`: Group policy intent unique identifiers associated with this group.

### GroupEmployee

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `create_enrolment_intents`: Controls whether enrolment intents are automatically created for the employee.
- `desired_policy_start_date`: The desired date for the employee&#39;s policy to start. This date is not guaranteed to be honored by the insurance provider and may be adjusted based on provider-specific rules and requirements.
- `eligibility_status`: Eligibility status for the employee in this group. `Pending` = no eligibility check performed (no group policy), `Eligible` = employee meets provider&#39;s eligibility criteria, `Ineligible` = employee does not meet eligibility criteria (for example, age restrictions).
- `employee_id`: Employee Id
- `enrolment_date`: The date on which the employee agreed to enrol into the group&#39;s policies. This date may be used by some insurance providers to determine the policy start date.

### GroupEmployeeResponsePagedList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `id`: Unique identifier for the employee.

### GroupPolicy

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `cancellation_date`: Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable.
- `disclosures`: Disclosures associated with this group policy.
- `employer_id`: Identifier for the employer associated with this group policy.
- `end_date`: Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended.
- `group_id`: Identifier for the group associated with this group policy.

### GroupPolicyIntent

Results: OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `action_required`: Details of the required action when the intent is in ActionRequired status.
- `consent_approvals`: Consent approvals to record at the time of intent creation
- `cost_sharing`: Cost sharing configuration for the policy intent
- `disclosures`: Disclosures associated with this intent.
- `due_date`: Due date for the policy intent

### GroupPolicyIntentRequirementResponsePagedList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `id`: Unique identifier for the requirement

### GroupQuote

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `cost_sharing`: Cost sharing configuration for the quote
- `currency`: Currency of the premium (for example EUR, GBP)
- `employee_count`: Number of employees covered by the quote
- `expires_at`: When the quote expires
- `generated_at`: When the quote was generated

### GroupQuoteIntent

Results: No Content; OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `action_required`: Details of the action required from the caller, if the intent is in `action_required` status.
- `consent_links`: Consent links that need to be acknowledged
- `cost_sharing`: Cost sharing configuration for the quote
- `coverage_selections`: Plan coverage option selections for group-policy-scoped configurations.
- `disclosures`: Disclosures associated with this intent.

### GroupQuoteIntentRequirementResponsePagedList

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `id`: Unique identifier for the requirement

### Plan

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `available_from`: The date from which this plan is available (inclusive).
- `available_to`: The date until which this plan is available (inclusive). Null if the plan has no end date.
- `country`: The country this plan is available in.
- `coverage_options`: Coverage options available for this plan, organized by scope and input type.
- `description`: Description of the plan.

### Policy

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `bundling_type`: Indicates how this policy is bundled within a group
- `cancellation_date`: Date the policy was cancelled (if applicable)
- `disclosures`: Disclosures associated with this policy.
- `employee_id`: Identifier of the employee associated with this policy. Prefixed with `ee_`.
- `end_date`: Policy end date (inclusive) in ISO 8601, or null if open-ended

### PolicyAmendmentIntent

Results: No Content; OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amendment_reason`: The reason for the policy amendment.
- `disclosures`: Disclosures associated with this intent.
- `id`: Unique identifier for the policy amendment intent. Prefixed with `pai_`.
- `object`: Object type identifier.
- `pending_confirmation`: Information about the pending confirmation if the intent status is `pending_confirmation`.

### PolicyImportIntent

Results: OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `associated_persons`: List of associated persons linked to this policy import.
- `employee_id`: The employee ID for the policy import. Prefixed with `ee_`.
- `group_id`: The group ID for the policy import. Prefixed with `g_`.
- `id`: Unique identifier for the policy import intent. Prefixed with `pii_`.
- `member_number`: The member number assigned by the provider.

### Provider

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `description`: Description of the provider.
- `employer_platform_url`: URL to the employer portal/platform for this provider, if available.
- `id`: Unique identifier for the provider. Prefixed with `pr_`.
- `kota_hub_url`: URL to the Kota Hub page for this platform, if configured.
- `logo_url`: URL to the provider&#39;s logo image.

### WebhookEndpoint

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `created_at`: The date and time the endpoint was created
- `endpoint_url`: The registered URL of the endpoint
- `id`: The unique identifier of the endpoint
- `object`: The object type
- `subscribed_events`: The events the endpoint is subscribed to

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| AssociatedPerson | `create` | `POST /employees/{employee_id}/associated_persons` | Required |
| AssociatedPerson | `list` | `GET /employees/{employee_id}/associated_persons` | Required |
| AssociatedPerson | `load` | `GET /employees/{employee_id}/associated_persons/{associated_person_id}` | Required |
| AssociatedPerson | `remove` | `DELETE /employees/{employee_id}/associated_persons/{associated_person_id}` | Required |
| AssociatedPerson | `update` | `PUT /employees/{employee_id}/associated_persons/{associated_person_id}` | Required |
| AssociatedPersonEligibilityResponsePagedList | `list` | `GET /dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility` | Required |
| ContributionReport | `create` | `POST /contribution_reports/{contribution_report_id}/finalize` | Required |
| ContributionReport | `list` | `GET /contribution_reports` | Required |
| ContributionReport | `load` | `GET /contribution_reports/{contribution_report_id}` | Required |
| ContributionReportEmployeeBreakdown | `load` | `GET /contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}` | Required |
| ContributionReportEmployeeBreakdownResponsePagedList | `list` | `GET /contribution_reports/{contribution_report_id}/employee_breakdowns` | Required |
| CreateHostedSessionToken | `create` | `POST /hosted/sessions` | Required |
| CreateSessionToken | `create` | `POST /embed/sessions` | Required |
| Dependent | `create` | `POST /dependents_management_intents/{dependents_management_intent_id}/dependents` | Required |
| Dependent | `remove` | `DELETE /dependents_management_intents/{dependents_management_intent_id}/dependents/{associated_person_id}` | Required |
| DependentsManagementIntent | `create` | `POST /policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent` | Required |
| DependentsManagementIntent | `create` | `POST /enrolment_intents/{enrolment_intent_id}/create_dependents_management_intent` | Required |
| DependentsManagementIntent | `create` | `POST /dependents_management_intents/{dependents_management_intent_id}/cancel` | Required |
| DependentsManagementIntent | `create` | `POST /dependents_management_intents/{dependents_management_intent_id}/confirm` | Required |
| DependentsManagementIntent | `load` | `GET /dependents_management_intents/{dependents_management_intent_id}` | Required |
| EligibilityCheck | `create` | `POST /groups/{group_id}/eligibility_check` | Required |
| Employee | `create` | `POST /employees/{employee_id}/offboard` | Required |
| Employee | `create` | `POST /employees/{employee_id}/offboard/cancel` | Required |
| Employee | `create` | `POST /employees` | Required |
| Employee | `list` | `GET /employees` | Required |
| Employee | `load` | `GET /employees/{employee_id}` | Required |
| Employee | `update` | `PUT /employees/{employee_id}` | Required |
| EmployeeHealthInsuranceOffer | `load` | `GET /employees/{employee_id}/health_insurance/offers/{employee_offer_id}` | Required |
| EmployeeHealthInsuranceOfferResponsePagedList | `list` | `GET /employees/{employee_id}/health_insurance/offers` | Required |
| EmployeeHealthInsurancePolicy | `load` | `GET /employees/{employee_id}/health_insurance/policies/{employee_policy_id}` | Required |
| EmployeeHealthInsurancePolicyResponsePagedList | `list` | `GET /employees/{employee_id}/health_insurance/policies` | Required |
| Employer | `create` | `POST /employers/{employer_id}/offboard` | Required |
| Employer | `create` | `POST /employers` | Required |
| Employer | `list` | `GET /employers` | Required |
| Employer | `load` | `GET /employers/{employer_id}` | Required |
| Employer | `update` | `PUT /employers/{employer_id}` | Required |
| EmployerHealthInsurancePolicy | `load` | `GET /employers/{employer_id}/health_insurance/policies/{employer_policy_id}` | Required |
| EmployerHealthInsurancePolicyResponsePagedList | `list` | `GET /employers/{employer_id}/health_insurance/policies` | Required |
| EmployerHealthInsuranceQuote | `load` | `GET /employers/{employer_id}/health_insurance/quotes/{employer_quote_id}` | Required |
| EmployerHealthInsuranceQuoteResponsePagedList | `list` | `GET /employers/{employer_id}/health_insurance/quotes` | Required |
| EnrolmentIntent | `create` | `POST /enrolment_intents/{enrolment_intent_id}/confirm` | Required |
| EnrolmentIntent | `create` | `POST /enrolment_intents/{enrolment_intent_id}/coverage-selections` | Required |
| EnrolmentIntent | `create` | `POST /enrolment_intents/{enrolment_intent_id}/reject` | Required |
| EnrolmentIntent | `create` | `POST /enrolment_intents` | Required |
| EnrolmentIntent | `list` | `GET /enrolment_intents` | Required |
| EnrolmentIntent | `load` | `GET /enrolment_intents/{enrolment_intent_id}` | Required |
| EnrolmentIntent | `update` | `PUT /enrolment_intents/{enrolment_intent_id}` | Required |
| EnrolmentIntentRequirementResponsePagedList | `list` | `GET /enrolment_intents/{enrolment_intent_id}/requirements` | Required |
| Event | `create` | `POST /events/{event_id}/replay` | Required |
| Event | `list` | `GET /events` | Required |
| Event | `load` | `GET /events/{event_id}` | Required |
| Group | `create` | `POST /groups` | Required |
| Group | `list` | `GET /groups` | Required |
| Group | `load` | `GET /groups/{group_id}` | Required |
| Group | `update` | `PUT /groups/{group_id}` | Required |
| GroupEmployee | `create` | `POST /groups/{group_id}/employees` | Required |
| GroupEmployeeResponsePagedList | `list` | `GET /groups/{group_id}/employees` | Required |
| GroupPolicy | `list` | `GET /group_policies` | Required |
| GroupPolicy | `load` | `GET /group_policies/{group_policy_id}` | Required |
| GroupPolicyIntent | `create` | `POST /group_policy_intents` | Required |
| GroupPolicyIntent | `list` | `GET /group_policy_intents` | Required |
| GroupPolicyIntent | `load` | `GET /group_policy_intents/{group_policy_intent_id}` | Required |
| GroupPolicyIntentRequirementResponsePagedList | `list` | `GET /group_policy_intents/{group_policy_intent_id}/requirements` | Required |
| GroupQuote | `load` | `GET /group_quote_intents/{group_quote_intent_id}/quote` | Required |
| GroupQuoteIntent | `create` | `POST /group_quote_intents/{group_quote_intent_id}/reject` | Required |
| GroupQuoteIntent | `create` | `POST /group_quote_intents` | Required |
| GroupQuoteIntent | `list` | `GET /group_quote_intents` | Required |
| GroupQuoteIntent | `load` | `GET /group_quote_intents/{group_quote_intent_id}` | Required |
| GroupQuoteIntentRequirementResponsePagedList | `list` | `GET /group_quote_intents/{group_quote_intent_id}/requirements` | Required |
| Plan | `list` | `GET /plans` | Required |
| Plan | `load` | `GET /plans/{plan_id}` | Required |
| Policy | `list` | `GET /policies` | Required |
| Policy | `load` | `GET /policies/{policy_id}` | Required |
| PolicyAmendmentIntent | `create` | `POST /policies/{policy_id}/policy_amendment_intents/{id}/cancel` | Required |
| PolicyAmendmentIntent | `create` | `POST /policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}/confirm` | Required |
| PolicyAmendmentIntent | `create` | `POST /policies/{policy_id}/policy_amendment_intents` | Required |
| PolicyAmendmentIntent | `list` | `GET /policies/{policy_id}/policy_amendment_intents` | Required |
| PolicyAmendmentIntent | `load` | `GET /policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}` | Required |
| PolicyImportIntent | `create` | `POST /policy_import_intents` | Required |
| PolicyImportIntent | `list` | `GET /policy_import_intents` | Required |
| PolicyImportIntent | `load` | `GET /policy_import_intents/{policy_import_intent_id}` | Required |
| Provider | `list` | `GET /providers` | Required |
| Provider | `load` | `GET /providers/{provider_id}` | Required |
| WebhookEndpoint | `list` | `GET /webhooks/endpoints` | Required |
| WebhookEndpoint | `load` | `GET /webhooks/endpoints/{webhook_endpoint_id}` | Required |

## Connect to the API

- Test Kota API: `https://test.api.kota.io`
- Production Kota API: `https://api.kota.io`

The default credential is sent in the `Authorization` header with the `Bearer` prefix.

Authorization header using the Bearer scheme

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| JavaScript | `js/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `kota_list`: List records for an entity. Supported entities: `associated_person`, `associated_person_eligibility_response_paged_list`, `contribution_report`, `contribution_report_employee_breakdown_response_paged_list`, `employee`, `employee_health_insurance_offer_response_paged_list`, `employee_health_insurance_policy_response_paged_list`, `employer`, `employer_health_insurance_policy_response_paged_list`, `employer_health_insurance_quote_response_paged_list`, `enrolment_intent`, `enrolment_intent_requirement_response_paged_list`, `event`, `group`, `group_employee_response_paged_list`, `group_policy`, `group_policy_intent`, `group_policy_intent_requirement_response_paged_list`, `group_quote_intent`, `group_quote_intent_requirement_response_paged_list`, `plan`, `policy`, `policy_amendment_intent`, `policy_import_intent`, `provider`, `webhook_endpoint`.
- `kota_load`: Load one record for an entity. Supported entities: `associated_person`, `contribution_report`, `contribution_report_employee_breakdown`, `dependents_management_intent`, `employee`, `employee_health_insurance_offer`, `employee_health_insurance_policy`, `employer`, `employer_health_insurance_policy`, `employer_health_insurance_quote`, `enrolment_intent`, `event`, `group`, `group_policy`, `group_policy_intent`, `group_quote`, `group_quote_intent`, `plan`, `policy`, `policy_amendment_intent`, `policy_import_intent`, `provider`, `webhook_endpoint`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `debug`: Request/response capture ring buffer for debugging
- `idempotency`: Idempotency keys for safe retries of mutating operations
- `metrics`: Statistics capture: per-operation counters and latency
- `paging`: Pagination signals for list operations
- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

