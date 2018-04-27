import { Report } from "./report";

export interface IReporter {
  apply: () => Report;
}
