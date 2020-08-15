import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAppState from './app-state.reducer';

export const selectAppStateState = createFeatureSelector<fromAppState.State>(
  fromAppState.appStateFeatureKey
);

export const selectIsMobile = createSelector(
  selectAppStateState,
  state => state.isMobile
);
