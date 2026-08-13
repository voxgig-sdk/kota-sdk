import { KotaEntityBase } from '../KotaEntityBase';
import type { KotaSDK } from '../KotaSDK';
import type { Control } from '../types';
import type { ContributionReport, ContributionReportLoadMatch, ContributionReportListMatch, ContributionReportCreateData } from '../KotaTypes';
declare class ContributionReportEntity extends KotaEntityBase<ContributionReport> {
    constructor(client: KotaSDK, entopts: any);
    make(this: ContributionReportEntity): ContributionReportEntity;
    load(this: any, reqmatch?: ContributionReportLoadMatch, ctrl?: Control): Promise<ContributionReport>;
    list(this: any, reqmatch?: ContributionReportListMatch, ctrl?: Control): Promise<ContributionReport[]>;
    create(this: any, reqdata?: ContributionReportCreateData, ctrl?: Control): Promise<ContributionReport>;
}
export { ContributionReportEntity };
