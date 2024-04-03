import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-category',
  templateUrl: './dashboard-category.component.html',
  styleUrls: ['./dashboard-category.component.scss']
})
export class DashboardCategoryComponent implements OnInit,OnDestroy {

  url: string = `${environment.api.urlCommon}${environment.api.category.common.all}`;
  urlDestroy: string = `${environment.api.urlProduct}${environment.api.category.admin.destroyCategory}`;
  urlDestroyThumbs: string = `${environment.api.url}${environment.api.category.admin.destroyCategoryThumbs}`;


  amountDataSub: Subscription = new Subscription();
  allCategorySub: Subscription = new Subscription();
  destroyCategorySub: Subscription = new Subscription();
  destroyCategoryThumb: Subscription = new Subscription();

  categories: Array<any> = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.amountDataSub = this.route.data.subscribe((data) => {
      this.allCategorySub = this.httpService.get(this.url).subscribe((data) => {
        let { status, categories } = data;
        if(status) {
          Object.assign(this.categories, categories);
        }
      })
    })
  }


  onDeleteHander(event: any) {    
    this.destroyCategorySub = this.httpService.delete(this.urlDestroy, {id: event})
    .subscribe((res) => {
      let { status, thumbs } = res;
      if(status) {
        this.destroyCategoryThumb = this.httpService.delete(this.urlDestroyThumbs, {thumbs}).subscribe((res: any) => {
          let { status } = res;
          if(status) {
            window.location.reload();
          }
        })
      }
    })
  }

  onUpdateHandler(event: any) {
    this.router.navigate(['/category/edit', event]);
  }

  ngOnDestroy(): void {
    this.amountDataSub.unsubscribe();
    this.allCategorySub.unsubscribe();
    this.destroyCategorySub.unsubscribe();
    this.destroyCategoryThumb.unsubscribe();
  }
}
