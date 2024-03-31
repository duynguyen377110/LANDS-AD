import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-common-textarea',
  templateUrl: './common-textarea.component.html',
  styleUrls: ['./common-textarea.component.scss']
})
export class CommonTextareaComponent implements OnChanges, OnInit {

  @Input("formControl") formControl: FormControl | any;
  @Input("label") label: string = 'Default';
  @Input("id") id!: string;
  @Input("type") type: string | any;
  @Input("submit") submit: boolean = false;
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
