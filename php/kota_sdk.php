<?php
declare(strict_types=1);

// Kota SDK

require_once __DIR__ . '/utility/struct/Struct.php';
require_once __DIR__ . '/core/UtilityType.php';
require_once __DIR__ . '/core/Spec.php';
require_once __DIR__ . '/core/Helpers.php';

// Load utility registration
require_once __DIR__ . '/utility/Register.php';

// Load config and features
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/features.php';

use Voxgig\Struct\Struct;

// Features record diagnostic state on the client as dynamic properties
// (_retry, _cache, _metrics, ...); allow them explicitly (PHP 8.2+
// deprecates implicit dynamic properties).
#[\AllowDynamicProperties]
class KotaSDK
{
    public string $mode;
    public array $features;
    public ?array $options;

    private $_utility;
    private $_rootctx;

    public function __construct(array $options = [])
    {
        $this->mode = "live";
        $this->features = [];
        $this->options = null;

        $utility = new KotaUtility();
        $this->_utility = $utility;

        $config = KotaConfig::shared_config();

        $this->_rootctx = ($utility->make_context)([
            "client" => $this,
            "utility" => $utility,
            "config" => $config,
            "options" => $options ?? [],
            "shared" => [],
        ], null);

        $this->options = ($utility->make_options)($this->_rootctx);

        if (Struct::getpath($this->options, "feature.test.active") === true) {
            $this->mode = "test";
        }

        $this->_rootctx->options = $this->options;

        // Feature INSTANCES supplied at construction (the station adopt
        // path) are read from the RAW construction options - extend is
        // consumed exactly once, here; make_options strips it from the
        // processed map so options_map() stays clean data.
        $extend_val = is_array($options["extend"] ?? null) ? $options["extend"] : [];

        // Add features in the resolved order (make_options puts an explicit
        // list order first, else defaults to test-first). Ordering matters: the
        // `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        // current, so `test` must be added before them to sit at the base.
        $feature_opts = KotaHelpers::to_map(Struct::getprop($this->options, "feature"));
        if ($feature_opts) {
            $featureorder = Struct::getpath($this->options, "__derived__.featureorder");
            if (is_array($featureorder)) {
                foreach ($featureorder as $fname) {
                    $fopts = KotaHelpers::to_map($feature_opts[$fname] ?? null);
                    if ($fopts && isset($fopts["active"]) && $fopts["active"] === true) {
                        // An active name with no generated feature class is
                        // legal when an extend-supplied instance carries that
                        // name (station's adopt path): the instance is added
                        // below, positioned by its own __after__ entry, so
                        // skip it here rather than add a BaseFeature stray
                        // that would silently shift feature positions.
                        if (!KotaFeatures::has_feature($fname)) {
                            foreach ($extend_val as $ef) {
                                if (is_object($ef) && method_exists($ef, 'get_name')
                                    && $fname === $ef->get_name()) {
                                    continue 2;
                                }
                            }
                        }
                        ($utility->feature_add)($this->_rootctx, KotaFeatures::make_feature($fname));
                    }
                }
            }
        }

        // Add extension features.
        foreach ($extend_val as $f) {
            if (is_object($f) && method_exists($f, 'get_name')) {
                ($utility->feature_add)($this->_rootctx, $f);
            }
        }

        // Initialize features.
        foreach ($this->features as $f) {
            ($utility->feature_init)($this->_rootctx, $f);
        }

        ($utility->feature_hook)($this->_rootctx, "PostConstruct");
    }

    public function options_map(): array
    {
        $out = Struct::clone($this->options);
        return is_array($out) ? $out : [];
    }

    public function get_utility()
    {
        return KotaUtility::copy($this->_utility);
    }

    public function get_root_ctx()
    {
        return $this->_rootctx;
    }

