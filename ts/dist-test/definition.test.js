"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "associated_person",
        "accessor": "AssociatedPerson",
        "op": "create",
        "method": "POST",
        "path": "/employees/{employee_id}/associated_persons",
        "args": [
            {
                "name": "employee_id",
                "wire": "employee_id",
                "value": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "first_name": "x",
            "last_name": "x",
            "date_of_birth": "2024-12-01",
            "sex_at_birth": "male",
            "relationship_type": "spouse",
            "email": "x",
            "phone_number": "x",
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "associated_person",
        "accessor": "AssociatedPerson",
        "op": "list",
        "method": "GET",
        "path": "/employees/{employee_id}/associated_persons",
        "args": [
            {
                "name": "employee_id",
                "wire": "employee_id",
                "value": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "first_name": "x",
                    "last_name": "x",
                    "date_of_birth": "2024-12-01",
                    "sex_at_birth": "male",
                    "relationship_type": "spouse",
                    "email": "x",
                    "phone_number": "x",
                    "object": "x"
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "associated_person",
        "accessor": "AssociatedPerson",
        "op": "load",
        "method": "GET",
        "path": "/employees/{employee_id}/associated_persons/{associated_person_id}",
        "args": [
            {
                "name": "employee_id",
                "wire": "employee_id",
                "value": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            {
                "name": "id",
                "wire": "associated_person_id",
                "value": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "first_name": "x",
            "last_name": "x",
            "date_of_birth": "2024-12-01",
            "sex_at_birth": "male",
            "relationship_type": "spouse",
            "email": "x",
            "phone_number": "x",
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "associated_person",
        "accessor": "AssociatedPerson",
        "op": "remove",
        "method": "DELETE",
        "path": "/employees/{employee_id}/associated_persons/{associated_person_id}",
        "args": [
            {
                "name": "employee_id",
                "wire": "employee_id",
                "value": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            {
                "name": "id",
                "wire": "associated_person_id",
                "value": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "first_name": "x",
            "last_name": "x",
            "date_of_birth": "2024-12-01",
            "sex_at_birth": "male",
            "relationship_type": "spouse",
            "email": "x",
            "phone_number": "x",
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "associated_person",
        "accessor": "AssociatedPerson",
        "op": "update",
        "method": "PUT",
        "path": "/employees/{employee_id}/associated_persons/{associated_person_id}",
        "args": [
            {
                "name": "employee_id",
                "wire": "employee_id",
                "value": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            {
                "name": "id",
                "wire": "associated_person_id",
                "value": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "first_name": "x",
            "last_name": "x",
            "date_of_birth": "2024-12-01",
            "sex_at_birth": "male",
            "relationship_type": "spouse",
            "email": "x",
            "phone_number": "x",
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "associated_person_eligibility_response_paged_list",
        "accessor": "AssociatedPersonEligibilityResponsePagedList",
        "op": "list",
        "method": "GET",
        "path": "/dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility",
        "args": [
            {
                "name": "dependents_management_intent_id",
                "wire": "dependents_management_intent_id",
                "value": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "associated_person_id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "first_name": "x",
                    "last_name": "x",
                    "date_of_birth": "2024-12-01",
                    "sex_at_birth": "male",
                    "relationship": "spouse",
                    "eligibility_status": "pending",
                    "ineligibility_reason": "x",
                    "object": "x"
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "contribution_report",
        "accessor": "ContributionReport",
        "op": "create",
        "method": "POST",
        "path": "/contribution_reports/{contribution_report_id}/finalize",
        "action": "finalize",
        "args": [
            {
                "name": "id",
                "wire": "contribution_report_id",
                "value": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "object": "x",
            "id": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "external_customer_id": "x",
            "period": {
                "from_date": "2024-12-01",
                "to_date": "2024-12-01"
            },
            "status": "open",
            "finalized_at": "2024-12-01T00:00:00Z",
            "created_at": "2024-12-01T00:00:00Z",
            "last_updated_at": "2024-12-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "contribution_report",
        "accessor": "ContributionReport",
        "op": "list",
        "method": "GET",
        "path": "/contribution_reports",
        "args": [],
        "select": {
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "external_customer_id": "v1",
            "month": "v1",
            "page": "v1",
            "page_size": "v1",
            "status": "v1",
            "year": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "employer_id",
            "status",
            "month",
            "year",
            "external_customer_id",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "employer_id",
                "wire": "employer_id"
            },
            {
                "name": "external_customer_id",
                "wire": "external_customer_id"
            },
            {
                "name": "month",
                "wire": "month"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            },
            {
                "name": "status",
                "wire": "status"
            },
            {
                "name": "year",
                "wire": "year"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "object": "x",
                    "id": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "external_customer_id": "x",
                    "period": {
                        "from_date": "2024-12-01",
                        "to_date": "2024-12-01"
                    },
                    "status": "open",
                    "finalized_at": "2024-12-01T00:00:00Z",
                    "created_at": "2024-12-01T00:00:00Z",
                    "last_updated_at": "2024-12-01T00:00:00Z"
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "contribution_report",
        "accessor": "ContributionReport",
        "op": "load",
        "method": "GET",
        "path": "/contribution_reports/{contribution_report_id}",
        "args": [
            {
                "name": "id",
                "wire": "contribution_report_id",
                "value": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "object": "x",
            "id": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "external_customer_id": "x",
            "period": {
                "from_date": "2024-12-01",
                "to_date": "2024-12-01"
            },
            "status": "open",
            "finalized_at": "2024-12-01T00:00:00Z",
            "created_at": "2024-12-01T00:00:00Z",
            "last_updated_at": "2024-12-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "contribution_report_employee_breakdown",
        "accessor": "ContributionReportEmployeeBreakdown",
        "op": "load",
        "method": "GET",
        "path": "/contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}",
        "args": [
            {
                "name": "contribution_report_id",
                "wire": "contribution_report_id",
                "value": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            {
                "name": "id",
                "wire": "employee_id",
                "value": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "object": "x",
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "contribution_report_id": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "external_customer_id": "x",
            "period": {
                "from_date": "2024-12-01",
                "to_date": "2024-12-01"
            },
            "currency": "eur",
            "status": "open",
            "finalized_at": "2024-12-01T00:00:00Z",
            "created_at": "2024-12-01T00:00:00Z",
            "last_updated_at": "2024-12-01T00:00:00Z",
            "health_insurance": {
                "employer_contributions": [
                    {
                        "id": "ct_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "category": "gross_premium",
                        "member_type": "policyholder",
                        "adjustment": true,
                        "adjustment_for": "ct_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "amount": 123.45,
                        "type": "recurring",
                        "note": "x",
                        "cover_period": {},
                        "policy_id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "employee_policy_id": "eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "reporting_month": "2024-12-01"
                    }
                ],
                "employee_contributions": [
                    {
                        "id": "ct_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "category": "gross_premium",
                        "member_type": "policyholder",
                        "adjustment": true,
                        "adjustment_for": "ct_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "amount": 123.45,
                        "type": "recurring",
                        "note": "x",
                        "cover_period": {},
                        "policy_id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "employee_policy_id": "eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "reporting_month": "2024-12-01"
                    }
                ]
            }
        },
        "idField": "id"
    },
    {
        "entity": "contribution_report_employee_breakdown_response_paged_list",
        "accessor": "ContributionReportEmployeeBreakdownResponsePagedList",
        "op": "list",
        "method": "GET",
        "path": "/contribution_reports/{contribution_report_id}/employee_breakdowns",
        "action": "employee_breakdowns",
        "args": [
            {
                "name": "id",
                "wire": "contribution_report_id",
                "value": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "object": "x",
                    "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "contribution_report_id": "ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "external_customer_id": "x",
                    "period": {
                        "from_date": "2024-12-01",
                        "to_date": "2024-12-01"
                    },
                    "currency": "eur",
                    "status": "open",
                    "finalized_at": "2024-12-01T00:00:00Z",
                    "created_at": "2024-12-01T00:00:00Z",
                    "last_updated_at": "2024-12-01T00:00:00Z",
                    "health_insurance": {
                        "employer_contributions": [
                            {}
                        ],
                        "employee_contributions": [
                            {}
                        ]
                    }
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "create_hosted_session_token",
        "accessor": "CreateHostedSessionToken",
        "op": "create",
        "method": "POST",
        "path": "/hosted/sessions",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "link": "x",
            "expiry": "2024-12-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "create_session_token",
        "accessor": "CreateSessionToken",
        "op": "create",
        "method": "POST",
        "path": "/embed/sessions",
        "args": [],
        "select": {},
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "token": "x",
            "expiry": "2024-12-01T00:00:00Z"
        },
        "idField": "id"
    },
    {
        "entity": "dependent",
        "accessor": "Dependent",
        "op": "create",
        "method": "POST",
        "path": "/dependents_management_intents/{dependents_management_intent_id}/dependents",
        "args": [
            {
                "name": "dependents_management_intent_id",
                "wire": "dependents_management_intent_id",
                "value": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "idempotency_key",
                "wire": "Idempotency-Key",
                "value": "h1"
            },
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h2"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "object": "x",
            "parent_intent_id": "x",
            "parent_intent_type": "policy_amendment_intent",
            "status": "action_required",
            "dependents": [
                {
                    "associated_person_id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "status": "pending_confirmation",
                    "coverage_selections": [
                        {
                            "configuration_id": "pc_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "options": [
                                {}
                            ]
                        }
                    ],
                    "requirement_id": "ar_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                }
            ],
            "plan": {
                "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                "name": "x",
                "description": "x",
                "pricing": {
                    "type": "per_member",
                    "per_member": {},
                    "tier_based": {}
                }
            },
            "coverage_options": [
                {
                    "id": "pc_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "name": "x",
                    "description": "x",
                    "scope": "group_policy",
                    "input_type": "single_select",
                    "required": true,
                    "min_selections": 1,
                    "max_selections": 1,
                    "sort_order": 1,
                    "group_label": "x",
                    "options": [
                        {
                            "id": "pco_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "name": "x",
                            "description": "x",
                            "learn_more_url": "x",
                            "from_price": 1,
                            "benefits": [
                                {}
                            ],
                            "sub_options": [
                                {}
                            ],
                            "eligibility_criteria": [
                                {}
                            ]
                        }
                    ]
                }
            ],
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ],
            "action_required": {
                "code": "remove_restricted_or_ineligible_dependents",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01T00:00:00Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "dependent",
        "accessor": "Dependent",
        "op": "remove",
        "method": "DELETE",
        "path": "/dependents_management_intents/{dependents_management_intent_id}/dependents/{associated_person_id}",
        "args": [
            {
                "name": "dependents_management_intent_id",
                "wire": "dependents_management_intent_id",
                "value": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            {
                "name": "id",
                "wire": "associated_person_id",
                "value": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "object": "x",
            "parent_intent_id": "x",
            "parent_intent_type": "policy_amendment_intent",
            "status": "action_required",
            "dependents": [
                {
                    "associated_person_id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "status": "pending_confirmation",
                    "coverage_selections": [
                        {
                            "configuration_id": "pc_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "options": [
                                {}
                            ]
                        }
                    ],
                    "requirement_id": "ar_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                }
            ],
            "plan": {
                "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                "name": "x",
                "description": "x",
                "pricing": {
                    "type": "per_member",
                    "per_member": {},
                    "tier_based": {}
                }
            },
            "coverage_options": [
                {
                    "id": "pc_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "name": "x",
                    "description": "x",
                    "scope": "group_policy",
                    "input_type": "single_select",
                    "required": true,
                    "min_selections": 1,
                    "max_selections": 1,
                    "sort_order": 1,
                    "group_label": "x",
                    "options": [
                        {
                            "id": "pco_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "name": "x",
                            "description": "x",
                            "learn_more_url": "x",
                            "from_price": 1,
                            "benefits": [
                                {}
                            ],
                            "sub_options": [
                                {}
                            ],
                            "eligibility_criteria": [
                                {}
                            ]
                        }
                    ]
                }
            ],
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ],
            "action_required": {
                "code": "remove_restricted_or_ineligible_dependents",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01T00:00:00Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "dependents_management_intent",
        "accessor": "DependentsManagementIntent",
        "op": "create",
        "method": "POST",
        "path": "/policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent",
        "args": [
            {
                "name": "policy_amendment_intent_id",
                "wire": "id",
                "value": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            {
                "name": "policy_id",
                "wire": "policy_id",
                "value": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "object": "x",
            "parent_intent_id": "x",
            "parent_intent_type": "policy_amendment_intent",
            "status": "action_required",
            "dependents": [
                {
                    "associated_person_id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "status": "pending_confirmation",
                    "coverage_selections": [
                        {
                            "configuration_id": "pc_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "options": [
                                {}
                            ]
                        }
                    ],
                    "requirement_id": "ar_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                }
            ],
            "plan": {
                "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                "name": "x",
                "description": "x",
                "pricing": {
                    "type": "per_member",
                    "per_member": {},
                    "tier_based": {}
                }
            },
            "coverage_options": [
                {
                    "id": "pc_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "name": "x",
                    "description": "x",
                    "scope": "group_policy",
                    "input_type": "single_select",
                    "required": true,
                    "min_selections": 1,
                    "max_selections": 1,
                    "sort_order": 1,
                    "group_label": "x",
                    "options": [
                        {
                            "id": "pco_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "name": "x",
                            "description": "x",
                            "learn_more_url": "x",
                            "from_price": 1,
                            "benefits": [
                                {}
                            ],
                            "sub_options": [
                                {}
                            ],
                            "eligibility_criteria": [
                                {}
                            ]
                        }
                    ]
                }
            ],
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ],
            "action_required": {
                "code": "remove_restricted_or_ineligible_dependents",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01T00:00:00Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "dependents_management_intent",
        "accessor": "DependentsManagementIntent",
        "op": "create",
        "method": "POST",
        "path": "/enrolment_intents/{enrolment_intent_id}/create_dependents_management_intent",
        "args": [
            {
                "name": "enrolment_intent_id",
                "wire": "enrolment_intent_id",
                "value": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "object": "x",
            "parent_intent_id": "x",
            "parent_intent_type": "policy_amendment_intent",
            "status": "action_required",
            "dependents": [
                {
                    "associated_person_id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "status": "pending_confirmation",
                    "coverage_selections": [
                        {
                            "configuration_id": "pc_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "options": [
                                {}
                            ]
                        }
                    ],
                    "requirement_id": "ar_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                }
            ],
            "plan": {
                "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                "name": "x",
                "description": "x",
                "pricing": {
                    "type": "per_member",
                    "per_member": {},
                    "tier_based": {}
                }
            },
            "coverage_options": [
                {
                    "id": "pc_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "name": "x",
                    "description": "x",
                    "scope": "group_policy",
                    "input_type": "single_select",
                    "required": true,
                    "min_selections": 1,
                    "max_selections": 1,
                    "sort_order": 1,
                    "group_label": "x",
                    "options": [
                        {
                            "id": "pco_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "name": "x",
                            "description": "x",
                            "learn_more_url": "x",
                            "from_price": 1,
                            "benefits": [
                                {}
                            ],
                            "sub_options": [
                                {}
                            ],
                            "eligibility_criteria": [
                                {}
                            ]
                        }
                    ]
                }
            ],
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ],
            "action_required": {
                "code": "remove_restricted_or_ineligible_dependents",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01T00:00:00Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "dependents_management_intent",
        "accessor": "DependentsManagementIntent",
        "op": "create",
        "method": "POST",
        "path": "/dependents_management_intents/{dependents_management_intent_id}/cancel",
        "action": "cancel",
        "args": [
            {
                "name": "id",
                "wire": "dependents_management_intent_id",
                "value": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "dependents_management_intent",
        "accessor": "DependentsManagementIntent",
        "op": "create",
        "method": "POST",
        "path": "/dependents_management_intents/{dependents_management_intent_id}/confirm",
        "action": "confirm",
        "args": [
            {
                "name": "id",
                "wire": "dependents_management_intent_id",
                "value": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "dependents_management_intent",
        "accessor": "DependentsManagementIntent",
        "op": "load",
        "method": "GET",
        "path": "/dependents_management_intents/{dependents_management_intent_id}",
        "args": [
            {
                "name": "id",
                "wire": "dependents_management_intent_id",
                "value": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "object": "x",
            "parent_intent_id": "x",
            "parent_intent_type": "policy_amendment_intent",
            "status": "action_required",
            "dependents": [
                {
                    "associated_person_id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "status": "pending_confirmation",
                    "coverage_selections": [
                        {
                            "configuration_id": "pc_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "options": [
                                {}
                            ]
                        }
                    ],
                    "requirement_id": "ar_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                }
            ],
            "plan": {
                "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                "name": "x",
                "description": "x",
                "pricing": {
                    "type": "per_member",
                    "per_member": {},
                    "tier_based": {}
                }
            },
            "coverage_options": [
                {
                    "id": "pc_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "name": "x",
                    "description": "x",
                    "scope": "group_policy",
                    "input_type": "single_select",
                    "required": true,
                    "min_selections": 1,
                    "max_selections": 1,
                    "sort_order": 1,
                    "group_label": "x",
                    "options": [
                        {
                            "id": "pco_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "name": "x",
                            "description": "x",
                            "learn_more_url": "x",
                            "from_price": 1,
                            "benefits": [
                                {}
                            ],
                            "sub_options": [
                                {}
                            ],
                            "eligibility_criteria": [
                                {}
                            ]
                        }
                    ]
                }
            ],
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ],
            "action_required": {
                "code": "remove_restricted_or_ineligible_dependents",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01T00:00:00Z"
            }
        },
        "idField": "id"
    },
    {
        "entity": "eligibility_check",
        "accessor": "EligibilityCheck",
        "op": "create",
        "method": "POST",
        "path": "/groups/{group_id}/eligibility_check",
        "args": [
            {
                "name": "group_id",
                "wire": "group_id",
                "value": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "object": "x",
            "eligibility_status": "pending",
            "reasons": [
                {
                    "code": "x",
                    "message": "x"
                }
            ],
            "provider": {
                "id": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                "name": "x",
                "description": "x",
                "logo_url": "x"
            },
            "plan": {
                "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                "name": "x",
                "description": "x"
            }
        },
        "idField": "id"
    },
    {
        "entity": "employee",
        "accessor": "Employee",
        "op": "create",
        "method": "POST",
        "path": "/employees/{employee_id}/offboard",
        "action": "offboard",
        "args": [
            {
                "name": "id",
                "wire": "employee_id",
                "value": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "idempotency_key",
                "wire": "Idempotency-Key",
                "value": "h1"
            },
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h2"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "pending",
            "external_customer_id": "x",
            "first_name": "x",
            "last_name": "x",
            "date_of_birth": "2024-12-01",
            "sex_at_birth": "male",
            "home_address": {
                "line1": "x",
                "line2": "x",
                "line3": "x",
                "city": "x",
                "state": "x",
                "postal_code": "x",
                "country_code": "af"
            },
            "nationality": "af",
            "national_tax_id": "x",
            "start_on": "2024-12-01",
            "earliest_benefits_start_date": "2024-12-01",
            "phone_number": "x",
            "email": "x",
            "offboard_on": "2024-12-01T00:00:00Z",
            "bank_account": {
                "account_number_last4": "x"
            },
            "metadata": {},
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "employee",
        "accessor": "Employee",
        "op": "create",
        "method": "POST",
        "path": "/employees/{employee_id}/offboard/cancel",
        "action": "offboard_cancel",
        "args": [
            {
                "name": "id",
                "wire": "employee_id",
                "value": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "idempotency_key",
                "wire": "Idempotency-Key",
                "value": "h1"
            },
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h2"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "pending",
            "external_customer_id": "x",
            "first_name": "x",
            "last_name": "x",
            "date_of_birth": "2024-12-01",
            "sex_at_birth": "male",
            "home_address": {
                "line1": "x",
                "line2": "x",
                "line3": "x",
                "city": "x",
                "state": "x",
                "postal_code": "x",
                "country_code": "af"
            },
            "nationality": "af",
            "national_tax_id": "x",
            "start_on": "2024-12-01",
            "earliest_benefits_start_date": "2024-12-01",
            "phone_number": "x",
            "email": "x",
            "offboard_on": "2024-12-01T00:00:00Z",
            "bank_account": {
                "account_number_last4": "x"
            },
            "metadata": {},
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "employee",
        "accessor": "Employee",
        "op": "create",
        "method": "POST",
        "path": "/employees",
        "args": [],
        "select": {},
        "headers": [
            {
                "name": "idempotency_key",
                "wire": "Idempotency-Key",
                "value": "h1"
            },
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h2"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "pending",
            "external_customer_id": "x",
            "first_name": "x",
            "last_name": "x",
            "date_of_birth": "2024-12-01",
            "sex_at_birth": "male",
            "home_address": {
                "line1": "x",
                "line2": "x",
                "line3": "x",
                "city": "x",
                "state": "x",
                "postal_code": "x",
                "country_code": "af"
            },
            "nationality": "af",
            "national_tax_id": "x",
            "start_on": "2024-12-01",
            "earliest_benefits_start_date": "2024-12-01",
            "phone_number": "x",
            "email": "x",
            "offboard_on": "2024-12-01T00:00:00Z",
            "bank_account": {
                "account_number_last4": "x"
            },
            "metadata": {},
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "employee",
        "accessor": "Employee",
        "op": "list",
        "method": "GET",
        "path": "/employees",
        "args": [],
        "select": {
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "external_customer_id": "v1",
            "filter": "v1",
            "metadata_id": "v1",
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "filter",
            "employer_id",
            "external_customer_id",
            "metadata_id",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "employer_id",
                "wire": "employer_id"
            },
            {
                "name": "external_customer_id",
                "wire": "external_customer_id"
            },
            {
                "name": "filter",
                "wire": "filter"
            },
            {
                "name": "metadata_id",
                "wire": "metadata_id"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "status": "pending",
                    "external_customer_id": "x",
                    "first_name": "x",
                    "last_name": "x",
                    "date_of_birth": "2024-12-01",
                    "sex_at_birth": "male",
                    "home_address": {
                        "line1": "x",
                        "line2": "x",
                        "line3": "x",
                        "city": "x",
                        "state": "x",
                        "postal_code": "x",
                        "country_code": "af"
                    },
                    "nationality": "af",
                    "national_tax_id": "x",
                    "start_on": "2024-12-01",
                    "earliest_benefits_start_date": "2024-12-01",
                    "phone_number": "x",
                    "email": "x",
                    "offboard_on": "2024-12-01T00:00:00Z",
                    "bank_account": {
                        "account_number_last4": "x"
                    },
                    "metadata": {},
                    "object": "x"
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "employee",
        "accessor": "Employee",
        "op": "load",
        "method": "GET",
        "path": "/employees/{employee_id}",
        "args": [
            {
                "name": "id",
                "wire": "employee_id",
                "value": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "pending",
            "external_customer_id": "x",
            "first_name": "x",
            "last_name": "x",
            "date_of_birth": "2024-12-01",
            "sex_at_birth": "male",
            "home_address": {
                "line1": "x",
                "line2": "x",
                "line3": "x",
                "city": "x",
                "state": "x",
                "postal_code": "x",
                "country_code": "af"
            },
            "nationality": "af",
            "national_tax_id": "x",
            "start_on": "2024-12-01",
            "earliest_benefits_start_date": "2024-12-01",
            "phone_number": "x",
            "email": "x",
            "offboard_on": "2024-12-01T00:00:00Z",
            "bank_account": {
                "account_number_last4": "x"
            },
            "metadata": {},
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "employee",
        "accessor": "Employee",
        "op": "update",
        "method": "PUT",
        "path": "/employees/{employee_id}",
        "args": [
            {
                "name": "id",
                "wire": "employee_id",
                "value": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "pending",
            "external_customer_id": "x",
            "first_name": "x",
            "last_name": "x",
            "date_of_birth": "2024-12-01",
            "sex_at_birth": "male",
            "home_address": {
                "line1": "x",
                "line2": "x",
                "line3": "x",
                "city": "x",
                "state": "x",
                "postal_code": "x",
                "country_code": "af"
            },
            "nationality": "af",
            "national_tax_id": "x",
            "start_on": "2024-12-01",
            "earliest_benefits_start_date": "2024-12-01",
            "phone_number": "x",
            "email": "x",
            "offboard_on": "2024-12-01T00:00:00Z",
            "bank_account": {
                "account_number_last4": "x"
            },
            "metadata": {},
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "employee_health_insurance_offer",
        "accessor": "EmployeeHealthInsuranceOffer",
        "op": "load",
        "method": "GET",
        "path": "/employees/{employee_id}/health_insurance/offers/{employee_offer_id}",
        "args": [
            {
                "name": "employee_id",
                "wire": "employee_id",
                "value": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            {
                "name": "id",
                "wire": "employee_offer_id",
                "value": "eeho_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "object": "x",
            "id": "eeho_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "external_customer_id": "x",
            "status": "action_required",
            "required_action": {
                "reason": "x",
                "reason_description": "x",
                "code": "x",
                "due_at": "2024-12-01"
            },
            "coverage_level": {
                "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                "plan_name": "x",
                "plan_currency": "eur",
                "provider_name": "x",
                "provider_logo_url": "x",
                "provider_employer_platform_url": "x",
                "provider_support_phone": "x",
                "documents": [
                    {
                        "title": "x",
                        "link": "x"
                    }
                ]
            }
        },
        "idField": "id"
    },
    {
        "entity": "employee_health_insurance_offer_response_paged_list",
        "accessor": "EmployeeHealthInsuranceOfferResponsePagedList",
        "op": "list",
        "method": "GET",
        "path": "/employees/{employee_id}/health_insurance/offers",
        "args": [
            {
                "name": "employee_id",
                "wire": "employee_id",
                "value": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "object": "x",
                    "id": "eeho_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "external_customer_id": "x",
                    "status": "action_required",
                    "required_action": {
                        "reason": "x",
                        "reason_description": "x",
                        "code": "x",
                        "due_at": "2024-12-01"
                    },
                    "coverage_level": {
                        "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "plan_name": "x",
                        "plan_currency": "eur",
                        "provider_name": "x",
                        "provider_logo_url": "x",
                        "provider_employer_platform_url": "x",
                        "provider_support_phone": "x",
                        "documents": [
                            {}
                        ]
                    }
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "employee_health_insurance_policy",
        "accessor": "EmployeeHealthInsurancePolicy",
        "op": "load",
        "method": "GET",
        "path": "/employees/{employee_id}/health_insurance/policies/{employee_policy_id}",
        "args": [
            {
                "name": "employee_id",
                "wire": "employee_id",
                "value": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            {
                "name": "id",
                "wire": "employee_policy_id",
                "value": "eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "object": "x",
            "id": "eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "external_customer_id": "x",
            "start_date": "2024-12-01",
            "end_date": "2024-12-01",
            "cancellation_date": "2024-12-01",
            "policy_number": "x",
            "status": "scheduled",
            "enrolment_type": "opt_out",
            "renewal": {
                "status": "upcoming",
                "renewal_date": "2024-12-01",
                "window_start_date": "2024-12-01",
                "window_end_date": "2024-12-01",
                "decision_confirmed": true,
                "renewed_health_insurance_id": "eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            "opt_out_deadline_date": "2024-12-01",
            "coverage_level": {
                "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                "plan_name": "x",
                "plan_currency": "eur",
                "provider_name": "x",
                "provider_logo_url": "x",
                "provider_employer_platform_url": "x",
                "provider_support_phone": "x",
                "documents": [
                    {
                        "title": "x",
                        "link": "x"
                    }
                ]
            },
            "enrolled_dependants_count": 123,
            "estimated_gross_premium": {
                "currency": "eur",
                "monthly": {
                    "employee_contribution": 123.45,
                    "employer_contribution": 123.45,
                    "total": 123.45
                },
                "term": {
                    "employee_contribution": 123.45,
                    "employer_contribution": 123.45,
                    "total": 123.45
                }
            }
        },
        "idField": "id"
    },
    {
        "entity": "employee_health_insurance_policy_response_paged_list",
        "accessor": "EmployeeHealthInsurancePolicyResponsePagedList",
        "op": "list",
        "method": "GET",
        "path": "/employees/{employee_id}/health_insurance/policies",
        "args": [
            {
                "name": "employee_id",
                "wire": "employee_id",
                "value": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {
            "page": "v1",
            "page_size": "v1",
            "status": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "status",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            },
            {
                "name": "status",
                "wire": "status"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "object": "x",
                    "id": "eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "external_customer_id": "x",
                    "start_date": "2024-12-01",
                    "end_date": "2024-12-01",
                    "cancellation_date": "2024-12-01",
                    "policy_number": "x",
                    "status": "scheduled",
                    "enrolment_type": "opt_out",
                    "renewal": {
                        "status": "upcoming",
                        "renewal_date": "2024-12-01",
                        "window_start_date": "2024-12-01",
                        "window_end_date": "2024-12-01",
                        "decision_confirmed": true,
                        "renewed_health_insurance_id": "eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                    },
                    "opt_out_deadline_date": "2024-12-01",
                    "coverage_level": {
                        "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "plan_name": "x",
                        "plan_currency": "eur",
                        "provider_name": "x",
                        "provider_logo_url": "x",
                        "provider_employer_platform_url": "x",
                        "provider_support_phone": "x",
                        "documents": [
                            {}
                        ]
                    },
                    "enrolled_dependants_count": 123,
                    "estimated_gross_premium": {
                        "currency": "eur",
                        "monthly": {},
                        "term": {}
                    }
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "employer",
        "accessor": "Employer",
        "op": "create",
        "method": "POST",
        "path": "/employers/{employer_id}/offboard",
        "action": "offboard",
        "args": [
            {
                "name": "id",
                "wire": "employer_id",
                "value": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "idempotency_key",
                "wire": "Idempotency-Key",
                "value": "h1"
            },
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h2"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "pending",
            "legal_name": "x",
            "registration_number": "x",
            "legal_address": {
                "line1": "x",
                "line2": "x",
                "line3": "x",
                "city": "x",
                "state": "x",
                "postal_code": "x",
                "country_code": "af"
            },
            "contact": {
                "name": "x",
                "email": "x"
            },
            "offboard_on": "2024-12-01T00:00:00Z",
            "earliest_benefits_start_date": "2024-12-01",
            "metadata": {},
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "employer",
        "accessor": "Employer",
        "op": "create",
        "method": "POST",
        "path": "/employers",
        "args": [],
        "select": {},
        "headers": [
            {
                "name": "idempotency_key",
                "wire": "Idempotency-Key",
                "value": "h1"
            },
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h2"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "pending",
            "legal_name": "x",
            "registration_number": "x",
            "legal_address": {
                "line1": "x",
                "line2": "x",
                "line3": "x",
                "city": "x",
                "state": "x",
                "postal_code": "x",
                "country_code": "af"
            },
            "contact": {
                "name": "x",
                "email": "x"
            },
            "offboard_on": "2024-12-01T00:00:00Z",
            "earliest_benefits_start_date": "2024-12-01",
            "metadata": {},
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "employer",
        "accessor": "Employer",
        "op": "list",
        "method": "GET",
        "path": "/employers",
        "args": [],
        "select": {
            "filter": "v1",
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "filter",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "filter",
                "wire": "filter"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "status": "pending",
                    "legal_name": "x",
                    "registration_number": "x",
                    "legal_address": {
                        "line1": "x",
                        "line2": "x",
                        "line3": "x",
                        "city": "x",
                        "state": "x",
                        "postal_code": "x",
                        "country_code": "af"
                    },
                    "contact": {
                        "name": "x",
                        "email": "x"
                    },
                    "offboard_on": "2024-12-01T00:00:00Z",
                    "earliest_benefits_start_date": "2024-12-01",
                    "metadata": {},
                    "object": "x"
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "employer",
        "accessor": "Employer",
        "op": "load",
        "method": "GET",
        "path": "/employers/{employer_id}",
        "args": [
            {
                "name": "id",
                "wire": "employer_id",
                "value": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "pending",
            "legal_name": "x",
            "registration_number": "x",
            "legal_address": {
                "line1": "x",
                "line2": "x",
                "line3": "x",
                "city": "x",
                "state": "x",
                "postal_code": "x",
                "country_code": "af"
            },
            "contact": {
                "name": "x",
                "email": "x"
            },
            "offboard_on": "2024-12-01T00:00:00Z",
            "earliest_benefits_start_date": "2024-12-01",
            "metadata": {},
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "employer",
        "accessor": "Employer",
        "op": "update",
        "method": "PUT",
        "path": "/employers/{employer_id}",
        "args": [
            {
                "name": "id",
                "wire": "employer_id",
                "value": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "pending",
            "legal_name": "x",
            "registration_number": "x",
            "legal_address": {
                "line1": "x",
                "line2": "x",
                "line3": "x",
                "city": "x",
                "state": "x",
                "postal_code": "x",
                "country_code": "af"
            },
            "contact": {
                "name": "x",
                "email": "x"
            },
            "offboard_on": "2024-12-01T00:00:00Z",
            "earliest_benefits_start_date": "2024-12-01",
            "metadata": {},
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "employer_health_insurance_policy",
        "accessor": "EmployerHealthInsurancePolicy",
        "op": "load",
        "method": "GET",
        "path": "/employers/{employer_id}/health_insurance/policies/{employer_policy_id}",
        "args": [
            {
                "name": "employer_id",
                "wire": "employer_id",
                "value": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            {
                "name": "id",
                "wire": "employer_policy_id",
                "value": "erhp_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "object": "x",
            "id": "erhp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "start_date": "2024-12-01",
            "end_date": "2024-12-01",
            "cancellation_date": "2024-12-01",
            "group_policy_number": "x",
            "status": "scheduled",
            "enrolment_type": "opt_out",
            "renewal": {
                "status": "upcoming",
                "renewal_date": "2024-12-01",
                "window_start_date": "2024-12-01",
                "window_end_date": "2024-12-01",
                "decision_confirmed": true,
                "renewed_health_insurance_id": "erhp_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            "employer_cancellation_period_length": 123,
            "coverage_levels": [
                {
                    "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "plan_name": "x",
                    "plan_currency": "eur",
                    "provider_name": "x",
                    "provider_logo_url": "x",
                    "provider_employer_platform_url": "x",
                    "provider_support_phone": "x",
                    "documents": [
                        {
                            "title": "x",
                            "link": "x"
                        }
                    ]
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "employer_health_insurance_policy_response_paged_list",
        "accessor": "EmployerHealthInsurancePolicyResponsePagedList",
        "op": "list",
        "method": "GET",
        "path": "/employers/{employer_id}/health_insurance/policies",
        "args": [
            {
                "name": "employer_id",
                "wire": "employer_id",
                "value": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {
            "page": "v1",
            "page_size": "v1",
            "status": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "status",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            },
            {
                "name": "status",
                "wire": "status"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "object": "x",
                    "id": "erhp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "start_date": "2024-12-01",
                    "end_date": "2024-12-01",
                    "cancellation_date": "2024-12-01",
                    "group_policy_number": "x",
                    "status": "scheduled",
                    "enrolment_type": "opt_out",
                    "renewal": {
                        "status": "upcoming",
                        "renewal_date": "2024-12-01",
                        "window_start_date": "2024-12-01",
                        "window_end_date": "2024-12-01",
                        "decision_confirmed": true,
                        "renewed_health_insurance_id": "erhp_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                    },
                    "employer_cancellation_period_length": 123,
                    "coverage_levels": [
                        {
                            "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "plan_name": "x",
                            "plan_currency": "eur",
                            "provider_name": "x",
                            "provider_logo_url": "x",
                            "provider_employer_platform_url": "x",
                            "provider_support_phone": "x",
                            "documents": [
                                {}
                            ]
                        }
                    ]
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "employer_health_insurance_quote",
        "accessor": "EmployerHealthInsuranceQuote",
        "op": "load",
        "method": "GET",
        "path": "/employers/{employer_id}/health_insurance/quotes/{employer_quote_id}",
        "args": [
            {
                "name": "employer_id",
                "wire": "employer_id",
                "value": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            {
                "name": "id",
                "wire": "employer_quote_id",
                "value": "erhq_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "object": "x",
            "id": "erhq_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "quoted_at": "2024-12-01T00:00:00Z",
            "status": "pending_quote",
            "required_action": {
                "reason": "x",
                "reason_description": "x",
                "code": "x",
                "due_at": "2024-12-01"
            },
            "coverage_levels": [
                {
                    "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "plan_name": "x",
                    "plan_currency": "eur",
                    "provider_name": "x",
                    "provider_logo_url": "x",
                    "provider_employer_platform_url": "x",
                    "provider_support_phone": "x",
                    "documents": [
                        {
                            "title": "x",
                            "link": "x"
                        }
                    ]
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "employer_health_insurance_quote_response_paged_list",
        "accessor": "EmployerHealthInsuranceQuoteResponsePagedList",
        "op": "list",
        "method": "GET",
        "path": "/employers/{employer_id}/health_insurance/quotes",
        "args": [
            {
                "name": "employer_id",
                "wire": "employer_id",
                "value": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {
            "page": "v1",
            "page_size": "v1",
            "status": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "status",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            },
            {
                "name": "status",
                "wire": "status"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "object": "x",
                    "id": "erhq_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "quoted_at": "2024-12-01T00:00:00Z",
                    "status": "pending_quote",
                    "required_action": {
                        "reason": "x",
                        "reason_description": "x",
                        "code": "x",
                        "due_at": "2024-12-01"
                    },
                    "coverage_levels": [
                        {
                            "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "plan_name": "x",
                            "plan_currency": "eur",
                            "provider_name": "x",
                            "provider_logo_url": "x",
                            "provider_employer_platform_url": "x",
                            "provider_support_phone": "x",
                            "documents": [
                                {}
                            ]
                        }
                    ]
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "enrolment_intent",
        "accessor": "EnrolmentIntent",
        "op": "create",
        "method": "POST",
        "path": "/enrolment_intents/{enrolment_intent_id}/confirm",
        "action": "confirm",
        "args": [
            {
                "name": "id",
                "wire": "enrolment_intent_id",
                "value": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "enrolment_intent",
        "accessor": "EnrolmentIntent",
        "op": "create",
        "method": "POST",
        "path": "/enrolment_intents/{enrolment_intent_id}/coverage-selections",
        "action": "coverage_selection",
        "args": [
            {
                "name": "id",
                "wire": "enrolment_intent_id",
                "value": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "enrolment_intent",
        "accessor": "EnrolmentIntent",
        "op": "create",
        "method": "POST",
        "path": "/enrolment_intents/{enrolment_intent_id}/reject",
        "action": "reject",
        "args": [
            {
                "name": "id",
                "wire": "enrolment_intent_id",
                "value": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "enrolment_intent",
        "accessor": "EnrolmentIntent",
        "op": "create",
        "method": "POST",
        "path": "/enrolment_intents",
        "args": [],
        "select": {},
        "headers": [
            {
                "name": "idempotency_key",
                "wire": "Idempotency-Key",
                "value": "h1"
            },
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h2"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "processing",
            "force_confirmation": true,
            "policy_enrolments": [
                {
                    "type": "health_insurance",
                    "estimated_effective_from": "2024-12-01",
                    "provider": {
                        "id": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "name": "x",
                        "description": "x",
                        "logo_url": "x",
                        "employer_portal_url": "x",
                        "employee_portal_url": "x",
                        "support_phone_number": "x"
                    },
                    "plan": {
                        "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "name": "x",
                        "description": "x",
                        "currency": "eur",
                        "documents": [
                            {}
                        ]
                    },
                    "health_insurance": {
                        "configuration": {},
                        "coverage_options": [
                            {}
                        ],
                        "coverage_selections": [
                            {}
                        ]
                    },
                    "id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                }
            ],
            "object": "x",
            "ineligibility_reason": {
                "code": "employee_restricted",
                "reason": "x"
            },
            "policy_configuration": {
                "desired_policy_start_date": "2024-12-01",
                "enrolment_date": "2024-12-01"
            },
            "action_required": {
                "code": "provide_dependant_information",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01T00:00:00Z"
            },
            "pending_confirmation": {
                "due_by": "2024-12-01T00:00:00Z",
                "code": "confirm_enrolment",
                "reason": "x",
                "reason_description": "x",
                "associated_persons": {
                    "optional": true,
                    "type": "dependents",
                    "dependent": {}
                }
            },
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "enrolment_intent",
        "accessor": "EnrolmentIntent",
        "op": "list",
        "method": "GET",
        "path": "/enrolment_intents",
        "args": [],
        "select": {
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "page": "v1",
            "page_size": "v1",
            "status": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "employee_id",
            "group_id",
            "status",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "employee_id",
                "wire": "employee_id"
            },
            {
                "name": "group_id",
                "wire": "group_id"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            },
            {
                "name": "status",
                "wire": "status"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "status": "processing",
                    "force_confirmation": true,
                    "policy_enrolments": [
                        {
                            "type": "health_insurance",
                            "estimated_effective_from": "2024-12-01",
                            "provider": {},
                            "plan": {},
                            "health_insurance": {},
                            "id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                        }
                    ],
                    "object": "x",
                    "ineligibility_reason": {
                        "code": "employee_restricted",
                        "reason": "x"
                    },
                    "policy_configuration": {
                        "desired_policy_start_date": "2024-12-01",
                        "enrolment_date": "2024-12-01"
                    },
                    "action_required": {
                        "code": "provide_dependant_information",
                        "reason": "x",
                        "reason_description": "x",
                        "due_by": "2024-12-01T00:00:00Z"
                    },
                    "pending_confirmation": {
                        "due_by": "2024-12-01T00:00:00Z",
                        "code": "confirm_enrolment",
                        "reason": "x",
                        "reason_description": "x",
                        "associated_persons": {}
                    },
                    "disclosures": [
                        {
                            "category": "regulatory",
                            "type": "intermediary_role",
                            "text": "x"
                        }
                    ]
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "enrolment_intent",
        "accessor": "EnrolmentIntent",
        "op": "load",
        "method": "GET",
        "path": "/enrolment_intents/{enrolment_intent_id}",
        "args": [
            {
                "name": "id",
                "wire": "enrolment_intent_id",
                "value": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "processing",
            "force_confirmation": true,
            "policy_enrolments": [
                {
                    "type": "health_insurance",
                    "estimated_effective_from": "2024-12-01",
                    "provider": {
                        "id": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "name": "x",
                        "description": "x",
                        "logo_url": "x",
                        "employer_portal_url": "x",
                        "employee_portal_url": "x",
                        "support_phone_number": "x"
                    },
                    "plan": {
                        "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "name": "x",
                        "description": "x",
                        "currency": "eur",
                        "documents": [
                            {}
                        ]
                    },
                    "health_insurance": {
                        "configuration": {},
                        "coverage_options": [
                            {}
                        ],
                        "coverage_selections": [
                            {}
                        ]
                    },
                    "id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                }
            ],
            "object": "x",
            "ineligibility_reason": {
                "code": "employee_restricted",
                "reason": "x"
            },
            "policy_configuration": {
                "desired_policy_start_date": "2024-12-01",
                "enrolment_date": "2024-12-01"
            },
            "action_required": {
                "code": "provide_dependant_information",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01T00:00:00Z"
            },
            "pending_confirmation": {
                "due_by": "2024-12-01T00:00:00Z",
                "code": "confirm_enrolment",
                "reason": "x",
                "reason_description": "x",
                "associated_persons": {
                    "optional": true,
                    "type": "dependents",
                    "dependent": {}
                }
            },
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "enrolment_intent",
        "accessor": "EnrolmentIntent",
        "op": "update",
        "method": "PUT",
        "path": "/enrolment_intents/{enrolment_intent_id}",
        "args": [
            {
                "name": "id",
                "wire": "enrolment_intent_id",
                "value": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "processing",
            "force_confirmation": true,
            "policy_enrolments": [
                {
                    "type": "health_insurance",
                    "estimated_effective_from": "2024-12-01",
                    "provider": {
                        "id": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "name": "x",
                        "description": "x",
                        "logo_url": "x",
                        "employer_portal_url": "x",
                        "employee_portal_url": "x",
                        "support_phone_number": "x"
                    },
                    "plan": {
                        "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "name": "x",
                        "description": "x",
                        "currency": "eur",
                        "documents": [
                            {}
                        ]
                    },
                    "health_insurance": {
                        "configuration": {},
                        "coverage_options": [
                            {}
                        ],
                        "coverage_selections": [
                            {}
                        ]
                    },
                    "id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                }
            ],
            "object": "x",
            "ineligibility_reason": {
                "code": "employee_restricted",
                "reason": "x"
            },
            "policy_configuration": {
                "desired_policy_start_date": "2024-12-01",
                "enrolment_date": "2024-12-01"
            },
            "action_required": {
                "code": "provide_dependant_information",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01T00:00:00Z"
            },
            "pending_confirmation": {
                "due_by": "2024-12-01T00:00:00Z",
                "code": "confirm_enrolment",
                "reason": "x",
                "reason_description": "x",
                "associated_persons": {
                    "optional": true,
                    "type": "dependents",
                    "dependent": {}
                }
            },
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "enrolment_intent_requirement_response_paged_list",
        "accessor": "EnrolmentIntentRequirementResponsePagedList",
        "op": "list",
        "method": "GET",
        "path": "/enrolment_intents/{enrolment_intent_id}/requirements",
        "action": "requirements",
        "args": [
            {
                "name": "id",
                "wire": "enrolment_intent_id",
                "value": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {
            "object_id": "v1",
            "object_type": "v1",
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "object_type",
            "object_id",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "object_id",
                "wire": "object_id"
            },
            {
                "name": "object_type",
                "wire": "object_type"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "ar_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "object_type": "employee",
                    "object_id": "x",
                    "is_fulfilled": true,
                    "requirement_type": "group_quote_intent",
                    "object": "x"
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "event",
        "accessor": "Event",
        "op": "create",
        "method": "POST",
        "path": "/events/{event_id}/replay",
        "action": "replay",
        "args": [
            {
                "name": "id",
                "wire": "event_id",
                "value": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "event_id": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "deliveries": [
                {
                    "delivery_id": "evtd_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "success": true,
                    "response_status_code": 1,
                    "elapsed_time_ms": 123.45
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "event",
        "accessor": "Event",
        "op": "list",
        "method": "GET",
        "path": "/events",
        "args": [],
        "select": {
            "created_after": "v1",
            "order_direction": "v1",
            "page": "v1",
            "page_size": "v1",
            "version": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "created_after",
            "order_direction",
            "version",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "created_after",
                "wire": "created_after"
            },
            {
                "name": "order_direction",
                "wire": "order_direction"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            },
            {
                "name": "version",
                "wire": "version"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "created": "2024-12-01T00:00:00Z",
                    "type": "x",
                    "data": {
                        "options": {},
                        "parent": {},
                        "root": {}
                    },
                    "api_version": "x"
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "event",
        "accessor": "Event",
        "op": "load",
        "method": "GET",
        "path": "/events/{event_id}",
        "args": [
            {
                "name": "id",
                "wire": "event_id",
                "value": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "evt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "platform_id": "pt_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "created": "2024-12-01T00:00:00Z",
            "type": "x",
            "data": {
                "options": {
                    "property_name_case_insensitive": true
                },
                "parent": {},
                "root": {}
            },
            "api_version": "x"
        },
        "idField": "id"
    },
    {
        "entity": "group",
        "accessor": "Group",
        "op": "create",
        "method": "POST",
        "path": "/groups",
        "args": [],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "name": "x",
            "description": "x",
            "status": "pending",
            "group_type": "undefined",
            "enrolment_type": "manual",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "object": "x",
            "group_policy_ids": [
                "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            ],
            "group_quote_intent_ids": [
                "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            ],
            "group_policy_intent_ids": [
                "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            ]
        },
        "idField": "id"
    },
    {
        "entity": "group",
        "accessor": "Group",
        "op": "list",
        "method": "GET",
        "path": "/groups",
        "args": [],
        "select": {
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "page": "v1",
            "page_size": "v1",
            "status": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "employer_id",
            "status",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "employer_id",
                "wire": "employer_id"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            },
            {
                "name": "status",
                "wire": "status"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "name": "x",
                    "description": "x",
                    "status": "pending",
                    "group_type": "undefined",
                    "enrolment_type": "manual",
                    "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "object": "x",
                    "group_policy_ids": [
                        "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                    ],
                    "group_quote_intent_ids": [
                        "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                    ],
                    "group_policy_intent_ids": [
                        "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                    ]
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "group",
        "accessor": "Group",
        "op": "load",
        "method": "GET",
        "path": "/groups/{group_id}",
        "args": [
            {
                "name": "id",
                "wire": "group_id",
                "value": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "name": "x",
            "description": "x",
            "status": "pending",
            "group_type": "undefined",
            "enrolment_type": "manual",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "object": "x",
            "group_policy_ids": [
                "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            ],
            "group_quote_intent_ids": [
                "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            ],
            "group_policy_intent_ids": [
                "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            ]
        },
        "idField": "id"
    },
    {
        "entity": "group",
        "accessor": "Group",
        "op": "update",
        "method": "PUT",
        "path": "/groups/{group_id}",
        "args": [
            {
                "name": "id",
                "wire": "group_id",
                "value": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "name": "x",
            "description": "x",
            "status": "pending",
            "group_type": "undefined",
            "enrolment_type": "manual",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "object": "x",
            "group_policy_ids": [
                "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            ],
            "group_quote_intent_ids": [
                "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            ],
            "group_policy_intent_ids": [
                "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            ]
        },
        "idField": "id"
    },
    {
        "entity": "group_employee",
        "accessor": "GroupEmployee",
        "op": "create",
        "method": "POST",
        "path": "/groups/{group_id}/employees",
        "args": [
            {
                "name": "id",
                "wire": "group_id",
                "value": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "idempotency_key",
                "wire": "Idempotency-Key",
                "value": "h1"
            },
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h2"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "object": "x",
            "id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "policies": [
                {
                    "id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                }
            ],
            "enrolments": [
                {
                    "id": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                }
            ],
            "desired_policy_start_date": "2024-12-01",
            "enrolment_date": "2024-12-01",
            "eligibility_status": "pending",
            "enrolment_status": "enrolled",
            "scheduled_group_transitions": [
                {
                    "new_group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "scheduled_date": "2024-12-01"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "group_employee_response_paged_list",
        "accessor": "GroupEmployeeResponsePagedList",
        "op": "list",
        "method": "GET",
        "path": "/groups/{group_id}/employees",
        "action": "employees",
        "args": [
            {
                "name": "id",
                "wire": "group_id",
                "value": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "employee_id",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "employee_id",
                "wire": "employee_id"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "object": "x",
                    "id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "policies": [
                        {
                            "id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                        }
                    ],
                    "enrolments": [
                        {
                            "id": "ei_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                        }
                    ],
                    "desired_policy_start_date": "2024-12-01",
                    "enrolment_date": "2024-12-01",
                    "eligibility_status": "pending",
                    "enrolment_status": "enrolled",
                    "scheduled_group_transitions": [
                        {
                            "new_group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "scheduled_date": "2024-12-01"
                        }
                    ]
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "group_policy",
        "accessor": "GroupPolicy",
        "op": "list",
        "method": "GET",
        "path": "/group_policies",
        "args": [],
        "select": {
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "page": "v1",
            "page_size": "v1",
            "status": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "employer_id",
            "group_id",
            "status",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "employer_id",
                "wire": "employer_id"
            },
            {
                "name": "group_id",
                "wire": "group_id"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            },
            {
                "name": "status",
                "wire": "status"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "start_date": "2024-12-01",
                    "end_date": "2024-12-01",
                    "cancellation_date": "2024-12-01",
                    "status": "scheduled",
                    "type": "health_insurance",
                    "provider": {
                        "id": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "name": "x",
                        "description": "x",
                        "logo_url": "x",
                        "employer_portal_url": "x",
                        "employee_portal_url": "x",
                        "support_phone_number": "x"
                    },
                    "plan": {
                        "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "name": "x",
                        "description": "x",
                        "currency": "eur",
                        "documents": [
                            {}
                        ]
                    },
                    "health_insurance": {
                        "group_policy_number": "x",
                        "renewal": {},
                        "configuration": {}
                    },
                    "disclosures": [
                        {
                            "category": "regulatory",
                            "type": "intermediary_role",
                            "text": "x"
                        }
                    ],
                    "object": "x"
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "group_policy",
        "accessor": "GroupPolicy",
        "op": "load",
        "method": "GET",
        "path": "/group_policies/{group_policy_id}",
        "args": [
            {
                "name": "id",
                "wire": "group_policy_id",
                "value": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employer_id": "er_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "start_date": "2024-12-01",
            "end_date": "2024-12-01",
            "cancellation_date": "2024-12-01",
            "status": "scheduled",
            "type": "health_insurance",
            "provider": {
                "id": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                "name": "x",
                "description": "x",
                "logo_url": "x",
                "employer_portal_url": "x",
                "employee_portal_url": "x",
                "support_phone_number": "x"
            },
            "plan": {
                "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                "name": "x",
                "description": "x",
                "currency": "eur",
                "documents": [
                    {
                        "type": "ipid",
                        "title": "x",
                        "link": "x"
                    }
                ]
            },
            "health_insurance": {
                "group_policy_number": "x",
                "renewal": {
                    "renewal_date": "2024-12-01",
                    "window_start_date": "2024-12-01",
                    "window_end_date": "2024-12-01",
                    "status": "upcoming",
                    "renewed_policy_id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                },
                "configuration": {
                    "cost_sharing": {}
                }
            },
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ],
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "group_policy_intent",
        "accessor": "GroupPolicyIntent",
        "op": "create",
        "method": "POST",
        "path": "/group_policy_intents",
        "args": [],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "quote_intent_id": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "processing",
            "due_date": "2024-12-01T00:00:00Z",
            "cost_sharing": {
                "type": "member_count",
                "member_count": {
                    "adults": 123,
                    "children": 123
                },
                "member_selection": {
                    "partner": true,
                    "children": true
                },
                "percentage": {
                    "percentage": 123
                },
                "family_type": {
                    "type": "single"
                }
            },
            "action_required": {
                "code": "provide_dependant_information",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01T00:00:00Z"
            },
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ],
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "group_policy_intent",
        "accessor": "GroupPolicyIntent",
        "op": "list",
        "method": "GET",
        "path": "/group_policy_intents",
        "args": [],
        "select": {
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "page": "v1",
            "page_size": "v1",
            "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "group_id",
            "plan_id",
            "status",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "group_id",
                "wire": "group_id"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            },
            {
                "name": "plan_id",
                "wire": "plan_id"
            },
            {
                "name": "status",
                "wire": "status"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "quote_intent_id": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "status": "processing",
                    "due_date": "2024-12-01T00:00:00Z",
                    "cost_sharing": {
                        "type": "member_count",
                        "member_count": {},
                        "member_selection": {},
                        "percentage": {},
                        "family_type": {}
                    },
                    "action_required": {
                        "code": "provide_dependant_information",
                        "reason": "x",
                        "reason_description": "x",
                        "due_by": "2024-12-01T00:00:00Z"
                    },
                    "disclosures": [
                        {
                            "category": "regulatory",
                            "type": "intermediary_role",
                            "text": "x"
                        }
                    ],
                    "object": "x"
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "group_policy_intent",
        "accessor": "GroupPolicyIntent",
        "op": "load",
        "method": "GET",
        "path": "/group_policy_intents/{group_policy_intent_id}",
        "args": [
            {
                "name": "id",
                "wire": "group_policy_intent_id",
                "value": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "quote_intent_id": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "processing",
            "due_date": "2024-12-01T00:00:00Z",
            "cost_sharing": {
                "type": "member_count",
                "member_count": {
                    "adults": 123,
                    "children": 123
                },
                "member_selection": {
                    "partner": true,
                    "children": true
                },
                "percentage": {
                    "percentage": 123
                },
                "family_type": {
                    "type": "single"
                }
            },
            "action_required": {
                "code": "provide_dependant_information",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01T00:00:00Z"
            },
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ],
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "group_policy_intent_requirement_response_paged_list",
        "accessor": "GroupPolicyIntentRequirementResponsePagedList",
        "op": "list",
        "method": "GET",
        "path": "/group_policy_intents/{group_policy_intent_id}/requirements",
        "action": "requirements",
        "args": [
            {
                "name": "id",
                "wire": "group_policy_intent_id",
                "value": "gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {
            "object_id": "v1",
            "object_type": "v1",
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "object_type",
            "object_id",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "object_id",
                "wire": "object_id"
            },
            {
                "name": "object_type",
                "wire": "object_type"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "ar_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "object_type": "employee",
                    "object_id": "x",
                    "is_fulfilled": true,
                    "requirement_type": "group_quote_intent",
                    "object": "x"
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "group_quote",
        "accessor": "GroupQuote",
        "op": "load",
        "method": "GET",
        "path": "/group_quote_intents/{group_quote_intent_id}/quote",
        "args": [
            {
                "name": "group_quote_intent_id",
                "wire": "group_quote_intent_id",
                "value": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "employee_count": 123,
            "cost_sharing": {
                "type": "member_count",
                "member_count": {
                    "adults": 123,
                    "children": 123
                },
                "member_selection": {
                    "partner": true,
                    "children": true
                },
                "percentage": {
                    "percentage": 123
                },
                "family_type": {
                    "type": "single"
                }
            },
            "total_monthly_premium": 123.45,
            "currency": "x",
            "pdf_url": "x",
            "pdf_expires_at": "2024-12-01T00:00:00Z",
            "generated_at": "2024-12-01T00:00:00Z",
            "expires_at": "2024-12-01T00:00:00Z",
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "group_quote_intent",
        "accessor": "GroupQuoteIntent",
        "op": "create",
        "method": "POST",
        "path": "/group_quote_intents/{group_quote_intent_id}/reject",
        "action": "reject",
        "args": [
            {
                "name": "id",
                "wire": "group_quote_intent_id",
                "value": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "group_quote_intent",
        "accessor": "GroupQuoteIntent",
        "op": "create",
        "method": "POST",
        "path": "/group_quote_intents",
        "args": [],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "processing",
            "cost_sharing": {
                "type": "member_count",
                "member_count": {
                    "adults": 123,
                    "children": 123
                },
                "member_selection": {
                    "partner": true,
                    "children": true
                },
                "percentage": {
                    "percentage": 123
                },
                "family_type": {
                    "type": "single"
                }
            },
            "expected_start_date": "2024-12-01",
            "action_required": {
                "code": "provide_dependant_information",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01T00:00:00Z"
            },
            "consent_links": [
                {
                    "type": "terms_of_business",
                    "url": "x",
                    "version": "x"
                }
            ],
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ],
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "group_quote_intent",
        "accessor": "GroupQuoteIntent",
        "op": "list",
        "method": "GET",
        "path": "/group_quote_intents",
        "args": [],
        "select": {
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "page": "v1",
            "page_size": "v1",
            "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "group_id",
            "plan_id",
            "status",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "group_id",
                "wire": "group_id"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            },
            {
                "name": "plan_id",
                "wire": "plan_id"
            },
            {
                "name": "status",
                "wire": "status"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "status": "processing",
                    "cost_sharing": {
                        "type": "member_count",
                        "member_count": {},
                        "member_selection": {},
                        "percentage": {},
                        "family_type": {}
                    },
                    "expected_start_date": "2024-12-01",
                    "action_required": {
                        "code": "provide_dependant_information",
                        "reason": "x",
                        "reason_description": "x",
                        "due_by": "2024-12-01T00:00:00Z"
                    },
                    "consent_links": [
                        {
                            "type": "terms_of_business",
                            "url": "x",
                            "version": "x"
                        }
                    ],
                    "disclosures": [
                        {
                            "category": "regulatory",
                            "type": "intermediary_role",
                            "text": "x"
                        }
                    ],
                    "object": "x"
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "group_quote_intent",
        "accessor": "GroupQuoteIntent",
        "op": "load",
        "method": "GET",
        "path": "/group_quote_intents/{group_quote_intent_id}",
        "args": [
            {
                "name": "id",
                "wire": "group_quote_intent_id",
                "value": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "plan_id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "processing",
            "cost_sharing": {
                "type": "member_count",
                "member_count": {
                    "adults": 123,
                    "children": 123
                },
                "member_selection": {
                    "partner": true,
                    "children": true
                },
                "percentage": {
                    "percentage": 123
                },
                "family_type": {
                    "type": "single"
                }
            },
            "expected_start_date": "2024-12-01",
            "action_required": {
                "code": "provide_dependant_information",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01T00:00:00Z"
            },
            "consent_links": [
                {
                    "type": "terms_of_business",
                    "url": "x",
                    "version": "x"
                }
            ],
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ],
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "group_quote_intent_requirement_response_paged_list",
        "accessor": "GroupQuoteIntentRequirementResponsePagedList",
        "op": "list",
        "method": "GET",
        "path": "/group_quote_intents/{group_quote_intent_id}/requirements",
        "action": "requirements",
        "args": [
            {
                "name": "id",
                "wire": "group_quote_intent_id",
                "value": "gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {
            "object_id": "v1",
            "object_type": "v1",
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "object_type",
            "object_id",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "object_id",
                "wire": "object_id"
            },
            {
                "name": "object_type",
                "wire": "object_type"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "ar_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "object_type": "employee",
                    "object_id": "x",
                    "is_fulfilled": true,
                    "requirement_type": "group_quote_intent",
                    "object": "x"
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "plan",
        "accessor": "Plan",
        "op": "list",
        "method": "GET",
        "path": "/plans",
        "args": [],
        "select": {
            "available_on": "v1",
            "country": "v1",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "page": "v1",
            "page_size": "v1",
            "provider_id": "v1",
            "sort_by": "v1",
            "sort_dir": "v1",
            "start_date": "v1",
            "type": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "type",
            "provider_id",
            "country",
            "available_on",
            "group_id",
            "start_date",
            "sort_by",
            "sort_dir",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "available_on",
                "wire": "available_on"
            },
            {
                "name": "country",
                "wire": "country"
            },
            {
                "name": "group_id",
                "wire": "group_id"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            },
            {
                "name": "provider_id",
                "wire": "provider_id"
            },
            {
                "name": "sort_by",
                "wire": "sort_by"
            },
            {
                "name": "sort_dir",
                "wire": "sort_dir"
            },
            {
                "name": "start_date",
                "wire": "start_date"
            },
            {
                "name": "type",
                "wire": "type"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "object": "x",
                    "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "type": "health_insurance",
                    "name": "x",
                    "description": "x",
                    "country": "af",
                    "provider": {
                        "id": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "name": "x",
                        "description": "x",
                        "logo_url": "x"
                    },
                    "documents": [
                        {
                            "type": "ipid",
                            "title": "x",
                            "link": "x"
                        }
                    ],
                    "employer_eligibility_criteria": [
                        {
                            "type": "employees_count",
                            "description": "x",
                            "employees_count": {},
                            "members_count": {},
                            "industry_exclusions": {}
                        }
                    ],
                    "employee_eligibility_criteria": [
                        {
                            "type": "age_range",
                            "description": "x",
                            "age_range": {}
                        }
                    ],
                    "health_insurance": {
                        "health_insurance_type": "international",
                        "supported_cost_sharing_options": [
                            "percentage"
                        ],
                        "supported_member_types": [
                            "policyholder"
                        ],
                        "pricing": {}
                    },
                    "disclosures": [
                        {
                            "category": "regulatory",
                            "type": "intermediary_role",
                            "text": "x"
                        }
                    ],
                    "available_from": "2024-12-01",
                    "available_to": "2024-12-01",
                    "coverage_options": [
                        {
                            "id": "pc_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "name": "x",
                            "description": "x",
                            "scope": "group_policy",
                            "input_type": "single_select",
                            "required": true,
                            "min_selections": 1,
                            "max_selections": 1,
                            "sort_order": 1,
                            "group_label": "x",
                            "options": [
                                {}
                            ]
                        }
                    ],
                    "eligible_count": 1,
                    "ineligible_count": 1,
                    "total_count": 1
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "plan",
        "accessor": "Plan",
        "op": "load",
        "method": "GET",
        "path": "/plans/{plan_id}",
        "args": [
            {
                "name": "id",
                "wire": "plan_id",
                "value": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "start_date": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "group_id",
            "start_date"
        ],
        "queryArgs": [
            {
                "name": "group_id",
                "wire": "group_id"
            },
            {
                "name": "start_date",
                "wire": "start_date"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "object": "x",
            "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "type": "health_insurance",
            "name": "x",
            "description": "x",
            "country": "af",
            "provider": {
                "id": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                "name": "x",
                "description": "x",
                "logo_url": "x"
            },
            "documents": [
                {
                    "type": "ipid",
                    "title": "x",
                    "link": "x"
                }
            ],
            "employer_eligibility_criteria": [
                {
                    "type": "employees_count",
                    "description": "x",
                    "employees_count": {
                        "min": 1,
                        "max": 1
                    },
                    "members_count": {
                        "min": 1,
                        "max": 1
                    },
                    "industry_exclusions": {
                        "excluded_industries": [
                            "x"
                        ]
                    }
                }
            ],
            "employee_eligibility_criteria": [
                {
                    "type": "age_range",
                    "description": "x",
                    "age_range": {
                        "min": 1,
                        "max": 1
                    }
                }
            ],
            "health_insurance": {
                "health_insurance_type": "international",
                "supported_cost_sharing_options": [
                    "percentage"
                ],
                "supported_member_types": [
                    "policyholder"
                ],
                "pricing": {
                    "type": "per_member",
                    "per_member": {},
                    "tier_based": {}
                }
            },
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ],
            "available_from": "2024-12-01",
            "available_to": "2024-12-01",
            "coverage_options": [
                {
                    "id": "pc_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "name": "x",
                    "description": "x",
                    "scope": "group_policy",
                    "input_type": "single_select",
                    "required": true,
                    "min_selections": 1,
                    "max_selections": 1,
                    "sort_order": 1,
                    "group_label": "x",
                    "options": [
                        {
                            "id": "pco_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "name": "x",
                            "description": "x",
                            "learn_more_url": "x",
                            "from_price": 1,
                            "benefits": [
                                {}
                            ],
                            "sub_options": [
                                {}
                            ],
                            "eligibility_criteria": [
                                {}
                            ]
                        }
                    ]
                }
            ],
            "eligible_count": 1,
            "ineligible_count": 1,
            "total_count": 1
        },
        "idField": "id"
    },
    {
        "entity": "policy",
        "accessor": "Policy",
        "op": "list",
        "method": "GET",
        "path": "/policies",
        "args": [],
        "select": {
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_policy_id": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "page": "v1",
            "page_size": "v1",
            "status": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "employee_id",
            "group_id",
            "group_policy_id",
            "status",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "employee_id",
                "wire": "employee_id"
            },
            {
                "name": "group_id",
                "wire": "group_id"
            },
            {
                "name": "group_policy_id",
                "wire": "group_policy_id"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            },
            {
                "name": "status",
                "wire": "status"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "group_policy_id": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "bundling_type": "not_bundled",
                    "status": "scheduled",
                    "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "provider": {
                        "id": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "name": "x",
                        "description": "x",
                        "logo_url": "x",
                        "employer_portal_url": "x",
                        "employee_portal_url": "x",
                        "support_phone_number": "x"
                    },
                    "plan": {
                        "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "name": "x",
                        "description": "x",
                        "currency": "eur",
                        "documents": [
                            {}
                        ]
                    },
                    "start_date": "2024-12-01",
                    "end_date": "2024-12-01",
                    "cancellation_date": "2024-12-01",
                    "type": "health_insurance",
                    "health_insurance": {
                        "policy_number": "x",
                        "opt_out_deadline": "2024-12-01",
                        "initial_dependents_update_deadline": "2024-12-01",
                        "renewal": {},
                        "dependents_supported": true,
                        "configuration": {},
                        "members": [
                            {}
                        ],
                        "estimated_gross_premium": {}
                    },
                    "disclosures": [
                        {
                            "category": "regulatory",
                            "type": "intermediary_role",
                            "text": "x"
                        }
                    ],
                    "object": "x"
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "policy",
        "accessor": "Policy",
        "op": "load",
        "method": "GET",
        "path": "/policies/{policy_id}",
        "args": [
            {
                "name": "id",
                "wire": "policy_id",
                "value": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_policy_id": "gp_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "bundling_type": "not_bundled",
            "status": "scheduled",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "provider": {
                "id": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                "name": "x",
                "description": "x",
                "logo_url": "x",
                "employer_portal_url": "x",
                "employee_portal_url": "x",
                "support_phone_number": "x"
            },
            "plan": {
                "id": "pl_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                "name": "x",
                "description": "x",
                "currency": "eur",
                "documents": [
                    {
                        "type": "ipid",
                        "title": "x",
                        "link": "x"
                    }
                ]
            },
            "start_date": "2024-12-01",
            "end_date": "2024-12-01",
            "cancellation_date": "2024-12-01",
            "type": "health_insurance",
            "health_insurance": {
                "policy_number": "x",
                "opt_out_deadline": "2024-12-01",
                "initial_dependents_update_deadline": "2024-12-01",
                "renewal": {
                    "renewal_date": "2024-12-01",
                    "window_start_date": "2024-12-01",
                    "window_end_date": "2024-12-01",
                    "status": "upcoming",
                    "renewed_policy_id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                },
                "dependents_supported": true,
                "configuration": {
                    "cost_sharing": {}
                },
                "members": [
                    {
                        "id": "pm_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                        "member_number": "x",
                        "first_name": "x",
                        "last_name": "x",
                        "date_of_birth": "2024-12-01",
                        "sex_at_birth": "male",
                        "member_type": "policyholder",
                        "associated_person_id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a"
                    }
                ],
                "estimated_gross_premium": {
                    "currency": "eur",
                    "monthly": {},
                    "term": {}
                }
            },
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ],
            "object": "x"
        },
        "idField": "id"
    },
    {
        "entity": "policy_amendment_intent",
        "accessor": "PolicyAmendmentIntent",
        "op": "create",
        "method": "POST",
        "path": "/policies/{policy_id}/policy_amendment_intents/{id}/cancel",
        "action": "cancel",
        "args": [
            {
                "name": "id",
                "wire": "id",
                "value": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            {
                "name": "policy_id",
                "wire": "policy_id",
                "value": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "policy_amendment_intent",
        "accessor": "PolicyAmendmentIntent",
        "op": "create",
        "method": "POST",
        "path": "/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}/confirm",
        "action": "confirm",
        "args": [
            {
                "name": "id",
                "wire": "policy_amendment_intent_id",
                "value": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            {
                "name": "policy_id",
                "wire": "policy_id",
                "value": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 204,
        "sample": null,
        "idField": "id"
    },
    {
        "entity": "policy_amendment_intent",
        "accessor": "PolicyAmendmentIntent",
        "op": "create",
        "method": "POST",
        "path": "/policies/{policy_id}/policy_amendment_intents",
        "args": [
            {
                "name": "id",
                "wire": "policy_id",
                "value": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "object": "x",
            "policy_id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "action_required",
            "amendment_reason": {
                "type": "initial_adjustment_period",
                "qualifying_life_event": {
                    "event": "gained_other_insurance_coverage",
                    "event_date": "2024-12-01",
                    "reason": "x"
                }
            },
            "requested_changes": [
                {
                    "change_type": "dependents"
                }
            ],
            "required_action": {
                "code": "provide_dependents_information",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01",
                "associated_persons": {
                    "type": "dependents",
                    "dependents": {}
                }
            },
            "pending_confirmation": {
                "code": "confirm_quote",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01",
                "quote": {
                    "currency": "x",
                    "monthly": {},
                    "term": {}
                },
                "associated_persons": {
                    "type": "dependents",
                    "dependents": {}
                }
            },
            "processing_error": {
                "code": "provider_rejected",
                "reason": "x",
                "reason_description": "x"
            },
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "policy_amendment_intent",
        "accessor": "PolicyAmendmentIntent",
        "op": "list",
        "method": "GET",
        "path": "/policies/{policy_id}/policy_amendment_intents",
        "args": [
            {
                "name": "id",
                "wire": "policy_id",
                "value": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {
            "page": "v1",
            "page_size": "v1",
            "status": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "status",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            },
            {
                "name": "status",
                "wire": "status"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "object": "x",
                    "policy_id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "status": "action_required",
                    "amendment_reason": {
                        "type": "initial_adjustment_period",
                        "qualifying_life_event": {}
                    },
                    "requested_changes": [
                        {
                            "change_type": "dependents"
                        }
                    ],
                    "required_action": {
                        "code": "provide_dependents_information",
                        "reason": "x",
                        "reason_description": "x",
                        "due_by": "2024-12-01",
                        "associated_persons": {}
                    },
                    "pending_confirmation": {
                        "code": "confirm_quote",
                        "reason": "x",
                        "reason_description": "x",
                        "due_by": "2024-12-01",
                        "quote": {},
                        "associated_persons": {}
                    },
                    "processing_error": {
                        "code": "provider_rejected",
                        "reason": "x",
                        "reason_description": "x"
                    },
                    "disclosures": [
                        {
                            "category": "regulatory",
                            "type": "intermediary_role",
                            "text": "x"
                        }
                    ]
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "policy_amendment_intent",
        "accessor": "PolicyAmendmentIntent",
        "op": "load",
        "method": "GET",
        "path": "/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}",
        "args": [
            {
                "name": "id",
                "wire": "policy_amendment_intent_id",
                "value": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            },
            {
                "name": "policy_id",
                "wire": "policy_id",
                "value": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "pai_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "object": "x",
            "policy_id": "p_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "status": "action_required",
            "amendment_reason": {
                "type": "initial_adjustment_period",
                "qualifying_life_event": {
                    "event": "gained_other_insurance_coverage",
                    "event_date": "2024-12-01",
                    "reason": "x"
                }
            },
            "requested_changes": [
                {
                    "change_type": "dependents"
                }
            ],
            "required_action": {
                "code": "provide_dependents_information",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01",
                "associated_persons": {
                    "type": "dependents",
                    "dependents": {}
                }
            },
            "pending_confirmation": {
                "code": "confirm_quote",
                "reason": "x",
                "reason_description": "x",
                "due_by": "2024-12-01",
                "quote": {
                    "currency": "x",
                    "monthly": {},
                    "term": {}
                },
                "associated_persons": {
                    "type": "dependents",
                    "dependents": {}
                }
            },
            "processing_error": {
                "code": "provider_rejected",
                "reason": "x",
                "reason_description": "x"
            },
            "disclosures": [
                {
                    "category": "regulatory",
                    "type": "intermediary_role",
                    "text": "x"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "policy_import_intent",
        "accessor": "PolicyImportIntent",
        "op": "create",
        "method": "POST",
        "path": "/policy_import_intents",
        "args": [],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "pii_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "object": "x",
            "status": "processing",
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "provider_policy_number": "x",
            "member_number": "x",
            "policy_start_date": "2024-12-01",
            "policy_end_date": "2024-12-01",
            "associated_persons": [
                {
                    "id": "x",
                    "associated_person_id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "member_number": "x",
                    "start_date": "2024-12-01",
                    "end_date": "2024-12-01"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "policy_import_intent",
        "accessor": "PolicyImportIntent",
        "op": "list",
        "method": "GET",
        "path": "/policy_import_intents",
        "args": [],
        "select": {
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "page": "v1",
            "page_size": "v1",
            "status": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "employee_id",
            "group_id",
            "status",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "employee_id",
                "wire": "employee_id"
            },
            {
                "name": "group_id",
                "wire": "group_id"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            },
            {
                "name": "status",
                "wire": "status"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "pii_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "object": "x",
                    "status": "processing",
                    "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "provider_policy_number": "x",
                    "member_number": "x",
                    "policy_start_date": "2024-12-01",
                    "policy_end_date": "2024-12-01",
                    "associated_persons": [
                        {
                            "id": "x",
                            "associated_person_id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                            "member_number": "x",
                            "start_date": "2024-12-01",
                            "end_date": "2024-12-01"
                        }
                    ]
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "policy_import_intent",
        "accessor": "PolicyImportIntent",
        "op": "load",
        "method": "GET",
        "path": "/policy_import_intents/{policy_import_intent_id}",
        "args": [
            {
                "name": "id",
                "wire": "policy_import_intent_id",
                "value": "pii_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "pii_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "object": "x",
            "status": "processing",
            "employee_id": "ee_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "group_id": "gr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "provider_policy_number": "x",
            "member_number": "x",
            "policy_start_date": "2024-12-01",
            "policy_end_date": "2024-12-01",
            "associated_persons": [
                {
                    "id": "x",
                    "associated_person_id": "ap_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "member_number": "x",
                    "start_date": "2024-12-01",
                    "end_date": "2024-12-01"
                }
            ]
        },
        "idField": "id"
    },
    {
        "entity": "provider",
        "accessor": "Provider",
        "op": "list",
        "method": "GET",
        "path": "/providers",
        "args": [],
        "select": {
            "country": "v1",
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "country",
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "country",
                "wire": "country"
            },
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "object": "x",
                    "id": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "name": "x",
                    "description": "x",
                    "website_url": "x",
                    "logo_url": "x",
                    "employer_platform_url": "x",
                    "kota_hub_url": "x",
                    "support_phone": "x",
                    "supported_countries": [
                        "af"
                    ]
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "provider",
        "accessor": "Provider",
        "op": "load",
        "method": "GET",
        "path": "/providers/{provider_id}",
        "args": [
            {
                "name": "id",
                "wire": "provider_id",
                "value": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "object": "x",
            "id": "pr_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "name": "x",
            "description": "x",
            "website_url": "x",
            "logo_url": "x",
            "employer_platform_url": "x",
            "kota_hub_url": "x",
            "support_phone": "x",
            "supported_countries": [
                "af"
            ]
        },
        "idField": "id"
    },
    {
        "entity": "webhook_endpoint",
        "accessor": "WebhookEndpoint",
        "op": "list",
        "method": "GET",
        "path": "/webhooks/endpoints",
        "args": [],
        "select": {
            "page": "v1",
            "page_size": "v1"
        },
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "page",
            "page_size"
        ],
        "queryArgs": [
            {
                "name": "page",
                "wire": "page"
            },
            {
                "name": "page_size",
                "wire": "page_size"
            }
        ],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "items": [
                {
                    "id": "whe_3b1333d87d9d4fd6ad83ba7f6b0e951a",
                    "endpoint_url": "x",
                    "subscribed_events": [
                        "x"
                    ],
                    "created_at": "2024-12-01T00:00:00Z",
                    "object": "x"
                }
            ],
            "page": 123,
            "page_size": 123,
            "total_count": 123,
            "has_next_page": true,
            "has_previous_page": true
        },
        "idField": "id"
    },
    {
        "entity": "webhook_endpoint",
        "accessor": "WebhookEndpoint",
        "op": "load",
        "method": "GET",
        "path": "/webhooks/endpoints/{webhook_endpoint_id}",
        "args": [
            {
                "name": "id",
                "wire": "webhook_endpoint_id",
                "value": "whe_3b1333d87d9d4fd6ad83ba7f6b0e951a"
            }
        ],
        "select": {},
        "headers": [
            {
                "name": "x_platform_id",
                "wire": "X-Platform-Id",
                "value": "h1"
            }
        ],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [],
        "queryArgs": [],
        "auth": [
            [
                {
                    "in": "header",
                    "name": "authorization",
                    "scheme": "bearer"
                }
            ]
        ],
        "status": 200,
        "sample": {
            "id": "whe_3b1333d87d9d4fd6ad83ba7f6b0e951a",
            "endpoint_url": "x",
            "subscribed_events": [
                "x"
            ],
            "created_at": "2024-12-01T00:00:00Z",
            "object": "x"
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map