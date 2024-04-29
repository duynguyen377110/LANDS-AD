import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardUserNewComponent } from './dashboard-user-new/dashboard-user-new.component';
import { DashboardUserEditComponent } from './dashboard-user-edit/dashboard-user-edit.component';
import { RoleLoadAllService } from 'src/app/services/role/role-load-all.service';
import { UserLoadSingleService } from 'src/app/services/user/user-load-single.service';
import { UserAmountService } from 'src/app/services/user/user-amount.service';

const routes: Routes = [
  {
    path: '',
    resolve: {
      amount: UserAmountService,
    },
    component: DashboardUserComponent
  },
  {
    path: 'new',
    resolve: {roles: RoleLoadAllService},
    component: DashboardUserNewComponent
  },
  {
    path: 'edit/:id',
    resolve: {
      user: UserLoadSingleService,
      roles: RoleLoadAllService
    },
    component: DashboardUserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardUserRoutingModule { }
