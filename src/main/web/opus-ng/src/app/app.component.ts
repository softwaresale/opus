import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { setDeviceSize } from './app-state/app-state.actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private store$: Store<any>,
  ) {
  }

  ngOnInit() {
    this.unsubscribe$ = new Subject<void>();
    this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(state => this.store$.dispatch(setDeviceSize({ isMobile: state.matches }) ));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
