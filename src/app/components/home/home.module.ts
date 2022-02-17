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


@NgModule({
  declarations: [
    HomeComponent,
    JumbotronComponent,
    NewsletterFormComponent,
    TextSectionComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule
  ]
})
export class HomeModule { }
