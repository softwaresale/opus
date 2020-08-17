import { createReducer, on } from '@ngrx/store';
import * as AssignmentsActions from './assignments.actions';

export const assignmentsFeatureKey = 'assignments';

export interface State {
}

export const initialState: State = {
};


export const reducer = createReducer(
  initialState,

  on(AssignmentsActions.loadAssignmentss, state => state),

);

