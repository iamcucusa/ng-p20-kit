/**
 * @fileoverview Application Route Constants
 * Centralized route definitions for type safety, maintainability, and scalability
 * 
 * Benefits:
 * - Single source of truth for all route paths
 * - Type safety with TypeScript
 * - Easy refactoring and maintenance
 * - Prevents hardcoded strings throughout the app
 * - IDE autocomplete and IntelliSense support
 */

import { stepIds } from '@trial-step/step.settings';
import { overview, scenarioParameters } from '@assumptions/navigation/assumptions-navigation.settings';

/**
 * Route Parameter Constants
 * Centralized parameter names for type safety
 * @constant
 */
export const routeParams = {
  id: 'id',
  stepId: 'stepId',
  trialId: 'trialId',
  scenarioId: 'scenarioId',
} as const;

/**
 * Application Route Constants
 * Centralized route definitions for the entire application
 * @constant
 */
export const appRoutes = {
  /** Dashboard routes */
  dashboard: 'dashboard',
  trials: 'trials',
  
  /** Trial routes */
  trialIdParam: routeParams.id,
  trialStepParam: routeParams.stepId,
  
  /** Step routes - imported from step.settings.ts */
  stepOne: stepIds.one,
  stepTwo: stepIds.two,
  stepThree: stepIds.three,
  stepFour: stepIds.four,
  
  /** Assumptions navigation routes - imported from assumptions-navigation.settings.ts */
  overview: overview,
  scenario: scenarioParameters,
  scenarioIdParam: routeParams.scenarioId,
  
  /** Theme routes */
  theme: 'theme',
  themeDemo: 'theme-demo',
  
  /** Common route patterns */
  root: '',
  wildcard: '**',
} as const;

/**
 * Route Query Parameter Constants
 * Centralized query parameter names
 * @constant
 */
export const queryParams = {
  tab: 'tab',
  filter: 'filter',
  sort: 'sort',
  page: 'page',
  size: 'size',
} as const;

/**
 * Type definitions for route constants
 * Provides type safety for route usage
 */
export type AppRoute = typeof appRoutes[keyof typeof appRoutes];
export type RouteParam = typeof routeParams[keyof typeof routeParams];
export type QueryParam = typeof queryParams[keyof typeof queryParams];

