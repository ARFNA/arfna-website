import { Component, OnInit } from '@angular/core';
import { HomeConstants } from '../../constants/home.constants';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  public constantMap: Map<string, string> = new Map();

  constructor() { }

  ngOnInit(): void {
    this.processConstants();
  }


  public processConstants(): void {
    this.constantMap.set('title', HomeConstants.CONTACT_TITLE);
    this.constantMap.set('subtitle', HomeConstants.CONTACT_SUBTITLE);
  }

}
