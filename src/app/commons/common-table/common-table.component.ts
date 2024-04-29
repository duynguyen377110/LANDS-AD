import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit, OnDestroy {

  @Input('type') type: string = '';
  @Input('list') list: Array<any> = [];

  @Output('emitDelete') emitDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output('emitUpdate') emitUpdate: EventEmitter<any> = new EventEmitter<any>();

  columnsRole: Array<string> = ['STT', 'Phân quyền', 'Mã phân quyền', 'Người dùng', 'Chức năng'];
  columnsUser: Array<string> = ['STT', 'Họ và tên', 'Số điện thoại', 'Phân quyền', 'Chức năng'];
  columnsCategory: Array<string> = ['STT', 'Tiêu đề', 'Ảnh', "Sản phẩm", 'Chức năng'];
  columnsProduct: Array<string> = ['STT', 'Chủ sở hữu', 'Ảnh', 'Diện tích', 'Giá', 'Chức năng'];

  currentPage: number = 0;
  itemsOfPage: number = 0;
  paginationSub: Subscription = new Subscription();

  constructor(
    private store: Store<{pagination: any}>
  ) {}

  ngOnInit(): void {
    this.paginationSub = this.store.select('pagination').subscribe((data: any) => {
      let { currentPage, itemsOfPage } = data;
      this.currentPage = currentPage;
      this.itemsOfPage = itemsOfPage;
    })
  }

  onDeleteHandler(event: any) {
    this.emitDelete.emit(event);
  }

  onEditHandler(event: any) {
    this.emitUpdate.emit(event);
  }

  ngOnDestroy(): void {
    this.paginationSub.unsubscribe()
  }
}
