package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Kota",
			"slug": "kota",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://test.api.kota.io",
			"auth": map[string]any{
				"prefix": "Bearer",
			},
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"associated_person": map[string]any{},
				"associated_person_eligibility_response_paged_list": map[string]any{},
				"contribution_report": map[string]any{},
				"contribution_report_employee_breakdown": map[string]any{},
				"contribution_report_employee_breakdown_response_paged_list": map[string]any{},
				"create_hosted_session_token": map[string]any{},
				"create_session_token": map[string]any{},
				"dependent": map[string]any{},
				"dependents_management_intent": map[string]any{},
				"eligibility_check": map[string]any{},
				"employee": map[string]any{},
				"employee_health_insurance_offer": map[string]any{},
				"employee_health_insurance_offer_response_paged_list": map[string]any{},
				"employee_health_insurance_policy": map[string]any{},
				"employee_health_insurance_policy_response_paged_list": map[string]any{},
				"employer": map[string]any{},
				"employer_health_insurance_policy": map[string]any{},
				"employer_health_insurance_policy_response_paged_list": map[string]any{},
				"employer_health_insurance_quote": map[string]any{},
				"employer_health_insurance_quote_response_paged_list": map[string]any{},
				"enrolment_intent": map[string]any{},
				"enrolment_intent_requirement_response_paged_list": map[string]any{},
				"event": map[string]any{},
				"group": map[string]any{},
				"group_employee": map[string]any{},
				"group_employee_response_paged_list": map[string]any{},
				"group_policy": map[string]any{},
				"group_policy_intent": map[string]any{},
				"group_policy_intent_requirement_response_paged_list": map[string]any{},
				"group_quote": map[string]any{},
				"group_quote_intent": map[string]any{},
				"group_quote_intent_requirement_response_paged_list": map[string]any{},
				"plan": map[string]any{},
				"policy": map[string]any{},
				"policy_amendment_intent": map[string]any{},
				"policy_import_intent": map[string]any{},
				"provider": map[string]any{},
				"replay": map[string]any{},
				"webhook_endpoint": map[string]any{},
				"webhook_endpoint_response_paged_list": map[string]any{},
			},
		},
		"entity": map[string]any{
			"associated_person": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "date_of_birth",
						"req": true,
						"short": "Date of birth of the associated person",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "email",
						"short": "Email address of the associated person",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "employee_id",
						"req": true,
						"short": "Unique identifier for the employee this person is associated with",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "first_name",
						"req": true,
						"short": "First name of the associated person",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the associated person",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_name",
						"req": true,
						"short": "Last name of the associated person",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "phone_number",
						"short": "Phone number in E.164 international format (e.g.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "platform_id",
						"short": "Unique identifier for the platform",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "relationship_type",
						"req": true,
						"short": "The relationship type between the employee and the associated person",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "sex_at_birth",
						"req": true,
						"short": "The sex assigned to the associated person at birth",
						"type": "`$ANY`",
					},
				},
				"name": "associated_person",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/employees/{employee_id}/associated_persons",
								"parts": []any{
									"employees",
									"{employee_id}",
									"associated_persons",
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/employees/{employee_id}/associated_persons",
								"parts": []any{
									"employees",
									"{employee_id}",
									"associated_persons",
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"page",
										"page_size",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "associated_person_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/employees/{employee_id}/associated_persons/{associated_person_id}",
								"parts": []any{
									"employees",
									"{employee_id}",
									"associated_persons",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"associated_person_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "associated_person_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/employees/{employee_id}/associated_persons/{associated_person_id}",
								"parts": []any{
									"employees",
									"{employee_id}",
									"associated_persons",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"associated_person_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "associated_person_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/employees/{employee_id}/associated_persons/{associated_person_id}",
								"parts": []any{
									"employees",
									"{employee_id}",
									"associated_persons",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"associated_person_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"employee",
						},
					},
				},
			},
			"associated_person_eligibility_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "associated_person_id",
						"req": true,
						"short": "The associated person ID.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "date_of_birth",
						"req": true,
						"short": "Date of birth of the associated person.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "eligibility_status",
						"req": true,
						"short": "Eligibility status for the policy/plan.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "first_name",
						"req": true,
						"short": "First name of the associated person.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ineligibility_reason",
						"short": "Reason for ineligibility if status is ineligible.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "last_name",
						"req": true,
						"short": "Last name of the associated person.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "relationship",
						"req": true,
						"short": "Relationship type to the employee.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "sex_at_birth",
						"req": true,
						"short": "Sex at birth of the associated person.",
						"type": "`$ANY`",
					},
				},
				"name": "associated_person_eligibility_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "dependents_management_intent_id",
											"orig": "dependents_management_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility",
								"parts": []any{
									"dependents_management_intents",
									"{dependents_management_intent_id}",
									"associated_persons_eligibility",
								},
								"select": map[string]any{
									"exist": []any{
										"dependents_management_intent_id",
										"page",
										"page_size",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"dependents_management_intent",
						},
					},
				},
			},
			"contribution_report": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "Date and time the report was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "employer_id",
						"req": true,
						"short": "Unique identifier of the employer for which the report is created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_customer_id",
						"short": "Unique identifier of the customer for which the report is created.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "finalized_at",
						"short": "Date and time the report was finalized, if applicable",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the contribution report",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_updated_at",
						"req": true,
						"short": "Date and time of the last update to the report",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "period",
						"req": true,
						"short": "Period covered by the contribution report",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of the contribution report",
						"type": "`$ANY`",
					},
				},
				"name": "contribution_report",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "contribution_report_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/contribution_reports/{contribution_report_id}/finalize",
								"parts": []any{
									"contribution_reports",
									"{id}",
									"finalize",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"contribution_report_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "finalize",
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employer_id",
											"orig": "employer_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "external_customer_id",
											"orig": "external_customer_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "month",
											"orig": "month",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "year",
											"orig": "year",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/contribution_reports",
								"parts": []any{
									"contribution_reports",
								},
								"select": map[string]any{
									"exist": []any{
										"employer_id",
										"external_customer_id",
										"month",
										"page",
										"page_size",
										"status",
										"x_platform_id",
										"year",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "contribution_report_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/contribution_reports/{contribution_report_id}",
								"parts": []any{
									"contribution_reports",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"contribution_report_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"contribution_report_employee_breakdown": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "contribution_report_id",
						"req": true,
						"short": "Unique identifier of the related contribution report",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "Date and time the breakdown was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currency",
						"req": true,
						"short": "The currency in which all the amounts in this breakdown are presented (e.g.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "employee_id",
						"req": true,
						"short": "Unique identifier of the employee for which the breakdown is created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "employer_id",
						"req": true,
						"short": "Unique identifier of the employer for which the breakdown is created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_customer_id",
						"short": "Unique identifier of the customer for which the breakdown is created.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "finalized_at",
						"short": "Date and time the breakdown was finalized, if applicable",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "health_insurance",
						"req": true,
						"short": "Health insurance contribution details",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "last_updated_at",
						"req": true,
						"short": "Date and time of the last update to the breakdown",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "period",
						"req": true,
						"short": "Period covered by the employee breakdown",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of the breakdown",
						"type": "`$ANY`",
					},
				},
				"name": "contribution_report_employee_breakdown",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "contribution_report_id",
											"orig": "contribution_report_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}",
								"parts": []any{
									"contribution_reports",
									"{contribution_report_id}",
									"employee_breakdowns",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employee_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contribution_report_id",
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"contribution_report",
						},
					},
				},
			},
			"contribution_report_employee_breakdown_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "contribution_report_id",
						"req": true,
						"short": "Unique identifier of the related contribution report",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "Date and time the breakdown was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "currency",
						"req": true,
						"short": "The currency in which all the amounts in this breakdown are presented (e.g.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "employee_id",
						"req": true,
						"short": "Unique identifier of the employee for which the breakdown is created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "employer_id",
						"req": true,
						"short": "Unique identifier of the employer for which the breakdown is created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_customer_id",
						"short": "Unique identifier of the customer for which the breakdown is created.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "finalized_at",
						"short": "Date and time the breakdown was finalized, if applicable",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "health_insurance",
						"req": true,
						"short": "Health insurance contribution details",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "last_updated_at",
						"req": true,
						"short": "Date and time of the last update to the breakdown",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "period",
						"req": true,
						"short": "Period covered by the employee breakdown",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of the breakdown",
						"type": "`$ANY`",
					},
				},
				"name": "contribution_report_employee_breakdown_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "contribution_report_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/contribution_reports/{contribution_report_id}/employee_breakdowns",
								"parts": []any{
									"contribution_reports",
									"{id}",
									"employee_breakdowns",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"contribution_report_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "employee_breakdowns",
									"exist": []any{
										"id",
										"page",
										"page_size",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"create_hosted_session_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "expiry",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "link",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "create_hosted_session_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/hosted/sessions",
								"parts": []any{
									"hosted",
									"sessions",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"create_session_token": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "expiry",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "token",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "create_session_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/embed/sessions",
								"parts": []any{
									"embed",
									"sessions",
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"dependent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action_required",
						"short": "Details of the action required from the caller.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "coverage_options",
						"short": "Available member-scoped coverage options for the plan.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "dependents",
						"req": true,
						"short": "List of dependents being managed.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "disclosures",
						"req": true,
						"short": "Disclosures associated with this intent.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the dependents management intent.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "Object type identifier.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parent_intent_id",
						"req": true,
						"short": "The parent intent ID (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parent_intent_type",
						"req": true,
						"short": "The type of parent intent.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "plan",
						"req": true,
						"short": "Plan information including pricing details.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of the dependents management intent.",
						"type": "`$ANY`",
					},
				},
				"name": "dependent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "dependents_management_intent_id",
											"orig": "dependents_management_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/dependents_management_intents/{dependents_management_intent_id}/dependents",
								"parts": []any{
									"dependents_management_intents",
									"{dependents_management_intent_id}",
									"dependents",
								},
								"select": map[string]any{
									"exist": []any{
										"dependents_management_intent_id",
										"idempotency_key",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "dependents_management_intent_id",
											"orig": "dependents_management_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "associated_person_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "DELETE",
								"orig": "/dependents_management_intents/{dependents_management_intent_id}/dependents/{associated_person_id}",
								"parts": []any{
									"dependents_management_intents",
									"{dependents_management_intent_id}",
									"dependents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"associated_person_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dependents_management_intent_id",
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"dependents_management_intent",
						},
					},
				},
			},
			"dependents_management_intent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action_required",
						"short": "Details of the action required from the caller.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "coverage_options",
						"short": "Available member-scoped coverage options for the plan.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "dependents",
						"req": true,
						"short": "List of dependents being managed.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "disclosures",
						"req": true,
						"short": "Disclosures associated with this intent.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the dependents management intent.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "Object type identifier.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parent_intent_id",
						"req": true,
						"short": "The parent intent ID (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "parent_intent_type",
						"req": true,
						"short": "The type of parent intent.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "plan",
						"req": true,
						"short": "Plan information including pricing details.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of the dependents management intent.",
						"type": "`$ANY`",
					},
				},
				"name": "dependents_management_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "policy_amendment_intent_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "policy_id",
											"orig": "policy_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent",
								"parts": []any{
									"policies",
									"{policy_id}",
									"policy_amendment_intents",
									"{policy_amendment_intent_id}",
									"create_dependents_management_intent",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"id": "policy_amendment_intent_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"policy_amendment_intent_id",
										"policy_id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "enrolment_intent_id",
											"orig": "enrolment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/enrolment_intents/{enrolment_intent_id}/create_dependents_management_intent",
								"parts": []any{
									"enrolment_intents",
									"{enrolment_intent_id}",
									"create_dependents_management_intent",
								},
								"select": map[string]any{
									"exist": []any{
										"enrolment_intent_id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "dependents_management_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/dependents_management_intents/{dependents_management_intent_id}/cancel",
								"parts": []any{
									"dependents_management_intents",
									"{id}",
									"cancel",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dependents_management_intent_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "cancel",
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "dependents_management_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/dependents_management_intents/{dependents_management_intent_id}/confirm",
								"parts": []any{
									"dependents_management_intents",
									"{id}",
									"confirm",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dependents_management_intent_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "confirm",
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "dependents_management_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/dependents_management_intents/{dependents_management_intent_id}",
								"parts": []any{
									"dependents_management_intents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dependents_management_intent_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"enrolment_intent",
						},
						[]any{
							"policy",
							"policy_amendment_intent",
						},
					},
				},
			},
			"eligibility_check": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "eligibility_status",
						"req": true,
						"short": "Eligibility status: `eligible` or `ineligible`.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "plan",
						"req": true,
						"short": "The insurance plan associated with the group.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "provider",
						"req": true,
						"short": "The insurance provider associated with the group.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "reasons",
						"req": true,
						"short": "List of reasons why the employee is ineligible.",
						"type": "`$ARRAY`",
					},
				},
				"name": "eligibility_check",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "group_id",
											"orig": "group_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/groups/{group_id}/eligibility_check",
								"parts": []any{
									"groups",
									"{group_id}",
									"eligibility_check",
								},
								"select": map[string]any{
									"exist": []any{
										"group_id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"group",
						},
					},
				},
			},
			"employee": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bank_account",
						"short": "Bank account details",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "date_of_birth",
						"req": true,
						"short": "Date of birth of the employee",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "earliest_benefits_start_date",
						"short": "The earliest date this employee can be enrolled in any benefits.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "email",
						"req": true,
						"short": "Email address of the employee",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "employer_id",
						"short": "Unique identifier for the employer",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_customer_id",
						"short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "first_name",
						"req": true,
						"short": "First name of the employee.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "home_address",
						"short": "Location where the employee is legally registered to live",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the employee",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_name",
						"req": true,
						"short": "Last name of the employee",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"short": "Set of key-value pairs that you can attach to an object.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "national_tax_id",
						"req": true,
						"short": "PPSN in Ireland, NINo in the UK, DNI/NIE in Spain",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "nationality",
						"short": "Nationality of the employee (e.g.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "offboard_on",
						"short": "Date when the employee was or will be offboarded",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "phone_number",
						"req": true,
						"short": "Phone number in E.164 international format (e.g.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "platform_id",
						"short": "Unique identifier for the platform",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "sex_at_birth",
						"req": true,
						"short": "The sex assigned to the employee at birth",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "start_on",
						"short": "Employment start date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"short": "Current status of the employee",
						"type": "`$ANY`",
					},
				},
				"name": "employee",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/employees/{employee_id}/offboard",
								"parts": []any{
									"employees",
									"{id}",
									"offboard",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employee_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "offboard",
									"exist": []any{
										"id",
										"idempotency_key",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/employees/{employee_id}/offboard/cancel",
								"parts": []any{
									"employees",
									"{id}",
									"offboard",
									"cancel",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employee_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "offboard_cancel",
									"exist": []any{
										"id",
										"idempotency_key",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/employees",
								"parts": []any{
									"employees",
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employer_id",
											"orig": "employer_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "external_customer_id",
											"orig": "external_customer_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "metadata_id",
											"orig": "metadata_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/employees",
								"parts": []any{
									"employees",
								},
								"select": map[string]any{
									"exist": []any{
										"employer_id",
										"external_customer_id",
										"filter",
										"metadata_id",
										"page",
										"page_size",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/employees/{employee_id}",
								"parts": []any{
									"employees",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employee_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/employees/{employee_id}",
								"parts": []any{
									"employees",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employee_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"employee_health_insurance_offer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coverage_level",
						"req": true,
						"short": "Details about the coverage level for the offer.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "employee_id",
						"req": true,
						"short": "The Id of the employee for which the offer is available",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "employer_id",
						"req": true,
						"short": "The Id of the employer for which the offer is available",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_customer_id",
						"short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for offer",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "required_action",
						"short": "Required action to progress the offer, if any.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of offer",
						"type": "`$ANY`",
					},
				},
				"name": "employee_health_insurance_offer",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "eeho_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employee_offer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/employees/{employee_id}/health_insurance/offers/{employee_offer_id}",
								"parts": []any{
									"employees",
									"{employee_id}",
									"health_insurance",
									"offers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employee_offer_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"employee",
						},
					},
				},
			},
			"employee_health_insurance_offer_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coverage_level",
						"req": true,
						"short": "Details about the coverage level for the offer.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "employee_id",
						"req": true,
						"short": "The Id of the employee for which the offer is available",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "employer_id",
						"req": true,
						"short": "The Id of the employer for which the offer is available",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "external_customer_id",
						"short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for offer",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "required_action",
						"short": "Required action to progress the offer, if any.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of offer",
						"type": "`$ANY`",
					},
				},
				"name": "employee_health_insurance_offer_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/employees/{employee_id}/health_insurance/offers",
								"parts": []any{
									"employees",
									"{employee_id}",
									"health_insurance",
									"offers",
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"page",
										"page_size",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"employee",
						},
					},
				},
			},
			"employee_health_insurance_policy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cancellation_date",
						"short": "Policy was cancelled on this date, if cancellation occured",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "coverage_level",
						"req": true,
						"short": "Represents the current coverage level for the policy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "employee_id",
						"req": true,
						"short": "The Id of the employee for which the policy is created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "employer_id",
						"req": true,
						"short": "The Id of the employer for which the policy is created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "end_date",
						"req": true,
						"short": "Policy ends on this date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enrolled_dependants_count",
						"req": true,
						"short": "Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "enrolment_type",
						"req": true,
						"short": "Enrolment type of the policy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "estimated_gross_premium",
						"req": true,
						"short": "Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "external_customer_id",
						"short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for policy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "opt_out_deadline_date",
						"req": true,
						"short": "Last day to opt out from the policy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "policy_number",
						"short": "Health insurance policy number, if available",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "renewal",
						"req": true,
						"short": "Renewal information for the policy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "start_date",
						"req": true,
						"short": "Policy starts on this date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of policy",
						"type": "`$ANY`",
					},
				},
				"name": "employee_health_insurance_policy",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employee_policy_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/employees/{employee_id}/health_insurance/policies/{employee_policy_id}",
								"parts": []any{
									"employees",
									"{employee_id}",
									"health_insurance",
									"policies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employee_policy_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"employee",
						},
					},
				},
			},
			"employee_health_insurance_policy_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cancellation_date",
						"short": "Policy was cancelled on this date, if cancellation occured",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "coverage_level",
						"req": true,
						"short": "Represents the current coverage level for the policy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "employee_id",
						"req": true,
						"short": "The Id of the employee for which the policy is created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "employer_id",
						"req": true,
						"short": "The Id of the employer for which the policy is created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "end_date",
						"req": true,
						"short": "Policy ends on this date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enrolled_dependants_count",
						"req": true,
						"short": "Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy.",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "enrolment_type",
						"req": true,
						"short": "Enrolment type of the policy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "estimated_gross_premium",
						"req": true,
						"short": "Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "external_customer_id",
						"short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for policy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "opt_out_deadline_date",
						"req": true,
						"short": "Last day to opt out from the policy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "policy_number",
						"short": "Health insurance policy number, if available",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "renewal",
						"req": true,
						"short": "Renewal information for the policy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "start_date",
						"req": true,
						"short": "Policy starts on this date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of policy",
						"type": "`$ANY`",
					},
				},
				"name": "employee_health_insurance_policy_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/employees/{employee_id}/health_insurance/policies",
								"parts": []any{
									"employees",
									"{employee_id}",
									"health_insurance",
									"policies",
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"page",
										"page_size",
										"status",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"employee",
						},
					},
				},
			},
			"employer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "contact",
						"req": true,
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "earliest_benefits_start_date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "legal_address",
						"req": true,
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "legal_name",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "metadata",
						"short": "Set of key-value pairs that you can attach to an object.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$OBJECT`",
							},
						},
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "offboard_on",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "platform_id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "registration_number",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "status",
						"type": "`$ANY`",
					},
				},
				"name": "employer",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/employers/{employer_id}/offboard",
								"parts": []any{
									"employers",
									"{id}",
									"offboard",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employer_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "offboard",
									"exist": []any{
										"id",
										"idempotency_key",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/employers",
								"parts": []any{
									"employers",
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/employers",
								"parts": []any{
									"employers",
								},
								"select": map[string]any{
									"exist": []any{
										"filter",
										"page",
										"page_size",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/employers/{employer_id}",
								"parts": []any{
									"employers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employer_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/employers/{employer_id}",
								"parts": []any{
									"employers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employer_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"employer_health_insurance_policy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cancellation_date",
						"short": "Policy was cancelled on this date, if cancellation occured",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "coverage_levels",
						"req": true,
						"short": "Represents the available coverage levels for this policy",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "employer_cancellation_period_length",
						"req": true,
						"short": "How many days the employer has to cancel the policy since the policy starts",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "employer_id",
						"req": true,
						"short": "The Id of the employer for which the policy is created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "end_date",
						"req": true,
						"short": "Policy ends on this date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enrolment_type",
						"req": true,
						"short": "Enrolment type of the policy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "group_policy_number",
						"short": "Group’s health insurance policy number, if available",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for policy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "renewal",
						"req": true,
						"short": "Renewal information for the policy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "start_date",
						"req": true,
						"short": "Policy starts on this date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of policy",
						"type": "`$ANY`",
					},
				},
				"name": "employer_health_insurance_policy",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employer_id",
											"orig": "employer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "erhp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employer_policy_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/employers/{employer_id}/health_insurance/policies/{employer_policy_id}",
								"parts": []any{
									"employers",
									"{employer_id}",
									"health_insurance",
									"policies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employer_policy_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employer_id",
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"employer",
						},
					},
				},
			},
			"employer_health_insurance_policy_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cancellation_date",
						"short": "Policy was cancelled on this date, if cancellation occured",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "coverage_levels",
						"req": true,
						"short": "Represents the available coverage levels for this policy",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "employer_cancellation_period_length",
						"req": true,
						"short": "How many days the employer has to cancel the policy since the policy starts",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "employer_id",
						"req": true,
						"short": "The Id of the employer for which the policy is created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "end_date",
						"req": true,
						"short": "Policy ends on this date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enrolment_type",
						"req": true,
						"short": "Enrolment type of the policy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "group_policy_number",
						"short": "Group’s health insurance policy number, if available",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for policy",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "renewal",
						"req": true,
						"short": "Renewal information for the policy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "start_date",
						"req": true,
						"short": "Policy starts on this date",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of policy",
						"type": "`$ANY`",
					},
				},
				"name": "employer_health_insurance_policy_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employer_id",
											"orig": "employer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/employers/{employer_id}/health_insurance/policies",
								"parts": []any{
									"employers",
									"{employer_id}",
									"health_insurance",
									"policies",
								},
								"select": map[string]any{
									"exist": []any{
										"employer_id",
										"page",
										"page_size",
										"status",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"employer",
						},
					},
				},
			},
			"employer_health_insurance_quote": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coverage_levels",
						"req": true,
						"short": "List of levels covered under the policy, each item representing details about the plan’s cover.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "employer_id",
						"req": true,
						"short": "The Id of the employer for which the is created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the quote",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quoted_at",
						"req": true,
						"short": "Date and time the quote was created at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "required_action",
						"short": "Actions required by the employer to proceed with the quote.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of the quote",
						"type": "`$ANY`",
					},
				},
				"name": "employer_health_insurance_quote",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employer_id",
											"orig": "employer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "erhq_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employer_quote_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/employers/{employer_id}/health_insurance/quotes/{employer_quote_id}",
								"parts": []any{
									"employers",
									"{employer_id}",
									"health_insurance",
									"quotes",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employer_quote_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employer_id",
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"employer",
						},
					},
				},
			},
			"employer_health_insurance_quote_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coverage_levels",
						"req": true,
						"short": "List of levels covered under the policy, each item representing details about the plan’s cover.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "employer_id",
						"req": true,
						"short": "The Id of the employer for which the is created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the quote",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quoted_at",
						"req": true,
						"short": "Date and time the quote was created at",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "required_action",
						"short": "Actions required by the employer to proceed with the quote.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of the quote",
						"type": "`$ANY`",
					},
				},
				"name": "employer_health_insurance_quote_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employer_id",
											"orig": "employer_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/employers/{employer_id}/health_insurance/quotes",
								"parts": []any{
									"employers",
									"{employer_id}",
									"health_insurance",
									"quotes",
								},
								"select": map[string]any{
									"exist": []any{
										"employer_id",
										"page",
										"page_size",
										"status",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"employer",
						},
					},
				},
			},
			"enrolment_intent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action_required",
						"short": "If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "disclosures",
						"req": true,
						"short": "Disclosures associated with this intent.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "employee_id",
						"req": true,
						"short": "Identifier for the employee associated with this enrolment intent.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "force_confirmation",
						"req": true,
						"short": "If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required.",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "group_id",
						"req": true,
						"short": "Identifier for the group associated with this enrolment intent.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the enrolment intent.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ineligibility_reason",
						"short": "If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "object",
						"short": "Object type identifier.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_confirmation",
						"short": "If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "policy_configuration",
						"short": "Policy configuration associated with this enrolment intent.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "policy_enrolments",
						"req": true,
						"short": "Policy enrolment information",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of the enrolment intent.",
						"type": "`$ANY`",
					},
				},
				"name": "enrolment_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "enrolment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/enrolment_intents/{enrolment_intent_id}/confirm",
								"parts": []any{
									"enrolment_intents",
									"{id}",
									"confirm",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"enrolment_intent_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "confirm",
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "enrolment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/enrolment_intents/{enrolment_intent_id}/coverage-selections",
								"parts": []any{
									"enrolment_intents",
									"{id}",
									"coverage-selections",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"enrolment_intent_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "coverage_selection",
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "enrolment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/enrolment_intents/{enrolment_intent_id}/reject",
								"parts": []any{
									"enrolment_intents",
									"{id}",
									"reject",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"enrolment_intent_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "reject",
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/enrolment_intents",
								"parts": []any{
									"enrolment_intents",
								},
								"select": map[string]any{
									"exist": []any{
										"idempotency_key",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enrolment_intents",
								"parts": []any{
									"enrolment_intents",
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"group_id",
										"page",
										"page_size",
										"status",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "enrolment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enrolment_intents/{enrolment_intent_id}",
								"parts": []any{
									"enrolment_intents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"enrolment_intent_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "enrolment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/enrolment_intents/{enrolment_intent_id}",
								"parts": []any{
									"enrolment_intents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"enrolment_intent_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"enrolment_intent_requirement_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the requirement",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_fulfilled",
						"req": true,
						"short": "Whether the requirement has been fulfilled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "object",
						"short": "Object type identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_id",
						"req": true,
						"short": "Identifier of the object (employee ID or employer ID)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_type",
						"req": true,
						"short": "Type of object this requirement is for (employee or employer)",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "requirement_type",
						"req": true,
						"short": "Type of requirement",
						"type": "`$ANY`",
					},
				},
				"name": "enrolment_intent_requirement_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "enrolment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "object_id",
											"orig": "object_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "object_type",
											"orig": "object_type",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/enrolment_intents/{enrolment_intent_id}/requirements",
								"parts": []any{
									"enrolment_intents",
									"{id}",
									"requirements",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"enrolment_intent_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "requirements",
									"exist": []any{
										"id",
										"object_id",
										"object_type",
										"page",
										"page_size",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"event": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "api_version",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "created",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "data",
						"req": true,
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "options",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "parent",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "platform_id",
						"req": true,
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "root",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "event",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "created_after",
											"orig": "created_after",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "version",
											"orig": "version",
											"type": "`$ANY`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/events",
								"parts": []any{
									"events",
								},
								"select": map[string]any{
									"exist": []any{
										"created_after",
										"order_direction",
										"page",
										"page_size",
										"version",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "event_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/events/{event_id}",
								"parts": []any{
									"events",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"event_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.data`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"group": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"short": "Short description of the purpose or scope of the `group`.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "employer_id",
						"req": true,
						"short": "Identifier for the `employer` that owns this `group`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "enrolment_type",
						"req": true,
						"short": "Indicates how employees are enrolled into the group.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "group_policy_ids",
						"req": true,
						"short": "Group policy unique identifiers associated with this group.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "group_policy_intent_ids",
						"req": true,
						"short": "Group policy intent unique identifiers associated with this group.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "group_quote_intent_ids",
						"req": true,
						"short": "Group quote intent unique identifiers associated with this group.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "group_type",
						"req": true,
						"short": "Indicates how policies are organized for this group.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the `group`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "Human-readable name of the `group`.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current lifecycle state of the `group`, indicating its current progress.",
						"type": "`$ANY`",
					},
				},
				"name": "group",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/groups",
								"parts": []any{
									"groups",
								},
								"select": map[string]any{
									"exist": []any{
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employer_id",
											"orig": "employer_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/groups",
								"parts": []any{
									"groups",
								},
								"select": map[string]any{
									"exist": []any{
										"employer_id",
										"page",
										"page_size",
										"status",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/groups/{group_id}",
								"parts": []any{
									"groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "PUT",
								"orig": "/groups/{group_id}",
								"parts": []any{
									"groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"group_employee": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "desired_policy_start_date",
						"short": "The desired date for the employee's policy to start.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "eligibility_status",
						"req": true,
						"short": "Eligibility status for the employee in this group.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "enrolment_date",
						"short": "The date on which the employee agreed to enrol into the group's policies.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "enrolment_status",
						"req": true,
						"short": "Enrolment status for the employee in this group.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "enrolments",
						"req": true,
						"short": "List of enrolments associated with the employee in this group.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "group_id",
						"req": true,
						"short": "Unique identifier for the group.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the employee.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "policies",
						"req": true,
						"short": "List of policies associated with the employee in this group.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "scheduled_group_transitions",
						"req": true,
						"short": "List of scheduled group transitions for the employee.",
						"type": "`$ARRAY`",
					},
				},
				"name": "group_employee",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/groups/{group_id}/employees",
								"parts": []any{
									"groups",
									"{id}",
									"employees",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"idempotency_key",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"group_employee_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "desired_policy_start_date",
						"short": "The desired date for the employee's policy to start.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "eligibility_status",
						"req": true,
						"short": "Eligibility status for the employee in this group.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "enrolment_date",
						"short": "The date on which the employee agreed to enrol into the group's policies.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "enrolment_status",
						"req": true,
						"short": "Enrolment status for the employee in this group.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "enrolments",
						"req": true,
						"short": "List of enrolments associated with the employee in this group.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "group_id",
						"req": true,
						"short": "Unique identifier for the group.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the employee.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "policies",
						"req": true,
						"short": "List of policies associated with the employee in this group.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "scheduled_group_transitions",
						"req": true,
						"short": "List of scheduled group transitions for the employee.",
						"type": "`$ARRAY`",
					},
				},
				"name": "group_employee_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/groups/{group_id}/employees",
								"parts": []any{
									"groups",
									"{id}",
									"employees",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "employees",
									"exist": []any{
										"employee_id",
										"id",
										"page",
										"page_size",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"group_policy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cancellation_date",
						"short": "Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "disclosures",
						"req": true,
						"short": "Disclosures associated with this group policy.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "employer_id",
						"short": "Identifier for the employer associated with this group policy.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "end_date",
						"short": "Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "group_id",
						"short": "Identifier for the group associated with this group policy.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "health_insurance",
						"short": "Health insurance–specific fields (present when `type=health_insurance`).",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the group policy.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "plan",
						"req": true,
						"short": "Plan information for this policy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "provider",
						"req": true,
						"short": "Provider information for this policy.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "start_date",
						"req": true,
						"short": "Policy start (effective) date in ISO 8601 (YYYY-MM-DD).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current lifecycle state of the `group_policy`, indicating its progress from creation to activation.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Policy type.",
						"type": "`$ANY`",
					},
				},
				"name": "group_policy",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employer_id",
											"orig": "employer_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/group_policies",
								"parts": []any{
									"group_policies",
								},
								"select": map[string]any{
									"exist": []any{
										"employer_id",
										"group_id",
										"page",
										"page_size",
										"status",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_policy_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/group_policies/{group_policy_id}",
								"parts": []any{
									"group_policies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_policy_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"group_policy_intent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action_required",
						"short": "Details of the required action when the intent is in ActionRequired status.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "cost_sharing",
						"short": "Cost sharing configuration for the policy intent",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "disclosures",
						"req": true,
						"short": "Disclosures associated with this intent.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "due_date",
						"short": "Due date for the policy intent",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "group_id",
						"req": true,
						"short": "Unique identifier for the group",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the group policy intent",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "Object type identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "plan_id",
						"req": true,
						"short": "Unique identifier for the plan",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "quote_intent_id",
						"req": true,
						"short": "Unique identifier for the group quote intent this policy intent was created from",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of the group policy intent",
						"type": "`$ANY`",
					},
				},
				"name": "group_policy_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/group_policy_intents",
								"parts": []any{
									"group_policy_intents",
								},
								"select": map[string]any{
									"exist": []any{
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "plan_id",
											"orig": "plan_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/group_policy_intents",
								"parts": []any{
									"group_policy_intents",
								},
								"select": map[string]any{
									"exist": []any{
										"group_id",
										"page",
										"page_size",
										"plan_id",
										"status",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_policy_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/group_policy_intents/{group_policy_intent_id}",
								"parts": []any{
									"group_policy_intents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_policy_intent_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"group_policy_intent_requirement_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the requirement",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_fulfilled",
						"req": true,
						"short": "Whether the requirement has been fulfilled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "object",
						"short": "Object type identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_id",
						"req": true,
						"short": "Identifier of the object (employee ID or employer ID)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_type",
						"req": true,
						"short": "Type of object this requirement is for (employee or employer)",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "requirement_type",
						"req": true,
						"short": "Type of requirement",
						"type": "`$ANY`",
					},
				},
				"name": "group_policy_intent_requirement_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_policy_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "object_id",
											"orig": "object_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "object_type",
											"orig": "object_type",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/group_policy_intents/{group_policy_intent_id}/requirements",
								"parts": []any{
									"group_policy_intents",
									"{id}",
									"requirements",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_policy_intent_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "requirements",
									"exist": []any{
										"id",
										"object_id",
										"object_type",
										"page",
										"page_size",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"group_quote": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "family_type",
						"short": "Type of the family covered by the employer.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "member_count",
						"short": "Numbers of additional members covered by the employer.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "member_selection",
						"short": "Whether specific member types are covered by the employer.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "percentage",
						"short": "Percentage of the premium the employer covers.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Cost sharing type.",
						"type": "`$ANY`",
					},
				},
				"name": "group_quote",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "group_quote_intent_id",
											"orig": "group_quote_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/group_quote_intents/{group_quote_intent_id}/quote",
								"parts": []any{
									"group_quote_intents",
									"{group_quote_intent_id}",
									"quote",
								},
								"select": map[string]any{
									"exist": []any{
										"group_quote_intent_id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.cost_sharing`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"group_quote_intent",
						},
					},
				},
			},
			"group_quote_intent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action_required",
						"short": "Details of the action required from the caller, if the intent is in action_required status.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "consent_links",
						"req": true,
						"short": "Consent links that need to be acknowledged",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "cost_sharing",
						"short": "Cost sharing configuration for the quote",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "disclosures",
						"req": true,
						"short": "Disclosures associated with this intent.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "expected_start_date",
						"short": "Expected start date for the insurance coverage",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "group_id",
						"req": true,
						"short": "Unique identifier for the group",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the group quote intent",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "Object type identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "plan_id",
						"req": true,
						"short": "Unique identifier for the plan",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of the group quote intent",
						"type": "`$ANY`",
					},
				},
				"name": "group_quote_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_quote_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/group_quote_intents/{group_quote_intent_id}/reject",
								"parts": []any{
									"group_quote_intents",
									"{id}",
									"reject",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_quote_intent_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "reject",
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/group_quote_intents",
								"parts": []any{
									"group_quote_intents",
								},
								"select": map[string]any{
									"exist": []any{
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "plan_id",
											"orig": "plan_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/group_quote_intents",
								"parts": []any{
									"group_quote_intents",
								},
								"select": map[string]any{
									"exist": []any{
										"group_id",
										"page",
										"page_size",
										"plan_id",
										"status",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_quote_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/group_quote_intents/{group_quote_intent_id}",
								"parts": []any{
									"group_quote_intents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_quote_intent_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"group_quote_intent_requirement_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the requirement",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "is_fulfilled",
						"req": true,
						"short": "Whether the requirement has been fulfilled",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "object",
						"short": "Object type identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_id",
						"req": true,
						"short": "Identifier of the object (employee ID or employer ID)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object_type",
						"req": true,
						"short": "Type of object this requirement is for (employee or employer)",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "requirement_type",
						"req": true,
						"short": "Type of requirement",
						"type": "`$ANY`",
					},
				},
				"name": "group_quote_intent_requirement_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_quote_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "object_id",
											"orig": "object_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "object_type",
											"orig": "object_type",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/group_quote_intents/{group_quote_intent_id}/requirements",
								"parts": []any{
									"group_quote_intents",
									"{id}",
									"requirements",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_quote_intent_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "requirements",
									"exist": []any{
										"id",
										"object_id",
										"object_type",
										"page",
										"page_size",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"plan": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "available_from",
						"req": true,
						"short": "The date from which this plan is available (inclusive).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "available_to",
						"short": "The date until which this plan is available (inclusive).",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "country",
						"req": true,
						"short": "The country this plan is available in.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "coverage_options",
						"short": "Coverage options available for this plan, organized by scope and input type.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$ARRAY`",
							},
						},
					},
					map[string]any{
						"name": "description",
						"req": true,
						"short": "Description of the plan.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "disclosures",
						"req": true,
						"short": "Disclosures associated with this plan.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "documents",
						"req": true,
						"short": "List of plan documents (e.g., IPIDs, T&Cs).",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "eligible_count",
						"short": "Number of employees in the queried group eligible for this plan as-of `start_date`.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$INTEGER`",
							},
						},
					},
					map[string]any{
						"name": "employee_eligibility_criteria",
						"req": true,
						"short": "Eligibility criteria that employees must meet.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "employer_eligibility_criteria",
						"req": true,
						"short": "Eligibility criteria that employers must meet.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "health_insurance",
						"short": "Health insurance-specific details.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the plan.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ineligible_count",
						"short": "Number of employees in the queried group ineligible for this plan as-of `start_date`.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$INTEGER`",
							},
						},
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the plan.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "Object type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider",
						"req": true,
						"short": "The provider offering this plan.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "total_count",
						"short": "Total employees in the queried group.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$INTEGER`",
							},
						},
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "The benefit type of the plan.",
						"type": "`$ANY`",
					},
				},
				"name": "plan",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "available_on",
											"orig": "available_on",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "country",
											"orig": "country",
											"type": "`$ANY`",
										},
										map[string]any{
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "provider_id",
											"orig": "provider_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "sort_dir",
											"orig": "sort_dir",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/plans",
								"parts": []any{
									"plans",
								},
								"select": map[string]any{
									"exist": []any{
										"available_on",
										"country",
										"group_id",
										"page",
										"page_size",
										"provider_id",
										"sort_by",
										"sort_dir",
										"start_date",
										"type",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "plan_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/plans/{plan_id}",
								"parts": []any{
									"plans",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"plan_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"group_id",
										"id",
										"start_date",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"policy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bundling_type",
						"req": true,
						"short": "Indicates how this policy is bundled within a group",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "cancellation_date",
						"short": "Date the policy was cancelled (if applicable)",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "disclosures",
						"req": true,
						"short": "Disclosures associated with this policy.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "employee_id",
						"req": true,
						"short": "Identifier of the employee associated with this policy.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "end_date",
						"short": "Policy end date (inclusive) in ISO 8601, or null if open-ended",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "group_id",
						"req": true,
						"short": "Identifier of the group associated with this policy.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_policy_id",
						"req": true,
						"short": "Identifier of the group policy id associated with this policy.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "health_insurance",
						"short": "Health insurance–specific fields (present when `type=health_insurance`)",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the policy.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "Object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "plan",
						"req": true,
						"short": "Plan information for this policy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "provider",
						"req": true,
						"short": "Provider information for this policy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "start_date",
						"req": true,
						"short": "Policy start (effective) date in ISO 8601 (YYYY-MM-DD)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current lifecycle state of the policy",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "type",
						"req": true,
						"short": "Policy type.",
						"type": "`$ANY`",
					},
				},
				"name": "policy",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_policy_id",
											"orig": "group_policy_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/policies",
								"parts": []any{
									"policies",
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"group_id",
										"group_policy_id",
										"page",
										"page_size",
										"status",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "policy_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/policies/{policy_id}",
								"parts": []any{
									"policies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"policy_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"policy_amendment_intent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "amendment_reason",
						"req": true,
						"short": "The reason for the policy amendment.",
						"type": "`$ANY`",
					},
					map[string]any{
						"name": "disclosures",
						"req": true,
						"short": "Disclosures associated with this intent.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the policy amendment intent.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "Object type identifier.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "pending_confirmation",
						"short": "Information about the pending confirmation if the intent status is `pending_confirmation`.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "policy_id",
						"req": true,
						"short": "The policy ID for which the amendment is requested.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "processing_error",
						"short": "Information about the processing error if the intent status is `processing_error`.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "requested_changes",
						"req": true,
						"short": "List of requested changes to the policy.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "required_action",
						"short": "Information about the required action if the intent status is `action_required`.",
						"type": "`$NULL`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of the policy amendment intent.",
						"type": "`$ANY`",
					},
				},
				"name": "policy_amendment_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "policy_id",
											"orig": "policy_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/policies/{policy_id}/policy_amendment_intents/{id}/cancel",
								"parts": []any{
									"policies",
									"{policy_id}",
									"policy_amendment_intents",
									"{id}",
									"cancel",
								},
								"select": map[string]any{
									"$action": "cancel",
									"exist": []any{
										"id",
										"policy_id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "policy_amendment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "policy_id",
											"orig": "policy_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}/confirm",
								"parts": []any{
									"policies",
									"{policy_id}",
									"policy_amendment_intents",
									"{id}",
									"confirm",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"policy_amendment_intent_id": "id",
									},
								},
								"select": map[string]any{
									"$action": "confirm",
									"exist": []any{
										"id",
										"policy_id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "policy_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/policies/{policy_id}/policy_amendment_intents",
								"parts": []any{
									"policies",
									"{id}",
									"policy_amendment_intents",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"policy_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "policy_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/policies/{policy_id}/policy_amendment_intents",
								"parts": []any{
									"policies",
									"{id}",
									"policy_amendment_intents",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"policy_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"page",
										"page_size",
										"status",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "policy_amendment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "policy_id",
											"orig": "policy_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}",
								"parts": []any{
									"policies",
									"{policy_id}",
									"policy_amendment_intents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"policy_amendment_intent_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"policy_id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"policy",
						},
					},
				},
			},
			"policy_import_intent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "associated_persons",
						"req": true,
						"short": "List of associated persons linked to this policy import.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "employee_id",
						"req": true,
						"short": "The employee ID for the policy import.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "group_id",
						"req": true,
						"short": "The group ID for the policy import.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the policy import intent.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "member_number",
						"req": true,
						"short": "The member number assigned by the provider.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "Object type identifier.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "policy_end_date",
						"short": "The end date of the policy.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "policy_start_date",
						"req": true,
						"short": "The start date of the policy.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "provider_policy_number",
						"req": true,
						"short": "The provider's policy number.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "status",
						"req": true,
						"short": "Current status of the policy import intent.",
						"type": "`$ANY`",
					},
				},
				"name": "policy_import_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/policy_import_intents",
								"parts": []any{
									"policy_import_intents",
								},
								"select": map[string]any{
									"exist": []any{
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/policy_import_intents",
								"parts": []any{
									"policy_import_intents",
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"group_id",
										"page",
										"page_size",
										"status",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "pii_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "policy_import_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/policy_import_intents/{policy_import_intent_id}",
								"parts": []any{
									"policy_import_intents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"policy_import_intent_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"provider": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "description",
						"req": true,
						"short": "Description of the provider.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "employer_platform_url",
						"short": "URL to the employer portal/platform for this provider, if available.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "Unique identifier for the provider.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "kota_hub_url",
						"short": "URL to the Kota Hub page for this platform, if configured.",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
					},
					map[string]any{
						"name": "logo_url",
						"req": true,
						"short": "URL to the provider's logo image.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"req": true,
						"short": "The name of the provider.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "Object type.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "support_phone",
						"req": true,
						"short": "Customer support phone number.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "supported_countries",
						"req": true,
						"short": "List of countries supported by this provider.",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "website_url",
						"req": true,
						"short": "The provider's main website URL.",
						"type": "`$STRING`",
					},
				},
				"name": "provider",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "country",
											"orig": "country",
											"type": "`$ANY`",
										},
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/providers",
								"parts": []any{
									"providers",
								},
								"select": map[string]any{
									"exist": []any{
										"country",
										"page",
										"page_size",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "provider_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/providers/{provider_id}",
								"parts": []any{
									"providers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"provider_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"replay": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "deliveries",
						"req": true,
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "event_id",
						"req": true,
						"type": "`$STRING`",
					},
				},
				"name": "replay",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "event_id",
											"orig": "event_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "POST",
								"orig": "/events/{event_id}/replay",
								"parts": []any{
									"events",
									"{event_id}",
									"replay",
								},
								"select": map[string]any{
									"exist": []any{
										"event_id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"event",
						},
					},
				},
			},
			"webhook_endpoint": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The date and time the endpoint was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "endpoint_url",
						"req": true,
						"short": "The registered URL of the endpoint",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier of the endpoint",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscribed_events",
						"req": true,
						"short": "The events the endpoint is subscribed to",
						"type": "`$ARRAY`",
					},
				},
				"name": "webhook_endpoint",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"example": "whe_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "webhook_endpoint_id",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks/endpoints/{webhook_endpoint_id}",
								"parts": []any{
									"webhooks",
									"endpoints",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"webhook_endpoint_id": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhook_endpoint_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"req": true,
						"short": "The date and time the endpoint was created",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "endpoint_url",
						"req": true,
						"short": "The registered URL of the endpoint",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"req": true,
						"short": "The unique identifier of the endpoint",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "object",
						"short": "The object type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subscribed_events",
						"req": true,
						"short": "The events the endpoint is subscribed to",
						"type": "`$ARRAY`",
					},
				},
				"name": "webhook_endpoint_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks/endpoints",
								"parts": []any{
									"webhooks",
									"endpoints",
								},
								"select": map[string]any{
									"exist": []any{
										"page",
										"page_size",
										"x_platform_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
