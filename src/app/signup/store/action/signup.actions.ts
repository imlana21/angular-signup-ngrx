import { createAction, props } from '@ngrx/store';
import { Signup } from '../../../models/signup';

export const addUsers = createAction(
  '[Signup] Add Users', (signup: Signup) => ({ signup })
);