import { Component, OnDestroy, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  

  constructor(private http: HttpClient) { }

  hotels:any;

  ngOnInit(): void {

   this.hotels = this.http.get("http://127.0.0.1:8000/hotels/").subscribe(
     data => this.hotels = data
   )

  }



}
