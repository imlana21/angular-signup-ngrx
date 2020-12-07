import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { Progressbar } from 'src/app/models/progressbar';
import * as ProgressbarAction from '../action/progressbar.actions';


export const progressbarFeatureKey = 'progressbar';

export const initialState: Progressbar = {
  progress: 0
};


export const progressBarReducer = createReducer(
  initialState,
  on(
    ProgressbarAction.setProgressbars,
    (state, data) => ({
      ...state,
      progress: data.progress
    })
  )
);

export function reducer(state: Progressbar | undefined, action: Action) {
  return progressBarReducer(state, action);
}

