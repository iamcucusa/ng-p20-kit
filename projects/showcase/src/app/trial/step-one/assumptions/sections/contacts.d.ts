import { AssumptionsFieldsNames, AssumptionsSectionsFields } from '@assumptions/assumptions';

export interface TrialContacts {
  assetLead: string | null;
  valueLead: string | null;
  cdphProjectManager: string | null;
  ctl: string | null;
  cdol: string | null;
  evidenceLead: string | null;
  projectMedicalWriter: string | null;
  decisionBodyOne: string | null;
  decisionBodyOneDate: string | null;
  decisionBodyTwo: string | null;
  decisionBodyTwoDate: string | null;
  decisionBodyThree: string | null;
  decisionBodyThreeDate: string | null;
  decisionBodyFour: string | null;
  decisionBodyFourDate: string | null;
  decisionBodyFive: string | null;
  decisionBodyFiveDate: string | null;
}

export type TrialContactsAutofill = Pick<TrialContacts, 'cdphProjectManager' | 'cdol' | 'ctl' | 'projectMedicalWriter'>;
export type AssumptionsContactsFieldsTitles = AssumptionsFieldsNames<TrialContacts>;
export type AssumptionsContactsControls = AssumptionsSectionsFields<AssumptionsContactsFieldsTitles>;
export type ColDefTrialContacts = Record<keyof TrialContacts, undefined>;
