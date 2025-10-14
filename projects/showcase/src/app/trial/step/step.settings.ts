/**
 * @fileoverview Trial Step Configuration and Settings
 * Provides step definitions, state management, and navigation utilities
 */

import type { 
  TrialStep, 
  TrialStepId, 
  TrialSteps, 
  StepState, 
  StepValidationResult 
} from './trial-step.d';

/**
 * Step identifiers for consistent referencing across the application
 * @constant
 */
export const stepIds = {
  one: 'one',
  two: 'two', 
  three: 'three',
  four: 'four',
} as const;

/**
 * Type derived from stepIds constant for type safety
 * @typedef {typeof stepIds[keyof typeof stepIds]} StepId
 */
export type StepId = typeof stepIds[keyof typeof stepIds];

/**
 * Step order for navigation sequence
 * @constant
 */
export const stepOrder = ['one', 'two', 'three', 'four'] as const;

/**
 * Type for step order array elements
 * @typedef {typeof stepOrder[number]} StepOrder
 */
export type StepOrder = typeof stepOrder[number];

/**
 * Maximum number of steps in the trial process
 * @constant
 */
export const MAX_STEPS = 4;

/**
 * Default timeout for step transitions in milliseconds
 * @constant
 */
export const DEFAULT_STEP_TIMEOUT = 300;

/**
 * Predefined step state configurations for different step states
 * @constant
 */
export const stepStates = {
  visited: {
    active: false,
    disabled: false,
    visited: true,
  },
  active: {
    active: true,
    disabled: false,
    visited: false,
  },
  default: {
    active: false,
    disabled: false,
    visited: false,
  },
  disabled: {
    active: false,
    disabled: true,
    visited: false,
  },
} as const satisfies Record<string, StepState>;

/**
 * Step one definition - Assumption Tracker
 * @constant
 */
export const stepOne: TrialStep = {
  stepId: 'one',
  nextStepId: 'two',
  title: 'Assumption Tracker',
  description: 'Enter Assumption Tracking Details',
  ...stepStates.active,
};

/**
 * Step two definition - Benchmark Trials Comparison
 * @constant
 */
export const stepTwo: TrialStep = {
  stepId: 'two',
  nextStepId: 'three',
  title: 'Benchmark Trials Comparison',
  description: 'Select Benchmark/Non-Benchmark Trials',
  ...stepStates.default,
};

/**
 * Step three definition - Country Data Overview
 * @constant
 */
export const stepThree: TrialStep = {
  stepId: 'three',
  nextStepId: 'four',
  title: 'Country Data Overview',
  description: 'Review of Country Information',
  ...stepStates.default,
};

/**
 * Step four definition - Site Details Review
 * @constant
 */
export const stepFour: TrialStep = {
  stepId: 'four',
  nextStepId: null,
  title: 'Site Details Review',
  description: 'Review of Site Information',
  ...stepStates.default,
};

/**
 * Complete collection of all trial steps indexed by step ID
 * @constant
 */
export const trialSteps: TrialSteps = {
  one: stepOne,
  two: stepTwo,
  three: stepThree,
  four: stepFour,
};

/**
 * Initial step configuration for new trials with proper state setup
 * @constant
 */
export const initialTrialSteps: TrialSteps = {
  one: { ...stepOne, ...stepStates.active },
  two: { ...stepTwo, ...stepStates.default },
  three: { ...stepThree, ...stepStates.default },
  four: { ...stepFour, ...stepStates.default },
};

/**
 * Navigation utility functions for trial step management
 */

/**
 * Gets the next step in the trial sequence
 * @param activeStep - The currently active step
 * @returns The next step in sequence, or the current step if at the end
 */
export const getNextStep = (activeStep: TrialStep): TrialStep => {
  switch (activeStep.stepId) {
    case 'one':
      return stepTwo;
    case 'two':
      return stepThree;
    case 'three':
      return stepFour;
    case 'four':
      return stepFour; // Final step, return itself
    default:
      return stepOne;
  }
};

/**
 * Gets the previous step in the trial sequence
 * @param activeStep - The currently active step
 * @returns The previous step in sequence, or the current step if at the beginning
 */
export const getPreviousStep = (activeStep: TrialStep): TrialStep => {
  switch (activeStep.stepId) {
    case 'one':
      return stepOne; // First step, return itself
    case 'two':
      return stepOne;
    case 'three':
      return stepTwo;
    case 'four':
      return stepThree;
    default:
      return stepOne;
  }
};

/**
 * Validates if a step can be navigated to
 * @param step - The step to validate
 * @returns Validation result with success status and optional error message
 */
export const validateStep = (step: TrialStep): StepValidationResult => {
  if (step.disabled) {
    return {
      isValid: false,
      errorMessage: `Step "${step.title}" is currently disabled`,
    };
  }
  
  return { isValid: true };
};

/**
 * Creates a step with active state
 * @param stepId - The step identifier
 * @returns A new step instance with active state
 */
export const createActiveStep = (stepId: TrialStepId): TrialStep => {
  const baseStep = trialSteps[stepId];
  return {
    ...baseStep,
    ...stepStates.active,
  };
};

/**
 * Updates step state while preserving other properties
 * @param step - The step to update
 * @param newState - The new state to apply
 * @returns Updated step with new state
 */
export const updateStepState = (step: TrialStep, newState: Partial<StepState>): TrialStep => {
  return {
    ...step,
    ...newState,
  };
};

/**
 * Updates all steps state based on the active step
 * @param activeStepId - The ID of the currently active step
 * @param steps - Current steps state
 * @returns Updated steps with proper state transitions
 */
export const updateStepsState = (activeStepId: TrialStepId, steps: TrialSteps): TrialSteps => {
  let stepOne = steps[stepIds.one];
  let stepTwo = steps[stepIds.two];
  let stepThree = steps[stepIds.three];
  let stepFour = steps[stepIds.four];

  switch (activeStepId) {
    case stepIds.one:
      stepOne = { ...stepOne, ...stepStates.active };
      stepTwo = { ...stepTwo, ...stepStates.default };
      stepThree = { ...stepThree, ...stepStates.default };
      stepFour = { ...stepFour, ...stepStates.default };
      break;
    case stepIds.two:
      stepOne = { ...stepOne, ...stepStates.visited };
      stepTwo = { ...stepTwo, ...stepStates.active };
      stepThree = { ...stepThree, ...stepStates.default };
      stepFour = { ...stepFour, ...stepStates.default };
      break;
    case stepIds.three:
      stepOne = { ...stepOne, ...stepStates.visited };
      stepTwo = { ...stepTwo, ...stepStates.visited };
      stepThree = { ...stepThree, ...stepStates.active };
      stepFour = { ...stepFour, ...stepStates.default };
      break;
    case stepIds.four:
      stepOne = { ...stepOne, ...stepStates.visited };
      stepTwo = { ...stepTwo, ...stepStates.visited };
      stepThree = { ...stepThree, ...stepStates.visited };
      stepFour = { ...stepFour, ...stepStates.active };
      break;
  }

  return { 
    [stepIds.one]: stepOne, 
    [stepIds.two]: stepTwo, 
    [stepIds.three]: stepThree, 
    [stepIds.four]: stepFour 
  };
};
