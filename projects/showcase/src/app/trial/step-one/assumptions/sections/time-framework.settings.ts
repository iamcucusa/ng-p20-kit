import { AbstractControl, ValidationErrors } from '@angular/forms';
import { differenceInMonths, isAfter } from 'date-fns';
import {
  AssumptionsTimeFrameworkControls,
  AssumptionsTimeFrameworkFieldsTitles,
  ColDefTrialTimeFramework,
} from '@assumptions/sections/time-framework';
import { InjectionToken } from '@angular/core';
import { AutofillState } from '@assumptions/sections/autofill';

/**
 * Time Framework Settings and Configuration
 * 
 * Provides comprehensive configuration for clinical trial time framework forms.
 * Includes field definitions, validation rules, autofill settings, and utility functions
 * for managing trial timeline planning and validation.
 * 
 * @fileoverview Configuration and utilities for clinical trial time framework system
 * @since 1.0.0
 */

/**
 * Time Framework Fields Titles
 * 
 * Maps TimeFramework interface properties to their string field names.
 * Used for form control identification and data binding.
 * 
 * @constant {AssumptionsTimeFrameworkFieldsTitles}
 * 
 * @example
 * ```typescript
 * const fieldName = timeFrameworkFieldsTitles.tdoKickOff; // 'tdoKickOff'
 * ```
 * 
 * @since 1.0.0
 */
export const timeFrameworkFieldsTitles: AssumptionsTimeFrameworkFieldsTitles = {
  hmTrial: 'hmTrial',
  hmTrialDetails: 'hmTrialDetails',
  extendedWorkbench: 'extendedWorkbench',
  studySynopsis: 'studySynopsis',
  keyResults: 'keyResults',
  tdoKickOff: 'tdoKickOff',
  draftTDO: 'draftTDO',
  finalTDO: 'finalTDO',
  finalProtocol: 'finalProtocol',
  finalCTAPackage: 'finalCTAPackage',
  firstInitiationVisit: 'firstInitiationVisit',
  firstSubjectRandomised: 'firstSubjectRandomised',
  firstSubjectScreened: 'firstSubjectScreened',
  lastSubjectScreened: 'lastSubjectScreened',
  lastSubjectRandomised: 'lastSubjectRandomised',
  lastSubjectCompleted: 'lastSubjectCompleted',
  sitesCount: 'sitesCount',
  randomizationPeriod: 'randomizationPeriod',
  randomizationPeriodMonths: 'randomizationPeriodMonths',
  randomizationPeriodDays: 'randomizationPeriodDays',
  enrollmentRate: 'enrollmentRate',
  enrollmentPeriod: 'enrollmentPeriod',
  enrollmentPeriodMonths: 'enrollmentPeriodMonths',
  enrollmentPeriodDays: 'enrollmentPeriodDays',
  randomizationRate: 'randomizationRate',
  treatmentDuration: 'treatmentDuration',
  treatmentDurationMonths: 'treatmentDurationMonths',
  treatmentDurationUnit: 'treatmentDurationUnit',
  outcomeStudy: 'outcomeStudy',
  treatmentDurationEndpoint: 'treatmentDurationEndpoint',
  treatmentDurationEndpointMonths: 'treatmentDurationEndpointMonths',
  treatmentDurationEndpointUnit: 'treatmentDurationEndpointUnit',
  numberOfEvents: 'numberOfEvents',
  timeToNumberOfEvents: 'timeToNumberOfEvents',
  timeToNumberOfEventsMonths: 'timeToNumberOfEventsMonths',
  timeToNumberOfEventUnit: 'timeToNumberOfEventUnit',
  subjectsScreened: 'subjectsScreened',
  subjectsRandomized: 'subjectsRandomized',
  subjectsCompleted: 'subjectsCompleted',
  screenFailure: 'screenFailure',
  screeningRate: 'screeningRate',
  screeningPeriod: 'screeningPeriod',
  screeningPeriodMonths: 'screeningPeriodMonths',
  screeningPeriodDays: 'screeningPeriodDays',
  dropOutRate: 'dropOutRate',
};
export const timeFrameworkControls: AssumptionsTimeFrameworkControls = {
  hmTrial: {
    name: timeFrameworkFieldsTitles.hmTrial,
    export: true,
    title: 'HM Trial',
    info: 'Hybrid Outsourced Model',
  },
  hmTrialDetails: {
    name: timeFrameworkFieldsTitles.hmTrialDetails,
    export: true,
    title: 'HM Trial Details',
  },
  extendedWorkbench: {
    name: timeFrameworkFieldsTitles.extendedWorkbench,
    export: true,
    title: 'Extended Workbench',
  },
  studySynopsis: {
    name: timeFrameworkFieldsTitles.studySynopsis,
    export: true,
    title: 'Mature Study Synopsis',
  },
  keyResults: {
    name: timeFrameworkFieldsTitles.keyResults,
    export: true,
    title: 'Prior Key Results',
  },
  tdoKickOff: {
    name: timeFrameworkFieldsTitles.tdoKickOff,
    export: true,
    title: 'TDO Kick Off',
  },
  draftTDO: { name: timeFrameworkFieldsTitles.draftTDO, export: true, title: 'TDO Draft' },
  finalTDO: { name: timeFrameworkFieldsTitles.finalTDO, export: true, title: 'TDO Final' },
  finalProtocol: {
    name: timeFrameworkFieldsTitles.finalProtocol,
    export: true,
    title: 'Final Protocol',
  },
  finalCTAPackage: {
    name: timeFrameworkFieldsTitles.finalCTAPackage,
    export: true,
    title: 'Final CTA Package',
  },
  firstInitiationVisit: {
    name: timeFrameworkFieldsTitles.firstInitiationVisit,
    export: true,
    title: 'First Initiation Visit',
  },
  firstSubjectRandomised: {
    name: timeFrameworkFieldsTitles.firstSubjectRandomised,
    export: true,
    title: 'First Subject Randomised',
  },
  firstSubjectScreened: {
    name: timeFrameworkFieldsTitles.firstSubjectScreened,
    export: true,
    title: 'First Subject Screened',
  },
  lastSubjectScreened: {
    name: timeFrameworkFieldsTitles.lastSubjectScreened,
    export: true,
    title: 'Last Subject Screened',
  },
  lastSubjectRandomised: {
    name: timeFrameworkFieldsTitles.lastSubjectRandomised,
    export: true,
    title: 'Last Subject Randomised',
  },
  lastSubjectCompleted: {
    name: timeFrameworkFieldsTitles.lastSubjectCompleted,
    export: true,
    title: 'Last Subject Completed',
  },
  sitesCount: {
    name: timeFrameworkFieldsTitles.sitesCount,
    export: true,
    title: 'Sites',
    unit: '#',
  },
  randomizationPeriod: {
    name: timeFrameworkFieldsTitles.randomizationPeriod,
    export: true,
    title: 'Randomisation Period',
    unit: 'months',
    info: 'The randomisation period is defined as the First Subject Randomised to the Last Subject Randomised.',
  },
  randomizationPeriodMonths: {
    name: timeFrameworkFieldsTitles.randomizationPeriodMonths,
    export: false,
    title: 'Randomisation Period Months',
    unit: 'months',
    info: 'The randomisation period is defined as the First Subject Randomised to the Last Subject Randomised.',
  },
  randomizationPeriodDays: {
    name: timeFrameworkFieldsTitles.randomizationPeriodDays,
    export: false,
    title: 'Randomisation Period',
    unit: 'days',
  },
  enrollmentRate: {
    name: timeFrameworkFieldsTitles.enrollmentRate,
    export: true,
    title: 'Enrollment Rate',
    unit: 'P/S/M',
  },
  enrollmentPeriod: {
    name: timeFrameworkFieldsTitles.enrollmentPeriod,
    export: true,
    title: 'Enrollment Period',
    unit: 'months',
    info: 'The enrollment period is defined as the First Initiation Visit to the Last Subject Randomised.',
  },
  enrollmentPeriodMonths: {
    name: timeFrameworkFieldsTitles.enrollmentPeriodMonths,
    export: false,
    title: 'Enrollment Period Months',
    unit: 'months',
    info: 'The enrollment period is defined as the First Initiation Visit to the Last Subject Randomised.',
  },
  enrollmentPeriodDays: {
    name: timeFrameworkFieldsTitles.enrollmentPeriodDays,
    export: false,
    title: 'Enrollment Period',
    unit: 'days',
  },
  randomizationRate: {
    name: timeFrameworkFieldsTitles.randomizationRate,
    export: true,
    title: 'Randomisation Rate',
    unit: 'P/S/M',
  },
  screeningRate: {
    name: timeFrameworkFieldsTitles.screeningRate,
    export: true,
    title: 'Screening Rate',
    unit: 'P/S/M',
  },
  screeningPeriod: {
    name: timeFrameworkFieldsTitles.screeningPeriod,
    export: true,
    title: 'Screening Period',
    unit: 'months',
    info: 'The screening period is defined as the First Subject Screened to the Last Subject Screened.',
  },
  screeningPeriodMonths: {
    name: timeFrameworkFieldsTitles.screeningPeriodMonths,
    export: false,
    title: 'Screening Period Months',
    unit: 'months',
    info: 'The screening period is defined as the First Subject Screened to the Last Subject Screened.',
  },
  screeningPeriodDays: {
    name: timeFrameworkFieldsTitles.screeningPeriodDays,
    export: false,
    title: 'Screening Period',
    unit: 'days',
  },
  treatmentDuration: {
    name: timeFrameworkFieldsTitles.treatmentDuration,
    export: false,
    title: 'Treatment Period',
    unit: 'Weeks',
  },
  treatmentDurationMonths: {
    name: timeFrameworkFieldsTitles.treatmentDurationMonths,
    export: true,
    title: 'Treatment Period',
    unit: 'Months',
  },
  treatmentDurationUnit: {
    name: timeFrameworkFieldsTitles.treatmentDurationUnit,
    export: false,
    title: 'Unit',
  },
  outcomeStudy: {
    name: timeFrameworkFieldsTitles.outcomeStudy,
    export: true,
    title: 'Outcome Study',
  },
  treatmentDurationEndpoint: {
    name: timeFrameworkFieldsTitles.treatmentDurationEndpoint,
    export: false,
    title: 'Duration to Primary Endpoint',
    unit: 'Weeks',
  },
  treatmentDurationEndpointMonths: {
    name: timeFrameworkFieldsTitles.treatmentDurationEndpointMonths,
    export: true,
    title: 'Duration to Primary Endpoint',
    unit: 'Months',
  },
  treatmentDurationEndpointUnit: {
    name: timeFrameworkFieldsTitles.treatmentDurationEndpointUnit,
    export: false,
    title: 'Unit',
  },
  numberOfEvents: {
    name: timeFrameworkFieldsTitles.numberOfEvents,
    export: true,
    title: 'Number of Events',
  },
  timeToNumberOfEvents: {
    name: timeFrameworkFieldsTitles.timeToNumberOfEvents,
    export: false,
    title: 'Time to Number of Events',
  },
  timeToNumberOfEventsMonths: {
    name: timeFrameworkFieldsTitles.timeToNumberOfEventsMonths,
    export: true,
    title: 'Time to Number of Events',
    unit: 'Months',
  },
  timeToNumberOfEventUnit: {
    name: timeFrameworkFieldsTitles.timeToNumberOfEventUnit,
    export: false,
    title: 'Unit',
  },
  subjectsScreened: {
    name: timeFrameworkFieldsTitles.subjectsScreened,
    export: true,
    title: 'Subjects Screened',
    unit: '#',
  },
  subjectsRandomized: {
    name: timeFrameworkFieldsTitles.subjectsRandomized,
    export: true,
    title: 'Subjects Randomized',
    unit: '#',
  },
  subjectsCompleted: {
    name: timeFrameworkFieldsTitles.subjectsCompleted,
    export: true,
    title: 'Subjects Completed Treatment',
    unit: '#',
  },
  screenFailure: {
    name: timeFrameworkFieldsTitles.screenFailure,
    export: true,
    title: 'Screen Failure',
    unit: '%',
  },
  dropOutRate: {
    name: timeFrameworkFieldsTitles.dropOutRate,
    export: true,
    title: 'Drop Out Rate',
    unit: '%',
  },
};
/**
 * Time Framework Controls Injection Token
 * 
 * Angular injection token for providing time framework form controls configuration.
 * Used for dependency injection in components that need form field metadata.
 * 
 * @constant {InjectionToken<AssumptionsTimeFrameworkControls>}
 * 
 * @since 1.0.0
 */
