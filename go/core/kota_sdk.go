package core

import (
	"fmt"
	"strings"

	vs "github.com/voxgig-sdk/kota-sdk/go/utility/struct"
)

type KotaSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewKotaSDK(options map[string]any) *KotaSDK {
	sdk := &KotaSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := SharedConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features in the resolved order (MakeOptions puts an explicit array
	// order first, else defaults to test-first). Ordering matters: the `test`
	// feature installs the base mock transport and the transport features
	// (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
	// must be added before them to sit at the base of the chain.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		if fo, ok := vs.GetPath([]any{"__derived__", "featureorder"}, sdk.options).([]any); ok {
			for _, n := range fo {
				fname, _ := n.(string)
				fopts := ToMapAny(featureOpts[fname])
				if fopts != nil {
					if active, ok := fopts["active"]; ok {
						if ab, ok := active.(bool); ok && ab {
							sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
						}
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *KotaSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *KotaSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *KotaSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *KotaSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

// Raw endpoint access is operator-controllable, like every entity op.
// Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
// either one reaches the same endpoint.
func (sdk *KotaSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	if !sdk.opAllowed("direct") {
		return sdk.opDenied("direct"), nil
	}

	return sdk.rawRequest(fetchargs)
}

// Is this raw-access op permitted by the SDK's allow.op option?
func (sdk *KotaSDK) opAllowed(op string) bool {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return strings.Contains(allowOp, op)
}

func (sdk *KotaSDK) opDenied(op string) map[string]any {
	allowOp, _ := vs.GetPath([]any{"allow", "op"}, sdk.options).(string)
	return map[string]any{
		"ok": false,
		"err": fmt.Errorf("KotaSDK: %s: operation not allowed by"+
			" SDK option allow.op value: \"%s\"", op, allowOp),
	}
}

// Ungated request path shared by Direct and Graphql, each of which checks
// its own allow.op token first. Unexported, rather than a flag on fetchargs:
// a caller-supplied marker would let anyone opt straight back out of the
// gate by passing it.
func (sdk *KotaSDK) rawRequest(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}

// Raw GraphQL access: the pressure valve that makes the generated surface's
// deliberate omissions (per-call selection sets, typed filter builders,
// batching, subscriptions) livable — the whole schema stays reachable.
//
// Thin wrapper over the same prepare/fetch path Direct uses, with the one
// thing raw Direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
// as a top-level `errors` array, so status alone would report a failed query
// as ok.
//
// NOTE: like Direct, this bypasses the feature pipeline — no retry,
// ratelimit or paging features apply.
func (sdk *KotaSDK) Graphql(
	query string, variables map[string]any, ctrl map[string]any,
) (map[string]any, error) {
	if !sdk.opAllowed("graphql") {
		return sdk.opDenied("graphql"), nil
	}

	if variables == nil {
		variables = map[string]any{}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	res, err := sdk.rawRequest(map[string]any{
		"method":  "POST",
		"headers": map[string]any{"content-type": "application/json"},
		"body":    map[string]any{"query": query, "variables": variables},
		"ctrl":    ctrl,
	})

	if err != nil {
		return res, err
	}

	// Errors are read BEFORE any status check: a GraphQL parse or validation
	// failure comes back as HTTP 400 carrying the standard { errors: [...] }
	// body, and the raw path represents a non-2xx as ok:false with no err —
	// so returning early on status would discard the server's own
	// diagnostics, which are the only useful part of that response.
	errors, _ := vs.GetPath([]any{"data", "errors"}, res).([]any)

	if 0 < len(errors) {
		msg, _ := vs.GetProp(errors[0], "message").(string)
		if msg == "" {
			msg = "graphql error"
		}
		res["ok"] = false
		res["err"] = fmt.Errorf("KotaSDK: graphql: %s", msg)
		res["graphql"] = errors
	}

	return res, nil
}


// AssociatedPerson returns a AssociatedPerson entity bound to this client.
// Idiomatic usage: client.AssociatedPerson(nil).List(nil, nil) or
// client.AssociatedPerson(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) AssociatedPerson(data map[string]any) KotaEntity {
	return NewAssociatedPersonEntityFunc(sdk, data)
}


// AssociatedPersonEligibilityResponsePagedList returns a AssociatedPersonEligibilityResponsePagedList entity bound to this client.
// Idiomatic usage: client.AssociatedPersonEligibilityResponsePagedList(nil).List(nil, nil) or
// client.AssociatedPersonEligibilityResponsePagedList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) AssociatedPersonEligibilityResponsePagedList(data map[string]any) KotaEntity {
	return NewAssociatedPersonEligibilityResponsePagedListEntityFunc(sdk, data)
}


// ContributionReport returns a ContributionReport entity bound to this client.
// Idiomatic usage: client.ContributionReport(nil).List(nil, nil) or
// client.ContributionReport(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) ContributionReport(data map[string]any) KotaEntity {
	return NewContributionReportEntityFunc(sdk, data)
}


// ContributionReportEmployeeBreakdown returns a ContributionReportEmployeeBreakdown entity bound to this client.
// Idiomatic usage: client.ContributionReportEmployeeBreakdown(nil).List(nil, nil) or
// client.ContributionReportEmployeeBreakdown(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) ContributionReportEmployeeBreakdown(data map[string]any) KotaEntity {
	return NewContributionReportEmployeeBreakdownEntityFunc(sdk, data)
}


// ContributionReportEmployeeBreakdownResponsePagedList returns a ContributionReportEmployeeBreakdownResponsePagedList entity bound to this client.
// Idiomatic usage: client.ContributionReportEmployeeBreakdownResponsePagedList(nil).List(nil, nil) or
// client.ContributionReportEmployeeBreakdownResponsePagedList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) ContributionReportEmployeeBreakdownResponsePagedList(data map[string]any) KotaEntity {
	return NewContributionReportEmployeeBreakdownResponsePagedListEntityFunc(sdk, data)
}


// CreateHostedSessionToken returns a CreateHostedSessionToken entity bound to this client.
// Idiomatic usage: client.CreateHostedSessionToken(nil).List(nil, nil) or
// client.CreateHostedSessionToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) CreateHostedSessionToken(data map[string]any) KotaEntity {
	return NewCreateHostedSessionTokenEntityFunc(sdk, data)
}


