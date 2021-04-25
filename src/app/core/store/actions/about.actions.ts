import { createAction, props } from '@ngrx/store';
import { IContent } from '../../../shared/models/icontent';

export enum AboutActionTypes {
  loadAbouts = '[About] Loading',
  loadAboutsSuccess = '[About] Loading Success',
  loadAboutsFailure = '[About] Loading Failure',
}

export const loadAbouts = createAction(
  AboutActionTypes.loadAbouts,
);

export const loadAboutsSuccess = createAction(
  AboutActionTypes.loadAboutsSuccess,
  props<{ contents: IContent[] }>()
);

export const loadAboutsFailure = createAction(
  AboutActionTypes.loadAboutsFailure,
  props<{ error: any }>()
);
