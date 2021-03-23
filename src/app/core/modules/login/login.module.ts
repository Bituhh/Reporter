import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {LoginMaterialModule} from './login-material.module';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {LoginEffects} from './store/login.effects';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LoginMaterialModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([LoginEffects]),
  ],
})
export class LoginModule {
}
