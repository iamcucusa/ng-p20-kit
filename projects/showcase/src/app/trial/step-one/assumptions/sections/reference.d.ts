import { AssumptionsFieldsNames, AssumptionsSectionsFields } from '@assumptions/assumptions';

export interface TrialReference {
  ntcCompetitor: string | null;
  ctmsReference: string | null;
}

export type ColDefTrialReference = Record<keyof TrialReference, undefined>;
export type TrialReferenceFieldsTitles = AssumptionsFieldsNames<TrialReference>;
export type TrialReferenceControls = AssumptionsSectionsFields<TrialReferenceFieldsTitles>;
