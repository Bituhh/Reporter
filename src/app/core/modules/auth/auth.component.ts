import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideIn} from '../../utils/routes-animation';

@Component({
  selector: 'app-login',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [slideIn],
})

export class AuthComponent {

  constructor() {
  }

  prepareRoute(outlet: RouterOutlet): boolean {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
