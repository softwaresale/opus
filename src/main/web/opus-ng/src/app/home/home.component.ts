import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectIsMobile } from '../app-state/app-state.selectors';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  colCount$: Observable<number>;

  constructor(
    private store$: Store<any>
  ) { }

  ngOnInit(): void {
    this.colCount$ = this.store$.pipe(
      select(selectIsMobile),
      map(isMobile => isMobile ? 1 : 2)
    );
  }

}
