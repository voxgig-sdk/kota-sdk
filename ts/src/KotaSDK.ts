// Kota Ts SDK

import { AssociatedPersonEntity } from './entity/AssociatedPersonEntity'
import { AssociatedPersonEligibilityResponsePagedListEntity } from './entity/AssociatedPersonEligibilityResponsePagedListEntity'
import { ContributionReportEntity } from './entity/ContributionReportEntity'
import { ContributionReportEmployeeBreakdownEntity } from './entity/ContributionReportEmployeeBreakdownEntity'
import { ContributionReportEmployeeBreakdownResponsePagedListEntity } from './entity/ContributionReportEmployeeBreakdownResponsePagedListEntity'
import { CreateHostedSessionTokenEntity } from './entity/CreateHostedSessionTokenEntity'
import { CreateSessionTokenEntity } from './entity/CreateSessionTokenEntity'
import { DependentEntity } from './entity/DependentEntity'
import { DependentsManagementIntentEntity } from './entity/DependentsManagementIntentEntity'
import { EligibilityCheckEntity } from './entity/EligibilityCheckEntity'
import { EmployeeEntity } from './entity/EmployeeEntity'
import { EmployeeHealthInsuranceOfferEntity } from './entity/EmployeeHealthInsuranceOfferEntity'
import { EmployeeHealthInsuranceOfferResponsePagedListEntity } from './entity/EmployeeHealthInsuranceOfferResponsePagedListEntity'
import { EmployeeHealthInsurancePolicyEntity } from './entity/EmployeeHealthInsurancePolicyEntity'
import { EmployeeHealthInsurancePolicyResponsePagedListEntity } from './entity/EmployeeHealthInsurancePolicyResponsePagedListEntity'
import { EmployerEntity } from './entity/EmployerEntity'
import { EmployerHealthInsurancePolicyEntity } from './entity/EmployerHealthInsurancePolicyEntity'
import { EmployerHealthInsurancePolicyResponsePagedListEntity } from './entity/EmployerHealthInsurancePolicyResponsePagedListEntity'
import { EmployerHealthInsuranceQuoteEntity } from './entity/EmployerHealthInsuranceQuoteEntity'
import { EmployerHealthInsuranceQuoteResponsePagedListEntity } from './entity/EmployerHealthInsuranceQuoteResponsePagedListEntity'
import { EnrolmentIntentEntity } from './entity/EnrolmentIntentEntity'
import { EnrolmentIntentRequirementResponsePagedListEntity } from './entity/EnrolmentIntentRequirementResponsePagedListEntity'
import { EventEntity } from './entity/EventEntity'
import { GroupEntity } from './entity/GroupEntity'
import { GroupEmployeeEntity } from './entity/GroupEmployeeEntity'
import { GroupEmployeeResponsePagedListEntity } from './entity/GroupEmployeeResponsePagedListEntity'
import { GroupPolicyEntity } from './entity/GroupPolicyEntity'
import { GroupPolicyIntentEntity } from './entity/GroupPolicyIntentEntity'
import { GroupPolicyIntentRequirementResponsePagedListEntity } from './entity/GroupPolicyIntentRequirementResponsePagedListEntity'
import { GroupQuoteEntity } from './entity/GroupQuoteEntity'
import { GroupQuoteIntentEntity } from './entity/GroupQuoteIntentEntity'
import { GroupQuoteIntentRequirementResponsePagedListEntity } from './entity/GroupQuoteIntentRequirementResponsePagedListEntity'
import { PlanEntity } from './entity/PlanEntity'
import { PolicyEntity } from './entity/PolicyEntity'
import { PolicyAmendmentIntentEntity } from './entity/PolicyAmendmentIntentEntity'
import { PolicyImportIntentEntity } from './entity/PolicyImportIntentEntity'
import { ProviderEntity } from './entity/ProviderEntity'
import { ReplayEntity } from './entity/ReplayEntity'
import { WebhookEndpointEntity } from './entity/WebhookEndpointEntity'
import { WebhookEndpointResponsePagedListEntity } from './entity/WebhookEndpointResponsePagedListEntity'

