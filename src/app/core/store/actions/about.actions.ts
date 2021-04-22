import { createAction, props } from '@ngrx/store';
import { IContent } from '../../../shared/models/icontent';

export enum AboutActionTypes {
  loadAbouts = '[About] Load Abouts',
  loadAboutsSuccess = '[About] Load Abouts Success',
  loadAboutsFailure = '[About] Load Abouts Failure',
}

export const loadAbouts = createAction(
  AboutActionTypes.loadAbouts,
);

export const loadAboutsSuccess = createAction(
  AboutActionTypes.loadAboutsSuccess,
  props<{ data: IContent[] }>()
);

export const loadAboutsFailure = createAction(
  AboutActionTypes.loadAboutsFailure,
  props<{ error: any }>()
);
