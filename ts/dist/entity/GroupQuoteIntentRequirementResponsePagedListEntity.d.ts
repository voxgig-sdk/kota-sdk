import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { GroupQuoteIntentRequirementResponsePagedList, GroupQuoteIntentRequirementResponsePagedListListMatch } from '../KotaTypes';
declare class GroupQuoteIntentRequirementResponsePagedListEntity extends KotaEntityBase<GroupQuoteIntentRequirementResponsePagedList> {
    constructor(client: KotaSDK, entopts: any);
    make(this: GroupQuoteIntentRequirementResponsePagedListEntity): GroupQuoteIntentRequirementResponsePagedListEntity;
    list(this: any, reqmatch?: GroupQuoteIntentRequirementResponsePagedListListMatch, ctrl?: Control): Promise<GroupQuoteIntentRequirementResponsePagedListEntity[]>;
}
export { GroupQuoteIntentRequirementResponsePagedListEntity };
