import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AssignmentActions from './assignment.actions';
import { loadAssignments } from './assignment.actions';
import { AssignmentService } from './assignment.service';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class AssignmentEffects {

  requestLoadAssignments$ = createEffect(() => this.actions$.pipe(
    ofType(AssignmentActions.requestLoadAssignments),
    switchMap(action => this.assignmentService.getAll().pipe(
      map(assignments => loadAssignments({ assignments }))
    ))
  ));

  constructor(
    private actions$: Actions,
    private assignmentService: AssignmentService,
  ) {}
}
