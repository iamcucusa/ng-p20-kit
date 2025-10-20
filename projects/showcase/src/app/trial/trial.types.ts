/**
 * Trial-related types and interfaces
 */

import { TrialStatus } from './trial.d';
import {AssumptionsScenario} from '@assumptions/scenario/assumptions-scenario';

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
}

export interface Trial extends TrialWithAssumptions {
  phase: string;
  participants: number;
  public: boolean;
}

export interface TrialFilters {
  status?: TrialStatus[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  searchTerm?: string;
}

export interface TrialMetrics {
  totalTrials: number;
  activeTrials: number;
  completedTrials: number;
  successRate: number;
}