    public function prepare(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;
        $fetchargs = $fetchargs ?? [];

        $ctrl = KotaHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "prepare",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $opts = $this->options;
        $path = Struct::getprop($fetchargs, "path") ?? "";
        $path = is_string($path) ? $path : "";
        $method_val = Struct::getprop($fetchargs, "method") ?? "GET";
        $method_val = is_string($method_val) ? $method_val : "GET";
        $params = KotaHelpers::to_map(Struct::getprop($fetchargs, "params")) ?? [];
        $query = KotaHelpers::to_map(Struct::getprop($fetchargs, "query")) ?? [];
        $headers = ($utility->prepare_headers)($ctx);

        $base = Struct::getprop($opts, "base") ?? "";
        $base = is_string($base) ? $base : "";
        $prefix = Struct::getprop($opts, "prefix") ?? "";
        $prefix = is_string($prefix) ? $prefix : "";
        $suffix = Struct::getprop($opts, "suffix") ?? "";
        $suffix = is_string($suffix) ? $suffix : "";

        $ctx->spec = new KotaSpec([
            "base" => $base, "prefix" => $prefix, "suffix" => $suffix,
            "path" => $path, "method" => $method_val,
            "params" => $params, "query" => $query, "headers" => $headers,
            "body" => Struct::getprop($fetchargs, "body"),
            "step" => "start",
        ]);

        // Merge user-provided headers.
        $uh = Struct::getprop($fetchargs, "headers");
        if (is_array($uh)) {
            foreach ($uh as $k => $v) {
                $ctx->spec->headers[$k] = $v;
            }
        }

        [$_, $err] = ($utility->prepare_auth)($ctx);
        if ($err) {
            return ($utility->make_error)($ctx, $err);
        }

        [$fetchdef, $fd_err] = ($utility->make_fetch_def)($ctx);
        if ($fd_err) {
            return ($utility->make_error)($ctx, $fd_err);
        }
        return $fetchdef;
    }

    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens,
    // since either one reaches the same endpoint.
    public function direct(array $fetchargs = []): mixed
    {
        if (!$this->op_allowed("direct")) {
            return $this->op_denied("direct");
        }

        return $this->raw_request($fetchargs);
    }

