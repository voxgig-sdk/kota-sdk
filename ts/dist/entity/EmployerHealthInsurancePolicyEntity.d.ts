import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { EmployerHealthInsurancePolicy, EmployerHealthInsurancePolicyLoadMatch } from '../KotaTypes';
declare class EmployerHealthInsurancePolicyEntity extends KotaEntityBase<EmployerHealthInsurancePolicy> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EmployerHealthInsurancePolicyEntity): EmployerHealthInsurancePolicyEntity;
    load(this: any, reqmatch?: EmployerHealthInsurancePolicyLoadMatch, ctrl?: Control): Promise<EmployerHealthInsurancePolicyEntity>;
}
export { EmployerHealthInsurancePolicyEntity };
