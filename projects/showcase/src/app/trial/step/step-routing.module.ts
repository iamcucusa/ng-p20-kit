/**
 * @fileoverview Step Routing Module
 * Provides step routing configuration and services
 */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { stepRoutingConfig, StepRoutingConfig } from './step-routing.tokens';
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
          provide: stepRoutingConfig,
          useValue: config
        }
      ]
    };
  }

}
