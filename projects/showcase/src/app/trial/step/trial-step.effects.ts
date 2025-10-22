import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RouterNavigationAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { map, filter, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TrialStepActions } from './trial-step.actions';
import { appRoutes } from '@core/route.constants';
import { RouteService } from '@core/route.service';
import { RouteBuilder } from '@core/route-builder.service';
import { ActivatedRoute } from '@angular/router';

/**
 * Effects that handle trial step navigation reset based on router navigation
 * Provides automatic state cleanup when navigating away from trial routes
 */
@Injectable()
export class TrialStepEffects {
  private actions$ = inject(Actions);
  private routeService = inject(RouteService);
  private activatedRoute = inject(ActivatedRoute);

  /**
   * Handles navigation to trial steps
   * Listens for Go To Step actions and performs the actual navigation
   * @returns Observable of success or failure actions
   */
  navigateToStep$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TrialStepActions.goToStep),
      switchMap(({ step, trialId }) => {
        /**
         * Use trialId from the action - it's now required
         * This ensures we have the correct trial context for navigation
         */

        /**
         * Use RouteService for reactive navigation with error handling
         * This provides consistent error handling and state management
         */
        return this.routeService.navigateToTrialStep(trialId, step.stepId).pipe(
          map((success) => {
            if (success) {
              return TrialStepActions.goToStepSuccess({ data: { step, trialId } });
            } else {
              /**
               * If navigation returns false, it means navigation was prevented
               * This is not necessarily an error, but we should handle it
               */
              return TrialStepActions.goToStepFailure({ 
                error: 'Navigation was prevented or cancelled' 
              });
            }
          }),
          catchError((error) => {
            /**
             * This catches actual errors from RouteService (network issues, route not found, etc.)
             * The error object contains the actual error details from the navigation failure
             */
            const errorMessage = error?.message || error?.toString() || 'Unknown navigation error';
            return of(TrialStepActions.goToStepFailure({ error: errorMessage }));
          })
        );
      })
    )
  );

  /**
   * Resets step navigation when navigating away from trial routes
   * @returns Observable of reset action
   */
  resetOnNavigation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      map((action: RouterNavigationAction) => action.payload.routerState.url),
      filter(url => !RouteBuilder.isTrialRoute(url)),
      map(() => TrialStepActions.resetStepsNavigation())
    )
  );


}
