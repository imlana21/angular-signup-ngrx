import { Action, createReducer, on } from '@ngrx/store';
import * as SignupAction from '../action/singup.actions';
import { Signup } from '../../../models/signup';


export const singupFeatureKey = 'singup';

export const initialState: Signup = {
  personal: {
    fname: '',
    lname: '',
    phno: '',
    phno_2: ''
  },
  account: {
    email: '',
    uname: '',
    pwd: '',
    cpwd: ''
  },
  image: {
    pic: '',
    sigpic: ''
  }
};

export const signupReducer = createReducer(
  initialState,
  on(
    SignupAction.addAccount, 
    (state, data) => ({
      ...state, 
      account: state.account 
    })
  ),
  on(
    SignupAction.addPersonal, 
    (state, data) => ({
      ...state, 
      personal: {
        fname: data.fname, lname: data.lname, phno: data.phno, phno_2: data.phno_2
      } 
    }
  )),
  on(SignupAction.addAccount, state => ({...state, image: state.image })),
);

export function reducer(state: Signup, action: Action) {
  console.log(action);
  //console.log(state);
  console.log(signupReducer(state, action));
  return signupReducer(state, action);
}