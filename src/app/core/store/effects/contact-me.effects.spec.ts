import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ContactMeEffects } from './contact-me.effects';

describe('ContactMeEffects', () => {
  let actions$: Observable<any>;
  let effects: ContactMeEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ContactMeEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(ContactMeEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
