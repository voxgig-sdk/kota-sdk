# Typed models for the Kota SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AssociatedPersonRequired(TypedDict):
    date_of_birth: str
    employee_id: str
    first_name: str
    id: str
    last_name: str
    relationship_type: Any
    sex_at_birth: Any


class AssociatedPerson(AssociatedPersonRequired, total=False):
    email: None | str
    object: str
    phone_number: None | str
    platform_id: str


class AssociatedPersonLoadMatch(TypedDict):
    employee_id: str
    id: str


class AssociatedPersonListMatch(TypedDict):
    employee_id: str


class AssociatedPersonCreateDataRequired(TypedDict):
    employee_id: str
    date_of_birth: str
    first_name: str
    id: str
    last_name: str
    relationship_type: Any
    sex_at_birth: Any


class AssociatedPersonCreateData(AssociatedPersonCreateDataRequired, total=False):
    email: None | str
    object: str
    phone_number: None | str
    platform_id: str


class AssociatedPersonUpdateDataRequired(TypedDict):
    employee_id: str
    id: str


class AssociatedPersonUpdateData(AssociatedPersonUpdateDataRequired, total=False):
    date_of_birth: str
    email: None | str
    first_name: str
    last_name: str
    object: str
    phone_number: None | str
    platform_id: str
    relationship_type: Any
    sex_at_birth: Any


class AssociatedPersonRemoveMatch(TypedDict):
    employee_id: str
    id: str


class AssociatedPersonEligibilityResponsePagedListRequired(TypedDict):
    associated_person_id: str
    date_of_birth: str
    eligibility_status: Any
    first_name: str
    last_name: str
    relationship: Any
    sex_at_birth: Any


class AssociatedPersonEligibilityResponsePagedList(AssociatedPersonEligibilityResponsePagedListRequired, total=False):
    ineligibility_reason: None | str
    object: str


class AssociatedPersonEligibilityResponsePagedListListMatch(TypedDict):
    dependents_management_intent_id: str


class ContributionReportRequired(TypedDict):
    created_at: str
    employer_id: str
    id: str
    last_updated_at: str
    period: Any
    status: Any


class ContributionReport(ContributionReportRequired, total=False):
    external_customer_id: None | str
    finalized_at: None | str
    object: str


class ContributionReportLoadMatch(TypedDict):
    id: str


class ContributionReportListMatch(TypedDict, total=False):
    created_at: str
    employer_id: str
    external_customer_id: None | str
    finalized_at: None | str
    id: str
    last_updated_at: str
    object: str
    period: Any
    status: Any


class ContributionReportCreateDataRequired(TypedDict):
    id: str
    created_at: str
    employer_id: str
    last_updated_at: str
    period: Any
    status: Any


class ContributionReportCreateData(ContributionReportCreateDataRequired, total=False):
    external_customer_id: None | str
    finalized_at: None | str
    object: str


class ContributionReportEmployeeBreakdownRequired(TypedDict):
    contribution_report_id: str
    created_at: str
    currency: Any
    employee_id: str
    employer_id: str
    health_insurance: Any
    last_updated_at: str
    period: Any
    status: Any


class ContributionReportEmployeeBreakdown(ContributionReportEmployeeBreakdownRequired, total=False):
    external_customer_id: None | str
    finalized_at: None | str
    object: str


class ContributionReportEmployeeBreakdownLoadMatch(TypedDict):
    contribution_report_id: str
    id: str


class ContributionReportEmployeeBreakdownResponsePagedListRequired(TypedDict):
    contribution_report_id: str
    created_at: str
    currency: Any
    employee_id: str
    employer_id: str
    health_insurance: Any
    last_updated_at: str
    period: Any
    status: Any


class ContributionReportEmployeeBreakdownResponsePagedList(ContributionReportEmployeeBreakdownResponsePagedListRequired, total=False):
    external_customer_id: None | str
    finalized_at: None | str
    object: str


class ContributionReportEmployeeBreakdownResponsePagedListListMatch(TypedDict):
    id: str


class CreateHostedSessionToken(TypedDict):
    expiry: str
    link: str


