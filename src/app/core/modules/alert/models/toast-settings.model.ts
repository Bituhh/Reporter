export interface ToastSettings {
  message: string;
  duration?: number;
  afterOpened?: () => void;
  afterClosed?: (data) => void;
}
