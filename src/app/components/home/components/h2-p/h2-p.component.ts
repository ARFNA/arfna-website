import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-h2-p',
  templateUrl: './h2-p.component.html',
  styleUrls: ['./h2-p.component.scss']
})
export class H2PComponent implements OnInit {

  @Input() header: string = '';
  @Input() body: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
