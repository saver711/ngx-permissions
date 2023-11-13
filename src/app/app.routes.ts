import { Routes } from '@angular/router';
import { ngxPermissionsGuard } from 'ngx-permissions';
import { Permissions } from './app.model';
export const appRoutes: Routes = [
  {
    path: 'operators',
    loadChildren: () =>
      import('./operator/operator.routes').then(
        (opRoutes) => opRoutes.operatorRoutes
      ),
  },
  {
    path: 'stations',
    loadChildren: () =>
      import('./station/station.routes').then(
        (opRoutes) => opRoutes.stationRoutes
      ),
    canActivate: [ngxPermissionsGuard],
    data: {
      permissions: {
        only: [Permissions.ADMIN, Permissions.SUPER_ADMIN],
      },
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