class CreateHostedSessionTokenCreateData(TypedDict):
    expiry: str
    link: str


class CreateSessionToken(TypedDict):
    expiry: str
    token: str


class CreateSessionTokenCreateData(TypedDict):
    expiry: str
    token: str


class DependentRequired(TypedDict):
    dependent: list
    disclosure: list
    id: str
    parent_intent_id: str
    parent_intent_type: Any
    plan: Any
    status: Any


class Dependent(DependentRequired, total=False):
    action_required: None
    coverage_option: None | list
    object: str


class DependentCreateDataRequired(TypedDict):
    dependents_management_intent_id: str
    dependent: list
    disclosure: list
    id: str
    parent_intent_id: str
    parent_intent_type: Any
    plan: Any
    status: Any


class DependentCreateData(DependentCreateDataRequired, total=False):
    action_required: None
    coverage_option: None | list
    object: str


class DependentRemoveMatch(TypedDict):
    dependents_management_intent_id: str
    id: str


class DependentsManagementIntentRequired(TypedDict):
    dependent: list
    disclosure: list
    id: str
    parent_intent_id: str
    parent_intent_type: Any
    plan: Any
    status: Any


class DependentsManagementIntent(DependentsManagementIntentRequired, total=False):
    action_required: None
    coverage_option: None | list
    object: str


class DependentsManagementIntentLoadMatch(TypedDict):
    id: str


class DependentsManagementIntentCreateDataRequired(TypedDict):
    dependent: list
    disclosure: list
    id: str
    parent_intent_id: str
    parent_intent_type: Any
    plan: Any
    status: Any


class DependentsManagementIntentCreateData(DependentsManagementIntentCreateDataRequired, total=False):
    policy_amendment_intent_id: str
    policy_id: str
    enrolment_intent_id: str
    action_required: None
    coverage_option: None | list
    object: str


class EligibilityCheckRequired(TypedDict):
    eligibility_status: Any
    plan: Any
    provider: Any
    reason: list


class EligibilityCheck(EligibilityCheckRequired, total=False):
    object: str


class EligibilityCheckCreateDataRequired(TypedDict):
    group_id: str
    eligibility_status: Any
    plan: Any
    provider: Any
    reason: list


class EligibilityCheckCreateData(EligibilityCheckCreateDataRequired, total=False):
    object: str


class EmployeeRequired(TypedDict):
    date_of_birth: str
    email: str
    first_name: str
    last_name: str
    national_tax_id: str
    phone_number: str
    sex_at_birth: Any


class Employee(EmployeeRequired, total=False):
    bank_account: None
    earliest_benefits_start_date: None | str
    employer_id: str
    external_customer_id: None | str
    home_address: None
    id: str
    metadata: None | dict
    nationality: None
    object: str
    offboard_on: None | str
    platform_id: str
    start_on: str
    status: Any


class EmployeeLoadMatch(TypedDict):
    id: str


class EmployeeListMatch(TypedDict, total=False):
    bank_account: None
    date_of_birth: str
    earliest_benefits_start_date: None | str
    email: str
    employer_id: str
    external_customer_id: None | str
    first_name: str
    home_address: None
    id: str
    last_name: str
    metadata: None | dict
    national_tax_id: str
    nationality: None
    object: str
    offboard_on: None | str
    phone_number: str
    platform_id: str
    sex_at_birth: Any
    start_on: str
    status: Any


class EmployeeCreateDataRequired(TypedDict):
    date_of_birth: str
    email: str
    first_name: str
    last_name: str
    national_tax_id: str
    phone_number: str
    sex_at_birth: Any


class EmployeeCreateData(EmployeeCreateDataRequired, total=False):
    bank_account: None
    earliest_benefits_start_date: None | str
    employer_id: str
    external_customer_id: None | str
    home_address: None
    id: str
    metadata: None | dict
    nationality: None
    object: str
    offboard_on: None | str
    platform_id: str
    start_on: str
    status: Any


class EmployeeUpdateDataRequired(TypedDict):
    id: str


