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
    relationship_type: string;
    sex_at_birth: string;
}
export interface AssociatedPersonLoadMatch {
    employee_id: string;
    id: string;
}
export interface AssociatedPersonListMatch {
    employee_id: string;
    page?: number;
    page_size?: number;
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
    relationship_type: string;
    sex_at_birth: string;
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
    relationship_type?: string;
    sex_at_birth?: string;
}
export interface AssociatedPersonRemoveMatch {
    employee_id: string;
    id: string;
}
export interface AssociatedPersonEligibilityResponsePagedList {
    associated_person_id: string;
    date_of_birth: string;
    eligibility_status: string;
    first_name: string;
    ineligibility_reason?: null | string;
    last_name: string;
    object?: string;
    relationship: string;
    sex_at_birth: string;
}
export interface AssociatedPersonEligibilityResponsePagedListListMatch {
    dependents_management_intent_id: string;
    page?: number;
    page_size?: number;
}
export interface ContributionReport {
    aggregates: any;
    created_at: string;
    employer_id: string;
    external_customer_id?: null | string;
    file_id?: null | string;
    file_status?: null;
    finalized_at?: null | string;
    id: string;
    last_updated_at: string;
    object?: string;
    period: any;
    status: string;
}
export interface ContributionReportLoadMatch {
    id: string;
}
export interface ContributionReportListMatch {
    employer_id?: string;
    external_customer_id?: string;
    month?: number;
    page?: number;
    page_size?: number;
    status?: string;
    year?: number;
}
export interface ContributionReportCreateData {
    id: string;
    aggregates: any;
    created_at: string;
    employer_id: string;
    external_customer_id?: null | string;
    file_id?: null | string;
    file_status?: null;
    finalized_at?: null | string;
    last_updated_at: string;
    object?: string;
    period: any;
    status: string;
    $action?: string;
    [action: string]: any;
}
export interface ContributionReportEmployeeBreakdown {
    contribution_report_id: string;
    created_at: string;
    currency: string;
    employee_id: string;
    employer_id: string;
    external_customer_id?: null | string;
    finalized_at?: null | string;
    health_insurance: any;
    id?: string;
    last_updated_at: string;
    object?: string;
    period: any;
    status: string;
}
export interface ContributionReportEmployeeBreakdownLoadMatch {
    contribution_report_id: string;
    id: string;
}
export interface ContributionReportEmployeeBreakdownResponsePagedList {
    id?: string;
}
export interface ContributionReportEmployeeBreakdownResponsePagedListListMatch {
    id: string;
    page?: number;
    page_size?: number;
    $action?: string;
    [action: string]: any;
}
export interface CreateHostedSessionToken {
    employee_id: string;
    employer_id: string;
    expiry: string;
    link: string;
}
export interface CreateHostedSessionTokenCreateData {
    employee_id: string;
    employer_id: string;
    expiry: string;
    link: string;
}
export interface CreateSessionToken {
    employee_id?: null | string;
    employer_id: string;
    expiry: string;
    external_customer_id?: null | string;
    token: string;
}
export interface CreateSessionTokenCreateData {
    employee_id?: null | string;
    employer_id: string;
    expiry: string;
    external_customer_id?: null | string;
    token: string;
}
export interface Dependent {
    action_required?: null;
    associated_person_ids: any[];
    coverage_options?: null | any[];
    dependent_coverage_selections?: null | any[];
    dependents: any[];
    disclosures: any[];
    id: string;
    object?: string;
    parent_intent_id: string;
    parent_intent_type: string;
    plan: any;
    status: string;
}
export interface DependentCreateData {
    dependents_management_intent_id: string;
    action_required?: null;
    associated_person_ids: any[];
    coverage_options?: null | any[];
    dependent_coverage_selections?: null | any[];
    dependents: any[];
    disclosures: any[];
    id: string;
    object?: string;
    parent_intent_id: string;
    parent_intent_type: string;
    plan: any;
    status: string;
}
export interface DependentRemoveMatch {
    dependents_management_intent_id: string;
    id: string;
}
export interface DependentsManagementIntent {
    action_required?: null;
    coverage_options?: null | any[];
    dependents: any[];
    disclosures: any[];
    id: string;
    object?: string;
    parent_intent_id: string;
    parent_intent_type: string;
    plan: any;
    status: string;
}
export interface DependentsManagementIntentLoadMatch {
    id: string;
}
export interface DependentsManagementIntentCreateData {
    enrolment_intent_id: string;
    action_required?: null;
    coverage_options?: null | any[];
    dependents: any[];
    disclosures: any[];
    id: string;
    object?: string;
    parent_intent_id: string;
    parent_intent_type: string;
    plan: any;
    status: string;
    $action?: string;
    [action: string]: any;
}
export interface EligibilityCheck {
    eligibility_status: string;
    employee_id: string;
    object?: string;
    plan: any;
    provider: any;
    reasons: any[];
}
export interface EligibilityCheckCreateData {
    group_id: string;
    eligibility_status: string;
    employee_id: string;
    object?: string;
    plan: any;
    provider: any;
    reasons: any[];
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
    phone_number: null | string;
    platform_id?: string;
    sex_at_birth: string;
    start_on?: string;
    status?: string;
}
export interface EmployeeLoadMatch {
    id: string;
}
export interface EmployeeListMatch {
    employer_id?: string;
    external_customer_id?: string;
    filter?: string;
    metadata_id?: string;
    page?: number;
    page_size?: number;
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
    phone_number: null | string;
    platform_id?: string;
    sex_at_birth: string;
    start_on?: string;
    status?: string;
    $action?: string;
    [action: string]: any;
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
    phone_number?: null | string;
    platform_id?: string;
    sex_at_birth?: string;
    start_on?: string;
    status?: string;
}
export interface EmployeeHealthInsuranceOffer {
    coverage_level: any;
    employee_id: string;
    employer_id: string;
    external_customer_id?: null | string;
    id: string;
    object?: string;
    required_action?: null;
    status: string;
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
    status: string;
}
export interface EmployeeHealthInsuranceOfferResponsePagedListListMatch {
    employee_id: string;
    page?: number;
    page_size?: number;
}
export interface EmployeeHealthInsurancePolicy {
    cancellation_date?: null | string;
    coverage_level: any;
    employee_id: string;
    employer_id: string;
    end_date: string;
    enrolled_dependants_count: number;
    enrolment_type: string;
    estimated_gross_premium: any;
    external_customer_id?: null | string;
    id: string;
    object?: string;
    opt_out_deadline_date: string;
    policy_number?: null | string;
    renewal: any;
    start_date: string;
    status: string;
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
    enrolment_type: string;
    estimated_gross_premium: any;
    external_customer_id?: null | string;
    id: string;
    object?: string;
    opt_out_deadline_date: string;
    policy_number?: null | string;
    renewal: any;
    start_date: string;
    status: string;
}
export interface EmployeeHealthInsurancePolicyResponsePagedListListMatch {
    employee_id: string;
    page?: number;
    page_size?: number;
    status?: string;
}
export interface Employer {
    applicable_collective_agreement?: null | string;
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
    status?: string;
}
export interface EmployerLoadMatch {
    id: string;
}
export interface EmployerListMatch {
    filter?: string;
    page?: number;
    page_size?: number;
}
export interface EmployerCreateData {
    applicable_collective_agreement?: null | string;
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
    status?: string;
    $action?: string;
    [action: string]: any;
}
export interface EmployerUpdateData {
    id: string;
    applicable_collective_agreement?: null | string;
    contact?: any;
    earliest_benefits_start_date?: null | string;
    legal_address?: any;
    legal_name?: string;
    metadata?: null | Record<string, any>;
    object?: string;
    offboard_on?: null | string;
    platform_id?: string;
    registration_number?: null | string;
    status?: string;
}
export interface EmployerHealthInsurancePolicy {
    cancellation_date?: null | string;
    coverage_levels: any[];
    employer_cancellation_period_length: number;
    employer_id: string;
    end_date: string;
    enrolment_type: string;
    group_policy_number?: null | string;
    id: string;
    object?: string;
    renewal: any;
    start_date: string;
    status: string;
}
export interface EmployerHealthInsurancePolicyLoadMatch {
    employer_id: string;
    id: string;
}
export interface EmployerHealthInsurancePolicyResponsePagedList {
    cancellation_date?: null | string;
    coverage_levels: any[];
    employer_cancellation_period_length: number;
    employer_id: string;
    end_date: string;
    enrolment_type: string;
    group_policy_number?: null | string;
    id: string;
    object?: string;
    renewal: any;
    start_date: string;
    status: string;
}
export interface EmployerHealthInsurancePolicyResponsePagedListListMatch {
    employer_id: string;
    page?: number;
    page_size?: number;
    status?: string;
}
export interface EmployerHealthInsuranceQuote {
    coverage_levels: any[];
    employer_id: string;
    id: string;
    object?: string;
    quoted_at: string;
    required_action?: null;
    status: string;
}
export interface EmployerHealthInsuranceQuoteLoadMatch {
    employer_id: string;
    id: string;
}
export interface EmployerHealthInsuranceQuoteResponsePagedList {
    coverage_levels: any[];
    employer_id: string;
    id: string;
    object?: string;
    quoted_at: string;
    required_action?: null;
    status: string;
}
export interface EmployerHealthInsuranceQuoteResponsePagedListListMatch {
    employer_id: string;
    page?: number;
    page_size?: number;
    status?: string;
}
export interface EnrolmentIntent {
    action_required?: null;
    coverage_selections?: null | any[];
    desired_policy_start_date?: null | string;
    disclosures: any[];
    employee_id: string;
    enrolment_date?: null | string;
    force_confirmation: boolean;
    group_id: string;
    id: string;
    ineligibility_reason?: null;
    object?: string;
    pending_confirmation?: null;
    policy_configuration?: null;
    policy_enrolments: any[];
    status: string;
}
export interface EnrolmentIntentLoadMatch {
    id: string;
}
export interface EnrolmentIntentListMatch {
    employee_id?: string;
    group_id?: string;
    page?: number;
    page_size?: number;
    status?: string;
}
export interface EnrolmentIntentCreateData {
    action_required?: null;
    coverage_selections?: null | any[];
    desired_policy_start_date?: null | string;
    disclosures: any[];
    employee_id: string;
    enrolment_date?: null | string;
    force_confirmation: boolean;
    group_id: string;
    id: string;
    ineligibility_reason?: null;
    object?: string;
    pending_confirmation?: null;
    policy_configuration?: null;
    policy_enrolments: any[];
    status: string;
    $action?: string;
    [action: string]: any;
}
export interface EnrolmentIntentUpdateData {
    id: string;
    action_required?: null;
    coverage_selections?: null | any[];
    desired_policy_start_date?: null | string;
    disclosures?: any[];
    employee_id?: string;
    enrolment_date?: null | string;
    force_confirmation?: boolean;
    group_id?: string;
    ineligibility_reason?: null;
    object?: string;
    pending_confirmation?: null;
    policy_configuration?: null;
    policy_enrolments?: any[];
    status?: string;
}
export interface EnrolmentIntentRequirementResponsePagedList {
    id?: string;
}
export interface EnrolmentIntentRequirementResponsePagedListListMatch {
    id: string;
    object_id?: string;
    object_type?: string;
    page?: number;
    page_size?: number;
    $action?: string;
    [action: string]: any;
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
    created_after?: string;
    order_direction?: string;
    page?: number;
    page_size?: number;
    version?: string;
}
export interface EventCreateData {
    id: string;
    api_version?: string;
    created: string;
    data: null;
    platform_id: string;
    type: string;
    $action?: string;
    [action: string]: any;
}
export interface Group {
    description?: null | string;
    employer_id: string;
    enrolment_type: string;
    group_policy_ids: any[];
    group_policy_intent_ids: any[];
    group_quote_intent_ids: any[];
    group_type: string;
    id: string;
    name: string;
    object?: string;
    status: string;
}
export interface GroupLoadMatch {
    id: string;
}
export interface GroupListMatch {
    employer_id?: string;
    page?: number;
    page_size?: number;
    status?: string;
}
export interface GroupCreateData {
    description?: null | string;
    employer_id: string;
    enrolment_type: string;
    group_policy_ids: any[];
    group_policy_intent_ids: any[];
    group_quote_intent_ids: any[];
    group_type: string;
    id: string;
    name: string;
    object?: string;
    status: string;
}
export interface GroupUpdateData {
    id: string;
    description?: null | string;
    employer_id?: string;
    enrolment_type?: string;
    group_policy_ids?: any[];
    group_policy_intent_ids?: any[];
    group_quote_intent_ids?: any[];
    group_type?: string;
    name?: string;
    object?: string;
    status?: string;
}
export interface GroupEmployee {
    create_enrolment_intents?: null | boolean;
    desired_policy_start_date?: null | string;
    eligibility_status: string;
    employee_id: string;
    enrolment_date?: null | string;
    enrolment_status: string;
    enrolments: any[];
    group_id: string;
    id: string;
    object?: string;
    policies: any[];
    policy_configuration?: null;
    scheduled_group_transitions: any[];
}
export interface GroupEmployeeCreateData {
    id: string;
    create_enrolment_intents?: null | boolean;
    desired_policy_start_date?: null | string;
    eligibility_status: string;
    employee_id: string;
    enrolment_date?: null | string;
    enrolment_status: string;
    enrolments: any[];
    group_id: string;
    object?: string;
    policies: any[];
    policy_configuration?: null;
    scheduled_group_transitions: any[];
}
export interface GroupEmployeeResponsePagedList {
    id?: string;
}
export interface GroupEmployeeResponsePagedListListMatch {
    id: string;
    employee_id?: string;
    page?: number;
    page_size?: number;
    $action?: string;
    [action: string]: any;
}
export interface GroupPolicy {
    cancellation_date?: null | string;
    disclosures: any[];
    employer_id?: string;
    end_date?: null | string;
    group_id?: string;
    health_insurance?: null;
    id: string;
    life_assurance?: null;
    linked_group_policy_ids: any[];
    object?: string;
    plan: any;
    provider: any;
    start_date: string;
    status: string;
    type: string;
}
export interface GroupPolicyLoadMatch {
    id: string;
}
export interface GroupPolicyListMatch {
    employer_id?: string;
    group_id?: string;
    page?: number;
    page_size?: number;
    status?: string;
}
export interface GroupPolicyIntent {
    action_required?: null;
    consent_approvals?: null | any[];
    cost_sharing?: null;
    disclosures: any[];
    due_date?: null | string;
    group_id: null | string;
    group_policy_ids: any[];
    id: string;
    items: any[];
    object?: string;
    plan_id: null | string;
    quote_intent_id: string;
    status: string;
    type?: null;
}
export interface GroupPolicyIntentLoadMatch {
    id: string;
}
export interface GroupPolicyIntentListMatch {
    group_id?: string;
    page?: number;
    page_size?: number;
    plan_id?: string;
    status?: string;
    type?: string;
}
export interface GroupPolicyIntentCreateData {
    action_required?: null;
    consent_approvals?: null | any[];
    cost_sharing?: null;
    disclosures: any[];
    due_date?: null | string;
    group_id: null | string;
    group_policy_ids: any[];
    id: string;
    items: any[];
    object?: string;
    plan_id: null | string;
    quote_intent_id: string;
    status: string;
    type?: null;
}
export interface GroupPolicyIntentRequirementResponsePagedList {
    id?: string;
}
export interface GroupPolicyIntentRequirementResponsePagedListListMatch {
    id: string;
    object_id?: string;
    object_type?: string;
    page?: number;
    page_size?: number;
    $action?: string;
    [action: string]: any;
}
export interface GroupQuote {
    breakdown: any[];
    cost_sharing?: null;
    currency: string;
    employee_count: number;
    expires_at: string;
    generated_at: string;
    levels: any[];
    object?: string;
    pdf_expires_at?: null | string;
    pdf_url?: null | string;
    quote_pdfs: any[];
    total_annual_premium: number;
    total_monthly_premium: number;
}
export interface GroupQuoteListMatch {
    group_quote_intent_id: string;
}
export interface GroupQuoteIntent {
    action_required?: null;
    consent_links: any[];
    cost_sharing?: null;
    coverage_selections?: null | any[];
    disclosures: any[];
    expected_start_date?: null | string;
    group_id: null | string;
    id: string;
    items: any[];
    object?: string;
    plan_id: null | string;
    status: string;
    type?: null;
}
export interface GroupQuoteIntentLoadMatch {
    id: string;
}
export interface GroupQuoteIntentListMatch {
    group_id?: string;
    page?: number;
    page_size?: number;
    plan_id?: string;
    status?: string;
    type?: string;
}
export interface GroupQuoteIntentCreateData {
    action_required?: null;
    consent_links: any[];
    cost_sharing?: null;
    coverage_selections?: null | any[];
    disclosures: any[];
    expected_start_date?: null | string;
    group_id: null | string;
    id: string;
    items: any[];
    object?: string;
    plan_id: null | string;
    status: string;
    type?: null;
    $action?: string;
    [action: string]: any;
}
export interface GroupQuoteIntentRequirementResponsePagedList {
    id?: string;
}
export interface GroupQuoteIntentRequirementResponsePagedListListMatch {
    id: string;
    object_id?: string;
    object_type?: string;
    page?: number;
    page_size?: number;
    $action?: string;
    [action: string]: any;
}
export interface Plan {
    available_from: string;
    available_to?: null | string;
    country: string;
    coverage_options?: null | any[];
    description: string;
    disclosures: any[];
    documents: any[];
    eligible_count?: null | number;
    employee_eligibility_criteria: any[];
    employer_eligibility_criteria: any[];
    health_insurance?: null;
    id: string;
    indicative_pricing?: null;
    ineligible_count?: null | number;
    life_assurance?: null;
    name: string;
    object?: string;
    provider: any;
    total_count?: null | number;
    type: string;
}
export interface PlanLoadMatch {
    id: string;
    group_id?: string;
    start_date?: string;
}
export interface PlanListMatch {
    available_on?: string;
    country?: string;
    group_id?: string;
    page?: number;
    page_size?: number;
    provider_id?: string;
    sort_by?: string;
    sort_dir?: string;
    start_date?: string;
    type?: string;
}
export interface Policy {
    bundling_type: string;
    cancellation_date?: null | string;
    disclosures: any[];
    employee_id: string;
    end_date?: null | string;
    group_id: string;
    group_policy_id: string;
    health_insurance?: null;
    id: string;
    life_assurance?: null;
    object?: string;
    opted_out_at?: null | string;
    plan: any;
    provider: any;
    start_date: string;
    status: string;
    type: string;
}
export interface PolicyLoadMatch {
    id: string;
}
export interface PolicyListMatch {
    employee_id?: string;
    group_id?: string;
    group_policy_id?: string;
    page?: number;
    page_size?: number;
    status?: string;
}
export interface PolicyAmendmentIntent {
    amendment_reason: any;
    disclosures: any[];
    id: string;
    object?: string;
    pending_confirmation?: null;
    policy_id: string;
    processing_error?: null;
    requested_changes: any[];
    required_action?: null;
    status: string;
}
export interface PolicyAmendmentIntentLoadMatch {
    id: string;
    policy_id: string;
}
export interface PolicyAmendmentIntentListMatch {
    id: string;
    page?: number;
    page_size?: number;
    status?: string;
}
export interface PolicyAmendmentIntentCreateData {
    id: string;
    amendment_reason: any;
    disclosures: any[];
    object?: string;
    pending_confirmation?: null;
    policy_id: string;
    processing_error?: null;
    requested_changes: any[];
    required_action?: null;
    status: string;
    $action?: string;
    [action: string]: any;
}
export interface PolicyImportIntent {
    associated_persons: any[];
    employee_id: string;
    group_id: string;
    id: string;
    member_number: string;
    object?: string;
    policy_end_date?: null | string;
    policy_start_date: string;
    provider_policy_number: string;
    status: string;
}
export interface PolicyImportIntentLoadMatch {
    id: string;
}
export interface PolicyImportIntentListMatch {
    employee_id?: string;
    group_id?: string;
    page?: number;
    page_size?: number;
    status?: string;
}
export interface PolicyImportIntentCreateData {
    associated_persons: any[];
    employee_id: string;
    group_id: string;
    id: string;
    member_number: string;
    object?: string;
    policy_end_date?: null | string;
    policy_start_date: string;
    provider_policy_number: string;
    status: string;
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
    supported_countries: any[];
    website_url: string;
}
export interface ProviderLoadMatch {
    id: string;
}
export interface ProviderListMatch {
    country?: string;
    page?: number;
    page_size?: number;
}
export interface Salary {
    amount: number;
    currency: string;
    effective_from: string;
    employee_id: string;
    id: string;
    object?: string;
    pay_frequency: string;
}
export interface SalaryLoadMatch {
    employee_id: string;
    id: string;
    $action?: string;
    [action: string]: any;
}
export interface SalaryListMatch {
    employee_id: string;
    page?: number;
    page_size?: number;
}
export interface SalaryCreateData {
    employee_id: string;
    amount: number;
    currency: string;
    effective_from: string;
    id: string;
    object?: string;
    pay_frequency: string;
}
export interface SalaryRemoveMatch {
    employee_id: string;
    id: string;
}
export interface WebhookEndpoint {
    created_at: string;
    endpoint_url: string;
    id: string;
    object?: string;
    subscribed_events: any[];
}
export interface WebhookEndpointLoadMatch {
    id: string;
}
export interface WebhookEndpointListMatch {
    page?: number;
    page_size?: number;
}
