import { createAction, props } from '@ngrx/store';
import { Assignment } from '../../services/assignment/assignment.model';

export const loadAssignmentListItems = createAction(
  '[AssignmentList] Load AssignmentLists',
  props<{ assignments: Assignment[] }>(),
);




