import {Action, createReducer, on} from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface State {
  loading: boolean;
  authenticated: boolean;
}

export const initialState: State = {
  loading: false,
  authenticated: false,
};

const authReducer = createReducer(
  initialState,

  on(AuthActions.ResetStoreAction, () => initialState),

  on(AuthActions.EffectSignInAction,
    state => ({...state, loading: true})),
  on(AuthActions.ServiceSignInCompleteAction,
    (state, {authenticated}) => ({...state, loading: false, authenticated})),
  on(AuthActions.ServiceSignInFailedAction,
    state => ({...state, loading: false})),

  on(AuthActions.EffectSilentSignInAction,
    state => ({...state, loading: true})),
  on(AuthActions.ServiceSilentSignInCompleteAction,
    (state, {authenticated}) => ({...state, loading: false, authenticated})),
  on(AuthActions.ServiceSilentSignInFailedAction,
    state => ({...state, loading: false})),

  on(AuthActions.EffectResetPasswordAction,
    state => ({...state, loading: true})),
  on(AuthActions.ServiceResetPasswordCompleteAction,
    (state, {authenticated}) => ({...state, loading: false, authenticated})),
  on(AuthActions.ServiceResetPasswordFailedAction,
    state => ({...state, loading: false})),

  on(AuthActions.EffectSignOutAction,
    state => ({...state, loading: true})),
  on(AuthActions.ServiceSignOutCompleteAction,
    state => ({...state, loading: false})),
  on(AuthActions.ServiceSignOutFailedAction,
    state => ({...state, loading: false})),
);

export function reducer(state: State | undefined, action: Action): State {
  return authReducer(state, action);
}
