import { Directive, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectAppStateState, selectIsMobile } from '../app-state/app-state.selectors';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appResponsive]',
})
export class ResponsiveDirective implements OnInit, OnDestroy {

  @Input()
  responsiveMobileClass?: string;

  @Input()
  responsiveDesktopClass?: string;

  @Input()
  baseClass?: string;

  @HostBinding('class')
  className: string;

  private subscription: Subscription;

  private static constructClasses(base?: string, mobile?: string, desktop?: string) {
    if (base) {
      return {
        mobile: mobile ?? `${base}-mobile`,
        desktop: desktop ?? `${base}-desktop`,
      };
    } else {
      return {
        mobile: mobile ?? '',
        desktop: desktop ?? ''
      };
    }
  }

  constructor(
    private store$: Store<any>,
  ) { }

  ngOnInit() {
    if (!this.responsiveDesktopClass && !this.responsiveMobileClass && !this.baseClass) {
      throw Error('At least one class must be provided');
    }

    const classes = ResponsiveDirective.constructClasses(this.baseClass, this.responsiveMobileClass, this.responsiveDesktopClass);
    this.subscription = this.store$
      .pipe(
        select(selectIsMobile),
        map(isMobile => isMobile ? classes.mobile : classes.desktop),
        filter(items => !!items) // Filter out null values
      )
      .subscribe(newClass => this.className = newClass);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
