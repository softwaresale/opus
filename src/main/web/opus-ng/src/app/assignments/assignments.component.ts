import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsMobile } from '../app-state/app-state.selectors';
import { MatDialog } from '@angular/material/dialog';
import { AssignmentModifyDialogComponent } from './assignment-modify-dialog/assignment-modify-dialog.component';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.sass']
})
export class AssignmentsComponent implements OnInit {

  @ViewChild('classroomSelect')
  classroomSelectDialog: TemplateRef<any>;

  isMobile$: Observable<boolean>;
  items = [0, 1, 2, 3].map(idx => `Classroom ${idx}`);
  currentClassroom = this.items[0];

  constructor(
    private store$: Store<any>,
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.isMobile$ = this.store$.pipe(select(selectIsMobile));
  }

  onChangeClassroom() {
    this.matDialog.open(this.classroomSelectDialog).afterClosed().subscribe(newClassroom => {
      if (newClassroom) {
        this.currentClassroom = newClassroom;
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
}
