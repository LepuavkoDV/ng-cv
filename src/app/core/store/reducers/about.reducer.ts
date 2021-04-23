import { Action, createReducer, on } from '@ngrx/store';
import { IContent } from '../../../shared/models/icontent';
import { loadAboutsSuccess } from '../actions/about.actions';

export const aboutFeatureKey = 'AboutState';

export interface AboutState {
  about: IContent;
  headline: IContent;
  lookingFor: IContent;
}

export const initialState: AboutState = {
  about: null,
  headline: null,
  lookingFor: null,
};


export const AboutState = createReducer(
  initialState,
  on(loadAboutsSuccess, (state, { contents }) => {
    const about = contents.find(content => content.section === 'about');
    const headline = contents.find(content => content.section === 'headline');
    const lookingFor = contents.find(content => content.section === 'lookingfor');
    return {
      about,
      headline,
      lookingFor,
    };
  }),
);

