import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { WebhookEndpoint, WebhookEndpointLoadMatch, WebhookEndpointListMatch } from '../KotaTypes';
declare class WebhookEndpointEntity extends KotaEntityBase<WebhookEndpoint> {
    constructor(client: KotaSDK, entopts: any);
    make(this: WebhookEndpointEntity): WebhookEndpointEntity;
    load(this: any, reqmatch?: WebhookEndpointLoadMatch, ctrl?: Control): Promise<WebhookEndpointEntity>;
    list(this: any, reqmatch?: WebhookEndpointListMatch, ctrl?: Control): Promise<WebhookEndpointEntity[]>;
}
export { WebhookEndpointEntity };
