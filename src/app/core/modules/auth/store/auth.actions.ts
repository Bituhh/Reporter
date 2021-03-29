import {createAction, props} from '@ngrx/store';

const AUTH: 'Auth' = 'Auth';

// Sign In Actions
export const PageSignInAction = createAction(
  `[${AUTH} Page] sign in`,
  props<{ accountId: string, email: string, password: string }>(),
);
export const EffectSignInAction = createAction(
  `[${AUTH} Effect] sign in`,
  props<{ accountId: string, email: string, password: string }>(),
);
export const ServiceSignInCompleteAction = createAction(
  `[${AUTH} Service] sign in complete`,
  props<{ newPasswordRequired: boolean, authenticated: boolean }>(),
);
export const ServiceSignInFailedAction = createAction(
  `[${AUTH} Service] sign in failed`,
  props<{ error?: string }>(),
);

// Reset Password Actions
export const PageResetPasswordAction = createAction(
  `[${AUTH} Page] reset password`,
  props<{ email: string, password: string }>(),
);
export const EffectResetPasswordAction = createAction(
  `[${AUTH} Effect] reset password`,
  props<{ email: string, password: string }>(),
);
export const ServiceResetPasswordCompleteAction = createAction(
  `[${AUTH} Service] reset password complete`,
  props<{ authenticated: boolean }>(),
);
export const ServiceResetPasswordFailedAction = createAction(
  `[${AUTH} Service] reset password failed`,
  props<{ error?: string }>(),
);

