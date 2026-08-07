// Typed models for the Kota SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// AssociatedPerson is the typed data model for the associated_person entity.
type AssociatedPerson struct {
	DateOfBirth string `json:"date_of_birth"`
	Email *any `json:"email,omitempty"`
	EmployeeId string `json:"employee_id"`
	FirstName string `json:"first_name"`
	Id string `json:"id"`
	LastName string `json:"last_name"`
	Object *string `json:"object,omitempty"`
	PhoneNumber *any `json:"phone_number,omitempty"`
	PlatformId *string `json:"platform_id,omitempty"`
	RelationshipType any `json:"relationship_type"`
	SexAtBirth any `json:"sex_at_birth"`
}

// AssociatedPersonLoadMatch is the typed request payload for AssociatedPerson.LoadTyped.
type AssociatedPersonLoadMatch struct {
	EmployeeId string `json:"employee_id"`
	Id string `json:"id"`
}

// AssociatedPersonListMatch is the typed request payload for AssociatedPerson.ListTyped.
type AssociatedPersonListMatch struct {
	EmployeeId string `json:"employee_id"`
}

// AssociatedPersonCreateData is the typed request payload for AssociatedPerson.CreateTyped.
type AssociatedPersonCreateData struct {
	EmployeeId string `json:"employee_id"`
	DateOfBirth string `json:"date_of_birth"`
	Email *any `json:"email,omitempty"`
	FirstName string `json:"first_name"`
	Id string `json:"id"`
	LastName string `json:"last_name"`
	Object *string `json:"object,omitempty"`
	PhoneNumber *any `json:"phone_number,omitempty"`
	PlatformId *string `json:"platform_id,omitempty"`
	RelationshipType any `json:"relationship_type"`
	SexAtBirth any `json:"sex_at_birth"`
}

// AssociatedPersonUpdateData is the typed request payload for AssociatedPerson.UpdateTyped.
type AssociatedPersonUpdateData struct {
	EmployeeId string `json:"employee_id"`
	Id string `json:"id"`
	DateOfBirth *string `json:"date_of_birth,omitempty"`
	Email *any `json:"email,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	Object *string `json:"object,omitempty"`
	PhoneNumber *any `json:"phone_number,omitempty"`
	PlatformId *string `json:"platform_id,omitempty"`
	RelationshipType *any `json:"relationship_type,omitempty"`
	SexAtBirth *any `json:"sex_at_birth,omitempty"`
}

// AssociatedPersonRemoveMatch is the typed request payload for AssociatedPerson.RemoveTyped.
type AssociatedPersonRemoveMatch struct {
	EmployeeId string `json:"employee_id"`
	Id string `json:"id"`
}

// AssociatedPersonEligibilityResponsePagedList is the typed data model for the associated_person_eligibility_response_paged_list entity.
type AssociatedPersonEligibilityResponsePagedList struct {
	AssociatedPersonId string `json:"associated_person_id"`
	DateOfBirth string `json:"date_of_birth"`
	EligibilityStatus any `json:"eligibility_status"`
	FirstName string `json:"first_name"`
	IneligibilityReason *any `json:"ineligibility_reason,omitempty"`
	LastName string `json:"last_name"`
	Object *string `json:"object,omitempty"`
	Relationship any `json:"relationship"`
	SexAtBirth any `json:"sex_at_birth"`
}

// AssociatedPersonEligibilityResponsePagedListListMatch is the typed request payload for AssociatedPersonEligibilityResponsePagedList.ListTyped.
type AssociatedPersonEligibilityResponsePagedListListMatch struct {
	DependentsManagementIntentId string `json:"dependents_management_intent_id"`
}

// ContributionReport is the typed data model for the contribution_report entity.
type ContributionReport struct {
	CreatedAt string `json:"created_at"`
	EmployerId string `json:"employer_id"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	FinalizedAt *any `json:"finalized_at,omitempty"`
	Id string `json:"id"`
	LastUpdatedAt string `json:"last_updated_at"`
	Object *string `json:"object,omitempty"`
	Period any `json:"period"`
	Status any `json:"status"`
}

// ContributionReportLoadMatch is the typed request payload for ContributionReport.LoadTyped.
type ContributionReportLoadMatch struct {
	Id string `json:"id"`
}

// ContributionReportListMatch is the typed request payload for ContributionReport.ListTyped.
type ContributionReportListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	EmployerId *string `json:"employer_id,omitempty"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	FinalizedAt *any `json:"finalized_at,omitempty"`
	Id *string `json:"id,omitempty"`
	LastUpdatedAt *string `json:"last_updated_at,omitempty"`
	Object *string `json:"object,omitempty"`
	Period *any `json:"period,omitempty"`
	Status *any `json:"status,omitempty"`
}

// ContributionReportCreateData is the typed request payload for ContributionReport.CreateTyped.
type ContributionReportCreateData struct {
	Id string `json:"id"`
	CreatedAt string `json:"created_at"`
	EmployerId string `json:"employer_id"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	FinalizedAt *any `json:"finalized_at,omitempty"`
	LastUpdatedAt string `json:"last_updated_at"`
	Object *string `json:"object,omitempty"`
	Period any `json:"period"`
	Status any `json:"status"`
}

// ContributionReportEmployeeBreakdown is the typed data model for the contribution_report_employee_breakdown entity.
type ContributionReportEmployeeBreakdown struct {
	ContributionReportId string `json:"contribution_report_id"`
	CreatedAt string `json:"created_at"`
	Currency any `json:"currency"`
	EmployeeId string `json:"employee_id"`
	EmployerId string `json:"employer_id"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	FinalizedAt *any `json:"finalized_at,omitempty"`
	HealthInsurance any `json:"health_insurance"`
	LastUpdatedAt string `json:"last_updated_at"`
	Object *string `json:"object,omitempty"`
	Period any `json:"period"`
	Status any `json:"status"`
}

// ContributionReportEmployeeBreakdownLoadMatch is the typed request payload for ContributionReportEmployeeBreakdown.LoadTyped.
type ContributionReportEmployeeBreakdownLoadMatch struct {
	ContributionReportId string `json:"contribution_report_id"`
	Id string `json:"id"`
}

// ContributionReportEmployeeBreakdownResponsePagedList is the typed data model for the contribution_report_employee_breakdown_response_paged_list entity.
type ContributionReportEmployeeBreakdownResponsePagedList struct {
	ContributionReportId string `json:"contribution_report_id"`
	CreatedAt string `json:"created_at"`
	Currency any `json:"currency"`
	EmployeeId string `json:"employee_id"`
	EmployerId string `json:"employer_id"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	FinalizedAt *any `json:"finalized_at,omitempty"`
	HealthInsurance any `json:"health_insurance"`
	LastUpdatedAt string `json:"last_updated_at"`
	Object *string `json:"object,omitempty"`
	Period any `json:"period"`
	Status any `json:"status"`
}

