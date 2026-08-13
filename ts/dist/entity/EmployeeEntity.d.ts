import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { Employee, EmployeeLoadMatch, EmployeeListMatch, EmployeeCreateData, EmployeeUpdateData } from '../KotaTypes';
declare class EmployeeEntity extends KotaEntityBase<Employee> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EmployeeEntity): EmployeeEntity;
    load(this: any, reqmatch?: EmployeeLoadMatch, ctrl?: Control): Promise<Employee>;
    list(this: any, reqmatch?: EmployeeListMatch, ctrl?: Control): Promise<Employee[]>;
    create(this: any, reqdata?: EmployeeCreateData, ctrl?: Control): Promise<Employee>;
    update(this: any, reqdata?: EmployeeUpdateData, ctrl?: Control): Promise<Employee>;
}
export { EmployeeEntity };
