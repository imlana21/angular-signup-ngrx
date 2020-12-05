import { createAction, props } from '@ngrx/store';

export const loadSingups = createAction(
  '[Singup] Load Singups'
);

export const addAccount = createAction(
  '[Signup] Add Account Detail',
  props<{email: string, uname: string, pwd: string, cpwd: string}>()
)

export const addPersonal = createAction(
  '[Signup] Add Personal Detail',
  props<{fname: string, lname: string, phno: string, phno_2: string}>()
)

export const addImage = createAction(
  '[Signup] Add Image',
  props<{pic: any, sigpic: any}>()
)
