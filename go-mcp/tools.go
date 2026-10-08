package main

import (
	"context"
	"encoding/json"
	"fmt"
	"strings"

	"github.com/google/jsonschema-go/jsonschema"
	"github.com/modelcontextprotocol/go-sdk/mcp"
	sdk "github.com/voxgig-sdk/kota-sdk/go"
)

// ListArgs is what an agent sends to kota_list.
type ListArgs struct {
	Entity string         `json:"entity" jsonschema:"one of: associated_person | associated_person_eligibility_response_paged_list | contribution_report | contribution_report_employee_breakdown_response_paged_list | employee | employee_health_insurance_offer_response_paged_list | employee_health_insurance_policy_response_paged_list | employer | employer_health_insurance_policy_response_paged_list | employer_health_insurance_quote_response_paged_list | enrolment_intent | enrolment_intent_requirement_response_paged_list | event | group | group_employee_response_paged_list | group_policy | group_policy_intent | group_policy_intent_requirement_response_paged_list | group_quote_intent | group_quote_intent_requirement_response_paged_list | plan | policy | policy_amendment_intent | policy_import_intent | provider | webhook_endpoint"`
	Query  map[string]any `json:"query,omitempty" jsonschema:"optional filter map; omit it for the first page"`
}

// LoadArgs is what an agent sends to kota_load.
type LoadArgs struct {
	Entity string         `json:"entity" jsonschema:"one of: associated_person | contribution_report | contribution_report_employee_breakdown | dependents_management_intent | employee | employee_health_insurance_offer | employee_health_insurance_policy | employer | employer_health_insurance_policy | employer_health_insurance_quote | enrolment_intent | event | group | group_policy | group_policy_intent | group_quote | group_quote_intent | plan | policy | policy_amendment_intent | policy_import_intent | provider | webhook_endpoint"`
	Query  map[string]any `json:"query" jsonschema:"match map naming the record, such as {\"id\":1}"`
}

func registerTools(server *mcp.Server, client *sdk.KotaSDK) {
	mcp.AddTool(server, &mcp.Tool{
		Name:        "kota_list",
		Description: "List records from Kota. Args: entity, query (optional filter map; omit it for the first page). Returns the first page of records as JSON.",
		Annotations: &mcp.ToolAnnotations{ReadOnlyHint: true},
		InputSchema: entitySchema[ListArgs]("associated_person", "associated_person_eligibility_response_paged_list", "contribution_report", "contribution_report_employee_breakdown_response_paged_list", "employee", "employee_health_insurance_offer_response_paged_list", "employee_health_insurance_policy_response_paged_list", "employer", "employer_health_insurance_policy_response_paged_list", "employer_health_insurance_quote_response_paged_list", "enrolment_intent", "enrolment_intent_requirement_response_paged_list", "event", "group", "group_employee_response_paged_list", "group_policy", "group_policy_intent", "group_policy_intent_requirement_response_paged_list", "group_quote_intent", "group_quote_intent_requirement_response_paged_list", "plan", "policy", "policy_amendment_intent", "policy_import_intent", "provider", "webhook_endpoint"),
	}, func(ctx context.Context, req *mcp.CallToolRequest, args ListArgs) (*mcp.CallToolResult, any, error) {
		return runOp(ctx, client, "list", args.Entity, args.Query)
	})
	mcp.AddTool(server, &mcp.Tool{
		Name:        "kota_load",
		Description: "Load one record from Kota. Args: entity, query (match map naming the record, such as {\"id\":1}). Returns the record as JSON.",
		Annotations: &mcp.ToolAnnotations{ReadOnlyHint: true},
		InputSchema: entitySchema[LoadArgs]("associated_person", "contribution_report", "contribution_report_employee_breakdown", "dependents_management_intent", "employee", "employee_health_insurance_offer", "employee_health_insurance_policy", "employer", "employer_health_insurance_policy", "employer_health_insurance_quote", "enrolment_intent", "event", "group", "group_policy", "group_policy_intent", "group_quote", "group_quote_intent", "plan", "policy", "policy_amendment_intent", "policy_import_intent", "provider", "webhook_endpoint"),
	}, func(ctx context.Context, req *mcp.CallToolRequest, args LoadArgs) (*mcp.CallToolResult, any, error) {
		return runOp(ctx, client, "load", args.Entity, args.Query)
	})
}

// entitySchema is the schema inferred from In, its entity limited to the
// entities the tool serves.
func entitySchema[In any](names ...string) *jsonschema.Schema {
	schema, err := jsonschema.For[In](nil)
	if err != nil {
		panic(err)
	}
	enum := make([]any, len(names))
	for i, name := range names {
		enum[i] = name
	}
	schema.Properties["entity"].Enum = enum
	return schema
}

