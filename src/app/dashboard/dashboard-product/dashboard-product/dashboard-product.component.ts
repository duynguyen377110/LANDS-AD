import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.scss']
})
export class DashboardProductComponent implements OnInit, OnDestroy {
  urlDestroy: string = `${environment.api.url}${environment.api.product.admin.root}`;

  products: Array<any> = [];
  loadDataSub: Subscription = new Subscription();
  destroyProductSub: Subscription = new Subscription();
  destroyProductThumb: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.loadDataSub = this.route.data.subscribe((data: any) => {
      let { products } = data.products.metadata;
      this.products = products;
    })
  }

  onDeleteHander(event: any) {
    this.destroyProductSub = this.httpService.delete(this.urlDestroy, {id: event}).subscribe((res) => {
      let { status } = res;
      if(status) {
        window.location.reload();
      }
    })
  }

  onUpdateHandler(event: any) {
    this.router.navigate(['product/edit', event]);
  }

  ngOnDestroy(): void {
    this.loadDataSub.unsubscribe();
    this.destroyProductSub.unsubscribe();
    this.destroyProductThumb.unsubscribe();
  }

}
