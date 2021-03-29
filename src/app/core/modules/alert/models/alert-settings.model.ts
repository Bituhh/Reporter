import {TemplateRef} from '@angular/core';
import {AlertButtonSettings} from './alert-button-settings.model';
import {AlertResult} from './alert-result.model';

export interface AlertSettings {
  title: string;
  message?: string;
  html?: string;
  template?: TemplateRef<any>;
  confirm?: AlertButtonSettings;
  deny?: AlertButtonSettings;
  cancel?: AlertButtonSettings;
  afterOpened?: () => void;
  afterClosed?: (result: AlertResult) => void;
}
