package voxgigkotasdk

import (
	"github.com/voxgig-sdk/kota-sdk/go/core"
	"github.com/voxgig-sdk/kota-sdk/go/entity"
	"github.com/voxgig-sdk/kota-sdk/go/feature"
	_ "github.com/voxgig-sdk/kota-sdk/go/utility"
)

// Type aliases preserve external API.
type KotaSDK = core.KotaSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type KotaEntity = core.KotaEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type KotaError = core.KotaError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAssociatedPersonEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewAssociatedPersonEntity(client, entopts)
	}
	core.NewAssociatedPersonEligibilityResponsePagedListEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewAssociatedPersonEligibilityResponsePagedListEntity(client, entopts)
	}
	core.NewContributionReportEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewContributionReportEntity(client, entopts)
	}
	core.NewContributionReportEmployeeBreakdownEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewContributionReportEmployeeBreakdownEntity(client, entopts)
	}
	core.NewContributionReportEmployeeBreakdownResponsePagedListEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewContributionReportEmployeeBreakdownResponsePagedListEntity(client, entopts)
	}
	core.NewCreateHostedSessionTokenEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewCreateHostedSessionTokenEntity(client, entopts)
	}
	core.NewCreateSessionTokenEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewCreateSessionTokenEntity(client, entopts)
	}
	core.NewDependentEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewDependentEntity(client, entopts)
	}
	core.NewDependentsManagementIntentEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewDependentsManagementIntentEntity(client, entopts)
	}
	core.NewEligibilityCheckEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewEligibilityCheckEntity(client, entopts)
	}
	core.NewEmployeeEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewEmployeeEntity(client, entopts)
	}
	core.NewEmployeeHealthInsuranceOfferEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewEmployeeHealthInsuranceOfferEntity(client, entopts)
	}
	core.NewEmployeeHealthInsuranceOfferResponsePagedListEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewEmployeeHealthInsuranceOfferResponsePagedListEntity(client, entopts)
	}
	core.NewEmployeeHealthInsurancePolicyEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewEmployeeHealthInsurancePolicyEntity(client, entopts)
	}
	core.NewEmployeeHealthInsurancePolicyResponsePagedListEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewEmployeeHealthInsurancePolicyResponsePagedListEntity(client, entopts)
	}
	core.NewEmployerEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewEmployerEntity(client, entopts)
	}
	core.NewEmployerHealthInsurancePolicyEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewEmployerHealthInsurancePolicyEntity(client, entopts)
	}
	core.NewEmployerHealthInsurancePolicyResponsePagedListEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewEmployerHealthInsurancePolicyResponsePagedListEntity(client, entopts)
	}
	core.NewEmployerHealthInsuranceQuoteEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewEmployerHealthInsuranceQuoteEntity(client, entopts)
	}
	core.NewEmployerHealthInsuranceQuoteResponsePagedListEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewEmployerHealthInsuranceQuoteResponsePagedListEntity(client, entopts)
	}
	core.NewEnrolmentIntentEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewEnrolmentIntentEntity(client, entopts)
	}
	core.NewEnrolmentIntentRequirementResponsePagedListEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewEnrolmentIntentRequirementResponsePagedListEntity(client, entopts)
	}
	core.NewEventEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewEventEntity(client, entopts)
	}
	core.NewGroupEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewGroupEntity(client, entopts)
	}
	core.NewGroupEmployeeEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewGroupEmployeeEntity(client, entopts)
	}
	core.NewGroupEmployeeResponsePagedListEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewGroupEmployeeResponsePagedListEntity(client, entopts)
	}
	core.NewGroupPolicyEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewGroupPolicyEntity(client, entopts)
	}
	core.NewGroupPolicyIntentEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewGroupPolicyIntentEntity(client, entopts)
	}
	core.NewGroupPolicyIntentRequirementResponsePagedListEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewGroupPolicyIntentRequirementResponsePagedListEntity(client, entopts)
	}
	core.NewGroupQuoteEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewGroupQuoteEntity(client, entopts)
	}
	core.NewGroupQuoteIntentEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewGroupQuoteIntentEntity(client, entopts)
	}
	core.NewGroupQuoteIntentRequirementResponsePagedListEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewGroupQuoteIntentRequirementResponsePagedListEntity(client, entopts)
	}
	core.NewPlanEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewPlanEntity(client, entopts)
	}
	core.NewPolicyEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewPolicyEntity(client, entopts)
	}
	core.NewPolicyAmendmentIntentEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewPolicyAmendmentIntentEntity(client, entopts)
	}
	core.NewPolicyImportIntentEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewPolicyImportIntentEntity(client, entopts)
	}
	core.NewProviderEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewProviderEntity(client, entopts)
	}
	core.NewReplayEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewReplayEntity(client, entopts)
	}
	core.NewWebhookEndpointEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewWebhookEndpointEntity(client, entopts)
	}
	core.NewWebhookEndpointResponsePagedListEntityFunc = func(client *core.KotaSDK, entopts map[string]any) core.KotaEntity {
		return entity.NewWebhookEndpointResponsePagedListEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewKotaSDK = core.NewKotaSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewKotaSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *KotaSDK  { return NewKotaSDK(nil) }
func Test() *KotaSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
