import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { EmployerHealthInsuranceQuote, EmployerHealthInsuranceQuoteLoadMatch } from '../KotaTypes';
declare class EmployerHealthInsuranceQuoteEntity extends KotaEntityBase<EmployerHealthInsuranceQuote> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EmployerHealthInsuranceQuoteEntity): EmployerHealthInsuranceQuoteEntity;
    load(this: any, reqmatch?: EmployerHealthInsuranceQuoteLoadMatch, ctrl?: Control): Promise<EmployerHealthInsuranceQuote>;
}
export { EmployerHealthInsuranceQuoteEntity };
