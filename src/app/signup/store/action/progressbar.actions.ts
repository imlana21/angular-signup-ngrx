import { createAction, props } from '@ngrx/store';

export const loadProgressbars = createAction(
  '[Progressbar] Load Progressbars'
);

export const setProgressbars = createAction(
  '[Progressbar] Set Progressbars',
  props<{progress: number}>()
);




