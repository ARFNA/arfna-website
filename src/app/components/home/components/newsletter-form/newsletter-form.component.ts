import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FascadeService } from '../../services/fascade.service';
import { Errors } from '../../constants/errors.constants';

@Component({
  selector: 'app-newsletter-form',
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.scss']
})
export class NewsletterFormComponent implements OnInit {

  /**
   * Newletter form group object
   */
  public form!: FormGroup;

  /**
   * Content for the newsletter messaging
   */
  public content: Map<string, string> = new Map<string, string>();

  constructor(private fascadeService: FascadeService) { }

  ngOnInit(): void {
    this.form = this.fascadeService.buildNewsletterForm();
    this.processConstants();
  }

  public proccessErrors(form: FormGroup, fieldName: string, content: Map<string, string>): string | null | undefined {
    return this.fascadeService.proccessErrorMessages(form, fieldName, content);
  }

  public processConstants(): void {
    this.content.set('emailPatternTxt', Errors.EMAIL);
    this.content.set('requiredTxt', Errors.REQUIRE);
    this.content.set('maxLengthTxt', Errors.MAXLENGTH);
    this.content.set('minLengthTxt', Errors.MINLENGTH);
  }

}
