// Typed models for the Kota SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} AssociatedPerson
 * @property {string} date_of_birth
 * @property {null|string} [email]
 * @property {string} employee_id
 * @property {string} first_name
 * @property {string} id
 * @property {string} last_name
 * @property {string} [object]
 * @property {null|string} [phone_number]
 * @property {string} [platform_id]
 * @property {*} relationship_type
 * @property {*} sex_at_birth
 */

/**
 * @typedef {Object} AssociatedPersonLoadMatch
 * @property {string} employee_id
 * @property {string} id
 */

/**
 * @typedef {Object} AssociatedPersonListMatch
 * @property {string} employee_id
 */

/**
 * @typedef {Object} AssociatedPersonCreateData
 * @property {string} employee_id
 * @property {string} date_of_birth
 * @property {null|string} [email]
 * @property {string} first_name
 * @property {string} id
 * @property {string} last_name
 * @property {string} [object]
 * @property {null|string} [phone_number]
 * @property {string} [platform_id]
 * @property {*} relationship_type
 * @property {*} sex_at_birth
 */

/**
 * @typedef {Object} AssociatedPersonUpdateData
 * @property {string} employee_id
 * @property {string} id
 * @property {string} [date_of_birth]
 * @property {null|string} [email]
 * @property {string} [first_name]
 * @property {string} [last_name]
 * @property {string} [object]
 * @property {null|string} [phone_number]
 * @property {string} [platform_id]
 * @property {*} [relationship_type]
 * @property {*} [sex_at_birth]
 */

/**
 * @typedef {Object} AssociatedPersonRemoveMatch
 * @property {string} employee_id
 * @property {string} id
 */

/**
 * @typedef {Object} AssociatedPersonEligibilityResponsePagedList
 * @property {string} associated_person_id
 * @property {string} date_of_birth
 * @property {*} eligibility_status
 * @property {string} first_name
 * @property {null|string} [ineligibility_reason]
 * @property {string} last_name
 * @property {string} [object]
 * @property {*} relationship
 * @property {*} sex_at_birth
 */

/**
 * @typedef {Object} AssociatedPersonEligibilityResponsePagedListListMatch
 * @property {string} dependents_management_intent_id
 */

/**
 * @typedef {Object} ContributionReport
 * @property {string} created_at
 * @property {string} employer_id
 * @property {null|string} [external_customer_id]
 * @property {null|string} [finalized_at]
 * @property {string} id
 * @property {string} last_updated_at
 * @property {string} [object]
 * @property {*} period
 * @property {*} status
 */

/**
 * @typedef {Object} ContributionReportLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ContributionReportListMatch
 * @property {string} [created_at]
 * @property {string} [employer_id]
 * @property {null|string} [external_customer_id]
 * @property {null|string} [finalized_at]
 * @property {string} [id]
 * @property {string} [last_updated_at]
 * @property {string} [object]
 * @property {*} [period]
 * @property {*} [status]
 */

/**
 * @typedef {Object} ContributionReportCreateData
 * @property {string} id
 * @property {string} created_at
 * @property {string} employer_id
 * @property {null|string} [external_customer_id]
 * @property {null|string} [finalized_at]
 * @property {string} last_updated_at
 * @property {string} [object]
 * @property {*} period
 * @property {*} status
 */

/**
 * @typedef {Object} ContributionReportEmployeeBreakdown
 * @property {string} contribution_report_id
 * @property {string} created_at
 * @property {*} currency
 * @property {string} employee_id
 * @property {string} employer_id
 * @property {null|string} [external_customer_id]
 * @property {null|string} [finalized_at]
 * @property {*} health_insurance
 * @property {string} last_updated_at
 * @property {string} [object]
 * @property {*} period
 * @property {*} status
 */

/**
 * @typedef {Object} ContributionReportEmployeeBreakdownLoadMatch
 * @property {string} contribution_report_id
 * @property {string} id
 */

/**
 * @typedef {Object} ContributionReportEmployeeBreakdownResponsePagedList
 * @property {string} contribution_report_id
 * @property {string} created_at
 * @property {*} currency
 * @property {string} employee_id
 * @property {string} employer_id
 * @property {null|string} [external_customer_id]
 * @property {null|string} [finalized_at]
 * @property {*} health_insurance
 * @property {string} last_updated_at
 * @property {string} [object]
 * @property {*} period
 * @property {*} status
 */

