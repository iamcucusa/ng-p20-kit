/**
 * @fileoverview Step Routes Factory
 * Creates step routes dynamically using step configuration
 */

import { Routes } from '@angular/router';
import { stepIds } from './step-routing.tokens';
import { stepIds as stepIdsFromSettings } from './step.settings';
import { scenarioParameters as scenarioPathSegment, overview as stepOneOverviewPath } from '@assumptions/navigation/navigation.settings';
import { activeTrialResolver } from '@core/resolvers/active-trial.resolver';

/**
 * Creates step routes dynamically using step configuration
 * @returns Array of step routes
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
      data: {
        step: stepIdsFromSettings.one
      },
      resolve: {
        activeTrial: activeTrialResolver
      },
      loadComponent: () => import('@trial-step-one/step-one-container.component').then(m => m.StepOneContainerComponent),
      children: [
        {
          path: '',
          loadComponent: () => import('@trial-step-one/assumptions/sections/assumptions-section-container.component').then(m => m.AssumptionsSectionContainerComponent)
        },
        { path: stepOneOverviewPath, loadComponent: () => import('@trial-step-one/assumptions/sections/step-one-overview.section').then(m => m.StepOneOverviewSection) },
        { path: `:scenarioId/${scenarioPathSegment}`, loadComponent: () => import('@trial-step-one/assumptions/sections/step-one-scenario.section').then(m => m.StepOneScenarioSection) }
      ]
    },
    {
      path: stepIds.two,
      data: {
        step: stepIdsFromSettings.two
      },
      loadComponent: () => import('@trial-step-two/step-two-container.component').then(m => m.StepTwoContainerComponent)
    },
    {
      path: stepIds.three,
      data: {
        step: stepIdsFromSettings.three
      },
      loadComponent: () => import('@trial-step-three/step-three-container.component').then(m => m.StepThreeContainerComponent)
    },
    {
      path: stepIds.four,
      data: {
        step: stepIdsFromSettings.four
      },
      loadComponent: () => import('@trial-step-four/step-four-container.component').then(m => m.StepFourContainerComponent)
    }
  ];
}

