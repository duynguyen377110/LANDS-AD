import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
const regexPhone = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  email() {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if(!regexEmail.test(control.value)) {
        return {email: 'email', emailMessage: "E-mail không hợp lệ"};
      }

      return null;
    }
  }

  require() {
    return (control: AbstractControl): {[key: string]: any} | null => {
      let value = control.value? true :  false;
      if(!value) {
        return {require: 'require', requireMessage: "Nội dung không được trống"};
      }
      return null;
    }
  }

  password(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(!regexPassword.test(control.value)) {
        return {password: "password", passwordMessage: "Mật khẩu phải có ít nhất 6 ký tự và các ký tự đặc biệt"};
      }

      return null;
    }
  }

  phone(): ValidatorFn {
    return (constrol: AbstractControl): ValidationErrors | null => {
      if(!regexPhone.test(constrol.value)) {
        return {phone: "phone", phoneMessage: "Số điện thoại không hợp lệ"}
      }
      return null;
    }
  }
}
