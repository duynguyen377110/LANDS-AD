import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-category',
  templateUrl: './dashboard-category.component.html',
  styleUrls: ['./dashboard-category.component.scss']
})
export class DashboardCategoryComponent implements OnInit,OnDestroy {

  amountDataSub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.amountDataSub = this.route.data.subscribe((data) => {
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    this.amountDataSub.unsubscribe();
  }
}
