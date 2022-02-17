import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  @Input() title: string | undefined = '';

  @Input() subtitle: string | undefined = '';

  @Input() donateButtonTxt: string | undefined = '';

  constructor() { }

  ngOnInit(): void {
  }

}
