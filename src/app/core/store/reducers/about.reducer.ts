import { Action, createReducer, on } from '@ngrx/store';


export const aboutFeatureKey = 'about';

export interface AboutState {

}

export const initialState: AboutState = {

};


export const reducer = createReducer(
  initialState,

);

