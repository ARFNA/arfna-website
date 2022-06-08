import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './components/text-editor/text-editor.component';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { BlogRoutingModule } from './blog-routing.module';



@NgModule({
  declarations: [
    TextEditorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularEditorModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
