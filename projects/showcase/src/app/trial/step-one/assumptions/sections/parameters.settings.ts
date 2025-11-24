import { InjectionToken } from '@angular/core';
import { AutofillState } from '@assumptions/sections/autofill';
import {
  AssumptionsParametersControls, AssumptionsParametersExportControls, AssumptionsParametersExportFieldsTitles,
  AssumptionsParametersFieldsTitles,
  ColDefTrialParameters,
  StudyNumberCTMSMask,
  StudyNumberMask,
  StudyPhase,
  TherapeuticArea,
} from '@assumptions/sections/parameters';
import { Trial } from '@trial/trial';
import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


export const parametersFields: AssumptionsParametersFieldsTitles = {
  studyNumber: 'studyNumber',
  versionNumber: 'versionNumber',
  studyName: 'studyName',
  therapeuticArea: 'therapeuticArea',
  others: 'others',
  milestone: 'milestone',
  studyPhase: 'studyPhase',
  hpcBiberach: 'hpcBiberach',
  indication: 'indication',
  biCompound: 'biCompound',
  studyMoa: 'studyMoa',
  versionDescription: 'versionDescription',
  keyChanges: 'keyChanges',
  ctmsTrial: 'ctmsTrial'
};

export const parametersExportFields: AssumptionsParametersExportFieldsTitles = {
  ...parametersFields,
  scenario: 'scenario',
  description: 'description'

};

export const newTrialControls: Partial<AssumptionsParametersControls> = {
  ctmsTrial: {
    name: parametersFields.ctmsTrial,
    export: false,
    title: 'CTMS Trial.',
  },
  studyNumber: {
    name: parametersFields.studyNumber,
    export: true,
    title: 'Trial Number',
  },
  studyName: { name: parametersFields.studyName, export: true, title: 'Title' },
  milestone: {
    name: parametersFields.milestone,
    export: true,
    title: 'Milestone',
  },
  therapeuticArea: {
    name: parametersFields.therapeuticArea,
    export: true,
    title: 'Therapeutic Area',
  },
  others: {
    name: parametersFields.others,
    export: true,
    title: 'Other Therapeutic Area',
  },
  studyPhase: {
    name: parametersFields.studyPhase,
    export: true,
    title: 'Phase',
  },
  hpcBiberach: {
    name: parametersFields.hpcBiberach,
    export: true,
    title: 'Human Pharmacology Centre (HPC) Biberach?',
  },
  indication: {
    name: parametersFields.indication,
    export: true,
    title: 'Indication',
  },
  biCompound: {
    name: parametersFields.biCompound,
    export: true,
    title: 'BI Compound',
  },
  studyMoa: {
    name: parametersFields.studyMoa,
    export: true,
    title: 'Mode of Action(MOA)',
  },
};
export const parametersControls: AssumptionsParametersControls = {
  ...newTrialControls as AssumptionsParametersControls,
  versionNumber: {
    name: parametersFields.versionNumber as string,
    export: true,
    title: 'Version Number',
  },
  versionDescription: {
    name: parametersFields.versionDescription,
    export: true,
    title: 'Version Description',
  },
  keyChanges: {
    name: parametersFields.keyChanges,
    export: true,
    title: 'Key Changes',
  }
};

export const parametersExportControls: AssumptionsParametersExportControls = {
  ...parametersControls as AssumptionsParametersControls,
  scenario: {
    name: parametersExportFields.scenario,
    export: false,
    title: 'Scenario'
  },
  description: {
    name: parametersExportFields.description,
    export: false,
    title: 'Description'
  }
};

export const newTrialControlsToken = new InjectionToken<AssumptionsParametersControls>('New Trial Page Form Fields');
export const parametersControlsToken = new InjectionToken<AssumptionsParametersControls>('Trial Parameters Page Form Fields');
export const parametersExportControlsToken = new InjectionToken<AssumptionsParametersExportControls>('Trial Parameters Page Form Fields');

export const parametersAutofillState: AutofillState = {
  [parametersControls.biCompound.name]: true,
};
export const parametersAutofillStateToken = new InjectionToken<AutofillState>('Trial Parameters Autofill Fields');

/**
 * Export settings order for Trial Parameters Section
 */

