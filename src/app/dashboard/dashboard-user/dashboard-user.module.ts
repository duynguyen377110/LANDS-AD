import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardUserNewComponent } from './dashboard-user-new/dashboard-user-new.component';
import { DashboardUserEditComponent } from './dashboard-user-edit/dashboard-user-edit.component';
import { CommonsModule } from 'src/app/commons/commons.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardUserComponent,
    DashboardUserNewComponent,
    DashboardUserEditComponent
  ],
  imports: [
    CommonModule,
    DashboardUserRoutingModule,
    CommonsModule,
    ReactiveFormsModule
  ]
})
export class DashboardUserModule { }
