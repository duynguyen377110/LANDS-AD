import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';
import { ValidationsService } from 'src/app/services/validations/validations.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-user-new',
  templateUrl: './dashboard-user-new.component.html',
  styleUrls: ['./dashboard-user-new.component.scss']
})
export class DashboardUserNewComponent implements OnInit, OnDestroy {
  url: string = `${environment.api.url}${environment.api.user.admin.root}`;
  roles: Array<any> = [];
  titleButton: string = 'Tạo mới tài khoản';
  submit: boolean = false;

  userForm: FormGroup = new FormGroup({});
  fullName: FormControl = new FormControl('', [this.validationService.require()]);
  email: FormControl = new FormControl('', [this.validationService.require(), this.validationService.email()]);
  password: FormControl = new FormControl('', [this.validationService.require(), this.validationService.password()]);
  phone: FormControl = new FormControl('', [this.validationService.require(), this.validationService.phone()]);
  address: FormControl = new FormControl('', [this.validationService.require()]);
  role: FormControl = new FormControl('', [this.validationService.require()]);

  dataRolesSub: Subscription = new Subscription();

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public validationService: ValidationsService,
    public httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.dataRolesSub = this.route.data.subscribe((data: any) => {
      let { roles } = data.roles;
      this.roles = roles;

      this.roles = roles.map((category: any) => {
        return {
          id: category._id,
          title: category.title
        }
      })

      this.createForm();
    })
  }

  createForm(): void {
    this.userForm = this.fb.group({
      fullName: this.fullName,
      email: this.email,
      password: this.password,
      phone: this.phone,
      address: this.address,
      role: this.role
    })
  }

  async onSubmitHandler(event: any) {
    event.preventDefault();

    this.submit = true;
    if(this.userForm.status !== "INVALID") {
      this.submit = false;

      this.httpService.post(this.url, this.userForm.value).subscribe((res) => {
        let { status } = res;
        if(status) {
          this.router.navigate(['..'], {relativeTo: this.route});
        }
      })
      
    }
  }

  ngOnDestroy(): void {
    this.dataRolesSub.unsubscribe();
  }

}
