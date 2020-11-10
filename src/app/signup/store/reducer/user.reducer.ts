import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { Signup } from '../../../models/signup';
import * as SignupAction from '../action/user.actions'


export const userFeatureKey = 'user';

export interface UserState {
  user: Signup[]
}

export const initialState: UserState = {
  user: []
};


export const userReducer = createReducer(
  initialState,
  on(SignupAction.addUsers,
    (state: UserState, {user}) => ({
      ...state,
      user: [
        ...state.user, user
      ]
    })
    )
);

export function reducer(state: UserState | undefined, action: Action): any {
  return userReducer(state, action);
}

