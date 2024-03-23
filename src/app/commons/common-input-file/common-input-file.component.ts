import { Component, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-common-input-file',
  templateUrl: './common-input-file.component.html',
  styleUrls: ['./common-input-file.component.scss']
})
export class CommonInputFileComponent {
  @ViewChild('inputFile') inputFile!: ElementRef;
  @Input('formControl') formControl!: FormControl;
  

  onChangeHandler(): void {
    this.formControl.setValue(this.inputFile.nativeElement.files);
  }

}
