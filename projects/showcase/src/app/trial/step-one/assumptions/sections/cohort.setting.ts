import { InjectionToken } from '@angular/core';
import {
  AssumptionsCohortControls,
  AssumptionsCohortFieldsTitles,
  ColDefTrialCohort,
  DateBoundaryKey,
  DateBoundUpdate,
  TrialCohort,
} from '@assumptions/sections/cohort';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const cohortFields: AssumptionsCohortFieldsTitles = {
  author: 'author',
  description: 'description',
  endDate: 'endDate',
  firstSubjectIn: 'firstSubjectIn',
  lastSubjectIn: 'lastSubjectIn',
  id: 'id',
  lastUpdate: 'lastUpdate',
  name: 'name',
  patients: 'patients',
  observationPeriod: 'observationPeriod',
  recruitmentRate: 'recruitmentRate',
  sites: 'sites',
  startDate: 'startDate',
  additionalComments: 'additionalComments',
};

export const cohortControls: AssumptionsCohortControls = {
  author: {
    name: cohortFields.author,
    export: false,
    title: 'Author',
  },
  additionalComments: {
    name: cohortFields.additionalComments,
    export: true,
    title: 'Comments',
  },
  id: {
    name: cohortFields.id,
    export: false,
    title: 'id',
  },
  lastUpdate: {
    name: cohortFields.lastUpdate,
    title: 'Last Updated',
    export: false,
  },
  name: {
    name: cohortFields.name,
    export: true,
    title: 'Name',
  },
  startDate: {
    name: cohortFields.startDate,
    export: true,
    title: 'Start Date',
    info: 'The open date of the cohort.',
  },
  endDate: {
    name: cohortFields.endDate,
    export: true,
    title: 'End Date',
    info: 'The closed date of the cohort.',
  },
  firstSubjectIn: {
    name: cohortFields.firstSubjectIn,
    export: true,
    title: 'First Subject In',
    info: 'The first subject enrolled into the cohort',
  },
  lastSubjectIn: {
    name: cohortFields.lastSubjectIn,
    export: true,
    title: 'Last Subject In',
    info: 'The last subject enrolled into the cohort.',
  },
  observationPeriod: {
    name: cohortFields.observationPeriod,
    title: 'Observation Period',
    export: true,
    unit: 'Weeks',
    info: 'The number of weeks the subjects are observed from a "safety" perspective.',
  },
  recruitmentRate: {
    name: cohortFields.recruitmentRate,
    unit: 'P/S/M',
    export: true,
    title: 'Recruitment Rate',
    info: 'The number of patient/site/months for the cohort.',
    decimals: 2,
  },
  sites: {
    name: cohortFields.sites,
    export: true,
    title: 'Sites',
  },
  patients: {
    name: cohortFields.patients,
    export: true,
    title: 'Subjects',
  },
  description: {
    name: cohortFields.description,
    export: true,
    title: 'Description',
  },
};

export const cohortControlsToken = new InjectionToken<AssumptionsCohortControls>('Cohort Page Form Fields');

export const defTrialCohort: ColDefTrialCohort = {
  name: undefined,
  description: undefined,
  startDate: undefined,
  firstSubjectIn: undefined,
  lastSubjectIn: undefined,
  endDate: undefined,
  observationPeriod: undefined,
  recruitmentRate: undefined,
  sites: undefined,
  patients: undefined,
  additionalComments: undefined,
  id: undefined,
  lastUpdate: undefined,
  author: undefined,
};

export const newCohortPlaceHolder: Partial<TrialCohort> = {
  name: 'New Cohort',
  author: 'Logged User',
};

export function calculateUpdatedDateBoundaries(
  value: string | Date | null,
  validation: DateBoundUpdate
): Partial<Record<DateBoundaryKey, Date | null>> {
  if (!value) {
    switch (validation) {
      case 'startDate < firstSubjectIn':
        return { firstSubjectInMin: null };
      case 'firstSubjectIn > startDate':
        return { startDateMax: null };
      case 'firstSubjectIn < lastSubjectIn':
        return { lastSubjectInMin: null };
      case 'lastSubjectIn > firstSubjectIn':
        return { firstSubjectInMax: null };
      case 'lastSubjectIn < endDate':
        return { endDateMin: null };
      case 'endDate > lastSubjectIn':
        return { lastSubjectInMax: null };
      default:
        return {};
    }
  }

  const dateValue = value instanceof Date ? new Date(value) : new Date(value);

  switch (validation) {
    case 'startDate < firstSubjectIn':
      return { firstSubjectInMin: dateValue };
    case 'firstSubjectIn > startDate':
      return { startDateMax: dateValue };
    case 'firstSubjectIn < lastSubjectIn':
      return { lastSubjectInMin: dateValue };
    case 'lastSubjectIn > firstSubjectIn':
      return { firstSubjectInMax: dateValue };
    case 'lastSubjectIn < endDate':
      return { endDateMin: dateValue };
    case 'endDate > lastSubjectIn':
      return { lastSubjectInMax: dateValue };
    default:
      return {};
  }
}

export const datesValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
  const startDate = group.get('startDate')?.value;
  const firstSubjectIn = group.get('firstSubjectIn')?.value;
  const lastSubjectIn = group.get('lastSubjectIn')?.value;
  const endDate = group.get('endDate')?.value;

  const errors: ValidationErrors = {};

  if (startDate && firstSubjectIn) {
    const startDateObj = new Date(startDate);
    const firstSubjectInObj = new Date(firstSubjectIn);

    if (firstSubjectInObj < startDateObj) {
      errors['invalidFirstSubjectIn'] = true;
    }
  }

  if (firstSubjectIn && lastSubjectIn) {
    const firstSubjectInObj = new Date(firstSubjectIn);
    const lastSubjectInObj = new Date(lastSubjectIn);

    if (lastSubjectInObj < firstSubjectInObj) {
      errors['invalidLastSubjectIn'] = true;
    }
  }

  if (lastSubjectIn && endDate) {
    const lastSubjectInObj = new Date(lastSubjectIn);
    const endDateObj = new Date(endDate);

    if (endDateObj < lastSubjectInObj) {
      errors['invalidEndDate'] = true;
    }
  }

  return Object.keys(errors).length ? errors : null;
};

export const cohortFormProviders = [
  {
    provide: cohortControlsToken,
    useValue: cohortControls,
  }
];
