import * as fromAssignmentList from './assignment-list.actions';

describe('loadAssignmentLists', () => {
  it('should return an action', () => {
    expect(fromAssignmentList.loadAssignmentLists().type).toBe('[AssignmentList] Load AssignmentLists');
  });
});
