import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{ path: '',         redirectTo: "/user/login", pathMatch: "full" },
  { path: '', loadChildren: () => import('./layout/layout.module').then( mod => mod.LayoutModule )},
  { path: 'user', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule) }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
