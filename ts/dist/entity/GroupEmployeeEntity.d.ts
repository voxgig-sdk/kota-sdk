import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { GroupEmployee, GroupEmployeeCreateData } from '../KotaTypes';
declare class GroupEmployeeEntity extends KotaEntityBase<GroupEmployee> {
    constructor(client: KotaSDK, entopts: any);
    make(this: GroupEmployeeEntity): GroupEmployeeEntity;
    create(this: any, reqdata?: GroupEmployeeCreateData, ctrl?: Control): Promise<GroupEmployee>;
}
export { GroupEmployeeEntity };
