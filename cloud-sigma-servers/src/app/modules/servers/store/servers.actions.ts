import { Action } from '@ngrx/store';

import { IServer, IServerPayload } from '../models/servers.interface';

export enum EServersType {
  GetServers = '[SERVER] get servers',
  GetServersSuccess = '[SERVER] get servers success',
  GetServersError = '[SERVER] get servers error',

  AddServer = '[SERVER] Add server',
  AddServerSuccess = '[SERVER] Add server success',
  AddServerError = '[SERVER] Add server error',

  UpdateServer = '[SERVER] update server',
  UpdateServerSuccess = '[SERVER] update server success',
  UpdateServerError = '[SERVER] update server error',

  DeleteServer = '[SERVER] delete server',
  DeleteServerSuccess = '[SERVER] delete server success',
  DeleteServerError = '[SERVER] delete server error',

  SetSelectedServer = '[SERVER] set selected server'
}

export class GetServers implements Action {
  public readonly type = EServersType.GetServers;
  constructor() {}
}

export class GetServersSuccess implements Action {
  public readonly type = EServersType.GetServersSuccess;
  constructor(public payload?: IServer[]) {}
}

export class GetServersError implements Action {
  public readonly type = EServersType.GetServersError;
  constructor(public payload?: any) {}
}

export class AddServer implements Action {
  public readonly type = EServersType.AddServer;
  constructor(public payload: IServerPayload) {}
}

export class AddServerSuccess implements Action {
  public readonly type = EServersType.AddServerSuccess;
  constructor(public payload?: IServer) {}
}

export class AddServerError implements Action {
  public readonly type = EServersType.AddServerError;
  constructor(public payload?: any) {}
}

export class UpdateServer implements Action {
  public readonly type = EServersType.UpdateServer;
  constructor(public payload: IServerPayload) {}
}

export class UpdateServerSuccess implements Action {
  public readonly type = EServersType.UpdateServerSuccess;
  constructor(public payload?: IServerPayload) {}
}

export class UpdateServerError implements Action {
  public readonly type = EServersType.UpdateServerError;
  constructor(public payload?: any) {}
}

export class DeleteServer implements Action {
  public readonly type = EServersType.DeleteServer;
  constructor(public payload: IServer) {}
}

export class DeleteServerSuccess implements Action {
  public readonly type = EServersType.DeleteServerSuccess;
  constructor(public payload?: IServer) {}
}

export class DeleteServerError implements Action {
  public readonly type = EServersType.DeleteServerError;
  constructor(public payload?: any) {}
}

export class SetSelectedServer implements Action {
  public readonly type = EServersType.SetSelectedServer;
  constructor(public payload: IServer) {}
}

export type ServerAction =
  | GetServers
  | GetServersSuccess
  | GetServersError
  | AddServer
  | AddServerSuccess
  | AddServerError
  | DeleteServer
  | DeleteServerSuccess
  | DeleteServerError
  | UpdateServer
  | UpdateServerSuccess
  | UpdateServerError
  | SetSelectedServer;
