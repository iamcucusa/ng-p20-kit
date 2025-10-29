import { createFeature, createReducer, on } from '@ngrx/store';
import { TrialStepActions } from './trial-step.actions';
import type { TrialStep, TrialSteps } from './trial-step';
import { 
  stepIds, 
  stepStates, 
  initialTrialSteps,
  createActiveStep,
  updateStepsState
} from './step.settings';

export const trialStepFeatureKey = 'trialStep';

export interface TrialStepState {
  steps: TrialSteps;
  activeStep: TrialStep | null;
}

/**
 * Creates new steps state with only first step enabled
 * @param steps Current steps configuration
 * @returns New steps state with first step active
 */
const createNewStepsState = (steps: TrialSteps): TrialSteps => {
  const stepOne = createActiveStep(stepIds.one);
  const stepTwo = { ...steps[stepIds.two], ...stepStates.disabled };
  const stepThree = { ...steps[stepIds.three], ...stepStates.disabled };
  const stepFour = { ...steps[stepIds.four], ...stepStates.disabled };

  return { 
    [stepIds.one]: stepOne, 
    [stepIds.two]: stepTwo, 
    [stepIds.three]: stepThree, 
    [stepIds.four]: stepFour 
  };
};

/**
 * Creates trial steps state with all steps enabled
 * @param steps Current steps configuration
 * @returns Steps state with all steps enabled
 */
const createTrialStepsState = (steps: TrialSteps): TrialSteps => {
  return {
    [stepIds.one]: steps[stepIds.one],
    [stepIds.two]: steps[stepIds.two],
    [stepIds.three]: steps[stepIds.three],
    [stepIds.four]: steps[stepIds.four]
  };
};


export const initialState: TrialStepState = {
  steps: initialTrialSteps,
  activeStep: initialTrialSteps[stepIds.one]
};

export const reducer = createReducer(
  initialState,
  
  on(TrialStepActions.setNewSteps, (state) => ({
    ...state,
    activeStep: state.steps[stepIds.one],
    steps: createNewStepsState(state.steps),
  })),
  
  on(TrialStepActions.createdTrialSteps, (state) => ({
    ...state,
    activeStep: state.steps[stepIds.one],
    steps: createTrialStepsState(state.steps),
  })),
  
  on(TrialStepActions.goToStep, (state, action) => {
    const updatedSteps = updateStepsState(action.step.stepId, state.steps);
    return {
      ...state,
      activeStep: updatedSteps[action.step.stepId],
      steps: updatedSteps,
    };
  }),
  
  on(TrialStepActions.updateStep, (state, action) => {
    const updatedSteps = updateStepsState(action.step.stepId, state.steps);
    return {
      ...state,
      activeStep: updatedSteps[action.step.stepId],
      steps: updatedSteps,
    };
  }),
  
  on(TrialStepActions.goToStepSuccess, (state) => state),
  
  on(TrialStepActions.setActiveStepByRoute, (state, action) => {
    const updatedSteps = updateStepsState(action.stepId, state.steps);
    return {
      ...state,
      activeStep: updatedSteps[action.stepId],
      steps: updatedSteps,
    };
  }),
  
  on(TrialStepActions.goToStepFailure, (state) => state),
  
  on(TrialStepActions.resetStepsNavigation, (state) => ({
    ...state,
    steps: initialTrialSteps,
    activeStep: initialTrialSteps[stepIds.one],
  }))
);

export const trialStepFeature = createFeature({
  name: trialStepFeatureKey,
  reducer,
});

