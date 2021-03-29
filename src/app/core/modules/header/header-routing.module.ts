import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../auth/auth.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', children: [
      {path: 'login', component: LoginComponent},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class HeaderRoutingModule {
}
