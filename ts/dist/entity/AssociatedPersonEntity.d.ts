import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { AssociatedPerson, AssociatedPersonLoadMatch, AssociatedPersonListMatch, AssociatedPersonCreateData, AssociatedPersonUpdateData, AssociatedPersonRemoveMatch } from '../KotaTypes';
declare class AssociatedPersonEntity extends KotaEntityBase<AssociatedPerson> {
    constructor(client: KotaSDK, entopts: any);
    make(this: AssociatedPersonEntity): AssociatedPersonEntity;
    load(this: any, reqmatch?: AssociatedPersonLoadMatch, ctrl?: Control): Promise<AssociatedPersonEntity>;
    list(this: any, reqmatch?: AssociatedPersonListMatch, ctrl?: Control): Promise<AssociatedPersonEntity[]>;
    create(this: any, reqdata?: AssociatedPersonCreateData, ctrl?: Control): Promise<AssociatedPersonEntity>;
    update(this: any, reqdata?: AssociatedPersonUpdateData, ctrl?: Control): Promise<AssociatedPersonEntity>;
    remove(this: any, reqmatch?: AssociatedPersonRemoveMatch, ctrl?: Control): Promise<AssociatedPersonEntity>;
}
export { AssociatedPersonEntity };
