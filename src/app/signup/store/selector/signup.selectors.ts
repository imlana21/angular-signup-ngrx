import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducer/singup.reducer';
import { Signup } from '../../../models/signup';

export interface Personal {
    fname: string;
    lname: string;
    phno: string;
    phno_2: string;
}

export interface AppState {
    userPersonal: Personal;
}

export const getPersonal =(state: AppState) => state.userPersonal;

export const getActiveSignup = createSelector(
    getPersonal,
    (userPersonal: Personal) => {
        console.log(userPersonal);
    }
)