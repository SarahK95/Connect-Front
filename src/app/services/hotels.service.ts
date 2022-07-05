import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  hotels = new BehaviorSubject<any>([]);


  constructor(private http:HttpClient) { }

  getAllHotels () {
    return this.http.get('http://127.0.0.1:8000/hotels/')
    .subscribe((response: any) =>{
      this.hotels.next(response.data);
    })
    console.log("kk")
  }


  getHotels () {
    return this.hotels.asObservable();
  }

}
