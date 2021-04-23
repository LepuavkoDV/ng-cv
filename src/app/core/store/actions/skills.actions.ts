import { createAction, props } from '@ngrx/store';

export const loadSkillss = createAction(
  '[Skills] Load Skillss'
);

export const loadSkillssSuccess = createAction(
  '[Skills] Load Skillss Success',
  props<{ data: any }>()
);

export const loadSkillssFailure = createAction(
  '[Skills] Load Skillss Failure',
  props<{ error: any }>()
);
