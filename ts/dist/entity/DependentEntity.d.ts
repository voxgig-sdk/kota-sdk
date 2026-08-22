import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { Dependent, DependentCreateData, DependentRemoveMatch } from '../KotaTypes';
declare class DependentEntity extends KotaEntityBase<Dependent> {
    constructor(client: KotaSDK, entopts: any);
    make(this: DependentEntity): DependentEntity;
    create(this: any, reqdata?: DependentCreateData, ctrl?: Control): Promise<DependentEntity>;
    remove(this: any, reqmatch?: DependentRemoveMatch, ctrl?: Control): Promise<DependentEntity>;
}
export { DependentEntity };
