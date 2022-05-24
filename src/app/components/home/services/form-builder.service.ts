import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private formBuilder: FormBuilder) { }

  public buildNewsletterFormGroup(): FormGroup {
    const { required, maxLength, minLength, email } = Validators;
    return this.formBuilder.group({
      name: ['', [required, maxLength(64), minLength(2)]],
      emailAddress: ['', [required, email]]
    })
  }

  public buildContactUsFormGroup(): FormGroup {
    const { required, maxLength, minLength, email } = Validators;
    return this.formBuilder.group({
      name: ['', [required, maxLength(64), minLength(2)]],
      emailAddress: ['', [required, email]],
      message: ['', [required, maxLength(1000), minLength(2)]]
    })
  }
}
