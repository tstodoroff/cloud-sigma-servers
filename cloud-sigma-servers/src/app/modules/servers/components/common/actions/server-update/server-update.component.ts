import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { select, Store } from '@ngrx/store';

import { IAppState } from 'src/app/shared/store/app.state';
import { EServerStatus, IServer, IServerPayload, states } from '../../../../models/servers.interface';

import * as fromServersActions from '../../../../store/servers.actions';
import * as fromServersSelectors from '../../../../store/servers.selectors';

@Component({
  selector: 'app-server-update',
  templateUrl: './server-update.component.html',
  styleUrls: ['./server-update.component.scss']
})
export class ServerUpdateComponent implements OnInit {
  public selectedServer$: Observable<IServer> = this._store.pipe(select(fromServersSelectors.getServerDetails));
  public successUpdateDetails$: Observable<boolean> = this._store.pipe(select(fromServersSelectors.getUpdateSuccess));

  public formGroup: FormGroup;
  public serverStates: EServerStatus[] = states;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _store: Store<IAppState>,
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this._initForm();
  }

  private _initForm(): void {
    this.selectedServer$
      .pipe(
        first(selectedServer => !!selectedServer),
        tap((selectedServer: IServer) => {
          const { mem, state, cpu, name } = selectedServer;

          this.formGroup = this._formBuilder.group({
            memory: [mem, Validators.required],
            state: [state, Validators.required],
            cpu: [cpu, Validators.required],
            name: [name, Validators.required]
          });

        })
      ).subscribe();
  }

  public updateServerDetails(): void {
    const { memory, state, cpu, name } = this.formGroup.value;
    const payload: IServerPayload = { ...this.formGroup.value, mem: memory };
    this._store.dispatch(new fromServersActions.UpdateServer(payload));

    this.successUpdateDetails$
      .pipe(
        tap(isSuccessful => {
          this._router.navigate(['../../all'], { relativeTo: this._activatedRoute });
          return isSuccessful && alert(`Success updating server item with name ${name}`);
        })
      )
      .subscribe();
  }
}
