import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {AlertComponent} from './components/alert/alert.component';
import {ToastComponent} from './components/toast/toast.component';


@NgModule({
  declarations: [
    AlertComponent,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class AlertModule {
}
