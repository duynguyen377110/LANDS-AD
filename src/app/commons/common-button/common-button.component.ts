import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-common-button',
  templateUrl: './common-button.component.html',
  styleUrls: ['./common-button.component.scss']
})
export class CommonButtonComponent {

  @Input('title') title: string = '';
  @Input('type') type: string = 'button';
  @Input('kind') kind: string = 'default';
  @Input('size') size: string = 'default';
  @Input('id') id: any = '';

  @Output('emitClick') emitClick: EventEmitter<any> = new EventEmitter<any>();


  onClickHandler(event: any) {
    this.emitClick.emit(this.id);
  }
  
}
