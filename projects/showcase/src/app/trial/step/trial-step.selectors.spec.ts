import * as fromTrialStep from './trial-step.reducer';
import { selectTrialStepState } from './trial-step.selectors';

describe('TrialStep Selectors', () => {
  it('should select the feature state', () => {
    const result = selectTrialStepState({
      [fromTrialStep.trialStepFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
