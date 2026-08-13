import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { Group, GroupLoadMatch, GroupListMatch, GroupCreateData, GroupUpdateData } from '../KotaTypes';
declare class GroupEntity extends KotaEntityBase<Group> {
    constructor(client: KotaSDK, entopts: any);
    make(this: GroupEntity): GroupEntity;
    load(this: any, reqmatch?: GroupLoadMatch, ctrl?: Control): Promise<Group>;
    list(this: any, reqmatch?: GroupListMatch, ctrl?: Control): Promise<Group[]>;
    create(this: any, reqdata?: GroupCreateData, ctrl?: Control): Promise<Group>;
    update(this: any, reqdata?: GroupUpdateData, ctrl?: Control): Promise<Group>;
}
export { GroupEntity };
