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
			"version": "0.1.1",
			"target": "go",
		},
		"feature": map[string]any{
			"debug": map[string]any{
				"options": map[string]any{
					"active": false,
					"max": 100,
					"redact": []any{
						"authorization",
						"cookie",
						"set-cookie",
						"api-key",
						"apikey",
						"x-api-key",
						"idempotency-key",
					},
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"onEntry": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"idempotency": map[string]any{
				"options": map[string]any{
					"active": false,
					"header": "Idempotency-Key",
					"methods": []any{
						"POST",
						"PUT",
						"PATCH",
						"DELETE",
					},
					"ops": []any{
						"create",
						"update",
						"remove",
					},
				},
				"optspec": map[string]any{
					"keygen": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"metrics": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "none",
			},
			"paging": map[string]any{
				"options": map[string]any{
					"active": false,
					"afterVar": "after",
					"cursorParam": "cursor",
					"firstVar": "first",
					"limitParam": "limit",
					"pageParam": "page",
					"startPage": 1,
				},
				"optspec": map[string]any{
					"limit": "`$NUMBER`",
					"ops": "`$LIST`",
				},
				"strict": false,
				"transport": "none",
			},
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"now": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
				"webhook_endpoint": map[string]any{},
			},
		},
		"entity": map[string]any{
			"associated_person": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "date_of_birth",
						"title": "Date Of Birth",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$NULL`",
										"`$STRING`",
									},
								},
							},
						},
						"short": "Date of birth of the associated person",
						"format": "date",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Email address of the associated person",
					},
					map[string]any{
						"name": "employee_id",
						"title": "Employee Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the employee this person is associated with",
					},
					map[string]any{
						"name": "first_name",
						"title": "First Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$NULL`",
										"`$STRING`",
									},
								},
							},
						},
						"short": "First name of the associated person",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the associated person",
					},
					map[string]any{
						"name": "last_name",
						"title": "Last Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$NULL`",
										"`$STRING`",
									},
								},
							},
						},
						"short": "Last name of the associated person",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "phone_number",
						"title": "Phone Number",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Phone number in E.164 international format (e.g.",
					},
					map[string]any{
						"name": "platform_id",
						"title": "Platform Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the platform",
					},
					map[string]any{
						"name": "relationship_type",
						"title": "Relationship Type",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$NULL`",
							},
						},
						"short": "The relationship type between the employee and the associated person",
					},
					map[string]any{
						"name": "sex_at_birth",
						"title": "Sex At Birth",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$NULL`",
							},
						},
						"short": "The sex assigned to the associated person at birth",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "associated_person",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/employees/{employee_id}/associated_persons",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
									map[string]any{
										"var": "employee_id",
									},
									map[string]any{
										"lit": "associated_persons",
									},
								},
								"parts": []any{
									"employees",
									"{employee_id}",
									"associated_persons",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/employees/{employee_id}/associated_persons",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
									map[string]any{
										"var": "employee_id",
									},
									map[string]any{
										"lit": "associated_persons",
									},
								},
								"parts": []any{
									"employees",
									"{employee_id}",
									"associated_persons",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/employees/{employee_id}/associated_persons/{associated_person_id}",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
									map[string]any{
										"var": "employee_id",
									},
									map[string]any{
										"lit": "associated_persons",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "id",
											"orig": "associated_person_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/employees/{employee_id}/associated_persons/{associated_person_id}",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
									map[string]any{
										"var": "employee_id",
									},
									map[string]any{
										"lit": "associated_persons",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "id",
											"orig": "associated_person_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/employees/{employee_id}/associated_persons/{associated_person_id}",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
									map[string]any{
										"var": "employee_id",
									},
									map[string]any{
										"lit": "associated_persons",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "id",
											"orig": "associated_person_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.employee",
						},
					},
				},
			},
			"associated_person_eligibility_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "associated_person_id",
						"title": "Associated Person Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The associated person ID.",
					},
					map[string]any{
						"name": "date_of_birth",
						"title": "Date Of Birth",
						"type": "`$STRING`",
						"req": true,
						"short": "Date of birth of the associated person.",
						"format": "date",
					},
					map[string]any{
						"name": "eligibility_status",
						"title": "Eligibility Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Eligibility status for the policy/plan.",
					},
					map[string]any{
						"name": "first_name",
						"title": "First Name",
						"type": "`$STRING`",
						"req": true,
						"short": "First name of the associated person.",
					},
					map[string]any{
						"name": "ineligibility_reason",
						"title": "Ineligibility Reason",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Reason for ineligibility if status is ineligible.",
					},
					map[string]any{
						"name": "last_name",
						"title": "Last Name",
						"type": "`$STRING`",
						"req": true,
						"short": "Last name of the associated person.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "relationship",
						"title": "Relationship",
						"type": "`$STRING`",
						"req": true,
						"short": "Relationship type to the employee.",
					},
					map[string]any{
						"name": "sex_at_birth",
						"title": "Sex At Birth",
						"type": "`$STRING`",
						"req": true,
						"short": "Sex at birth of the associated person.",
					},
				},
				"name": "associated_person_eligibility_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility",
								"segments": []any{
									map[string]any{
										"lit": "dependents_management_intents",
									},
									map[string]any{
										"var": "dependents_management_intent_id",
									},
									map[string]any{
										"lit": "associated_persons_eligibility",
									},
								},
								"parts": []any{
									"dependents_management_intents",
									"{dependents_management_intent_id}",
									"associated_persons_eligibility",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "dependents_management_intent_id",
											"orig": "dependents_management_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dependents_management_intent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.dependents_management_intent",
						},
					},
				},
			},
			"contribution_report": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Date and time the report was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "employer_id",
						"title": "Employer Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the employer for which the report is created",
					},
					map[string]any{
						"name": "external_customer_id",
						"title": "External Customer Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Unique identifier of the customer for which the report is created.",
					},
					map[string]any{
						"name": "finalized_at",
						"title": "Finalized At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Date and time the report was finalized, if applicable",
						"format": "date-time",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the contribution report",
					},
					map[string]any{
						"name": "last_updated_at",
						"title": "Last Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "Date and time of the last update to the report",
						"format": "date-time",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "period",
						"title": "Period",
						"type": "`$ANY`",
						"req": true,
						"short": "Period covered by the contribution report",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of the contribution report",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "contribution_report",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/contribution_reports/{contribution_report_id}/finalize",
								"segments": []any{
									map[string]any{
										"lit": "contribution_reports",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "finalize",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "contribution_report_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"$action": "finalize",
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/contribution_reports",
								"segments": []any{
									map[string]any{
										"lit": "contribution_reports",
									},
								},
								"parts": []any{
									"contribution_reports",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "employer_id",
											"orig": "employer_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "external_customer_id",
											"orig": "external_customer_id",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "month",
											"orig": "month",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "year",
											"orig": "year",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/contribution_reports/{contribution_report_id}",
								"segments": []any{
									map[string]any{
										"lit": "contribution_reports",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"contribution_reports",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"contribution_report_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "contribution_report_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Contribution Report Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the related contribution report",
					},
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "Date and time the breakdown was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "currency",
						"title": "Currency",
						"type": "`$STRING`",
						"req": true,
						"short": "The currency in which all the amounts in this breakdown are presented (e.g.",
					},
					map[string]any{
						"name": "employee_id",
						"title": "Employee Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the employee for which the breakdown is created",
					},
					map[string]any{
						"name": "employer_id",
						"title": "Employer Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier of the employer for which the breakdown is created",
					},
					map[string]any{
						"name": "external_customer_id",
						"title": "External Customer Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Unique identifier of the customer for which the breakdown is created.",
					},
					map[string]any{
						"name": "finalized_at",
						"title": "Finalized At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Date and time the breakdown was finalized, if applicable",
						"format": "date-time",
					},
					map[string]any{
						"name": "health_insurance",
						"title": "Health Insurance",
						"type": "`$ANY`",
						"req": true,
						"short": "Health insurance contribution details",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "last_updated_at",
						"title": "Last Updated At",
						"type": "`$STRING`",
						"req": true,
						"short": "Date and time of the last update to the breakdown",
						"format": "date-time",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "period",
						"title": "Period",
						"type": "`$ANY`",
						"req": true,
						"short": "Period covered by the employee breakdown",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of the breakdown",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "contribution_report_employee_breakdown",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}",
								"segments": []any{
									map[string]any{
										"lit": "contribution_reports",
									},
									map[string]any{
										"var": "contribution_report_id",
									},
									map[string]any{
										"lit": "employee_breakdowns",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "contribution_report_id",
											"orig": "contribution_report_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"contribution_report_id",
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.contribution_report",
						},
					},
				},
			},
			"contribution_report_employee_breakdown_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "contribution_report_employee_breakdown_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/contribution_reports/{contribution_report_id}/employee_breakdowns",
								"segments": []any{
									map[string]any{
										"lit": "contribution_reports",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "employee_breakdowns",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "contribution_report_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "employee_breakdowns",
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"name": "employee_id",
						"title": "Employee Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "employer_id",
						"title": "Employer Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "expiry",
						"title": "Expiry",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "link",
						"title": "Link",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "create_hosted_session_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/hosted/sessions",
								"segments": []any{
									map[string]any{
										"lit": "hosted",
									},
									map[string]any{
										"lit": "sessions",
									},
								},
								"parts": []any{
									"hosted",
									"sessions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"name": "employee_id",
						"title": "Employee Id",
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
						"title": "Employer Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "expiry",
						"title": "Expiry",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "external_customer_id",
						"title": "External Customer Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
					},
					map[string]any{
						"name": "token",
						"title": "Token",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"name": "create_session_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/embed/sessions",
								"segments": []any{
									map[string]any{
										"lit": "embed",
									},
									map[string]any{
										"lit": "sessions",
									},
								},
								"parts": []any{
									"embed",
									"sessions",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Action Required",
						"type": "`$NULL`",
						"short": "Details of the action required from the caller.",
					},
					map[string]any{
						"name": "associated_person_ids",
						"title": "Associated Person Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of associated person IDs to add as dependents.",
					},
					map[string]any{
						"name": "coverage_options",
						"title": "Coverage Options",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$ARRAY`",
							},
						},
						"short": "Available member-scoped coverage options for the plan.",
					},
					map[string]any{
						"name": "dependent_coverage_selections",
						"title": "Dependent Coverage Selections",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$ARRAY`",
							},
						},
						"short": "Optional coverage selections per dependent.",
					},
					map[string]any{
						"name": "dependents",
						"title": "Dependents",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of dependents being managed.",
					},
					map[string]any{
						"name": "disclosures",
						"title": "Disclosures",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Disclosures associated with this intent.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the dependents management intent.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "Object type identifier.",
						"readOnly": true,
					},
					map[string]any{
						"name": "parent_intent_id",
						"title": "Parent Intent Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The parent intent ID (e.g.",
					},
					map[string]any{
						"name": "parent_intent_type",
						"title": "Parent Intent Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of parent intent.",
					},
					map[string]any{
						"name": "plan",
						"title": "Plan",
						"type": "`$ANY`",
						"req": true,
						"short": "Plan information including pricing details.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of the dependents management intent.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dependent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/dependents_management_intents/{dependents_management_intent_id}/dependents",
								"segments": []any{
									map[string]any{
										"lit": "dependents_management_intents",
									},
									map[string]any{
										"var": "dependents_management_intent_id",
									},
									map[string]any{
										"lit": "dependents",
									},
								},
								"parts": []any{
									"dependents_management_intents",
									"{dependents_management_intent_id}",
									"dependents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "Idempotency-Key",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "dependents_management_intent_id",
											"orig": "dependents_management_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dependents_management_intent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "DELETE",
								"orig": "/dependents_management_intents/{dependents_management_intent_id}/dependents/{associated_person_id}",
								"segments": []any{
									map[string]any{
										"lit": "dependents_management_intents",
									},
									map[string]any{
										"var": "dependents_management_intent_id",
									},
									map[string]any{
										"lit": "dependents",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "dependents_management_intent_id",
											"orig": "dependents_management_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "id",
											"orig": "associated_person_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"dependents_management_intent_id",
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.dependents_management_intent",
						},
					},
				},
			},
			"dependents_management_intent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action_required",
						"title": "Action Required",
						"type": "`$NULL`",
						"short": "Details of the action required from the caller.",
					},
					map[string]any{
						"name": "coverage_options",
						"title": "Coverage Options",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$ARRAY`",
							},
						},
						"short": "Available member-scoped coverage options for the plan.",
					},
					map[string]any{
						"name": "dependents",
						"title": "Dependents",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of dependents being managed.",
					},
					map[string]any{
						"name": "disclosures",
						"title": "Disclosures",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Disclosures associated with this intent.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the dependents management intent.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "Object type identifier.",
						"readOnly": true,
					},
					map[string]any{
						"name": "parent_intent_id",
						"title": "Parent Intent Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The parent intent ID (e.g.",
					},
					map[string]any{
						"name": "parent_intent_type",
						"title": "Parent Intent Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The type of parent intent.",
					},
					map[string]any{
						"name": "plan",
						"title": "Plan",
						"type": "`$ANY`",
						"req": true,
						"short": "Plan information including pricing details.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of the dependents management intent.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "dependents_management_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent",
								"segments": []any{
									map[string]any{
										"lit": "policies",
									},
									map[string]any{
										"var": "policy_id",
									},
									map[string]any{
										"lit": "policy_amendment_intents",
									},
									map[string]any{
										"var": "policy_amendment_intent_id",
									},
									map[string]any{
										"lit": "create_dependents_management_intent",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "policy_amendment_intent_id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"policy_amendment_intent_id",
										"policy_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/enrolment_intents/{enrolment_intent_id}/create_dependents_management_intent",
								"segments": []any{
									map[string]any{
										"lit": "enrolment_intents",
									},
									map[string]any{
										"var": "enrolment_intent_id",
									},
									map[string]any{
										"lit": "create_dependents_management_intent",
									},
								},
								"parts": []any{
									"enrolment_intents",
									"{enrolment_intent_id}",
									"create_dependents_management_intent",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "enrolment_intent_id",
											"orig": "enrolment_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"enrolment_intent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/dependents_management_intents/{dependents_management_intent_id}/cancel",
								"segments": []any{
									map[string]any{
										"lit": "dependents_management_intents",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "cancel",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "dependents_management_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"$action": "cancel",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/dependents_management_intents/{dependents_management_intent_id}/confirm",
								"segments": []any{
									map[string]any{
										"lit": "dependents_management_intents",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "confirm",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "dependents_management_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"$action": "confirm",
									"exist": []any{
										"id",
									},
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/dependents_management_intents/{dependents_management_intent_id}",
								"segments": []any{
									map[string]any{
										"lit": "dependents_management_intents",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"dependents_management_intents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"dependents_management_intent_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "dependents_management_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.enrolment_intent",
						},
						[]any{
							"$.main.kit.entity.policy",
							"$.main.kit.entity.policy_amendment_intent",
						},
					},
				},
			},
			"eligibility_check": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "eligibility_status",
						"title": "Eligibility Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Eligibility status: `eligible` or `ineligible`.",
					},
					map[string]any{
						"name": "employee_id",
						"title": "Employee Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The employee to check eligibility for.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type.",
						"readOnly": true,
					},
					map[string]any{
						"name": "plan",
						"title": "Plan",
						"type": "`$ANY`",
						"req": true,
						"short": "The insurance plan associated with the group.",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$ANY`",
						"req": true,
						"short": "The insurance provider associated with the group.",
					},
					map[string]any{
						"name": "reasons",
						"title": "Reasons",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of reasons why the employee is ineligible.",
					},
				},
				"name": "eligibility_check",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/groups/{group_id}/eligibility_check",
								"segments": []any{
									map[string]any{
										"lit": "groups",
									},
									map[string]any{
										"var": "group_id",
									},
									map[string]any{
										"lit": "eligibility_check",
									},
								},
								"parts": []any{
									"groups",
									"{group_id}",
									"eligibility_check",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"group_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.group",
						},
					},
				},
			},
			"employee": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "bank_account",
						"title": "Bank Account",
						"type": "`$NULL`",
						"short": "Bank account details",
					},
					map[string]any{
						"name": "date_of_birth",
						"title": "Date Of Birth",
						"type": "`$STRING`",
						"req": true,
						"short": "Date of birth of the employee",
						"format": "date",
					},
					map[string]any{
						"name": "earliest_benefits_start_date",
						"title": "Earliest Benefits Start Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "The earliest date this employee can be enrolled in any benefits.",
						"format": "date",
					},
					map[string]any{
						"name": "email",
						"title": "Email",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$NULL`",
										"`$STRING`",
									},
								},
							},
						},
						"short": "Email address of the employee",
					},
					map[string]any{
						"name": "employer_id",
						"title": "Employer Id",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Unique identifier for the employer",
					},
					map[string]any{
						"name": "external_customer_id",
						"title": "External Customer Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
					},
					map[string]any{
						"name": "first_name",
						"title": "First Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$NULL`",
										"`$STRING`",
									},
								},
							},
						},
						"short": "First name of the employee.",
					},
					map[string]any{
						"name": "home_address",
						"title": "Home Address",
						"type": "`$NULL`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$ANY`",
							},
						},
						"short": "Location where the employee is legally registered to live",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the employee",
					},
					map[string]any{
						"name": "last_name",
						"title": "Last Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$NULL`",
										"`$STRING`",
									},
								},
							},
						},
						"short": "Last name of the employee",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$OBJECT`",
							},
						},
						"short": "Set of key-value pairs that you can attach to an object.",
					},
					map[string]any{
						"name": "national_tax_id",
						"title": "National Tax Id",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$NULL`",
										"`$STRING`",
									},
								},
							},
						},
						"short": "PPSN in Ireland, NINo in the UK, DNI/NIE in Spain",
					},
					map[string]any{
						"name": "nationality",
						"title": "Nationality",
						"type": "`$NULL`",
						"short": "Nationality of the employee (e.g.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "offboard_on",
						"title": "Offboard On",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Date when the employee was or will be offboarded",
						"format": "date-time",
					},
					map[string]any{
						"name": "phone_number",
						"title": "Phone Number",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$NULL`",
										"`$STRING`",
									},
								},
							},
						},
						"short": "Phone number in E.164 international format (e.g.",
					},
					map[string]any{
						"name": "platform_id",
						"title": "Platform Id",
						"type": "`$STRING`",
						"short": "Unique identifier for the platform",
					},
					map[string]any{
						"name": "sex_at_birth",
						"title": "Sex At Birth",
						"type": "`$STRING`",
						"req": true,
						"short": "The sex assigned to the employee at birth",
					},
					map[string]any{
						"name": "start_on",
						"title": "Start On",
						"type": "`$STRING`",
						"op": map[string]any{
							"create": map[string]any{
								"req": true,
								"type": "`$STRING`",
							},
						},
						"short": "Employment start date",
						"format": "date",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"short": "Current status of the employee",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "employee",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/employees/{employee_id}/offboard",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "offboard",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "Idempotency-Key",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"$action": "offboard",
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/employees/{employee_id}/offboard/cancel",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "offboard",
									},
									map[string]any{
										"lit": "cancel",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "Idempotency-Key",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"$action": "offboard_cancel",
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/employees",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
								},
								"parts": []any{
									"employees",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "Idempotency-Key",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/employees",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
								},
								"parts": []any{
									"employees",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "employer_id",
											"orig": "employer_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "external_customer_id",
											"orig": "external_customer_id",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "metadata_id",
											"orig": "metadata_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/employees/{employee_id}",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"employees",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employee_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/employees/{employee_id}",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"employees",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employee_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Coverage Level",
						"type": "`$ANY`",
						"req": true,
						"short": "Details about the coverage level for the offer.",
					},
					map[string]any{
						"name": "employee_id",
						"title": "Employee Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Id of the employee for which the offer is available",
					},
					map[string]any{
						"name": "employer_id",
						"title": "Employer Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Id of the employer for which the offer is available",
					},
					map[string]any{
						"name": "external_customer_id",
						"title": "External Customer Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for offer",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "required_action",
						"title": "Required Action",
						"type": "`$NULL`",
						"short": "Required action to progress the offer, if any.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of offer",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "employee_health_insurance_offer",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/employees/{employee_id}/health_insurance/offers/{employee_offer_id}",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
									map[string]any{
										"var": "employee_id",
									},
									map[string]any{
										"lit": "health_insurance",
									},
									map[string]any{
										"lit": "offers",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "id",
											"orig": "employee_offer_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "eeho_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.employee",
						},
					},
				},
			},
			"employee_health_insurance_offer_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coverage_level",
						"title": "Coverage Level",
						"type": "`$ANY`",
						"req": true,
						"short": "Details about the coverage level for the offer.",
					},
					map[string]any{
						"name": "employee_id",
						"title": "Employee Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Id of the employee for which the offer is available",
					},
					map[string]any{
						"name": "employer_id",
						"title": "Employer Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Id of the employer for which the offer is available",
					},
					map[string]any{
						"name": "external_customer_id",
						"title": "External Customer Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for offer",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "required_action",
						"title": "Required Action",
						"type": "`$NULL`",
						"short": "Required action to progress the offer, if any.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of offer",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "employee_health_insurance_offer_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/employees/{employee_id}/health_insurance/offers",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
									map[string]any{
										"var": "employee_id",
									},
									map[string]any{
										"lit": "health_insurance",
									},
									map[string]any{
										"lit": "offers",
									},
								},
								"parts": []any{
									"employees",
									"{employee_id}",
									"health_insurance",
									"offers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.employee",
						},
					},
				},
			},
			"employee_health_insurance_policy": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cancellation_date",
						"title": "Cancellation Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Policy was cancelled on this date, if cancellation occured",
						"format": "date",
					},
					map[string]any{
						"name": "coverage_level",
						"title": "Coverage Level",
						"type": "`$ANY`",
						"req": true,
						"short": "Represents the current coverage level for the policy",
					},
					map[string]any{
						"name": "employee_id",
						"title": "Employee Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Id of the employee for which the policy is created",
					},
					map[string]any{
						"name": "employer_id",
						"title": "Employer Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Id of the employer for which the policy is created",
					},
					map[string]any{
						"name": "end_date",
						"title": "End Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Policy ends on this date",
						"format": "date",
					},
					map[string]any{
						"name": "enrolled_dependants_count",
						"title": "Enrolled Dependants Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy.",
						"format": "int32",
					},
					map[string]any{
						"name": "enrolment_type",
						"title": "Enrolment Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Enrolment type of the policy",
					},
					map[string]any{
						"name": "estimated_gross_premium",
						"title": "Estimated Gross Premium",
						"type": "`$ANY`",
						"req": true,
						"short": "Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration.",
					},
					map[string]any{
						"name": "external_customer_id",
						"title": "External Customer Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for policy",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "opt_out_deadline_date",
						"title": "Opt Out Deadline Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Last day to opt out from the policy",
						"format": "date",
					},
					map[string]any{
						"name": "policy_number",
						"title": "Policy Number",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Health insurance policy number, if available",
					},
					map[string]any{
						"name": "renewal",
						"title": "Renewal",
						"type": "`$ANY`",
						"req": true,
						"short": "Renewal information for the policy",
					},
					map[string]any{
						"name": "start_date",
						"title": "Start Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Policy starts on this date",
						"format": "date",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of policy",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "employee_health_insurance_policy",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/employees/{employee_id}/health_insurance/policies/{employee_policy_id}",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
									map[string]any{
										"var": "employee_id",
									},
									map[string]any{
										"lit": "health_insurance",
									},
									map[string]any{
										"lit": "policies",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "id",
											"orig": "employee_policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.employee",
						},
					},
				},
			},
			"employee_health_insurance_policy_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cancellation_date",
						"title": "Cancellation Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Policy was cancelled on this date, if cancellation occured",
						"format": "date",
					},
					map[string]any{
						"name": "coverage_level",
						"title": "Coverage Level",
						"type": "`$ANY`",
						"req": true,
						"short": "Represents the current coverage level for the policy",
					},
					map[string]any{
						"name": "employee_id",
						"title": "Employee Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Id of the employee for which the policy is created",
					},
					map[string]any{
						"name": "employer_id",
						"title": "Employer Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Id of the employer for which the policy is created",
					},
					map[string]any{
						"name": "end_date",
						"title": "End Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Policy ends on this date",
						"format": "date",
					},
					map[string]any{
						"name": "enrolled_dependants_count",
						"title": "Enrolled Dependants Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy.",
						"format": "int32",
					},
					map[string]any{
						"name": "enrolment_type",
						"title": "Enrolment Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Enrolment type of the policy",
					},
					map[string]any{
						"name": "estimated_gross_premium",
						"title": "Estimated Gross Premium",
						"type": "`$ANY`",
						"req": true,
						"short": "Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration.",
					},
					map[string]any{
						"name": "external_customer_id",
						"title": "External Customer Id",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for policy",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "opt_out_deadline_date",
						"title": "Opt Out Deadline Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Last day to opt out from the policy",
						"format": "date",
					},
					map[string]any{
						"name": "policy_number",
						"title": "Policy Number",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Health insurance policy number, if available",
					},
					map[string]any{
						"name": "renewal",
						"title": "Renewal",
						"type": "`$ANY`",
						"req": true,
						"short": "Renewal information for the policy",
					},
					map[string]any{
						"name": "start_date",
						"title": "Start Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Policy starts on this date",
						"format": "date",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of policy",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "employee_health_insurance_policy_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/employees/{employee_id}/health_insurance/policies",
								"segments": []any{
									map[string]any{
										"lit": "employees",
									},
									map[string]any{
										"var": "employee_id",
									},
									map[string]any{
										"lit": "health_insurance",
									},
									map[string]any{
										"lit": "policies",
									},
								},
								"parts": []any{
									"employees",
									"{employee_id}",
									"health_insurance",
									"policies",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employee_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.employee",
						},
					},
				},
			},
			"employer": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "contact",
						"title": "Contact",
						"type": "`$ANY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$NULL`",
							},
						},
					},
					map[string]any{
						"name": "earliest_benefits_start_date",
						"title": "Earliest Benefits Start Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "The earliest date this employer is permitted to set up any benefits scheme.",
						"format": "date",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "legal_address",
						"title": "Legal Address",
						"type": "`$ANY`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": "`$NULL`",
							},
						},
						"short": "Treated as a single object that is updated entirely, `null` sub-fields (e.g.",
					},
					map[string]any{
						"name": "legal_name",
						"title": "Legal Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$NULL`",
										"`$STRING`",
									},
								},
							},
						},
						"short": "Legal name of the company.",
					},
					map[string]any{
						"name": "metadata",
						"title": "Metadata",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$OBJECT`",
							},
						},
						"short": "Set of key-value pairs that you can attach to an object.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "offboard_on",
						"title": "Offboard On",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"format": "date-time",
					},
					map[string]any{
						"name": "platform_id",
						"title": "Platform Id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "registration_number",
						"title": "Registration Number",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Company registration number.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "employer",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/employers/{employer_id}/offboard",
								"segments": []any{
									map[string]any{
										"lit": "employers",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "offboard",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "Idempotency-Key",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "employer_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"$action": "offboard",
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/employers",
								"segments": []any{
									map[string]any{
										"lit": "employers",
									},
								},
								"parts": []any{
									"employers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "Idempotency-Key",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/employers",
								"segments": []any{
									map[string]any{
										"lit": "employers",
									},
								},
								"parts": []any{
									"employers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "filter",
											"orig": "filter",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/employers/{employer_id}",
								"segments": []any{
									map[string]any{
										"lit": "employers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"employers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employer_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "employer_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/employers/{employer_id}",
								"segments": []any{
									map[string]any{
										"lit": "employers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"employers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"employer_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "employer_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Cancellation Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Policy was cancelled on this date, if cancellation occured",
						"format": "date",
					},
					map[string]any{
						"name": "coverage_levels",
						"title": "Coverage Levels",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Represents the available coverage levels for this policy",
					},
					map[string]any{
						"name": "employer_cancellation_period_length",
						"title": "Employer Cancellation Period Length",
						"type": "`$INTEGER`",
						"req": true,
						"short": "How many days the employer has to cancel the policy since the policy starts",
						"format": "int32",
					},
					map[string]any{
						"name": "employer_id",
						"title": "Employer Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Id of the employer for which the policy is created",
					},
					map[string]any{
						"name": "end_date",
						"title": "End Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Policy ends on this date",
						"format": "date",
					},
					map[string]any{
						"name": "enrolment_type",
						"title": "Enrolment Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Enrolment type of the policy",
					},
					map[string]any{
						"name": "group_policy_number",
						"title": "Group Policy Number",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Group’s health insurance policy number, if available",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for policy",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "renewal",
						"title": "Renewal",
						"type": "`$ANY`",
						"req": true,
						"short": "Renewal information for the policy",
					},
					map[string]any{
						"name": "start_date",
						"title": "Start Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Policy starts on this date",
						"format": "date",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of policy",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "employer_health_insurance_policy",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/employers/{employer_id}/health_insurance/policies/{employer_policy_id}",
								"segments": []any{
									map[string]any{
										"lit": "employers",
									},
									map[string]any{
										"var": "employer_id",
									},
									map[string]any{
										"lit": "health_insurance",
									},
									map[string]any{
										"lit": "policies",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "employer_id",
											"orig": "employer_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "id",
											"orig": "employer_policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "erhp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employer_id",
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.employer",
						},
					},
				},
			},
			"employer_health_insurance_policy_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "cancellation_date",
						"title": "Cancellation Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Policy was cancelled on this date, if cancellation occured",
						"format": "date",
					},
					map[string]any{
						"name": "coverage_levels",
						"title": "Coverage Levels",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Represents the available coverage levels for this policy",
					},
					map[string]any{
						"name": "employer_cancellation_period_length",
						"title": "Employer Cancellation Period Length",
						"type": "`$INTEGER`",
						"req": true,
						"short": "How many days the employer has to cancel the policy since the policy starts",
						"format": "int32",
					},
					map[string]any{
						"name": "employer_id",
						"title": "Employer Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Id of the employer for which the policy is created",
					},
					map[string]any{
						"name": "end_date",
						"title": "End Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Policy ends on this date",
						"format": "date",
					},
					map[string]any{
						"name": "enrolment_type",
						"title": "Enrolment Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Enrolment type of the policy",
					},
					map[string]any{
						"name": "group_policy_number",
						"title": "Group Policy Number",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Group’s health insurance policy number, if available",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for policy",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "renewal",
						"title": "Renewal",
						"type": "`$ANY`",
						"req": true,
						"short": "Renewal information for the policy",
					},
					map[string]any{
						"name": "start_date",
						"title": "Start Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Policy starts on this date",
						"format": "date",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of policy",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "employer_health_insurance_policy_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/employers/{employer_id}/health_insurance/policies",
								"segments": []any{
									map[string]any{
										"lit": "employers",
									},
									map[string]any{
										"var": "employer_id",
									},
									map[string]any{
										"lit": "health_insurance",
									},
									map[string]any{
										"lit": "policies",
									},
								},
								"parts": []any{
									"employers",
									"{employer_id}",
									"health_insurance",
									"policies",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "employer_id",
											"orig": "employer_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employer_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.employer",
						},
					},
				},
			},
			"employer_health_insurance_quote": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coverage_levels",
						"title": "Coverage Levels",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of levels covered under the policy, each item representing details about the plan’s cover.",
					},
					map[string]any{
						"name": "employer_id",
						"title": "Employer Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Id of the employer for which the is created",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the quote",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "quoted_at",
						"title": "Quoted At",
						"type": "`$STRING`",
						"req": true,
						"short": "Date and time the quote was created at",
						"format": "date-time",
					},
					map[string]any{
						"name": "required_action",
						"title": "Required Action",
						"type": "`$NULL`",
						"short": "Actions required by the employer to proceed with the quote.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of the quote",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "employer_health_insurance_quote",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/employers/{employer_id}/health_insurance/quotes/{employer_quote_id}",
								"segments": []any{
									map[string]any{
										"lit": "employers",
									},
									map[string]any{
										"var": "employer_id",
									},
									map[string]any{
										"lit": "health_insurance",
									},
									map[string]any{
										"lit": "quotes",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "employer_id",
											"orig": "employer_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "id",
											"orig": "employer_quote_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "erhq_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employer_id",
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.employer",
						},
					},
				},
			},
			"employer_health_insurance_quote_response_paged_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coverage_levels",
						"title": "Coverage Levels",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of levels covered under the policy, each item representing details about the plan’s cover.",
					},
					map[string]any{
						"name": "employer_id",
						"title": "Employer Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The Id of the employer for which the is created",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the quote",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "quoted_at",
						"title": "Quoted At",
						"type": "`$STRING`",
						"req": true,
						"short": "Date and time the quote was created at",
						"format": "date-time",
					},
					map[string]any{
						"name": "required_action",
						"title": "Required Action",
						"type": "`$NULL`",
						"short": "Actions required by the employer to proceed with the quote.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of the quote",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "employer_health_insurance_quote_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/employers/{employer_id}/health_insurance/quotes",
								"segments": []any{
									map[string]any{
										"lit": "employers",
									},
									map[string]any{
										"var": "employer_id",
									},
									map[string]any{
										"lit": "health_insurance",
									},
									map[string]any{
										"lit": "quotes",
									},
								},
								"parts": []any{
									"employers",
									"{employer_id}",
									"health_insurance",
									"quotes",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "employer_id",
											"orig": "employer_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"employer_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.employer",
						},
					},
				},
			},
			"enrolment_intent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action_required",
						"title": "Action Required",
						"type": "`$NULL`",
						"short": "If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment.",
					},
					map[string]any{
						"name": "coverage_selections",
						"title": "Coverage Selections",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$ARRAY`",
							},
						},
						"short": "Optional plan coverage option selections for policy-scoped configurations.",
					},
					map[string]any{
						"name": "desired_policy_start_date",
						"title": "Desired Policy Start Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "The desired date for the employee's policy to start.",
						"format": "date",
					},
					map[string]any{
						"name": "disclosures",
						"title": "Disclosures",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Disclosures associated with this intent.",
					},
					map[string]any{
						"name": "employee_id",
						"title": "Employee Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Identifier for the employee associated with this enrolment intent.",
					},
					map[string]any{
						"name": "enrolment_date",
						"title": "Enrolment Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "The date on which the employee agreed to enrol into the group's policies.",
						"format": "date",
					},
					map[string]any{
						"name": "force_confirmation",
						"title": "Force Confirmation",
						"type": "`$BOOLEAN`",
						"req": true,
						"short": "If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required.",
					},
					map[string]any{
						"name": "group_id",
						"title": "Group Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Identifier for the group associated with this enrolment intent.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the enrolment intent.",
					},
					map[string]any{
						"name": "ineligibility_reason",
						"title": "Ineligibility Reason",
						"type": "`$NULL`",
						"short": "If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "Object type identifier.",
						"readOnly": true,
					},
					map[string]any{
						"name": "pending_confirmation",
						"title": "Pending Confirmation",
						"type": "`$NULL`",
						"short": "If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state.",
					},
					map[string]any{
						"name": "policy_configuration",
						"title": "Policy Configuration",
						"type": "`$NULL`",
						"short": "Policy configuration associated with this enrolment intent.",
					},
					map[string]any{
						"name": "policy_enrolments",
						"title": "Policy Enrolments",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Policy enrolment information",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of the enrolment intent.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "enrolment_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/enrolment_intents/{enrolment_intent_id}/confirm",
								"segments": []any{
									map[string]any{
										"lit": "enrolment_intents",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "confirm",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "enrolment_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"$action": "confirm",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/enrolment_intents/{enrolment_intent_id}/coverage-selections",
								"segments": []any{
									map[string]any{
										"lit": "enrolment_intents",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "coverage-selections",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "enrolment_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"$action": "coverage_selection",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/enrolment_intents/{enrolment_intent_id}/reject",
								"segments": []any{
									map[string]any{
										"lit": "enrolment_intents",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "reject",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "enrolment_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"$action": "reject",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/enrolment_intents",
								"segments": []any{
									map[string]any{
										"lit": "enrolment_intents",
									},
								},
								"parts": []any{
									"enrolment_intents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "Idempotency-Key",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/enrolment_intents",
								"segments": []any{
									map[string]any{
										"lit": "enrolment_intents",
									},
								},
								"parts": []any{
									"enrolment_intents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/enrolment_intents/{enrolment_intent_id}",
								"segments": []any{
									map[string]any{
										"lit": "enrolment_intents",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"enrolment_intents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"enrolment_intent_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "enrolment_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/enrolment_intents/{enrolment_intent_id}",
								"segments": []any{
									map[string]any{
										"lit": "enrolment_intents",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"enrolment_intents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"enrolment_intent_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "enrolment_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "enrolment_intent_requirement_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/enrolment_intents/{enrolment_intent_id}/requirements",
								"segments": []any{
									map[string]any{
										"lit": "enrolment_intents",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "requirements",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "enrolment_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
									"query": []any{
										map[string]any{
											"name": "object_id",
											"orig": "object_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "object_type",
											"orig": "object_type",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "requirements",
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Api Version",
						"type": "`$STRING`",
						"readOnly": true,
					},
					map[string]any{
						"name": "created",
						"title": "Created",
						"type": "`$STRING`",
						"req": true,
						"format": "date-time",
					},
					map[string]any{
						"name": "data",
						"title": "Data",
						"type": "`$NULL`",
						"req": true,
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "platform_id",
						"title": "Platform Id",
						"type": "`$STRING`",
						"req": true,
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "event",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/events/{event_id}/replay",
								"segments": []any{
									map[string]any{
										"lit": "events",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "replay",
									},
								},
								"parts": []any{
									"events",
									"{id}",
									"replay",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"event_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "event_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"$action": "replay",
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/events",
								"segments": []any{
									map[string]any{
										"lit": "events",
									},
								},
								"parts": []any{
									"events",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "created_after",
											"orig": "created_after",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "order_direction",
											"orig": "order_direction",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "version",
											"orig": "version",
											"type": "`$ANY`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/events/{event_id}",
								"segments": []any{
									map[string]any{
										"lit": "events",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"events",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"event_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "event_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Description",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Short description of the purpose or scope of the `group`.",
					},
					map[string]any{
						"name": "employer_id",
						"title": "Employer Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Identifier for the `employer` that owns this `group`.",
					},
					map[string]any{
						"name": "enrolment_type",
						"title": "Enrolment Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Indicates how employees are enrolled into the group.",
					},
					map[string]any{
						"name": "group_policy_ids",
						"title": "Group Policy Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Group policy unique identifiers associated with this group.",
					},
					map[string]any{
						"name": "group_policy_intent_ids",
						"title": "Group Policy Intent Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Group policy intent unique identifiers associated with this group.",
					},
					map[string]any{
						"name": "group_quote_intent_ids",
						"title": "Group Quote Intent Ids",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Group quote intent unique identifiers associated with this group.",
					},
					map[string]any{
						"name": "group_type",
						"title": "Group Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Indicates how policies are organized for this group.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the `group`.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"op": map[string]any{
							"update": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$NULL`",
										"`$STRING`",
									},
								},
							},
						},
						"short": "Human-readable name of the `group`.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current lifecycle state of the `group`, indicating its current progress.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "group",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/groups",
								"segments": []any{
									map[string]any{
										"lit": "groups",
									},
								},
								"parts": []any{
									"groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/groups",
								"segments": []any{
									map[string]any{
										"lit": "groups",
									},
								},
								"parts": []any{
									"groups",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "employer_id",
											"orig": "employer_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/groups/{group_id}",
								"segments": []any{
									map[string]any{
										"lit": "groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "PUT",
								"orig": "/groups/{group_id}",
								"segments": []any{
									map[string]any{
										"lit": "groups",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"groups",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"name": "create_enrolment_intents",
						"title": "Create Enrolment Intents",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$BOOLEAN`",
							},
						},
						"short": "Controls whether enrolment intents are automatically created for the employee.",
					},
					map[string]any{
						"name": "desired_policy_start_date",
						"title": "Desired Policy Start Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "The desired date for the employee's policy to start.",
						"format": "date",
					},
					map[string]any{
						"name": "eligibility_status",
						"title": "Eligibility Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Eligibility status for the employee in this group.",
					},
					map[string]any{
						"name": "employee_id",
						"title": "Employee Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Employee Id",
					},
					map[string]any{
						"name": "enrolment_date",
						"title": "Enrolment Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "The date on which the employee agreed to enrol into the group's policies.",
						"format": "date",
					},
					map[string]any{
						"name": "enrolment_status",
						"title": "Enrolment Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Enrolment status for the employee in this group.",
					},
					map[string]any{
						"name": "enrolments",
						"title": "Enrolments",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of enrolments associated with the employee in this group.",
					},
					map[string]any{
						"name": "group_id",
						"title": "Group Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the group.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the employee.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "policies",
						"title": "Policies",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of policies associated with the employee in this group.",
					},
					map[string]any{
						"name": "policy_configuration",
						"title": "Policy Configuration",
						"type": "`$NULL`",
						"short": "Policy configuration for the employee in this group.",
					},
					map[string]any{
						"name": "scheduled_group_transitions",
						"title": "Scheduled Group Transitions",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of scheduled group transitions for the employee.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "group_employee",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/groups/{group_id}/employees",
								"segments": []any{
									map[string]any{
										"lit": "groups",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "employees",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "idempotency_key",
											"orig": "Idempotency-Key",
											"type": "`$STRING`",
											"kind": "header",
										},
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "group_employee_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/groups/{group_id}/employees",
								"segments": []any{
									map[string]any{
										"lit": "groups",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "employees",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
									"query": []any{
										map[string]any{
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "employees",
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Cancellation Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable.",
						"format": "date",
					},
					map[string]any{
						"name": "disclosures",
						"title": "Disclosures",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Disclosures associated with this group policy.",
					},
					map[string]any{
						"name": "employer_id",
						"title": "Employer Id",
						"type": "`$STRING`",
						"short": "Identifier for the employer associated with this group policy.",
					},
					map[string]any{
						"name": "end_date",
						"title": "End Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended.",
						"format": "date",
					},
					map[string]any{
						"name": "group_id",
						"title": "Group Id",
						"type": "`$STRING`",
						"short": "Identifier for the group associated with this group policy.",
					},
					map[string]any{
						"name": "health_insurance",
						"title": "Health Insurance",
						"type": "`$NULL`",
						"short": "Health insurance–specific fields (present when `type=health_insurance`).",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the group policy.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "plan",
						"title": "Plan",
						"type": "`$ANY`",
						"req": true,
						"short": "Plan information for this policy",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$ANY`",
						"req": true,
						"short": "Provider information for this policy.",
					},
					map[string]any{
						"name": "start_date",
						"title": "Start Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Policy start (effective) date in ISO 8601 (YYYY-MM-DD).",
						"format": "date",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current lifecycle state of the `group_policy`, indicating its progress from creation to activation.",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Policy type.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "group_policy",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/group_policies",
								"segments": []any{
									map[string]any{
										"lit": "group_policies",
									},
								},
								"parts": []any{
									"group_policies",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "employer_id",
											"orig": "employer_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/group_policies/{group_policy_id}",
								"segments": []any{
									map[string]any{
										"lit": "group_policies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"group_policies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_policy_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "group_policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Action Required",
						"type": "`$NULL`",
						"short": "Details of the required action when the intent is in ActionRequired status.",
					},
					map[string]any{
						"name": "consent_approvals",
						"title": "Consent Approvals",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$ARRAY`",
							},
						},
						"short": "Consent approvals to record at the time of intent creation",
					},
					map[string]any{
						"name": "cost_sharing",
						"title": "Cost Sharing",
						"type": "`$NULL`",
						"short": "Cost sharing configuration for the policy intent",
					},
					map[string]any{
						"name": "disclosures",
						"title": "Disclosures",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Disclosures associated with this intent.",
					},
					map[string]any{
						"name": "due_date",
						"title": "Due Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Due date for the policy intent",
						"format": "date-time",
					},
					map[string]any{
						"name": "group_id",
						"title": "Group Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the group",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the group policy intent",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "Object type identifier",
						"readOnly": true,
					},
					map[string]any{
						"name": "plan_id",
						"title": "Plan Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the plan",
					},
					map[string]any{
						"name": "quote_intent_id",
						"title": "Quote Intent Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the group quote intent this policy intent was created from",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of the group policy intent",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "group_policy_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/group_policy_intents",
								"segments": []any{
									map[string]any{
										"lit": "group_policy_intents",
									},
								},
								"parts": []any{
									"group_policy_intents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/group_policy_intents",
								"segments": []any{
									map[string]any{
										"lit": "group_policy_intents",
									},
								},
								"parts": []any{
									"group_policy_intents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "plan_id",
											"orig": "plan_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/group_policy_intents/{group_policy_intent_id}",
								"segments": []any{
									map[string]any{
										"lit": "group_policy_intents",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"group_policy_intents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_policy_intent_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "group_policy_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "group_policy_intent_requirement_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/group_policy_intents/{group_policy_intent_id}/requirements",
								"segments": []any{
									map[string]any{
										"lit": "group_policy_intents",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "requirements",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "group_policy_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
									"query": []any{
										map[string]any{
											"name": "object_id",
											"orig": "object_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "object_type",
											"orig": "object_type",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "requirements",
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"name": "cost_sharing",
						"title": "Cost Sharing",
						"type": "`$ANY`",
						"req": true,
						"short": "Cost sharing configuration for the quote",
					},
					map[string]any{
						"name": "currency",
						"title": "Currency",
						"type": "`$STRING`",
						"req": true,
						"short": "Currency of the premium (e.g.",
					},
					map[string]any{
						"name": "employee_count",
						"title": "Employee Count",
						"type": "`$INTEGER`",
						"req": true,
						"short": "Number of employees covered by the quote",
						"format": "int32",
					},
					map[string]any{
						"name": "expires_at",
						"title": "Expires At",
						"type": "`$STRING`",
						"req": true,
						"short": "When the quote expires",
						"format": "date-time",
					},
					map[string]any{
						"name": "generated_at",
						"title": "Generated At",
						"type": "`$STRING`",
						"req": true,
						"short": "When the quote was generated",
						"format": "date-time",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "Object type identifier",
						"readOnly": true,
					},
					map[string]any{
						"name": "pdf_expires_at",
						"title": "Pdf Expires At",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "When the PDF URL expires",
						"format": "date-time",
					},
					map[string]any{
						"name": "pdf_url",
						"title": "Pdf Url",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "URL to download the quote PDF",
					},
					map[string]any{
						"name": "total_monthly_premium",
						"title": "Total Monthly Premium",
						"type": "`$NUMBER`",
						"req": true,
						"short": "Total monthly premium for the group",
						"format": "double",
					},
				},
				"name": "group_quote",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/group_quote_intents/{group_quote_intent_id}/quote",
								"segments": []any{
									map[string]any{
										"lit": "group_quote_intents",
									},
									map[string]any{
										"var": "group_quote_intent_id",
									},
									map[string]any{
										"lit": "quote",
									},
								},
								"parts": []any{
									"group_quote_intents",
									"{group_quote_intent_id}",
									"quote",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "group_quote_intent_id",
											"orig": "group_quote_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"group_quote_intent_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.group_quote_intent",
						},
					},
				},
			},
			"group_quote_intent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "action_required",
						"title": "Action Required",
						"type": "`$NULL`",
						"short": "Details of the action required from the caller, if the intent is in action_required status.",
					},
					map[string]any{
						"name": "consent_links",
						"title": "Consent Links",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Consent links that need to be acknowledged",
					},
					map[string]any{
						"name": "cost_sharing",
						"title": "Cost Sharing",
						"type": "`$NULL`",
						"short": "Cost sharing configuration for the quote",
					},
					map[string]any{
						"name": "coverage_selections",
						"title": "Coverage Selections",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$ARRAY`",
							},
						},
						"short": "Plan coverage option selections for group-policy-scoped configurations.",
					},
					map[string]any{
						"name": "disclosures",
						"title": "Disclosures",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Disclosures associated with this intent.",
					},
					map[string]any{
						"name": "expected_start_date",
						"title": "Expected Start Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Expected start date for the insurance coverage",
						"format": "date",
					},
					map[string]any{
						"name": "group_id",
						"title": "Group Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the group",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the group quote intent",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "Object type identifier",
						"readOnly": true,
					},
					map[string]any{
						"name": "plan_id",
						"title": "Plan Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the plan",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of the group quote intent",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "group_quote_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/group_quote_intents/{group_quote_intent_id}/reject",
								"segments": []any{
									map[string]any{
										"lit": "group_quote_intents",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "reject",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "group_quote_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"$action": "reject",
									"exist": []any{
										"id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/group_quote_intents",
								"segments": []any{
									map[string]any{
										"lit": "group_quote_intents",
									},
								},
								"parts": []any{
									"group_quote_intents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/group_quote_intents",
								"segments": []any{
									map[string]any{
										"lit": "group_quote_intents",
									},
								},
								"parts": []any{
									"group_quote_intents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "plan_id",
											"orig": "plan_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/group_quote_intents/{group_quote_intent_id}",
								"segments": []any{
									map[string]any{
										"lit": "group_quote_intents",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"group_quote_intents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"group_quote_intent_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "group_quote_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "group_quote_intent_requirement_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/group_quote_intents/{group_quote_intent_id}/requirements",
								"segments": []any{
									map[string]any{
										"lit": "group_quote_intents",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "requirements",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "group_quote_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
									"query": []any{
										map[string]any{
											"name": "object_id",
											"orig": "object_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "object_type",
											"orig": "object_type",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"$action": "requirements",
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Available From",
						"type": "`$STRING`",
						"req": true,
						"short": "The date from which this plan is available (inclusive).",
						"format": "date",
					},
					map[string]any{
						"name": "available_to",
						"title": "Available To",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "The date until which this plan is available (inclusive).",
						"format": "date",
					},
					map[string]any{
						"name": "country",
						"title": "Country",
						"type": "`$STRING`",
						"req": true,
						"short": "The country this plan is available in.",
					},
					map[string]any{
						"name": "coverage_options",
						"title": "Coverage Options",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$ARRAY`",
							},
						},
						"short": "Coverage options available for this plan, organized by scope and input type.",
					},
					map[string]any{
						"name": "description",
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
						"short": "Description of the plan.",
					},
					map[string]any{
						"name": "disclosures",
						"title": "Disclosures",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Disclosures associated with this plan.",
					},
					map[string]any{
						"name": "documents",
						"title": "Documents",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of plan documents (e.g., IPIDs, T&Cs).",
					},
					map[string]any{
						"name": "eligible_count",
						"title": "Eligible Count",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$INTEGER`",
							},
						},
						"short": "Number of employees in the queried group eligible for this plan as-of `start_date`.",
						"format": "int32",
					},
					map[string]any{
						"name": "employee_eligibility_criteria",
						"title": "Employee Eligibility Criteria",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Eligibility criteria that employees must meet.",
					},
					map[string]any{
						"name": "employer_eligibility_criteria",
						"title": "Employer Eligibility Criteria",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Eligibility criteria that employers must meet.",
					},
					map[string]any{
						"name": "health_insurance",
						"title": "Health Insurance",
						"type": "`$NULL`",
						"short": "Health insurance-specific details.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the plan.",
					},
					map[string]any{
						"name": "ineligible_count",
						"title": "Ineligible Count",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$INTEGER`",
							},
						},
						"short": "Number of employees in the queried group ineligible for this plan as-of `start_date`.",
						"format": "int32",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the plan.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "Object type.",
						"readOnly": true,
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$ANY`",
						"req": true,
						"short": "The provider offering this plan.",
					},
					map[string]any{
						"name": "total_count",
						"title": "Total Count",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$INTEGER`",
							},
						},
						"short": "Total employees in the queried group.",
						"format": "int32",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "The benefit type of the plan.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "plan",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/plans",
								"segments": []any{
									map[string]any{
										"lit": "plans",
									},
								},
								"parts": []any{
									"plans",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "available_on",
											"orig": "available_on",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "country",
											"orig": "country",
											"type": "`$ANY`",
											"kind": "query",
											"field": true,
										},
										map[string]any{
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "provider_id",
											"orig": "provider_id",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_by",
											"orig": "sort_by",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "sort_dir",
											"orig": "sort_dir",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
										map[string]any{
											"name": "type",
											"orig": "type",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/plans/{plan_id}",
								"segments": []any{
									map[string]any{
										"lit": "plans",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"plans",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"plan_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "plan_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
									"query": []any{
										map[string]any{
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "start_date",
											"orig": "start_date",
											"type": "`$STRING`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Bundling Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Indicates how this policy is bundled within a group",
					},
					map[string]any{
						"name": "cancellation_date",
						"title": "Cancellation Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Date the policy was cancelled (if applicable)",
						"format": "date",
					},
					map[string]any{
						"name": "disclosures",
						"title": "Disclosures",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Disclosures associated with this policy.",
					},
					map[string]any{
						"name": "employee_id",
						"title": "Employee Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Identifier of the employee associated with this policy.",
					},
					map[string]any{
						"name": "end_date",
						"title": "End Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "Policy end date (inclusive) in ISO 8601, or null if open-ended",
						"format": "date",
					},
					map[string]any{
						"name": "group_id",
						"title": "Group Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Identifier of the group associated with this policy.",
					},
					map[string]any{
						"name": "group_policy_id",
						"title": "Group Policy Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Identifier of the group policy id associated with this policy.",
					},
					map[string]any{
						"name": "health_insurance",
						"title": "Health Insurance",
						"type": "`$NULL`",
						"short": "Health insurance–specific fields (present when `type=health_insurance`)",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the policy.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "Object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "plan",
						"title": "Plan",
						"type": "`$ANY`",
						"req": true,
						"short": "Plan information for this policy",
					},
					map[string]any{
						"name": "provider",
						"title": "Provider",
						"type": "`$ANY`",
						"req": true,
						"short": "Provider information for this policy",
					},
					map[string]any{
						"name": "start_date",
						"title": "Start Date",
						"type": "`$STRING`",
						"req": true,
						"short": "Policy start (effective) date in ISO 8601 (YYYY-MM-DD)",
						"format": "date",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current lifecycle state of the policy",
					},
					map[string]any{
						"name": "type",
						"title": "Type",
						"type": "`$STRING`",
						"req": true,
						"short": "Policy type.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "policy",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/policies",
								"segments": []any{
									map[string]any{
										"lit": "policies",
									},
								},
								"parts": []any{
									"policies",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "group_policy_id",
											"orig": "group_policy_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/policies/{policy_id}",
								"segments": []any{
									map[string]any{
										"lit": "policies",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"policies",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"policy_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Amendment Reason",
						"type": "`$ANY`",
						"req": true,
						"short": "The reason for the policy amendment.",
					},
					map[string]any{
						"name": "disclosures",
						"title": "Disclosures",
						"type": "`$ARRAY`",
						"req": true,
						"short": "Disclosures associated with this intent.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the policy amendment intent.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "Object type identifier.",
						"readOnly": true,
					},
					map[string]any{
						"name": "pending_confirmation",
						"title": "Pending Confirmation",
						"type": "`$NULL`",
						"short": "Information about the pending confirmation if the intent status is `pending_confirmation`.",
					},
					map[string]any{
						"name": "policy_id",
						"title": "Policy Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The policy ID for which the amendment is requested.",
					},
					map[string]any{
						"name": "processing_error",
						"title": "Processing Error",
						"type": "`$NULL`",
						"short": "Information about the processing error if the intent status is `processing_error`.",
					},
					map[string]any{
						"name": "requested_changes",
						"title": "Requested Changes",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of requested changes to the policy.",
					},
					map[string]any{
						"name": "required_action",
						"title": "Required Action",
						"type": "`$NULL`",
						"short": "Information about the required action if the intent status is `action_required`.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of the policy amendment intent.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "policy_amendment_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/policies/{policy_id}/policy_amendment_intents/{id}/cancel",
								"segments": []any{
									map[string]any{
										"lit": "policies",
									},
									map[string]any{
										"var": "policy_id",
									},
									map[string]any{
										"lit": "policy_amendment_intents",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "cancel",
									},
								},
								"parts": []any{
									"policies",
									"{policy_id}",
									"policy_amendment_intents",
									"{id}",
									"cancel",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"$action": "cancel",
									"exist": []any{
										"id",
										"policy_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}/confirm",
								"segments": []any{
									map[string]any{
										"lit": "policies",
									},
									map[string]any{
										"var": "policy_id",
									},
									map[string]any{
										"lit": "policy_amendment_intents",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "confirm",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "policy_amendment_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"$action": "confirm",
									"exist": []any{
										"id",
										"policy_id",
									},
								},
							},
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/policies/{policy_id}/policy_amendment_intents",
								"segments": []any{
									map[string]any{
										"lit": "policies",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "policy_amendment_intents",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/policies/{policy_id}/policy_amendment_intents",
								"segments": []any{
									map[string]any{
										"lit": "policies",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "policy_amendment_intents",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}",
								"segments": []any{
									map[string]any{
										"lit": "policies",
									},
									map[string]any{
										"var": "policy_id",
									},
									map[string]any{
										"lit": "policy_amendment_intents",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "policy_amendment_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
										map[string]any{
											"name": "policy_id",
											"orig": "policy_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
										"policy_id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"$.main.kit.entity.policy",
						},
					},
				},
			},
			"policy_import_intent": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "associated_persons",
						"title": "Associated Persons",
						"type": "`$ARRAY`",
						"req": true,
						"op": map[string]any{
							"create": map[string]any{
								"type": []any{
									"`$ONE`",
									[]any{
										"`$NULL`",
										"`$ARRAY`",
									},
								},
							},
						},
						"short": "List of associated persons linked to this policy import.",
					},
					map[string]any{
						"name": "employee_id",
						"title": "Employee Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The employee ID for the policy import.",
					},
					map[string]any{
						"name": "group_id",
						"title": "Group Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The group ID for the policy import.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the policy import intent.",
					},
					map[string]any{
						"name": "member_number",
						"title": "Member Number",
						"type": "`$STRING`",
						"req": true,
						"short": "The member number assigned by the provider.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "Object type identifier.",
						"readOnly": true,
					},
					map[string]any{
						"name": "policy_end_date",
						"title": "Policy End Date",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "The end date of the policy.",
						"format": "date",
					},
					map[string]any{
						"name": "policy_start_date",
						"title": "Policy Start Date",
						"type": "`$STRING`",
						"req": true,
						"short": "The start date of the policy.",
						"format": "date",
					},
					map[string]any{
						"name": "provider_policy_number",
						"title": "Provider Policy Number",
						"type": "`$STRING`",
						"req": true,
						"short": "The provider's policy number.",
					},
					map[string]any{
						"name": "status",
						"title": "Status",
						"type": "`$STRING`",
						"req": true,
						"short": "Current status of the policy import intent.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "policy_import_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "POST",
								"orig": "/policy_import_intents",
								"segments": []any{
									map[string]any{
										"lit": "policy_import_intents",
									},
								},
								"parts": []any{
									"policy_import_intents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/policy_import_intents",
								"segments": []any{
									map[string]any{
										"lit": "policy_import_intents",
									},
								},
								"parts": []any{
									"policy_import_intents",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "employee_id",
											"orig": "employee_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "group_id",
											"orig": "group_id",
											"type": "`$STRING`",
											"kind": "query",
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"field": true,
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "status",
											"orig": "status",
											"type": "`$STRING`",
											"kind": "query",
											"field": true,
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/policy_import_intents/{policy_import_intent_id}",
								"segments": []any{
									map[string]any{
										"lit": "policy_import_intents",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"policy_import_intents",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"policy_import_intent_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "policy_import_intent_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "pii_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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
						"title": "Description",
						"type": "`$STRING`",
						"req": true,
						"short": "Description of the provider.",
					},
					map[string]any{
						"name": "employer_platform_url",
						"title": "Employer Platform Url",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "URL to the employer portal/platform for this provider, if available.",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "Unique identifier for the provider.",
					},
					map[string]any{
						"name": "kota_hub_url",
						"title": "Kota Hub Url",
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"short": "URL to the Kota Hub page for this platform, if configured.",
					},
					map[string]any{
						"name": "logo_url",
						"title": "Logo Url",
						"type": "`$STRING`",
						"req": true,
						"short": "URL to the provider's logo image.",
					},
					map[string]any{
						"name": "name",
						"title": "Name",
						"type": "`$STRING`",
						"req": true,
						"short": "The name of the provider.",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "Object type.",
						"readOnly": true,
					},
					map[string]any{
						"name": "support_phone",
						"title": "Support Phone",
						"type": "`$STRING`",
						"req": true,
						"short": "Customer support phone number.",
					},
					map[string]any{
						"name": "supported_countries",
						"title": "Supported Countries",
						"type": "`$ARRAY`",
						"req": true,
						"short": "List of countries supported by this provider.",
					},
					map[string]any{
						"name": "website_url",
						"title": "Website Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The provider's main website URL.",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "provider",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/providers",
								"segments": []any{
									map[string]any{
										"lit": "providers",
									},
								},
								"parts": []any{
									"providers",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "country",
											"orig": "country",
											"type": "`$ANY`",
											"kind": "query",
										},
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/providers/{provider_id}",
								"segments": []any{
									map[string]any{
										"lit": "providers",
									},
									map[string]any{
										"var": "id",
									},
								},
								"parts": []any{
									"providers",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"provider_id": "id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "provider_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webhook_endpoint": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "created_at",
						"title": "Created At",
						"type": "`$STRING`",
						"req": true,
						"short": "The date and time the endpoint was created",
						"format": "date-time",
					},
					map[string]any{
						"name": "endpoint_url",
						"title": "Endpoint Url",
						"type": "`$STRING`",
						"req": true,
						"short": "The registered URL of the endpoint",
					},
					map[string]any{
						"name": "id",
						"title": "Id",
						"type": "`$STRING`",
						"req": true,
						"short": "The unique identifier of the endpoint",
					},
					map[string]any{
						"name": "object",
						"title": "Object",
						"type": "`$STRING`",
						"short": "The object type",
						"readOnly": true,
					},
					map[string]any{
						"name": "subscribed_events",
						"title": "Subscribed Events",
						"type": "`$ARRAY`",
						"req": true,
						"short": "The events the endpoint is subscribed to",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "webhook_endpoint",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks/endpoints",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"lit": "endpoints",
									},
								},
								"parts": []any{
									"webhooks",
									"endpoints",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.items`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"query": []any{
										map[string]any{
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
											"kind": "query",
										},
										map[string]any{
											"name": "page_size",
											"orig": "page_size",
											"type": "`$INTEGER`",
											"kind": "query",
										},
									},
								},
								"select": map[string]any{},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"kind": "http",
								"method": "GET",
								"orig": "/webhooks/endpoints/{webhook_endpoint_id}",
								"segments": []any{
									map[string]any{
										"lit": "webhooks",
									},
									map[string]any{
										"lit": "endpoints",
									},
									map[string]any{
										"var": "id",
									},
								},
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
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"name": "x_platform_id",
											"orig": "X-Platform-Id",
											"type": "`$STRING`",
											"kind": "header",
										},
									},
									"params": []any{
										map[string]any{
											"name": "id",
											"orig": "webhook_endpoint_id",
											"type": "`$STRING`",
											"kind": "param",
											"reqd": true,
											"example": "whe_3b1333d87d9d4fd6ad83ba7f6b0e951a",
										},
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"response": map[string]any{
									"kind": "json",
									"media": "application/json",
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

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
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
	case "debug":
		if NewDebugFeatureFunc != nil {
			return NewDebugFeatureFunc()
		}
	case "idempotency":
		if NewIdempotencyFeatureFunc != nil {
			return NewIdempotencyFeatureFunc()
		}
	case "metrics":
		if NewMetricsFeatureFunc != nil {
			return NewMetricsFeatureFunc()
		}
	case "paging":
		if NewPagingFeatureFunc != nil {
			return NewPagingFeatureFunc()
		}
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
