import { createActionGroup, emptyProps } from '@ngrx/store';

export const TrialStepActions = createActionGroup({
  source: 'TrialStep',
  events: {
    'Load TrialSteps': emptyProps(),
    
    
  }
});
