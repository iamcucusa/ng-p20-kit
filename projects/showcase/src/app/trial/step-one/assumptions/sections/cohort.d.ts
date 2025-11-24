import { AssumptionsFieldsNames, AssumptionsSectionsFields } from '@assumptions/assumptions';

export interface TrialCohort {
  id: number | null;
  name: string | null;
  startDate: string | null;
  firstSubjectIn: string | null;
  lastSubjectIn: string | null;
  endDate: string | null;
  observationPeriod: number | null;
  recruitmentRate: number | null;
  sites: number | null;
  patients: number | null;
  additionalComments: string | null;
  description: string | null;
  author: string | null;
  lastUpdate: string | null;
}

export type DateBoundaryKey =
  | 'startDateMin'
  | 'startDateMax'
  | 'firstSubjectInMin'
  | 'firstSubjectInMax'
  | 'lastSubjectInMin'
  | 'lastSubjectInMax'
  | 'endDateMin'
  | 'endDateMax';

export type DateBoundUpdate =
  | 'startDate < firstSubjectIn'
  | 'firstSubjectIn > startDate'
  | 'firstSubjectIn < lastSubjectIn'
  | 'lastSubjectIn > firstSubjectIn'
  | 'lastSubjectIn < endDate'
  | 'endDate > lastSubjectIn';

export interface DateRangeBoundaries {
  firstSubjectInMin?: Date | null;
  startDateMax?: Date | null;
  startDateMin?: Date | null;
  lastSubjectInMin?: Date | null;
  firstSubjectInMax?: Date | null;
  endDateMin?: Date | null;
  endDateMax?: Date | null;
  lastSubjectInMax?: Date | null;
}

export type AssumptionsCohortFieldsTitles = AssumptionsFieldsNames<TrialCohort>;
export type AssumptionsCohortControls = AssumptionsSectionsFields<AssumptionsCohortFieldsTitles>;

export type ColDefTrialCohort = Record<keyof TrialCohort, undefined>;
