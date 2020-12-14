import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Progressbar } from 'src/app/models/progressbar';

// Membuat Feature Selector
export const progressBarFeatureState = createFeatureSelector<Progressbar>('progressbar');

// Membuat Selector untuk getter dan feature state
export const getProgressBar = createSelector(
    progressBarFeatureState,
    (state: Progressbar) => state.progress
)
