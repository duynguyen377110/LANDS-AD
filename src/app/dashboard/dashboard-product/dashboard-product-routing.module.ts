import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { DashboardProductNewComponent } from './dashboard-product-new/dashboard-product-new.component';
import { DashboardProductEditComponent } from './dashboard-product-edit/dashboard-product-edit.component';
import { CategoryLoadAllService } from 'src/app/services/category/category-load-all.service';
import { ProductLoadAllService } from 'src/app/services/product/product-load-all.service';

const routes: Routes = [
  {
    path: '',
    resolve: {products: ProductLoadAllService},
    component: DashboardProductComponent
  },
  {
    path: 'new',
    resolve: {categories: CategoryLoadAllService},
    component: DashboardProductNewComponent
  },
  {
    path: 'edit/:id',
    component: DashboardProductEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardProductRoutingModule { }
