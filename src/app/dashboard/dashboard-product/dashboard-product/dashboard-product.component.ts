import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { HeaderRequestService } from 'src/app/services/header/header-request.service';
import { HttpService } from 'src/app/services/http/http.service';
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
  loadDataSub: Subscription = new Subscription();
  destroyProductSub: Subscription = new Subscription();
  destroyProductThumb: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private headerRequest: HeaderRequestService,
    private httpService: HttpService,
    private store: Store<{warning: any}>
  ) { }

  ngOnInit(): void {
    this.loadDataSub = this.route.data.subscribe((data: any) => {
      let { products } = data.products.metadata;
      this.products = products;
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
    this.loadDataSub.unsubscribe();
    this.destroyProductSub.unsubscribe();
    this.destroyProductThumb.unsubscribe();
  }

}
