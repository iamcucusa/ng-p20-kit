/**
 * Trial Step Navigation Types
 * Defines the structure and types for trial step navigation system
 */

/** Individual trial step identifiers */
export type TrialStepOne = 'one';
export type TrialStepTwo = 'two';
export type TrialStepThree = 'three';
export type TrialStepFour = 'four';

/** Union type for all valid trial step IDs */
export type TrialStepId = TrialStepOne | TrialStepTwo | TrialStepThree | TrialStepFour;

/** Step state configuration for UI behavior */
export interface StepState {
  /** Whether the step is currently active */
  active: boolean;
  /** Whether the step has been visited */
  visited: boolean;
  /** Whether the step is disabled */
  disabled: boolean;
}

/** Core trial step interface */
export interface TrialStep extends StepState {
  /** Unique identifier for the step */
  stepId: TrialStepId;
  /** ID of the next step in sequence, null for final step */
  nextStepId: TrialStepId | null;
  /** Human-readable title for the step */
  title: string;
  /** Optional description of the step */
  description: string | null;
}

/** Collection of trial steps indexed by step ID */
export type TrialSteps = Record<TrialStepId, TrialStep>;

/** Navigation direction for step transitions */
export type NavigationDirection = 'next' | 'previous';

/** Step validation result */
export interface StepValidationResult {
  /** Whether the step is valid */
  isValid: boolean;
  /** Error message if validation fails */
  errorMessage?: string;
}
