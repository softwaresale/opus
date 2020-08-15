import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PageContainerModule } from '../page-container/page-container.module';
import { AssignmentListModule } from '../assignment-list/assignment-list.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatGridListModule,
    PageContainerModule,
    AssignmentListModule
  ]
})
export class HomeModule { }
