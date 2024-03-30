import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationsService } from 'src/app/services/validations/validations.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit, OnDestroy{
  
  formSignin: FormGroup = new FormGroup({});
  email: FormControl = new FormControl('', [this.serviceValidation.require(), this.serviceValidation.email()]);
  password: FormControl = new FormControl('', [this.serviceValidation.require(), this.serviceValidation.password()]);

  submit: boolean = false;
  titleButton: string = 'Đăng nhập';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private serviceValidation: ValidationsService,
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formSignin = this.fb.group({
      email: this.email,
      password: this.password
    })
  }

  onSubmitHandler = (event: any) => {
    event.preventDefault();
    
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

}
