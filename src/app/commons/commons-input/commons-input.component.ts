import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-commons-input',
  templateUrl: './commons-input.component.html',
  styleUrls: ['./commons-input.component.scss']
})
export class CommonsInputComponent {

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
