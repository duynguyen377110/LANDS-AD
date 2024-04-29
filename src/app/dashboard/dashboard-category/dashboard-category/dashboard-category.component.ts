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
  selector: 'app-dashboard-category',
  templateUrl: './dashboard-category.component.html',
  styleUrls: ['./dashboard-category.component.scss']
})
export class DashboardCategoryComponent implements OnInit,OnDestroy {
  urlDestroy: string = `${environment.api.url}${environment.api.category.admin.root}`;

  dataCategorySub:Subscription = new Subscription();
  paginationSub: Subscription = new Subscription();
  getCategorySub: Subscription = new Subscription();
  destroyCategorySub: Subscription = new Subscription();
  destroyCategoryThumb: Subscription = new Subscription();

  categories: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private headerRequest: HeaderRequestService,
    private httpService: HttpService,
    private store: Store<{warning: any, pagination: any}>
  ) { }

  ngOnInit(): void {
    this.dataCategorySub = this.route.data.subscribe((data: any) => {
      let { amount } = data.amount.metadata;

      this.store.dispatch(loadAmount({amount, kind: 'category'}));
      this.paginationSub = this.store.select("pagination").subscribe((data) => {
        let {  currentPage, itemsOfPage } = data;
        let start = currentPage * itemsOfPage;
        let url: string = `${environment.api.urlCommon}${environment.api.category.common.root}/${start}/${itemsOfPage}`;

        this.getCategorySub = this.httpService.get(url).subscribe((data: any) => {
          let { categories } = data.metadata;
          this.categories = categories;
        })

      })
    })
  }


  onDeleteHander(event: any) {    
    this.destroyCategorySub = this.httpService.delete(this.urlDestroy, {id: event}, this.headerRequest.getHeader()).subscribe(
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
    this.router.navigate(['/category/edit', event]);
  }

  ngOnDestroy(): void {
    this.dataCategorySub.unsubscribe();
    this.paginationSub.unsubscribe();
    this.getCategorySub.unsubscribe();


    this.destroyCategorySub.unsubscribe();
    this.destroyCategoryThumb.unsubscribe();
  }
}