// ContributionReportEmployeeBreakdownResponsePagedListListMatch is the typed request payload for ContributionReportEmployeeBreakdownResponsePagedList.ListTyped.
type ContributionReportEmployeeBreakdownResponsePagedListListMatch struct {
	Id string `json:"id"`
}

// CreateHostedSessionToken is the typed data model for the create_hosted_session_token entity.
type CreateHostedSessionToken struct {
	Expiry string `json:"expiry"`
	Link string `json:"link"`
}

// CreateHostedSessionTokenCreateData is the typed request payload for CreateHostedSessionToken.CreateTyped.
type CreateHostedSessionTokenCreateData struct {
	Expiry string `json:"expiry"`
	Link string `json:"link"`
}

// CreateSessionToken is the typed data model for the create_session_token entity.
type CreateSessionToken struct {
	Expiry string `json:"expiry"`
	Token string `json:"token"`
}

// CreateSessionTokenCreateData is the typed request payload for CreateSessionToken.CreateTyped.
type CreateSessionTokenCreateData struct {
	Expiry string `json:"expiry"`
	Token string `json:"token"`
}

// Dependent is the typed data model for the dependent entity.
type Dependent struct {
	ActionRequired *any `json:"action_required,omitempty"`
	CoverageOption *any `json:"coverage_option,omitempty"`
	Dependent []any `json:"dependent"`
	Disclosure []any `json:"disclosure"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	ParentIntentId string `json:"parent_intent_id"`
	ParentIntentType any `json:"parent_intent_type"`
	Plan any `json:"plan"`
	Status any `json:"status"`
}

// DependentCreateData is the typed request payload for Dependent.CreateTyped.
type DependentCreateData struct {
	DependentsManagementIntentId string `json:"dependents_management_intent_id"`
	ActionRequired *any `json:"action_required,omitempty"`
	CoverageOption *any `json:"coverage_option,omitempty"`
	Dependent []any `json:"dependent"`
	Disclosure []any `json:"disclosure"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	ParentIntentId string `json:"parent_intent_id"`
	ParentIntentType any `json:"parent_intent_type"`
	Plan any `json:"plan"`
	Status any `json:"status"`
}

// DependentRemoveMatch is the typed request payload for Dependent.RemoveTyped.
type DependentRemoveMatch struct {
	DependentsManagementIntentId string `json:"dependents_management_intent_id"`
	Id string `json:"id"`
}

// DependentsManagementIntent is the typed data model for the dependents_management_intent entity.
type DependentsManagementIntent struct {
	ActionRequired *any `json:"action_required,omitempty"`
	CoverageOption *any `json:"coverage_option,omitempty"`
	Dependent []any `json:"dependent"`
	Disclosure []any `json:"disclosure"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	ParentIntentId string `json:"parent_intent_id"`
	ParentIntentType any `json:"parent_intent_type"`
	Plan any `json:"plan"`
	Status any `json:"status"`
}

// DependentsManagementIntentLoadMatch is the typed request payload for DependentsManagementIntent.LoadTyped.
type DependentsManagementIntentLoadMatch struct {
	Id string `json:"id"`
}

// DependentsManagementIntentCreateData is the typed request payload for DependentsManagementIntent.CreateTyped.
type DependentsManagementIntentCreateData struct {
	PolicyAmendmentIntentId *string `json:"policy_amendment_intent_id,omitempty"`
	PolicyId *string `json:"policy_id,omitempty"`
	EnrolmentIntentId *string `json:"enrolment_intent_id,omitempty"`
	ActionRequired *any `json:"action_required,omitempty"`
	CoverageOption *any `json:"coverage_option,omitempty"`
	Dependent []any `json:"dependent"`
	Disclosure []any `json:"disclosure"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	ParentIntentId string `json:"parent_intent_id"`
	ParentIntentType any `json:"parent_intent_type"`
	Plan any `json:"plan"`
	Status any `json:"status"`
}

// EligibilityCheck is the typed data model for the eligibility_check entity.
type EligibilityCheck struct {
	EligibilityStatus any `json:"eligibility_status"`
	Object *string `json:"object,omitempty"`
	Plan any `json:"plan"`
	Provider any `json:"provider"`
	Reason []any `json:"reason"`
}

// EligibilityCheckCreateData is the typed request payload for EligibilityCheck.CreateTyped.
type EligibilityCheckCreateData struct {
	GroupId string `json:"group_id"`
	EligibilityStatus any `json:"eligibility_status"`
	Object *string `json:"object,omitempty"`
	Plan any `json:"plan"`
	Provider any `json:"provider"`
	Reason []any `json:"reason"`
}

// Employee is the typed data model for the employee entity.
type Employee struct {
	BankAccount *any `json:"bank_account,omitempty"`
	DateOfBirth string `json:"date_of_birth"`
	EarliestBenefitsStartDate *any `json:"earliest_benefits_start_date,omitempty"`
	Email string `json:"email"`
	EmployerId *string `json:"employer_id,omitempty"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	FirstName string `json:"first_name"`
	HomeAddress *any `json:"home_address,omitempty"`
	Id *string `json:"id,omitempty"`
	LastName string `json:"last_name"`
	Metadata *any `json:"metadata,omitempty"`
	NationalTaxId string `json:"national_tax_id"`
	Nationality *any `json:"nationality,omitempty"`
	Object *string `json:"object,omitempty"`
	OffboardOn *any `json:"offboard_on,omitempty"`
	PhoneNumber string `json:"phone_number"`
	PlatformId *string `json:"platform_id,omitempty"`
	SexAtBirth any `json:"sex_at_birth"`
	StartOn *string `json:"start_on,omitempty"`
	Status *any `json:"status,omitempty"`
}

// EmployeeLoadMatch is the typed request payload for Employee.LoadTyped.
type EmployeeLoadMatch struct {
	Id string `json:"id"`
}

// EmployeeListMatch is the typed request payload for Employee.ListTyped.
type EmployeeListMatch struct {
	BankAccount *any `json:"bank_account,omitempty"`
	DateOfBirth *string `json:"date_of_birth,omitempty"`
	EarliestBenefitsStartDate *any `json:"earliest_benefits_start_date,omitempty"`
	Email *string `json:"email,omitempty"`
	EmployerId *string `json:"employer_id,omitempty"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	HomeAddress *any `json:"home_address,omitempty"`
	Id *string `json:"id,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	NationalTaxId *string `json:"national_tax_id,omitempty"`
	Nationality *any `json:"nationality,omitempty"`
	Object *string `json:"object,omitempty"`
	OffboardOn *any `json:"offboard_on,omitempty"`
	PhoneNumber *string `json:"phone_number,omitempty"`
	PlatformId *string `json:"platform_id,omitempty"`
	SexAtBirth *any `json:"sex_at_birth,omitempty"`
	StartOn *string `json:"start_on,omitempty"`
	Status *any `json:"status,omitempty"`
}

// EmployeeCreateData is the typed request payload for Employee.CreateTyped.
type EmployeeCreateData struct {
	BankAccount *any `json:"bank_account,omitempty"`
	DateOfBirth string `json:"date_of_birth"`
	EarliestBenefitsStartDate *any `json:"earliest_benefits_start_date,omitempty"`
	Email string `json:"email"`
	EmployerId *string `json:"employer_id,omitempty"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	FirstName string `json:"first_name"`
	HomeAddress *any `json:"home_address,omitempty"`
	Id *string `json:"id,omitempty"`
	LastName string `json:"last_name"`
	Metadata *any `json:"metadata,omitempty"`
	NationalTaxId string `json:"national_tax_id"`
	Nationality *any `json:"nationality,omitempty"`
	Object *string `json:"object,omitempty"`
	OffboardOn *any `json:"offboard_on,omitempty"`
	PhoneNumber string `json:"phone_number"`
	PlatformId *string `json:"platform_id,omitempty"`
	SexAtBirth any `json:"sex_at_birth"`
	StartOn *string `json:"start_on,omitempty"`
	Status *any `json:"status,omitempty"`
}

