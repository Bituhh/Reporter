export interface AlertResult {
  type: AlertResultType;
}

export enum AlertResultType {
  confirmed = 'confirmed',
  denied = 'denied',
  cancelled = 'cancelled',
}
