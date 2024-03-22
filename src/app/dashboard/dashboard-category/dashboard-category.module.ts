import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { DashboardCategoryRoutingModule } from './dashboard-category-routing.module';
import { DashboardCategoryNewComponent } from './dashboard-category-new/dashboard-category-new.component';
import { DashboardCategoryEditComponent } from './dashboard-category-edit/dashboard-category-edit.component';
import { DashboardCategoryComponent } from './dashboard-category/dashboard-category.component';
import { CommonsModule } from 'src/app/commons/commons.module';


@NgModule({
  declarations: [
    DashboardCategoryNewComponent,
    DashboardCategoryEditComponent,
    DashboardCategoryComponent
  ],
  imports: [
    CommonModule,
    DashboardCategoryRoutingModule,
    CommonsModule,
    ReactiveFormsModule
  ]
})
export class DashboardCategoryModule { }
