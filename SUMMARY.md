# Kota API

The Kota API.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 40 entities and 85 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### [AssociatedPerson](docs/api/associated_person.html)

Results: OK.

SDK operations: `create`, `list`, `load`, `remove`, `update`.

Key fields to recognise:

- `date_of_birth`: Date of birth of the associated person
- `email`: Email address of the associated person
- `employee_id`: Unique identifier for the employee this person is associated with
- `first_name`: First name of the associated person
- `id`: Unique identifier for the associated person

### [AssociatedPersonEligibilityResponsePagedList](docs/api/associated_person_eligibility_response_paged_list.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `associated_person_id`: The associated person ID. Prefixed with `ap_`.
- `date_of_birth`: Date of birth of the associated person.
- `eligibility_status`: Eligibility status for the policy/plan.
- `first_name`: First name of the associated person.
- `ineligibility_reason`: Reason for ineligibility if status is ineligible.

### [ContributionReport](docs/api/contribution_report.html)

Results: OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `created_at`: Date and time the report was created
- `employer_id`: Unique identifier of the employer for which the report is created
- `external_customer_id`: Unique identifier of the customer for which the report is created. This identifier is assigned by the Employer of Record (EoR) platform to the Customer (that is the company using the EoR service) for which the employee is employed. This parameter is only available to EoR platforms.
- `finalized_at`: Date and time the report was finalized, if applicable
- `id`: Unique identifier for the contribution report

### [ContributionReportEmployeeBreakdown](docs/api/contribution_report_employee_breakdown.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `contribution_report_id`: Unique identifier of the related contribution report
- `created_at`: Date and time the breakdown was created
- `currency`: The currency in which all the amounts in this breakdown are presented (for example `eur`)
- `employee_id`: Unique identifier of the employee for which the breakdown is created
- `employer_id`: Unique identifier of the employer for which the breakdown is created

### [ContributionReportEmployeeBreakdownResponsePagedList](docs/api/contribution_report_employee_breakdown_response_paged_list.html)

Results: OK.

SDK operations: `list`.

### [CreateHostedSessionToken](docs/api/create_hosted_session_token.html)

Results: OK.

SDK operations: `create`.

### [CreateSessionToken](docs/api/create_session_token.html)

Results: OK.

SDK operations: `create`.

### [Dependent](docs/api/dependent.html)

Results: OK.

SDK operations: `create`, `remove`.

Key fields to recognise:

- `action_required`: Details of the action required from the caller. Populated only when `status` is `action_required` and a required action has been recorded on the intent (for example restricted dependents detected by compliance screening).
- `coverage_options`: Available member-scoped coverage options for the plan. Present when the plan has member-scoped coverage configurations.
- `dependents`: List of dependents being managed.
- `disclosures`: Disclosures associated with this intent.
- `id`: Unique identifier for the dependents management intent. Prefixed with `dmi_`.

### [DependentsManagementIntent](docs/api/dependents_management_intent.html)

Results: OK; No Content.

SDK operations: `create`, `load`.

Key fields to recognise:

- `action_required`: Details of the action required from the caller. Populated only when `status` is `action_required` and a required action has been recorded on the intent (for example restricted dependents detected by compliance screening).
- `coverage_options`: Available member-scoped coverage options for the plan. Present when the plan has member-scoped coverage configurations.
- `dependents`: List of dependents being managed.
- `disclosures`: Disclosures associated with this intent.
- `id`: Unique identifier for the dependents management intent. Prefixed with `dmi_`.

### [EligibilityCheck](docs/api/eligibility_check.html)

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `eligibility_status`: Eligibility status: `eligible` or `ineligible`.
- `object`: The object type.
- `plan`: The insurance plan associated with the group.
- `provider`: The insurance provider associated with the group.
- `reasons`: List of reasons why the employee is ineligible. Empty if eligible.

### [Employee](docs/api/employee.html)

Results: OK.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `bank_account`: Bank account details
- `date_of_birth`: Date of birth of the employee
- `earliest_benefits_start_date`: The earliest date this employee can be enrolled in any benefits. Before this date, the employee remains in a Pending state and is excluded from benefit activation. Ignored for statutory schemes where immediate coverage is legally required. Example: Local Netherlands and UAE schemes.
- `email`: Email address of the employee
- `employer_id`: Unique identifier for the employer

