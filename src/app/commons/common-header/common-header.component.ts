import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-common-header',
  templateUrl: './common-header.component.html',
  styleUrls: ['./common-header.component.scss']
})
export class CommonHeaderComponent implements OnInit, OnDestroy {
  auth: any = {};
  authSub: Subscription = new Subscription();

  constructor(
    private store: Store<{auth: any}>
  ) {}

  ngOnInit(): void {
    this.authSub = this.store.select('auth').subscribe((auth: any) => {
      this.auth = auth.infor;
    })
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }

}
