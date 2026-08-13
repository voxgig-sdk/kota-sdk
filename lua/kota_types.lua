-- Typed models for the Kota SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
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
---@field relationship_type any
---@field sex_at_birth any

---@class AssociatedPersonLoadMatch
---@field employee_id string
---@field id string

---@class AssociatedPersonListMatch
---@field employee_id string

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
---@field relationship_type any
---@field sex_at_birth any

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
---@field relationship_type? any
---@field sex_at_birth? any

---@class AssociatedPersonRemoveMatch
---@field employee_id string
---@field id string

---@class AssociatedPersonEligibilityResponsePagedList
---@field associated_person_id string
---@field date_of_birth string
---@field eligibility_status any
---@field first_name string
---@field ineligibility_reason? nil|string
---@field last_name string
---@field object? string
---@field relationship any
---@field sex_at_birth any

---@class AssociatedPersonEligibilityResponsePagedListListMatch
---@field dependents_management_intent_id string

---@class ContributionReport
---@field created_at string
---@field employer_id string
---@field external_customer_id? nil|string
---@field finalized_at? nil|string
---@field id string
---@field last_updated_at string
---@field object? string
---@field period any
---@field status any

---@class ContributionReportLoadMatch
---@field id string

---@class ContributionReportListMatch
---@field created_at? string
---@field employer_id? string
---@field external_customer_id? nil|string
---@field finalized_at? nil|string
---@field id? string
---@field last_updated_at? string
---@field object? string
---@field period? any
---@field status? any

---@class ContributionReportCreateData
---@field id string
---@field created_at string
---@field employer_id string
---@field external_customer_id? nil|string
---@field finalized_at? nil|string
---@field last_updated_at string
---@field object? string
---@field period any
---@field status any

---@class ContributionReportEmployeeBreakdown
---@field contribution_report_id string
---@field created_at string
---@field currency any
---@field employee_id string
---@field employer_id string
---@field external_customer_id? nil|string
---@field finalized_at? nil|string
---@field health_insurance any
---@field last_updated_at string
---@field object? string
---@field period any
---@field status any

---@class ContributionReportEmployeeBreakdownLoadMatch
---@field contribution_report_id string
---@field id string

---@class ContributionReportEmployeeBreakdownResponsePagedList
---@field contribution_report_id string
---@field created_at string
---@field currency any
---@field employee_id string
---@field employer_id string
---@field external_customer_id? nil|string
---@field finalized_at? nil|string
---@field health_insurance any
---@field last_updated_at string
---@field object? string
---@field period any
---@field status any

---@class ContributionReportEmployeeBreakdownResponsePagedListListMatch
---@field id string

---@class CreateHostedSessionToken
---@field expiry string
---@field link string

---@class CreateHostedSessionTokenCreateData
---@field expiry string
---@field link string

---@class CreateSessionToken
---@field expiry string
---@field token string

---@class CreateSessionTokenCreateData
---@field expiry string
---@field token string

---@class Dependent
---@field action_required? nil
---@field coverage_options? nil|table
---@field dependents table
---@field disclosures table
---@field id string
---@field object? string
---@field parent_intent_id string
---@field parent_intent_type any
---@field plan any
---@field status any

---@class DependentCreateData
---@field dependents_management_intent_id string
---@field action_required? nil
---@field coverage_options? nil|table
---@field dependents table
---@field disclosures table
---@field id string
---@field object? string
---@field parent_intent_id string
---@field parent_intent_type any
---@field plan any
---@field status any

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
---@field parent_intent_type any
---@field plan any
---@field status any

---@class DependentsManagementIntentLoadMatch
---@field id string

---@class DependentsManagementIntentCreateData
---@field policy_amendment_intent_id? string
---@field policy_id? string
---@field enrolment_intent_id? string
---@field action_required? nil
---@field coverage_options? nil|table
---@field dependents table
---@field disclosures table
---@field id string
---@field object? string
---@field parent_intent_id string
---@field parent_intent_type any
---@field plan any
---@field status any

---@class EligibilityCheck
---@field eligibility_status any
---@field object? string
---@field plan any
---@field provider any
---@field reasons table

---@class EligibilityCheckCreateData
---@field group_id string
---@field eligibility_status any
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
---@field sex_at_birth any
---@field start_on? string
---@field status? any

---@class EmployeeLoadMatch
---@field id string

