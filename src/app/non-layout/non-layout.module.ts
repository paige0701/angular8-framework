import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {NonLayoutComponent} from './non-layout.component';
import {MainModule} from './main/main.module';

@NgModule({
  declarations: [
    NonLayoutComponent,
  ],
  imports: [
    MainModule,
    CommonModule
  ]
})
export class NonLayoutModule { }
