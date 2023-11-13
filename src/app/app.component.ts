import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private ngxPermissionsService: NgxPermissionsService) {
    const savedRoles = localStorage.getItem('roles');
    const InitRoles: string[] = savedRoles?.length
      ? JSON.parse(savedRoles)
      : [];
    // this.ngxPermissionsService.loadPermissions(InitRoles);
  }

  loginAsDev(pers: string[]) {
    this.ngxPermissionsService.loadPermissions(pers);
    localStorage.setItem('roles', JSON.stringify(pers));
  }

  loginAsAdm_Sup_Adm(pers: string[]) {
    this.ngxPermissionsService.loadPermissions(pers);
    localStorage.setItem('roles', JSON.stringify(pers));
  }
}
