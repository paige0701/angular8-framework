import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedInUser;

  constructor(private http: HttpClient) { }

  public setLoggedInUser(user) {
    this.loggedInUser = user
  }

  public getLoggedInUser() {
    return this.loggedInUser
  }

  getOneUser(email: string) : Observable<any> {
    return this.http.get(`api/user/one/${email}`) as Observable<any>
  }
}