class EmployeeUpdateData(EmployeeUpdateDataRequired, total=False):
    bank_account: None
    date_of_birth: str
    earliest_benefits_start_date: None | str
    email: str
    employer_id: str
    external_customer_id: None | str
    first_name: str
    home_address: None
    last_name: str
    metadata: None | dict
    national_tax_id: str
    nationality: None
    object: str
    offboard_on: None | str
    phone_number: str
    platform_id: str
    sex_at_birth: Any
    start_on: str
    status: Any


class EmployeeHealthInsuranceOfferRequired(TypedDict):
    coverage_level: Any
    employee_id: str
    employer_id: str
    id: str
    status: Any


class EmployeeHealthInsuranceOffer(EmployeeHealthInsuranceOfferRequired, total=False):
    external_customer_id: None | str
    object: str
    required_action: None


class EmployeeHealthInsuranceOfferLoadMatch(TypedDict):
    employee_id: str
    id: str


class EmployeeHealthInsuranceOfferResponsePagedListRequired(TypedDict):
    coverage_level: Any
    employee_id: str
    employer_id: str
    id: str
    status: Any


class EmployeeHealthInsuranceOfferResponsePagedList(EmployeeHealthInsuranceOfferResponsePagedListRequired, total=False):
    external_customer_id: None | str
    object: str
    required_action: None


class EmployeeHealthInsuranceOfferResponsePagedListListMatch(TypedDict):
    employee_id: str


class EmployeeHealthInsurancePolicyRequired(TypedDict):
    coverage_level: Any
    employee_id: str
    employer_id: str
    end_date: str
    enrolled_dependants_count: int
    enrolment_type: Any
    estimated_gross_premium: Any
    id: str
    opt_out_deadline_date: str
    renewal: Any
    start_date: str
    status: Any


class EmployeeHealthInsurancePolicy(EmployeeHealthInsurancePolicyRequired, total=False):
    cancellation_date: None | str
    external_customer_id: None | str
    object: str
    policy_number: None | str


class EmployeeHealthInsurancePolicyLoadMatch(TypedDict):
    employee_id: str
    id: str


class EmployeeHealthInsurancePolicyResponsePagedListRequired(TypedDict):
    coverage_level: Any
    employee_id: str
    employer_id: str
    end_date: str
    enrolled_dependants_count: int
    enrolment_type: Any
    estimated_gross_premium: Any
    id: str
    opt_out_deadline_date: str
    renewal: Any
    start_date: str
    status: Any


class EmployeeHealthInsurancePolicyResponsePagedList(EmployeeHealthInsurancePolicyResponsePagedListRequired, total=False):
    cancellation_date: None | str
    external_customer_id: None | str
    object: str
    policy_number: None | str


class EmployeeHealthInsurancePolicyResponsePagedListListMatch(TypedDict):
    employee_id: str


class EmployerRequired(TypedDict):
    contact: Any
    id: str
    legal_address: Any
    legal_name: str


class Employer(EmployerRequired, total=False):
    earliest_benefits_start_date: None | str
    metadata: None | dict
    object: str
    offboard_on: None | str
    platform_id: str
    registration_number: None | str
    status: Any


class EmployerLoadMatch(TypedDict):
    id: str


class EmployerListMatch(TypedDict, total=False):
    contact: Any
    earliest_benefits_start_date: None | str
    id: str
    legal_address: Any
    legal_name: str
    metadata: None | dict
    object: str
    offboard_on: None | str
    platform_id: str
    registration_number: None | str
    status: Any


class EmployerCreateDataRequired(TypedDict):
    contact: Any
    id: str
    legal_address: Any
    legal_name: str


class EmployerCreateData(EmployerCreateDataRequired, total=False):
    earliest_benefits_start_date: None | str
    metadata: None | dict
    object: str
    offboard_on: None | str
    platform_id: str
    registration_number: None | str
    status: Any


class EmployerUpdateDataRequired(TypedDict):
    id: str


