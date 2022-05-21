import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginSignupFormComponent } from './components/login-signup-form/login-signup-form.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  declarations: [
    LoginSignupFormComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatTabsModule
  ]
})
export class LoginModule { }
