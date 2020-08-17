import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AssignmentsComponent } from './assignments.component';
import { AssignmentDetailsComponent } from './assignment-details/assignment-details.component';

const routes: Routes = [
  {
    path: '',
    component: AssignmentsComponent,
    children: [
      { path: ':id', component: AssignmentDetailsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentsRoutingModule { }
