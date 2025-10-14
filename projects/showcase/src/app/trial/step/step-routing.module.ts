/**
 * @fileoverview Step Routing Module
 * Provides step routing configuration and services
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { STEP_ROUTING_CONFIG, StepRoutingConfig } from './step-routing.tokens';
import { StepRoutingService } from './step-routing.service';

/**
 * Step Routing Module
 * @ngModule
 */
@NgModule({
  providers: [StepRoutingService]
})
export class StepRoutingModule {
  /**
   * Configure step routing with custom configuration
   * @static
   * @method
   * @param {StepRoutingConfig} config - Custom step routing configuration
   * @returns {ModuleWithProviders<StepRoutingModule>} Module with providers
   */
  static forRoot(config: StepRoutingConfig): ModuleWithProviders<StepRoutingModule> {
    return {
      ngModule: StepRoutingModule,
      providers: [
        {
          provide: STEP_ROUTING_CONFIG,
          useValue: config
        }
      ]
    };
  }

  /**
   * Configure step routing with environment-based configuration
   * @static
   * @method
   * @param {Object} environment - Environment configuration
   * @param {StepRoutingConfig} [environment.stepRouting] - Optional step routing configuration
   * @returns {ModuleWithProviders<StepRoutingModule>} Module with providers
   */
  static forEnvironment(environment: { stepRouting?: StepRoutingConfig }): ModuleWithProviders<StepRoutingModule> {
    return {
      ngModule: StepRoutingModule,
      providers: [
        {
          provide: STEP_ROUTING_CONFIG,
          useValue: environment.stepRouting || {}
        }
      ]
    };
  }
}
