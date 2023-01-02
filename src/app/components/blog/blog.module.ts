import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { NewPostFormComponent } from './components/new-post-form/new-post-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MainDashboardComponent } from './components/main-dashoboard/main-dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BlogPageComponent,
    BlogPostComponent,
    NewPostFormComponent,
    MainDashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularEditorModule,
    BlogRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
