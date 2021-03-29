import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {of} from 'rxjs';
import {delay, switchMap, take} from 'rxjs/operators';
import {AlertComponent} from '../components/alert/alert.component';
import {ToastComponent} from '../components/toast/toast.component';
import {AlertResultType} from '../models/alert-result.model';
import {AlertSettings} from '../models/alert-settings.model';
import {AlertDialogData, ToastDialogData} from '../models/dialog-data.model';
import {ToastSettings} from '../models/toast-settings.model';

@Injectable({providedIn: 'root'})
export class AlertService {

  constructor(private matDialog: MatDialog) {
  }

  toast(settings: ToastSettings): void {
    settings.duration = settings.duration ?? 4000;
    const config: MatDialogConfig & { data: ToastDialogData } = {
      position: {top: '5px', right: '5px'},
      hasBackdrop: false,
      panelClass: 'alert-toast',
      data: {
        message: settings.message,
      },
    };

    const dialog = this.matDialog.open(ToastComponent, config);
    dialog.afterOpened().pipe(
      delay(settings.duration),
      take(1),
      switchMap(() => {
        dialog.close();
        return of();
      }),
    ).subscribe(settings.afterOpened);
    dialog.afterClosed().pipe(take(1)).subscribe(settings.afterClosed);
  }

  alert(settings: AlertSettings): void {
    const config: MatDialogConfig & { data: AlertDialogData } = {
      data: {
        title: settings.title,
        message: settings.message,
        html: settings.html,
        template: settings.template,
        confirm: settings.confirm,
        deny: settings.deny,
        cancel: settings.cancel,
      },
    };

    const dialog = this.matDialog.open(AlertComponent, config);
    dialog.afterOpened().pipe(take(1)).subscribe(settings.afterOpened);
    dialog.afterClosed().pipe(take(1)).subscribe(x => {
      if (settings.afterClosed) {
        settings.afterClosed(x ?? {type: AlertResultType.cancelled});
      }
    });
  }
}
