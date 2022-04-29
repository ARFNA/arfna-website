import { Component, Input } from '@angular/core';
import { FascadeService } from 'src/app/services/fascade.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent {

  @Input() title: string | undefined = '';

  @Input() subtitle: string | undefined = '';

  @Input() donateButtonTxt: string | undefined = '';

  constructor(private fascadeService: FascadeService) { }

  public goToDonate() {
    this.fascadeService.routeTo('/donate');
 }

}
