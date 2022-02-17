import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllergyComponent } from './components/allergy/allergy.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: HomeComponent },
  { path: 'contact', component: HomeComponent },
  { path: 'donate', component: HomeComponent },
  { path: 'allergy', component: AllergyComponent },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule { }
