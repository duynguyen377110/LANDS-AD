import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardRoleNewComponent } from '../dashboard-role-new/dashboard-role-new.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationsService } from 'src/app/services/validations/validations.service';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-dashboard-role-edit',
  templateUrl: '../dashboard-role-new/dashboard-role-new.component.html',
  styleUrls: ['./dashboard-role-edit.component.scss', '../dashboard-role-new/dashboard-role-new.component.scss']
})
export class DashboardRoleEditComponent extends DashboardRoleNewComponent implements OnInit, OnDestroy {

  constructor(
    fb: FormBuilder,
    router: Router,
    route: ActivatedRoute,
    serviceValidation: ValidationsService,
    httpService: HttpService
  ) {
    super(fb, router, route, serviceValidation, httpService);
  }

}