// EmployeeUpdateData is the typed request payload for Employee.UpdateTyped.
type EmployeeUpdateData struct {
	Id string `json:"id"`
	BankAccount *any `json:"bank_account,omitempty"`
	DateOfBirth *string `json:"date_of_birth,omitempty"`
	EarliestBenefitsStartDate *any `json:"earliest_benefits_start_date,omitempty"`
	Email *string `json:"email,omitempty"`
	EmployerId *string `json:"employer_id,omitempty"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	FirstName *string `json:"first_name,omitempty"`
	HomeAddress *any `json:"home_address,omitempty"`
	LastName *string `json:"last_name,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	NationalTaxId *string `json:"national_tax_id,omitempty"`
	Nationality *any `json:"nationality,omitempty"`
	Object *string `json:"object,omitempty"`
	OffboardOn *any `json:"offboard_on,omitempty"`
	PhoneNumber *string `json:"phone_number,omitempty"`
	PlatformId *string `json:"platform_id,omitempty"`
	SexAtBirth *any `json:"sex_at_birth,omitempty"`
	StartOn *string `json:"start_on,omitempty"`
	Status *any `json:"status,omitempty"`
}

// EmployeeHealthInsuranceOffer is the typed data model for the employee_health_insurance_offer entity.
type EmployeeHealthInsuranceOffer struct {
	CoverageLevel any `json:"coverage_level"`
	EmployeeId string `json:"employee_id"`
	EmployerId string `json:"employer_id"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	RequiredAction *any `json:"required_action,omitempty"`
	Status any `json:"status"`
}

// EmployeeHealthInsuranceOfferLoadMatch is the typed request payload for EmployeeHealthInsuranceOffer.LoadTyped.
type EmployeeHealthInsuranceOfferLoadMatch struct {
	EmployeeId string `json:"employee_id"`
	Id string `json:"id"`
}

// EmployeeHealthInsuranceOfferResponsePagedList is the typed data model for the employee_health_insurance_offer_response_paged_list entity.
type EmployeeHealthInsuranceOfferResponsePagedList struct {
	CoverageLevel any `json:"coverage_level"`
	EmployeeId string `json:"employee_id"`
	EmployerId string `json:"employer_id"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	RequiredAction *any `json:"required_action,omitempty"`
	Status any `json:"status"`
}

// EmployeeHealthInsuranceOfferResponsePagedListListMatch is the typed request payload for EmployeeHealthInsuranceOfferResponsePagedList.ListTyped.
type EmployeeHealthInsuranceOfferResponsePagedListListMatch struct {
	EmployeeId string `json:"employee_id"`
}

// EmployeeHealthInsurancePolicy is the typed data model for the employee_health_insurance_policy entity.
type EmployeeHealthInsurancePolicy struct {
	CancellationDate *any `json:"cancellation_date,omitempty"`
	CoverageLevel any `json:"coverage_level"`
	EmployeeId string `json:"employee_id"`
	EmployerId string `json:"employer_id"`
	EndDate string `json:"end_date"`
	EnrolledDependantsCount int `json:"enrolled_dependants_count"`
	EnrolmentType any `json:"enrolment_type"`
	EstimatedGrossPremium any `json:"estimated_gross_premium"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	OptOutDeadlineDate string `json:"opt_out_deadline_date"`
	PolicyNumber *any `json:"policy_number,omitempty"`
	Renewal any `json:"renewal"`
	StartDate string `json:"start_date"`
	Status any `json:"status"`
}

// EmployeeHealthInsurancePolicyLoadMatch is the typed request payload for EmployeeHealthInsurancePolicy.LoadTyped.
type EmployeeHealthInsurancePolicyLoadMatch struct {
	EmployeeId string `json:"employee_id"`
	Id string `json:"id"`
}

// EmployeeHealthInsurancePolicyResponsePagedList is the typed data model for the employee_health_insurance_policy_response_paged_list entity.
type EmployeeHealthInsurancePolicyResponsePagedList struct {
	CancellationDate *any `json:"cancellation_date,omitempty"`
	CoverageLevel any `json:"coverage_level"`
	EmployeeId string `json:"employee_id"`
	EmployerId string `json:"employer_id"`
	EndDate string `json:"end_date"`
	EnrolledDependantsCount int `json:"enrolled_dependants_count"`
	EnrolmentType any `json:"enrolment_type"`
	EstimatedGrossPremium any `json:"estimated_gross_premium"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	OptOutDeadlineDate string `json:"opt_out_deadline_date"`
	PolicyNumber *any `json:"policy_number,omitempty"`
	Renewal any `json:"renewal"`
	StartDate string `json:"start_date"`
	Status any `json:"status"`
}

// EmployeeHealthInsurancePolicyResponsePagedListListMatch is the typed request payload for EmployeeHealthInsurancePolicyResponsePagedList.ListTyped.
type EmployeeHealthInsurancePolicyResponsePagedListListMatch struct {
	EmployeeId string `json:"employee_id"`
}

// Employer is the typed data model for the employer entity.
type Employer struct {
	Contact any `json:"contact"`
	EarliestBenefitsStartDate *any `json:"earliest_benefits_start_date,omitempty"`
	Id string `json:"id"`
	LegalAddress any `json:"legal_address"`
	LegalName string `json:"legal_name"`
	Metadata *any `json:"metadata,omitempty"`
	Object *string `json:"object,omitempty"`
	OffboardOn *any `json:"offboard_on,omitempty"`
	PlatformId *string `json:"platform_id,omitempty"`
	RegistrationNumber *any `json:"registration_number,omitempty"`
	Status *any `json:"status,omitempty"`
}

