import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardProductNewComponent } from '../dashboard-product-new/dashboard-product-new.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationsService } from 'src/app/services/validations/validations.service';
import { HttpSendFileService } from 'src/app/services/http-send-file/http-send-file.service';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-dashboard-product-edit',
  templateUrl: '../dashboard-product-new/dashboard-product-new.component.html',
  styleUrls: ['./dashboard-product-edit.component.scss', '../dashboard-product-new/dashboard-product-new.component.scss']
})
export class DashboardProductEditComponent extends DashboardProductNewComponent implements OnInit, OnDestroy {
  product: any = {};
  resolveSub: Subscription = new Subscription();

  constructor(
    fb: FormBuilder,
    router: Router,
    route: ActivatedRoute,
    serviceValidation: ValidationsService,
    httpSendFile: HttpSendFileService,
    httpService: HttpService
  ) {
    super(fb, router, route, serviceValidation, httpSendFile, httpService);
  }

  override ngOnInit(): void {
    this.resolveSub = this.route.data.subscribe((data: any) => {
      let { categories } = data.categories.metadata;
      let { product } = data.product.metadata;

      this.selectCategories = categories.map((category: any) => {
        return {
          id: category._id,
          title: category.title
        }
      })
      this.product = product;
      this.setDataInformation();
      this.createForm();
    })
  }

  setDataInformation() {
    this.productOwner.setValue(this.product.productOwner);
    this.address.setValue(this.product.address);
    this.contact.setValue(this.product.contact);
    this.landArea.setValue(this.product.landArea);
    this.price.setValue(this.product.price);
    this.categories.setValue(this.product.categories._id);
  }

  override async onSubmitHandler(event: any) {
    event.preventDefault();

    this.submit = true;
    if(this.formProduct.status !== "INVALID") {
      this.submit = false;
      let user: any = localStorage.getItem("user");
      user = JSON.parse(user);

      let formData = new FormData();

      formData.append('admin', user.id);
      formData.append('id', this.product._id);
      formData.append('productOwner', this.formProduct.value.productOwner);
      formData.append('address', this.formProduct.value.address);
      formData.append('contact', this.formProduct.value.contact);
      formData.append('landArea', this.formProduct.value.landArea);
      formData.append('price', this.formProduct.value.price);
      formData.append('category', this.formProduct.value.categories);


      let inputPhotos: any = this.formProduct.controls['photos'];

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

  override ngOnDestroy(): void {
    this.resolveSub.unsubscribe();
  }
}
