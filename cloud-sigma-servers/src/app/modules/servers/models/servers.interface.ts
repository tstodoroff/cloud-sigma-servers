export enum EServerStatus {
  Stopped = 'stopped',
  Running = 'running'
}

export const states = [EServerStatus.Running, EServerStatus.Stopped];

export enum EBusinessType {
  SoleTrader = 'soleTrader',
  RegisteredCompany = 'registeredCompany'
}

export interface IServerBase {
  mem: string;
  state: EServerStatus;
  cpu: string;
  name: string;
}

export interface IServer extends IServerBase {
  uuid: string;
}

export interface IServerPayload extends IServerBase {
  uuid?: string;
}

export interface IServerResponse {
  statusCode: string;
  statusText: string;
  data: IServer | IServer[];
}
