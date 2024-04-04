import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardProductNewComponent } from '../dashboard-product-new/dashboard-product-new.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationsService } from 'src/app/services/validations/validations.service';
import { HttpSendFileService } from 'src/app/services/http-send-file/http-send-file.service';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-dashboard-product-edit',
  templateUrl: '../dashboard-product-new/dashboard-product-new.component.html',
  styleUrls: ['./dashboard-product-edit.component.scss', '../dashboard-product-new/dashboard-product-new.component.scss']
})
export class DashboardProductEditComponent extends DashboardProductNewComponent implements OnInit, OnDestroy {
  override url: string = `${environment.api.urlProduct}${environment.api.server_product.product.update}`;
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
      let { categories } = data.categories;
      let { product } = data.product;

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

      let formData = new FormData();
      let inputPhotos: any = this.formProduct.controls['photos'];
      let photos: Array<string> = [];

      if(inputPhotos.value.length) {
          for(let file of inputPhotos.value) {
            formData.append('photos', file);
          }

          let { thumbs } = await this.httpSendFile.patch(this.urlUploadThumb, formData);
          photos = thumbs;
      }

      let payload = {
        id: this.product._id,
        productOwner: this.formProduct.value.productOwner,
        address: this.formProduct.value.address,
        contact: this.formProduct.value.contact,
        landArea: this.formProduct.value.landArea,
        price: this.formProduct.value.price,
        category: this.formProduct.value.categories,
        thumbs: photos
      }

      this.httpService.patch(this.url, payload).subscribe((res: any) => {
        let { status } = res;
        if(status) {
          this.router.navigate(['../..'], {relativeTo: this.route});
        }
      })
      
    }
  }

  override ngOnDestroy(): void {
    this.resolveSub.unsubscribe();
  }
}