---@class EmployeeListMatch
---@field bank_account? nil
---@field date_of_birth? string
---@field earliest_benefits_start_date? nil|string
---@field email? string
---@field employer_id? string
---@field external_customer_id? nil|string
---@field first_name? string
---@field home_address? nil
---@field id? string
---@field last_name? string
---@field metadata? nil|table
---@field national_tax_id? string
---@field nationality? nil
---@field object? string
---@field offboard_on? nil|string
---@field phone_number? string
---@field platform_id? string
---@field sex_at_birth? any
---@field start_on? string
---@field status? any

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
---@field sex_at_birth any
---@field start_on? string
---@field status? any

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
---@field sex_at_birth? any
---@field start_on? string
---@field status? any

---@class EmployeeHealthInsuranceOffer
---@field coverage_level any
---@field employee_id string
---@field employer_id string
---@field external_customer_id? nil|string
---@field id string
---@field object? string
---@field required_action? nil
---@field status any

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
---@field status any

---@class EmployeeHealthInsuranceOfferResponsePagedListListMatch
---@field employee_id string

---@class EmployeeHealthInsurancePolicy
---@field cancellation_date? nil|string
---@field coverage_level any
---@field employee_id string
---@field employer_id string
---@field end_date string
---@field enrolled_dependants_count number
---@field enrolment_type any
---@field estimated_gross_premium any
---@field external_customer_id? nil|string
---@field id string
---@field object? string
---@field opt_out_deadline_date string
---@field policy_number? nil|string
---@field renewal any
---@field start_date string
---@field status any

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
---@field enrolment_type any
---@field estimated_gross_premium any
---@field external_customer_id? nil|string
---@field id string
---@field object? string
---@field opt_out_deadline_date string
---@field policy_number? nil|string
---@field renewal any
---@field start_date string
---@field status any

---@class EmployeeHealthInsurancePolicyResponsePagedListListMatch
---@field employee_id string

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
---@field status? any

---@class EmployerLoadMatch
---@field id string

---@class EmployerListMatch
---@field contact? any
---@field earliest_benefits_start_date? nil|string
---@field id? string
---@field legal_address? any
---@field legal_name? string
---@field metadata? nil|table
---@field object? string
---@field offboard_on? nil|string
---@field platform_id? string
---@field registration_number? nil|string
---@field status? any

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
---@field status? any

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
---@field status? any

---@class EmployerHealthInsurancePolicy
---@field cancellation_date? nil|string
---@field coverage_levels table
---@field employer_cancellation_period_length number
---@field employer_id string
---@field end_date string
---@field enrolment_type any
---@field group_policy_number? nil|string
---@field id string
---@field object? string
---@field renewal any
---@field start_date string
---@field status any

---@class EmployerHealthInsurancePolicyLoadMatch
---@field employer_id string
---@field id string

---@class EmployerHealthInsurancePolicyResponsePagedList
---@field cancellation_date? nil|string
---@field coverage_levels table
---@field employer_cancellation_period_length number
---@field employer_id string
---@field end_date string
---@field enrolment_type any
---@field group_policy_number? nil|string
---@field id string
---@field object? string
---@field renewal any
---@field start_date string
---@field status any

---@class EmployerHealthInsurancePolicyResponsePagedListListMatch
---@field employer_id string

---@class EmployerHealthInsuranceQuote
---@field coverage_levels table
---@field employer_id string
---@field id string
---@field object? string
---@field quoted_at string
---@field required_action? nil
---@field status any

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
---@field status any

---@class EmployerHealthInsuranceQuoteResponsePagedListListMatch
---@field employer_id string

---@class EnrolmentIntent
---@field action_required? nil
---@field disclosures table
---@field employee_id string
---@field force_confirmation boolean
---@field group_id string
---@field id string
---@field ineligibility_reason? nil
---@field object? string
---@field pending_confirmation? nil
---@field policy_configuration? nil
---@field policy_enrolments table
---@field status any

---@class EnrolmentIntentLoadMatch
---@field id string

---@class EnrolmentIntentListMatch
---@field action_required? nil
---@field disclosures? table
---@field employee_id? string
---@field force_confirmation? boolean
---@field group_id? string
---@field id? string
---@field ineligibility_reason? nil
---@field object? string
---@field pending_confirmation? nil
---@field policy_configuration? nil
---@field policy_enrolments? table
---@field status? any

---@class EnrolmentIntentCreateData
---@field action_required? nil
---@field disclosures table
---@field employee_id string
---@field force_confirmation boolean
---@field group_id string
---@field id string
---@field ineligibility_reason? nil
---@field object? string
---@field pending_confirmation? nil
---@field policy_configuration? nil
---@field policy_enrolments table
---@field status any

