import { Component, OnInit } from '@angular/core';
import { HomeConstants } from '../../constants/home.constants';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.scss']
})
export class DonateComponent implements OnInit {

  public constantMap: Map<string, string> = new Map();

  constructor() { }

  ngOnInit(): void {
    this.processConstants();
  }


  public processConstants(): void {
    this.constantMap.set('title', HomeConstants.DONATE_TITLE);
    this.constantMap.set('subtitle', HomeConstants.DONATE_SUBTITLE);
  }

}
