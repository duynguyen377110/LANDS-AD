import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { changeCurrentTab } from 'src/app/store/store-pagination/store-pagination-action';

@Component({
  selector: 'app-common-pagination',
  templateUrl: './common-pagination.component.html',
  styleUrls: ['./common-pagination.component.scss']
})
export class CommonPaginationComponent implements OnInit, OnDestroy {

  paginationSub: Subscription = new Subscription();
  amount: number = 0;
  itemsTab: Array<any> = [];

  constructor(
    private store: Store<{pagination: any}>
  ) {}

  ngOnInit(): void {
    this.paginationSub = this.store.select('pagination').subscribe((data: any) => {
      let { itemsTab, amount } = data;
      console.log(amount)
      this.amount = amount;
      this.itemsTab = itemsTab;
    })
  }

  onChangePage(event: any) {
    this.store.dispatch(changeCurrentTab({tab: event}))
  }

  ngOnDestroy(): void {
    this.paginationSub.unsubscribe();
  }

}
