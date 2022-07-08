import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  customer:any;

  constructor(private http:HttpClient ,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    let id = this.activatedRoute.snapshot.paramMap.get("id");
   console.log(id)

    this.customer = this.http.get("http://127.0.0.1:8000/customer/dashboard/"+id+"/").subscribe(
    data => this.customer = data
    )

  }

}