// EmployerLoadMatch is the typed request payload for Employer.LoadTyped.
type EmployerLoadMatch struct {
	Id string `json:"id"`
}

// EmployerListMatch is the typed request payload for Employer.ListTyped.
type EmployerListMatch struct {
	Contact *any `json:"contact,omitempty"`
	EarliestBenefitsStartDate *any `json:"earliest_benefits_start_date,omitempty"`
	Id *string `json:"id,omitempty"`
	LegalAddress *any `json:"legal_address,omitempty"`
	LegalName *string `json:"legal_name,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	Object *string `json:"object,omitempty"`
	OffboardOn *any `json:"offboard_on,omitempty"`
	PlatformId *string `json:"platform_id,omitempty"`
	RegistrationNumber *any `json:"registration_number,omitempty"`
	Status *any `json:"status,omitempty"`
}

// EmployerCreateData is the typed request payload for Employer.CreateTyped.
type EmployerCreateData struct {
	Contact any `json:"contact"`
	EarliestBenefitsStartDate *any `json:"earliest_benefits_start_date,omitempty"`
	Id string `json:"id"`
	LegalAddress any `json:"legal_address"`
	LegalName string `json:"legal_name"`
	Metadata *any `json:"metadata,omitempty"`
	Object *string `json:"object,omitempty"`
	OffboardOn *any `json:"offboard_on,omitempty"`
	PlatformId *string `json:"platform_id,omitempty"`
	RegistrationNumber *any `json:"registration_number,omitempty"`
	Status *any `json:"status,omitempty"`
}

// EmployerUpdateData is the typed request payload for Employer.UpdateTyped.
type EmployerUpdateData struct {
	Id string `json:"id"`
	Contact *any `json:"contact,omitempty"`
	EarliestBenefitsStartDate *any `json:"earliest_benefits_start_date,omitempty"`
	LegalAddress *any `json:"legal_address,omitempty"`
	LegalName *string `json:"legal_name,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	Object *string `json:"object,omitempty"`
	OffboardOn *any `json:"offboard_on,omitempty"`
	PlatformId *string `json:"platform_id,omitempty"`
	RegistrationNumber *any `json:"registration_number,omitempty"`
	Status *any `json:"status,omitempty"`
}

// EmployerHealthInsurancePolicy is the typed data model for the employer_health_insurance_policy entity.
type EmployerHealthInsurancePolicy struct {
	CancellationDate *any `json:"cancellation_date,omitempty"`
	CoverageLevel []any `json:"coverage_level"`
	EmployerCancellationPeriodLength int `json:"employer_cancellation_period_length"`
	EmployerId string `json:"employer_id"`
	EndDate string `json:"end_date"`
	EnrolmentType any `json:"enrolment_type"`
	GroupPolicyNumber *any `json:"group_policy_number,omitempty"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	Renewal any `json:"renewal"`
	StartDate string `json:"start_date"`
	Status any `json:"status"`
}

// EmployerHealthInsurancePolicyLoadMatch is the typed request payload for EmployerHealthInsurancePolicy.LoadTyped.
type EmployerHealthInsurancePolicyLoadMatch struct {
	EmployerId string `json:"employer_id"`
	Id string `json:"id"`
}

// EmployerHealthInsurancePolicyResponsePagedList is the typed data model for the employer_health_insurance_policy_response_paged_list entity.
type EmployerHealthInsurancePolicyResponsePagedList struct {
	CancellationDate *any `json:"cancellation_date,omitempty"`
	CoverageLevel []any `json:"coverage_level"`
	EmployerCancellationPeriodLength int `json:"employer_cancellation_period_length"`
	EmployerId string `json:"employer_id"`
	EndDate string `json:"end_date"`
	EnrolmentType any `json:"enrolment_type"`
	GroupPolicyNumber *any `json:"group_policy_number,omitempty"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	Renewal any `json:"renewal"`
	StartDate string `json:"start_date"`
	Status any `json:"status"`
}

// EmployerHealthInsurancePolicyResponsePagedListListMatch is the typed request payload for EmployerHealthInsurancePolicyResponsePagedList.ListTyped.
type EmployerHealthInsurancePolicyResponsePagedListListMatch struct {
	EmployerId string `json:"employer_id"`
}

// EmployerHealthInsuranceQuote is the typed data model for the employer_health_insurance_quote entity.
type EmployerHealthInsuranceQuote struct {
	CoverageLevel []any `json:"coverage_level"`
	EmployerId string `json:"employer_id"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	QuotedAt string `json:"quoted_at"`
	RequiredAction *any `json:"required_action,omitempty"`
	Status any `json:"status"`
}

// EmployerHealthInsuranceQuoteLoadMatch is the typed request payload for EmployerHealthInsuranceQuote.LoadTyped.
type EmployerHealthInsuranceQuoteLoadMatch struct {
	EmployerId string `json:"employer_id"`
	Id string `json:"id"`
}

// EmployerHealthInsuranceQuoteResponsePagedList is the typed data model for the employer_health_insurance_quote_response_paged_list entity.
type EmployerHealthInsuranceQuoteResponsePagedList struct {
	CoverageLevel []any `json:"coverage_level"`
	EmployerId string `json:"employer_id"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	QuotedAt string `json:"quoted_at"`
	RequiredAction *any `json:"required_action,omitempty"`
	Status any `json:"status"`
}

// EmployerHealthInsuranceQuoteResponsePagedListListMatch is the typed request payload for EmployerHealthInsuranceQuoteResponsePagedList.ListTyped.
type EmployerHealthInsuranceQuoteResponsePagedListListMatch struct {
	EmployerId string `json:"employer_id"`
}

// EnrolmentIntent is the typed data model for the enrolment_intent entity.
type EnrolmentIntent struct {
	ActionRequired *any `json:"action_required,omitempty"`
	Disclosure []any `json:"disclosure"`
	EmployeeId string `json:"employee_id"`
	ForceConfirmation bool `json:"force_confirmation"`
	GroupId string `json:"group_id"`
	Id string `json:"id"`
	IneligibilityReason *any `json:"ineligibility_reason,omitempty"`
	Object *string `json:"object,omitempty"`
	PendingConfirmation *any `json:"pending_confirmation,omitempty"`
	PolicyConfiguration *any `json:"policy_configuration,omitempty"`
	PolicyEnrolment []any `json:"policy_enrolment"`
	Status any `json:"status"`
}

// EnrolmentIntentLoadMatch is the typed request payload for EnrolmentIntent.LoadTyped.
type EnrolmentIntentLoadMatch struct {
	Id string `json:"id"`
}

