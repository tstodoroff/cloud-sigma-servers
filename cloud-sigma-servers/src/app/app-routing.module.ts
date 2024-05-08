import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/servers/all', pathMatch: 'full' },
  {
    path: 'servers',
    // canActivate: [CloudSigmaGuard], // TODO
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/servers/servers.module').then(m => m.ServersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
