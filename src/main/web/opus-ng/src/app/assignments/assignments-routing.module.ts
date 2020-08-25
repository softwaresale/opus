import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssignmentsComponent } from './assignments.component';
import { AssignmentListComponent } from '../assignment-list/assignment-list.component';
import { AssignmentDetailsComponent } from './assignment-details/assignment-details.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentsComponent,
    children: [
      { path: ':classId/items', component: AssignmentListComponent },
      { path: ':assignmentId/details', component: AssignmentDetailsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentsRoutingModule { }
