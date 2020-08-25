import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map, switchMap } from 'rxjs/operators';

import { addEvents, createClassroom, loadEvents, requestLoadEvents } from './schedule.actions';
import { ClassroomService } from '../../services/classroom/classroom.service';
import { EventService } from '../../services/event/event.service';


@Injectable()
export class ScheduleEffects {

  requestLoadEvents$ = createEffect(() => this.actions$.pipe(
    ofType(requestLoadEvents),
    switchMap(action => this.eventService.getAllForRange(action.start, action.end).pipe(
      map(events => loadEvents({ events }))
    ))
  ));

  createClassroom$ = createEffect(() => this.actions$.pipe(
    ofType(createClassroom),
    switchMap(action => this.classroomService.create(action.classroom).pipe(
      switchMap(classroom => this.eventService.getEventForClass(classroom.id).pipe(
        map(events => addEvents({ events }))
      ))
    ))
  ));

  constructor(
    private actions$: Actions,
    private classroomService: ClassroomService,
    private eventService: EventService,
  ) {}
}
