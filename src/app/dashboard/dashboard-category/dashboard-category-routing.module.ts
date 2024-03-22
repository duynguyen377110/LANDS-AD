import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCategoryComponent } from './dashboard-category/dashboard-category.component';
import { DashboardCategoryNewComponent } from './dashboard-category-new/dashboard-category-new.component';
import { DashboardCategoryEditComponent } from './dashboard-category-edit/dashboard-category-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardCategoryComponent
  },
  {
    path: 'new',
    component: DashboardCategoryNewComponent
  },
  {
    path: 'edit/:id',
    component: DashboardCategoryEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardCategoryRoutingModule { }
