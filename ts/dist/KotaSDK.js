"use strict";
// Kota Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.KotaSDK = exports.KotaEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const AssociatedPersonEntity_1 = require("./entity/AssociatedPersonEntity");
const AssociatedPersonEligibilityResponsePagedListEntity_1 = require("./entity/AssociatedPersonEligibilityResponsePagedListEntity");
const ContributionReportEntity_1 = require("./entity/ContributionReportEntity");
const ContributionReportEmployeeBreakdownEntity_1 = require("./entity/ContributionReportEmployeeBreakdownEntity");
const ContributionReportEmployeeBreakdownResponsePagedListEntity_1 = require("./entity/ContributionReportEmployeeBreakdownResponsePagedListEntity");
const CreateHostedSessionTokenEntity_1 = require("./entity/CreateHostedSessionTokenEntity");
const CreateSessionTokenEntity_1 = require("./entity/CreateSessionTokenEntity");
const DependentEntity_1 = require("./entity/DependentEntity");
const DependentsManagementIntentEntity_1 = require("./entity/DependentsManagementIntentEntity");
const EligibilityCheckEntity_1 = require("./entity/EligibilityCheckEntity");
const EmployeeEntity_1 = require("./entity/EmployeeEntity");
const EmployeeHealthInsuranceOfferEntity_1 = require("./entity/EmployeeHealthInsuranceOfferEntity");
const EmployeeHealthInsuranceOfferResponsePagedListEntity_1 = require("./entity/EmployeeHealthInsuranceOfferResponsePagedListEntity");
const EmployeeHealthInsurancePolicyEntity_1 = require("./entity/EmployeeHealthInsurancePolicyEntity");
const EmployeeHealthInsurancePolicyResponsePagedListEntity_1 = require("./entity/EmployeeHealthInsurancePolicyResponsePagedListEntity");
const EmployerEntity_1 = require("./entity/EmployerEntity");
const EmployerHealthInsurancePolicyEntity_1 = require("./entity/EmployerHealthInsurancePolicyEntity");
const EmployerHealthInsurancePolicyResponsePagedListEntity_1 = require("./entity/EmployerHealthInsurancePolicyResponsePagedListEntity");
const EmployerHealthInsuranceQuoteEntity_1 = require("./entity/EmployerHealthInsuranceQuoteEntity");
const EmployerHealthInsuranceQuoteResponsePagedListEntity_1 = require("./entity/EmployerHealthInsuranceQuoteResponsePagedListEntity");
const EnrolmentIntentEntity_1 = require("./entity/EnrolmentIntentEntity");
const EnrolmentIntentRequirementResponsePagedListEntity_1 = require("./entity/EnrolmentIntentRequirementResponsePagedListEntity");
const EventEntity_1 = require("./entity/EventEntity");
const GroupEntity_1 = require("./entity/GroupEntity");
const GroupEmployeeEntity_1 = require("./entity/GroupEmployeeEntity");
const GroupEmployeeResponsePagedListEntity_1 = require("./entity/GroupEmployeeResponsePagedListEntity");
const GroupPolicyEntity_1 = require("./entity/GroupPolicyEntity");
const GroupPolicyIntentEntity_1 = require("./entity/GroupPolicyIntentEntity");
const GroupPolicyIntentRequirementResponsePagedListEntity_1 = require("./entity/GroupPolicyIntentRequirementResponsePagedListEntity");
const GroupQuoteEntity_1 = require("./entity/GroupQuoteEntity");
const GroupQuoteIntentEntity_1 = require("./entity/GroupQuoteIntentEntity");
const GroupQuoteIntentRequirementResponsePagedListEntity_1 = require("./entity/GroupQuoteIntentRequirementResponsePagedListEntity");
const PlanEntity_1 = require("./entity/PlanEntity");
const PolicyEntity_1 = require("./entity/PolicyEntity");
const PolicyAmendmentIntentEntity_1 = require("./entity/PolicyAmendmentIntentEntity");
const PolicyImportIntentEntity_1 = require("./entity/PolicyImportIntentEntity");
const ProviderEntity_1 = require("./entity/ProviderEntity");
const ReplayEntity_1 = require("./entity/ReplayEntity");
const WebhookEndpointEntity_1 = require("./entity/WebhookEndpointEntity");
const WebhookEndpointResponsePagedListEntity_1 = require("./entity/WebhookEndpointResponsePagedListEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const KotaEntityBase_1 = require("./KotaEntityBase");
Object.defineProperty(exports, "KotaEntityBase", { enumerable: true, get: function () { return KotaEntityBase_1.KotaEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class KotaSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
        // Build spec directly from SDK options + user-provided fetch args.
        const spec = {
            base: options.base,
            prefix: options.prefix,
            suffix: options.suffix,
            path: fetchargs.path || '',
            method: fetchargs.method || 'GET',
            params: fetchargs.params || {},
            query: fetchargs.query || {},
            headers: prepareHeaders(ctx),
            body: fetchargs.body,
            step: 'start',
        };
        ctx.spec = spec;
        // Merge user-provided headers over SDK defaults.
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        // Apply SDK auth (apikey, auth prefix, etc.)
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
    }
    // Raw endpoint access is operator-controllable, like every entity op.
    // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    // either one reaches the same endpoint.
    async direct(fetchargs) {
        if (!this._options.allow.op.includes('direct')) {
            return {
                ok: false,
                err: new Error('KotaSDK: direct: operation not allowed by' +
                    ' SDK option allow.op value: "' + this._options.allow.op + '"'),
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    // Raw GraphQL access: the pressure valve that makes the generated
    // surface's deliberate omissions (per-call selection sets, typed filter
    // builders, batching, subscriptions) livable — the whole schema stays
    // reachable.
    //
    // Thin wrapper over the same prepare/fetch path `direct` uses, with the
    // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
    // HTTP 200 as a top-level `errors` array, so status alone would report a
    // failed query as ok.
    //
    // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
    // ratelimit or paging features apply.
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('KotaSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('KotaSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.AssociatedPerson().list()` / `client.AssociatedPerson().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssociatedPerson(entopts) {
        const self = this;
        return new AssociatedPersonEntity_1.AssociatedPersonEntity(self, entopts);
    }
    // Entity access: `client.AssociatedPersonEligibilityResponsePagedList().list()` / `client.AssociatedPersonEligibilityResponsePagedList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    AssociatedPersonEligibilityResponsePagedList(entopts) {
        const self = this;
        return new AssociatedPersonEligibilityResponsePagedListEntity_1.AssociatedPersonEligibilityResponsePagedListEntity(self, entopts);
    }
    // Entity access: `client.ContributionReport().list()` / `client.ContributionReport().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContributionReport(entopts) {
        const self = this;
        return new ContributionReportEntity_1.ContributionReportEntity(self, entopts);
    }
    // Entity access: `client.ContributionReportEmployeeBreakdown().list()` / `client.ContributionReportEmployeeBreakdown().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContributionReportEmployeeBreakdown(entopts) {
        const self = this;
        return new ContributionReportEmployeeBreakdownEntity_1.ContributionReportEmployeeBreakdownEntity(self, entopts);
    }
    // Entity access: `client.ContributionReportEmployeeBreakdownResponsePagedList().list()` / `client.ContributionReportEmployeeBreakdownResponsePagedList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ContributionReportEmployeeBreakdownResponsePagedList(entopts) {
        const self = this;
        return new ContributionReportEmployeeBreakdownResponsePagedListEntity_1.ContributionReportEmployeeBreakdownResponsePagedListEntity(self, entopts);
    }
    // Entity access: `client.CreateHostedSessionToken().list()` / `client.CreateHostedSessionToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateHostedSessionToken(entopts) {
        const self = this;
        return new CreateHostedSessionTokenEntity_1.CreateHostedSessionTokenEntity(self, entopts);
    }
    // Entity access: `client.CreateSessionToken().list()` / `client.CreateSessionToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    CreateSessionToken(entopts) {
        const self = this;
        return new CreateSessionTokenEntity_1.CreateSessionTokenEntity(self, entopts);
    }
    // Entity access: `client.Dependent().list()` / `client.Dependent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Dependent(entopts) {
        const self = this;
        return new DependentEntity_1.DependentEntity(self, entopts);
    }
    // Entity access: `client.DependentsManagementIntent().list()` / `client.DependentsManagementIntent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DependentsManagementIntent(entopts) {
        const self = this;
        return new DependentsManagementIntentEntity_1.DependentsManagementIntentEntity(self, entopts);
    }
    // Entity access: `client.EligibilityCheck().list()` / `client.EligibilityCheck().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EligibilityCheck(entopts) {
        const self = this;
        return new EligibilityCheckEntity_1.EligibilityCheckEntity(self, entopts);
    }
    // Entity access: `client.Employee().list()` / `client.Employee().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Employee(entopts) {
        const self = this;
        return new EmployeeEntity_1.EmployeeEntity(self, entopts);
    }
    // Entity access: `client.EmployeeHealthInsuranceOffer().list()` / `client.EmployeeHealthInsuranceOffer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmployeeHealthInsuranceOffer(entopts) {
        const self = this;
        return new EmployeeHealthInsuranceOfferEntity_1.EmployeeHealthInsuranceOfferEntity(self, entopts);
    }
    // Entity access: `client.EmployeeHealthInsuranceOfferResponsePagedList().list()` / `client.EmployeeHealthInsuranceOfferResponsePagedList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmployeeHealthInsuranceOfferResponsePagedList(entopts) {
        const self = this;
        return new EmployeeHealthInsuranceOfferResponsePagedListEntity_1.EmployeeHealthInsuranceOfferResponsePagedListEntity(self, entopts);
    }
    // Entity access: `client.EmployeeHealthInsurancePolicy().list()` / `client.EmployeeHealthInsurancePolicy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmployeeHealthInsurancePolicy(entopts) {
        const self = this;
        return new EmployeeHealthInsurancePolicyEntity_1.EmployeeHealthInsurancePolicyEntity(self, entopts);
    }
    // Entity access: `client.EmployeeHealthInsurancePolicyResponsePagedList().list()` / `client.EmployeeHealthInsurancePolicyResponsePagedList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmployeeHealthInsurancePolicyResponsePagedList(entopts) {
        const self = this;
        return new EmployeeHealthInsurancePolicyResponsePagedListEntity_1.EmployeeHealthInsurancePolicyResponsePagedListEntity(self, entopts);
    }
    // Entity access: `client.Employer().list()` / `client.Employer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Employer(entopts) {
        const self = this;
        return new EmployerEntity_1.EmployerEntity(self, entopts);
    }
    // Entity access: `client.EmployerHealthInsurancePolicy().list()` / `client.EmployerHealthInsurancePolicy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmployerHealthInsurancePolicy(entopts) {
        const self = this;
        return new EmployerHealthInsurancePolicyEntity_1.EmployerHealthInsurancePolicyEntity(self, entopts);
    }
    // Entity access: `client.EmployerHealthInsurancePolicyResponsePagedList().list()` / `client.EmployerHealthInsurancePolicyResponsePagedList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmployerHealthInsurancePolicyResponsePagedList(entopts) {
        const self = this;
        return new EmployerHealthInsurancePolicyResponsePagedListEntity_1.EmployerHealthInsurancePolicyResponsePagedListEntity(self, entopts);
    }
    // Entity access: `client.EmployerHealthInsuranceQuote().list()` / `client.EmployerHealthInsuranceQuote().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmployerHealthInsuranceQuote(entopts) {
        const self = this;
        return new EmployerHealthInsuranceQuoteEntity_1.EmployerHealthInsuranceQuoteEntity(self, entopts);
    }
    // Entity access: `client.EmployerHealthInsuranceQuoteResponsePagedList().list()` / `client.EmployerHealthInsuranceQuoteResponsePagedList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EmployerHealthInsuranceQuoteResponsePagedList(entopts) {
        const self = this;
        return new EmployerHealthInsuranceQuoteResponsePagedListEntity_1.EmployerHealthInsuranceQuoteResponsePagedListEntity(self, entopts);
    }
    // Entity access: `client.EnrolmentIntent().list()` / `client.EnrolmentIntent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EnrolmentIntent(entopts) {
        const self = this;
        return new EnrolmentIntentEntity_1.EnrolmentIntentEntity(self, entopts);
    }
    // Entity access: `client.EnrolmentIntentRequirementResponsePagedList().list()` / `client.EnrolmentIntentRequirementResponsePagedList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    EnrolmentIntentRequirementResponsePagedList(entopts) {
        const self = this;
        return new EnrolmentIntentRequirementResponsePagedListEntity_1.EnrolmentIntentRequirementResponsePagedListEntity(self, entopts);
    }
    // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Event(entopts) {
        const self = this;
        return new EventEntity_1.EventEntity(self, entopts);
    }
    // Entity access: `client.Group().list()` / `client.Group().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Group(entopts) {
        const self = this;
        return new GroupEntity_1.GroupEntity(self, entopts);
    }
    // Entity access: `client.GroupEmployee().list()` / `client.GroupEmployee().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GroupEmployee(entopts) {
        const self = this;
        return new GroupEmployeeEntity_1.GroupEmployeeEntity(self, entopts);
    }
    // Entity access: `client.GroupEmployeeResponsePagedList().list()` / `client.GroupEmployeeResponsePagedList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GroupEmployeeResponsePagedList(entopts) {
        const self = this;
        return new GroupEmployeeResponsePagedListEntity_1.GroupEmployeeResponsePagedListEntity(self, entopts);
    }
    // Entity access: `client.GroupPolicy().list()` / `client.GroupPolicy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GroupPolicy(entopts) {
        const self = this;
        return new GroupPolicyEntity_1.GroupPolicyEntity(self, entopts);
    }
    // Entity access: `client.GroupPolicyIntent().list()` / `client.GroupPolicyIntent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GroupPolicyIntent(entopts) {
        const self = this;
        return new GroupPolicyIntentEntity_1.GroupPolicyIntentEntity(self, entopts);
    }
    // Entity access: `client.GroupPolicyIntentRequirementResponsePagedList().list()` / `client.GroupPolicyIntentRequirementResponsePagedList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GroupPolicyIntentRequirementResponsePagedList(entopts) {
        const self = this;
        return new GroupPolicyIntentRequirementResponsePagedListEntity_1.GroupPolicyIntentRequirementResponsePagedListEntity(self, entopts);
    }
    // Entity access: `client.GroupQuote().list()` / `client.GroupQuote().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GroupQuote(entopts) {
        const self = this;
        return new GroupQuoteEntity_1.GroupQuoteEntity(self, entopts);
    }
    // Entity access: `client.GroupQuoteIntent().list()` / `client.GroupQuoteIntent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GroupQuoteIntent(entopts) {
        const self = this;
        return new GroupQuoteIntentEntity_1.GroupQuoteIntentEntity(self, entopts);
    }
    // Entity access: `client.GroupQuoteIntentRequirementResponsePagedList().list()` / `client.GroupQuoteIntentRequirementResponsePagedList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    GroupQuoteIntentRequirementResponsePagedList(entopts) {
        const self = this;
        return new GroupQuoteIntentRequirementResponsePagedListEntity_1.GroupQuoteIntentRequirementResponsePagedListEntity(self, entopts);
    }
    // Entity access: `client.Plan().list()` / `client.Plan().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Plan(entopts) {
        const self = this;
        return new PlanEntity_1.PlanEntity(self, entopts);
    }
    // Entity access: `client.Policy().list()` / `client.Policy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Policy(entopts) {
        const self = this;
        return new PolicyEntity_1.PolicyEntity(self, entopts);
    }
    // Entity access: `client.PolicyAmendmentIntent().list()` / `client.PolicyAmendmentIntent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PolicyAmendmentIntent(entopts) {
        const self = this;
        return new PolicyAmendmentIntentEntity_1.PolicyAmendmentIntentEntity(self, entopts);
    }
    // Entity access: `client.PolicyImportIntent().list()` / `client.PolicyImportIntent().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PolicyImportIntent(entopts) {
        const self = this;
        return new PolicyImportIntentEntity_1.PolicyImportIntentEntity(self, entopts);
    }
    // Entity access: `client.Provider().list()` / `client.Provider().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Provider(entopts) {
        const self = this;
        return new ProviderEntity_1.ProviderEntity(self, entopts);
    }
    // Entity access: `client.Replay().list()` / `client.Replay().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Replay(entopts) {
        const self = this;
        return new ReplayEntity_1.ReplayEntity(self, entopts);
    }
    // Entity access: `client.WebhookEndpoint().list()` / `client.WebhookEndpoint().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WebhookEndpoint(entopts) {
        const self = this;
        return new WebhookEndpointEntity_1.WebhookEndpointEntity(self, entopts);
    }
    // Entity access: `client.WebhookEndpointResponsePagedList().list()` / `client.WebhookEndpointResponsePagedList().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    WebhookEndpointResponsePagedList(entopts) {
        const self = this;
        return new WebhookEndpointResponsePagedListEntity_1.WebhookEndpointResponsePagedListEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new KotaSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return KotaSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Kota' };
    }
    toString() {
        return 'Kota ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.KotaSDK = KotaSDK;
const SDK = KotaSDK;
exports.SDK = SDK;
//# sourceMappingURL=KotaSDK.js.map