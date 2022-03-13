import { Component, OnInit } from '@angular/core';
import { MainConstants } from 'src/app/constants/main.constants';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public constantMap: Map<string, string> = new Map();

  constructor() { }

  ngOnInit(): void {
    this.processConstants();
  }

  public processConstants(): void {
    this.constantMap.set('title', MainConstants.FOUROFOUR_TITLE);
    this.constantMap.set('subtitle', MainConstants.FOUROFOUR_SUBTITLE);
    this.constantMap.set('button', MainConstants.FOUROFOUR_BUTTON);
  }


}
