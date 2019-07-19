import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../_services";
import {first} from "rxjs/operators";
import {CookieService} from "../_services/cookie.service";
import {UserService} from "../_services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;

  @ViewChild('emailInput', {static: false})
  emailInput: ElementRef

  @ViewChild('passwordInput', {static: false})
  passwordInput: ElementRef


  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router,
              private userService: UserService,
              private cookieService: CookieService) {

  }

  ngOnInit() {

    // Login page is shown only when user is not logged in.
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/dashboard'])
      return;
    }

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  }

  onClickLogin() {

    this.authenticationService.login(this.emailInput.nativeElement.value, this.passwordInput.nativeElement.value)
      .pipe(first())
      .subscribe(data => {
        console.info('return url ---> ', this.returnUrl)
        localStorage.setItem('USER_EMAIL', this.emailInput.nativeElement.value)
        this.router.navigate(['/dashboard']);
        console.info('login success ==> ', data)
      }, error => {
        console.warn('login fail ==> ', error)

        alert('login failed')
      })
  }

}
