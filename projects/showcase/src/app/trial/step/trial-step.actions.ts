import { createActionGroup, emptyProps, props } from '@ngrx/store';
import type { TrialStep, TrialStepId } from './trial-step.types';

/**
 * Trial Step Actions
 * Defines all actions for trial step state management
 */
export const TrialStepActions = createActionGroup({
  source: 'TrialStep',
  events: {
    'Go To Step': props<{ step: TrialStep }>(),
    'Update Step': props<{ step: TrialStep }>(),
    'Set Active Step By Route': props<{ stepId: TrialStepId }>(),
    'Go To Step Success': props<{ data?: unknown }>(),
    'Go To Step Failure': props<{ error: unknown }>(),
    'Reset Steps Navigation': emptyProps(),
    'Set New Steps': emptyProps(),
    'Created Trial Steps': emptyProps()
  }
});
