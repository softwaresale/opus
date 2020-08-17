import * as fromAssignments from './assignments.actions';

describe('loadAssignmentss', () => {
  it('should return an action', () => {
    expect(fromAssignments.loadAssignmentss().type).toBe('[Assignments] Load Assignmentss');
  });
});
