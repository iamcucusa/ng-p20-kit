/**
 * @fileoverview Route Service
 * Provides centralized route management and navigation utilities
 */

import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { appRoutes, RouteBuilder } from './route.constants';

/**
 * Route Service
 * Provides centralized route management and navigation utilities
 * @service
 */
@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private readonly router = inject(Router);

  /**
   * Application route constants
   * @readonly
   */
  readonly routes = appRoutes;

  /**
   * Route builder utilities
   * @readonly
   */
  readonly builder = RouteBuilder;

  /**
   * Navigate to dashboard
   * @returns Promise<boolean> Navigation result
   */
  navigateToDashboard(): Promise<boolean> {
    return this.router.navigate([this.routes.dashboard]);
  }

  /**
   * Navigate to trial
   * @param trialId - The trial identifier
   * @returns Promise<boolean> Navigation result
   */
  navigateToTrial(trialId: string): Promise<boolean> {
    return this.router.navigate([this.routes.dashboard, trialId]);
  }

  /**
   * Navigate to trial step
   * @param trialId - The trial identifier
   * @param stepId - The step identifier
   * @returns Promise<boolean> Navigation result
   */
  navigateToTrialStep(trialId: string, stepId: string): Promise<boolean> {
    return this.router.navigate([this.routes.dashboard, trialId, stepId]);
  }

  /**
   * Navigate to theme
   * @returns Promise<boolean> Navigation result
   */
  navigateToTheme(): Promise<boolean> {
    return this.router.navigate([this.routes.theme]);
  }

  /**
   * Get dashboard route path
   * @returns Dashboard route path
   */
  getDashboardPath(): string {
    return this.builder.dashboard();
  }

  /**
   * Get trial route path
   * @param trialId - The trial identifier
   * @returns Trial route path
   */
  getTrialPath(trialId: string): string {
    return this.builder.trial(trialId);
  }

  /**
   * Get trial step route path
   * @param trialId - The trial identifier
   * @param stepId - The step identifier
   * @returns Trial step route path
   */
  getTrialStepPath(trialId: string, stepId: string): string {
    return this.builder.trialStep(trialId, stepId);
  }

  /**
   * Get theme route path
   * @returns Theme route path
   */
  getThemePath(): string {
    return this.builder.theme();
  }
}
