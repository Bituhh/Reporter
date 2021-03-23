import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {of} from 'rxjs';
import {delay, switchMap, take} from 'rxjs/operators';
import {AlertSuccessComponent} from '../components/alert-success/alert-success.component';
import {AlertToastComponent} from '../components/alert-toast/alert-toast.component';
import {AlertButtonSettings} from '../models/alert-button-settings.model';
import {AlertTypes} from '../models/alert-types.model';

@Injectable({providedIn: 'root'})
export class AlertService {

  constructor(private matDialog: MatDialog) {
  }

  open(params: {
    type?: AlertTypes,
    title?: string,
    message?: string,
    confirm?: AlertButtonSettings,
    deny?: AlertButtonSettings,
    cancel?: AlertButtonSettings,
    duration?: number,
    afterOpened?: () => void,
    afterClosed?: () => void,
  } = {}): void {
    let component;
    const config: MatDialogConfig = {
      data: {
        title: params.title,
        message: params.message,
        confirm: params.confirm,
        deny: params.deny,
        cancel: params.cancel,
      },
    };
    switch (params.type) {
      case AlertTypes.toast:
        config.position = {top: '5px', right: '5px'};
        config.hasBackdrop = false;
        config.panelClass = 'alert-toast';
        // params.duration = params.duration ?? 3000;
        component = AlertToastComponent;
        break;
      case AlertTypes.warning:
      case AlertTypes.question:
        break;
      case AlertTypes.success:
      default:
        component = AlertSuccessComponent;
        break;
    }

    const dialog = this.matDialog.open(component, config);

    dialog.afterOpened().pipe(delay(params.duration ?? 0), take(1), switchMap(() => {
      if (params.duration) {
        dialog.close();
      }
      return of();
    })).subscribe(params.afterOpened);

    dialog.afterClosed().pipe(take(1)).subscribe(params.afterClosed);
  }
}
