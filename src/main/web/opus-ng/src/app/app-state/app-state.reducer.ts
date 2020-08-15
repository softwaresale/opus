import { Action, createReducer, on } from '@ngrx/store';
import * as AppStateActions from './app-state.actions';

export const appStateFeatureKey = 'appState';

export interface State {
  isMobile: boolean;
}

export const initialState: State = {
  isMobile: false,
};


export const reducer = createReducer(
  initialState,

  on(AppStateActions.setDeviceSize, (state, { isMobile }) => ({ ...state, isMobile })),
);

