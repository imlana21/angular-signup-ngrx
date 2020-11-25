import { Action, createReducer, on } from '@ngrx/store';
import * as SignupAction from '../action/singup.actions';


export const singupFeatureKey = 'singup';

export interface State {
  personal: any;
  account: any;
  image: any;
}

export const initialState: State = {
  personal: [],
  account: [],
  image: []
};

export const signupReducer = createReducer(
  initialState,
  //on(SignupAction.addAccount, state => ({...state, account: state.account })),
  on(SignupAction.addPersonal, state => ({...state, personal: state.personal })),
  //on(SignupAction.addAccount, state => ({...state, image: state.image })),
  //on(SignupAction.addAccount, (state, {data}) => ({...state, image: state.image })),
);

export function reducer(state: State | undefined, action: Action) {
  console.log(state)
  return signupReducer(state, action);
}