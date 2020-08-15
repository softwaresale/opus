import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAssignment from './assignment.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAssignment.assignmentsFeatureKey, fromAssignment.reducer)
  ]
})
export class AssignmentModule { }
