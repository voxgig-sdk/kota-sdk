-- Kota SDK

local vs = require("utility.struct.struct")
local Utility = require("core.utility_type")
local Spec = require("core.spec")
local helpers = require("core.helpers")

-- Load utility registration (populates Utility._registrar)
require("utility.register")

-- Typed-model annotations (LuaLS ---@class); empty at runtime.
require("kota_types")

-- Load features
local BaseFeature = require("feature.base_feature")
local features_factory = require("features")


local KotaSDK = {}
KotaSDK.__index = KotaSDK


local function _make_feature(name)
  local factory = features_factory[name]
  if factory ~= nil then
    return factory()
  end
  return features_factory.base()
end

KotaSDK._make_feature = _make_feature


function KotaSDK.new(options)
  local self = setmetatable({}, KotaSDK)
  self.mode = "live"
  self.features = {}
  self.options = nil

  local utility = Utility.new()
  self._utility = utility

  local config = require("config")()

  self._rootctx = utility.make_context({
    client = self,
    utility = utility,
    config = config,
    options = options or {},
    shared = {},
  }, nil)

  self.options = utility.make_options(self._rootctx)

  if vs.getpath(self.options, "feature.test.active") == true then
    self.mode = "test"
  end

  self._rootctx.options = self.options

  -- Add features in the resolved order (make_options puts an explicit list
  -- order first, else defaults to test-first). Ordering matters: the `test`
  -- feature installs the base mock transport and the transport features
  -- (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
  -- must be added before them to sit at the base of the chain.
  local feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
  if feature_opts ~= nil then
    local featureorder = vs.getpath(self.options, "__derived__.featureorder")
    if type(featureorder) == "table" then
      for _, fname in ipairs(featureorder) do
        local fopts = helpers.to_map(feature_opts[fname])
        if fopts ~= nil and fopts["active"] == true then
          utility.feature_add(self._rootctx, _make_feature(fname))
        end
      end
    end
  end

  -- Add extension features.
  local extend = vs.getprop(self.options, "extend")
  if type(extend) == "table" then
    for _, f in ipairs(extend) do
      if type(f) == "table" and type(f.get_name) == "function" then
        utility.feature_add(self._rootctx, f)
      end
    end
  end

  -- Initialize features.
  for _, f in ipairs(self.features) do
    utility.feature_init(self._rootctx, f)
  end

  utility.feature_hook(self._rootctx, "PostConstruct")

    -- feature: test


  return self
end


function KotaSDK:options_map()
  local out = vs.clone(self.options)
  if type(out) == "table" then
    return out
  end
  return {}
end


function KotaSDK:get_utility()
  return Utility.copy(self._utility)
end


function KotaSDK:get_root_ctx()
  return self._rootctx
end


function KotaSDK:prepare(fetchargs)
  local utility = self._utility

  fetchargs = fetchargs or {}

  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "prepare",
    ctrl = ctrl,
  }, self._rootctx)

  local options = self.options

  local path = vs.getprop(fetchargs, "path") or ""
  if type(path) ~= "string" then path = "" end

  local method = vs.getprop(fetchargs, "method") or "GET"
  if type(method) ~= "string" then method = "GET" end

  local params = helpers.to_map(vs.getprop(fetchargs, "params")) or {}
  local query = helpers.to_map(vs.getprop(fetchargs, "query")) or {}

  local headers = utility.prepare_headers(ctx)

  local base = vs.getprop(options, "base") or ""
  if type(base) ~= "string" then base = "" end
  local prefix = vs.getprop(options, "prefix") or ""
  if type(prefix) ~= "string" then prefix = "" end
  local suffix = vs.getprop(options, "suffix") or ""
  if type(suffix) ~= "string" then suffix = "" end

  ctx.spec = Spec.new({
    base = base,
    prefix = prefix,
    suffix = suffix,
    path = path,
    method = method,
    params = params,
    query = query,
    headers = headers,
    body = vs.getprop(fetchargs, "body"),
    step = "start",
  })

  -- Merge user-provided headers.
  local uh = vs.getprop(fetchargs, "headers")
  if type(uh) == "table" then
    for k, v in pairs(uh) do
      ctx.spec.headers[k] = v
    end
  end

  local _, err = utility.prepare_auth(ctx)
  if err ~= nil then
    return nil, err
  end

  return utility.make_fetch_def(ctx)