---@class EnrolmentIntentUpdateData
---@field id string
---@field action_required? nil
---@field disclosures? table
---@field employee_id? string
---@field force_confirmation? boolean
---@field group_id? string
---@field ineligibility_reason? nil
---@field object? string
---@field pending_confirmation? nil
---@field policy_configuration? nil
---@field policy_enrolments? table
---@field status? any

---@class EnrolmentIntentRequirementResponsePagedList
---@field id string
---@field is_fulfilled boolean
---@field object? string
---@field object_id string
---@field object_type any
---@field requirement_type any

---@class EnrolmentIntentRequirementResponsePagedListListMatch
---@field id string

---@class Event
---@field api_version? string
---@field created string
---@field data nil
---@field id string
---@field options? nil
---@field parent? nil
---@field platform_id string
---@field root? any
---@field type string

---@class EventLoadMatch
---@field id string

---@class EventListMatch
---@field api_version? string
---@field created? string
---@field data? nil
---@field id? string
---@field options? nil
---@field parent? nil
---@field platform_id? string
---@field root? any
---@field type? string

---@class Group
---@field description? nil|string
---@field employer_id string
---@field enrolment_type any
---@field group_policy_ids table
---@field group_policy_intent_ids table
---@field group_quote_intent_ids table
---@field group_type any
---@field id string
---@field name string
---@field object? string
---@field status any

---@class GroupLoadMatch
---@field id string

---@class GroupListMatch
---@field description? nil|string
---@field employer_id? string
---@field enrolment_type? any
---@field group_policy_ids? table
---@field group_policy_intent_ids? table
---@field group_quote_intent_ids? table
---@field group_type? any
---@field id? string
---@field name? string
---@field object? string
---@field status? any

---@class GroupCreateData
---@field description? nil|string
---@field employer_id string
---@field enrolment_type any
---@field group_policy_ids table
---@field group_policy_intent_ids table
---@field group_quote_intent_ids table
---@field group_type any
---@field id string
---@field name string
---@field object? string
---@field status any

---@class GroupUpdateData
---@field id string
---@field description? nil|string
---@field employer_id? string
---@field enrolment_type? any
---@field group_policy_ids? table
---@field group_policy_intent_ids? table
---@field group_quote_intent_ids? table
---@field group_type? any
---@field name? string
---@field object? string
---@field status? any

---@class GroupEmployee
---@field desired_policy_start_date? nil|string
---@field eligibility_status any
---@field enrolment_date? nil|string
---@field enrolment_status any
---@field enrolments table
---@field group_id string
---@field id string
---@field object? string
---@field policies table
---@field scheduled_group_transitions table

---@class GroupEmployeeCreateData
---@field id string
---@field desired_policy_start_date? nil|string
---@field eligibility_status any
---@field enrolment_date? nil|string
---@field enrolment_status any
---@field enrolments table
---@field group_id string
---@field object? string
---@field policies table
---@field scheduled_group_transitions table

---@class GroupEmployeeResponsePagedList
---@field desired_policy_start_date? nil|string
---@field eligibility_status any
---@field enrolment_date? nil|string
---@field enrolment_status any
---@field enrolments table
---@field group_id string
---@field id string
---@field object? string
---@field policies table
---@field scheduled_group_transitions table

---@class GroupEmployeeResponsePagedListListMatch
---@field id string

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
---@field status any
---@field type any

---@class GroupPolicyLoadMatch
---@field id string

---@class GroupPolicyListMatch
---@field cancellation_date? nil|string
---@field disclosures? table
---@field employer_id? string
---@field end_date? nil|string
---@field group_id? string
---@field health_insurance? nil
---@field id? string
---@field object? string
---@field plan? any
---@field provider? any
---@field start_date? string
---@field status? any
---@field type? any

---@class GroupPolicyIntent
---@field action_required? nil
---@field cost_sharing? nil
---@field disclosures table
---@field due_date? nil|string
---@field group_id string
---@field id string
---@field object? string
---@field plan_id string
---@field quote_intent_id string
---@field status any

---@class GroupPolicyIntentLoadMatch
---@field id string

---@class GroupPolicyIntentListMatch
---@field action_required? nil
---@field cost_sharing? nil
---@field disclosures? table
---@field due_date? nil|string
---@field group_id? string
---@field id? string
---@field object? string
---@field plan_id? string
---@field quote_intent_id? string
---@field status? any

---@class GroupPolicyIntentCreateData
---@field action_required? nil
---@field cost_sharing? nil
---@field disclosures table
---@field due_date? nil|string
---@field group_id string
---@field id string
---@field object? string
---@field plan_id string
---@field quote_intent_id string
---@field status any

