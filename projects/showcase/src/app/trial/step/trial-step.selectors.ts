import { createFeatureSelector } from '@ngrx/store';
import * as fromTrialStep from './trial-step.reducer';

export const selectTrialStepState = createFeatureSelector<fromTrialStep.State>(
  fromTrialStep.trialStepFeatureKey
);
