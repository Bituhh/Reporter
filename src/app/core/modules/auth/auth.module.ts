import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {EffectsModule} from '@ngrx/effects';
import {PasswordComponent} from './component/password/password.component';
import {ResetPasswordComponent} from './component/reset-password/reset-password.component';
import {SignInComponent} from './component/sign-in/sign-in.component';
import {AuthMaterialModule} from './auth-material.module';
import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from './auth.component';
import {AuthEffects} from './store/auth-effects.service';

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    PasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthMaterialModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule {
}