func runOp(_ context.Context, client *sdk.KotaSDK, op string, entity string, input map[string]any) (*mcp.CallToolResult, any, error) {
	ent, err := entityFor(client, entity)
	if err != nil {
		return toolError(err.Error())
	}

	var result any
	switch op {
	case "list":
		result, err = ent.List(input, nil)
	case "load":
		result, err = ent.Load(input, nil)
	case "create":
		result, err = ent.Create(input, nil)
	case "update":
		result, err = ent.Update(input, nil)
	case "patch":
		result, err = ent.Patch(input, nil)
	case "remove":
		result, err = ent.Remove(input, nil)
	default:
		return toolError(fmt.Sprintf("unknown op %q", op))
	}
	if err != nil {
		return toolError(err.Error())
	}

	// SDK returns *Entity wrappers; unwrap each via .Data() to get a
	// plain map[string]any (or []any of maps for list) suitable for
	// JSON marshalling.
	data := extractData(result)
	body, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		return toolError(fmt.Sprintf("marshal: %v", err))
	}
	return &mcp.CallToolResult{
		Content: []mcp.Content{
			&mcp.TextContent{Text: string(body)},
		},
	}, data, nil
}

// entityFor dispatches on the lowercase entity name. The generator
// emits one `case "<name>":` per entity defined in the SDK model.
func entityFor(client *sdk.KotaSDK, name string) (sdk.KotaEntity, error) {
	switch strings.ToLower(name) {
	case "associated_person":
		return client.AssociatedPerson(nil), nil
	case "associated_person_eligibility_response_paged_list":
		return client.AssociatedPersonEligibilityResponsePagedList(nil), nil
	case "contribution_report":
		return client.ContributionReport(nil), nil
	case "contribution_report_employee_breakdown":
		return client.ContributionReportEmployeeBreakdown(nil), nil
	case "contribution_report_employee_breakdown_response_paged_list":
		return client.ContributionReportEmployeeBreakdownResponsePagedList(nil), nil
	case "create_hosted_session_token":
		return client.CreateHostedSessionToken(nil), nil
	case "create_session_token":
		return client.CreateSessionToken(nil), nil
	case "dependent":
		return client.Dependent(nil), nil
	case "dependents_management_intent":
		return client.DependentsManagementIntent(nil), nil
	case "eligibility_check":
		return client.EligibilityCheck(nil), nil
	case "employee":
		return client.Employee(nil), nil
	case "employee_health_insurance_offer":
		return client.EmployeeHealthInsuranceOffer(nil), nil
	case "employee_health_insurance_offer_response_paged_list":
		return client.EmployeeHealthInsuranceOfferResponsePagedList(nil), nil
	case "employee_health_insurance_policy":
		return client.EmployeeHealthInsurancePolicy(nil), nil
	case "employee_health_insurance_policy_response_paged_list":
		return client.EmployeeHealthInsurancePolicyResponsePagedList(nil), nil
	case "employer":
		return client.Employer(nil), nil
	case "employer_health_insurance_policy":
		return client.EmployerHealthInsurancePolicy(nil), nil
	case "employer_health_insurance_policy_response_paged_list":
		return client.EmployerHealthInsurancePolicyResponsePagedList(nil), nil
	case "employer_health_insurance_quote":
		return client.EmployerHealthInsuranceQuote(nil), nil
	case "employer_health_insurance_quote_response_paged_list":
		return client.EmployerHealthInsuranceQuoteResponsePagedList(nil), nil
	case "enrolment_intent":
		return client.EnrolmentIntent(nil), nil
	case "enrolment_intent_requirement_response_paged_list":
		return client.EnrolmentIntentRequirementResponsePagedList(nil), nil
	case "event":
		return client.Event(nil), nil
	case "group":
		return client.Group(nil), nil
	case "group_employee":
		return client.GroupEmployee(nil), nil
	case "group_employee_response_paged_list":
		return client.GroupEmployeeResponsePagedList(nil), nil
	case "group_policy":
		return client.GroupPolicy(nil), nil
	case "group_policy_intent":
		return client.GroupPolicyIntent(nil), nil
	case "group_policy_intent_requirement_response_paged_list":
		return client.GroupPolicyIntentRequirementResponsePagedList(nil), nil
	case "group_quote":
		return client.GroupQuote(nil), nil
	case "group_quote_intent":
		return client.GroupQuoteIntent(nil), nil
	case "group_quote_intent_requirement_response_paged_list":
		return client.GroupQuoteIntentRequirementResponsePagedList(nil), nil
	case "plan":
		return client.Plan(nil), nil
	case "policy":
		return client.Policy(nil), nil
	case "policy_amendment_intent":
		return client.PolicyAmendmentIntent(nil), nil
	case "policy_import_intent":
		return client.PolicyImportIntent(nil), nil
	case "provider":
		return client.Provider(nil), nil
	case "webhook_endpoint":
		return client.WebhookEndpoint(nil), nil
	}
	return nil, fmt.Errorf("unknown entity %q", name)
}

func extractData(x any) any {
	switch v := x.(type) {
	case sdk.Entity:
		return extractData(v.Data())
	case []any:
		out := make([]any, len(v))
		for i, e := range v {
			out[i] = extractData(e)
		}
		return out
	case map[string]any:
		out := make(map[string]any, len(v))
		for k, vv := range v {
			out[k] = extractData(vv)
		}
		return out
	}
	return x
}

func toolError(msg string) (*mcp.CallToolResult, any, error) {
	return &mcp.CallToolResult{
		IsError: true,
		Content: []mcp.Content{
			&mcp.TextContent{Text: msg},
		},
	}, nil, nil
}

// hint is an MCP annotation that defaults to true unless stated.
func hint(b bool) *bool {
	return &b
}
