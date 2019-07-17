import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StatisticsComponent} from './statistics.component';
import {RouterModule, Routes} from '@angular/router';


const statisticsRoutes: Routes = [
  { path: '', component: StatisticsComponent },
];
@NgModule({
  declarations: [StatisticsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(statisticsRoutes)
  ]
})
export class StatisticsModule { }
