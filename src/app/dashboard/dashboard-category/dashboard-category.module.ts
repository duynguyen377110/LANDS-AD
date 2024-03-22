import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardCategoryRoutingModule } from './dashboard-category-routing.module';
import { DashboardCategoryNewComponent } from './dashboard-category-new/dashboard-category-new.component';
import { DashboardCategoryEditComponent } from './dashboard-category-edit/dashboard-category-edit.component';
import { DashboardCategoryComponent } from './dashboard-category/dashboard-category.component';


@NgModule({
  declarations: [
    DashboardCategoryNewComponent,
    DashboardCategoryEditComponent,
    DashboardCategoryComponent
  ],
  imports: [
    CommonModule,
    DashboardCategoryRoutingModule
  ]
})
export class DashboardCategoryModule { }
