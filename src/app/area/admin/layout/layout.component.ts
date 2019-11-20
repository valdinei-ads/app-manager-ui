import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  user_name: any;
  
  constructor() { }

  ngOnInit() {
    this.user_name =  localStorage.getItem('user_name');
  }

}
