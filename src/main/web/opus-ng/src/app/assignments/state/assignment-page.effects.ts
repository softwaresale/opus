import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { routerNavigationAction } from '@ngrx/router-store';

import * as AssignmentPageActions from './assignment-page.actions';
import { loadSidebarContent, setSidebarMode } from './assignment-page.actions';
import { ClassroomService } from '../../services/classroom/classroom.service';
import { AssignmentService } from '../../services/assignment/assignment.service';
import { loadAssignmentListItems } from '../../assignment-list/state/assignment-list.actions';

@Injectable()
export class AssignmentPageEffects {

  requestSidebarContent$ = createEffect(() => this.actions$.pipe(
    ofType(AssignmentPageActions.requestSidebarContent),
    switchMap(action => {
      if (action.mode === 'assignments') {
        return this.assignmentService.getAll().pipe(
          switchMap(assignments => [loadSidebarContent({ items: assignments }), setSidebarMode({ mode: action.mode })])
        );
      } else {
        return this.classroomService.getAll().pipe(
          switchMap(classrooms => [loadSidebarContent({ items: classrooms }), setSidebarMode({ mode: action.mode })])
        );
      }
    })
  ));

  loadDetailsContent$ = createEffect(() => this.actions$.pipe(
    ofType(routerNavigationAction),
    tap(action => console.log(action)),
    filter(action => action.payload.event.url.includes('assignments') && action.payload.event.url.includes('items')),
    map(action => action.payload.routerState.root.firstChild.firstChild.firstChild.params['classId']),
    tap(classId => console.log(`Found classId ${classId}`)),
    switchMap(classId => this.classroomService.getClassroomAssignments(classId).pipe(
      map(assignments => loadAssignmentListItems({ assignments }))
    ))
  ));

  constructor(
    private actions$: Actions,
    private classroomService: ClassroomService,
    private assignmentService: AssignmentService,
  ) {}

}
