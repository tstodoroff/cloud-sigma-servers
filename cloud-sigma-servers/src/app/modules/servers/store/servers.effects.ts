import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';

import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as fromServersActions from './servers.actions';
import * as fromRouter from '../../../shared/store/route/route.selectors';

import { IServer } from '../models/servers.interface';
import { ServersService } from '../services/api/servers.service';

@Injectable()
export class ServersEffects {
  constructor(
    private _actions$: Actions,
    private _serversService: ServersService,
    private _store: Store<fromRouter.IRouterState>
  ) {}

  public getServers$ = createEffect(() =>
    this._actions$.pipe(
      ofType(fromServersActions.EServersType.GetServers),
      withLatestFrom(this._store.pipe(select(fromRouter.selectRouteParam('id')))),
      switchMap(([, id]) =>
        this._serversService.getServers().pipe(
          map((servers: IServer[]) => new fromServersActions.GetServersSuccess(servers)),
          catchError(error => of(new fromServersActions.GetServersError(error)))
        )
      )
    )
  );

  // public getServer$ = createEffect(() =>
  //   // TODO: implement me
  // ));

  public addServer$ = createEffect(() =>
    this._actions$.pipe(
      ofType(fromServersActions.EServersType.AddServer),
      map((action: fromServersActions.AddServer) => action.payload),
      switchMap(action =>
        this._serversService.addServer(action).pipe(
          map((server: IServer) => new fromServersActions.AddServerSuccess(server)),
          catchError(error => of(new fromServersActions.AddServerError(error)))
        )
      )
    )
  );

  public updateServer$ = createEffect(() =>
    this._actions$.pipe(
      ofType(fromServersActions.EServersType.UpdateServer),
      withLatestFrom(this._store.pipe(select(fromRouter.selectRouteParam('id')))),
      switchMap(([action, id]: [fromServersActions.UpdateServer, string]) =>
        this._serversService.updateServer(id, action.payload).pipe(
          map(() => new fromServersActions.UpdateServerSuccess()),
          catchError((error: HttpErrorResponse) => of(new fromServersActions.UpdateServerError(error)))
        )
      )
    )
  );

  // public deleteServer$ = createEffect(() =>
  //   // TODO: implement me
  // ));
}
