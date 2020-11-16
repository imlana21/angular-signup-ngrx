import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { Signup } from '../../../models/signup';
import * as SignupAction from '../action/user.actions'


export const userFeatureKey = 'user';

export interface UserState {
  signup: Signup[]
}

export const initialState: UserState = {
  signup: []
};


export const userReducer = createReducer(
  initialState,
  on(SignupAction.addUsers,
    (state: UserState, {signup}) => ({
      ...state,
      user: [
        ...state.signup, signup
      ]
    })
    )
);

export function reducer(state: UserState | undefined, action: Action): any {
  return userReducer(state, action);
}

