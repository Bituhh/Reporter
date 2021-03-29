import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthComponent} from '../core/modules/auth/auth.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private matDialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  onLogin(): void {
    const dialog = this.matDialog.open(AuthComponent, {
      height: '',
      width: '',
    });
  }
}
