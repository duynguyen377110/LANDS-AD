import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ValidationsService } from 'src/app/services/validations/validations.service';

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

  submit: boolean = false;
  titleButton: string = 'Tạo sản phẩm';


  constructor(
    public fb: FormBuilder,
    public serviceValidation: ValidationsService
  ) {}

  ngOnInit(): void {
    this.createForm();
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

  onSubmitHandler(event: any): void {
    event.preventDefault();

    this.submit = true;
    if(this.formProduct.status !== "INVALID") {
      this.submit = false;

      let formData = new FormData();
      console.log(this.formProduct);

      // formData.append('title', this.formProduct.value.productOwner);
      // formCategoryData.append('description', this.formCategory.value.description);


      // let inputPhotos: any = this.formCategory.controls['photos'];

      // if(inputPhotos.value.length) {
      //     for(let file of inputPhotos.value) {
      //       formCategoryData.append('photos', file);
      //     }
      // }

      // let res = await this.httpSendFile.post(this.url, formCategoryData);
      // let { status } = res;

      // if(status) {
      //   this.router.navigate(['..'], {relativeTo: this.route});
      // }
      
    }
  }

  ngOnDestroy(): void {
    
  }

}
