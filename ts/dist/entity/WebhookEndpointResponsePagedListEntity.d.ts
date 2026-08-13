import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { WebhookEndpointResponsePagedList, WebhookEndpointResponsePagedListListMatch } from '../KotaTypes';
declare class WebhookEndpointResponsePagedListEntity extends KotaEntityBase<WebhookEndpointResponsePagedList> {
    constructor(client: KotaSDK, entopts: any);
    make(this: WebhookEndpointResponsePagedListEntity): WebhookEndpointResponsePagedListEntity;
    list(this: any, reqmatch?: WebhookEndpointResponsePagedListListMatch, ctrl?: Control): Promise<WebhookEndpointResponsePagedList[]>;
}
export { WebhookEndpointResponsePagedListEntity };
