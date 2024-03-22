import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonsModule } from '../commons/commons.module';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardMainComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CommonsModule
  ]
})
export class DashboardModule { }
