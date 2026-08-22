import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { GroupQuoteIntent, GroupQuoteIntentLoadMatch, GroupQuoteIntentListMatch, GroupQuoteIntentCreateData } from '../KotaTypes';
declare class GroupQuoteIntentEntity extends KotaEntityBase<GroupQuoteIntent> {
    constructor(client: KotaSDK, entopts: any);
    make(this: GroupQuoteIntentEntity): GroupQuoteIntentEntity;
    load(this: any, reqmatch?: GroupQuoteIntentLoadMatch, ctrl?: Control): Promise<GroupQuoteIntentEntity>;
    list(this: any, reqmatch?: GroupQuoteIntentListMatch, ctrl?: Control): Promise<GroupQuoteIntentEntity[]>;
    create(this: any, reqdata?: GroupQuoteIntentCreateData, ctrl?: Control): Promise<GroupQuoteIntentEntity>;
}
export { GroupQuoteIntentEntity };
