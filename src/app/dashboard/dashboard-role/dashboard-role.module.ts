import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoleRoutingModule } from './dashboard-role-routing.module';
import { DashboardRoleComponent } from './dashboard-role/dashboard-role.component';
import { DashboardRoleNewComponent } from './dashboard-role-new/dashboard-role-new.component';
import { DashboardRoleEditComponent } from './dashboard-role-edit/dashboard-role-edit.component';


@NgModule({
  declarations: [
    DashboardRoleComponent,
    DashboardRoleNewComponent,
    DashboardRoleEditComponent
  ],
  imports: [
    CommonModule,
    DashboardRoleRoutingModule
  ]
})
export class DashboardRoleModule { }
