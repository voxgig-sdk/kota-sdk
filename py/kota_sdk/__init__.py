# Kota SDK

from kota_sdk.utility.voxgig_struct import voxgig_struct as vs
from kota_sdk.core.utility_type import KotaUtility
from kota_sdk.core.spec import KotaSpec
from kota_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from kota_sdk.utility import register

# Load features
from kota_sdk.feature.base_feature import KotaBaseFeature
from kota_sdk.features import _make_feature


class KotaSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = KotaUtility()
        self._utility = utility

        from kota_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        extend = vs.getprop(self.options, "extend")
        if isinstance(extend, list):
            for f in extend:
                if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                    utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return KotaUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = KotaSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "KotaSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("KotaSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def AssociatedPerson(self, data=None) -> "AssociatedPersonEntity":
        """Entity factory: client.AssociatedPerson().list() / client.AssociatedPerson().load({"id": ...})."""
        from kota_sdk.entity.associated_person_entity import AssociatedPersonEntity
        return AssociatedPersonEntity(self, data)


    def AssociatedPersonEligibilityResponsePagedList(self, data=None) -> "AssociatedPersonEligibilityResponsePagedListEntity":
        """Entity factory: client.AssociatedPersonEligibilityResponsePagedList().list() / client.AssociatedPersonEligibilityResponsePagedList().load({"id": ...})."""
        from kota_sdk.entity.associated_person_eligibility_response_paged_list_entity import AssociatedPersonEligibilityResponsePagedListEntity
        return AssociatedPersonEligibilityResponsePagedListEntity(self, data)


    def ContributionReport(self, data=None) -> "ContributionReportEntity":
        """Entity factory: client.ContributionReport().list() / client.ContributionReport().load({"id": ...})."""
        from kota_sdk.entity.contribution_report_entity import ContributionReportEntity
        return ContributionReportEntity(self, data)


    def ContributionReportEmployeeBreakdown(self, data=None) -> "ContributionReportEmployeeBreakdownEntity":
        """Entity factory: client.ContributionReportEmployeeBreakdown().list() / client.ContributionReportEmployeeBreakdown().load({"id": ...})."""
        from kota_sdk.entity.contribution_report_employee_breakdown_entity import ContributionReportEmployeeBreakdownEntity
        return ContributionReportEmployeeBreakdownEntity(self, data)


    def ContributionReportEmployeeBreakdownResponsePagedList(self, data=None) -> "ContributionReportEmployeeBreakdownResponsePagedListEntity":
        """Entity factory: client.ContributionReportEmployeeBreakdownResponsePagedList().list() / client.ContributionReportEmployeeBreakdownResponsePagedList().load({"id": ...})."""
        from kota_sdk.entity.contribution_report_employee_breakdown_response_paged_list_entity import ContributionReportEmployeeBreakdownResponsePagedListEntity
        return ContributionReportEmployeeBreakdownResponsePagedListEntity(self, data)


    def CreateHostedSessionToken(self, data=None) -> "CreateHostedSessionTokenEntity":
        """Entity factory: client.CreateHostedSessionToken().list() / client.CreateHostedSessionToken().load({"id": ...})."""
        from kota_sdk.entity.create_hosted_session_token_entity import CreateHostedSessionTokenEntity
        return CreateHostedSessionTokenEntity(self, data)


    def CreateSessionToken(self, data=None) -> "CreateSessionTokenEntity":
        """Entity factory: client.CreateSessionToken().list() / client.CreateSessionToken().load({"id": ...})."""
        from kota_sdk.entity.create_session_token_entity import CreateSessionTokenEntity
        return CreateSessionTokenEntity(self, data)


    def Dependent(self, data=None) -> "DependentEntity":
        """Entity factory: client.Dependent().list() / client.Dependent().load({"id": ...})."""
        from kota_sdk.entity.dependent_entity import DependentEntity
        return DependentEntity(self, data)


    def DependentsManagementIntent(self, data=None) -> "DependentsManagementIntentEntity":
        """Entity factory: client.DependentsManagementIntent().list() / client.DependentsManagementIntent().load({"id": ...})."""
        from kota_sdk.entity.dependents_management_intent_entity import DependentsManagementIntentEntity
        return DependentsManagementIntentEntity(self, data)


    def EligibilityCheck(self, data=None) -> "EligibilityCheckEntity":
        """Entity factory: client.EligibilityCheck().list() / client.EligibilityCheck().load({"id": ...})."""
        from kota_sdk.entity.eligibility_check_entity import EligibilityCheckEntity
        return EligibilityCheckEntity(self, data)


    def Employee(self, data=None) -> "EmployeeEntity":
        """Entity factory: client.Employee().list() / client.Employee().load({"id": ...})."""
        from kota_sdk.entity.employee_entity import EmployeeEntity
        return EmployeeEntity(self, data)


    def EmployeeHealthInsuranceOffer(self, data=None) -> "EmployeeHealthInsuranceOfferEntity":
        """Entity factory: client.EmployeeHealthInsuranceOffer().list() / client.EmployeeHealthInsuranceOffer().load({"id": ...})."""
        from kota_sdk.entity.employee_health_insurance_offer_entity import EmployeeHealthInsuranceOfferEntity
        return EmployeeHealthInsuranceOfferEntity(self, data)


    def EmployeeHealthInsuranceOfferResponsePagedList(self, data=None) -> "EmployeeHealthInsuranceOfferResponsePagedListEntity":
        """Entity factory: client.EmployeeHealthInsuranceOfferResponsePagedList().list() / client.EmployeeHealthInsuranceOfferResponsePagedList().load({"id": ...})."""
        from kota_sdk.entity.employee_health_insurance_offer_response_paged_list_entity import EmployeeHealthInsuranceOfferResponsePagedListEntity
        return EmployeeHealthInsuranceOfferResponsePagedListEntity(self, data)


    def EmployeeHealthInsurancePolicy(self, data=None) -> "EmployeeHealthInsurancePolicyEntity":
        """Entity factory: client.EmployeeHealthInsurancePolicy().list() / client.EmployeeHealthInsurancePolicy().load({"id": ...})."""
        from kota_sdk.entity.employee_health_insurance_policy_entity import EmployeeHealthInsurancePolicyEntity
        return EmployeeHealthInsurancePolicyEntity(self, data)


    def EmployeeHealthInsurancePolicyResponsePagedList(self, data=None) -> "EmployeeHealthInsurancePolicyResponsePagedListEntity":
        """Entity factory: client.EmployeeHealthInsurancePolicyResponsePagedList().list() / client.EmployeeHealthInsurancePolicyResponsePagedList().load({"id": ...})."""
        from kota_sdk.entity.employee_health_insurance_policy_response_paged_list_entity import EmployeeHealthInsurancePolicyResponsePagedListEntity
        return EmployeeHealthInsurancePolicyResponsePagedListEntity(self, data)


    def Employer(self, data=None) -> "EmployerEntity":
        """Entity factory: client.Employer().list() / client.Employer().load({"id": ...})."""
        from kota_sdk.entity.employer_entity import EmployerEntity
        return EmployerEntity(self, data)


    def EmployerHealthInsurancePolicy(self, data=None) -> "EmployerHealthInsurancePolicyEntity":
        """Entity factory: client.EmployerHealthInsurancePolicy().list() / client.EmployerHealthInsurancePolicy().load({"id": ...})."""
        from kota_sdk.entity.employer_health_insurance_policy_entity import EmployerHealthInsurancePolicyEntity
        return EmployerHealthInsurancePolicyEntity(self, data)


    def EmployerHealthInsurancePolicyResponsePagedList(self, data=None) -> "EmployerHealthInsurancePolicyResponsePagedListEntity":
        """Entity factory: client.EmployerHealthInsurancePolicyResponsePagedList().list() / client.EmployerHealthInsurancePolicyResponsePagedList().load({"id": ...})."""
        from kota_sdk.entity.employer_health_insurance_policy_response_paged_list_entity import EmployerHealthInsurancePolicyResponsePagedListEntity
        return EmployerHealthInsurancePolicyResponsePagedListEntity(self, data)


    def EmployerHealthInsuranceQuote(self, data=None) -> "EmployerHealthInsuranceQuoteEntity":
        """Entity factory: client.EmployerHealthInsuranceQuote().list() / client.EmployerHealthInsuranceQuote().load({"id": ...})."""
        from kota_sdk.entity.employer_health_insurance_quote_entity import EmployerHealthInsuranceQuoteEntity
        return EmployerHealthInsuranceQuoteEntity(self, data)


    def EmployerHealthInsuranceQuoteResponsePagedList(self, data=None) -> "EmployerHealthInsuranceQuoteResponsePagedListEntity":
        """Entity factory: client.EmployerHealthInsuranceQuoteResponsePagedList().list() / client.EmployerHealthInsuranceQuoteResponsePagedList().load({"id": ...})."""
        from kota_sdk.entity.employer_health_insurance_quote_response_paged_list_entity import EmployerHealthInsuranceQuoteResponsePagedListEntity
        return EmployerHealthInsuranceQuoteResponsePagedListEntity(self, data)


    def EnrolmentIntent(self, data=None) -> "EnrolmentIntentEntity":
        """Entity factory: client.EnrolmentIntent().list() / client.EnrolmentIntent().load({"id": ...})."""
        from kota_sdk.entity.enrolment_intent_entity import EnrolmentIntentEntity
        return EnrolmentIntentEntity(self, data)


    def EnrolmentIntentRequirementResponsePagedList(self, data=None) -> "EnrolmentIntentRequirementResponsePagedListEntity":
        """Entity factory: client.EnrolmentIntentRequirementResponsePagedList().list() / client.EnrolmentIntentRequirementResponsePagedList().load({"id": ...})."""
        from kota_sdk.entity.enrolment_intent_requirement_response_paged_list_entity import EnrolmentIntentRequirementResponsePagedListEntity
        return EnrolmentIntentRequirementResponsePagedListEntity(self, data)


    def Event(self, data=None) -> "EventEntity":
        """Entity factory: client.Event().list() / client.Event().load({"id": ...})."""
        from kota_sdk.entity.event_entity import EventEntity
        return EventEntity(self, data)


    def Group(self, data=None) -> "GroupEntity":
        """Entity factory: client.Group().list() / client.Group().load({"id": ...})."""
        from kota_sdk.entity.group_entity import GroupEntity
        return GroupEntity(self, data)


    def GroupEmployee(self, data=None) -> "GroupEmployeeEntity":
        """Entity factory: client.GroupEmployee().list() / client.GroupEmployee().load({"id": ...})."""
        from kota_sdk.entity.group_employee_entity import GroupEmployeeEntity
        return GroupEmployeeEntity(self, data)


    def GroupEmployeeResponsePagedList(self, data=None) -> "GroupEmployeeResponsePagedListEntity":
        """Entity factory: client.GroupEmployeeResponsePagedList().list() / client.GroupEmployeeResponsePagedList().load({"id": ...})."""
        from kota_sdk.entity.group_employee_response_paged_list_entity import GroupEmployeeResponsePagedListEntity
        return GroupEmployeeResponsePagedListEntity(self, data)


    def GroupPolicy(self, data=None) -> "GroupPolicyEntity":
        """Entity factory: client.GroupPolicy().list() / client.GroupPolicy().load({"id": ...})."""
        from kota_sdk.entity.group_policy_entity import GroupPolicyEntity
        return GroupPolicyEntity(self, data)


    def GroupPolicyIntent(self, data=None) -> "GroupPolicyIntentEntity":
        """Entity factory: client.GroupPolicyIntent().list() / client.GroupPolicyIntent().load({"id": ...})."""
        from kota_sdk.entity.group_policy_intent_entity import GroupPolicyIntentEntity
        return GroupPolicyIntentEntity(self, data)


    def GroupPolicyIntentRequirementResponsePagedList(self, data=None) -> "GroupPolicyIntentRequirementResponsePagedListEntity":
        """Entity factory: client.GroupPolicyIntentRequirementResponsePagedList().list() / client.GroupPolicyIntentRequirementResponsePagedList().load({"id": ...})."""
        from kota_sdk.entity.group_policy_intent_requirement_response_paged_list_entity import GroupPolicyIntentRequirementResponsePagedListEntity
        return GroupPolicyIntentRequirementResponsePagedListEntity(self, data)


    def GroupQuote(self, data=None) -> "GroupQuoteEntity":
        """Entity factory: client.GroupQuote().list() / client.GroupQuote().load({"id": ...})."""
        from kota_sdk.entity.group_quote_entity import GroupQuoteEntity
        return GroupQuoteEntity(self, data)


    def GroupQuoteIntent(self, data=None) -> "GroupQuoteIntentEntity":
        """Entity factory: client.GroupQuoteIntent().list() / client.GroupQuoteIntent().load({"id": ...})."""
        from kota_sdk.entity.group_quote_intent_entity import GroupQuoteIntentEntity
        return GroupQuoteIntentEntity(self, data)


    def GroupQuoteIntentRequirementResponsePagedList(self, data=None) -> "GroupQuoteIntentRequirementResponsePagedListEntity":
        """Entity factory: client.GroupQuoteIntentRequirementResponsePagedList().list() / client.GroupQuoteIntentRequirementResponsePagedList().load({"id": ...})."""
        from kota_sdk.entity.group_quote_intent_requirement_response_paged_list_entity import GroupQuoteIntentRequirementResponsePagedListEntity
        return GroupQuoteIntentRequirementResponsePagedListEntity(self, data)


    def Plan(self, data=None) -> "PlanEntity":
        """Entity factory: client.Plan().list() / client.Plan().load({"id": ...})."""
        from kota_sdk.entity.plan_entity import PlanEntity
        return PlanEntity(self, data)


    def Policy(self, data=None) -> "PolicyEntity":
        """Entity factory: client.Policy().list() / client.Policy().load({"id": ...})."""
        from kota_sdk.entity.policy_entity import PolicyEntity
        return PolicyEntity(self, data)


    def PolicyAmendmentIntent(self, data=None) -> "PolicyAmendmentIntentEntity":
        """Entity factory: client.PolicyAmendmentIntent().list() / client.PolicyAmendmentIntent().load({"id": ...})."""
        from kota_sdk.entity.policy_amendment_intent_entity import PolicyAmendmentIntentEntity
        return PolicyAmendmentIntentEntity(self, data)


    def PolicyImportIntent(self, data=None) -> "PolicyImportIntentEntity":
        """Entity factory: client.PolicyImportIntent().list() / client.PolicyImportIntent().load({"id": ...})."""
        from kota_sdk.entity.policy_import_intent_entity import PolicyImportIntentEntity
        return PolicyImportIntentEntity(self, data)


    def Provider(self, data=None) -> "ProviderEntity":
        """Entity factory: client.Provider().list() / client.Provider().load({"id": ...})."""
        from kota_sdk.entity.provider_entity import ProviderEntity
        return ProviderEntity(self, data)


    def Replay(self, data=None) -> "ReplayEntity":
        """Entity factory: client.Replay().list() / client.Replay().load({"id": ...})."""
        from kota_sdk.entity.replay_entity import ReplayEntity
        return ReplayEntity(self, data)


    def WebhookEndpoint(self, data=None) -> "WebhookEndpointEntity":
        """Entity factory: client.WebhookEndpoint().list() / client.WebhookEndpoint().load({"id": ...})."""
        from kota_sdk.entity.webhook_endpoint_entity import WebhookEndpointEntity
        return WebhookEndpointEntity(self, data)


    def WebhookEndpointResponsePagedList(self, data=None) -> "WebhookEndpointResponsePagedListEntity":
        """Entity factory: client.WebhookEndpointResponsePagedList().list() / client.WebhookEndpointResponsePagedList().load({"id": ...})."""
        from kota_sdk.entity.webhook_endpoint_response_paged_list_entity import WebhookEndpointResponsePagedListEntity
        return WebhookEndpointResponsePagedListEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "KotaSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from kota_sdk.entity.associated_person_entity import AssociatedPersonEntity
    from kota_sdk.entity.associated_person_eligibility_response_paged_list_entity import AssociatedPersonEligibilityResponsePagedListEntity
    from kota_sdk.entity.contribution_report_entity import ContributionReportEntity
    from kota_sdk.entity.contribution_report_employee_breakdown_entity import ContributionReportEmployeeBreakdownEntity
    from kota_sdk.entity.contribution_report_employee_breakdown_response_paged_list_entity import ContributionReportEmployeeBreakdownResponsePagedListEntity
    from kota_sdk.entity.create_hosted_session_token_entity import CreateHostedSessionTokenEntity
    from kota_sdk.entity.create_session_token_entity import CreateSessionTokenEntity
    from kota_sdk.entity.dependent_entity import DependentEntity
    from kota_sdk.entity.dependents_management_intent_entity import DependentsManagementIntentEntity
    from kota_sdk.entity.eligibility_check_entity import EligibilityCheckEntity
    from kota_sdk.entity.employee_entity import EmployeeEntity
    from kota_sdk.entity.employee_health_insurance_offer_entity import EmployeeHealthInsuranceOfferEntity
    from kota_sdk.entity.employee_health_insurance_offer_response_paged_list_entity import EmployeeHealthInsuranceOfferResponsePagedListEntity
    from kota_sdk.entity.employee_health_insurance_policy_entity import EmployeeHealthInsurancePolicyEntity
    from kota_sdk.entity.employee_health_insurance_policy_response_paged_list_entity import EmployeeHealthInsurancePolicyResponsePagedListEntity
    from kota_sdk.entity.employer_entity import EmployerEntity
    from kota_sdk.entity.employer_health_insurance_policy_entity import EmployerHealthInsurancePolicyEntity
    from kota_sdk.entity.employer_health_insurance_policy_response_paged_list_entity import EmployerHealthInsurancePolicyResponsePagedListEntity
    from kota_sdk.entity.employer_health_insurance_quote_entity import EmployerHealthInsuranceQuoteEntity
    from kota_sdk.entity.employer_health_insurance_quote_response_paged_list_entity import EmployerHealthInsuranceQuoteResponsePagedListEntity
    from kota_sdk.entity.enrolment_intent_entity import EnrolmentIntentEntity
    from kota_sdk.entity.enrolment_intent_requirement_response_paged_list_entity import EnrolmentIntentRequirementResponsePagedListEntity
    from kota_sdk.entity.event_entity import EventEntity
    from kota_sdk.entity.group_entity import GroupEntity
    from kota_sdk.entity.group_employee_entity import GroupEmployeeEntity
    from kota_sdk.entity.group_employee_response_paged_list_entity import GroupEmployeeResponsePagedListEntity
    from kota_sdk.entity.group_policy_entity import GroupPolicyEntity
    from kota_sdk.entity.group_policy_intent_entity import GroupPolicyIntentEntity
    from kota_sdk.entity.group_policy_intent_requirement_response_paged_list_entity import GroupPolicyIntentRequirementResponsePagedListEntity
    from kota_sdk.entity.group_quote_entity import GroupQuoteEntity
    from kota_sdk.entity.group_quote_intent_entity import GroupQuoteIntentEntity
    from kota_sdk.entity.group_quote_intent_requirement_response_paged_list_entity import GroupQuoteIntentRequirementResponsePagedListEntity
    from kota_sdk.entity.plan_entity import PlanEntity
    from kota_sdk.entity.policy_entity import PolicyEntity
    from kota_sdk.entity.policy_amendment_intent_entity import PolicyAmendmentIntentEntity
    from kota_sdk.entity.policy_import_intent_entity import PolicyImportIntentEntity
    from kota_sdk.entity.provider_entity import ProviderEntity
    from kota_sdk.entity.replay_entity import ReplayEntity
    from kota_sdk.entity.webhook_endpoint_entity import WebhookEndpointEntity
    from kota_sdk.entity.webhook_endpoint_response_paged_list_entity import WebhookEndpointResponsePagedListEntity
