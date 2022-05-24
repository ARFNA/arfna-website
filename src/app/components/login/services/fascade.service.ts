import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MSubscriber } from 'src/app/models/m-subscriber';
import { FormBuilderService } from './form-builder.service';
import { FormFieldsService } from './form-fields.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class FascadeService {

  constructor(private formBuilder: FormBuilderService,
    private formFieldsService: FormFieldsService,
    private loginService: LoginService) { }

  public buildLoginForm(): FormGroup {
    return this.formBuilder.buildLoginFormGroup();
  }

  public buildSignUpForm(): FormGroup {
    return this.formBuilder.buildSignUpFormGroup();
  }

  public proccessErrorMessages(form: FormGroup, fieldName: string, content: Map<string, string>): string | undefined {
    return this.formFieldsService.processFieldValidationMessage(form, fieldName, content);
  }
  
  public manageSubscriber(mSubscriber: MSubscriber) {
    return this.loginService.mSubscriber(mSubscriber);
  }
}
