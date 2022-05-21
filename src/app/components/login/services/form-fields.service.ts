import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormFieldsService {

  constructor() { }

  public processFieldValidationMessage(form: any, fieldName: string, content: Map<string, string>): string | undefined {
    const { errors, value } = form.controls[fieldName] || {};
    if (errors) {
      const { required, maxlength, minlength, email, passwordConfirmation } = errors;
      return (
        required ? content.get('requiredTxt') :
          maxlength ? content.get('maxLengthTxt') :
            minlength ? content.get('minLengthTxt') :
              email ? content.get('emailPatternTxt') :
                passwordConfirmation ? content.get('passwordMismatch') :
                  ''
      );
    }
    return '';
  }

  public passwordConfirmation(password: string, repassword: string) {
    return (group: FormGroup): { [key: string]: boolean } | null => {
      const pass = group.controls[password];
      const repass = group.controls[repassword];
      return { passwordConfirmation: (this.passComparator(pass, repass))};
    }
  }

  public passComparator(password: AbstractControl, repassword: AbstractControl) {
    return (password.value === repassword.value);
  }
}
