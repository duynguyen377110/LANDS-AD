import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonsRoutingModule } from './commons-routing.module';
import { CommonsInputComponent } from './commons-input/commons-input.component';
import { CommonSelectComponent } from './common-select/common-select.component';
import { CommonButtonComponent } from './common-button/common-button.component';
import { CommonTableComponent } from './common-table/common-table.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonTabsComponent } from './common-tabs/common-tabs.component';


@NgModule({
  declarations: [
    CommonsInputComponent,
    CommonSelectComponent,
    CommonButtonComponent,
    CommonTableComponent,
    CommonHeaderComponent,
    CommonTabsComponent
  ],
  imports: [
    CommonModule,
    CommonsRoutingModule
  ],
  exports: [
    CommonsInputComponent,
    CommonSelectComponent,
    CommonButtonComponent,
    CommonTableComponent,
    CommonHeaderComponent,
    CommonTabsComponent
  ]
})
export class CommonsModule { }
