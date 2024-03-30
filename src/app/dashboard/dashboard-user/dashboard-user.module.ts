import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardUserNewComponent } from './dashboard-user-new/dashboard-user-new.component';
import { DashboardUserEditComponent } from './dashboard-user-edit/dashboard-user-edit.component';


@NgModule({
  declarations: [
    DashboardUserComponent,
    DashboardUserNewComponent,
    DashboardUserEditComponent
  ],
  imports: [
    CommonModule,
    DashboardUserRoutingModule
  ]
})
export class DashboardUserModule { }
