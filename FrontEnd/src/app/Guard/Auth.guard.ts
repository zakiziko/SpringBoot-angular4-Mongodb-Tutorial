import { Injectable } from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {UserService} from '../services/user.service';
/*
AuthGuard service will protecte our routes with canActivate function 
*/ 


@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private userService : UserService,private _route : Router){}

    canActivate(){
        if(this.userService.isLogedIn()){
            return true;
        }else{
            this._route.navigate(['/login']);
            return false;
        }
    }
}