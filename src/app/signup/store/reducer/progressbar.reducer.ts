import { Action, createReducer, on } from '@ngrx/store';
import { Progressbar } from 'src/app/models/progressbar';
import * as ProgressbarAction from '../action/progressbar.actions';


export const progressbarFeatureKey = 'progressbar';

export const initialState: Progressbar = {
  progress: 1
};


export const progressBarReducer = createReducer(
  initialState,
  on(
    ProgressbarAction.incProgressbars,
    (state) => ({
      ...state,
      progress: state.progress + 1
    }),
  ),
  on(
    ProgressbarAction.decProgressbars,
    (state) => ({
      ...state,
      progress: state.progress - 1
    })
  ),
  on(
    ProgressbarAction.loadProgressbars,
    (state) => ({
      ...state,
      progress: state.progress
    })
  )
);

export function reducer(state: Progressbar | undefined, action: Action) {
  return progressBarReducer(state, action);
}

