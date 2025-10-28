/**
 * Time Framework Type Definitions
 * 
 * Defines the complete data structure for clinical trial time framework planning.
 * Includes all timeline milestones, duration estimates, and validation rules
 * for proper chronological ordering of trial phases.
 * 
 * @fileoverview Type definitions for clinical trial time framework system
 * @since 1.0.0
 */

import { AssumptionsFieldsNames, AssumptionsSectionsFields } from '@assumptions/assumptions';

/**
 * Time Framework Interface
 * 
 * Comprehensive interface representing all aspects of clinical trial timeline planning.
 * Includes study milestones, participant tracking, duration estimates, and validation
 * fields for ensuring proper chronological ordering of trial phases.
 * 
 * @interface TimeFramework
 * @property {string | null} hmTrial - Hybrid Model Trial identifier
 * @property {string | null} hmTrialDetails - Detailed description of hybrid model trial
 * @property {string | null} extendedWorkbench - Extended workbench configuration
 * @property {string | null} studySynopsis - Mature study synopsis document
 * @property {string | null} keyResults - Prior key results from related studies
 * @property {string | null} tdoKickOff - TDO (Trial Design Optimization) kick-off date
 * @property {string | null} draftTDO - Draft TDO document date
 * @property {string | null} finalTDO - Final TDO document date
 * @property {string | null} finalProtocol - Final protocol document date
 * @property {string | null} finalCTAPackage - Final CTA (Clinical Trial Application) package date
 * @property {string | null} firstInitiationVisit - First site initiation visit date
 * @property {string | null} firstSubjectRandomised - First subject randomization date
 * @property {string | null} firstSubjectScreened - First subject screening date
 * @property {string | null} lastSubjectScreened - Last subject screening date
 * @property {string | null} lastSubjectRandomised - Last subject randomization date
 * @property {string | null} lastSubjectCompleted - Last subject completion date
 * @property {number | null} sitesCount - Total number of clinical sites
 * @property {number | null} randomizationRate - Randomization rate (subjects per site per month)
 * @property {number | null} randomizationPeriod - Randomization period in months
 * @property {number | null} randomizationPeriodMonths - Randomization period in months
 * @property {number | null} randomizationPeriodDays - Randomization period in days
 * @property {number | null} enrollmentRate - Enrollment rate (subjects per site per month)
 * @property {number | null} enrollmentPeriod - Enrollment period in months
 * @property {number | null} enrollmentPeriodMonths - Enrollment period in months
 * @property {number | null} enrollmentPeriodDays - Enrollment period in days
 * @property {number | null} screeningRate - Screening rate (subjects per site per month)
 * @property {number | null} screeningPeriod - Screening period in months
 * @property {number | null} screeningPeriodMonths - Screening period in months
 * @property {number | null} screeningPeriodDays - Screening period in days
 * @property {string | null} outcomeStudy - Outcome study type
 * @property {number | null} treatmentDuration - Treatment duration in weeks
 * @property {number | null} treatmentDurationMonths - Treatment duration in months
 * @property {string | null} treatmentDurationUnit - Treatment duration unit
 * @property {number | null} treatmentDurationEndpoint - Duration to primary endpoint in weeks
 * @property {string | null} treatmentDurationEndpointUnit - Primary endpoint duration unit
 * @property {number | null} treatmentDurationEndpointMonths - Duration to primary endpoint in months
 * @property {number | null} numberOfEvents - Number of events for endpoint analysis
 * @property {number | null} timeToNumberOfEvents - Time to reach number of events in weeks
 * @property {string | null} timeToNumberOfEventUnit - Time to events unit
 * @property {number | null} timeToNumberOfEventsMonths - Time to reach number of events in months
 * @property {number | null} subjectsScreened - Total subjects screened
 * @property {number | null} subjectsRandomized - Total subjects randomized
 * @property {number | null} subjectsCompleted - Total subjects completed treatment
 * @property {number | null} screenFailure - Screen failure rate percentage
 * @property {number | null} dropOutRate - Drop-out rate percentage
 * 
 * @example
 * ```typescript
 * const timeFramework: TimeFramework = {
 *   studySynopsis: '2024-01-15',
 *   tdoKickOff: '2024-02-01',
 *   finalTDO: '2024-03-15',
 *   sitesCount: 25,
 *   subjectsRandomized: 300,
 *   treatmentDurationMonths: 12
 * };
 * ```
 * 
 * @since 1.0.0
 */
export interface TimeFramework {
  hmTrial: string | null;
  hmTrialDetails: string | null;
  extendedWorkbench: string | null;
  studySynopsis: string | null;
  keyResults: string | null;
  tdoKickOff: string | null;
  draftTDO: string | null;
  finalTDO: string | null;
  finalProtocol: string | null;
  finalCTAPackage: string | null;
  firstInitiationVisit: string | null;
  firstSubjectRandomised: string | null;
  firstSubjectScreened: string | null;
  lastSubjectScreened: string | null;
  lastSubjectRandomised: string | null;
  lastSubjectCompleted: string | null;
  sitesCount: number | null;
  randomizationRate: number | null;
  randomizationPeriod: number | null;
  randomizationPeriodMonths: number | null;
  randomizationPeriodDays: number | null;
  enrollmentRate: number | null;
  enrollmentPeriod: number | null;
  enrollmentPeriodMonths: number | null;
  enrollmentPeriodDays: number | null;
  screeningRate: number | null;
  screeningPeriod: number | null;
  screeningPeriodMonths: number | null;
  screeningPeriodDays: number | null;
  outcomeStudy: string | null;
  treatmentDuration: number | null;
  treatmentDurationMonths: number | null;
  treatmentDurationUnit: string | null;
  treatmentDurationEndpoint: number | null;
  treatmentDurationEndpointUnit: string | null;
  treatmentDurationEndpointMonths: number | null;
  numberOfEvents: number | null;
  timeToNumberOfEvents: number | null;
  timeToNumberOfEventUnit: string | null;
  timeToNumberOfEventsMonths: number | null;
  subjectsScreened: number | null;
  subjectsRandomized: number | null;
  subjectsCompleted: number | null;
  screenFailure: number | null;
  dropOutRate: number | null;
}

