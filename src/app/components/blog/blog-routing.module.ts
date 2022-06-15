import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './components/blog-page/blog-page.component';

const routes: Routes = [
  { path: '', component: BlogPageComponent }
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class BlogRoutingModule { }
