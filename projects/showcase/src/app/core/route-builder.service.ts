/**
 * @fileoverview Route Builder Service
 * Static utility service for building route strings with type safety
 * 
 * This service provides static methods to generate route paths as strings.
 * It does NOT perform navigation - it only builds route strings.
 * 
 * Usage:
 * - Template links: [routerLink]="RouteBuilder.trial(trialId)"
 * - Static contexts: const path = RouteBuilder.dashboard()
 * - String generation: RouteBuilder.trialStep('trial-123', 'one')
 * 
 * Benefits:
 * - No injection required - static methods
 * - Pure functions - no side effects
 * - Type safety with TypeScript
 * - Consistent route patterns
 * - Reusable across the application
 */

import { Injectable } from '@angular/core';
import { appRoutes } from './route.constants';

/**
 * Route Builder Service
 * Static utility for building route strings without navigation
 * 
 * This service provides static methods to generate route paths.
 * Use this when you need route strings but not actual navigation.
 * For actual navigation, use RouteService instead.
 * 
 * @example
 * ```typescript
 * // Template usage
 * <a [routerLink]="RouteBuilder.trial(trialId)">View Trial</a>
 * 
 * // Component usage
 * const trialPath = RouteBuilder.trial('trial-123');
 * const stepPath = RouteBuilder.trialStep('trial-123', 'one');
 * ```
 */
@Injectable({
  providedIn: 'root'
})
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
   * Build trial step one route
   * @param trialId - The trial identifier
   * @returns Trial step one route path
   */
  static trialStepOne(trialId: string): string {
    return `/${appRoutes.dashboard}/${trialId}/${appRoutes.stepOne}`;
  }

  /**
   * Build trial step two route
   * @param trialId - The trial identifier
   * @returns Trial step two route path
   */
  static trialStepTwo(trialId: string): string {
    return `/${appRoutes.dashboard}/${trialId}/${appRoutes.stepTwo}`;
  }

  /**
   * Build trial step three route
   * @param trialId - The trial identifier
   * @returns Trial step three route path
   */
  static trialStepThree(trialId: string): string {
    return `/${appRoutes.dashboard}/${trialId}/${appRoutes.stepThree}`;
  }

  /**
   * Build trial step four route
   * @param trialId - The trial identifier
   * @returns Trial step four route path
   */
  static trialStepFour(trialId: string): string {
    return `/${appRoutes.dashboard}/${trialId}/${appRoutes.stepFour}`;
  }

  /**
   * Build trial step one overview route
   * @param trialId - The trial identifier
   * @returns Trial step one overview route path
   */
  static trialStepOneOverview(trialId: string): string {
    return `/${appRoutes.dashboard}/${trialId}/${appRoutes.stepOne}/${appRoutes.overview}`;
  }

  /**
   * Build trial step one scenario route
   * @param trialId - The trial identifier
   * @param scenarioId - The scenario identifier
   * @returns Trial step one scenario route path
   */
  static trialStepOneScenario(trialId: string, scenarioId: string): string {
    return `/${appRoutes.dashboard}/${trialId}/${appRoutes.stepOne}/${scenarioId}/${appRoutes.scenario}`;
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

  /**
   * Determines if the current URL represents a trial route
   * @param url The current URL to check
   * @returns True if the URL is a trial route
   */
  static isTrialRoute(url: string): boolean {
    const trialRoutePattern = new RegExp(`/${appRoutes.dashboard}/[^/]+`);
    return trialRoutePattern.test(url);
  }
}
