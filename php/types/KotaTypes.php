<?php
declare(strict_types=1);

// Typed models for the Kota SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** AssociatedPerson entity data model. */
class AssociatedPerson
{
    public string $date_of_birth;
    public mixed $email = null;
    public string $employee_id;
    public string $first_name;
    public string $id;
    public string $last_name;
    public ?string $object = null;
    public mixed $phone_number = null;
    public ?string $platform_id = null;
    public mixed $relationship_type;
    public mixed $sex_at_birth;
}

/** Request payload for AssociatedPerson#load. */
class AssociatedPersonLoadMatch
{
    public string $employee_id;
    public string $id;
}

/** Request payload for AssociatedPerson#list. */
class AssociatedPersonListMatch
{
    public string $employee_id;
}

/** Request payload for AssociatedPerson#create. */
class AssociatedPersonCreateData
{
    public string $employee_id;
    public string $date_of_birth;
    public mixed $email = null;
    public string $first_name;
    public string $id;
    public string $last_name;
    public ?string $object = null;
    public mixed $phone_number = null;
    public ?string $platform_id = null;
    public mixed $relationship_type;
    public mixed $sex_at_birth;
}

/** Request payload for AssociatedPerson#update. */
class AssociatedPersonUpdateData
{
    public string $employee_id;
    public string $id;
    public ?string $date_of_birth = null;
    public mixed $email = null;
    public ?string $first_name = null;
    public ?string $last_name = null;
    public ?string $object = null;
    public mixed $phone_number = null;
    public ?string $platform_id = null;
    public mixed $relationship_type = null;
    public mixed $sex_at_birth = null;
}

/** Request payload for AssociatedPerson#remove. */
class AssociatedPersonRemoveMatch
{
    public string $employee_id;
    public string $id;
}

/** AssociatedPersonEligibilityResponsePagedList entity data model. */
class AssociatedPersonEligibilityResponsePagedList
{
    public string $associated_person_id;
    public string $date_of_birth;
    public mixed $eligibility_status;
    public string $first_name;
    public mixed $ineligibility_reason = null;
    public string $last_name;
    public ?string $object = null;
    public mixed $relationship;
    public mixed $sex_at_birth;
}

/** Request payload for AssociatedPersonEligibilityResponsePagedList#list. */
class AssociatedPersonEligibilityResponsePagedListListMatch
{
    public string $dependents_management_intent_id;
}

/** ContributionReport entity data model. */
class ContributionReport
{
    public string $created_at;
    public string $employer_id;
    public mixed $external_customer_id = null;
    public mixed $finalized_at = null;
    public string $id;
    public string $last_updated_at;
    public ?string $object = null;
    public mixed $period;
    public mixed $status;
}

/** Request payload for ContributionReport#load. */
class ContributionReportLoadMatch
{
    public string $id;
}

/** Request payload for ContributionReport#list. */
class ContributionReportListMatch
{
    public ?string $created_at = null;
    public ?string $employer_id = null;
    public mixed $external_customer_id = null;
    public mixed $finalized_at = null;
    public ?string $id = null;
    public ?string $last_updated_at = null;
    public ?string $object = null;
    public mixed $period = null;
    public mixed $status = null;
}

/** Request payload for ContributionReport#create. */
class ContributionReportCreateData
{
    public string $id;
    public string $created_at;
    public string $employer_id;
    public mixed $external_customer_id = null;
    public mixed $finalized_at = null;
    public string $last_updated_at;
    public ?string $object = null;
    public mixed $period;
    public mixed $status;
}

/** ContributionReportEmployeeBreakdown entity data model. */
class ContributionReportEmployeeBreakdown
{
    public string $contribution_report_id;
    public string $created_at;
    public mixed $currency;
    public string $employee_id;
    public string $employer_id;
    public mixed $external_customer_id = null;
    public mixed $finalized_at = null;
    public mixed $health_insurance;
    public string $last_updated_at;
    public ?string $object = null;
    public mixed $period;
    public mixed $status;
}

/** Request payload for ContributionReportEmployeeBreakdown#load. */
class ContributionReportEmployeeBreakdownLoadMatch
{
    public string $contribution_report_id;
    public string $id;
}

/** ContributionReportEmployeeBreakdownResponsePagedList entity data model. */
class ContributionReportEmployeeBreakdownResponsePagedList
{
    public string $contribution_report_id;
    public string $created_at;
    public mixed $currency;
    public string $employee_id;
    public string $employer_id;
    public mixed $external_customer_id = null;
    public mixed $finalized_at = null;
    public mixed $health_insurance;
    public string $last_updated_at;
    public ?string $object = null;
    public mixed $period;
    public mixed $status;
}

