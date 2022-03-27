import { Component, OnInit } from '@angular/core';
import { MainConstants } from 'src/app/constants/main.constants';
import { FascadeService } from 'src/app/services/fascade.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  public constantMap: Map<string, string> = new Map();

  constructor(private fascadeService: FascadeService) { }

  ngOnInit(): void {
    this.processConstants();
  }

  public processConstants(): void {
    this.constantMap.set('title', MainConstants.FOUROFOUR_TITLE);
    this.constantMap.set('subtitle', MainConstants.FOUROFOUR_SUBTITLE);
    this.constantMap.set('button', MainConstants.FOUROFOUR_BUTTON);
  }

  public returnHome() {
    this.fascadeService.routeTo('');
  }




}
