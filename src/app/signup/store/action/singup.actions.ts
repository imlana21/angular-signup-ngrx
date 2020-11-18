import { createAction, props } from '@ngrx/store';

export const loadSingups = createAction(
  '[Singup] Load Singups'
);

export const addAccount = createAction(
  '[Signup] Add Account Detail',
  //props<{account: any}>()
)

export const addPersonal = createAction(
  '[Signup] Add Personal Detail',
  //props<{personal: any}>()
)

export const addImage = createAction(
  '[Signup] Add Image',
  //props<{image: any}>()
)

//export const setScores = createAction('[Scoreboard Page] Set Scores', props<{game: Game}>());