/** Request payload for ContributionReportEmployeeBreakdownResponsePagedList#list. */
class ContributionReportEmployeeBreakdownResponsePagedListListMatch
{
    public string $id;
}

/** CreateHostedSessionToken entity data model. */
class CreateHostedSessionToken
{
    public string $expiry;
    public string $link;
}

/** Request payload for CreateHostedSessionToken#create. */
class CreateHostedSessionTokenCreateData
{
    public string $expiry;
    public string $link;
}

/** CreateSessionToken entity data model. */
class CreateSessionToken
{
    public string $expiry;
    public string $token;
}

/** Request payload for CreateSessionToken#create. */
class CreateSessionTokenCreateData
{
    public string $expiry;
    public string $token;
}

/** Dependent entity data model. */
class Dependent
{
    public mixed $action_required = null;
    public mixed $coverage_options = null;
    public array $dependents;
    public array $disclosures;
    public string $id;
    public ?string $object = null;
    public string $parent_intent_id;
    public mixed $parent_intent_type;
    public mixed $plan;
    public mixed $status;
}

/** Request payload for Dependent#create. */
class DependentCreateData
{
    public string $dependents_management_intent_id;
    public mixed $action_required = null;
    public mixed $coverage_options = null;
    public array $dependents;
    public array $disclosures;
    public string $id;
    public ?string $object = null;
    public string $parent_intent_id;
    public mixed $parent_intent_type;
    public mixed $plan;
    public mixed $status;
}

/** Request payload for Dependent#remove. */
class DependentRemoveMatch
{
    public string $dependents_management_intent_id;
    public string $id;
}

/** DependentsManagementIntent entity data model. */
class DependentsManagementIntent
{
    public mixed $action_required = null;
    public mixed $coverage_options = null;
    public array $dependents;
    public array $disclosures;
    public string $id;
    public ?string $object = null;
    public string $parent_intent_id;
    public mixed $parent_intent_type;
    public mixed $plan;
    public mixed $status;
}

/** Request payload for DependentsManagementIntent#load. */
class DependentsManagementIntentLoadMatch
{
    public string $id;
}

/** Request payload for DependentsManagementIntent#create. */
class DependentsManagementIntentCreateData
{
    public string $enrolment_intent_id;
    public mixed $action_required = null;
    public mixed $coverage_options = null;
    public array $dependents;
    public array $disclosures;
    public string $id;
    public ?string $object = null;
    public string $parent_intent_id;
    public mixed $parent_intent_type;
    public mixed $plan;
    public mixed $status;
}

/** EligibilityCheck entity data model. */
class EligibilityCheck
{
    public mixed $eligibility_status;
    public ?string $object = null;
    public mixed $plan;
    public mixed $provider;
    public array $reasons;
}

/** Request payload for EligibilityCheck#create. */
class EligibilityCheckCreateData
{
    public string $group_id;
    public mixed $eligibility_status;
    public ?string $object = null;
    public mixed $plan;
    public mixed $provider;
    public array $reasons;
}

/** Employee entity data model. */
class Employee
{
    public mixed $bank_account = null;
    public string $date_of_birth;
    public mixed $earliest_benefits_start_date = null;
    public string $email;
    public ?string $employer_id = null;
    public mixed $external_customer_id = null;
    public string $first_name;
    public mixed $home_address = null;
    public ?string $id = null;
    public string $last_name;
    public mixed $metadata = null;
    public string $national_tax_id;
    public mixed $nationality = null;
    public ?string $object = null;
    public mixed $offboard_on = null;
    public string $phone_number;
    public ?string $platform_id = null;
    public mixed $sex_at_birth;
    public ?string $start_on = null;
    public mixed $status = null;
}

/** Request payload for Employee#load. */
class EmployeeLoadMatch
{
    public string $id;
}

/** Request payload for Employee#list. */
class EmployeeListMatch
{
    public mixed $bank_account = null;
    public ?string $date_of_birth = null;
    public mixed $earliest_benefits_start_date = null;
    public ?string $email = null;
    public ?string $employer_id = null;
    public mixed $external_customer_id = null;
    public ?string $first_name = null;
    public mixed $home_address = null;
    public ?string $id = null;
    public ?string $last_name = null;
    public mixed $metadata = null;
    public ?string $national_tax_id = null;
    public mixed $nationality = null;
    public ?string $object = null;
    public mixed $offboard_on = null;
    public ?string $phone_number = null;
    public ?string $platform_id = null;
    public mixed $sex_at_birth = null;
    public ?string $start_on = null;
    public mixed $status = null;
}

