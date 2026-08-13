import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { EmployeeHealthInsurancePolicyResponsePagedList, EmployeeHealthInsurancePolicyResponsePagedListListMatch } from '../KotaTypes';
declare class EmployeeHealthInsurancePolicyResponsePagedListEntity extends KotaEntityBase<EmployeeHealthInsurancePolicyResponsePagedList> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EmployeeHealthInsurancePolicyResponsePagedListEntity): EmployeeHealthInsurancePolicyResponsePagedListEntity;
    list(this: any, reqmatch?: EmployeeHealthInsurancePolicyResponsePagedListListMatch, ctrl?: Control): Promise<EmployeeHealthInsurancePolicyResponsePagedList[]>;
}
export { EmployeeHealthInsurancePolicyResponsePagedListEntity };
