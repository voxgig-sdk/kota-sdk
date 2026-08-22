import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { EmployerHealthInsurancePolicyResponsePagedList, EmployerHealthInsurancePolicyResponsePagedListListMatch } from '../KotaTypes';
declare class EmployerHealthInsurancePolicyResponsePagedListEntity extends KotaEntityBase<EmployerHealthInsurancePolicyResponsePagedList> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EmployerHealthInsurancePolicyResponsePagedListEntity): EmployerHealthInsurancePolicyResponsePagedListEntity;
    list(this: any, reqmatch?: EmployerHealthInsurancePolicyResponsePagedListListMatch, ctrl?: Control): Promise<EmployerHealthInsurancePolicyResponsePagedListEntity[]>;
}
export { EmployerHealthInsurancePolicyResponsePagedListEntity };