// EnrolmentIntentListMatch is the typed request payload for EnrolmentIntent.ListTyped.
type EnrolmentIntentListMatch struct {
	ActionRequired *any `json:"action_required,omitempty"`
	Disclosure *[]any `json:"disclosure,omitempty"`
	EmployeeId *string `json:"employee_id,omitempty"`
	ForceConfirmation *bool `json:"force_confirmation,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Id *string `json:"id,omitempty"`
	IneligibilityReason *any `json:"ineligibility_reason,omitempty"`
	Object *string `json:"object,omitempty"`
	PendingConfirmation *any `json:"pending_confirmation,omitempty"`
	PolicyConfiguration *any `json:"policy_configuration,omitempty"`
	PolicyEnrolment *[]any `json:"policy_enrolment,omitempty"`
	Status *any `json:"status,omitempty"`
}

// EnrolmentIntentCreateData is the typed request payload for EnrolmentIntent.CreateTyped.
type EnrolmentIntentCreateData struct {
	ActionRequired *any `json:"action_required,omitempty"`
	Disclosure []any `json:"disclosure"`
	EmployeeId string `json:"employee_id"`
	ForceConfirmation bool `json:"force_confirmation"`
	GroupId string `json:"group_id"`
	Id string `json:"id"`
	IneligibilityReason *any `json:"ineligibility_reason,omitempty"`
	Object *string `json:"object,omitempty"`
	PendingConfirmation *any `json:"pending_confirmation,omitempty"`
	PolicyConfiguration *any `json:"policy_configuration,omitempty"`
	PolicyEnrolment []any `json:"policy_enrolment"`
	Status any `json:"status"`
}

// EnrolmentIntentUpdateData is the typed request payload for EnrolmentIntent.UpdateTyped.
type EnrolmentIntentUpdateData struct {
	Id string `json:"id"`
	ActionRequired *any `json:"action_required,omitempty"`
	Disclosure *[]any `json:"disclosure,omitempty"`
	EmployeeId *string `json:"employee_id,omitempty"`
	ForceConfirmation *bool `json:"force_confirmation,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	IneligibilityReason *any `json:"ineligibility_reason,omitempty"`
	Object *string `json:"object,omitempty"`
	PendingConfirmation *any `json:"pending_confirmation,omitempty"`
	PolicyConfiguration *any `json:"policy_configuration,omitempty"`
	PolicyEnrolment *[]any `json:"policy_enrolment,omitempty"`
	Status *any `json:"status,omitempty"`
}

// EnrolmentIntentRequirementResponsePagedList is the typed data model for the enrolment_intent_requirement_response_paged_list entity.
type EnrolmentIntentRequirementResponsePagedList struct {
	Id string `json:"id"`
	IsFulfilled bool `json:"is_fulfilled"`
	Object *string `json:"object,omitempty"`
	ObjectId string `json:"object_id"`
	ObjectType any `json:"object_type"`
	RequirementType any `json:"requirement_type"`
}

// EnrolmentIntentRequirementResponsePagedListListMatch is the typed request payload for EnrolmentIntentRequirementResponsePagedList.ListTyped.
type EnrolmentIntentRequirementResponsePagedListListMatch struct {
	Id string `json:"id"`
}

// Event is the typed data model for the event entity.
type Event struct {
	ApiVersion *string `json:"api_version,omitempty"`
	Created string `json:"created"`
	Data any `json:"data"`
	Id string `json:"id"`
	PlatformId string `json:"platform_id"`
	Type string `json:"type"`
}

// EventLoadMatch is the typed request payload for Event.LoadTyped.
type EventLoadMatch struct {
	Id string `json:"id"`
}

// EventListMatch is the typed request payload for Event.ListTyped.
type EventListMatch struct {
	ApiVersion *string `json:"api_version,omitempty"`
	Created *string `json:"created,omitempty"`
	Data *any `json:"data,omitempty"`
	Id *string `json:"id,omitempty"`
	PlatformId *string `json:"platform_id,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Group is the typed data model for the group entity.
type Group struct {
	Description *any `json:"description,omitempty"`
	EmployerId string `json:"employer_id"`
	EnrolmentType any `json:"enrolment_type"`
	GroupPolicyId []any `json:"group_policy_id"`
	GroupPolicyIntentId []any `json:"group_policy_intent_id"`
	GroupQuoteIntentId []any `json:"group_quote_intent_id"`
	GroupType any `json:"group_type"`
	Id string `json:"id"`
	Name string `json:"name"`
	Object *string `json:"object,omitempty"`
	Status any `json:"status"`
}

// GroupLoadMatch is the typed request payload for Group.LoadTyped.
type GroupLoadMatch struct {
	Id string `json:"id"`
}

// GroupListMatch is the typed request payload for Group.ListTyped.
type GroupListMatch struct {
	Description *any `json:"description,omitempty"`
	EmployerId *string `json:"employer_id,omitempty"`
	EnrolmentType *any `json:"enrolment_type,omitempty"`
	GroupPolicyId *[]any `json:"group_policy_id,omitempty"`
	GroupPolicyIntentId *[]any `json:"group_policy_intent_id,omitempty"`
	GroupQuoteIntentId *[]any `json:"group_quote_intent_id,omitempty"`
	GroupType *any `json:"group_type,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Object *string `json:"object,omitempty"`
	Status *any `json:"status,omitempty"`
}

// GroupCreateData is the typed request payload for Group.CreateTyped.
type GroupCreateData struct {
	Description *any `json:"description,omitempty"`
	EmployerId string `json:"employer_id"`
	EnrolmentType any `json:"enrolment_type"`
	GroupPolicyId []any `json:"group_policy_id"`
	GroupPolicyIntentId []any `json:"group_policy_intent_id"`
	GroupQuoteIntentId []any `json:"group_quote_intent_id"`
	GroupType any `json:"group_type"`
	Id string `json:"id"`
	Name string `json:"name"`
	Object *string `json:"object,omitempty"`
	Status any `json:"status"`
}

// GroupUpdateData is the typed request payload for Group.UpdateTyped.
type GroupUpdateData struct {
	Id string `json:"id"`
	Description *any `json:"description,omitempty"`
	EmployerId *string `json:"employer_id,omitempty"`
	EnrolmentType *any `json:"enrolment_type,omitempty"`
	GroupPolicyId *[]any `json:"group_policy_id,omitempty"`
	GroupPolicyIntentId *[]any `json:"group_policy_intent_id,omitempty"`
	GroupQuoteIntentId *[]any `json:"group_quote_intent_id,omitempty"`
	GroupType *any `json:"group_type,omitempty"`
	Name *string `json:"name,omitempty"`
	Object *string `json:"object,omitempty"`
	Status *any `json:"status,omitempty"`
}

