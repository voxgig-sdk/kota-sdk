import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { EnrolmentIntent, EnrolmentIntentLoadMatch, EnrolmentIntentListMatch, EnrolmentIntentCreateData, EnrolmentIntentUpdateData } from '../KotaTypes';
declare class EnrolmentIntentEntity extends KotaEntityBase<EnrolmentIntent> {
    constructor(client: KotaSDK, entopts: any);
    make(this: EnrolmentIntentEntity): EnrolmentIntentEntity;
    load(this: any, reqmatch?: EnrolmentIntentLoadMatch, ctrl?: Control): Promise<EnrolmentIntent>;
    list(this: any, reqmatch?: EnrolmentIntentListMatch, ctrl?: Control): Promise<EnrolmentIntent[]>;
    create(this: any, reqdata?: EnrolmentIntentCreateData, ctrl?: Control): Promise<EnrolmentIntent>;
    update(this: any, reqdata?: EnrolmentIntentUpdateData, ctrl?: Control): Promise<EnrolmentIntent>;
}
export { EnrolmentIntentEntity };
