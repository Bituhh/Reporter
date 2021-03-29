import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Store} from '@ngrx/store';
import {from, Observable, of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import * as AuthSelectors from '../modules/auth/store/auth.selectors';
import {AppState} from '../store';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(AuthSelectors.authenticatedSelector).pipe(switchMap(authenticated => {
      if (authenticated) {
        return of(true);
      } else {
        return from(this.router.navigate(['auth']).then(() => false));
      }
    }));
  }
}
