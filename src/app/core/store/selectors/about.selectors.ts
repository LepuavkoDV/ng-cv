import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AboutState, aboutFeatureKey } from '../reducers/about.reducer';

export const selectAbout = createSelector(
  createFeatureSelector<AboutState>(aboutFeatureKey),
  state => state.about,
);

export const selectHeadline = createSelector(
  createFeatureSelector<AboutState>(aboutFeatureKey),
  state => state.headline,
);

export const selectLookingFor = createSelector(
  createFeatureSelector<AboutState>(aboutFeatureKey),
  state => state.lookingFor,
);

