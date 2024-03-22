import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CategoryHttpService } from 'src/app/services/category/category-http.service';
import { ValidationsService } from 'src/app/services/validations/validations.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-category-new',
  templateUrl: './dashboard-category-new.component.html',
  styleUrls: ['./dashboard-category-new.component.scss']
})
export class DashboardCategoryNewComponent implements OnInit {
  url: string = `${environment.api.url}${environment.api.category.new}`;

  formCategory: FormGroup = new FormGroup({});
  title: FormControl = new FormControl('', [this.inputVali.require()]);
  des: FormControl = new FormControl('', [this.inputVali.require()]);
  submit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private inputVali: ValidationsService,
    private serviceCategory: CategoryHttpService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formCategory = this.fb.group({
      title: this.title,
      des: this.des
    })
  }

  async onSubmitHandler(event: any) {
    event.preventDefault();
    this.submit = true;

    if(this.formCategory.status !== "INVALID") {
      this.submit = false;
      // this.serviceCategory.post(this.url, JSON.stringify(this.formCategory.value))
      // .subscribe((res) => {
      //   console.log(res);
      // })
      let res = await fetch('http://localhost:8080/api/v1/admin/category/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title: 'Text', des: 'Text'})
      });

      let data = await res.json();
      console.log(data);
    }
  }
}
