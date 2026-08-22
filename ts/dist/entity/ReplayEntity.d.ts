import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { Replay, ReplayCreateData } from '../KotaTypes';
declare class ReplayEntity extends KotaEntityBase<Replay> {
    constructor(client: KotaSDK, entopts: any);
    make(this: ReplayEntity): ReplayEntity;
    create(this: any, reqdata?: ReplayCreateData, ctrl?: Control): Promise<ReplayEntity>;
}
export { ReplayEntity };
