import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent {

  @Input('type') type: string = '';
  @Input('list') list: Array<any> = [];
  columnsCategory: Array<string> = ['STT', 'Tiêu đề', 'Ảnh', 'Chức năng'];

  onDeleteHandler(event: any) {
    console.log(this.type);
    console.log(event);
  }

  onEditHandler(event: any) {
    console.log(this.type);
    console.log(event);
  }
}
