import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { authReload } from "./store/store-auth/store-auth-action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  storeSub: Subscription = new Subscription();

  constructor(
    private router: Router,
    private store: Store<{auth: any}>
  ) { }

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if(!user) {
      this.router.navigate(['/auth']);
    } else {
      this.store.dispatch(authReload());
    }
    
  }

  ngOnDestroy(): void {
    this.storeSub.unsubscribe();
  }
  
}
