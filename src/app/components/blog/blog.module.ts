import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { NewPostFormComponent } from './components/new-post-form/new-post-form.component';



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
    BlogRoutingModule
  ]
})
export class BlogModule { }
