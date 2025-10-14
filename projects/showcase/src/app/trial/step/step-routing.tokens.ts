/**
 * @fileoverview Step Routing Configuration Tokens
 * Provides injection tokens and configuration for step routing system
 */

import { InjectionToken } from '@angular/core';
import { stepIds } from './step.settings';

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
export const STEP_ROUTING_CONFIG = new InjectionToken<StepRoutingConfig>('StepRoutingConfig');

/**
 * Default Step Routing Configuration
 * @constant
 */
export const DEFAULT_STEP_ROUTING_CONFIG: StepRoutingConfig = {
  basePath: 'dashboard',
  trialIdParam: 'id',
};

/**
 * Step IDs from step settings - single source of truth
 * @constant
 */
export { stepIds };