/**
 * @typedef {Object} ContributionReportEmployeeBreakdownResponsePagedListListMatch
 * @property {string} id
 */

/**
 * @typedef {Object} CreateHostedSessionToken
 * @property {string} expiry
 * @property {string} link
 */

/**
 * @typedef {Object} CreateHostedSessionTokenCreateData
 * @property {string} expiry
 * @property {string} link
 */

/**
 * @typedef {Object} CreateSessionToken
 * @property {string} expiry
 * @property {string} token
 */

/**
 * @typedef {Object} CreateSessionTokenCreateData
 * @property {string} expiry
 * @property {string} token
 */

/**
 * @typedef {Object} Dependent
 * @property {null} [action_required]
 * @property {null|Array} [coverage_options]
 * @property {Array} dependents
 * @property {Array} disclosures
 * @property {string} id
 * @property {string} [object]
 * @property {string} parent_intent_id
 * @property {*} parent_intent_type
 * @property {*} plan
 * @property {*} status
 */

/**
 * @typedef {Object} DependentCreateData
 * @property {string} dependents_management_intent_id
 * @property {null} [action_required]
 * @property {null|Array} [coverage_options]
 * @property {Array} dependents
 * @property {Array} disclosures
 * @property {string} id
 * @property {string} [object]
 * @property {string} parent_intent_id
 * @property {*} parent_intent_type
 * @property {*} plan
 * @property {*} status
 */

/**
 * @typedef {Object} DependentRemoveMatch
 * @property {string} dependents_management_intent_id
 * @property {string} id
 */

/**
 * @typedef {Object} DependentsManagementIntent
 * @property {null} [action_required]
 * @property {null|Array} [coverage_options]
 * @property {Array} dependents
 * @property {Array} disclosures
 * @property {string} id
 * @property {string} [object]
 * @property {string} parent_intent_id
 * @property {*} parent_intent_type
 * @property {*} plan
 * @property {*} status
 */

/**
 * @typedef {Object} DependentsManagementIntentLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} DependentsManagementIntentCreateData
 * @property {string} [policy_amendment_intent_id]
 * @property {string} [policy_id]
 * @property {string} [enrolment_intent_id]
 * @property {null} [action_required]
 * @property {null|Array} [coverage_options]
 * @property {Array} dependents
 * @property {Array} disclosures
 * @property {string} id
 * @property {string} [object]
 * @property {string} parent_intent_id
 * @property {*} parent_intent_type
 * @property {*} plan
 * @property {*} status
 */

/**
 * @typedef {Object} EligibilityCheck
 * @property {*} eligibility_status
 * @property {string} [object]
 * @property {*} plan
 * @property {*} provider
 * @property {Array} reasons
 */

/**
 * @typedef {Object} EligibilityCheckCreateData
 * @property {string} group_id
 * @property {*} eligibility_status
 * @property {string} [object]
 * @property {*} plan
 * @property {*} provider
 * @property {Array} reasons
 */

/**
 * @typedef {Object} Employee
 * @property {null} [bank_account]
 * @property {string} date_of_birth
 * @property {null|string} [earliest_benefits_start_date]
 * @property {string} email
 * @property {string} [employer_id]
 * @property {null|string} [external_customer_id]
 * @property {string} first_name
 * @property {null} [home_address]
 * @property {string} [id]
 * @property {string} last_name
 * @property {null|Object} [metadata]
 * @property {string} national_tax_id
 * @property {null} [nationality]
 * @property {string} [object]
 * @property {null|string} [offboard_on]
 * @property {string} phone_number
 * @property {string} [platform_id]
 * @property {*} sex_at_birth
 * @property {string} [start_on]
 * @property {*} [status]
 */

/**
 * @typedef {Object} EmployeeLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} EmployeeListMatch
 * @property {null} [bank_account]
 * @property {string} [date_of_birth]
 * @property {null|string} [earliest_benefits_start_date]
 * @property {string} [email]
 * @property {string} [employer_id]
 * @property {null|string} [external_customer_id]
 * @property {string} [first_name]
 * @property {null} [home_address]
 * @property {string} [id]
 * @property {string} [last_name]
 * @property {null|Object} [metadata]
 * @property {string} [national_tax_id]
 * @property {null} [nationality]
 * @property {string} [object]
 * @property {null|string} [offboard_on]
 * @property {string} [phone_number]
 * @property {string} [platform_id]
 * @property {*} [sex_at_birth]
 * @property {string} [start_on]
 * @property {*} [status]
 */