// GroupEmployee is the typed data model for the group_employee entity.
type GroupEmployee struct {
	DesiredPolicyStartDate *any `json:"desired_policy_start_date,omitempty"`
	EligibilityStatus any `json:"eligibility_status"`
	Enrolment []any `json:"enrolment"`
	EnrolmentDate *any `json:"enrolment_date,omitempty"`
	EnrolmentStatus any `json:"enrolment_status"`
	GroupId string `json:"group_id"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	Policy []any `json:"policy"`
	ScheduledGroupTransition []any `json:"scheduled_group_transition"`
}

// GroupEmployeeCreateData is the typed request payload for GroupEmployee.CreateTyped.
type GroupEmployeeCreateData struct {
	Id string `json:"id"`
	DesiredPolicyStartDate *any `json:"desired_policy_start_date,omitempty"`
	EligibilityStatus any `json:"eligibility_status"`
	Enrolment []any `json:"enrolment"`
	EnrolmentDate *any `json:"enrolment_date,omitempty"`
	EnrolmentStatus any `json:"enrolment_status"`
	GroupId string `json:"group_id"`
	Object *string `json:"object,omitempty"`
	Policy []any `json:"policy"`
	ScheduledGroupTransition []any `json:"scheduled_group_transition"`
}

// GroupEmployeeResponsePagedList is the typed data model for the group_employee_response_paged_list entity.
type GroupEmployeeResponsePagedList struct {
	DesiredPolicyStartDate *any `json:"desired_policy_start_date,omitempty"`
	EligibilityStatus any `json:"eligibility_status"`
	Enrolment []any `json:"enrolment"`
	EnrolmentDate *any `json:"enrolment_date,omitempty"`
	EnrolmentStatus any `json:"enrolment_status"`
	GroupId string `json:"group_id"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	Policy []any `json:"policy"`
	ScheduledGroupTransition []any `json:"scheduled_group_transition"`
}

// GroupEmployeeResponsePagedListListMatch is the typed request payload for GroupEmployeeResponsePagedList.ListTyped.
type GroupEmployeeResponsePagedListListMatch struct {
	Id string `json:"id"`
}

// GroupPolicy is the typed data model for the group_policy entity.
type GroupPolicy struct {
	CancellationDate *any `json:"cancellation_date,omitempty"`
	Disclosure []any `json:"disclosure"`
	EmployerId *string `json:"employer_id,omitempty"`
	EndDate *any `json:"end_date,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	HealthInsurance *any `json:"health_insurance,omitempty"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	Plan any `json:"plan"`
	Provider any `json:"provider"`
	StartDate string `json:"start_date"`
	Status any `json:"status"`
	Type any `json:"type"`
}

// GroupPolicyLoadMatch is the typed request payload for GroupPolicy.LoadTyped.
type GroupPolicyLoadMatch struct {
	Id string `json:"id"`
}

// GroupPolicyListMatch is the typed request payload for GroupPolicy.ListTyped.
type GroupPolicyListMatch struct {
	CancellationDate *any `json:"cancellation_date,omitempty"`
	Disclosure *[]any `json:"disclosure,omitempty"`
	EmployerId *string `json:"employer_id,omitempty"`
	EndDate *any `json:"end_date,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	HealthInsurance *any `json:"health_insurance,omitempty"`
	Id *string `json:"id,omitempty"`
	Object *string `json:"object,omitempty"`
	Plan *any `json:"plan,omitempty"`
	Provider *any `json:"provider,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	Status *any `json:"status,omitempty"`
	Type *any `json:"type,omitempty"`
}

// GroupPolicyIntent is the typed data model for the group_policy_intent entity.
type GroupPolicyIntent struct {
	ActionRequired *any `json:"action_required,omitempty"`
	CostSharing *any `json:"cost_sharing,omitempty"`
	Disclosure []any `json:"disclosure"`
	DueDate *any `json:"due_date,omitempty"`
	GroupId string `json:"group_id"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	PlanId string `json:"plan_id"`
	QuoteIntentId string `json:"quote_intent_id"`
	Status any `json:"status"`
}

// GroupPolicyIntentLoadMatch is the typed request payload for GroupPolicyIntent.LoadTyped.
type GroupPolicyIntentLoadMatch struct {
	Id string `json:"id"`
}

// GroupPolicyIntentListMatch is the typed request payload for GroupPolicyIntent.ListTyped.
type GroupPolicyIntentListMatch struct {
	ActionRequired *any `json:"action_required,omitempty"`
	CostSharing *any `json:"cost_sharing,omitempty"`
	Disclosure *[]any `json:"disclosure,omitempty"`
	DueDate *any `json:"due_date,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Id *string `json:"id,omitempty"`
	Object *string `json:"object,omitempty"`
	PlanId *string `json:"plan_id,omitempty"`
	QuoteIntentId *string `json:"quote_intent_id,omitempty"`
	Status *any `json:"status,omitempty"`
}

// GroupPolicyIntentCreateData is the typed request payload for GroupPolicyIntent.CreateTyped.
type GroupPolicyIntentCreateData struct {
	ActionRequired *any `json:"action_required,omitempty"`
	CostSharing *any `json:"cost_sharing,omitempty"`
	Disclosure []any `json:"disclosure"`
	DueDate *any `json:"due_date,omitempty"`
	GroupId string `json:"group_id"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	PlanId string `json:"plan_id"`
	QuoteIntentId string `json:"quote_intent_id"`
	Status any `json:"status"`
}

// GroupPolicyIntentRequirementResponsePagedList is the typed data model for the group_policy_intent_requirement_response_paged_list entity.
type GroupPolicyIntentRequirementResponsePagedList struct {
	Id string `json:"id"`
	IsFulfilled bool `json:"is_fulfilled"`
	Object *string `json:"object,omitempty"`
	ObjectId string `json:"object_id"`
	ObjectType any `json:"object_type"`
	RequirementType any `json:"requirement_type"`
}

// GroupPolicyIntentRequirementResponsePagedListListMatch is the typed request payload for GroupPolicyIntentRequirementResponsePagedList.ListTyped.
type GroupPolicyIntentRequirementResponsePagedListListMatch struct {
	Id string `json:"id"`
}

// GroupQuote is the typed data model for the group_quote entity.
type GroupQuote struct {
	CostSharing any `json:"cost_sharing"`
	Currency string `json:"currency"`
	EmployeeCount int `json:"employee_count"`
	ExpiresAt string `json:"expires_at"`
	GeneratedAt string `json:"generated_at"`
	Object *string `json:"object,omitempty"`
	PdfExpiresAt *any `json:"pdf_expires_at,omitempty"`
	PdfUrl *any `json:"pdf_url,omitempty"`
	TotalMonthlyPremium float64 `json:"total_monthly_premium"`
}

// GroupQuoteLoadMatch is the typed request payload for GroupQuote.LoadTyped.
type GroupQuoteLoadMatch struct {
	GroupQuoteIntentId string `json:"group_quote_intent_id"`
}

// GroupQuoteIntent is the typed data model for the group_quote_intent entity.
type GroupQuoteIntent struct {
	ActionRequired *any `json:"action_required,omitempty"`
	ConsentLink []any `json:"consent_link"`
	CostSharing *any `json:"cost_sharing,omitempty"`
	Disclosure []any `json:"disclosure"`
	ExpectedStartDate *any `json:"expected_start_date,omitempty"`
	GroupId string `json:"group_id"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	PlanId string `json:"plan_id"`
	Status any `json:"status"`
}

