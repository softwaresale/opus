import * as fromAssignmentPage from './assignment-page.reducer';
import { selectAssignmentPageState } from './assignment-page.selectors';

describe('AssignmentPage Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAssignmentPageState({
      [fromAssignmentPage.assignmentPageFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
