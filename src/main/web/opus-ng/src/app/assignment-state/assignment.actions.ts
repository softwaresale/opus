import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Assignment } from './assignment.model';

export const requestLoadAssignments = createAction(
  '[Assignment/API] Requesting Load assignments',
)

export const loadAssignments = createAction(
  '[Assignment/API] Load Assignments',
  props<{ assignments: Assignment[] }>()
);

export const addAssignment = createAction(
  '[Assignment/API] Add Assignment',
  props<{ assignment: Assignment }>()
);

export const upsertAssignment = createAction(
  '[Assignment/API] Upsert Assignment',
  props<{ assignment: Assignment }>()
);

export const addAssignments = createAction(
  '[Assignment/API] Add Assignments',
  props<{ assignments: Assignment[] }>()
);

export const upsertAssignments = createAction(
  '[Assignment/API] Upsert Assignments',
  props<{ assignments: Assignment[] }>()
);

export const updateAssignment = createAction(
  '[Assignment/API] Update Assignment',
  props<{ assignment: Update<Assignment> }>()
);

export const updateAssignments = createAction(
  '[Assignment/API] Update Assignments',
  props<{ assignments: Update<Assignment>[] }>()
);

export const deleteAssignment = createAction(
  '[Assignment/API] Delete Assignment',
  props<{ id: string }>()
);

export const deleteAssignments = createAction(
  '[Assignment/API] Delete Assignments',
  props<{ ids: string[] }>()
);

export const clearAssignments = createAction(
  '[Assignment/API] Clear Assignments'
);
