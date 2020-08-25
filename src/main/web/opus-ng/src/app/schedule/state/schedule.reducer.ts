import { createReducer, on } from '@ngrx/store';
import * as ScheduleActions from './schedule.actions';
import { CalendarEvent } from 'angular-calendar';

export const scheduleFeatureKey = 'schedule';

export interface State {
  events: CalendarEvent[];
}

export const initialState: State = {
  events: [],
};

export const reducer = createReducer(
  initialState,

  on(ScheduleActions.loadEvents, (state, { events }) => ({ ...state, events })),
  on(ScheduleActions.addEvent, (state, { event }) => ({ ...state, events: [...state.events, event] })),
  on(ScheduleActions.addEvents, (state, { events }) => ({ ...state, events: [...state.events, ...events] })),
);

