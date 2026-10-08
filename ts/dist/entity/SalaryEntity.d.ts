import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { Salary, SalaryLoadMatch, SalaryListMatch, SalaryCreateData, SalaryRemoveMatch } from '../KotaTypes';
declare class SalaryEntity extends KotaEntityBase<Salary> {
    constructor(client: KotaSDK, entopts: any);
    make(this: SalaryEntity): SalaryEntity;
    load(this: any, reqmatch?: SalaryLoadMatch, ctrl?: Control): Promise<SalaryEntity>;
    list(this: any, reqmatch?: SalaryListMatch, ctrl?: Control): Promise<SalaryEntity[]>;
    create(this: any, reqdata?: SalaryCreateData, ctrl?: Control): Promise<SalaryEntity>;
    remove(this: any, reqmatch?: SalaryRemoveMatch, ctrl?: Control): Promise<SalaryEntity>;
}
export { SalaryEntity };
