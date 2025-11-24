/**
 * @fileoverview Route Service
 * Modern Angular 20 service for programmatic navigation and route management
 * 
 * This service provides reactive navigation using RxJS Observables and signals.
 * It combines RouteBuilder (for path generation) with Router (for navigation).
 * 
 * Usage:
 * - Reactive navigation: this.routeService.navigateToTrial(trialId).subscribe()
 * - Signal-based state: this.routeService.isNavigating()
 * - Path generation: const path = this.routeService.getTrialPath(trialId)
 * - Component injection: constructor(private routeService: RouteService)
 * 
 * Benefits:
 * - Reactive navigation - uses RxJS Observables
 * - Signal-based state - modern Angular 20 patterns
 * - Error handling - proper RxJS error management
 * - Service composition - combines RouteBuilder + Router
 * - Injectable - can be injected into components
 */

import { Injectable, inject, signal, computed } from '@angular/core';
import { Router, NavigationEnd, NavigationError } from '@angular/router';
import { Observable, throwError, catchError, map, filter, startWith, from, finalize } from 'rxjs';
import { appRoutes } from './route.constants';
import { RouteBuilder } from './route-builder.service';

/**
 * Route Service
 * Injectable service for programmatic navigation and route management
 * 
 * This service provides methods for actual navigation using Angular Router.
 * It delegates path generation to RouteBuilder and performs navigation with Router.
 * 
 * @example
 * ```typescript
 * // Component injection
 * constructor(private routeService: RouteService) {}
 * 
 * // Navigation methods
 * await this.routeService.navigateToDashboard();
 * await this.routeService.navigateToTrial('trial-123');
 * 
 * // Path generation (delegates to RouteBuilder)
 * const path = this.routeService.getTrialPath('trial-123');
 * ```
 * 
 * @service
 */
