import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { MainDashboardComponent } from './components/main-dashoboard/main-dashboard.component';

const routes: Routes = [
  { path: '', component: BlogPageComponent },
  { path: 'dashboard', component: MainDashboardComponent }
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class BlogRoutingModule { }