export const timeFrameworkControlsToken = new InjectionToken<AssumptionsTimeFrameworkControls>(
  'Time Framework Page Form Fields'
);

/**
 * Time Framework Autofill State
 * 
 * Defines which time framework fields are enabled for autofill functionality.
 * Fields set to true will be automatically populated based on previous data.
 * 
 * @constant {AutofillState}
 * 
 * @example
 * ```typescript
 * const isAutofillEnabled = timeFrameworkAutofillState['keyResults']; // true
 * ```
 * 
 * @since 1.0.0
 */
export const timeFrameworkAutofillState: AutofillState = {
  [timeFrameworkControls.keyResults.name]: true,
  [timeFrameworkControls.tdoKickOff.name]: true,
  [timeFrameworkControls.finalTDO.name]: true,
  [timeFrameworkControls.finalProtocol.name]: true,
  [timeFrameworkControls.finalCTAPackage.name]: true,
  [timeFrameworkControls.firstInitiationVisit.name]: true,
  [timeFrameworkControls.firstSubjectScreened.name]: true,
  [timeFrameworkControls.firstSubjectRandomised.name]: true,
  [timeFrameworkControls.lastSubjectRandomised.name]: true,
  [timeFrameworkControls.lastSubjectScreened.name]: true,
  [timeFrameworkControls.lastSubjectCompleted.name]: true,
  [timeFrameworkControls.sitesCount.name]: true,
  [timeFrameworkControls.subjectsRandomized.name]: true,
  [timeFrameworkControls.subjectsScreened.name]: true,
  [timeFrameworkControls.subjectsCompleted.name]: true,
};
/**
 * Time Framework Autofill State Injection Token
 * 
 * Angular injection token for providing autofill state configuration.
 * Used for dependency injection in components that need autofill functionality.
 * 
 * @constant {InjectionToken<AutofillState>}
 * 
 * @since 1.0.0
 */
