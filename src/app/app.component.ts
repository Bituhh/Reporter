import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as AuthSelector from './core/modules/auth/store/auth.selectors';
import {AppState} from './core/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  $authenticated: Observable<boolean>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.$authenticated = this.store.select(AuthSelector.authenticatedSelector);
  }
}