export type * from './KotaTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { KotaEntityBase } from './KotaEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class KotaSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
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
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  async direct(fetchargs?: any) {
    const utility = this._utility
    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  // Entity access: `client.AssociatedPerson().list()` / `client.AssociatedPerson().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssociatedPerson(entopts?: Record<string, any>) {
    const self = this
    return new AssociatedPersonEntity(self, entopts)
  }


  // Entity access: `client.AssociatedPersonEligibilityResponsePagedList().list()` / `client.AssociatedPersonEligibilityResponsePagedList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AssociatedPersonEligibilityResponsePagedList(entopts?: Record<string, any>) {
    const self = this
    return new AssociatedPersonEligibilityResponsePagedListEntity(self, entopts)
  }


  // Entity access: `client.ContributionReport().list()` / `client.ContributionReport().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContributionReport(entopts?: Record<string, any>) {
    const self = this
    return new ContributionReportEntity(self, entopts)
  }


  // Entity access: `client.ContributionReportEmployeeBreakdown().list()` / `client.ContributionReportEmployeeBreakdown().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContributionReportEmployeeBreakdown(entopts?: Record<string, any>) {
    const self = this
    return new ContributionReportEmployeeBreakdownEntity(self, entopts)
  }


  // Entity access: `client.ContributionReportEmployeeBreakdownResponsePagedList().list()` / `client.ContributionReportEmployeeBreakdownResponsePagedList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ContributionReportEmployeeBreakdownResponsePagedList(entopts?: Record<string, any>) {
    const self = this
    return new ContributionReportEmployeeBreakdownResponsePagedListEntity(self, entopts)
  }


  // Entity access: `client.CreateHostedSessionToken().list()` / `client.CreateHostedSessionToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateHostedSessionToken(entopts?: Record<string, any>) {
    const self = this
    return new CreateHostedSessionTokenEntity(self, entopts)
  }


  // Entity access: `client.CreateSessionToken().list()` / `client.CreateSessionToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  CreateSessionToken(entopts?: Record<string, any>) {
    const self = this
    return new CreateSessionTokenEntity(self, entopts)
  }


  // Entity access: `client.Dependent().list()` / `client.Dependent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Dependent(entopts?: Record<string, any>) {
    const self = this
    return new DependentEntity(self, entopts)
  }


  // Entity access: `client.DependentsManagementIntent().list()` / `client.DependentsManagementIntent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DependentsManagementIntent(entopts?: Record<string, any>) {
    const self = this
    return new DependentsManagementIntentEntity(self, entopts)
  }


  // Entity access: `client.EligibilityCheck().list()` / `client.EligibilityCheck().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EligibilityCheck(entopts?: Record<string, any>) {
    const self = this
    return new EligibilityCheckEntity(self, entopts)
  }


  // Entity access: `client.Employee().list()` / `client.Employee().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Employee(entopts?: Record<string, any>) {
    const self = this
    return new EmployeeEntity(self, entopts)
  }


  // Entity access: `client.EmployeeHealthInsuranceOffer().list()` / `client.EmployeeHealthInsuranceOffer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmployeeHealthInsuranceOffer(entopts?: Record<string, any>) {
    const self = this
    return new EmployeeHealthInsuranceOfferEntity(self, entopts)
  }


  // Entity access: `client.EmployeeHealthInsuranceOfferResponsePagedList().list()` / `client.EmployeeHealthInsuranceOfferResponsePagedList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmployeeHealthInsuranceOfferResponsePagedList(entopts?: Record<string, any>) {
    const self = this
    return new EmployeeHealthInsuranceOfferResponsePagedListEntity(self, entopts)
  }


  // Entity access: `client.EmployeeHealthInsurancePolicy().list()` / `client.EmployeeHealthInsurancePolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmployeeHealthInsurancePolicy(entopts?: Record<string, any>) {
    const self = this
    return new EmployeeHealthInsurancePolicyEntity(self, entopts)
  }


  // Entity access: `client.EmployeeHealthInsurancePolicyResponsePagedList().list()` / `client.EmployeeHealthInsurancePolicyResponsePagedList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmployeeHealthInsurancePolicyResponsePagedList(entopts?: Record<string, any>) {
    const self = this
    return new EmployeeHealthInsurancePolicyResponsePagedListEntity(self, entopts)
  }


  // Entity access: `client.Employer().list()` / `client.Employer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Employer(entopts?: Record<string, any>) {
    const self = this
    return new EmployerEntity(self, entopts)
  }


  // Entity access: `client.EmployerHealthInsurancePolicy().list()` / `client.EmployerHealthInsurancePolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmployerHealthInsurancePolicy(entopts?: Record<string, any>) {
    const self = this
    return new EmployerHealthInsurancePolicyEntity(self, entopts)
  }


  // Entity access: `client.EmployerHealthInsurancePolicyResponsePagedList().list()` / `client.EmployerHealthInsurancePolicyResponsePagedList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmployerHealthInsurancePolicyResponsePagedList(entopts?: Record<string, any>) {
    const self = this
    return new EmployerHealthInsurancePolicyResponsePagedListEntity(self, entopts)
  }


  // Entity access: `client.EmployerHealthInsuranceQuote().list()` / `client.EmployerHealthInsuranceQuote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmployerHealthInsuranceQuote(entopts?: Record<string, any>) {
    const self = this
    return new EmployerHealthInsuranceQuoteEntity(self, entopts)
  }


  // Entity access: `client.EmployerHealthInsuranceQuoteResponsePagedList().list()` / `client.EmployerHealthInsuranceQuoteResponsePagedList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EmployerHealthInsuranceQuoteResponsePagedList(entopts?: Record<string, any>) {
    const self = this
    return new EmployerHealthInsuranceQuoteResponsePagedListEntity(self, entopts)
  }


  // Entity access: `client.EnrolmentIntent().list()` / `client.EnrolmentIntent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnrolmentIntent(entopts?: Record<string, any>) {
    const self = this
    return new EnrolmentIntentEntity(self, entopts)
  }


  // Entity access: `client.EnrolmentIntentRequirementResponsePagedList().list()` / `client.EnrolmentIntentRequirementResponsePagedList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  EnrolmentIntentRequirementResponsePagedList(entopts?: Record<string, any>) {
    const self = this
    return new EnrolmentIntentRequirementResponsePagedListEntity(self, entopts)
  }


  // Entity access: `client.Event().list()` / `client.Event().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Event(entopts?: Record<string, any>) {
    const self = this
    return new EventEntity(self, entopts)
  }


  // Entity access: `client.Group().list()` / `client.Group().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Group(entopts?: Record<string, any>) {
    const self = this
    return new GroupEntity(self, entopts)
  }


  // Entity access: `client.GroupEmployee().list()` / `client.GroupEmployee().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GroupEmployee(entopts?: Record<string, any>) {
    const self = this
    return new GroupEmployeeEntity(self, entopts)
  }


  // Entity access: `client.GroupEmployeeResponsePagedList().list()` / `client.GroupEmployeeResponsePagedList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GroupEmployeeResponsePagedList(entopts?: Record<string, any>) {
    const self = this
    return new GroupEmployeeResponsePagedListEntity(self, entopts)
  }


  // Entity access: `client.GroupPolicy().list()` / `client.GroupPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GroupPolicy(entopts?: Record<string, any>) {
    const self = this
    return new GroupPolicyEntity(self, entopts)
  }


  // Entity access: `client.GroupPolicyIntent().list()` / `client.GroupPolicyIntent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GroupPolicyIntent(entopts?: Record<string, any>) {
    const self = this
    return new GroupPolicyIntentEntity(self, entopts)
  }


  // Entity access: `client.GroupPolicyIntentRequirementResponsePagedList().list()` / `client.GroupPolicyIntentRequirementResponsePagedList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GroupPolicyIntentRequirementResponsePagedList(entopts?: Record<string, any>) {
    const self = this
    return new GroupPolicyIntentRequirementResponsePagedListEntity(self, entopts)
  }


  // Entity access: `client.GroupQuote().list()` / `client.GroupQuote().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GroupQuote(entopts?: Record<string, any>) {
    const self = this
    return new GroupQuoteEntity(self, entopts)
  }


  // Entity access: `client.GroupQuoteIntent().list()` / `client.GroupQuoteIntent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GroupQuoteIntent(entopts?: Record<string, any>) {
    const self = this
    return new GroupQuoteIntentEntity(self, entopts)
  }


  // Entity access: `client.GroupQuoteIntentRequirementResponsePagedList().list()` / `client.GroupQuoteIntentRequirementResponsePagedList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  GroupQuoteIntentRequirementResponsePagedList(entopts?: Record<string, any>) {
    const self = this
    return new GroupQuoteIntentRequirementResponsePagedListEntity(self, entopts)
  }


  // Entity access: `client.Plan().list()` / `client.Plan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Plan(entopts?: Record<string, any>) {
    const self = this
    return new PlanEntity(self, entopts)
  }


  // Entity access: `client.Policy().list()` / `client.Policy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Policy(entopts?: Record<string, any>) {
    const self = this
    return new PolicyEntity(self, entopts)
  }


  // Entity access: `client.PolicyAmendmentIntent().list()` / `client.PolicyAmendmentIntent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PolicyAmendmentIntent(entopts?: Record<string, any>) {
    const self = this
    return new PolicyAmendmentIntentEntity(self, entopts)
  }


  // Entity access: `client.PolicyImportIntent().list()` / `client.PolicyImportIntent().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PolicyImportIntent(entopts?: Record<string, any>) {
    const self = this
    return new PolicyImportIntentEntity(self, entopts)
  }


  // Entity access: `client.Provider().list()` / `client.Provider().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Provider(entopts?: Record<string, any>) {
    const self = this
    return new ProviderEntity(self, entopts)
  }


  // Entity access: `client.Replay().list()` / `client.Replay().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Replay(entopts?: Record<string, any>) {
    const self = this
    return new ReplayEntity(self, entopts)
  }


  // Entity access: `client.WebhookEndpoint().list()` / `client.WebhookEndpoint().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WebhookEndpoint(entopts?: Record<string, any>) {
    const self = this
    return new WebhookEndpointEntity(self, entopts)
  }


  // Entity access: `client.WebhookEndpointResponsePagedList().list()` / `client.WebhookEndpointResponsePagedList().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  WebhookEndpointResponsePagedList(entopts?: Record<string, any>) {
    const self = this
    return new WebhookEndpointResponsePagedListEntity(self, entopts)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new KotaSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return KotaSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Kota' }
  }

  toString() {
    return 'Kota ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = KotaSDK


export {
  stdutil,
  config,

  BaseFeature,
  KotaEntityBase,

  KotaSDK,
  SDK,
}


