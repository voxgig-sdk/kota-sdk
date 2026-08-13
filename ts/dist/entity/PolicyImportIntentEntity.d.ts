import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { PolicyImportIntent, PolicyImportIntentLoadMatch, PolicyImportIntentListMatch, PolicyImportIntentCreateData } from '../KotaTypes';
declare class PolicyImportIntentEntity extends KotaEntityBase<PolicyImportIntent> {
    constructor(client: KotaSDK, entopts: any);
    make(this: PolicyImportIntentEntity): PolicyImportIntentEntity;
    load(this: any, reqmatch?: PolicyImportIntentLoadMatch, ctrl?: Control): Promise<PolicyImportIntent>;
    list(this: any, reqmatch?: PolicyImportIntentListMatch, ctrl?: Control): Promise<PolicyImportIntent[]>;
    create(this: any, reqdata?: PolicyImportIntentCreateData, ctrl?: Control): Promise<PolicyImportIntent>;
}
export { PolicyImportIntentEntity };