/**
 * @typedef {Object} EmployeeCreateData
 * @property {null} [bank_account]
 * @property {string} date_of_birth
 * @property {null|string} [earliest_benefits_start_date]
 * @property {string} email
 * @property {string} [employer_id]
 * @property {null|string} [external_customer_id]
 * @property {string} first_name
 * @property {null} [home_address]
 * @property {string} [id]
 * @property {string} last_name
 * @property {null|Object} [metadata]
 * @property {string} national_tax_id
 * @property {null} [nationality]
 * @property {string} [object]
 * @property {null|string} [offboard_on]
 * @property {string} phone_number
 * @property {string} [platform_id]
 * @property {*} sex_at_birth
 * @property {string} [start_on]
 * @property {*} [status]
 */

/**
 * @typedef {Object} EmployeeUpdateData
 * @property {string} id
 * @property {null} [bank_account]
 * @property {string} [date_of_birth]
 * @property {null|string} [earliest_benefits_start_date]
 * @property {string} [email]
 * @property {string} [employer_id]
 * @property {null|string} [external_customer_id]
 * @property {string} [first_name]
 * @property {null} [home_address]
 * @property {string} [last_name]
 * @property {null|Object} [metadata]
 * @property {string} [national_tax_id]
 * @property {null} [nationality]
 * @property {string} [object]
 * @property {null|string} [offboard_on]
 * @property {string} [phone_number]
 * @property {string} [platform_id]
 * @property {*} [sex_at_birth]
 * @property {string} [start_on]
 * @property {*} [status]
 */

/**
 * @typedef {Object} EmployeeHealthInsuranceOffer
 * @property {*} coverage_level
 * @property {string} employee_id
 * @property {string} employer_id
 * @property {null|string} [external_customer_id]
 * @property {string} id
 * @property {string} [object]
 * @property {null} [required_action]
 * @property {*} status
 */

/**
 * @typedef {Object} EmployeeHealthInsuranceOfferLoadMatch
 * @property {string} employee_id
 * @property {string} id
 */

/**
 * @typedef {Object} EmployeeHealthInsuranceOfferResponsePagedList
 * @property {*} coverage_level
 * @property {string} employee_id
 * @property {string} employer_id
 * @property {null|string} [external_customer_id]
 * @property {string} id
 * @property {string} [object]
 * @property {null} [required_action]
 * @property {*} status
 */

/**
 * @typedef {Object} EmployeeHealthInsuranceOfferResponsePagedListListMatch
 * @property {string} employee_id
 */

/**
 * @typedef {Object} EmployeeHealthInsurancePolicy
 * @property {null|string} [cancellation_date]
 * @property {*} coverage_level
 * @property {string} employee_id
 * @property {string} employer_id
 * @property {string} end_date
 * @property {number} enrolled_dependants_count
 * @property {*} enrolment_type
 * @property {*} estimated_gross_premium
 * @property {null|string} [external_customer_id]
 * @property {string} id
 * @property {string} [object]
 * @property {string} opt_out_deadline_date
 * @property {null|string} [policy_number]
 * @property {*} renewal
 * @property {string} start_date
 * @property {*} status
 */

/**
 * @typedef {Object} EmployeeHealthInsurancePolicyLoadMatch
 * @property {string} employee_id
 * @property {string} id
 */

/**
 * @typedef {Object} EmployeeHealthInsurancePolicyResponsePagedList
 * @property {null|string} [cancellation_date]
 * @property {*} coverage_level
 * @property {string} employee_id
 * @property {string} employer_id
 * @property {string} end_date
 * @property {number} enrolled_dependants_count
 * @property {*} enrolment_type
 * @property {*} estimated_gross_premium
 * @property {null|string} [external_customer_id]
 * @property {string} id
 * @property {string} [object]
 * @property {string} opt_out_deadline_date
 * @property {null|string} [policy_number]
 * @property {*} renewal
 * @property {string} start_date
 * @property {*} status
 */

