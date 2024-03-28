import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-common-select',
  templateUrl: './common-select.component.html',
  styleUrls: ['./common-select.component.scss']
})
export class CommonSelectComponent implements OnInit {

  @Input('datas') datas: Array<any> = [];
  @Input('defaultOpt') defaultOpt: string = '';
  @Input('formControl') formControl: FormControl = new FormControl('', []);
  @Input('label') label: string = '';
  @Input('id') id: string = '';
  @Input('submit') submit: boolean = false;
  error: any = null;

  constructor() { }

  ngOnChanges(): void {
    if(this.submit) {
      this.renderMessage()
    }
  }

  ngOnInit(): void { }

  renderMessage(): void {
    let errors = this.formControl.errors;
    if(errors) {
      let key = Object.keys(errors)[0];

      this.error = {
        error: errors[key],
        message: errors[`${key}Message`]
      };

    } else {
      this.error = null;
    }
  }

  onBlurHandler(): void {
    this.renderMessage()
  }

}
