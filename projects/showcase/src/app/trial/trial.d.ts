import {TrialParameters} from '@assumptions/sections/parameters';

export type TrialStatus = 'Draft' | 'Final' | 'Replicating';

/**
 * Study number mask for CTMS trial ID formatting
 * 8-digit numeric CTMS trial ID with alphanumeric characters
 */
export type StudyNumberMask = '****-****';

/**
 * Trial-related types and interfaces
 */

import {AssumptionsScenario} from '@assumptions/scenario/assumptions-scenario';
import {TimeFramework} from '@assumptions/sections/time-framework';

export interface TrialData {
  id: string;
  name: string;
  versionNumber: number | null;
  status: TrialStatus;
  startDate: Date;
  endDate?: Date;
  description?: string;
}


export interface TrialFinal extends TrialData {
  finalATScenario: number | null;
  finalATObservations: string | null;
  finalisedAt: string | null;
  finalisedBy: string | null;
}


export interface TrialWithAssumptions extends TrialFinal {
  assumptionsScenarios: AssumptionsScenario[];
  planning: TimeFramework;
  parameters: TrialParameters;
}


export interface Trial extends TrialWithAssumptions {
  phase: string;
  participants: number;
  public: boolean;
}

export type TrialVersionValidator = (trial: Trial | Partial<Trial> | null) => boolean;