/** Request payload for Employee#create. */
class EmployeeCreateData
{
    public mixed $bank_account = null;
    public string $date_of_birth;
    public mixed $earliest_benefits_start_date = null;
    public string $email;
    public ?string $employer_id = null;
    public mixed $external_customer_id = null;
    public string $first_name;
    public mixed $home_address = null;
    public ?string $id = null;
    public string $last_name;
    public mixed $metadata = null;
    public string $national_tax_id;
    public mixed $nationality = null;
    public ?string $object = null;
    public mixed $offboard_on = null;
    public string $phone_number;
    public ?string $platform_id = null;
    public mixed $sex_at_birth;
    public ?string $start_on = null;
    public mixed $status = null;
}

/** Request payload for Employee#update. */
class EmployeeUpdateData
{
    public string $id;
    public mixed $bank_account = null;
    public ?string $date_of_birth = null;
    public mixed $earliest_benefits_start_date = null;
    public ?string $email = null;
    public ?string $employer_id = null;
    public mixed $external_customer_id = null;
    public ?string $first_name = null;
    public mixed $home_address = null;
    public ?string $last_name = null;
    public mixed $metadata = null;
    public ?string $national_tax_id = null;
    public mixed $nationality = null;
    public ?string $object = null;
    public mixed $offboard_on = null;
    public ?string $phone_number = null;
    public ?string $platform_id = null;
    public mixed $sex_at_birth = null;
    public ?string $start_on = null;
    public mixed $status = null;
}

/** EmployeeHealthInsuranceOffer entity data model. */
class EmployeeHealthInsuranceOffer
{
    public mixed $coverage_level;
    public string $employee_id;
    public string $employer_id;
    public mixed $external_customer_id = null;
    public string $id;
    public ?string $object = null;
    public mixed $required_action = null;
    public mixed $status;
}

/** Request payload for EmployeeHealthInsuranceOffer#load. */
class EmployeeHealthInsuranceOfferLoadMatch
{
    public string $employee_id;
    public string $id;
}

/** EmployeeHealthInsuranceOfferResponsePagedList entity data model. */
class EmployeeHealthInsuranceOfferResponsePagedList
{
    public mixed $coverage_level;
    public string $employee_id;
    public string $employer_id;
    public mixed $external_customer_id = null;
    public string $id;
    public ?string $object = null;
    public mixed $required_action = null;
    public mixed $status;
}

/** Request payload for EmployeeHealthInsuranceOfferResponsePagedList#list. */
class EmployeeHealthInsuranceOfferResponsePagedListListMatch
{
    public string $employee_id;
}

/** EmployeeHealthInsurancePolicy entity data model. */
class EmployeeHealthInsurancePolicy
{
    public mixed $cancellation_date = null;
    public mixed $coverage_level;
    public string $employee_id;
    public string $employer_id;
    public string $end_date;
    public int $enrolled_dependants_count;
    public mixed $enrolment_type;
    public mixed $estimated_gross_premium;
    public mixed $external_customer_id = null;
    public string $id;
    public ?string $object = null;
    public string $opt_out_deadline_date;
    public mixed $policy_number = null;
    public mixed $renewal;
    public string $start_date;
    public mixed $status;
}

/** Request payload for EmployeeHealthInsurancePolicy#load. */
class EmployeeHealthInsurancePolicyLoadMatch
{
    public string $employee_id;
    public string $id;
}

/** EmployeeHealthInsurancePolicyResponsePagedList entity data model. */
class EmployeeHealthInsurancePolicyResponsePagedList
{
    public mixed $cancellation_date = null;
    public mixed $coverage_level;
    public string $employee_id;
    public string $employer_id;
    public string $end_date;
    public int $enrolled_dependants_count;
    public mixed $enrolment_type;
    public mixed $estimated_gross_premium;
    public mixed $external_customer_id = null;
    public string $id;
    public ?string $object = null;
    public string $opt_out_deadline_date;
    public mixed $policy_number = null;
    public mixed $renewal;
    public string $start_date;
    public mixed $status;
}

/** Request payload for EmployeeHealthInsurancePolicyResponsePagedList#list. */
class EmployeeHealthInsurancePolicyResponsePagedListListMatch
{
    public string $employee_id;
}

