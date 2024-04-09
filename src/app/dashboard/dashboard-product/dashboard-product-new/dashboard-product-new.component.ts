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

  url: string = `${environment.api.url}${environment.api.product.admin.root}`;

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

      let formData = new FormData();

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

      let res = await this.httpSendFile.post(this.url, formData);
      let { status } = res;

      if(status) {
        this.router.navigate(['..'], {relativeTo: this.route});
      }
      
    }
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }

}
