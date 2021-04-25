import { createAction, props } from '@ngrx/store';

export enum SkillsActionTypes {
  loadSkills = '[Skills] Loading Skills',
  loadSkillsSuccess = '[Skills] Loading Success',
  loadSkillsFailure = '[Skills] Loading Failure',
}

export const loadSkills = createAction(
  SkillsActionTypes.loadSkills,
);

export const loadSkillsSuccess = createAction(
  SkillsActionTypes.loadSkillsSuccess,
  props<{ data: any }>()
);

export const loadSkillsFailure = createAction(
  SkillsActionTypes.loadSkillsFailure,
  props<{ error: any }>()
);
