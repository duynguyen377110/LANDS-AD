import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';
import { ValidationsService } from 'src/app/services/validations/validations.service';
import { environment } from 'src/environments/environment';

import { authLogin } from "../../store/store-auth/store-auth-action";
import { openWarning } from 'src/app/store/store-warning/store-warning-action';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit, OnDestroy{
  
  url: string = `${environment.api.url}${environment.api.access.signin}`;

  signinForm: FormGroup = new FormGroup({});
  email: FormControl = new FormControl('', [this.serviceValidation.require(), this.serviceValidation.email()]);
  password: FormControl = new FormControl('', [this.serviceValidation.require(), this.serviceValidation.password()]);

  submit: boolean = false;
  titleButton: string = 'Đăng nhập';
  signinSub: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private serviceValidation: ValidationsService,
    private httpService: HttpService,
    private store: Store<{auth: any}>
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.signinForm = this.fb.group({
      email: this.email,
      password: this.password
    })
  }

  onSubmitHandler = (event: any) => {
    event.preventDefault();

    if(this.signinForm.status !== 'INVALID') {
      this.signinSub = this.httpService.post(this.url, this.signinForm.value).subscribe(
        (res: any) => {
          let { status, metadata }: any = res;
          if(status) {
            this.store.dispatch(authLogin({metadata}));
            this.router.navigate(['..'], {relativeTo: this.route});
          }
        },
        (error: any) => {
          console.log(error)
          this.store.dispatch(openWarning({message: error.message}));
        }
      )
    }
  }

  ngOnDestroy(): void {
    this.signinSub.unsubscribe();
  }

}