### [EmployeeHealthInsuranceOffer](docs/api/employee_health_insurance_offer.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `coverage_level`: Details about the coverage level for the offer. Only a single level of cover is available for a specific employee!
- `employee_id`: The Id of the employee for which the offer is available
- `employer_id`: The Id of the employer for which the offer is available
- `external_customer_id`: A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (that is the company using the EoR service) for which the employee is employed. This ID groups employees under this Customer, enabling the aggregation of contribution reporting and other values per Customer rather than per legal entity. This parameter is only available to EoR platforms.
- `id`: Unique identifier for offer

### [EmployeeHealthInsuranceOfferResponsePagedList](docs/api/employee_health_insurance_offer_response_paged_list.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `coverage_level`: Details about the coverage level for the offer. Only a single level of cover is available for a specific employee!
- `employee_id`: The Id of the employee for which the offer is available
- `employer_id`: The Id of the employer for which the offer is available
- `external_customer_id`: A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (that is the company using the EoR service) for which the employee is employed. This ID groups employees under this Customer, enabling the aggregation of contribution reporting and other values per Customer rather than per legal entity. This parameter is only available to EoR platforms.
- `id`: Unique identifier for offer

### [EmployeeHealthInsurancePolicy](docs/api/employee_health_insurance_policy.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `cancellation_date`: Policy was cancelled on this date, if cancellation occured
- `coverage_level`: Represents the current coverage level for the policy
- `employee_id`: The Id of the employee for which the policy is created
- `employer_id`: The Id of the employer for which the policy is created
- `end_date`: Policy ends on this date

### [EmployeeHealthInsurancePolicyResponsePagedList](docs/api/employee_health_insurance_policy_response_paged_list.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `cancellation_date`: Policy was cancelled on this date, if cancellation occured
- `coverage_level`: Represents the current coverage level for the policy
- `employee_id`: The Id of the employee for which the policy is created
- `employer_id`: The Id of the employer for which the policy is created
- `end_date`: Policy ends on this date

### [Employer](docs/api/employer.html)

Results: OK.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `metadata`: Set of key-value pairs that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Maximum 25 keys. Individual keys can be up to 40 characters and values up to 500 characters.
- `object`: The object type

### [EmployerHealthInsurancePolicy](docs/api/employer_health_insurance_policy.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `cancellation_date`: Policy was cancelled on this date, if cancellation occured
- `coverage_levels`: Represents the available coverage levels for this policy
- `employer_cancellation_period_length`: How many days the employer has to cancel the policy since the policy starts
- `employer_id`: The Id of the employer for which the policy is created
- `end_date`: Policy ends on this date

### [EmployerHealthInsurancePolicyResponsePagedList](docs/api/employer_health_insurance_policy_response_paged_list.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `cancellation_date`: Policy was cancelled on this date, if cancellation occured
- `coverage_levels`: Represents the available coverage levels for this policy
- `employer_cancellation_period_length`: How many days the employer has to cancel the policy since the policy starts
- `employer_id`: The Id of the employer for which the policy is created
- `end_date`: Policy ends on this date

### [EmployerHealthInsuranceQuote](docs/api/employer_health_insurance_quote.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `coverage_levels`: List of levels covered under the policy, each item representing details about the plan’s cover. Currently Kota only supports a single level of cover.
- `employer_id`: The Id of the employer for which the is created
- `id`: Unique identifier for the quote
- `object`: The object type
- `quoted_at`: Date and time the quote was created at

### [EmployerHealthInsuranceQuoteResponsePagedList](docs/api/employer_health_insurance_quote_response_paged_list.html)

Results: OK.

SDK operations: `list`.

Key fields to recognise:

- `coverage_levels`: List of levels covered under the policy, each item representing details about the plan’s cover. Currently Kota only supports a single level of cover.
- `employer_id`: The Id of the employer for which the is created
- `id`: Unique identifier for the quote
- `object`: The object type
- `quoted_at`: Date and time the quote was created at

### [EnrolmentIntent](docs/api/enrolment_intent.html)

Results: No Content; OK.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `action_required`: If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment.
- `disclosures`: Disclosures associated with this intent.
- `employee_id`: Identifier for the employee associated with this enrolment intent. Prefixed with `ee_`.
- `force_confirmation`: If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required. This can be useful in scenarios where you want to ensure that the employee explicitly confirms their enrolment, regardless of their eligibility or any other factors. Defaults to false.
- `group_id`: Identifier for the group associated with this enrolment intent. Prefixed with `gr_`.

