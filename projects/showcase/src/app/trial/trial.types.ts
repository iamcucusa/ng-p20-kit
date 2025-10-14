/**
 * Trial-related types and interfaces
 */

export interface TrialData {
  id: string;
  name: string;
  status: TrialStatus;
  startDate: Date;
  endDate?: Date;
  description?: string;
}

export type TrialStatus = 'active' | 'completed' | 'paused' | 'cancelled';

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
