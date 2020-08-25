import { createAction, props } from '@ngrx/store';
import { Assignment } from '../../services/assignment/assignment.model';
import { Classroom } from '../../services/classroom/classroom.model';

export const requestSidebarContent = createAction(
  '[Assignments] Requesting load sidebar content',
  props<{ mode: 'assignments' | 'classrooms' }>(),
);

export const loadSidebarContent = createAction(
  '[Assignments] Loading sidebar content',
  props<{ items: Assignment[] | Classroom[] }>(),
);

export const setSidebarMode = createAction(
  '[Assignments] Set sidebar content',
  props<{ mode: 'assignments' | 'classrooms' }>(),
);

export const setCurrentClassroom = createAction(
  '[Assignments] Set current classroom',
  props<{ classroom: Classroom }>(),
);

export const setCurrentAssignment = createAction(
  '[Assignments] Set current assignment',
  props<{ assignment: Assignment }>(),
);