class EmployerUpdateData(EmployerUpdateDataRequired, total=False):
    contact: Any
    earliest_benefits_start_date: None | str
    legal_address: Any
    legal_name: str
    metadata: None | dict
    object: str
    offboard_on: None | str
    platform_id: str
    registration_number: None | str
    status: Any


class EmployerHealthInsurancePolicyRequired(TypedDict):
    coverage_level: list
    employer_cancellation_period_length: int
    employer_id: str
    end_date: str
    enrolment_type: Any
    id: str
    renewal: Any
    start_date: str
    status: Any


class EmployerHealthInsurancePolicy(EmployerHealthInsurancePolicyRequired, total=False):
    cancellation_date: None | str
    group_policy_number: None | str
    object: str


class EmployerHealthInsurancePolicyLoadMatch(TypedDict):
    employer_id: str
    id: str


class EmployerHealthInsurancePolicyResponsePagedListRequired(TypedDict):
    coverage_level: list
    employer_cancellation_period_length: int
    employer_id: str
    end_date: str
    enrolment_type: Any
    id: str
    renewal: Any
    start_date: str
    status: Any


class EmployerHealthInsurancePolicyResponsePagedList(EmployerHealthInsurancePolicyResponsePagedListRequired, total=False):
    cancellation_date: None | str
    group_policy_number: None | str
    object: str


class EmployerHealthInsurancePolicyResponsePagedListListMatch(TypedDict):
    employer_id: str


class EmployerHealthInsuranceQuoteRequired(TypedDict):
    coverage_level: list
    employer_id: str
    id: str
    quoted_at: str
    status: Any


class EmployerHealthInsuranceQuote(EmployerHealthInsuranceQuoteRequired, total=False):
    object: str
    required_action: None


class EmployerHealthInsuranceQuoteLoadMatch(TypedDict):
    employer_id: str
    id: str


class EmployerHealthInsuranceQuoteResponsePagedListRequired(TypedDict):
    coverage_level: list
    employer_id: str
    id: str
    quoted_at: str
    status: Any


class EmployerHealthInsuranceQuoteResponsePagedList(EmployerHealthInsuranceQuoteResponsePagedListRequired, total=False):
    object: str
    required_action: None


class EmployerHealthInsuranceQuoteResponsePagedListListMatch(TypedDict):
    employer_id: str


class EnrolmentIntentRequired(TypedDict):
    disclosure: list
    employee_id: str
    force_confirmation: bool
    group_id: str
    id: str
    policy_enrolment: list
    status: Any


class EnrolmentIntent(EnrolmentIntentRequired, total=False):
    action_required: None
    ineligibility_reason: None
    object: str
    pending_confirmation: None
    policy_configuration: None


class EnrolmentIntentLoadMatch(TypedDict):
    id: str


class EnrolmentIntentListMatch(TypedDict, total=False):
    action_required: None
    disclosure: list
    employee_id: str
    force_confirmation: bool
    group_id: str
    id: str
    ineligibility_reason: None
    object: str
    pending_confirmation: None
    policy_configuration: None
    policy_enrolment: list
    status: Any


class EnrolmentIntentCreateDataRequired(TypedDict):
    disclosure: list
    employee_id: str
    force_confirmation: bool
    group_id: str
    id: str
    policy_enrolment: list
    status: Any


class EnrolmentIntentCreateData(EnrolmentIntentCreateDataRequired, total=False):
    action_required: None
    ineligibility_reason: None
    object: str
    pending_confirmation: None
    policy_configuration: None


class EnrolmentIntentUpdateDataRequired(TypedDict):
    id: str


class EnrolmentIntentUpdateData(EnrolmentIntentUpdateDataRequired, total=False):
    action_required: None
    disclosure: list
    employee_id: str
    force_confirmation: bool
    group_id: str
    ineligibility_reason: None
    object: str
    pending_confirmation: None
    policy_configuration: None
    policy_enrolment: list
    status: Any


class EnrolmentIntentRequirementResponsePagedListRequired(TypedDict):
    id: str
    is_fulfilled: bool
    object_id: str
    object_type: Any
    requirement_type: Any


class EnrolmentIntentRequirementResponsePagedList(EnrolmentIntentRequirementResponsePagedListRequired, total=False):
    object: str


