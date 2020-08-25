import * as fromAssignmentList from './assignment-list.reducer';
import { selectAssignmentListState } from './assignment-list.selectors';

describe('AssignmentList Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAssignmentListState({
      [fromAssignmentList.assignmentListFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
