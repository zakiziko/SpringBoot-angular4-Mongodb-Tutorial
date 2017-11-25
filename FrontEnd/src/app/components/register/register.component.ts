import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username : String;
  email:String;
  password : String;
  constructor(private userService : UserService,private _route :Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      username : this.username,
      email: this.email,
      password : this.password
    }
    this.userService.register(user).subscribe(data=>{
      if(data=="GOOD"){
        this._route.navigate(['/login']);
      }else{
        alert("Email not available")
      }
    })
  }
}
