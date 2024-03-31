import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardRoleNewComponent } from '../dashboard-role-new/dashboard-role-new.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationsService } from 'src/app/services/validations/validations.service';
import { HttpService } from 'src/app/services/http/http.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-role-edit',
  templateUrl: '../dashboard-role-new/dashboard-role-new.component.html',
  styleUrls: ['./dashboard-role-edit.component.scss', '../dashboard-role-new/dashboard-role-new.component.scss']
})
export class DashboardRoleEditComponent extends DashboardRoleNewComponent implements OnInit, OnDestroy {

  role: any = {};
  override titleButton: string = 'Cập nhật phân quyền';

  dataRoleSub: Subscription = new Subscription();

  constructor(
    fb: FormBuilder,
    router: Router,
    route: ActivatedRoute,
    serviceValidation: ValidationsService,
    httpService: HttpService
  ) {
    super(fb, router, route, serviceValidation, httpService);
  }

  override ngOnInit(): void {
    this.dataRoleSub = this.route.data.subscribe((data: any) => {
      let { role } = data.role;
      this.role = role;
      this.initSetterDataForm();
      this.createForm();
    })
  }

  initSetterDataForm() {
    console.log(this.role);
    this.title.setValue(this.role.title);
  }

  override async onSubmitHandler(event: any) {
    event.preventDefault();

    this.submit = true;
    if(this.formRole.status !== "INVALID") {
      this.submit = false;
      let payload = {
        id: this.role._id,
        title: this.formRole.value.title,
      }

      this.httpService.patch(this.url, payload).subscribe((res) => {
        let { status } = res;
        if(status) {
          this.router.navigate(['../..'], {relativeTo: this.route});
        }
      })
      
    }
  }

  override ngOnDestroy(): void {
    this.dataRoleSub.unsubscribe();
  }

}
