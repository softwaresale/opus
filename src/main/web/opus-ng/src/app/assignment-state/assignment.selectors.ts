import { createFeatureSelector, createSelector } from '@ngrx/store';
import { assignmentsFeatureKey, selectAll, selectEntities, selectIds, selectTotal } from './assignment.reducer';

export const selectAssignmentState = createFeatureSelector(assignmentsFeatureKey);

export const assignmentsSelectAll = createSelector(
  selectAssignmentState,
  selectAll
);

export const assignmentsSelectEntities = createSelector(
  selectAssignmentState,
  selectEntities,
);

export const assignmentsSelectIds = createSelector(
  selectAssignmentState,
  selectIds
);

export const assignmentsSelectTotal = createSelector(
  selectAssignmentState,
  selectTotal
);
