import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-hotelpage',
  templateUrl: './hotelpage.component.html',
  styleUrls: ['./hotelpage.component.css']
})
export class HotelpageComponent implements OnInit {


  hotel:any;


  constructor(private activatedRoute: ActivatedRoute ,private http: HttpClient) { }

  ngOnInit(): void {

  


   let id = this.activatedRoute.snapshot.paramMap.get("id");
   console.log(id)


   this.hotel = this.http.get("http://127.0.0.1:8000/hotel-detail/"+id+"/").subscribe(
    data => this.hotel = data

  )

  }

}