/** Employer entity data model. */
class Employer
{
    public mixed $contact;
    public mixed $earliest_benefits_start_date = null;
    public string $id;
    public mixed $legal_address;
    public string $legal_name;
    public mixed $metadata = null;
    public ?string $object = null;
    public mixed $offboard_on = null;
    public ?string $platform_id = null;
    public mixed $registration_number = null;
    public mixed $status = null;
}

/** Request payload for Employer#load. */
class EmployerLoadMatch
{
    public string $id;
}

/** Request payload for Employer#list. */
class EmployerListMatch
{
    public mixed $contact = null;
    public mixed $earliest_benefits_start_date = null;
    public ?string $id = null;
    public mixed $legal_address = null;
    public ?string $legal_name = null;
    public mixed $metadata = null;
    public ?string $object = null;
    public mixed $offboard_on = null;
    public ?string $platform_id = null;
    public mixed $registration_number = null;
    public mixed $status = null;
}

/** Request payload for Employer#create. */
class EmployerCreateData
{
    public mixed $contact;
    public mixed $earliest_benefits_start_date = null;
    public string $id;
    public mixed $legal_address;
    public string $legal_name;
    public mixed $metadata = null;
    public ?string $object = null;
    public mixed $offboard_on = null;
    public ?string $platform_id = null;
    public mixed $registration_number = null;
    public mixed $status = null;
}

/** Request payload for Employer#update. */
class EmployerUpdateData
{
    public string $id;
    public mixed $contact = null;
    public mixed $earliest_benefits_start_date = null;
    public mixed $legal_address = null;
    public ?string $legal_name = null;
    public mixed $metadata = null;
    public ?string $object = null;
    public mixed $offboard_on = null;
    public ?string $platform_id = null;
    public mixed $registration_number = null;
    public mixed $status = null;
}

/** EmployerHealthInsurancePolicy entity data model. */
class EmployerHealthInsurancePolicy
{
    public mixed $cancellation_date = null;
    public array $coverage_levels;
    public int $employer_cancellation_period_length;
    public string $employer_id;
    public string $end_date;
    public mixed $enrolment_type;
    public mixed $group_policy_number = null;
    public string $id;
    public ?string $object = null;
    public mixed $renewal;
    public string $start_date;
    public mixed $status;
}

/** Request payload for EmployerHealthInsurancePolicy#load. */
class EmployerHealthInsurancePolicyLoadMatch
{
    public string $employer_id;
    public string $id;
}

/** EmployerHealthInsurancePolicyResponsePagedList entity data model. */
class EmployerHealthInsurancePolicyResponsePagedList
{
    public mixed $cancellation_date = null;
    public array $coverage_levels;
    public int $employer_cancellation_period_length;
    public string $employer_id;
    public string $end_date;
    public mixed $enrolment_type;
    public mixed $group_policy_number = null;
    public string $id;
    public ?string $object = null;
    public mixed $renewal;
    public string $start_date;
    public mixed $status;
}

/** Request payload for EmployerHealthInsurancePolicyResponsePagedList#list. */
class EmployerHealthInsurancePolicyResponsePagedListListMatch
{
    public string $employer_id;
}

/** EmployerHealthInsuranceQuote entity data model. */
class EmployerHealthInsuranceQuote
{
    public array $coverage_levels;
    public string $employer_id;
    public string $id;
    public ?string $object = null;
    public string $quoted_at;
    public mixed $required_action = null;
    public mixed $status;
}

/** Request payload for EmployerHealthInsuranceQuote#load. */
class EmployerHealthInsuranceQuoteLoadMatch
{
    public string $employer_id;
    public string $id;
}

/** EmployerHealthInsuranceQuoteResponsePagedList entity data model. */
class EmployerHealthInsuranceQuoteResponsePagedList
{
    public array $coverage_levels;
    public string $employer_id;
    public string $id;
    public ?string $object = null;
    public string $quoted_at;
    public mixed $required_action = null;
    public mixed $status;
}

/** Request payload for EmployerHealthInsuranceQuoteResponsePagedList#list. */
class EmployerHealthInsuranceQuoteResponsePagedListListMatch
{
    public string $employer_id;
}

/** EnrolmentIntent entity data model. */
class EnrolmentIntent
{
    public mixed $action_required = null;
    public array $disclosures;
    public string $employee_id;
    public bool $force_confirmation;
    public string $group_id;
    public string $id;
    public mixed $ineligibility_reason = null;
    public ?string $object = null;
    public mixed $pending_confirmation = null;
    public mixed $policy_configuration = null;
    public array $policy_enrolments;
    public mixed $status;
}

