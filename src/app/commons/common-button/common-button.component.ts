import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss']
})
export class CommonButtonComponent {

  @Input('type') type:String = 'button';
}
