import { TimeFramework } from '@assumptions/sections/time-framework';
import type { TrialParameters } from '@assumptions/sections/parameters';

/**
 * Creates a default TimeFramework object for mock data
 * All fields are set to null as they represent empty/initial state
 */
export function createDefaultTimeFramework(): TimeFramework {
  return {
    hmTrial: null,
    hmTrialDetails: null,
    extendedWorkbench: null,
    studySynopsis: null,
    keyResults: null,
    tdoKickOff: null,
    draftTDO: null,
    finalTDO: null,
    finalProtocol: null,
    finalCTAPackage: null,
    firstInitiationVisit: null,
    firstSubjectRandomised: null,
    firstSubjectScreened: null,
    lastSubjectScreened: null,
    lastSubjectRandomised: null,
    lastSubjectCompleted: null,
    sitesCount: null,
    randomizationRate: null,
    randomizationPeriod: null,
    randomizationPeriodMonths: null,
    randomizationPeriodDays: null,
    enrollmentRate: null,
    enrollmentPeriod: null,
    enrollmentPeriodMonths: null,
    enrollmentPeriodDays: null,
    screeningRate: null,
    screeningPeriod: null,
    screeningPeriodMonths: null,
    screeningPeriodDays: null,
    outcomeStudy: null,
    treatmentDuration: null,
    treatmentDurationMonths: null,
    treatmentDurationUnit: null,
    treatmentDurationEndpoint: null,
    treatmentDurationEndpointUnit: null,
    treatmentDurationEndpointMonths: null,
    numberOfEvents: null,
    timeToNumberOfEvents: null,
    timeToNumberOfEventUnit: null,
    timeToNumberOfEventsMonths: null,
    subjectsScreened: null,
    subjectsRandomized: null,
    subjectsCompleted: null,
    screenFailure: null,
    dropOutRate: null,
  };
}

/**
 * Creates a default TrialParameters object for mock data
 * All fields are set to null as they represent empty/initial state
 */
export function createDefaultTrialParameters(): TrialParameters {
  return {
    ctmsTrial: null,
    studyNumber: null,
    studyName: null,
    milestone: null,
    therapeuticArea: null,
    others: null,
    studyPhase: null,
    hpcBiberach: null,
    indication: null,
    biCompound: null,
    studyMoa: null,
    versionTitle: null,
    versionNumber: null,
    versionDescription: null,
    keyChanges: null,
  };
}
