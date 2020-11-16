import { Form } from '@angular/forms';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSignup from '../reducer/user.reducer';

export const selectSignupState = createFeatureSelector<fromSignup.UserState>(
    fromSignup.userFeatureKey
);

export const selectSignup = createSelector(
    selectSignupState,
    (state: fromSignup.UserState) => state.signup
)