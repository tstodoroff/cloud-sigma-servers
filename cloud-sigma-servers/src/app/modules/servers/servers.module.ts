import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ServersRoutingModule } from './servers.routing.module';

import * as fromServersReducer from './store/servers.reducer';
import { ServersEffects } from './store/servers.effects';

import { ServerAddComponent } from './components/common/actions/server-add/server-add.component';
import { ServerDashboardComponent } from './components/common/dashboard/server-dashboard.component';
import { ServerDeleteComponent } from './components/common/actions/server-delete/server-delete.component';
import { ServersComponent } from './components/common/servers/servers.component';
import { ServerUpdateComponent } from './components/common/actions/server-update/server-update.component';
import { ServerViewComponent } from './components/common/actions/server-view/server-view.component';

const serversComponents = [
  ServerAddComponent,
  ServerDeleteComponent,
  ServerDashboardComponent,
  ServersComponent,
  ServerUpdateComponent,
  ServerViewComponent
];

@NgModule({
  declarations: serversComponents,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    ReactiveFormsModule,
    ServersRoutingModule,
    StoreModule.forFeature(fromServersReducer.serversFeatureKey, fromServersReducer.reducer),
    EffectsModule.forFeature([ServersEffects])
  ],
  // providers: [ServersGuard], // TODO
  exports: [serversComponents],
  entryComponents: serversComponents
})
export class ServersModule {}


