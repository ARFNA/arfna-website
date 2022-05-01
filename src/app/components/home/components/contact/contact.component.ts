import { Component, OnInit } from '@angular/core';
import { HomeConstants } from '../../constants/home.constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  public constantMap: Map<string, any> = new Map();

  constructor() { }

  ngOnInit(): void {
    this.processConstants();
  }


  public processConstants(): void {
    this.constantMap.set('title', HomeConstants.CONTACT_TITLE);
    this.constantMap.set('subtitle', HomeConstants.CONTACT_SUBTITLE);
    this.constantMap.set('header', HomeConstants.CONTACT_HEADER);
    this.constantMap.set('body', HomeConstants.CONTACT_BODY);
    this.constantMap.set('email', HomeConstants.CONTACT_EMAIL);
    this.constantMap.set('phone', HomeConstants.CONTACT_PHONE);
    this.constantMap.set('address', HomeConstants.CONTACT_ADDRESS);
  }

}