/**
 * @typedef {Object} EmployeeHealthInsurancePolicyResponsePagedListListMatch
 * @property {string} employee_id
 */

/**
 * @typedef {Object} Employer
 * @property {*} contact
 * @property {null|string} [earliest_benefits_start_date]
 * @property {string} id
 * @property {*} legal_address
 * @property {string} legal_name
 * @property {null|Object} [metadata]
 * @property {string} [object]
 * @property {null|string} [offboard_on]
 * @property {string} [platform_id]
 * @property {null|string} [registration_number]
 * @property {*} [status]
 */

/**
 * @typedef {Object} EmployerLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} EmployerListMatch
 * @property {*} [contact]
 * @property {null|string} [earliest_benefits_start_date]
 * @property {string} [id]
 * @property {*} [legal_address]
 * @property {string} [legal_name]
 * @property {null|Object} [metadata]
 * @property {string} [object]
 * @property {null|string} [offboard_on]
 * @property {string} [platform_id]
 * @property {null|string} [registration_number]
 * @property {*} [status]
 */

/**
 * @typedef {Object} EmployerCreateData
 * @property {*} contact
 * @property {null|string} [earliest_benefits_start_date]
 * @property {string} id
 * @property {*} legal_address
 * @property {string} legal_name
 * @property {null|Object} [metadata]
 * @property {string} [object]
 * @property {null|string} [offboard_on]
 * @property {string} [platform_id]
 * @property {null|string} [registration_number]
 * @property {*} [status]
 */

/**
 * @typedef {Object} EmployerUpdateData
 * @property {string} id
 * @property {*} [contact]
 * @property {null|string} [earliest_benefits_start_date]
 * @property {*} [legal_address]
 * @property {string} [legal_name]
 * @property {null|Object} [metadata]
 * @property {string} [object]
 * @property {null|string} [offboard_on]
 * @property {string} [platform_id]
 * @property {null|string} [registration_number]
 * @property {*} [status]
 */

/**
 * @typedef {Object} EmployerHealthInsurancePolicy
 * @property {null|string} [cancellation_date]
 * @property {Array} coverage_levels
 * @property {number} employer_cancellation_period_length
 * @property {string} employer_id
 * @property {string} end_date
 * @property {*} enrolment_type
 * @property {null|string} [group_policy_number]
 * @property {string} id
 * @property {string} [object]
 * @property {*} renewal
 * @property {string} start_date
 * @property {*} status
 */

/**
 * @typedef {Object} EmployerHealthInsurancePolicyLoadMatch
 * @property {string} employer_id
 * @property {string} id
 */

/**
 * @typedef {Object} EmployerHealthInsurancePolicyResponsePagedList
 * @property {null|string} [cancellation_date]
 * @property {Array} coverage_levels
 * @property {number} employer_cancellation_period_length
 * @property {string} employer_id
 * @property {string} end_date
 * @property {*} enrolment_type
 * @property {null|string} [group_policy_number]
 * @property {string} id
 * @property {string} [object]
 * @property {*} renewal
 * @property {string} start_date
 * @property {*} status
 */

/**
 * @typedef {Object} EmployerHealthInsurancePolicyResponsePagedListListMatch
 * @property {string} employer_id
 */

/**
 * @typedef {Object} EmployerHealthInsuranceQuote
 * @property {Array} coverage_levels
 * @property {string} employer_id
 * @property {string} id
 * @property {string} [object]
 * @property {string} quoted_at
 * @property {null} [required_action]
 * @property {*} status
 */

/**
 * @typedef {Object} EmployerHealthInsuranceQuoteLoadMatch
 * @property {string} employer_id
 * @property {string} id
 */

/**
 * @typedef {Object} EmployerHealthInsuranceQuoteResponsePagedList
 * @property {Array} coverage_levels
 * @property {string} employer_id
 * @property {string} id
 * @property {string} [object]
 * @property {string} quoted_at
 * @property {null} [required_action]
 * @property {*} status
 */

/**
 * @typedef {Object} EmployerHealthInsuranceQuoteResponsePagedListListMatch
 * @property {string} employer_id
 */

