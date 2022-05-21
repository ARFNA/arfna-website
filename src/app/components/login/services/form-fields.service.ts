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
      const { required, maxlength, minlength, email } = errors;
      return (
        required ? content.get('requiredTxt') :
          maxlength ? content.get('maxLengthTxt') :
            minlength && value.length < 2 ? `${content.get('minLengthTxt')} 2` :
              minlength && value.length < 12 ? `${content.get('minLengthTxt')} 12` :
              email ? content.get('emailPatternTxt') :
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
    return !(password.value === repassword.value);
  }
}
