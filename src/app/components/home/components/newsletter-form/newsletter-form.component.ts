import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FascadeService } from '../../services/fascade.service';

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

  constructor(private fascadeService: FascadeService) { }

  ngOnInit(): void {
    this.form = this.fascadeService.buildNewsletterForm();
  }

}
