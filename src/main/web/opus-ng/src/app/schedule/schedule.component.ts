import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsMobile } from '../app-state/app-state.selectors';
import { MatDialog } from '@angular/material/dialog';
import { ClassModifyDialogComponent } from './class-modify-dialog/class-modify-dialog.component';
import { Router } from '@angular/router';
import { createClassroom } from './state/schedule.actions';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.sass']
})
export class ScheduleComponent implements OnInit {

  isMobile$: Observable<boolean>;
  notShownView: 'calendar' | 'details' = 'details';

  constructor(
    private store$: Store<any>,
    private matDialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.isMobile$ = this.store$.pipe(
      select(selectIsMobile)
    );
  }

  onCreateClassroom() {
    this.matDialog.open(ClassModifyDialogComponent, {
      data: {
        startTime: new Date()
      }
    }).afterClosed().subscribe(val => {
      if (val) {
        this.store$.dispatch(createClassroom({ classroom: val }));
      }
    });
  }

  onSwitchView() {
    this.router.navigate(['/schedule', this.notShownView])
      .then(() => this.notShownView = this.notShownView === 'details' ? 'calendar' : 'details');
  }
}
