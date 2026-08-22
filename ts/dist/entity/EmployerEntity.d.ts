import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { Employer, EmployerLoadMatch, EmployerListMatch, EmployerCreateData, EmployerUpdateData } from '../KotaTypes';
declare class EmployerEntity extends KotaEntityBase<Employer> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EmployerEntity): EmployerEntity;
    load(this: any, reqmatch?: EmployerLoadMatch, ctrl?: Control): Promise<EmployerEntity>;
    list(this: any, reqmatch?: EmployerListMatch, ctrl?: Control): Promise<EmployerEntity[]>;
    create(this: any, reqdata?: EmployerCreateData, ctrl?: Control): Promise<EmployerEntity>;
    update(this: any, reqdata?: EmployerUpdateData, ctrl?: Control): Promise<EmployerEntity>;
}
export { EmployerEntity };
