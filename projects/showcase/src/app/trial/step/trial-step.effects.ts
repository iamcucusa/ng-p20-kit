import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { map, filter } from 'rxjs/operators';
import { TrialStepActions } from './trial-step.actions';
import { appRoutes } from '@core/route.constants';

/**
 * Effects that handle trial step navigation reset based on router navigation
 * Provides automatic state cleanup when navigating away from trial routes
 */
@Injectable()
export class TrialStepEffects {
  private actions$ = inject(Actions);

  /**
   * Resets step navigation when navigating away from trial routes
   * @returns Observable of reset action
   */
  resetOnNavigation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      map((action: RouterNavigationAction) => action.payload.routerState.url),
      filter(url => !this.isTrialRoute(url)),
      map(() => TrialStepActions.resetStepsNavigation())
    )
  );

  /**
   * Determines if the current URL represents a trial route
   * @param url The current URL to check
   * @returns True if the URL is a trial route
   */
  private isTrialRoute(url: string): boolean {
    const trialRoutePattern = new RegExp(`/${appRoutes.dashboard}/[^/]+`);
    return trialRoutePattern.test(url);
  }
}