/** Request payload for EnrolmentIntent#load. */
class EnrolmentIntentLoadMatch
{
    public string $id;
}

/** Request payload for EnrolmentIntent#list. */
class EnrolmentIntentListMatch
{
    public mixed $action_required = null;
    public ?array $disclosures = null;
    public ?string $employee_id = null;
    public ?bool $force_confirmation = null;
    public ?string $group_id = null;
    public ?string $id = null;
    public mixed $ineligibility_reason = null;
    public ?string $object = null;
    public mixed $pending_confirmation = null;
    public mixed $policy_configuration = null;
    public ?array $policy_enrolments = null;
    public mixed $status = null;
}

/** Request payload for EnrolmentIntent#create. */
class EnrolmentIntentCreateData
{
    public mixed $action_required = null;
    public array $disclosures;
    public string $employee_id;
    public bool $force_confirmation;
    public string $group_id;
    public string $id;
    public mixed $ineligibility_reason = null;
    public ?string $object = null;
    public mixed $pending_confirmation = null;
    public mixed $policy_configuration = null;
    public array $policy_enrolments;
    public mixed $status;
}

/** Request payload for EnrolmentIntent#update. */
class EnrolmentIntentUpdateData
{
    public string $id;
    public mixed $action_required = null;
    public ?array $disclosures = null;
    public ?string $employee_id = null;
    public ?bool $force_confirmation = null;
    public ?string $group_id = null;
    public mixed $ineligibility_reason = null;
    public ?string $object = null;
    public mixed $pending_confirmation = null;
    public mixed $policy_configuration = null;
    public ?array $policy_enrolments = null;
    public mixed $status = null;
}

/** EnrolmentIntentRequirementResponsePagedList entity data model. */
class EnrolmentIntentRequirementResponsePagedList
{
    public string $id;
    public bool $is_fulfilled;
    public ?string $object = null;
    public string $object_id;
    public mixed $object_type;
    public mixed $requirement_type;
}

/** Request payload for EnrolmentIntentRequirementResponsePagedList#list. */
class EnrolmentIntentRequirementResponsePagedListListMatch
{
    public string $id;
}

/** Event entity data model. */
class Event
{
    public ?string $api_version = null;
    public string $created;
    public mixed $data;
    public string $id;
    public mixed $options = null;
    public mixed $parent = null;
    public string $platform_id;
    public mixed $root = null;
    public string $type;
}

/** Request payload for Event#load. */
class EventLoadMatch
{
    public string $id;
}

/** Request payload for Event#list. */
class EventListMatch
{
    public ?string $api_version = null;
    public ?string $created = null;
    public mixed $data = null;
    public ?string $id = null;
    public mixed $options = null;
    public mixed $parent = null;
    public ?string $platform_id = null;
    public mixed $root = null;
    public ?string $type = null;
}

/** Group entity data model. */
class Group
{
    public mixed $description = null;
    public string $employer_id;
    public mixed $enrolment_type;
    public array $group_policy_ids;
    public array $group_policy_intent_ids;
    public array $group_quote_intent_ids;
    public mixed $group_type;
    public string $id;
    public string $name;
    public ?string $object = null;
    public mixed $status;
}

/** Request payload for Group#load. */
class GroupLoadMatch
{
    public string $id;
}

/** Request payload for Group#list. */
class GroupListMatch
{
    public mixed $description = null;
    public ?string $employer_id = null;
    public mixed $enrolment_type = null;
    public ?array $group_policy_ids = null;
    public ?array $group_policy_intent_ids = null;
    public ?array $group_quote_intent_ids = null;
    public mixed $group_type = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?string $object = null;
    public mixed $status = null;
}

/** Request payload for Group#create. */
class GroupCreateData
{
    public mixed $description = null;
    public string $employer_id;
    public mixed $enrolment_type;
    public array $group_policy_ids;
    public array $group_policy_intent_ids;
    public array $group_quote_intent_ids;
    public mixed $group_type;
    public string $id;
    public string $name;
    public ?string $object = null;
    public mixed $status;
}

/** Request payload for Group#update. */
class GroupUpdateData
{
    public string $id;
    public mixed $description = null;
    public ?string $employer_id = null;
    public mixed $enrolment_type = null;
    public ?array $group_policy_ids = null;
    public ?array $group_policy_intent_ids = null;
    public ?array $group_quote_intent_ids = null;
    public mixed $group_type = null;
    public ?string $name = null;
    public ?string $object = null;
    public mixed $status = null;
}

