import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { GroupQuoteIntent, GroupQuoteIntentLoadMatch, GroupQuoteIntentListMatch, GroupQuoteIntentCreateData } from '../KotaTypes';
declare class GroupQuoteIntentEntity extends KotaEntityBase<GroupQuoteIntent> {
    constructor(client: KotaSDK, entopts: any);
    make(this: GroupQuoteIntentEntity): GroupQuoteIntentEntity;
    load(this: any, reqmatch?: GroupQuoteIntentLoadMatch, ctrl?: Control): Promise<GroupQuoteIntent>;
    list(this: any, reqmatch?: GroupQuoteIntentListMatch, ctrl?: Control): Promise<GroupQuoteIntent[]>;
    create(this: any, reqdata?: GroupQuoteIntentCreateData, ctrl?: Control): Promise<GroupQuoteIntent>;
}
export { GroupQuoteIntentEntity };
