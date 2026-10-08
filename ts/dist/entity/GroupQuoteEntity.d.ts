import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { GroupQuote, GroupQuoteListMatch } from '../KotaTypes';
declare class GroupQuoteEntity extends KotaEntityBase<GroupQuote> {
    constructor(client: KotaSDK, entopts: any);
    make(this: GroupQuoteEntity): GroupQuoteEntity;
    list(this: any, reqmatch?: GroupQuoteListMatch, ctrl?: Control): Promise<GroupQuoteEntity[]>;
}
export { GroupQuoteEntity };