/** GroupEmployee entity data model. */
class GroupEmployee
{
    public mixed $desired_policy_start_date = null;
    public mixed $eligibility_status;
    public mixed $enrolment_date = null;
    public mixed $enrolment_status;
    public array $enrolments;
    public string $group_id;
    public string $id;
    public ?string $object = null;
    public array $policies;
    public array $scheduled_group_transitions;
}

/** Request payload for GroupEmployee#create. */
class GroupEmployeeCreateData
{
    public string $id;
    public mixed $desired_policy_start_date = null;
    public mixed $eligibility_status;
    public mixed $enrolment_date = null;
    public mixed $enrolment_status;
    public array $enrolments;
    public string $group_id;
    public ?string $object = null;
    public array $policies;
    public array $scheduled_group_transitions;
}

/** GroupEmployeeResponsePagedList entity data model. */
class GroupEmployeeResponsePagedList
{
    public mixed $desired_policy_start_date = null;
    public mixed $eligibility_status;
    public mixed $enrolment_date = null;
    public mixed $enrolment_status;
    public array $enrolments;
    public string $group_id;
    public string $id;
    public ?string $object = null;
    public array $policies;
    public array $scheduled_group_transitions;
}

/** Request payload for GroupEmployeeResponsePagedList#list. */
class GroupEmployeeResponsePagedListListMatch
{
    public string $id;
}

/** GroupPolicy entity data model. */
class GroupPolicy
{
    public mixed $cancellation_date = null;
    public array $disclosures;
    public ?string $employer_id = null;
    public mixed $end_date = null;
    public ?string $group_id = null;
    public mixed $health_insurance = null;
    public string $id;
    public ?string $object = null;
    public mixed $plan;
    public mixed $provider;
    public string $start_date;
    public mixed $status;
    public mixed $type;
}

/** Request payload for GroupPolicy#load. */
class GroupPolicyLoadMatch
{
    public string $id;
}

/** Request payload for GroupPolicy#list. */
class GroupPolicyListMatch
{
    public mixed $cancellation_date = null;
    public ?array $disclosures = null;
    public ?string $employer_id = null;
    public mixed $end_date = null;
    public ?string $group_id = null;
    public mixed $health_insurance = null;
    public ?string $id = null;
    public ?string $object = null;
    public mixed $plan = null;
    public mixed $provider = null;
    public ?string $start_date = null;
    public mixed $status = null;
    public mixed $type = null;
}

/** GroupPolicyIntent entity data model. */
class GroupPolicyIntent
{
    public mixed $action_required = null;
    public mixed $cost_sharing = null;
    public array $disclosures;
    public mixed $due_date = null;
    public string $group_id;
    public string $id;
    public ?string $object = null;
    public string $plan_id;
    public string $quote_intent_id;
    public mixed $status;
}

/** Request payload for GroupPolicyIntent#load. */
class GroupPolicyIntentLoadMatch
{
    public string $id;
}

/** Request payload for GroupPolicyIntent#list. */
class GroupPolicyIntentListMatch
{
    public mixed $action_required = null;
    public mixed $cost_sharing = null;
    public ?array $disclosures = null;
    public mixed $due_date = null;
    public ?string $group_id = null;
    public ?string $id = null;
    public ?string $object = null;
    public ?string $plan_id = null;
    public ?string $quote_intent_id = null;
    public mixed $status = null;
}

/** Request payload for GroupPolicyIntent#create. */
class GroupPolicyIntentCreateData
{
    public mixed $action_required = null;
    public mixed $cost_sharing = null;
    public array $disclosures;
    public mixed $due_date = null;
    public string $group_id;
    public string $id;
    public ?string $object = null;
    public string $plan_id;
    public string $quote_intent_id;
    public mixed $status;
}

/** GroupPolicyIntentRequirementResponsePagedList entity data model. */
class GroupPolicyIntentRequirementResponsePagedList
{
    public string $id;
    public bool $is_fulfilled;
    public ?string $object = null;
    public string $object_id;
    public mixed $object_type;
    public mixed $requirement_type;
}

/** Request payload for GroupPolicyIntentRequirementResponsePagedList#list. */
class GroupPolicyIntentRequirementResponsePagedListListMatch
{
    public string $id;
}

