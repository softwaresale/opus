import { createFeatureSelector } from '@ngrx/store';
import * as fromAssignments from './assignments.reducer';

export const selectAssignmentsState = createFeatureSelector<fromAssignments.State>(
  fromAssignments.assignmentsFeatureKey
);
