import { InjectionToken } from '@angular/core';
import {
  ColDefTrialScientific,
  StudyDesign,
  StudyProcedure,
  TrialScientificControls,
  TrialScientificFieldsTitles,
} from '@assumptions/sections/scientific';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export const studyDesignList: { label: StudyDesign }[] = [
  { label: 'active comparator' },
  { label: 'adaptive' },
  { label: 'basket' },
  { label: 'bioavailability' },
  { label: 'bioequivalence' },
  { label: 'cross over' },
  { label: 'dose response' },
  { label: 'double blind/blinded' },
  { label: 'drug-drug interaction' },
  { label: 'efficacy' },
  { label: 'fixed dose' },
  { label: 'immunogenicity' },
  { label: 'multiple arm' },
  { label: 'non inferiority' },
];
export const studyDesignListToken = new InjectionToken<typeof studyDesignList>('Study Design List');
export const studyDesignList2: { label: StudyDesign }[] = [
  { label: 'non interventional' },
  { label: 'observational' },
  { label: 'open label' },
  { label: 'pharmacodynamics' },
  { label: 'pharmacokinetics' },
  { label: 'placebo control' },
  { label: 'randomised' },
  { label: 'safety' },
  { label: 'single arm' },
  { label: 'single ascending dose' },
  { label: 'superiority' },
  { label: 'umbrella' },
  { label: 'parallel group' },
  { label: 'other' },
];
export const studyDesignList2Token = new InjectionToken<typeof studyDesignList2>('Study Design List 2');
export const studyProcedures: { label: StudyProcedure }[] = [
  { label: 'BCVA' },
  { label: 'Central Imaging ECG' },
  { label: 'Central Lab' },
  { label: 'Central Imaging' },
  { label: 'Central Imaging MRI' },
  { label: 'Central Spirometry' },
  { label: 'DMC or SMC' },
  { label: 'ECG' },
  { label: 'eCOA or ePRO' },
  { label: 'fMRI' },
];
export const studyProceduresToken = new InjectionToken<{ label: StudyProcedure }>('Central Services List');
export const studyProcedures2: { label: StudyProcedure }[] = [
  { label: 'F2F INV meetings' },
  { label: 'Home Nursing' },
  { label: 'IRB' },
  { label: 'Imagining collect & hold' },
  { label: 'Miscellaneous' },
  { label: 'Opthalmic Reading Centre' },
  { label: 'Patient Recruitment' },
  { label: 'Training Platform (BlueSky)' },
  { label: 'VCT Duplication Check' },
  { label: 'other' },
];
export const studyProcedures2Token = new InjectionToken<{ label: StudyProcedure }>('Central Services List 2');
export const scientificFields: TrialScientificFieldsTitles = {
  comparatorDrugControlled: 'comparatorDrugControlled',
  comparatorName: 'comparatorName',
  patentExpiryDate: 'patentExpiryDate',
  administrationRoute: 'administrationRoute',
  requirements: 'requirements',
  description: 'description',
  patientPopulation: 'patientPopulation',
  ageUnit: 'ageUnit',
  minAge: 'minAge',
  maxAge: 'maxAge',
  minAgeMonths: 'minAgeMonths',
  maxAgeMonths: 'maxAgeMonths',
  pediatric: 'pediatric',
  keyInclusions: 'keyInclusions',
  keyExclusions: 'keyExclusions',
  trialDesign: 'trialDesign',
  designDescription: 'designDescription',
  keyPrimaryEndpoint: 'keyPrimaryEndpoint',
  keySecondaryEndpoint: 'keySecondaryEndpoint',
  studyProcedures: 'studyProcedures',
  procedureDescription: 'procedureDescription',
  visitStructure: 'visitStructure',
  visitWindows: 'visitWindows',
  followUpPeriod: 'followUpPeriod',
};
export const scientificControls: TrialScientificControls = {
  comparatorDrugControlled: {
    name: scientificFields.comparatorDrugControlled,
    export: true,
    title: 'Comparator Drug Controlled',
  },
  comparatorName: {
    name: scientificFields.comparatorName,
    export: true,
    title: 'Comparator Drug Name',
  },
  patentExpiryDate: {
    name: scientificFields.patentExpiryDate,
    export: true,
    title: 'Patent Expiry Date',
  },
  administrationRoute: {
    name: scientificFields.administrationRoute,
    export: true,
    title: 'Route of Administration',
  },
  requirements: {
    name: scientificFields.requirements,
    export: true,
    title: 'Requirements',
  },
  description: {
    name: scientificFields.description,
    export: true,
    title: 'Requirements Description',
  },
  patientPopulation: {
    name: scientificFields.patientPopulation,
    export: true,
    title: 'Subject Population',
  },
  ageUnit: { name: scientificFields.ageUnit, export: false, title: 'Age Unit' },
  minAge: { name: scientificFields.minAge, export: true, title: 'Min Age' },
  maxAge: { name: scientificFields.maxAge, export: true, title: 'Max Age' },
  pediatric: {
    name: scientificFields.pediatric,
    export: true,
    title: 'Pediatric Trial',
  },
  keyInclusions: {
    name: scientificFields.keyInclusions,
    export: true,
    title: 'Key Inclusions',
  },
  keyExclusions: {
    name: scientificFields.keyExclusions,
    export: true,
    title: 'Key Exclusions',
  },
  trialDesign: {
    name: scientificFields.trialDesign,
    export: true,
    title: 'Selected Study Designs',
  },
  designDescription: {
    name: scientificFields.designDescription,
    export: true,
    title: 'Additional Trial Design Details',
  },
  keyPrimaryEndpoint: {
    name: scientificFields.keyPrimaryEndpoint,
    export: true,
    title: 'Key Primary Endpoint',
  },
  keySecondaryEndpoint: {
    name: scientificFields.keySecondaryEndpoint,
    export: true,
    title: 'Key Secondary Endpoint',
  },
  studyProcedures: {
    name: scientificFields.studyProcedures,
    export: true,
    title: 'Selected Central Services',
  },
  procedureDescription: {
    name: scientificFields.procedureDescription,
    export: true,
    title: 'Additional Central Services',
  },
  visitStructure: {
    name: scientificFields.visitStructure,
    export: true,
    title: 'Visit Structure Description',
  },
  visitWindows: {
    name: scientificFields.visitWindows,
    export: true,
    title: 'Window Duration (Days)',
  },
  followUpPeriod: {
    name: scientificFields.followUpPeriod,
    export: true,
    title: 'Follow-up Duration (Weeks)',
  },
  minAgeMonths: {
    name: scientificFields.minAgeMonths,
    export: false,
    title: 'Min Age Months'
  },
  maxAgeMonths: {
    name: scientificFields.maxAgeMonths,
    export: false,
    title: 'Max Age Months',
  }
};
export const scientificControlsToken = new InjectionToken<TrialScientificControls>('Scientific Page Form Fields');

