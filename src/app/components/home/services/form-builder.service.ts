import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private formBuilder: FormBuilder) { }

  public buildNewsletterFormGroup(): FormGroup {
    const { required, maxLength, minLength, pattern } = Validators;
    return this.formBuilder.group({
      name: ['', [required, maxLength(64), minLength(2)]],
      emailAddress: ['', [required, pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]]
    })
  }

  public buildContactUsFormGroup(): FormGroup {
    const { required, maxLength, minLength, pattern } = Validators;
    return this.formBuilder.group({
      name: ['', [required, maxLength(64), minLength(2)]],
      emailAddress: ['', [required, pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      message: ['', [required, maxLength(1000), minLength(2)]]
    })
  }
}
