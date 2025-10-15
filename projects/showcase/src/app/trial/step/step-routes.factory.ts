/**
 * @fileoverview Step Routes Factory
 * Creates step routes dynamically using step configuration
 */

import { Routes } from '@angular/router';
import { stepIds } from './step-routing.tokens';

/**
 * Creates step routes dynamically using step configuration
 * @function
 * @returns {Routes} Array of step routes
 */
export function createStepRoutes(): Routes {
  return [
    {
      path: '',
      redirectTo: stepIds.one,
      pathMatch: 'full'
    },
    {
      path: stepIds.one,
      loadComponent: () => import('@trial-step-one/step-one-container.component').then(m => m.StepOneContainerComponent)
    },
    {
      path: stepIds.two,
      loadComponent: () => import('@trial-step-two/step-two-container.component').then(m => m.StepTwoContainerComponent)
    },
    {
      path: stepIds.three,
      loadComponent: () => import('@trial-step-three/step-three-container.component').then(m => m.StepThreeContainerComponent)
    },
    {
      path: stepIds.four,
      loadComponent: () => import('@trial-step-four/step-four-container.component').then(m => m.StepFourContainerComponent)
    }
  ];
}

