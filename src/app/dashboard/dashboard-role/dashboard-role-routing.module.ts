import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoleComponent } from './dashboard-role/dashboard-role.component';
import { DashboardRoleNewComponent } from './dashboard-role-new/dashboard-role-new.component';
import { DashboardRoleEditComponent } from './dashboard-role-edit/dashboard-role-edit.component';
import { RoleLoadSingleService } from 'src/app/services/role/role-load-single.service';
import { RoleAmountService } from 'src/app/services/role/role-amount.service';

const routes: Routes = [
  {
    path: '',
    resolve: {
      amount: RoleAmountService,
    },
    component: DashboardRoleComponent
  },
  {
    path: 'new',
    component: DashboardRoleNewComponent
  },
  {
    path: 'edit/:id',
    resolve: {role: RoleLoadSingleService},
    component: DashboardRoleEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoleRoutingModule { }
