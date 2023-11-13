import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPermissionsModule } from 'ngx-permissions';
import { Permissions } from '../../../app.model';

@Component({
  selector: 'app-operators',
  standalone: true,
  imports: [CommonModule, NgxPermissionsModule],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.scss',
})
export class OperatorsComponent {
  Permissions = Permissions;
}
