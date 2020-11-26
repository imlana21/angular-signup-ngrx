import { createFeatureSelector, createSelector } from '@ngrx/store';
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

// getter
export const getPersonalState =(state: AppState) => state.userPersonal;

export const personalFeatureState = createFeatureSelector<AppState>('personal');

export const getActivePersonal = createSelector(
    personalFeatureState,
    getPersonalState
)

export const getPersonalData = createSelector(
    getActivePersonal,
    data => {
        console.log(data)
    }
)