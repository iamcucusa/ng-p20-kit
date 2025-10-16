/**
 * @fileoverview Status Configuration System
 * Centralized configuration for status displays across the application
 */

import type { TrialStatus } from '@trial/trial.d';
import type { StatusConfig } from './status.d';

/**
 * Status configuration registry
 * Maps trial statuses to their display configurations
 */
export const statusConfig: Record<TrialStatus, StatusConfig> = {
  Draft: {
    value: 'DRAFT',
    severity: 'info',
    helpLink: {
      route: ['/help', 'profile-parameters', 'profile-draft-version'],
      tooltip: 'More info about draft versions',
      permission: undefined // No permission required
    }
  },
  Final: {
    value: 'FINAL',
    severity: 'success',
    helpLink: {
      route: ['/help', 'profile-parameters', 'profile-final-version'],
      tooltip: 'More info about final versions',
      permission: 'CREATE FINAL VERSION'
    }
  },
  Replicating: {
    value: 'REPLICATING',
    severity: 'warn',
    helpLink: undefined // No help link for replicating status
  }
} as const;

/**
 * Default status configuration for unknown statuses
 */
export const defaultStatusConfig: StatusConfig = {
  value: 'DRAFT',
  severity: 'info',
  helpLink: undefined
} as const;

/**
 * Gets the configuration for a specific trial status
 * @param status The trial status
 * @returns Status configuration or default if not found
 */
export function getStatusConfig(status: TrialStatus): StatusConfig {
  return statusConfig[status] || defaultStatusConfig;
}

/**
 * Gets all available status configurations
 * @returns Array of all status configurations
 */
export function getAllStatusConfigs(): Array<{ status: TrialStatus; config: StatusConfig }> {
  return Object.entries(statusConfig).map(([status, config]) => ({
    status: status as TrialStatus,
    config
  }));
}
