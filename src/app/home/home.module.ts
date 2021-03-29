import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HomeMaterialModule} from './home-material.module';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HomeMaterialModule,
  ],
})
export class HomeModule {
}
