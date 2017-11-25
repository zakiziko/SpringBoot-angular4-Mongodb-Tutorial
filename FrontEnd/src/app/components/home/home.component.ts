import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  collection : any;
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.allEvents().subscribe(data=>{
      this.collection = data;
    });
  }
}
