import { NgxPermissionsService } from 'ngx-permissions';

import { LoadPermissionsService } from '../services/load-permissions.service';

// Can be used here because they were provided via deps:[]
export const permissionsFactory = (
  loadPermissionsService: LoadPermissionsService,
  ngxPermissionsService: NgxPermissionsService
) => {
  return () =>
    loadPermissionsService.fetchPermissions(['ADMIN']).subscribe({
      next: (pers) => {
        ngxPermissionsService.loadPermissions(pers);
      },
    });
};
