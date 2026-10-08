-- Typed models for the Kota SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
-- params (op.<name>.points[].g.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class AssociatedPerson
---@field date_of_birth string
---@field email? nil|string
---@field employee_id string
---@field first_name string
---@field id string
---@field last_name string
---@field object? string
---@field phone_number? nil|string
---@field platform_id? string
---@field relationship_type string
---@field sex_at_birth string

---@class AssociatedPersonLoadMatch
---@field employee_id string
---@field id string

---@class AssociatedPersonListMatch
---@field employee_id string
---@field page? number
---@field page_size? number

---@class AssociatedPersonCreateData
---@field employee_id string
---@field date_of_birth string
---@field email? nil|string
---@field first_name string
---@field id string
---@field last_name string
---@field object? string
---@field phone_number? nil|string
---@field platform_id? string
---@field relationship_type string
---@field sex_at_birth string

---@class AssociatedPersonUpdateData
---@field employee_id string
---@field id string
---@field date_of_birth? string
---@field email? nil|string
---@field first_name? string
---@field last_name? string
---@field object? string
---@field phone_number? nil|string
---@field platform_id? string
---@field relationship_type? string
---@field sex_at_birth? string

---@class AssociatedPersonRemoveMatch
---@field employee_id string
---@field id string

---@class AssociatedPersonEligibilityResponsePagedList
---@field associated_person_id string
---@field date_of_birth string
---@field eligibility_status string
---@field first_name string
---@field ineligibility_reason? nil|string
---@field last_name string
---@field object? string
---@field relationship string
---@field sex_at_birth string

---@class AssociatedPersonEligibilityResponsePagedListListMatch
---@field dependents_management_intent_id string
---@field page? number
---@field page_size? number

---@class ContributionReport
---@field created_at string
---@field employer_id string
---@field external_customer_id? nil|string
---@field finalized_at? nil|string
---@field id string
---@field last_updated_at string
---@field object? string
---@field period any
---@field status string

---@class ContributionReportLoadMatch
---@field id string

---@class ContributionReportListMatch
---@field employer_id? string
---@field external_customer_id? string
---@field month? number
---@field page? number
---@field page_size? number
---@field status? string
---@field year? number

---@class ContributionReportCreateData
---@field id string
---@field created_at string
---@field employer_id string
---@field external_customer_id? nil|string
---@field finalized_at? nil|string
---@field last_updated_at string
---@field object? string
---@field period any
---@field status string

---@class ContributionReportEmployeeBreakdown
---@field contribution_report_id string
---@field created_at string
---@field currency string
---@field employee_id string
---@field employer_id string
---@field external_customer_id? nil|string
---@field finalized_at? nil|string
---@field health_insurance any
---@field id? string
---@field last_updated_at string
---@field object? string
---@field period any
---@field status string

---@class ContributionReportEmployeeBreakdownLoadMatch
---@field contribution_report_id string
---@field id string

---@class ContributionReportEmployeeBreakdownResponsePagedList
---@field id? string

---@class ContributionReportEmployeeBreakdownResponsePagedListListMatch
---@field id string
---@field page? number
---@field page_size? number

---@class CreateHostedSessionToken
---@field employee_id string
---@field employer_id string
---@field expiry string
---@field link string

---@class CreateHostedSessionTokenCreateData
---@field employee_id string
---@field employer_id string
---@field expiry string
---@field link string

---@class CreateSessionToken
---@field employee_id? nil|string
---@field employer_id string
---@field expiry string
---@field external_customer_id? nil|string
---@field token string

---@class CreateSessionTokenCreateData
---@field employee_id? nil|string
---@field employer_id string
---@field expiry string
---@field external_customer_id? nil|string
---@field token string

---@class Dependent
---@field action_required? nil
---@field associated_person_ids table
---@field coverage_options? nil|table
---@field dependent_coverage_selections? nil|table
---@field dependents table
---@field disclosures table
---@field id string
---@field object? string
---@field parent_intent_id string
---@field parent_intent_type string
---@field plan any
---@field status string

---@class DependentCreateData
---@field dependents_management_intent_id string
---@field action_required? nil
---@field associated_person_ids table
---@field coverage_options? nil|table
---@field dependent_coverage_selections? nil|table
---@field dependents table
---@field disclosures table
---@field id string
---@field object? string
---@field parent_intent_id string
---@field parent_intent_type string
---@field plan any
---@field status string

---@class DependentRemoveMatch
---@field dependents_management_intent_id string
---@field id string

---@class DependentsManagementIntent
---@field action_required? nil
---@field coverage_options? nil|table
---@field dependents table
---@field disclosures table
---@field id string
---@field object? string
---@field parent_intent_id string
---@field parent_intent_type string
---@field plan any
---@field status string

---@class DependentsManagementIntentLoadMatch
---@field id string

---@class DependentsManagementIntentCreateData
---@field enrolment_intent_id string
---@field action_required? nil
---@field coverage_options? nil|table
---@field dependents table
---@field disclosures table
---@field id string
---@field object? string
---@field parent_intent_id string
---@field parent_intent_type string
---@field plan any
---@field status string

---@class EligibilityCheck
---@field eligibility_status string
---@field employee_id string
---@field object? string
---@field plan any
---@field provider any
---@field reasons table

---@class EligibilityCheckCreateData
---@field group_id string
---@field eligibility_status string
---@field employee_id string
---@field object? string
---@field plan any
---@field provider any
---@field reasons table

---@class Employee
---@field bank_account? nil
---@field date_of_birth string
---@field earliest_benefits_start_date? nil|string
---@field email string
---@field employer_id? string
---@field external_customer_id? nil|string
---@field first_name string
---@field home_address? nil
---@field id? string
---@field last_name string
---@field metadata? nil|table
---@field national_tax_id string
---@field nationality? nil
---@field object? string
---@field offboard_on? nil|string
---@field phone_number string
---@field platform_id? string
---@field sex_at_birth string
---@field start_on? string
---@field status? string

---@class EmployeeLoadMatch
---@field id string

---@class EmployeeListMatch
---@field employer_id? string
---@field external_customer_id? string
---@field filter? string
---@field metadata_id? string
---@field page? number
---@field page_size? number

---@class EmployeeCreateData
---@field bank_account? nil
---@field date_of_birth string
---@field earliest_benefits_start_date? nil|string
---@field email string
---@field employer_id? string
---@field external_customer_id? nil|string
---@field first_name string
---@field home_address? nil
---@field id? string
---@field last_name string
---@field metadata? nil|table
---@field national_tax_id string
---@field nationality? nil
---@field object? string
---@field offboard_on? nil|string
---@field phone_number string
---@field platform_id? string
---@field sex_at_birth string
---@field start_on? string
---@field status? string

---@class EmployeeUpdateData
---@field id string
---@field bank_account? nil
---@field date_of_birth? string
---@field earliest_benefits_start_date? nil|string
---@field email? string
---@field employer_id? string
---@field external_customer_id? nil|string
---@field first_name? string
---@field home_address? nil
---@field last_name? string
---@field metadata? nil|table
---@field national_tax_id? string
---@field nationality? nil
---@field object? string
---@field offboard_on? nil|string
---@field phone_number? string
---@field platform_id? string
---@field sex_at_birth? string
---@field start_on? string
---@field status? string

---@class EmployeeHealthInsuranceOffer
---@field coverage_level any
---@field employee_id string
---@field employer_id string
---@field external_customer_id? nil|string
---@field id string
---@field object? string
---@field required_action? nil
---@field status string

---@class EmployeeHealthInsuranceOfferLoadMatch
---@field employee_id string
---@field id string

---@class EmployeeHealthInsuranceOfferResponsePagedList
---@field coverage_level any
---@field employee_id string
---@field employer_id string
---@field external_customer_id? nil|string
---@field id string
---@field object? string
---@field required_action? nil
---@field status string

---@class EmployeeHealthInsuranceOfferResponsePagedListListMatch
---@field employee_id string
---@field page? number
---@field page_size? number

---@class EmployeeHealthInsurancePolicy
---@field cancellation_date? nil|string
---@field coverage_level any
---@field employee_id string
---@field employer_id string
---@field end_date string
---@field enrolled_dependants_count number
---@field enrolment_type string
---@field estimated_gross_premium any
---@field external_customer_id? nil|string
---@field id string
---@field object? string
---@field opt_out_deadline_date string
---@field policy_number? nil|string
---@field renewal any
---@field start_date string
---@field status string

---@class EmployeeHealthInsurancePolicyLoadMatch
---@field employee_id string
---@field id string

---@class EmployeeHealthInsurancePolicyResponsePagedList
---@field cancellation_date? nil|string
---@field coverage_level any
---@field employee_id string
---@field employer_id string
---@field end_date string
---@field enrolled_dependants_count number
---@field enrolment_type string
---@field estimated_gross_premium any
---@field external_customer_id? nil|string
---@field id string
---@field object? string
---@field opt_out_deadline_date string
---@field policy_number? nil|string
---@field renewal any
---@field start_date string
---@field status string

---@class EmployeeHealthInsurancePolicyResponsePagedListListMatch
---@field employee_id string
---@field page? number
---@field page_size? number
---@field status? string

---@class Employer
---@field contact any
---@field earliest_benefits_start_date? nil|string
---@field id string
---@field legal_address any
---@field legal_name string
---@field metadata? nil|table
---@field object? string
---@field offboard_on? nil|string
---@field platform_id? string
---@field registration_number? nil|string
---@field status? string

---@class EmployerLoadMatch
---@field id string

---@class EmployerListMatch
---@field filter? string
---@field page? number
---@field page_size? number

---@class EmployerCreateData
---@field contact any
---@field earliest_benefits_start_date? nil|string
---@field id string
---@field legal_address any
---@field legal_name string
---@field metadata? nil|table
---@field object? string
---@field offboard_on? nil|string
---@field platform_id? string
---@field registration_number? nil|string
---@field status? string

---@class EmployerUpdateData
---@field id string
---@field contact? any
---@field earliest_benefits_start_date? nil|string
---@field legal_address? any
---@field legal_name? string
---@field metadata? nil|table
---@field object? string
---@field offboard_on? nil|string
---@field platform_id? string
---@field registration_number? nil|string
---@field status? string

---@class EmployerHealthInsurancePolicy
---@field cancellation_date? nil|string
---@field coverage_levels table
---@field employer_cancellation_period_length number
---@field employer_id string
---@field end_date string
---@field enrolment_type string
---@field group_policy_number? nil|string
---@field id string
---@field object? string
---@field renewal any
---@field start_date string
---@field status string

---@class EmployerHealthInsurancePolicyLoadMatch
---@field employer_id string
---@field id string

---@class EmployerHealthInsurancePolicyResponsePagedList
---@field cancellation_date? nil|string
---@field coverage_levels table
---@field employer_cancellation_period_length number
---@field employer_id string
---@field end_date string
---@field enrolment_type string
---@field group_policy_number? nil|string
---@field id string
---@field object? string
---@field renewal any
---@field start_date string
---@field status string

---@class EmployerHealthInsurancePolicyResponsePagedListListMatch
---@field employer_id string
---@field page? number
---@field page_size? number
---@field status? string

---@class EmployerHealthInsuranceQuote
---@field coverage_levels table
---@field employer_id string
---@field id string
---@field object? string
---@field quoted_at string
---@field required_action? nil
---@field status string

---@class EmployerHealthInsuranceQuoteLoadMatch
---@field employer_id string
---@field id string

---@class EmployerHealthInsuranceQuoteResponsePagedList
---@field coverage_levels table
---@field employer_id string
---@field id string
---@field object? string
---@field quoted_at string
---@field required_action? nil
---@field status string

---@class EmployerHealthInsuranceQuoteResponsePagedListListMatch
---@field employer_id string
---@field page? number
---@field page_size? number
---@field status? string

---@class EnrolmentIntent
---@field action_required? nil
---@field coverage_selections? nil|table
---@field desired_policy_start_date? nil|string
---@field disclosures table
---@field employee_id string
---@field enrolment_date? nil|string
---@field force_confirmation boolean
---@field group_id string
---@field id string
---@field ineligibility_reason? nil
---@field object? string
---@field pending_confirmation? nil
---@field policy_configuration? nil
---@field policy_enrolments table
---@field status string

---@class EnrolmentIntentLoadMatch
---@field id string

---@class EnrolmentIntentListMatch
---@field employee_id? string
---@field group_id? string
---@field page? number
---@field page_size? number
---@field status? string

---@class EnrolmentIntentCreateData
---@field action_required? nil
---@field coverage_selections? nil|table
---@field desired_policy_start_date? nil|string
---@field disclosures table
---@field employee_id string
---@field enrolment_date? nil|string
---@field force_confirmation boolean
---@field group_id string
---@field id string
---@field ineligibility_reason? nil
---@field object? string
---@field pending_confirmation? nil
---@field policy_configuration? nil
---@field policy_enrolments table
---@field status string

---@class EnrolmentIntentUpdateData
---@field id string
---@field action_required? nil
---@field coverage_selections? nil|table
---@field desired_policy_start_date? nil|string
---@field disclosures? table
---@field employee_id? string
---@field enrolment_date? nil|string
---@field force_confirmation? boolean
---@field group_id? string
---@field ineligibility_reason? nil
---@field object? string
---@field pending_confirmation? nil
---@field policy_configuration? nil
---@field policy_enrolments? table
---@field status? string

---@class EnrolmentIntentRequirementResponsePagedList
---@field id? string

---@class EnrolmentIntentRequirementResponsePagedListListMatch
---@field id string
---@field object_id? string
---@field object_type? any
---@field page? number
---@field page_size? number

---@class Event
---@field api_version? string
---@field created string
---@field data nil
---@field id string
---@field platform_id string
---@field type string

---@class EventLoadMatch
---@field id string

---@class EventListMatch
---@field created_after? string
---@field order_direction? any
---@field page? number
---@field page_size? number
---@field version? any

---@class EventCreateData
---@field id string
---@field api_version? string
---@field created string
---@field data nil
---@field platform_id string
---@field type string

---@class Group
---@field description? nil|string
---@field employer_id string
---@field enrolment_type string
---@field group_policy_ids table
---@field group_policy_intent_ids table
---@field group_quote_intent_ids table
---@field group_type string
---@field id string
---@field name string
---@field object? string
---@field status string

---@class GroupLoadMatch
---@field id string

---@class GroupListMatch
---@field employer_id? string
---@field page? number
---@field page_size? number
---@field status? string

---@class GroupCreateData
---@field description? nil|string
---@field employer_id string
---@field enrolment_type string
---@field group_policy_ids table
---@field group_policy_intent_ids table
---@field group_quote_intent_ids table
---@field group_type string
---@field id string
---@field name string
---@field object? string
---@field status string

---@class GroupUpdateData
---@field id string
---@field description? nil|string
---@field employer_id? string
---@field enrolment_type? string
---@field group_policy_ids? table
---@field group_policy_intent_ids? table
---@field group_quote_intent_ids? table
---@field group_type? string
---@field name? string
---@field object? string
---@field status? string

---@class GroupEmployee
---@field create_enrolment_intents? nil|boolean
---@field desired_policy_start_date? nil|string
---@field eligibility_status string
---@field employee_id string
---@field enrolment_date? nil|string
---@field enrolment_status string
---@field enrolments table
---@field group_id string
---@field id string
---@field object? string
---@field policies table
---@field policy_configuration? nil
---@field scheduled_group_transitions table

---@class GroupEmployeeCreateData
---@field id string
---@field create_enrolment_intents? nil|boolean
---@field desired_policy_start_date? nil|string
---@field eligibility_status string
---@field employee_id string
---@field enrolment_date? nil|string
---@field enrolment_status string
---@field enrolments table
---@field group_id string
---@field object? string
---@field policies table
---@field policy_configuration? nil
---@field scheduled_group_transitions table

---@class GroupEmployeeResponsePagedList
---@field id? string

---@class GroupEmployeeResponsePagedListListMatch
---@field id string
---@field employee_id? string
---@field page? number
---@field page_size? number

---@class GroupPolicy
---@field cancellation_date? nil|string
---@field disclosures table
---@field employer_id? string
---@field end_date? nil|string
---@field group_id? string
---@field health_insurance? nil
---@field id string
---@field object? string
---@field plan any
---@field provider any
---@field start_date string
---@field status string
---@field type string

---@class GroupPolicyLoadMatch
---@field id string

---@class GroupPolicyListMatch
---@field employer_id? string
---@field group_id? string
---@field page? number
---@field page_size? number
---@field status? string

---@class GroupPolicyIntent
---@field action_required? nil
---@field consent_approvals? nil|table
---@field cost_sharing? nil
---@field disclosures table
---@field due_date? nil|string
---@field group_id string
---@field id string
---@field object? string
---@field plan_id string
---@field quote_intent_id string
---@field status string

---@class GroupPolicyIntentLoadMatch
---@field id string

---@class GroupPolicyIntentListMatch
---@field group_id? string
---@field page? number
---@field page_size? number
---@field plan_id? string
---@field status? string

---@class GroupPolicyIntentCreateData
---@field action_required? nil
---@field consent_approvals? nil|table
---@field cost_sharing? nil
---@field disclosures table
---@field due_date? nil|string
---@field group_id string
---@field id string
---@field object? string
---@field plan_id string
---@field quote_intent_id string
---@field status string

---@class GroupPolicyIntentRequirementResponsePagedList
---@field id? string

---@class GroupPolicyIntentRequirementResponsePagedListListMatch
---@field id string
---@field object_id? string
---@field object_type? any
---@field page? number
---@field page_size? number

---@class GroupQuote
---@field cost_sharing any
---@field currency string
---@field employee_count number
---@field expires_at string
---@field generated_at string
---@field object? string
---@field pdf_expires_at? nil|string
---@field pdf_url? nil|string
---@field total_monthly_premium number

---@class GroupQuoteLoadMatch
---@field group_quote_intent_id string

---@class GroupQuoteIntent
---@field action_required? nil
---@field consent_links table
---@field cost_sharing? nil
---@field coverage_selections? nil|table
---@field disclosures table
---@field expected_start_date? nil|string
---@field group_id string
---@field id string
---@field object? string
---@field plan_id string
---@field status string

---@class GroupQuoteIntentLoadMatch
---@field id string

---@class GroupQuoteIntentListMatch
---@field group_id? string
---@field page? number
---@field page_size? number
---@field plan_id? string
---@field status? string

---@class GroupQuoteIntentCreateData
---@field action_required? nil
---@field consent_links table
---@field cost_sharing? nil
---@field coverage_selections? nil|table
---@field disclosures table
---@field expected_start_date? nil|string
---@field group_id string
---@field id string
---@field object? string
---@field plan_id string
---@field status string

---@class GroupQuoteIntentRequirementResponsePagedList
---@field id? string

---@class GroupQuoteIntentRequirementResponsePagedListListMatch
---@field id string
---@field object_id? string
---@field object_type? any
---@field page? number
---@field page_size? number

---@class Plan
---@field available_from string
---@field available_to? nil|string
---@field country string
---@field coverage_options? nil|table
---@field description string
---@field disclosures table
---@field documents table
---@field eligible_count? nil|number
---@field employee_eligibility_criteria table
---@field employer_eligibility_criteria table
---@field health_insurance? nil
---@field id string
---@field ineligible_count? nil|number
---@field name string
---@field object? string
---@field provider any
---@field total_count? nil|number
---@field type string

---@class PlanLoadMatch
---@field id string
---@field group_id? string
---@field start_date? string

---@class PlanListMatch
---@field available_on? string
---@field country? any
---@field group_id? string
---@field page? number
---@field page_size? number
---@field provider_id? string
---@field sort_by? any
---@field sort_dir? any
---@field start_date? string
---@field type? string

---@class Policy
---@field bundling_type string
---@field cancellation_date? nil|string
---@field disclosures table
---@field employee_id string
---@field end_date? nil|string
---@field group_id string
---@field group_policy_id string
---@field health_insurance? nil
---@field id string
---@field object? string
---@field plan any
---@field provider any
---@field start_date string
---@field status string
---@field type string

---@class PolicyLoadMatch
---@field id string

---@class PolicyListMatch
---@field employee_id? string
---@field group_id? string
---@field group_policy_id? string
---@field page? number
---@field page_size? number
---@field status? string

---@class PolicyAmendmentIntent
---@field amendment_reason any
---@field disclosures table
---@field id string
---@field object? string
---@field pending_confirmation? nil
---@field policy_id string
---@field processing_error? nil
---@field requested_changes table
---@field required_action? nil
---@field status string

---@class PolicyAmendmentIntentLoadMatch
---@field id string
---@field policy_id string

---@class PolicyAmendmentIntentListMatch
---@field id string
---@field page? number
---@field page_size? number
---@field status? string

---@class PolicyAmendmentIntentCreateData
---@field id string
---@field amendment_reason any
---@field disclosures table
---@field object? string
---@field pending_confirmation? nil
---@field policy_id string
---@field processing_error? nil
---@field requested_changes table
---@field required_action? nil
---@field status string

---@class PolicyImportIntent
---@field associated_persons table
---@field employee_id string
---@field group_id string
---@field id string
---@field member_number string
---@field object? string
---@field policy_end_date? nil|string
---@field policy_start_date string
---@field provider_policy_number string
---@field status string

---@class PolicyImportIntentLoadMatch
---@field id string

---@class PolicyImportIntentListMatch
---@field employee_id? string
---@field group_id? string
---@field page? number
---@field page_size? number
---@field status? string

---@class PolicyImportIntentCreateData
---@field associated_persons table
---@field employee_id string
---@field group_id string
---@field id string
---@field member_number string
---@field object? string
---@field policy_end_date? nil|string
---@field policy_start_date string
---@field provider_policy_number string
---@field status string

---@class Provider
---@field description string
---@field employer_platform_url? nil|string
---@field id string
---@field kota_hub_url? nil|string
---@field logo_url string
---@field name string
---@field object? string
---@field support_phone string
---@field supported_countries table
---@field website_url string

---@class ProviderLoadMatch
---@field id string

---@class ProviderListMatch
---@field country? any
---@field page? number
---@field page_size? number

---@class WebhookEndpoint
---@field created_at string
---@field endpoint_url string
---@field id string
---@field object? string
---@field subscribed_events table

---@class WebhookEndpointLoadMatch
---@field id string

---@class WebhookEndpointListMatch
---@field page? number
---@field page_size? number

local M = {}

return M
