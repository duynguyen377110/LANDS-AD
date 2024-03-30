import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardRoleComponent } from './dashboard-role/dashboard-role.component';
import { DashboardRoleNewComponent } from './dashboard-role-new/dashboard-role-new.component';
import { DashboardRoleEditComponent } from './dashboard-role-edit/dashboard-role-edit.component';
import { RoleLoadAllService } from 'src/app/services/role/role-load-all.service';

const routes: Routes = [
  {
    path: '',
    resolve: {roles: RoleLoadAllService},
    component: DashboardRoleComponent
  },
  {
    path: 'new',
    component: DashboardRoleNewComponent
  },
  {
    path: 'edit/:id',
    component: DashboardRoleEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoleRoutingModule { }
