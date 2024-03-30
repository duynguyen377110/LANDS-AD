import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: DashboardMainComponent
      },
      {
        path: 'role',
        loadChildren: () => import("./dashboard-role/dashboard-role.module").then((m) => m.DashboardRoleModule),
      },
      {
        path: 'user',
        loadChildren: () => import("./dashboard-user/dashboard-user.module").then((m) => m.DashboardUserModule),
      },
      {
        path: 'category',
        loadChildren: () => import("./dashboard-category/dashboard-category.module").then((m) => m.DashboardCategoryModule)
      },
      {
        path: 'product',
        loadChildren: () => import("./dashboard-product/dashboard-product.module").then((m) => m.DashboardProductModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
