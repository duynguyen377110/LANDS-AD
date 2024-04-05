import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpSendFileService } from 'src/app/services/http-send-file/http-send-file.service';
import { HttpService } from 'src/app/services/http/http.service';
import { ValidationsService } from 'src/app/services/validations/validations.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-category-new',
  templateUrl: './dashboard-category-new.component.html',
  styleUrls: ['./dashboard-category-new.component.scss']
})
export class DashboardCategoryNewComponent implements OnInit, OnDestroy {
  url: string = `${environment.api.urlProduct}${environment.api.server_product.category.root}`;
  urlUploadThumb: string = `${environment.api.url}${environment.api.server_be.category.uploadThumb}`;

  formCategory: FormGroup = new FormGroup({});
  title: FormControl = new FormControl('', [this.inputVali.require()]);
  description: FormControl = new FormControl('', [this.inputVali.require()]);
  photos: FormControl = new FormControl('', []);
  submit: boolean = false;
  serviceCategorySub: Subscription = new Subscription();
  titleButton: string = 'New category';

  constructor(
    public fb: FormBuilder,
    public router: Router,
    public route: ActivatedRoute,
    public inputVali: ValidationsService,
    public httpSendFile: HttpSendFileService,
    public httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formCategory = this.fb.group({
      title: this.title,
      description: this.description,
      photos: this.photos
    })
  }

  async onSubmitHandler(event: any) {
    event.preventDefault();
    this.submit = true;

    if(this.formCategory.status !== "INVALID") {
      this.submit = false;

      let inputPhotos: any = this.formCategory.controls['photos'];
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
        title: this.formCategory.value.title,
        description: this.formCategory.value.description,
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
    this.serviceCategorySub.unsubscribe();
  }

}
