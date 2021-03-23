import {createAction, props} from '@ngrx/store';

const LOGIN: 'Login' = 'Login';

// Sign In Actions
export const PageSignInAction = createAction(
  `[${LOGIN} Page] sign in`,
  props<{ accountId: string, email: string, password: string }>(),
);
export const EffectSignInAction = createAction(
  `[${LOGIN} Effect] sign in`,
  props<{ accountId: string, email: string, password: string }>(),
);
export const ServiceSignInSkipAction = createAction(
  `[${LOGIN} Service] sign in skip`,
);
export const ServiceSignInCompleteAction = createAction(
  `[${LOGIN} Service] sign in complete`,
);
export const ServiceSignInFailedAction = createAction(
  `[${LOGIN} Service] sign in failed`,
);
