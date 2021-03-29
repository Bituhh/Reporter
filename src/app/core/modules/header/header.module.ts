import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HeaderMaterialModule} from './header-material.module';
import {HeaderComponent} from './header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderMaterialModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule {
}
