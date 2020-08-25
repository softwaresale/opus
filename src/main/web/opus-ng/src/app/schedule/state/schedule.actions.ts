import { createAction, props } from '@ngrx/store';
import { CalendarEvent } from 'angular-calendar';
import { Classroom } from '../../services/classroom/classroom.model';

export const loadEvents = createAction(
  '[Schedule] Setting events',
  props<{ events: CalendarEvent[] }>(),
);

export const requestLoadEvents = createAction(
  '[Schedule] Requesting load events',
  props<{ start: Date, end: Date }>(),
);

export const addEvent = createAction(
  '[Schedule] Adding event',
  props<{ event: CalendarEvent }>(),
);

export const addEvents = createAction(
  '[Schedule] Adding events',
  props<{ events: CalendarEvent[] }>(),
);

export const createClassroom = createAction(
  '[Schedule] Creating new classroom',
  props<{ classroom: Classroom }>(),
);
