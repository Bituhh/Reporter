import {Injectable} from '@angular/core';
import {createEffect} from '@ngrx/effects';
import {NgrxUtilsService} from '../../../services/ngrx-utils.service';
import * as AuthActions from './auth.actions';
import {AuthService} from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthEffects {

  clearData$ = createEffect(
    () => this.ngrxUtils.actionToAction({
      actionsToListenTo: [
        AuthActions.ServiceSignOutCompleteAction,
      ],
      actionsToDispatch: AuthActions.ResetStoreAction,
    }),
  );

  signIn$ = createEffect(
    () => this.ngrxUtils.actionToAction({
      actionsToListenTo: [
        AuthActions.PageSignInAction,
      ],
      actionsToDispatch: AuthActions.EffectSignInAction,
    }),
  );
  signInEffect$ = createEffect(
    () => this.ngrxUtils.actionToServiceToAction({
      actionsToListenTo: [
        AuthActions.EffectSignInAction,
      ],
      serviceMethod: this.authService.signIn.bind(this.authService),
      successNavigation: (navigate, data: { newPasswordRequired: boolean, authenticated: boolean }) => {
        if (data.newPasswordRequired) {
          navigate(['auth', 'reset-password'], {state: {newUser: true}});
        } else {
          navigate(['home']);
        }
      },
    }),
  );

  resetPassword$ = createEffect(
    () => this.ngrxUtils.actionToAction({
      actionsToListenTo: [
        AuthActions.PageResetPasswordAction,
      ],
      actionsToDispatch: AuthActions.EffectResetPasswordAction,
    }),
  );
  resetPasswordEffect$ = createEffect(
    () => this.ngrxUtils.actionToServiceToAction({
      actionsToListenTo: [
        AuthActions.EffectResetPasswordAction,
      ],
      serviceMethod: this.authService.resetPassword.bind(this.authService),
      successNavigation: (navigate, data: { authenticated: boolean }) => {
        if (data.authenticated) {
          navigate(['home']);
        }
      },
    }),
  );

  signOut$ = createEffect(
    () => this.ngrxUtils.actionToAction({
      actionsToListenTo: [
        AuthActions.PageSignOutAction,
      ],
      actionsToDispatch: AuthActions.EffectSignOutAction,
    }),
  );
  signOutEffect$ = createEffect(
    () => this.ngrxUtils.actionToServiceToAction({
      actionsToListenTo: [
        AuthActions.EffectSignOutAction,
      ],
      serviceMethod: this.authService.signOut.bind(this.authService),
      successNavigation: navigate => navigate(['auth']),
    }),
  );

  silentSignIn$ = createEffect(
    () => this.ngrxUtils.actionToAction({
      actionsToListenTo: [
        AuthActions.RouterSilentSignInAction,
      ],
      actionsToDispatch: AuthActions.EffectSilentSignInAction,
    }),
  );
  silentSignInEffect$ = createEffect(
    () => this.ngrxUtils.actionToServiceToAction({
      actionsToListenTo: [
        AuthActions.EffectSilentSignInAction,
      ],
      serviceMethod: this.authService.silentSignIn.bind(this.authService),
      successNavigation: (navigate, data: { authenticated: boolean }) => {
        if (data.authenticated) {
          navigate(['home']);
        }
      },
    }),
  );

  constructor(private ngrxUtils: NgrxUtilsService,
              private authService: AuthService) {
  }
}
