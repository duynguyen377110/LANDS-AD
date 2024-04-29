import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { DashboardProductNewComponent } from './dashboard-product-new/dashboard-product-new.component';
import { DashboardProductEditComponent } from './dashboard-product-edit/dashboard-product-edit.component';
import { CategoryLoadAllService } from 'src/app/services/category/category-load-all.service';
import { ProductLoadSingleService } from 'src/app/services/product/product-load-single.service';
import { ProductAmountService } from 'src/app/services/product/product-amount.service';

const routes: Routes = [
  {
    path: '',
    resolve: {
      amount: ProductAmountService
    },
    component: DashboardProductComponent
  },
  {
    path: 'new',
    resolve: {categories: CategoryLoadAllService},
    component: DashboardProductNewComponent
  },
  {
    path: 'edit/:id',
    resolve: {
      categories: CategoryLoadAllService,
      product: ProductLoadSingleService
    },
    component: DashboardProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardProductRoutingModule { }
