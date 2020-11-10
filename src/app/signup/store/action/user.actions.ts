import { createAction, props } from '@ngrx/store';
import { Signup } from '../../../models/signup';

export const addUsers = createAction(
  '[User] Add Users', (user: Signup) => ({ user })
);