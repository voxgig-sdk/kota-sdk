package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Kota",
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
						"active": true,
						"name": "date_of_birth",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "email",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "employee_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "first_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "last_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "phone_number",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "platform_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "relationship_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "sex_at_birth",
						"req": true,
						"type": "`$ANY`",
						"index$": 10,
					},
				},
				"name": "associated_person",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "associated_person_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "associated_person_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "associated_person_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
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
						"active": true,
						"name": "associated_person_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "date_of_birth",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "eligibility_status",
						"req": true,
						"type": "`$ANY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "first_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "ineligibility_reason",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "last_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "relationship",
						"req": true,
						"type": "`$ANY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "sex_at_birth",
						"req": true,
						"type": "`$ANY`",
						"index$": 8,
					},
				},
				"name": "associated_person_eligibility_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "dependents_management_intent_id",
											"orig": "dependents_management_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
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
								"index$": 0,
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
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "employer_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "external_customer_id",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "finalized_at",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "last_updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "period",
						"req": true,
						"type": "`$ANY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 8,
					},
				},
				"name": "contribution_report",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "contribution_report_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employer_id",
											"orig": "employer_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "external_customer_id",
											"orig": "external_customer_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "month",
											"orig": "month",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "status",
											"orig": "status",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "year",
											"orig": "year",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "contribution_report_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "contribution_report_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "currency",
						"req": true,
						"type": "`$ANY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "employee_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "employer_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "external_customer_id",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "finalized_at",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "health_insurance",
						"req": true,
						"type": "`$ANY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "last_updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "period",
						"req": true,
						"type": "`$ANY`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 11,
					},
				},
				"name": "contribution_report_employee_breakdown",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "contribution_report_id",
											"orig": "contribution_report_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
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
						"active": true,
						"name": "contribution_report_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "currency",
						"req": true,
						"type": "`$ANY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "employee_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "employer_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "external_customer_id",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "finalized_at",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "health_insurance",
						"req": true,
						"type": "`$ANY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "last_updated_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "period",
						"req": true,
						"type": "`$ANY`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 11,
					},
				},
				"name": "contribution_report_employee_breakdown_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "contribution_report_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
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
								"index$": 0,
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
						"active": true,
						"name": "expiry",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "link",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
				},
				"name": "create_hosted_session_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
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
						"active": true,
						"name": "expiry",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "token",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
				},
				"name": "create_session_token",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
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
								"index$": 0,
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
						"active": true,
						"name": "action_required",
						"req": false,
						"type": "`$NULL`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "coverage_options",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$ARRAY`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "dependents",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "disclosures",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "parent_intent_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "parent_intent_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "plan",
						"req": true,
						"type": "`$ANY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 9,
					},
				},
				"name": "dependent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "dependents_management_intent_id",
											"orig": "dependents_management_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
					},
					"remove": map[string]any{
						"input": "data",
						"name": "remove",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "dependents_management_intent_id",
											"orig": "dependents_management_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "associated_person_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
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
						"active": true,
						"name": "action_required",
						"req": false,
						"type": "`$NULL`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "coverage_options",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$ARRAY`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "dependents",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "disclosures",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "parent_intent_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "parent_intent_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "plan",
						"req": true,
						"type": "`$ANY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 9,
					},
				},
				"name": "dependents_management_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "policy_amendment_intent_id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "policy_id",
											"orig": "policy_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "enrolment_intent_id",
											"orig": "enrolment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "dependents_management_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 2,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "dependents_management_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 3,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "dependents_management_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "eligibility_status",
						"req": true,
						"type": "`$ANY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "plan",
						"req": true,
						"type": "`$ANY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": true,
						"type": "`$ANY`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "reasons",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 4,
					},
				},
				"name": "eligibility_check",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "group_id",
											"orig": "group_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "bank_account",
						"req": false,
						"type": "`$NULL`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "date_of_birth",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "earliest_benefits_start_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "email",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "employer_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "external_customer_id",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "first_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "home_address",
						"req": false,
						"type": "`$NULL`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "last_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "metadata",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$OBJECT`",
							},
						},
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "national_tax_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "nationality",
						"req": false,
						"type": "`$NULL`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "offboard_on",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "phone_number",
						"req": true,
						"type": "`$STRING`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "platform_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "sex_at_birth",
						"req": true,
						"type": "`$ANY`",
						"index$": 17,
					},
					map[string]any{
						"active": true,
						"name": "start_on",
						"req": false,
						"type": "`$STRING`",
						"index$": 18,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": false,
						"type": "`$ANY`",
						"index$": 19,
					},
				},
				"name": "employee",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
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
								"index$": 2,
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employer_id",
											"orig": "employer_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "external_customer_id",
											"orig": "external_customer_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "metadata_id",
											"orig": "metadata_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "coverage_level",
						"req": true,
						"type": "`$ANY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "employee_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "employer_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "external_customer_id",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "required_action",
						"req": false,
						"type": "`$NULL`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 7,
					},
				},
				"name": "employee_health_insurance_offer",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "eeho_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employee_offer_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
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
						"active": true,
						"name": "coverage_level",
						"req": true,
						"type": "`$ANY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "employee_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "employer_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "external_customer_id",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "required_action",
						"req": false,
						"type": "`$NULL`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 7,
					},
				},
				"name": "employee_health_insurance_offer_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
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
								"index$": 0,
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
						"active": true,
						"name": "cancellation_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "coverage_level",
						"req": true,
						"type": "`$ANY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "employee_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "employer_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "end_date",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "enrolled_dependants_count",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "enrolment_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "estimated_gross_premium",
						"req": true,
						"type": "`$ANY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "external_customer_id",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "opt_out_deadline_date",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "policy_number",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "renewal",
						"req": true,
						"type": "`$ANY`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "start_date",
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 15,
					},
				},
				"name": "employee_health_insurance_policy",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employee_policy_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
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
						"active": true,
						"name": "cancellation_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "coverage_level",
						"req": true,
						"type": "`$ANY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "employee_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "employer_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "end_date",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "enrolled_dependants_count",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "enrolment_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "estimated_gross_premium",
						"req": true,
						"type": "`$ANY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "external_customer_id",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "opt_out_deadline_date",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "policy_number",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "renewal",
						"req": true,
						"type": "`$ANY`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "start_date",
						"req": true,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 15,
					},
				},
				"name": "employee_health_insurance_policy_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "status",
											"orig": "status",
											"reqd": false,
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
								"index$": 0,
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
						"active": true,
						"name": "contact",
						"req": true,
						"type": "`$ANY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "earliest_benefits_start_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "legal_address",
						"req": true,
						"type": "`$ANY`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "legal_name",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "metadata",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$OBJECT`",
							},
						},
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "offboard_on",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "platform_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "registration_number",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": false,
						"type": "`$ANY`",
						"index$": 10,
					},
				},
				"name": "employer",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
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
								"index$": 1,
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "filter",
											"orig": "filter",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employer_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employer_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "cancellation_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "coverage_levels",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "employer_cancellation_period_length",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "employer_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "end_date",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "enrolment_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "group_policy_number",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "renewal",
						"req": true,
						"type": "`$ANY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "start_date",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 11,
					},
				},
				"name": "employer_health_insurance_policy",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employer_id",
											"orig": "employer_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "erhp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employer_policy_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
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
						"active": true,
						"name": "cancellation_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "coverage_levels",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "employer_cancellation_period_length",
						"req": true,
						"type": "`$INTEGER`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "employer_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "end_date",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "enrolment_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "group_policy_number",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "renewal",
						"req": true,
						"type": "`$ANY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "start_date",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 11,
					},
				},
				"name": "employer_health_insurance_policy_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employer_id",
											"orig": "employer_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "status",
											"orig": "status",
											"reqd": false,
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
								"index$": 0,
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
						"active": true,
						"name": "coverage_levels",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "employer_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "quoted_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "required_action",
						"req": false,
						"type": "`$NULL`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 6,
					},
				},
				"name": "employer_health_insurance_quote",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employer_id",
											"orig": "employer_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "erhq_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "employer_quote_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
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
						"active": true,
						"name": "coverage_levels",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "employer_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "quoted_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "required_action",
						"req": false,
						"type": "`$NULL`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 6,
					},
				},
				"name": "employer_health_insurance_quote_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "employer_id",
											"orig": "employer_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "status",
											"orig": "status",
											"reqd": false,
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
								"index$": 0,
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
						"active": true,
						"name": "action_required",
						"req": false,
						"type": "`$NULL`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "disclosures",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "employee_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "force_confirmation",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "group_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "ineligibility_reason",
						"req": false,
						"type": "`$NULL`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "pending_confirmation",
						"req": false,
						"type": "`$NULL`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "policy_configuration",
						"req": false,
						"type": "`$NULL`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "policy_enrolments",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 11,
					},
				},
				"name": "enrolment_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
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
								"index$": 2,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
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
								"index$": 3,
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "status",
											"orig": "status",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "enrolment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "enrolment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "is_fulfilled",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "object_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "object_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "requirement_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 5,
					},
				},
				"name": "enrolment_intent_requirement_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "enrolment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "object_id",
											"orig": "object_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "object_type",
											"orig": "object_type",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
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
								"index$": 0,
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
						"active": true,
						"name": "api_version",
						"req": false,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "created",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "data",
						"req": true,
						"type": "`$NULL`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "options",
						"req": false,
						"type": "`$NULL`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "parent",
						"req": false,
						"type": "`$NULL`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "platform_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "root",
						"req": false,
						"type": "`$ANY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
				},
				"name": "event",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "created_after",
											"orig": "created_after",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "order_direction",
											"orig": "order_direction",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "version",
											"orig": "version",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "event_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "description",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "employer_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "enrolment_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "group_policy_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "group_policy_intent_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "group_quote_intent_ids",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "group_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 10,
					},
				},
				"name": "group",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employer_id",
											"orig": "employer_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "status",
											"orig": "status",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
							},
						},
					},
					"update": map[string]any{
						"input": "data",
						"name": "update",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "desired_policy_start_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "eligibility_status",
						"req": true,
						"type": "`$ANY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "enrolment_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "enrolment_status",
						"req": true,
						"type": "`$ANY`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "enrolments",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "group_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "policies",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "scheduled_group_transitions",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 9,
					},
				},
				"name": "group_employee",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "idempotency_key",
											"orig": "idempotency_key",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "desired_policy_start_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "eligibility_status",
						"req": true,
						"type": "`$ANY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "enrolment_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "enrolment_status",
						"req": true,
						"type": "`$ANY`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "enrolments",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "group_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "policies",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "scheduled_group_transitions",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 9,
					},
				},
				"name": "group_employee_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
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
								"index$": 0,
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
						"active": true,
						"name": "cancellation_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "disclosures",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "employer_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "end_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "group_id",
						"req": false,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "health_insurance",
						"req": false,
						"type": "`$NULL`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "plan",
						"req": true,
						"type": "`$ANY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": true,
						"type": "`$ANY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "start_date",
						"req": true,
						"type": "`$STRING`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": true,
						"type": "`$ANY`",
						"index$": 12,
					},
				},
				"name": "group_policy",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employer_id",
											"orig": "employer_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "status",
											"orig": "status",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_policy_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "action_required",
						"req": false,
						"type": "`$NULL`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "cost_sharing",
						"req": false,
						"type": "`$NULL`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "disclosures",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "due_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "group_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "plan_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "quote_intent_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 9,
					},
				},
				"name": "group_policy_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "plan_id",
											"orig": "plan_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "status",
											"orig": "status",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_policy_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "is_fulfilled",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "object_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "object_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "requirement_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 5,
					},
				},
				"name": "group_policy_intent_requirement_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_policy_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "object_id",
											"orig": "object_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "object_type",
											"orig": "object_type",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
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
								"index$": 0,
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
						"active": true,
						"name": "family_type",
						"req": false,
						"type": "`$NULL`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "member_count",
						"req": false,
						"type": "`$NULL`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "member_selection",
						"req": false,
						"type": "`$NULL`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "percentage",
						"req": false,
						"type": "`$NULL`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": true,
						"type": "`$ANY`",
						"index$": 4,
					},
				},
				"name": "group_quote",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "group_quote_intent_id",
											"orig": "group_quote_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "action_required",
						"req": false,
						"type": "`$NULL`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "consent_links",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "cost_sharing",
						"req": false,
						"type": "`$NULL`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "disclosures",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "expected_start_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "group_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "plan_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 9,
					},
				},
				"name": "group_quote_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
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
								"index$": 1,
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "plan_id",
											"orig": "plan_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "status",
											"orig": "status",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_quote_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "is_fulfilled",
						"req": true,
						"type": "`$BOOLEAN`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "object_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "object_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "requirement_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 5,
					},
				},
				"name": "group_quote_intent_requirement_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "group_quote_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "object_id",
											"orig": "object_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "object_type",
											"orig": "object_type",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
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
								"index$": 0,
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
						"active": true,
						"name": "available_from",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "available_to",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "country",
						"req": true,
						"type": "`$ANY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "coverage_options",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$ARRAY`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "description",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "disclosures",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "documents",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "eligible_count",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$INTEGER`",
							},
						},
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "employee_eligibility_criteria",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "employer_eligibility_criteria",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "health_insurance",
						"req": false,
						"type": "`$NULL`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "ineligible_count",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$INTEGER`",
							},
						},
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 14,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": true,
						"type": "`$ANY`",
						"index$": 15,
					},
					map[string]any{
						"active": true,
						"name": "total_count",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$INTEGER`",
							},
						},
						"index$": 16,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": true,
						"type": "`$ANY`",
						"index$": 17,
					},
				},
				"name": "plan",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "available_on",
											"orig": "available_on",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "country",
											"orig": "country",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "provider_id",
											"orig": "provider_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "sort_by",
											"orig": "sort_by",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "sort_dir",
											"orig": "sort_dir",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "type",
											"orig": "type",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "plan_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "start_date",
											"orig": "start_date",
											"reqd": false,
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
								"index$": 0,
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
						"active": true,
						"name": "bundling_type",
						"req": true,
						"type": "`$ANY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "cancellation_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "disclosures",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "employee_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "end_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "group_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "group_policy_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "health_insurance",
						"req": false,
						"type": "`$NULL`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 9,
					},
					map[string]any{
						"active": true,
						"name": "plan",
						"req": true,
						"type": "`$ANY`",
						"index$": 10,
					},
					map[string]any{
						"active": true,
						"name": "provider",
						"req": true,
						"type": "`$ANY`",
						"index$": 11,
					},
					map[string]any{
						"active": true,
						"name": "start_date",
						"req": true,
						"type": "`$STRING`",
						"index$": 12,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 13,
					},
					map[string]any{
						"active": true,
						"name": "type",
						"req": true,
						"type": "`$ANY`",
						"index$": 14,
					},
				},
				"name": "policy",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_policy_id",
											"orig": "group_policy_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "status",
											"orig": "status",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "policy_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "amendment_reason",
						"req": true,
						"type": "`$ANY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "disclosures",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "pending_confirmation",
						"req": false,
						"type": "`$NULL`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "policy_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "processing_error",
						"req": false,
						"type": "`$NULL`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "requested_changes",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "required_action",
						"req": false,
						"type": "`$NULL`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 9,
					},
				},
				"name": "policy_amendment_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
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
								"index$": 0,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "policy_amendment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
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
								"index$": 1,
							},
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "policy_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 2,
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "policy_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "status",
											"orig": "status",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "policy_amendment_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
										},
										map[string]any{
											"active": true,
											"example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "policy_id",
											"orig": "policy_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 1,
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
								"index$": 0,
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
						"active": true,
						"name": "associated_persons",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "employee_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "group_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "member_number",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "policy_end_date",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "policy_start_date",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "provider_policy_number",
						"req": true,
						"type": "`$STRING`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "status",
						"req": true,
						"type": "`$ANY`",
						"index$": 9,
					},
				},
				"name": "policy_import_intent",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "employee_id",
											"orig": "employee_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "query",
											"name": "group_id",
											"orig": "group_id",
											"reqd": false,
											"type": "`$STRING`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "status",
											"orig": "status",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "pii_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "policy_import_intent_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "description",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "employer_platform_url",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "kota_hub_url",
						"req": false,
						"type": []any{
							"`$ONE`",
							[]any{
								"`$NULL`",
								"`$STRING`",
							},
						},
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "logo_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 4,
					},
					map[string]any{
						"active": true,
						"name": "name",
						"req": true,
						"type": "`$STRING`",
						"index$": 5,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 6,
					},
					map[string]any{
						"active": true,
						"name": "support_phone",
						"req": true,
						"type": "`$STRING`",
						"index$": 7,
					},
					map[string]any{
						"active": true,
						"name": "supported_countries",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 8,
					},
					map[string]any{
						"active": true,
						"name": "website_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 9,
					},
				},
				"name": "provider",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "country",
											"orig": "country",
											"reqd": false,
											"type": "`$ANY`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
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
								"index$": 0,
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "provider_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "deliveries",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "event_id",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
				},
				"name": "replay",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "event_id",
											"orig": "event_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "endpoint_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "subscribed_events",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 4,
					},
				},
				"name": "webhook_endpoint",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"params": []any{
										map[string]any{
											"active": true,
											"example": "whe_3b1333d87d9d4fd6ad83ba7f6b0e951a",
											"kind": "param",
											"name": "id",
											"orig": "webhook_endpoint_id",
											"reqd": true,
											"type": "`$STRING`",
											"index$": 0,
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
								"index$": 0,
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
						"active": true,
						"name": "created_at",
						"req": true,
						"type": "`$STRING`",
						"index$": 0,
					},
					map[string]any{
						"active": true,
						"name": "endpoint_url",
						"req": true,
						"type": "`$STRING`",
						"index$": 1,
					},
					map[string]any{
						"active": true,
						"name": "id",
						"req": true,
						"type": "`$STRING`",
						"index$": 2,
					},
					map[string]any{
						"active": true,
						"name": "object",
						"req": false,
						"type": "`$STRING`",
						"index$": 3,
					},
					map[string]any{
						"active": true,
						"name": "subscribed_events",
						"req": true,
						"type": "`$ARRAY`",
						"index$": 4,
					},
				},
				"name": "webhook_endpoint_response_paged_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"active": true,
								"args": map[string]any{
									"header": []any{
										map[string]any{
											"active": true,
											"kind": "header",
											"name": "x_platform_id",
											"orig": "x_platform_id",
											"reqd": false,
											"type": "`$STRING`",
										},
									},
									"query": []any{
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"reqd": false,
											"type": "`$INTEGER`",
										},
										map[string]any{
											"active": true,
											"kind": "query",
											"name": "page_size",
											"orig": "page_size",
											"reqd": false,
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
								"index$": 0,
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
