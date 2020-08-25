import { createReducer, on } from '@ngrx/store';
import * as AssignmentListActions from './assignment-list.actions';
import { Assignment } from '../../services/assignment/assignment.model';

export const assignmentListFeatureKey = 'assignmentList';

export interface State {
  assignments: Assignment[],
}

export const initialState: State = {
  assignments: []
};


export const reducer = createReducer(
  initialState,
  on(AssignmentListActions.loadAssignmentListItems, (state, { assignments }) => ({ ...state, assignments })),
);

