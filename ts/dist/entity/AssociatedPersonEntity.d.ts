import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { AssociatedPerson, AssociatedPersonLoadMatch, AssociatedPersonListMatch, AssociatedPersonCreateData, AssociatedPersonUpdateData, AssociatedPersonRemoveMatch } from '../KotaTypes';
declare class AssociatedPersonEntity extends KotaEntityBase<AssociatedPerson> {
    constructor(client: KotaSDK, entopts: any);
    make(this: AssociatedPersonEntity): AssociatedPersonEntity;
    load(this: any, reqmatch?: AssociatedPersonLoadMatch, ctrl?: Control): Promise<AssociatedPerson>;
    list(this: any, reqmatch?: AssociatedPersonListMatch, ctrl?: Control): Promise<AssociatedPerson[]>;
    create(this: any, reqdata?: AssociatedPersonCreateData, ctrl?: Control): Promise<AssociatedPerson>;
    update(this: any, reqdata?: AssociatedPersonUpdateData, ctrl?: Control): Promise<AssociatedPerson>;
    remove(this: any, reqmatch?: AssociatedPersonRemoveMatch, ctrl?: Control): Promise<AssociatedPerson>;
}
export { AssociatedPersonEntity };
