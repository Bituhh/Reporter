import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ToastDialogData} from '../../models/dialog-data.model';

@Component({
  selector: 'app-alert-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ToastDialogData) {
  }
}
