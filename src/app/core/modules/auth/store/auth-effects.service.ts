import {Injectable} from '@angular/core';
import {createEffect} from '@ngrx/effects';
import {NgrxUtilsService} from '../../../services/ngrx-utils.service';
import * as AuthActions from './auth.actions';
import {LoginService} from './login.service';

@Injectable({providedIn: 'root'})
export class AuthEffects {

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
      serviceMethod: this.loginService.signIn.bind(this.loginService),
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
      serviceMethod: this.loginService.resetPassword.bind(this.loginService),
      successNavigation: (navigate, data: { authenticated: boolean }) => {
        if (data.authenticated) {
          navigate(['home']);
        }
      },
    }),
  );

  constructor(private ngrxUtils: NgrxUtilsService,
              private loginService: LoginService) {
  }
}
