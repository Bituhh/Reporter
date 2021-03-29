import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'auth'},
  {path: 'auth', loadChildren: () => import('./core/modules/auth/auth.module').then(m => m.AuthModule)},
  {path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