end


-- Raw endpoint access is operator-controllable, like every entity op.
-- Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
-- either one reaches the same endpoint.
function KotaSDK:direct(fetchargs)
  if not self:_op_allowed("direct") then
    return self:_op_denied("direct"), nil
  end

  return self:_raw_request(fetchargs)
end


-- Is this raw-access op permitted by the SDK's allow.op option?
function KotaSDK:_op_allowed(op)
  local allow = vs.getpath(self.options, "allow.op")
  return type(allow) == "string" and allow:find(op, 1, true) ~= nil
end


function KotaSDK:_op_denied(op)
  local allow = vs.getpath(self.options, "allow.op")
  if type(allow) ~= "string" then allow = "" end
  return {
    ok = false,
    err = "KotaSDK: " .. op .. ": operation not allowed by" ..
      " SDK option allow.op value: \"" .. allow .. "\"",
  }
end


-- Ungated request path shared by direct and graphql, each of which checks its
-- own allow.op token first. Private, rather than a flag on fetchargs: a
-- caller-supplied marker would let anyone opt straight back out of the gate
-- by passing it.
function KotaSDK:_raw_request(fetchargs)
  local utility = self._utility

  local fetchdef, err = self:prepare(fetchargs)
  if err ~= nil then
    return { ok = false, err = err }, nil
  end

  fetchargs = fetchargs or {}
  local ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl")) or {}

  local ctx = utility.make_context({
    opname = "direct",
    ctrl = ctrl,
  }, self._rootctx)

  local url = fetchdef["url"] or ""
  local fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

  if fetch_err ~= nil then
    return { ok = false, err = fetch_err }, nil
  end

  if fetched == nil then
    return {
      ok = false,
      err = ctx:make_error("direct_no_response", "response: undefined"),
    }, nil
  end

  if type(fetched) == "table" then
    local status = helpers.to_int(vs.getprop(fetched, "status"))
    local headers = vs.getprop(fetched, "headers") or {}

    -- No-body responses (204, 304) and explicit zero content-length
    -- must skip JSON parsing — calling json() on an empty body errors.
    local content_length = nil
    if type(headers) == "table" then
      content_length = headers["content-length"]
    end
    local no_body = status == 204 or status == 304 or tostring(content_length) == "0"

    local json_data = nil
    if not no_body then
      local jf = vs.getprop(fetched, "json")
      if type(jf) == "function" then
        local ok, result = pcall(jf)
        if ok then
          json_data = result
        end
        -- Non-JSON body: json_data stays nil, status/headers preserved.
      end
    end

    return {
      ok = status >= 200 and status < 300,
      status = status,
      headers = headers,
      data = json_data,
    }, nil
  end

  return {
    ok = false,
    err = ctx:make_error("direct_invalid", "invalid response type"),
  }, nil
end


-- Raw GraphQL access: the pressure valve that makes the generated surface's
-- deliberate omissions (per-call selection sets, typed filter builders,
-- batching, subscriptions) livable — the whole schema stays reachable.
--
-- Thin wrapper over the same prepare/fetch path direct uses, with the one
-- thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200 as
-- a top-level `errors` array, so status alone would report a failed query as
-- ok.
--
-- NOTE: like direct, this bypasses the feature pipeline — no retry, ratelimit
-- or paging features apply.
function KotaSDK:graphql(query, variables, ctrl)
  if not self:_op_allowed("graphql") then
    return self:_op_denied("graphql"), nil
  end

  local res, err = self:_raw_request({
    method = "POST",
    headers = { ["content-type"] = "application/json" },
    body = {
      query = query,
      variables = type(variables) == "table" and variables or {},
    },
    ctrl = type(ctrl) == "table" and ctrl or {},
  })

  if err ~= nil or type(res) ~= "table" then
    return res, err
  end

  -- Errors are read BEFORE any status check: a GraphQL parse or validation
  -- failure comes back as HTTP 400 carrying the standard { errors = {...} }
  -- body, and the raw path represents a non-2xx as ok=false with no err — so
  -- returning early on status would discard the server's own diagnostics,
  -- which are the only useful part of that response.
  local errors = vs.getpath(res, "data.errors")

  if type(errors) == "table" and 0 < #errors then
    local msg = vs.getprop(errors[1], "message")
    if type(msg) ~= "string" or msg == "" then
      msg = "graphql error"
    end
    res.ok = false
    res.err = "KotaSDK: graphql: " .. msg
    res.graphql = errors
  end

  return res, nil
