import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TrialStepEffects } from './trial-step.effects';

describe('TrialStepEffects', () => {
  let actions$: Observable<unknown>;
  let effects: TrialStepEffects;

  beforeEach(() => {
    actions$ = new Observable<unknown>();
    TestBed.configureTestingModule({
      providers: [
        TrialStepEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TrialStepEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
