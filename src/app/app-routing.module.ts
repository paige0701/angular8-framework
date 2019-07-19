import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from "./_helpers";

const routes: Routes = [

  { path: 'login',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule) },
  { path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( mod => mod.DashboardModule )},
  { path: 'statistics',
    loadChildren: () => import('./statistics/statistics.module').then( mod => mod.StatisticsModule )},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
