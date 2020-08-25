import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Assignment } from '../services/assignment/assignment.model';
import { selectAssignmentListAssignments } from './state/assignment-list.selectors';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.sass']
})
export class AssignmentListComponent implements OnInit {

  assignments$: Observable<Assignment[]>;

  constructor(
    private store$: Store<any>
  ) { }

  ngOnInit(): void {
    this.assignments$ = this.store$.pipe(select(selectAssignmentListAssignments));
  }

}
