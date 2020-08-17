import * as fromAssignments from './assignments.reducer';
import { selectAssignmentsState } from './assignments.selectors';

describe('Assignments Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAssignmentsState({
      [fromAssignments.assignmentsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
