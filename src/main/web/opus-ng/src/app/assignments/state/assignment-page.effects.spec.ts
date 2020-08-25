import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AssignmentPageEffects } from './assignment-page.effects';

describe('AssignmentPageEffects', () => {
  let actions$: Observable<any>;
  let effects: AssignmentPageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AssignmentPageEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AssignmentPageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
