import * as fromTrialStep from './trial-step.reducer';
import { selectTrialStepState } from './trial-step.selectors';

describe('TrialStep Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTrialStepState({
      [fromTrialStep.trialStepFeatureKey]: fromTrialStep.initialState
    });

    expect(result).toEqual(fromTrialStep.initialState);
  });
});
