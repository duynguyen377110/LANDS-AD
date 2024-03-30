import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { CommonsModule } from '../commons/commons.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    AuthLoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    CommonsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
