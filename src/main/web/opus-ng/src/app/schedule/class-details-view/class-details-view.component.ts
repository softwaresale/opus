import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectIsMobile } from '../../app-state/app-state.selectors';

@Component({
  selector: 'app-class-details-view',
  templateUrl: './class-details-view.component.html',
  styleUrls: ['./class-details-view.component.sass']
})
export class ClassDetailsViewComponent implements OnInit {

  isMobile$: Observable<boolean>;

  items = [0, 1, 2, 3, 4].map(idx => `Classroom ${idx}`);

  constructor(
    private store$: Store<any>
  ) { }

  ngOnInit(): void {
    this.isMobile$ = this.store$.pipe(select(selectIsMobile));
  }

}
