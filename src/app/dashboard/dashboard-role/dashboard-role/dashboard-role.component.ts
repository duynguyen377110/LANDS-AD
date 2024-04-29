import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { HeaderRequestService } from 'src/app/services/header/header-request.service';
import { HttpService } from 'src/app/services/http/http.service';
import { openWarning } from 'src/app/store/store-warning/store-warning-action';
import { loadAmount } from "src/app/store/store-pagination/store-pagination-action";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-role',
  templateUrl: './dashboard-role.component.html',
  styleUrls: ['./dashboard-role.component.scss']
})
export class DashboardRoleComponent implements OnInit, OnDestroy {
  urlDestroy: string = `${environment.api.url}${environment.api.role.admin.root}`;
  roles: Array<any> = [];
  dataSub: Subscription = new Subscription();
  destroyRoleSub: Subscription = new Subscription();
  getRoleSub: Subscription = new Subscription();
  paginationSub: Subscription = new Subscription();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private headerRequest: HeaderRequestService,
    private httpService: HttpService,
    private store: Store<{warning: any, pagination: any}>
  ) { }

  ngOnInit(): void {
    this.dataSub = this.route.data.subscribe((data: any) => {
      let { amount } = data.amount.metadata;

      this.store.dispatch(loadAmount({amount, kind: 'role'}))
      this.paginationSub = this.store.select("pagination").subscribe((data) => {
        let {  currentPage, itemsOfPage } = data;
        let start = currentPage * itemsOfPage;
        let url: string = `${environment.api.urlCommon}${environment.api.role.common.root}/${start}/${itemsOfPage}`;

        this.getRoleSub = this.httpService.get(url, this.headerRequest.getHeader()).subscribe((data: any) => {
          let { roles } = data.metadata;
          this.roles = roles;
        })

      })
    })
  }

  onDeleteHander(event: any) {   
    this.destroyRoleSub = this.httpService.delete(this.urlDestroy, {id: event}, this.headerRequest.getHeader()).subscribe(
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
    this.router.navigate(['/role/edit', event]);
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
    this.destroyRoleSub.unsubscribe();
    this.getRoleSub.unsubscribe();
    this.paginationSub.unsubscribe();
  }

}
