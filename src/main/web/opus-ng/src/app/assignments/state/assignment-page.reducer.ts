import { createReducer, on } from '@ngrx/store';
import * as AssignmentPageActions from './assignment-page.actions';
import { Assignment } from '../../services/assignment/assignment.model';
import { Classroom } from '../../services/classroom/classroom.model';

export const assignmentPageFeatureKey = 'assignmentPage';

export interface State {
  sidebarContent: Assignment[] | Classroom[];
  sidebarMode: 'classrooms' | 'assignments';
  currentClassroom: Classroom;
  currentAssignment: Assignment;
}

export const initialState: State = {
  sidebarContent: [],
  sidebarMode: 'classrooms',
  currentAssignment: null,
  currentClassroom: null,
};

export const reducer = createReducer(
  initialState,
  on(AssignmentPageActions.loadSidebarContent, (state, {items}) => ({ ...state, sidebarContent: items})),
  on(AssignmentPageActions.setSidebarMode, (state, { mode }) => ({ ...state, sidebarMode: mode })),
  on(AssignmentPageActions.setCurrentClassroom, (state, { classroom }) => ({ ...state, currentClassroom: classroom })),
  on(AssignmentPageActions.setCurrentAssignment, (state, { assignment }) => ({ ...state, currentAssignment: assignment })),
);

