import * as fromAssignmentPage from './assignment-page.actions';

describe('loadAssignmentPages', () => {
  it('should return an action', () => {
    expect(fromAssignmentPage.loadAssignmentPages().type).toBe('[AssignmentPage] Load AssignmentPages');
  });
});
