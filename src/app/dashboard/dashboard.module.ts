import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonsModule } from '../commons/commons.module';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { DashboardUtilTabComponent } from './dashboard-util-tab/dashboard-util-tab.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMainComponent,
    DashboardUtilTabComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonsModule
  ]
})
export class DashboardModule { }
