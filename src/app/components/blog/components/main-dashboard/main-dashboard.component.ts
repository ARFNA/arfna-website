import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Subscriber } from 'src/app/models/subscriber';
import { RSubscriber } from 'src/app/models/rsubscriber';
import { FascadeService } from 'src/app/services/fascade.service';
import { TermsOfService } from '../../constants/termsOfService.constants';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit, OnDestroy {

  public mobileQuery: MediaQueryList;

  public currentState: string = 'myPosts';

  public userLoggedIn: Subscriber = {};

  public termsOfService: string = TermsOfService.TERMS;

  public currentEditPost!: number | undefined;

  public userObservable: any;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    private fascadeService: FascadeService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.userObservable = this.fascadeService.getUserLoggedIn(new RSubscriber('V1', 'ALL')).subscribe(
      (response: any) => {
        if (response) {
          this.userLoggedIn = response.response.subscriber;
          console.log(this.userLoggedIn.acceptedTermsOfService);
          if (!this.userLoggedIn.acceptedTermsOfService) {
            this.openModal('TOS');
          }
        }
    },
    (error: any) => {
      this.fascadeService.routeTo('/404');
    });
  }

  ngOnDestroy(): void {
    this.userObservable.unsubscribe();
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public changeState(state: any, id?: number): void {
    if (typeof state === 'string') {
      this.currentState = state;
    }   
    this.currentEditPost = id;
  }

  public logout(): void {
    this.fascadeService.logout().subscribe(
      (response: any) => {
        window.location.href='/'
        this.fascadeService.routeTo('/');
    },
    (error: any) => {
      this.fascadeService.routeTo('/');
    });;
  }

  openModal(id: string) {
    this.fascadeService.open(id);
  }

  closeModal(id: string, confirm: boolean) {
    this.fascadeService.close(id);
    if (confirm) {
      this.fascadeService.acceptTerms().subscribe((data) => {
         this.userLoggedIn = data.response.subscriber;
      });
    }
  }

}
