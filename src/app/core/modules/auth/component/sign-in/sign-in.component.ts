import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppState} from '../../../../store';
import * as AuthActions from '../../store/auth.actions';
import * as AuthSelectors from '../../store/auth.selectors';

@Component({
  selector: 'app-login-container',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  $loading: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(AuthActions.RouterSilentSignInAction());
    this.$loading = this.store.select(AuthSelectors.loadingSelector);
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null),
    });
  }

  onLogin(): void {
    this.store.dispatch(AuthActions.PageSignInAction(this.loginForm.getRawValue()));
  }
}
