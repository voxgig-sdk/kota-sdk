import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { DependentsManagementIntent, DependentsManagementIntentLoadMatch, DependentsManagementIntentCreateData } from '../KotaTypes';
declare class DependentsManagementIntentEntity extends KotaEntityBase<DependentsManagementIntent> {
    constructor(client: KotaSDK, entopts: any);
    make(this: DependentsManagementIntentEntity): DependentsManagementIntentEntity;
    load(this: any, reqmatch?: DependentsManagementIntentLoadMatch, ctrl?: Control): Promise<DependentsManagementIntent>;
    create(this: any, reqdata?: DependentsManagementIntentCreateData, ctrl?: Control): Promise<DependentsManagementIntent>;
}
export { DependentsManagementIntentEntity };
