import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login.component';
import {RouterModule, Routes} from '@angular/router';
import {ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "../_helpers";

export const loginRoutes: Routes = [
  {
    path: '', component: LoginComponent,

  },
];


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoutes)
  ]
})
export class LoginModule { }
