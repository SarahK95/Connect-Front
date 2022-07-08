import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  newUserRegister(userData: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/signup/customer/', userData);
}

loginUser(userData: any): Observable<any> {
  return this.http.post('http://127.0.0.1:8000/login/', userData);
}



}