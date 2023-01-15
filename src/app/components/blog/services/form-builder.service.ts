import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private formBuilder: FormBuilder) { }

  public buildPostFormGroup(): FormGroup {
    const { required, maxLength, minLength } = Validators;
    return this.formBuilder.group({
      title: ['', [required, maxLength(140), minLength(2)]],
      markdown: ['', [required]]
    })
  }

}
