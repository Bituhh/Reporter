import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {AlertSuccessComponent} from './components/alert-success/alert-success.component';
import { AlertToastComponent } from './components/alert-toast/alert-toast.component';


@NgModule({
  declarations: [AlertSuccessComponent, AlertToastComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
  ],
})
export class AlertModule {
}
