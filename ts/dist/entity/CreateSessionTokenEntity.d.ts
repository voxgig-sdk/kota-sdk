import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { CreateSessionToken, CreateSessionTokenCreateData } from '../KotaTypes';
declare class CreateSessionTokenEntity extends KotaEntityBase<CreateSessionToken> {
    constructor(client: KotaSDK, entopts: any);
    make(this: CreateSessionTokenEntity): CreateSessionTokenEntity;
    create(this: any, reqdata?: CreateSessionTokenCreateData, ctrl?: Control): Promise<CreateSessionToken>;
}
export { CreateSessionTokenEntity };
