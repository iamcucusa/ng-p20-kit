import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { TrialStepActions } from './trial-step.actions';

@Injectable()
export class TrialStepEffects {
  private actions$ = inject(Actions);

  // Example effect for goToStep action
  goToStep$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TrialStepActions.goToStep),
      /** Add your side effects here, e.g., API calls, logging, etc. */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });
}
