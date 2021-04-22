import { createAction, props } from '@ngrx/store';

export const loadAbouts = createAction(
  '[About] Load Abouts'
);

export const loadAboutsSuccess = createAction(
  '[About] Load Abouts Success',
  props<{ data: any }>()
);

export const loadAboutsFailure = createAction(
  '[About] Load Abouts Failure',
  props<{ error: any }>()
);
