import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentListComponent } from './assignment-list.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [AssignmentListComponent],
  imports: [
    CommonModule,
    MatListModule
  ],
  exports: [AssignmentListComponent],
})
export class AssignmentListModule { }
