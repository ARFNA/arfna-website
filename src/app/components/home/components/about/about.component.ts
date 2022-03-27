import { Component, OnInit } from '@angular/core';
import { HomeConstants } from '../../constants/home.constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  public constantMap: Map<string, string> = new Map();

  constructor() { }

  ngOnInit(): void {
    this.processConstants();
  }


  public processConstants(): void {
    this.constantMap.set('title', HomeConstants.ABOUT_TITLE);
    this.constantMap.set('subtitle', HomeConstants.ABOUT_SUBTITLE);
  }
}
