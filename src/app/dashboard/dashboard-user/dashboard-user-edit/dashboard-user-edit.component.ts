import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardUserNewComponent } from '../dashboard-user-new/dashboard-user-new.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationsService } from 'src/app/services/validations/validations.service';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-dashboard-user-edit',
  templateUrl: '../dashboard-user-new/dashboard-user-new.component.html',
  styleUrls: ['./dashboard-user-edit.component.scss', '../dashboard-user-new/dashboard-user-new.component.scss']
})
export class DashboardUserEditComponent extends DashboardUserNewComponent implements OnInit, OnDestroy {
  user: any = {};
  override fieldPasswordOptional: boolean = false;
  override titleButton: string = 'Cập nhật thông tin';

  constructor(
    fb: FormBuilder,
    router: Router,
    route: ActivatedRoute,
    validationService: ValidationsService,
    httpService: HttpService
  ) {
    super(fb, router, route, validationService, httpService);
  }

  override ngOnInit(): void {
    this.dataSub = this.route.data.subscribe((data: any) => {
      let { user } = data.user.metadata;
      let { roles } = data.roles.metadata;
      this.setDataInformation(user, roles);
      this.createForm();
    })
  }

  setDataInformation(user: any, roles: Array<any>) {
    this.roles = roles.map((category: any) => {
      return {
        id: category._id,
        title: category.title
      }
    })

    this.fullName.setValue(user.fullName);
    this.email.setValue(user.email);
    this.phone.setValue(user.phone);
    this.address.setValue(user.address);
    this.role.setValue(user.role._id);
    this.user = user;
  }

  override createForm(): void {
    this.userForm = this.fb.group({
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      address: this.address,
      role: this.role
    })
  }

  override async onSubmitHandler(event: any) {
    event.preventDefault();

    this.submit = true;
    if(this.userForm.status !== "INVALID") {
      this.submit = false;

      let payload = {
        id: this.user._id,
        ...this.userForm.value
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
    this.dataSub.unsubscribe();
  }
}
