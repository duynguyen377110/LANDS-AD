import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { CommonsRoutingModule } from './commons-routing.module';
import { CommonsInputComponent } from './commons-input/commons-input.component';
import { CommonSelectComponent } from './common-select/common-select.component';
import { CommonButtonComponent } from './common-button/common-button.component';
import { CommonTableComponent } from './common-table/common-table.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { CommonTabsComponent } from './common-tabs/common-tabs.component';
import { CommonInputFileComponent } from './common-input-file/common-input-file.component';
import { CommonBlandComponent } from './common-bland/common-bland.component';
import { CommonLoaderComponent } from './common-loader/common-loader.component';
import { CommonTextareaComponent } from './common-textarea/common-textarea.component';


@NgModule({
  declarations: [
    CommonsInputComponent,
    CommonSelectComponent,
    CommonButtonComponent,
    CommonTableComponent,
    CommonHeaderComponent,
    CommonTabsComponent,
    CommonInputFileComponent,
    CommonBlandComponent,
    CommonLoaderComponent,
    CommonTextareaComponent,
  ],
  imports: [
    CommonModule,
    CommonsRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonsInputComponent,
    CommonSelectComponent,
    CommonButtonComponent,
    CommonTableComponent,
    CommonHeaderComponent,
    CommonTabsComponent,
    CommonInputFileComponent,
    CommonBlandComponent,
    CommonLoaderComponent,
    CommonTextareaComponent,
  ]
})
export class CommonsModule { }
