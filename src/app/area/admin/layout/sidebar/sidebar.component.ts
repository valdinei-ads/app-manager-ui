import { Component, OnInit } from '@angular/core';
import {MatSidenavContainer} from '@angular/material';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  user_name: any;
  
  constructor() {
    this.user_name =  localStorage.getItem('user_name');
   }

  

}
