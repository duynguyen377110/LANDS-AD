import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCategoryComponent } from './dashboard-category/dashboard-category.component';
import { DashboardCategoryNewComponent } from './dashboard-category-new/dashboard-category-new.component';
import { DashboardCategoryEditComponent } from './dashboard-category-edit/dashboard-category-edit.component';
import { CategoryAmountService } from 'src/app/services/category/category-amount.service';
import { CategoryLoadSingleService } from 'src/app/services/category/category-load-single.service';


const routes: Routes = [
  {
    path: '',
    resolve: {amount: CategoryAmountService},
    component: DashboardCategoryComponent
  },
  {
    path: 'new',
    component: DashboardCategoryNewComponent
  },
  {
    path: 'edit/:id',
    resolve: {category: CategoryLoadSingleService},
    component: DashboardCategoryEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardCategoryRoutingModule { }
