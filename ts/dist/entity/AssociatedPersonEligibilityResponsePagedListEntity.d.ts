import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { AssociatedPersonEligibilityResponsePagedList, AssociatedPersonEligibilityResponsePagedListListMatch } from '../KotaTypes';
declare class AssociatedPersonEligibilityResponsePagedListEntity extends KotaEntityBase<AssociatedPersonEligibilityResponsePagedList> {
    constructor(client: KotaSDK, entopts: any);
    make(this: AssociatedPersonEligibilityResponsePagedListEntity): AssociatedPersonEligibilityResponsePagedListEntity;
    list(this: any, reqmatch?: AssociatedPersonEligibilityResponsePagedListListMatch, ctrl?: Control): Promise<AssociatedPersonEligibilityResponsePagedList[]>;
}
export { AssociatedPersonEligibilityResponsePagedListEntity };
