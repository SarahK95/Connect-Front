import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class  RegisterComponent implements OnInit {
  register:any;

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit() {
    this.register = {
      username:'',
      email:'',
      password:'',
      password2:'',
    };
 
}

registerUser(){

  this.userService.newUserRegister(this.register).subscribe(
    response => {
      alert('User  ' + this.register.username + ' has been registered successfully!')
      this.router.navigate(["login"])
    },
    error => console.log('error', error)
  );

}



}