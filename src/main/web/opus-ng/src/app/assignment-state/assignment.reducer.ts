import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Assignment } from './assignment.model';
import * as AssignmentActions from './assignment.actions';

export const assignmentsFeatureKey = 'assignments';

export interface State extends EntityState<Assignment> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Assignment> = createEntityAdapter<Assignment>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(AssignmentActions.addAssignment,
    (state, action) => adapter.addOne(action.assignment, state)
  ),
  on(AssignmentActions.upsertAssignment,
    (state, action) => adapter.upsertOne(action.assignment, state)
  ),
  on(AssignmentActions.addAssignments,
    (state, action) => adapter.addMany(action.assignments, state)
  ),
  on(AssignmentActions.upsertAssignments,
    (state, action) => adapter.upsertMany(action.assignments, state)
  ),
  on(AssignmentActions.updateAssignment,
    (state, action) => adapter.updateOne(action.assignment, state)
  ),
  on(AssignmentActions.updateAssignments,
    (state, action) => adapter.updateMany(action.assignments, state)
  ),
  on(AssignmentActions.deleteAssignment,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(AssignmentActions.deleteAssignments,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(AssignmentActions.loadAssignments,
    (state, action) => adapter.setAll(action.assignments, state)
  ),
  on(AssignmentActions.clearAssignments,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
