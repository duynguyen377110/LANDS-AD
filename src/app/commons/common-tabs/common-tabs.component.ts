import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';
import { environment } from 'src/environments/environment';
import { authLogout } from "../../store/store-auth/store-auth-action";
import { Router } from '@angular/router';

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
    private store: Store<{auth: any}>,
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.store.select('auth').subscribe((auth: any) => {
      this.user = auth.infor;
    })
  }

  onUserSignout(): void {
    let url: string = `${environment.api.url}${environment.api.access.signout}`;
    this.userSignoutSub = this.httpService.post(url, {email: this.user.email}).subscribe((res: any) => {
      let { status } = res;
      if(status) {
        this.store.dispatch(authLogout());
        this.router.navigate(['/auth']);
      }
    })
  }

  ngOnDestroy(): void {
    this.userSignoutSub.unsubscribe();
  }

}
