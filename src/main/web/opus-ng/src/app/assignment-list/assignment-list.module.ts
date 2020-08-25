import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentListComponent } from './assignment-list.component';
import { MatListModule } from '@angular/material/list';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromAssignmentList from './state/assignment-list.reducer';
import { AssignmentListEffects } from './state/assignment-list.effects';

@NgModule({
  declarations: [AssignmentListComponent],
  imports: [
    CommonModule,
    MatListModule,
    StoreModule.forFeature(fromAssignmentList.assignmentListFeatureKey, fromAssignmentList.reducer),
    EffectsModule.forFeature([AssignmentListEffects]),
  ],
  exports: [AssignmentListComponent],
})
export class AssignmentListModule { }
