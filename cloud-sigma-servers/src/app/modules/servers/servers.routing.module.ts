import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ServerDashboardComponent } from './components/common/dashboard/server-dashboard.component';
import { ServerUpdateComponent } from './components/common/actions/server-update/server-update.component';
import { ServerViewComponent } from './components/common/actions/server-view/server-view.component';

const routes: Routes = [
  {
    path: '',
    // canActivate: [ServerGuard], // TODO
    children: [
      { path: 'all', component: ServerDashboardComponent },
      { path: 'view/:id', component: ServerViewComponent },
      { path: 'update/:id', component: ServerUpdateComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServersRoutingModule {}