---@class GroupPolicyIntentRequirementResponsePagedList
---@field id string
---@field is_fulfilled boolean
---@field object? string
---@field object_id string
---@field object_type any
---@field requirement_type any

---@class GroupPolicyIntentRequirementResponsePagedListListMatch
---@field id string

---@class GroupQuote
---@field family_type? nil
---@field member_count? nil
---@field member_selection? nil
---@field percentage? nil
---@field type any

---@class GroupQuoteLoadMatch
---@field group_quote_intent_id string

---@class GroupQuoteIntent
---@field action_required? nil
---@field consent_links table
---@field cost_sharing? nil
---@field disclosures table
---@field expected_start_date? nil|string
---@field group_id string
---@field id string
---@field object? string
---@field plan_id string
---@field status any

---@class GroupQuoteIntentLoadMatch
---@field id string

---@class GroupQuoteIntentListMatch
---@field action_required? nil
---@field consent_links? table
---@field cost_sharing? nil
---@field disclosures? table
---@field expected_start_date? nil|string
---@field group_id? string
---@field id? string
---@field object? string
---@field plan_id? string
---@field status? any

---@class GroupQuoteIntentCreateData
---@field action_required? nil
---@field consent_links table
---@field cost_sharing? nil
---@field disclosures table
---@field expected_start_date? nil|string
---@field group_id string
---@field id string
---@field object? string
---@field plan_id string
---@field status any

---@class GroupQuoteIntentRequirementResponsePagedList
---@field id string
---@field is_fulfilled boolean
---@field object? string
---@field object_id string
---@field object_type any
---@field requirement_type any

---@class GroupQuoteIntentRequirementResponsePagedListListMatch
---@field id string

---@class Plan
---@field available_from string
---@field available_to? nil|string
---@field country any
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
---@field type any

---@class PlanLoadMatch
---@field id string

---@class PlanListMatch
---@field available_from? string
---@field available_to? nil|string
---@field country? any
---@field coverage_options? nil|table
---@field description? string
---@field disclosures? table
---@field documents? table
---@field eligible_count? nil|number
---@field employee_eligibility_criteria? table
---@field employer_eligibility_criteria? table
---@field health_insurance? nil
---@field id? string
---@field ineligible_count? nil|number
---@field name? string
---@field object? string
---@field provider? any
---@field total_count? nil|number
---@field type? any

---@class Policy
---@field bundling_type any
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
---@field status any
---@field type any

---@class PolicyLoadMatch
---@field id string

---@class PolicyListMatch
---@field bundling_type? any
---@field cancellation_date? nil|string
---@field disclosures? table
---@field employee_id? string
---@field end_date? nil|string
---@field group_id? string
---@field group_policy_id? string
---@field health_insurance? nil
---@field id? string
---@field object? string
---@field plan? any
---@field provider? any
---@field start_date? string
---@field status? any
---@field type? any

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
---@field status any

---@class PolicyAmendmentIntentLoadMatch
---@field id string
---@field policy_id string

---@class PolicyAmendmentIntentListMatch
---@field id string

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
---@field status any

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
---@field status any

---@class PolicyImportIntentLoadMatch
---@field id string

---@class PolicyImportIntentListMatch
---@field associated_persons? table
---@field employee_id? string
---@field group_id? string
---@field id? string
---@field member_number? string
---@field object? string
---@field policy_end_date? nil|string
---@field policy_start_date? string
---@field provider_policy_number? string
---@field status? any

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
---@field status any

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
---@field description? string
---@field employer_platform_url? nil|string
---@field id? string
---@field kota_hub_url? nil|string
---@field logo_url? string
---@field name? string
---@field object? string
---@field support_phone? string
---@field supported_countries? table
---@field website_url? string

---@class Replay
---@field deliveries table
---@field event_id string

---@class ReplayCreateData
---@field event_id string
---@field deliveries table

---@class WebhookEndpoint
---@field created_at string
---@field endpoint_url string
---@field id string
---@field object? string
---@field subscribed_events table

---@class WebhookEndpointLoadMatch
---@field id string

---@class WebhookEndpointResponsePagedList
---@field created_at string
---@field endpoint_url string
---@field id string
---@field object? string
---@field subscribed_events table

---@class WebhookEndpointResponsePagedListListMatch
---@field created_at? string
---@field endpoint_url? string
---@field id? string
---@field object? string
---@field subscribed_events? table

local M = {}

return M
