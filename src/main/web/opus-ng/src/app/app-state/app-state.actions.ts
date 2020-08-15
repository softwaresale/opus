import { createAction, props } from '@ngrx/store';

export const setDeviceSize = createAction(
  '[App State] Set device size',
  props<{ isMobile: boolean }>(),
);
