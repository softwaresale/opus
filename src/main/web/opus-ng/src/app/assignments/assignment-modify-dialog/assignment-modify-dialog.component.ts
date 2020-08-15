import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsMobile } from '../../app-state/app-state.selectors';

@Component({
  selector: 'app-assignment-modify-dialog',
  templateUrl: './assignment-modify-dialog.component.html',
  styleUrls: ['./assignment-modify-dialog.component.sass']
})
export class AssignmentModifyDialogComponent implements OnInit {

  isMobile$: Observable<boolean>;
  assignmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store$: Store<any>
  ) { }

  ngOnInit(): void {
    this.isMobile$ = this.store$.pipe(select(selectIsMobile));

    this.assignmentForm = this.fb.group({
      name: [''],
      classroom: [''],
      dueDate: [''],
      description: [''],
    });
  }

}
