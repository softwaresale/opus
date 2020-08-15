import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleComponent } from './schedule.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { ClassDetailsViewComponent } from './class-details-view/class-details-view.component';

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    children: [
      { path: 'calendar', component: CalendarViewComponent },
      { path: 'details', component: ClassDetailsViewComponent },
      { path: '', pathMatch: 'full', redirectTo: 'calendar' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }
