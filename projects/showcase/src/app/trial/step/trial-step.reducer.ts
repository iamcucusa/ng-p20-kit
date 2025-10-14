import { createFeature, createReducer, on } from '@ngrx/store';
import { TrialStepActions } from './trial-step.actions';

export const trialStepFeatureKey = 'trialStep';

export interface State {
  // Add state properties here as needed
  loading: boolean;
}

export const initialState: State = {
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(TrialStepActions.loadTrialSteps, state => state),

);

export const trialStepFeature = createFeature({
  name: trialStepFeatureKey,
  reducer,
});

