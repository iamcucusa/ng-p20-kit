import { AssumptionsFieldsNames, AssumptionsSectionsFields } from '@assumptions/assumptions';

export type TherapeuticArea =
  | 'Biosimilars'
  | 'CHC'
  | 'CRM'
  | 'CNS'
  | 'Diabetes'
  | 'Established Products'
  | 'Immunology'
  | 'IPF/ILD'
  | 'Obesity, CKD & NASH'
  | 'Oncology'
  | 'Pradaxa'
  | 'Research Beyond Borders'
  | 'Respiratory'
  | 'Retinopathies'
  | 'Others';

export type StudyPhase = 'I' | 'IA' | 'IB' | 'II' | 'IIA' | 'IIB' | 'III' | 'IIIA' | 'IIIB' | 'IV' | 'I/II' | 'II/III';

export interface TrialParameters {
  ctmsTrial: boolean | null;
  studyNumber: string | null;
  studyName: string | null;
  milestone: string | null;
  therapeuticArea: TherapeuticArea | null;
  others: string | null;
  studyPhase: StudyPhase | null;
  hpcBiberach: string | null;
  indication: string | null;
  biCompound: string | null;
  studyMoa: string | null;
  versionTitle?: string | null;
  versionNumber?: number | null | undefined;
  versionDescription: string | null;
  keyChanges: string | null;
}

export type AssumptionsParametersFieldsTitles = AssumptionsFieldsNames<TrialParameters>;
export type AssumptionsParametersControls = AssumptionsSectionsFields<AssumptionsParametersFieldsTitles>;

export type TrialParametersAutofill = Pick<TrialParameters, 'biCompound'>;

export type StudyNumberMask = '****-****';
export type StudyNumberCTMSMask = '9999-9999';


export interface TrialParametersExport extends TrialParameters{
  scenario: string | null;
  description: string | null;
}
/**
 * Export settings types
 */

export type ColDefTrialParameters = Record<keyof TrialParametersExport, undefined>;

export type AssumptionsParametersExportFieldsTitles = AssumptionsFieldsNames<TrialParametersExport>;
export type AssumptionsParametersExportControls = AssumptionsSectionsFields<AssumptionsParametersExportFieldsTitles>;
