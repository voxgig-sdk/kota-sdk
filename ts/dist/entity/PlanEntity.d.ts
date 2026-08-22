import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { Plan, PlanLoadMatch, PlanListMatch } from '../KotaTypes';
declare class PlanEntity extends KotaEntityBase<Plan> {
    constructor(client: KotaSDK, entopts: any);
    make(this: PlanEntity): PlanEntity;
    load(this: any, reqmatch?: PlanLoadMatch, ctrl?: Control): Promise<PlanEntity>;
    list(this: any, reqmatch?: PlanListMatch, ctrl?: Control): Promise<PlanEntity[]>;
}
export { PlanEntity };
