import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MSubscriber } from 'src/app/models/m-subscriber';
import { FormBuilderService } from './form-builder.service';
import { FormFieldsService } from './form-fields.service';
import { NewsletterService } from './newsletter.service';

@Injectable({
  providedIn: 'root'
})
export class FascadeService {

  constructor(private formBuilder: FormBuilderService,
    private formFieldsService: FormFieldsService,
    private newletterService: NewsletterService,) { }

  public buildNewsletterForm(): FormGroup {
    return this.formBuilder.buildNewsletterFormGroup();
  }

  public buildContactUsForm(): FormGroup {
    return this.formBuilder.buildContactUsFormGroup();
  }

  public proccessErrorMessages(form: FormGroup, fieldName: string, content: Map<string, string>): string | undefined {
    return this.formFieldsService.processFieldValidationMessage(form, fieldName, content);
  }

  public addSubscriber(mSubscriber: MSubscriber) {
    return this.newletterService.mSubscriber(mSubscriber);
  }

}
