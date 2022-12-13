import { Component, OnInit } from '@angular/core';
import { HomeConstants } from '../../constants/home.constants';

@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.scss']
})
export class AllergyComponent implements OnInit {

  public constantMap: Map<string, any> = new Map();

  constructor() { }

  ngOnInit(): void {
    this.processConstants();
  }


  public processConstants(): void {
    this.constantMap.set('title', HomeConstants.ALLERGY_TITLE);
    this.constantMap.set('subtitle', HomeConstants.ALLERGY_SUBTITLE);
    this.constantMap.set('header1', HomeConstants.ALLERGY_HEADER_1);
    this.constantMap.set('header2', HomeConstants.ALLERGY_HEADER_2);
    this.constantMap.set('header3', HomeConstants.ALLERGY_HEADER_3);
    this.constantMap.set('header4', HomeConstants.ALLERGY_HEADER_4);
    this.constantMap.set('body1', HomeConstants.ALLERGY_BODY_1);
    this.constantMap.set('body2', HomeConstants.ALLERGY_BODY_2);
    this.constantMap.set('body3', HomeConstants.ALLERGY_BODY_3);
    this.constantMap.set('body4', HomeConstants.ALLERGY_BODY_4);
    this.constantMap.set('modal1', HomeConstants.ALLERGY_MODAL_1);
    this.constantMap.set('modal2', HomeConstants.ALLERGY_MODAL_2);
    this.constantMap.set('modal3', HomeConstants.ALLERGY_MODAL_3);
    this.constantMap.set('modal4', HomeConstants.ALLERGY_MODAL_4);
  }

}