class EnrolmentIntentRequirementResponsePagedListListMatch(TypedDict):
    id: str


class EventRequired(TypedDict):
    created: str
    data: None
    id: str
    platform_id: str
    type: str


class Event(EventRequired, total=False):
    api_version: str


class EventLoadMatch(TypedDict):
    id: str


class EventListMatch(TypedDict, total=False):
    api_version: str
    created: str
    data: None
    id: str
    platform_id: str
    type: str


class GroupRequired(TypedDict):
    employer_id: str
    enrolment_type: Any
    group_policy_id: list
    group_policy_intent_id: list
    group_quote_intent_id: list
    group_type: Any
    id: str
    name: str
    status: Any


class Group(GroupRequired, total=False):
    description: None | str
    object: str


class GroupLoadMatch(TypedDict):
    id: str


class GroupListMatch(TypedDict, total=False):
    description: None | str
    employer_id: str
    enrolment_type: Any
    group_policy_id: list
    group_policy_intent_id: list
    group_quote_intent_id: list
    group_type: Any
    id: str
    name: str
    object: str
    status: Any


class GroupCreateDataRequired(TypedDict):
    employer_id: str
    enrolment_type: Any
    group_policy_id: list
    group_policy_intent_id: list
    group_quote_intent_id: list
    group_type: Any
    id: str
    name: str
    status: Any


class GroupCreateData(GroupCreateDataRequired, total=False):
    description: None | str
    object: str


class GroupUpdateDataRequired(TypedDict):
    id: str


class GroupUpdateData(GroupUpdateDataRequired, total=False):
    description: None | str
    employer_id: str
    enrolment_type: Any
    group_policy_id: list
    group_policy_intent_id: list
    group_quote_intent_id: list
    group_type: Any
    name: str
    object: str
    status: Any


class GroupEmployeeRequired(TypedDict):
    eligibility_status: Any
    enrolment: list
    enrolment_status: Any
    group_id: str
    id: str
    policy: list
    scheduled_group_transition: list


class GroupEmployee(GroupEmployeeRequired, total=False):
    desired_policy_start_date: None | str
    enrolment_date: None | str
    object: str


class GroupEmployeeCreateDataRequired(TypedDict):
    id: str
    eligibility_status: Any
    enrolment: list
    enrolment_status: Any
    group_id: str
    policy: list
    scheduled_group_transition: list


class GroupEmployeeCreateData(GroupEmployeeCreateDataRequired, total=False):
    desired_policy_start_date: None | str
    enrolment_date: None | str
    object: str


class GroupEmployeeResponsePagedListRequired(TypedDict):
    eligibility_status: Any
    enrolment: list
    enrolment_status: Any
    group_id: str
    id: str
    policy: list
    scheduled_group_transition: list


class GroupEmployeeResponsePagedList(GroupEmployeeResponsePagedListRequired, total=False):
    desired_policy_start_date: None | str
    enrolment_date: None | str
    object: str


class GroupEmployeeResponsePagedListListMatch(TypedDict):
    id: str


class GroupPolicyRequired(TypedDict):
    disclosure: list
    id: str
    plan: Any
    provider: Any
    start_date: str
    status: Any
    type: Any


class GroupPolicy(GroupPolicyRequired, total=False):
    cancellation_date: None | str
    employer_id: str
    end_date: None | str
    group_id: str
    health_insurance: None
    object: str


class GroupPolicyLoadMatch(TypedDict):
    id: str


class GroupPolicyListMatch(TypedDict, total=False):
    cancellation_date: None | str
    disclosure: list
    employer_id: str
    end_date: None | str
    group_id: str
    health_insurance: None
    id: str
    object: str
    plan: Any
    provider: Any
    start_date: str
    status: Any
    type: Any


class GroupPolicyIntentRequired(TypedDict):
    disclosure: list
    group_id: str
    id: str
    plan_id: str
    quote_intent_id: str
    status: Any


class GroupPolicyIntent(GroupPolicyIntentRequired, total=False):
    action_required: None
    cost_sharing: None
    due_date: None | str
    object: str