export const defTrialParameters: ColDefTrialParameters = {
  ctmsTrial: undefined,
  studyNumber: undefined,
  versionNumber: undefined,
  milestone: undefined,
  studyName: undefined,
  scenario: undefined,
  description: undefined,
  therapeuticArea: undefined,
  others: undefined,
  studyPhase: undefined,
  hpcBiberach: undefined,
  indication: undefined,
  biCompound: undefined,
  studyMoa: undefined,
  versionTitle: undefined,
  versionDescription: undefined,
  keyChanges: undefined,

};
export const studyPhases: { label: StudyPhase; value: StudyPhase }[] = [
  { label: 'I', value: 'I' },
  { label: 'IA', value: 'IA' },
  { label: 'IB', value: 'IB' },
  { label: 'II', value: 'II' },
  { label: 'IIA', value: 'IIA' },
  { label: 'IIB', value: 'IIB' },
  { label: 'III', value: 'III' },
  { label: 'IIIA', value: 'IIIA' },
  { label: 'IIIB', value: 'IIIB' },
  { label: 'I/II', value: 'I/II' },
  { label: 'II/III', value: 'II/III' },
];
export const studyPhasesToken = new InjectionToken<typeof studyPhases>('Study Phases List');
export const trialPhases: { page: { value: StudyPhase }[] }[] = [
  {
    page: [
      { value: 'I' },
      { value: 'IA' },
      { value: 'IB' },
      { value: 'II' },
      { value: 'IIA' },
      { value: 'IIB' },
      { value: 'III' },
      { value: 'IIIA' },
      { value: 'IIIB' },
      { value: 'I/II' },
      { value: 'II/III' },
    ],
  },
];
export const trialPhasesToken = new InjectionToken<{ page: { value: StudyPhase }[] }[]>('Trial Phases List');
export const therapeuticAreas: {
  label: TherapeuticArea;
  value: TherapeuticArea;
}[] = [
  { label: 'Biosimilars', value: 'Biosimilars' },
  { label: 'CHC', value: 'CHC' },
  { label: 'CRM', value: 'CRM' },
  { label: 'CNS', value: 'CNS' },
  { label: 'Diabetes', value: 'Diabetes' },
  { label: 'Established Products', value: 'Established Products' },
  { label: 'Immunology', value: 'Immunology' },
  { label: 'IPF/ILD', value: 'IPF/ILD' },
  { label: 'Obesity, CKD & NASH', value: 'Obesity, CKD & NASH' },
  { label: 'Oncology', value: 'Oncology' },
  { label: 'Pradaxa', value: 'Pradaxa' },
  { label: 'Research Beyond Borders', value: 'Research Beyond Borders' },
  { label: 'Respiratory', value: 'Respiratory' },
  { label: 'Retinopathies', value: 'Retinopathies' },
  { label: 'Others', value: 'Others' },
];
export const therapeuticAreasToken = new InjectionToken<typeof therapeuticAreas>('Therapeutic Areas List');



export function trialNumberUnique(trials: Trial[], activeTrial: Trial | null): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value) {
      const matches = trials.filter((trial) => {
        const match = trial.parameters.studyNumber?.trim().toLowerCase() === String(control.value.trim().toLowerCase());

        /**
         * We validate the active trial number id is still unique
         */
        if (activeTrial) {
          return match && activeTrial.id !== trial.id;
        }
        return match;
      });
      if (matches.length > 0) {
        return { notUnique: true };
      }
    }
    return null;
  };
}

export const studyNumberMask: StudyNumberMask = '****-****';
export const studyNumberMaskToken = new InjectionToken<StudyNumberMask>('Study Number Mask');
export const studyNumberCTMSMask = '9999-9999';
export const studyNumberCTMSMaskToken = new InjectionToken<StudyNumberCTMSMask>('Study Number Mask');
export const studyNumberProvides = [
  {
    provide: studyNumberCTMSMaskToken,
    useValue: studyNumberCTMSMask,
  },
  {
    provide: studyNumberMaskToken,
    useValue: studyNumberMask,
  },
];
export const validatorsNumericNumeric: ValidatorFn[] = [
  (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const isNumericNumeric = /^\d+-\d+$/.test(value);
    return isNumericNumeric ? null : { notNumericNumeric: { value: control.value } };
  },
];
export const validatorsNotNumericNumeric: ValidatorFn[] = [
  (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    const isNumericNumeric = /^\d+-\d+$/.test(value);
    return isNumericNumeric ? { numericNumeric: { value: control.value } } : null;
  },
];

export function validatorsStudyNumber(trialList: Trial[], activeTrial: Trial | null, ctmsTrial = false): ValidatorFn[] {
  const baseValidators = [Validators.required];
  const numericValidators = ctmsTrial ? validatorsNumericNumeric : validatorsNotNumericNumeric;
  const uniqueValidator = trialNumberUnique(trialList, activeTrial);

  return trialList
    ? [uniqueValidator, ...baseValidators, ...numericValidators]
    : [...baseValidators, ...numericValidators];
}

export const titleMinLengthValue = 12 as const;
export const titleMinLengthToken = new InjectionToken<typeof titleMinLengthValue>('min length for titles');
export const titleMaxLengthValue = 24 as const;
export const titleMaxLengthToken = new InjectionToken<typeof titleMaxLengthValue>('max length for titles');
export const descriptionMinLengthValue = 10 as const;
export const descriptionMinLengthToken = new InjectionToken<typeof descriptionMinLengthValue>(
  'min length for descriptions',
);
export const descriptionMaxLengthValue = 1500 as const;
export const descriptionMaxLengthLengthToken = new InjectionToken<typeof descriptionMaxLengthValue>(
  'max length for descriptions',
);

export const trialParametersFormProviders = [
  {
    provide: newTrialControlsToken,
    useValue: newTrialControls,
  },
  {
    provide: parametersControlsToken,
    useValue: parametersControls,
  },
  {
    provide: parametersExportControlsToken,
    useValue: parametersExportControls
  },
  {
    provide: parametersAutofillStateToken,
    useValue: parametersAutofillState,
  },
  {
    provide: studyPhasesToken,
    useValue: studyPhases,
  },
  {
    provide: trialPhasesToken,
    useValue: trialPhases,
  },
  {
    provide: therapeuticAreasToken,
    useValue: therapeuticAreas,
  },
  {
    provide: titleMinLengthToken,
    useValue: titleMinLengthValue,
  },
  {
    provide: titleMaxLengthToken,
    useValue: titleMaxLengthValue,
  },
  {
    provide: descriptionMinLengthToken,
    useValue: descriptionMinLengthValue,
  },
  {
    provide: descriptionMaxLengthLengthToken,
    useValue: descriptionMaxLengthValue,
  },
];
