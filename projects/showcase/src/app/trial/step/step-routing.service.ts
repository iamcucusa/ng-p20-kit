/**
 * @fileoverview Step Routing Service
 * Provides centralized step routing functionality with dependency injection
 */

import { Injectable, Inject, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { STEP_ROUTING_CONFIG, StepRoutingConfig, stepIds } from './step-routing.tokens';
import { DEFAULT_STEP_ROUTING_CONFIG } from './step-routing.tokens';

/**
 * Step Routing Service
 * @service
 */
@Injectable({
  providedIn: 'root'
})
export class StepRoutingService {
  private readonly config: StepRoutingConfig;

  constructor(
    private router: Router,
    @Optional() @Inject(STEP_ROUTING_CONFIG) config?: StepRoutingConfig
  ) {
    this.config = config || DEFAULT_STEP_ROUTING_CONFIG;
  }

  /**
   * Navigate to a specific step for a trial
   * @param trialId - The trial identifier
   * @param stepId - The step identifier
   */
  navigateToStep(trialId: string, stepId: string): Promise<boolean> {
    return this.router.navigate([this.config.basePath, trialId, stepId]);
  }

  /**
   * Navigate to step one for a trial
   * @param trialId - The trial identifier
   */
  navigateToStepOne(trialId: string): Promise<boolean> {
    return this.navigateToStep(trialId, stepIds.one);
  }

  /**
   * Navigate to step two for a trial
   * @param trialId - The trial identifier
   */
  navigateToStepTwo(trialId: string): Promise<boolean> {
    return this.navigateToStep(trialId, stepIds.two);
  }

  /**
   * Navigate to step three for a trial
   * @param trialId - The trial identifier
   */
  navigateToStepThree(trialId: string): Promise<boolean> {
    return this.navigateToStep(trialId, stepIds.three);
  }

  /**
   * Navigate to step four for a trial
   * @param trialId - The trial identifier
   */
  navigateToStepFour(trialId: string): Promise<boolean> {
    return this.navigateToStep(trialId, stepIds.four);
  }

  /**
   * Get the step route path for a trial and step
   * @param trialId - The trial identifier
   * @param stepId - The step identifier
   * @returns The complete route path
   */
  getStepRoutePath(trialId: string, stepId: string): string {
    return `/${this.config.basePath}/${trialId}/${stepId}`;
  }

  /**
   * Get all step routes for a trial
   * @param trialId - The trial identifier
   * @returns Object with all step routes
   */
  getTrialStepRoutes(trialId: string): Record<string, string> {
    return {
      one: this.getStepRoutePath(trialId, stepIds.one),
      two: this.getStepRoutePath(trialId, stepIds.two),
      three: this.getStepRoutePath(trialId, stepIds.three),
      four: this.getStepRoutePath(trialId, stepIds.four),
    };
  }

  /**
   * Get the current step ID from the route
   * @returns The current step ID or null if not on a step route
   */
  getCurrentStepId(): string | null {
    const url = this.router.url;
    const segments = url.split('/');
    const stepValues = Object.values(stepIds) as string[];
    const stepIndex = segments.findIndex(segment => 
      stepValues.includes(segment)
    );
    return stepIndex !== -1 ? segments[stepIndex] : null;
  }

  /**
   * Get the current trial ID from the route
   * @returns The current trial ID or null if not on a trial route
   */
  getCurrentTrialId(): string | null {
    const url = this.router.url;
    const segments = url.split('/');
    const basePathIndex = segments.indexOf(this.config.basePath);
    return basePathIndex !== -1 && segments[basePathIndex + 1] ? segments[basePathIndex + 1] : null;
  }
}
