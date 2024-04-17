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
  url: string = `${environment.api.url}${environment.api.category.admin.root}`;

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

      let formData = new FormData();
      let user: any = localStorage.getItem("user");
      user = JSON.parse(user);

      formData.append('admin', user.id);
      formData.append('title', this.formCategory.value.title);
      formData.append('description', this.formCategory.value.description);


      let inputPhotos: any = this.formCategory.controls['photos'];

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
    this.serviceCategorySub.unsubscribe();
  }

}
