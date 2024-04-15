import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.scss']
})
export class DashboardMainComponent implements OnInit, OnDestroy {

  dataSub: Subscription = new Subscription();
  amountCategory: number = 0;
  amountProduct: number = 0;
  amountUser: number = 0;
  amountRole: number = 0;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dataSub = this.route.data.subscribe((data: any) => {
      let { amount: amountCategory } = data.category.metadata;
      let { amount: amountProduct} = data.product.metadata;
      let { amount: amountUser } = data.user.metadata;
      let { amount: amountRole } = data.role.metadata;

      this.amountCategory = amountCategory;
      this.amountProduct = amountProduct;
      this.amountUser = amountUser;
      this.amountRole = amountRole;
    })
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }
}
