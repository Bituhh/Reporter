import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../../environments/environment';
import * as fromLoginReducer from '../modules/login/store/login.reducers';

export interface AppState {
  login: fromLoginReducer.State;

}

export const reducers: ActionReducerMap<AppState> = {
  login: fromLoginReducer.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
