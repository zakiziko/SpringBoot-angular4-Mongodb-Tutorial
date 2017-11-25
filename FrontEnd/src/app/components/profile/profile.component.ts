import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  eventName :String;
  adress: String;
  description : String;
  user : any;
  collection : any;
  event : any;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem('user'));
    this.userService.UserEvente(this.user.id).subscribe(data=>{
      this.collection = data;
    });
  }
  OnSaveEvent(){
    const event = {
      name : this.eventName,
      adress : this.adress,
      description : this.description,
      cratedBy : this.user
    }
    this.userService.addEvent(event).subscribe(data=>{
      window.location.reload();
    })
  }

  onDelete(e){
    this.userService.deleteEvent(e.id).subscribe(data=>{
      window.location.reload();
    })
  }
  getItem(e){
    this.event = e;
  }
  OnUpdateEvent(){
    const event = {
      id :this.event.id,
      name : this.eventName,
      adress : this.adress,
      description : this.description,
      cratedBy : this.user
    }
    this.userService.updateEvent(event).subscribe(data=>{
      window.location.reload();
    })
  }

}
