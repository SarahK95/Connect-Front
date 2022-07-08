import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  newUserRegister(userData: any): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/new-booking/', userData);
}
}
