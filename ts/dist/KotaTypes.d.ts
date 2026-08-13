export interface AssociatedPerson {
    date_of_birth: string;
    email?: null | string;
    employee_id: string;
    first_name: string;
    id: string;
    last_name: string;
    object?: string;
    phone_number?: null | string;
    platform_id?: string;
    relationship_type: any;
    sex_at_birth: any;
}
export interface AssociatedPersonLoadMatch {
    employee_id: string;
    id: string;
}
export interface AssociatedPersonListMatch {
    employee_id: string;
}
export interface AssociatedPersonCreateData {
    employee_id: string;
    date_of_birth: string;
    email?: null | string;
    first_name: string;
    id: string;
    last_name: string;
    object?: string;
    phone_number?: null | string;
    platform_id?: string;
    relationship_type: any;
    sex_at_birth: any;
}
export interface AssociatedPersonUpdateData {
    employee_id: string;
    id: string;
    date_of_birth?: string;
    email?: null | string;
    first_name?: string;
    last_name?: string;
    object?: string;
    phone_number?: null | string;
    platform_id?: string;
    relationship_type?: any;
    sex_at_birth?: any;
}
export interface AssociatedPersonRemoveMatch {
    employee_id: string;
    id: string;
}
export interface AssociatedPersonEligibilityResponsePagedList {
    associated_person_id: string;
    date_of_birth: string;
    eligibility_status: any;
    first_name: string;
    ineligibility_reason?: null | string;
    last_name: string;
    object?: string;
    relationship: any;
    sex_at_birth: any;
}
export interface AssociatedPersonEligibilityResponsePagedListListMatch {
    dependents_management_intent_id: string;
}
export interface ContributionReport {
    created_at: string;
    employer_id: string;
    external_customer_id?: null | string;
    finalized_at?: null | string;
    id: string;
    last_updated_at: string;
    object?: string;
    period: any;
    status: any;
}
export interface ContributionReportLoadMatch {
    id: string;
}
export interface ContributionReportListMatch {
    created_at?: string;
    employer_id?: string;
    external_customer_id?: null | string;
    finalized_at?: null | string;
    id?: string;
    last_updated_at?: string;
    object?: string;
    period?: any;
    status?: any;
}
export interface ContributionReportCreateData {
    id: string;
    created_at: string;
    employer_id: string;
    external_customer_id?: null | string;
    finalized_at?: null | string;
    last_updated_at: string;
    object?: string;
    period: any;
    status: any;
}
export interface ContributionReportEmployeeBreakdown {
    contribution_report_id: string;
    created_at: string;
    currency: any;
    employee_id: string;
    employer_id: string;
    external_customer_id?: null | string;
    finalized_at?: null | string;
    health_insurance: any;
    last_updated_at: string;
    object?: string;
    period: any;
    status: any;
}
export interface ContributionReportEmployeeBreakdownLoadMatch {
    contribution_report_id: string;
    id: string;
}
export interface ContributionReportEmployeeBreakdownResponsePagedList {
    contribution_report_id: string;
    created_at: string;
    currency: any;
    employee_id: string;
    employer_id: string;
    external_customer_id?: null | string;
    finalized_at?: null | string;
    health_insurance: any;
    last_updated_at: string;
    object?: string;
    period: any;
    status: any;
}
export interface ContributionReportEmployeeBreakdownResponsePagedListListMatch {
    id: string;
}
export interface CreateHostedSessionToken {
    expiry: string;
    link: string;
}
export interface CreateHostedSessionTokenCreateData {
    expiry: string;
    link: string;
}
export interface CreateSessionToken {
    expiry: string;
    token: string;
}
export interface CreateSessionTokenCreateData {
    expiry: string;
    token: string;
}
export interface Dependent {
    action_required?: null;
    coverage_option?: null | any[];
    dependent: any[];
    disclosure: any[];
    id: string;
    object?: string;
    parent_intent_id: string;
    parent_intent_type: any;
    plan: any;
    status: any;
}
export interface DependentCreateData {
    dependents_management_intent_id: string;
    action_required?: null;
    coverage_option?: null | any[];
    dependent: any[];
    disclosure: any[];
    id: string;
    object?: string;
    parent_intent_id: string;
    parent_intent_type: any;
    plan: any;
    status: any;
}
export interface DependentRemoveMatch {
    dependents_management_intent_id: string;
    id: string;
}
export interface DependentsManagementIntent {
    action_required?: null;
    coverage_option?: null | any[];
    dependent: any[];
    disclosure: any[];
    id: string;
    object?: string;
    parent_intent_id: string;
    parent_intent_type: any;
    plan: any;
    status: any;
}
export interface DependentsManagementIntentLoadMatch {
    id: string;
}
export interface DependentsManagementIntentCreateData {
    policy_amendment_intent_id?: string;
    policy_id?: string;
    enrolment_intent_id?: string;
    action_required?: null;
    coverage_option?: null | any[];
    dependent: any[];
    disclosure: any[];
    id: string;
    object?: string;
    parent_intent_id: string;
    parent_intent_type: any;
    plan: any;
    status: any;
}
export interface EligibilityCheck {
    eligibility_status: any;
    object?: string;
    plan: any;
    provider: any;
    reason: any[];
}
export interface EligibilityCheckCreateData {
    group_id: string;
    eligibility_status: any;
    object?: string;
    plan: any;
    provider: any;
    reason: any[];
}
export interface Employee {
    bank_account?: null;
    date_of_birth: string;
    earliest_benefits_start_date?: null | string;
    email: string;
    employer_id?: string;
    external_customer_id?: null | string;
    first_name: string;
    home_address?: null;
    id?: string;
    last_name: string;
    metadata?: null | Record<string, any>;
    national_tax_id: string;
    nationality?: null;
    object?: string;
    offboard_on?: null | string;
    phone_number: string;
    platform_id?: string;
    sex_at_birth: any;
    start_on?: string;
    status?: any;
}
export interface EmployeeLoadMatch {
    id: string;
}
export interface EmployeeListMatch {
    bank_account?: null;
    date_of_birth?: string;
    earliest_benefits_start_date?: null | string;
    email?: string;
    employer_id?: string;
    external_customer_id?: null | string;
    first_name?: string;
    home_address?: null;
    id?: string;
    last_name?: string;
    metadata?: null | Record<string, any>;
    national_tax_id?: string;
    nationality?: null;
    object?: string;
    offboard_on?: null | string;
    phone_number?: string;
    platform_id?: string;
    sex_at_birth?: any;
    start_on?: string;
    status?: any;
}
export interface EmployeeCreateData {
    bank_account?: null;
    date_of_birth: string;
    earliest_benefits_start_date?: null | string;
    email: string;
    employer_id?: string;
    external_customer_id?: null | string;
    first_name: string;
    home_address?: null;
    id?: string;
    last_name: string;
    metadata?: null | Record<string, any>;
    national_tax_id: string;
    nationality?: null;
    object?: string;
    offboard_on?: null | string;
    phone_number: string;
    platform_id?: string;
    sex_at_birth: any;
    start_on?: string;
    status?: any;
}
export interface EmployeeUpdateData {
    id: string;
    bank_account?: null;
    date_of_birth?: string;
    earliest_benefits_start_date?: null | string;
    email?: string;
    employer_id?: string;
    external_customer_id?: null | string;
    first_name?: string;
    home_address?: null;
    last_name?: string;
    metadata?: null | Record<string, any>;
    national_tax_id?: string;
    nationality?: null;
    object?: string;
    offboard_on?: null | string;
    phone_number?: string;
    platform_id?: string;
    sex_at_birth?: any;
    start_on?: string;
    status?: any;
}
export interface EmployeeHealthInsuranceOffer {
    coverage_level: any;
    employee_id: string;
    employer_id: string;
    external_customer_id?: null | string;
    id: string;
    object?: string;
    required_action?: null;
    status: any;
}
export interface EmployeeHealthInsuranceOfferLoadMatch {
    employee_id: string;
    id: string;
}
export interface EmployeeHealthInsuranceOfferResponsePagedList {
    coverage_level: any;
    employee_id: string;
    employer_id: string;
    external_customer_id?: null | string;
    id: string;
    object?: string;
    required_action?: null;
    status: any;
}
export interface EmployeeHealthInsuranceOfferResponsePagedListListMatch {
    employee_id: string;
}
export interface EmployeeHealthInsurancePolicy {
    cancellation_date?: null | string;
    coverage_level: any;
    employee_id: string;
    employer_id: string;
    end_date: string;
    enrolled_dependants_count: number;
    enrolment_type: any;
    estimated_gross_premium: any;
    external_customer_id?: null | string;
    id: string;
    object?: string;
    opt_out_deadline_date: string;
    policy_number?: null | string;
    renewal: any;
    start_date: string;
    status: any;
}
export interface EmployeeHealthInsurancePolicyLoadMatch {
    employee_id: string;
    id: string;
}
export interface EmployeeHealthInsurancePolicyResponsePagedList {
    cancellation_date?: null | string;
    coverage_level: any;
    employee_id: string;
    employer_id: string;
    end_date: string;
    enrolled_dependants_count: number;
    enrolment_type: any;
    estimated_gross_premium: any;
    external_customer_id?: null | string;
    id: string;
    object?: string;
    opt_out_deadline_date: string;
    policy_number?: null | string;
    renewal: any;
    start_date: string;
    status: any;
}
export interface EmployeeHealthInsurancePolicyResponsePagedListListMatch {
    employee_id: string;
}
export interface Employer {
    contact: any;
    earliest_benefits_start_date?: null | string;
    id: string;
    legal_address: any;
    legal_name: string;
    metadata?: null | Record<string, any>;
    object?: string;
    offboard_on?: null | string;
    platform_id?: string;
    registration_number?: null | string;
    status?: any;
}
export interface EmployerLoadMatch {
    id: string;
}
export interface EmployerListMatch {
    contact?: any;
    earliest_benefits_start_date?: null | string;
    id?: string;
    legal_address?: any;
    legal_name?: string;
    metadata?: null | Record<string, any>;
    object?: string;
    offboard_on?: null | string;
    platform_id?: string;
    registration_number?: null | string;
    status?: any;
}
export interface EmployerCreateData {
    contact: any;
    earliest_benefits_start_date?: null | string;
    id: string;
    legal_address: any;
    legal_name: string;
    metadata?: null | Record<string, any>;
    object?: string;
    offboard_on?: null | string;
    platform_id?: string;
    registration_number?: null | string;
    status?: any;
}
export interface EmployerUpdateData {
    id: string;
    contact?: any;
    earliest_benefits_start_date?: null | string;
    legal_address?: any;
    legal_name?: string;
    metadata?: null | Record<string, any>;
    object?: string;
    offboard_on?: null | string;
    platform_id?: string;
    registration_number?: null | string;
    status?: any;
}
export interface EmployerHealthInsurancePolicy {
    cancellation_date?: null | string;
    coverage_level: any[];
    employer_cancellation_period_length: number;
    employer_id: string;
    end_date: string;
    enrolment_type: any;
    group_policy_number?: null | string;
    id: string;
    object?: string;
    renewal: any;
    start_date: string;
    status: any;
}
export interface EmployerHealthInsurancePolicyLoadMatch {
    employer_id: string;
    id: string;
}
export interface EmployerHealthInsurancePolicyResponsePagedList {
    cancellation_date?: null | string;
    coverage_level: any[];
    employer_cancellation_period_length: number;
    employer_id: string;
    end_date: string;
    enrolment_type: any;
    group_policy_number?: null | string;
    id: string;
    object?: string;
    renewal: any;
    start_date: string;
    status: any;
}
export interface EmployerHealthInsurancePolicyResponsePagedListListMatch {
    employer_id: string;
}
export interface EmployerHealthInsuranceQuote {
    coverage_level: any[];
    employer_id: string;
    id: string;
    object?: string;
    quoted_at: string;
    required_action?: null;
    status: any;
}
export interface EmployerHealthInsuranceQuoteLoadMatch {
    employer_id: string;
    id: string;
}
export interface EmployerHealthInsuranceQuoteResponsePagedList {
    coverage_level: any[];
    employer_id: string;
    id: string;
    object?: string;
    quoted_at: string;
    required_action?: null;
    status: any;
}
export interface EmployerHealthInsuranceQuoteResponsePagedListListMatch {
    employer_id: string;
}
export interface EnrolmentIntent {
    action_required?: null;
    disclosure: any[];
    employee_id: string;
    force_confirmation: boolean;
    group_id: string;
    id: string;
    ineligibility_reason?: null;
    object?: string;
    pending_confirmation?: null;
    policy_configuration?: null;
    policy_enrolment: any[];
    status: any;
}
export interface EnrolmentIntentLoadMatch {
    id: string;
}
export interface EnrolmentIntentListMatch {
    action_required?: null;
    disclosure?: any[];
    employee_id?: string;
    force_confirmation?: boolean;
    group_id?: string;
    id?: string;
    ineligibility_reason?: null;
    object?: string;
    pending_confirmation?: null;
    policy_configuration?: null;
    policy_enrolment?: any[];
    status?: any;
}
export interface EnrolmentIntentCreateData {
    action_required?: null;
    disclosure: any[];
    employee_id: string;
    force_confirmation: boolean;
    group_id: string;
    id: string;
    ineligibility_reason?: null;
    object?: string;
    pending_confirmation?: null;
    policy_configuration?: null;
    policy_enrolment: any[];
    status: any;
}
export interface EnrolmentIntentUpdateData {
    id: string;
    action_required?: null;
    disclosure?: any[];
    employee_id?: string;
    force_confirmation?: boolean;
    group_id?: string;
    ineligibility_reason?: null;
    object?: string;
    pending_confirmation?: null;
    policy_configuration?: null;
    policy_enrolment?: any[];
    status?: any;
}
export interface EnrolmentIntentRequirementResponsePagedList {
    id: string;
    is_fulfilled: boolean;
    object?: string;
    object_id: string;
    object_type: any;
    requirement_type: any;
}
export interface EnrolmentIntentRequirementResponsePagedListListMatch {
    id: string;
}
export interface Event {
    api_version?: string;
    created: string;
    data: null;
    id: string;
    platform_id: string;
    type: string;
}
export interface EventLoadMatch {
    id: string;
}
export interface EventListMatch {
    api_version?: string;
    created?: string;
    data?: null;
    id?: string;
    platform_id?: string;
    type?: string;
}
export interface Group {
    description?: null | string;
    employer_id: string;
    enrolment_type: any;
    group_policy_id: any[];
    group_policy_intent_id: any[];
    group_quote_intent_id: any[];
    group_type: any;
    id: string;
    name: string;
    object?: string;
    status: any;
}
export interface GroupLoadMatch {
    id: string;
}
export interface GroupListMatch {
    description?: null | string;
    employer_id?: string;
    enrolment_type?: any;
    group_policy_id?: any[];
    group_policy_intent_id?: any[];
    group_quote_intent_id?: any[];
    group_type?: any;
    id?: string;
    name?: string;
    object?: string;
    status?: any;
}
export interface GroupCreateData {
    description?: null | string;
    employer_id: string;
    enrolment_type: any;
    group_policy_id: any[];
    group_policy_intent_id: any[];
    group_quote_intent_id: any[];
    group_type: any;
    id: string;
    name: string;
    object?: string;
    status: any;
}
export interface GroupUpdateData {
    id: string;
    description?: null | string;
    employer_id?: string;
    enrolment_type?: any;
    group_policy_id?: any[];
    group_policy_intent_id?: any[];
    group_quote_intent_id?: any[];
    group_type?: any;
    name?: string;
    object?: string;
    status?: any;
}
export interface GroupEmployee {
    desired_policy_start_date?: null | string;
    eligibility_status: any;
    enrolment: any[];
    enrolment_date?: null | string;
    enrolment_status: any;
    group_id: string;
    id: string;
    object?: string;
    policy: any[];
    scheduled_group_transition: any[];
}
export interface GroupEmployeeCreateData {
    id: string;
    desired_policy_start_date?: null | string;
    eligibility_status: any;
    enrolment: any[];
    enrolment_date?: null | string;
    enrolment_status: any;
    group_id: string;
    object?: string;
    policy: any[];
    scheduled_group_transition: any[];
}
export interface GroupEmployeeResponsePagedList {
    desired_policy_start_date?: null | string;
    eligibility_status: any;
    enrolment: any[];
    enrolment_date?: null | string;
    enrolment_status: any;
    group_id: string;
    id: string;
    object?: string;
    policy: any[];
    scheduled_group_transition: any[];
}
export interface GroupEmployeeResponsePagedListListMatch {
    id: string;
}
export interface GroupPolicy {
    cancellation_date?: null | string;
    disclosure: any[];
    employer_id?: string;
    end_date?: null | string;
    group_id?: string;
    health_insurance?: null;
    id: string;
    object?: string;
    plan: any;
    provider: any;
    start_date: string;
    status: any;
    type: any;
}
export interface GroupPolicyLoadMatch {
    id: string;
}
export interface GroupPolicyListMatch {
    cancellation_date?: null | string;
    disclosure?: any[];
    employer_id?: string;
    end_date?: null | string;
    group_id?: string;
    health_insurance?: null;
    id?: string;
    object?: string;
    plan?: any;
    provider?: any;
    start_date?: string;
    status?: any;
    type?: any;
}
export interface GroupPolicyIntent {
    action_required?: null;
    cost_sharing?: null;
    disclosure: any[];
    due_date?: null | string;
    group_id: string;
    id: string;
    object?: string;
    plan_id: string;
    quote_intent_id: string;
    status: any;
}
export interface GroupPolicyIntentLoadMatch {
    id: string;
}
export interface GroupPolicyIntentListMatch {
    action_required?: null;
    cost_sharing?: null;
    disclosure?: any[];
    due_date?: null | string;
    group_id?: string;
    id?: string;
    object?: string;
    plan_id?: string;
    quote_intent_id?: string;
    status?: any;
}
export interface GroupPolicyIntentCreateData {
    action_required?: null;
    cost_sharing?: null;
    disclosure: any[];
    due_date?: null | string;
    group_id: string;
    id: string;
    object?: string;
    plan_id: string;
    quote_intent_id: string;
    status: any;
}
export interface GroupPolicyIntentRequirementResponsePagedList {
    id: string;
    is_fulfilled: boolean;
    object?: string;
    object_id: string;
    object_type: any;
    requirement_type: any;
}
export interface GroupPolicyIntentRequirementResponsePagedListListMatch {
    id: string;
}
export interface GroupQuote {
    cost_sharing: any;
    currency: string;
    employee_count: number;
    expires_at: string;
    generated_at: string;
    object?: string;
    pdf_expires_at?: null | string;
    pdf_url?: null | string;
    total_monthly_premium: number;
}
export interface GroupQuoteLoadMatch {
    group_quote_intent_id: string;
}
export interface GroupQuoteIntent {
    action_required?: null;
    consent_link: any[];
    cost_sharing?: null;
    disclosure: any[];
    expected_start_date?: null | string;
    group_id: string;
    id: string;
    object?: string;
    plan_id: string;
    status: any;
}
export interface GroupQuoteIntentLoadMatch {
    id: string;
}
export interface GroupQuoteIntentListMatch {
    action_required?: null;
    consent_link?: any[];
    cost_sharing?: null;
    disclosure?: any[];
    expected_start_date?: null | string;
    group_id?: string;
    id?: string;
    object?: string;
    plan_id?: string;
    status?: any;
}
export interface GroupQuoteIntentCreateData {
    action_required?: null;
    consent_link: any[];
    cost_sharing?: null;
    disclosure: any[];
    expected_start_date?: null | string;
    group_id: string;
    id: string;
    object?: string;
    plan_id: string;
    status: any;
}
export interface GroupQuoteIntentRequirementResponsePagedList {
    id: string;
    is_fulfilled: boolean;
    object?: string;
    object_id: string;
    object_type: any;
    requirement_type: any;
}
export interface GroupQuoteIntentRequirementResponsePagedListListMatch {
    id: string;
}
export interface Plan {
    available_from: string;
    available_to?: null | string;
    country: any;
    coverage_option?: null | any[];
    description: string;
    disclosure: any[];
    document: any[];
    eligible_count?: null | number;
    employee_eligibility_criterion: any[];
    employer_eligibility_criterion: any[];
    health_insurance?: null;
    id: string;
    ineligible_count?: null | number;
    name: string;
    object?: string;
    provider: any;
    total_count?: null | number;
    type: any;
}
export interface PlanLoadMatch {
    id: string;
}
export interface PlanListMatch {
    available_from?: string;
    available_to?: null | string;
    country?: any;
    coverage_option?: null | any[];
    description?: string;
    disclosure?: any[];
    document?: any[];
    eligible_count?: null | number;
    employee_eligibility_criterion?: any[];
    employer_eligibility_criterion?: any[];
    health_insurance?: null;
    id?: string;
    ineligible_count?: null | number;
    name?: string;
    object?: string;
    provider?: any;
    total_count?: null | number;
    type?: any;
}
export interface Policy {
    bundling_type: any;
    cancellation_date?: null | string;
    disclosure: any[];
    employee_id: string;
    end_date?: null | string;
    group_id: string;
    group_policy_id: string;
    health_insurance?: null;
    id: string;
    object?: string;
    plan: any;
    provider: any;
    start_date: string;
    status: any;
    type: any;
}
export interface PolicyLoadMatch {
    id: string;
}
export interface PolicyListMatch {
    bundling_type?: any;
    cancellation_date?: null | string;
    disclosure?: any[];
    employee_id?: string;
    end_date?: null | string;
    group_id?: string;
    group_policy_id?: string;
    health_insurance?: null;
    id?: string;
    object?: string;
    plan?: any;
    provider?: any;
    start_date?: string;
    status?: any;
    type?: any;
}
export interface PolicyAmendmentIntent {
    amendment_reason: any;
    disclosure: any[];
    id: string;
    object?: string;
    pending_confirmation?: null;
    policy_id: string;
    processing_error?: null;
    requested_change: any[];
    required_action?: null;
    status: any;
}
export interface PolicyAmendmentIntentLoadMatch {
    id: string;
    policy_id: string;
}
export interface PolicyAmendmentIntentListMatch {
    id: string;
}
export interface PolicyAmendmentIntentCreateData {
    id: string;
    amendment_reason: any;
    disclosure: any[];
    object?: string;
    pending_confirmation?: null;
    policy_id: string;
    processing_error?: null;
    requested_change: any[];
    required_action?: null;
    status: any;
}
export interface PolicyImportIntent {
    associated_person: any[];
    employee_id: string;
    group_id: string;
    id: string;
    member_number: string;
    object?: string;
    policy_end_date?: null | string;
    policy_start_date: string;
    provider_policy_number: string;
    status: any;
}
export interface PolicyImportIntentLoadMatch {
    id: string;
}
export interface PolicyImportIntentListMatch {
    associated_person?: any[];
    employee_id?: string;
    group_id?: string;
    id?: string;
    member_number?: string;
    object?: string;
    policy_end_date?: null | string;
    policy_start_date?: string;
    provider_policy_number?: string;
    status?: any;
}
export interface PolicyImportIntentCreateData {
    associated_person: any[];
    employee_id: string;
    group_id: string;
    id: string;
    member_number: string;
    object?: string;
    policy_end_date?: null | string;
    policy_start_date: string;
    provider_policy_number: string;
    status: any;
}
export interface Provider {
    description: string;
    employer_platform_url?: null | string;
    id: string;
    kota_hub_url?: null | string;
    logo_url: string;
    name: string;
    object?: string;
    support_phone: string;
    supported_country: any[];
    website_url: string;
}
export interface ProviderLoadMatch {
    id: string;
}
export interface ProviderListMatch {
    description?: string;
    employer_platform_url?: null | string;
    id?: string;
    kota_hub_url?: null | string;
    logo_url?: string;
    name?: string;
    object?: string;
    support_phone?: string;
    supported_country?: any[];
    website_url?: string;
}
export interface Replay {
    delivery: any[];
    event_id: string;
}
export interface ReplayCreateData {
    event_id: string;
    delivery: any[];
}
export interface WebhookEndpoint {
    created_at: string;
    endpoint_url: string;
    id: string;
    object?: string;
    subscribed_event: any[];
}
export interface WebhookEndpointLoadMatch {
    id: string;
}
export interface WebhookEndpointResponsePagedList {
    created_at: string;
    endpoint_url: string;
    id: string;
    object?: string;
    subscribed_event: any[];
}
export interface WebhookEndpointResponsePagedListListMatch {
    created_at?: string;
    endpoint_url?: string;
    id?: string;
    object?: string;
    subscribed_event?: any[];
}
