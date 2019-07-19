import { Component, OnInit } from '@angular/core';
import {DashboardService} from "./dashboard.service";
import {AuthenticationService} from "../_services";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService,
              private authenticationService: AuthenticationService,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {

    // this.userService.getOneUser(localStorage.getItem('USER_EMAIL')).subscribe((result) => {
    //   console.info('user --> ', this.userService.getLoggedInUser())
    //   alert('Welcome ' + result.data.email + '!')
    // })
  }

  onClickLogout() {
    this.authenticationService.logout().pipe(first())
      .subscribe(data => {
        this.router.navigate(['/login'])
        console.info('logout success ==> ', data)
      }, error => {
        console.warn('login fail ==> ', error)
      })
  }

}
