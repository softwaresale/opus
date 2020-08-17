import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAssignment from './assignment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AssignmentEffects } from './assignment.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAssignment.assignmentsFeatureKey, fromAssignment.reducer),
    EffectsModule.forFeature([AssignmentEffects]),
  ]
})
export class AssignmentModule { }
