import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { EligibilityCheck, EligibilityCheckCreateData } from '../KotaTypes';
declare class EligibilityCheckEntity extends KotaEntityBase<EligibilityCheck> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EligibilityCheckEntity): EligibilityCheckEntity;
    create(this: any, reqdata?: EligibilityCheckCreateData, ctrl?: Control): Promise<EligibilityCheck>;
}
export { EligibilityCheckEntity };