// GroupQuoteIntentLoadMatch is the typed request payload for GroupQuoteIntent.LoadTyped.
type GroupQuoteIntentLoadMatch struct {
	Id string `json:"id"`
}

// GroupQuoteIntentListMatch is the typed request payload for GroupQuoteIntent.ListTyped.
type GroupQuoteIntentListMatch struct {
	ActionRequired *any `json:"action_required,omitempty"`
	ConsentLink *[]any `json:"consent_link,omitempty"`
	CostSharing *any `json:"cost_sharing,omitempty"`
	Disclosure *[]any `json:"disclosure,omitempty"`
	ExpectedStartDate *any `json:"expected_start_date,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Id *string `json:"id,omitempty"`
	Object *string `json:"object,omitempty"`
	PlanId *string `json:"plan_id,omitempty"`
	Status *any `json:"status,omitempty"`
}

// GroupQuoteIntentCreateData is the typed request payload for GroupQuoteIntent.CreateTyped.
type GroupQuoteIntentCreateData struct {
	ActionRequired *any `json:"action_required,omitempty"`
	ConsentLink []any `json:"consent_link"`
	CostSharing *any `json:"cost_sharing,omitempty"`
	Disclosure []any `json:"disclosure"`
	ExpectedStartDate *any `json:"expected_start_date,omitempty"`
	GroupId string `json:"group_id"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	PlanId string `json:"plan_id"`
	Status any `json:"status"`
}

// GroupQuoteIntentRequirementResponsePagedList is the typed data model for the group_quote_intent_requirement_response_paged_list entity.
type GroupQuoteIntentRequirementResponsePagedList struct {
	Id string `json:"id"`
	IsFulfilled bool `json:"is_fulfilled"`
	Object *string `json:"object,omitempty"`
	ObjectId string `json:"object_id"`
	ObjectType any `json:"object_type"`
	RequirementType any `json:"requirement_type"`
}

// GroupQuoteIntentRequirementResponsePagedListListMatch is the typed request payload for GroupQuoteIntentRequirementResponsePagedList.ListTyped.
type GroupQuoteIntentRequirementResponsePagedListListMatch struct {
	Id string `json:"id"`
}

// Plan is the typed data model for the plan entity.
type Plan struct {
	AvailableFrom string `json:"available_from"`
	AvailableTo *any `json:"available_to,omitempty"`
	Country any `json:"country"`
	CoverageOption *any `json:"coverage_option,omitempty"`
	Description string `json:"description"`
	Disclosure []any `json:"disclosure"`
	Document []any `json:"document"`
	EligibleCount *any `json:"eligible_count,omitempty"`
	EmployeeEligibilityCriterion []any `json:"employee_eligibility_criterion"`
	EmployerEligibilityCriterion []any `json:"employer_eligibility_criterion"`
	HealthInsurance *any `json:"health_insurance,omitempty"`
	Id string `json:"id"`
	IneligibleCount *any `json:"ineligible_count,omitempty"`
	Name string `json:"name"`
	Object *string `json:"object,omitempty"`
	Provider any `json:"provider"`
	TotalCount *any `json:"total_count,omitempty"`
	Type any `json:"type"`
}

// PlanLoadMatch is the typed request payload for Plan.LoadTyped.
type PlanLoadMatch struct {
	Id string `json:"id"`
}

// PlanListMatch is the typed request payload for Plan.ListTyped.
type PlanListMatch struct {
	AvailableFrom *string `json:"available_from,omitempty"`
	AvailableTo *any `json:"available_to,omitempty"`
	Country *any `json:"country,omitempty"`
	CoverageOption *any `json:"coverage_option,omitempty"`
	Description *string `json:"description,omitempty"`
	Disclosure *[]any `json:"disclosure,omitempty"`
	Document *[]any `json:"document,omitempty"`
	EligibleCount *any `json:"eligible_count,omitempty"`
	EmployeeEligibilityCriterion *[]any `json:"employee_eligibility_criterion,omitempty"`
	EmployerEligibilityCriterion *[]any `json:"employer_eligibility_criterion,omitempty"`
	HealthInsurance *any `json:"health_insurance,omitempty"`
	Id *string `json:"id,omitempty"`
	IneligibleCount *any `json:"ineligible_count,omitempty"`
	Name *string `json:"name,omitempty"`
	Object *string `json:"object,omitempty"`
	Provider *any `json:"provider,omitempty"`
	TotalCount *any `json:"total_count,omitempty"`
	Type *any `json:"type,omitempty"`
}

// Policy is the typed data model for the policy entity.
type Policy struct {
	BundlingType any `json:"bundling_type"`
	CancellationDate *any `json:"cancellation_date,omitempty"`
	Disclosure []any `json:"disclosure"`
	EmployeeId string `json:"employee_id"`
	EndDate *any `json:"end_date,omitempty"`
	GroupId string `json:"group_id"`
	GroupPolicyId string `json:"group_policy_id"`
	HealthInsurance *any `json:"health_insurance,omitempty"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	Plan any `json:"plan"`
	Provider any `json:"provider"`
	StartDate string `json:"start_date"`
	Status any `json:"status"`
	Type any `json:"type"`
}

// PolicyLoadMatch is the typed request payload for Policy.LoadTyped.
type PolicyLoadMatch struct {
	Id string `json:"id"`
}

// PolicyListMatch is the typed request payload for Policy.ListTyped.
type PolicyListMatch struct {
	BundlingType *any `json:"bundling_type,omitempty"`
	CancellationDate *any `json:"cancellation_date,omitempty"`
	Disclosure *[]any `json:"disclosure,omitempty"`
	EmployeeId *string `json:"employee_id,omitempty"`
	EndDate *any `json:"end_date,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	GroupPolicyId *string `json:"group_policy_id,omitempty"`
	HealthInsurance *any `json:"health_insurance,omitempty"`
	Id *string `json:"id,omitempty"`
	Object *string `json:"object,omitempty"`
	Plan *any `json:"plan,omitempty"`
	Provider *any `json:"provider,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	Status *any `json:"status,omitempty"`
	Type *any `json:"type,omitempty"`
}

// PolicyAmendmentIntent is the typed data model for the policy_amendment_intent entity.
type PolicyAmendmentIntent struct {
	AmendmentReason any `json:"amendment_reason"`
	Disclosure []any `json:"disclosure"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	PendingConfirmation *any `json:"pending_confirmation,omitempty"`
	PolicyId string `json:"policy_id"`
	ProcessingError *any `json:"processing_error,omitempty"`
	RequestedChange []any `json:"requested_change"`
	RequiredAction *any `json:"required_action,omitempty"`
	Status any `json:"status"`
}

