
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'Kota',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: 'https://test.api.kota.io',

    auth: {
      prefix: 'Bearer',
    },

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      associated_person: {
      },

      associated_person_eligibility_response_paged_list: {
      },

      contribution_report: {
      },

      contribution_report_employee_breakdown: {
      },

      contribution_report_employee_breakdown_response_paged_list: {
      },

      create_hosted_session_token: {
      },

      create_session_token: {
      },

      dependent: {
      },

      dependents_management_intent: {
      },

      eligibility_check: {
      },

      employee: {
      },

      employee_health_insurance_offer: {
      },

      employee_health_insurance_offer_response_paged_list: {
      },

      employee_health_insurance_policy: {
      },

      employee_health_insurance_policy_response_paged_list: {
      },

      employer: {
      },

      employer_health_insurance_policy: {
      },

      employer_health_insurance_policy_response_paged_list: {
      },

      employer_health_insurance_quote: {
      },

      employer_health_insurance_quote_response_paged_list: {
      },

      enrolment_intent: {
      },

      enrolment_intent_requirement_response_paged_list: {
      },

      event: {
      },

      group: {
      },

      group_employee: {
      },

      group_employee_response_paged_list: {
      },

      group_policy: {
      },

      group_policy_intent: {
      },

      group_policy_intent_requirement_response_paged_list: {
      },

      group_quote: {
      },

      group_quote_intent: {
      },

      group_quote_intent_requirement_response_paged_list: {
      },

      plan: {
      },

      policy: {
      },

      policy_amendment_intent: {
      },

      policy_import_intent: {
      },

      provider: {
      },

      replay: {
      },

      webhook_endpoint: {
      },

      webhook_endpoint_response_paged_list: {
      },

    }
  }


  entity = {
    "associated_person": {
      "fields": [
        {
          "active": true,
          "name": "date_of_birth",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "email",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 1
        },
        {
          "active": true,
          "name": "employee_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "first_name",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "last_name",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "phone_number",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 7
        },
        {
          "active": true,
          "name": "platform_id",
          "req": false,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "relationship_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 9
        },
        {
          "active": true,
          "name": "sex_at_birth",
          "req": true,
          "type": "`$ANY`",
          "index$": 10
        }
      ],
      "name": "associated_person",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "employee_id",
                    "orig": "employee_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/employees/{employee_id}/associated_persons",
              "parts": [
                "employees",
                "{employee_id}",
                "associated_persons"
              ],
              "select": {
                "exist": [
                  "employee_id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "employee_id",
                    "orig": "employee_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/employees/{employee_id}/associated_persons",
              "parts": [
                "employees",
                "{employee_id}",
                "associated_persons"
              ],
              "select": {
                "exist": [
                  "employee_id",
                  "page",
                  "page_size",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "employee_id",
                    "orig": "employee_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "associated_person_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 1
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/employees/{employee_id}/associated_persons/{associated_person_id}",
              "parts": [
                "employees",
                "{employee_id}",
                "associated_persons",
                "{id}"
              ],
              "rename": {
                "param": {
                  "associated_person_id": "id"
                }
              },
              "select": {
                "exist": [
                  "employee_id",
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "employee_id",
                    "orig": "employee_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "associated_person_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 1
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/employees/{employee_id}/associated_persons/{associated_person_id}",
              "parts": [
                "employees",
                "{employee_id}",
                "associated_persons",
                "{id}"
              ],
              "rename": {
                "param": {
                  "associated_person_id": "id"
                }
              },
              "select": {
                "exist": [
                  "employee_id",
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "remove"
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "employee_id",
                    "orig": "employee_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "associated_person_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 1
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/employees/{employee_id}/associated_persons/{associated_person_id}",
              "parts": [
                "employees",
                "{employee_id}",
                "associated_persons",
                "{id}"
              ],
              "rename": {
                "param": {
                  "associated_person_id": "id"
                }
              },
              "select": {
                "exist": [
                  "employee_id",
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "update"
        }
      },
      "relations": {
        "ancestors": [
          [
            "employee"
          ]
        ]
      }
    },
    "associated_person_eligibility_response_paged_list": {
      "fields": [
        {
          "active": true,
          "name": "associated_person_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "date_of_birth",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "eligibility_status",
          "req": true,
          "type": "`$ANY`",
          "index$": 2
        },
        {
          "active": true,
          "name": "first_name",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "ineligibility_reason",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 4
        },
        {
          "active": true,
          "name": "last_name",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "relationship",
          "req": true,
          "type": "`$ANY`",
          "index$": 7
        },
        {
          "active": true,
          "name": "sex_at_birth",
          "req": true,
          "type": "`$ANY`",
          "index$": 8
        }
      ],
      "name": "associated_person_eligibility_response_paged_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "dependents_management_intent_id",
                    "orig": "dependents_management_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility",
              "parts": [
                "dependents_management_intents",
                "{dependents_management_intent_id}",
                "associated_persons_eligibility"
              ],
              "select": {
                "exist": [
                  "dependents_management_intent_id",
                  "page",
                  "page_size",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": [
          [
            "dependents_management_intent"
          ]
        ]
      }
    },
    "contribution_report": {
      "fields": [
        {
          "active": true,
          "name": "created_at",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "employer_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "external_customer_id",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 2
        },
        {
          "active": true,
          "name": "finalized_at",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 3
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "last_updated_at",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "period",
          "req": true,
          "type": "`$ANY`",
          "index$": 7
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 8
        }
      ],
      "name": "contribution_report",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "contribution_report_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/contribution_reports/{contribution_report_id}/finalize",
              "parts": [
                "contribution_reports",
                "{id}",
                "finalize"
              ],
              "rename": {
                "param": {
                  "contribution_report_id": "id"
                }
              },
              "select": {
                "$action": "finalize",
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "employer_id",
                    "orig": "employer_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "external_customer_id",
                    "orig": "external_customer_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "month",
                    "orig": "month",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "year",
                    "orig": "year",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/contribution_reports",
              "parts": [
                "contribution_reports"
              ],
              "select": {
                "exist": [
                  "employer_id",
                  "external_customer_id",
                  "month",
                  "page",
                  "page_size",
                  "status",
                  "x_platform_id",
                  "year"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "contribution_report_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/contribution_reports/{contribution_report_id}",
              "parts": [
                "contribution_reports",
                "{id}"
              ],
              "rename": {
                "param": {
                  "contribution_report_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "contribution_report_employee_breakdown": {
      "fields": [
        {
          "active": true,
          "name": "contribution_report_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "created_at",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "currency",
          "req": true,
          "type": "`$ANY`",
          "index$": 2
        },
        {
          "active": true,
          "name": "employee_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "employer_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "external_customer_id",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 5
        },
        {
          "active": true,
          "name": "finalized_at",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 6
        },
        {
          "active": true,
          "name": "health_insurance",
          "req": true,
          "type": "`$ANY`",
          "index$": 7
        },
        {
          "active": true,
          "name": "last_updated_at",
          "req": true,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 9
        },
        {
          "active": true,
          "name": "period",
          "req": true,
          "type": "`$ANY`",
          "index$": 10
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 11
        }
      ],
      "name": "contribution_report_employee_breakdown",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "contribution_report_id",
                    "orig": "contribution_report_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "employee_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 1
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}",
              "parts": [
                "contribution_reports",
                "{contribution_report_id}",
                "employee_breakdowns",
                "{id}"
              ],
              "rename": {
                "param": {
                  "employee_id": "id"
                }
              },
              "select": {
                "exist": [
                  "contribution_report_id",
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": [
          [
            "contribution_report"
          ]
        ]
      }
    },
    "contribution_report_employee_breakdown_response_paged_list": {
      "fields": [
        {
          "active": true,
          "name": "contribution_report_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "created_at",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "currency",
          "req": true,
          "type": "`$ANY`",
          "index$": 2
        },
        {
          "active": true,
          "name": "employee_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "employer_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "external_customer_id",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 5
        },
        {
          "active": true,
          "name": "finalized_at",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 6
        },
        {
          "active": true,
          "name": "health_insurance",
          "req": true,
          "type": "`$ANY`",
          "index$": 7
        },
        {
          "active": true,
          "name": "last_updated_at",
          "req": true,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 9
        },
        {
          "active": true,
          "name": "period",
          "req": true,
          "type": "`$ANY`",
          "index$": 10
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 11
        }
      ],
      "name": "contribution_report_employee_breakdown_response_paged_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "contribution_report_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/contribution_reports/{contribution_report_id}/employee_breakdowns",
              "parts": [
                "contribution_reports",
                "{id}",
                "employee_breakdowns"
              ],
              "rename": {
                "param": {
                  "contribution_report_id": "id"
                }
              },
              "select": {
                "$action": "employee_breakdowns",
                "exist": [
                  "id",
                  "page",
                  "page_size",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "create_hosted_session_token": {
      "fields": [
        {
          "active": true,
          "name": "expiry",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "link",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        }
      ],
      "name": "create_hosted_session_token",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/hosted/sessions",
              "parts": [
                "hosted",
                "sessions"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "create_session_token": {
      "fields": [
        {
          "active": true,
          "name": "expiry",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "token",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        }
      ],
      "name": "create_session_token",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/embed/sessions",
              "parts": [
                "embed",
                "sessions"
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "dependent": {
      "fields": [
        {
          "active": true,
          "name": "action_required",
          "req": false,
          "type": "`$NULL`",
          "index$": 0
        },
        {
          "active": true,
          "name": "coverage_options",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$ARRAY`"
            ]
          ],
          "index$": 1
        },
        {
          "active": true,
          "name": "dependents",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 2
        },
        {
          "active": true,
          "name": "disclosures",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 3
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "parent_intent_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "parent_intent_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 7
        },
        {
          "active": true,
          "name": "plan",
          "req": true,
          "type": "`$ANY`",
          "index$": 8
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 9
        }
      ],
      "name": "dependent",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "idempotency_key",
                    "orig": "idempotency_key",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "dependents_management_intent_id",
                    "orig": "dependents_management_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/dependents_management_intents/{dependents_management_intent_id}/dependents",
              "parts": [
                "dependents_management_intents",
                "{dependents_management_intent_id}",
                "dependents"
              ],
              "select": {
                "exist": [
                  "dependents_management_intent_id",
                  "idempotency_key",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        },
        "remove": {
          "input": "data",
          "name": "remove",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "dependents_management_intent_id",
                    "orig": "dependents_management_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "associated_person_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 1
                  }
                ]
              },
              "kind": "http",
              "method": "DELETE",
              "orig": "/dependents_management_intents/{dependents_management_intent_id}/dependents/{associated_person_id}",
              "parts": [
                "dependents_management_intents",
                "{dependents_management_intent_id}",
                "dependents",
                "{id}"
              ],
              "rename": {
                "param": {
                  "associated_person_id": "id"
                }
              },
              "select": {
                "exist": [
                  "dependents_management_intent_id",
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "remove"
        }
      },
      "relations": {
        "ancestors": [
          [
            "dependents_management_intent"
          ]
        ]
      }
    },
    "dependents_management_intent": {
      "fields": [
        {
          "active": true,
          "name": "action_required",
          "req": false,
          "type": "`$NULL`",
          "index$": 0
        },
        {
          "active": true,
          "name": "coverage_options",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$ARRAY`"
            ]
          ],
          "index$": 1
        },
        {
          "active": true,
          "name": "dependents",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 2
        },
        {
          "active": true,
          "name": "disclosures",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 3
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "parent_intent_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "parent_intent_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 7
        },
        {
          "active": true,
          "name": "plan",
          "req": true,
          "type": "`$ANY`",
          "index$": 8
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 9
        }
      ],
      "name": "dependents_management_intent",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "policy_amendment_intent_id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "policy_id",
                    "orig": "policy_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 1
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent",
              "parts": [
                "policies",
                "{policy_id}",
                "policy_amendment_intents",
                "{policy_amendment_intent_id}",
                "create_dependents_management_intent"
              ],
              "rename": {
                "param": {
                  "id": "policy_amendment_intent_id"
                }
              },
              "select": {
                "exist": [
                  "policy_amendment_intent_id",
                  "policy_id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            },
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "enrolment_intent_id",
                    "orig": "enrolment_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/enrolment_intents/{enrolment_intent_id}/create_dependents_management_intent",
              "parts": [
                "enrolment_intents",
                "{enrolment_intent_id}",
                "create_dependents_management_intent"
              ],
              "select": {
                "exist": [
                  "enrolment_intent_id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 1
            },
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "dependents_management_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/dependents_management_intents/{dependents_management_intent_id}/cancel",
              "parts": [
                "dependents_management_intents",
                "{id}",
                "cancel"
              ],
              "rename": {
                "param": {
                  "dependents_management_intent_id": "id"
                }
              },
              "select": {
                "$action": "cancel",
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 2
            },
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "dependents_management_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/dependents_management_intents/{dependents_management_intent_id}/confirm",
              "parts": [
                "dependents_management_intents",
                "{id}",
                "confirm"
              ],
              "rename": {
                "param": {
                  "dependents_management_intent_id": "id"
                }
              },
              "select": {
                "$action": "confirm",
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 3
            }
          ],
          "key$": "create"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "dependents_management_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/dependents_management_intents/{dependents_management_intent_id}",
              "parts": [
                "dependents_management_intents",
                "{id}"
              ],
              "rename": {
                "param": {
                  "dependents_management_intent_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": [
          [
            "enrolment_intent"
          ],
          [
            "policy",
            "policy_amendment_intent"
          ]
        ]
      }
    },
    "eligibility_check": {
      "fields": [
        {
          "active": true,
          "name": "eligibility_status",
          "req": true,
          "type": "`$ANY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "plan",
          "req": true,
          "type": "`$ANY`",
          "index$": 2
        },
        {
          "active": true,
          "name": "provider",
          "req": true,
          "type": "`$ANY`",
          "index$": 3
        },
        {
          "active": true,
          "name": "reasons",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 4
        }
      ],
      "name": "eligibility_check",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "group_id",
                    "orig": "group_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/groups/{group_id}/eligibility_check",
              "parts": [
                "groups",
                "{group_id}",
                "eligibility_check"
              ],
              "select": {
                "exist": [
                  "group_id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        }
      },
      "relations": {
        "ancestors": [
          [
            "group"
          ]
        ]
      }
    },
    "employee": {
      "fields": [
        {
          "active": true,
          "name": "bank_account",
          "req": false,
          "type": "`$NULL`",
          "index$": 0
        },
        {
          "active": true,
          "name": "date_of_birth",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "earliest_benefits_start_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 2
        },
        {
          "active": true,
          "name": "email",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "employer_id",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "external_customer_id",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 5
        },
        {
          "active": true,
          "name": "first_name",
          "req": true,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "home_address",
          "req": false,
          "type": "`$NULL`",
          "index$": 7
        },
        {
          "active": true,
          "name": "id",
          "req": false,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "last_name",
          "req": true,
          "type": "`$STRING`",
          "index$": 9
        },
        {
          "active": true,
          "name": "metadata",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$OBJECT`"
            ]
          ],
          "index$": 10
        },
        {
          "active": true,
          "name": "national_tax_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 11
        },
        {
          "active": true,
          "name": "nationality",
          "req": false,
          "type": "`$NULL`",
          "index$": 12
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 13
        },
        {
          "active": true,
          "name": "offboard_on",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 14
        },
        {
          "active": true,
          "name": "phone_number",
          "req": true,
          "type": "`$STRING`",
          "index$": 15
        },
        {
          "active": true,
          "name": "platform_id",
          "req": false,
          "type": "`$STRING`",
          "index$": 16
        },
        {
          "active": true,
          "name": "sex_at_birth",
          "req": true,
          "type": "`$ANY`",
          "index$": 17
        },
        {
          "active": true,
          "name": "start_on",
          "req": false,
          "type": "`$STRING`",
          "index$": 18
        },
        {
          "active": true,
          "name": "status",
          "req": false,
          "type": "`$ANY`",
          "index$": 19
        }
      ],
      "name": "employee",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "idempotency_key",
                    "orig": "idempotency_key",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "employee_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/employees/{employee_id}/offboard",
              "parts": [
                "employees",
                "{id}",
                "offboard"
              ],
              "rename": {
                "param": {
                  "employee_id": "id"
                }
              },
              "select": {
                "$action": "offboard",
                "exist": [
                  "id",
                  "idempotency_key",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            },
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "idempotency_key",
                    "orig": "idempotency_key",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "employee_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/employees/{employee_id}/offboard/cancel",
              "parts": [
                "employees",
                "{id}",
                "offboard",
                "cancel"
              ],
              "rename": {
                "param": {
                  "employee_id": "id"
                }
              },
              "select": {
                "$action": "offboard_cancel",
                "exist": [
                  "id",
                  "idempotency_key",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 1
            },
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "idempotency_key",
                    "orig": "idempotency_key",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/employees",
              "parts": [
                "employees"
              ],
              "select": {
                "exist": [
                  "idempotency_key",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 2
            }
          ],
          "key$": "create"
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "employer_id",
                    "orig": "employer_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "external_customer_id",
                    "orig": "external_customer_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "metadata_id",
                    "orig": "metadata_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/employees",
              "parts": [
                "employees"
              ],
              "select": {
                "exist": [
                  "employer_id",
                  "external_customer_id",
                  "filter",
                  "metadata_id",
                  "page",
                  "page_size",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "employee_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/employees/{employee_id}",
              "parts": [
                "employees",
                "{id}"
              ],
              "rename": {
                "param": {
                  "employee_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "employee_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/employees/{employee_id}",
              "parts": [
                "employees",
                "{id}"
              ],
              "rename": {
                "param": {
                  "employee_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "update"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "employee_health_insurance_offer": {
      "fields": [
        {
          "active": true,
          "name": "coverage_level",
          "req": true,
          "type": "`$ANY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "employee_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "employer_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "external_customer_id",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 3
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "required_action",
          "req": false,
          "type": "`$NULL`",
          "index$": 6
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 7
        }
      ],
      "name": "employee_health_insurance_offer",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "employee_id",
                    "orig": "employee_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": "eeho_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "employee_offer_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 1
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/employees/{employee_id}/health_insurance/offers/{employee_offer_id}",
              "parts": [
                "employees",
                "{employee_id}",
                "health_insurance",
                "offers",
                "{id}"
              ],
              "rename": {
                "param": {
                  "employee_offer_id": "id"
                }
              },
              "select": {
                "exist": [
                  "employee_id",
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": [
          [
            "employee"
          ]
        ]
      }
    },
    "employee_health_insurance_offer_response_paged_list": {
      "fields": [
        {
          "active": true,
          "name": "coverage_level",
          "req": true,
          "type": "`$ANY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "employee_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "employer_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "external_customer_id",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 3
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "required_action",
          "req": false,
          "type": "`$NULL`",
          "index$": 6
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 7
        }
      ],
      "name": "employee_health_insurance_offer_response_paged_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "employee_id",
                    "orig": "employee_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/employees/{employee_id}/health_insurance/offers",
              "parts": [
                "employees",
                "{employee_id}",
                "health_insurance",
                "offers"
              ],
              "select": {
                "exist": [
                  "employee_id",
                  "page",
                  "page_size",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": [
          [
            "employee"
          ]
        ]
      }
    },
    "employee_health_insurance_policy": {
      "fields": [
        {
          "active": true,
          "name": "cancellation_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 0
        },
        {
          "active": true,
          "name": "coverage_level",
          "req": true,
          "type": "`$ANY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "employee_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "employer_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "end_date",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "enrolled_dependants_count",
          "req": true,
          "type": "`$INTEGER`",
          "index$": 5
        },
        {
          "active": true,
          "name": "enrolment_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 6
        },
        {
          "active": true,
          "name": "estimated_gross_premium",
          "req": true,
          "type": "`$ANY`",
          "index$": 7
        },
        {
          "active": true,
          "name": "external_customer_id",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 8
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 9
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 10
        },
        {
          "active": true,
          "name": "opt_out_deadline_date",
          "req": true,
          "type": "`$STRING`",
          "index$": 11
        },
        {
          "active": true,
          "name": "policy_number",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 12
        },
        {
          "active": true,
          "name": "renewal",
          "req": true,
          "type": "`$ANY`",
          "index$": 13
        },
        {
          "active": true,
          "name": "start_date",
          "req": true,
          "type": "`$STRING`",
          "index$": 14
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 15
        }
      ],
      "name": "employee_health_insurance_policy",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "employee_id",
                    "orig": "employee_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": "eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "employee_policy_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 1
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/employees/{employee_id}/health_insurance/policies/{employee_policy_id}",
              "parts": [
                "employees",
                "{employee_id}",
                "health_insurance",
                "policies",
                "{id}"
              ],
              "rename": {
                "param": {
                  "employee_policy_id": "id"
                }
              },
              "select": {
                "exist": [
                  "employee_id",
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": [
          [
            "employee"
          ]
        ]
      }
    },
    "employee_health_insurance_policy_response_paged_list": {
      "fields": [
        {
          "active": true,
          "name": "cancellation_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 0
        },
        {
          "active": true,
          "name": "coverage_level",
          "req": true,
          "type": "`$ANY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "employee_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "employer_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "end_date",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "enrolled_dependants_count",
          "req": true,
          "type": "`$INTEGER`",
          "index$": 5
        },
        {
          "active": true,
          "name": "enrolment_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 6
        },
        {
          "active": true,
          "name": "estimated_gross_premium",
          "req": true,
          "type": "`$ANY`",
          "index$": 7
        },
        {
          "active": true,
          "name": "external_customer_id",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 8
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 9
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 10
        },
        {
          "active": true,
          "name": "opt_out_deadline_date",
          "req": true,
          "type": "`$STRING`",
          "index$": 11
        },
        {
          "active": true,
          "name": "policy_number",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 12
        },
        {
          "active": true,
          "name": "renewal",
          "req": true,
          "type": "`$ANY`",
          "index$": 13
        },
        {
          "active": true,
          "name": "start_date",
          "req": true,
          "type": "`$STRING`",
          "index$": 14
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 15
        }
      ],
      "name": "employee_health_insurance_policy_response_paged_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "employee_id",
                    "orig": "employee_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/employees/{employee_id}/health_insurance/policies",
              "parts": [
                "employees",
                "{employee_id}",
                "health_insurance",
                "policies"
              ],
              "select": {
                "exist": [
                  "employee_id",
                  "page",
                  "page_size",
                  "status",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": [
          [
            "employee"
          ]
        ]
      }
    },
    "employer": {
      "fields": [
        {
          "active": true,
          "name": "contact",
          "req": true,
          "type": "`$ANY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "earliest_benefits_start_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 1
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "legal_address",
          "req": true,
          "type": "`$ANY`",
          "index$": 3
        },
        {
          "active": true,
          "name": "legal_name",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "metadata",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$OBJECT`"
            ]
          ],
          "index$": 5
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "offboard_on",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 7
        },
        {
          "active": true,
          "name": "platform_id",
          "req": false,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "registration_number",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 9
        },
        {
          "active": true,
          "name": "status",
          "req": false,
          "type": "`$ANY`",
          "index$": 10
        }
      ],
      "name": "employer",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "idempotency_key",
                    "orig": "idempotency_key",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "employer_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/employers/{employer_id}/offboard",
              "parts": [
                "employers",
                "{id}",
                "offboard"
              ],
              "rename": {
                "param": {
                  "employer_id": "id"
                }
              },
              "select": {
                "$action": "offboard",
                "exist": [
                  "id",
                  "idempotency_key",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            },
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "idempotency_key",
                    "orig": "idempotency_key",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/employers",
              "parts": [
                "employers"
              ],
              "select": {
                "exist": [
                  "idempotency_key",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 1
            }
          ],
          "key$": "create"
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "filter",
                    "orig": "filter",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/employers",
              "parts": [
                "employers"
              ],
              "select": {
                "exist": [
                  "filter",
                  "page",
                  "page_size",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "employer_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/employers/{employer_id}",
              "parts": [
                "employers",
                "{id}"
              ],
              "rename": {
                "param": {
                  "employer_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "employer_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/employers/{employer_id}",
              "parts": [
                "employers",
                "{id}"
              ],
              "rename": {
                "param": {
                  "employer_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "update"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "employer_health_insurance_policy": {
      "fields": [
        {
          "active": true,
          "name": "cancellation_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 0
        },
        {
          "active": true,
          "name": "coverage_levels",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "employer_cancellation_period_length",
          "req": true,
          "type": "`$INTEGER`",
          "index$": 2
        },
        {
          "active": true,
          "name": "employer_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "end_date",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "enrolment_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 5
        },
        {
          "active": true,
          "name": "group_policy_number",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 6
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "renewal",
          "req": true,
          "type": "`$ANY`",
          "index$": 9
        },
        {
          "active": true,
          "name": "start_date",
          "req": true,
          "type": "`$STRING`",
          "index$": 10
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 11
        }
      ],
      "name": "employer_health_insurance_policy",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "employer_id",
                    "orig": "employer_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": "erhp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "employer_policy_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 1
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/employers/{employer_id}/health_insurance/policies/{employer_policy_id}",
              "parts": [
                "employers",
                "{employer_id}",
                "health_insurance",
                "policies",
                "{id}"
              ],
              "rename": {
                "param": {
                  "employer_policy_id": "id"
                }
              },
              "select": {
                "exist": [
                  "employer_id",
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": [
          [
            "employer"
          ]
        ]
      }
    },
    "employer_health_insurance_policy_response_paged_list": {
      "fields": [
        {
          "active": true,
          "name": "cancellation_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 0
        },
        {
          "active": true,
          "name": "coverage_levels",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "employer_cancellation_period_length",
          "req": true,
          "type": "`$INTEGER`",
          "index$": 2
        },
        {
          "active": true,
          "name": "employer_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "end_date",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "enrolment_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 5
        },
        {
          "active": true,
          "name": "group_policy_number",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 6
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "renewal",
          "req": true,
          "type": "`$ANY`",
          "index$": 9
        },
        {
          "active": true,
          "name": "start_date",
          "req": true,
          "type": "`$STRING`",
          "index$": 10
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 11
        }
      ],
      "name": "employer_health_insurance_policy_response_paged_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "employer_id",
                    "orig": "employer_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/employers/{employer_id}/health_insurance/policies",
              "parts": [
                "employers",
                "{employer_id}",
                "health_insurance",
                "policies"
              ],
              "select": {
                "exist": [
                  "employer_id",
                  "page",
                  "page_size",
                  "status",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": [
          [
            "employer"
          ]
        ]
      }
    },
    "employer_health_insurance_quote": {
      "fields": [
        {
          "active": true,
          "name": "coverage_levels",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "employer_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "quoted_at",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "required_action",
          "req": false,
          "type": "`$NULL`",
          "index$": 5
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 6
        }
      ],
      "name": "employer_health_insurance_quote",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "employer_id",
                    "orig": "employer_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": "erhq_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "employer_quote_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 1
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/employers/{employer_id}/health_insurance/quotes/{employer_quote_id}",
              "parts": [
                "employers",
                "{employer_id}",
                "health_insurance",
                "quotes",
                "{id}"
              ],
              "rename": {
                "param": {
                  "employer_quote_id": "id"
                }
              },
              "select": {
                "exist": [
                  "employer_id",
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": [
          [
            "employer"
          ]
        ]
      }
    },
    "employer_health_insurance_quote_response_paged_list": {
      "fields": [
        {
          "active": true,
          "name": "coverage_levels",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "employer_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "quoted_at",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "required_action",
          "req": false,
          "type": "`$NULL`",
          "index$": 5
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 6
        }
      ],
      "name": "employer_health_insurance_quote_response_paged_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "employer_id",
                    "orig": "employer_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/employers/{employer_id}/health_insurance/quotes",
              "parts": [
                "employers",
                "{employer_id}",
                "health_insurance",
                "quotes"
              ],
              "select": {
                "exist": [
                  "employer_id",
                  "page",
                  "page_size",
                  "status",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": [
          [
            "employer"
          ]
        ]
      }
    },
    "enrolment_intent": {
      "fields": [
        {
          "active": true,
          "name": "action_required",
          "req": false,
          "type": "`$NULL`",
          "index$": 0
        },
        {
          "active": true,
          "name": "disclosures",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "employee_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "force_confirmation",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 3
        },
        {
          "active": true,
          "name": "group_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "ineligibility_reason",
          "req": false,
          "type": "`$NULL`",
          "index$": 6
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "pending_confirmation",
          "req": false,
          "type": "`$NULL`",
          "index$": 8
        },
        {
          "active": true,
          "name": "policy_configuration",
          "req": false,
          "type": "`$NULL`",
          "index$": 9
        },
        {
          "active": true,
          "name": "policy_enrolments",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 10
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 11
        }
      ],
      "name": "enrolment_intent",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "enrolment_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/enrolment_intents/{enrolment_intent_id}/confirm",
              "parts": [
                "enrolment_intents",
                "{id}",
                "confirm"
              ],
              "rename": {
                "param": {
                  "enrolment_intent_id": "id"
                }
              },
              "select": {
                "$action": "confirm",
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            },
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "enrolment_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/enrolment_intents/{enrolment_intent_id}/coverage-selections",
              "parts": [
                "enrolment_intents",
                "{id}",
                "coverage-selections"
              ],
              "rename": {
                "param": {
                  "enrolment_intent_id": "id"
                }
              },
              "select": {
                "$action": "coverage_selection",
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 1
            },
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "enrolment_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/enrolment_intents/{enrolment_intent_id}/reject",
              "parts": [
                "enrolment_intents",
                "{id}",
                "reject"
              ],
              "rename": {
                "param": {
                  "enrolment_intent_id": "id"
                }
              },
              "select": {
                "$action": "reject",
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 2
            },
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "idempotency_key",
                    "orig": "idempotency_key",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/enrolment_intents",
              "parts": [
                "enrolment_intents"
              ],
              "select": {
                "exist": [
                  "idempotency_key",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 3
            }
          ],
          "key$": "create"
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "employee_id",
                    "orig": "employee_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "group_id",
                    "orig": "group_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/enrolment_intents",
              "parts": [
                "enrolment_intents"
              ],
              "select": {
                "exist": [
                  "employee_id",
                  "group_id",
                  "page",
                  "page_size",
                  "status",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "enrolment_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/enrolment_intents/{enrolment_intent_id}",
              "parts": [
                "enrolment_intents",
                "{id}"
              ],
              "rename": {
                "param": {
                  "enrolment_intent_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "enrolment_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/enrolment_intents/{enrolment_intent_id}",
              "parts": [
                "enrolment_intents",
                "{id}"
              ],
              "rename": {
                "param": {
                  "enrolment_intent_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "update"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "enrolment_intent_requirement_response_paged_list": {
      "fields": [
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "is_fulfilled",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 1
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "object_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "object_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 4
        },
        {
          "active": true,
          "name": "requirement_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 5
        }
      ],
      "name": "enrolment_intent_requirement_response_paged_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "enrolment_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "object_id",
                    "orig": "object_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "object_type",
                    "orig": "object_type",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/enrolment_intents/{enrolment_intent_id}/requirements",
              "parts": [
                "enrolment_intents",
                "{id}",
                "requirements"
              ],
              "rename": {
                "param": {
                  "enrolment_intent_id": "id"
                }
              },
              "select": {
                "$action": "requirements",
                "exist": [
                  "id",
                  "object_id",
                  "object_type",
                  "page",
                  "page_size",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "event": {
      "fields": [
        {
          "active": true,
          "name": "api_version",
          "req": false,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "created",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "data",
          "req": true,
          "type": "`$NULL`",
          "index$": 2
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "options",
          "req": false,
          "type": "`$NULL`",
          "index$": 4
        },
        {
          "active": true,
          "name": "parent",
          "req": false,
          "type": "`$NULL`",
          "index$": 5
        },
        {
          "active": true,
          "name": "platform_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "root",
          "req": false,
          "type": "`$ANY`",
          "index$": 7
        },
        {
          "active": true,
          "name": "type",
          "req": true,
          "type": "`$STRING`",
          "index$": 8
        }
      ],
      "name": "event",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "created_after",
                    "orig": "created_after",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "order_direction",
                    "orig": "order_direction",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "version",
                    "orig": "version",
                    "reqd": false,
                    "type": "`$ANY`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/events",
              "parts": [
                "events"
              ],
              "select": {
                "exist": [
                  "created_after",
                  "order_direction",
                  "page",
                  "page_size",
                  "version",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "event_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/events/{event_id}",
              "parts": [
                "events",
                "{id}"
              ],
              "rename": {
                "param": {
                  "event_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.data`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "group": {
      "fields": [
        {
          "active": true,
          "name": "description",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 0
        },
        {
          "active": true,
          "name": "employer_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "enrolment_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 2
        },
        {
          "active": true,
          "name": "group_policy_ids",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 3
        },
        {
          "active": true,
          "name": "group_policy_intent_ids",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 4
        },
        {
          "active": true,
          "name": "group_quote_intent_ids",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 5
        },
        {
          "active": true,
          "name": "group_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 6
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "name",
          "req": true,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 9
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 10
        }
      ],
      "name": "group",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/groups",
              "parts": [
                "groups"
              ],
              "select": {
                "exist": [
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "employer_id",
                    "orig": "employer_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/groups",
              "parts": [
                "groups"
              ],
              "select": {
                "exist": [
                  "employer_id",
                  "page",
                  "page_size",
                  "status",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "group_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/groups/{group_id}",
              "parts": [
                "groups",
                "{id}"
              ],
              "rename": {
                "param": {
                  "group_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        },
        "update": {
          "input": "data",
          "name": "update",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "group_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "PUT",
              "orig": "/groups/{group_id}",
              "parts": [
                "groups",
                "{id}"
              ],
              "rename": {
                "param": {
                  "group_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "update"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "group_employee": {
      "fields": [
        {
          "active": true,
          "name": "desired_policy_start_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 0
        },
        {
          "active": true,
          "name": "eligibility_status",
          "req": true,
          "type": "`$ANY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "enrolment_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 2
        },
        {
          "active": true,
          "name": "enrolment_status",
          "req": true,
          "type": "`$ANY`",
          "index$": 3
        },
        {
          "active": true,
          "name": "enrolments",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 4
        },
        {
          "active": true,
          "name": "group_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "policies",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 8
        },
        {
          "active": true,
          "name": "scheduled_group_transitions",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 9
        }
      ],
      "name": "group_employee",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "idempotency_key",
                    "orig": "idempotency_key",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "group_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/groups/{group_id}/employees",
              "parts": [
                "groups",
                "{id}",
                "employees"
              ],
              "rename": {
                "param": {
                  "group_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "idempotency_key",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "group_employee_response_paged_list": {
      "fields": [
        {
          "active": true,
          "name": "desired_policy_start_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 0
        },
        {
          "active": true,
          "name": "eligibility_status",
          "req": true,
          "type": "`$ANY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "enrolment_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 2
        },
        {
          "active": true,
          "name": "enrolment_status",
          "req": true,
          "type": "`$ANY`",
          "index$": 3
        },
        {
          "active": true,
          "name": "enrolments",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 4
        },
        {
          "active": true,
          "name": "group_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "policies",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 8
        },
        {
          "active": true,
          "name": "scheduled_group_transitions",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 9
        }
      ],
      "name": "group_employee_response_paged_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "group_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "employee_id",
                    "orig": "employee_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/groups/{group_id}/employees",
              "parts": [
                "groups",
                "{id}",
                "employees"
              ],
              "rename": {
                "param": {
                  "group_id": "id"
                }
              },
              "select": {
                "$action": "employees",
                "exist": [
                  "employee_id",
                  "id",
                  "page",
                  "page_size",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "group_policy": {
      "fields": [
        {
          "active": true,
          "name": "cancellation_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 0
        },
        {
          "active": true,
          "name": "disclosures",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "employer_id",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "end_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 3
        },
        {
          "active": true,
          "name": "group_id",
          "req": false,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "health_insurance",
          "req": false,
          "type": "`$NULL`",
          "index$": 5
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "plan",
          "req": true,
          "type": "`$ANY`",
          "index$": 8
        },
        {
          "active": true,
          "name": "provider",
          "req": true,
          "type": "`$ANY`",
          "index$": 9
        },
        {
          "active": true,
          "name": "start_date",
          "req": true,
          "type": "`$STRING`",
          "index$": 10
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 11
        },
        {
          "active": true,
          "name": "type",
          "req": true,
          "type": "`$ANY`",
          "index$": 12
        }
      ],
      "name": "group_policy",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "employer_id",
                    "orig": "employer_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "group_id",
                    "orig": "group_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/group_policies",
              "parts": [
                "group_policies"
              ],
              "select": {
                "exist": [
                  "employer_id",
                  "group_id",
                  "page",
                  "page_size",
                  "status",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "group_policy_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/group_policies/{group_policy_id}",
              "parts": [
                "group_policies",
                "{id}"
              ],
              "rename": {
                "param": {
                  "group_policy_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "group_policy_intent": {
      "fields": [
        {
          "active": true,
          "name": "action_required",
          "req": false,
          "type": "`$NULL`",
          "index$": 0
        },
        {
          "active": true,
          "name": "cost_sharing",
          "req": false,
          "type": "`$NULL`",
          "index$": 1
        },
        {
          "active": true,
          "name": "disclosures",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 2
        },
        {
          "active": true,
          "name": "due_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 3
        },
        {
          "active": true,
          "name": "group_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "plan_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "quote_intent_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 9
        }
      ],
      "name": "group_policy_intent",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/group_policy_intents",
              "parts": [
                "group_policy_intents"
              ],
              "select": {
                "exist": [
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "group_id",
                    "orig": "group_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "plan_id",
                    "orig": "plan_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/group_policy_intents",
              "parts": [
                "group_policy_intents"
              ],
              "select": {
                "exist": [
                  "group_id",
                  "page",
                  "page_size",
                  "plan_id",
                  "status",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "group_policy_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/group_policy_intents/{group_policy_intent_id}",
              "parts": [
                "group_policy_intents",
                "{id}"
              ],
              "rename": {
                "param": {
                  "group_policy_intent_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "group_policy_intent_requirement_response_paged_list": {
      "fields": [
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "is_fulfilled",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 1
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "object_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "object_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 4
        },
        {
          "active": true,
          "name": "requirement_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 5
        }
      ],
      "name": "group_policy_intent_requirement_response_paged_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "group_policy_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "object_id",
                    "orig": "object_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "object_type",
                    "orig": "object_type",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/group_policy_intents/{group_policy_intent_id}/requirements",
              "parts": [
                "group_policy_intents",
                "{id}",
                "requirements"
              ],
              "rename": {
                "param": {
                  "group_policy_intent_id": "id"
                }
              },
              "select": {
                "$action": "requirements",
                "exist": [
                  "id",
                  "object_id",
                  "object_type",
                  "page",
                  "page_size",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "group_quote": {
      "fields": [
        {
          "active": true,
          "name": "family_type",
          "req": false,
          "type": "`$NULL`",
          "index$": 0
        },
        {
          "active": true,
          "name": "member_count",
          "req": false,
          "type": "`$NULL`",
          "index$": 1
        },
        {
          "active": true,
          "name": "member_selection",
          "req": false,
          "type": "`$NULL`",
          "index$": 2
        },
        {
          "active": true,
          "name": "percentage",
          "req": false,
          "type": "`$NULL`",
          "index$": 3
        },
        {
          "active": true,
          "name": "type",
          "req": true,
          "type": "`$ANY`",
          "index$": 4
        }
      ],
      "name": "group_quote",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "group_quote_intent_id",
                    "orig": "group_quote_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/group_quote_intents/{group_quote_intent_id}/quote",
              "parts": [
                "group_quote_intents",
                "{group_quote_intent_id}",
                "quote"
              ],
              "select": {
                "exist": [
                  "group_quote_intent_id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.cost_sharing`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": [
          [
            "group_quote_intent"
          ]
        ]
      }
    },
    "group_quote_intent": {
      "fields": [
        {
          "active": true,
          "name": "action_required",
          "req": false,
          "type": "`$NULL`",
          "index$": 0
        },
        {
          "active": true,
          "name": "consent_links",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "cost_sharing",
          "req": false,
          "type": "`$NULL`",
          "index$": 2
        },
        {
          "active": true,
          "name": "disclosures",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 3
        },
        {
          "active": true,
          "name": "expected_start_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 4
        },
        {
          "active": true,
          "name": "group_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "plan_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 9
        }
      ],
      "name": "group_quote_intent",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "group_quote_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/group_quote_intents/{group_quote_intent_id}/reject",
              "parts": [
                "group_quote_intents",
                "{id}",
                "reject"
              ],
              "rename": {
                "param": {
                  "group_quote_intent_id": "id"
                }
              },
              "select": {
                "$action": "reject",
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            },
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/group_quote_intents",
              "parts": [
                "group_quote_intents"
              ],
              "select": {
                "exist": [
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 1
            }
          ],
          "key$": "create"
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "group_id",
                    "orig": "group_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "plan_id",
                    "orig": "plan_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/group_quote_intents",
              "parts": [
                "group_quote_intents"
              ],
              "select": {
                "exist": [
                  "group_id",
                  "page",
                  "page_size",
                  "plan_id",
                  "status",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "group_quote_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/group_quote_intents/{group_quote_intent_id}",
              "parts": [
                "group_quote_intents",
                "{id}"
              ],
              "rename": {
                "param": {
                  "group_quote_intent_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "group_quote_intent_requirement_response_paged_list": {
      "fields": [
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "is_fulfilled",
          "req": true,
          "type": "`$BOOLEAN`",
          "index$": 1
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "object_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "object_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 4
        },
        {
          "active": true,
          "name": "requirement_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 5
        }
      ],
      "name": "group_quote_intent_requirement_response_paged_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "group_quote_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "object_id",
                    "orig": "object_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "object_type",
                    "orig": "object_type",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/group_quote_intents/{group_quote_intent_id}/requirements",
              "parts": [
                "group_quote_intents",
                "{id}",
                "requirements"
              ],
              "rename": {
                "param": {
                  "group_quote_intent_id": "id"
                }
              },
              "select": {
                "$action": "requirements",
                "exist": [
                  "id",
                  "object_id",
                  "object_type",
                  "page",
                  "page_size",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "plan": {
      "fields": [
        {
          "active": true,
          "name": "available_from",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "available_to",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 1
        },
        {
          "active": true,
          "name": "country",
          "req": true,
          "type": "`$ANY`",
          "index$": 2
        },
        {
          "active": true,
          "name": "coverage_options",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$ARRAY`"
            ]
          ],
          "index$": 3
        },
        {
          "active": true,
          "name": "description",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "disclosures",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 5
        },
        {
          "active": true,
          "name": "documents",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 6
        },
        {
          "active": true,
          "name": "eligible_count",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$INTEGER`"
            ]
          ],
          "index$": 7
        },
        {
          "active": true,
          "name": "employee_eligibility_criteria",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 8
        },
        {
          "active": true,
          "name": "employer_eligibility_criteria",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 9
        },
        {
          "active": true,
          "name": "health_insurance",
          "req": false,
          "type": "`$NULL`",
          "index$": 10
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 11
        },
        {
          "active": true,
          "name": "ineligible_count",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$INTEGER`"
            ]
          ],
          "index$": 12
        },
        {
          "active": true,
          "name": "name",
          "req": true,
          "type": "`$STRING`",
          "index$": 13
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 14
        },
        {
          "active": true,
          "name": "provider",
          "req": true,
          "type": "`$ANY`",
          "index$": 15
        },
        {
          "active": true,
          "name": "total_count",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$INTEGER`"
            ]
          ],
          "index$": 16
        },
        {
          "active": true,
          "name": "type",
          "req": true,
          "type": "`$ANY`",
          "index$": 17
        }
      ],
      "name": "plan",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "available_on",
                    "orig": "available_on",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "country",
                    "orig": "country",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "group_id",
                    "orig": "group_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "provider_id",
                    "orig": "provider_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "sort_by",
                    "orig": "sort_by",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "sort_dir",
                    "orig": "sort_dir",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "type",
                    "orig": "type",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/plans",
              "parts": [
                "plans"
              ],
              "select": {
                "exist": [
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
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "plan_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "group_id",
                    "orig": "group_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "start_date",
                    "orig": "start_date",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/plans/{plan_id}",
              "parts": [
                "plans",
                "{id}"
              ],
              "rename": {
                "param": {
                  "plan_id": "id"
                }
              },
              "select": {
                "exist": [
                  "group_id",
                  "id",
                  "start_date",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "policy": {
      "fields": [
        {
          "active": true,
          "name": "bundling_type",
          "req": true,
          "type": "`$ANY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "cancellation_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 1
        },
        {
          "active": true,
          "name": "disclosures",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 2
        },
        {
          "active": true,
          "name": "employee_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "end_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 4
        },
        {
          "active": true,
          "name": "group_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "group_policy_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "health_insurance",
          "req": false,
          "type": "`$NULL`",
          "index$": 7
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 9
        },
        {
          "active": true,
          "name": "plan",
          "req": true,
          "type": "`$ANY`",
          "index$": 10
        },
        {
          "active": true,
          "name": "provider",
          "req": true,
          "type": "`$ANY`",
          "index$": 11
        },
        {
          "active": true,
          "name": "start_date",
          "req": true,
          "type": "`$STRING`",
          "index$": 12
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 13
        },
        {
          "active": true,
          "name": "type",
          "req": true,
          "type": "`$ANY`",
          "index$": 14
        }
      ],
      "name": "policy",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "employee_id",
                    "orig": "employee_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "group_id",
                    "orig": "group_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "group_policy_id",
                    "orig": "group_policy_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/policies",
              "parts": [
                "policies"
              ],
              "select": {
                "exist": [
                  "employee_id",
                  "group_id",
                  "group_policy_id",
                  "page",
                  "page_size",
                  "status",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "policy_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/policies/{policy_id}",
              "parts": [
                "policies",
                "{id}"
              ],
              "rename": {
                "param": {
                  "policy_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "policy_amendment_intent": {
      "fields": [
        {
          "active": true,
          "name": "amendment_reason",
          "req": true,
          "type": "`$ANY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "disclosures",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 1
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "pending_confirmation",
          "req": false,
          "type": "`$NULL`",
          "index$": 4
        },
        {
          "active": true,
          "name": "policy_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "processing_error",
          "req": false,
          "type": "`$NULL`",
          "index$": 6
        },
        {
          "active": true,
          "name": "requested_changes",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 7
        },
        {
          "active": true,
          "name": "required_action",
          "req": false,
          "type": "`$NULL`",
          "index$": 8
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 9
        }
      ],
      "name": "policy_amendment_intent",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "policy_id",
                    "orig": "policy_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 1
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/policies/{policy_id}/policy_amendment_intents/{id}/cancel",
              "parts": [
                "policies",
                "{policy_id}",
                "policy_amendment_intents",
                "{id}",
                "cancel"
              ],
              "select": {
                "$action": "cancel",
                "exist": [
                  "id",
                  "policy_id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            },
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "policy_amendment_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "policy_id",
                    "orig": "policy_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 1
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}/confirm",
              "parts": [
                "policies",
                "{policy_id}",
                "policy_amendment_intents",
                "{id}",
                "confirm"
              ],
              "rename": {
                "param": {
                  "policy_amendment_intent_id": "id"
                }
              },
              "select": {
                "$action": "confirm",
                "exist": [
                  "id",
                  "policy_id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 1
            },
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "policy_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/policies/{policy_id}/policy_amendment_intents",
              "parts": [
                "policies",
                "{id}",
                "policy_amendment_intents"
              ],
              "rename": {
                "param": {
                  "policy_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 2
            }
          ],
          "key$": "create"
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "policy_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/policies/{policy_id}/policy_amendment_intents",
              "parts": [
                "policies",
                "{id}",
                "policy_amendment_intents"
              ],
              "rename": {
                "param": {
                  "policy_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "page",
                  "page_size",
                  "status",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "policy_amendment_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  },
                  {
                    "active": true,
                    "example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "policy_id",
                    "orig": "policy_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 1
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}",
              "parts": [
                "policies",
                "{policy_id}",
                "policy_amendment_intents",
                "{id}"
              ],
              "rename": {
                "param": {
                  "policy_amendment_intent_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "policy_id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": [
          [
            "policy"
          ]
        ]
      }
    },
    "policy_import_intent": {
      "fields": [
        {
          "active": true,
          "name": "associated_persons",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "employee_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "group_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "member_number",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "policy_end_date",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 6
        },
        {
          "active": true,
          "name": "policy_start_date",
          "req": true,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "provider_policy_number",
          "req": true,
          "type": "`$STRING`",
          "index$": 8
        },
        {
          "active": true,
          "name": "status",
          "req": true,
          "type": "`$ANY`",
          "index$": 9
        }
      ],
      "name": "policy_import_intent",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/policy_import_intents",
              "parts": [
                "policy_import_intents"
              ],
              "select": {
                "exist": [
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        },
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "employee_id",
                    "orig": "employee_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "query",
                    "name": "group_id",
                    "orig": "group_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "status",
                    "orig": "status",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/policy_import_intents",
              "parts": [
                "policy_import_intents"
              ],
              "select": {
                "exist": [
                  "employee_id",
                  "group_id",
                  "page",
                  "page_size",
                  "status",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "pii_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "policy_import_intent_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/policy_import_intents/{policy_import_intent_id}",
              "parts": [
                "policy_import_intents",
                "{id}"
              ],
              "rename": {
                "param": {
                  "policy_import_intent_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "provider": {
      "fields": [
        {
          "active": true,
          "name": "description",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "employer_platform_url",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 1
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "kota_hub_url",
          "req": false,
          "type": [
            "`$ONE`",
            [
              "`$NULL`",
              "`$STRING`"
            ]
          ],
          "index$": 3
        },
        {
          "active": true,
          "name": "logo_url",
          "req": true,
          "type": "`$STRING`",
          "index$": 4
        },
        {
          "active": true,
          "name": "name",
          "req": true,
          "type": "`$STRING`",
          "index$": 5
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 6
        },
        {
          "active": true,
          "name": "support_phone",
          "req": true,
          "type": "`$STRING`",
          "index$": 7
        },
        {
          "active": true,
          "name": "supported_countries",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 8
        },
        {
          "active": true,
          "name": "website_url",
          "req": true,
          "type": "`$STRING`",
          "index$": 9
        }
      ],
      "name": "provider",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "country",
                    "orig": "country",
                    "reqd": false,
                    "type": "`$ANY`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/providers",
              "parts": [
                "providers"
              ],
              "select": {
                "exist": [
                  "country",
                  "page",
                  "page_size",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "provider_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/providers/{provider_id}",
              "parts": [
                "providers",
                "{id}"
              ],
              "rename": {
                "param": {
                  "provider_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "replay": {
      "fields": [
        {
          "active": true,
          "name": "deliveries",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 0
        },
        {
          "active": true,
          "name": "event_id",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        }
      ],
      "name": "replay",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "event_id",
                    "orig": "event_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "POST",
              "orig": "/events/{event_id}/replay",
              "parts": [
                "events",
                "{event_id}",
                "replay"
              ],
              "select": {
                "exist": [
                  "event_id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "create"
        }
      },
      "relations": {
        "ancestors": [
          [
            "event"
          ]
        ]
      }
    },
    "webhook_endpoint": {
      "fields": [
        {
          "active": true,
          "name": "created_at",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "endpoint_url",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "subscribed_events",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 4
        }
      ],
      "name": "webhook_endpoint",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "params": [
                  {
                    "active": true,
                    "example": "whe_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "kind": "param",
                    "name": "id",
                    "orig": "webhook_endpoint_id",
                    "reqd": true,
                    "type": "`$STRING`",
                    "index$": 0
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/webhooks/endpoints/{webhook_endpoint_id}",
              "parts": [
                "webhooks",
                "endpoints",
                "{id}"
              ],
              "rename": {
                "param": {
                  "webhook_endpoint_id": "id"
                }
              },
              "select": {
                "exist": [
                  "id",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "index$": 0
            }
          ],
          "key$": "load"
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "webhook_endpoint_response_paged_list": {
      "fields": [
        {
          "active": true,
          "name": "created_at",
          "req": true,
          "type": "`$STRING`",
          "index$": 0
        },
        {
          "active": true,
          "name": "endpoint_url",
          "req": true,
          "type": "`$STRING`",
          "index$": 1
        },
        {
          "active": true,
          "name": "id",
          "req": true,
          "type": "`$STRING`",
          "index$": 2
        },
        {
          "active": true,
          "name": "object",
          "req": false,
          "type": "`$STRING`",
          "index$": 3
        },
        {
          "active": true,
          "name": "subscribed_events",
          "req": true,
          "type": "`$ARRAY`",
          "index$": 4
        }
      ],
      "name": "webhook_endpoint_response_paged_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "active": true,
              "args": {
                "header": [
                  {
                    "active": true,
                    "kind": "header",
                    "name": "x_platform_id",
                    "orig": "x_platform_id",
                    "reqd": false,
                    "type": "`$STRING`"
                  }
                ],
                "query": [
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page",
                    "orig": "page",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  },
                  {
                    "active": true,
                    "kind": "query",
                    "name": "page_size",
                    "orig": "page_size",
                    "reqd": false,
                    "type": "`$INTEGER`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/webhooks/endpoints",
              "parts": [
                "webhooks",
                "endpoints"
              ],
              "select": {
                "exist": [
                  "page",
                  "page_size",
                  "x_platform_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.items`"
              },
              "index$": 0
            }
          ],
          "key$": "list"
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

