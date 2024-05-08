import { EServerStatus, IServer, IServerPayload, IServerResponse } from '../models/servers.interface';

export const mockAllServers: IServer[] = [
  {
    mem: '1 GB',
    state: EServerStatus.Stopped,
    cpu: '7 GHz',
    uuid: 'cb1cb873-0a46-41d6-affc-a1ed41955fbf',
    name: 'My Server 1'
  },
  {
    mem: '2 GB',
    state: EServerStatus.Running,
    cpu: '8 GHz',
    uuid: '01e3021c-cd5c-4d3f-b39a-6b2dd3f706ba',
    name: 'My Server 2'
  },
  {
    mem: '4 GB',
    state: EServerStatus.Stopped,
    cpu: '9 GHz',
    uuid: '1d76a4b0-6887-43cc-97b3-8229c05b1fa1',
    name: 'My Server 3'
  }
];

export const mockSelectedServer: IServer = {
  ...mockAllServers[0]
};

export const mockAddServerPayload: IServerPayload = {
  mem: '6 GB',
  state: EServerStatus.Stopped,
  cpu: '11 GHz',
  name: 'My Server 4'
};

export const mockEditServerPayload: IServerPayload = {
  ...mockAddServerPayload,
  uuid: '1d76a4b0-6887-43cc-97b3-8229c05b1fa2',
};


export const mockManageServerResponse: IServerResponse = {
  statusCode: 'ok',
  statusText: 'ok',
  data: {
    ...mockSelectedServer
  }
};

export const mockAllServersResponse: IServerResponse = {
  statusCode: 'ok',
  statusText: 'ok',
  data: {
    ...mockAllServers
  }
};
