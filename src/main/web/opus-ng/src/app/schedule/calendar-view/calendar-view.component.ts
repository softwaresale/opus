import { Component, OnInit } from '@angular/core';
import { ClassModifyDialogComponent } from '../class-modify-dialog/class-modify-dialog.component';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectIsMobile } from '../../app-state/app-state.selectors';
import { createClassroom, requestLoadEvents } from '../state/schedule.actions';
import { selectScheduleEvents } from '../state/schedule.selectors';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.sass']
})
export class CalendarViewComponent implements OnInit {

  isMobile$: Observable<boolean>;

  view: CalendarView = CalendarView.Week;
  calendarView = CalendarView;
  viewDate: Date = new Date(Date.now());

  events$: Observable<CalendarEvent[]>;

  constructor(
    private store$: Store<any>,
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    const day = this.viewDate.getDay();
    const diff = this.viewDate.getDate() - day + (day === 0 ? -6 : 1) - 1;
    const weekStartDate = new Date(this.viewDate.setDate(diff));
    const weekEndDate = new Date(weekStartDate);
    weekEndDate.setDate(weekEndDate.getDate() + 6);

    this.isMobile$ = this.store$.pipe(select(selectIsMobile));
    this.store$.dispatch(requestLoadEvents({ start: weekStartDate, end: weekEndDate }));

    this.events$ = this.store$.pipe(
      select(selectScheduleEvents),
    );
  }

  createClassWithStartTime(event: { date: Date; sourceEvent: MouseEvent }) {
    this.matDialog.open(ClassModifyDialogComponent, {
      data: {
        startTime: event.date
      }
    }).afterClosed().subscribe(newClassroom => {
      if (newClassroom) {
        this.store$.dispatch(createClassroom({ classroom: newClassroom }));
      }
    });
  }
}
