import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  pullHello() : Observable<any>{
    return this.http.get('api/user/hello') as Observable<any>
  }
}
