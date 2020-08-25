import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAssignmentList from './assignment-list.reducer';

export const selectAssignmentListState = createFeatureSelector<fromAssignmentList.State>(
  fromAssignmentList.assignmentListFeatureKey
);

export const selectAssignmentListAssignments = createSelector(
  selectAssignmentListState,
  state => state.assignments
);
