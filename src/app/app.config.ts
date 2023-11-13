import {
  APP_INITIALIZER,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { appRoutes } from './app.routes';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { LoadPermissionsService } from './core/services/load-permissions.service';
import { permissionsFactory } from './core/utils/permissions-factory';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    importProvidersFrom(
      HttpClientModule,
      BrowserModule,
      NgxPermissionsModule.forRoot()
    ),
    {
      provide: APP_INITIALIZER,
      useFactory: permissionsFactory,
      deps: [LoadPermissionsService, NgxPermissionsService],
      multi: true,
    },
  ],
};
