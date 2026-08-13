import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { GroupPolicyIntent, GroupPolicyIntentLoadMatch, GroupPolicyIntentListMatch, GroupPolicyIntentCreateData } from '../KotaTypes';
declare class GroupPolicyIntentEntity extends KotaEntityBase<GroupPolicyIntent> {
    constructor(client: KotaSDK, entopts: any);
    make(this: GroupPolicyIntentEntity): GroupPolicyIntentEntity;
    load(this: any, reqmatch?: GroupPolicyIntentLoadMatch, ctrl?: Control): Promise<GroupPolicyIntent>;
    list(this: any, reqmatch?: GroupPolicyIntentListMatch, ctrl?: Control): Promise<GroupPolicyIntent[]>;
    create(this: any, reqdata?: GroupPolicyIntentCreateData, ctrl?: Control): Promise<GroupPolicyIntent>;
}
export { GroupPolicyIntentEntity };
