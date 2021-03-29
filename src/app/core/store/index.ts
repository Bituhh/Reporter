import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromAuthReducer from '../modules/auth/store/auth.reducers';

export interface AppState {
  auth: fromAuthReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuthReducer.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