// CreateSessionToken returns a CreateSessionToken entity bound to this client.
// Idiomatic usage: client.CreateSessionToken(nil).List(nil, nil) or
// client.CreateSessionToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) CreateSessionToken(data map[string]any) KotaEntity {
	return NewCreateSessionTokenEntityFunc(sdk, data)
}


// Dependent returns a Dependent entity bound to this client.
// Idiomatic usage: client.Dependent(nil).List(nil, nil) or
// client.Dependent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) Dependent(data map[string]any) KotaEntity {
	return NewDependentEntityFunc(sdk, data)
}


// DependentsManagementIntent returns a DependentsManagementIntent entity bound to this client.
// Idiomatic usage: client.DependentsManagementIntent(nil).List(nil, nil) or
// client.DependentsManagementIntent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) DependentsManagementIntent(data map[string]any) KotaEntity {
	return NewDependentsManagementIntentEntityFunc(sdk, data)
}


// EligibilityCheck returns a EligibilityCheck entity bound to this client.
// Idiomatic usage: client.EligibilityCheck(nil).List(nil, nil) or
// client.EligibilityCheck(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) EligibilityCheck(data map[string]any) KotaEntity {
	return NewEligibilityCheckEntityFunc(sdk, data)
}


// Employee returns a Employee entity bound to this client.
// Idiomatic usage: client.Employee(nil).List(nil, nil) or
// client.Employee(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) Employee(data map[string]any) KotaEntity {
	return NewEmployeeEntityFunc(sdk, data)
}


// EmployeeHealthInsuranceOffer returns a EmployeeHealthInsuranceOffer entity bound to this client.
// Idiomatic usage: client.EmployeeHealthInsuranceOffer(nil).List(nil, nil) or
// client.EmployeeHealthInsuranceOffer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) EmployeeHealthInsuranceOffer(data map[string]any) KotaEntity {
	return NewEmployeeHealthInsuranceOfferEntityFunc(sdk, data)
}


// EmployeeHealthInsuranceOfferResponsePagedList returns a EmployeeHealthInsuranceOfferResponsePagedList entity bound to this client.
// Idiomatic usage: client.EmployeeHealthInsuranceOfferResponsePagedList(nil).List(nil, nil) or
// client.EmployeeHealthInsuranceOfferResponsePagedList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) EmployeeHealthInsuranceOfferResponsePagedList(data map[string]any) KotaEntity {
	return NewEmployeeHealthInsuranceOfferResponsePagedListEntityFunc(sdk, data)
}


// EmployeeHealthInsurancePolicy returns a EmployeeHealthInsurancePolicy entity bound to this client.
// Idiomatic usage: client.EmployeeHealthInsurancePolicy(nil).List(nil, nil) or
// client.EmployeeHealthInsurancePolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) EmployeeHealthInsurancePolicy(data map[string]any) KotaEntity {
	return NewEmployeeHealthInsurancePolicyEntityFunc(sdk, data)
}


