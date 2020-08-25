import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSchedule from './schedule.reducer';

export const selectScheduleState = createFeatureSelector<fromSchedule.State>(
  fromSchedule.scheduleFeatureKey
);

export const selectScheduleEvents = createSelector(
  selectScheduleState,
  state => state.events
);
