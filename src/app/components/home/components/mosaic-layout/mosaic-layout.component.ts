import { Component, DoCheck, Input } from '@angular/core';
import { FascadeService } from 'src/app/services/fascade.service';

@Component({
  selector: 'app-mosaic-layout',
  templateUrl: './mosaic-layout.component.html',
  styleUrls: ['./mosaic-layout.component.scss']
})
export class MosaicLayoutComponent implements DoCheck {

  /** Controls the column length during desktop/tablet/mobile view*/
  public colSpans: number = 2;

  /** Controls the of columns during desktop/tablet/mobile view*/
  public cols: number = 3;

  /** Controls height of columns */
  public rowHeight: string = "200px";

  /** Inputs for content passed from parent component */

  @Input() public header1: string | undefined = '';
  @Input() public body1: string[] | undefined = [];
  @Input() public modal1: string | undefined = '';

  @Input() public header2: string | undefined = '';
  @Input() public body2: string[] | undefined = [];
  @Input() public modal2: string | undefined = '';

  @Input() public header3: string | undefined = '';
  @Input() public body3: string[] | undefined = [];
  @Input() public modal3: string | undefined = '';

  @Input() public header4: string | undefined = '';
  @Input() public body4: string[] | undefined = [];
  @Input() public modal4: string | undefined = '';

  constructor(private fascadeService: FascadeService) { }

  ngDoCheck(): void {
    if (this.getWidth() <= 1000) {
      this.colSpans = 1;
      this.cols = 2;
      this.rowHeight = "80px";
    } else if (this.getWidth() <= 1600) {
      this.colSpans = 2;
      this.cols = 3;
      this.rowHeight = "175px";
    } else {
      this.colSpans = 2;
      this.cols = 3;
      this.rowHeight = "200px";
    }
  }

  /** For testing purposes */
  getWidth(): number {
    return window.screen.width
  }

  openModal(id: string) {
    this.fascadeService.open(id);
  }

  closeModal(id: string) {
    this.fascadeService.close(id);
  }


}
