import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import { TrialStepActions } from './trial-step.actions';

@Injectable()
export class TrialStepEffects {
  private actions$ = inject(Actions);

  loadTrialSteps$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TrialStepActions.loadTrialSteps),
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      concatMap(() => EMPTY as Observable<{ type: string }>)
    );
  });
}
