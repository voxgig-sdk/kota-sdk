import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { EnrolmentIntent, EnrolmentIntentLoadMatch, EnrolmentIntentListMatch, EnrolmentIntentCreateData, EnrolmentIntentUpdateData } from '../KotaTypes';
declare class EnrolmentIntentEntity extends KotaEntityBase<EnrolmentIntent> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EnrolmentIntentEntity): EnrolmentIntentEntity;
    load(this: any, reqmatch?: EnrolmentIntentLoadMatch, ctrl?: Control): Promise<EnrolmentIntentEntity>;
    list(this: any, reqmatch?: EnrolmentIntentListMatch, ctrl?: Control): Promise<EnrolmentIntentEntity[]>;
    create(this: any, reqdata?: EnrolmentIntentCreateData, ctrl?: Control): Promise<EnrolmentIntentEntity>;
    update(this: any, reqdata?: EnrolmentIntentUpdateData, ctrl?: Control): Promise<EnrolmentIntentEntity>;
}
export { EnrolmentIntentEntity };
