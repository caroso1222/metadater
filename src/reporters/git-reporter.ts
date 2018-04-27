import { ReportType } from './../models/report.type';
import { IReporter } from './../models/reporter.interface';
import { Report } from '../models/report';

export class Reporter implements IReporter {
  apply(): Report {
    return {
      type: ReportType.PlainText,
      payload: 'My Text'
    };
  }
}