export const timeFrameworkAutofillStateToken = new InjectionToken<AutofillState>('Planning Autofill Fields');

/**
 * Time Framework Providers
 * 
 * Angular providers array for time framework configuration.
 * Provides form controls and autofill state through dependency injection.
 * 
 * @constant {Array}
 * 
 * @example
 * ```typescript
 * @Component({
 *   providers: [...timeFrameworkProviders]
 * })
 * ```
 * 
 * @since 1.0.0
 */
export const timeFrameworkProviders = [
  {
    provide: timeFrameworkControlsToken,
    useValue: timeFrameworkControls,
  },
  {
    provide: timeFrameworkAutofillStateToken,
    useValue: timeFrameworkAutofillState,
  },
];

/**
 * Default Trial Time Framework Configuration
 * 
 * Provides default column definitions for time framework data tables.
 * All fields are set to undefined for flexible table configuration.
 * 
 * @constant {ColDefTrialTimeFramework}
 * 
 * @since 1.0.0
 */

export const defTrialTimeFramework: ColDefTrialTimeFramework = {
  studySynopsis: undefined,
  keyResults: undefined,
  tdoKickOff: undefined,
  draftTDO: undefined,
  finalTDO: undefined,
  finalProtocol: undefined,
  finalCTAPackage: undefined,
  firstInitiationVisit: undefined,
  hmTrial: undefined,
  hmTrialDetails: undefined,
  extendedWorkbench: undefined,
  firstSubjectScreened: undefined,
  firstSubjectRandomised: undefined,
  lastSubjectScreened: undefined,
  lastSubjectRandomised: undefined,
  lastSubjectCompleted: undefined,
  outcomeStudy: undefined,
  treatmentDurationEndpoint: undefined,
  treatmentDurationEndpointMonths: undefined,
  treatmentDurationEndpointUnit: undefined,
  treatmentDuration: undefined,
  treatmentDurationMonths: undefined,
  treatmentDurationUnit: undefined,
  numberOfEvents: undefined,
  timeToNumberOfEvents: undefined,
  timeToNumberOfEventsMonths: undefined,
  timeToNumberOfEventUnit: undefined,
  sitesCount: undefined,
  subjectsScreened: undefined,
  screenFailure: undefined,
  subjectsRandomized: undefined,
  dropOutRate: undefined,
  subjectsCompleted: undefined,
  screeningRate: undefined,
  screeningPeriod: undefined,
  screeningPeriodMonths: undefined,
  screeningPeriodDays: undefined,
  randomizationRate: undefined,
  randomizationPeriod: undefined,
  randomizationPeriodMonths: undefined,
  randomizationPeriodDays: undefined,
  enrollmentRate: undefined,
  enrollmentPeriod: undefined,
  enrollmentPeriodMonths: undefined,
  enrollmentPeriodDays: undefined,
};

