import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpSendFileService } from 'src/app/services/http-send-file/http-send-file.service';
import { HttpService } from 'src/app/services/http/http.service';
import { ValidationsService } from 'src/app/services/validations/validations.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-product-new',
  templateUrl: './dashboard-product-new.component.html',
  styleUrls: ['./dashboard-product-new.component.scss']
})
export class DashboardProductNewComponent implements OnInit, OnDestroy {
  formProduct: FormGroup = new FormGroup({});
  address: FormControl = new FormControl('', [this.serviceValidation.require()]);
  contact: FormControl = new FormControl('', [this.serviceValidation.require()]);
  landArea: FormControl = new FormControl('', [this.serviceValidation.require()]);
  price: FormControl = new FormControl('', [this.serviceValidation.require()]);
  productOwner: FormControl = new FormControl('', [this.serviceValidation.require()]);
  photos: FormControl = new FormControl('', []);
  categories: FormControl = new FormControl('', [this.serviceValidation.require()]);

  url: string = `${environment.api.urlProduct}${environment.api.server_product.product.root}`;
  urlUploadThumb: string = `${environment.api.url}${environment.api.server_be.product.uploadThumb}`;

  submit: boolean = false;
  titleButton: string = 'Tạo sản phẩm';
  selectCategories: Array<any> = [];
  dataSub: Subscription = new Subscription();


  constructor(
    public fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public serviceValidation: ValidationsService,
    public httpSendFile: HttpSendFileService,
    public httpService: HttpService
  ) {}

  ngOnInit(): void {
    this.dataSub = this.route.data.subscribe((data: any) => {
      let { categories } = data.categories;
      this.selectCategories = categories.map((category: any) => {
        return {
          id: category._id,
          title: category.title
        }
      })
      this.createForm();
    })
  }

  createForm(): void {
    this.formProduct = this.fb.group({
      productOwner: this.productOwner,
      address: this.address,
      contact: this.contact,
      landArea: this.landArea,
      price: this.price,
      photos: this.photos,
      categories: this.categories
    })
  }

  async onSubmitHandler(event: any) {
    event.preventDefault();

    this.submit = true;
    if(this.formProduct.status !== "INVALID") {
      this.submit = false;

      let inputPhotos: any = this.formProduct.controls['photos'];
      let photos: Array<string> = [];

      if(inputPhotos.value.length) {
        let formCategoryData = new FormData();
        for(let file of inputPhotos.value) {
          formCategoryData.append('photos', file);
        }

        let { thumbs } = await this.httpSendFile.post(this.urlUploadThumb, formCategoryData);
        photos = thumbs;
      }

      let payload = {
        productOwner: this.formProduct.value.productOwner,
        address: this.formProduct.value.address,
        contact: this.formProduct.value.contact,
        landArea: this.formProduct.value.landArea,
        price: this.formProduct.value.price,
        category: this.formProduct.value.categories,
        thumbs: photos
      }

      this.httpService.post(this.url, payload).subscribe((res: any) => {
        let { status } = res;
        if(status) {
          this.router.navigate(['..'], {relativeTo: this.route});
        }
      })
      
    }
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }

}
