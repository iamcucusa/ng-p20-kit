/**
 * @fileoverview Step Routing Configuration Tokens
 * Provides injection tokens and configuration for step routing system
 */

import { InjectionToken } from '@angular/core';

/**
 * Step Routing Configuration Interface
 * @interface
 */
export interface StepRoutingConfig {
  /** Base path for step routes */
  basePath: string;
  /** Route parameter name for trial ID */
  trialIdParam: string;
}

/**
 * Step Routing Configuration Injection Token
 * @constant
 */
export const stepRoutingConfig = new InjectionToken<StepRoutingConfig>('StepRoutingConfig');

/**
 * Default Step Routing Configuration
 * Uses default values for step routing
 * @constant
 */
export const defaultStepRoutingConfig: StepRoutingConfig = {
  basePath: 'dashboard', // This is the default value, will be overridden by app.config.ts
  trialIdParam: 'id',
};

// Re-export stepIds from step settings for convenience
export { stepIds } from './step.settings';
