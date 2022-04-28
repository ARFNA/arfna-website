import { Component, OnInit } from '@angular/core';
import { FascadeService } from 'src/app/services/fascade.service';
import { HomeConstants } from 'src/app/components/home/constants/home.constants';

@Component({
  selector: 'app-mosaic-layout',
  templateUrl: './mosaic-layout.component.html',
  styleUrls: ['./mosaic-layout.component.scss']
})
export class MosaicLayoutComponent implements OnInit {

  /** Controls the column length during desktop/tablet/mobile view*/
  public colSpans: number = 2;

  /** Controls the of columns during desktop/tablet/mobile view*/
  public cols: number = 3;

  /** Controls height of columns */
  public rowHeight: string = "200px";

  public modal1: string = HomeConstants.MODAL_Q1;
  public head: string= 'head';
  public body: string= 'body';


  constructor(private fascadeService: FascadeService) { }

  ngOnInit(): void {

  }

  ngDoCheck(): void {
    if (window.screen.width <= 1000) {
      this.colSpans = 1;
      this.cols = 2;
      this.rowHeight = "80px";
    } else if (window.screen.width <= 1600) {
      this.colSpans = 2;
      this.cols = 3;
      this.rowHeight = "175px";
    } else {
      this.colSpans = 2;
      this.cols = 3;
      this.rowHeight = "200px";
    }
  }

  openModal(id: string) {
    this.fascadeService.open(id);
  }

  closeModal(id: string) {
    this.fascadeService.close(id);
  }


}