/**
 * @typedef {Object} EnrolmentIntent
 * @property {null} [action_required]
 * @property {Array} disclosures
 * @property {string} employee_id
 * @property {boolean} force_confirmation
 * @property {string} group_id
 * @property {string} id
 * @property {null} [ineligibility_reason]
 * @property {string} [object]
 * @property {null} [pending_confirmation]
 * @property {null} [policy_configuration]
 * @property {Array} policy_enrolments
 * @property {*} status
 */

/**
 * @typedef {Object} EnrolmentIntentLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} EnrolmentIntentListMatch
 * @property {null} [action_required]
 * @property {Array} [disclosures]
 * @property {string} [employee_id]
 * @property {boolean} [force_confirmation]
 * @property {string} [group_id]
 * @property {string} [id]
 * @property {null} [ineligibility_reason]
 * @property {string} [object]
 * @property {null} [pending_confirmation]
 * @property {null} [policy_configuration]
 * @property {Array} [policy_enrolments]
 * @property {*} [status]
 */

/**
 * @typedef {Object} EnrolmentIntentCreateData
 * @property {null} [action_required]
 * @property {Array} disclosures
 * @property {string} employee_id
 * @property {boolean} force_confirmation
 * @property {string} group_id
 * @property {string} id
 * @property {null} [ineligibility_reason]
 * @property {string} [object]
 * @property {null} [pending_confirmation]
 * @property {null} [policy_configuration]
 * @property {Array} policy_enrolments
 * @property {*} status
 */

/**
 * @typedef {Object} EnrolmentIntentUpdateData
 * @property {string} id
 * @property {null} [action_required]
 * @property {Array} [disclosures]
 * @property {string} [employee_id]
 * @property {boolean} [force_confirmation]
 * @property {string} [group_id]
 * @property {null} [ineligibility_reason]
 * @property {string} [object]
 * @property {null} [pending_confirmation]
 * @property {null} [policy_configuration]
 * @property {Array} [policy_enrolments]
 * @property {*} [status]
 */

/**
 * @typedef {Object} EnrolmentIntentRequirementResponsePagedList
 * @property {string} id
 * @property {boolean} is_fulfilled
 * @property {string} [object]
 * @property {string} object_id
 * @property {*} object_type
 * @property {*} requirement_type
 */

/**
 * @typedef {Object} EnrolmentIntentRequirementResponsePagedListListMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Event
 * @property {string} [api_version]
 * @property {string} created
 * @property {null} data
 * @property {string} id
 * @property {null} [options]
 * @property {null} [parent]
 * @property {string} platform_id
 * @property {*} [root]
 * @property {string} type
 */

/**
 * @typedef {Object} EventLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} EventListMatch
 * @property {string} [api_version]
 * @property {string} [created]
 * @property {null} [data]
 * @property {string} [id]
 * @property {null} [options]
 * @property {null} [parent]
 * @property {string} [platform_id]
 * @property {*} [root]
 * @property {string} [type]
 */

/**
 * @typedef {Object} Group
 * @property {null|string} [description]
 * @property {string} employer_id
 * @property {*} enrolment_type
 * @property {Array} group_policy_ids
 * @property {Array} group_policy_intent_ids
 * @property {Array} group_quote_intent_ids
 * @property {*} group_type
 * @property {string} id
 * @property {string} name
 * @property {string} [object]
 * @property {*} status
 */

/**
 * @typedef {Object} GroupLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} GroupListMatch
 * @property {null|string} [description]
 * @property {string} [employer_id]
 * @property {*} [enrolment_type]
 * @property {Array} [group_policy_ids]
 * @property {Array} [group_policy_intent_ids]
 * @property {Array} [group_quote_intent_ids]
 * @property {*} [group_type]
 * @property {string} [id]
 * @property {string} [name]
 * @property {string} [object]
 * @property {*} [status]
 */

/**
 * @typedef {Object} GroupCreateData
 * @property {null|string} [description]
 * @property {string} employer_id
 * @property {*} enrolment_type
 * @property {Array} group_policy_ids
 * @property {Array} group_policy_intent_ids
 * @property {Array} group_quote_intent_ids
 * @property {*} group_type
 * @property {string} id
 * @property {string} name
 * @property {string} [object]
 * @property {*} status
 */

