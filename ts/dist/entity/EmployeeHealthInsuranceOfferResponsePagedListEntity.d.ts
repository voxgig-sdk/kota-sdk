import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { EmployeeHealthInsuranceOfferResponsePagedList, EmployeeHealthInsuranceOfferResponsePagedListListMatch } from '../KotaTypes';
declare class EmployeeHealthInsuranceOfferResponsePagedListEntity extends KotaEntityBase<EmployeeHealthInsuranceOfferResponsePagedList> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EmployeeHealthInsuranceOfferResponsePagedListEntity): EmployeeHealthInsuranceOfferResponsePagedListEntity;
    list(this: any, reqmatch?: EmployeeHealthInsuranceOfferResponsePagedListListMatch, ctrl?: Control): Promise<EmployeeHealthInsuranceOfferResponsePagedList[]>;
}
export { EmployeeHealthInsuranceOfferResponsePagedListEntity };
