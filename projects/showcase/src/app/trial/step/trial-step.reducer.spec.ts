import { reducer, initialState } from './trial-step.reducer';

describe('TrialStep Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as unknown;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
