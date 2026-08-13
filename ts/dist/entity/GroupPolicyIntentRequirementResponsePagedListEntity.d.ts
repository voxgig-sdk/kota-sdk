import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { GroupPolicyIntentRequirementResponsePagedList, GroupPolicyIntentRequirementResponsePagedListListMatch } from '../KotaTypes';
declare class GroupPolicyIntentRequirementResponsePagedListEntity extends KotaEntityBase<GroupPolicyIntentRequirementResponsePagedList> {
    constructor(client: KotaSDK, entopts: any);
    make(this: GroupPolicyIntentRequirementResponsePagedListEntity): GroupPolicyIntentRequirementResponsePagedListEntity;
    list(this: any, reqmatch?: GroupPolicyIntentRequirementResponsePagedListListMatch, ctrl?: Control): Promise<GroupPolicyIntentRequirementResponsePagedList[]>;
}
export { GroupPolicyIntentRequirementResponsePagedListEntity };
