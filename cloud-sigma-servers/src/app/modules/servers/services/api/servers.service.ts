import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay, pluck } from 'rxjs/operators';

import { IServer, IServerPayload, IServerResponse } from '../../models/servers.interface';

import { mockAllServers, mockSelectedServer, mockAllServersResponse, mockManageServerResponse } from '../../mocks/servers';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  constructor(private _http: HttpClientModule) {}

  public getServers(): Observable<IServer[]> {
    // return this._http.get<IServerResponse>(`${globalEnvironments.API_URL}/servers`).pluck('data'); // TODO

    return of(mockAllServers).pipe(delay(3));
  }

  public getServer(uuid: string): Observable<IServer> {
    // return this._http.get<IServerResponse>(`${globalEnvironments.API_URL}/servers/${uuid}`).pluck('data'); // TODO

    return of(mockSelectedServer).pipe(delay(3));
  }

  public addServer(serverPayload: IServerPayload): Observable<IServer> { // TODO: add those types
    // return this._http.post<IServerResponse>(
    //   `${globalEnvironments.API_URL}/servers`, // TODO
    //   serverPayload
    // ).pluck('data');

    return of(mockSelectedServer).pipe(delay(3));
  }

  public updateServer(uuid: string, serverPayload: IServerPayload): Observable<IServer> {
    // return this._http.put<IServerResponse>(
    //   `${globalEnvironments.API_URL}/servers/${uuid}`, // TODO
    //   serverPayload
    // ).pluck('data');

    return of(mockSelectedServer).pipe(delay(3));
  }

  public deleteServer(uuid: string): Observable<IServer> {
    // return this._http.delete(`${globalEnvironments.API_URL}/servers/${uuid}`).pluck('data'); // TODO

    return of({} as IServer).pipe(delay(3));
  }
}
