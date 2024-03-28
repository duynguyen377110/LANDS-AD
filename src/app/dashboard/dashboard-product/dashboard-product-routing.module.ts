import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { DashboardProductNewComponent } from './dashboard-product-new/dashboard-product-new.component';
import { DashboardProductEditComponent } from './dashboard-product-edit/dashboard-product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardProductComponent
  },
  {
    path: 'new',
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
