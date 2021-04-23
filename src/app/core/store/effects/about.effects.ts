import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AboutActionTypes } from '../actions/about.actions';
import { AboutService } from '../../services/about.service';

@Injectable()
export class AboutEffects {
  loadAboutPage$ = createEffect(() => this.actions$.pipe(
    ofType(AboutActionTypes.loadAbouts),
    mergeMap(() => this.aboutService.getAboutPage()
      .pipe(
        map(contents => ({ type: AboutActionTypes.loadAboutsSuccess, contents })),
        catchError(error => EMPTY),
      )
    )
  ));


  constructor(
    private actions$: Actions,
    private aboutService: AboutService,
  ) {}
}
