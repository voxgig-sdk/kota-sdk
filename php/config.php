<?php
declare(strict_types=1);

// Kota SDK configuration

class KotaConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "Kota",
                "slug" => "kota",
                "version" => "0.1.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
          'transport' => 'base',
        ],
            ],
            "options" => [
                "base" => "https://test.api.kota.io",
                "auth" => [
                    "prefix" => "Bearer",
                ],
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "associated_person" => [],
                    "associated_person_eligibility_response_paged_list" => [],
                    "contribution_report" => [],
                    "contribution_report_employee_breakdown" => [],
                    "contribution_report_employee_breakdown_response_paged_list" => [],
                    "create_hosted_session_token" => [],
                    "create_session_token" => [],
                    "dependent" => [],
                    "dependents_management_intent" => [],
                    "eligibility_check" => [],
                    "employee" => [],
                    "employee_health_insurance_offer" => [],
                    "employee_health_insurance_offer_response_paged_list" => [],
                    "employee_health_insurance_policy" => [],
                    "employee_health_insurance_policy_response_paged_list" => [],
                    "employer" => [],
                    "employer_health_insurance_policy" => [],
                    "employer_health_insurance_policy_response_paged_list" => [],
                    "employer_health_insurance_quote" => [],
                    "employer_health_insurance_quote_response_paged_list" => [],
                    "enrolment_intent" => [],
                    "enrolment_intent_requirement_response_paged_list" => [],
                    "event" => [],
                    "group" => [],
                    "group_employee" => [],
                    "group_employee_response_paged_list" => [],
                    "group_policy" => [],
                    "group_policy_intent" => [],
                    "group_policy_intent_requirement_response_paged_list" => [],
                    "group_quote" => [],
                    "group_quote_intent" => [],
                    "group_quote_intent_requirement_response_paged_list" => [],
                    "plan" => [],
                    "policy" => [],
                    "policy_amendment_intent" => [],
                    "policy_import_intent" => [],
                    "provider" => [],
                    "replay" => [],
                    "webhook_endpoint" => [],
                    "webhook_endpoint_response_paged_list" => [],
                ],
            ],
            "entity" => [
        'associated_person' => [
          'fields' => [
            [
              'format' => 'date',
              'name' => 'date_of_birth',
              'req' => true,
              'short' => 'Date of birth of the associated person',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'email',
              'short' => 'Email address of the associated person',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'employee_id',
              'req' => true,
              'short' => 'Unique identifier for the employee this person is associated with',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'first_name',
              'req' => true,
              'short' => 'First name of the associated person',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the associated person',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'last_name',
              'req' => true,
              'short' => 'Last name of the associated person',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'phone_number',
              'short' => 'Phone number in E.164 international format (e.g.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'platform_id',
              'short' => 'Unique identifier for the platform',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'relationship_type',
              'req' => true,
              'short' => 'The relationship type between the employee and the associated person',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'sex_at_birth',
              'req' => true,
              'short' => 'The sex assigned to the associated person at birth',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'associated_person',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'employee_id',
                        'orig' => 'employee_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/employees/{employee_id}/associated_persons',
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                    [
                      'var' => 'employee_id',
                    ],
                    [
                      'lit' => 'associated_persons',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employee_id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employees',
                    '{employee_id}',
                    'associated_persons',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'employee_id',
                        'orig' => 'employee_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/employees/{employee_id}/associated_persons',
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                    [
                      'var' => 'employee_id',
                    ],
                    [
                      'lit' => 'associated_persons',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employee_id',
                      'page',
                      'page_size',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'employees',
                    '{employee_id}',
                    'associated_persons',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'employee_id',
                        'orig' => 'employee_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'ap_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'associated_person_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/employees/{employee_id}/associated_persons/{associated_person_id}',
                  'rename' => [
                    'param' => [
                      'associated_person_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                    [
                      'var' => 'employee_id',
                    ],
                    [
                      'lit' => 'associated_persons',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employee_id',
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employees',
                    '{employee_id}',
                    'associated_persons',
                    '{id}',
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'employee_id',
                        'orig' => 'employee_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'ap_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'associated_person_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/employees/{employee_id}/associated_persons/{associated_person_id}',
                  'rename' => [
                    'param' => [
                      'associated_person_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                    [
                      'var' => 'employee_id',
                    ],
                    [
                      'lit' => 'associated_persons',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employee_id',
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employees',
                    '{employee_id}',
                    'associated_persons',
                    '{id}',
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'employee_id',
                        'orig' => 'employee_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'ap_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'associated_person_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/employees/{employee_id}/associated_persons/{associated_person_id}',
                  'rename' => [
                    'param' => [
                      'associated_person_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                    [
                      'var' => 'employee_id',
                    ],
                    [
                      'lit' => 'associated_persons',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employee_id',
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employees',
                    '{employee_id}',
                    'associated_persons',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'employee',
              ],
            ],
          ],
        ],
        'associated_person_eligibility_response_paged_list' => [
          'fields' => [
            [
              'name' => 'associated_person_id',
              'req' => true,
              'short' => 'The associated person ID.',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date',
              'name' => 'date_of_birth',
              'req' => true,
              'short' => 'Date of birth of the associated person.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'eligibility_status',
              'req' => true,
              'short' => 'Eligibility status for the policy/plan.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'first_name',
              'req' => true,
              'short' => 'First name of the associated person.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ineligibility_reason',
              'short' => 'Reason for ineligibility if status is ineligible.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'last_name',
              'req' => true,
              'short' => 'Last name of the associated person.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'relationship',
              'req' => true,
              'short' => 'Relationship type to the employee.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'sex_at_birth',
              'req' => true,
              'short' => 'Sex at birth of the associated person.',
              'type' => '`$ANY`',
            ],
          ],
          'name' => 'associated_person_eligibility_response_paged_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'dependents_management_intent_id',
                        'orig' => 'dependents_management_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/dependents_management_intents/{dependents_management_intent_id}/associated_persons_eligibility',
                  'segments' => [
                    [
                      'lit' => 'dependents_management_intents',
                    ],
                    [
                      'var' => 'dependents_management_intent_id',
                    ],
                    [
                      'lit' => 'associated_persons_eligibility',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dependents_management_intent_id',
                      'page',
                      'page_size',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'dependents_management_intents',
                    '{dependents_management_intent_id}',
                    'associated_persons_eligibility',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'dependents_management_intent',
              ],
            ],
          ],
        ],
        'contribution_report' => [
          'fields' => [
            [
              'format' => 'date-time',
              'name' => 'created_at',
              'req' => true,
              'short' => 'Date and time the report was created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'employer_id',
              'req' => true,
              'short' => 'Unique identifier of the employer for which the report is created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'external_customer_id',
              'short' => 'Unique identifier of the customer for which the report is created.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'format' => 'date-time',
              'name' => 'finalized_at',
              'short' => 'Date and time the report was finalized, if applicable',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the contribution report',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'last_updated_at',
              'req' => true,
              'short' => 'Date and time of the last update to the report',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'period',
              'req' => true,
              'short' => 'Period covered by the contribution report',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of the contribution report',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'contribution_report',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'contribution_report_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/contribution_reports/{contribution_report_id}/finalize',
                  'rename' => [
                    'param' => [
                      'contribution_report_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'contribution_reports',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'finalize',
                    ],
                  ],
                  'select' => [
                    '$action' => 'finalize',
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'contribution_reports',
                    '{id}',
                    'finalize',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'er_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'employer_id',
                        'orig' => 'employer_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'external_customer_id',
                        'orig' => 'external_customer_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'month',
                        'orig' => 'month',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'year',
                        'orig' => 'year',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/contribution_reports',
                  'segments' => [
                    [
                      'lit' => 'contribution_reports',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employer_id',
                      'external_customer_id',
                      'month',
                      'page',
                      'page_size',
                      'status',
                      'x_platform_id',
                      'year',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'contribution_reports',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'contribution_report_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/contribution_reports/{contribution_report_id}',
                  'rename' => [
                    'param' => [
                      'contribution_report_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'contribution_reports',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'contribution_reports',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'contribution_report_employee_breakdown' => [
          'fields' => [
            [
              'name' => 'contribution_report_id',
              'req' => true,
              'short' => 'Unique identifier of the related contribution report',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'created_at',
              'req' => true,
              'short' => 'Date and time the breakdown was created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'currency',
              'req' => true,
              'short' => 'The currency in which all the amounts in this breakdown are presented (e.g.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'employee_id',
              'req' => true,
              'short' => 'Unique identifier of the employee for which the breakdown is created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'employer_id',
              'req' => true,
              'short' => 'Unique identifier of the employer for which the breakdown is created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'external_customer_id',
              'short' => 'Unique identifier of the customer for which the breakdown is created.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'format' => 'date-time',
              'name' => 'finalized_at',
              'short' => 'Date and time the breakdown was finalized, if applicable',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'health_insurance',
              'req' => true,
              'short' => 'Health insurance contribution details',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'last_updated_at',
              'req' => true,
              'short' => 'Date and time of the last update to the breakdown',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'period',
              'req' => true,
              'short' => 'Period covered by the employee breakdown',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of the breakdown',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'contribution_report_employee_breakdown',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'contribution_report_id',
                        'orig' => 'contribution_report_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'employee_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/contribution_reports/{contribution_report_id}/employee_breakdowns/{employee_id}',
                  'rename' => [
                    'param' => [
                      'employee_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'contribution_reports',
                    ],
                    [
                      'var' => 'contribution_report_id',
                    ],
                    [
                      'lit' => 'employee_breakdowns',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'contribution_report_id',
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'contribution_reports',
                    '{contribution_report_id}',
                    'employee_breakdowns',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'contribution_report',
              ],
            ],
          ],
        ],
        'contribution_report_employee_breakdown_response_paged_list' => [
          'fields' => [
            [
              'name' => 'contribution_report_id',
              'req' => true,
              'short' => 'Unique identifier of the related contribution report',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'created_at',
              'req' => true,
              'short' => 'Date and time the breakdown was created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'currency',
              'req' => true,
              'short' => 'The currency in which all the amounts in this breakdown are presented (e.g.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'employee_id',
              'req' => true,
              'short' => 'Unique identifier of the employee for which the breakdown is created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'employer_id',
              'req' => true,
              'short' => 'Unique identifier of the employer for which the breakdown is created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'external_customer_id',
              'short' => 'Unique identifier of the customer for which the breakdown is created.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'format' => 'date-time',
              'name' => 'finalized_at',
              'short' => 'Date and time the breakdown was finalized, if applicable',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'health_insurance',
              'req' => true,
              'short' => 'Health insurance contribution details',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'id',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'last_updated_at',
              'req' => true,
              'short' => 'Date and time of the last update to the breakdown',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'period',
              'req' => true,
              'short' => 'Period covered by the employee breakdown',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of the breakdown',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'contribution_report_employee_breakdown_response_paged_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ctr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'contribution_report_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/contribution_reports/{contribution_report_id}/employee_breakdowns',
                  'rename' => [
                    'param' => [
                      'contribution_report_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'contribution_reports',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'employee_breakdowns',
                    ],
                  ],
                  'select' => [
                    '$action' => 'employee_breakdowns',
                    'exist' => [
                      'id',
                      'page',
                      'page_size',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'contribution_reports',
                    '{id}',
                    'employee_breakdowns',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'create_hosted_session_token' => [
          'fields' => [
            [
              'format' => 'date-time',
              'name' => 'expiry',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'link',
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'create_hosted_session_token',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/hosted/sessions',
                  'segments' => [
                    [
                      'lit' => 'hosted',
                    ],
                    [
                      'lit' => 'sessions',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'hosted',
                    'sessions',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'create_session_token' => [
          'fields' => [
            [
              'format' => 'date-time',
              'name' => 'expiry',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'token',
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'create_session_token',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/embed/sessions',
                  'segments' => [
                    [
                      'lit' => 'embed',
                    ],
                    [
                      'lit' => 'sessions',
                    ],
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'embed',
                    'sessions',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'dependent' => [
          'fields' => [
            [
              'name' => 'action_required',
              'short' => 'Details of the action required from the caller.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'coverage_options',
              'short' => 'Available member-scoped coverage options for the plan.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$ARRAY`',
                ],
              ],
            ],
            [
              'name' => 'dependents',
              'req' => true,
              'short' => 'List of dependents being managed.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'disclosures',
              'req' => true,
              'short' => 'Disclosures associated with this intent.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the dependents management intent.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'Object type identifier.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'parent_intent_id',
              'req' => true,
              'short' => 'The parent intent ID (e.g.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'parent_intent_type',
              'req' => true,
              'short' => 'The type of parent intent.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'plan',
              'req' => true,
              'short' => 'Plan information including pricing details.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of the dependents management intent.',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dependent',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'idempotency_key',
                        'orig' => 'idempotency_key',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'dependents_management_intent_id',
                        'orig' => 'dependents_management_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/dependents_management_intents/{dependents_management_intent_id}/dependents',
                  'segments' => [
                    [
                      'lit' => 'dependents_management_intents',
                    ],
                    [
                      'var' => 'dependents_management_intent_id',
                    ],
                    [
                      'lit' => 'dependents',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dependents_management_intent_id',
                      'idempotency_key',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'dependents_management_intents',
                    '{dependents_management_intent_id}',
                    'dependents',
                  ],
                ],
              ],
            ],
            'remove' => [
              'input' => 'data',
              'name' => 'remove',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'dependents_management_intent_id',
                        'orig' => 'dependents_management_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'ap_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'associated_person_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'DELETE',
                  'orig' => '/dependents_management_intents/{dependents_management_intent_id}/dependents/{associated_person_id}',
                  'rename' => [
                    'param' => [
                      'associated_person_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'dependents_management_intents',
                    ],
                    [
                      'var' => 'dependents_management_intent_id',
                    ],
                    [
                      'lit' => 'dependents',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'dependents_management_intent_id',
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'dependents_management_intents',
                    '{dependents_management_intent_id}',
                    'dependents',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'dependents_management_intent',
              ],
            ],
          ],
        ],
        'dependents_management_intent' => [
          'fields' => [
            [
              'name' => 'action_required',
              'short' => 'Details of the action required from the caller.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'coverage_options',
              'short' => 'Available member-scoped coverage options for the plan.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$ARRAY`',
                ],
              ],
            ],
            [
              'name' => 'dependents',
              'req' => true,
              'short' => 'List of dependents being managed.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'disclosures',
              'req' => true,
              'short' => 'Disclosures associated with this intent.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the dependents management intent.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'Object type identifier.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'parent_intent_id',
              'req' => true,
              'short' => 'The parent intent ID (e.g.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'parent_intent_type',
              'req' => true,
              'short' => 'The type of parent intent.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'plan',
              'req' => true,
              'short' => 'Plan information including pricing details.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of the dependents management intent.',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'dependents_management_intent',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'pai_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'policy_amendment_intent_id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'p_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'policy_id',
                        'orig' => 'policy_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/policies/{policy_id}/policy_amendment_intents/{id}/create_dependents_management_intent',
                  'rename' => [
                    'param' => [
                      'id' => 'policy_amendment_intent_id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'policies',
                    ],
                    [
                      'var' => 'policy_id',
                    ],
                    [
                      'lit' => 'policy_amendment_intents',
                    ],
                    [
                      'var' => 'policy_amendment_intent_id',
                    ],
                    [
                      'lit' => 'create_dependents_management_intent',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'policy_amendment_intent_id',
                      'policy_id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'policies',
                    '{policy_id}',
                    'policy_amendment_intents',
                    '{policy_amendment_intent_id}',
                    'create_dependents_management_intent',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ei_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'enrolment_intent_id',
                        'orig' => 'enrolment_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/enrolment_intents/{enrolment_intent_id}/create_dependents_management_intent',
                  'segments' => [
                    [
                      'lit' => 'enrolment_intents',
                    ],
                    [
                      'var' => 'enrolment_intent_id',
                    ],
                    [
                      'lit' => 'create_dependents_management_intent',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'enrolment_intent_id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'enrolment_intents',
                    '{enrolment_intent_id}',
                    'create_dependents_management_intent',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'dependents_management_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/dependents_management_intents/{dependents_management_intent_id}/cancel',
                  'rename' => [
                    'param' => [
                      'dependents_management_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'dependents_management_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'cancel',
                    ],
                  ],
                  'select' => [
                    '$action' => 'cancel',
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'dependents_management_intents',
                    '{id}',
                    'cancel',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'dependents_management_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/dependents_management_intents/{dependents_management_intent_id}/confirm',
                  'rename' => [
                    'param' => [
                      'dependents_management_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'dependents_management_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'confirm',
                    ],
                  ],
                  'select' => [
                    '$action' => 'confirm',
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'dependents_management_intents',
                    '{id}',
                    'confirm',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'dmi_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'dependents_management_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/dependents_management_intents/{dependents_management_intent_id}',
                  'rename' => [
                    'param' => [
                      'dependents_management_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'dependents_management_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'dependents_management_intents',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'enrolment_intent',
              ],
              [
                'policy',
                'policy_amendment_intent',
              ],
            ],
          ],
        ],
        'eligibility_check' => [
          'fields' => [
            [
              'name' => 'eligibility_status',
              'req' => true,
              'short' => 'Eligibility status: `eligible` or `ineligible`.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'plan',
              'req' => true,
              'short' => 'The insurance plan associated with the group.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'provider',
              'req' => true,
              'short' => 'The insurance provider associated with the group.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'reasons',
              'req' => true,
              'short' => 'List of reasons why the employee is ineligible.',
              'type' => '`$ARRAY`',
            ],
          ],
          'name' => 'eligibility_check',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'gr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'group_id',
                        'orig' => 'group_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/groups/{group_id}/eligibility_check',
                  'segments' => [
                    [
                      'lit' => 'groups',
                    ],
                    [
                      'var' => 'group_id',
                    ],
                    [
                      'lit' => 'eligibility_check',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'group_id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'groups',
                    '{group_id}',
                    'eligibility_check',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'group',
              ],
            ],
          ],
        ],
        'employee' => [
          'fields' => [
            [
              'name' => 'bank_account',
              'short' => 'Bank account details',
              'type' => '`$NULL`',
            ],
            [
              'format' => 'date',
              'name' => 'date_of_birth',
              'req' => true,
              'short' => 'Date of birth of the employee',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date',
              'name' => 'earliest_benefits_start_date',
              'short' => 'The earliest date this employee can be enrolled in any benefits.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'email',
              'req' => true,
              'short' => 'Email address of the employee',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'employer_id',
              'short' => 'Unique identifier for the employer',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'external_customer_id',
              'short' => 'A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'first_name',
              'req' => true,
              'short' => 'First name of the employee.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'home_address',
              'short' => 'Location where the employee is legally registered to live',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'id',
              'short' => 'Unique identifier for the employee',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'last_name',
              'req' => true,
              'short' => 'Last name of the employee',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'metadata',
              'short' => 'Set of key-value pairs that you can attach to an object.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$OBJECT`',
                ],
              ],
            ],
            [
              'name' => 'national_tax_id',
              'req' => true,
              'short' => 'PPSN in Ireland, NINo in the UK, DNI/NIE in Spain',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'nationality',
              'short' => 'Nationality of the employee (e.g.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'offboard_on',
              'short' => 'Date when the employee was or will be offboarded',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'phone_number',
              'req' => true,
              'short' => 'Phone number in E.164 international format (e.g.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'platform_id',
              'short' => 'Unique identifier for the platform',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'sex_at_birth',
              'req' => true,
              'short' => 'The sex assigned to the employee at birth',
              'type' => '`$ANY`',
            ],
            [
              'format' => 'date',
              'name' => 'start_on',
              'short' => 'Employment start date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'short' => 'Current status of the employee',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'employee',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'idempotency_key',
                        'orig' => 'idempotency_key',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'employee_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/employees/{employee_id}/offboard',
                  'rename' => [
                    'param' => [
                      'employee_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'offboard',
                    ],
                  ],
                  'select' => [
                    '$action' => 'offboard',
                    'exist' => [
                      'id',
                      'idempotency_key',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employees',
                    '{id}',
                    'offboard',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'idempotency_key',
                        'orig' => 'idempotency_key',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'employee_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/employees/{employee_id}/offboard/cancel',
                  'rename' => [
                    'param' => [
                      'employee_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'offboard',
                    ],
                    [
                      'lit' => 'cancel',
                    ],
                  ],
                  'select' => [
                    '$action' => 'offboard_cancel',
                    'exist' => [
                      'id',
                      'idempotency_key',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employees',
                    '{id}',
                    'offboard',
                    'cancel',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'idempotency_key',
                        'orig' => 'idempotency_key',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/employees',
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'idempotency_key',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employees',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'er_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'employer_id',
                        'orig' => 'employer_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'external_customer_id',
                        'orig' => 'external_customer_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'metadata_id',
                        'orig' => 'metadata_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/employees',
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employer_id',
                      'external_customer_id',
                      'filter',
                      'metadata_id',
                      'page',
                      'page_size',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'employees',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'employee_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/employees/{employee_id}',
                  'rename' => [
                    'param' => [
                      'employee_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employees',
                    '{id}',
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'employee_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/employees/{employee_id}',
                  'rename' => [
                    'param' => [
                      'employee_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employees',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'employee_health_insurance_offer' => [
          'fields' => [
            [
              'name' => 'coverage_level',
              'req' => true,
              'short' => 'Details about the coverage level for the offer.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'employee_id',
              'req' => true,
              'short' => 'The Id of the employee for which the offer is available',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'employer_id',
              'req' => true,
              'short' => 'The Id of the employer for which the offer is available',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'external_customer_id',
              'short' => 'A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for offer',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'required_action',
              'short' => 'Required action to progress the offer, if any.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of offer',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'employee_health_insurance_offer',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'employee_id',
                        'orig' => 'employee_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'eeho_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'employee_offer_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/employees/{employee_id}/health_insurance/offers/{employee_offer_id}',
                  'rename' => [
                    'param' => [
                      'employee_offer_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                    [
                      'var' => 'employee_id',
                    ],
                    [
                      'lit' => 'health_insurance',
                    ],
                    [
                      'lit' => 'offers',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employee_id',
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employees',
                    '{employee_id}',
                    'health_insurance',
                    'offers',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'employee',
              ],
            ],
          ],
        ],
        'employee_health_insurance_offer_response_paged_list' => [
          'fields' => [
            [
              'name' => 'coverage_level',
              'req' => true,
              'short' => 'Details about the coverage level for the offer.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'employee_id',
              'req' => true,
              'short' => 'The Id of the employee for which the offer is available',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'employer_id',
              'req' => true,
              'short' => 'The Id of the employer for which the offer is available',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'external_customer_id',
              'short' => 'A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for offer',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'required_action',
              'short' => 'Required action to progress the offer, if any.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of offer',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'employee_health_insurance_offer_response_paged_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'employee_id',
                        'orig' => 'employee_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/employees/{employee_id}/health_insurance/offers',
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                    [
                      'var' => 'employee_id',
                    ],
                    [
                      'lit' => 'health_insurance',
                    ],
                    [
                      'lit' => 'offers',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employee_id',
                      'page',
                      'page_size',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'employees',
                    '{employee_id}',
                    'health_insurance',
                    'offers',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'employee',
              ],
            ],
          ],
        ],
        'employee_health_insurance_policy' => [
          'fields' => [
            [
              'format' => 'date',
              'name' => 'cancellation_date',
              'short' => 'Policy was cancelled on this date, if cancellation occured',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'coverage_level',
              'req' => true,
              'short' => 'Represents the current coverage level for the policy',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'employee_id',
              'req' => true,
              'short' => 'The Id of the employee for which the policy is created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'employer_id',
              'req' => true,
              'short' => 'The Id of the employer for which the policy is created',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date',
              'name' => 'end_date',
              'req' => true,
              'short' => 'Policy ends on this date',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'int32',
              'name' => 'enrolled_dependants_count',
              'req' => true,
              'short' => 'Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy.',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'enrolment_type',
              'req' => true,
              'short' => 'Enrolment type of the policy',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'estimated_gross_premium',
              'req' => true,
              'short' => 'Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'external_customer_id',
              'short' => 'A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for policy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date',
              'name' => 'opt_out_deadline_date',
              'req' => true,
              'short' => 'Last day to opt out from the policy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'policy_number',
              'short' => 'Health insurance policy number, if available',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'renewal',
              'req' => true,
              'short' => 'Renewal information for the policy',
              'type' => '`$ANY`',
            ],
            [
              'format' => 'date',
              'name' => 'start_date',
              'req' => true,
              'short' => 'Policy starts on this date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of policy',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'employee_health_insurance_policy',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'employee_id',
                        'orig' => 'employee_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'eehp_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'employee_policy_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/employees/{employee_id}/health_insurance/policies/{employee_policy_id}',
                  'rename' => [
                    'param' => [
                      'employee_policy_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                    [
                      'var' => 'employee_id',
                    ],
                    [
                      'lit' => 'health_insurance',
                    ],
                    [
                      'lit' => 'policies',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employee_id',
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employees',
                    '{employee_id}',
                    'health_insurance',
                    'policies',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'employee',
              ],
            ],
          ],
        ],
        'employee_health_insurance_policy_response_paged_list' => [
          'fields' => [
            [
              'format' => 'date',
              'name' => 'cancellation_date',
              'short' => 'Policy was cancelled on this date, if cancellation occured',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'coverage_level',
              'req' => true,
              'short' => 'Represents the current coverage level for the policy',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'employee_id',
              'req' => true,
              'short' => 'The Id of the employee for which the policy is created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'employer_id',
              'req' => true,
              'short' => 'The Id of the employer for which the policy is created',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date',
              'name' => 'end_date',
              'req' => true,
              'short' => 'Policy ends on this date',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'int32',
              'name' => 'enrolled_dependants_count',
              'req' => true,
              'short' => 'Number of dependants (spouse, children, or other eligible family members) currently enrolled in this health insurance policy.',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'enrolment_type',
              'req' => true,
              'short' => 'Enrolment type of the policy',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'estimated_gross_premium',
              'req' => true,
              'short' => 'Estimated gross premium amounts for this health insurance policy based on current enrollment and policy configuration.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'external_customer_id',
              'short' => 'A unique identifier assigned by the Employer of Record (EoR) platform to the Customer (i.e.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for policy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date',
              'name' => 'opt_out_deadline_date',
              'req' => true,
              'short' => 'Last day to opt out from the policy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'policy_number',
              'short' => 'Health insurance policy number, if available',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'renewal',
              'req' => true,
              'short' => 'Renewal information for the policy',
              'type' => '`$ANY`',
            ],
            [
              'format' => 'date',
              'name' => 'start_date',
              'req' => true,
              'short' => 'Policy starts on this date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of policy',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'employee_health_insurance_policy_response_paged_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'employee_id',
                        'orig' => 'employee_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/employees/{employee_id}/health_insurance/policies',
                  'segments' => [
                    [
                      'lit' => 'employees',
                    ],
                    [
                      'var' => 'employee_id',
                    ],
                    [
                      'lit' => 'health_insurance',
                    ],
                    [
                      'lit' => 'policies',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employee_id',
                      'page',
                      'page_size',
                      'status',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'employees',
                    '{employee_id}',
                    'health_insurance',
                    'policies',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'employee',
              ],
            ],
          ],
        ],
        'employer' => [
          'fields' => [
            [
              'name' => 'contact',
              'req' => true,
              'type' => '`$ANY`',
            ],
            [
              'format' => 'date',
              'name' => 'earliest_benefits_start_date',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'legal_address',
              'req' => true,
              'type' => '`$ANY`',
            ],
            [
              'name' => 'legal_name',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'metadata',
              'short' => 'Set of key-value pairs that you can attach to an object.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$OBJECT`',
                ],
              ],
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'offboard_on',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'platform_id',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'registration_number',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'status',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'employer',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'idempotency_key',
                        'orig' => 'idempotency_key',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'er_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'employer_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/employers/{employer_id}/offboard',
                  'rename' => [
                    'param' => [
                      'employer_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'employers',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'offboard',
                    ],
                  ],
                  'select' => [
                    '$action' => 'offboard',
                    'exist' => [
                      'id',
                      'idempotency_key',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employers',
                    '{id}',
                    'offboard',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'idempotency_key',
                        'orig' => 'idempotency_key',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/employers',
                  'segments' => [
                    [
                      'lit' => 'employers',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'idempotency_key',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employers',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'filter',
                        'orig' => 'filter',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/employers',
                  'segments' => [
                    [
                      'lit' => 'employers',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'filter',
                      'page',
                      'page_size',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'employers',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'er_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'employer_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/employers/{employer_id}',
                  'rename' => [
                    'param' => [
                      'employer_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'employers',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employers',
                    '{id}',
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'er_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'employer_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/employers/{employer_id}',
                  'rename' => [
                    'param' => [
                      'employer_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'employers',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employers',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'employer_health_insurance_policy' => [
          'fields' => [
            [
              'format' => 'date',
              'name' => 'cancellation_date',
              'short' => 'Policy was cancelled on this date, if cancellation occured',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'coverage_levels',
              'req' => true,
              'short' => 'Represents the available coverage levels for this policy',
              'type' => '`$ARRAY`',
            ],
            [
              'format' => 'int32',
              'name' => 'employer_cancellation_period_length',
              'req' => true,
              'short' => 'How many days the employer has to cancel the policy since the policy starts',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'employer_id',
              'req' => true,
              'short' => 'The Id of the employer for which the policy is created',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date',
              'name' => 'end_date',
              'req' => true,
              'short' => 'Policy ends on this date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'enrolment_type',
              'req' => true,
              'short' => 'Enrolment type of the policy',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'group_policy_number',
              'short' => 'Group’s health insurance policy number, if available',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for policy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'renewal',
              'req' => true,
              'short' => 'Renewal information for the policy',
              'type' => '`$ANY`',
            ],
            [
              'format' => 'date',
              'name' => 'start_date',
              'req' => true,
              'short' => 'Policy starts on this date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of policy',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'employer_health_insurance_policy',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'er_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'employer_id',
                        'orig' => 'employer_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'erhp_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'employer_policy_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/employers/{employer_id}/health_insurance/policies/{employer_policy_id}',
                  'rename' => [
                    'param' => [
                      'employer_policy_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'employers',
                    ],
                    [
                      'var' => 'employer_id',
                    ],
                    [
                      'lit' => 'health_insurance',
                    ],
                    [
                      'lit' => 'policies',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employer_id',
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employers',
                    '{employer_id}',
                    'health_insurance',
                    'policies',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'employer',
              ],
            ],
          ],
        ],
        'employer_health_insurance_policy_response_paged_list' => [
          'fields' => [
            [
              'format' => 'date',
              'name' => 'cancellation_date',
              'short' => 'Policy was cancelled on this date, if cancellation occured',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'coverage_levels',
              'req' => true,
              'short' => 'Represents the available coverage levels for this policy',
              'type' => '`$ARRAY`',
            ],
            [
              'format' => 'int32',
              'name' => 'employer_cancellation_period_length',
              'req' => true,
              'short' => 'How many days the employer has to cancel the policy since the policy starts',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'employer_id',
              'req' => true,
              'short' => 'The Id of the employer for which the policy is created',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date',
              'name' => 'end_date',
              'req' => true,
              'short' => 'Policy ends on this date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'enrolment_type',
              'req' => true,
              'short' => 'Enrolment type of the policy',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'group_policy_number',
              'short' => 'Group’s health insurance policy number, if available',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for policy',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'renewal',
              'req' => true,
              'short' => 'Renewal information for the policy',
              'type' => '`$ANY`',
            ],
            [
              'format' => 'date',
              'name' => 'start_date',
              'req' => true,
              'short' => 'Policy starts on this date',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of policy',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'employer_health_insurance_policy_response_paged_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'er_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'employer_id',
                        'orig' => 'employer_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/employers/{employer_id}/health_insurance/policies',
                  'segments' => [
                    [
                      'lit' => 'employers',
                    ],
                    [
                      'var' => 'employer_id',
                    ],
                    [
                      'lit' => 'health_insurance',
                    ],
                    [
                      'lit' => 'policies',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employer_id',
                      'page',
                      'page_size',
                      'status',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'employers',
                    '{employer_id}',
                    'health_insurance',
                    'policies',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'employer',
              ],
            ],
          ],
        ],
        'employer_health_insurance_quote' => [
          'fields' => [
            [
              'name' => 'coverage_levels',
              'req' => true,
              'short' => 'List of levels covered under the policy, each item representing details about the plan’s cover.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'employer_id',
              'req' => true,
              'short' => 'The Id of the employer for which the is created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the quote',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'quoted_at',
              'req' => true,
              'short' => 'Date and time the quote was created at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'required_action',
              'short' => 'Actions required by the employer to proceed with the quote.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of the quote',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'employer_health_insurance_quote',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'er_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'employer_id',
                        'orig' => 'employer_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'erhq_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'employer_quote_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/employers/{employer_id}/health_insurance/quotes/{employer_quote_id}',
                  'rename' => [
                    'param' => [
                      'employer_quote_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'employers',
                    ],
                    [
                      'var' => 'employer_id',
                    ],
                    [
                      'lit' => 'health_insurance',
                    ],
                    [
                      'lit' => 'quotes',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employer_id',
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'employers',
                    '{employer_id}',
                    'health_insurance',
                    'quotes',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'employer',
              ],
            ],
          ],
        ],
        'employer_health_insurance_quote_response_paged_list' => [
          'fields' => [
            [
              'name' => 'coverage_levels',
              'req' => true,
              'short' => 'List of levels covered under the policy, each item representing details about the plan’s cover.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'employer_id',
              'req' => true,
              'short' => 'The Id of the employer for which the is created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the quote',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'quoted_at',
              'req' => true,
              'short' => 'Date and time the quote was created at',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'required_action',
              'short' => 'Actions required by the employer to proceed with the quote.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of the quote',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'employer_health_insurance_quote_response_paged_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'er_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'employer_id',
                        'orig' => 'employer_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/employers/{employer_id}/health_insurance/quotes',
                  'segments' => [
                    [
                      'lit' => 'employers',
                    ],
                    [
                      'var' => 'employer_id',
                    ],
                    [
                      'lit' => 'health_insurance',
                    ],
                    [
                      'lit' => 'quotes',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employer_id',
                      'page',
                      'page_size',
                      'status',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'employers',
                    '{employer_id}',
                    'health_insurance',
                    'quotes',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'employer',
              ],
            ],
          ],
        ],
        'enrolment_intent' => [
          'fields' => [
            [
              'name' => 'action_required',
              'short' => 'If the enrolment intent status is `action_required`, this field provides details about the action that needs to be taken to proceed with the enrolment.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'disclosures',
              'req' => true,
              'short' => 'Disclosures associated with this intent.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'employee_id',
              'req' => true,
              'short' => 'Identifier for the employee associated with this enrolment intent.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'force_confirmation',
              'req' => true,
              'short' => 'If set to true, the system will always force the `PendingConfirmation` state before enrolling the employee, even if no action is required.',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'group_id',
              'req' => true,
              'short' => 'Identifier for the group associated with this enrolment intent.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the enrolment intent.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ineligibility_reason',
              'short' => 'If the enrolment intent status is `ineligible`, this field provides details about the reason for employees ineligibility.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'Object type identifier.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'pending_confirmation',
              'short' => 'If the enrolment intent status is `pending_confirmation`, this field provides details about the pending confirmation state.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'policy_configuration',
              'short' => 'Policy configuration associated with this enrolment intent.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'policy_enrolments',
              'req' => true,
              'short' => 'Policy enrolment information',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of the enrolment intent.',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'enrolment_intent',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ei_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'enrolment_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/enrolment_intents/{enrolment_intent_id}/confirm',
                  'rename' => [
                    'param' => [
                      'enrolment_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'enrolment_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'confirm',
                    ],
                  ],
                  'select' => [
                    '$action' => 'confirm',
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'enrolment_intents',
                    '{id}',
                    'confirm',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ei_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'enrolment_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/enrolment_intents/{enrolment_intent_id}/coverage-selections',
                  'rename' => [
                    'param' => [
                      'enrolment_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'enrolment_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'coverage-selections',
                    ],
                  ],
                  'select' => [
                    '$action' => 'coverage_selection',
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'enrolment_intents',
                    '{id}',
                    'coverage-selections',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ei_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'enrolment_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/enrolment_intents/{enrolment_intent_id}/reject',
                  'rename' => [
                    'param' => [
                      'enrolment_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'enrolment_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'reject',
                    ],
                  ],
                  'select' => [
                    '$action' => 'reject',
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'enrolment_intents',
                    '{id}',
                    'reject',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'idempotency_key',
                        'orig' => 'idempotency_key',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/enrolment_intents',
                  'segments' => [
                    [
                      'lit' => 'enrolment_intents',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'idempotency_key',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'enrolment_intents',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'employee_id',
                        'orig' => 'employee_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'gr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'group_id',
                        'orig' => 'group_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/enrolment_intents',
                  'segments' => [
                    [
                      'lit' => 'enrolment_intents',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employee_id',
                      'group_id',
                      'page',
                      'page_size',
                      'status',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'enrolment_intents',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ei_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'enrolment_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/enrolment_intents/{enrolment_intent_id}',
                  'rename' => [
                    'param' => [
                      'enrolment_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'enrolment_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'enrolment_intents',
                    '{id}',
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ei_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'enrolment_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/enrolment_intents/{enrolment_intent_id}',
                  'rename' => [
                    'param' => [
                      'enrolment_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'enrolment_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'enrolment_intents',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'enrolment_intent_requirement_response_paged_list' => [
          'fields' => [
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the requirement',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'is_fulfilled',
              'req' => true,
              'short' => 'Whether the requirement has been fulfilled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'Object type identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object_id',
              'req' => true,
              'short' => 'Identifier of the object (employee ID or employer ID)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object_type',
              'req' => true,
              'short' => 'Type of object this requirement is for (employee or employer)',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'requirement_type',
              'req' => true,
              'short' => 'Type of requirement',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'enrolment_intent_requirement_response_paged_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'ei_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'enrolment_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'object_id',
                        'orig' => 'object_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'object_type',
                        'orig' => 'object_type',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/enrolment_intents/{enrolment_intent_id}/requirements',
                  'rename' => [
                    'param' => [
                      'enrolment_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'enrolment_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'requirements',
                    ],
                  ],
                  'select' => [
                    '$action' => 'requirements',
                    'exist' => [
                      'id',
                      'object_id',
                      'object_type',
                      'page',
                      'page_size',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'enrolment_intents',
                    '{id}',
                    'requirements',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'event' => [
          'fields' => [
            [
              'name' => 'api_version',
              'readOnly' => true,
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date-time',
              'name' => 'created',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'data',
              'req' => true,
              'type' => '`$NULL`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'options',
              'readOnly' => true,
              'type' => '`$NULL`',
            ],
            [
              'name' => 'parent',
              'readOnly' => true,
              'type' => '`$NULL`',
            ],
            [
              'name' => 'platform_id',
              'req' => true,
              'type' => '`$STRING`',
            ],
            [
              'name' => 'root',
              'readOnly' => true,
              'type' => '`$ANY`',
            ],
            [
              'name' => 'type',
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'event',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'created_after',
                        'orig' => 'created_after',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'order_direction',
                        'orig' => 'order_direction',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'version',
                        'orig' => 'version',
                        'type' => '`$ANY`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/events',
                  'segments' => [
                    [
                      'lit' => 'events',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'created_after',
                      'order_direction',
                      'page',
                      'page_size',
                      'version',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'events',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'evt_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'event_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/events/{event_id}',
                  'rename' => [
                    'param' => [
                      'event_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'events',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'parts' => [
                    'events',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'group' => [
          'fields' => [
            [
              'name' => 'description',
              'short' => 'Short description of the purpose or scope of the `group`.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'employer_id',
              'req' => true,
              'short' => 'Identifier for the `employer` that owns this `group`.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'enrolment_type',
              'req' => true,
              'short' => 'Indicates how employees are enrolled into the group.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'group_policy_ids',
              'req' => true,
              'short' => 'Group policy unique identifiers associated with this group.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'group_policy_intent_ids',
              'req' => true,
              'short' => 'Group policy intent unique identifiers associated with this group.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'group_quote_intent_ids',
              'req' => true,
              'short' => 'Group quote intent unique identifiers associated with this group.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'group_type',
              'req' => true,
              'short' => 'Indicates how policies are organized for this group.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the `group`.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'short' => 'Human-readable name of the `group`.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current lifecycle state of the `group`, indicating its current progress.',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'group',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/groups',
                  'segments' => [
                    [
                      'lit' => 'groups',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'groups',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'er_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'employer_id',
                        'orig' => 'employer_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/groups',
                  'segments' => [
                    [
                      'lit' => 'groups',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employer_id',
                      'page',
                      'page_size',
                      'status',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'groups',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'gr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'group_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/groups/{group_id}',
                  'rename' => [
                    'param' => [
                      'group_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'groups',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'groups',
                    '{id}',
                  ],
                ],
              ],
            ],
            'update' => [
              'input' => 'data',
              'name' => 'update',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'gr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'group_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'PUT',
                  'orig' => '/groups/{group_id}',
                  'rename' => [
                    'param' => [
                      'group_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'groups',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'groups',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'group_employee' => [
          'fields' => [
            [
              'format' => 'date',
              'name' => 'desired_policy_start_date',
              'short' => 'The desired date for the employee\'s policy to start.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'eligibility_status',
              'req' => true,
              'short' => 'Eligibility status for the employee in this group.',
              'type' => '`$ANY`',
            ],
            [
              'format' => 'date',
              'name' => 'enrolment_date',
              'short' => 'The date on which the employee agreed to enrol into the group\'s policies.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'enrolment_status',
              'req' => true,
              'short' => 'Enrolment status for the employee in this group.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'enrolments',
              'req' => true,
              'short' => 'List of enrolments associated with the employee in this group.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'group_id',
              'req' => true,
              'short' => 'Unique identifier for the group.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the employee.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'policies',
              'req' => true,
              'short' => 'List of policies associated with the employee in this group.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'scheduled_group_transitions',
              'req' => true,
              'short' => 'List of scheduled group transitions for the employee.',
              'type' => '`$ARRAY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'group_employee',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'idempotency_key',
                        'orig' => 'idempotency_key',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'gr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'group_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/groups/{group_id}/employees',
                  'rename' => [
                    'param' => [
                      'group_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'groups',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'employees',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'idempotency_key',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'groups',
                    '{id}',
                    'employees',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'group_employee_response_paged_list' => [
          'fields' => [
            [
              'format' => 'date',
              'name' => 'desired_policy_start_date',
              'short' => 'The desired date for the employee\'s policy to start.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'eligibility_status',
              'req' => true,
              'short' => 'Eligibility status for the employee in this group.',
              'type' => '`$ANY`',
            ],
            [
              'format' => 'date',
              'name' => 'enrolment_date',
              'short' => 'The date on which the employee agreed to enrol into the group\'s policies.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'enrolment_status',
              'req' => true,
              'short' => 'Enrolment status for the employee in this group.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'enrolments',
              'req' => true,
              'short' => 'List of enrolments associated with the employee in this group.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'group_id',
              'req' => true,
              'short' => 'Unique identifier for the group.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the employee.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'policies',
              'req' => true,
              'short' => 'List of policies associated with the employee in this group.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'scheduled_group_transitions',
              'req' => true,
              'short' => 'List of scheduled group transitions for the employee.',
              'type' => '`$ARRAY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'group_employee_response_paged_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'gr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'group_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'employee_id',
                        'orig' => 'employee_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/groups/{group_id}/employees',
                  'rename' => [
                    'param' => [
                      'group_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'groups',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'employees',
                    ],
                  ],
                  'select' => [
                    '$action' => 'employees',
                    'exist' => [
                      'employee_id',
                      'id',
                      'page',
                      'page_size',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'groups',
                    '{id}',
                    'employees',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'group_policy' => [
          'fields' => [
            [
              'format' => 'date',
              'name' => 'cancellation_date',
              'short' => 'Policy cancellation date (inclusive) in ISO 8610 (YYYY-MM-DD), or null if not applicable.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'disclosures',
              'req' => true,
              'short' => 'Disclosures associated with this group policy.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'employer_id',
              'short' => 'Identifier for the employer associated with this group policy.',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date',
              'name' => 'end_date',
              'short' => 'Policy end date (inclusive) in ISO 8601 (YYYY-MM-DD), or null if open-ended.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'group_id',
              'short' => 'Identifier for the group associated with this group policy.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'health_insurance',
              'short' => 'Health insurance–specific fields (present when `type=health_insurance`).',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the group policy.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'plan',
              'req' => true,
              'short' => 'Plan information for this policy',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'provider',
              'req' => true,
              'short' => 'Provider information for this policy.',
              'type' => '`$ANY`',
            ],
            [
              'format' => 'date',
              'name' => 'start_date',
              'req' => true,
              'short' => 'Policy start (effective) date in ISO 8601 (YYYY-MM-DD).',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current lifecycle state of the `group_policy`, indicating its progress from creation to activation.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'type',
              'req' => true,
              'short' => 'Policy type.',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'group_policy',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'er_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'employer_id',
                        'orig' => 'employer_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'gr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'group_id',
                        'orig' => 'group_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/group_policies',
                  'segments' => [
                    [
                      'lit' => 'group_policies',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employer_id',
                      'group_id',
                      'page',
                      'page_size',
                      'status',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'group_policies',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'gp_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'group_policy_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/group_policies/{group_policy_id}',
                  'rename' => [
                    'param' => [
                      'group_policy_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'group_policies',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'group_policies',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'group_policy_intent' => [
          'fields' => [
            [
              'name' => 'action_required',
              'short' => 'Details of the required action when the intent is in ActionRequired status.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'cost_sharing',
              'short' => 'Cost sharing configuration for the policy intent',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'disclosures',
              'req' => true,
              'short' => 'Disclosures associated with this intent.',
              'type' => '`$ARRAY`',
            ],
            [
              'format' => 'date-time',
              'name' => 'due_date',
              'short' => 'Due date for the policy intent',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'group_id',
              'req' => true,
              'short' => 'Unique identifier for the group',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the group policy intent',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'Object type identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'plan_id',
              'req' => true,
              'short' => 'Unique identifier for the plan',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'quote_intent_id',
              'req' => true,
              'short' => 'Unique identifier for the group quote intent this policy intent was created from',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of the group policy intent',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'group_policy_intent',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/group_policy_intents',
                  'segments' => [
                    [
                      'lit' => 'group_policy_intents',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'group_policy_intents',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'gr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'group_id',
                        'orig' => 'group_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'pl_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'plan_id',
                        'orig' => 'plan_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/group_policy_intents',
                  'segments' => [
                    [
                      'lit' => 'group_policy_intents',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'group_id',
                      'page',
                      'page_size',
                      'plan_id',
                      'status',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'group_policy_intents',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'group_policy_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/group_policy_intents/{group_policy_intent_id}',
                  'rename' => [
                    'param' => [
                      'group_policy_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'group_policy_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'group_policy_intents',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'group_policy_intent_requirement_response_paged_list' => [
          'fields' => [
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the requirement',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'is_fulfilled',
              'req' => true,
              'short' => 'Whether the requirement has been fulfilled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'Object type identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object_id',
              'req' => true,
              'short' => 'Identifier of the object (employee ID or employer ID)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object_type',
              'req' => true,
              'short' => 'Type of object this requirement is for (employee or employer)',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'requirement_type',
              'req' => true,
              'short' => 'Type of requirement',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'group_policy_intent_requirement_response_paged_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'gpi_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'group_policy_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'object_id',
                        'orig' => 'object_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'object_type',
                        'orig' => 'object_type',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/group_policy_intents/{group_policy_intent_id}/requirements',
                  'rename' => [
                    'param' => [
                      'group_policy_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'group_policy_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'requirements',
                    ],
                  ],
                  'select' => [
                    '$action' => 'requirements',
                    'exist' => [
                      'id',
                      'object_id',
                      'object_type',
                      'page',
                      'page_size',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'group_policy_intents',
                    '{id}',
                    'requirements',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'group_quote' => [
          'fields' => [
            [
              'name' => 'family_type',
              'short' => 'Type of the family covered by the employer.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'member_count',
              'short' => 'Numbers of additional members covered by the employer.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'member_selection',
              'short' => 'Whether specific member types are covered by the employer.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'percentage',
              'short' => 'Percentage of the premium the employer covers.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'type',
              'req' => true,
              'short' => 'Cost sharing type.',
              'type' => '`$ANY`',
            ],
          ],
          'name' => 'group_quote',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'group_quote_intent_id',
                        'orig' => 'group_quote_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/group_quote_intents/{group_quote_intent_id}/quote',
                  'segments' => [
                    [
                      'lit' => 'group_quote_intents',
                    ],
                    [
                      'var' => 'group_quote_intent_id',
                    ],
                    [
                      'lit' => 'quote',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'group_quote_intent_id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.cost_sharing`',
                  ],
                  'parts' => [
                    'group_quote_intents',
                    '{group_quote_intent_id}',
                    'quote',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'group_quote_intent',
              ],
            ],
          ],
        ],
        'group_quote_intent' => [
          'fields' => [
            [
              'name' => 'action_required',
              'short' => 'Details of the action required from the caller, if the intent is in action_required status.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'consent_links',
              'req' => true,
              'short' => 'Consent links that need to be acknowledged',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'cost_sharing',
              'short' => 'Cost sharing configuration for the quote',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'disclosures',
              'req' => true,
              'short' => 'Disclosures associated with this intent.',
              'type' => '`$ARRAY`',
            ],
            [
              'format' => 'date',
              'name' => 'expected_start_date',
              'short' => 'Expected start date for the insurance coverage',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'group_id',
              'req' => true,
              'short' => 'Unique identifier for the group',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the group quote intent',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'Object type identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'plan_id',
              'req' => true,
              'short' => 'Unique identifier for the plan',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of the group quote intent',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'group_quote_intent',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'group_quote_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/group_quote_intents/{group_quote_intent_id}/reject',
                  'rename' => [
                    'param' => [
                      'group_quote_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'group_quote_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'reject',
                    ],
                  ],
                  'select' => [
                    '$action' => 'reject',
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'group_quote_intents',
                    '{id}',
                    'reject',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/group_quote_intents',
                  'segments' => [
                    [
                      'lit' => 'group_quote_intents',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'group_quote_intents',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'gr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'group_id',
                        'orig' => 'group_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'pl_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'plan_id',
                        'orig' => 'plan_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/group_quote_intents',
                  'segments' => [
                    [
                      'lit' => 'group_quote_intents',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'group_id',
                      'page',
                      'page_size',
                      'plan_id',
                      'status',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'group_quote_intents',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'group_quote_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/group_quote_intents/{group_quote_intent_id}',
                  'rename' => [
                    'param' => [
                      'group_quote_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'group_quote_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'group_quote_intents',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'group_quote_intent_requirement_response_paged_list' => [
          'fields' => [
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the requirement',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'is_fulfilled',
              'req' => true,
              'short' => 'Whether the requirement has been fulfilled',
              'type' => '`$BOOLEAN`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'Object type identifier',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object_id',
              'req' => true,
              'short' => 'Identifier of the object (employee ID or employer ID)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object_type',
              'req' => true,
              'short' => 'Type of object this requirement is for (employee or employer)',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'requirement_type',
              'req' => true,
              'short' => 'Type of requirement',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'group_quote_intent_requirement_response_paged_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'gqi_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'group_quote_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'object_id',
                        'orig' => 'object_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'object_type',
                        'orig' => 'object_type',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/group_quote_intents/{group_quote_intent_id}/requirements',
                  'rename' => [
                    'param' => [
                      'group_quote_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'group_quote_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'requirements',
                    ],
                  ],
                  'select' => [
                    '$action' => 'requirements',
                    'exist' => [
                      'id',
                      'object_id',
                      'object_type',
                      'page',
                      'page_size',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'group_quote_intents',
                    '{id}',
                    'requirements',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'plan' => [
          'fields' => [
            [
              'format' => 'date',
              'name' => 'available_from',
              'req' => true,
              'short' => 'The date from which this plan is available (inclusive).',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date',
              'name' => 'available_to',
              'short' => 'The date until which this plan is available (inclusive).',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'country',
              'req' => true,
              'short' => 'The country this plan is available in.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'coverage_options',
              'short' => 'Coverage options available for this plan, organized by scope and input type.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$ARRAY`',
                ],
              ],
            ],
            [
              'name' => 'description',
              'req' => true,
              'short' => 'Description of the plan.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'disclosures',
              'req' => true,
              'short' => 'Disclosures associated with this plan.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'documents',
              'req' => true,
              'short' => 'List of plan documents (e.g., IPIDs, T&Cs).',
              'type' => '`$ARRAY`',
            ],
            [
              'format' => 'int32',
              'name' => 'eligible_count',
              'short' => 'Number of employees in the queried group eligible for this plan as-of `start_date`.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$INTEGER`',
                ],
              ],
            ],
            [
              'name' => 'employee_eligibility_criteria',
              'req' => true,
              'short' => 'Eligibility criteria that employees must meet.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'employer_eligibility_criteria',
              'req' => true,
              'short' => 'Eligibility criteria that employers must meet.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'health_insurance',
              'short' => 'Health insurance-specific details.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the plan.',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'int32',
              'name' => 'ineligible_count',
              'short' => 'Number of employees in the queried group ineligible for this plan as-of `start_date`.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$INTEGER`',
                ],
              ],
            ],
            [
              'name' => 'name',
              'req' => true,
              'short' => 'The name of the plan.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'Object type.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'provider',
              'req' => true,
              'short' => 'The provider offering this plan.',
              'type' => '`$ANY`',
            ],
            [
              'format' => 'int32',
              'name' => 'total_count',
              'short' => 'Total employees in the queried group.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$INTEGER`',
                ],
              ],
            ],
            [
              'name' => 'type',
              'req' => true,
              'short' => 'The benefit type of the plan.',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'plan',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'available_on',
                        'orig' => 'available_on',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'country',
                        'orig' => 'country',
                        'type' => '`$ANY`',
                      ],
                      [
                        'example' => 'gr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'group_id',
                        'orig' => 'group_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'provider_id',
                        'orig' => 'provider_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort_by',
                        'orig' => 'sort_by',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'sort_dir',
                        'orig' => 'sort_dir',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'type',
                        'orig' => 'type',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/plans',
                  'segments' => [
                    [
                      'lit' => 'plans',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'available_on',
                      'country',
                      'group_id',
                      'page',
                      'page_size',
                      'provider_id',
                      'sort_by',
                      'sort_dir',
                      'start_date',
                      'type',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'plans',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'pl_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'plan_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'gr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'group_id',
                        'orig' => 'group_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'start_date',
                        'orig' => 'start_date',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/plans/{plan_id}',
                  'rename' => [
                    'param' => [
                      'plan_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'plans',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'group_id',
                      'id',
                      'start_date',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'plans',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'policy' => [
          'fields' => [
            [
              'name' => 'bundling_type',
              'req' => true,
              'short' => 'Indicates how this policy is bundled within a group',
              'type' => '`$ANY`',
            ],
            [
              'format' => 'date',
              'name' => 'cancellation_date',
              'short' => 'Date the policy was cancelled (if applicable)',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'disclosures',
              'req' => true,
              'short' => 'Disclosures associated with this policy.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'employee_id',
              'req' => true,
              'short' => 'Identifier of the employee associated with this policy.',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date',
              'name' => 'end_date',
              'short' => 'Policy end date (inclusive) in ISO 8601, or null if open-ended',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'group_id',
              'req' => true,
              'short' => 'Identifier of the group associated with this policy.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'group_policy_id',
              'req' => true,
              'short' => 'Identifier of the group policy id associated with this policy.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'health_insurance',
              'short' => 'Health insurance–specific fields (present when `type=health_insurance`)',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the policy.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'Object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'plan',
              'req' => true,
              'short' => 'Plan information for this policy',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'provider',
              'req' => true,
              'short' => 'Provider information for this policy',
              'type' => '`$ANY`',
            ],
            [
              'format' => 'date',
              'name' => 'start_date',
              'req' => true,
              'short' => 'Policy start (effective) date in ISO 8601 (YYYY-MM-DD)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current lifecycle state of the policy',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'type',
              'req' => true,
              'short' => 'Policy type.',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'policy',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'employee_id',
                        'orig' => 'employee_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'gr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'group_id',
                        'orig' => 'group_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'gp_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'group_policy_id',
                        'orig' => 'group_policy_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/policies',
                  'segments' => [
                    [
                      'lit' => 'policies',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employee_id',
                      'group_id',
                      'group_policy_id',
                      'page',
                      'page_size',
                      'status',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'policies',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'p_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'policy_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/policies/{policy_id}',
                  'rename' => [
                    'param' => [
                      'policy_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'policies',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'policies',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'policy_amendment_intent' => [
          'fields' => [
            [
              'name' => 'amendment_reason',
              'req' => true,
              'short' => 'The reason for the policy amendment.',
              'type' => '`$ANY`',
            ],
            [
              'name' => 'disclosures',
              'req' => true,
              'short' => 'Disclosures associated with this intent.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the policy amendment intent.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'Object type identifier.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'pending_confirmation',
              'short' => 'Information about the pending confirmation if the intent status is `pending_confirmation`.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'policy_id',
              'req' => true,
              'short' => 'The policy ID for which the amendment is requested.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'processing_error',
              'short' => 'Information about the processing error if the intent status is `processing_error`.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'requested_changes',
              'req' => true,
              'short' => 'List of requested changes to the policy.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'required_action',
              'short' => 'Information about the required action if the intent status is `action_required`.',
              'type' => '`$NULL`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of the policy amendment intent.',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'policy_amendment_intent',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'pai_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'p_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'policy_id',
                        'orig' => 'policy_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/policies/{policy_id}/policy_amendment_intents/{id}/cancel',
                  'segments' => [
                    [
                      'lit' => 'policies',
                    ],
                    [
                      'var' => 'policy_id',
                    ],
                    [
                      'lit' => 'policy_amendment_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'cancel',
                    ],
                  ],
                  'select' => [
                    '$action' => 'cancel',
                    'exist' => [
                      'id',
                      'policy_id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'policies',
                    '{policy_id}',
                    'policy_amendment_intents',
                    '{id}',
                    'cancel',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'pai_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'policy_amendment_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'p_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'policy_id',
                        'orig' => 'policy_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}/confirm',
                  'rename' => [
                    'param' => [
                      'policy_amendment_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'policies',
                    ],
                    [
                      'var' => 'policy_id',
                    ],
                    [
                      'lit' => 'policy_amendment_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'confirm',
                    ],
                  ],
                  'select' => [
                    '$action' => 'confirm',
                    'exist' => [
                      'id',
                      'policy_id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'policies',
                    '{policy_id}',
                    'policy_amendment_intents',
                    '{id}',
                    'confirm',
                  ],
                ],
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'p_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'policy_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/policies/{policy_id}/policy_amendment_intents',
                  'rename' => [
                    'param' => [
                      'policy_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'policies',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'policy_amendment_intents',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'policies',
                    '{id}',
                    'policy_amendment_intents',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'p_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'policy_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/policies/{policy_id}/policy_amendment_intents',
                  'rename' => [
                    'param' => [
                      'policy_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'policies',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'policy_amendment_intents',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'page',
                      'page_size',
                      'status',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'policies',
                    '{id}',
                    'policy_amendment_intents',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'pai_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'policy_amendment_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'p_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'policy_id',
                        'orig' => 'policy_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/policies/{policy_id}/policy_amendment_intents/{policy_amendment_intent_id}',
                  'rename' => [
                    'param' => [
                      'policy_amendment_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'policies',
                    ],
                    [
                      'var' => 'policy_id',
                    ],
                    [
                      'lit' => 'policy_amendment_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'policy_id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'policies',
                    '{policy_id}',
                    'policy_amendment_intents',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'policy',
              ],
            ],
          ],
        ],
        'policy_import_intent' => [
          'fields' => [
            [
              'name' => 'associated_persons',
              'req' => true,
              'short' => 'List of associated persons linked to this policy import.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'employee_id',
              'req' => true,
              'short' => 'The employee ID for the policy import.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'group_id',
              'req' => true,
              'short' => 'The group ID for the policy import.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the policy import intent.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'member_number',
              'req' => true,
              'short' => 'The member number assigned by the provider.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'Object type identifier.',
              'type' => '`$STRING`',
            ],
            [
              'format' => 'date',
              'name' => 'policy_end_date',
              'short' => 'The end date of the policy.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'format' => 'date',
              'name' => 'policy_start_date',
              'req' => true,
              'short' => 'The start date of the policy.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'provider_policy_number',
              'req' => true,
              'short' => 'The provider\'s policy number.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'status',
              'req' => true,
              'short' => 'Current status of the policy import intent.',
              'type' => '`$ANY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'policy_import_intent',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/policy_import_intents',
                  'segments' => [
                    [
                      'lit' => 'policy_import_intents',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'policy_import_intents',
                  ],
                ],
              ],
            ],
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'ee_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'employee_id',
                        'orig' => 'employee_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'gr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'query',
                        'name' => 'group_id',
                        'orig' => 'group_id',
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'status',
                        'orig' => 'status',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/policy_import_intents',
                  'segments' => [
                    [
                      'lit' => 'policy_import_intents',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'employee_id',
                      'group_id',
                      'page',
                      'page_size',
                      'status',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'policy_import_intents',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'pii_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'policy_import_intent_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/policy_import_intents/{policy_import_intent_id}',
                  'rename' => [
                    'param' => [
                      'policy_import_intent_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'policy_import_intents',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'policy_import_intents',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'provider' => [
          'fields' => [
            [
              'name' => 'description',
              'req' => true,
              'short' => 'Description of the provider.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'employer_platform_url',
              'short' => 'URL to the employer portal/platform for this provider, if available.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'Unique identifier for the provider.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'kota_hub_url',
              'short' => 'URL to the Kota Hub page for this platform, if configured.',
              'type' => [
                '`$ONE`',
                [
                  '`$NULL`',
                  '`$STRING`',
                ],
              ],
            ],
            [
              'name' => 'logo_url',
              'req' => true,
              'short' => 'URL to the provider\'s logo image.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'req' => true,
              'short' => 'The name of the provider.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'Object type.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'support_phone',
              'req' => true,
              'short' => 'Customer support phone number.',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'supported_countries',
              'req' => true,
              'short' => 'List of countries supported by this provider.',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'website_url',
              'req' => true,
              'short' => 'The provider\'s main website URL.',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'provider',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'country',
                        'orig' => 'country',
                        'type' => '`$ANY`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/providers',
                  'segments' => [
                    [
                      'lit' => 'providers',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'country',
                      'page',
                      'page_size',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'providers',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'pr_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'provider_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/providers/{provider_id}',
                  'rename' => [
                    'param' => [
                      'provider_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'providers',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'providers',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'replay' => [
          'fields' => [
            [
              'name' => 'deliveries',
              'req' => true,
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'event_id',
              'req' => true,
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'replay',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'evt_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'event_id',
                        'orig' => 'event_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/events/{event_id}/replay',
                  'segments' => [
                    [
                      'lit' => 'events',
                    ],
                    [
                      'var' => 'event_id',
                    ],
                    [
                      'lit' => 'replay',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'event_id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'events',
                    '{event_id}',
                    'replay',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                'event',
              ],
            ],
          ],
        ],
        'webhook_endpoint' => [
          'fields' => [
            [
              'format' => 'date-time',
              'name' => 'created_at',
              'req' => true,
              'short' => 'The date and time the endpoint was created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'endpoint_url',
              'req' => true,
              'short' => 'The registered URL of the endpoint',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'The unique identifier of the endpoint',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'subscribed_events',
              'req' => true,
              'short' => 'The events the endpoint is subscribed to',
              'type' => '`$ARRAY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'webhook_endpoint',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'params' => [
                      [
                        'example' => 'whe_3b1333d87d9d4fd6ad83ba7f6b0e951a',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'webhook_endpoint_id',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/webhooks/endpoints/{webhook_endpoint_id}',
                  'rename' => [
                    'param' => [
                      'webhook_endpoint_id' => 'id',
                    ],
                  ],
                  'segments' => [
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'lit' => 'endpoints',
                    ],
                    [
                      'var' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'parts' => [
                    'webhooks',
                    'endpoints',
                    '{id}',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'webhook_endpoint_response_paged_list' => [
          'fields' => [
            [
              'format' => 'date-time',
              'name' => 'created_at',
              'req' => true,
              'short' => 'The date and time the endpoint was created',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'endpoint_url',
              'req' => true,
              'short' => 'The registered URL of the endpoint',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'id',
              'req' => true,
              'short' => 'The unique identifier of the endpoint',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'object',
              'readOnly' => true,
              'short' => 'The object type',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'subscribed_events',
              'req' => true,
              'short' => 'The events the endpoint is subscribed to',
              'type' => '`$ARRAY`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'webhook_endpoint_response_paged_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'header' => [
                      [
                        'kind' => 'header',
                        'name' => 'x_platform_id',
                        'orig' => 'x_platform_id',
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'kind' => 'query',
                        'name' => 'page_size',
                        'orig' => 'page_size',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/webhooks/endpoints',
                  'segments' => [
                    [
                      'lit' => 'webhooks',
                    ],
                    [
                      'lit' => 'endpoints',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'page',
                      'page_size',
                      'x_platform_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.items`',
                  ],
                  'parts' => [
                    'webhooks',
                    'endpoints',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return KotaFeatures::make_feature($name);
    }
}
