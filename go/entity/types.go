// Typed models for the Kota SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields{} and per-op
// params (op.<name>.points[].g.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/kota-sdk/go/core"
)

// AssociatedPerson is the typed data model for the associated_person entity.
type AssociatedPerson struct {
}

// AssociatedPersonLoadMatch is the typed request payload for AssociatedPerson.LoadTyped.
type AssociatedPersonLoadMatch struct {
	EmployeeId string `json:"employee_id"`
	Id string `json:"id"`
}

// AssociatedPersonListMatch is the typed request payload for AssociatedPerson.ListTyped.
type AssociatedPersonListMatch struct {
	EmployeeId string `json:"employee_id"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
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
	RelationshipType string `json:"relationship_type"`
	SexAtBirth string `json:"sex_at_birth"`
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
	RelationshipType *string `json:"relationship_type,omitempty"`
	SexAtBirth *string `json:"sex_at_birth,omitempty"`
}

// AssociatedPersonRemoveMatch is the typed request payload for AssociatedPerson.RemoveTyped.
type AssociatedPersonRemoveMatch struct {
	EmployeeId string `json:"employee_id"`
	Id string `json:"id"`
}

// AssociatedPersonEligibilityResponsePagedList is the typed data model for the associated_person_eligibility_response_paged_list entity.
type AssociatedPersonEligibilityResponsePagedList struct {
}

// AssociatedPersonEligibilityResponsePagedListListMatch is the typed request payload for AssociatedPersonEligibilityResponsePagedList.ListTyped.
type AssociatedPersonEligibilityResponsePagedListListMatch struct {
	DependentsManagementIntentId string `json:"dependents_management_intent_id"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// ContributionReport is the typed data model for the contribution_report entity.
type ContributionReport struct {
}

// ContributionReportLoadMatch is the typed request payload for ContributionReport.LoadTyped.
type ContributionReportLoadMatch struct {
	Id string `json:"id"`
}

// ContributionReportListMatch is the typed request payload for ContributionReport.ListTyped.
type ContributionReportListMatch struct {
	EmployerId *string `json:"employer_id,omitempty"`
	ExternalCustomerId *string `json:"external_customer_id,omitempty"`
	Month *int `json:"month,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Status *string `json:"status,omitempty"`
	Year *int `json:"year,omitempty"`
}

// ContributionReportCreateData is the typed request payload for ContributionReport.CreateTyped.
type ContributionReportCreateData struct {
	Id string `json:"id"`
	Aggregates any `json:"aggregates"`
	CreatedAt string `json:"created_at"`
	EmployerId string `json:"employer_id"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	FileId *any `json:"file_id,omitempty"`
	FileStatus *any `json:"file_status,omitempty"`
	FinalizedAt *any `json:"finalized_at,omitempty"`
	LastUpdatedAt string `json:"last_updated_at"`
	Object *string `json:"object,omitempty"`
	Period any `json:"period"`
	Status string `json:"status"`
}

// ContributionReportEmployeeBreakdown is the typed data model for the contribution_report_employee_breakdown entity.
type ContributionReportEmployeeBreakdown struct {
}

// ContributionReportEmployeeBreakdownLoadMatch is the typed request payload for ContributionReportEmployeeBreakdown.LoadTyped.
type ContributionReportEmployeeBreakdownLoadMatch struct {
	ContributionReportId string `json:"contribution_report_id"`
	Id string `json:"id"`
}

// ContributionReportEmployeeBreakdownResponsePagedList is the typed data model for the contribution_report_employee_breakdown_response_paged_list entity.
type ContributionReportEmployeeBreakdownResponsePagedList struct {
}

// ContributionReportEmployeeBreakdownResponsePagedListListMatch is the typed request payload for ContributionReportEmployeeBreakdownResponsePagedList.ListTyped.
type ContributionReportEmployeeBreakdownResponsePagedListListMatch struct {
	Id string `json:"id"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// CreateHostedSessionToken is the typed data model for the create_hosted_session_token entity.
type CreateHostedSessionToken struct {
}

// CreateHostedSessionTokenCreateData is the typed request payload for CreateHostedSessionToken.CreateTyped.
type CreateHostedSessionTokenCreateData struct {
	EmployeeId string `json:"employee_id"`
	EmployerId string `json:"employer_id"`
	Expiry string `json:"expiry"`
	Link string `json:"link"`
}

// CreateSessionToken is the typed data model for the create_session_token entity.
type CreateSessionToken struct {
}

// CreateSessionTokenCreateData is the typed request payload for CreateSessionToken.CreateTyped.
type CreateSessionTokenCreateData struct {
	EmployeeId *any `json:"employee_id,omitempty"`
	EmployerId string `json:"employer_id"`
	Expiry string `json:"expiry"`
	ExternalCustomerId *any `json:"external_customer_id,omitempty"`
	Token string `json:"token"`
}

// Dependent is the typed data model for the dependent entity.
type Dependent struct {
}

// DependentCreateData is the typed request payload for Dependent.CreateTyped.
type DependentCreateData struct {
	DependentsManagementIntentId string `json:"dependents_management_intent_id"`
	ActionRequired *any `json:"action_required,omitempty"`
	AssociatedPersonIds []any `json:"associated_person_ids"`
	CoverageOptions *any `json:"coverage_options,omitempty"`
	DependentCoverageSelections *any `json:"dependent_coverage_selections,omitempty"`
	Dependents []any `json:"dependents"`
	Disclosures []any `json:"disclosures"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	ParentIntentId string `json:"parent_intent_id"`
	ParentIntentType string `json:"parent_intent_type"`
	Plan any `json:"plan"`
	Status string `json:"status"`
}

// DependentRemoveMatch is the typed request payload for Dependent.RemoveTyped.
type DependentRemoveMatch struct {
	DependentsManagementIntentId string `json:"dependents_management_intent_id"`
	Id string `json:"id"`
}

// DependentsManagementIntent is the typed data model for the dependents_management_intent entity.
type DependentsManagementIntent struct {
}

// DependentsManagementIntentLoadMatch is the typed request payload for DependentsManagementIntent.LoadTyped.
type DependentsManagementIntentLoadMatch struct {
	Id string `json:"id"`
}

// DependentsManagementIntentCreateData is the typed request payload for DependentsManagementIntent.CreateTyped.
type DependentsManagementIntentCreateData struct {
	EnrolmentIntentId string `json:"enrolment_intent_id"`
	ActionRequired *any `json:"action_required,omitempty"`
	CoverageOptions *any `json:"coverage_options,omitempty"`
	Dependents []any `json:"dependents"`
	Disclosures []any `json:"disclosures"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	ParentIntentId string `json:"parent_intent_id"`
	ParentIntentType string `json:"parent_intent_type"`
	Plan any `json:"plan"`
	Status string `json:"status"`
}

// EligibilityCheck is the typed data model for the eligibility_check entity.
type EligibilityCheck struct {
}

// EligibilityCheckCreateData is the typed request payload for EligibilityCheck.CreateTyped.
type EligibilityCheckCreateData struct {
	GroupId string `json:"group_id"`
	EligibilityStatus string `json:"eligibility_status"`
	EmployeeId string `json:"employee_id"`
	Object *string `json:"object,omitempty"`
	Plan any `json:"plan"`
	Provider any `json:"provider"`
	Reasons []any `json:"reasons"`
}

// Employee is the typed data model for the employee entity.
type Employee struct {
}

// EmployeeLoadMatch is the typed request payload for Employee.LoadTyped.
type EmployeeLoadMatch struct {
	Id string `json:"id"`
}

// EmployeeListMatch is the typed request payload for Employee.ListTyped.
type EmployeeListMatch struct {
	EmployerId *string `json:"employer_id,omitempty"`
	ExternalCustomerId *string `json:"external_customer_id,omitempty"`
	Filter *string `json:"filter,omitempty"`
	MetadataId *string `json:"metadata_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
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
	PhoneNumber any `json:"phone_number"`
	PlatformId *string `json:"platform_id,omitempty"`
	SexAtBirth string `json:"sex_at_birth"`
	StartOn *string `json:"start_on,omitempty"`
	Status *string `json:"status,omitempty"`
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
	PhoneNumber *any `json:"phone_number,omitempty"`
	PlatformId *string `json:"platform_id,omitempty"`
	SexAtBirth *string `json:"sex_at_birth,omitempty"`
	StartOn *string `json:"start_on,omitempty"`
	Status *string `json:"status,omitempty"`
}

// EmployeeHealthInsuranceOffer is the typed data model for the employee_health_insurance_offer entity.
type EmployeeHealthInsuranceOffer struct {
}

// EmployeeHealthInsuranceOfferLoadMatch is the typed request payload for EmployeeHealthInsuranceOffer.LoadTyped.
type EmployeeHealthInsuranceOfferLoadMatch struct {
	EmployeeId string `json:"employee_id"`
	Id string `json:"id"`
}

// EmployeeHealthInsuranceOfferResponsePagedList is the typed data model for the employee_health_insurance_offer_response_paged_list entity.
type EmployeeHealthInsuranceOfferResponsePagedList struct {
}

// EmployeeHealthInsuranceOfferResponsePagedListListMatch is the typed request payload for EmployeeHealthInsuranceOfferResponsePagedList.ListTyped.
type EmployeeHealthInsuranceOfferResponsePagedListListMatch struct {
	EmployeeId string `json:"employee_id"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// EmployeeHealthInsurancePolicy is the typed data model for the employee_health_insurance_policy entity.
type EmployeeHealthInsurancePolicy struct {
}

// EmployeeHealthInsurancePolicyLoadMatch is the typed request payload for EmployeeHealthInsurancePolicy.LoadTyped.
type EmployeeHealthInsurancePolicyLoadMatch struct {
	EmployeeId string `json:"employee_id"`
	Id string `json:"id"`
}

// EmployeeHealthInsurancePolicyResponsePagedList is the typed data model for the employee_health_insurance_policy_response_paged_list entity.
type EmployeeHealthInsurancePolicyResponsePagedList struct {
}

// EmployeeHealthInsurancePolicyResponsePagedListListMatch is the typed request payload for EmployeeHealthInsurancePolicyResponsePagedList.ListTyped.
type EmployeeHealthInsurancePolicyResponsePagedListListMatch struct {
	EmployeeId string `json:"employee_id"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Status *string `json:"status,omitempty"`
}

// Employer is the typed data model for the employer entity.
type Employer struct {
}

// EmployerLoadMatch is the typed request payload for Employer.LoadTyped.
type EmployerLoadMatch struct {
	Id string `json:"id"`
}

// EmployerListMatch is the typed request payload for Employer.ListTyped.
type EmployerListMatch struct {
	Filter *string `json:"filter,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// EmployerCreateData is the typed request payload for Employer.CreateTyped.
type EmployerCreateData struct {
	ApplicableCollectiveAgreement *any `json:"applicable_collective_agreement,omitempty"`
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
	Status *string `json:"status,omitempty"`
}

// EmployerUpdateData is the typed request payload for Employer.UpdateTyped.
type EmployerUpdateData struct {
	Id string `json:"id"`
	ApplicableCollectiveAgreement *any `json:"applicable_collective_agreement,omitempty"`
	Contact *any `json:"contact,omitempty"`
	EarliestBenefitsStartDate *any `json:"earliest_benefits_start_date,omitempty"`
	LegalAddress *any `json:"legal_address,omitempty"`
	LegalName *string `json:"legal_name,omitempty"`
	Metadata *any `json:"metadata,omitempty"`
	Object *string `json:"object,omitempty"`
	OffboardOn *any `json:"offboard_on,omitempty"`
	PlatformId *string `json:"platform_id,omitempty"`
	RegistrationNumber *any `json:"registration_number,omitempty"`
	Status *string `json:"status,omitempty"`
}

// EmployerHealthInsurancePolicy is the typed data model for the employer_health_insurance_policy entity.
type EmployerHealthInsurancePolicy struct {
}

// EmployerHealthInsurancePolicyLoadMatch is the typed request payload for EmployerHealthInsurancePolicy.LoadTyped.
type EmployerHealthInsurancePolicyLoadMatch struct {
	EmployerId string `json:"employer_id"`
	Id string `json:"id"`
}

// EmployerHealthInsurancePolicyResponsePagedList is the typed data model for the employer_health_insurance_policy_response_paged_list entity.
type EmployerHealthInsurancePolicyResponsePagedList struct {
}

// EmployerHealthInsurancePolicyResponsePagedListListMatch is the typed request payload for EmployerHealthInsurancePolicyResponsePagedList.ListTyped.
type EmployerHealthInsurancePolicyResponsePagedListListMatch struct {
	EmployerId string `json:"employer_id"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Status *string `json:"status,omitempty"`
}

// EmployerHealthInsuranceQuote is the typed data model for the employer_health_insurance_quote entity.
type EmployerHealthInsuranceQuote struct {
}

// EmployerHealthInsuranceQuoteLoadMatch is the typed request payload for EmployerHealthInsuranceQuote.LoadTyped.
type EmployerHealthInsuranceQuoteLoadMatch struct {
	EmployerId string `json:"employer_id"`
	Id string `json:"id"`
}

// EmployerHealthInsuranceQuoteResponsePagedList is the typed data model for the employer_health_insurance_quote_response_paged_list entity.
type EmployerHealthInsuranceQuoteResponsePagedList struct {
}

// EmployerHealthInsuranceQuoteResponsePagedListListMatch is the typed request payload for EmployerHealthInsuranceQuoteResponsePagedList.ListTyped.
type EmployerHealthInsuranceQuoteResponsePagedListListMatch struct {
	EmployerId string `json:"employer_id"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Status *string `json:"status,omitempty"`
}

// EnrolmentIntent is the typed data model for the enrolment_intent entity.
type EnrolmentIntent struct {
}

// EnrolmentIntentLoadMatch is the typed request payload for EnrolmentIntent.LoadTyped.
type EnrolmentIntentLoadMatch struct {
	Id string `json:"id"`
}

// EnrolmentIntentListMatch is the typed request payload for EnrolmentIntent.ListTyped.
type EnrolmentIntentListMatch struct {
	EmployeeId *string `json:"employee_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Status *string `json:"status,omitempty"`
}

// EnrolmentIntentCreateData is the typed request payload for EnrolmentIntent.CreateTyped.
type EnrolmentIntentCreateData struct {
	ActionRequired *any `json:"action_required,omitempty"`
	CoverageSelections *any `json:"coverage_selections,omitempty"`
	DesiredPolicyStartDate *any `json:"desired_policy_start_date,omitempty"`
	Disclosures []any `json:"disclosures"`
	EmployeeId string `json:"employee_id"`
	EnrolmentDate *any `json:"enrolment_date,omitempty"`
	ForceConfirmation bool `json:"force_confirmation"`
	GroupId string `json:"group_id"`
	Id string `json:"id"`
	IneligibilityReason *any `json:"ineligibility_reason,omitempty"`
	Object *string `json:"object,omitempty"`
	PendingConfirmation *any `json:"pending_confirmation,omitempty"`
	PolicyConfiguration *any `json:"policy_configuration,omitempty"`
	PolicyEnrolments []any `json:"policy_enrolments"`
	Status string `json:"status"`
}

// EnrolmentIntentUpdateData is the typed request payload for EnrolmentIntent.UpdateTyped.
type EnrolmentIntentUpdateData struct {
	Id string `json:"id"`
	ActionRequired *any `json:"action_required,omitempty"`
	CoverageSelections *any `json:"coverage_selections,omitempty"`
	DesiredPolicyStartDate *any `json:"desired_policy_start_date,omitempty"`
	Disclosures *[]any `json:"disclosures,omitempty"`
	EmployeeId *string `json:"employee_id,omitempty"`
	EnrolmentDate *any `json:"enrolment_date,omitempty"`
	ForceConfirmation *bool `json:"force_confirmation,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	IneligibilityReason *any `json:"ineligibility_reason,omitempty"`
	Object *string `json:"object,omitempty"`
	PendingConfirmation *any `json:"pending_confirmation,omitempty"`
	PolicyConfiguration *any `json:"policy_configuration,omitempty"`
	PolicyEnrolments *[]any `json:"policy_enrolments,omitempty"`
	Status *string `json:"status,omitempty"`
}

// EnrolmentIntentRequirementResponsePagedList is the typed data model for the enrolment_intent_requirement_response_paged_list entity.
type EnrolmentIntentRequirementResponsePagedList struct {
}

// EnrolmentIntentRequirementResponsePagedListListMatch is the typed request payload for EnrolmentIntentRequirementResponsePagedList.ListTyped.
type EnrolmentIntentRequirementResponsePagedListListMatch struct {
	Id string `json:"id"`
	ObjectId *string `json:"object_id,omitempty"`
	ObjectType *string `json:"object_type,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// Event is the typed data model for the event entity.
type Event struct {
}

// EventLoadMatch is the typed request payload for Event.LoadTyped.
type EventLoadMatch struct {
	Id string `json:"id"`
}

// EventListMatch is the typed request payload for Event.ListTyped.
type EventListMatch struct {
	CreatedAfter *string `json:"created_after,omitempty"`
	OrderDirection *string `json:"order_direction,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Version *string `json:"version,omitempty"`
}

// EventCreateData is the typed request payload for Event.CreateTyped.
type EventCreateData struct {
	Id string `json:"id"`
	ApiVersion *string `json:"api_version,omitempty"`
	Created string `json:"created"`
	Data any `json:"data"`
	PlatformId string `json:"platform_id"`
	Type string `json:"type"`
}

// Group is the typed data model for the group entity.
type Group struct {
}

// GroupLoadMatch is the typed request payload for Group.LoadTyped.
type GroupLoadMatch struct {
	Id string `json:"id"`
}

// GroupListMatch is the typed request payload for Group.ListTyped.
type GroupListMatch struct {
	EmployerId *string `json:"employer_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Status *string `json:"status,omitempty"`
}

// GroupCreateData is the typed request payload for Group.CreateTyped.
type GroupCreateData struct {
	Description *any `json:"description,omitempty"`
	EmployerId string `json:"employer_id"`
	EnrolmentType string `json:"enrolment_type"`
	GroupPolicyIds []any `json:"group_policy_ids"`
	GroupPolicyIntentIds []any `json:"group_policy_intent_ids"`
	GroupQuoteIntentIds []any `json:"group_quote_intent_ids"`
	GroupType string `json:"group_type"`
	Id string `json:"id"`
	Name string `json:"name"`
	Object *string `json:"object,omitempty"`
	Status string `json:"status"`
}

// GroupUpdateData is the typed request payload for Group.UpdateTyped.
type GroupUpdateData struct {
	Id string `json:"id"`
	Description *any `json:"description,omitempty"`
	EmployerId *string `json:"employer_id,omitempty"`
	EnrolmentType *string `json:"enrolment_type,omitempty"`
	GroupPolicyIds *[]any `json:"group_policy_ids,omitempty"`
	GroupPolicyIntentIds *[]any `json:"group_policy_intent_ids,omitempty"`
	GroupQuoteIntentIds *[]any `json:"group_quote_intent_ids,omitempty"`
	GroupType *string `json:"group_type,omitempty"`
	Name *string `json:"name,omitempty"`
	Object *string `json:"object,omitempty"`
	Status *string `json:"status,omitempty"`
}

// GroupEmployee is the typed data model for the group_employee entity.
type GroupEmployee struct {
}

// GroupEmployeeCreateData is the typed request payload for GroupEmployee.CreateTyped.
type GroupEmployeeCreateData struct {
	Id string `json:"id"`
	CreateEnrolmentIntents *any `json:"create_enrolment_intents,omitempty"`
	DesiredPolicyStartDate *any `json:"desired_policy_start_date,omitempty"`
	EligibilityStatus string `json:"eligibility_status"`
	EmployeeId string `json:"employee_id"`
	EnrolmentDate *any `json:"enrolment_date,omitempty"`
	EnrolmentStatus string `json:"enrolment_status"`
	Enrolments []any `json:"enrolments"`
	GroupId string `json:"group_id"`
	Object *string `json:"object,omitempty"`
	Policies []any `json:"policies"`
	PolicyConfiguration *any `json:"policy_configuration,omitempty"`
	ScheduledGroupTransitions []any `json:"scheduled_group_transitions"`
}

// GroupEmployeeResponsePagedList is the typed data model for the group_employee_response_paged_list entity.
type GroupEmployeeResponsePagedList struct {
}

// GroupEmployeeResponsePagedListListMatch is the typed request payload for GroupEmployeeResponsePagedList.ListTyped.
type GroupEmployeeResponsePagedListListMatch struct {
	Id string `json:"id"`
	EmployeeId *string `json:"employee_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// GroupPolicy is the typed data model for the group_policy entity.
type GroupPolicy struct {
}

// GroupPolicyLoadMatch is the typed request payload for GroupPolicy.LoadTyped.
type GroupPolicyLoadMatch struct {
	Id string `json:"id"`
}

// GroupPolicyListMatch is the typed request payload for GroupPolicy.ListTyped.
type GroupPolicyListMatch struct {
	EmployerId *string `json:"employer_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Status *string `json:"status,omitempty"`
}

// GroupPolicyIntent is the typed data model for the group_policy_intent entity.
type GroupPolicyIntent struct {
}

// GroupPolicyIntentLoadMatch is the typed request payload for GroupPolicyIntent.LoadTyped.
type GroupPolicyIntentLoadMatch struct {
	Id string `json:"id"`
}

// GroupPolicyIntentListMatch is the typed request payload for GroupPolicyIntent.ListTyped.
type GroupPolicyIntentListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	PlanId *string `json:"plan_id,omitempty"`
	Status *string `json:"status,omitempty"`
	Type *string `json:"type,omitempty"`
}

// GroupPolicyIntentCreateData is the typed request payload for GroupPolicyIntent.CreateTyped.
type GroupPolicyIntentCreateData struct {
	ActionRequired *any `json:"action_required,omitempty"`
	ConsentApprovals *any `json:"consent_approvals,omitempty"`
	CostSharing *any `json:"cost_sharing,omitempty"`
	Disclosures []any `json:"disclosures"`
	DueDate *any `json:"due_date,omitempty"`
	GroupId any `json:"group_id"`
	GroupPolicyIds []any `json:"group_policy_ids"`
	Id string `json:"id"`
	Items []any `json:"items"`
	Object *string `json:"object,omitempty"`
	PlanId any `json:"plan_id"`
	QuoteIntentId string `json:"quote_intent_id"`
	Status string `json:"status"`
	Type *any `json:"type,omitempty"`
}

// GroupPolicyIntentRequirementResponsePagedList is the typed data model for the group_policy_intent_requirement_response_paged_list entity.
type GroupPolicyIntentRequirementResponsePagedList struct {
}

// GroupPolicyIntentRequirementResponsePagedListListMatch is the typed request payload for GroupPolicyIntentRequirementResponsePagedList.ListTyped.
type GroupPolicyIntentRequirementResponsePagedListListMatch struct {
	Id string `json:"id"`
	ObjectId *string `json:"object_id,omitempty"`
	ObjectType *string `json:"object_type,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// GroupQuote is the typed data model for the group_quote entity.
type GroupQuote struct {
}

// GroupQuoteListMatch is the typed request payload for GroupQuote.ListTyped.
type GroupQuoteListMatch struct {
	GroupQuoteIntentId string `json:"group_quote_intent_id"`
}

// GroupQuoteIntent is the typed data model for the group_quote_intent entity.
type GroupQuoteIntent struct {
}

// GroupQuoteIntentLoadMatch is the typed request payload for GroupQuoteIntent.LoadTyped.
type GroupQuoteIntentLoadMatch struct {
	Id string `json:"id"`
}

// GroupQuoteIntentListMatch is the typed request payload for GroupQuoteIntent.ListTyped.
type GroupQuoteIntentListMatch struct {
	GroupId *string `json:"group_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	PlanId *string `json:"plan_id,omitempty"`
	Status *string `json:"status,omitempty"`
	Type *string `json:"type,omitempty"`
}

// GroupQuoteIntentCreateData is the typed request payload for GroupQuoteIntent.CreateTyped.
type GroupQuoteIntentCreateData struct {
	ActionRequired *any `json:"action_required,omitempty"`
	ConsentLinks []any `json:"consent_links"`
	CostSharing *any `json:"cost_sharing,omitempty"`
	CoverageSelections *any `json:"coverage_selections,omitempty"`
	Disclosures []any `json:"disclosures"`
	ExpectedStartDate *any `json:"expected_start_date,omitempty"`
	GroupId any `json:"group_id"`
	Id string `json:"id"`
	Items []any `json:"items"`
	Object *string `json:"object,omitempty"`
	PlanId any `json:"plan_id"`
	Status string `json:"status"`
	Type *any `json:"type,omitempty"`
}

// GroupQuoteIntentRequirementResponsePagedList is the typed data model for the group_quote_intent_requirement_response_paged_list entity.
type GroupQuoteIntentRequirementResponsePagedList struct {
}

// GroupQuoteIntentRequirementResponsePagedListListMatch is the typed request payload for GroupQuoteIntentRequirementResponsePagedList.ListTyped.
type GroupQuoteIntentRequirementResponsePagedListListMatch struct {
	Id string `json:"id"`
	ObjectId *string `json:"object_id,omitempty"`
	ObjectType *string `json:"object_type,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// Plan is the typed data model for the plan entity.
type Plan struct {
}

// PlanLoadMatch is the typed request payload for Plan.LoadTyped.
type PlanLoadMatch struct {
	Id string `json:"id"`
	GroupId *string `json:"group_id,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
}

// PlanListMatch is the typed request payload for Plan.ListTyped.
type PlanListMatch struct {
	AvailableOn *string `json:"available_on,omitempty"`
	Country *string `json:"country,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	ProviderId *string `json:"provider_id,omitempty"`
	SortBy *string `json:"sort_by,omitempty"`
	SortDir *string `json:"sort_dir,omitempty"`
	StartDate *string `json:"start_date,omitempty"`
	Type *string `json:"type,omitempty"`
}

// Policy is the typed data model for the policy entity.
type Policy struct {
}

// PolicyLoadMatch is the typed request payload for Policy.LoadTyped.
type PolicyLoadMatch struct {
	Id string `json:"id"`
}

// PolicyListMatch is the typed request payload for Policy.ListTyped.
type PolicyListMatch struct {
	EmployeeId *string `json:"employee_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	GroupPolicyId *string `json:"group_policy_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Status *string `json:"status,omitempty"`
}

// PolicyAmendmentIntent is the typed data model for the policy_amendment_intent entity.
type PolicyAmendmentIntent struct {
}

// PolicyAmendmentIntentLoadMatch is the typed request payload for PolicyAmendmentIntent.LoadTyped.
type PolicyAmendmentIntentLoadMatch struct {
	Id string `json:"id"`
	PolicyId string `json:"policy_id"`
}

// PolicyAmendmentIntentListMatch is the typed request payload for PolicyAmendmentIntent.ListTyped.
type PolicyAmendmentIntentListMatch struct {
	Id string `json:"id"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Status *string `json:"status,omitempty"`
}

// PolicyAmendmentIntentCreateData is the typed request payload for PolicyAmendmentIntent.CreateTyped.
type PolicyAmendmentIntentCreateData struct {
	Id string `json:"id"`
	AmendmentReason any `json:"amendment_reason"`
	Disclosures []any `json:"disclosures"`
	Object *string `json:"object,omitempty"`
	PendingConfirmation *any `json:"pending_confirmation,omitempty"`
	PolicyId string `json:"policy_id"`
	ProcessingError *any `json:"processing_error,omitempty"`
	RequestedChanges []any `json:"requested_changes"`
	RequiredAction *any `json:"required_action,omitempty"`
	Status string `json:"status"`
}

// PolicyImportIntent is the typed data model for the policy_import_intent entity.
type PolicyImportIntent struct {
}

// PolicyImportIntentLoadMatch is the typed request payload for PolicyImportIntent.LoadTyped.
type PolicyImportIntentLoadMatch struct {
	Id string `json:"id"`
}

// PolicyImportIntentListMatch is the typed request payload for PolicyImportIntent.ListTyped.
type PolicyImportIntentListMatch struct {
	EmployeeId *string `json:"employee_id,omitempty"`
	GroupId *string `json:"group_id,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
	Status *string `json:"status,omitempty"`
}

// PolicyImportIntentCreateData is the typed request payload for PolicyImportIntent.CreateTyped.
type PolicyImportIntentCreateData struct {
	AssociatedPersons []any `json:"associated_persons"`
	EmployeeId string `json:"employee_id"`
	GroupId string `json:"group_id"`
	Id string `json:"id"`
	MemberNumber string `json:"member_number"`
	Object *string `json:"object,omitempty"`
	PolicyEndDate *any `json:"policy_end_date,omitempty"`
	PolicyStartDate string `json:"policy_start_date"`
	ProviderPolicyNumber string `json:"provider_policy_number"`
	Status string `json:"status"`
}

// Provider is the typed data model for the provider entity.
type Provider struct {
}

// ProviderLoadMatch is the typed request payload for Provider.LoadTyped.
type ProviderLoadMatch struct {
	Id string `json:"id"`
}

// ProviderListMatch is the typed request payload for Provider.ListTyped.
type ProviderListMatch struct {
	Country *string `json:"country,omitempty"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// Salary is the typed data model for the salary entity.
type Salary struct {
}

// SalaryLoadMatch is the typed request payload for Salary.LoadTyped.
type SalaryLoadMatch struct {
	EmployeeId string `json:"employee_id"`
	Id string `json:"id"`
}

// SalaryListMatch is the typed request payload for Salary.ListTyped.
type SalaryListMatch struct {
	EmployeeId string `json:"employee_id"`
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
}

// SalaryCreateData is the typed request payload for Salary.CreateTyped.
type SalaryCreateData struct {
	EmployeeId string `json:"employee_id"`
	Amount float64 `json:"amount"`
	Currency string `json:"currency"`
	EffectiveFrom string `json:"effective_from"`
	Id string `json:"id"`
	Object *string `json:"object,omitempty"`
	PayFrequency string `json:"pay_frequency"`
}

// SalaryRemoveMatch is the typed request payload for Salary.RemoveTyped.
type SalaryRemoveMatch struct {
	EmployeeId string `json:"employee_id"`
	Id string `json:"id"`
}

// WebhookEndpoint is the typed data model for the webhook_endpoint entity.
type WebhookEndpoint struct {
}

// WebhookEndpointLoadMatch is the typed request payload for WebhookEndpoint.LoadTyped.
type WebhookEndpointLoadMatch struct {
	Id string `json:"id"`
}

// WebhookEndpointListMatch is the typed request payload for WebhookEndpoint.ListTyped.
type WebhookEndpointListMatch struct {
	Page *int `json:"page,omitempty"`
	PageSize *int `json:"page_size,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
