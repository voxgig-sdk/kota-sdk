import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { EmployerHealthInsuranceQuoteResponsePagedList, EmployerHealthInsuranceQuoteResponsePagedListListMatch } from '../KotaTypes';
declare class EmployerHealthInsuranceQuoteResponsePagedListEntity extends KotaEntityBase<EmployerHealthInsuranceQuoteResponsePagedList> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EmployerHealthInsuranceQuoteResponsePagedListEntity): EmployerHealthInsuranceQuoteResponsePagedListEntity;
    list(this: any, reqmatch?: EmployerHealthInsuranceQuoteResponsePagedListListMatch, ctrl?: Control): Promise<EmployerHealthInsuranceQuoteResponsePagedList[]>;
}
export { EmployerHealthInsuranceQuoteResponsePagedListEntity };
