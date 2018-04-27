import { ReportType } from './report.type';

export interface Report {
  type: ReportType;
  payload: any;
}