/**
 * Time Framework Autofill Type
 * 
 * Defines which TimeFramework fields are eligible for autofill functionality.
 * These fields can be automatically populated based on previous trial data
 * or user preferences.
 * 
 * @type {Pick<TimeFramework, 'keyResults' | 'subjectsScreened' | 'subjectsRandomized' | 'subjectsCompleted' | 'lastSubjectCompleted' | 'lastSubjectRandomised' | 'firstSubjectScreened' | 'firstSubjectRandomised' | 'lastSubjectScreened' | 'finalTDO' | 'tdoKickOff' | 'finalCTAPackage' | 'finalProtocol' | 'firstInitiationVisit' | 'sitesCount'>}
 * 
 * @example
 * ```typescript
 * const autofillData: TimeFrameworkAutofill = {
 *   keyResults: 'Previous study showed 85% efficacy',
 *   sitesCount: 25,
 *   subjectsRandomized: 300
 * };
 * ```
 * 
 * @since 1.0.0
 */
export type TimeFrameworkAutofill = Pick<
  TimeFramework,
  | 'keyResults'
  | 'subjectsScreened'
  | 'subjectsRandomized'
  | 'subjectsCompleted'
  | 'lastSubjectCompleted'
  | 'lastSubjectRandomised'
  | 'firstSubjectScreened'
  | 'firstSubjectRandomised'
  | 'lastSubjectScreened'
  | 'finalTDO'
  | 'tdoKickOff'
  | 'finalCTAPackage'
  | 'finalProtocol'
  | 'firstInitiationVisit'
  | 'sitesCount'
>;

/**
 * Assumptions Time Framework Fields Titles Type
 * 
 * Maps TimeFramework field names to their string representations.
 * Used for form field identification and validation.
 * 
 * @type {AssumptionsFieldsNames<TimeFramework>}
 * 
 * @since 1.0.0
 */
export type AssumptionsTimeFrameworkFieldsTitles = AssumptionsFieldsNames<TimeFramework>;

/**
 * Assumptions Time Framework Controls Type
 * 
 * Maps TimeFramework field names to their form control configurations.
 * Contains metadata for form field rendering and validation.
 * 
 * @type {AssumptionsSectionsFields<AssumptionsTimeFrameworkFieldsTitles>}
 * 
 * @since 1.0.0
 */
export type AssumptionsTimeFrameworkControls = AssumptionsSectionsFields<AssumptionsTimeFrameworkFieldsTitles>;

/**
 * Date Validation Rules Type
 * 
 * Defines all possible date validation error messages for ensuring
 * proper chronological ordering of clinical trial milestones.
 * 
 * @type {string}
 * 
 * @example
 * ```typescript
 * const validationError: DatesValidations = 'MSS < TDO KO';
 * ```
 * 
 * @since 1.0.0
 */
export type DatesValidations =
  | 'MSS < TDO KO'
  | 'TDO KO > MSS'
  | 'TDO KO < Draft TDO'
  | 'Draft TDO > TDO KO'
  | 'Draft TDO < Final TDO'
  | 'Final TDO > Draft TDO'
  | 'Final TDO < Final P'
  | 'Final CTA > Final P'
  | 'Final P > Final TDO'
  | 'Final P < Final CTA'
  | 'Final CTA < FIV'
  | 'FIV > Final CTA'
  | 'FIV < FSR'
  | 'FSR > FIV'
  | 'FSR < LSR'
  | 'LSR > FSR'
  | 'LSR < LSC'
  | 'LSC > LSR';

/**
 * Column Definition for Trial Time Framework
 * 
 * Used for table/grid column definitions where all TimeFramework
 * fields are mapped to undefined (no specific column configuration).
 * 
 * @type {Record<keyof TimeFramework, undefined>}
 * 
 * @since 1.0.0
 */
export type ColDefTrialTimeFramework = Record<keyof TimeFramework, undefined>;

/**
 * Time Framework Timelines Type
 * 
 * Defines the key timeline milestones for clinical trial execution.
 * These dates represent the critical path through the trial lifecycle.
 * 
 * @type {Pick<TimeFramework, 'firstInitiationVisit' | 'firstSubjectScreened' | 'firstSubjectRandomised' | 'lastSubjectScreened' | 'lastSubjectRandomised' | 'lastSubjectCompleted'>}
 * 
 * @example
 * ```typescript
 * const timeline: TimeFrameworkTimelines = {
 *   firstInitiationVisit: '2024-03-01',
 *   firstSubjectScreened: '2024-03-15',
 *   firstSubjectRandomised: '2024-04-01',
 *   lastSubjectScreened: '2025-03-01',
 *   lastSubjectRandomised: '2025-04-01',
 *   lastSubjectCompleted: '2026-04-01'
 * };
 * ```
 * 
 * @since 1.0.0
 */
export type TimeFrameworkTimelines = Pick<
  TimeFramework,
  | 'firstInitiationVisit'
  | 'firstSubjectScreened'
  | 'firstSubjectRandomised'
  | 'lastSubjectScreened'
  | 'lastSubjectRandomised'
  | 'lastSubjectCompleted'
>;
