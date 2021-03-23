import {Injectable} from '@angular/core';
import {createEffect} from '@ngrx/effects';
import {NgrxUtilsService} from '../../../services/ngrx-utils.service';
import * as LoginActions from './login.actions';
import {LoginService} from './login.service';

@Injectable({providedIn: 'root'})
export class LoginEffects {

  signIn$ = createEffect(
    () => this.ngrxUtils.actionToAction({
      actionsToListenTo: [
        LoginActions.PageSignInAction,
      ],
      actionsToDispatch: LoginActions.EffectSignInAction,
    }),
  );
  signInEffect$ = createEffect(
    () => this.ngrxUtils.actionToServiceToAction({
      actionsToListenTo: [
        LoginActions.EffectSignInAction,
      ],
      serviceMethod: this.loginService.signIn.bind(this.loginService),
    }),
  );

  constructor(private ngrxUtils: NgrxUtilsService,
              private loginService: LoginService) {
  }
}
