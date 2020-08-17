import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AssignmentsEffects } from './assignments.effects';

describe('AssignmentsEffects', () => {
  let actions$: Observable<any>;
  let effects: AssignmentsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AssignmentsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AssignmentsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
