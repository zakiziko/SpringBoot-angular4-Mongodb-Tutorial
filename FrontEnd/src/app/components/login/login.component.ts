import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : String;
  password: String
  constructor(private userService : UserService,private _route :Router) { }

  ngOnInit() {
  }

  onloginSubmit(){
    const user = {
      email : this.email,
      password : this.password
    }
    this.userService.login(user).subscribe(data=>{
      if(data._body==""){
        alert("login or password in correct")
      }else{
        sessionStorage.setItem('user',JSON.stringify(data));
        this._route.navigate(['/profile']);
      }
    });
  }
}
