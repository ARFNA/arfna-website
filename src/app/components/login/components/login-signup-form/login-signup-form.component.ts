import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Errors } from 'src/app/components/login/constants/errors.constants';
import { FascadeService } from 'src/app/components/login/services/fascade.service';

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

}
