import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAssignmentPage from './assignment-page.reducer';

export const selectAssignmentPageState = createFeatureSelector<fromAssignmentPage.State>(
  fromAssignmentPage.assignmentPageFeatureKey
);

export const selectAssignmentsSidebarMode = createSelector(
  selectAssignmentPageState,
  state => state.sidebarMode
);

export const selectAssignmentSidebarContent = createSelector(
  selectAssignmentPageState,
  state => state.sidebarContent
);

export const selectAssignmentsCurrentAssignment = createSelector(
  selectAssignmentPageState,
  state => state.currentAssignment
);

export const selectAssignmentsCurrentClassroom = createSelector(
  selectAssignmentPageState,
  state => state.currentClassroom
);
