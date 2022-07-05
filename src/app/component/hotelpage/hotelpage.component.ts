import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-hotelpage',
  templateUrl: './hotelpage.component.html',
  styleUrls: ['./hotelpage.component.css']
})
export class HotelpageComponent implements OnInit {

  hotel:any;
  hotelId:any;

  hotels:any;


  constructor(private activatedRoute: ActivatedRoute ,private http: HttpClient) { }

  ngOnInit(): void {

    this.hotels = this.http.get("http://127.0.0.1:8000/hotels/").subscribe(
     data => this.hotels = data
   )


   this.hotelId = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
