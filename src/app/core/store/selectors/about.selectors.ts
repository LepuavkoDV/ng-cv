import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AboutState, aboutFeatureKey } from '../reducers/about.reducer';

export const selectAbout = createSelector(
  createFeatureSelector<AboutState>(aboutFeatureKey),
  state => state.about.content,
);

export const selectHeadline = createSelector(
  createFeatureSelector<AboutState>(aboutFeatureKey),
  state => state.headline.content,
);

export const selectLookingFor = createSelector(
  createFeatureSelector<AboutState>(aboutFeatureKey),
  state => state.lookingFor.content,
);

