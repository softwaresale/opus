import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsMobile } from '../../app-state/app-state.selectors';
import { Classroom } from '../../services/classroom/classroom.model';
import { ClassroomService } from '../../services/classroom/classroom.service';

@Component({
  selector: 'app-assignment-modify-dialog',
  templateUrl: './assignment-modify-dialog.component.html',
  styleUrls: ['./assignment-modify-dialog.component.sass']
})
export class AssignmentModifyDialogComponent implements OnInit {

  isMobile$: Observable<boolean>;
  classrooms$: Observable<Classroom[]>;
  assignmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store$: Store<any>,
    private classroomService: ClassroomService,
  ) { }

  ngOnInit(): void {
    this.isMobile$ = this.store$.pipe(select(selectIsMobile));
    this.classrooms$ = this.classroomService.getAll();

    this.assignmentForm = this.fb.group({
      name: [''],
      classroom: [''],
      dueDate: [''],
      description: [''],
    });
  }

}
