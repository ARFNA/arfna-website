import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormFieldsService } from './form-fields.service';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private formBuilder: FormBuilder) { }

  public buildNewsletterFormGroup(): FormGroup {
    const { required, maxLength, minLength, email } = Validators;
    return this.formBuilder.group({
      name: ['', [required, maxLength(64), minLength(2)]],
      email: ['', [required, email]],
      checkbox: ['']
    })
  }

  public buildContactUsFormGroup(): FormGroup {
    const { required, maxLength, minLength, email } = Validators;
    return this.formBuilder.group({
      name: ['', [required, maxLength(64), minLength(2)]],
      email: ['', [required, email]],
      message: ['', [required, maxLength(1000), minLength(2)]]
    })
  }
}