class GroupPolicyIntentLoadMatch(TypedDict):
    id: str


class GroupPolicyIntentListMatch(TypedDict, total=False):
    action_required: None
    cost_sharing: None
    disclosure: list
    due_date: None | str
    group_id: str
    id: str
    object: str
    plan_id: str
    quote_intent_id: str
    status: Any


class GroupPolicyIntentCreateDataRequired(TypedDict):
    disclosure: list
    group_id: str
    id: str
    plan_id: str
    quote_intent_id: str
    status: Any


class GroupPolicyIntentCreateData(GroupPolicyIntentCreateDataRequired, total=False):
    action_required: None
    cost_sharing: None
    due_date: None | str
    object: str


class GroupPolicyIntentRequirementResponsePagedListRequired(TypedDict):
    id: str
    is_fulfilled: bool
    object_id: str
    object_type: Any
    requirement_type: Any


class GroupPolicyIntentRequirementResponsePagedList(GroupPolicyIntentRequirementResponsePagedListRequired, total=False):
    object: str


class GroupPolicyIntentRequirementResponsePagedListListMatch(TypedDict):
    id: str


class GroupQuoteRequired(TypedDict):
    cost_sharing: Any
    currency: str
    employee_count: int
    expires_at: str
    generated_at: str
    total_monthly_premium: float


class GroupQuote(GroupQuoteRequired, total=False):
    object: str
    pdf_expires_at: None | str
    pdf_url: None | str


class GroupQuoteLoadMatch(TypedDict):
    group_quote_intent_id: str


class GroupQuoteIntentRequired(TypedDict):
    consent_link: list
    disclosure: list
    group_id: str
    id: str
    plan_id: str
    status: Any


class GroupQuoteIntent(GroupQuoteIntentRequired, total=False):
    action_required: None
    cost_sharing: None
    expected_start_date: None | str
    object: str


class GroupQuoteIntentLoadMatch(TypedDict):
    id: str


class GroupQuoteIntentListMatch(TypedDict, total=False):
    action_required: None
    consent_link: list
    cost_sharing: None
    disclosure: list
    expected_start_date: None | str
    group_id: str
    id: str
    object: str
    plan_id: str
    status: Any


class GroupQuoteIntentCreateDataRequired(TypedDict):
    consent_link: list
    disclosure: list
    group_id: str
    id: str
    plan_id: str
    status: Any


class GroupQuoteIntentCreateData(GroupQuoteIntentCreateDataRequired, total=False):
    action_required: None
    cost_sharing: None
    expected_start_date: None | str
    object: str


class GroupQuoteIntentRequirementResponsePagedListRequired(TypedDict):
    id: str
    is_fulfilled: bool
    object_id: str
    object_type: Any
    requirement_type: Any


class GroupQuoteIntentRequirementResponsePagedList(GroupQuoteIntentRequirementResponsePagedListRequired, total=False):
    object: str


class GroupQuoteIntentRequirementResponsePagedListListMatch(TypedDict):
    id: str


class PlanRequired(TypedDict):
    available_from: str
    country: Any
    description: str
    disclosure: list
    document: list
    employee_eligibility_criterion: list
    employer_eligibility_criterion: list
    id: str
    name: str
    provider: Any
    type: Any


class Plan(PlanRequired, total=False):
    available_to: None | str
    coverage_option: None | list
    eligible_count: None | int
    health_insurance: None
    ineligible_count: None | int
    object: str
    total_count: None | int


class PlanLoadMatch(TypedDict):
    id: str


class PlanListMatch(TypedDict, total=False):
    available_from: str
    available_to: None | str
    country: Any
    coverage_option: None | list
    description: str
    disclosure: list
    document: list
    eligible_count: None | int
    employee_eligibility_criterion: list
    employer_eligibility_criterion: list
    health_insurance: None
    id: str
    ineligible_count: None | int
    name: str
    object: str
    provider: Any
    total_count: None | int
    type: Any


