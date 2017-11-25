import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private _http:Http) { }

  register(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this._http.post('http://localhost:8080/user/register',user,{headers:headers})
    .map(res=>res.text());
  }

  login(user){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this._http.get('http://localhost:8080/user/login/'+user.email+'/'+user.password,{headers:headers})
    .map(res => res.text() ? res.json() : res);
  }

  UserEvente(id){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this._http.get('http://localhost:8080/user/events/'+id,{headers:headers})
    .map(res => res.text() ? res.json() : res);

  }

  allEvents(){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this._http.get('http://localhost:8080/events',{headers:headers})
    .map(res => res.text() ? res.json() : res);
  }


  addEvent(event){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this._http.post('http://localhost:8080/evente/create',event,{headers:headers})
    .map(res => res.text() ? res.json() : res);
  }

  deleteEvent(id){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this._http.delete('http://localhost:8080/evente/'+id,{headers:headers});
  }
  updateEvent(event){
    let headers = new Headers();
    headers.append('Content-type','application/json');
    return this._http.put('http://localhost:8080/evente/Update',event,{headers:headers});
  }

  isLogedIn(){
    if(sessionStorage.getItem('user')){
      return true;
    }else{
      return false;
    }
  }
}