@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private readonly router = inject(Router);

  /**
   * Signals for reactive state management
   * @private
   */
  #isNavigating = signal(false);
  #lastNavigationError = signal<string | null>(null);
  #currentRoute = signal<string>('');

  /**
   * Application route constants
   * @readonly
   */
  readonly routes = appRoutes;

  /**
   * Route builder utilities
   * @readonly
   */
  readonly builder = RouteBuilder;

  /**
   * Navigation state signals
   */
  readonly isNavigating = this.#isNavigating.asReadonly();
  readonly lastNavigationError = this.#lastNavigationError.asReadonly();
  readonly currentRoute = this.#currentRoute.asReadonly();

  /**
   * Computed signal for navigation status
   */
  readonly navigationStatus = computed(() => ({
    isNavigating: this.#isNavigating(),
    hasError: this.#lastNavigationError() !== null,
    error: this.#lastNavigationError(),
    currentRoute: this.#currentRoute()
  }));

  constructor() {
    /**
     * Listen to router events for state management
     * Updates internal signals based on navigation events
     */
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd || event instanceof NavigationError)
    ).subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.#isNavigating.set(false);
        this.#lastNavigationError.set(null);
        this.#currentRoute.set(event.url);
      } else if (event instanceof NavigationError) {
        this.#isNavigating.set(false);
        this.#lastNavigationError.set(event.error?.message || 'Navigation failed');
      }
    });
  }

  /**
   * Navigate to dashboard programmatically
   * Performs reactive navigation using Angular Router
   * @returns Observable<boolean> Navigation result (true if successful)
   * @example
   * ```typescript
   * this.routeService.navigateToDashboard().subscribe({
   *   next: (success) => console.log('Navigation successful:', success),
   *   error: (error) => console.error('Navigation failed:', error)
   * });
   * ```
   */
  navigateToDashboard(): Observable<boolean> {
    this.#isNavigating.set(true);
    this.#lastNavigationError.set(null);
    
    return from(this.router.navigate([this.routes.dashboard])).pipe(
      catchError(error => {
        this.#lastNavigationError.set(error.message);
        return throwError(() => error);
      })
    );
  }

  /**
   * Navigate to specific trial programmatically
   * Performs reactive navigation using Angular Router
   * @param trialId - The trial identifier
   * @returns Observable<boolean> Navigation result (true if successful)
   * @example
   * ```typescript
   * this.routeService.navigateToTrial('trial-123').subscribe({
   *   next: (success) => console.log('Navigation successful:', success),
   *   error: (error) => console.error('Navigation failed:', error)
   * });
   * ```
   */
  navigateToTrial(trialId: string): Observable<boolean> {
    this.#isNavigating.set(true);
    this.#lastNavigationError.set(null);
    
    return from(this.router.navigate([this.routes.dashboard, trialId])).pipe(
      catchError(error => {
        this.#lastNavigationError.set(error.message);
        return throwError(() => error);
      })
    );
  }

  /**
   * Navigate to specific trial step programmatically
   * Performs reactive navigation using Angular Router
   * @param trialId - The trial identifier
   * @param stepId - The step identifier
   * @returns Observable<boolean> Navigation result (true if successful)
   * @example
   * ```typescript
   * this.routeService.navigateToTrialStep('trial-123', 'one').subscribe({
   *   next: (success) => console.log('Navigation successful:', success),
   *   error: (error) => console.error('Navigation failed:', error)
   * });
   * ```
   */
  navigateToTrialStep(trialId: string, stepId: string): Observable<boolean> {
    this.#isNavigating.set(true);
    this.#lastNavigationError.set(null);
    
    return from(this.router.navigate([this.routes.dashboard, trialId, stepId])).pipe(
      catchError(error => {
        this.#lastNavigationError.set(error.message);
        return throwError(() => error);
      }),
      finalize(() => this.#isNavigating.set(false))
    );
  }

  /**
   * Navigate to theme demo programmatically
   * Performs reactive navigation using Angular Router
   * @returns Observable<boolean> Navigation result (true if successful)
   * @example
   * ```typescript
   * this.routeService.navigateToTheme().subscribe({
   *   next: (success) => console.log('Navigation successful:', success),
   *   error: (error) => console.error('Navigation failed:', error)
   * });
   * ```
   */
  navigateToTheme(): Observable<boolean> {
    this.#isNavigating.set(true);
    this.#lastNavigationError.set(null);
    
    return from(this.router.navigate([this.routes.theme])).pipe(
      catchError(error => {
        this.#lastNavigationError.set(error.message);
        return throwError(() => error);
      }),
      finalize(() => this.#isNavigating.set(false))
    );
  }


  /**
   * Navigate to trial step one
   * @param trialId - The trial identifier
   * @returns Observable<boolean> - Navigation result
   */
  navigateToTrialStepOne(trialId: string): Observable<boolean> {
    return this.navigateToTrialStep(trialId, this.routes.stepOne);
  }

  /**
   * Navigate to trial step two
   * @param trialId - The trial identifier
   * @returns Observable<boolean> - Navigation result
   */
  navigateToTrialStepTwo(trialId: string): Observable<boolean> {
    return this.navigateToTrialStep(trialId, this.routes.stepTwo);
  }

  /**
   * Navigate to trial step three
   * @param trialId - The trial identifier
   * @returns Observable<boolean> - Navigation result
   */
  navigateToTrialStepThree(trialId: string): Observable<boolean> {
    return this.navigateToTrialStep(trialId, this.routes.stepThree);
  }

  /**
   * Navigate to trial step four
   * @param trialId - The trial identifier
   * @returns Observable<boolean> - Navigation result
   */
  navigateToTrialStepFour(trialId: string): Observable<boolean> {
    return this.navigateToTrialStep(trialId, this.routes.stepFour);
  }

  /**
   * Get dashboard route path as string
   * Delegates to RouteBuilder for path generation
   * @returns Dashboard route path string
   * @example
   * ```typescript
   * const path = this.routeService.getDashboardPath();
   * // Returns: '/dashboard'
   * ```
   */
  getDashboardPath(): string {
    return this.builder.dashboard();
  }

  /**
   * Get trial route path as string
   * Delegates to RouteBuilder for path generation
   * @param trialId - The trial identifier
   * @returns Trial route path string
   * @example
   * ```typescript
   * const path = this.routeService.getTrialPath('trial-123');
   * // Returns: '/dashboard/trial-123'
   * ```
   */
  getTrialPath(trialId: string): string {
    return this.builder.trial(trialId);
  }

  /**
   * Get trial step route path as string
   * Delegates to RouteBuilder for path generation
   * @param trialId - The trial identifier
   * @param stepId - The step identifier
   * @returns Trial step route path string
   * @example
   * ```typescript
   * const path = this.routeService.getTrialStepPath('trial-123', 'one');
   * // Returns: '/dashboard/trial-123/one'
   * ```
   */
  getTrialStepPath(trialId: string, stepId: string): string {
    return this.builder.trialStep(trialId, stepId);
  }

  /**
   * Get trial step one route path as string
   * @param trialId - The trial identifier
   * @returns Trial step one route path string
   */
  getTrialStepOnePath(trialId: string): string {
    return this.getTrialStepPath(trialId, this.routes.stepOne);
  }

  /**
   * Get trial step two route path as string
   * @param trialId - The trial identifier
   * @returns Trial step two route path string
   */
  getTrialStepTwoPath(trialId: string): string {
    return this.getTrialStepPath(trialId, this.routes.stepTwo);
  }

  /**
   * Get trial step three route path as string
   * @param trialId - The trial identifier
   * @returns Trial step three route path string
   */
  getTrialStepThreePath(trialId: string): string {
    return this.getTrialStepPath(trialId, this.routes.stepThree);
  }

  /**
   * Get trial step four route path as string
   * @param trialId - The trial identifier
   * @returns Trial step four route path string
   */
  getTrialStepFourPath(trialId: string): string {
    return this.getTrialStepPath(trialId, this.routes.stepFour);
  }

  /**
   * Get all trial step routes for a trial
   * @param trialId - The trial identifier
   * @returns Object with all step routes
   */
  getTrialStepRoutes(trialId: string): Record<string, string> {
    return {
      one: this.getTrialStepOnePath(trialId),
      two: this.getTrialStepTwoPath(trialId),
      three: this.getTrialStepThreePath(trialId),
      four: this.getTrialStepFourPath(trialId),
    };
  }

  /**
   * Get theme route path as string
   * Delegates to RouteBuilder for path generation
   * @returns Theme route path string
   * @example
   * ```typescript
   * const path = this.routeService.getThemePath();
   * // Returns: '/theme'
   * ```
   */
  getThemePath(): string {
    return this.builder.theme();
  }

  /**
   * Navigate with reactive state management
   * Modern Angular 20 pattern for navigation with signals
   * @param route - Route path to navigate to
   * @returns Observable<boolean> Navigation result
   * @example
   * ```typescript
   * this.routeService.navigateReactive(['dashboard', 'trial-123']).subscribe({
   *   next: (success) => console.log('Navigation successful:', success),
   *   error: (error) => console.error('Navigation failed:', error)
   * });
   * ```
   */
  navigateReactive(route: string[]): Observable<boolean> {
    this.#isNavigating.set(true);
    this.#lastNavigationError.set(null);
    
    return from(this.router.navigate(route)).pipe(
      catchError(error => {
        this.#lastNavigationError.set(error.message);
        return throwError(() => error);
      })
    );
  }

  /**
   * Clear navigation error state
   * Resets the error signal to null
   * @example
   * ```typescript
   * this.routeService.clearNavigationError();
   * ```
   */
  clearNavigationError(): void {
    this.#lastNavigationError.set(null);
  }

  /**
   * Get navigation status as Observable
   * Provides reactive updates for navigation state
   * @returns Observable<NavigationStatus> Navigation status updates
   * @example
   * ```typescript
   * this.routeService.getNavigationStatus().subscribe(status => {
   *   console.log('Navigation status:', status);
   * });
   * ```
   */
  getNavigationStatus(): Observable<{
    isNavigating: boolean;
    hasError: boolean;
    error: string | null;
    currentRoute: string;
  }> {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd || event instanceof NavigationError),
      map(event => {
        if (event instanceof NavigationEnd) {
          return {
            isNavigating: false,
            hasError: false,
            error: null,
            currentRoute: event.url
          };
        } else {
          return {
            isNavigating: false,
            hasError: true,
            error: (event as NavigationError).error?.message || 'Navigation failed',
            currentRoute: this.#currentRoute()
          };
        }
      }),
      startWith({
        isNavigating: false,
        hasError: false,
        error: null,
        currentRoute: this.#currentRoute()
      })
    );
  }
}
