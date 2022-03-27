import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from './form-builder.service';

@Injectable({
  providedIn: 'root'
})
export class FascadeService {

  constructor(private formBuilder: FormBuilderService) { }

  public buildNewsletterForm(): FormGroup {
    return this.formBuilder.buildNewsletterFormGroup();
  }

}
