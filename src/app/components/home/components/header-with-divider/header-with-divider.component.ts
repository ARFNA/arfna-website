import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-with-divider',
  templateUrl: './header-with-divider.component.html',
  styleUrls: ['./header-with-divider.component.scss']
})
export class HeaderWithDividerComponent implements OnInit {

  @Input() section: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
