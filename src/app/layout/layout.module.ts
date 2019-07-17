import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from './layout.component';
import {RouterModule, Routes} from '@angular/router';
import {DashboardModule} from './dashboard/dashboard.module';
import {GnbComponent} from './gnb/gnb.component';
import {StatisticsModule} from './statistics/statistics.module';

const layoutRoutes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule ) },
      { path: 'statistics', loadChildren: () => import('./statistics/statistics.module').then(mod => mod.StatisticsModule ) },
    ]
  }
]

@NgModule({
  declarations: [LayoutComponent, GnbComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(layoutRoutes),
    StatisticsModule,
    DashboardModule,

  ]
})
export class LayoutModule { }