### [EnrolmentIntentRequirementResponsePagedList](docs/api/enrolment_intent_requirement_response_paged_list.html)

Results: OK.

SDK operations: `list`.

### [Event](docs/api/event.html)

Results: OK.

SDK operations: `list`, `load`.

### [Group](docs/api/group.html)

Results: OK.

SDK operations: `create`, `list`, `load`, `update`.

Key fields to recognise:

- `description`: Short description of the purpose or scope of the `group`.
- `employer_id`: Identifier for the `employer` that owns this `group`. Prefixed with `er_`.
- `enrolment_type`: Indicates how employees are enrolled into the group. - `manual`: employees must be enrolled through an API. - `automatic`: employees are enrolled automatically upon being created with the Employer.
- `group_policy_ids`: Group policy unique identifiers associated with this group.
- `group_policy_intent_ids`: Group policy intent unique identifiers associated with this group.

### [GroupEmployee](docs/api/group_employee.html)

Results: OK.

SDK operations: `create`.

Key fields to recognise:

- `desired_policy_start_date`: The desired date for the employee&#39;s policy to start. This date is not guaranteed to be honored by the insurance provider and may be adjusted based on provider-specific rules and requirements.
- `eligibility_status`: Eligibility status for the employee in this group. `Pending` = no eligibility check performed (no group policy), `Eligible` = employee meets provider&#39;s eligibility criteria, `Ineligible` = employee does not meet eligibility criteria (for example, age restrictions).
- `enrolment_date`: The date on which the employee agreed to enrol into the group&#39;s policies. This date may be used by some insurance providers to determine the policy start date.
- `enrolment_status`: Enrolment status for the employee in this group. Derived from policy and enrolment intent statuses.
- `enrolments`: List of enrolments associated with the employee in this group.

### [GroupEmployeeResponsePagedList](docs/api/group_employee_response_paged_list.html)

Results: OK.

SDK operations: `list`.

### [GroupPolicy](docs/api/group_policy.html)

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `cancellation_date`: Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable.
- `disclosures`: Disclosures associated with this group policy.
- `employer_id`: Identifier for the employer associated with this group policy.
- `end_date`: Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended.
- `group_id`: Identifier for the group associated with this group policy.

### [GroupPolicyIntent](docs/api/group_policy_intent.html)

Results: OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `action_required`: Details of the required action when the intent is in ActionRequired status.
- `cost_sharing`: Cost sharing configuration for the policy intent
- `disclosures`: Disclosures associated with this intent.
- `due_date`: Due date for the policy intent
- `group_id`: Unique identifier for the group

### [GroupPolicyIntentRequirementResponsePagedList](docs/api/group_policy_intent_requirement_response_paged_list.html)

Results: OK.

SDK operations: `list`.

### [GroupQuote](docs/api/group_quote.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `family_type`: Type of the family covered by the employer.
- `member_count`: Numbers of additional members covered by the employer.
- `member_selection`: Whether specific member types are covered by the employer.
- `percentage`: Percentage of the premium the employer covers.
- `type`: Cost sharing type. Determines which sub-object is populated.

### [GroupQuoteIntent](docs/api/group_quote_intent.html)

Results: No Content; OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `action_required`: Details of the action required from the caller, if the intent is in action_required status.
- `consent_links`: Consent links that need to be acknowledged
- `cost_sharing`: Cost sharing configuration for the quote
- `disclosures`: Disclosures associated with this intent.
- `expected_start_date`: Expected start date for the insurance coverage

### [GroupQuoteIntentRequirementResponsePagedList](docs/api/group_quote_intent_requirement_response_paged_list.html)

Results: OK.

SDK operations: `list`.

### [Plan](docs/api/plan.html)

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `available_from`: The date from which this plan is available (inclusive).
- `available_to`: The date until which this plan is available (inclusive). Null if the plan has no end date.
- `country`: The country this plan is available in.
- `coverage_options`: Coverage options available for this plan, organized by scope and input type.
- `description`: Description of the plan.

