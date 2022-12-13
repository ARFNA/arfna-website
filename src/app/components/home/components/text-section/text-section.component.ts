import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-section',
  templateUrl: './text-section.component.html',
  styleUrls: ['./text-section.component.scss']
})
export class TextSectionComponent {

  @Input() public section: string='';
  @Input() public header1: string='';
  @Input() public body1: string[]=[];
  @Input() public header2: string='';
  @Input() public body2: string[]=[];
  @Input() public header3: string='';
  @Input() public body3: string[]=[];
  @Input() public header4: string='';
  @Input() public body4: string[]=[];

  constructor() { }

}
