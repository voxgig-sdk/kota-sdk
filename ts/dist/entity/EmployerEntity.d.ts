import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { Employer, EmployerLoadMatch, EmployerListMatch, EmployerCreateData, EmployerUpdateData } from '../KotaTypes';
declare class EmployerEntity extends KotaEntityBase<Employer> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EmployerEntity): EmployerEntity;
    load(this: any, reqmatch?: EmployerLoadMatch, ctrl?: Control): Promise<Employer>;
    list(this: any, reqmatch?: EmployerListMatch, ctrl?: Control): Promise<Employer[]>;
    create(this: any, reqdata?: EmployerCreateData, ctrl?: Control): Promise<Employer>;
    update(this: any, reqdata?: EmployerUpdateData, ctrl?: Control): Promise<Employer>;
}
export { EmployerEntity };
