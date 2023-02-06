import { Component, OnInit } from '@angular/core';
import { HomeConstants } from '../../constants/home.constants';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  public constantMap: Map<string, any> = new Map();

  constructor() { }

  ngOnInit(): void {
    this.processConstants();
  }


  public processConstants(): void {
    this.constantMap.set('title', HomeConstants.DONATE_TITLE);
    this.constantMap.set('subtitle', HomeConstants.DONATE_SUBTITLE);
    this.constantMap.set('section', HomeConstants.DONATE_SECTION1);
    this.constantMap.set('section2', HomeConstants.DONATE_SECTION2);
    this.constantMap.set('subheader1', HomeConstants.DONATE_HEADER1);
    this.constantMap.set('body1', HomeConstants.DONATE_BODY1);
    this.constantMap.set('subheader2', HomeConstants.DONATE_HEADER2);
    this.constantMap.set('body2', HomeConstants.DONATE_BODY2);
  }

}
