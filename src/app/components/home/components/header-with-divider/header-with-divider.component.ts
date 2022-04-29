import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-with-divider',
  templateUrl: './header-with-divider.component.html',
  styleUrls: ['./header-with-divider.component.scss']
})
export class HeaderWithDividerComponent {

  @Input() section: string = '';

  constructor() { }

}
