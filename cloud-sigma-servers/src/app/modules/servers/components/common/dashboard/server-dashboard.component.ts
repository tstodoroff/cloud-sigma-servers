import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSelectionListChange } from '@angular/material/list';

import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';

import { IAppState } from 'src/app/shared/store/app.state';
import { IServer } from '../../../models/servers.interface';

import * as fromServersActions from '../../../store/servers.actions';
import * as fromServersSelectors from '../../../store/servers.selectors';

@Component({
  selector: 'app-server-dashboard',
  templateUrl: './server-dashboard.component.html',
  styleUrls: ['./server-dashboard.component.scss']
})
export class ServerDashboardComponent implements OnInit {
  public servers$: Observable<IServer[]> = this._store.pipe(select(fromServersSelectors.getServers));
  public isLoading$: Observable<boolean> = this._store.pipe(select(fromServersSelectors.getIsLoading));

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store<IAppState>,
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this._store.dispatch(new fromServersActions.GetServers());
  }

  public viewServerDetails(event: MatSelectionListChange): void {
    const { uuid } = event.option.value;

    this._store.dispatch(new fromServersActions.SetSelectedServer(event.option.value));
    this._router.navigate([`../view/${uuid}`], { relativeTo: this._activatedRoute });
  }

}
