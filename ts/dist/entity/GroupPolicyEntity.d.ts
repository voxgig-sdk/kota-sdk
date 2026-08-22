import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { GroupPolicy, GroupPolicyLoadMatch, GroupPolicyListMatch } from '../KotaTypes';
declare class GroupPolicyEntity extends KotaEntityBase<GroupPolicy> {
    constructor(client: KotaSDK, entopts: any);
    make(this: GroupPolicyEntity): GroupPolicyEntity;
    load(this: any, reqmatch?: GroupPolicyLoadMatch, ctrl?: Control): Promise<GroupPolicyEntity>;
    list(this: any, reqmatch?: GroupPolicyListMatch, ctrl?: Control): Promise<GroupPolicyEntity[]>;
}
export { GroupPolicyEntity };
