import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormFieldsService } from './form-fields.service';

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(private formBuilder: FormBuilder,
    private formFieldService: FormFieldsService) { }

  public buildLoginFormGroup(): FormGroup {
    const { required, pattern, minLength } = Validators;
    return this.formBuilder.group({
      emailAddress: ['', [required, pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [required, minLength(12)]]
    })
  }

  public buildSignUpFormGroup(): FormGroup {
    const { required, maxLength, minLength, pattern } = Validators;
    return this.formBuilder.group({
      name: ['', [required, maxLength(64), minLength(2)]],
      emailAddress: ['', [required, pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [required, minLength(12)]],
      repassword: ['', [required, minLength(12)]]
    }, 
    { validator: [this.formFieldService.passwordConfirmation('password', 'repassword')] })
  }
}
