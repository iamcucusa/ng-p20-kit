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
  trialIdParam: 'id',
  trialStepParam: 'stepId',
  
  /** Theme routes */
  theme: 'theme',
  themeDemo: 'theme-demo',
  
  /** Common route patterns */
  root: '',
  wildcard: '**',
} as const;

/**
 * Route Parameter Constants
 * Centralized parameter names for type safety
 * @constant
 */
export const routeParams = {
  id: 'id',
  stepId: 'stepId',
  trialId: 'trialId',
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

/**
 * Route Builder Utilities
 * Helper functions for building routes with type safety
 */
export class RouteBuilder {
  /**
   * Build dashboard route
   * @returns Dashboard route path
   */
  static dashboard(): string {
    return `/${appRoutes.dashboard}`;
  }

  /**
   * Build trial route with ID
   * @param trialId - The trial identifier
   * @returns Trial route path
   */
  static trial(trialId: string): string {
    return `/${appRoutes.dashboard}/${trialId}`;
  }

  /**
   * Build trial step route
   * @param trialId - The trial identifier
   * @param stepId - The step identifier
   * @returns Trial step route path
   */
  static trialStep(trialId: string, stepId: string): string {
    return `/${appRoutes.dashboard}/${trialId}/${stepId}`;
  }

  /**
   * Build theme route
   * @returns Theme route path
   */
  static theme(): string {
    return `/${appRoutes.theme}`;
  }

  /**
   * Build route with query parameters
   * @param baseRoute - Base route path
   * @param queryParams - Query parameters object
   * @returns Route with query parameters
   */
  static withQueryParams(baseRoute: string, queryParams: Record<string, string | number>): string {
    const params = new URLSearchParams();
    Object.entries(queryParams).forEach(([key, value]) => {
      params.set(key, String(value));
    });
    return `${baseRoute}?${params.toString()}`;
  }
}
