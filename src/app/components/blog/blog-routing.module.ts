import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageSingularComponent } from './components/blog-page-singular/blog-page-singular.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';

const routes: Routes = [
  { path: '', component: BlogPageComponent},
  { path: 'dashboard', component: MainDashboardComponent },
  { path: ':id/:name', component: BlogPageSingularComponent }
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})

export class BlogRoutingModule { }
