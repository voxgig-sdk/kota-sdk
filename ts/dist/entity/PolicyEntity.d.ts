import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { Policy, PolicyLoadMatch, PolicyListMatch } from '../KotaTypes';
declare class PolicyEntity extends KotaEntityBase<Policy> {
    constructor(client: KotaSDK, entopts: any);
    make(this: PolicyEntity): PolicyEntity;
    load(this: any, reqmatch?: PolicyLoadMatch, ctrl?: Control): Promise<PolicyEntity>;
    list(this: any, reqmatch?: PolicyListMatch, ctrl?: Control): Promise<PolicyEntity[]>;
}
export { PolicyEntity };
