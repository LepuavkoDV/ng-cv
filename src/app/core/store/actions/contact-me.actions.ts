import { createAction, props } from '@ngrx/store';

export const loadContactMes = createAction(
  '[ContactMe] Load ContactMes'
);

export const loadContactMesSuccess = createAction(
  '[ContactMe] Load ContactMes Success',
  props<{ data: any }>()
);

export const loadContactMesFailure = createAction(
  '[ContactMe] Load ContactMes Failure',
  props<{ error: any }>()
);
