import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../../../store';
import * as fromAuthReducers from './auth.reducers';

export const authFeatureSelector = createFeatureSelector<AppState, fromAuthReducers.State>('auth');

export const loadingSelector = createSelector(authFeatureSelector, s1 => s1.loading);
export const authenticatedSelector = createSelector(authFeatureSelector, s1 => s1.authenticated);
