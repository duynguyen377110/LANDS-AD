import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardProductRoutingModule } from './dashboard-product-routing.module';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { DashboardProductNewComponent } from './dashboard-product-new/dashboard-product-new.component';
import { DashboardProductEditComponent } from './dashboard-product-edit/dashboard-product-edit.component';
import { CommonsModule } from 'src/app/commons/commons.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardProductComponent,
    DashboardProductNewComponent,
    DashboardProductEditComponent
  ],
  imports: [
    CommonModule,
    DashboardProductRoutingModule,
    CommonsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardProductModule { }
