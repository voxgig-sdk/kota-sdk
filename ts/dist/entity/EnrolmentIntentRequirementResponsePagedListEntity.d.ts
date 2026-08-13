import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { EnrolmentIntentRequirementResponsePagedList, EnrolmentIntentRequirementResponsePagedListListMatch } from '../KotaTypes';
declare class EnrolmentIntentRequirementResponsePagedListEntity extends KotaEntityBase<EnrolmentIntentRequirementResponsePagedList> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EnrolmentIntentRequirementResponsePagedListEntity): EnrolmentIntentRequirementResponsePagedListEntity;
    list(this: any, reqmatch?: EnrolmentIntentRequirementResponsePagedListListMatch, ctrl?: Control): Promise<EnrolmentIntentRequirementResponsePagedList[]>;
}
export { EnrolmentIntentRequirementResponsePagedListEntity };