export const scientificFormProviders = [
  {
    provide: studyDesignListToken,
    useValue: studyDesignList,
  },
  {
    provide: studyDesignList2Token,
    useValue: studyDesignList2,
  },
  {
    provide: studyProceduresToken,
    useValue: studyProcedures,
  },
  {
    provide: studyProcedures2Token,
    useValue: studyProcedures2,
  },
  {
    provide: scientificControlsToken,
    useValue: scientificControls,
  }
];
export const defTrialScientific: ColDefTrialScientific = {
  comparatorDrugControlled: undefined,
  comparatorName: undefined,
  patentExpiryDate: undefined,
  administrationRoute: undefined,
  requirements: undefined,
  description: undefined,
  patientPopulation: undefined,
  minAge: undefined,
  minAgeMonths: undefined,
  maxAge: undefined,
  maxAgeMonths: undefined,
  ageUnit: undefined,
  pediatric: undefined,
  keyInclusions: undefined,
  keyExclusions: undefined,
  keyPrimaryEndpoint: undefined,
  keySecondaryEndpoint: undefined,
  visitStructure: undefined,
  visitWindows: undefined,
  followUpPeriod: undefined,
  studyProcedures: undefined,
  procedureDescription: undefined,
  trialDesign: undefined,
  designDescription: undefined,
};
export const maxAgeValidator = (control: AbstractControl): ValidationErrors | null => {
  const maxAge = control.value;
  const minAge = control?.parent?.get('minAge');

  let errors: ValidationErrors | null = null;

  if (maxAge && control?.dirty) {
    if (minAge && minAge.value && maxAge < minAge.value) {
      errors = { maxAgeMinAge: true };
    }
  }

  return errors !== null ? errors : null;
};
export const minAgeValidator = (control: AbstractControl): ValidationErrors | null => {
  const minAge = control.value;
  const maxAge = control?.parent?.get('maxAge');

  let errors: ValidationErrors | null = null;

  if (minAge && control?.dirty) {
    if (maxAge && maxAge.value && minAge > maxAge.value) {
      errors = { minAgeMaxAge: true };
    }
  }

  return errors !== null ? errors : null;
};
