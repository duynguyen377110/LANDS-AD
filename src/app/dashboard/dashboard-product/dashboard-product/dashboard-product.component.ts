import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { HeaderRequestService } from 'src/app/services/header/header-request.service';
import { HttpService } from 'src/app/services/http/http.service';
import { loadAmount } from 'src/app/store/store-pagination/store-pagination-action';
import { openWarning } from 'src/app/store/store-warning/store-warning-action';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.scss']
})
export class DashboardProductComponent implements OnInit, OnDestroy {
  urlDestroy: string = `${environment.api.url}${environment.api.product.admin.root}`;

  products: Array<any> = [];
  loadProductDataSub: Subscription = new Subscription();
  destroyProductSub: Subscription = new Subscription();
  destroyProductThumb: Subscription = new Subscription();
  getProductSub: Subscription = new Subscription();
  paginationSub: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private headerRequest: HeaderRequestService,
    private httpService: HttpService,
    private store: Store<{warning: any, pagination: any}>
  ) { }

  ngOnInit(): void {
    this.loadProductDataSub = this.route.data.subscribe((data: any) => {
      let { amount } = data.amount.metadata;

      this.store.dispatch(loadAmount({amount, kind: 'product'}));
      this.paginationSub = this.store.select("pagination").subscribe((data) => {
        let {  currentPage, itemsOfPage } = data;
        let start = currentPage * itemsOfPage;
        let url: string = `${environment.api.urlCommon}${environment.api.product.common.root}/${start}/${itemsOfPage}`;

        this.getProductSub = this.httpService.get(url).subscribe((data: any) => {
          let { products } = data.metadata;
          this.products = products;
        })

      })
    })
  }

  onDeleteHander(event: any) {
    this.destroyProductSub = this.httpService.delete(this.urlDestroy, {id: event}, this.headerRequest.getHeader()).subscribe(
      (res) => {
        let { status } = res;
        if(status) {
          window.location.reload();
        }
      },
      (error: any) => {
        this.store.dispatch(openWarning({message: error.message}));
      })
  }

  onUpdateHandler(event: any) {
    this.router.navigate(['product/edit', event]);
  }

  ngOnDestroy(): void {
    this.loadProductDataSub.unsubscribe();
    this.getProductSub.unsubscribe();
    this.paginationSub.unsubscribe();

    this.destroyProductSub.unsubscribe();
    this.destroyProductThumb.unsubscribe();
  }

}
