import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ValidationsService } from 'src/app/services/validations/validations.service';

@Component({
  selector: 'app-dashboard-category-new',
  templateUrl: './dashboard-category-new.component.html',
  styleUrls: ['./dashboard-category-new.component.scss']
})
export class DashboardCategoryNewComponent implements OnInit {

  formCategory: FormGroup = new FormGroup({});
  title: FormControl = new FormControl('', [this.inputVali.require()]);
  des: FormControl = new FormControl('', [this.inputVali.require()]);
  submit: boolean = false;

  constructor(
    private fb: FormBuilder,
    private inputVali: ValidationsService
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

  onSubmitHandler(event: any) {
    event.preventDefault();
    this.submit = true;

    if(this.formCategory.status !== "INVALID") {
      this.submit = false;
    }
  }
}
