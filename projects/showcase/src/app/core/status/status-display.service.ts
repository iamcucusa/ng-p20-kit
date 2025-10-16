import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import type { TrialStatus } from '@trial/trial.d';
import { getStatusConfig } from './status.config';
import type { StatusConfig } from './status.d';

/**
 * Status Display Service
 * 
 * Provides reactive status configuration and utilities for status displays.
 * Integrates with observables for reactive status updates.
 */
@Injectable({
  providedIn: 'root'
})
export class StatusDisplayService {
  /**
   * Gets status configuration for a given status
   * @param status The trial status
   * @returns Status configuration
   */
  getStatusConfig(status: TrialStatus): StatusConfig {
    return getStatusConfig(status);
  }

  /**
   * Gets status configuration as an observable
   * @param status$ Observable of trial status
   * @returns Observable of status configuration
   */
  getStatusConfig$(status$: Observable<TrialStatus>): Observable<StatusConfig> {
    return status$.pipe(
      map(status => this.getStatusConfig(status))
    );
  }

  /**
   * Checks if a status should show help link based on permissions
   * @param status The trial status
   * @param permissions User permissions
   * @returns True if help link should be shown
   */
  shouldShowHelpLink(status: TrialStatus, permissions: string[] = []): boolean {
    const config = this.getStatusConfig(status);
    
    if (!config.helpLink) {
      return false;
    }

    const requiredPermission = config.helpLink.permission;
    if (!requiredPermission) {
      return true;
    }

    return permissions.includes(requiredPermission);
  }

  /**
   * Gets all available status configurations
   * @returns Array of status configurations
   */
  getAllStatusConfigs(): Array<{ status: TrialStatus; config: StatusConfig }> {
    return Object.entries(getStatusConfig).map(([status, config]) => ({
      status: status as TrialStatus,
      config
    }));
  }
}
