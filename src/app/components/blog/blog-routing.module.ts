import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextEditorComponent } from './components/text-editor/text-editor.component';

const routes: Routes = [
  { path: '', component: TextEditorComponent }
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class BlogRoutingModule { }
