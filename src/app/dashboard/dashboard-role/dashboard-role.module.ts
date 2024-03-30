import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoleRoutingModule } from './dashboard-role-routing.module';
import { DashboardRoleComponent } from './dashboard-role/dashboard-role.component';
import { DashboardRoleNewComponent } from './dashboard-role-new/dashboard-role-new.component';
import { DashboardRoleEditComponent } from './dashboard-role-edit/dashboard-role-edit.component';
import { CommonsModule } from 'src/app/commons/commons.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardRoleComponent,
    DashboardRoleNewComponent,
    DashboardRoleEditComponent
  ],
  imports: [
    CommonModule,
    DashboardRoleRoutingModule,
    CommonsModule,
    ReactiveFormsModule
  ]
})
export class DashboardRoleModule { }
