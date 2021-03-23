import {AlertButtonSettings} from './alert-button-settings.model';

export interface DialogData {
  title?: string;
  message?: string;
  confirm?: AlertButtonSettings;
  deny?: AlertButtonSettings;
  cancel?: AlertButtonSettings;
}
