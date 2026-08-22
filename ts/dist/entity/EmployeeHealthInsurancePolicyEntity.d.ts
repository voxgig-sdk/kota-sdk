import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { EmployeeHealthInsurancePolicy, EmployeeHealthInsurancePolicyLoadMatch } from '../KotaTypes';
declare class EmployeeHealthInsurancePolicyEntity extends KotaEntityBase<EmployeeHealthInsurancePolicy> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EmployeeHealthInsurancePolicyEntity): EmployeeHealthInsurancePolicyEntity;
    load(this: any, reqmatch?: EmployeeHealthInsurancePolicyLoadMatch, ctrl?: Control): Promise<EmployeeHealthInsurancePolicyEntity>;
}
export { EmployeeHealthInsurancePolicyEntity };
