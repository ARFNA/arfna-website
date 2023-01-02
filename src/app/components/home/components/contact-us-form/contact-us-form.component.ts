import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { MSubscriber } from 'src/app/models/m-subscriber';
import { Subscriber } from 'src/app/models/subscriber';
import { Errors } from '../../constants/errors.constants';
import { FascadeService } from '../../services/fascade.service';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss']
})
export class ContactUsFormComponent implements OnInit {

  /**
   * Newletter form group object
   */
   public form!: FormGroup;

   /**
    * Content for the newsletter messaging
    */
   public content: Map<string, string> = new Map<string, string>();
  
   public active: boolean = false;
  
   public success: boolean = false;
  
   public errorMessage: string = '';
 
   constructor(private fascadeService: FascadeService) { }

  ngOnInit(): void {
    this.form = this.fascadeService.buildContactUsForm();
    this.processConstants();
  }

  public proccessErrors(form: FormGroup, fieldName: string, content: Map<string, string>): string | null | undefined {
    return this.fascadeService.proccessErrorMessages(form, fieldName, content);
  }

  public processConstants(): void {
    this.content.set('emailPatternTxt', Errors.EMAIL);
    this.content.set('requiredTxt', Errors.REQUIRE);
    this.content.set('maxLengthTxt', Errors.MAXLENGTH1000);
    this.content.set('minLengthTxt', Errors.MINLENGTH);
  }

  public toggleActive() {
    this.active = !this.active;
  }

  public submit() {
    let formData: any = this.form.value;
    let fromField: any = {[formData.name]: formData.emailAddress};
    this.toggleActive();    
    this.fascadeService.contactUs(new Contact('V1', 'CONTACT_US', fromField, formData.message))
    .subscribe((response: any) => {
      this.toggleActive();
      this.success = true;
    },
    (error: any) => {
      this.toggleActive();
      if ('response' in error.error) {
        this.errorMessage = `Error: ${error.error.response.messages[0].message}`;
      } else {
        this.errorMessage = Errors.GENERIC;
      }
    });
    
  }

}
