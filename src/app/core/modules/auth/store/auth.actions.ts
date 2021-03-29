import {createAction, props} from '@ngrx/store';

const AUTH: 'Auth' = 'Auth';

export const ResetStoreAction = createAction(
  `[${AUTH}] reset store`,
);

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

// Sign Out Actions
export const PageSignOutAction = createAction(
  `[${AUTH} Page] sign out`,
);
export const EffectSignOutAction = createAction(
  `[${AUTH} Effect] sign out`,
);
export const ServiceSignOutCompleteAction = createAction(
  `[${AUTH} Service] sign out complete`,
);
export const ServiceSignOutFailedAction = createAction(
  `[${AUTH} Service] sign out failed`,
  props<{ error?: string }>(),
);

// Silent Sign In Actions
export const RouterSilentSignInAction = createAction(
  `[${AUTH} Router] silent sign in`,
);
export const EffectSilentSignInAction = createAction(
  `[${AUTH} Effect] silent sign in`,
);
export const ServiceSilentSignInCompleteAction = createAction(
  `[${AUTH} Service] silent sign in complete`,
  props<{ authenticated: boolean }>(),
);
export const ServiceSilentSignInFailedAction = createAction(
  `[${AUTH} Service] silent sign in failed`,
  props<{ error?: string }>(),
);


