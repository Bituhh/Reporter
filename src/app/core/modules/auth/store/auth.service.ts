import {Injectable} from '@angular/core';
import {CognitoUser} from 'amazon-cognito-identity-js';
import {Auth} from 'aws-amplify';
import {from, Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthService {

  user: CognitoUser & { challengeName: string };

  constructor() {
  }

  signIn(params: { email: string, password: string }): Observable<{ newPasswordRequired: boolean, authenticated: boolean }> {
    const x = Auth.signIn({
      username: params.email,
      password: params.password,
    }).then(user => {
      this.user = user;
      if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        console.log('password required');
        return {newPasswordRequired: true, authenticated: false};
      }
      return {authenticated: true, newPasswordRequired: false};
    });

    return from(x);
  }

  resetPassword(params: { email: string, password: string }): Observable<{ authenticated: boolean }> {
    if (this.user.challengeName === 'NEW_PASSWORD_REQUIRED') {
      return from(Auth.completeNewPassword(this.user, params.password).then(() => ({authenticated: true})));
    }
    return of({authenticated: false});
  }

  signOut(): Observable<null> {
    return from(Auth.signOut().then(() => null));
  }

  silentSignIn(): Observable<{ authenticated: boolean }> {
    return from(
      Auth.currentAuthenticatedUser()
        .then(() => ({authenticated: true}))
        .catch(() => ({authenticated: false})),
    );
  }
}
