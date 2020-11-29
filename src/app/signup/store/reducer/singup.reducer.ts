import { Action, createReducer, on } from '@ngrx/store';
import * as SignupAction from '../action/singup.actions';
import { Signup } from '../../../models/signup';
import { state } from '@angular/animations';


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

export function reducer(state: Signup, action: Action) {
  return signupReducer(state, action);
}