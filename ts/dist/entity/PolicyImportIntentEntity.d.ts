import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { PolicyImportIntent, PolicyImportIntentLoadMatch, PolicyImportIntentListMatch, PolicyImportIntentCreateData } from '../KotaTypes';
declare class PolicyImportIntentEntity extends KotaEntityBase<PolicyImportIntent> {
    constructor(client: KotaSDK, entopts: any);
    make(this: PolicyImportIntentEntity): PolicyImportIntentEntity;
    load(this: any, reqmatch?: PolicyImportIntentLoadMatch, ctrl?: Control): Promise<PolicyImportIntentEntity>;
    list(this: any, reqmatch?: PolicyImportIntentListMatch, ctrl?: Control): Promise<PolicyImportIntentEntity[]>;
    create(this: any, reqdata?: PolicyImportIntentCreateData, ctrl?: Control): Promise<PolicyImportIntentEntity>;
}
export { PolicyImportIntentEntity };