// EmployeeHealthInsurancePolicyResponsePagedList returns a EmployeeHealthInsurancePolicyResponsePagedList entity bound to this client.
// Idiomatic usage: client.EmployeeHealthInsurancePolicyResponsePagedList(nil).List(nil, nil) or
// client.EmployeeHealthInsurancePolicyResponsePagedList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) EmployeeHealthInsurancePolicyResponsePagedList(data map[string]any) KotaEntity {
	return NewEmployeeHealthInsurancePolicyResponsePagedListEntityFunc(sdk, data)
}


// Employer returns a Employer entity bound to this client.
// Idiomatic usage: client.Employer(nil).List(nil, nil) or
// client.Employer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) Employer(data map[string]any) KotaEntity {
	return NewEmployerEntityFunc(sdk, data)
}


// EmployerHealthInsurancePolicy returns a EmployerHealthInsurancePolicy entity bound to this client.
// Idiomatic usage: client.EmployerHealthInsurancePolicy(nil).List(nil, nil) or
// client.EmployerHealthInsurancePolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) EmployerHealthInsurancePolicy(data map[string]any) KotaEntity {
	return NewEmployerHealthInsurancePolicyEntityFunc(sdk, data)
}


// EmployerHealthInsurancePolicyResponsePagedList returns a EmployerHealthInsurancePolicyResponsePagedList entity bound to this client.
// Idiomatic usage: client.EmployerHealthInsurancePolicyResponsePagedList(nil).List(nil, nil) or
// client.EmployerHealthInsurancePolicyResponsePagedList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) EmployerHealthInsurancePolicyResponsePagedList(data map[string]any) KotaEntity {
	return NewEmployerHealthInsurancePolicyResponsePagedListEntityFunc(sdk, data)
}


// EmployerHealthInsuranceQuote returns a EmployerHealthInsuranceQuote entity bound to this client.
// Idiomatic usage: client.EmployerHealthInsuranceQuote(nil).List(nil, nil) or
// client.EmployerHealthInsuranceQuote(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) EmployerHealthInsuranceQuote(data map[string]any) KotaEntity {
	return NewEmployerHealthInsuranceQuoteEntityFunc(sdk, data)
}


// EmployerHealthInsuranceQuoteResponsePagedList returns a EmployerHealthInsuranceQuoteResponsePagedList entity bound to this client.
// Idiomatic usage: client.EmployerHealthInsuranceQuoteResponsePagedList(nil).List(nil, nil) or
// client.EmployerHealthInsuranceQuoteResponsePagedList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) EmployerHealthInsuranceQuoteResponsePagedList(data map[string]any) KotaEntity {
	return NewEmployerHealthInsuranceQuoteResponsePagedListEntityFunc(sdk, data)
}


// EnrolmentIntent returns a EnrolmentIntent entity bound to this client.
// Idiomatic usage: client.EnrolmentIntent(nil).List(nil, nil) or
// client.EnrolmentIntent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) EnrolmentIntent(data map[string]any) KotaEntity {
	return NewEnrolmentIntentEntityFunc(sdk, data)
}


// EnrolmentIntentRequirementResponsePagedList returns a EnrolmentIntentRequirementResponsePagedList entity bound to this client.
// Idiomatic usage: client.EnrolmentIntentRequirementResponsePagedList(nil).List(nil, nil) or
// client.EnrolmentIntentRequirementResponsePagedList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) EnrolmentIntentRequirementResponsePagedList(data map[string]any) KotaEntity {
	return NewEnrolmentIntentRequirementResponsePagedListEntityFunc(sdk, data)
}


// Event returns a Event entity bound to this client.
// Idiomatic usage: client.Event(nil).List(nil, nil) or
// client.Event(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) Event(data map[string]any) KotaEntity {
	return NewEventEntityFunc(sdk, data)
}


// Group returns a Group entity bound to this client.
// Idiomatic usage: client.Group(nil).List(nil, nil) or
// client.Group(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) Group(data map[string]any) KotaEntity {
	return NewGroupEntityFunc(sdk, data)
}


// GroupEmployee returns a GroupEmployee entity bound to this client.
// Idiomatic usage: client.GroupEmployee(nil).List(nil, nil) or
// client.GroupEmployee(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) GroupEmployee(data map[string]any) KotaEntity {
	return NewGroupEmployeeEntityFunc(sdk, data)
}


// GroupEmployeeResponsePagedList returns a GroupEmployeeResponsePagedList entity bound to this client.
// Idiomatic usage: client.GroupEmployeeResponsePagedList(nil).List(nil, nil) or
// client.GroupEmployeeResponsePagedList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) GroupEmployeeResponsePagedList(data map[string]any) KotaEntity {
	return NewGroupEmployeeResponsePagedListEntityFunc(sdk, data)
}


