import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AssignmentListEffects } from './assignment-list.effects';

describe('AssignmentListEffects', () => {
  let actions$: Observable<any>;
  let effects: AssignmentListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AssignmentListEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AssignmentListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
