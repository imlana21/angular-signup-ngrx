import { Action, createReducer, on } from '@ngrx/store';
import * as SignupAction from '../action/singup.actions';
import { Signup } from '../../../models/signup';
import { state } from '@angular/animations';


export const singupFeatureKey = 'singup';

export const initialState: Signup = {
  personal: {
    fname: null,
    lname: null,
    phno: null,
    phno_2: null
  },
  account: {
    email: null,
    uname: null,
    pwd: null,
    cpwd: null
  },
  image: {
    pic: null,
    sigpic: null
  }
};

export const signupReducer = createReducer(
  initialState,
  on(
    SignupAction.addAccount, 
    (state, data) => ({
      ...state, 
      account: {
        email: data.email,
        uname: data.uname,
        pwd: data.pwd,
        cpwd: data.cpwd
      } 
    })
  ),
  on(
    SignupAction.addPersonal, 
    (state, data) => ({
      ...state, 
      personal: {
        fname: data.fname, 
        lname: data.lname, 
        phno: data.phno, 
        phno_2: data.phno_2
      } 
    }
  )),
  on(
    SignupAction.addImage,
    (state, data) => ({
      ...state,
      image: {
        pic: data.pic,
        sigpic: data.sigpic
      }
    })
  ),
);

export function reducer(state: Signup | undefined, action: Action) {
  return signupReducer(state, action);
}