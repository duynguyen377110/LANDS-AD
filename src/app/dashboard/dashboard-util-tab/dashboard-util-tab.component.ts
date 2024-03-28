import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-util-tab',
  templateUrl: './dashboard-util-tab.component.html',
  styleUrls: ['./dashboard-util-tab.component.scss']
})
export class DashboardUtilTabComponent implements OnInit, OnDestroy {

  eventSub: Subscription = new Subscription();
  currentPoint: String = '';
  title: string = '';
  buttonNewShow: boolean = true;
  dashboardUtilTabShow: boolean = true;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.eventSub = this.router.events.subscribe((event: any) => {
      this.currentPoint = event.routerEvent?.urlAfterRedirects;
      this.setInitialState();
    })
  }

  setInitialState() {
    if(this.currentPoint?.length && this.currentPoint !== '/') {
      this.dashboardUtilTabShow = true;
      let points = this.currentPoint.split('/').filter((point) => point);

      switch(points[0]) {
        case 'category':
          this.title = 'Danh mục';
          break

        case 'product':
          this.title= 'Sản phẩm';
          break
      }
      this.buttonNewShow = true;

      if(points?.length > 1) {
        this.buttonNewShow = false;
        if(points.includes('new')) {
          this.title += '/Thêm mới';
          return;
        }
        this.title += '/Cập nhật'
      }
    } else {
      this.dashboardUtilTabShow = false;
    }
  }

  onRedirectHandler(event: any) {
    switch(this.currentPoint) {
      case '/category':
        this.router.navigate(['/category/new']);
        break

      case '/product':
        this.router.navigate(['/product/new']);
        break
    }
  }

  ngOnDestroy(): void {
    this.eventSub.unsubscribe();
  }

}
