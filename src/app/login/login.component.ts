import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [NavbarService ]
})
export class LoginComponent implements OnInit {

  login:any;
  userData:any;


  constructor(private userService: UserService, private router: Router, private http:HttpClient , private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.login = {
      username: '',
      password: '',
    }

    
  }


  loginUser(){

    this.userService.loginUser(this.login).subscribe(
      response => {
        alert('User  ' + this.login.username + ' has been logged in successfully!')
        this.router.navigate(["user-dashboard/"+this.login.user_id+"/"])
      },
      error => console.log('error', error)
    );
  
  }

}
