import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';

import { IAppState } from 'src/app/shared/store/app.state';
import { IServer } from '../../../../models/servers.interface';

import * as fromServersSelectors from '../../../../store/servers.selectors';

@Component({
  selector: 'app-server-view',
  templateUrl: './server-view.component.html',
  styleUrls: ['./server-view.component.scss']
})
export class ServerViewComponent {
  public selectedServer$: Observable<IServer> = this._store.pipe(select(fromServersSelectors.getServerDetails));

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _store: Store<IAppState>,
    private _router: Router
  ) { }

  public openUpdateServerDetails(selectedServer: IServer): void {
    this._router.navigate([`../../update/${selectedServer.uuid}`], { relativeTo: this._activatedRoute });
  }
}
