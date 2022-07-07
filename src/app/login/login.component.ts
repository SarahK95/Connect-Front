import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
// import { NavbarService } from '../navbar/navbar.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // providers: [NavbarService ]
})
export class LoginComponent implements OnInit {

  login:any;


  constructor(private userService: UserService, private router: Router,) { }

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
        this.router.navigate(["user-dashboard"])
      },
      error => console.log('error', error)
    );
  
  }
  

}
