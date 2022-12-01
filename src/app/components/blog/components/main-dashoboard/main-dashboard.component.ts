import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscriber } from 'src/app/models/subscriber';
import { RSubscriber } from 'src/app/models/rsubscriber';
import { FascadeService } from 'src/app/services/fascade.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  public mobileQuery: MediaQueryList;

  public currentState: string = '';

  public userLoggedIn: Subscriber = {};

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    private fascadeService: FascadeService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.fascadeService.getUserLoggedIn(new RSubscriber('V1', 'ALL')).subscribe(
      (response: any) => {
        this.userLoggedIn = response.response.subscriber;
    },
    (error: any) => {
      this.userLoggedIn = {};
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public changeState(state: string): void {
    this.currentState = state;
  }

}
