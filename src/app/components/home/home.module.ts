import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { NewsletterFormComponent } from './components/newsletter-form/newsletter-form.component';
import { TextSectionComponent } from './components/text-section/text-section.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AllergyComponent } from './components/allergy/allergy.component';
import { MatIconModule } from '@angular/material/icon';
import { MosaicLayoutComponent } from './components/mosaic-layout/mosaic-layout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DonateComponent } from './components/donate/donate.component';
import { H2PComponent } from './components/h2-p/h2-p.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListTextSectionComponent } from './components/list-text-section/list-text-section.component';
import { ContactUsFormComponent } from './components/contact-us-form/contact-us-form.component';


@NgModule({
  declarations: [
    HomeComponent,
    JumbotronComponent,
    NewsletterFormComponent,
    TextSectionComponent,
    AllergyComponent,
    MosaicLayoutComponent,
    AboutComponent,
    ContactComponent,
    DonateComponent,
    H2PComponent,
    CarouselComponent,
    ListTextSectionComponent,
    ContactUsFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatGridListModule
  ]
})
export class HomeModule { }
