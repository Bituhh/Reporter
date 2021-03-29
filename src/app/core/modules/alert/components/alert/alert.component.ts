import {Component, Inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AlertResultType} from '../../models/alert-result.model';
import {AlertDialogData} from '../../models/dialog-data.model';

@Component({
  selector: 'app-alert-success',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  @ViewChild('templateRef') templateRef: TemplateRef<any>;

  constructor(@Inject(MAT_DIALOG_DATA) public data: AlertDialogData,
              public matDialogRef: MatDialogRef<AlertComponent>) {
  }

  ngOnInit(): void {
    if (!this.data.confirm) {
      this.data.confirm = {show: true, text: 'Confirm'};
    } else {
      this.data.confirm.text = this.data.confirm.text ?? 'Confirm';
      this.data.confirm.show = typeof this.data.confirm.show === 'boolean' ? this.data.confirm.show : true;
    }

    if (!this.data.deny) {
      this.data.deny = {show: false, text: 'Deny'};
    } else {
      this.data.deny.text = this.data.deny.text ?? 'Deny';
      this.data.deny.show = typeof this.data.deny.show === 'boolean' ? this.data.deny.show : false;
    }

    if (!this.data.cancel) {
      this.data.cancel = {show: false, text: 'Cancel'};
    } else {
      this.data.cancel.text = this.data.cancel.text ?? 'Cancel';
      this.data.cancel.show = typeof this.data.cancel.show === 'boolean' ? this.data.cancel.show : false;
    }
  }

  onClose(type: AlertResultType): void {
    this.matDialogRef.close({type});
  }
}