/**
 * @typedef {Object} GroupUpdateData
 * @property {string} id
 * @property {null|string} [description]
 * @property {string} [employer_id]
 * @property {*} [enrolment_type]
 * @property {Array} [group_policy_ids]
 * @property {Array} [group_policy_intent_ids]
 * @property {Array} [group_quote_intent_ids]
 * @property {*} [group_type]
 * @property {string} [name]
 * @property {string} [object]
 * @property {*} [status]
 */

/**
 * @typedef {Object} GroupEmployee
 * @property {null|string} [desired_policy_start_date]
 * @property {*} eligibility_status
 * @property {null|string} [enrolment_date]
 * @property {*} enrolment_status
 * @property {Array} enrolments
 * @property {string} group_id
 * @property {string} id
 * @property {string} [object]
 * @property {Array} policies
 * @property {Array} scheduled_group_transitions
 */

/**
 * @typedef {Object} GroupEmployeeCreateData
 * @property {string} id
 * @property {null|string} [desired_policy_start_date]
 * @property {*} eligibility_status
 * @property {null|string} [enrolment_date]
 * @property {*} enrolment_status
 * @property {Array} enrolments
 * @property {string} group_id
 * @property {string} [object]
 * @property {Array} policies
 * @property {Array} scheduled_group_transitions
 */

/**
 * @typedef {Object} GroupEmployeeResponsePagedList
 * @property {null|string} [desired_policy_start_date]
 * @property {*} eligibility_status
 * @property {null|string} [enrolment_date]
 * @property {*} enrolment_status
 * @property {Array} enrolments
 * @property {string} group_id
 * @property {string} id
 * @property {string} [object]
 * @property {Array} policies
 * @property {Array} scheduled_group_transitions
 */

/**
 * @typedef {Object} GroupEmployeeResponsePagedListListMatch
 * @property {string} id
 */

/**
 * @typedef {Object} GroupPolicy
 * @property {null|string} [cancellation_date]
 * @property {Array} disclosures
 * @property {string} [employer_id]
 * @property {null|string} [end_date]
 * @property {string} [group_id]
 * @property {null} [health_insurance]
 * @property {string} id
 * @property {string} [object]
 * @property {*} plan
 * @property {*} provider
 * @property {string} start_date
 * @property {*} status
 * @property {*} type
 */

/**
 * @typedef {Object} GroupPolicyLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} GroupPolicyListMatch
 * @property {null|string} [cancellation_date]
 * @property {Array} [disclosures]
 * @property {string} [employer_id]
 * @property {null|string} [end_date]
 * @property {string} [group_id]
 * @property {null} [health_insurance]
 * @property {string} [id]
 * @property {string} [object]
 * @property {*} [plan]
 * @property {*} [provider]
 * @property {string} [start_date]
 * @property {*} [status]
 * @property {*} [type]
 */

/**
 * @typedef {Object} GroupPolicyIntent
 * @property {null} [action_required]
 * @property {null} [cost_sharing]
 * @property {Array} disclosures
 * @property {null|string} [due_date]
 * @property {string} group_id
 * @property {string} id
 * @property {string} [object]
 * @property {string} plan_id
 * @property {string} quote_intent_id
 * @property {*} status
 */

/**
 * @typedef {Object} GroupPolicyIntentLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} GroupPolicyIntentListMatch
 * @property {null} [action_required]
 * @property {null} [cost_sharing]
 * @property {Array} [disclosures]
 * @property {null|string} [due_date]
 * @property {string} [group_id]
 * @property {string} [id]
 * @property {string} [object]
 * @property {string} [plan_id]
 * @property {string} [quote_intent_id]
 * @property {*} [status]
 */

/**
 * @typedef {Object} GroupPolicyIntentCreateData
 * @property {null} [action_required]
 * @property {null} [cost_sharing]
 * @property {Array} disclosures
 * @property {null|string} [due_date]
 * @property {string} group_id
 * @property {string} id
 * @property {string} [object]
 * @property {string} plan_id
 * @property {string} quote_intent_id
 * @property {*} status
 */

/**
 * @typedef {Object} GroupPolicyIntentRequirementResponsePagedList
 * @property {string} id
 * @property {boolean} is_fulfilled
 * @property {string} [object]
 * @property {string} object_id
 * @property {*} object_type
 * @property {*} requirement_type
 */

