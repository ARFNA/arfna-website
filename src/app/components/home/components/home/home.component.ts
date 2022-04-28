import { Component, OnInit } from '@angular/core';
import { HomeConstants } from '../../constants/home.constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public constantMap: Map<string, any> = new Map();

  constructor() { }

  ngOnInit(): void {
    this.processConstants();
  }


  public processConstants(): void {
    this.constantMap.set('title', HomeConstants.HOME_TITLE);
    this.constantMap.set('subtitle', HomeConstants.HOME_SUBTITLE);
    this.constantMap.set('donate', HomeConstants.HOME_DONATE);
    this.constantMap.set('section', HomeConstants.HOME_SECTION);
    this.constantMap.set('subheader1', HomeConstants.HOME_HEADER1);
    this.constantMap.set('body1', HomeConstants.HOME_BODY1);
    this.constantMap.set('subheader2', HomeConstants.HOME_HEADER2);
    this.constantMap.set('body2', HomeConstants.HOME_BODY2);
  }

}
