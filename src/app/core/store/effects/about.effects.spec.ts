import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AboutEffects } from './about.effects';

describe('AboutEffects', () => {
  let actions$: Observable<any>;
  let effects: AboutEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AboutEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AboutEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
