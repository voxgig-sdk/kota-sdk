import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { CreateHostedSessionToken, CreateHostedSessionTokenCreateData } from '../KotaTypes';
declare class CreateHostedSessionTokenEntity extends KotaEntityBase<CreateHostedSessionToken> {
    constructor(client: KotaSDK, entopts: any);
    make(this: CreateHostedSessionTokenEntity): CreateHostedSessionTokenEntity;
    create(this: any, reqdata?: CreateHostedSessionTokenCreateData, ctrl?: Control): Promise<CreateHostedSessionTokenEntity>;
}
export { CreateHostedSessionTokenEntity };
