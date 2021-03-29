import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../store';
import * as AuthActions from '../../store/auth.actions';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  newUser = false;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      email: new FormControl(null, [Validators.email]),
      password: new FormControl(null),
    });

    this.newUser = window.history.state.newUser;

    if (!this.newUser) {
      this.resetPasswordForm.get('email').setValidators([Validators.required]);
    }
  }

  onResetPassword(): void {
    this.store.dispatch(AuthActions.PageResetPasswordAction(this.resetPasswordForm.getRawValue()));
  }
}
