import { Component, OnInit } from '@angular/core';
import { HomeConstants } from '../../constants/home.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  public constantMap: Map<string, any> = new Map();

  constructor() { }

  ngOnInit(): void {
    this.processConstants();
  }

  public processConstants(): void {
    this.constantMap.set('title', HomeConstants.ABOUT_TITLE);
    this.constantMap.set('subtitle', HomeConstants.ABOUT_SUBTITLE);
    this.constantMap.set('section', HomeConstants.ABOUT_SECTION);
    this.constantMap.set('subheader1', HomeConstants.ABOUT_HEADER1);
    this.constantMap.set('body1', HomeConstants.ABOUT_BODY1);
    this.constantMap.set('subheader2', HomeConstants.ABOUT_HEADER2);
    this.constantMap.set('body2', HomeConstants.ABOUT_BODY2);
  }
}
