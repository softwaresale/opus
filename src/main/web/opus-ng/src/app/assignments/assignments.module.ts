import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentsRoutingModule } from './assignments-routing.module';
import { AssignmentsComponent } from './assignments.component';
import { PageContainerModule } from '../page-container/page-container.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { ResponsiveDirectiveModule } from '../responsive-directive/responsive-directive.module';
import { AssignmentModifyDialogComponent } from './assignment-modify-dialog/assignment-modify-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AssignmentDetailsComponent } from './assignment-details/assignment-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAssignmentPage from './state/assignment-page.reducer';
import { AssignmentPageEffects } from './state/assignment-page.effects';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [AssignmentsComponent, AssignmentModifyDialogComponent, AssignmentDetailsComponent],
  imports: [
    CommonModule,
    AssignmentsRoutingModule,
    RouterModule,
    PageContainerModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    ResponsiveDirectiveModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StoreModule.forFeature(fromAssignmentPage.assignmentPageFeatureKey, fromAssignmentPage.reducer),
    EffectsModule.forFeature([AssignmentPageEffects]),
  ]
})
export class AssignmentsModule { }