### [Policy](docs/api/policy.html)

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `bundling_type`: Indicates how this policy is bundled within a group
- `cancellation_date`: Date the policy was cancelled (if applicable)
- `disclosures`: Disclosures associated with this policy.
- `employee_id`: Identifier of the employee associated with this policy. Prefixed with `ee_`.
- `end_date`: Policy end date (inclusive) in ISO 8601, or null if open-ended

### [PolicyAmendmentIntent](docs/api/policy_amendment_intent.html)

Results: No Content; OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `amendment_reason`: The reason for the policy amendment.
- `disclosures`: Disclosures associated with this intent.
- `id`: Unique identifier for the policy amendment intent. Prefixed with `pai_`.
- `object`: Object type identifier.
- `pending_confirmation`: Information about the pending confirmation if the intent status is `pending_confirmation`.

### [PolicyImportIntent](docs/api/policy_import_intent.html)

Results: OK.

SDK operations: `create`, `list`, `load`.

Key fields to recognise:

- `associated_persons`: List of associated persons linked to this policy import.
- `employee_id`: The employee ID for the policy import. Prefixed with `ee_`.
- `group_id`: The group ID for the policy import. Prefixed with `g_`.
- `id`: Unique identifier for the policy import intent. Prefixed with `pii_`.
- `member_number`: The member number assigned by the provider.

### [Provider](docs/api/provider.html)

Results: OK.

SDK operations: `list`, `load`.

Key fields to recognise:

- `description`: Description of the provider.
- `employer_platform_url`: URL to the employer portal/platform for this provider, if available.
- `id`: Unique identifier for the provider. Prefixed with `pr_`.
- `kota_hub_url`: URL to the Kota Hub page for this platform, if configured.
- `logo_url`: URL to the provider&#39;s logo image.

### [Replay](docs/api/replay.html)

Results: OK.

SDK operations: `create`.

### [WebhookEndpoint](docs/api/webhook_endpoint.html)

Results: OK.

SDK operations: `load`.

Key fields to recognise:

- `created_at`: The date and time the endpoint was created
- `endpoint_url`: The registered URL of the endpoint
- `id`: The unique identifier of the endpoint
- `object`: The object type
- `subscribed_events`: The events the endpoint is subscribed to

### [WebhookEndpointResponsePagedList](docs/api/webhook_endpoint_response_paged_list.html)

Results: OK.

