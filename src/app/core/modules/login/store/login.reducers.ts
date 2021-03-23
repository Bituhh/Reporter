import {Action, createReducer, on} from '@ngrx/store';

export interface State {
  loading: boolean;
}

export const initialState: State = {
  loading: false,
};

const loginReducer = createReducer(
  initialState,
  on(),
);

export function reducer(state: State | undefined, action: Action): State {
  return loginReducer(state, action);
}