/**
 * @typedef {Object} GroupPolicyIntentRequirementResponsePagedListListMatch
 * @property {string} id
 */

/**
 * @typedef {Object} GroupQuote
 * @property {null} [family_type]
 * @property {null} [member_count]
 * @property {null} [member_selection]
 * @property {null} [percentage]
 * @property {*} type
 */

/**
 * @typedef {Object} GroupQuoteLoadMatch
 * @property {string} group_quote_intent_id
 */

/**
 * @typedef {Object} GroupQuoteIntent
 * @property {null} [action_required]
 * @property {Array} consent_links
 * @property {null} [cost_sharing]
 * @property {Array} disclosures
 * @property {null|string} [expected_start_date]
 * @property {string} group_id
 * @property {string} id
 * @property {string} [object]
 * @property {string} plan_id
 * @property {*} status
 */

/**
 * @typedef {Object} GroupQuoteIntentLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} GroupQuoteIntentListMatch
 * @property {null} [action_required]
 * @property {Array} [consent_links]
 * @property {null} [cost_sharing]
 * @property {Array} [disclosures]
 * @property {null|string} [expected_start_date]
 * @property {string} [group_id]
 * @property {string} [id]
 * @property {string} [object]
 * @property {string} [plan_id]
 * @property {*} [status]
 */

/**
 * @typedef {Object} GroupQuoteIntentCreateData
 * @property {null} [action_required]
 * @property {Array} consent_links
 * @property {null} [cost_sharing]
 * @property {Array} disclosures
 * @property {null|string} [expected_start_date]
 * @property {string} group_id
 * @property {string} id
 * @property {string} [object]
 * @property {string} plan_id
 * @property {*} status
 */

/**
 * @typedef {Object} GroupQuoteIntentRequirementResponsePagedList
 * @property {string} id
 * @property {boolean} is_fulfilled
 * @property {string} [object]
 * @property {string} object_id
 * @property {*} object_type
 * @property {*} requirement_type
 */

/**
 * @typedef {Object} GroupQuoteIntentRequirementResponsePagedListListMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Plan
 * @property {string} available_from
 * @property {null|string} [available_to]
 * @property {*} country
 * @property {null|Array} [coverage_options]
 * @property {string} description
 * @property {Array} disclosures
 * @property {Array} documents
 * @property {null|number} [eligible_count]
 * @property {Array} employee_eligibility_criteria
 * @property {Array} employer_eligibility_criteria
 * @property {null} [health_insurance]
 * @property {string} id
 * @property {null|number} [ineligible_count]
 * @property {string} name
 * @property {string} [object]
 * @property {*} provider
 * @property {null|number} [total_count]
 * @property {*} type
 */

/**
 * @typedef {Object} PlanLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} PlanListMatch
 * @property {string} [available_from]
 * @property {null|string} [available_to]
 * @property {*} [country]
 * @property {null|Array} [coverage_options]
 * @property {string} [description]
 * @property {Array} [disclosures]
 * @property {Array} [documents]
 * @property {null|number} [eligible_count]
 * @property {Array} [employee_eligibility_criteria]
 * @property {Array} [employer_eligibility_criteria]
 * @property {null} [health_insurance]
 * @property {string} [id]
 * @property {null|number} [ineligible_count]
 * @property {string} [name]
 * @property {string} [object]
 * @property {*} [provider]
 * @property {null|number} [total_count]
 * @property {*} [type]
 */

/**
 * @typedef {Object} Policy
 * @property {*} bundling_type
 * @property {null|string} [cancellation_date]
 * @property {Array} disclosures
 * @property {string} employee_id
 * @property {null|string} [end_date]
 * @property {string} group_id
 * @property {string} group_policy_id
 * @property {null} [health_insurance]
 * @property {string} id
 * @property {string} [object]
 * @property {*} plan
 * @property {*} provider
 * @property {string} start_date
 * @property {*} status
 * @property {*} type
 */

/**
 * @typedef {Object} PolicyLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} PolicyListMatch
 * @property {*} [bundling_type]
 * @property {null|string} [cancellation_date]
 * @property {Array} [disclosures]
 * @property {string} [employee_id]
 * @property {null|string} [end_date]
 * @property {string} [group_id]
 * @property {string} [group_policy_id]
 * @property {null} [health_insurance]
 * @property {string} [id]
 * @property {string} [object]
 * @property {*} [plan]
 * @property {*} [provider]
 * @property {string} [start_date]
 * @property {*} [status]
 * @property {*} [type]
 */

