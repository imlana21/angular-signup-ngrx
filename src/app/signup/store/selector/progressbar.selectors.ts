import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Progressbar } from 'src/app/models/progressbar';

// Membuat Interface
export interface ProgressState {
    progressBar: Progressbar
}

// Getter progressbar
export const getProgressBar = (state: ProgressState) => state.progressBar;

// Membuat Feature Selector
export const progressBarFeatureState = createFeatureSelector<ProgressState>('progressbar');

// Membuat Selector untuk getter dan feature state
export const getProgressBarState = createSelector(
    getProgressBar,
    progressBarFeatureState
)

// Membuat selector untuk mengambil data dari progressbar
export const getProgressBarData = createSelector(
    getProgressBarState,
    (data) => {
        return data.progressBar;
    }
)