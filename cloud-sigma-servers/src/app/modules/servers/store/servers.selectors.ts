import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromServersReducer from './servers.reducer';
import { selectRouteParam } from '../../../shared/store/route/route.selectors'; // TODO: Use aliases

export const selectBaseFeature = createFeatureSelector<fromServersReducer.IServersState>('servers');

export const getIsLoading = createSelector(selectBaseFeature, (state: fromServersReducer.IServersState) => state.isLoading);

export const getServers = createSelector(selectBaseFeature, (state: fromServersReducer.IServersState) => state.servers);

export const getAllSuccess = createSelector(selectBaseFeature, (state: fromServersReducer.IServersState) => state.successGetAll);

export const getServer = createSelector(getServers, selectRouteParam('id'), (servers, id) =>
  servers.filter(server => server.uuid === id)
);

export const getServerDetails = createSelector(selectBaseFeature, (state: fromServersReducer.IServersState) => state.selectedServerDetails);

export const getUpdateSuccess = createSelector(selectBaseFeature, (state: fromServersReducer.IServersState) => state.successUpdateDetails);

export const getError = createSelector(selectBaseFeature, (state: fromServersReducer.IServersState) => state.error);

export const getFail = createSelector(selectBaseFeature, (state: fromServersReducer.IServersState) => state.error);
