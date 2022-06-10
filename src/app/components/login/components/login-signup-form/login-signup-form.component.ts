import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Errors } from 'src/app/components/login/constants/errors.constants';
import { FascadeService } from 'src/app/components/login/services/fascade.service';
import { MSubscriber } from 'src/app/models/m-subscriber';
import { Subscriber } from 'src/app/models/subscriber';

@Component({
  selector: 'app-login-signup-form',
  templateUrl: './login-signup-form.component.html',
  styleUrls: ['./login-signup-form.component.scss']
})
export class LoginSignupFormComponent implements OnInit {

   /**
    * Content for the newsletter messaging
    */
    public content: Map<string, string> = new Map<string, string>();

  public loginForm!: FormGroup;

  public signupForm!: FormGroup;

  public errorMessage!: string;

  public active: boolean = false;

  constructor(private fascadeService: FascadeService) { }

  ngOnInit(): void {
    this.loginForm = this.fascadeService.buildLoginForm();
    this.signupForm = this.fascadeService.buildSignUpForm();
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
    this.content.set('passMismatch', Errors.PASSCONFIRM);
    this.content.set('passLength', Errors.PASSCONFIRM);
  }

  public onSubmit() {
    this.toggleActive();
    let method: string;
    let formData: any = new Subscriber();
    let emailData: any = new Subscriber();
    Object.assign(formData, this.signupForm.value);
    delete formData['repassword'];
    emailData.emailAddress = formData.emailAddress;

    this.fascadeService.manageSubscriber(new MSubscriber('V1', 'CHECK_TYPE_FROM_EMAIL', emailData))
    .subscribe((response: any) => {
      if (response.response.subscriberType === 'NAME_AND_EMAIL') {
        method = 'ADD_PASSWORD';
      } else {
        method = 'ADD_SUBSCRIBER_WITH_PASSWORD';
      }
      this.signUp(method, formData);
    },
    (error: HttpErrorResponse) => {
      this.toggleActive();
      if (!error.error.response.messages[0].message) {
        this.errorMessage = 'Something went wrong. Please refresh and try again.'
      } else {
        this.errorMessage = `Error: ${error.error.response.messages[0].message}`;
      }
    });
    
  }

  public signUp(method: string, formData: Subscriber) {
    this.fascadeService.manageSubscriber(new MSubscriber('V1', method, formData))
    .subscribe((response) => {
      this.toggleActive();
      //redirect and change navbar state from login to logout
    },
    (error: HttpErrorResponse) => {
      this.toggleActive();
      if (!error.error.response.messages[0].message) {
        this.errorMessage = 'Something went wrong. Please refresh and try again.'
      } else {
        this.errorMessage = `Error: ${error.error.response.messages[0].message}`;
      }
    });
  }

  public login() {
    this.toggleActive();
    let formData: Subscriber = new Subscriber();
    Object.assign(formData, this.loginForm.value);
    
    this.fascadeService.manageSubscriber(new MSubscriber('V1', 'LOGIN', formData))
    .subscribe((response) => {
      //redirect and change navbar state from login to logout
    },
    (error: HttpErrorResponse) => {
      this.toggleActive();
      if (!error.status) {
        this.errorMessage = 'Something went wrong. Please refresh and try again.'
      } else {
        this.errorMessage = `Error: ${error.error.response.messages[0].message}`;
      }
    });
    
  }

  public toggleActive() {
    this.active = !this.active;
  }

}