// GroupPolicy returns a GroupPolicy entity bound to this client.
// Idiomatic usage: client.GroupPolicy(nil).List(nil, nil) or
// client.GroupPolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) GroupPolicy(data map[string]any) KotaEntity {
	return NewGroupPolicyEntityFunc(sdk, data)
}


// GroupPolicyIntent returns a GroupPolicyIntent entity bound to this client.
// Idiomatic usage: client.GroupPolicyIntent(nil).List(nil, nil) or
// client.GroupPolicyIntent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) GroupPolicyIntent(data map[string]any) KotaEntity {
	return NewGroupPolicyIntentEntityFunc(sdk, data)
}


// GroupPolicyIntentRequirementResponsePagedList returns a GroupPolicyIntentRequirementResponsePagedList entity bound to this client.
// Idiomatic usage: client.GroupPolicyIntentRequirementResponsePagedList(nil).List(nil, nil) or
// client.GroupPolicyIntentRequirementResponsePagedList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) GroupPolicyIntentRequirementResponsePagedList(data map[string]any) KotaEntity {
	return NewGroupPolicyIntentRequirementResponsePagedListEntityFunc(sdk, data)
}


// GroupQuote returns a GroupQuote entity bound to this client.
// Idiomatic usage: client.GroupQuote(nil).List(nil, nil) or
// client.GroupQuote(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) GroupQuote(data map[string]any) KotaEntity {
	return NewGroupQuoteEntityFunc(sdk, data)
}


// GroupQuoteIntent returns a GroupQuoteIntent entity bound to this client.
// Idiomatic usage: client.GroupQuoteIntent(nil).List(nil, nil) or
// client.GroupQuoteIntent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) GroupQuoteIntent(data map[string]any) KotaEntity {
	return NewGroupQuoteIntentEntityFunc(sdk, data)
}


// GroupQuoteIntentRequirementResponsePagedList returns a GroupQuoteIntentRequirementResponsePagedList entity bound to this client.
// Idiomatic usage: client.GroupQuoteIntentRequirementResponsePagedList(nil).List(nil, nil) or
// client.GroupQuoteIntentRequirementResponsePagedList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) GroupQuoteIntentRequirementResponsePagedList(data map[string]any) KotaEntity {
	return NewGroupQuoteIntentRequirementResponsePagedListEntityFunc(sdk, data)
}


// Plan returns a Plan entity bound to this client.
// Idiomatic usage: client.Plan(nil).List(nil, nil) or
// client.Plan(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) Plan(data map[string]any) KotaEntity {
	return NewPlanEntityFunc(sdk, data)
}


// Policy returns a Policy entity bound to this client.
// Idiomatic usage: client.Policy(nil).List(nil, nil) or
// client.Policy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) Policy(data map[string]any) KotaEntity {
	return NewPolicyEntityFunc(sdk, data)
}


// PolicyAmendmentIntent returns a PolicyAmendmentIntent entity bound to this client.
// Idiomatic usage: client.PolicyAmendmentIntent(nil).List(nil, nil) or
// client.PolicyAmendmentIntent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) PolicyAmendmentIntent(data map[string]any) KotaEntity {
	return NewPolicyAmendmentIntentEntityFunc(sdk, data)
}


// PolicyImportIntent returns a PolicyImportIntent entity bound to this client.
// Idiomatic usage: client.PolicyImportIntent(nil).List(nil, nil) or
// client.PolicyImportIntent(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) PolicyImportIntent(data map[string]any) KotaEntity {
	return NewPolicyImportIntentEntityFunc(sdk, data)
}


// Provider returns a Provider entity bound to this client.
// Idiomatic usage: client.Provider(nil).List(nil, nil) or
// client.Provider(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) Provider(data map[string]any) KotaEntity {
	return NewProviderEntityFunc(sdk, data)
}


// Replay returns a Replay entity bound to this client.
// Idiomatic usage: client.Replay(nil).List(nil, nil) or
// client.Replay(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) Replay(data map[string]any) KotaEntity {
	return NewReplayEntityFunc(sdk, data)
}


// WebhookEndpoint returns a WebhookEndpoint entity bound to this client.
// Idiomatic usage: client.WebhookEndpoint(nil).List(nil, nil) or
// client.WebhookEndpoint(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) WebhookEndpoint(data map[string]any) KotaEntity {
	return NewWebhookEndpointEntityFunc(sdk, data)
}


// WebhookEndpointResponsePagedList returns a WebhookEndpointResponsePagedList entity bound to this client.
// Idiomatic usage: client.WebhookEndpointResponsePagedList(nil).List(nil, nil) or
// client.WebhookEndpointResponsePagedList(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *KotaSDK) WebhookEndpointResponsePagedList(data map[string]any) KotaEntity {
	return NewWebhookEndpointResponsePagedListEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *KotaSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewKotaSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
