import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../store';
import {AlertTypes} from '../alert/models/alert-types.model';
import {AlertService} from '../alert/service/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private store: Store<AppState>, private alert: AlertService) {
  }

  get hasAtLeastOneLowerCaseChar(): boolean {
    return !!this.loginForm.get('password').value.toString().match(/(?=.*[a-z])/);
  }

  get hasAtLeastOneUpperCaseChar(): boolean {
    return !!this.loginForm.get('password').value.toString().match(/(?=.*[A-Z])/);
  }

  get hasAtLeastOneNumericChar(): boolean {
    return !!this.loginForm.get('password').value.toString().match(/(?=.*[0-9])/);
  }

  get hasAtLeastOneSpecialChar(): boolean {
    return !!this.loginForm.get('password').value.toString().match(/(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&\/,><\’:;|_~`])/);
  }

  get hasAtLeastEightChar(): boolean {
    return this.loginForm.get('password').value.toString().length >= 8;
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      accountId: new FormControl(null, [
        Validators.required,
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.\[\]{}\(\)?\-“!@#%&\/,><\’:;|_~`])\S{8,99}$/),
      ]),
    });
  }

  onLogin(): void {
    this.alert.open({type: AlertTypes.toast, message: 'This is a test message!'});
    // this.store.dispatch(LoginActions.PageSignInAction(this.loginForm.getRawValue()));
  }
}