/**
 * @typedef {Object} PolicyAmendmentIntent
 * @property {*} amendment_reason
 * @property {Array} disclosures
 * @property {string} id
 * @property {string} [object]
 * @property {null} [pending_confirmation]
 * @property {string} policy_id
 * @property {null} [processing_error]
 * @property {Array} requested_changes
 * @property {null} [required_action]
 * @property {*} status
 */

/**
 * @typedef {Object} PolicyAmendmentIntentLoadMatch
 * @property {string} id
 * @property {string} policy_id
 */

/**
 * @typedef {Object} PolicyAmendmentIntentListMatch
 * @property {string} id
 */

/**
 * @typedef {Object} PolicyAmendmentIntentCreateData
 * @property {string} id
 * @property {*} amendment_reason
 * @property {Array} disclosures
 * @property {string} [object]
 * @property {null} [pending_confirmation]
 * @property {string} policy_id
 * @property {null} [processing_error]
 * @property {Array} requested_changes
 * @property {null} [required_action]
 * @property {*} status
 */

/**
 * @typedef {Object} PolicyImportIntent
 * @property {Array} associated_persons
 * @property {string} employee_id
 * @property {string} group_id
 * @property {string} id
 * @property {string} member_number
 * @property {string} [object]
 * @property {null|string} [policy_end_date]
 * @property {string} policy_start_date
 * @property {string} provider_policy_number
 * @property {*} status
 */

/**
 * @typedef {Object} PolicyImportIntentLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} PolicyImportIntentListMatch
 * @property {Array} [associated_persons]
 * @property {string} [employee_id]
 * @property {string} [group_id]
 * @property {string} [id]
 * @property {string} [member_number]
 * @property {string} [object]
 * @property {null|string} [policy_end_date]
 * @property {string} [policy_start_date]
 * @property {string} [provider_policy_number]
 * @property {*} [status]
 */

/**
 * @typedef {Object} PolicyImportIntentCreateData
 * @property {Array} associated_persons
 * @property {string} employee_id
 * @property {string} group_id
 * @property {string} id
 * @property {string} member_number
 * @property {string} [object]
 * @property {null|string} [policy_end_date]
 * @property {string} policy_start_date
 * @property {string} provider_policy_number
 * @property {*} status
 */

/**
 * @typedef {Object} Provider
 * @property {string} description
 * @property {null|string} [employer_platform_url]
 * @property {string} id
 * @property {null|string} [kota_hub_url]
 * @property {string} logo_url
 * @property {string} name
 * @property {string} [object]
 * @property {string} support_phone
 * @property {Array} supported_countries
 * @property {string} website_url
 */

/**
 * @typedef {Object} ProviderLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} ProviderListMatch
 * @property {string} [description]
 * @property {null|string} [employer_platform_url]
 * @property {string} [id]
 * @property {null|string} [kota_hub_url]
 * @property {string} [logo_url]
 * @property {string} [name]
 * @property {string} [object]
 * @property {string} [support_phone]
 * @property {Array} [supported_countries]
 * @property {string} [website_url]
 */

/**
 * @typedef {Object} Replay
 * @property {Array} deliveries
 * @property {string} event_id
 */

/**
 * @typedef {Object} ReplayCreateData
 * @property {string} event_id
 * @property {Array} deliveries
 */

/**
 * @typedef {Object} WebhookEndpoint
 * @property {string} created_at
 * @property {string} endpoint_url
 * @property {string} id
 * @property {string} [object]
 * @property {Array} subscribed_events
 */

/**
 * @typedef {Object} WebhookEndpointLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} WebhookEndpointResponsePagedList
 * @property {string} created_at
 * @property {string} endpoint_url
 * @property {string} id
 * @property {string} [object]
 * @property {Array} subscribed_events
 */

/**
 * @typedef {Object} WebhookEndpointResponsePagedListListMatch
 * @property {string} [created_at]
 * @property {string} [endpoint_url]
 * @property {string} [id]
 * @property {string} [object]
 * @property {Array} [subscribed_events]
 */

