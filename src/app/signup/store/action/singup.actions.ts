import { createAction, props } from '@ngrx/store';

export const loadSingups = createAction(
  '[Singup] Load Singups'
);

export const addAccount = createAction(
  '[Signup] Add Account Detail'
)

export const addPersonal = createAction(
  '[Signup] Add Personal Detail'
)

export const addImage = createAction(
  '[Signup] Add Image'
)

//export const setScores = createAction('[Scoreboard Page] Set Scores', props<{game: Game}>());
