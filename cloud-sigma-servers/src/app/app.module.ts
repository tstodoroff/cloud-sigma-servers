import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { routerReducer, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IAppState } from './shared/store/app.state';
import * as fromServers from './modules/servers/store/servers.reducer';
import { ServersEffects } from './modules/servers/store/servers.effects';

const reducers: ActionReducerMap<IAppState> = {
  ['router']: routerReducer,
  [fromServers.serversFeatureKey]: fromServers.reducer
};

const effects = [ ServersEffects ];

export function getReducers(): ActionReducerMap<IAppState> {
  return reducers;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ ...getReducers() }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
    EffectsModule.forRoot(effects)
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
