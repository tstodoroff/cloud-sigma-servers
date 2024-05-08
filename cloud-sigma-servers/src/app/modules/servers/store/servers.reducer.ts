import { HttpErrorResponse } from '@angular/common/http';

import * as fromRoot from '../../../shared/store/app.state';

import { EServersType, ServerAction } from './servers.actions';
import { IServer } from '../models/servers.interface';

export const serversFeatureKey = 'servers';

export interface IServersState extends fromRoot.IAppState {
  servers: IServer[];
  selectedServerDetails: IServer;
  isLoading: boolean;
  successGetAll: boolean;
  successUpdateDetails: boolean;
  error: HttpErrorResponse;
}

export const serversInitialState: IServersState = {
  servers: null,
  selectedServerDetails: null,
  isLoading: false,
  successGetAll: null,
  successUpdateDetails: null,
  error: null
};

export function reducer(state = serversInitialState, action?: ServerAction) {
  switch (action.type) {
    case EServersType.GetServers:
      return { ...state, isLoading: true };
    case EServersType.GetServersSuccess:
      return { ...state, isLoading: false, successGetAll: true, servers: action.payload };
    case EServersType.GetServersError:
      return { ...state, isLoading: false, error: action.payload, successGetAll: false };

    case EServersType.AddServer:
      return { ...state, isLoading: true, error: null };
    case EServersType.AddServerSuccess:
      return { ...state, isLoading: false, selectedServerDetails: action.payload };
    case EServersType.AddServerError:
      return { ...state, isLoading: false, error: action.payload };

    case EServersType.UpdateServer:
      return { ...state, isLoading: true, error: null };
    case EServersType.UpdateServerSuccess:
      return { ...state, isLoading: false, successUpdateDetails: true, selectedServerDetails: action.payload };
    case EServersType.UpdateServerError:
      return { ...state, isLoading: false, error: action.payload, successUpdateDetails: false };

    case EServersType.DeleteServer:
      return { ...state, isLoading: true, error: null };
    case EServersType.DeleteServerSuccess:
      return { ...state, isLoading: false, selectedServerDetails: action.payload };
    case EServersType.DeleteServerError:
      return { ...state, isLoading: false, error: action.payload };

    case EServersType.SetSelectedServer:
      return { ...state, isLoading: false, selectedServerDetails: action.payload };

      default:
      return state;
  }
}