    // Is this raw-access op permitted by the SDK's allow.op option?
    private function op_allowed(string $op): bool
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return is_string($allow_op) && str_contains($allow_op, $op);
    }

    private function op_denied(string $op): array
    {
        $allow_op = Struct::getpath($this->options, "allow.op");
        return [
            "ok" => false,
            "err" => new KotaError($op . "_allow",
                "KotaSDK: " . $op . ": operation not allowed by" .
                " SDK option allow.op value: \"" . (string)$allow_op . "\""),
        ];
    }

    // Ungated request path shared by direct and graphql, each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    private function raw_request(array $fetchargs = []): mixed
    {
        $utility = $this->_utility;

        // direct() is the raw-HTTP escape hatch: it never throws, it returns
        // an {ok, err, ...} dict. prepare() now raises on error, so catch it
        // and surface the failure through the dict instead.
        try {
            $fetchdef = $this->prepare($fetchargs);
        } catch (\Throwable $err) {
            return ["ok" => false, "err" => $err];
        }

        $fetchargs = $fetchargs ?? [];
        $ctrl = KotaHelpers::to_map(Struct::getprop($fetchargs, "ctrl")) ?? [];

        $ctx = ($utility->make_context)([
            "opname" => "direct",
            "ctrl" => $ctrl,
        ], $this->_rootctx);

        $url = $fetchdef["url"] ?? "";
        [$fetched, $fetch_err] = ($utility->fetcher)($ctx, $url, $fetchdef);

        if ($fetch_err) {
            return ["ok" => false, "err" => $fetch_err];
        }

        if ($fetched === null) {
            return [
                "ok" => false,
                "err" => $ctx->make_error("direct_no_response", "response: undefined"),
            ];
        }

        if (is_array($fetched)) {
            $status = KotaHelpers::to_int(Struct::getprop($fetched, "status"));
            $headers = Struct::getprop($fetched, "headers") ?? [];

            // No-body responses (204, 304) and explicit zero content-length
            // must skip JSON parsing — calling json() on an empty body errors.
            $content_length = is_array($headers) ? ($headers["content-length"] ?? null) : null;
            $no_body = $status === 204 || $status === 304 || (string)$content_length === "0";

            $json_data = null;
            if (!$no_body) {
                $jf = Struct::getprop($fetched, "json");
                if (is_callable($jf)) {
                    try {
                        $json_data = $jf();
                    } catch (\Throwable $e) {
                        // Non-JSON body — leave data null but keep status/ok.
                        $json_data = null;
                    }
                }
            }

            return [
                "ok" => $status >= 200 && $status < 300,
                "status" => $status,
                "headers" => Struct::getprop($fetched, "headers"),
                "data" => $json_data,
            ];
        }

        return [
            "ok" => false,
            "err" => $ctx->make_error("direct_invalid", "invalid response type"),
        ];
    }

    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path direct uses, with the
    // one thing raw direct cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report
    // a failed query as ok.
    //
    // NOTE: like direct, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    public function graphql(string $query, ?array $variables = null, ?array $ctrl = null): mixed
    {
        if (!$this->op_allowed("graphql")) {
            return $this->op_denied("graphql");
        }

        $res = $this->raw_request([
            "method" => "POST",
            "headers" => ["content-type" => "application/json"],
            "body" => ["query" => $query, "variables" => $variables ?? []],
            "ctrl" => $ctrl ?? [],
        ]);

        if (!is_array($res)) {
            return $res;
        }

        // Errors are read BEFORE any status check: a GraphQL parse or
        // validation failure comes back as HTTP 400 carrying the standard
        // { errors: [...] } body, and the raw path represents a non-2xx as
        // ok:false with no err — so returning early on status would discard
        // the server's own diagnostics, which are the only useful part of
        // that response.
        $errors = Struct::getpath($res, "data.errors");

        if (is_array($errors) && 0 < count($errors)) {
            $first = is_array($errors[0]) ? $errors[0] : [];
            $msg = $first["message"] ?? "";
            if (!is_string($msg) || "" === $msg) {
                $msg = "graphql error";
            }
            $res["ok"] = false;
            $res["err"] = new KotaError("graphql_error",
                "KotaSDK: graphql: " . $msg);
            $res["graphql"] = $errors;
        }

        return $res;
    }


    private $_associated_person = null;

    // Canonical facade: $client->AssociatedPerson()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->associated_person()
    // resolves here too.
    public function AssociatedPerson($data = null)
    {
        require_once __DIR__ . '/entity/associated_person_entity.php';
        if ($data === null) {
            if ($this->_associated_person === null) {
                $this->_associated_person = new AssociatedPersonEntity($this, null);
            }
            return $this->_associated_person;
        }
        return new AssociatedPersonEntity($this, $data);
    }


    private $_associated_person_eligibility_response_paged_list = null;

    // Canonical facade: $client->AssociatedPersonEligibilityResponsePagedList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->associated_person_eligibility_response_paged_list()
    // resolves here too.
    public function AssociatedPersonEligibilityResponsePagedList($data = null)
    {
        require_once __DIR__ . '/entity/associated_person_eligibility_response_paged_list_entity.php';
        if ($data === null) {
            if ($this->_associated_person_eligibility_response_paged_list === null) {
                $this->_associated_person_eligibility_response_paged_list = new AssociatedPersonEligibilityResponsePagedListEntity($this, null);
            }
            return $this->_associated_person_eligibility_response_paged_list;
        }
        return new AssociatedPersonEligibilityResponsePagedListEntity($this, $data);
    }


    private $_contribution_report = null;

    // Canonical facade: $client->ContributionReport()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contribution_report()
    // resolves here too.
    public function ContributionReport($data = null)
    {
        require_once __DIR__ . '/entity/contribution_report_entity.php';
        if ($data === null) {
            if ($this->_contribution_report === null) {
                $this->_contribution_report = new ContributionReportEntity($this, null);
            }
            return $this->_contribution_report;
        }
        return new ContributionReportEntity($this, $data);
    }


    private $_contribution_report_employee_breakdown = null;

    // Canonical facade: $client->ContributionReportEmployeeBreakdown()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contribution_report_employee_breakdown()
    // resolves here too.
    public function ContributionReportEmployeeBreakdown($data = null)
    {
        require_once __DIR__ . '/entity/contribution_report_employee_breakdown_entity.php';
        if ($data === null) {
            if ($this->_contribution_report_employee_breakdown === null) {
                $this->_contribution_report_employee_breakdown = new ContributionReportEmployeeBreakdownEntity($this, null);
            }
            return $this->_contribution_report_employee_breakdown;
        }
        return new ContributionReportEmployeeBreakdownEntity($this, $data);
    }


    private $_contribution_report_employee_breakdown_response_paged_list = null;

    // Canonical facade: $client->ContributionReportEmployeeBreakdownResponsePagedList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->contribution_report_employee_breakdown_response_paged_list()
    // resolves here too.
    public function ContributionReportEmployeeBreakdownResponsePagedList($data = null)
    {
        require_once __DIR__ . '/entity/contribution_report_employee_breakdown_response_paged_list_entity.php';
        if ($data === null) {
            if ($this->_contribution_report_employee_breakdown_response_paged_list === null) {
                $this->_contribution_report_employee_breakdown_response_paged_list = new ContributionReportEmployeeBreakdownResponsePagedListEntity($this, null);
            }
            return $this->_contribution_report_employee_breakdown_response_paged_list;
        }
        return new ContributionReportEmployeeBreakdownResponsePagedListEntity($this, $data);
    }


    private $_create_hosted_session_token = null;

    // Canonical facade: $client->CreateHostedSessionToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_hosted_session_token()
    // resolves here too.
    public function CreateHostedSessionToken($data = null)
    {
        require_once __DIR__ . '/entity/create_hosted_session_token_entity.php';
        if ($data === null) {
            if ($this->_create_hosted_session_token === null) {
                $this->_create_hosted_session_token = new CreateHostedSessionTokenEntity($this, null);
            }
            return $this->_create_hosted_session_token;
        }
        return new CreateHostedSessionTokenEntity($this, $data);
    }


    private $_create_session_token = null;

    // Canonical facade: $client->CreateSessionToken()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->create_session_token()
    // resolves here too.
    public function CreateSessionToken($data = null)
    {
        require_once __DIR__ . '/entity/create_session_token_entity.php';
        if ($data === null) {
            if ($this->_create_session_token === null) {
                $this->_create_session_token = new CreateSessionTokenEntity($this, null);
            }
            return $this->_create_session_token;
        }
        return new CreateSessionTokenEntity($this, $data);
    }


    private $_dependent = null;

    // Canonical facade: $client->Dependent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dependent()
    // resolves here too.
    public function Dependent($data = null)
    {
        require_once __DIR__ . '/entity/dependent_entity.php';
        if ($data === null) {
            if ($this->_dependent === null) {
                $this->_dependent = new DependentEntity($this, null);
            }
            return $this->_dependent;
        }
        return new DependentEntity($this, $data);
    }


    private $_dependents_management_intent = null;

    // Canonical facade: $client->DependentsManagementIntent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->dependents_management_intent()
    // resolves here too.
    public function DependentsManagementIntent($data = null)
    {
        require_once __DIR__ . '/entity/dependents_management_intent_entity.php';
        if ($data === null) {
            if ($this->_dependents_management_intent === null) {
                $this->_dependents_management_intent = new DependentsManagementIntentEntity($this, null);
            }
            return $this->_dependents_management_intent;
        }
        return new DependentsManagementIntentEntity($this, $data);
    }


    private $_eligibility_check = null;

    // Canonical facade: $client->EligibilityCheck()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->eligibility_check()
    // resolves here too.
    public function EligibilityCheck($data = null)
    {
        require_once __DIR__ . '/entity/eligibility_check_entity.php';
        if ($data === null) {
            if ($this->_eligibility_check === null) {
                $this->_eligibility_check = new EligibilityCheckEntity($this, null);
            }
            return $this->_eligibility_check;
        }
        return new EligibilityCheckEntity($this, $data);
    }


    private $_employee = null;

    // Canonical facade: $client->Employee()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->employee()
    // resolves here too.
    public function Employee($data = null)
    {
        require_once __DIR__ . '/entity/employee_entity.php';
        if ($data === null) {
            if ($this->_employee === null) {
                $this->_employee = new EmployeeEntity($this, null);
            }
            return $this->_employee;
        }
        return new EmployeeEntity($this, $data);
    }


    private $_employee_health_insurance_offer = null;

    // Canonical facade: $client->EmployeeHealthInsuranceOffer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->employee_health_insurance_offer()
    // resolves here too.
    public function EmployeeHealthInsuranceOffer($data = null)
    {
        require_once __DIR__ . '/entity/employee_health_insurance_offer_entity.php';
        if ($data === null) {
            if ($this->_employee_health_insurance_offer === null) {
                $this->_employee_health_insurance_offer = new EmployeeHealthInsuranceOfferEntity($this, null);
            }
            return $this->_employee_health_insurance_offer;
        }
        return new EmployeeHealthInsuranceOfferEntity($this, $data);
    }


    private $_employee_health_insurance_offer_response_paged_list = null;

    // Canonical facade: $client->EmployeeHealthInsuranceOfferResponsePagedList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->employee_health_insurance_offer_response_paged_list()
    // resolves here too.
    public function EmployeeHealthInsuranceOfferResponsePagedList($data = null)
    {
        require_once __DIR__ . '/entity/employee_health_insurance_offer_response_paged_list_entity.php';
        if ($data === null) {
            if ($this->_employee_health_insurance_offer_response_paged_list === null) {
                $this->_employee_health_insurance_offer_response_paged_list = new EmployeeHealthInsuranceOfferResponsePagedListEntity($this, null);
            }
            return $this->_employee_health_insurance_offer_response_paged_list;
        }
        return new EmployeeHealthInsuranceOfferResponsePagedListEntity($this, $data);
    }


    private $_employee_health_insurance_policy = null;

    // Canonical facade: $client->EmployeeHealthInsurancePolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->employee_health_insurance_policy()
    // resolves here too.
    public function EmployeeHealthInsurancePolicy($data = null)
    {
        require_once __DIR__ . '/entity/employee_health_insurance_policy_entity.php';
        if ($data === null) {
            if ($this->_employee_health_insurance_policy === null) {
                $this->_employee_health_insurance_policy = new EmployeeHealthInsurancePolicyEntity($this, null);
            }
            return $this->_employee_health_insurance_policy;
        }
        return new EmployeeHealthInsurancePolicyEntity($this, $data);
    }


    private $_employee_health_insurance_policy_response_paged_list = null;

    // Canonical facade: $client->EmployeeHealthInsurancePolicyResponsePagedList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->employee_health_insurance_policy_response_paged_list()
    // resolves here too.
    public function EmployeeHealthInsurancePolicyResponsePagedList($data = null)
    {
        require_once __DIR__ . '/entity/employee_health_insurance_policy_response_paged_list_entity.php';
        if ($data === null) {
            if ($this->_employee_health_insurance_policy_response_paged_list === null) {
                $this->_employee_health_insurance_policy_response_paged_list = new EmployeeHealthInsurancePolicyResponsePagedListEntity($this, null);
            }
            return $this->_employee_health_insurance_policy_response_paged_list;
        }
        return new EmployeeHealthInsurancePolicyResponsePagedListEntity($this, $data);
    }


    private $_employer = null;

    // Canonical facade: $client->Employer()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->employer()
    // resolves here too.
    public function Employer($data = null)
    {
        require_once __DIR__ . '/entity/employer_entity.php';
        if ($data === null) {
            if ($this->_employer === null) {
                $this->_employer = new EmployerEntity($this, null);
            }
            return $this->_employer;
        }
        return new EmployerEntity($this, $data);
    }


    private $_employer_health_insurance_policy = null;

    // Canonical facade: $client->EmployerHealthInsurancePolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->employer_health_insurance_policy()
    // resolves here too.
    public function EmployerHealthInsurancePolicy($data = null)
    {
        require_once __DIR__ . '/entity/employer_health_insurance_policy_entity.php';
        if ($data === null) {
            if ($this->_employer_health_insurance_policy === null) {
                $this->_employer_health_insurance_policy = new EmployerHealthInsurancePolicyEntity($this, null);
            }
            return $this->_employer_health_insurance_policy;
        }
        return new EmployerHealthInsurancePolicyEntity($this, $data);
    }


    private $_employer_health_insurance_policy_response_paged_list = null;

    // Canonical facade: $client->EmployerHealthInsurancePolicyResponsePagedList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->employer_health_insurance_policy_response_paged_list()
    // resolves here too.
    public function EmployerHealthInsurancePolicyResponsePagedList($data = null)
    {
        require_once __DIR__ . '/entity/employer_health_insurance_policy_response_paged_list_entity.php';
        if ($data === null) {
            if ($this->_employer_health_insurance_policy_response_paged_list === null) {
                $this->_employer_health_insurance_policy_response_paged_list = new EmployerHealthInsurancePolicyResponsePagedListEntity($this, null);
            }
            return $this->_employer_health_insurance_policy_response_paged_list;
        }
        return new EmployerHealthInsurancePolicyResponsePagedListEntity($this, $data);
    }


    private $_employer_health_insurance_quote = null;

    // Canonical facade: $client->EmployerHealthInsuranceQuote()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->employer_health_insurance_quote()
    // resolves here too.
    public function EmployerHealthInsuranceQuote($data = null)
    {
        require_once __DIR__ . '/entity/employer_health_insurance_quote_entity.php';
        if ($data === null) {
            if ($this->_employer_health_insurance_quote === null) {
                $this->_employer_health_insurance_quote = new EmployerHealthInsuranceQuoteEntity($this, null);
            }
            return $this->_employer_health_insurance_quote;
        }
        return new EmployerHealthInsuranceQuoteEntity($this, $data);
    }


    private $_employer_health_insurance_quote_response_paged_list = null;

    // Canonical facade: $client->EmployerHealthInsuranceQuoteResponsePagedList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->employer_health_insurance_quote_response_paged_list()
    // resolves here too.
    public function EmployerHealthInsuranceQuoteResponsePagedList($data = null)
    {
        require_once __DIR__ . '/entity/employer_health_insurance_quote_response_paged_list_entity.php';
        if ($data === null) {
            if ($this->_employer_health_insurance_quote_response_paged_list === null) {
                $this->_employer_health_insurance_quote_response_paged_list = new EmployerHealthInsuranceQuoteResponsePagedListEntity($this, null);
            }
            return $this->_employer_health_insurance_quote_response_paged_list;
        }
        return new EmployerHealthInsuranceQuoteResponsePagedListEntity($this, $data);
    }


    private $_enrolment_intent = null;

    // Canonical facade: $client->EnrolmentIntent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->enrolment_intent()
    // resolves here too.
    public function EnrolmentIntent($data = null)
    {
        require_once __DIR__ . '/entity/enrolment_intent_entity.php';
        if ($data === null) {
            if ($this->_enrolment_intent === null) {
                $this->_enrolment_intent = new EnrolmentIntentEntity($this, null);
            }
            return $this->_enrolment_intent;
        }
        return new EnrolmentIntentEntity($this, $data);
    }


    private $_enrolment_intent_requirement_response_paged_list = null;

    // Canonical facade: $client->EnrolmentIntentRequirementResponsePagedList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->enrolment_intent_requirement_response_paged_list()
    // resolves here too.
    public function EnrolmentIntentRequirementResponsePagedList($data = null)
    {
        require_once __DIR__ . '/entity/enrolment_intent_requirement_response_paged_list_entity.php';
        if ($data === null) {
            if ($this->_enrolment_intent_requirement_response_paged_list === null) {
                $this->_enrolment_intent_requirement_response_paged_list = new EnrolmentIntentRequirementResponsePagedListEntity($this, null);
            }
            return $this->_enrolment_intent_requirement_response_paged_list;
        }
        return new EnrolmentIntentRequirementResponsePagedListEntity($this, $data);
    }


    private $_event = null;

    // Canonical facade: $client->Event()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->event()
    // resolves here too.
    public function Event($data = null)
    {
        require_once __DIR__ . '/entity/event_entity.php';
        if ($data === null) {
            if ($this->_event === null) {
                $this->_event = new EventEntity($this, null);
            }
            return $this->_event;
        }
        return new EventEntity($this, $data);
    }


    private $_group = null;

    // Canonical facade: $client->Group()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group()
    // resolves here too.
    public function Group($data = null)
    {
        require_once __DIR__ . '/entity/group_entity.php';
        if ($data === null) {
            if ($this->_group === null) {
                $this->_group = new GroupEntity($this, null);
            }
            return $this->_group;
        }
        return new GroupEntity($this, $data);
    }


    private $_group_employee = null;

    // Canonical facade: $client->GroupEmployee()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group_employee()
    // resolves here too.
    public function GroupEmployee($data = null)
    {
        require_once __DIR__ . '/entity/group_employee_entity.php';
        if ($data === null) {
            if ($this->_group_employee === null) {
                $this->_group_employee = new GroupEmployeeEntity($this, null);
            }
            return $this->_group_employee;
        }
        return new GroupEmployeeEntity($this, $data);
    }


    private $_group_employee_response_paged_list = null;

    // Canonical facade: $client->GroupEmployeeResponsePagedList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group_employee_response_paged_list()
    // resolves here too.
    public function GroupEmployeeResponsePagedList($data = null)
    {
        require_once __DIR__ . '/entity/group_employee_response_paged_list_entity.php';
        if ($data === null) {
            if ($this->_group_employee_response_paged_list === null) {
                $this->_group_employee_response_paged_list = new GroupEmployeeResponsePagedListEntity($this, null);
            }
            return $this->_group_employee_response_paged_list;
        }
        return new GroupEmployeeResponsePagedListEntity($this, $data);
    }


    private $_group_policy = null;

    // Canonical facade: $client->GroupPolicy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group_policy()
    // resolves here too.
    public function GroupPolicy($data = null)
    {
        require_once __DIR__ . '/entity/group_policy_entity.php';
        if ($data === null) {
            if ($this->_group_policy === null) {
                $this->_group_policy = new GroupPolicyEntity($this, null);
            }
            return $this->_group_policy;
        }
        return new GroupPolicyEntity($this, $data);
    }


    private $_group_policy_intent = null;

    // Canonical facade: $client->GroupPolicyIntent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group_policy_intent()
    // resolves here too.
    public function GroupPolicyIntent($data = null)
    {
        require_once __DIR__ . '/entity/group_policy_intent_entity.php';
        if ($data === null) {
            if ($this->_group_policy_intent === null) {
                $this->_group_policy_intent = new GroupPolicyIntentEntity($this, null);
            }
            return $this->_group_policy_intent;
        }
        return new GroupPolicyIntentEntity($this, $data);
    }


    private $_group_policy_intent_requirement_response_paged_list = null;

    // Canonical facade: $client->GroupPolicyIntentRequirementResponsePagedList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group_policy_intent_requirement_response_paged_list()
    // resolves here too.
    public function GroupPolicyIntentRequirementResponsePagedList($data = null)
    {
        require_once __DIR__ . '/entity/group_policy_intent_requirement_response_paged_list_entity.php';
        if ($data === null) {
            if ($this->_group_policy_intent_requirement_response_paged_list === null) {
                $this->_group_policy_intent_requirement_response_paged_list = new GroupPolicyIntentRequirementResponsePagedListEntity($this, null);
            }
            return $this->_group_policy_intent_requirement_response_paged_list;
        }
        return new GroupPolicyIntentRequirementResponsePagedListEntity($this, $data);
    }


    private $_group_quote = null;

    // Canonical facade: $client->GroupQuote()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group_quote()
    // resolves here too.
    public function GroupQuote($data = null)
    {
        require_once __DIR__ . '/entity/group_quote_entity.php';
        if ($data === null) {
            if ($this->_group_quote === null) {
                $this->_group_quote = new GroupQuoteEntity($this, null);
            }
            return $this->_group_quote;
        }
        return new GroupQuoteEntity($this, $data);
    }


    private $_group_quote_intent = null;

    // Canonical facade: $client->GroupQuoteIntent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group_quote_intent()
    // resolves here too.
    public function GroupQuoteIntent($data = null)
    {
        require_once __DIR__ . '/entity/group_quote_intent_entity.php';
        if ($data === null) {
            if ($this->_group_quote_intent === null) {
                $this->_group_quote_intent = new GroupQuoteIntentEntity($this, null);
            }
            return $this->_group_quote_intent;
        }
        return new GroupQuoteIntentEntity($this, $data);
    }


    private $_group_quote_intent_requirement_response_paged_list = null;

    // Canonical facade: $client->GroupQuoteIntentRequirementResponsePagedList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->group_quote_intent_requirement_response_paged_list()
    // resolves here too.
    public function GroupQuoteIntentRequirementResponsePagedList($data = null)
    {
        require_once __DIR__ . '/entity/group_quote_intent_requirement_response_paged_list_entity.php';
        if ($data === null) {
            if ($this->_group_quote_intent_requirement_response_paged_list === null) {
                $this->_group_quote_intent_requirement_response_paged_list = new GroupQuoteIntentRequirementResponsePagedListEntity($this, null);
            }
            return $this->_group_quote_intent_requirement_response_paged_list;
        }
        return new GroupQuoteIntentRequirementResponsePagedListEntity($this, $data);
    }


    private $_plan = null;

    // Canonical facade: $client->Plan()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->plan()
    // resolves here too.
    public function Plan($data = null)
    {
        require_once __DIR__ . '/entity/plan_entity.php';
        if ($data === null) {
            if ($this->_plan === null) {
                $this->_plan = new PlanEntity($this, null);
            }
            return $this->_plan;
        }
        return new PlanEntity($this, $data);
    }


    private $_policy = null;

    // Canonical facade: $client->Policy()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->policy()
    // resolves here too.
    public function Policy($data = null)
    {
        require_once __DIR__ . '/entity/policy_entity.php';
        if ($data === null) {
            if ($this->_policy === null) {
                $this->_policy = new PolicyEntity($this, null);
            }
            return $this->_policy;
        }
        return new PolicyEntity($this, $data);
    }


    private $_policy_amendment_intent = null;

    // Canonical facade: $client->PolicyAmendmentIntent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->policy_amendment_intent()
    // resolves here too.
    public function PolicyAmendmentIntent($data = null)
    {
        require_once __DIR__ . '/entity/policy_amendment_intent_entity.php';
        if ($data === null) {
            if ($this->_policy_amendment_intent === null) {
                $this->_policy_amendment_intent = new PolicyAmendmentIntentEntity($this, null);
            }
            return $this->_policy_amendment_intent;
        }
        return new PolicyAmendmentIntentEntity($this, $data);
    }


    private $_policy_import_intent = null;

    // Canonical facade: $client->PolicyImportIntent()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->policy_import_intent()
    // resolves here too.
    public function PolicyImportIntent($data = null)
    {
        require_once __DIR__ . '/entity/policy_import_intent_entity.php';
        if ($data === null) {
            if ($this->_policy_import_intent === null) {
                $this->_policy_import_intent = new PolicyImportIntentEntity($this, null);
            }
            return $this->_policy_import_intent;
        }
        return new PolicyImportIntentEntity($this, $data);
    }


    private $_provider = null;

    // Canonical facade: $client->Provider()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->provider()
    // resolves here too.
    public function Provider($data = null)
    {
        require_once __DIR__ . '/entity/provider_entity.php';
        if ($data === null) {
            if ($this->_provider === null) {
                $this->_provider = new ProviderEntity($this, null);
            }
            return $this->_provider;
        }
        return new ProviderEntity($this, $data);
    }


    private $_replay = null;

    // Canonical facade: $client->Replay()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->replay()
    // resolves here too.
    public function Replay($data = null)
    {
        require_once __DIR__ . '/entity/replay_entity.php';
        if ($data === null) {
            if ($this->_replay === null) {
                $this->_replay = new ReplayEntity($this, null);
            }
            return $this->_replay;
        }
        return new ReplayEntity($this, $data);
    }


    private $_webhook_endpoint = null;

    // Canonical facade: $client->WebhookEndpoint()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook_endpoint()
    // resolves here too.
    public function WebhookEndpoint($data = null)
    {
        require_once __DIR__ . '/entity/webhook_endpoint_entity.php';
        if ($data === null) {
            if ($this->_webhook_endpoint === null) {
                $this->_webhook_endpoint = new WebhookEndpointEntity($this, null);
            }
            return $this->_webhook_endpoint;
        }
        return new WebhookEndpointEntity($this, $data);
    }


    private $_webhook_endpoint_response_paged_list = null;

    // Canonical facade: $client->WebhookEndpointResponsePagedList()->list() / ->load(["id" => ...]).
    // PHP method names are case-insensitive, so lowercase $client->webhook_endpoint_response_paged_list()
    // resolves here too.
    public function WebhookEndpointResponsePagedList($data = null)
    {
        require_once __DIR__ . '/entity/webhook_endpoint_response_paged_list_entity.php';
        if ($data === null) {
            if ($this->_webhook_endpoint_response_paged_list === null) {
                $this->_webhook_endpoint_response_paged_list = new WebhookEndpointResponsePagedListEntity($this, null);
            }
            return $this->_webhook_endpoint_response_paged_list;
        }
        return new WebhookEndpointResponsePagedListEntity($this, $data);
    }



    public static function test(?array $testopts = null, ?array $sdkopts = null): self
    {
        $sdkopts = $sdkopts ?? [];
        $sdkopts = Struct::clone($sdkopts);
        $sdkopts = is_array($sdkopts) ? $sdkopts : [];

        $testopts = $testopts ?? [];
        $testopts = Struct::clone($testopts);
        $testopts = is_array($testopts) ? $testopts : [];
        $testopts["active"] = true;

        if (!isset($sdkopts["feature"])) {
            $sdkopts["feature"] = [];
        }
        $sdkopts["feature"]["test"] = $testopts;

        $sdk = new KotaSDK($sdkopts);
        $sdk->mode = "test";
        return $sdk;
    }
}
