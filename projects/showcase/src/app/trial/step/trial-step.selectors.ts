import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTrialStep from './trial-step.reducer';
import { stepIds } from './step.settings';

export const selectTrialStepState = createFeatureSelector<fromTrialStep.TrialStepState>(
  fromTrialStep.trialStepFeatureKey
);

export const selectSteps = createSelector(
  selectTrialStepState, 
  (state: fromTrialStep.TrialStepState) => Object.values(state.steps)
);

export const selectActiveStep = createSelector(
  selectTrialStepState, 
  (state: fromTrialStep.TrialStepState) => state.activeStep
);

export const selectActiveStepId = createSelector(
  selectTrialStepState,
  (state: fromTrialStep.TrialStepState) => state.activeStep?.stepId
);

export const selectIsFirstStep = createSelector(
  selectTrialStepState,
  (state: fromTrialStep.TrialStepState) => state.activeStep?.stepId === stepIds.one
);

export const selectIsLastStep = createSelector(
  selectTrialStepState,
  (state: fromTrialStep.TrialStepState) => state.activeStep?.stepId === stepIds.four
);

export const selectIsStepDisabled = createSelector(
  selectTrialStepState,
  (state: fromTrialStep.TrialStepState) =>
    (state.activeStep ? state.activeStep?.stepId === stepIds.four : false) ||
    (state.activeStep ? state.activeStep?.disabled : false)
);