SDK operations: `list`.

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
| [AssociatedPerson](docs/api/associated_person.html) | `create` | `POST /employees/{employee_id}/associated_persons` | Required |
| [AssociatedPerson](docs/api/associated_person.html) | `list` | `GET /employees/{employee_id}/associated_persons` | Required |
| [AssociatedPerson](docs/api/associated_person.html) | `load` | `GET /employees/{employee_id}/associated_persons/{associated_person_id}` | Required |
| [AssociatedPerson](docs/api/associated_person.html) | `remove` | `DELETE /employees/{employee_id}/associated_persons/{associated_person_id}` | Required |
| [AssociatedPerson](docs/api/associated_person.html) | `update` | `PUT /employees/{employee_id}/associated_persons/{associated_person_id}` | Required |
| [AssociatedPersonEligibilityResponsePagedList](docs/api/associated_person_eligibility_response_paged_list.html) | `list` | `GET /dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility` | Required |
| [ContributionReport](docs/api/contribution_report.html) | `create` | `POST /contribution_reports/{contribution_report_id}/finalize` | Required |
| [ContributionReport](docs/api/contribution_report.html) | `list` | `GET /contribution_reports` | Required |
| [ContributionReport](docs/api/contribution_report.html) | `load` | `GET /contribution_reports/{contribution_report_id}` | Required |
| [ContributionReportEmployeeBreakdown](docs/api/contribution_report_employee_breakdown.html) | `load` | `GET /contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}` | Required |
| [ContributionReportEmployeeBreakdownResponsePagedList](docs/api/contribution_report_employee_breakdown_response_paged_list.html) | `list` | `GET /contribution_reports/{contribution_report_id}/employee_breakdowns` | Required |
| [CreateHostedSessionToken](docs/api/create_hosted_session_token.html) | `create` | `POST /hosted/sessions` | Required |
| [CreateSessionToken](docs/api/create_session_token.html) | `create` | `POST /embed/sessions` | Required |
| [Dependent](docs/api/dependent.html) | `create` | `POST /dependents_management_intents/{dependents_management_intent_id}/dependents` | Required |
| [Dependent](docs/api/dependent.html) | `remove` | `DELETE /dependents_management_intents/{dependents_management_intent_id}/dependents/{associated_person_id}` | Required |
| [DependentsManagementIntent](docs/api/dependents_management_intent.html) | `create` | `POST /policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent` | Required |
| [DependentsManagementIntent](docs/api/dependents_management_intent.html) | `create` | `POST /enrolment_intents/{enrolment_intent_id}/create_dependents_management_intent` | Required |
| [DependentsManagementIntent](docs/api/dependents_management_intent.html) | `create` | `POST /dependents_management_intents/{dependents_management_intent_id}/cancel` | Required |
| [DependentsManagementIntent](docs/api/dependents_management_intent.html) | `create` | `POST /dependents_management_intents/{dependents_management_intent_id}/confirm` | Required |
| [DependentsManagementIntent](docs/api/dependents_management_intent.html) | `load` | `GET /dependents_management_intents/{dependents_management_intent_id}` | Required |
| [EligibilityCheck](docs/api/eligibility_check.html) | `create` | `POST /groups/{group_id}/eligibility_check` | Required |
| [Employee](docs/api/employee.html) | `create` | `POST /employees/{employee_id}/offboard` | Required |
| [Employee](docs/api/employee.html) | `create` | `POST /employees/{employee_id}/offboard/cancel` | Required |
| [Employee](docs/api/employee.html) | `create` | `POST /employees` | Required |
| [Employee](docs/api/employee.html) | `list` | `GET /employees` | Required |
| [Employee](docs/api/employee.html) | `load` | `GET /employees/{employee_id}` | Required |
| [Employee](docs/api/employee.html) | `update` | `PUT /employees/{employee_id}` | Required |
| [EmployeeHealthInsuranceOffer](docs/api/employee_health_insurance_offer.html) | `load` | `GET /employees/{employee_id}/health_insurance/offers/{employee_offer_id}` | Required |
| [EmployeeHealthInsuranceOfferResponsePagedList](docs/api/employee_health_insurance_offer_response_paged_list.html) | `list` | `GET /employees/{employee_id}/health_insurance/offers` | Required |
| [EmployeeHealthInsurancePolicy](docs/api/employee_health_insurance_policy.html) | `load` | `GET /employees/{employee_id}/health_insurance/policies/{employee_policy_id}` | Required |
| [EmployeeHealthInsurancePolicyResponsePagedList](docs/api/employee_health_insurance_policy_response_paged_list.html) | `list` | `GET /employees/{employee_id}/health_insurance/policies` | Required |
| [Employer](docs/api/employer.html) | `create` | `POST /employers/{employer_id}/offboard` | Required |
| [Employer](docs/api/employer.html) | `create` | `POST /employers` | Required |
| [Employer](docs/api/employer.html) | `list` | `GET /employers` | Required |
| [Employer](docs/api/employer.html) | `load` | `GET /employers/{employer_id}` | Required |
| [Employer](docs/api/employer.html) | `update` | `PUT /employers/{employer_id}` | Required |
| [EmployerHealthInsurancePolicy](docs/api/employer_health_insurance_policy.html) | `load` | `GET /employers/{employer_id}/health_insurance/policies/{employer_policy_id}` | Required |
| [EmployerHealthInsurancePolicyResponsePagedList](docs/api/employer_health_insurance_policy_response_paged_list.html) | `list` | `GET /employers/{employer_id}/health_insurance/policies` | Required |
| [EmployerHealthInsuranceQuote](docs/api/employer_health_insurance_quote.html) | `load` | `GET /employers/{employer_id}/health_insurance/quotes/{employer_quote_id}` | Required |
| [EmployerHealthInsuranceQuoteResponsePagedList](docs/api/employer_health_insurance_quote_response_paged_list.html) | `list` | `GET /employers/{employer_id}/health_insurance/quotes` | Required |
| [EnrolmentIntent](docs/api/enrolment_intent.html) | `create` | `POST /enrolment_intents/{enrolment_intent_id}/confirm` | Required |
| [EnrolmentIntent](docs/api/enrolment_intent.html) | `create` | `POST /enrolment_intents/{enrolment_intent_id}/coverage-selections` | Required |
| [EnrolmentIntent](docs/api/enrolment_intent.html) | `create` | `POST /enrolment_intents/{enrolment_intent_id}/reject` | Required |
| [EnrolmentIntent](docs/api/enrolment_intent.html) | `create` | `POST /enrolment_intents` | Required |
| [EnrolmentIntent](docs/api/enrolment_intent.html) | `list` | `GET /enrolment_intents` | Required |
| [EnrolmentIntent](docs/api/enrolment_intent.html) | `load` | `GET /enrolment_intents/{enrolment_intent_id}` | Required |
| [EnrolmentIntent](docs/api/enrolment_intent.html) | `update` | `PUT /enrolment_intents/{enrolment_intent_id}` | Required |
| [EnrolmentIntentRequirementResponsePagedList](docs/api/enrolment_intent_requirement_response_paged_list.html) | `list` | `GET /enrolment_intents/{enrolment_intent_id}/requirements` | Required |
| [Event](docs/api/event.html) | `list` | `GET /events` | Required |
| [Event](docs/api/event.html) | `load` | `GET /events/{event_id}` | Required |
| [Group](docs/api/group.html) | `create` | `POST /groups` | Required |
| [Group](docs/api/group.html) | `list` | `GET /groups` | Required |
| [Group](docs/api/group.html) | `load` | `GET /groups/{group_id}` | Required |
| [Group](docs/api/group.html) | `update` | `PUT /groups/{group_id}` | Required |
| [GroupEmployee](docs/api/group_employee.html) | `create` | `POST /groups/{group_id}/employees` | Required |
| [GroupEmployeeResponsePagedList](docs/api/group_employee_response_paged_list.html) | `list` | `GET /groups/{group_id}/employees` | Required |
| [GroupPolicy](docs/api/group_policy.html) | `list` | `GET /group_policies` | Required |
| [GroupPolicy](docs/api/group_policy.html) | `load` | `GET /group_policies/{group_policy_id}` | Required |
| [GroupPolicyIntent](docs/api/group_policy_intent.html) | `create` | `POST /group_policy_intents` | Required |
| [GroupPolicyIntent](docs/api/group_policy_intent.html) | `list` | `GET /group_policy_intents` | Required |
| [GroupPolicyIntent](docs/api/group_policy_intent.html) | `load` | `GET /group_policy_intents/{group_policy_intent_id}` | Required |
| [GroupPolicyIntentRequirementResponsePagedList](docs/api/group_policy_intent_requirement_response_paged_list.html) | `list` | `GET /group_policy_intents/{group_policy_intent_id}/requirements` | Required |
| [GroupQuote](docs/api/group_quote.html) | `load` | `GET /group_quote_intents/{group_quote_intent_id}/quote` | Required |
| [GroupQuoteIntent](docs/api/group_quote_intent.html) | `create` | `POST /group_quote_intents/{group_quote_intent_id}/reject` | Required |
| [GroupQuoteIntent](docs/api/group_quote_intent.html) | `create` | `POST /group_quote_intents` | Required |
| [GroupQuoteIntent](docs/api/group_quote_intent.html) | `list` | `GET /group_quote_intents` | Required |
| [GroupQuoteIntent](docs/api/group_quote_intent.html) | `load` | `GET /group_quote_intents/{group_quote_intent_id}` | Required |
| [GroupQuoteIntentRequirementResponsePagedList](docs/api/group_quote_intent_requirement_response_paged_list.html) | `list` | `GET /group_quote_intents/{group_quote_intent_id}/requirements` | Required |
| [Plan](docs/api/plan.html) | `list` | `GET /plans` | Required |
| [Plan](docs/api/plan.html) | `load` | `GET /plans/{plan_id}` | Required |
| [Policy](docs/api/policy.html) | `list` | `GET /policies` | Required |
| [Policy](docs/api/policy.html) | `load` | `GET /policies/{policy_id}` | Required |
| [PolicyAmendmentIntent](docs/api/policy_amendment_intent.html) | `create` | `POST /policies/{policy_id}/policy_amendment_intents/{id}/cancel` | Required |
| [PolicyAmendmentIntent](docs/api/policy_amendment_intent.html) | `create` | `POST /policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}/confirm` | Required |
| [PolicyAmendmentIntent](docs/api/policy_amendment_intent.html) | `create` | `POST /policies/{policy_id}/policy_amendment_intents` | Required |
| [PolicyAmendmentIntent](docs/api/policy_amendment_intent.html) | `list` | `GET /policies/{policy_id}/policy_amendment_intents` | Required |
| [PolicyAmendmentIntent](docs/api/policy_amendment_intent.html) | `load` | `GET /policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}` | Required |
| [PolicyImportIntent](docs/api/policy_import_intent.html) | `create` | `POST /policy_import_intents` | Required |
| [PolicyImportIntent](docs/api/policy_import_intent.html) | `list` | `GET /policy_import_intents` | Required |
| [PolicyImportIntent](docs/api/policy_import_intent.html) | `load` | `GET /policy_import_intents/{policy_import_intent_id}` | Required |
| [Provider](docs/api/provider.html) | `list` | `GET /providers` | Required |
| [Provider](docs/api/provider.html) | `load` | `GET /providers/{provider_id}` | Required |
| [Replay](docs/api/replay.html) | `create` | `POST /events/{event_id}/replay` | Required |
| [WebhookEndpoint](docs/api/webhook_endpoint.html) | `load` | `GET /webhooks/endpoints/{webhook_endpoint_id}` | Required |
| [WebhookEndpointResponsePagedList](docs/api/webhook_endpoint_response_paged_list.html) | `list` | `GET /webhooks/endpoints` | Required |

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
| [Golang](docs/sdks/go.html) | `go/` | Build from source |
| [JavaScript](docs/sdks/js.html) | `js/` | Build from source |
| [Lua](docs/sdks/lua.html) | `lua/` | Build from source |
| [PHP](docs/sdks/php.html) | `php/` | Build from source |
| [Python](docs/sdks/py.html) | `py/` | Build from source |
| [TypeScript](docs/sdks/ts.html) | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### [Go CLI](docs/tools/go-cli.html)

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### [Go MCP server](docs/tools/go-mcp.html)

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `kota_list`: List records for an entity. Supported entities: `associated_person`, `associated_person_eligibility_response_paged_list`, `contribution_report`, `contribution_report_employee_breakdown_response_paged_list`, `employee`, `employee_health_insurance_offer_response_paged_list`, `employee_health_insurance_policy_response_paged_list`, `employer`, `employer_health_insurance_policy_response_paged_list`, `employer_health_insurance_quote_response_paged_list`, `enrolment_intent`, `enrolment_intent_requirement_response_paged_list`, `event`, `group`, `group_employee_response_paged_list`, `group_policy`, `group_policy_intent`, `group_policy_intent_requirement_response_paged_list`, `group_quote_intent`, `group_quote_intent_requirement_response_paged_list`, `plan`, `policy`, `policy_amendment_intent`, `policy_import_intent`, `provider`, `webhook_endpoint_response_paged_list`.
- `kota_load`: Load one record for an entity. Supported entities: `associated_person`, `contribution_report`, `contribution_report_employee_breakdown`, `dependents_management_intent`, `employee`, `employee_health_insurance_offer`, `employee_health_insurance_policy`, `employer`, `employer_health_insurance_policy`, `employer_health_insurance_quote`, `enrolment_intent`, `event`, `group`, `group_policy`, `group_policy_intent`, `group_quote`, `group_quote_intent`, `plan`, `policy`, `policy_amendment_intent`, `policy_import_intent`, `provider`, `webhook_endpoint`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- [`debug`](docs/features/debug.html): Request/response capture ring buffer for debugging
- [`idempotency`](docs/features/idempotency.html): Idempotency keys for safe retries of mutating operations
- [`metrics`](docs/features/metrics.html): Statistics capture: per-operation counters and latency
- [`paging`](docs/features/paging.html): Pagination signals for list operations
- [`ratelimit`](docs/features/ratelimit.html): Client-side rate limiting via a token bucket
- [`retry`](docs/features/retry.html): Automatic retry of transient failures with exponential backoff
- [`test`](docs/features/test.html): In-memory mock transport for testing without a live server
- [`timeout`](docs/features/timeout.html): Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the [first-call guide](docs/guides/first-call.html) for the setup sequence.
- Read the [authentication guide](docs/guides/authentication.html) before using protected routes.
- Use the [API reference](docs/api/index.html) for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

