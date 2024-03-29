import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent {

  @Input('type') type: string = '';
  @Input('list') list: Array<any> = [];

  @Output('emitDelete') emitDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output('emitUpdate') emitUpdate: EventEmitter<any> = new EventEmitter<any>();

  columnsCategory: Array<string> = ['STT', 'Tiêu đề', 'Ảnh', 'Chức năng'];
  columnsProduct: Array<string> = ['STT', 'Chủ sở hữu', 'Ảnh', 'Diện tích', 'Giá', 'Chức năng'];

  onDeleteHandler(event: any) {
    this.emitDelete.emit(event);
  }

  onEditHandler(event: any) {
    this.emitUpdate.emit(event);
  }
}
