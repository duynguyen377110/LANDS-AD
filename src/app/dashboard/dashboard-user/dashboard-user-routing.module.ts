import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardUserNewComponent } from './dashboard-user-new/dashboard-user-new.component';
import { DashboardUserEditComponent } from './dashboard-user-edit/dashboard-user-edit.component';
import { RoleLoadAllService } from 'src/app/services/role/role-load-all.service';
import { UserLoadAllService } from 'src/app/services/user/user-load-all.service';

const routes: Routes = [
  {
    path: '',
    resolve: {users: UserLoadAllService},
    component: DashboardUserComponent
  },
  {
    path: 'new',
    resolve: {roles: RoleLoadAllService},
    component: DashboardUserNewComponent
  },
  {
    path: 'edit/:id',
    component: DashboardUserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardUserRoutingModule { }
