import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Signup } from 'src/app/models/signup';

// Membuat Feature Selector
export const signupFeatureState = createFeatureSelector<Signup>('signup');

// Membuat Selector untuk getter dan feature state
export const getPersonalData = createSelector(
    signupFeatureState,
    (state: Signup) => state.personal
);

export const getAccountData = createSelector(
    signupFeatureState,
    (state: Signup) => state.account
);

export const getImageData = createSelector(
    signupFeatureState,
    (state: Signup) => state.image
);

export const getUserData = createSelector(
    signupFeatureState,
    (state: Signup) => state
)