// PolicyAmendmentIntentLoadMatch is the typed request payload for PolicyAmendmentIntent.LoadTyped.
type PolicyAmendmentIntentLoadMatch struct {
	Id string `json:"id"`
	PolicyId string `json:"policy_id"`
}

// PolicyAmendmentIntentListMatch is the typed request payload for PolicyAmendmentIntent.ListTyped.
type PolicyAmendmentIntentListMatch struct {
	Id string `json:"id"`
}

// PolicyAmendmentIntentCreateData is the typed request payload for PolicyAmendmentIntent.CreateTyped.
type PolicyAmendmentIntentCreateData struct {
	Id string `json:"id"`
	AmendmentReason any `json:"amendment_reason"`
	Disclosure []any `json:"disclosure"`
	Object *string `json:"object,omitempty"`
	PendingConfirmation *any `json:"pending_confirmation,omitempty"`
	PolicyId string `json:"policy_id"`
	ProcessingError *any `json:"processing_error,omitempty"`
	RequestedChange []any `json:"requested_change"`
	RequiredAction *any `json:"required_action,omitempty"`
	Status any `json:"status"`
}

// PolicyImportIntent is the typed data model for the policy_import_intent entity.
type PolicyImportIntent struct {
	AssociatedPerson []any `json:"associated_person"`
	EmployeeId string `json:"employee_id"`
	GroupId string `json:"group_id"`
	Id string `json:"id"`
	MemberNumber string `json:"member_number"`
	Object *string `json:"object,omitempty"`
	PolicyEndDate *any `json:"policy_end_date,omitempty"`
	PolicyStartDate string `json:"policy_start_date"`
	ProviderPolicyNumber string `json:"provider_policy_number"`
	Status any `json:"status"`
}

// PolicyImportIntentLoadMatch is the typed request payload for PolicyImportIntent.LoadTyped.
type PolicyImportIntentLoadMatch struct {
	Id string `json:"id"`
}

// PolicyImportIntentListMatch is the typed request payload for PolicyImportIntent.ListTyped.
type PolicyImportIntentListMatch struct {
	AssociatedPerson *[]any `json:"associated_person,omitempty"`
	EmployeeId *string `json:"employee_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Id *string `json:"id,omitempty"`
	MemberNumber *string `json:"member_number,omitempty"`
	Object *string `json:"object,omitempty"`
	PolicyEndDate *any `json:"policy_end_date,omitempty"`
	PolicyStartDate *string `json:"policy_start_date,omitempty"`
	ProviderPolicyNumber *string `json:"provider_policy_number,omitempty"`
	Status *any `json:"status,omitempty"`
}

// PolicyImportIntentCreateData is the typed request payload for PolicyImportIntent.CreateTyped.
type PolicyImportIntentCreateData struct {
	AssociatedPerson []any `json:"associated_person"`
	EmployeeId string `json:"employee_id"`
	GroupId string `json:"group_id"`
	Id string `json:"id"`
	MemberNumber string `json:"member_number"`
	Object *string `json:"object,omitempty"`
	PolicyEndDate *any `json:"policy_end_date,omitempty"`
	PolicyStartDate string `json:"policy_start_date"`
	ProviderPolicyNumber string `json:"provider_policy_number"`
	Status any `json:"status"`
}

// Provider is the typed data model for the provider entity.
type Provider struct {
	Description string `json:"description"`
	EmployerPlatformUrl *any `json:"employer_platform_url,omitempty"`
	Id string `json:"id"`
	KotaHubUrl *any `json:"kota_hub_url,omitempty"`
	LogoUrl string `json:"logo_url"`
	Name string `json:"name"`
	Object *string `json:"object,omitempty"`
	SupportPhone string `json:"support_phone"`
	SupportedCountry []any `json:"supported_country"`
	WebsiteUrl string `json:"website_url"`
}

// ProviderLoadMatch is the typed request payload for Provider.LoadTyped.
type ProviderLoadMatch struct {
	Id string `json:"id"`
}

// ProviderListMatch is the typed request payload for Provider.ListTyped.
type ProviderListMatch struct {
	Description *string `json:"description,omitempty"`
	EmployerPlatformUrl *any `json:"employer_platform_url,omitempty"`
	Id *string `json:"id,omitempty"`
	KotaHubUrl *any `json:"kota_hub_url,omitempty"`
	LogoUrl *string `json:"logo_url,omitempty"`
	Name *string `json:"name,omitempty"`
	Object *string `json:"object,omitempty"`
	SupportPhone *string `json:"support_phone,omitempty"`
	SupportedCountry *[]any `json:"supported_country,omitempty"`
	WebsiteUrl *string `json:"website_url,omitempty"`
}

// Replay is the typed data model for the replay entity.
type Replay struct {
	Delivery []any `json:"delivery"`
	EventId string `json:"event_id"`
}

// ReplayCreateData is the typed request payload for Replay.CreateTyped.
type ReplayCreateData struct {
	EventId string `json:"event_id"`
	Delivery []any `json:"delivery"`
}

// WebhookEndpoint is the typed data model for the webhook_endpoint entity.
type WebhookEndpoint struct {
	CreatedAt string `json:"created_at"`
	EndpointUrl string `json:"endpoint_url"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	SubscribedEvent []any `json:"subscribed_event"`
}

// WebhookEndpointLoadMatch is the typed request payload for WebhookEndpoint.LoadTyped.
type WebhookEndpointLoadMatch struct {
	Id string `json:"id"`
}

// WebhookEndpointResponsePagedList is the typed data model for the webhook_endpoint_response_paged_list entity.
type WebhookEndpointResponsePagedList struct {
	CreatedAt string `json:"created_at"`
	EndpointUrl string `json:"endpoint_url"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	SubscribedEvent []any `json:"subscribed_event"`
}

// WebhookEndpointResponsePagedListListMatch is the typed request payload for WebhookEndpointResponsePagedList.ListTyped.
type WebhookEndpointResponsePagedListListMatch struct {
	CreatedAt *string `json:"created_at,omitempty"`
	EndpointUrl *string `json:"endpoint_url,omitempty"`
	Id *string `json:"id,omitempty"`
	Object *string `json:"object,omitempty"`
	SubscribedEvent *[]any `json:"subscribed_event,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
