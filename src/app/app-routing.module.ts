import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    loadChildren: () => {
      return import("./components/home/home.module")
      .then((m) => {
        return m.HomeModule;
      });
    }, path: ""
  },
  {
    loadChildren: () => {
      return import("./components/login/login.module")
      .then((m) => {
        return m.LoginModule;
      });
    }, path: "login"
  },
  {
    loadChildren: () => {
      return import("./components/blog/blog.module")
      .then((m) => {
        return m.BlogModule;
      });
    }, path: "blog"
  },
  {
    path: "404",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: "404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
