import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoryHttpService } from 'src/app/services/category/category-http.service';
import { ValidationsService } from 'src/app/services/validations/validations.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard-category-new',
  templateUrl: './dashboard-category-new.component.html',
  styleUrls: ['./dashboard-category-new.component.scss']
})
export class DashboardCategoryNewComponent implements OnInit, OnDestroy {
  url: string = `${environment.api.url}${environment.api.category.new}`;

  formCategory: FormGroup = new FormGroup({});
  title: FormControl = new FormControl('', [this.inputVali.require()]);
  description: FormControl = new FormControl('', [this.inputVali.require()]);
  submit: boolean = false;
  serviceCategorySub: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private inputVali: ValidationsService,
    private serviceCategory: CategoryHttpService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formCategory = this.fb.group({
      title: this.title,
      description: this.description
    })
  }

  async onSubmitHandler(event: any) {
    event.preventDefault();
    this.submit = true;

    if(this.formCategory.status !== "INVALID") {
      this.submit = false;

      this.serviceCategorySub = this.serviceCategory.post(this.url, this.formCategory.value)
      .subscribe((res) => {
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