end



-- Idiomatic facade: client:AssociatedPerson():list() / client:AssociatedPerson():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:AssociatedPerson(data)
  local EntityMod = require("entity.associated_person_entity")
  if data == nil then
    if self._associated_person == nil then
      self._associated_person = EntityMod.new(self, nil)
    end
    return self._associated_person
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:AssociatedPersonEligibilityResponsePagedList():list() / client:AssociatedPersonEligibilityResponsePagedList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:AssociatedPersonEligibilityResponsePagedList(data)
  local EntityMod = require("entity.associated_person_eligibility_response_paged_list_entity")
  if data == nil then
    if self._associated_person_eligibility_response_paged_list == nil then
      self._associated_person_eligibility_response_paged_list = EntityMod.new(self, nil)
    end
    return self._associated_person_eligibility_response_paged_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContributionReport():list() / client:ContributionReport():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:ContributionReport(data)
  local EntityMod = require("entity.contribution_report_entity")
  if data == nil then
    if self._contribution_report == nil then
      self._contribution_report = EntityMod.new(self, nil)
    end
    return self._contribution_report
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContributionReportEmployeeBreakdown():list() / client:ContributionReportEmployeeBreakdown():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:ContributionReportEmployeeBreakdown(data)
  local EntityMod = require("entity.contribution_report_employee_breakdown_entity")
  if data == nil then
    if self._contribution_report_employee_breakdown == nil then
      self._contribution_report_employee_breakdown = EntityMod.new(self, nil)
    end
    return self._contribution_report_employee_breakdown
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:ContributionReportEmployeeBreakdownResponsePagedList():list() / client:ContributionReportEmployeeBreakdownResponsePagedList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:ContributionReportEmployeeBreakdownResponsePagedList(data)
  local EntityMod = require("entity.contribution_report_employee_breakdown_response_paged_list_entity")
  if data == nil then
    if self._contribution_report_employee_breakdown_response_paged_list == nil then
      self._contribution_report_employee_breakdown_response_paged_list = EntityMod.new(self, nil)
    end
    return self._contribution_report_employee_breakdown_response_paged_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateHostedSessionToken():list() / client:CreateHostedSessionToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:CreateHostedSessionToken(data)
  local EntityMod = require("entity.create_hosted_session_token_entity")
  if data == nil then
    if self._create_hosted_session_token == nil then
      self._create_hosted_session_token = EntityMod.new(self, nil)
    end
    return self._create_hosted_session_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:CreateSessionToken():list() / client:CreateSessionToken():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:CreateSessionToken(data)
  local EntityMod = require("entity.create_session_token_entity")
  if data == nil then
    if self._create_session_token == nil then
      self._create_session_token = EntityMod.new(self, nil)
    end
    return self._create_session_token
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Dependent():list() / client:Dependent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:Dependent(data)
  local EntityMod = require("entity.dependent_entity")
  if data == nil then
    if self._dependent == nil then
      self._dependent = EntityMod.new(self, nil)
    end
    return self._dependent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:DependentsManagementIntent():list() / client:DependentsManagementIntent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:DependentsManagementIntent(data)
  local EntityMod = require("entity.dependents_management_intent_entity")
  if data == nil then
    if self._dependents_management_intent == nil then
      self._dependents_management_intent = EntityMod.new(self, nil)
    end
    return self._dependents_management_intent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EligibilityCheck():list() / client:EligibilityCheck():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:EligibilityCheck(data)
  local EntityMod = require("entity.eligibility_check_entity")
  if data == nil then
    if self._eligibility_check == nil then
      self._eligibility_check = EntityMod.new(self, nil)
    end
    return self._eligibility_check
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Employee():list() / client:Employee():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:Employee(data)
  local EntityMod = require("entity.employee_entity")
  if data == nil then
    if self._employee == nil then
      self._employee = EntityMod.new(self, nil)
    end
    return self._employee
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmployeeHealthInsuranceOffer():list() / client:EmployeeHealthInsuranceOffer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:EmployeeHealthInsuranceOffer(data)
  local EntityMod = require("entity.employee_health_insurance_offer_entity")
  if data == nil then
    if self._employee_health_insurance_offer == nil then
      self._employee_health_insurance_offer = EntityMod.new(self, nil)
    end
    return self._employee_health_insurance_offer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmployeeHealthInsuranceOfferResponsePagedList():list() / client:EmployeeHealthInsuranceOfferResponsePagedList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:EmployeeHealthInsuranceOfferResponsePagedList(data)
  local EntityMod = require("entity.employee_health_insurance_offer_response_paged_list_entity")
  if data == nil then
    if self._employee_health_insurance_offer_response_paged_list == nil then
      self._employee_health_insurance_offer_response_paged_list = EntityMod.new(self, nil)
    end
    return self._employee_health_insurance_offer_response_paged_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmployeeHealthInsurancePolicy():list() / client:EmployeeHealthInsurancePolicy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:EmployeeHealthInsurancePolicy(data)
  local EntityMod = require("entity.employee_health_insurance_policy_entity")
  if data == nil then
    if self._employee_health_insurance_policy == nil then
      self._employee_health_insurance_policy = EntityMod.new(self, nil)
    end
    return self._employee_health_insurance_policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmployeeHealthInsurancePolicyResponsePagedList():list() / client:EmployeeHealthInsurancePolicyResponsePagedList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:EmployeeHealthInsurancePolicyResponsePagedList(data)
  local EntityMod = require("entity.employee_health_insurance_policy_response_paged_list_entity")
  if data == nil then
    if self._employee_health_insurance_policy_response_paged_list == nil then
      self._employee_health_insurance_policy_response_paged_list = EntityMod.new(self, nil)
    end
    return self._employee_health_insurance_policy_response_paged_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Employer():list() / client:Employer():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:Employer(data)
  local EntityMod = require("entity.employer_entity")
  if data == nil then
    if self._employer == nil then
      self._employer = EntityMod.new(self, nil)
    end
    return self._employer
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmployerHealthInsurancePolicy():list() / client:EmployerHealthInsurancePolicy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:EmployerHealthInsurancePolicy(data)
  local EntityMod = require("entity.employer_health_insurance_policy_entity")
  if data == nil then
    if self._employer_health_insurance_policy == nil then
      self._employer_health_insurance_policy = EntityMod.new(self, nil)
    end
    return self._employer_health_insurance_policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmployerHealthInsurancePolicyResponsePagedList():list() / client:EmployerHealthInsurancePolicyResponsePagedList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:EmployerHealthInsurancePolicyResponsePagedList(data)
  local EntityMod = require("entity.employer_health_insurance_policy_response_paged_list_entity")
  if data == nil then
    if self._employer_health_insurance_policy_response_paged_list == nil then
      self._employer_health_insurance_policy_response_paged_list = EntityMod.new(self, nil)
    end
    return self._employer_health_insurance_policy_response_paged_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmployerHealthInsuranceQuote():list() / client:EmployerHealthInsuranceQuote():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:EmployerHealthInsuranceQuote(data)
  local EntityMod = require("entity.employer_health_insurance_quote_entity")
  if data == nil then
    if self._employer_health_insurance_quote == nil then
      self._employer_health_insurance_quote = EntityMod.new(self, nil)
    end
    return self._employer_health_insurance_quote
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EmployerHealthInsuranceQuoteResponsePagedList():list() / client:EmployerHealthInsuranceQuoteResponsePagedList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:EmployerHealthInsuranceQuoteResponsePagedList(data)
  local EntityMod = require("entity.employer_health_insurance_quote_response_paged_list_entity")
  if data == nil then
    if self._employer_health_insurance_quote_response_paged_list == nil then
      self._employer_health_insurance_quote_response_paged_list = EntityMod.new(self, nil)
    end
    return self._employer_health_insurance_quote_response_paged_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EnrolmentIntent():list() / client:EnrolmentIntent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:EnrolmentIntent(data)
  local EntityMod = require("entity.enrolment_intent_entity")
  if data == nil then
    if self._enrolment_intent == nil then
      self._enrolment_intent = EntityMod.new(self, nil)
    end
    return self._enrolment_intent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:EnrolmentIntentRequirementResponsePagedList():list() / client:EnrolmentIntentRequirementResponsePagedList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:EnrolmentIntentRequirementResponsePagedList(data)
  local EntityMod = require("entity.enrolment_intent_requirement_response_paged_list_entity")
  if data == nil then
    if self._enrolment_intent_requirement_response_paged_list == nil then
      self._enrolment_intent_requirement_response_paged_list = EntityMod.new(self, nil)
    end
    return self._enrolment_intent_requirement_response_paged_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Event():list() / client:Event():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:Event(data)
  local EntityMod = require("entity.event_entity")
  if data == nil then
    if self._event == nil then
      self._event = EntityMod.new(self, nil)
    end
    return self._event
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Group():list() / client:Group():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:Group(data)
  local EntityMod = require("entity.group_entity")
  if data == nil then
    if self._group == nil then
      self._group = EntityMod.new(self, nil)
    end
    return self._group
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GroupEmployee():list() / client:GroupEmployee():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:GroupEmployee(data)
  local EntityMod = require("entity.group_employee_entity")
  if data == nil then
    if self._group_employee == nil then
      self._group_employee = EntityMod.new(self, nil)
    end
    return self._group_employee
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GroupEmployeeResponsePagedList():list() / client:GroupEmployeeResponsePagedList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:GroupEmployeeResponsePagedList(data)
  local EntityMod = require("entity.group_employee_response_paged_list_entity")
  if data == nil then
    if self._group_employee_response_paged_list == nil then
      self._group_employee_response_paged_list = EntityMod.new(self, nil)
    end
    return self._group_employee_response_paged_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GroupPolicy():list() / client:GroupPolicy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:GroupPolicy(data)
  local EntityMod = require("entity.group_policy_entity")
  if data == nil then
    if self._group_policy == nil then
      self._group_policy = EntityMod.new(self, nil)
    end
    return self._group_policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GroupPolicyIntent():list() / client:GroupPolicyIntent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:GroupPolicyIntent(data)
  local EntityMod = require("entity.group_policy_intent_entity")
  if data == nil then
    if self._group_policy_intent == nil then
      self._group_policy_intent = EntityMod.new(self, nil)
    end
    return self._group_policy_intent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GroupPolicyIntentRequirementResponsePagedList():list() / client:GroupPolicyIntentRequirementResponsePagedList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:GroupPolicyIntentRequirementResponsePagedList(data)
  local EntityMod = require("entity.group_policy_intent_requirement_response_paged_list_entity")
  if data == nil then
    if self._group_policy_intent_requirement_response_paged_list == nil then
      self._group_policy_intent_requirement_response_paged_list = EntityMod.new(self, nil)
    end
    return self._group_policy_intent_requirement_response_paged_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GroupQuote():list() / client:GroupQuote():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:GroupQuote(data)
  local EntityMod = require("entity.group_quote_entity")
  if data == nil then
    if self._group_quote == nil then
      self._group_quote = EntityMod.new(self, nil)
    end
    return self._group_quote
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GroupQuoteIntent():list() / client:GroupQuoteIntent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:GroupQuoteIntent(data)
  local EntityMod = require("entity.group_quote_intent_entity")
  if data == nil then
    if self._group_quote_intent == nil then
      self._group_quote_intent = EntityMod.new(self, nil)
    end
    return self._group_quote_intent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:GroupQuoteIntentRequirementResponsePagedList():list() / client:GroupQuoteIntentRequirementResponsePagedList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:GroupQuoteIntentRequirementResponsePagedList(data)
  local EntityMod = require("entity.group_quote_intent_requirement_response_paged_list_entity")
  if data == nil then
    if self._group_quote_intent_requirement_response_paged_list == nil then
      self._group_quote_intent_requirement_response_paged_list = EntityMod.new(self, nil)
    end
    return self._group_quote_intent_requirement_response_paged_list
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Plan():list() / client:Plan():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:Plan(data)
  local EntityMod = require("entity.plan_entity")
  if data == nil then
    if self._plan == nil then
      self._plan = EntityMod.new(self, nil)
    end
    return self._plan
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Policy():list() / client:Policy():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:Policy(data)
  local EntityMod = require("entity.policy_entity")
  if data == nil then
    if self._policy == nil then
      self._policy = EntityMod.new(self, nil)
    end
    return self._policy
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PolicyAmendmentIntent():list() / client:PolicyAmendmentIntent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:PolicyAmendmentIntent(data)
  local EntityMod = require("entity.policy_amendment_intent_entity")
  if data == nil then
    if self._policy_amendment_intent == nil then
      self._policy_amendment_intent = EntityMod.new(self, nil)
    end
    return self._policy_amendment_intent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:PolicyImportIntent():list() / client:PolicyImportIntent():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:PolicyImportIntent(data)
  local EntityMod = require("entity.policy_import_intent_entity")
  if data == nil then
    if self._policy_import_intent == nil then
      self._policy_import_intent = EntityMod.new(self, nil)
    end
    return self._policy_import_intent
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Provider():list() / client:Provider():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:Provider(data)
  local EntityMod = require("entity.provider_entity")
  if data == nil then
    if self._provider == nil then
      self._provider = EntityMod.new(self, nil)
    end
    return self._provider
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:Replay():list() / client:Replay():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:Replay(data)
  local EntityMod = require("entity.replay_entity")
  if data == nil then
    if self._replay == nil then
      self._replay = EntityMod.new(self, nil)
    end
    return self._replay
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WebhookEndpoint():list() / client:WebhookEndpoint():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:WebhookEndpoint(data)
  local EntityMod = require("entity.webhook_endpoint_entity")
  if data == nil then
    if self._webhook_endpoint == nil then
      self._webhook_endpoint = EntityMod.new(self, nil)
    end
    return self._webhook_endpoint
  end
  return EntityMod.new(self, data)
end


-- Idiomatic facade: client:WebhookEndpointResponsePagedList():list() / client:WebhookEndpointResponsePagedList():load({ id = ... })
-- Entity access is capitalised (PascalCase) for parity with the other SDKs.
function KotaSDK:WebhookEndpointResponsePagedList(data)
  local EntityMod = require("entity.webhook_endpoint_response_paged_list_entity")
  if data == nil then
    if self._webhook_endpoint_response_paged_list == nil then
      self._webhook_endpoint_response_paged_list = EntityMod.new(self, nil)
    end
    return self._webhook_endpoint_response_paged_list
  end
  return EntityMod.new(self, data)
end




function KotaSDK.test(testopts, sdkopts)
  sdkopts = sdkopts or {}
  sdkopts = vs.clone(sdkopts)
  if type(sdkopts) ~= "table" then
    sdkopts = {}
  end

  testopts = testopts or {}
  testopts = vs.clone(testopts)
  if type(testopts) ~= "table" then
    testopts = {}
  end
  testopts["active"] = true

  vs.setpath(sdkopts, "feature.test", testopts)

  local sdk = KotaSDK.new(sdkopts)
  sdk.mode = "test"

  return sdk
end


return KotaSDK
