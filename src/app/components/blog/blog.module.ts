import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
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



@NgModule({
  declarations: [
    TextEditorComponent,
    BlogPageComponent,
    BlogPostComponent,
    NewPostFormComponent
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
  ]
})
export class BlogModule { }
