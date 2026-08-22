import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { PolicyAmendmentIntent, PolicyAmendmentIntentLoadMatch, PolicyAmendmentIntentListMatch, PolicyAmendmentIntentCreateData } from '../KotaTypes';
declare class PolicyAmendmentIntentEntity extends KotaEntityBase<PolicyAmendmentIntent> {
    constructor(client: KotaSDK, entopts: any);
    make(this: PolicyAmendmentIntentEntity): PolicyAmendmentIntentEntity;
    load(this: any, reqmatch?: PolicyAmendmentIntentLoadMatch, ctrl?: Control): Promise<PolicyAmendmentIntentEntity>;
    list(this: any, reqmatch?: PolicyAmendmentIntentListMatch, ctrl?: Control): Promise<PolicyAmendmentIntentEntity[]>;
    create(this: any, reqdata?: PolicyAmendmentIntentCreateData, ctrl?: Control): Promise<PolicyAmendmentIntentEntity>;
}
export { PolicyAmendmentIntentEntity };
