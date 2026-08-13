import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { GroupQuote, GroupQuoteLoadMatch } from '../KotaTypes';
declare class GroupQuoteEntity extends KotaEntityBase<GroupQuote> {
    constructor(client: KotaSDK, entopts: any);
    make(this: GroupQuoteEntity): GroupQuoteEntity;
    load(this: any, reqmatch?: GroupQuoteLoadMatch, ctrl?: Control): Promise<GroupQuote>;
}
export { GroupQuoteEntity };
