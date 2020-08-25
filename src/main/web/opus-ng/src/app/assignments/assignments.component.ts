import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsMobile } from '../app-state/app-state.selectors';
import { MatDialog } from '@angular/material/dialog';
import { AssignmentModifyDialogComponent } from './assignment-modify-dialog/assignment-modify-dialog.component';
import { Classroom } from '../services/classroom/classroom.model';
import { Assignment } from '../services/assignment/assignment.model';
import {
  selectAssignmentsCurrentClassroom,
  selectAssignmentSidebarContent,
  selectAssignmentsSidebarMode
} from './state/assignment-page.selectors';
import { requestSidebarContent, setCurrentClassroom } from './state/assignment-page.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.sass']
})
export class AssignmentsComponent implements OnInit {

  @ViewChild('classroomSelect')
  classroomSelectDialog: TemplateRef<any>;

  isMobile$: Observable<boolean>;
  sidebarContent$: Observable<Classroom[] | Assignment[]>;
  sidebarMode$: Observable<'classrooms' | 'assignments'>;
  currentClassroom$: Observable<Classroom>;

  constructor(
    private store$: Store<any>,
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.store$.dispatch(requestSidebarContent({ mode: 'classrooms' }));

    this.isMobile$ = this.store$.pipe(select(selectIsMobile));
    this.sidebarContent$ = this.store$.pipe(select(selectAssignmentSidebarContent));
    this.sidebarMode$ = this.store$.pipe(select(selectAssignmentsSidebarMode));
    this.currentClassroom$ = this.store$.pipe(select(selectAssignmentsCurrentClassroom));
  }

  onChangeClassroom() {
    this.matDialog.open(this.classroomSelectDialog).afterClosed().subscribe(newClassroom => {
      if (newClassroom) {
        this.store$.dispatch(setCurrentClassroom({ classroom: newClassroom }));
      }
    });
  }

  onCreateAssignment() {
    this.matDialog.open(AssignmentModifyDialogComponent).afterClosed().subscribe(val => {
      if (val) {
        console.log(val);
      }
    });
  }

  getSidebarNavLink(item: Classroom | Assignment) {
    return this.sidebarMode$.pipe(
      map(mode => mode === 'classrooms'),
      map(isClassroom => isClassroom ? `${item.id}/items` : `${item.id}/details`)
    );
  }
}
