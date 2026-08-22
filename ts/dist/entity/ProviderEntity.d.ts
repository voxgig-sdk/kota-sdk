import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { Provider, ProviderLoadMatch, ProviderListMatch } from '../KotaTypes';
declare class ProviderEntity extends KotaEntityBase<Provider> {
    constructor(client: KotaSDK, entopts: any);
    make(this: ProviderEntity): ProviderEntity;
    load(this: any, reqmatch?: ProviderLoadMatch, ctrl?: Control): Promise<ProviderEntity>;
    list(this: any, reqmatch?: ProviderListMatch, ctrl?: Control): Promise<ProviderEntity[]>;
}
export { ProviderEntity };
