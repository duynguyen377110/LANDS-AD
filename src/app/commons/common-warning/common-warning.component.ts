import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { closeWarning } from 'src/app/store/store-warning/store-warning-action';

@Component({
  selector: 'app-common-warning',
  templateUrl: './common-warning.component.html',
  styleUrls: ['./common-warning.component.scss']
})
export class CommonWarningComponent implements OnInit, OnDestroy {

  warningSub: Subscription = new Subscription();
  status: boolean = false;
  message: string = '';

  constructor(
    private store: Store<{warning: any}>
  ) { }

  ngOnInit() {
    this.warningSub = this.store.select("warning").subscribe((warning: any) => {
      let { status, message } = warning;
      this.status = status;
      this.message = message;

      setTimeout(() => {
        this.store.dispatch(closeWarning());
      }, 2500)
    })
  }

  ngOnDestroy(): void {
    this.warningSub.unsubscribe();
  }
}
