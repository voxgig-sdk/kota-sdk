import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { EmployeeHealthInsuranceOffer, EmployeeHealthInsuranceOfferLoadMatch } from '../KotaTypes';
declare class EmployeeHealthInsuranceOfferEntity extends KotaEntityBase<EmployeeHealthInsuranceOffer> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EmployeeHealthInsuranceOfferEntity): EmployeeHealthInsuranceOfferEntity;
    load(this: any, reqmatch?: EmployeeHealthInsuranceOfferLoadMatch, ctrl?: Control): Promise<EmployeeHealthInsuranceOfferEntity>;
}
export { EmployeeHealthInsuranceOfferEntity };
