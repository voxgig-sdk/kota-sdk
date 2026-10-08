# Kota SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "Kota",
            "slug": "kota",
            "version": "0.1.1",
            "target": "py",
        },
        "feature": {
            "debug": {
        "options": {
          "active": False,
          "max": 100,
          "redact": [
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          ],
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "onEntry": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "idempotency": {
        "options": {
          "active": False,
          "header": "Idempotency-Key",
          "methods": [
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          ],
          "ops": [
            "create",
            "update",
            "remove",
          ],
        },
        "optspec": {
          "keygen": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "metrics": {
        "options": {
          "active": False,
        },
        "optspec": {
          "now": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "paging": {
        "options": {
          "active": False,
          "afterVar": "after",
          "cursorParam": "cursor",
          "firstVar": "first",
          "limitParam": "limit",
          "pageParam": "page",
          "startPage": 1,
        },
        "optspec": {
          "limit": "`$NUMBER`",
          "ops": "`$LIST`",
        },
        "strict": False,
        "transport": "none",
      },
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "now": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://test.api.kota.io",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "associated_person": {},
                "associated_person_eligibility_response_paged_list": {},
                "contribution_report": {},
                "contribution_report_employee_breakdown": {},
                "contribution_report_employee_breakdown_response_paged_list": {},
                "create_hosted_session_token": {},
                "create_session_token": {},
                "dependent": {},
                "dependents_management_intent": {},
                "eligibility_check": {},
                "employee": {},
                "employee_health_insurance_offer": {},
                "employee_health_insurance_offer_response_paged_list": {},
                "employee_health_insurance_policy": {},
                "employee_health_insurance_policy_response_paged_list": {},
                "employer": {},
                "employer_health_insurance_policy": {},
                "employer_health_insurance_policy_response_paged_list": {},
                "employer_health_insurance_quote": {},
                "employer_health_insurance_quote_response_paged_list": {},
                "enrolment_intent": {},
                "enrolment_intent_requirement_response_paged_list": {},
                "event": {},
                "group": {},
                "group_employee": {},
                "group_employee_response_paged_list": {},
                "group_policy": {},
                "group_policy_intent": {},
                "group_policy_intent_requirement_response_paged_list": {},
                "group_quote": {},
                "group_quote_intent": {},
                "group_quote_intent_requirement_response_paged_list": {},
                "plan": {},
                "policy": {},
                "policy_amendment_intent": {},
                "policy_import_intent": {},
                "provider": {},
                "salary": {},
                "webhook_endpoint": {},
            },
        },
        "entity": {
      "associated_person": {
        "fields": [
          {
            "name": "date_of_birth",
            "title": "Date Of Birth",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "update": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$STRING`",
                  ],
                ],
              },
            },
            "short": "Date of birth of the associated person",
            "format": "date",
          },
          {
            "name": "email",
            "title": "Email",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Email address of the associated person",
          },
          {
            "name": "employee_id",
            "title": "Employee Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the employee this person is associated with",
          },
          {
            "name": "first_name",
            "title": "First Name",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "update": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$STRING`",
                  ],
                ],
              },
            },
            "short": "First name of the associated person",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the associated person",
          },
          {
            "name": "last_name",
            "title": "Last Name",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "update": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$STRING`",
                  ],
                ],
              },
            },
            "short": "Last name of the associated person",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "phone_number",
            "title": "Phone Number",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Phone number in E.164 international format (e.g.",
          },
          {
            "name": "platform_id",
            "title": "Platform Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the platform",
          },
          {
            "name": "relationship_type",
            "title": "Relationship Type",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "update": {
                "type": "`$NULL`",
              },
            },
            "short": "The relationship type between the employee and the associated person",
          },
          {
            "name": "sex_at_birth",
            "title": "Sex At Birth",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "update": {
                "type": "`$NULL`",
              },
            },
            "short": "The sex assigned to the associated person at birth",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "associated_person",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/employees/{employee_id}/associated_persons",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "employee_id",
                  },
                  {
                    "lit": "associated_persons",
                  },
                ],
                "parts": [
                  "employees",
                  "{employee_id}",
                  "associated_persons",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employee_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employees/{employee_id}/associated_persons",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "employee_id",
                  },
                  {
                    "lit": "associated_persons",
                  },
                ],
                "parts": [
                  "employees",
                  "{employee_id}",
                  "associated_persons",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employee_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employees/{employee_id}/associated_persons/{associated_person_id}",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "employee_id",
                  },
                  {
                    "lit": "associated_persons",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "employees",
                  "{employee_id}",
                  "associated_persons",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "associated_person_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "id",
                      "orig": "associated_person_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employee_id",
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/employees/{employee_id}/associated_persons/{associated_person_id}",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "employee_id",
                  },
                  {
                    "lit": "associated_persons",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "employees",
                  "{employee_id}",
                  "associated_persons",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "associated_person_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "id",
                      "orig": "associated_person_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employee_id",
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/employees/{employee_id}/associated_persons/{associated_person_id}",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "employee_id",
                  },
                  {
                    "lit": "associated_persons",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "employees",
                  "{employee_id}",
                  "associated_persons",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "associated_person_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "id",
                      "orig": "associated_person_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employee_id",
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.employee",
            ],
          ],
        },
      },
      "associated_person_eligibility_response_paged_list": {
        "fields": [
          {
            "name": "associated_person_id",
            "title": "Associated Person Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The associated person ID.",
          },
          {
            "name": "date_of_birth",
            "title": "Date Of Birth",
            "type": "`$STRING`",
            "req": True,
            "short": "Date of birth of the associated person.",
            "format": "date",
          },
          {
            "name": "eligibility_status",
            "title": "Eligibility Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Eligibility status for the policy/plan.",
          },
          {
            "name": "first_name",
            "title": "First Name",
            "type": "`$STRING`",
            "req": True,
            "short": "First name of the associated person.",
          },
          {
            "name": "ineligibility_reason",
            "title": "Ineligibility Reason",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Reason for ineligibility if status is ineligible.",
          },
          {
            "name": "last_name",
            "title": "Last Name",
            "type": "`$STRING`",
            "req": True,
            "short": "Last name of the associated person.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "relationship",
            "title": "Relationship",
            "type": "`$STRING`",
            "req": True,
            "short": "Relationship type to the employee.",
          },
          {
            "name": "sex_at_birth",
            "title": "Sex At Birth",
            "type": "`$STRING`",
            "req": True,
            "short": "Sex at birth of the associated person.",
          },
        ],
        "name": "associated_person_eligibility_response_paged_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility",
                "segments": [
                  {
                    "lit": "dependents_management_intents",
                  },
                  {
                    "var": "dependents_management_intent_id",
                  },
                  {
                    "lit": "associated_persons_eligibility",
                  },
                ],
                "parts": [
                  "dependents_management_intents",
                  "{dependents_management_intent_id}",
                  "associated_persons_eligibility",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "dependents_management_intent_id",
                      "orig": "dependents_management_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "dependents_management_intent_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.dependents_management_intent",
            ],
          ],
        },
      },
      "contribution_report": {
        "fields": [
          {
            "name": "aggregates",
            "title": "Aggregates",
            "type": "`$ANY`",
            "req": True,
            "short": "Summary figures for the report, meant for dashboards and overviews.",
          },
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$STRING`",
            "req": True,
            "short": "Date and time the report was created",
            "format": "date-time",
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier of the employer for which the report is created",
          },
          {
            "name": "external_customer_id",
            "title": "External Customer Id",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Unique identifier of the customer for which the report is created.",
          },
          {
            "name": "file_id",
            "title": "File Id",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Identifier of the report's downloadable CSV file.",
          },
          {
            "name": "file_status",
            "title": "File Status",
            "type": "`$NULL`",
            "short": "Whether the report's downloadable CSV is ready yet.",
          },
          {
            "name": "finalized_at",
            "title": "Finalized At",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Date and time the report was finalized, if applicable",
            "format": "date-time",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the contribution report",
          },
          {
            "name": "last_updated_at",
            "title": "Last Updated At",
            "type": "`$STRING`",
            "req": True,
            "short": "Date and time of the last update to the report",
            "format": "date-time",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "period",
            "title": "Period",
            "type": "`$ANY`",
            "req": True,
            "short": "Period covered by the contribution report",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of the contribution report",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "contribution_report",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/contribution_reports/{contribution_report_id}/finalize",
                "segments": [
                  {
                    "lit": "contribution_reports",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "finalize",
                  },
                ],
                "parts": [
                  "contribution_reports",
                  "{id}",
                  "finalize",
                ],
                "rename": {
                  "param": {
                    "contribution_report_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "contribution_report_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "$action": "finalize",
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/contribution_reports",
                "segments": [
                  {
                    "lit": "contribution_reports",
                  },
                ],
                "parts": [
                  "contribution_reports",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "query": [
                    {
                      "name": "employer_id",
                      "orig": "employer_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "external_customer_id",
                      "orig": "external_customer_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "month",
                      "orig": "month",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "year",
                      "orig": "year",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/contribution_reports/{contribution_report_id}",
                "segments": [
                  {
                    "lit": "contribution_reports",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "contribution_reports",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "contribution_report_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "contribution_report_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "contribution_report_employee_breakdown": {
        "fields": [
          {
            "name": "contribution_report_id",
            "title": "Contribution Report Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier of the related contribution report",
          },
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$STRING`",
            "req": True,
            "short": "Date and time the breakdown was created",
            "format": "date-time",
          },
          {
            "name": "currency",
            "title": "Currency",
            "type": "`$STRING`",
            "req": True,
            "short": "The currency in which all the amounts in this breakdown are presented (e.g.",
          },
          {
            "name": "employee_id",
            "title": "Employee Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier of the employee for which the breakdown is created",
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier of the employer for which the breakdown is created",
          },
          {
            "name": "external_customer_id",
            "title": "External Customer Id",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Unique identifier of the customer for which the breakdown is created.",
          },
          {
            "name": "finalized_at",
            "title": "Finalized At",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Date and time the breakdown was finalized, if applicable",
            "format": "date-time",
          },
          {
            "name": "health_insurance",
            "title": "Health Insurance",
            "type": "`$ANY`",
            "req": True,
            "short": "Health insurance contribution details",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
          {
            "name": "last_updated_at",
            "title": "Last Updated At",
            "type": "`$STRING`",
            "req": True,
            "short": "Date and time of the last update to the breakdown",
            "format": "date-time",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "period",
            "title": "Period",
            "type": "`$ANY`",
            "req": True,
            "short": "Period covered by the employee breakdown",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of the breakdown",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "contribution_report_employee_breakdown",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}",
                "segments": [
                  {
                    "lit": "contribution_reports",
                  },
                  {
                    "var": "contribution_report_id",
                  },
                  {
                    "lit": "employee_breakdowns",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "contribution_reports",
                  "{contribution_report_id}",
                  "employee_breakdowns",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "employee_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "contribution_report_id",
                      "orig": "contribution_report_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "contribution_report_id",
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.contribution_report",
            ],
          ],
        },
      },
      "contribution_report_employee_breakdown_response_paged_list": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "contribution_report_employee_breakdown_response_paged_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/contribution_reports/{contribution_report_id}/employee_breakdowns",
                "segments": [
                  {
                    "lit": "contribution_reports",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "employee_breakdowns",
                  },
                ],
                "parts": [
                  "contribution_reports",
                  "{id}",
                  "employee_breakdowns",
                ],
                "rename": {
                  "param": {
                    "contribution_report_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "contribution_report_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "$action": "employee_breakdowns",
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "create_hosted_session_token": {
        "fields": [
          {
            "name": "employee_id",
            "title": "Employee Id",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "expiry",
            "title": "Expiry",
            "type": "`$STRING`",
            "req": True,
            "format": "date-time",
          },
          {
            "name": "link",
            "title": "Link",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "create_hosted_session_token",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/hosted/sessions",
                "segments": [
                  {
                    "lit": "hosted",
                  },
                  {
                    "lit": "sessions",
                  },
                ],
                "parts": [
                  "hosted",
                  "sessions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "create_session_token": {
        "fields": [
          {
            "name": "employee_id",
            "title": "Employee Id",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "expiry",
            "title": "Expiry",
            "type": "`$STRING`",
            "req": True,
            "format": "date-time",
          },
          {
            "name": "external_customer_id",
            "title": "External Customer Id",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
          },
          {
            "name": "token",
            "title": "Token",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "name": "create_session_token",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/embed/sessions",
                "segments": [
                  {
                    "lit": "embed",
                  },
                  {
                    "lit": "sessions",
                  },
                ],
                "parts": [
                  "embed",
                  "sessions",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {},
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "dependent": {
        "fields": [
          {
            "name": "action_required",
            "title": "Action Required",
            "type": "`$NULL`",
            "short": "Details of the action required from the caller.",
          },
          {
            "name": "associated_person_ids",
            "title": "Associated Person Ids",
            "type": "`$ARRAY`",
            "req": True,
            "short": "List of associated person IDs to add as dependents.",
          },
          {
            "name": "coverage_options",
            "title": "Coverage Options",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$ARRAY`",
              ],
            ],
            "short": "Available member-scoped coverage options for the plan.",
          },
          {
            "name": "dependent_coverage_selections",
            "title": "Dependent Coverage Selections",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$ARRAY`",
              ],
            ],
            "short": "Optional coverage selections per dependent.",
          },
          {
            "name": "dependents",
            "title": "Dependents",
            "type": "`$ARRAY`",
            "req": True,
            "short": "List of dependents being managed.",
          },
          {
            "name": "disclosures",
            "title": "Disclosures",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Disclosures associated with this intent.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the dependents management intent.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "Object type identifier.",
            "readOnly": True,
          },
          {
            "name": "parent_intent_id",
            "title": "Parent Intent Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The parent intent ID (e.g.",
          },
          {
            "name": "parent_intent_type",
            "title": "Parent Intent Type",
            "type": "`$STRING`",
            "req": True,
            "short": "The type of parent intent.",
          },
          {
            "name": "plan",
            "title": "Plan",
            "type": "`$ANY`",
            "req": True,
            "short": "Plan information including pricing details.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of the dependents management intent.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "dependent",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/dependents_management_intents/{dependents_management_intent_id}/dependents",
                "segments": [
                  {
                    "lit": "dependents_management_intents",
                  },
                  {
                    "var": "dependents_management_intent_id",
                  },
                  {
                    "lit": "dependents",
                  },
                ],
                "parts": [
                  "dependents_management_intents",
                  "{dependents_management_intent_id}",
                  "dependents",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "idempotency_key",
                      "orig": "Idempotency-Key",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "dependents_management_intent_id",
                      "orig": "dependents_management_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "dependents_management_intent_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/dependents_management_intents/{dependents_management_intent_id}/dependents/{associated_person_id}",
                "segments": [
                  {
                    "lit": "dependents_management_intents",
                  },
                  {
                    "var": "dependents_management_intent_id",
                  },
                  {
                    "lit": "dependents",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "dependents_management_intents",
                  "{dependents_management_intent_id}",
                  "dependents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "associated_person_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "dependents_management_intent_id",
                      "orig": "dependents_management_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "id",
                      "orig": "associated_person_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "dependents_management_intent_id",
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.dependents_management_intent",
            ],
          ],
        },
      },
      "dependents_management_intent": {
        "fields": [
          {
            "name": "action_required",
            "title": "Action Required",
            "type": "`$NULL`",
            "short": "Details of the action required from the caller.",
          },
          {
            "name": "coverage_options",
            "title": "Coverage Options",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$ARRAY`",
              ],
            ],
            "short": "Available member-scoped coverage options for the plan.",
          },
          {
            "name": "dependents",
            "title": "Dependents",
            "type": "`$ARRAY`",
            "req": True,
            "short": "List of dependents being managed.",
          },
          {
            "name": "disclosures",
            "title": "Disclosures",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Disclosures associated with this intent.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the dependents management intent.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "Object type identifier.",
            "readOnly": True,
          },
          {
            "name": "parent_intent_id",
            "title": "Parent Intent Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The parent intent ID (e.g.",
          },
          {
            "name": "parent_intent_type",
            "title": "Parent Intent Type",
            "type": "`$STRING`",
            "req": True,
            "short": "The type of parent intent.",
          },
          {
            "name": "plan",
            "title": "Plan",
            "type": "`$ANY`",
            "req": True,
            "short": "Plan information including pricing details.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of the dependents management intent.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "dependents_management_intent",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent",
                "segments": [
                  {
                    "lit": "policies",
                  },
                  {
                    "var": "policy_id",
                  },
                  {
                    "lit": "policy_amendment_intents",
                  },
                  {
                    "var": "policy_amendment_intent_id",
                  },
                  {
                    "lit": "create_dependents_management_intent",
                  },
                ],
                "parts": [
                  "policies",
                  "{policy_id}",
                  "policy_amendment_intents",
                  "{policy_amendment_intent_id}",
                  "create_dependents_management_intent",
                ],
                "rename": {
                  "param": {
                    "id": "policy_amendment_intent_id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "policy_amendment_intent_id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "policy_id",
                      "orig": "policy_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "policy_amendment_intent_id",
                    "policy_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/enrolment_intents/{enrolment_intent_id}/create_dependents_management_intent",
                "segments": [
                  {
                    "lit": "enrolment_intents",
                  },
                  {
                    "var": "enrolment_intent_id",
                  },
                  {
                    "lit": "create_dependents_management_intent",
                  },
                ],
                "parts": [
                  "enrolment_intents",
                  "{enrolment_intent_id}",
                  "create_dependents_management_intent",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "enrolment_intent_id",
                      "orig": "enrolment_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "enrolment_intent_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/dependents_management_intents/{dependents_management_intent_id}/cancel",
                "segments": [
                  {
                    "lit": "dependents_management_intents",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "cancel",
                  },
                ],
                "parts": [
                  "dependents_management_intents",
                  "{id}",
                  "cancel",
                ],
                "rename": {
                  "param": {
                    "dependents_management_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "dependents_management_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "$action": "cancel",
                  "exist": [
                    "id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/dependents_management_intents/{dependents_management_intent_id}/confirm",
                "segments": [
                  {
                    "lit": "dependents_management_intents",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "confirm",
                  },
                ],
                "parts": [
                  "dependents_management_intents",
                  "{id}",
                  "confirm",
                ],
                "rename": {
                  "param": {
                    "dependents_management_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "dependents_management_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "$action": "confirm",
                  "exist": [
                    "id",
                  ],
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/dependents_management_intents/{dependents_management_intent_id}",
                "segments": [
                  {
                    "lit": "dependents_management_intents",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "dependents_management_intents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "dependents_management_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "dependents_management_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.enrolment_intent",
            ],
            [
              "$.main.kit.entity.policy",
              "$.main.kit.entity.policy_amendment_intent",
            ],
          ],
        },
      },
      "eligibility_check": {
        "fields": [
          {
            "name": "eligibility_status",
            "title": "Eligibility Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Eligibility status: `eligible` or `ineligible`.",
          },
          {
            "name": "employee_id",
            "title": "Employee Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The employee to check eligibility for.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type.",
            "readOnly": True,
          },
          {
            "name": "plan",
            "title": "Plan",
            "type": "`$ANY`",
            "req": True,
            "short": "The insurance plan associated with the group.",
          },
          {
            "name": "provider",
            "title": "Provider",
            "type": "`$ANY`",
            "req": True,
            "short": "The insurance provider associated with the group.",
          },
          {
            "name": "reasons",
            "title": "Reasons",
            "type": "`$ARRAY`",
            "req": True,
            "short": "List of reasons why the employee is ineligible.",
          },
        ],
        "name": "eligibility_check",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/groups/{group_id}/eligibility_check",
                "segments": [
                  {
                    "lit": "groups",
                  },
                  {
                    "var": "group_id",
                  },
                  {
                    "lit": "eligibility_check",
                  },
                ],
                "parts": [
                  "groups",
                  "{group_id}",
                  "eligibility_check",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "group_id",
                      "orig": "group_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "group_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.group",
            ],
          ],
        },
      },
      "employee": {
        "fields": [
          {
            "name": "bank_account",
            "title": "Bank Account",
            "type": "`$NULL`",
            "short": "Bank account details",
          },
          {
            "name": "date_of_birth",
            "title": "Date Of Birth",
            "type": "`$STRING`",
            "req": True,
            "short": "Date of birth of the employee",
            "format": "date",
          },
          {
            "name": "earliest_benefits_start_date",
            "title": "Earliest Benefits Start Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "The earliest date this employee can be enrolled in any benefits.",
            "format": "date",
          },
          {
            "name": "email",
            "title": "Email",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "update": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$STRING`",
                  ],
                ],
              },
            },
            "short": "Email address of the employee",
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "short": "Unique identifier for the employer",
          },
          {
            "name": "external_customer_id",
            "title": "External Customer Id",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
          },
          {
            "name": "first_name",
            "title": "First Name",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "update": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$STRING`",
                  ],
                ],
              },
            },
            "short": "First name of the employee.",
          },
          {
            "name": "home_address",
            "title": "Home Address",
            "type": "`$NULL`",
            "op": {
              "create": {
                "req": True,
                "type": "`$ANY`",
              },
            },
            "short": "Location where the employee is legally registered to live",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the employee",
          },
          {
            "name": "last_name",
            "title": "Last Name",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "update": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$STRING`",
                  ],
                ],
              },
            },
            "short": "Last name of the employee",
          },
          {
            "name": "metadata",
            "title": "Metadata",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$OBJECT`",
              ],
            ],
            "short": "Set of key-value pairs that you can attach to an object.",
          },
          {
            "name": "national_tax_id",
            "title": "National Tax Id",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "update": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$STRING`",
                  ],
                ],
              },
            },
            "short": "PPSN in Ireland, NINo in the UK, DNI/NIE in Spain",
          },
          {
            "name": "nationality",
            "title": "Nationality",
            "type": "`$NULL`",
            "short": "Nationality of the employee (e.g.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "offboard_on",
            "title": "Offboard On",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Date when the employee was or will be offboarded",
            "format": "date-time",
          },
          {
            "name": "phone_number",
            "title": "Phone Number",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "req": True,
            "op": {
              "create": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$STRING`",
                  ],
                ],
              },
              "update": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$STRING`",
                  ],
                ],
              },
            },
            "short": "Phone number in E.164 international format (e.g.",
          },
          {
            "name": "platform_id",
            "title": "Platform Id",
            "type": "`$STRING`",
            "short": "Unique identifier for the platform",
          },
          {
            "name": "sex_at_birth",
            "title": "Sex At Birth",
            "type": "`$STRING`",
            "req": True,
            "short": "The sex assigned to the employee at birth",
          },
          {
            "name": "start_on",
            "title": "Start On",
            "type": "`$STRING`",
            "op": {
              "create": {
                "req": True,
                "type": "`$STRING`",
              },
            },
            "short": "Employment start date",
            "format": "date",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "short": "Current status of the employee",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "employee",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/employees/{employee_id}/offboard",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "offboard",
                  },
                ],
                "parts": [
                  "employees",
                  "{id}",
                  "offboard",
                ],
                "rename": {
                  "param": {
                    "employee_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "idempotency_key",
                      "orig": "Idempotency-Key",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "$action": "offboard",
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/employees/{employee_id}/offboard/cancel",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "offboard",
                  },
                  {
                    "lit": "cancel",
                  },
                ],
                "parts": [
                  "employees",
                  "{id}",
                  "offboard",
                  "cancel",
                ],
                "rename": {
                  "param": {
                    "employee_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "idempotency_key",
                      "orig": "Idempotency-Key",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "$action": "offboard_cancel",
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/employees",
                "segments": [
                  {
                    "lit": "employees",
                  },
                ],
                "parts": [
                  "employees",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "idempotency_key",
                      "orig": "Idempotency-Key",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employees",
                "segments": [
                  {
                    "lit": "employees",
                  },
                ],
                "parts": [
                  "employees",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "query": [
                    {
                      "name": "employer_id",
                      "orig": "employer_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "external_customer_id",
                      "orig": "external_customer_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "filter",
                      "orig": "filter",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "metadata_id",
                      "orig": "metadata_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employees/{employee_id}",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "employees",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "employee_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/employees/{employee_id}",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "employees",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "employee_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "employee_health_insurance_offer": {
        "fields": [
          {
            "name": "coverage_level",
            "title": "Coverage Level",
            "type": "`$ANY`",
            "req": True,
            "short": "Details about the coverage level for the offer.",
          },
          {
            "name": "employee_id",
            "title": "Employee Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The Id of the employee for which the offer is available",
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The Id of the employer for which the offer is available",
          },
          {
            "name": "external_customer_id",
            "title": "External Customer Id",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for offer",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "required_action",
            "title": "Required Action",
            "type": "`$NULL`",
            "short": "Required action to progress the offer, if any.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of offer",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "employee_health_insurance_offer",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employees/{employee_id}/health_insurance/offers/{employee_offer_id}",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "employee_id",
                  },
                  {
                    "lit": "health_insurance",
                  },
                  {
                    "lit": "offers",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "employees",
                  "{employee_id}",
                  "health_insurance",
                  "offers",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "employee_offer_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "id",
                      "orig": "employee_offer_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "eeho_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employee_id",
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.employee",
            ],
          ],
        },
      },
      "employee_health_insurance_offer_response_paged_list": {
        "fields": [
          {
            "name": "coverage_level",
            "title": "Coverage Level",
            "type": "`$ANY`",
            "req": True,
            "short": "Details about the coverage level for the offer.",
          },
          {
            "name": "employee_id",
            "title": "Employee Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The Id of the employee for which the offer is available",
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The Id of the employer for which the offer is available",
          },
          {
            "name": "external_customer_id",
            "title": "External Customer Id",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for offer",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "required_action",
            "title": "Required Action",
            "type": "`$NULL`",
            "short": "Required action to progress the offer, if any.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of offer",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "employee_health_insurance_offer_response_paged_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employees/{employee_id}/health_insurance/offers",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "employee_id",
                  },
                  {
                    "lit": "health_insurance",
                  },
                  {
                    "lit": "offers",
                  },
                ],
                "parts": [
                  "employees",
                  "{employee_id}",
                  "health_insurance",
                  "offers",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employee_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.employee",
            ],
          ],
        },
      },
      "employee_health_insurance_policy": {
        "fields": [
          {
            "name": "cancellation_date",
            "title": "Cancellation Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Policy was cancelled on this date, if cancellation occured",
            "format": "date",
          },
          {
            "name": "coverage_level",
            "title": "Coverage Level",
            "type": "`$ANY`",
            "req": True,
            "short": "Represents the current coverage level for the policy",
          },
          {
            "name": "employee_id",
            "title": "Employee Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The Id of the employee for which the policy is created",
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The Id of the employer for which the policy is created",
          },
          {
            "name": "end_date",
            "title": "End Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Policy ends on this date",
            "format": "date",
          },
          {
            "name": "enrolled_dependants_count",
            "title": "Enrolled Dependants Count",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy.",
            "format": "int32",
          },
          {
            "name": "enrolment_type",
            "title": "Enrolment Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Enrolment type of the policy",
          },
          {
            "name": "estimated_gross_premium",
            "title": "Estimated Gross Premium",
            "type": "`$ANY`",
            "req": True,
            "short": "Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration.",
          },
          {
            "name": "external_customer_id",
            "title": "External Customer Id",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for policy",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "opt_out_deadline_date",
            "title": "Opt Out Deadline Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Last day to opt out from the policy",
            "format": "date",
          },
          {
            "name": "policy_number",
            "title": "Policy Number",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Health insurance policy number, if available",
          },
          {
            "name": "renewal",
            "title": "Renewal",
            "type": "`$ANY`",
            "req": True,
            "short": "Renewal information for the policy",
          },
          {
            "name": "start_date",
            "title": "Start Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Policy starts on this date",
            "format": "date",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of policy",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "employee_health_insurance_policy",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employees/{employee_id}/health_insurance/policies/{employee_policy_id}",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "employee_id",
                  },
                  {
                    "lit": "health_insurance",
                  },
                  {
                    "lit": "policies",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "employees",
                  "{employee_id}",
                  "health_insurance",
                  "policies",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "employee_policy_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "id",
                      "orig": "employee_policy_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employee_id",
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.employee",
            ],
          ],
        },
      },
      "employee_health_insurance_policy_response_paged_list": {
        "fields": [
          {
            "name": "cancellation_date",
            "title": "Cancellation Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Policy was cancelled on this date, if cancellation occured",
            "format": "date",
          },
          {
            "name": "coverage_level",
            "title": "Coverage Level",
            "type": "`$ANY`",
            "req": True,
            "short": "Represents the current coverage level for the policy",
          },
          {
            "name": "employee_id",
            "title": "Employee Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The Id of the employee for which the policy is created",
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The Id of the employer for which the policy is created",
          },
          {
            "name": "end_date",
            "title": "End Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Policy ends on this date",
            "format": "date",
          },
          {
            "name": "enrolled_dependants_count",
            "title": "Enrolled Dependants Count",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy.",
            "format": "int32",
          },
          {
            "name": "enrolment_type",
            "title": "Enrolment Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Enrolment type of the policy",
          },
          {
            "name": "estimated_gross_premium",
            "title": "Estimated Gross Premium",
            "type": "`$ANY`",
            "req": True,
            "short": "Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration.",
          },
          {
            "name": "external_customer_id",
            "title": "External Customer Id",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for policy",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "opt_out_deadline_date",
            "title": "Opt Out Deadline Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Last day to opt out from the policy",
            "format": "date",
          },
          {
            "name": "policy_number",
            "title": "Policy Number",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Health insurance policy number, if available",
          },
          {
            "name": "renewal",
            "title": "Renewal",
            "type": "`$ANY`",
            "req": True,
            "short": "Renewal information for the policy",
          },
          {
            "name": "start_date",
            "title": "Start Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Policy starts on this date",
            "format": "date",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of policy",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "employee_health_insurance_policy_response_paged_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employees/{employee_id}/health_insurance/policies",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "employee_id",
                  },
                  {
                    "lit": "health_insurance",
                  },
                  {
                    "lit": "policies",
                  },
                ],
                "parts": [
                  "employees",
                  "{employee_id}",
                  "health_insurance",
                  "policies",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employee_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.employee",
            ],
          ],
        },
      },
      "employer": {
        "fields": [
          {
            "name": "applicable_collective_agreement",
            "title": "Applicable Collective Agreement",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Name of the collective agreement that applies to the employer's workforce, if any.",
          },
          {
            "name": "contact",
            "title": "Contact",
            "type": "`$ANY`",
            "req": True,
            "op": {
              "update": {
                "type": "`$NULL`",
              },
            },
          },
          {
            "name": "earliest_benefits_start_date",
            "title": "Earliest Benefits Start Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "The earliest date this employer is permitted to set up any benefits scheme.",
            "format": "date",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "legal_address",
            "title": "Legal Address",
            "type": "`$ANY`",
            "req": True,
            "op": {
              "update": {
                "type": "`$NULL`",
              },
            },
            "short": "Treated as a single object that is updated entirely, `null` sub-fields (e.g.",
          },
          {
            "name": "legal_name",
            "title": "Legal Name",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "update": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$STRING`",
                  ],
                ],
              },
            },
            "short": "Legal name of the company.",
          },
          {
            "name": "metadata",
            "title": "Metadata",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$OBJECT`",
              ],
            ],
            "short": "Set of key-value pairs that you can attach to an object.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "offboard_on",
            "title": "Offboard On",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "format": "date-time",
          },
          {
            "name": "platform_id",
            "title": "Platform Id",
            "type": "`$STRING`",
          },
          {
            "name": "registration_number",
            "title": "Registration Number",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Company registration number.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "employer",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/employers/{employer_id}/offboard",
                "segments": [
                  {
                    "lit": "employers",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "offboard",
                  },
                ],
                "parts": [
                  "employers",
                  "{id}",
                  "offboard",
                ],
                "rename": {
                  "param": {
                    "employer_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "idempotency_key",
                      "orig": "Idempotency-Key",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "employer_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "$action": "offboard",
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/employers",
                "segments": [
                  {
                    "lit": "employers",
                  },
                ],
                "parts": [
                  "employers",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "idempotency_key",
                      "orig": "Idempotency-Key",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employers",
                "segments": [
                  {
                    "lit": "employers",
                  },
                ],
                "parts": [
                  "employers",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "query": [
                    {
                      "name": "filter",
                      "orig": "filter",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employers/{employer_id}",
                "segments": [
                  {
                    "lit": "employers",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "employers",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "employer_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "employer_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/employers/{employer_id}",
                "segments": [
                  {
                    "lit": "employers",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "employers",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "employer_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "employer_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "employer_health_insurance_policy": {
        "fields": [
          {
            "name": "cancellation_date",
            "title": "Cancellation Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Policy was cancelled on this date, if cancellation occured",
            "format": "date",
          },
          {
            "name": "coverage_levels",
            "title": "Coverage Levels",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Represents the available coverage levels for this policy",
          },
          {
            "name": "employer_cancellation_period_length",
            "title": "Employer Cancellation Period Length",
            "type": "`$INTEGER`",
            "req": True,
            "short": "How many days the employer has to cancel the policy since the policy starts",
            "format": "int32",
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The Id of the employer for which the policy is created",
          },
          {
            "name": "end_date",
            "title": "End Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Policy ends on this date",
            "format": "date",
          },
          {
            "name": "enrolment_type",
            "title": "Enrolment Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Enrolment type of the policy",
          },
          {
            "name": "group_policy_number",
            "title": "Group Policy Number",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Group’s health insurance policy number, if available",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for policy",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "renewal",
            "title": "Renewal",
            "type": "`$ANY`",
            "req": True,
            "short": "Renewal information for the policy",
          },
          {
            "name": "start_date",
            "title": "Start Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Policy starts on this date",
            "format": "date",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of policy",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "employer_health_insurance_policy",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employers/{employer_id}/health_insurance/policies/{employer_policy_id}",
                "segments": [
                  {
                    "lit": "employers",
                  },
                  {
                    "var": "employer_id",
                  },
                  {
                    "lit": "health_insurance",
                  },
                  {
                    "lit": "policies",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "employers",
                  "{employer_id}",
                  "health_insurance",
                  "policies",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "employer_policy_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employer_id",
                      "orig": "employer_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "id",
                      "orig": "employer_policy_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "erhp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employer_id",
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.employer",
            ],
          ],
        },
      },
      "employer_health_insurance_policy_response_paged_list": {
        "fields": [
          {
            "name": "cancellation_date",
            "title": "Cancellation Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Policy was cancelled on this date, if cancellation occured",
            "format": "date",
          },
          {
            "name": "coverage_levels",
            "title": "Coverage Levels",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Represents the available coverage levels for this policy",
          },
          {
            "name": "employer_cancellation_period_length",
            "title": "Employer Cancellation Period Length",
            "type": "`$INTEGER`",
            "req": True,
            "short": "How many days the employer has to cancel the policy since the policy starts",
            "format": "int32",
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The Id of the employer for which the policy is created",
          },
          {
            "name": "end_date",
            "title": "End Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Policy ends on this date",
            "format": "date",
          },
          {
            "name": "enrolment_type",
            "title": "Enrolment Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Enrolment type of the policy",
          },
          {
            "name": "group_policy_number",
            "title": "Group Policy Number",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Group’s health insurance policy number, if available",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for policy",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "renewal",
            "title": "Renewal",
            "type": "`$ANY`",
            "req": True,
            "short": "Renewal information for the policy",
          },
          {
            "name": "start_date",
            "title": "Start Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Policy starts on this date",
            "format": "date",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of policy",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "employer_health_insurance_policy_response_paged_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employers/{employer_id}/health_insurance/policies",
                "segments": [
                  {
                    "lit": "employers",
                  },
                  {
                    "var": "employer_id",
                  },
                  {
                    "lit": "health_insurance",
                  },
                  {
                    "lit": "policies",
                  },
                ],
                "parts": [
                  "employers",
                  "{employer_id}",
                  "health_insurance",
                  "policies",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employer_id",
                      "orig": "employer_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employer_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.employer",
            ],
          ],
        },
      },
      "employer_health_insurance_quote": {
        "fields": [
          {
            "name": "coverage_levels",
            "title": "Coverage Levels",
            "type": "`$ARRAY`",
            "req": True,
            "short": "List of levels covered under the policy, each item representing details about the plan’s cover.",
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The Id of the employer for which the is created",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the quote",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "quoted_at",
            "title": "Quoted At",
            "type": "`$STRING`",
            "req": True,
            "short": "Date and time the quote was created at",
            "format": "date-time",
          },
          {
            "name": "required_action",
            "title": "Required Action",
            "type": "`$NULL`",
            "short": "Actions required by the employer to proceed with the quote.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of the quote",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "employer_health_insurance_quote",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employers/{employer_id}/health_insurance/quotes/{employer_quote_id}",
                "segments": [
                  {
                    "lit": "employers",
                  },
                  {
                    "var": "employer_id",
                  },
                  {
                    "lit": "health_insurance",
                  },
                  {
                    "lit": "quotes",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "employers",
                  "{employer_id}",
                  "health_insurance",
                  "quotes",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "employer_quote_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employer_id",
                      "orig": "employer_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "id",
                      "orig": "employer_quote_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "erhq_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employer_id",
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.employer",
            ],
          ],
        },
      },
      "employer_health_insurance_quote_response_paged_list": {
        "fields": [
          {
            "name": "coverage_levels",
            "title": "Coverage Levels",
            "type": "`$ARRAY`",
            "req": True,
            "short": "List of levels covered under the policy, each item representing details about the plan’s cover.",
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The Id of the employer for which the is created",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the quote",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "quoted_at",
            "title": "Quoted At",
            "type": "`$STRING`",
            "req": True,
            "short": "Date and time the quote was created at",
            "format": "date-time",
          },
          {
            "name": "required_action",
            "title": "Required Action",
            "type": "`$NULL`",
            "short": "Actions required by the employer to proceed with the quote.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of the quote",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "employer_health_insurance_quote_response_paged_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employers/{employer_id}/health_insurance/quotes",
                "segments": [
                  {
                    "lit": "employers",
                  },
                  {
                    "var": "employer_id",
                  },
                  {
                    "lit": "health_insurance",
                  },
                  {
                    "lit": "quotes",
                  },
                ],
                "parts": [
                  "employers",
                  "{employer_id}",
                  "health_insurance",
                  "quotes",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employer_id",
                      "orig": "employer_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employer_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.employer",
            ],
          ],
        },
      },
      "enrolment_intent": {
        "fields": [
          {
            "name": "action_required",
            "title": "Action Required",
            "type": "`$NULL`",
            "short": "If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment.",
          },
          {
            "name": "coverage_selections",
            "title": "Coverage Selections",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$ARRAY`",
              ],
            ],
            "short": "Optional plan coverage option selections for policy-scoped configurations.",
          },
          {
            "name": "desired_policy_start_date",
            "title": "Desired Policy Start Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "The desired date for the employee's policy to start.",
            "format": "date",
          },
          {
            "name": "disclosures",
            "title": "Disclosures",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Disclosures associated with this intent.",
          },
          {
            "name": "employee_id",
            "title": "Employee Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Identifier for the employee associated with this enrolment intent.",
          },
          {
            "name": "enrolment_date",
            "title": "Enrolment Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "The date on which the employee agreed to enrol into the group's policies.",
            "format": "date",
          },
          {
            "name": "force_confirmation",
            "title": "Force Confirmation",
            "type": "`$BOOLEAN`",
            "req": True,
            "short": "If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required.",
          },
          {
            "name": "group_id",
            "title": "Group Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Identifier for the group associated with this enrolment intent.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the enrolment intent.",
          },
          {
            "name": "ineligibility_reason",
            "title": "Ineligibility Reason",
            "type": "`$NULL`",
            "short": "If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "Object type identifier.",
            "readOnly": True,
          },
          {
            "name": "pending_confirmation",
            "title": "Pending Confirmation",
            "type": "`$NULL`",
            "short": "If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state.",
          },
          {
            "name": "policy_configuration",
            "title": "Policy Configuration",
            "type": "`$NULL`",
            "short": "Policy configuration associated with this enrolment intent.",
          },
          {
            "name": "policy_enrolments",
            "title": "Policy Enrolments",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Policy enrolment information",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of the enrolment intent.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "enrolment_intent",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/enrolment_intents/{enrolment_intent_id}/confirm",
                "segments": [
                  {
                    "lit": "enrolment_intents",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "confirm",
                  },
                ],
                "parts": [
                  "enrolment_intents",
                  "{id}",
                  "confirm",
                ],
                "rename": {
                  "param": {
                    "enrolment_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "enrolment_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "$action": "confirm",
                  "exist": [
                    "id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/enrolment_intents/{enrolment_intent_id}/coverage-selections",
                "segments": [
                  {
                    "lit": "enrolment_intents",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "coverage-selections",
                  },
                ],
                "parts": [
                  "enrolment_intents",
                  "{id}",
                  "coverage-selections",
                ],
                "rename": {
                  "param": {
                    "enrolment_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "enrolment_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "$action": "coverage_selection",
                  "exist": [
                    "id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/enrolment_intents/{enrolment_intent_id}/reject",
                "segments": [
                  {
                    "lit": "enrolment_intents",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "reject",
                  },
                ],
                "parts": [
                  "enrolment_intents",
                  "{id}",
                  "reject",
                ],
                "rename": {
                  "param": {
                    "enrolment_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "enrolment_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "$action": "reject",
                  "exist": [
                    "id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/enrolment_intents",
                "segments": [
                  {
                    "lit": "enrolment_intents",
                  },
                ],
                "parts": [
                  "enrolment_intents",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "idempotency_key",
                      "orig": "Idempotency-Key",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/enrolment_intents",
                "segments": [
                  {
                    "lit": "enrolment_intents",
                  },
                ],
                "parts": [
                  "enrolment_intents",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "query": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "group_id",
                      "orig": "group_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/enrolment_intents/{enrolment_intent_id}",
                "segments": [
                  {
                    "lit": "enrolment_intents",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "enrolment_intents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "enrolment_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "enrolment_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/enrolment_intents/{enrolment_intent_id}",
                "segments": [
                  {
                    "lit": "enrolment_intents",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "enrolment_intents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "enrolment_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "enrolment_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "enrolment_intent_requirement_response_paged_list": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "enrolment_intent_requirement_response_paged_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/enrolment_intents/{enrolment_intent_id}/requirements",
                "segments": [
                  {
                    "lit": "enrolment_intents",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "requirements",
                  },
                ],
                "parts": [
                  "enrolment_intents",
                  "{id}",
                  "requirements",
                ],
                "rename": {
                  "param": {
                    "enrolment_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "enrolment_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                  "query": [
                    {
                      "name": "object_id",
                      "orig": "object_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "object_type",
                      "orig": "object_type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "$action": "requirements",
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "event": {
        "fields": [
          {
            "name": "api_version",
            "title": "Api Version",
            "type": "`$STRING`",
            "readOnly": True,
          },
          {
            "name": "created",
            "title": "Created",
            "type": "`$STRING`",
            "req": True,
            "format": "date-time",
          },
          {
            "name": "data",
            "title": "Data",
            "type": "`$NULL`",
            "req": True,
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "platform_id",
            "title": "Platform Id",
            "type": "`$STRING`",
            "req": True,
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "req": True,
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "event",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/events/{event_id}/replay",
                "segments": [
                  {
                    "lit": "events",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "replay",
                  },
                ],
                "parts": [
                  "events",
                  "{id}",
                  "replay",
                ],
                "rename": {
                  "param": {
                    "event_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "event_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "$action": "replay",
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/events",
                "segments": [
                  {
                    "lit": "events",
                  },
                ],
                "parts": [
                  "events",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "query": [
                    {
                      "name": "created_after",
                      "orig": "created_after",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "order_direction",
                      "orig": "order_direction",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "version",
                      "orig": "version",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/events/{event_id}",
                "segments": [
                  {
                    "lit": "events",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "events",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "event_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "event_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "group": {
        "fields": [
          {
            "name": "description",
            "title": "Description",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Short description of the purpose or scope of the `group`.",
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Identifier for the `employer` that owns this `group`.",
          },
          {
            "name": "enrolment_type",
            "title": "Enrolment Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Indicates how employees are enrolled into the group.",
          },
          {
            "name": "group_policy_ids",
            "title": "Group Policy Ids",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Group policy unique identifiers associated with this group.",
          },
          {
            "name": "group_policy_intent_ids",
            "title": "Group Policy Intent Ids",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Group policy intent unique identifiers associated with this group.",
          },
          {
            "name": "group_quote_intent_ids",
            "title": "Group Quote Intent Ids",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Group quote intent unique identifiers associated with this group.",
          },
          {
            "name": "group_type",
            "title": "Group Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Indicates how policies are organized for this group.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the `group`.",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "op": {
              "update": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$STRING`",
                  ],
                ],
              },
            },
            "short": "Human-readable name of the `group`.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current lifecycle state of the `group`, indicating its current progress.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "group",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/groups",
                "segments": [
                  {
                    "lit": "groups",
                  },
                ],
                "parts": [
                  "groups",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/groups",
                "segments": [
                  {
                    "lit": "groups",
                  },
                ],
                "parts": [
                  "groups",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "query": [
                    {
                      "name": "employer_id",
                      "orig": "employer_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/groups/{group_id}",
                "segments": [
                  {
                    "lit": "groups",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "groups",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "group_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "group_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "update": {
            "input": "data",
            "name": "update",
            "points": [
              {
                "kind": "http",
                "method": "PUT",
                "orig": "/groups/{group_id}",
                "segments": [
                  {
                    "lit": "groups",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "groups",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "group_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "group_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "group_employee": {
        "fields": [
          {
            "name": "create_enrolment_intents",
            "title": "Create Enrolment Intents",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$BOOLEAN`",
              ],
            ],
            "short": "Controls whether enrolment intents are automatically created for the employee.",
          },
          {
            "name": "desired_policy_start_date",
            "title": "Desired Policy Start Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "The desired date for the employee's policy to start.",
            "format": "date",
          },
          {
            "name": "eligibility_status",
            "title": "Eligibility Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Eligibility status for the employee in this group.",
          },
          {
            "name": "employee_id",
            "title": "Employee Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Employee Id",
          },
          {
            "name": "enrolment_date",
            "title": "Enrolment Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "The date on which the employee agreed to enrol into the group's policies.",
            "format": "date",
          },
          {
            "name": "enrolment_status",
            "title": "Enrolment Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Enrolment status for the employee in this group.",
          },
          {
            "name": "enrolments",
            "title": "Enrolments",
            "type": "`$ARRAY`",
            "req": True,
            "short": "List of enrolments associated with the employee in this group.",
          },
          {
            "name": "group_id",
            "title": "Group Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the group.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the employee.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "policies",
            "title": "Policies",
            "type": "`$ARRAY`",
            "req": True,
            "short": "List of policies associated with the employee in this group.",
          },
          {
            "name": "policy_configuration",
            "title": "Policy Configuration",
            "type": "`$NULL`",
            "short": "Policy configuration for the employee in this group.",
          },
          {
            "name": "scheduled_group_transitions",
            "title": "Scheduled Group Transitions",
            "type": "`$ARRAY`",
            "req": True,
            "short": "List of scheduled group transitions for the employee.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "group_employee",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/groups/{group_id}/employees",
                "segments": [
                  {
                    "lit": "groups",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "employees",
                  },
                ],
                "parts": [
                  "groups",
                  "{id}",
                  "employees",
                ],
                "rename": {
                  "param": {
                    "group_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "idempotency_key",
                      "orig": "Idempotency-Key",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "group_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "group_employee_response_paged_list": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "group_employee_response_paged_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/groups/{group_id}/employees",
                "segments": [
                  {
                    "lit": "groups",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "employees",
                  },
                ],
                "parts": [
                  "groups",
                  "{id}",
                  "employees",
                ],
                "rename": {
                  "param": {
                    "group_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "group_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                  "query": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "$action": "employees",
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "group_policy": {
        "fields": [
          {
            "name": "cancellation_date",
            "title": "Cancellation Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable.",
            "format": "date",
          },
          {
            "name": "disclosures",
            "title": "Disclosures",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Disclosures associated with this group policy.",
          },
          {
            "name": "employer_id",
            "title": "Employer Id",
            "type": "`$STRING`",
            "short": "Identifier for the employer associated with this group policy.",
          },
          {
            "name": "end_date",
            "title": "End Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended.",
            "format": "date",
          },
          {
            "name": "group_id",
            "title": "Group Id",
            "type": "`$STRING`",
            "short": "Identifier for the group associated with this group policy.",
          },
          {
            "name": "health_insurance",
            "title": "Health Insurance",
            "type": "`$NULL`",
            "short": "Health insurance–specific fields (present when `type=health_insurance`).",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the group policy.",
          },
          {
            "name": "life_assurance",
            "title": "Life Assurance",
            "type": "`$NULL`",
            "short": "Life assurance–specific fields (present when `type=life_assurance`).",
          },
          {
            "name": "linked_group_policy_ids",
            "title": "Linked Group Policy Ids",
            "type": "`$ARRAY`",
            "req": True,
            "short": "The other `group_policy` objects bought together with this one as a single scheme — the policies created from the same multi-level purchase.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "plan",
            "title": "Plan",
            "type": "`$ANY`",
            "req": True,
            "short": "Plan information for this policy",
          },
          {
            "name": "provider",
            "title": "Provider",
            "type": "`$ANY`",
            "req": True,
            "short": "Provider information for this policy.",
          },
          {
            "name": "start_date",
            "title": "Start Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Policy start (effective) date in ISO 8601 (YYYY-MM-DD).",
            "format": "date",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current lifecycle state of the `group_policy`, indicating its progress from creation to activation.",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Policy type.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "group_policy",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/group_policies",
                "segments": [
                  {
                    "lit": "group_policies",
                  },
                ],
                "parts": [
                  "group_policies",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "query": [
                    {
                      "name": "employer_id",
                      "orig": "employer_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "group_id",
                      "orig": "group_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/group_policies/{group_policy_id}",
                "segments": [
                  {
                    "lit": "group_policies",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "group_policies",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "group_policy_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "group_policy_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "group_policy_intent": {
        "fields": [
          {
            "name": "action_required",
            "title": "Action Required",
            "type": "`$NULL`",
            "short": "Details of the required action when the intent is in ActionRequired status.",
          },
          {
            "name": "consent_approvals",
            "title": "Consent Approvals",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$ARRAY`",
              ],
            ],
            "short": "Consent approvals to record at the time of intent creation",
          },
          {
            "name": "cost_sharing",
            "title": "Cost Sharing",
            "type": "`$NULL`",
            "short": "Cost sharing configuration for the policy intent.",
          },
          {
            "name": "disclosures",
            "title": "Disclosures",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Disclosures associated with this intent.",
          },
          {
            "name": "due_date",
            "title": "Due Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Due date for the policy intent",
            "format": "date-time",
          },
          {
            "name": "group_id",
            "title": "Group Id",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "req": True,
            "short": "Unique identifier for the group.",
          },
          {
            "name": "group_policy_ids",
            "title": "Group Policy Ids",
            "type": "`$ARRAY`",
            "req": True,
            "short": "The group policies created for this intent, one per level, once they exist.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the group policy intent",
          },
          {
            "name": "items",
            "title": "Items",
            "type": "`$ARRAY`",
            "req": True,
            "short": "The benefits the accepted quote covers and the levels they were quoted at, echoed from the quote intent.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "Object type identifier",
            "readOnly": True,
          },
          {
            "name": "plan_id",
            "title": "Plan Id",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "req": True,
            "short": "Unique identifier for the plan.",
          },
          {
            "name": "quote_intent_id",
            "title": "Quote Intent Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the group quote intent this policy intent was created from",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of the group policy intent",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$NULL`",
            "short": "Whether the accepted quote covers one (group, plan) pair or several levels.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "group_policy_intent",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/group_policy_intents",
                "segments": [
                  {
                    "lit": "group_policy_intents",
                  },
                ],
                "parts": [
                  "group_policy_intents",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/group_policy_intents",
                "segments": [
                  {
                    "lit": "group_policy_intents",
                  },
                ],
                "parts": [
                  "group_policy_intents",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "query": [
                    {
                      "name": "group_id",
                      "orig": "group_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "plan_id",
                      "orig": "plan_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/group_policy_intents/{group_policy_intent_id}",
                "segments": [
                  {
                    "lit": "group_policy_intents",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "group_policy_intents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "group_policy_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "group_policy_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "group_policy_intent_requirement_response_paged_list": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "group_policy_intent_requirement_response_paged_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/group_policy_intents/{group_policy_intent_id}/requirements",
                "segments": [
                  {
                    "lit": "group_policy_intents",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "requirements",
                  },
                ],
                "parts": [
                  "group_policy_intents",
                  "{id}",
                  "requirements",
                ],
                "rename": {
                  "param": {
                    "group_policy_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "group_policy_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                  "query": [
                    {
                      "name": "object_id",
                      "orig": "object_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "object_type",
                      "orig": "object_type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "$action": "requirements",
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "group_quote": {
        "fields": [
          {
            "name": "breakdown",
            "title": "Breakdown",
            "type": "`$ARRAY`",
            "req": True,
            "short": "What makes up the annual cost: the premium, and the insurance premium tax charged on it when there is any.",
          },
          {
            "name": "cost_sharing",
            "title": "Cost Sharing",
            "type": "`$NULL`",
            "short": "Cost sharing configuration for the quote.",
          },
          {
            "name": "currency",
            "title": "Currency",
            "type": "`$STRING`",
            "req": True,
            "short": "Currency of the premium (e.g.",
          },
          {
            "name": "employee_count",
            "title": "Employee Count",
            "type": "`$INTEGER`",
            "req": True,
            "short": "Number of employees covered by the quote.",
            "format": "int32",
          },
          {
            "name": "expires_at",
            "title": "Expires At",
            "type": "`$STRING`",
            "req": True,
            "short": "When the quote expires",
            "format": "date-time",
          },
          {
            "name": "generated_at",
            "title": "Generated At",
            "type": "`$STRING`",
            "req": True,
            "short": "When the quote was generated",
            "format": "date-time",
          },
          {
            "name": "levels",
            "title": "Levels",
            "type": "`$ARRAY`",
            "req": True,
            "short": "The priced levels of the quote, one per level of the intent — match them up by `group_id` and `plan_id` rather than by position.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "Object type identifier",
            "readOnly": True,
          },
          {
            "name": "pdf_expires_at",
            "title": "Pdf Expires At",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "When the PDF URL expires",
            "format": "date-time",
          },
          {
            "name": "pdf_url",
            "title": "Pdf Url",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "URL to download the quote PDF.",
          },
          {
            "name": "quote_pdfs",
            "title": "Quote Pdfs",
            "type": "`$ARRAY`",
            "req": True,
            "short": "The documents the provider issued for the quote as a whole.",
          },
          {
            "name": "total_annual_premium",
            "title": "Total Annual Premium",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Total annual premium for the group, excluding any insurance premium tax.",
            "format": "double",
          },
          {
            "name": "total_monthly_premium",
            "title": "Total Monthly Premium",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Total monthly premium for the group, excluding any insurance premium tax.",
            "format": "double",
          },
        ],
        "name": "group_quote",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/group_quote_intents/{group_quote_intent_id}/quote",
                "segments": [
                  {
                    "lit": "group_quote_intents",
                  },
                  {
                    "var": "group_quote_intent_id",
                  },
                  {
                    "lit": "quote",
                  },
                ],
                "parts": [
                  "group_quote_intents",
                  "{group_quote_intent_id}",
                  "quote",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "group_quote_intent_id",
                      "orig": "group_quote_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "group_quote_intent_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.group_quote_intent",
            ],
          ],
        },
      },
      "group_quote_intent": {
        "fields": [
          {
            "name": "action_required",
            "title": "Action Required",
            "type": "`$NULL`",
            "short": "Details of the action required from the caller, if the intent is in action_required status.",
          },
          {
            "name": "consent_links",
            "title": "Consent Links",
            "type": "`$ARRAY`",
            "req": True,
            "short": "The statements the customer must accept to proceed, each a sentence and the documents it names.",
          },
          {
            "name": "cost_sharing",
            "title": "Cost Sharing",
            "type": "`$NULL`",
            "short": "Cost sharing configuration for the quote.",
          },
          {
            "name": "coverage_selections",
            "title": "Coverage Selections",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$ARRAY`",
              ],
            ],
            "short": "Plan coverage option selections for group-policy-scoped configurations.",
          },
          {
            "name": "disclosures",
            "title": "Disclosures",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Disclosures associated with this intent.",
          },
          {
            "name": "expected_start_date",
            "title": "Expected Start Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Expected start date for the insurance coverage",
            "format": "date",
          },
          {
            "name": "group_id",
            "title": "Group Id",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "req": True,
            "op": {
              "create": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$STRING`",
                  ],
                ],
              },
            },
            "short": "Unique identifier for the group.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the group quote intent",
          },
          {
            "name": "items",
            "title": "Items",
            "type": "`$ARRAY`",
            "req": True,
            "op": {
              "create": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$ARRAY`",
                  ],
                ],
              },
            },
            "short": "The benefits this intent quotes and the levels they are quoted at.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "Object type identifier",
            "readOnly": True,
          },
          {
            "name": "plan_id",
            "title": "Plan Id",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "req": True,
            "op": {
              "create": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$STRING`",
                  ],
                ],
              },
            },
            "short": "Unique identifier for the plan.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of the group quote intent",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$NULL`",
            "short": "Whether the intent quotes one (group, plan) pair or several levels.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "group_quote_intent",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/group_quote_intents/{group_quote_intent_id}/reject",
                "segments": [
                  {
                    "lit": "group_quote_intents",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "reject",
                  },
                ],
                "parts": [
                  "group_quote_intents",
                  "{id}",
                  "reject",
                ],
                "rename": {
                  "param": {
                    "group_quote_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "group_quote_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "$action": "reject",
                  "exist": [
                    "id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/group_quote_intents",
                "segments": [
                  {
                    "lit": "group_quote_intents",
                  },
                ],
                "parts": [
                  "group_quote_intents",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/group_quote_intents",
                "segments": [
                  {
                    "lit": "group_quote_intents",
                  },
                ],
                "parts": [
                  "group_quote_intents",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "query": [
                    {
                      "name": "group_id",
                      "orig": "group_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "plan_id",
                      "orig": "plan_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/group_quote_intents/{group_quote_intent_id}",
                "segments": [
                  {
                    "lit": "group_quote_intents",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "group_quote_intents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "group_quote_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "group_quote_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "group_quote_intent_requirement_response_paged_list": {
        "fields": [
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "group_quote_intent_requirement_response_paged_list",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/group_quote_intents/{group_quote_intent_id}/requirements",
                "segments": [
                  {
                    "lit": "group_quote_intents",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "requirements",
                  },
                ],
                "parts": [
                  "group_quote_intents",
                  "{id}",
                  "requirements",
                ],
                "rename": {
                  "param": {
                    "group_quote_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "group_quote_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                  "query": [
                    {
                      "name": "object_id",
                      "orig": "object_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "object_type",
                      "orig": "object_type",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "$action": "requirements",
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "plan": {
        "fields": [
          {
            "name": "available_from",
            "title": "Available From",
            "type": "`$STRING`",
            "req": True,
            "short": "The date from which this plan is available (inclusive).",
            "format": "date",
          },
          {
            "name": "available_to",
            "title": "Available To",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "The date until which this plan is available (inclusive).",
            "format": "date",
          },
          {
            "name": "country",
            "title": "Country",
            "type": "`$STRING`",
            "req": True,
            "short": "The country this plan is available in.",
          },
          {
            "name": "coverage_options",
            "title": "Coverage Options",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$ARRAY`",
              ],
            ],
            "short": "Coverage options available for this plan, organized by scope and input type.",
          },
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "req": True,
            "short": "Description of the plan.",
          },
          {
            "name": "disclosures",
            "title": "Disclosures",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Disclosures associated with this plan.",
          },
          {
            "name": "documents",
            "title": "Documents",
            "type": "`$ARRAY`",
            "req": True,
            "short": "List of plan documents (e.g., IPIDs, T&Cs).",
          },
          {
            "name": "eligible_count",
            "title": "Eligible Count",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$INTEGER`",
              ],
            ],
            "short": "Number of employees in the queried group eligible for this plan as-of `start_date`.",
            "format": "int32",
          },
          {
            "name": "employee_eligibility_criteria",
            "title": "Employee Eligibility Criteria",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Eligibility criteria that employees must meet.",
          },
          {
            "name": "employer_eligibility_criteria",
            "title": "Employer Eligibility Criteria",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Eligibility criteria that employers must meet.",
          },
          {
            "name": "health_insurance",
            "title": "Health Insurance",
            "type": "`$NULL`",
            "short": "Health insurance-specific details.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the plan.",
          },
          {
            "name": "indicative_pricing",
            "title": "Indicative Pricing",
            "type": "`$NULL`",
            "short": "Average monthly guide prices used when exact catalog pricing is unavailable.",
          },
          {
            "name": "ineligible_count",
            "title": "Ineligible Count",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$INTEGER`",
              ],
            ],
            "short": "Number of employees in the queried group ineligible for this plan as-of `start_date`.",
            "format": "int32",
          },
          {
            "name": "life_assurance",
            "title": "Life Assurance",
            "type": "`$NULL`",
            "short": "Life assurance-specific details.",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "The name of the plan.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "Object type.",
            "readOnly": True,
          },
          {
            "name": "provider",
            "title": "Provider",
            "type": "`$ANY`",
            "req": True,
            "short": "The provider offering this plan.",
          },
          {
            "name": "total_count",
            "title": "Total Count",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$INTEGER`",
              ],
            ],
            "short": "Total employees in the queried group.",
            "format": "int32",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "req": True,
            "short": "The benefit type of the plan.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "plan",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/plans",
                "segments": [
                  {
                    "lit": "plans",
                  },
                ],
                "parts": [
                  "plans",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "query": [
                    {
                      "name": "available_on",
                      "orig": "available_on",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "country",
                      "orig": "country",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                    {
                      "name": "group_id",
                      "orig": "group_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "provider_id",
                      "orig": "provider_id",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "sort_by",
                      "orig": "sort_by",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "sort_dir",
                      "orig": "sort_dir",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "start_date",
                      "orig": "start_date",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/plans/{plan_id}",
                "segments": [
                  {
                    "lit": "plans",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "plans",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "plan_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "plan_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                  "query": [
                    {
                      "name": "group_id",
                      "orig": "group_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "start_date",
                      "orig": "start_date",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "policy": {
        "fields": [
          {
            "name": "bundling_type",
            "title": "Bundling Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Indicates how this policy is bundled within a group",
          },
          {
            "name": "cancellation_date",
            "title": "Cancellation Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Date the policy was cancelled (if applicable)",
            "format": "date",
          },
          {
            "name": "disclosures",
            "title": "Disclosures",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Disclosures associated with this policy.",
          },
          {
            "name": "employee_id",
            "title": "Employee Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Identifier of the employee associated with this policy.",
          },
          {
            "name": "end_date",
            "title": "End Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "Policy end date (inclusive) in ISO 8601, or null if open-ended",
            "format": "date",
          },
          {
            "name": "group_id",
            "title": "Group Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Identifier of the group associated with this policy.",
          },
          {
            "name": "group_policy_id",
            "title": "Group Policy Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Identifier of the group policy id associated with this policy.",
          },
          {
            "name": "health_insurance",
            "title": "Health Insurance",
            "type": "`$NULL`",
            "short": "Health insurance–specific fields (present when `type=health_insurance`)",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the policy.",
          },
          {
            "name": "life_assurance",
            "title": "Life Assurance",
            "type": "`$NULL`",
            "short": "Life assurance–specific fields (present when `type=life_assurance`).",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "Object type",
            "readOnly": True,
          },
          {
            "name": "opted_out_at",
            "title": "Opted Out At",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "UTC timestamp of the moment the member opted out of this policy during the cooling-off window.",
            "format": "date-time",
          },
          {
            "name": "plan",
            "title": "Plan",
            "type": "`$ANY`",
            "req": True,
            "short": "Plan information for this policy",
          },
          {
            "name": "provider",
            "title": "Provider",
            "type": "`$ANY`",
            "req": True,
            "short": "Provider information for this policy",
          },
          {
            "name": "start_date",
            "title": "Start Date",
            "type": "`$STRING`",
            "req": True,
            "short": "Policy start (effective) date in ISO 8601 (YYYY-MM-DD)",
            "format": "date",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current lifecycle state of the policy",
          },
          {
            "name": "type",
            "title": "Type",
            "type": "`$STRING`",
            "req": True,
            "short": "Policy type.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "policy",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/policies",
                "segments": [
                  {
                    "lit": "policies",
                  },
                ],
                "parts": [
                  "policies",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "query": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "group_id",
                      "orig": "group_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "group_policy_id",
                      "orig": "group_policy_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/policies/{policy_id}",
                "segments": [
                  {
                    "lit": "policies",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "policies",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "policy_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "policy_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "policy_amendment_intent": {
        "fields": [
          {
            "name": "amendment_reason",
            "title": "Amendment Reason",
            "type": "`$ANY`",
            "req": True,
            "short": "The reason for the policy amendment.",
          },
          {
            "name": "disclosures",
            "title": "Disclosures",
            "type": "`$ARRAY`",
            "req": True,
            "short": "Disclosures associated with this intent.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the policy amendment intent.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "Object type identifier.",
            "readOnly": True,
          },
          {
            "name": "pending_confirmation",
            "title": "Pending Confirmation",
            "type": "`$NULL`",
            "short": "Information about the pending confirmation if the intent status is `pending_confirmation`.",
          },
          {
            "name": "policy_id",
            "title": "Policy Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The policy ID for which the amendment is requested.",
          },
          {
            "name": "processing_error",
            "title": "Processing Error",
            "type": "`$NULL`",
            "short": "Information about the processing error if the intent status is `processing_error`.",
          },
          {
            "name": "requested_changes",
            "title": "Requested Changes",
            "type": "`$ARRAY`",
            "req": True,
            "short": "List of requested changes to the policy.",
          },
          {
            "name": "required_action",
            "title": "Required Action",
            "type": "`$NULL`",
            "short": "Information about the required action if the intent status is `action_required`.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of the policy amendment intent.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "policy_amendment_intent",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/policies/{policy_id}/policy_amendment_intents/{id}/cancel",
                "segments": [
                  {
                    "lit": "policies",
                  },
                  {
                    "var": "policy_id",
                  },
                  {
                    "lit": "policy_amendment_intents",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "cancel",
                  },
                ],
                "parts": [
                  "policies",
                  "{policy_id}",
                  "policy_amendment_intents",
                  "{id}",
                  "cancel",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "policy_id",
                      "orig": "policy_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "$action": "cancel",
                  "exist": [
                    "id",
                    "policy_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}/confirm",
                "segments": [
                  {
                    "lit": "policies",
                  },
                  {
                    "var": "policy_id",
                  },
                  {
                    "lit": "policy_amendment_intents",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "confirm",
                  },
                ],
                "parts": [
                  "policies",
                  "{policy_id}",
                  "policy_amendment_intents",
                  "{id}",
                  "confirm",
                ],
                "rename": {
                  "param": {
                    "policy_amendment_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "policy_amendment_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "policy_id",
                      "orig": "policy_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "$action": "confirm",
                  "exist": [
                    "id",
                    "policy_id",
                  ],
                },
              },
              {
                "kind": "http",
                "method": "POST",
                "orig": "/policies/{policy_id}/policy_amendment_intents",
                "segments": [
                  {
                    "lit": "policies",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "policy_amendment_intents",
                  },
                ],
                "parts": [
                  "policies",
                  "{id}",
                  "policy_amendment_intents",
                ],
                "rename": {
                  "param": {
                    "policy_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "policy_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/policies/{policy_id}/policy_amendment_intents",
                "segments": [
                  {
                    "lit": "policies",
                  },
                  {
                    "var": "id",
                  },
                  {
                    "lit": "policy_amendment_intents",
                  },
                ],
                "parts": [
                  "policies",
                  "{id}",
                  "policy_amendment_intents",
                ],
                "rename": {
                  "param": {
                    "policy_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "policy_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}",
                "segments": [
                  {
                    "lit": "policies",
                  },
                  {
                    "var": "policy_id",
                  },
                  {
                    "lit": "policy_amendment_intents",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "policies",
                  "{policy_id}",
                  "policy_amendment_intents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "policy_amendment_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "policy_amendment_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "policy_id",
                      "orig": "policy_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                    "policy_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.policy",
            ],
          ],
        },
      },
      "policy_import_intent": {
        "fields": [
          {
            "name": "associated_persons",
            "title": "Associated Persons",
            "type": "`$ARRAY`",
            "req": True,
            "op": {
              "create": {
                "type": [
                  "`$ONE`",
                  [
                    "`$NULL`",
                    "`$ARRAY`",
                  ],
                ],
              },
            },
            "short": "List of associated persons linked to this policy import.",
          },
          {
            "name": "employee_id",
            "title": "Employee Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The employee ID for the policy import.",
          },
          {
            "name": "group_id",
            "title": "Group Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The group ID for the policy import.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the policy import intent.",
          },
          {
            "name": "member_number",
            "title": "Member Number",
            "type": "`$STRING`",
            "req": True,
            "short": "The member number assigned by the provider.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "Object type identifier.",
            "readOnly": True,
          },
          {
            "name": "policy_end_date",
            "title": "Policy End Date",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "The end date of the policy.",
            "format": "date",
          },
          {
            "name": "policy_start_date",
            "title": "Policy Start Date",
            "type": "`$STRING`",
            "req": True,
            "short": "The start date of the policy.",
            "format": "date",
          },
          {
            "name": "provider_policy_number",
            "title": "Provider Policy Number",
            "type": "`$STRING`",
            "req": True,
            "short": "The provider's policy number.",
          },
          {
            "name": "status",
            "title": "Status",
            "type": "`$STRING`",
            "req": True,
            "short": "Current status of the policy import intent.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "policy_import_intent",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/policy_import_intents",
                "segments": [
                  {
                    "lit": "policy_import_intents",
                  },
                ],
                "parts": [
                  "policy_import_intents",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/policy_import_intents",
                "segments": [
                  {
                    "lit": "policy_import_intents",
                  },
                ],
                "parts": [
                  "policy_import_intents",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "query": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "group_id",
                      "orig": "group_id",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                      "field": True,
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "status",
                      "orig": "status",
                      "type": "`$STRING`",
                      "kind": "query",
                      "field": True,
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/policy_import_intents/{policy_import_intent_id}",
                "segments": [
                  {
                    "lit": "policy_import_intents",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "policy_import_intents",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "policy_import_intent_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "policy_import_intent_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "pii_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "provider": {
        "fields": [
          {
            "name": "description",
            "title": "Description",
            "type": "`$STRING`",
            "req": True,
            "short": "Description of the provider.",
          },
          {
            "name": "employer_platform_url",
            "title": "Employer Platform Url",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "URL to the employer portal/platform for this provider, if available.",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the provider.",
          },
          {
            "name": "kota_hub_url",
            "title": "Kota Hub Url",
            "type": [
              "`$ONE`",
              [
                "`$NULL`",
                "`$STRING`",
              ],
            ],
            "short": "URL to the Kota Hub page for this platform, if configured.",
          },
          {
            "name": "logo_url",
            "title": "Logo Url",
            "type": "`$STRING`",
            "req": True,
            "short": "URL to the provider's logo image.",
          },
          {
            "name": "name",
            "title": "Name",
            "type": "`$STRING`",
            "req": True,
            "short": "The name of the provider.",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "Object type.",
            "readOnly": True,
          },
          {
            "name": "support_phone",
            "title": "Support Phone",
            "type": "`$STRING`",
            "req": True,
            "short": "Customer support phone number.",
          },
          {
            "name": "supported_countries",
            "title": "Supported Countries",
            "type": "`$ARRAY`",
            "req": True,
            "short": "List of countries supported by this provider.",
          },
          {
            "name": "website_url",
            "title": "Website Url",
            "type": "`$STRING`",
            "req": True,
            "short": "The provider's main website URL.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "provider",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/providers",
                "segments": [
                  {
                    "lit": "providers",
                  },
                ],
                "parts": [
                  "providers",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "query": [
                    {
                      "name": "country",
                      "orig": "country",
                      "type": "`$STRING`",
                      "kind": "query",
                    },
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/providers/{provider_id}",
                "segments": [
                  {
                    "lit": "providers",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "providers",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "provider_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "provider_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "salary": {
        "fields": [
          {
            "name": "amount",
            "title": "Amount",
            "type": "`$NUMBER`",
            "req": True,
            "short": "Salary amount, in the given currency and pay frequency",
            "format": "double",
          },
          {
            "name": "currency",
            "title": "Currency",
            "type": "`$STRING`",
            "req": True,
            "short": "ISO currency code the amount is denominated in",
          },
          {
            "name": "effective_from",
            "title": "Effective From",
            "type": "`$STRING`",
            "req": True,
            "short": "Date from which this salary is effective",
            "format": "date",
          },
          {
            "name": "employee_id",
            "title": "Employee Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the employee this salary belongs to",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "Unique identifier for the salary record",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "pay_frequency",
            "title": "Pay Frequency",
            "type": "`$STRING`",
            "req": True,
            "short": "The period this amount represents (e.g.",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "salary",
        "op": {
          "create": {
            "input": "data",
            "name": "create",
            "points": [
              {
                "kind": "http",
                "method": "POST",
                "orig": "/employees/{employee_id}/salaries",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "employee_id",
                  },
                  {
                    "lit": "salaries",
                  },
                ],
                "parts": [
                  "employees",
                  "{employee_id}",
                  "salaries",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "idempotency_key",
                      "orig": "Idempotency-Key",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employee_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employees/{employee_id}/salaries",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "employee_id",
                  },
                  {
                    "lit": "salaries",
                  },
                ],
                "parts": [
                  "employees",
                  "{employee_id}",
                  "salaries",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employee_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employees/{employee_id}/salaries/{salary_id}",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "employee_id",
                  },
                  {
                    "lit": "salaries",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "employees",
                  "{employee_id}",
                  "salaries",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "salary_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "id",
                      "orig": "salary_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "sal_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employee_id",
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
              {
                "kind": "http",
                "method": "GET",
                "orig": "/employees/{employee_id}/salaries/current",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "employee_id",
                  },
                  {
                    "lit": "salaries",
                  },
                  {
                    "lit": "current",
                  },
                ],
                "parts": [
                  "employees",
                  "{employee_id}",
                  "salaries",
                  "current",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "$action": "current",
                  "exist": [
                    "employee_id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "remove": {
            "input": "data",
            "name": "remove",
            "points": [
              {
                "kind": "http",
                "method": "DELETE",
                "orig": "/employees/{employee_id}/salaries/{salary_id}",
                "segments": [
                  {
                    "lit": "employees",
                  },
                  {
                    "var": "employee_id",
                  },
                  {
                    "lit": "salaries",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "employees",
                  "{employee_id}",
                  "salaries",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "salary_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "employee_id",
                      "orig": "employee_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                    {
                      "name": "id",
                      "orig": "salary_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "sal_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "employee_id",
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [
            [
              "$.main.kit.entity.employee",
            ],
          ],
        },
      },
      "webhook_endpoint": {
        "fields": [
          {
            "name": "created_at",
            "title": "Created At",
            "type": "`$STRING`",
            "req": True,
            "short": "The date and time the endpoint was created",
            "format": "date-time",
          },
          {
            "name": "endpoint_url",
            "title": "Endpoint Url",
            "type": "`$STRING`",
            "req": True,
            "short": "The registered URL of the endpoint",
          },
          {
            "name": "id",
            "title": "Id",
            "type": "`$STRING`",
            "req": True,
            "short": "The unique identifier of the endpoint",
          },
          {
            "name": "object",
            "title": "Object",
            "type": "`$STRING`",
            "short": "The object type",
            "readOnly": True,
          },
          {
            "name": "subscribed_events",
            "title": "Subscribed Events",
            "type": "`$ARRAY`",
            "req": True,
            "short": "The events the endpoint is subscribed to",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
        },
        "name": "webhook_endpoint",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks/endpoints",
                "segments": [
                  {
                    "lit": "webhooks",
                  },
                  {
                    "lit": "endpoints",
                  },
                ],
                "parts": [
                  "webhooks",
                  "endpoints",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.items`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "query": [
                    {
                      "name": "page",
                      "orig": "page",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                    {
                      "name": "page_size",
                      "orig": "page_size",
                      "type": "`$INTEGER`",
                      "kind": "query",
                    },
                  ],
                },
                "select": {},
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/webhooks/endpoints/{webhook_endpoint_id}",
                "segments": [
                  {
                    "lit": "webhooks",
                  },
                  {
                    "lit": "endpoints",
                  },
                  {
                    "var": "id",
                  },
                ],
                "parts": [
                  "webhooks",
                  "endpoints",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "webhook_endpoint_id": "id",
                  },
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "header": [
                    {
                      "name": "x_platform_id",
                      "orig": "X-Platform-Id",
                      "type": "`$STRING`",
                      "kind": "header",
                    },
                  ],
                  "params": [
                    {
                      "name": "id",
                      "orig": "webhook_endpoint_id",
                      "type": "`$STRING`",
                      "kind": "param",
                      "reqd": True,
                      "example": "whe_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "response": {
                  "kind": "json",
                  "media": "application/json",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
