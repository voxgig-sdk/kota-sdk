import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { ContributionReportEmployeeBreakdown, ContributionReportEmployeeBreakdownLoadMatch } from '../KotaTypes';
declare class ContributionReportEmployeeBreakdownEntity extends KotaEntityBase<ContributionReportEmployeeBreakdown> {
    constructor(client: KotaSDK, entopts: any);
    make(this: ContributionReportEmployeeBreakdownEntity): ContributionReportEmployeeBreakdownEntity;
    load(this: any, reqmatch?: ContributionReportEmployeeBreakdownLoadMatch, ctrl?: Control): Promise<ContributionReportEmployeeBreakdown>;
}
export { ContributionReportEmployeeBreakdownEntity };
