import { Component, OnInit, ViewChild } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';

@Component({
  selector: 'app-mosaic-layout',
  templateUrl: './mosaic-layout.component.html',
  styleUrls: ['./mosaic-layout.component.scss']
})
export class MosaicLayoutComponent implements OnInit {

  public mobile: boolean = false;

  public cols: number = 4;

  @ViewChild('grid') public grid!: MatGridList;

  constructor() { }

  ngOnInit(): void {
    if (window.screen.width <= 800) { 
      this.mobile = true;
      this.cols = 3;
    } else {
      this.mobile = false;
      this.cols = 4;
    }
  }

  ngAfterViewInit() {
    this.grid.cols = this.cols;
  }

}
