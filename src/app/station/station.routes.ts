import { Routes } from '@angular/router';
import { StationsComponent } from './pages/stations/stations.component';

export const stationRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/stations/stations.component').then(
        (opsComp) => opsComp.StationsComponent
      ),
  },
];
