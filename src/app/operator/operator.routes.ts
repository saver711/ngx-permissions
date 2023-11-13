import { Routes } from '@angular/router';
import { OperatorsComponent } from './pages/operators/operators.component';

export const operatorRoutes: Routes = [
  {
    path: '',
    component: OperatorsComponent,
    // loadComponent: () =>
    //   import('./pages/operators/operators.component').then(
    //     (opsComp) => opsComp.OperatorsComponent
    //   ),
  },
];
