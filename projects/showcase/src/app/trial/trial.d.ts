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
  studyNumber: string | null;
  version: number | null;
  status: TrialStatus;
  startDate: Date;
  endDate?: Date;
  description?: string;
}

export interface TrialWithAssumptions extends TrialData {
  assumptionsScenarios: AssumptionsScenario[];
  planning: TimeFramework;
}

export interface Trial extends TrialWithAssumptions {
  phase: string;
  participants: number;
  public: boolean;
}
