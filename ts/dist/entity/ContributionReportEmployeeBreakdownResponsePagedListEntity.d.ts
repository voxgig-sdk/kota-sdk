import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { ContributionReportEmployeeBreakdownResponsePagedList, ContributionReportEmployeeBreakdownResponsePagedListListMatch } from '../KotaTypes';
declare class ContributionReportEmployeeBreakdownResponsePagedListEntity extends KotaEntityBase<ContributionReportEmployeeBreakdownResponsePagedList> {
    constructor(client: KotaSDK, entopts: any);
    make(this: ContributionReportEmployeeBreakdownResponsePagedListEntity): ContributionReportEmployeeBreakdownResponsePagedListEntity;
    list(this: any, reqmatch?: ContributionReportEmployeeBreakdownResponsePagedListListMatch, ctrl?: Control): Promise<ContributionReportEmployeeBreakdownResponsePagedListEntity[]>;
}
export { ContributionReportEmployeeBreakdownResponsePagedListEntity };
