import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-h2-p',
  templateUrl: './h2-p.component.html',
  styleUrls: ['./h2-p.component.scss']
})
export class H2PComponent {

  @Input() header: string = '';
  @Input() bodies: string[] = [];

  constructor() { }

}
