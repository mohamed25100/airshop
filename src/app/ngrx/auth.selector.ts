import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducer';

export const selectAuthState = createFeatureSelector<AuthState>('authState');

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => { return state.isAuthenticated }
);