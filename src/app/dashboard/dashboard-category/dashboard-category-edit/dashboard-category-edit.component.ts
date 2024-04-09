import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardCategoryNewComponent } from '../dashboard-category-new/dashboard-category-new.component';
import { FormBuilder } from '@angular/forms';
import { ValidationsService } from 'src/app/services/validations/validations.service';
import { HttpSendFileService } from 'src/app/services/http-send-file/http-send-file.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-dashboard-category-edit',
  templateUrl: '../dashboard-category-new/dashboard-category-new.component.html',
  styleUrls: ['./dashboard-category-edit.component.scss', '../dashboard-category-new/dashboard-category-new.component.scss']
})
export class DashboardCategoryEditComponent extends DashboardCategoryNewComponent implements OnInit {
  override titleButton: string = 'Edit category';

  constructor(
    fb: FormBuilder,
    router: Router,
    route: ActivatedRoute,
    inputVali: ValidationsService,
    httpSendFile: HttpSendFileService,
    httpService: HttpService,
  ) {
    super(fb, router, route, inputVali, httpSendFile, httpService)
  }

  override ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      let { category } = data.category;
      this.initSetterData(category);
      this.createForm();
      console.log(category);
    })
  }

  initSetterData(category: any) {
    this.title.setValue(category.title);
    this.description.setValue(category.description);
  }

  override async onSubmitHandler(event: any) {
    event.preventDefault();
    this.submit = true;

    if(this.formCategory.status !== "INVALID") {
      this.submit = false;

      let { id } = this.route.snapshot.params;
      let formData = new FormData();
      formData.append('id', id);
      formData.append('title', this.formCategory.value.title);
      formData.append('description', this.formCategory.value.description);


      let inputPhotos: any = this.formCategory.controls['photos'];

      if(inputPhotos.value.length) {
          for(let file of inputPhotos.value) {
            formData.append('photos', file);
          }
      }

      let res = await this.httpSendFile.patch(this.url, formData);
      let { status } = res;

      if(status) {
        this.router.navigate(['../..'], {relativeTo: this.route});
      }
    }
  }

}