/**
 * Validates date sequence logic across multiple pairs of fields
 * 
 * Ensures proper chronological ordering of clinical trial milestones according to
 * the validation rules: MSS ≤ TDO KO ≤ Draft TDO ≤ Final TDO ≤ Final Protocol ≤ 
 * Final CTA Package ≤ First Initiation Visit ≤ First Subject Randomised ≤ 
 * Last Subject Randomised ≤ Last Subject Completed
 * 
 * @param {AbstractControl} group - The form group containing date fields
 * @returns {ValidationErrors | null} Validation errors object or null if valid
 * 
 * @example
 * ```typescript
 * const errors = validateDates(timeFrameworkForm);
 * if (errors) {
 *   console.log('Date validation failed:', errors);
 * }
 * ```
 * 
 * @since 1.0.0
 */
export function validateDates(group: AbstractControl): ValidationErrors | null {
  const datePairs: [string, string, string][] = [
    ['studySynopsis', 'tdoKickOff', 'studySynopsisAfterTdoKickoff'],
    ['tdoKickOff', 'draftTDO', 'tdoKickoffAfterDraft'],
    ['draftTDO', 'finalTDO', 'draftAfterFinal'],
    ['finalTDO', 'finalProtocol', 'finalTdoAfterProtocol'],
    ['finalProtocol', 'finalCTAPackage', 'protocolAfterCta'],
    ['finalCTAPackage', 'firstInitiationVisit', 'ctaAfterFiv'],
    ['firstInitiationVisit', 'firstSubjectScreened', 'fivAfterFss'],
    ['firstSubjectScreened', 'firstSubjectRandomised', 'fssAfterFsr'],
    ['firstSubjectRandomised', 'lastSubjectScreened', 'fsrAfterLss'],
    ['firstSubjectRandomised', 'lastSubjectRandomised', 'fsrAfterLsr'],
    ['lastSubjectScreened', 'lastSubjectRandomised', 'lssAfterLsr'],
    ['lastSubjectScreened', 'lastSubjectCompleted', 'lssAfterLsc'],
    ['lastSubjectRandomised', 'lastSubjectCompleted', 'lsrAfterLsc'],
  ];

  for (const [fromKey, toKey, errorKey] of datePairs) {
    const from = group.get(fromKey)?.value;
    const to = group.get(toKey)?.value;

    if (from && to) {
      const fromDate = new Date(from);
      const toDate = new Date(to);
      if (isAfter(fromDate, toDate)) {
        return { [errorKey]: true };
      }
    }
  }

  return null;
}

/**
 * Calculates duration between two dates in months
 * 
 * Uses date-fns differenceInMonths function to calculate the duration
 * between two date strings, returning the result in months.
 * 
 * @param {string | null} from - Start date string (ISO format)
 * @param {string | null} to - End date string (ISO format)
 * @returns {number | null} Duration in months, or null if either date is invalid
 * 
 * @example
 * ```typescript
 * const duration = calculateDuration('2024-01-01', '2024-07-01'); // 6
 * const invalid = calculateDuration(null, '2024-07-01'); // null
 * ```
 * 
 * @since 1.0.0
 */
export function calculateDuration(from: string | null, to: string | null): number | null {
  if (!from || !to) return null;
  return differenceInMonths(new Date(to), new Date(from));
}
