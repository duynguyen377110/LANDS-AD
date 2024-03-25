import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-bland',
  templateUrl: './common-bland.component.html',
  styleUrls: ['./common-bland.component.scss']
})
export class CommonBlandComponent {

  @Input('desc') desc: string = '';
}