class PolicyRequired(TypedDict):
    bundling_type: Any
    disclosure: list
    employee_id: str
    group_id: str
    group_policy_id: str
    id: str
    plan: Any
    provider: Any
    start_date: str
    status: Any
    type: Any


class Policy(PolicyRequired, total=False):
    cancellation_date: None | str
    end_date: None | str
    health_insurance: None
    object: str


class PolicyLoadMatch(TypedDict):
    id: str


class PolicyListMatch(TypedDict, total=False):
    bundling_type: Any
    cancellation_date: None | str
    disclosure: list
    employee_id: str
    end_date: None | str
    group_id: str
    group_policy_id: str
    health_insurance: None
    id: str
    object: str
    plan: Any
    provider: Any
    start_date: str
    status: Any
    type: Any


class PolicyAmendmentIntentRequired(TypedDict):
    amendment_reason: Any
    disclosure: list
    id: str
    policy_id: str
    requested_change: list
    status: Any


class PolicyAmendmentIntent(PolicyAmendmentIntentRequired, total=False):
    object: str
    pending_confirmation: None
    processing_error: None
    required_action: None


class PolicyAmendmentIntentLoadMatch(TypedDict):
    id: str
    policy_id: str


class PolicyAmendmentIntentListMatch(TypedDict):
    id: str


class PolicyAmendmentIntentCreateDataRequired(TypedDict):
    id: str
    amendment_reason: Any
    disclosure: list
    policy_id: str
    requested_change: list
    status: Any


class PolicyAmendmentIntentCreateData(PolicyAmendmentIntentCreateDataRequired, total=False):
    object: str
    pending_confirmation: None
    processing_error: None
    required_action: None


class PolicyImportIntentRequired(TypedDict):
    associated_person: list
    employee_id: str
    group_id: str
    id: str
    member_number: str
    policy_start_date: str
    provider_policy_number: str
    status: Any


class PolicyImportIntent(PolicyImportIntentRequired, total=False):
    object: str
    policy_end_date: None | str


class PolicyImportIntentLoadMatch(TypedDict):
    id: str


class PolicyImportIntentListMatch(TypedDict, total=False):
    associated_person: list
    employee_id: str
    group_id: str
    id: str
    member_number: str
    object: str
    policy_end_date: None | str
    policy_start_date: str
    provider_policy_number: str
    status: Any


class PolicyImportIntentCreateDataRequired(TypedDict):
    associated_person: list
    employee_id: str
    group_id: str
    id: str
    member_number: str
    policy_start_date: str
    provider_policy_number: str
    status: Any


class PolicyImportIntentCreateData(PolicyImportIntentCreateDataRequired, total=False):
    object: str
    policy_end_date: None | str


class ProviderRequired(TypedDict):
    description: str
    id: str
    logo_url: str
    name: str
    support_phone: str
    supported_country: list
    website_url: str


class Provider(ProviderRequired, total=False):
    employer_platform_url: None | str
    kota_hub_url: None | str
    object: str


class ProviderLoadMatch(TypedDict):
    id: str


class ProviderListMatch(TypedDict, total=False):
    description: str
    employer_platform_url: None | str
    id: str
    kota_hub_url: None | str
    logo_url: str
    name: str
    object: str
    support_phone: str
    supported_country: list
    website_url: str


class Replay(TypedDict):
    delivery: list
    event_id: str


class ReplayCreateData(TypedDict):
    event_id: str
    delivery: list


class WebhookEndpointRequired(TypedDict):
    created_at: str
    endpoint_url: str
    id: str
    subscribed_event: list


class WebhookEndpoint(WebhookEndpointRequired, total=False):
    object: str


class WebhookEndpointLoadMatch(TypedDict):
    id: str


class WebhookEndpointResponsePagedListRequired(TypedDict):
    created_at: str
    endpoint_url: str
    id: str
    subscribed_event: list


class WebhookEndpointResponsePagedList(WebhookEndpointResponsePagedListRequired, total=False):
    object: str


class WebhookEndpointResponsePagedListListMatch(TypedDict, total=False):
    created_at: str
    endpoint_url: str
    id: str
    object: str
    subscribed_event: list
