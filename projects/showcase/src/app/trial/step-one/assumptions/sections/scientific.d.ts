import { AssumptionsFieldsNames, AssumptionsSectionsFields } from '@assumptions/assumptions';

export type StudyDesign =
  | 'active comparator'
  | 'adaptive'
  | 'basket'
  | 'bioavailability'
  | 'bioequivalence'
  | 'cross over'
  | 'dose response'
  | 'double blind/blinded'
  | 'drug-drug interaction'
  | 'efficacy'
  | 'fixed dose'
  | 'immunogenicity'
  | 'multiple arm'
  | 'non inferiority'
  | 'non interventional'
  | 'observational'
  | 'open label'
  | 'pharmacodynamics'
  | 'pharmacokinetics'
  | 'placebo control'
  | 'randomised'
  | 'safety'
  | 'single arm'
  | 'single ascending dose'
  | 'superiority'
  | 'umbrella'
  | 'parallel group'
  | 'other';
export type StudyProcedure =
  | 'BCVA'
  | 'Central Imaging ECG'
  | 'Central Lab'
  | 'Central Imaging'
  | 'Central Imaging MRI'
  | 'Central Spirometry'
  | 'DMC or SMC'
  | 'ECG'
  | 'eCOA or ePRO'
  | 'fMRI'
  | 'F2F INV meetings'
  | 'Home Nursing'
  | 'IRB'
  | 'Imagining collect & hold'
  | 'Miscellaneous'
  | 'Opthalmic Reading Centre'
  | 'Patient Recruitment'
  | 'Training Platform (BlueSky)'
  | 'VCT Duplication Check'
  | 'other';
export type ScientificAgeUnit = 'Years' | 'Months';

export interface TrialScientific {
  comparatorDrugControlled: boolean | null;
  comparatorName: string | null;
  patentExpiryDate: string | null;
  administrationRoute: string | null;
  requirements: boolean | null;
  description: string | null;
  patientPopulation: string | null;
  ageUnit: ScientificAgeUnit | null;
  minAge: number | null;
  minAgeMonths: number | null;
  maxAge: number | null;
  maxAgeMonths: number | null;
  pediatric: boolean | null;
  keyInclusions: string | null;
  keyExclusions: string | null;
  trialDesign: StudyDesign[] | null;
  designDescription: string | null;
  keyPrimaryEndpoint: string | null;
  keySecondaryEndpoint: string | null;
  studyProcedures: StudyProcedure[] | null;
  procedureDescription: string | null;
  visitStructure: string | null;
  visitWindows: number | null;
  followUpPeriod: number | null;
}

export type ColDefTrialScientific = Record<keyof TrialScientific, undefined>;
export type TrialScientificFieldsTitles = AssumptionsFieldsNames<TrialScientific>;
export type TrialScientificControls = AssumptionsSectionsFields<TrialScientificFieldsTitles>;

