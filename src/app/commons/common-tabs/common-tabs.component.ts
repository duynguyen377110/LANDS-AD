import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';
import { environment } from 'src/environments/environment';
import { authLogout } from "../../store/store-auth/store-auth-action";
import { openWarning } from "../../store/store-warning/store-warning-action";
import { Router } from '@angular/router';
import { HeaderRequestService } from 'src/app/services/header/header-request.service';

@Component({
  selector: 'app-common-tabs',
  templateUrl: './common-tabs.component.html',
  styleUrls: ['./common-tabs.component.scss']
})
export class CommonTabsComponent implements OnInit, OnDestroy {
  user: any = {};
  userSignoutSub: Subscription = new Subscription();

  constructor(
    private router: Router,
    private store: Store<{auth: any, warning: any}>,
    private httpService: HttpService,
    private headerRequest: HeaderRequestService
  ) { }

  ngOnInit(): void {
    this.store.select('auth').subscribe((auth: any) => {
      this.user = auth.infor;
    })
  }

  onUserSignout(): void {
    let url: string = `${environment.api.url}${environment.api.access.signout}`;
    this.userSignoutSub = this.httpService.post(url, {email: this.user.email}, this.headerRequest.getHeader()).subscribe(
      (res: any) => {
        let { status } = res;
        if(status) {
          this.store.dispatch(authLogout());
          this.router.navigate(['/auth']);
        }
      },
      (error: any) => {
        this.store.dispatch(openWarning({message: error.message}));
      })
  }

  ngOnDestroy(): void {
    this.userSignoutSub.unsubscribe();
  }

}
