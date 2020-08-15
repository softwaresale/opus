import { Component, OnInit } from '@angular/core';
import { ClassModifyDialogComponent } from '../class-modify-dialog/class-modify-dialog.component';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectIsMobile } from '../../app-state/app-state.selectors';

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

  events: CalendarEvent[] = [
  ];

  constructor(
    private store$: Store<any>,
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.isMobile$ = this.store$.pipe(select(selectIsMobile));
  }

  createClassWithStartTime(event: { date: Date; sourceEvent: MouseEvent }) {
    this.matDialog.open(ClassModifyDialogComponent, {
      data: {
        startTime: event.date
      }
    }).afterClosed().subscribe(this.handleEventCreation.bind(this));
  }

  private handleEventCreation(val: any) {
    const newEvents = val.times.map(({ start, end }): CalendarEvent => ({
      title: val.name,
      start: new Date(start),
      end: new Date(end),
      draggable: true,
    }));

    this.events = [
      ...this.events,
      ...newEvents
    ];
  }
}
