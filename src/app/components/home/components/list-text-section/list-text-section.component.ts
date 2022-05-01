import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-text-section',
  templateUrl: './list-text-section.component.html',
  styleUrls: ['./list-text-section.component.scss']
})
export class ListTextSectionComponent {

  @Input() header: string = '';
  @Input() body: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';
  @Input() address: string = '';

  constructor() { }

}
