import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';
import { ValidationsService } from 'src/app/services/validations/validations.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-role-new',
  templateUrl: './dashboard-role-new.component.html',
  styleUrls: ['./dashboard-role-new.component.scss']
})
export class DashboardRoleNewComponent implements OnInit, OnDestroy {
  formRole: FormGroup = new FormGroup({});
  title: FormControl = new FormControl('', [this.serviceValidation.require()]);
  slug: FormControl = new FormControl('', [this.serviceValidation.require()]);


  url: string = `${environment.api.url}${environment.api.role.admin.root}`;
  submit: boolean = false;
  titleButton: string = 'Tạo phân quyền';
  dataSub: Subscription = new Subscription();


  constructor(
    public fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public serviceValidation: ValidationsService,
    public httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formRole = this.fb.group({
      title: this.title,
      slug: this.slug
    })
  }

  async onSubmitHandler(event: any) {
    event.preventDefault();

    this.submit = true;
    if(this.formRole.status !== "INVALID") {
      this.submit = false;

      this.httpService.post(this.url, this.formRole.value).subscribe((res) => {
        let { status } = res;
        if(status) {
          this.router.navigate(['..'], {relativeTo: this.route});
        }
      })
      
    }
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
