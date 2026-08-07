package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAssociatedPersonEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewAssociatedPersonEligibilityResponsePagedListEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewContributionReportEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewContributionReportEmployeeBreakdownEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewContributionReportEmployeeBreakdownResponsePagedListEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewCreateHostedSessionTokenEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewCreateSessionTokenEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewDependentEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewDependentsManagementIntentEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewEligibilityCheckEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewEmployeeEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewEmployeeHealthInsuranceOfferEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewEmployeeHealthInsuranceOfferResponsePagedListEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewEmployeeHealthInsurancePolicyEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewEmployeeHealthInsurancePolicyResponsePagedListEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewEmployerEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewEmployerHealthInsurancePolicyEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewEmployerHealthInsurancePolicyResponsePagedListEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewEmployerHealthInsuranceQuoteEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewEmployerHealthInsuranceQuoteResponsePagedListEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewEnrolmentIntentEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewEnrolmentIntentRequirementResponsePagedListEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewEventEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewGroupEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewGroupEmployeeEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewGroupEmployeeResponsePagedListEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewGroupPolicyEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewGroupPolicyIntentEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewGroupPolicyIntentRequirementResponsePagedListEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewGroupQuoteEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewGroupQuoteIntentEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewGroupQuoteIntentRequirementResponsePagedListEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewPlanEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewPolicyEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewPolicyAmendmentIntentEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewPolicyImportIntentEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewProviderEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewReplayEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewWebhookEndpointEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

var NewWebhookEndpointResponsePagedListEntityFunc func(client *KotaSDK, entopts map[string]any) KotaEntity

