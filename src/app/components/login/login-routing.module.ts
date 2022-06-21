import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupFormComponent } from './components/login-signup-form/login-signup-form.component';

const routes: Routes = [
  { path: '', component: LoginSignupFormComponent }
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class LoginRoutingModule { }