/** GroupQuote entity data model. */
class GroupQuote
{
    public mixed $family_type = null;
    public mixed $member_count = null;
    public mixed $member_selection = null;
    public mixed $percentage = null;
    public mixed $type;
}

/** Request payload for GroupQuote#load. */
class GroupQuoteLoadMatch
{
    public string $group_quote_intent_id;
}

/** GroupQuoteIntent entity data model. */
class GroupQuoteIntent
{
    public mixed $action_required = null;
    public array $consent_links;
    public mixed $cost_sharing = null;
    public array $disclosures;
    public mixed $expected_start_date = null;
    public string $group_id;
    public string $id;
    public ?string $object = null;
    public string $plan_id;
    public mixed $status;
}

/** Request payload for GroupQuoteIntent#load. */
class GroupQuoteIntentLoadMatch
{
    public string $id;
}

/** Request payload for GroupQuoteIntent#list. */
class GroupQuoteIntentListMatch
{
    public mixed $action_required = null;
    public ?array $consent_links = null;
    public mixed $cost_sharing = null;
    public ?array $disclosures = null;
    public mixed $expected_start_date = null;
    public ?string $group_id = null;
    public ?string $id = null;
    public ?string $object = null;
    public ?string $plan_id = null;
    public mixed $status = null;
}

/** Request payload for GroupQuoteIntent#create. */
class GroupQuoteIntentCreateData
{
    public mixed $action_required = null;
    public array $consent_links;
    public mixed $cost_sharing = null;
    public array $disclosures;
    public mixed $expected_start_date = null;
    public string $group_id;
    public string $id;
    public ?string $object = null;
    public string $plan_id;
    public mixed $status;
}

/** GroupQuoteIntentRequirementResponsePagedList entity data model. */
class GroupQuoteIntentRequirementResponsePagedList
{
    public string $id;
    public bool $is_fulfilled;
    public ?string $object = null;
    public string $object_id;
    public mixed $object_type;
    public mixed $requirement_type;
}

/** Request payload for GroupQuoteIntentRequirementResponsePagedList#list. */
class GroupQuoteIntentRequirementResponsePagedListListMatch
{
    public string $id;
}

/** Plan entity data model. */
class Plan
{
    public string $available_from;
    public mixed $available_to = null;
    public mixed $country;
    public mixed $coverage_options = null;
    public string $description;
    public array $disclosures;
    public array $documents;
    public mixed $eligible_count = null;
    public array $employee_eligibility_criteria;
    public array $employer_eligibility_criteria;
    public mixed $health_insurance = null;
    public string $id;
    public mixed $ineligible_count = null;
    public string $name;
    public ?string $object = null;
    public mixed $provider;
    public mixed $total_count = null;
    public mixed $type;
}

/** Request payload for Plan#load. */
class PlanLoadMatch
{
    public string $id;
}

/** Request payload for Plan#list. */
class PlanListMatch
{
    public ?string $available_from = null;
    public mixed $available_to = null;
    public mixed $country = null;
    public mixed $coverage_options = null;
    public ?string $description = null;
    public ?array $disclosures = null;
    public ?array $documents = null;
    public mixed $eligible_count = null;
    public ?array $employee_eligibility_criteria = null;
    public ?array $employer_eligibility_criteria = null;
    public mixed $health_insurance = null;
    public ?string $id = null;
    public mixed $ineligible_count = null;
    public ?string $name = null;
    public ?string $object = null;
    public mixed $provider = null;
    public mixed $total_count = null;
    public mixed $type = null;
}

/** Policy entity data model. */
class Policy
{
    public mixed $bundling_type;
    public mixed $cancellation_date = null;
    public array $disclosures;
    public string $employee_id;
    public mixed $end_date = null;
    public string $group_id;
    public string $group_policy_id;
    public mixed $health_insurance = null;
    public string $id;
    public ?string $object = null;
    public mixed $plan;
    public mixed $provider;
    public string $start_date;
    public mixed $status;
    public mixed $type;
}

/** Request payload for Policy#load. */
class PolicyLoadMatch
{
    public string $id;
}

/** Request payload for Policy#list. */
class PolicyListMatch
{
    public mixed $bundling_type = null;
    public mixed $cancellation_date = null;
    public ?array $disclosures = null;
    public ?string $employee_id = null;
    public mixed $end_date = null;
    public ?string $group_id = null;
    public ?string $group_policy_id = null;
    public mixed $health_insurance = null;
    public ?string $id = null;
    public ?string $object = null;
    public mixed $plan = null;
    public mixed $provider = null;
    public ?string $start_date = null;
    public mixed $status = null;
    public mixed $type = null;
}

/** PolicyAmendmentIntent entity data model. */
class PolicyAmendmentIntent
{
    public mixed $amendment_reason;
    public array $disclosures;
    public string $id;
    public ?string $object = null;
    public mixed $pending_confirmation = null;
    public string $policy_id;
    public mixed $processing_error = null;
    public array $requested_changes;
    public mixed $required_action = null;
    public mixed $status;
}

/** Request payload for PolicyAmendmentIntent#load. */
class PolicyAmendmentIntentLoadMatch
{
    public string $id;
    public string $policy_id;
}

/** Request payload for PolicyAmendmentIntent#list. */
class PolicyAmendmentIntentListMatch
{
    public string $id;
}

/** Request payload for PolicyAmendmentIntent#create. */
class PolicyAmendmentIntentCreateData
{
    public string $id;
    public mixed $amendment_reason;
    public array $disclosures;
    public ?string $object = null;
    public mixed $pending_confirmation = null;
    public string $policy_id;
    public mixed $processing_error = null;
    public array $requested_changes;
    public mixed $required_action = null;
    public mixed $status;
}

/** PolicyImportIntent entity data model. */
class PolicyImportIntent
{
    public array $associated_persons;
    public string $employee_id;
    public string $group_id;
    public string $id;
    public string $member_number;
    public ?string $object = null;
    public mixed $policy_end_date = null;
    public string $policy_start_date;
    public string $provider_policy_number;
    public mixed $status;
}

/** Request payload for PolicyImportIntent#load. */
class PolicyImportIntentLoadMatch
{
    public string $id;
}

/** Request payload for PolicyImportIntent#list. */
class PolicyImportIntentListMatch
{
    public ?array $associated_persons = null;
    public ?string $employee_id = null;
    public ?string $group_id = null;
    public ?string $id = null;
    public ?string $member_number = null;
    public ?string $object = null;
    public mixed $policy_end_date = null;
    public ?string $policy_start_date = null;
    public ?string $provider_policy_number = null;
    public mixed $status = null;
}

/** Request payload for PolicyImportIntent#create. */
class PolicyImportIntentCreateData
{
    public array $associated_persons;
    public string $employee_id;
    public string $group_id;
    public string $id;
    public string $member_number;
    public ?string $object = null;
    public mixed $policy_end_date = null;
    public string $policy_start_date;
    public string $provider_policy_number;
    public mixed $status;
}

/** Provider entity data model. */
class Provider
{
    public string $description;
    public mixed $employer_platform_url = null;
    public string $id;
    public mixed $kota_hub_url = null;
    public string $logo_url;
    public string $name;
    public ?string $object = null;
    public string $support_phone;
    public array $supported_countries;
    public string $website_url;
}

/** Request payload for Provider#load. */
class ProviderLoadMatch
{
    public string $id;
}

/** Request payload for Provider#list. */
class ProviderListMatch
{
    public ?string $description = null;
    public mixed $employer_platform_url = null;
    public ?string $id = null;
    public mixed $kota_hub_url = null;
    public ?string $logo_url = null;
    public ?string $name = null;
    public ?string $object = null;
    public ?string $support_phone = null;
    public ?array $supported_countries = null;
    public ?string $website_url = null;
}

/** Replay entity data model. */
class Replay
{
    public array $deliveries;
    public string $event_id;
}

/** Request payload for Replay#create. */
class ReplayCreateData
{
    public string $event_id;
    public array $deliveries;
}

/** WebhookEndpoint entity data model. */
class WebhookEndpoint
{
    public string $created_at;
    public string $endpoint_url;
    public string $id;
    public ?string $object = null;
    public array $subscribed_events;
}

/** Request payload for WebhookEndpoint#load. */
class WebhookEndpointLoadMatch
{
    public string $id;
}

/** WebhookEndpointResponsePagedList entity data model. */
class WebhookEndpointResponsePagedList
{
    public string $created_at;
    public string $endpoint_url;
    public string $id;
    public ?string $object = null;
    public array $subscribed_events;
}

/** Request payload for WebhookEndpointResponsePagedList#list. */
class WebhookEndpointResponsePagedListListMatch
{
    public ?string $created_at = null;
    public ?string $endpoint_url = null;
    public ?string $id = null;
    public ?string $object = null;
    public ?array $subscribed_events = null;
}

