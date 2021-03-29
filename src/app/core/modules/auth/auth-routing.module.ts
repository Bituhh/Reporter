import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResetPasswordComponent} from './component/reset-password/reset-password.component';
import {SignInComponent} from './component/sign-in/sign-in.component';
import {AuthComponent} from './auth.component';

const routes: Routes = [
  {
    path: '', component: AuthComponent, children: [
      {path: '', redirectTo: 'sign-in'},
      {path: 'sign-in', component: SignInComponent, data: {animation: 'SignInPage'}},
      {path: 'reset-password', component: ResetPasswordComponent, data: {animation: 'ResetPasswordPage'}},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
