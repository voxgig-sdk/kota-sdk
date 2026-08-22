import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { GroupEmployeeResponsePagedList, GroupEmployeeResponsePagedListListMatch } from '../KotaTypes';
declare class GroupEmployeeResponsePagedListEntity extends KotaEntityBase<GroupEmployeeResponsePagedList> {
    constructor(client: KotaSDK, entopts: any);
    make(this: GroupEmployeeResponsePagedListEntity): GroupEmployeeResponsePagedListEntity;
    list(this: any, reqmatch?: GroupEmployeeResponsePagedListListMatch, ctrl?: Control): Promise<GroupEmployeeResponsePagedListEntity[]>;
}
export { GroupEmployeeResponsePagedListEntity };
